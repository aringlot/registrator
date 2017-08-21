import angular from 'angular'

var app = angular.module('registratorApp', []);

app.controller('TestController', function(){
  this.message = "Hello world";
});