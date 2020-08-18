module.exports = {
  extends: ['stylelint-config-prettier', 'stylelint-config-recess-order'],
  rules: {
    'block-closing-brace-newline-before': 'always',
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global', 'local'] },
    ],
  },
}
