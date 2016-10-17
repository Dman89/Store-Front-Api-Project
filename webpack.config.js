var webpack = require('webpack'),
       path = require('path');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/public/scripts',
        filename: 'lion.bundle.js'
    },
    plugins: [
    new webpack.OldWatchingPlugin(),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
//     new webpack.optimize.UglifyJsPlugin({
//   cacheFolder: path.resolve(__dirname, 'public/cached_uglify/'),
//   debug: true,
//   minimize: true,
//   sourceMap: false,
//   output: {
//     comments: false
//   },
//   compressor: {
//     warnings: false
//   }
// })

  ]
  //  module: {
  //      loaders: [
  //          {
  //              test: /\.js$/,
  //              loader: 'babel-loader',
  //              query: {
  //                  presets: ['es2015']
  //              },
  //              exclude: /node_modules/
  //          }
  //      ]
  //  },
  //  stats: {
  //      colors: true
  //  },
  //  devtool: 'source-map'
};
