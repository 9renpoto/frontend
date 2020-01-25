import path from 'path'
import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots'

initStoryshots({
  framework: 'preact',
  suite: 'FileProperties',
  test: multiSnapshotWithOptions({}),
  configPath: path.join(__dirname, '../.storybook'),
})
