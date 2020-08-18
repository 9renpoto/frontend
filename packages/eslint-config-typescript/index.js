module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@9renpoto/eslint-config',
    'prettier/@typescript-eslint',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
}
