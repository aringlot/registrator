export default class aboutUsController{
    constructor(){
        var ctrl = this;

        ctrl.$onInit = function(){
            ctrl.author = 'Oleksandr Yershov';
            ctrl.description = 'AboutUs.Description';
            ctrl.created = new Date('2017-08-22');
            ctrl.title = 'AboutUs.Title';
        }
    }
}