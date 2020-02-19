const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const URLImportPlugin = require("webpack-external-import/webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    compress: true,
    port: 3001
  },
  // `HtmlWebpackPlugin` will generate index.html into the build folder
  plugins: [
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new URLImportPlugin({
      manifestName: "metalK8s"
    })
  ]
};
