import browserEnv from 'browser-env'
browserEnv(['window', 'document', 'navigator'])

function noop () {
  return {}
}
require.extensions['.css'] = noop
require.extensions['.png'] = function () { return null }
