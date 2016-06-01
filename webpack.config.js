var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./src/components/App.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']//,
          // plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: __dirname + "/dist/",
    filename: "bundle.min.js"
  },
};