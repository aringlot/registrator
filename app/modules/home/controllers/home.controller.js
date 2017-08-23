import TabModel from 'home/controllers/models/tab.model'

class HomeController{
    constructor(){
        this.tabs = [];        

        this.$onInit = () => this.onInit();
    }

    async onInit(){
        this.tabs.push(new TabModel('Home.Tab1', 'main.tab1'));
        this.tabs.push(new TabModel('Home.Tab2', 'main.tab2'));
    }
}

export default HomeController;