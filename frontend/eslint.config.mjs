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
