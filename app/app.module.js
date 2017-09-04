import angular from 'angular'
import 'angular-ui-router'
import 'angular-translate'
import 'angular-cookies'
import 'angular-translate-storage-cookie'
import 'angular-translate-loader-partial'
import 'angular-ui-bootstrap'

import commonModule from 'common/common.module'
import aboutUsModule from 'aboutus/aboutus.module'
import homeModule from 'home/home.module'
import galleryModule from 'gallery/gallery.module'
import customBootstrap from 'registrator/bootstrap/bootstrap.module'

import config from './app.config'

angular
    .module('registratorApp', [
        'ui.router',
        'ui.bootstrap',
        'pascalprecht.translate', 
        'ngCookies', 
        commonModule.name, 
        aboutUsModule.name, 
        homeModule.name,
        galleryModule.name, 
        customBootstrap.name
        ])
    .config(config)
    .run(($state, $rootScope) => {
            'ngInject'
            $state.go('main');

            $rootScope.$on('$translatePartialLoaderStructureChanged', () => $translate.refresh());
        });
