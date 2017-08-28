const _loginService = new WeakMap();

class LoginController {
    constructor(LoginService){
        'ngInject'
        _loginService.set(this, LoginService);
        this.login = '';
        this.password = '';
    }

    async onSubmit(){
        try{
            const service = _loginService.get(this);
            let response = await service.login(this.login, this.password);
        }catch(e){
            console.log(e);
        }
    }
}

export default LoginController;