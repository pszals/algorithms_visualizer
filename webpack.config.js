var webpack           = require('webpack');
var path              = require("path");
var JSONLoader        = require("json-loader");

var production = process.env.NODE_ENV === 'production' || false;

module.exports = {
  entry: {
    binarySearch: "./assets/javascript/app/binary-search/main.js"
  },

  output: {
    path: path.resolve(__dirname, "assets/javascript/dist"),
    publicPath: "js",
    filename: "[name].bundle.js",
    chunkFilename: "[id].chunk.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      React: 'react'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['stage-0','es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  }
};
