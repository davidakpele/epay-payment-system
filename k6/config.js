/**
 * Shared k6 configuration — imported by every test script.
 */

export const BASE_URL = __ENV.BASE_URL || 'http://localhost:8029'
export const DEFAULT_THRESHOLDS = {
  http_req_duration: ['p(95)<2000'],
  http_req_failed:   ['rate<0.01'],
}

export const STRICT_THRESHOLDS = {
  http_req_duration: ['p(95)<500', 'p(99)<1000'],
  http_req_failed:   ['rate<0.005'],
}

export function authHeaders(token) {
  return {
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${token}`,
  }
}

export const JSON_HEADERS = {
  'Content-Type': 'application/json',
}

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
