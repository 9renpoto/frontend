const path = require('path')

module.exports = {
  title: 'My Great Style Guide',
  components: './lib/components/**/*.js',
  updateWebpackConfig: function (webpackConfig, env) {
    const dir = path.join(__dirname, 'src')
    webpackConfig.module.loaders.push(
      {
        test: /\.tsx?$/,
        include: dir,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        include: dir,
        loader: 'style!css?modules&importLoaders=1'
      }
    )
    return webpackConfig
  }
}
