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
        },
        {
          test: /\.html$/,
          use: 'raw-loader'
        }
    ]
  },
  resolve: {
    modules: ['bower_components', 'node_modules'],
    alias: {
      registrator: path.resolve(__dirname, 'app/modules'),
      "registrator": path.resolve(__dirname, 'app/modules'),
      "common": path.resolve(__dirname, 'app/modules/common'),
      "aboutus": path.resolve(__dirname, 'app/modules/aboutus'),
      "home": path.resolve(__dirname, 'app/modules/home'),
      "views": path.resolve(__dirname, 'app/views'),
      "angular-translate": path.resolve(__dirname, 'app/bower_components/angular-translate/angular-translate') ,
      "angular-ui-router": path.resolve(__dirname, 'app/bower_components/angular-ui-router/release/angular-ui-router'),
      'angular-cookie' : path.resolve(__dirname, 'app/bower_components/angular-cookies/angular-cookies'),
      'angular-translate-storage-cookie': path.resolve(__dirname, 'app/bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie'),
      'angular-translate-loader-partial' : path.resolve(__dirname, 'app/bower_components/angular-translate-loader-partial/angular-translate-loader-partial'),
      "angular-mocks": path.resolve(__dirname, 'app/bower_components/angular-mocks/angular-mocks')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './app/dist')
  }
};