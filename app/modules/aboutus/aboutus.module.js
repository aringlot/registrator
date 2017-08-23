import angular from 'angular'
import AboutUsComponent from './components/aboutus.component'
import AboutUsController from './controllers/aboutus.controller'
import routeConfig from './routes/route.config'

var module = angular.module('aboutUs', []);
module.controller('AboutUsController', AboutUsController);
module.component('aboutUs',AboutUsComponent);
module.config(routeConfig);