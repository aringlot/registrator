const tab = {
    name: 'tab',
    url: '/tab{id}',
    views:{
        'tab':'tab'
    },
    resolve:{
        content: function(TabService, $stateParams){
            return TabService.getTabData($stateParams.id);
        }
    }
};

export default [tab];