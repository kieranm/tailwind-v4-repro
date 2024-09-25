/* eslint-disable import/no-unused-modules */
/* eslint-disable import/no-commonjs */
/**
 * This ESLint config is common to all workspaces in this monorepo.
 */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      // Allows for the parsing of JSX
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ["dist/", "*.config.js", "**/target/**"],
  extends: [
    // Typescript ESLint rules
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",

    // `eslint-config-prettier` disables ESLint rules that conflict with Prettier.
    "prettier",

    // Configure the import plugin with Typescript settings.
    "plugin:import/typescript",

    // React linting rules
    // Note that these rules are applied to all packages (not just apps) as
    // some packages like component libraries may define React components.
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",

    // Accessibility linting rules
    // Docs: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    "plugin:jsx-a11y/recommended",

    // Jest linting rules
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  plugins: [
    // The import plugin helps us keep imports tidy at the top of files.
    "import",

    // `eslint-plugin-prettier` runs prettier, which keeps code well formatted
    // according to the rules defined in the .prettierrc file.
    "prettier",
  ],
  overrides: [
    {
      files: ["index.ts"],
      rules: {
        // Don't require default exports in index.ts files
        "import/prefer-default-export": "off",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      [require.resolve("eslint-import-resolver-node")]: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      [require.resolve("eslint-import-resolver-typescript")]: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    // -----------------------------
    // ESLint base rules
    // -----------------------------
    // Enable extra rules not already enabled by the eslint:recommended config.
    "array-callback-return": "error",
    "no-await-in-loop": "error",
    "no-constructor-return": "error",
    "no-promise-executor-return": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable-loop": "error",
    "require-atomic-updates": "error",

    // -----------------------------
    // Import rules
    // Docs: https://github.com/import-js/eslint-plugin-import
    // -----------------------------

    // Static Analysis
    "import/no-unresolved": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "error",
    "import/no-webpack-loader-syntax": "error",
    "import/no-self-import": "error",
    "import/no-cycle": "error",
    "import/no-useless-path-segments": "error",
    "import/no-relative-packages": "error",

    // Helpful warnings
    "import/export": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: false,
        optionalDependencies: false,
        bundledDependencies: false,
      },
    ],
    "import/no-mutable-exports": "error",
    "import/no-unused-modules": ["error"],

    // Module rules
    "import/no-commonjs": "error",
    "import/no-amd": "error",
    "import/no-nodejs-modules": "error",
    "import/no-import-module-exports": "error",

    // Style rules
    "import/first": "error",
    "import/no-duplicates": "error",
    "import/no-namespace": "error",
    "import/extensions": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "ignore",
      },
    ],
    "import/newline-after-import": "error",
    "import/no-unassigned-import": ["error", { allow: ["**/*.css"] }],
    "import/no-named-default": "error",
    "import/no-anonymous-default-export": "error",

    // -----------------------------
    // React rules
    // -----------------------------
    // React doesn't need to be imported in every JSX/TSX file
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": [
      "error",
      {
        additionalHooks: "(useRecoilCallback|useRecoilTransaction_UNSTABLE)",
      },
    ],

    // -----------------------------
    // Prettier rules
    // -----------------------------
    // Prettier linting problems should be treated as errors
    "prettier/prettier": ["error"],

    // -----------------------------
    // TypeScript rules
    // -----------------------------
    "@typescript-eslint/no-unused-vars": [
      "error",
      // Ignore rest siblings. This allows for keys to be removed from objects
      // by using the rest operator (...).
      { ignoreRestSiblings: true },
    ],
  },
}
