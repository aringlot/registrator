import angular from 'angular'
import 'angular-ui-router'
import 'angular-translate'
import 'angular-cookies'
import 'angular-translate-storage-cookie'
import 'angular-translate-loader-partial'

import './modules/common/common.module'
import './modules/aboutus/aboutus.module'
import './modules/home/home.module'

import config from './app.config'

angular
    .module('registratorApp', ['ui.router','pascalprecht.translate', 'ngCookies', 'common', 'aboutUs', 'home'])
    .config(config)
    .run(($state, $rootScope) => {
            'ngInject'
            $state.go('main');

            $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
                $translate.refresh();
            });
        });
