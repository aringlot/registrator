const path = require('path');

module.exports = {
  entry: ['babel-polyfill','./app/app.module.js'],
  module:{
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components|sln)/,
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
      views: path.resolve(__dirname, 'app/views'),
      authentication: path.resolve(__dirname, 'app/modules/authentication'),
      core: path.resolve(__dirname, 'app/modules/core')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './app/dist')
  }
};