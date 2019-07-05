const Webpack = require( "webpack" );
const glob = require("glob");
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const nodeExternals = require("webpack-node-externals"); //node_modules exclude

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  devtool: "source-map",
  target: 'node',
  mode: "production",
  node: {
    __dirname: true,
    __filename: true,
  },
  externals: [nodeExternals()],
  entry: glob.sync("./**/main.ts"),
  output: {
    path: resolve('dist'),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: [".js", ".tsx", ".ts", ".json"]
  },

  plugins: [
    new CleanWebpackPlugin(['dist'], { root: resolve('/'), }),
    new Webpack.IgnorePlugin(/uws/),
  ],
};
