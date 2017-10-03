import * as path from "path";
import * as ExtractTextPlugin from "extract-text-webpack-plugin";

export default {
  entry: {
    impress: path.join(__dirname, "src/impress.ts")
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".js", ".ts", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.ts$/,
        use: "awesome-typescript-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].bundle.css"
    })
  ]
};
