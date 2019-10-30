module.exports = {
  extends: ['stylelint-config-prettier'],
  rules: {
    'block-closing-brace-newline-before': 'always',
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global', 'local'] },
    ],
  },
}
