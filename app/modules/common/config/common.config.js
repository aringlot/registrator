function config($translatePartialLoaderProvider) {
    $translatePartialLoaderProvider.addPart('common');
}

config.$inject = ['$translatePartialLoaderProvider'];

export default config;