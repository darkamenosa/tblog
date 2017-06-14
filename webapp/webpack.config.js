const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'entry.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    hot: true,
    port: 3000,
  },
}
