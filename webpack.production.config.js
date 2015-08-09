var webpack = require('webpack');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  entry: "./src/app",

  output: {
    path: __dirname + "/build/",
    filename: "app.js"
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader?stage=0" },
      { test: /.css$/,  loader: "style-loader!css-loader" },
      { test: /.gif$/, loader: "url-loader?mimetype=image/png" }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
