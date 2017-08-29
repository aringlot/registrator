import HeaderController from 'registrator/common/controllers/header.controller'

describe('header controller', () => {

    it('should have empty buttons and menu items', () => {
        const vm = new HeaderController();
        expect(vm.menuItems).toBeDefined();
        expect(vm.buttons).toBeDefined();
    });

    it('should have 2 buttons after initialization', () => {
        const vm = new HeaderController();
        vm.onInit();

        expect(vm.buttons).toBeDefined();
        expect(vm.buttons.length).toBe(2);
    });

    it('should have 3 menu items after initialization', () => {
        const vm = new HeaderController();
        vm.onInit();

        expect(vm.menuItems).toBeDefined();
        expect(vm.menuItems.length).toBe(3);
    });
});