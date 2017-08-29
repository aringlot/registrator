class AboutUsController{
    constructor(){
        this.$onInit = () => this.onInit();
    }
    onInit() {
        this.author = 'Oleksandr Yershov';
        this.created = new Date('2017-08-22');
    }
}

export default AboutUsController