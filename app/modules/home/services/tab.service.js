const _httpService = new WeakMap();

class TabService{
    constructor($http){
        _httpService.set(this, $http);
    }

    getTabData(id){
        return _httpService
            .get(this)
            .get('data/tab' + id + '.data')
            .then(function(response){
                return response.data;
            });
    }
}

export default TabService;
