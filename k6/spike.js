/**
 * k6 Spike Test — epay Payment API
 *
 * Purpose : Simulate a sudden traffic spike (e.g. a promotional event or
 *           marketing campaign) to verify the API handles burst load and
 *           recovers cleanly once traffic drops.
 *
 * Pattern : 2 VUs → 200 VUs in 30 s → back to 0 in 1 min
 *
 * Run:
 *   k6 run -e BASE_URL=https://staging-api.epay.com k6/spike.js
 */

import http from 'k6/http'
import { check, sleep } from 'k6'
import { BASE_URL, JSON_HEADERS } from './config.js'

export const options = {
  stages: [
    { duration: '30s', target: 2   },  // baseline
    { duration: '30s', target: 200 },  // spike!
    { duration: '1m',  target: 200 },  // sustain spike
    { duration: '1m',  target: 0   },  // recovery
  ],
  thresholds: {
    http_req_failed:   ['rate<0.15'],   // allow higher failure during spike
    http_req_duration: ['p(95)<8000'],  // generous threshold for spike
  },
}

export default function () {
  // Hit the lightest possible endpoint during spike to measure saturation
  const res = http.get(`${BASE_URL}/actuator/health`)
  check(res, {
    'health — alive during spike': (r) => r.status === 200,
  })

  sleep(0.2)

  // Also probe the auth endpoint
  const login = http.post(
    `${BASE_URL}/api/v1/auth/login`,
    JSON.stringify({ email: 'spike@epay.test', password: 'Spike@123' }),
    { headers: { 'Content-Type': 'application/json' } }
  )
  check(login, {
    'auth — not 500 during spike': (r) => r.status < 500,
  })

  sleep(0.3)
}
