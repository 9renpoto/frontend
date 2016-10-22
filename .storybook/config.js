import { configure } from '@kadira/storybook'
import '../style.css'

const req = require.context('../dist/stories', true, /.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
