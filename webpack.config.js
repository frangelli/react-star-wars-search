const path = require("path");
const HtmlWebpackPlubin = require("html-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
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
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      store: path.resolve(__dirname, "./src/store"),
      utils: path.resolve(__dirname, "./src/utils")
    },
    extensions: [".js", ".jsx", ".json", ".scss"]
  },
  plugins: [new HtmlWebpackPlubin({ template: "./src/index.html" })],
  mode: "development"
};
