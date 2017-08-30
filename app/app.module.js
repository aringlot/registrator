import angular from 'angular'
import 'angular-ui-router'
import 'angular-translate'
import 'angular-cookies'
import 'angular-translate-storage-cookie'
import 'angular-translate-loader-partial'
import 'angular-sanitize'

import commonModule from 'common/common.module'
import aboutUsModule from 'aboutus/aboutus.module'
import homeModule from 'home/home.module'

import config from './app.config'

angular
    .module('registratorApp', [
        'ui.router',
        'ngSanitize',
        'pascalprecht.translate', 
        'ngCookies', 
        commonModule.name, 
        aboutUsModule.name, 
        homeModule.name]
    )
    .config(config)
    .run(($state, $rootScope) => {
            'ngInject'
            $state.go('main');

            $rootScope.$on('$translatePartialLoaderStructureChanged', () => $translate.refresh());
        });
