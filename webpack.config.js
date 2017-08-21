const path = require('path');

module.exports = {
  entry: './app/app.js',
  module:{
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['env']
                }
            }
        }
    ]
  },
  resolve: {
    modules : ['node_modules', 'bower_components']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './app/dist')
  }
};