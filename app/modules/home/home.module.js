import angular from 'angular'
import HomeController from './controllers/home.controller'
import homeComponent from './components/home.component'
import tabService from './services/tab.service'
import config from './routes/route.config'

var module = angular.module('home', []);
module.controller('HomeController', HomeController);
module.component('home', homeComponent);
module.factory('TabService', tabService);
module.config(config);