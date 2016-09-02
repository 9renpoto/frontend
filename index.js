module.exports = {
  extends: 'standard',
  plugins: [
    'standard'
  ],
  env: {
    'browser': true,
    'mocha': true
  },
  rules: {
    'consistent-return': 2,
    'no-else-return': 2,
    'no-var': 2,
    'prefer-const': 2,
    'valid-jsdoc': 2
  }
}
