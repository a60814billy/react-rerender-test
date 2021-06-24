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
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "react/state-in-constructor": "off"
  },
  ignorePatterns: [".eslintrc.js"],
}
