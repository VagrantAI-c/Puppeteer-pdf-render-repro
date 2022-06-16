const path = require('path');

module.exports = {
  entry: './index.ts',
  resolve: { extensions: ['.js', '.ts'] },
  target: 'node',
  mode: 'none',
  devtool: 'source-map',
  // this makes sure we include node_modules and other 3rd party libraries
  externals: [/node_modules/],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
    ]
  },
  node: {
    __dirname: true,
  },
};
