/**
 * Declarative Storybook configuration as of Storybook 5.3
 * https://medium.com/storybookjs/declarative-storybook-configuration-49912f77b78
 */
module.exports = {
  stories: ['../src/**/story.tsx'],
  addons: ['@storybook/addon-essentials'],
  // https://github.com/storybookjs/storybook/issues/11146#issuecomment-645341199
  typescript: {
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
      },
    },
  },
}
