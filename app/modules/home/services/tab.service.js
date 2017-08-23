function tabService($http){      
    const getTabData = (id) => {
        return $http.get('data/tab' + id + '.data').then(function(response){
            return response.data;
        });
    }

    return {
        getTabData : getTabData
    };
}
tabService.$inject = ['$http'];

export default tabService;