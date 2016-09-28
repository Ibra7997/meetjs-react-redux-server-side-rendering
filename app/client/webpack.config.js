const path = require('path');


module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, '/../public/'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-1', 'react'],
      },
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    host: '0.0.0.0',
  },
  devtool: 'source-map',
};
