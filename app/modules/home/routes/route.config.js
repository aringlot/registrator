import states from  './route.states'

function routeConfig($stateProvider) {
    
    for(let i=0; i< states.length; i++){
        $stateProvider.state(states[i]);
    }
}

routeConfig.$inject = ['$stateProvider'];

export default routeConfig;