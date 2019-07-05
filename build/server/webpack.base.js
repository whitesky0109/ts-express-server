const Webpack = require("webpack");
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require("webpack-node-externals");

const baseWebpackConfig = require('../webpack.common');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = Object.assign(baseWebpackConfig, {
  target: 'node',
  devtool: "source-map",

  node: {
    __dirname: true,
    __filename: true,
  },

  externals: [nodeExternals()],
  
  context: resolve('src'),
  
  entry: {
    main: './main.ts',
  },

  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: "[name].bundle.js",
  },

  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    }]
  },

  resolve: {
    extensions: [".js", ".tsx", ".ts", ".json"]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new Webpack.IgnorePlugin(/uws/),
  ],
});