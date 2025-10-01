const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    compress: true,
    hot: true,
    port: 9000,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        sideEffects: true,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
})
