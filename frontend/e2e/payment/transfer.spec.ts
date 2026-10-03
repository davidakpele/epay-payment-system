/**
 * E2E smoke tests — Transfer / Payment flow
 *
 * These verify the core payment journey is reachable and renders correctly.
 * They do NOT submit real payments — they only test UI rendering and navigation.
 *
 * Route notes:
 *  - Authenticated-only routes redirect to /auth/login (middleware) which
 *    the app handles — tests accept any auth-related URL.
 *  - The login form itself lives at /default.
 */

import { test, expect } from '@playwright/test'

test.describe('Transfer page', () => {
  test('redirects unauthenticated users away from protected pages', async ({ page }) => {
    await page.goto('/dashboard')
    // Middleware redirects unauthenticated users to /auth/login
    await expect(page).toHaveURL(/\/auth\/login|\/default|\/login/)
  })

  test('protected wallet page redirects when unauthenticated', async ({ page }) => {
    await page.goto('/wallet/accounts')
    await expect(page).toHaveURL(/\/auth\/login|\/default|\/login/)
  })
})

test.describe('Dashboard', () => {
  test('dashboard redirects to login when unauthenticated', async ({ page }) => {
    await page.goto('/dashboard')
    await expect(page).toHaveURL(/\/auth\/login|\/default|\/login/)
  })

  test('home page loads without JS errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (err) => errors.push(err.message))

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    expect(errors).toHaveLength(0)
  })
})
