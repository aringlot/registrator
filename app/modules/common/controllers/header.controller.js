import MenuItem from 'common/controllers/models/header.menuItem'

const _traslate = new WeakMap();

class HeaderController {
    constructor($translate){
        _traslate.set(this, $translate);

        this.menuItems = [];
        this.buttons = [];
        this.$onInit = () => this.onInit()
    }

    onInit(){
        this.menuItems.push(new MenuItem('Common.Header.Articles', 'articles'));
        this.menuItems.push(new MenuItem('Common.Header.Gallery', 'gallery'));
        this.menuItems.push(new MenuItem('Common.Header.AboutUs', 'aboutus'));

        this.buttons.push(new MenuItem('Common.Header.Registration', 'registration'));
        this.buttons.push(new MenuItem('Common.Header.Login', 'login'));
    }

    selectLanguage(language){
        _traslate.get(this).use(language);
    }
}

HeaderController.$inject = ['$translate'];

export default HeaderController;
