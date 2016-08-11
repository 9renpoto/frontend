const path = require('path')

module.exports = [{
  entry: './index',
  output: {
    path: path.join(__dirname, 'styles'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.html'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  }
}]
