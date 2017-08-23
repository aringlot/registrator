class AboutUsController{
    constructor(){
        this.$onInit = () => this.onInit();
    }
    onInit() {
        this.author = 'Oleksandr Yershov';
        this.description = 'AboutUs.Description';
        this.created = new Date('2017-08-22');
        this.title = 'AboutUs.Title';
    }
}

export default AboutUsController