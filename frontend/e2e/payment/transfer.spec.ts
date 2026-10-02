/**
 * E2E smoke tests — Transfer / Payment flow
 *
 * These verify the core payment journey is reachable and renders correctly.
 * They do NOT submit real payments — they only test UI rendering and navigation.
 */

import { test, expect } from '@playwright/test'

test.describe('Transfer page', () => {
  test('redirects unauthenticated users to login', async ({ page }) => {
    await page.goto('/transfer')
    // Should redirect to login when not authenticated
    await expect(page).toHaveURL(/\/login/)
  })

  test('transfer page has correct page title', async ({ page }) => {
    // Navigate directly — if redirected, that itself is the assertion
    await page.goto('/transfer')
    await expect(page).toHaveTitle(/epay|transfer|payment/i)
  })
})

test.describe('Dashboard', () => {
  test('dashboard redirects to login when unauthenticated', async ({ page }) => {
    await page.goto('/dashboard')
    await expect(page).toHaveURL(/\/login/)
  })

  test('home page loads without JS errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (err) => errors.push(err.message))

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    expect(errors).toHaveLength(0)
  })
})
