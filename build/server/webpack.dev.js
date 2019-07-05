const path = require("path");
const baseWebpackConfig = require('./webpack.base');
const NodemonPlugin = require( 'nodemon-webpack-plugin' );

var conf = baseWebpackConfig;
conf = Object.assign(conf, {
    mode: 'development',
    entry: {
        server: './main.ts',
    },
});

// watcher
conf.plugins.push(new NodemonPlugin({
    watch: path.resolve('./dist'),
    script: './dist/server.bundle.js',
}));

module.exports = conf;
