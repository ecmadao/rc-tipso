const path = require('path');
const webpack = require('webpack');

const SOURCE_PATH = path.join(__dirname, '../components');
const WRAPPER_PATH = path.join(__dirname, '../examples');
const cssLoaders = [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: true,
      sourceMaps: true,
      importLoaders: 1,
      localIdentName: '[name]__[local]___[hash:base64:5]'
    }
  },
  'postcss-loader'
];

module.exports = {
  context: SOURCE_PATH,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        loader: "eslint-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: SOURCE_PATH,
        use: cssLoaders,
      },
      {
        test: /\.css$/,
        include: /light-ui/,
        use: cssLoaders,
      },
      {
        test: /\.(js|jsx)$/,
        include: SOURCE_PATH,
        use: ['babel-loader'],
      },
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      minimize: true,
      options: {
        context: SOURCE_PATH,
      }
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    }),
  ],
  devtool: '#source-map',
};
