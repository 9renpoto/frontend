import { configure } from '@storybook/react'
const req = require.context('../stories/', true, /.jsx$/)

configure(() => {
  req.keys().forEach(filename => req(filename))
}, module)
