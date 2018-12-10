const initStoryshots = require('@storybook/addon-storyshots').default
const faker = require('faker')
faker.seed(123)
initStoryshots({
  storyKindRegex: /^((?!.*?DontTest).)*$/
})
