const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const common = require('./webpack.common.config')

const newEntry = Object.keys(common.entry).reduce((entryResult, entryName) => {
  const entry = common.entry[entryName]
  if (typeof entry === 'string') {
    entryResult[entryName] = ['webpack-hot-middleware/client', entry]
    return entryResult
  }
  if (Array.isArray(entry)) {
    entryResult[entryName] = ['webpack-hot-middleware/client', ...entry]
    return entryResult
  }
  if (typeof entry === 'object') {
    if (entry.import) {
      if (typeof entry.import === 'string') {
        entryResult[entryName] = {
          ...entry,
          import: ['webpack-hot-middleware/client', entry.import]
        }
        return entryResult
      }
      if (Array.isArray(entry.import)) {
        entryResult[entryName] = {
          ...entry,
          import: ['webpack-hot-middleware/client', ...entry.import]
        }
        return entryResult
      }
    }
  }
}, {})

module.exports = merge(common,
    {
      mode: 'development',
      devtool: 'inline-source-map',
      entry: newEntry,
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin({
          overlay: {
            sockIntegration: 'whm'
          }
        }),
      ],
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-typescript',
                  '@babel/preset-react',
                ],
                plugins: [
                  require.resolve("babel-plugin-react-scoped-css"),
                  require.resolve('react-refresh/babel')
                ],
              },
            },
          },
          {
            test: /\.(sc|sa|c)ss$/i,
            use: [
              {
                loader: 'style-loader',
              },
              {loader: 'css-loader', options: {sourceMap: true}},
              'scoped-css-loader',
              {loader: 'postcss-loader', options: {sourceMap: true}},
              {loader: 'sass-loader', options: {sourceMap: true}}
            ]
          }
        ],
      },
      devServer: {
        hot: true,
        writeToDisk: true
      }
    })
