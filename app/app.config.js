function config($stateProvider, $translateProvider, $translatePartialLoaderProvider) {
   
    var helloState = {
        name: 'main',
        url: '/',
        views:{
            'main':'home'
        }
    };
    $stateProvider.state(helloState);

    $translateProvider
        .useLoader('$translatePartialLoader', {
            urlTemplate: '/modules/{part}/translations/{lang}.json'
        })
        .preferredLanguage('en')
        .useLoaderCache(true)
        .useCookieStorage();
}

config.$inject = ['$stateProvider', '$translateProvider'];
export default config;