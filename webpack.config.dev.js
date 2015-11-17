var path = require("path");
var webpack = require('webpack');

//var bootstrapPath = path.join(__dirname, '/node_modules/bootstrap/dist/css');
var bootstrapPath = path.join(__dirname, '/node_modules/bootstrap/less');

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
    modulesDirectories: ['node_modules', bootstrapPath],
    extensions: ['', '.js', '.css', '.less']
  },
  module: {
    resolveLoader: { root: path.join(__dirname, "node_modules") },
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader?experimental'], exclude: /node_modules/ },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.jpe?g$|\.gif$|\.png$/i, loader: "file-loader" },
      //Loaders for bootsrap-related fonts
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff2" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml" }
    ]
  }
}
