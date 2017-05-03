/* @flow */
module.exports = {
  extensions: ['', '.js', '.jsx', '.css', 'png'],
  module: {
    loaders: [
      {test: /\.png$/, loader: 'url-loader?mimetype=image/png'},
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?importLoaders=1']
      },
      {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  }
}
