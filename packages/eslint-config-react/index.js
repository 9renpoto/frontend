module.exports = {
  extends: ['prettier', 'prettier/react'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
  },
}
