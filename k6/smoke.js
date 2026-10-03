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
    // Strict failure threshold applies only to requests tagged 'critical'.
    // The login probe is intentionally excluded — it sends invalid creds
    // and always returns a 4xx, which k6 counts as http_req_failed.
    'http_req_failed{tag:critical}': ['rate<0.01'],
  },
}

export default function () {
  const health = http.get(`${BASE_URL}/actuator/health`, { tags: { tag: 'critical' } })
  check(health, {
    'health — status 200':   (r) => r.status === 200,
    'health — status UP':    (r) => r.json('status') === 'UP',
  })

  sleep(0.5)
  const info = http.get(`${BASE_URL}/actuator/info`, { tags: { tag: 'critical' } })
  check(info, {
    'info — status 200 or 404': (r) => [200, 404].includes(r.status),
  })

  sleep(0.5)

  // Login probe: intentionally sends invalid credentials to verify the
  // endpoint is reachable and returns a client error (not a 5xx crash).
  // Not tagged 'critical' so it doesn't affect the strict failure threshold.
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
