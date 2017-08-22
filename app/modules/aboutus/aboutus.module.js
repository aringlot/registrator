import angular from 'angular'
import aboutUsComponent from './components/aboutus.component'
import aboutUsController from './controllers/aboutus.controller'
import RouteConfig from './routes/route.config'

var module = angular.module('aboutUs', []);
module.controller('AboutUsController', aboutUsController);
module.component('aboutUs',aboutUsComponent);
module.config(RouteConfig);