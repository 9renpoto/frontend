module.exports = async ({ config: defaultConfig }) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('ts-loader'),
    options: {
      transpileOnly: true,
    },
  })

  defaultConfig.resolve.extensions.push('.ts', '.tsx', '.jsx', '.js')

  return defaultConfig
}
