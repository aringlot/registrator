const path = require('path');

module.exports = {
  entry: ['babel-polyfill','./app/app.module.js'],
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
    modules: ['bower_components', 'node_modules'],
    alias: {
      registrator: path.resolve(__dirname, 'app/modules'),
      "angular-mocks": path.resolve(__dirname, 'app/bower_components/angular-mocks/angular-mocks')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './app/dist')
  }
};