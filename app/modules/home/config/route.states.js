const tab1 = {
    name: 'main.tab1',
    url: 'tab1',
    component: 'tab',
    resolve:{
        content: TabService => TabService.getTabData('1')
    }
};

const tab2 = {
    name: 'main.tab2',
    url: 'tab2',
    component: 'tab',
    resolve:{
        content: TabService => TabService.getTabData('2')
    }
};

export default [tab1, tab2];