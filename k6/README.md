# k6 Load Tests

Performance and load tests for the epay API using [k6](https://k6.io).

## Install k6

```bash
# macOS
brew install k6

# Linux (Debian/Ubuntu)
sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg \
  --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" \
  | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update && sudo apt-get install k6

# Windows (winget)
winget install k6 --source winget
```

## Test files

| File | Purpose | When to run |
|---|---|---|
| `smoke.js` | 1 VU, verify API is alive | Every CI push |
| `load.js` | 50 VUs, realistic steady load | Before every release |
| `stress.js` | Up to 150 VUs, find breaking point | Weekly / pre-launch |
| `spike.js` | 200 VU burst, recovery check | Pre-launch / major events |

## Running tests

```bash
# Smoke (fastest — runs in CI)
k6 run k6/smoke.js

# Load against local stack
k6 run k6/load.js

# Load against staging
k6 run -e BASE_URL=https://staging-api.epay.com \
       -e TEST_USER_EMAIL=loadtest@epay.test \
       -e TEST_USER_PASS=LoadTest@123 \
       k6/load.js

# Stress (never run against production)
k6 run -e BASE_URL=https://staging-api.epay.com k6/stress.js

# Output results to JSON for dashboarding
k6 run --out json=k6-results.json k6/load.js
```

## Grafana dashboard

k6 can stream metrics directly to the Grafana + InfluxDB stack:

```bash
k6 run --out influxdb=http://localhost:8086/k6 k6/load.js
```

Import the official k6 dashboard (ID **2587**) in Grafana to visualise results in real time.

## CI integration

The smoke test runs automatically in the GitHub Actions security-scan workflow and in Jenkins.  Load / stress tests are gated behind the `RUN_LOAD_TESTS` parameter to avoid running them on every push.
