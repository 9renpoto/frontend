const path = require('path')

module.exports = [{
  entry: './index',
  output: {
    path: path.join(__dirname, 'styles'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loader: 'style!css'
      }
    ]
  }
}]
