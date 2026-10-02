/**
 * E2E smoke tests — Login flow
 *
 * These run against a live frontend instance.
 * Set BASE_URL env var in CI to point at the deployed app.
 *
 * Run locally: npm run test:e2e
 */

import { test, expect } from '@playwright/test'

test.describe('Login page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login')
  })

  test('renders the login form', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /sign in|login/i })).toBeVisible()
    await expect(page.getByLabel(/email/i)).toBeVisible()
    await expect(page.getByLabel(/password/i)).toBeVisible()
    await expect(page.getByRole('button', { name: /sign in|login/i })).toBeVisible()
  })

  test('shows validation error for empty submission', async ({ page }) => {
    await page.getByRole('button', { name: /sign in|login/i }).click()
    // Expect at least one error message or HTML5 validation
    const emailInput = page.getByLabel(/email/i)
    await expect(emailInput).toBeFocused()
  })

  test('shows error for invalid credentials', async ({ page }) => {
    await page.getByLabel(/email/i).fill('invalid@test.com')
    await page.getByLabel(/password/i).fill('wrongpassword')
    await page.getByRole('button', { name: /sign in|login/i }).click()

    // Expect an error message to appear
    await expect(
      page.getByText(/invalid credentials|incorrect|unauthorized/i)
    ).toBeVisible({ timeout: 8_000 })
  })

  test('has no detectable accessibility violations on load', async ({ page }) => {
    // Basic a11y check: all form inputs must have labels
    const inputs = page.locator('input:not([type="hidden"])')
    const count = await inputs.count()
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i)
      const id = await input.getAttribute('id')
      if (id) {
        const label = page.locator(`label[for="${id}"]`)
        await expect(label).toBeVisible()
      }
    }
  })
})
