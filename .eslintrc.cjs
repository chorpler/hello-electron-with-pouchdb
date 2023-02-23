module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    // "project": "OnSiteX/tsconfig.json",
    "sourceType": "module"
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "semi": "warn"
  }
};
