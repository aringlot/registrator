import HomeController from 'home/controllers/home.controller.js'

describe('HomeController', () => {

    it('should have $onInit initialized', () => {
        const vm = new HomeController();
        expect(vm.$onInit).toBeDefined();
    });

    it('should have empty collection with tabs', () =>{
        const vm = new HomeController();
        expect(vm.tabs).toBeDefined();
        expect(vm.tabs.length).toBe(0);
    });

    it('should provide tabs with 2 models in it', () => {
        const vm = new HomeController();
        vm.onInit();
        expect(vm.tabs).toBeDefined();
        expect(vm.tabs.length).toBe(2);
    });

    it('should provide tabs with 2 models in it after init event is called', () => {
        const vm = new HomeController();
        vm.$onInit();
        expect(vm.tabs).toBeDefined();
        expect(vm.tabs.length).toBe(2);
    });
});
