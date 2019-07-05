const Webpack = require("webpack");
const glob = require("glob");
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require("webpack-node-externals"); //node_modules exclude
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  
  context: resolve('src'),

  entry: {
    'main': './main.ts',
    'public/app': './public/index.ts',
  },

  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".tsx", ".ts", ".json"]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      excludeChunks: ['main'],
      template: `public/index.html`,
      filename: 'public/index.html',
    }),
    new Webpack.IgnorePlugin(/uws/),
  ],
};
