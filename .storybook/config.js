import { configure } from '@kadira/storybook'
import '../src/style.css'

function loadStories () {
  require('../dist/stories/button')
  // require as many as stories you need.
}

configure(loadStories, module)
