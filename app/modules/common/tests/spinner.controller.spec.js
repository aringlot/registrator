import SpinnerController from 'common/controllers/spinner.controller'
import SpinnerService from 'common/services/spinner.service'

describe('Spinner controller', () => {

    var spinnerService;
    var spyOnIsShown;

    beforeEach(() => {
        spinnerService = new SpinnerService();
        spyOnIsShown = spyOnProperty(spinnerService, 'isShown', 'get').and.returnValue(true);
    });

    it('should call spinner service to obtain data is spinner should be displayed', () => {
        const vm = new SpinnerController(spinnerService);
        const isShown = vm.isShown;

        expect(spyOnIsShown).toHaveBeenCalled();
        expect(isShown).toBe(true);
    });
});