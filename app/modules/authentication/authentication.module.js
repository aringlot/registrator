import angular from 'angular'

import coreModule from 'core/core.module'

import loginComponent from 'authentication/components/login.component'
import LoginService from 'authentication/services/login.service'
import config from 'authentication/config/module.config'

var module = angular.module('Authentication', [coreModule.name])
    .component('login', loginComponent)
    .service('LoginService', LoginService)
    .config(config);

export default module;