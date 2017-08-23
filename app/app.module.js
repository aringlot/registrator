import angular from 'angular'
import './bower_components/angular-ui-router/release/angular-ui-router'

import './modules/common/common.module'
import './modules/aboutus/aboutus.module'
import './modules/home/home.module'

import config from './app.config'

var app = angular.module('registratorApp', ['ui.router', 'common', 'aboutUs', 'home']);
app.config(config);
app.run([
    '$state',
     function($state){
        $state.go('main');
     }
 ]);
