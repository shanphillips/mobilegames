var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
  // 'webpack-dev-server/client?http://localhost:3009',
  // 'webpack/hot/only-dev-server',
  './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: /src/,
      loader: 'react-hot!babel',
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.scss$/,
      include: /src/,
      loader: ExtractTextPlugin.extract("style", "css!sass")
      // loader: 'style-loader!css-loader?modules'
    },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css']
  },
  plugins: [
  // new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('styles.css')
]
}
