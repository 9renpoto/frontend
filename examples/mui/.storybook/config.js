const { configure } = require('@storybook/react')

function loadStories() {
  require('../src/story.tsx')
}

configure(loadStories, module)
