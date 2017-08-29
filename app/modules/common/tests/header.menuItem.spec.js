import MenuItem from 'registrator/common/controllers/models/header.menuItem'

describe('Menu item', () => {

    it('should have defaults specified if empty contstructor is called', () => {
        const item = new MenuItem()

        expect(item.name).toBeDefined();
        expect(item.name).toBe('');

        expect(item.url).toBeDefined();
        expect(item.url).toBe('');
    });

    it('should have name if contructor with 1 parameter is called', () => {
        const item = new MenuItem('Name');

        expect(item.name).toBeDefined();
        expect(item.name).toBe('Name');

        expect(item.url).toBeDefined();
        expect(item.url).toBe('');
    });

    it('should have name and url if contructor with 2 parameters is called', () => {
        const item = new MenuItem('Name', 'Url');

        expect(item.name).toBeDefined();
        expect(item.name).toBe('Name');

        expect(item.url).toBeDefined();
        expect(item.url).toBe('Url');
    });
});