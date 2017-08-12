module.exports = {
  plugins: [
    require('postcss-import')(), // require first
    require('cssnano')()
  ]
}
