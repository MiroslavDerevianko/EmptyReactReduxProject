const path = require('path');

/* Plugins */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[chunkhash].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.scss$/,
            use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        }
      ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        publicPath: '/',
        port: 8080,
      },
    plugins: [
        // new ExtractTextPlugin(
        //   {filename: 'style.[hash].css', disable: false, allChunks: true }
        // ),
        new MiniCssExtractPlugin({
          filename: 'style.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
          inject: false,
          hash: true,
          template: path.resolve(__dirname, 'public', 'index.html'),
          filename: 'index.html',
          favicon: path.resolve(__dirname, 'public', 'favicon.ico')
        }),
        new WebpackMd5Hash()
      ]
  }