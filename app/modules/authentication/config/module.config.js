import states from  'authentication/config/route.states'

function config($stateProvider) {
    'ngInject'
    for(let i=0; i< states.length; i++){
        $stateProvider.state(states[i]);
    }
}

export default config;