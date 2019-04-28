const path = require("path");
const HtmlWebpackPlubin = require("html-webpack-plugin");

module.exports = {
  entry: "src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [new HtmlWebpackPlubin({ template: "./src/index.html" })],
  mode: "development"
};
