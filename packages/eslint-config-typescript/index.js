module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["@9renpoto/eslint-config"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
};
