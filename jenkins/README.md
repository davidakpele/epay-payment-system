# Jenkins CI/CD Setup

This guide explains how to connect Jenkins to the epay-app repository and run the declarative pipeline defined in `Jenkinsfile`.

---

## Required Jenkins Plugins

Install these from **Manage Jenkins → Plugins → Available**:

| Plugin | Purpose |
|---|---|
| Pipeline | Core declarative pipeline support |
| Git | SCM checkout |
| GitHub Branch Source | Multibranch pipeline auto-discovery |
| Docker Pipeline | `docker.build`, `docker.push` DSL |
| Credentials Binding | `withCredentials` step |
| SSH Agent | `sshagent` step for deploy |
| NodeJS | `tools { nodejs }` support |
| JUnit | Test result publishing |
| HTML Publisher | OWASP report HTML publishing |
| Warnings Next Generation | Static analysis trend charts |

---

## Tool Configuration

**Manage Jenkins → Tools**

### JDK
- Click **Add JDK**
- Name: `JDK21`
- Install automatically: ✅ Eclipse Temurin 21 (latest)

### Node.js
- Click **Add NodeJS**
- Name: `Node24`
- Version: `24.11.1`

---

## Credentials

**Manage Jenkins → Credentials → System → Global → Add Credentials**

| ID | Kind | Description |
|---|---|---|
| `GHCR_USERNAME` | Secret text | GitHub username or org name |
| `GHCR_TOKEN` | Secret text | GitHub PAT with `packages:write` scope |
| `NVD_API_KEY` | Secret text | NVD API key (get free key at nvd.nist.gov) |
| `DEPLOY_SSH_KEY` | SSH Username with private key | Production server SSH key (add when hosting) |
| `DEPLOY_HOST` | Secret text | Production server IP / hostname |
| `DEPLOY_USER` | Secret text | SSH user on production server |

> `DEPLOY_*` credentials can be left uncreated until you're ready to deploy. The deploy stage is commented out in the Jenkinsfile.

---

## Creating the Pipeline Job

### Option A — Multibranch Pipeline (recommended)

1. **New Item** → name it `epay-app` → select **Multibranch Pipeline**
2. **Branch Sources** → Add source → **GitHub**
   - Credentials: add a GitHub credential with repo read access
   - Repository HTTPS URL: `https://github.com/<owner>/epay-payment-system`
3. **Behaviours**: keep defaults (discover branches + PRs)
4. **Build Configuration** → Mode: `by Jenkinsfile` → Script Path: `Jenkinsfile`
5. **Scan Multibranch Pipeline Triggers** → check **Periodically if not otherwise run** → 1 minute
6. Save → **Scan Multibranch Pipeline Now**

Jenkins will auto-create jobs for `main`, `develop`, and any open PRs.

### Option B — Single Pipeline Job

1. **New Item** → select **Pipeline**
2. **Pipeline** section → Definition: `Pipeline script from SCM`
   - SCM: Git
   - Repository URL: your repo URL
   - Script Path: `Jenkinsfile`
3. **Build Triggers**: check **GitHub hook trigger for GITScm polling**

---

## GitHub Webhook (optional but recommended)

Webhooks replace SCM polling for instant build triggers.

1. In GitHub: **Settings → Webhooks → Add webhook**
2. Payload URL: `http://<jenkins-host>/github-webhook/`
3. Content type: `application/json`
4. Events: **Just the push event** + **Pull requests**

---

## Pipeline Stages Overview

```
Initialise
    ↓
Backend — Build & Test          (mvnw clean package, JUnit results)
    ↓
Backend — Docker Build & Push   (skipped on PRs)
    ↓
Frontend — Lint & Type Check    (eslint, tsc --noEmit)
    ↓
Frontend — Build                (next build)
    ↓
Frontend — Docker Build & Push  (skipped on PRs)
    ↓
Security — OWASP Dependency Check   (skipped with SKIP_SECURITY_SCAN=true)
Security — npm Audit
Security — Trivy Image Scan
    ↓
Deploy — Production             (main branch only, SSH steps commented out)
```

---

## Enabling Deployment

When the app is hosted:

1. Add the `DEPLOY_SSH_KEY`, `DEPLOY_HOST`, `DEPLOY_USER` credentials in Jenkins.
2. Open `Jenkinsfile` and uncomment the `/* ... */` block inside the **Deploy — Production** stage.
3. Remove the `echo` placeholder above it.
4. Set `PRODUCTION_URL` as a Jenkins environment variable or pipeline parameter for the health check.

---

## Docker Requirements on Jenkins Agent

The Jenkins agent running this pipeline needs:

- `docker` CLI installed and the `jenkins` user added to the `docker` group
- Internet access to pull base images and push to GHCR
- At least 4 GB free disk space for image layers

```bash
# On the Jenkins agent host
sudo usermod -aG docker jenkins
sudo systemctl restart jenkins
```

---

## Artifact Retention

| Artifact | Location | Retention |
|---|---|---|
| `epay-server.jar` | `epay/main/target/` | Last 5 builds |
| JUnit XML reports | `epay/**/surefire-reports/` | Last 20 builds |
| OWASP HTML report | `epay/main/target/dependency-check-report.html` | Last 20 builds |
| npm audit JSON | `frontend/npm-audit-report.json` | Last 20 builds |
| Trivy SARIF files | `trivy-*.sarif` (workspace root) | Last 20 builds |
