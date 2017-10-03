import angular from 'angular'
import angularCookies from 'angular-cookies'

import 'angular-ui-router'
import 'angular-translate'
import 'angular-cookies'
import 'angular-translate-storage-cookie'
import 'angular-translate-loader-partial'

import commonModule from 'common/common.module'
import aboutUsModule from 'aboutus/aboutus.module'
import homeModule from 'home/home.module'
import authenticationModule from './modules/authentication/authentication.module'
import coreModule from 'core/core.module'

import config from './app.config'

angular
    .module('registratorApp', [
        'ui.router',
        'pascalprecht.translate', 
        'ngCookies', 
        commonModule.name, 
        aboutUsModule.name, 
        homeModule.name,
        authenticationModule.name, 
        coreModule.name])
    .config(config)
    .run(($state, $rootScope, AUTH_CONST) => {
        'ngInject'
        $state.go('main');
        $rootScope.$on(AUTH_CONST.loginSuccess, () => {
            $state.go('aboutus');
        });

        $rootScope.$on('$translatePartialLoaderStructureChanged', () => $translate.refresh());
    });
