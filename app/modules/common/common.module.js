import angular from 'angular'

import ButtonController from './controllers/button.controller';
import ButtonComponent from './components/button.component';

import HeaderComponent from './components/header.component'
import HeaderController from  './controllers/header.controller'

import TabController from './controllers/tab.controller'
import TabComponent from './components/tab.component'

var module = angular.module('common', []);

module.controller('ButtonController', ButtonController);
module.component('customButton', ButtonComponent);

module.controller('HeaderController', HeaderController);
module.component('header', HeaderComponent);

module.controller('TabController', TabController);
module.component('tab', TabComponent);