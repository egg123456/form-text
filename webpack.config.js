/*
 * @Author: wb-yangergang
 * @Date: 2021-07-19 15:48:05
 * @LastEditors: wb-yangergang
 * @LastEditTime: 2021-07-19 16:09:06
 * @Description: file content
 */
module.exports = {
  target: ['node'],
  mode: 'development',
  entry: { index: './src/index.js' },//多入口
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }  
}