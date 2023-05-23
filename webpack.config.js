const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  mode: process.env.NODE_ENV,

  // devServer: {
  //     host: 'localhost',
  //     port: 8080,
  //     // enable HMR on the devServer
  //     hot: true,
  //     proxy: {
  //         '/': {
  //             target: 'http://localhost:3000/',
  //             secure: false,
  //           },
  //       },
  //     // fallback to root for other urls
  //     historyApiFallback: true,
  // },

  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
      publicPath: '/',
    },
    compress: true,
    // allows the use of back and forward buttons
    historyApiFallback: true,
    port: 8080,
    // in the sever below the proxyis added to the root endpoint
    proxy: {
      '/': 'http://localhost:3000/',
    },
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './client/index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ['file-loader'],
      },
    ],
  },

  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
};
