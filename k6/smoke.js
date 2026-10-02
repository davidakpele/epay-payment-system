/**
 * k6 Smoke Test — epay API
 *
 * Purpose : Verify the API is alive and core endpoints respond correctly
 *           with minimal load (1 VU, 1 iteration).
 *
 * Run:
 *   k6 run k6/smoke.js
 *   k6 run -e BASE_URL=https://api.epay.com k6/smoke.js
 */

import http from 'k6/http'
import { check, sleep } from 'k6'
import { BASE_URL, JSON_HEADERS } from './config.js'

export const options = {
  vus:        1,
  iterations: 1,
  thresholds: {
    http_req_duration: ['p(95)<3000'],
    http_req_failed:   ['rate<0.01'],
  },
}

export default function () {
  // ── 1. Health check ──────────────────────────────────────────────────────
  const health = http.get(`${BASE_URL}/actuator/health`)
  check(health, {
    'health — status 200':   (r) => r.status === 200,
    'health — status UP':    (r) => r.json('status') === 'UP',
  })

  sleep(0.5)

  // ── 2. API info / version ────────────────────────────────────────────────
  const info = http.get(`${BASE_URL}/actuator/info`)
  check(info, {
    'info — status 200 or 404': (r) => [200, 404].includes(r.status),
  })

  sleep(0.5)

  // ── 3. Auth endpoint reachable (expect 400/401, not 500) ─────────────────
  const loginProbe = http.post(
    `${BASE_URL}/api/v1/auth/login`,
    JSON.stringify({ email: '', password: '' }),
    { headers: JSON_HEADERS }
  )
  check(loginProbe, {
    'login — not a 500': (r) => r.status !== 500,
    'login — reachable':  (r) => r.status < 500,
  })
}
