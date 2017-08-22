import TabModel from './models/tab.model'

class HomeController{
    constructor(){
        this.tabs = [
            new TabModel('Home.Tab1', 'tab1'),
            new TabModel('Home.Tab2', 'tab2')
        ];
        
        this.title = 'Home.Tab.Title'
    }
}

export default HomeController;