/* @flow */
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const { version, name, author } = require('./package.json')

const date = new Date()
const env = process.env.NODE_ENV || 'local'

const externals = env === 'production' ? [nodeExternals()] : []

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.BannerPlugin({
      banner: `${name} ${version} | Copyright (c) ${date.getFullYear()} ${author}`
    })
  ]
}
