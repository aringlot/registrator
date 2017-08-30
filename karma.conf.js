//jshint strict: false
module.exports = function (config) {

  function configureWebpack(webpackConfigFunction) {
    var webpackConfig = require('./webpack.config');
    webpackConfig.entry = undefined; // karma will pass the proper argument for entry
    return webpackConfig;
  }

  config.set({

    basePath: './',

    files: [
      "node_modules/babel-polyfill/dist/polyfill.js",
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/modules/**/tests/*.spec.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'app/modules/**/tests/*.spec.js': ['webpack'],
    },

    webpack: configureWebpack(),

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-webpack'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
