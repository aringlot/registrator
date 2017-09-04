import states from 'gallery/config/gallery.states'

const config = function ($stateProvider, $translatePartialLoaderProvider) {
    'ngInject'
    $translatePartialLoaderProvider.addPart('gallery');

    for (let i = 0; i < states.length; i++) {
        $stateProvider.state(states[i]);
    }
};

export default config;