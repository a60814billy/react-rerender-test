const path = require('path')
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    "airbnb-typescript"
  ],
  parserOptions: {
    project: path.resolve(__dirname, 'tsconfig.json')
  },
  rules: {
    "no-console": "off",
    "no-void": "off"
  },
  ignorePatterns: [".eslintrc.js"],
}
