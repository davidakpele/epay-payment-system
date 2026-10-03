/**
 * k6 Stress Test — epay Payment API
 *
 * Purpose : Find the breaking point of the API by ramping VUs well beyond
 *           expected production load.  Identifies the point at which
 *           error rates climb or response times degrade unacceptably.
 *
 * Stages  :
 *   0 → 2 min   20 VUs   (baseline)
 *   2 → 4 min   50 VUs
 *   4 → 6 min  100 VUs
 *   6 → 8 min  150 VUs   (stress zone)
 *   8 → 9 min   50 VUs   (recovery)
 *   9 → 10 min   0 VUs
 *
 * NOTE: Only run against a staging/test environment — never production.
 *
 * Run:
 *   k6 run -e BASE_URL=https://staging-api.epay.com k6/stress.js
 */

import http from 'k6/http'
import { check, group, sleep } from 'k6'
import { Rate, Trend } from 'k6/metrics'
import { BASE_URL, JSON_HEADERS, authHeaders } from './config.js'

const errorRate   = new Rate('stress_errors')
const p95duration = new Trend('stress_p95_duration')

export const options = {
  stages: [
    { duration: '2m', target: 20  },
    { duration: '2m', target: 50  },
    { duration: '2m', target: 100 },
    { duration: '2m', target: 150 },
    { duration: '1m', target: 50  },
    { duration: '1m', target: 0   },
  ],
  thresholds: {
   
    http_req_failed:   ['rate<0.10'],
    http_req_duration: ['p(95)<5000'],  
    stress_errors:     ['rate<0.10'],
  },
}

function login() {
  const res = http.post(
    `${BASE_URL}/api/v1/auth/login`,
    JSON.stringify({
      email:    __ENV.TEST_USER_EMAIL || 'loadtest@epay.test',
      password: __ENV.TEST_USER_PASS  || 'LoadTest@123',
    }),
    { headers: JSON_HEADERS }
  )
  return res.status === 200 ? res.json('data.token') : null
}

export default function () {
  const token = login()
  if (!token) {
    errorRate.add(1)
    sleep(1)
    return
  }

  const headers = authHeaders(token)

  group('Core payment endpoints under stress', () => {
    const start = Date.now()

    const wallet = http.get(`${BASE_URL}/api/v1/wallet/balance`, { headers })
    const ok = check(wallet, {
      'wallet — 200 under stress': (r) => r.status === 200,
    })
    errorRate.add(!ok)
    p95duration.add(Date.now() - start)

    sleep(0.5)

    const history = http.get(
      `${BASE_URL}/api/v1/history/transactions?page=0&size=5`,
      { headers }
    )
    check(history, {
      'history — not 500': (r) => r.status < 500,
    })
  })

  sleep(0.5)
}
