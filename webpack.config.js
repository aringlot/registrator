const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: ['babel-polyfill', './app/app.module.js'],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components|sln)/,
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
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  resolve: {
    modules: ['bower_components', 'node_modules'],
    alias: {
      registrator: path.resolve(__dirname, 'app/modules'),
      views: path.resolve(__dirname, 'app/views'),
      authentication: path.resolve(__dirname, 'app/modules/authentication'),
      core: path.resolve(__dirname, 'app/modules/core'),
      "common": path.resolve(__dirname, 'app/modules/common'),
      "aboutus": path.resolve(__dirname, 'app/modules/aboutus'),
      "home": path.resolve(__dirname, 'app/modules/home'),
      "chat": path.resolve(__dirname, 'app/modules/chat'),
      "views": path.resolve(__dirname, 'app/views'),
      "angular-translate": path.resolve(__dirname, 'app/bower_components/angular-translate/angular-translate'),
      "angular-ui-router": path.resolve(__dirname, 'app/bower_components/angular-ui-router/release/angular-ui-router'),
      'angular-cookie': path.resolve(__dirname, 'app/bower_components/angular-cookies/angular-cookies'),
      'angular-translate-storage-cookie': path.resolve(__dirname, 'app/bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie'),
      'angular-translate-loader-partial': path.resolve(__dirname, 'app/bower_components/angular-translate-loader-partial/angular-translate-loader-partial'),
      "angular-mocks": path.resolve(__dirname, 'app/bower_components/angular-mocks/angular-mocks'),
      'angular-signalr-hub': path.resolve(__dirname, 'app/bower_components/angular-signalr-hub/signalr-hub')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './app/dist')
  }
};