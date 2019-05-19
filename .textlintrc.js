const { rules } = require('@9renpoto/textlint-config-ja')

module.exports = {
  filters: {
    comments: true
  },
  rules: {
    ...rules
  }
}
