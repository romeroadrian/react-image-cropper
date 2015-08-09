var webpack = require('webpack');

/**
 * This is the Webpack configuration file for local development. It contains
 * local-specific configuration such as the React Hot Loader, as well as:
 *
 * - The entry point of the application
 * - Where the output file should be
 * - Which loaders to use on what files to properly transpile the source
 *
 * For more information, see: http://webpack.github.io/docs/configuration.html
 */
module.exports = {

  // Efficiently evaluate modules with source maps
  devtool: "eval",

  // Set entry point to ./src/app and include necessary files for hot load
  entry:  [
    "webpack-dev-server/client?http://localhost:9090",
    "webpack/hot/only-dev-server",
    "./src/app"
  ],

  // This will not actually create a bundle.js file in ./build. It is used
  // by the dev server for dynamic hot loading.
  output: {
    path: __dirname + "/build/",
    filename: "app.js",
    publicPath: "http://localhost:9090/build/"
  },

  // Necessary plugins for hot load
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  // Transform source code using Babel and React Hot Loader
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader?stage=0"],
      },
      {
        test: /.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /.gif$/,
        loader: "url-loader?mimetype=image/png"
      }
    ]
  },

  // Automatically transform files with these extensions
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
