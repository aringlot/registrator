//jshint strict: false
module.exports = function (config) {

  function configureWebpack(webpackConfigFunction) {
    var webpackConfig = require('./webpack.config');
    webpackConfig.entry = undefined; // karma will pass the proper argument for entry
    return webpackConfig;
  }

  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-ui-router/release/angular-ui-router',
      'modules/**/tests/*.spec.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'modules/**/tests/*.spec.js': ['webpack'],
    },

    webpack: configureWebpack(),

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    reporters: ['coverage', 'progress'],

    coverageReporter: {
      dir: 'coverage',
      reporters: [
          { type: 'text' },
          { type: 'text-summary' },
          { type: 'html' }
      ]
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-webpack',
      'karma-coverage'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
