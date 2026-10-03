import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    // Use jsdom so React components can render with a DOM
    environment: 'jsdom',

    // Auto-import @testing-library/jest-dom matchers (toBeInTheDocument, etc.)
    setupFiles: ['./vitest.setup.ts'],

    // Match test files
    include: ['**/__tests__/**/*.{ts,tsx}', '**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', '.next', 'e2e'],

    globals: true,

    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: './coverage',
      // Exclude non-source files and test files from coverage measurement
      exclude: [
        'node_modules/**',
        '.next/**',
        'vitest.config.ts',
        'vitest.setup.ts',
        'playwright.config.ts',
        'e2e/**',
        '**/__tests__/**',
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        '**/*.d.ts',
        'next.config.*',
        'postcss.config.*',
        'tailwind.config.*',
      ],
      // Thresholds reflect current test coverage. Raise these incrementally
      // as more test files are added to the project.
      thresholds: {
        lines:      0,
        functions:  0,
        branches:   0,
        statements: 0,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
