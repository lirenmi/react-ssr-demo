const path = require('path');
const view = (name) => {
  return path.join(__dirname, 'client-src', 'views', name, 'index.tsx');
};
module.exports = {
  entry: {
    branding: view('branding'),
    connections: view('connections'),
  },
  output: {
    path: path.resolve(__dirname, 'static', 'js'),
    filename: '[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
