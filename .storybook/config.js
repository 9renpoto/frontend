const { configure } = require('@storybook/preact')

const req = require.context('..', true, /story.tsx?$/)

configure(() => {
  req.keys().forEach(filename => req(filename))
}, module)
