import TabModel from 'registrator/home/controllers/models/tab.model'

describe('Tab model', () => {
    it('should have defaults if constructor is called without parameters', () => {
        const model = new TabModel();

        expect(model.url).toBeDefined();
        expect(model.url).toBe('');

        expect(model.caption).toBeDefined();
        expect(model.caption).toBe('');
    });

    it('should have caption if first parameter is specified', () => {
        const model = new TabModel('Test');

        expect(model.caption).toBeDefined();
        expect(model.caption).toBe('Test');

        expect(model.url).toBeDefined();
        expect(model.url).toBe('');
    });

    it('should have caption and url if 2 parameters are specified', () => {
        const model = new TabModel('Test', 'Url');

        expect(model.caption).toBeDefined();
        expect(model.caption).toBe('Test');

        expect(model.url).toBeDefined();
        expect(model.url).toBe('Url');
    });
});