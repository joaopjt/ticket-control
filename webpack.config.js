const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    compress: true,
    port: process.env.PORT || 3000
  },
  entry: {
    app: [
      './resources/assets/js/main.js',
      './resources/assets/scss/app.scss'
    ]
  },
  output: {
    path: process.cwd() + '/resources/assets',
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  node: {
    fs: "empty"
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css')
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}

if(process.env.NODE_ENV === 'prod') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  )
}