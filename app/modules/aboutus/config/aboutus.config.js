import states from  'aboutus/config/route.states'

function routeConfig($stateProvider, $translatePartialLoaderProvider) {
    
    for(let i=0; i< states.length; i++){
        $stateProvider.state(states[i]);
    }

    $translatePartialLoaderProvider.addPart('aboutus');
}

routeConfig.$inject = ['$stateProvider', '$translatePartialLoaderProvider'];

export default routeConfig;