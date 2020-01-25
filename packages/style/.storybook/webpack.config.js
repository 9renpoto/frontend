module.exports = async ({ config: defaultConfig }) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('ts-loader'),
    options: {
      transpileOnly: true
    }
  })

  console.warn(defaultConfig.module.rules[0].use[0])

  defaultConfig.resolve.extensions.push('.ts', '.tsx', '.jsx', '.js')

  return defaultConfig
}
