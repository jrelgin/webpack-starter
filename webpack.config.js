const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    app: './app.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './assets/js/[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],

  devServer: {
    contentBase: path.resolve(__dirname, "./dist/assets/media"),
    compress: true,
    port: 12000,
    stats: 'errors-only',
    open: true
  },

  devtool: 'inline-source-map'
}

module.exports = config;
