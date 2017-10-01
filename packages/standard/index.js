module.exports = {
  extends: ['standard'],
  plugins: ['eslint-comments'],
  env: {
    browser: true
  },
  rules: {
    'eslint-comments/disable-enable-pair': 2,
    'eslint-comments/no-duplicate-disable': 2,
    'eslint-comments/no-unlimited-disable': 2,
    'eslint-comments/no-unused-disable': 2,
    'eslint-comments/no-unused-enable': 2,
    'no-else-return': 2,
    'no-var': 2,
    'prefer-const': 2,
    'valid-jsdoc': 2
  }
}
