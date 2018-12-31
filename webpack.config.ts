const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env: string) => ({
  entry: {
    impress: path.join(__dirname, "apps/slides/src/impress.ts")
  },
  output: {
    path: path.join(__dirname, "apps/slides/dist"),
    filename: "[name].bundle.js"
  },
  mode: !env ? "none" : env === "development" ? "development" : "production",
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          env === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css"
    })
  ]
});
