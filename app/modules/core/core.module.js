import angular from 'angular'
import angularCookies from 'angular-cookies'

import authConstants from 'core/const/auth.constants'
import SessionService from 'core/services/session.service'
import DateTimeService from 'core/services/datetime.service'

var module = angular.module('registrator.Core', ['ngCookies'])
    .constant('AUTH_CONST', authConstants)
    .service('SessionService', SessionService)
    .service('DateTimeService', DateTimeService);

export default module;