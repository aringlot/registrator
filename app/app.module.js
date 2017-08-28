import angular from 'angular'
import angularCookies from 'angular-cookies'

import './bower_components/angular-ui-router/release/angular-ui-router'

import './modules/common/common.module'
import './modules/aboutus/aboutus.module'
import './modules/home/home.module'
import authenticationModule from './modules/authentication/authentication.module'
import coreModule from 'core/core.module'

import config from './app.config'

angular
    .module('registratorApp', [
        'ui.router',
        'ngCookies', 
        'common', 
        'aboutUs', 
        'home', 
        authenticationModule.name, 
        coreModule.name]);
app.config(config);
app.run(($state, $rootScope, AUTH_CONST) => {
    'ngInject'
    $state.go('main');
    $rootScope.$on(AUTH_CONST.loginSuccess, () => {
        $state.go('aboutus');
    });
});
