import TabController from 'registrator/common/controllers/tab.controller'

describe('Tab controller', () => {
    
    it('should be defined', () => {
        const vm = new TabController();
        expect(vm).toBeDefined();
    });
});