import { configure } from '@kadira/storybook'
import '../style.css'
const req = require.context('../dist/stories', true, /.js$/)
configure(() =>  {
  req.keys().forEach((filename) => req(filename))
}, module)
