module.exports = {
  resolve: {
    alias: {
      react: "inferno-compat",
      "react-dom": "inferno-compat"
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    enforceExtension: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
}
