import Controller from 'common/controllers/button.controller'
import template from 'views/common/button.template.html'

const component = {
    bindings:{
        name: '<',
        url: '<',
        customClass: '<'
    },
    template: template,
    controller: Controller,
    controllerAs: 'VM'
};

export default component;