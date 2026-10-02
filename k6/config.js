/**
 * Shared k6 configuration — imported by every test script.
 *
 * Override BASE_URL at runtime:
 *   k6 run -e BASE_URL=https://api.epay.com k6/smoke.js
 */

export const BASE_URL = __ENV.BASE_URL || 'http://localhost:8029'

// ── Reusable thresholds ────────────────────────────────────────────────────
export const DEFAULT_THRESHOLDS = {
  // 95th-percentile response time under 2 s
  http_req_duration: ['p(95)<2000'],
  // Less than 1% of requests fail
  http_req_failed:   ['rate<0.01'],
}

export const STRICT_THRESHOLDS = {
  http_req_duration: ['p(95)<500', 'p(99)<1000'],
  http_req_failed:   ['rate<0.005'],
}

// ── Common request headers ─────────────────────────────────────────────────
export function authHeaders(token) {
  return {
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${token}`,
  }
}

export const JSON_HEADERS = {
  'Content-Type': 'application/json',
}

// ── Helper: assert and log ─────────────────────────────────────────────────
import { check } from 'k6'

export function assertOk(res, label) {
  check(res, {
    [`${label} — status 200`]: (r) => r.status === 200,
    [`${label} — no error body`]: (r) => !r.body.includes('"error"'),
  })
}

export function assertCreated(res, label) {
  check(res, {
    [`${label} — status 201`]: (r) => r.status === 201,
  })
}
