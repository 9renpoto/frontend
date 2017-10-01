module.exports = {
  plugins: [
    require('postcss-import')(), // require first
    require('postcss-nested'),
    require('cssnano')()
  ]
}
