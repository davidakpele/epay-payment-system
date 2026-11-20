param(
    [switch]$SkipBuild,
    [switch]$SkipCluster,
    [switch]$Down
)

$Root = Split-Path $PSScriptRoot -Parent
$ClusterName = "local-dev"

function Write-Step($msg) {
    Write-Host ""param(
    [switch]$SkipBuild,
    [switch]$SkipCluster,
    [switch]$Down
)

$Root = Split-Path $PSScriptRoot -Parent
$ClusterName = "local-dev"

function Write-Step($msg) {
    Write-Host ""
    Write-Host "===> $msg" -ForegroundColor Cyan
}

function Write-Ok($msg) {
    Write-Host "  OK  $msg" -ForegroundColor Green
}

function Write-Fail($msg) {
    Write-Host "  FAIL  $msg" -ForegroundColor Red
    exit 1
}

if ($Down) {
    Write-Step "Tearing down the epay namespace"
    kubectl delete namespace epay --ignore-not-found
    Write-Ok "Done. All pods, services and PVCs removed."
    exit 0
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Yellow
Write-Host "  ePay Kubernetes Deploy" -ForegroundColor Yellow
Write-Host "============================================" -ForegroundColor Yellow

Write-Step "Checking prerequisites"

if (-not (Get-Command docker  -ErrorAction SilentlyContinue)) { Write-Fail "Docker not found. Open Docker Desktop first." }
if (-not (Get-Command kind    -ErrorAction SilentlyContinue)) { Write-Fail "kind not found. Run: winget install Kubernetes.kind" }
if (-not (Get-Command kubectl -ErrorAction SilentlyContinue)) { Write-Fail "kubectl not found. Run: winget install Kubernetes.kubectl" }

docker info 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) { Write-Fail "Docker Desktop is not running. Please open it and try again." }

Write-Ok "Docker, kind, kubectl all present"

# ---------------------------------------------------------------- cluster
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
    Write-Ok "Skipping cluster setup (--SkipCluster)"
}

& kubectl config use-context "kind-$ClusterName" | Out-Null

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
    Write-Ok "Skipping build (--SkipBuild)"
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
Write-Step "Deploying to Kubernetes"
& kubectl apply -f "$PSScriptRoot\base\" --validate=false
if ($LASTEXITCODE -ne 0) { Write-Fail "kubectl apply failed (base)" }
& kubectl apply -f "$PSScriptRoot\monitoring\" --validate=false
if ($LASTEXITCODE -ne 0) { Write-Fail "kubectl apply failed (monitoring)" }
Write-Ok "All manifests applied"

Write-Step "Waiting for pods to be ready"
Write-Host "  This takes 3-5 minutes on first run. Press Ctrl+C to stop watching." -ForegroundColor Gray
Write-Host ""
& kubectl get pods -n epay -w

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "  ePay is running on Kubernetes" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "  App       ->  http://localhost" -ForegroundColor White
Write-Host "  Swagger   ->  http://localhost/docs" -ForegroundColor White
Write-Host "  Grafana   ->  http://localhost:3010  (admin / admin)" -ForegroundColor White
Write-Host "  Prometheus->  http://localhost:9090" -ForegroundColor White
Write-Host "  Alertmgr  ->  http://localhost:9093" -ForegroundColor White
Write-Host ""
    Write-Host "===> $msg" -ForegroundColor Cyan
}

function Write-Ok($msg) {
    Write-Host "  OK  $msg" -ForegroundColor Green
}

function Write-Fail($msg) {
    Write-Host "  FAIL  $msg" -ForegroundColor Red
    exit 1
}

function Invoke-Cmd {
    param([string]$Desc, [scriptblock]$Cmd)
    & $Cmd
    if ($LASTEXITCODE -ne 0) { Write-Fail $Desc }
}

if ($Down) {
    Write-Step "Tearing down the epay namespace"
    kubectl delete namespace epay --ignore-not-found
    Write-Ok "Done. All pods, services and PVCs removed."
    exit 0
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Yellow
Write-Host "  ePay Kubernetes Deploy" -ForegroundColor Yellow
Write-Host "============================================" -ForegroundColor Yellow

Write-Step "Checking prerequisites"

if (-not (Get-Command docker  -ErrorAction SilentlyContinue)) { Write-Fail "Docker not found. Open Docker Desktop first." }
if (-not (Get-Command kind    -ErrorAction SilentlyContinue)) { Write-Fail "kind not found. Run: winget install Kubernetes.kind" }
if (-not (Get-Command kubectl -ErrorAction SilentlyContinue)) { Write-Fail "kubectl not found. Run: winget install Kubernetes.kubectl" }

docker info 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) { Write-Fail "Docker Desktop is not running. Please open it and try again." }

Write-Ok "Docker, kind, kubectl all present"


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
    Write-Ok "Skipping cluster setup (--SkipCluster)"
}

& kubectl config use-context "kind-$ClusterName" | Out-Null

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
    Write-Ok "Skipping build (--SkipBuild)"
}

# Always load: a (re)created cluster has none of the local images
Write-Step "Loading images into kind"
foreach ($img in $images) {
    & docker image inspect $img.Tag *> $null
    if ($LASTEXITCODE -ne 0) { Write-Fail "$($img.Tag) not found on host. Run without -SkipBuild." }
    Write-Host "  Loading $($img.Tag)..." -ForegroundColor Gray
    & kind load docker-image $img.Tag --name $ClusterName
    if ($LASTEXITCODE -ne 0) { Write-Fail "Failed to load $($img.Tag)" }
    Write-Ok $img.Tag
}