import angular from 'angular'
import 'angular-translate'

import buttonComponent from 'common/components/button.component';
import headerComponent from 'common/components/header.component'
import tabComponent from 'common/components/tab.component'
import config from 'common/config/common.config'

angular
    .module('common', ['pascalprecht.translate'])
    .component('customButton', buttonComponent)
    .component('header', headerComponent)
    .component('tab', tabComponent)
    .config(config);