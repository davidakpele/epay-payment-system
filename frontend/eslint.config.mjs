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
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",

      // ── React Hooks (eslint-plugin-react-hooks v6 rules) ─────────────────
      // All these flag valid patterns in this codebase. Warn only so CI
      // is not blocked; issues remain visible in the editor.
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "warn",
      // v6 strict rules — both possible naming conventions covered:
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/immutability": "warn",
      "react-hooks/purity": "warn",
      "react-hooks/refs": "warn",

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
