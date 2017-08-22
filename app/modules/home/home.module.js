import angular from 'angular'
import HomeController from './controllers/home.controller'
import HomeComponent from './components/home.component'
import TabService from './services/tab.service'
import config from './routes/route.config'

var module = angular.module('home', []);
module.controller('HomeController', HomeController);
module.component('home', HomeComponent);
module.factory('TabService', TabService);
module.config(config);