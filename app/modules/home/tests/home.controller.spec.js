import HomeController from 'registrator/home/controllers/home.controller.js'

describe('HomeController', () => {
    it('should provide tabs with 2 models in it', () => {
        const vm = new HomeController();

        expect(vm.tabs).toBeDefined();
        expect(vm.tabs.length).toBe(2);
    });
});
