const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    'impress': path.join(__dirname, '/src/impress.ts')
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      'impress': path.join(__dirname, 'node_modules/impress.js/js/impress.js'),
      'impress.css': path.join(__dirname, 'node_modules/impress.js/css/impress-demo.css')
    },
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'}) },
      { test: /\.ts$/, loader: 'awesome-typescript-loader' }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      compress: true,
      preserveComments: true
    }),
    new ExtractTextPlugin({
      filename: '[name].bundle.css'
    })
  ]
}
