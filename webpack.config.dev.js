var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/src/main.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'webpack-replace', query: { replace: [{ from: '<% API_HOST %>', to: 'http://localhost:3000' }]}},
      { test: /\.scss$/, exclude: /node_modules/, loaders: ["style-loader", "css-loader", "sass-loader?config=sassConfig"] },
      { test: /\.(jpg|png|svg)$/, loader: 'file?name=[path][name].[hash].[ext]' }
    ]
  },

  sassConfig: [
    autoprefixer({ add: true, browsers: ['last 3 versions'] })
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}
