/**
 * k6 Load Test — epay Payment API
 *
 * Purpose : Simulate realistic concurrent user load across key payment
 *           endpoints (auth, wallet, deposit, transfer).
 *
 * Stages  :
 *   0 → 3 min  ramp up  to 50 VUs
 *   3 → 8 min  hold     at 50 VUs  (steady-state)
 *   8 → 10 min ramp down to 0 VUs
 *
 * Run:
 *   k6 run k6/load.js
 *   k6 run -e BASE_URL=https://api.epay.com -e TEST_USER_EMAIL=user@test.com -e TEST_USER_PASS=secret k6/load.js
 */

import http    from 'k6/http'
import { check, group, sleep } from 'k6'
import { Counter, Rate, Trend } from 'k6/metrics'
import { BASE_URL, JSON_HEADERS, authHeaders } from './config.js'

const loginSuccessRate   = new Rate('login_success_rate')
const walletFetchTrend   = new Trend('wallet_fetch_duration')
const depositErrorCount  = new Counter('deposit_errors')
const transferErrorCount = new Counter('transfer_errors')

export const options = {
  stages: [
    { duration: '3m',  target: 50  },
    { duration: '5m',  target: 50  }, 
    { duration: '2m',  target: 0   }, 
  ],
  thresholds: {
    http_req_duration:    ['p(95)<2000', 'p(99)<4000'],
    http_req_failed:      ['rate<0.02'],
    login_success_rate:   ['rate>0.95'],
    wallet_fetch_duration:['p(95)<1500'],
  },
}

function login() {
  const email    = __ENV.TEST_USER_EMAIL || 'loadtest@epay.test'
  const password = __ENV.TEST_USER_PASS  || 'LoadTest@123'

  const res = http.post(
    `${BASE_URL}/api/v1/auth/login`,
    JSON.stringify({ email, password }),
    { headers: JSON_HEADERS }
  )

  const ok = check(res, {
    'login — 200':         (r) => r.status === 200,
    'login — has token':   (r) => !!r.json('data.token'),
  })

  loginSuccessRate.add(ok)

  return ok ? res.json('data.token') : null
}

export default function () {
  const token = login()
  if (!token) {
    sleep(2)
    return
  }

  const headers = authHeaders(token)

  group('Wallet', () => {
    const start = Date.now()
    const res = http.get(`${BASE_URL}/api/v1/wallet/balance`, { headers })
    walletFetchTrend.add(Date.now() - start)

    check(res, {
      'wallet balance — 200': (r) => r.status === 200,
      'wallet balance — has amount': (r) => r.json('data.balance') !== undefined,
    })
  })

  sleep(1)

  group('Transaction History', () => {
    const res = http.get(
      `${BASE_URL}/api/v1/history/transactions?page=0&size=10`,
      { headers }
    )
    check(res, {
      'history — 200':          (r) => r.status === 200,
      'history — has content':  (r) => Array.isArray(r.json('data.content')),
    })
  })

  sleep(1)

  group('Deposit Init', () => {
    const res = http.post(
      `${BASE_URL}/api/v1/deposit/initiate`,
      JSON.stringify({ amount: 100, currency: 'NGN', gateway: 'paystack' }),
      { headers }
    )

    const ok = check(res, {
      'deposit init — 200 or 201': (r) => [200, 201].includes(r.status),
      'deposit init — not 500':    (r) => r.status < 500,
    })

    if (!ok) depositErrorCount.add(1)
  })

  sleep(1)

  group('Beneficiaries', () => {
    const res = http.get(`${BASE_URL}/api/v1/beneficiary`, { headers })
    check(res, {
      'beneficiaries — 200': (r) => r.status === 200,
    })
  })

  sleep(Math.random() * 2 + 1) 
}
