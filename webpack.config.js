const path = require('path')

module.exports = {
  context: __dirname,
  entry: './app/Components/ClientApp.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        include: path.resolve(__dirname, 'app'),
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
