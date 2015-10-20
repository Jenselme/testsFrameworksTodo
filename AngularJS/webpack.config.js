var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./entry.js'],
  devtool: 'eval',
  debug: true,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
      {test: /\.(jpg|jpeg|png|svg|ttf|woff|woff2|eot)$/, loader: 'file?name=[name].[ext]'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};
