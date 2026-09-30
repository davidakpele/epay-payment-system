import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    rules: {
      // ── TypeScript ──────────────────────────────────────────────────────
      // Downgrade from error to warn — the codebase uses `any` extensively
      // for API response shapes that are not yet fully typed. This keeps
      // the build green while still surfacing the issues in the editor.
      "@typescript-eslint/no-explicit-any": "warn",

      // Unused variables: warn instead of error, and allow underscore-
      // prefixed names as the conventional "intentionally unused" marker.
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

      // ── React Hooks ──────────────────────────────────────────────────────
      // The strict plugin rules below flag valid React patterns (calling
      // setState inside effects, accessing refs in render helpers, etc.).
      // Warn rather than error so CI is not blocked.
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/immutability": "warn",
      "react-hooks/purity": "warn",
      "react-hooks/refs": "warn",

      // ── Next.js ──────────────────────────────────────────────────────────
      // Warn on <img> usage but don't fail the build — some dynamic image
      // sources (user avatars, API-provided URLs) can't easily use next/image.
      "@next/next/no-img-element": "warn",

      // ── General ──────────────────────────────────────────────────────────
      // Unescaped entities and prefer-const are auto-fixable; keep as warn.
      "react/no-unescaped-entities": "warn",
      "prefer-const": "warn",
    },
  },
]);

export default eslintConfig;
