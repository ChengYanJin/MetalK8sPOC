const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: {
    metalMain: "./src/index.js"
  },
  // optimization: {
  //   moduleIds: "named",
  //   chunkIds: "named", //migrate to webpack 5
  //   runtimeChunk: { name: "webpackRuntime" },
  //   splitChunks: { chunks: "all" }
  // },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    publicPath: "/external-component/metalk8s"
  },
  devtool: "inline-source-map",
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
    port: 3001,
    historyApiFallback: true,
    hot: true
  },
  // `HtmlWebpackPlugin` will generate index.html into the build folder
  plugins: [
    new ModuleFederationPlugin({
      name: "metalk8s",
      library: { type: "var", name: "metalk8s" },
      filename: "remoteEntry.js",
      exposes: {
        Node: "./src/Node",
        reducer: "./src/ducks/reducer"
      }
    }),
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
