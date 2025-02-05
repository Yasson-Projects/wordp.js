import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { 
    files: ["**/*.{js,mjs,cjs,ts}"], 
    rules: {
      "eqeqeq": ["error", "always"],
      "no-empty-function": "error",
      "@typescript-eslint/no-duplicate-enum-values": "warn",
      "@typescript-eslint/no-explicit-any": "warn"
    },
    languageOptions: { globals: globals.node },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];