import ButtonController from 'registrator/common/controllers/button.controller'

describe('Button controller', () => {
    
    it('should be defined after contruction', () => {
        const button = new ButtonController();
        expect(button).toBeDefined();
    })
});