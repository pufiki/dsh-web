const webpack = require('webpack');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

var paths = require('./src/jsconfig.json').compilerOptions.paths;

paths = Object.keys(paths).reduce((obj, key) => {
  obj[key.replace('/*', '')] = resolve('./src/' + paths[key][0].replace('/*', '').replace('./', ''));

  return obj;
}, {});

module.exports = {
  entry: {
    client: './src/client.js'
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle/index.js',
  },

  resolve: {
    alias: {
      ...paths
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './public/template',
    publicPath: '/public/',
    port: 3000,
    hot: true
  }
};
