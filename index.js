module.exports = {
  extends: 'standard',
  plugins: [
    'standard',
    'eslint-comments'
  ],
  env: {
    'browser': true
  },
  rules: {
    'eslint-comments/disable-enable-pair': 1,
    'eslint-comments/no-duplicate-disable': 1,
    'eslint-comments/no-unlimited-disable': 1,
    'eslint-comments/no-unused-disable': 1,
    'eslint-comments/no-unused-enable': 1,
    'no-else-return': 2,
    'no-var': 2,
    'prefer-const': 2,
    'valid-jsdoc': 2
  }
}
