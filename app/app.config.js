RouteConfig.$inject = ['$stateProvider'];

export default function RouteConfig($stateProvider) {
    var helloState = {
        name: 'main',
        url: '',
    };
    $stateProvider.state(helloState);
    
}