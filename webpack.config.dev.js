import path from 'path';
import webpack from 'webpack';

export default {
  devtools: 'inline-sourcemap',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server/shared')
        ],
        exclude: /(node_modules|bower_components)/,
        loaders: [ 'react-hot', 'babel' ]
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js']
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
}