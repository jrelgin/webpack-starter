const path = require('path');

const config = {
  context: path.resolve(__dirname, "src"),
  entry: {
    // relative path declaration
    app: './app.js'
  },
  output: {
    filename: 'bundle.js',
    // Output path using nodeJs path module
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = config;
