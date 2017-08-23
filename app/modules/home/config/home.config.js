import states from  'home/config/route.states'

function config($stateProvider, $translatePartialLoaderProvider) {
    
    for(let i=0; i< states.length; i++){
        $stateProvider.state(states[i]);
    }

    $translatePartialLoaderProvider.addPart('home');
}

config.$inject = ['$stateProvider', '$translatePartialLoaderProvider'];

export default config;