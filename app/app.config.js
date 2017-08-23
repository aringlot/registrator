function routeConfig($stateProvider) {
   
    var helloState = {
        name: 'main',
        url: '/',
        views:{
            'main':'home'
        }
    };
    $stateProvider.state(helloState);
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;