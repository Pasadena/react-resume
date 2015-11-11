var path = require("path");
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/client/entry'
  ],
  output: {
    path: __dirname + '/public/js/',
    filename: 'app.js',
    publicPath: 'http://localhost:8080/js/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    root: path.join(__dirname, "node_modules"),
    extensions: ['', '.js']
  },
  module: {
    /**resolveLoader: { root: path.join(__dirname, "node_modules") },**/
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader?experimental'], exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader"},
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
    ]
  }
}
