import MenuItem from './models/header.menuItem'

class HeaderController {
    constructor(){
        this.menuItems = [];
        this.buttons = [];

        this.$onInit = () => this.onInit()
    }

    onInit(){
        this.menuItems.push(new MenuItem('Header.Articles', 'articles'));
        this.menuItems.push(new MenuItem('Header.Gallery', 'gallery'));
        this.menuItems.push(new MenuItem('Header.AboutUs', 'aboutus'));

        this.buttons.push(new MenuItem('Header.Registration', 'registration'));
        this.buttons.push(new MenuItem('Header.Login', 'login'));
    }
}

export default HeaderController;
