import * as path from "path";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

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
    extensions: [".js", ".ts", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.ts$/,
        use: "awesome-typescript-loader",
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
