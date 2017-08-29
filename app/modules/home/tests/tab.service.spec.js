import TabService from 'registrator/home/services/tab.service.js'

describe('Tab service', () => {
    var httpMock;
    var service;

    beforeEach(angular.mock.inject(($http, $httpBackend) => {
        httpMock = $httpBackend;
        service = new TabService($http);
    }));

    it('should request data from server by url', () => {

        httpMock.expectGET('data/tab1.data').respond('data');
        service.getTabData(1);
        httpMock.flush();
    });
});
