const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        sideEffects: true,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'source-map',
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true,
        },
      },
    },
    usedExports: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
  ],
})
