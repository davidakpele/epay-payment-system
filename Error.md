1m 36s
Run npm run test:e2e

> frontend@0.1.0 test:e2e
> playwright test


Running 24 tests using 2 workers

  ✘   1 [chromium] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (488ms)
  ✘   2 [chromium] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (544ms)
  ✘   4 [chromium] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (retry #1) (566ms)
  ✘   3 [chromium] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (retry #1) (626ms)
  ✘   6 [chromium] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (retry #2) (525ms)
  ✘   5 [chromium] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (retry #2) (561ms)
  ✘   7 [chromium] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (599ms)
  ✘   8 [chromium] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load (554ms)
  ✘   9 [chromium] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (retry #1) (670ms)
  ✘  10 [chromium] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load (retry #1) (530ms)
  ✘  11 [chromium] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (retry #2) (666ms)
  ✘  12 [chromium] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load (retry #2) (549ms)
  ✘  14 [chromium] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title (481ms)
  ✘  13 [chromium] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (590ms)
  ✘  15 [chromium] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title (retry #1) (684ms)
  ✘  16 [chromium] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (retry #1) (690ms)
  ✘  18 [chromium] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (retry #2) (471ms)
  ✘  17 [chromium] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title (retry #2) (613ms)
  ✘  20 [chromium] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors (449ms)
  ✘  19 [chromium] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated (589ms)
  ✘  21 [chromium] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated (retry #1) (628ms)
  ✘  22 [chromium] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors (retry #1) (716ms)
  ✘  23 [chromium] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated (retry #2) (479ms)
  ✘  24 [chromium] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors (retry #2) (619ms)
  ✘  25 [firefox] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (2.9s)
  ✘  26 [firefox] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (2.9s)
  ✘  27 [firefox] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (retry #1) (2.5s)
  ✘  28 [firefox] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (retry #1) (2.6s)
  ✘  29 [firefox] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (retry #2) (5.3s)
  ✘  30 [firefox] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (retry #2) (5.5s)
  ✘  31 [firefox] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (3.0s)
  ✘  32 [firefox] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load (2.7s)
  ✘  34 [firefox] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load (retry #1) (2.6s)
  ✘  33 [firefox] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (retry #1) (3.5s)
  ✘  35 [firefox] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load (retry #2) (2.6s)
  ✘  36 [firefox] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (retry #2) (3.0s)
  ✘  37 [firefox] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (2.4s)
  ✘  38 [firefox] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title (2.4s)
  ✘  39 [firefox] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (retry #1) (2.6s)
  ✘  40 [firefox] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title (retry #1) (2.7s)
  ✘  41 [firefox] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (retry #2) (2.9s)
  ✘  42 [firefox] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title (retry #2) (2.6s)
  ✘  43 [firefox] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated (2.8s)
  ✘  44 [firefox] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors (2.7s)
  ✘  45 [firefox] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated (retry #1) (2.9s)
  ✘  46 [firefox] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors (retry #1) (2.8s)
  ✘  47 [firefox] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated (retry #2) (2.9s)
  ✘  48 [firefox] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors (retry #2) (2.9s)
  ✘  49 [mobile-chrome] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (470ms)
  ✘  50 [mobile-chrome] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (614ms)
  ✘  51 [mobile-chrome] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (retry #1) (647ms)
  ✘  52 [mobile-chrome] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (retry #1) (705ms)
  ✘  53 [mobile-chrome] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form (retry #2) (536ms)
  ✘  54 [mobile-chrome] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission (retry #2) (597ms)
  ✘  55 [mobile-chrome] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (561ms)
  ✘  56 [mobile-chrome] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load (691ms)
  ✘  57 [mobile-chrome] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (retry #1) (700ms)
  ✘  58 [mobile-chrome] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load (retry #1) (700ms)
  ✘  59 [mobile-chrome] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials (retry #2) (471ms)
  ✘  60 [mobile-chrome] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load (retry #2) (599ms)
  ✘  61 [mobile-chrome] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (476ms)
  ✘  62 [mobile-chrome] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title (624ms)
  ✘  63 [mobile-chrome] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (retry #1) (714ms)
  ✘  64 [mobile-chrome] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title (retry #1) (625ms)
  ✘  65 [mobile-chrome] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login (retry #2) (647ms)
  ✘  66 [mobile-chrome] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title (retry #2) (596ms)
  ✘  67 [mobile-chrome] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated (665ms)
  ✘  68 [mobile-chrome] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors (498ms)
  ✘  69 [mobile-chrome] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated (retry #1) (505ms)
  ✘  71 [mobile-chrome] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated (retry #2) (585ms)
  ✘  70 [mobile-chrome] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors (retry #1) (724ms)
  ✘  72 [mobile-chrome] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors (retry #2) (346ms)


  1) [chromium] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form ────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-chromium/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-renders-the-login-form-chromium/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

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

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-chromium-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-chromium-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-renders-the-login-form-chromium-retry2/error-context.md

  2) [chromium] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission 

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-chromium/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-chromium/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

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

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-chromium-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-chromium-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-chromium-retry2/error-context.md

  3) [chromium] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials ───

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-chromium/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-shows-error-for-invalid-credentials-chromium/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

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

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-chromium-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-chromium-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-shows-error-for-invalid-credentials-chromium-retry2/error-context.md

  4) [chromium] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load 

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-chromium/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-chromium/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-chromium-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-chromium-retry1/error-context.md

    attachment #3: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-chromium-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-chromium-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-chromium-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-chromium-retry2/error-context.md

  5) [chromium] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login 

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/transfer
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      10 | test.describe('Transfer page', () => {
      11 |   test('redirects unauthenticated users to login', async ({ page }) => {
    > 12 |     await page.goto('/transfer')
         |                ^
      13 |     // Should redirect to login when not authenticated
      14 |     await expect(page).toHaveURL(/\/login/)
      15 |   })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:12:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-chromium/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-chromium/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/transfer
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      10 | test.describe('Transfer page', () => {
      11 |   test('redirects unauthenticated users to login', async ({ page }) => {
    > 12 |     await page.goto('/transfer')
         |                ^
      13 |     // Should redirect to login when not authenticated
      14 |     await expect(page).toHaveURL(/\/login/)
      15 |   })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:12:16

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

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/transfer
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      10 | test.describe('Transfer page', () => {
      11 |   test('redirects unauthenticated users to login', async ({ page }) => {
    > 12 |     await page.goto('/transfer')
         |                ^
      13 |     // Should redirect to login when not authenticated
      14 |     await expect(page).toHaveURL(/\/login/)
      15 |   })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:12:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-chromium-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-chromium-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-chromium-retry2/error-context.md

  6) [chromium] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title 

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/transfer
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      17 |   test('transfer page has correct page title', async ({ page }) => {
      18 |     // Navigate directly — if redirected, that itself is the assertion
    > 19 |     await page.goto('/transfer')
         |                ^
      20 |     await expect(page).toHaveTitle(/epay|transfer|payment/i)
      21 |   })
      22 | })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:19:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-chromium/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-chromium/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/transfer
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      17 |   test('transfer page has correct page title', async ({ page }) => {
      18 |     // Navigate directly — if redirected, that itself is the assertion
    > 19 |     await page.goto('/transfer')
         |                ^
      20 |     await expect(page).toHaveTitle(/epay|transfer|payment/i)
      21 |   })
      22 | })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:19:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-chromium-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-chromium-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-chromium-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-chromium-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-chromium-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/transfer
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      17 |   test('transfer page has correct page title', async ({ page }) => {
      18 |     // Navigate directly — if redirected, that itself is the assertion
    > 19 |     await page.goto('/transfer')
         |                ^
      20 |     await expect(page).toHaveTitle(/epay|transfer|payment/i)
      21 |   })
      22 | })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:19:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-chromium-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-chromium-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-chromium-retry2/error-context.md

  7) [chromium] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated 

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/dashboard
    Call log:
      - navigating to "http://localhost:3000/dashboard", waiting until "load"


      24 | test.describe('Dashboard', () => {
      25 |   test('dashboard redirects to login when unauthenticated', async ({ page }) => {
    > 26 |     await page.goto('/dashboard')
         |                ^
      27 |     await expect(page).toHaveURL(/\/login/)
      28 |   })
      29 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:26:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-chromium/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-chromium/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/dashboard
    Call log:
      - navigating to "http://localhost:3000/dashboard", waiting until "load"


      24 | test.describe('Dashboard', () => {
      25 |   test('dashboard redirects to login when unauthenticated', async ({ page }) => {
    > 26 |     await page.goto('/dashboard')
         |                ^
      27 |     await expect(page).toHaveURL(/\/login/)
      28 |   })
      29 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:26:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-chromium-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-chromium-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-chromium-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-chromium-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-chromium-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/dashboard
    Call log:
      - navigating to "http://localhost:3000/dashboard", waiting until "load"


      24 | test.describe('Dashboard', () => {
      25 |   test('dashboard redirects to login when unauthenticated', async ({ page }) => {
    > 26 |     await page.goto('/dashboard')
         |                ^
      27 |     await expect(page).toHaveURL(/\/login/)
      28 |   })
      29 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:26:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-chromium-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-chromium-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-chromium-retry2/error-context.md

  8) [chromium] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors 

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
    Call log:
      - navigating to "http://localhost:3000/", waiting until "load"


      32 |     page.on('pageerror', (err) => errors.push(err.message))
      33 |
    > 34 |     await page.goto('/')
         |                ^
      35 |     await page.waitForLoadState('networkidle')
      36 |
      37 |     expect(errors).toHaveLength(0)
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:34:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-chromium/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-chromium/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
    Call log:
      - navigating to "http://localhost:3000/", waiting until "load"


      32 |     page.on('pageerror', (err) => errors.push(err.message))
      33 |
    > 34 |     await page.goto('/')
         |                ^
      35 |     await page.waitForLoadState('networkidle')
      36 |
      37 |     expect(errors).toHaveLength(0)
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:34:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-chromium-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-chromium-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-chromium-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-chromium-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-chromium-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
    Call log:
      - navigating to "http://localhost:3000/", waiting until "load"


      32 |     page.on('pageerror', (err) => errors.push(err.message))
      33 |
    > 34 |     await page.goto('/')
         |                ^
      35 |     await page.waitForLoadState('networkidle')
      36 |
      37 |     expect(errors).toHaveLength(0)
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:34:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-chromium-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-chromium-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-chromium-retry2/error-context.md

  9) [firefox] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form ─────────────────

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-firefox/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-firefox/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-renders-the-login-form-firefox/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

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

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-firefox-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-firefox-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-renders-the-login-form-firefox-retry2/error-context.md

  10) [firefox] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission 

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-firefox/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-firefox/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-firefox/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

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

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-firefox-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-firefox-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-firefox-retry2/error-context.md

  11) [firefox] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials ───

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-firefox/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-firefox/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-shows-error-for-invalid-credentials-firefox/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

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

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-firefox-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-firefox-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-shows-error-for-invalid-credentials-firefox-retry2/error-context.md

  12) [firefox] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load 

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-firefox/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-firefox/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-firefox/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-firefox-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-firefox-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-firefox-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-firefox-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-firefox-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-firefox-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-firefox-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-firefox-retry2/error-context.md

  13) [firefox] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login 

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      10 | test.describe('Transfer page', () => {
      11 |   test('redirects unauthenticated users to login', async ({ page }) => {
    > 12 |     await page.goto('/transfer')
         |                ^
      13 |     // Should redirect to login when not authenticated
      14 |     await expect(page).toHaveURL(/\/login/)
      15 |   })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:12:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-firefox/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-firefox/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-firefox/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      10 | test.describe('Transfer page', () => {
      11 |   test('redirects unauthenticated users to login', async ({ page }) => {
    > 12 |     await page.goto('/transfer')
         |                ^
      13 |     // Should redirect to login when not authenticated
      14 |     await expect(page).toHaveURL(/\/login/)
      15 |   })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:12:16

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

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      10 | test.describe('Transfer page', () => {
      11 |   test('redirects unauthenticated users to login', async ({ page }) => {
    > 12 |     await page.goto('/transfer')
         |                ^
      13 |     // Should redirect to login when not authenticated
      14 |     await expect(page).toHaveURL(/\/login/)
      15 |   })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:12:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-firefox-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-firefox-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-firefox-retry2/error-context.md

  14) [firefox] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title 

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      17 |   test('transfer page has correct page title', async ({ page }) => {
      18 |     // Navigate directly — if redirected, that itself is the assertion
    > 19 |     await page.goto('/transfer')
         |                ^
      20 |     await expect(page).toHaveTitle(/epay|transfer|payment/i)
      21 |   })
      22 | })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:19:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-firefox/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-firefox/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-firefox/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      17 |   test('transfer page has correct page title', async ({ page }) => {
      18 |     // Navigate directly — if redirected, that itself is the assertion
    > 19 |     await page.goto('/transfer')
         |                ^
      20 |     await expect(page).toHaveTitle(/epay|transfer|payment/i)
      21 |   })
      22 | })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:19:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-firefox-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-firefox-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-firefox-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-firefox-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-firefox-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      17 |   test('transfer page has correct page title', async ({ page }) => {
      18 |     // Navigate directly — if redirected, that itself is the assertion
    > 19 |     await page.goto('/transfer')
         |                ^
      20 |     await expect(page).toHaveTitle(/epay|transfer|payment/i)
      21 |   })
      22 | })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:19:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-firefox-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-firefox-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-firefox-retry2/error-context.md

  15) [firefox] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated 

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/dashboard", waiting until "load"


      24 | test.describe('Dashboard', () => {
      25 |   test('dashboard redirects to login when unauthenticated', async ({ page }) => {
    > 26 |     await page.goto('/dashboard')
         |                ^
      27 |     await expect(page).toHaveURL(/\/login/)
      28 |   })
      29 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:26:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-firefox/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-firefox/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-firefox/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/dashboard", waiting until "load"


      24 | test.describe('Dashboard', () => {
      25 |   test('dashboard redirects to login when unauthenticated', async ({ page }) => {
    > 26 |     await page.goto('/dashboard')
         |                ^
      27 |     await expect(page).toHaveURL(/\/login/)
      28 |   })
      29 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:26:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-firefox-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-firefox-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-firefox-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-firefox-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-firefox-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/dashboard", waiting until "load"


      24 | test.describe('Dashboard', () => {
      25 |   test('dashboard redirects to login when unauthenticated', async ({ page }) => {
    > 26 |     await page.goto('/dashboard')
         |                ^
      27 |     await expect(page).toHaveURL(/\/login/)
      28 |   })
      29 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:26:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-firefox-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-firefox-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-firefox-retry2/error-context.md

  16) [firefox] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors 

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/", waiting until "load"


      32 |     page.on('pageerror', (err) => errors.push(err.message))
      33 |
    > 34 |     await page.goto('/')
         |                ^
      35 |     await page.waitForLoadState('networkidle')
      36 |
      37 |     expect(errors).toHaveLength(0)
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:34:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-firefox/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-firefox/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-firefox/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/", waiting until "load"


      32 |     page.on('pageerror', (err) => errors.push(err.message))
      33 |
    > 34 |     await page.goto('/')
         |                ^
      35 |     await page.waitForLoadState('networkidle')
      36 |
      37 |     expect(errors).toHaveLength(0)
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:34:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-firefox-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-firefox-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-firefox-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-firefox-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-firefox-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:3000/", waiting until "load"


      32 |     page.on('pageerror', (err) => errors.push(err.message))
      33 |
    > 34 |     await page.goto('/')
         |                ^
      35 |     await page.waitForLoadState('networkidle')
      36 |
      37 |     expect(errors).toHaveLength(0)
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:34:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-firefox-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-firefox-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-firefox-retry2/error-context.md

  17) [mobile-chrome] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form ──────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-mobile-chrome/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-mobile-chrome/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-renders-the-login-form-mobile-chrome/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

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

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-mobile-chrome-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-renders-the-login-form-mobile-chrome-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-renders-the-login-form-mobile-chrome-retry2/error-context.md

  18) [mobile-chrome] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission 

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-mobile-chrome/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-mobile-chrome/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-mobile-chrome/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

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

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-mobile-chrome-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-mobile-chrome-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-show-b416d--error-for-empty-submission-mobile-chrome-retry2/error-context.md

  19) [mobile-chrome] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials 

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-mobile-chrome/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-mobile-chrome/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-shows-error-for-invalid-credentials-mobile-chrome/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

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

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-mobile-chrome-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-shows-error-for-invalid-credentials-mobile-chrome-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-shows-error-for-invalid-credentials-mobile-chrome-retry2/error-context.md

  20) [mobile-chrome] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load 

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-mobile-chrome/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-mobile-chrome/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-mobile-chrome/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-mobile-chrome-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-mobile-chrome-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-mobile-chrome-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-mobile-chrome-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-mobile-chrome-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
    Call log:
      - navigating to "http://localhost:3000/login", waiting until "load"


      12 | test.describe('Login page', () => {
      13 |   test.beforeEach(async ({ page }) => {
    > 14 |     await page.goto('/login')
         |                ^
      15 |   })
      16 |
      17 |   test('renders the login form', async ({ page }) => {
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/auth/login.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-mobile-chrome-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-mobile-chrome-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/auth-login-Login-page-has--32053-sibility-violations-on-load-mobile-chrome-retry2/error-context.md

  21) [mobile-chrome] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login 

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/transfer
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      10 | test.describe('Transfer page', () => {
      11 |   test('redirects unauthenticated users to login', async ({ page }) => {
    > 12 |     await page.goto('/transfer')
         |                ^
      13 |     // Should redirect to login when not authenticated
      14 |     await expect(page).toHaveURL(/\/login/)
      15 |   })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:12:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-mobile-chrome/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-mobile-chrome/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-mobile-chrome/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/transfer
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      10 | test.describe('Transfer page', () => {
      11 |   test('redirects unauthenticated users to login', async ({ page }) => {
    > 12 |     await page.goto('/transfer')
         |                ^
      13 |     // Should redirect to login when not authenticated
      14 |     await expect(page).toHaveURL(/\/login/)
      15 |   })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:12:16

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

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/transfer
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      10 | test.describe('Transfer page', () => {
      11 |   test('redirects unauthenticated users to login', async ({ page }) => {
    > 12 |     await page.goto('/transfer')
         |                ^
      13 |     // Should redirect to login when not authenticated
      14 |     await expect(page).toHaveURL(/\/login/)
      15 |   })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:12:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-mobile-chrome-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-mobile-chrome-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--20d6d-uthenticated-users-to-login-mobile-chrome-retry2/error-context.md

  22) [mobile-chrome] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title 

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/transfer
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      17 |   test('transfer page has correct page title', async ({ page }) => {
      18 |     // Navigate directly — if redirected, that itself is the assertion
    > 19 |     await page.goto('/transfer')
         |                ^
      20 |     await expect(page).toHaveTitle(/epay|transfer|payment/i)
      21 |   })
      22 | })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:19:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-mobile-chrome/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-mobile-chrome/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-mobile-chrome/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/transfer
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      17 |   test('transfer page has correct page title', async ({ page }) => {
      18 |     // Navigate directly — if redirected, that itself is the assertion
    > 19 |     await page.goto('/transfer')
         |                ^
      20 |     await expect(page).toHaveTitle(/epay|transfer|payment/i)
      21 |   })
      22 | })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:19:16

    attachment #1: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-mobile-chrome-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-mobile-chrome-retry1/error-context.md

    attachment #3: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-mobile-chrome-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-mobile-chrome-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/transfer
    Call log:
      - navigating to "http://localhost:3000/transfer", waiting until "load"


      17 |   test('transfer page has correct page title', async ({ page }) => {
      18 |     // Navigate directly — if redirected, that itself is the assertion
    > 19 |     await page.goto('/transfer')
         |                ^
      20 |     await expect(page).toHaveTitle(/epay|transfer|payment/i)
      21 |   })
      22 | })
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:19:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-mobile-chrome-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-mobile-chrome-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Transfer--2356c-page-has-correct-page-title-mobile-chrome-retry2/error-context.md

  23) [mobile-chrome] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated 

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/dashboard
    Call log:
      - navigating to "http://localhost:3000/dashboard", waiting until "load"


      24 | test.describe('Dashboard', () => {
      25 |   test('dashboard redirects to login when unauthenticated', async ({ page }) => {
    > 26 |     await page.goto('/dashboard')
         |                ^
      27 |     await expect(page).toHaveURL(/\/login/)
      28 |   })
      29 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:26:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-mobile-chrome/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-mobile-chrome/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-mobile-chrome/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/dashboard
    Call log:
      - navigating to "http://localhost:3000/dashboard", waiting until "load"


      24 | test.describe('Dashboard', () => {
      25 |   test('dashboard redirects to login when unauthenticated', async ({ page }) => {
    > 26 |     await page.goto('/dashboard')
         |                ^
      27 |     await expect(page).toHaveURL(/\/login/)
      28 |   })
      29 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:26:16

    attachment #1: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-mobile-chrome-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-mobile-chrome-retry1/error-context.md

    attachment #3: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-mobile-chrome-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-mobile-chrome-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/dashboard
    Call log:
      - navigating to "http://localhost:3000/dashboard", waiting until "load"


      24 | test.describe('Dashboard', () => {
      25 |   test('dashboard redirects to login when unauthenticated', async ({ page }) => {
    > 26 |     await page.goto('/dashboard')
         |                ^
      27 |     await expect(page).toHaveURL(/\/login/)
      28 |   })
      29 |
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:26:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-mobile-chrome-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-mobile-chrome-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-4661c--login-when-unauthenticated-mobile-chrome-retry2/error-context.md

  24) [mobile-chrome] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors 

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
    Call log:
      - navigating to "http://localhost:3000/", waiting until "load"


      32 |     page.on('pageerror', (err) => errors.push(err.message))
      33 |
    > 34 |     await page.goto('/')
         |                ^
      35 |     await page.waitForLoadState('networkidle')
      36 |
      37 |     expect(errors).toHaveLength(0)
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:34:16

    attachment #1: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-mobile-chrome/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-mobile-chrome/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
    Call log:
      - navigating to "http://localhost:3000/", waiting until "load"


      32 |     page.on('pageerror', (err) => errors.push(err.message))
      33 |
    > 34 |     await page.goto('/')
         |                ^
      35 |     await page.waitForLoadState('networkidle')
      36 |
      37 |     expect(errors).toHaveLength(0)
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:34:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-mobile-chrome-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-mobile-chrome-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-mobile-chrome-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-mobile-chrome-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-mobile-chrome-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
    Call log:
      - navigating to "http://localhost:3000/", waiting until "load"


      32 |     page.on('pageerror', (err) => errors.push(err.message))
      33 |
    > 34 |     await page.goto('/')
         |                ^
      35 |     await page.waitForLoadState('networkidle')
      36 |
      37 |     expect(errors).toHaveLength(0)
        at /home/runner/work/epay-payment-system/epay-payment-system/frontend/e2e/payment/transfer.spec.ts:34:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-mobile-chrome-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-mobile-chrome-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/payment-transfer-Dashboard-home-page-loads-without-JS-errors-mobile-chrome-retry2/error-context.md

  24 failed
    [chromium] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form ─────────────────
    [chromium] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission 
    [chromium] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials ────
    [chromium] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load 
    [chromium] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login 
    [chromium] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title 
    [chromium] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated 
    [chromium] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors ─
    [firefox] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form ──────────────────
    [firefox] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission 
    [firefox] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials ─────
    [firefox] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load 
    [firefox] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login 
    [firefox] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title 
    [firefox] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated 
    [firefox] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors ──
    [mobile-chrome] › e2e/auth/login.spec.ts:17:7 › Login page › renders the login form ────────────
    [mobile-chrome] › e2e/auth/login.spec.ts:24:7 › Login page › shows validation error for empty submission 
    [mobile-chrome] › e2e/auth/login.spec.ts:31:7 › Login page › shows error for invalid credentials 
    [mobile-chrome] › e2e/auth/login.spec.ts:42:7 › Login page › has no detectable accessibility violations on load 
    [mobile-chrome] › e2e/payment/transfer.spec.ts:11:7 › Transfer page › redirects unauthenticated users to login 
    [mobile-chrome] › e2e/payment/transfer.spec.ts:17:7 › Transfer page › transfer page has correct page title 
    [mobile-chrome] › e2e/payment/transfer.spec.ts:25:7 › Dashboard › dashboard redirects to login when unauthenticated 
    [mobile-chrome] › e2e/payment/transfer.spec.ts:30:7 › Dashboard › home page loads without JS errors 
Error: Process completed with exit code 1.