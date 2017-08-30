import angular from 'angular'
import 'angular-ui-router'
import 'angular-translate'
import 'angular-translate-loader-partial'

import commonModule from 'common/common.module'
import homeComponent from 'home/components/home.component'
import TabService from 'home/services/tab.service'
import config from 'home/config/home.config'

var module = angular
    .module('home', ['ui.router','pascalprecht.translate', commonModule.name])
    .component('home', homeComponent)
    .service('TabService', TabService)
    .config(config);

export default module;