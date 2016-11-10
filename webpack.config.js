module.exports = {
  extensions: ['', '.js', '.jsx', '.css'],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.jsx?$/, loader: 'babel' }
    ]
  }
}
