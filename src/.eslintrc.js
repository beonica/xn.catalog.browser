module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 9,
    sourceType: "module"
  }
};
