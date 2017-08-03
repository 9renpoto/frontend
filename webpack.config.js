/* @flow */
const path = require('path')
const webpack = require('webpack')
const { version, name, author } = require('./package.json')

const date = new Date()
const env = process.env.NODE_ENV || 'local'

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.png', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png'
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['isomorphic-style-loader', 'css-loader', 'sass-loader']
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
