import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    rules: {
      // ── TypeScript ──────────────────────────────────────────────────────
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      // The no-unsafe-* rules require type information (parserOptions.project).
      // eslint-config-next does not configure typed linting, so these rules
      // throw at parse time rather than producing lint warnings. Removed here;
      // TypeScript's own compiler catches the equivalent issues at build time.

      // ── React Hooks ───────────────────────────────────────────────────────
      // Only rules that exist in eslint-plugin-react-hooks (stable API).
      // The experimental v6 strict rules (set-state-in-effect, immutability,
      // purity, refs) are NOT registered by the plugin and must not appear here
      // or ESLint will throw "Definition for rule '…' was not found."
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "warn",

      // ── Next.js ──────────────────────────────────────────────────────────
      "@next/next/no-img-element": "warn",

      // ── General ──────────────────────────────────────────────────────────
      "react/no-unescaped-entities": "warn",
      "prefer-const": "warn",
      "no-unused-expressions": "warn",
    },
  },
]);

export default eslintConfig;
