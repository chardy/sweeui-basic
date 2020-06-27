const commonPaths = require('./paths');

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  externals: [{
    react: 'react',
    'react-dom': 'react-dom',
    'prop-types': 'prop-types',
    },
  ],
  plugins: [
    // new BundleAnalyzerPlugin(),
  ],
};
