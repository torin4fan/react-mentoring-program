const path = require('path');
// const webpack = require('webpack');

const config = {
  entry: './app/js/index',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'js/bundle.js',
  },

  devtool: 'eval',

  module: {
    rules: [
      /* {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'eslint-loader',
      }, */
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'app'),
        ],
        query: {
          presets: ['es2015', 'stage-2', 'react'],
        },
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    contentBase: './app',
  },
};

module.exports = config;
