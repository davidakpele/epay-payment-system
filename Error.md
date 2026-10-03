Run npm run test:e2e

> frontend@0.1.0 test:e2e
> playwright test


Running 24 tests using 2 workers

  ✘   2 [chromium] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (6.2s)
  ✘   3 [chromium] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (retry #1) (5.9s)
  ✘   4 [chromium] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (retry #2) (5.8s)
  ✘   1 [chromium] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (32.1s)
  ✘   5 [chromium] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (32.2s)
  ✘   6 [chromium] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (retry #1) (32.2s)
  ✘   7 [chromium] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (retry #1) (32.2s)
  ✘   8 [chromium] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (retry #2) (32.1s)
  ✓  10 [chromium] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load (542ms)
  ✘  11 [chromium] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (5.7s)
  ✘  12 [chromium] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (retry #1) (5.9s)
  ✘   9 [chromium] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (retry #2) (32.5s)
  ✘  13 [chromium] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (retry #2) (6.2s)
  ✓  14 [chromium] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated (1.0s)
  ✓  15 [chromium] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title (1.1s)
  ✓  16 [chromium] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors (2.3s)
  ✘  17 [firefox] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (7.9s)
  ✘  19 [firefox] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (retry #1) (7.0s)
  ✘  20 [firefox] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (retry #2) (6.8s)
  ✘  18 [firefox] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (30.1s)
  ✘  21 [firefox] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (30.1s)
  ✘  22 [firefox] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (retry #1) (30.4s)
  ✘  23 [firefox] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (retry #1) (30.4s)
  ✘  24 [firefox] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (retry #2) (30.2s)
  ✓  26 [firefox] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load (2.0s)
  ✘  27 [firefox] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (5.8s)
  ✘  28 [firefox] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (retry #1) (7.1s)
  ✘  25 [firefox] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (retry #2) (30.1s)
  ✘  29 [firefox] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (retry #2) (6.9s)
  ✓  30 [firefox] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title (3.0s)
  ✓  32 [firefox] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors (2.7s)
  ✓  31 [firefox] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated (3.8s)
  ✘  33 [mobile-chrome] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (5.9s)
  ✘  35 [mobile-chrome] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (retry #1) (5.9s)
  ✘  36 [mobile-chrome] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (retry #2) (5.7s)
  ✘  34 [mobile-chrome] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (31.6s)
  ✘  37 [mobile-chrome] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (31.6s)
  ✘  38 [mobile-chrome] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (retry #1) (31.6s)
  ✘  39 [mobile-chrome] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (retry #1) (31.6s)
  ✘  40 [mobile-chrome] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (retry #2) (31.6s)
  ✓  42 [mobile-chrome] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load (550ms)
  ✘  43 [mobile-chrome] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (5.6s)
  ✘  44 [mobile-chrome] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (retry #1) (5.8s)
  ✘  41 [mobile-chrome] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (retry #2) (31.6s)
  ✓  46 [mobile-chrome] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title (736ms)
  ✘  45 [mobile-chrome] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (retry #2) (6.1s)
  ✓  47 [mobile-chrome] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated (591ms)
  ✓  48 [mobile-chrome] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors (1.4s)


  1) [chromium] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form ────────────────

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: /sign in|login/i })
    Expected: visible
    Timeout: 5000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" getByRole('heading', { name: /sign in|login/i }) with timeout 5000ms
      - waiting for getByRole('heading', { name: /sign in|login/i })


      16 |
      17 |   test('renders the login form', async ({ page }) => {
    > 18 |     await expect(page.getByRole('heading', { name: /sign in|login/i })).toBeVisible()
         |                                                                         ^
      19 |     await expect(page.getByLabel(/email/i)).toBeVisible()
      20 |     await expect(page.getByLabel(/password/i)).toBeVisible()
      21 |     await expect(page.getByRole('button', { name: /sign in|login/i })).toBeVisible()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:18:73

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-chromium/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-renders-the-login-form-chromium/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: /sign in|login/i })
    Expected: visible
    Timeout: 5000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" getByRole('heading', { name: /sign in|login/i }) with timeout 5000ms
      - waiting for getByRole('heading', { name: /sign in|login/i })


      16 |
      17 |   test('renders the login form', async ({ page }) => {
    > 18 |     await expect(page.getByRole('heading', { name: /sign in|login/i })).toBeVisible()
         |                                                                         ^
      19 |     await expect(page.getByLabel(/email/i)).toBeVisible()
      20 |     await expect(page.getByLabel(/password/i)).toBeVisible()
      21 |     await expect(page.getByRole('button', { name: /sign in|login/i })).toBeVisible()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:18:73

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-chromium-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-chromium-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-renders-the-login-form-chromium-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-chromium-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/auth-login-Login-page-renders-the-login-form-chromium-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: /sign in|login/i })
    Expected: visible
    Timeout: 5000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" getByRole('heading', { name: /sign in|login/i }) with timeout 5000ms
      - waiting for getByRole('heading', { name: /sign in|login/i })


      16 |
      17 |   test('renders the login form', async ({ page }) => {
    > 18 |     await expect(page.getByRole('heading', { name: /sign in|login/i })).toBeVisible()
         |                                                                         ^
      19 |     await expect(page.getByLabel(/email/i)).toBeVisible()
      20 |     await expect(page.getByLabel(/password/i)).toBeVisible()
      21 |     await expect(page.getByRole('button', { name: /sign in|login/i })).toBeVisible()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:18:73

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-chromium-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-chromium-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-renders-the-login-form-chromium-retry2/error-context.md

  2) [chromium] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission 

    Test timeout of 30000ms exceeded.

    Error: locator.click: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByRole('button', { name: /sign in|login/i })


      23 |
      24 |   test('shows validation error for empty submission', async ({ page }) => {
    > 25 |     await page.getByRole('button', { name: /sign in|login/i }).click()
         |                                                                ^
      26 |     // Expect at least one error message or HTML5 validation
      27 |     const emailInput = page.getByLabel(/email/i)
      28 |     await expect(emailInput).toBeFocused()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:25:64

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-chromium/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-chromium/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Test timeout of 30000ms exceeded.

    Error: locator.click: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByRole('button', { name: /sign in|login/i })


      23 |
      24 |   test('shows validation error for empty submission', async ({ page }) => {
    > 25 |     await page.getByRole('button', { name: /sign in|login/i }).click()
         |                                                                ^
      26 |     // Expect at least one error message or HTML5 validation
      27 |     const emailInput = page.getByLabel(/email/i)
      28 |     await expect(emailInput).toBeFocused()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:25:64

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-chromium-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-chromium-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-chromium-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-chromium-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-chromium-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Test timeout of 30000ms exceeded.

    Error: locator.click: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByRole('button', { name: /sign in|login/i })


      23 |
      24 |   test('shows validation error for empty submission', async ({ page }) => {
    > 25 |     await page.getByRole('button', { name: /sign in|login/i }).click()
         |                                                                ^
      26 |     // Expect at least one error message or HTML5 validation
      27 |     const emailInput = page.getByLabel(/email/i)
      28 |     await expect(emailInput).toBeFocused()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:25:64

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-chromium-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-chromium-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-chromium-retry2/error-context.md

  3) [chromium] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials ───

    Test timeout of 30000ms exceeded.

    Error: locator.fill: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByLabel(/email/i)


      30 |
      31 |   test('shows error for invalid credentials', async ({ page }) => {
    > 32 |     await page.getByLabel(/email/i).fill('invalid@test.com')
         |                                     ^
      33 |     await page.getByLabel(/password/i).fill('wrongpassword')
      34 |     await page.getByRole('button', { name: /sign in|login/i }).click()
      35 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:32:37

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-chromium/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-shows-error-for-invalid-credentials-chromium/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Test timeout of 30000ms exceeded.

    Error: locator.fill: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByLabel(/email/i)


      30 |
      31 |   test('shows error for invalid credentials', async ({ page }) => {
    > 32 |     await page.getByLabel(/email/i).fill('invalid@test.com')
         |                                     ^
      33 |     await page.getByLabel(/password/i).fill('wrongpassword')
      34 |     await page.getByRole('button', { name: /sign in|login/i }).click()
      35 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:32:37

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-chromium-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-chromium-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-shows-error-for-invalid-credentials-chromium-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-chromium-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/auth-login-Login-page-shows-error-for-invalid-credentials-chromium-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Test timeout of 30000ms exceeded.

    Error: locator.fill: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByLabel(/email/i)


      30 |
      31 |   test('shows error for invalid credentials', async ({ page }) => {
    > 32 |     await page.getByLabel(/email/i).fill('invalid@test.com')
         |                                     ^
      33 |     await page.getByLabel(/password/i).fill('wrongpassword')
      34 |     await page.getByRole('button', { name: /sign in|login/i }).click()
      35 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:32:37

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-chromium-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-chromium-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-shows-error-for-invalid-credentials-chromium-retry2/error-context.md

  4) [chromium] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login 

    Error: expect(page).toHaveURL(expected) failed

    Expected pattern: /\/login/
    Received string:  "http://localhost:3000/transfer"
    Timeout: 5000ms

    Call log:
      - Expect "toHaveURL" with timeout 5000ms
        14 × locator resolved to <html lang="en">…</html>
           - unexpected value "http://localhost:3000/transfer"


      12 |     await page.goto('/transfer')
      13 |     // Should redirect to login when not authenticated
    > 14 |     await expect(page).toHaveURL(/\/login/)
         |                        ^
      15 |   })
      16 |
      17 |   test('transfer page has correct page title', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:14:24

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-chromium/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-chromium/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(page).toHaveURL(expected) failed

    Expected pattern: /\/login/
    Received string:  "http://localhost:3000/transfer"
    Timeout: 5000ms

    Call log:
      - Expect "toHaveURL" with timeout 5000ms
        14 × locator resolved to <html lang="en">…</html>
           - unexpected value "http://localhost:3000/transfer"


      12 |     await page.goto('/transfer')
      13 |     // Should redirect to login when not authenticated
    > 14 |     await expect(page).toHaveURL(/\/login/)
         |                        ^
      15 |   })
      16 |
      17 |   test('transfer page has correct page title', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:14:24

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-chromium-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-chromium-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-chromium-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-chromium-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-chromium-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(page).toHaveURL(expected) failed

    Expected pattern: /\/login/
    Received string:  "http://localhost:3000/transfer"
    Timeout: 5000ms

    Call log:
      - Expect "toHaveURL" with timeout 5000ms
        14 × locator resolved to <html lang="en">…</html>
           - unexpected value "http://localhost:3000/transfer"


      12 |     await page.goto('/transfer')
      13 |     // Should redirect to login when not authenticated
    > 14 |     await expect(page).toHaveURL(/\/login/)
         |                        ^
      15 |   })
      16 |
      17 |   test('transfer page has correct page title', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:14:24

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-chromium-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-chromium-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-chromium-retry2/error-context.md

  5) [firefox] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form ─────────────────

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: /sign in|login/i })
    Expected: visible
    Timeout: 5000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" getByRole('heading', { name: /sign in|login/i }) with timeout 5000ms
      - waiting for getByRole('heading', { name: /sign in|login/i })


      16 |
      17 |   test('renders the login form', async ({ page }) => {
    > 18 |     await expect(page.getByRole('heading', { name: /sign in|login/i })).toBeVisible()
         |                                                                         ^
      19 |     await expect(page.getByLabel(/email/i)).toBeVisible()
      20 |     await expect(page.getByLabel(/password/i)).toBeVisible()
      21 |     await expect(page.getByRole('button', { name: /sign in|login/i })).toBeVisible()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:18:73

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-firefox/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-firefox/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-renders-the-login-form-firefox/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: /sign in|login/i })
    Expected: visible
    Timeout: 5000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" getByRole('heading', { name: /sign in|login/i }) with timeout 5000ms
      - waiting for getByRole('heading', { name: /sign in|login/i })


      16 |
      17 |   test('renders the login form', async ({ page }) => {
    > 18 |     await expect(page.getByRole('heading', { name: /sign in|login/i })).toBeVisible()
         |                                                                         ^
      19 |     await expect(page.getByLabel(/email/i)).toBeVisible()
      20 |     await expect(page.getByLabel(/password/i)).toBeVisible()
      21 |     await expect(page.getByRole('button', { name: /sign in|login/i })).toBeVisible()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:18:73

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-firefox-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-firefox-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-renders-the-login-form-firefox-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-firefox-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/auth-login-Login-page-renders-the-login-form-firefox-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: /sign in|login/i })
    Expected: visible
    Timeout: 5000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" getByRole('heading', { name: /sign in|login/i }) with timeout 5000ms
      - waiting for getByRole('heading', { name: /sign in|login/i })


      16 |
      17 |   test('renders the login form', async ({ page }) => {
    > 18 |     await expect(page.getByRole('heading', { name: /sign in|login/i })).toBeVisible()
         |                                                                         ^
      19 |     await expect(page.getByLabel(/email/i)).toBeVisible()
      20 |     await expect(page.getByLabel(/password/i)).toBeVisible()
      21 |     await expect(page.getByRole('button', { name: /sign in|login/i })).toBeVisible()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:18:73

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-firefox-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-firefox-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-renders-the-login-form-firefox-retry2/error-context.md

  6) [firefox] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission 

    Test timeout of 30000ms exceeded.

    Error: locator.click: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByRole('button', { name: /sign in|login/i })


      23 |
      24 |   test('shows validation error for empty submission', async ({ page }) => {
    > 25 |     await page.getByRole('button', { name: /sign in|login/i }).click()
         |                                                                ^
      26 |     // Expect at least one error message or HTML5 validation
      27 |     const emailInput = page.getByLabel(/email/i)
      28 |     await expect(emailInput).toBeFocused()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:25:64

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-firefox/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-firefox/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-firefox/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Test timeout of 30000ms exceeded.

    Error: locator.click: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByRole('button', { name: /sign in|login/i })


      23 |
      24 |   test('shows validation error for empty submission', async ({ page }) => {
    > 25 |     await page.getByRole('button', { name: /sign in|login/i }).click()
         |                                                                ^
      26 |     // Expect at least one error message or HTML5 validation
      27 |     const emailInput = page.getByLabel(/email/i)
      28 |     await expect(emailInput).toBeFocused()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:25:64

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-firefox-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-firefox-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-firefox-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-firefox-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-firefox-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Test timeout of 30000ms exceeded.

    Error: locator.click: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByRole('button', { name: /sign in|login/i })


      23 |
      24 |   test('shows validation error for empty submission', async ({ page }) => {
    > 25 |     await page.getByRole('button', { name: /sign in|login/i }).click()
         |                                                                ^
      26 |     // Expect at least one error message or HTML5 validation
      27 |     const emailInput = page.getByLabel(/email/i)
      28 |     await expect(emailInput).toBeFocused()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:25:64

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-firefox-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-firefox-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-firefox-retry2/error-context.md

  7) [firefox] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials ────

    Test timeout of 30000ms exceeded.

    Error: locator.fill: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByLabel(/email/i)


      30 |
      31 |   test('shows error for invalid credentials', async ({ page }) => {
    > 32 |     await page.getByLabel(/email/i).fill('invalid@test.com')
         |                                     ^
      33 |     await page.getByLabel(/password/i).fill('wrongpassword')
      34 |     await page.getByRole('button', { name: /sign in|login/i }).click()
      35 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:32:37

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-firefox/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-firefox/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-shows-error-for-invalid-credentials-firefox/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Test timeout of 30000ms exceeded.

    Error: locator.fill: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByLabel(/email/i)


      30 |
      31 |   test('shows error for invalid credentials', async ({ page }) => {
    > 32 |     await page.getByLabel(/email/i).fill('invalid@test.com')
         |                                     ^
      33 |     await page.getByLabel(/password/i).fill('wrongpassword')
      34 |     await page.getByRole('button', { name: /sign in|login/i }).click()
      35 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:32:37

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-firefox-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-firefox-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-shows-error-for-invalid-credentials-firefox-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-firefox-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/auth-login-Login-page-shows-error-for-invalid-credentials-firefox-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Test timeout of 30000ms exceeded.

    Error: locator.fill: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByLabel(/email/i)


      30 |
      31 |   test('shows error for invalid credentials', async ({ page }) => {
    > 32 |     await page.getByLabel(/email/i).fill('invalid@test.com')
         |                                     ^
      33 |     await page.getByLabel(/password/i).fill('wrongpassword')
      34 |     await page.getByRole('button', { name: /sign in|login/i }).click()
      35 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:32:37

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-firefox-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-firefox-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-shows-error-for-invalid-credentials-firefox-retry2/error-context.md

  8) [firefox] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login 

    Error: expect(page).toHaveURL(expected) failed

    Expected pattern: /\/login/
    Received string:  "http://localhost:3000/transfer"
    Timeout: 5000ms

    Call log:
      - Expect "toHaveURL" with timeout 5000ms
        14 × locator resolved to <html lang="en">…</html>
           - unexpected value "http://localhost:3000/transfer"


      12 |     await page.goto('/transfer')
      13 |     // Should redirect to login when not authenticated
    > 14 |     await expect(page).toHaveURL(/\/login/)
         |                        ^
      15 |   })
      16 |
      17 |   test('transfer page has correct page title', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:14:24

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-firefox/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-firefox/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-firefox/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(page).toHaveURL(expected) failed

    Expected pattern: /\/login/
    Received string:  "http://localhost:3000/transfer"
    Timeout: 5000ms

    Call log:
      - Expect "toHaveURL" with timeout 5000ms
        13 × locator resolved to <html lang="en">…</html>
           - unexpected value "http://localhost:3000/transfer"


      12 |     await page.goto('/transfer')
      13 |     // Should redirect to login when not authenticated
    > 14 |     await expect(page).toHaveURL(/\/login/)
         |                        ^
      15 |   })
      16 |
      17 |   test('transfer page has correct page title', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:14:24

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-firefox-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-firefox-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-firefox-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-firefox-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-firefox-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(page).toHaveURL(expected) failed

    Expected pattern: /\/login/
    Received string:  "http://localhost:3000/transfer"
    Timeout: 5000ms

    Call log:
      - Expect "toHaveURL" with timeout 5000ms
        13 × locator resolved to <html lang="en">…</html>
           - unexpected value "http://localhost:3000/transfer"


      12 |     await page.goto('/transfer')
      13 |     // Should redirect to login when not authenticated
    > 14 |     await expect(page).toHaveURL(/\/login/)
         |                        ^
      15 |   })
      16 |
      17 |   test('transfer page has correct page title', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:14:24

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-firefox-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-firefox-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-firefox-retry2/error-context.md

  9) [mobile-chrome] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form ───────────

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: /sign in|login/i })
    Expected: visible
    Timeout: 5000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" getByRole('heading', { name: /sign in|login/i }) with timeout 5000ms
      - waiting for getByRole('heading', { name: /sign in|login/i })


      16 |
      17 |   test('renders the login form', async ({ page }) => {
    > 18 |     await expect(page.getByRole('heading', { name: /sign in|login/i })).toBeVisible()
         |                                                                         ^
      19 |     await expect(page.getByLabel(/email/i)).toBeVisible()
      20 |     await expect(page.getByLabel(/password/i)).toBeVisible()
      21 |     await expect(page.getByRole('button', { name: /sign in|login/i })).toBeVisible()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:18:73

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-mobile-chrome/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-mobile-chrome/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-renders-the-login-form-mobile-chrome/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: /sign in|login/i })
    Expected: visible
    Timeout: 5000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" getByRole('heading', { name: /sign in|login/i }) with timeout 5000ms
      - waiting for getByRole('heading', { name: /sign in|login/i })


      16 |
      17 |   test('renders the login form', async ({ page }) => {
    > 18 |     await expect(page.getByRole('heading', { name: /sign in|login/i })).toBeVisible()
         |                                                                         ^
      19 |     await expect(page.getByLabel(/email/i)).toBeVisible()
      20 |     await expect(page.getByLabel(/password/i)).toBeVisible()
      21 |     await expect(page.getByRole('button', { name: /sign in|login/i })).toBeVisible()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:18:73

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-mobile-chrome-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-mobile-chrome-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-renders-the-login-form-mobile-chrome-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-mobile-chrome-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/auth-login-Login-page-renders-the-login-form-mobile-chrome-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: /sign in|login/i })
    Expected: visible
    Timeout: 5000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" getByRole('heading', { name: /sign in|login/i }) with timeout 5000ms
      - waiting for getByRole('heading', { name: /sign in|login/i })


      16 |
      17 |   test('renders the login form', async ({ page }) => {
    > 18 |     await expect(page.getByRole('heading', { name: /sign in|login/i })).toBeVisible()
         |                                                                         ^
      19 |     await expect(page.getByLabel(/email/i)).toBeVisible()
      20 |     await expect(page.getByLabel(/password/i)).toBeVisible()
      21 |     await expect(page.getByRole('button', { name: /sign in|login/i })).toBeVisible()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:18:73

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-mobile-chrome-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-mobile-chrome-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-renders-the-login-form-mobile-chrome-retry2/error-context.md

  10) [mobile-chrome] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission 

    Test timeout of 30000ms exceeded.

    Error: locator.click: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByRole('button', { name: /sign in|login/i })


      23 |
      24 |   test('shows validation error for empty submission', async ({ page }) => {
    > 25 |     await page.getByRole('button', { name: /sign in|login/i }).click()
         |                                                                ^
      26 |     // Expect at least one error message or HTML5 validation
      27 |     const emailInput = page.getByLabel(/email/i)
      28 |     await expect(emailInput).toBeFocused()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:25:64

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-mobile-chrome/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-mobile-chrome/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-mobile-chrome/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Test timeout of 30000ms exceeded.

    Error: locator.click: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByRole('button', { name: /sign in|login/i })


      23 |
      24 |   test('shows validation error for empty submission', async ({ page }) => {
    > 25 |     await page.getByRole('button', { name: /sign in|login/i }).click()
         |                                                                ^
      26 |     // Expect at least one error message or HTML5 validation
      27 |     const emailInput = page.getByLabel(/email/i)
      28 |     await expect(emailInput).toBeFocused()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:25:64

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-mobile-chrome-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-mobile-chrome-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-mobile-chrome-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-mobile-chrome-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-mobile-chrome-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Test timeout of 30000ms exceeded.

    Error: locator.click: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByRole('button', { name: /sign in|login/i })


      23 |
      24 |   test('shows validation error for empty submission', async ({ page }) => {
    > 25 |     await page.getByRole('button', { name: /sign in|login/i }).click()
         |                                                                ^
      26 |     // Expect at least one error message or HTML5 validation
      27 |     const emailInput = page.getByLabel(/email/i)
      28 |     await expect(emailInput).toBeFocused()
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:25:64

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-mobile-chrome-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-mobile-chrome-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-mobile-chrome-retry2/error-context.md

  11) [mobile-chrome] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials 

    Test timeout of 30000ms exceeded.

    Error: locator.fill: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByLabel(/email/i)


      30 |
      31 |   test('shows error for invalid credentials', async ({ page }) => {
    > 32 |     await page.getByLabel(/email/i).fill('invalid@test.com')
         |                                     ^
      33 |     await page.getByLabel(/password/i).fill('wrongpassword')
      34 |     await page.getByRole('button', { name: /sign in|login/i }).click()
      35 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:32:37

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-mobile-chrome/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-mobile-chrome/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-shows-error-for-invalid-credentials-mobile-chrome/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Test timeout of 30000ms exceeded.

    Error: locator.fill: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByLabel(/email/i)


      30 |
      31 |   test('shows error for invalid credentials', async ({ page }) => {
    > 32 |     await page.getByLabel(/email/i).fill('invalid@test.com')
         |                                     ^
      33 |     await page.getByLabel(/password/i).fill('wrongpassword')
      34 |     await page.getByRole('button', { name: /sign in|login/i }).click()
      35 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:32:37

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-mobile-chrome-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-mobile-chrome-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-shows-error-for-invalid-credentials-mobile-chrome-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-mobile-chrome-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/auth-login-Login-page-shows-error-for-invalid-credentials-mobile-chrome-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Test timeout of 30000ms exceeded.

    Error: locator.fill: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByLabel(/email/i)


      30 |
      31 |   test('shows error for invalid credentials', async ({ page }) => {
    > 32 |     await page.getByLabel(/email/i).fill('invalid@test.com')
         |                                     ^
      33 |     await page.getByLabel(/password/i).fill('wrongpassword')
      34 |     await page.getByRole('button', { name: /sign in|login/i }).click()
      35 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:32:37

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-mobile-chrome-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-mobile-chrome-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-shows-error-for-invalid-credentials-mobile-chrome-retry2/error-context.md

  12) [mobile-chrome] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login 

    Error: expect(page).toHaveURL(expected) failed

    Expected pattern: /\/login/
    Received string:  "http://localhost:3000/transfer"
    Timeout: 5000ms

    Call log:
      - Expect "toHaveURL" with timeout 5000ms
        14 × locator resolved to <html lang="en">…</html>
           - unexpected value "http://localhost:3000/transfer"


      12 |     await page.goto('/transfer')
      13 |     // Should redirect to login when not authenticated
    > 14 |     await expect(page).toHaveURL(/\/login/)
         |                        ^
      15 |   })
      16 |
      17 |   test('transfer page has correct page title', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:14:24

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-mobile-chrome/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-mobile-chrome/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-mobile-chrome/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(page).toHaveURL(expected) failed

    Expected pattern: /\/login/
    Received string:  "http://localhost:3000/transfer"
    Timeout: 5000ms

    Call log:
      - Expect "toHaveURL" with timeout 5000ms
        14 × locator resolved to <html lang="en">…</html>
           - unexpected value "http://localhost:3000/transfer"


      12 |     await page.goto('/transfer')
      13 |     // Should redirect to login when not authenticated
    > 14 |     await expect(page).toHaveURL(/\/login/)
         |                        ^
      15 |   })
      16 |
      17 |   test('transfer page has correct page title', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:14:24

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-mobile-chrome-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-mobile-chrome-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-mobile-chrome-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-mobile-chrome-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-mobile-chrome-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(page).toHaveURL(expected) failed

    Expected pattern: /\/login/
    Received string:  "http://localhost:3000/transfer"
    Timeout: 5000ms

    Call log:
      - Expect "toHaveURL" with timeout 5000ms
        14 × locator resolved to <html lang="en">…</html>
           - unexpected value "http://localhost:3000/transfer"


      12 |     await page.goto('/transfer')
      13 |     // Should redirect to login when not authenticated
    > 14 |     await expect(page).toHaveURL(/\/login/)
         |                        ^
      15 |   })
      16 |
      17 |   test('transfer page has correct page title', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:14:24

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-mobile-chrome-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-mobile-chrome-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-mobile-chrome-retry2/error-context.md

  12 failed
    [chromium] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form ─────────────────
    [chromium] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission 
    [chromium] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials ────
    [chromium] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login 
    [firefox] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form ──────────────────
    [firefox] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission 
    [firefox] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials ─────
    [firefox] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login 
    [mobile-chrome] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form ────────────
    [mobile-chrome] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission 
    [mobile-chrome] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials 
    [mobile-chrome] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login 
  12 passed (6.2m)
Error: Process completed with exit code 1.