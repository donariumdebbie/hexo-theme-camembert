const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
  entry: [
    resolve(__dirname, 'source/js/camembert.js')
  ],
  module: {
    loaders: [{
      test: /\.js/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: [
          ['es2015', {
            modules: false,
            loose: true
          }]
        ]
      }
    }]
  },
  plugins: [
    // TODO: Enable uglify and minify.
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     drop_console: false,
    //   }
    // })
  ]
};