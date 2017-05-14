import {configure} from '@kadira/storybook'
const req = require.context('../stories/', true, /.jsx$/)
configure(() => {
  req.keys().forEach(filename => req(filename))
}, module)
