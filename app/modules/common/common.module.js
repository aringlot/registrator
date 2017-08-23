import angular from 'angular'

import ButtonController from './controllers/button.controller';
import buttonComponent from './components/button.component';

import headerComponent from './components/header.component'
import HeaderController from  './controllers/header.controller'

import TabController from './controllers/tab.controller'
import tabComponent from './components/tab.component'

var module = angular.module('common', []);

module.controller('ButtonController', ButtonController);
module.component('customButton', buttonComponent);

module.controller('HeaderController', HeaderController);
module.component('header', headerComponent);

module.controller('TabController', TabController);
module.component('tab', tabComponent);