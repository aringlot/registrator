import AboutUsController from 'registrator/aboutus/controllers/aboutus.controller';

describe('About us controller', () => {
    it('has $onInit is set up', () => {
        const vm = new AboutUsController();
        expect(vm.$onInit).toBeDefined();
    });

    it('has author defined on init', () => {
        const vm = new AboutUsController();
        vm.$onInit();
        expect(vm.author).toBeDefined();
    });

    it('has author defined after initialization', () => {
        const vm = new AboutUsController();
        vm.onInit();
        expect(vm.author).toBeDefined();
    });

    it('has created defined after initialization', () => {
        const vm = new AboutUsController();
        vm.onInit();
        expect(vm.created).toBeDefined();
    });
});