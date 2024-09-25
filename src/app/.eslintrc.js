/* eslint-disable import/no-commonjs */
/* eslint-disable import/no-unused-modules */
/**
 * This ESLint config applies to all apps.
 */
module.exports = {
  extends: [
    // ESLint rules specific to Next.js apps.
    // See the full list of rules here
    // https://github.com/vercel/next.js/blob/canary/packages/eslint-plugin-next/lib/index.js
    "plugin:@next/next/core-web-vitals",
  ],
  ignorePatterns: [
    // Don't lint build outputs
    ".next",
    // Dont' lint the next-env.d.ts file
    "next-env.d.ts",
    // Don't lint servce worker
    "public/service-worker.js",
  ],
  rules: {
    "@next/next/no-img-element": "off",
  },
}
