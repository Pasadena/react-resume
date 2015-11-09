var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

var assetsPath = path.join(__dirname, "..", "public", "assets");
var publicPath = "assets/";

module.exports = [
  {
    name: "browser",
    //context: path.join(__dirname, "..", "app"),
    entry: [
      './src/client/entry'
    ],
    output: {
      // The output directory as absolute path
      path: assetsPath,
      // The filename of the entry chunk as relative path inside the output.path directory
      filename: "foobar.js",
      // The output path from the view of the Javascript
      publicPath: publicPath

    },
    devtool: 'source-map',
    module: {
      loaders: [
        { test: /\.jsx?$/, loaders: ['babel-loader?experimental'], exclude: /node_modules/ },
        { test: /\.css$/, loader: "style-loader!css-loader" }
      ]
    },
    resolve: {
      extensions: ['', '.js']
    },
    plugins: [
        // extract inline css from modules into separate files
        new ExtractTextPlugin("src/client/stylesheets/styles.css")
    ]
  }
  /**, {
    // The configuration for the server-side rendering
    name: "server-side rendering",
    context: path.join(__dirname, "..", "app"),
    entry: {
      app: "./server"
    },
    target: "node",
    output: {
      // The output directory as absolute path
      path: assetsPath,
      // The filename of the entry chunk as relative path inside the output.path directory
      filename: "[name].server.js",
      // The output path from the view of the Javascript
      publicPath: publicPath,
      libraryTarget: "commonjs2"
    },
    module: {
      loaders: commonLoaders
    },
    resolve: {
      extensions: ['', '.js']
    },
    plugins: [
        // extract inline css from modules into separate files
        new ExtractTextPlugin("styles/main.css")
    ]
  }**/
];
