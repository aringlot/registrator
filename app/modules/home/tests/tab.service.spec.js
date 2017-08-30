import TabService from 'registrator/home/services/tab.service.js'
import SpinnerService from 'common/services/spinner.service.js'

describe('Tab service', () => {
    var httpMock;
    var service;
    var spinnerService;

    beforeEach(angular.mock.inject(($http, $httpBackend) => {
        httpMock = $httpBackend;
        spinnerService = new SpinnerService();
        spyOn(spinnerService, 'show');
        spyOn(spinnerService, 'hide');

        service = new TabService($http, spinnerService);
    }));

    it('should request data from server by url', () => {

        httpMock.expectGET('data/tab1.data').respond('data');
        service.getTabData(1);
        httpMock.flush();

        expect(spinnerService.show).toHaveBeenCalled();
        expect(spinnerService.hide).toHaveBeenCalled()
    });

    it('should request data from server by url', () => {
        
        httpMock.expectGET('data/tab1.data').respond(500, '');
        service.getTabData(1);
        httpMock.flush();

        expect(spinnerService.show).toHaveBeenCalled();
        expect(spinnerService.hide).toHaveBeenCalled();
    });

    it('should hide spinner anyway', () => {
        service.getTabData(1);

        expect(spinnerService.show).toHaveBeenCalled();
        expect(spinnerService.hide).toHaveBeenCalled();
    })
});
