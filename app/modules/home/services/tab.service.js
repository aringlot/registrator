const _httpService = new WeakMap();
const _spinnerService = new WeakMap();

class TabService{
    constructor($http, SpinnerService){
        'ngInject'
        _httpService.set(this, $http);
        _spinnerService.set(this, SpinnerService);
    }

    getTabData(id){
        _spinnerService.get(this).show();
        
        let data = '';
        let httpStatus = '';
        try{
            data = _httpService
                .get(this)
                .get('data/tab' + id + '.data')
                .then(response => response.data,
                      response => httpStatus = response.status);
        }finally{
            _spinnerService.get(this).hide();
        }

        return data;
    }
}

export default TabService;
