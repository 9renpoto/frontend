module.exports = {
  extensions: ['', '.js', '.jsx', '.css'],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1'
        ]
      },
      { test: /\.jsx?$/, loader: 'babel' }
    ]
  }
}
