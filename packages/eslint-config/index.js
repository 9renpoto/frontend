const { readGitignoreFiles } = require('eslint-gitignore')

module.exports = {
  ignorePatterns: readGitignoreFiles({ cwd: process.cwd() }),
  extends: ['prettier', 'prettier/standard'],
  rules: {
    'no-else-return': 2,
    'no-var': 2,
    'no-console': 2,
    'prefer-const': 2,
    'prefer-destructuring': 2,
    'valid-jsdoc': 2,
  },
}
