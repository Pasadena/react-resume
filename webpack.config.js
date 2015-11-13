var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

var assetsPath = path.join(__dirname, "public", "assets");
var publicPath = "assets/";

module.exports = {
  //{
    name: "browser",
    context: path.join(__dirname, "src"),
    entry: [
      './client/entry'
    ],
    output: {
      // The output directory as absolute path
      path: assetsPath,
      // The filename of the entry chunk as relative path inside the output.path directory
      filename: "bundle.js",
      // The output path from the view of the Javascript
      publicPath: publicPath
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['', '.js']
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false
        }
      })
    ],
    module: {
      loaders: [
        { test: /\.jsx?$/, loaders: ['babel-loader?experimental'], exclude: /node_modules/ },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.js?$/, loaders: ['babel-loader?experimental'], exclude: /node_modules/, include: path.join(__dirname, 'assets') },
        { test: /\.jpe?g$|\.gif$|\.png$/i, loader: "file-loader" },
        //Loaders for bootsrap-related fonts
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff" },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff2" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream" },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml" }
      ]
    }
  /**}
  , {
    // The configuration for the server-side rendering
    name: "server-side rendering",
    context: path.join(__dirname, "src"),
    entry: {
      //app: "./server"
      app: "./server/server"
    },
    target: "node",
    output: {
      // The output directory as absolute path
      path: assetsPath,
      // The filename of the entry chunk as relative path inside the output.path directory
      filename: "[name].server.js",
      // The output path from the view of the Javascript
      publicPath: publicPath,
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, loaders: ['babel-loader?experimental'], exclude: /node_modules/ },
        { test: /\.js?$/, loaders: ['babel-loader?experimental'], exclude: /node_modules/ },
        { test: /\.css$/, loader: "style-loader!css-loader" }
      ]
    },
    resolve: {
      extensions: ['', '.js']
    },
    plugins: [

    ]
  }**/
}
