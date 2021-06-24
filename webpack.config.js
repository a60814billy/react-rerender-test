const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: ['webpack-hot-middleware/client', './public/index.tsx']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    clean: true,
    filename: "assets/[name].[contenthash].js",
    chunkFilename: "assets/[name].[contenthash].bundle.js",
  },
  resolve: {
    extensions: ['.tsx', '.js', '.css', '.ts'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockIntegration: 'whm'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
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
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap:true
            }
          },
          'scoped-css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ],
  },
  devServer: {
    hot: true,
    writeToDisk: true
  },
  experiments: {},
};
