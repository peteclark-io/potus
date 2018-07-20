const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    potus: './src/potus.js',
    contact: './src/contact.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {modules: true, localIdentName: '[name]__[local]--[hash:base64:5]'}},
          {loader: 'sass-loader'}
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  // output: {
  //   path: path.resolve(__dirname, 'build'),
  //   publicPath: '/',
  //   filename: 'app.js'
  // },
  devServer: {
    contentBase: './html',
  }
};
