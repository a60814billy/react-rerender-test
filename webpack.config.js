const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: {
      import: ['webpack-hot-middleware/client', './public/index.tsx'],
      filename: 'assets/[name].[contenthash].js',
    },
  },
  output: {
    path: path.resolve(__dirname, './docs'),
    clean: true,
    publicPath: '/',
    library: {
      type: 'module',
    },
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
              require.resolve('react-refresh/babel'),
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ],
  },
  devServer: {
    hot: true,
    writeToDisk: true
  },
  experiments: {
    outputModule: true,
  },
};
