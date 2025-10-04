const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    compress: true,
    hot: true,
    port: 9000,
    static: {
      directory: path.join(__dirname, 'dist')
    }
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        sideEffects: true,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
})
