const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    'impress': path.join(__dirname, '/src/impress.ts')
  },
  output: {
    sourceMapFilename: '[name].bundle.map',
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js'
  },
  devtool: '#source-map',
  resolve: {
    alias: {
      'impress': path.join(__dirname, 'node_modules/impress.js/js/impress.js'),
      'impress.css': path.join(__dirname, 'node_modules/impress.js/css/impress-demo.css')
    },
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.ts$/, loader: 'awesome-typescript-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: true,
      preserveComments: true
    }),
    new ExtractTextPlugin('[name].bundle.css')
  ]
}
