import { defineConfig, devices } from '@playwright/test'

/**
 * Playwright end-to-end test configuration.
 *
 * Run all tests:       npm run test:e2e
 * Run with UI:         npm run test:e2e:ui
 * Show last report:    npm run test:e2e:report
 *
 * Set BASE_URL env var to point at a running frontend instance.
 * Defaults to http://localhost:3000 (local dev server).
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['junit', { outputFile: 'playwright-results.xml' }],
  ],

  use: {
    baseURL: process.env.BASE_URL ?? 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    // Mobile viewport smoke test
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],

  // In CI: start the already-built Next.js server automatically.
  // The build artifact (.next/) is downloaded before tests run.
  // Outside CI: start the dev server automatically.
  webServer: {
    command: process.env.CI
      ? 'node .next/standalone/server.js'
      : 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    env: {
      PORT: '3000',
      HOSTNAME: '0.0.0.0',
      NODE_ENV: 'production',
    },
  },
})
