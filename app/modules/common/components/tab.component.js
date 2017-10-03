import Controller from 'common/controllers/tab.controller'
import template from 'views/common/tab.template.html'

const tabComponent = {
    bindings:{
        content: '<'
    },
    template: template,
    controller: Controller
};

export default tabComponent;