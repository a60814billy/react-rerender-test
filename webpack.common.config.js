const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './public/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "assets/[name].[contenthash].js",
    chunkFilename: "assets/[name].[contenthash].bundle.js",
  },
  resolve: {
    extensions: ['.tsx', '.js', '.css', '.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  }
};
