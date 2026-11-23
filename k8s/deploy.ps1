param(
    [switch]$SkipBuild,
    [switch]$SkipCluster,
    [switch]$Down,
    [switch]$Clean
)

# Usage (from D:\ACBS\epay-app):
#   .\k8s\deploy.ps1                       build + deploy (keeps existing cluster and data)
#   .\k8s\deploy.ps1 -Clean                delete the cluster, then full rebuild (wipes ALL data)
#   .\k8s\deploy.ps1 -Clean -SkipBuild     full rebuild, reuse images already built
#   .\k8s\deploy.ps1 -SkipBuild            redeploy without rebuilding images
#   .\k8s\deploy.ps1 -Down                 stop the app (deletes the epay namespace, keeps the cluster)
#   .\k8s\deploy.ps1 -SkipCluster -SkipBuild   start the app again after -Down

$Root = Split-Path $PSScriptRoot -Parent
$ClusterName = "local-dev"
$env:DOCKER_BUILDKIT = "1"

function Write-Step($msg) {
    Write-Host ""
    Write-Host "===> $msg" -ForegroundColor Cyan
}

function Write-Ok($msg) {
    Write-Host "  OK  $msg" -ForegroundColor Green
}

function Write-Warn($msg) {
    Write-Host "  WARN  $msg" -ForegroundColor Yellow
}

function Write-Fail($msg) {
    Write-Host "  FAIL  $msg" -ForegroundColor Red
    exit 1
}

# ------------------------------------------------------------------- down
if ($Down) {
    Write-Step "Tearing down the epay namespace"
    kubectl delete namespace epay --ignore-not-found
    Write-Ok "Done. ePay pods, services and PVCs removed. Headlamp remains in kube-system."
    exit 0
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Yellow
Write-Host "  ePay Kubernetes Deploy" -ForegroundColor Yellow
Write-Host "============================================" -ForegroundColor Yellow

# ---------------------------------------------------------- prerequisites
Write-Step "Checking prerequisites"

if (-not (Get-Command docker  -ErrorAction SilentlyContinue)) { Write-Fail "Docker not found. Open Docker Desktop first." }
if (-not (Get-Command kind    -ErrorAction SilentlyContinue)) { Write-Fail "kind not found. Run: winget install Kubernetes.kind" }
if (-not (Get-Command kubectl -ErrorAction SilentlyContinue)) { Write-Fail "kubectl not found. Run: winget install Kubernetes.kubectl" }
if (-not (Get-Command helm    -ErrorAction SilentlyContinue)) { Write-Fail "Helm not found. Run: winget install Helm.Helm" }

docker info 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) { Write-Fail "Docker Desktop is not running. Please open it and try again." }

Write-Ok "Docker, kind, kubectl, Helm all present"

# ---------------------------------------------------------------- cluster
if ($Clean) {
    Write-Step "Clean rebuild: deleting cluster $ClusterName (all data will be lost)"
    & kind delete cluster --name $ClusterName
    $SkipCluster = $false
}

if (-not $SkipCluster) {
    Write-Step "Setting up kind cluster ($ClusterName)"

    $clusterList = & kind get clusters 2>&1
    $clusterExists = ($clusterList | Where-Object { $_ -eq $ClusterName }).Count -gt 0

    if ($clusterExists) {
        Write-Host "  Cluster exists. Checking port mappings..." -ForegroundColor Gray
        $ports = (& docker port "$ClusterName-control-plane" 2>&1) -join "`n"
        $hasPortMapping = $ports -match "30080/tcp"

        if (-not $hasPortMapping) {
            Write-Host "  No port mappings found. Recreating cluster..." -ForegroundColor Yellow
            & kind delete cluster --name $ClusterName
            & kind create cluster --config "$PSScriptRoot\kind-config.yaml"
            if ($LASTEXITCODE -ne 0) { Write-Fail "Failed to create cluster" }
            Write-Ok "Cluster recreated with port mappings"
        } else {
            Write-Ok "Cluster already running with port mappings"
        }
    } else {
        Write-Host "  No cluster found. Creating..." -ForegroundColor Yellow
        & kind create cluster --config "$PSScriptRoot\kind-config.yaml"
        if ($LASTEXITCODE -ne 0) { Write-Fail "Failed to create cluster" }
        Write-Ok "Cluster created"
    }
} else {
    Write-Ok "Skipping cluster setup (-SkipCluster)"
}

if ($SkipCluster) {
    $existingClusters = & kind get clusters 2>&1
    if ($LASTEXITCODE -ne 0) { Write-Fail "Could not check the existing kind clusters" }
    if ($existingClusters -notcontains $ClusterName) {
        Write-Fail "Cluster '$ClusterName' does not exist. Run without -SkipCluster to create it."
    }
}

& kubectl config use-context "kind-$ClusterName" | Out-Null
if ($LASTEXITCODE -ne 0) { Write-Fail "Kubernetes context 'kind-$ClusterName' is unavailable." }

# ----------------------------------------------------------------- images
$images = @(
    @{ Tag = "epay-server:latest";     Context = "$Root\epay" },
    @{ Tag = "epay-frontend:latest";   Context = "$Root\frontend" },
    @{ Tag = "epay-nginx:latest";      Context = "$Root\nginx" },
    @{ Tag = "epay-prometheus:latest"; Context = "$Root\epay\monitoring\prometheus" },
    @{ Tag = "epay-grafana:latest";    Context = "$Root\epay\monitoring\grafana" },
    @{ Tag = "epay-loki:latest";       Context = "$Root\epay\monitoring\loki" }
)

if (-not $SkipBuild) {
    Write-Step "Building Spring Boot backend JAR"
    Push-Location "$Root\epay"
    & "./mvnw" -B package -DskipTests
    if ($LASTEXITCODE -ne 0) { Pop-Location; Write-Fail "Maven build failed" }
    Pop-Location
    Write-Ok "JAR built"

    Write-Step "Building Docker images"
    foreach ($img in $images) {
        Write-Host "  Building $($img.Tag)..." -ForegroundColor Gray
        & docker build -t $img.Tag $img.Context
        if ($LASTEXITCODE -ne 0) { Write-Fail "Failed to build $($img.Tag)" }
        Write-Ok $img.Tag
    }
} else {
    Write-Ok "Skipping build (-SkipBuild)"
}

# Always load: a (re)created cluster has none of the local images.
# With -SkipBuild, skip images the node already has.
Write-Step "Loading images into kind"
$nodeImages = (& docker exec "$ClusterName-control-plane" crictl images 2>&1) -join "`n"

foreach ($img in $images) {
    $repo = $img.Tag.Split(":")[0]

    if ($SkipBuild -and ($nodeImages -match "/$repo\s+latest")) {
        Write-Ok "$($img.Tag) already on node, skipping"
        continue
    }

    & docker image inspect $img.Tag *> $null
    if ($LASTEXITCODE -ne 0) { Write-Fail "$($img.Tag) not found on host. Run without -SkipBuild." }

    Write-Host "  Loading $($img.Tag)..." -ForegroundColor Gray
    & kind load docker-image $img.Tag --name $ClusterName
    if ($LASTEXITCODE -ne 0) { Write-Fail "Failed to load $($img.Tag)" }
    Write-Ok $img.Tag
}

# ----------------------------------------------------------------- deploy
Write-Step "Deploying base manifests (postgres, redis, kafka, app, nginx)"
& kubectl apply -f "$PSScriptRoot\base\" --validate=false
if ($LASTEXITCODE -ne 0) { Write-Fail "kubectl apply failed (base)" }
Write-Ok "Base manifests applied"

# Grafana dashboards are not baked into the image (Docker Compose bind-mounted them),
# so ship them as a ConfigMap and mount it into the Grafana pod.
Write-Step "Creating Grafana dashboards ConfigMap"
$dashDir = "$Root\epay\monitoring\grafana\dashboards"
if (Test-Path $dashDir) {
    $dashBytes = (Get-ChildItem $dashDir -File | Measure-Object -Property Length -Sum).Sum
    if ($dashBytes -gt 900000) { Write-Warn "Dashboards total $dashBytes bytes; ConfigMaps are limited to ~1 MB" }

    & kubectl -n epay delete configmap grafana-dashboards --ignore-not-found | Out-Null
    & kubectl -n epay create configmap grafana-dashboards --from-file="$dashDir"
    if ($LASTEXITCODE -ne 0) { Write-Fail "Failed to create grafana-dashboards ConfigMap" }
    Write-Ok "grafana-dashboards ConfigMap created"
} else {
    Write-Warn "Dashboards folder not found: $dashDir (Grafana will be empty)"
}

Write-Step "Deploying monitoring (prometheus, grafana, loki, alertmanager, exporters)"
& kubectl apply -f "$PSScriptRoot\monitoring\" --validate=false
if ($LASTEXITCODE -ne 0) { Write-Fail "kubectl apply failed (monitoring)" }
Write-Ok "Monitoring manifests applied"

Write-Step "Deploying Headlamp Kubernetes UI"
& helm repo add headlamp https://kubernetes-sigs.github.io/headlamp/ --force-update | Out-Null
if ($LASTEXITCODE -ne 0) { Write-Fail "Failed to add the Headlamp Helm repository" }
& helm repo update headlamp | Out-Null
if ($LASTEXITCODE -ne 0) { Write-Fail "Failed to update the Headlamp Helm repository" }
& helm upgrade --install headlamp headlamp/headlamp --version 0.46.0 --namespace kube-system --set clusterRoleBinding.clusterRoleName=view --wait --timeout 15m
if ($LASTEXITCODE -ne 0) { Write-Fail "Headlamp installation failed" }
& kubectl apply -f "$PSScriptRoot\headlamp-rbac.yaml" --validate=false
if ($LASTEXITCODE -ne 0) { Write-Fail "Headlamp read-only permissions could not be applied" }
Write-Ok "Headlamp installed with read-only access to cluster resources"

# Mount the dashboards ConfigMap into the Grafana deployment (idempotent)
$patchFile = Join-Path $env:TEMP "grafana-dashboards-patch.yaml"
@"
spec:
  template:
    spec:
      containers:
        - name: grafana
          volumeMounts:
            - name: dashboards
              mountPath: /var/lib/grafana/dashboards
      volumes:
        - name: dashboards
          configMap:
            name: grafana-dashboards
"@ | Set-Content -Path $patchFile -Encoding ascii

& kubectl -n epay patch deployment grafana --patch-file $patchFile | Out-Null
if ($LASTEXITCODE -ne 0) { Write-Warn "Could not mount dashboards into Grafana (check the container name in 03-grafana.yaml)" }
else { Write-Ok "Dashboards mounted into Grafana" }

# ------------------------------------------------------------------- wait
Write-Step "Waiting for pods to be ready"
Write-Host "  This takes 5-10 minutes on a fresh cluster (epay-server alone needs ~2 min)." -ForegroundColor Gray
Start-Sleep -Seconds 10
& kubectl wait --for=condition=Ready pod --all -n epay --timeout=900s
$waitFailed = ($LASTEXITCODE -ne 0)

Write-Host ""
& kubectl get pods -n epay

if ($waitFailed) {
    Write-Host ""
    Write-Host "  Some pods are not ready. Debug with:" -ForegroundColor Yellow
    Write-Host "    kubectl -n epay get pods" -ForegroundColor Gray
    Write-Host "    kubectl -n epay describe pod <pod-name>" -ForegroundColor Gray
    Write-Host "    kubectl -n epay logs <pod-name> --tail=50" -ForegroundColor Gray
    exit 1
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "  ePay is running on Kubernetes" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "  App        ->  http://localhost" -ForegroundColor White
Write-Host "  Swagger    ->  http://localhost/docs" -ForegroundColor White
Write-Host "  Grafana    ->  http://localhost:3010  (admin / admin)" -ForegroundColor White
Write-Host "  Prometheus ->  http://localhost:9090  (targets: /targets)" -ForegroundColor White
Write-Host "  Alertmgr   ->  http://localhost:9093" -ForegroundColor White
Write-Host "  Headlamp   ->  http://localhost:8001  (run: kubectl -n kube-system port-forward svc/headlamp 8001:80)" -ForegroundColor White
Write-Host ""