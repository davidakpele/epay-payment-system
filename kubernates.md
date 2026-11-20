# ePay — Kubernetes Local Deployment Guide

## What Was Installed

```
winget install Kubernetes.kind   # kind v0.33.0
winget install Kubernetes.kubectl # kubectl v1.37.2
```

---

## Cluster Setup

Your existing cluster was created **without** port mappings, so browsers cannot reach the NodePort services directly. You need to recreate it using the provided config file.

### Step 1 — Delete the existing cluster

```powershell
kind delete cluster --name local-dev
```

### Step 2 — Recreate with port mappings

```powershell
kind create cluster --config k8s/kind-config.yaml
```

This maps the following NodePorts to your Windows localhost:

| Service       | NodePort | Host Port | URL                   |
| ------------- | -------- | --------- | --------------------- |
| App (nginx)   | 30080    | 80        | http://localhost      |
| Nginx metrics | 30880    | 8080      | http://localhost:8080 |
| Prometheus    | 30090    | 9090      | http://localhost:9090 |
| Grafana       | 30300    | 3010      | http://localhost:3010 |
| Alertmanager  | 30093    | 9093      | http://localhost:9093 |

### Step 3 — Verify the cluster

```powershell
kubectl cluster-info --context kind-local-dev
kubectl get nodes
```

---

## Build the Docker Images

The kind cluster cannot pull images from Docker Hub for your custom services — they must be built locally and loaded into the cluster.

### Build all images

Run from the workspace root (`d:\ACBS\epay-app`):

```powershell
# Build the Spring Boot backend (requires the fat JAR to exist first)
cd epay
./mvnw -B package -DskipTests
cd ..
docker build -t epay-server:latest ./epay

# Build the Next.js frontend
docker build -t epay-frontend:latest ./frontend

# Build nginx
docker build -t epay-nginx:latest ./nginx

# Build monitoring images
docker build -t epay-prometheus:latest ./epay/monitoring/prometheus
docker build -t epay-grafana:latest    ./epay/monitoring/grafana
docker build -t epay-loki:latest       ./epay/monitoring/loki
docker build -t epay-promtail:latest   ./epay/monitoring/promtail
```

### Load images into kind

```powershell
kind load docker-image epay-server:latest    --name local-dev
kind load docker-image epay-frontend:latest  --name local-dev
kind load docker-image epay-nginx:latest     --name local-dev
kind load docker-image epay-prometheus:latest --name local-dev
kind load docker-image epay-grafana:latest   --name local-dev
kind load docker-image epay-loki:latest      --name local-dev
kind load docker-image epay-promtail:latest  --name local-dev
```

Third-party images (postgres, redis, kafka, etc.) are pulled automatically — no loading needed.

---

## Deploy

### Deploy core infrastructure and application

```powershell
kubectl apply -f k8s/base/
```

This applies all files in order (00 → 11):

| File                  | What it creates                             |
| --------------------- | ------------------------------------------- |
| `00-namespace.yaml`   | `epay` namespace                            |
| `01-secrets.yaml`     | DB, JWT, Paystack, Gmail, admin credentials |
| `02-configmaps.yaml`  | App env vars, nginx config                  |
| `03-pvcs.yaml`        | All persistent volume claims                |
| `04-postgres.yaml`    | PostgreSQL StatefulSet + headless Service   |
| `05-redis.yaml`       | Redis StatefulSet + headless Service        |
| `06-zookeeper.yaml`   | Zookeeper StatefulSet + headless Service    |
| `07-kafka.yaml`       | Kafka StatefulSet + headless Service        |
| `08-zipkin.yaml`      | Zipkin Deployment + Service                 |
| `09-epay-server.yaml` | Spring Boot backend Deployment + Service    |
| `10-frontend.yaml`    | Next.js frontend Deployment + Service       |
| `11-nginx.yaml`       | Nginx Deployment + NodePort Service         |

### Deploy monitoring stack

```powershell
kubectl apply -f k8s/monitoring/
```

---

## Watch Startup Progress

Infrastructure takes time to become ready. Watch pods come up:

```powershell
kubectl get pods -n epay -w
```

Expected startup order and approximate wait times:

1. `postgres` — ~30s
2. `redis` — ~15s
3. `zookeeper` — ~30s
4. `kafka` — ~60s (waits for zookeeper)
5. `zipkin` — ~15s
6. `epay-server` — ~2–3 min (waits for postgres, redis, kafka)
7. `frontend` — ~30s (waits for epay-server)
8. `nginx` — ~10s (waits for frontend and backend)
9. Monitoring services — ~30s each

---

## Verify Everything is Running

```powershell
# All pods should show Running / 1/1 Ready
kubectl get pods -n epay

# All services
kubectl get svc -n epay

# Check backend health
kubectl port-forward -n epay svc/epay-server 8029:8029
# Then visit: http://localhost:8029/actuator/health
```

---

## Access the Application

Once all pods are `Running`:

| What            | URL                                   |
| --------------- | ------------------------------------- |
| App (via nginx) | http://localhost                      |
| Swagger UI      | http://localhost/docs                 |
| Grafana         | http://localhost:3010 — admin / admin |
| Prometheus      | http://localhost:9090                 |
| Alertmanager    | http://localhost:9093                 |

---

## Secrets That Need Real Values

The following secrets in `k8s/base/01-secrets.yaml` are either empty or use development defaults. Set them before deploying to any non-local environment:

| Secret key             | How to set                                                                                                     |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| `jwt-secret`           | Generate with: `[Convert]::ToBase64String([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(64))` |
| `super-admin-password` | Change from `ChangeMe@2026!`                                                                                   |
| Flutterwave keys       | Add to `epay-app-secret` in `01-secrets.yaml`                                                                  |
| Twilio credentials     | Add to `epay-app-secret` in `01-secrets.yaml`                                                                  |
| `anthropic-api-key`    | Add to `epay-app-secret` in `01-secrets.yaml`                                                                  |

To update a secret after deployment:

```powershell
kubectl create secret generic epay-app-secret `
  --from-literal=jwt-secret="YOUR_NEW_SECRET" `
  --namespace=epay `
  --dry-run=client -o yaml | kubectl apply -f -

kubectl rollout restart deployment/epay-server -n epay
```

---

## Useful Commands

```powershell
# View logs for a pod
kubectl logs -n epay deployment/epay-server -f
kubectl logs -n epay deployment/frontend -f
kubectl logs -n epay deployment/nginx -f

# Describe a pod (events, resource limits, probe status)
kubectl describe pod -n epay -l app=epay-server

# Shell into a running container
kubectl exec -it -n epay deployment/epay-server -- /bin/sh

# Restart a deployment (e.g. after updating a secret or config)
kubectl rollout restart deployment/epay-server -n epay
kubectl rollout restart deployment/frontend -n epay

# Scale the backend
kubectl scale deployment/epay-server --replicas=3 -n epay

# Delete everything and start fresh
kubectl delete namespace epay
kubectl apply -f k8s/base/
kubectl apply -f k8s/monitoring/
```

---

## Rebuild and Redeploy a Single Service

After changing backend code:

```powershell
cd epay
./mvnw -B package -DskipTests
cd ..
docker build -t epay-server:latest ./epay
kind load docker-image epay-server:latest --name local-dev
kubectl rollout restart deployment/epay-server -n epay
```

After changing frontend code:

```powershell
docker build -t epay-frontend:latest ./frontend
kind load docker-image epay-frontend:latest --name local-dev
kubectl rollout restart deployment/frontend -n epay
```

---

## File Structure

```
k8s/
├── kind-config.yaml          # kind cluster definition with port mappings
├── base/
│   ├── 00-namespace.yaml
│   ├── 01-secrets.yaml
│   ├── 02-configmaps.yaml
│   ├── 03-pvcs.yaml
│   ├── 04-postgres.yaml
│   ├── 05-redis.yaml
│   ├── 06-zookeeper.yaml
│   ├── 07-kafka.yaml
│   ├── 08-zipkin.yaml
│   ├── 09-epay-server.yaml
│   ├── 10-frontend.yaml
│   └── 11-nginx.yaml
└── monitoring/
    ├── 01-monitoring-configs.yaml
    ├── 02-prometheus.yaml
    ├── 03-grafana.yaml
    ├── 04-loki.yaml
    └── 05-alertmanager.yaml
```
