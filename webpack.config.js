const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.css']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        include: path.resolve(__dirname, 'js'),
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      }
    ]
  }
}
