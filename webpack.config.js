const path = require('path');
const RemoveCommentPlugin = require('./index');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

/**
 * @type import('webpack').Configuration
 */
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle-[hash].js'
  },
  mode: 'development',
  plugins: [
    new RemoveCommentPlugin(),
    new CleanWebpackPlugin()
  ]
}