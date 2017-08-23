import angular from 'angular'
import 'angular-ui-router'
import 'angular-translate'
import 'angular-translate-loader-partial'

import homeComponent from 'home/components/home.component'
import TabService from 'home/services/tab.service'
import config from 'home/config/home.config'

angular
    .module('home', ['ui.router','pascalprecht.translate'])
    .component('home', homeComponent)
    .factory('TabService', $http => {
    	'ngInject'
        return new TabService($http);
    })
    .config(config);
export default module;