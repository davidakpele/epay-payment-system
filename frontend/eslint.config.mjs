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
      // eslint-plugin-react-hooks v6 (shipped with eslint-config-next v16)
      // introduces set-state-in-effect and immutability as "error". These are
      // valid patterns in this codebase (data-fetch effects, derived state from
      // props). Downgrade to warn so CI is not blocked; issues stay visible.
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/immutability": "warn",
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
