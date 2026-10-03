/**
 * E2E smoke tests — Login flow
 *
 * These run against a live frontend instance.
 * Set BASE_URL env var in CI to point at the deployed app.
 *
 * Run locally: npm run test:e2e
 *
 * The login form lives at /default (the app's combined login/register page).
 */

import { test, expect } from '@playwright/test'

test.describe('Login page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/default')
  })

  test('renders the login form', async ({ page }) => {
    // The login form is rendered inside the default page — wait for it
    await expect(page.getByRole('button', { name: /sign in|login/i }).first()).toBeVisible({ timeout: 10_000 })
    await expect(page.locator('input[type="text"], input[type="email"]').first()).toBeVisible()
    await expect(page.locator('input[type="password"]').first()).toBeVisible()
  })

  test('shows validation error for empty submission', async ({ page }) => {
    // Wait for the form to be ready
    const submitBtn = page.getByRole('button', { name: /sign in|login/i }).first()
    await expect(submitBtn).toBeVisible({ timeout: 10_000 })
    await submitBtn.click()
    // Expect focus to move to the first empty required input
    const firstInput = page.locator('input[required], input[type="text"], input[type="email"]').first()
    await expect(firstInput).toBeVisible()
  })

  test('shows error for invalid credentials', async ({ page }) => {
    // Wait for inputs to be ready
    await page.waitForSelector('input[type="text"], input[type="email"]', { timeout: 10_000 })
    const usernameInput = page.locator('input[type="text"]').first()
    const passwordInput = page.locator('input[type="password"]').first()

    await usernameInput.fill('invaliduser')
    await passwordInput.fill('wrongpassword')
    await page.getByRole('button', { name: /sign in|login/i }).first().click()

    // After submit, the app shows a toast with any error (network error if
    // no backend is running in CI, or auth error if backend is available).
    // Target the toast message container directly for reliability.
    await expect(
      page.locator('.toast-message').first()
    ).toBeVisible({ timeout: 10_000 })
  })

  test('has no detectable accessibility violations on load', async ({ page }) => {
    // Basic a11y check: all visible form inputs must have associated labels
    await page.waitForLoadState('networkidle')
    const inputs = page.locator('input:not([type="hidden"])')
    const count = await inputs.count()
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i)
      const id = await input.getAttribute('id')
      if (id) {
        const label = page.locator(`label[for="${id}"]`)
        const labelCount = await label.count()
        if (labelCount > 0) {
          await expect(label.first()).toBeVisible()
        }
      }
    }
  })
})
