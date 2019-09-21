module.exports = {
  extends: [
    'prettier',
    'prettier/standard',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  rules: {
    'import/order': [
      'error',
      { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] }
    ],
    'no-else-return': 2,
    'no-var': 2,
    'prefer-const': 2,
    'prefer-destructuring': 2,
    'valid-jsdoc': 2
  }
}
