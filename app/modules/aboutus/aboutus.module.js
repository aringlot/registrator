import angular from 'angular'
import 'angular-ui-router'
import 'angular-translate'

import AboutUsComponent from 'aboutus/components/aboutus.component'
import routeConfig from 'aboutus/config/aboutus.config'

var module = angular
    .module('aboutUs', ['ui.router', 'pascalprecht.translate'])
    .component('aboutUs',AboutUsComponent)
    .config(routeConfig);

export default module;