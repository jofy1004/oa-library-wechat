var path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/main.ts'),
    manage: path.resolve(__dirname, 'manage/main.ts')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {

    loaders: [
      {test: /\.js$/, loader: 'jsx-loader?harmony'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.ts$/, loader: 'ts-loader'}
    ]
  },
  // require 文件时可省略后缀 .js 和 .ts
  resolve: {
    extensions: ['', '.js', '.ts']
  }
};
