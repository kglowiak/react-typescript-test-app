const path = require('path');

module.exports = {
  entry: '../src/index.tsx',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.min.js'
  },
};