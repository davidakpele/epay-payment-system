/**
 * Sample unit tests for a currency formatter utility.
 *
 * These act as a template — replace with tests for your actual utilities.
 * Place real utility functions in src/utils/ or app/utils/ as needed.
 */

import { describe, it, expect } from 'vitest'

// ── Inline implementation (replace with import once you have the real file) ──
function formatCurrency(amount: number, currency = 'NGN', locale = 'en-NG'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

function parseCurrencyInput(raw: string): number {
  // Strip everything except digits and the decimal separator
  const cleaned = raw.replace(/[^0-9.]/g, '')
  const value = parseFloat(cleaned)
  return isNaN(value) ? 0 : value
}

// ─────────────────────────────────────────────────────────────────────────────
describe('formatCurrency', () => {
  it('formats a positive amount with NGN symbol', () => {
    const result = formatCurrency(5000)
    expect(result).toContain('5,000')
  })

  it('formats zero correctly', () => {
    const result = formatCurrency(0)
    expect(result).toContain('0.00')
  })

  it('formats large amounts with thousand separators', () => {
    const result = formatCurrency(1_500_000)
    expect(result).toContain('1,500,000')
  })

  it('formats USD when currency is USD', () => {
    const result = formatCurrency(99.99, 'USD', 'en-US')
    expect(result).toContain('99.99')
  })

  it('always includes two decimal places', () => {
    const result = formatCurrency(100)
    expect(result).toMatch(/\.00$/)
  })
})

describe('parseCurrencyInput', () => {
  it('strips currency symbols and parses number', () => {
    expect(parseCurrencyInput('₦1,500.00')).toBe(1500)
  })

  it('returns 0 for non-numeric input', () => {
    expect(parseCurrencyInput('N/A')).toBe(0)
  })

  it('handles plain number strings', () => {
    expect(parseCurrencyInput('250.75')).toBe(250.75)
  })
})
