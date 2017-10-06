import angular from 'angular'
import angularCookies from 'angular-cookies'
import angularSignalR from 'angular-signalr-hub'

import authConstants from 'core/const/auth.constants'
import SessionService from 'core/services/session.service'
import DateTimeService from 'core/services/datetime.service'
import chatHubService from 'core/services/chat-hub.service'

import {
    hubSettings,
    clientEvents,
    hubEvents
} from 'core/const/chat-hub.constants'

var module = angular.module('registrator.Core', [
        'ngCookies',
        angularSignalR
    ])
    .constant('AUTH_CONST', authConstants)
    .constant('HUB_SETTINGS', hubSettings)
    .constant('HUB_CLIENT_EVENTS', clientEvents)
    .constant('HUB_EVENTS', hubEvents)
    .service('SessionService', SessionService)
    .service('DateTimeService', DateTimeService)
    .factory('ChatHub', chatHubService);

export default module;