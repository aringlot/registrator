import states from  './route.states'
RouteConfig.$inject = ['$stateProvider'];

export default function RouteConfig($stateProvider) {
    
    for(let i=0; i< states.length; i++){
        $stateProvider.state(states[i]);
    }
}