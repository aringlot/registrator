//import template from 'views/authentication/login.template.html'
import LoginController from 'authentication/controllers/login.controller'

var component = {
    controller: LoginController,
    controllerAs: 'vm',
    templateUrl: 'views/authentication/login.template.html'
};

export default component;