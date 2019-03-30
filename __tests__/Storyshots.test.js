const {
  default: initStoryshots,
  multiSnapshotWithOptions
} = require('@storybook/addon-storyshots')

initStoryshots({
  framework: 'preact',
  test: multiSnapshotWithOptions({}),
  storyKindRegex: /^((?!.*?DontTest).)*$/
})
