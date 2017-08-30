import SpinnerService from 'common/services/spinner.service'

describe('Spinner service', () => {

    it('should have spinner set as hidden after contruction', () => {
        const service = new SpinnerService();

        expect(service.isShown).toBe(false);
    });

    it('should mark spinner as shown when show is called', () => {
        const service = new SpinnerService();
        service.show();

        expect(service.isShown).toBe(true);
    });

    it('should mark spinner as hidden when hide is called', () => {
        const service = new SpinnerService();
        service.hide();

        expect(service.isShown).toBe(false);
    });
});