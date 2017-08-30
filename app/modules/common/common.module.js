import angular from 'angular'
import 'angular-translate'

import buttonComponent from 'common/components/button.component';
import headerComponent from 'common/components/header.component'
import tabComponent from 'common/components/tab.component'
import spinnerComponent from 'common/components/spinner.component'
import SpinnerService from 'common/services/spinner.service'

import config from 'common/config/common.config'

var module = angular
    .module('common', ['pascalprecht.translate'])
    .component('customButton', buttonComponent)
    .component('header', headerComponent)
    .component('tab', tabComponent)
    .component('spinner', spinnerComponent)
    .service('SpinnerService', SpinnerService)
    .config(config);

export default module;