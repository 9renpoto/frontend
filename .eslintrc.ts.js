const baseConfig = require("./.eslintrc.js")
const overrideConfig = {
  parser: "typescript-eslint-parser"
}
module.exports = Object.assign({}, baseConfig, overrideConfig)
