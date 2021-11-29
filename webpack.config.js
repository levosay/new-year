const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [path.join(__dirname, 'src/index.js')],
  target: 'web',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.bundle.js',
    clean: true
  },
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sass|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ]
}
