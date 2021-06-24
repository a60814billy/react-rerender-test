const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


const commonConf = require('./webpack.common.config')

module.exports = merge(commonConf, {
  mode: 'production',
  output: {
    clean: true
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              '@babel/preset-react',
            ]
          },
        },
      },
      {
        test: /\.(sc|sa|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'scoped-css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ],
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "all"
    },
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...']
  }
})
