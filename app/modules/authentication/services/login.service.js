const _httpService = new WeakMap();
const _sessionService = new WeakMap();
const _rootScope = new WeakMap();
const _authConst = new WeakMap();

class LoginService{
    constructor($http, $rootScope, SessionService, AUTH_CONST){
        'ngInject'
        _httpService.set(this, $http);
        _sessionService.set(this, SessionService);
        _authConst.set(this, AUTH_CONST);
        _rootScope.set(this, $rootScope);
    }

    async login(login, password){
        var result = await _httpService.get(this).post('http://localhost:50130/api/Authentication/', {
            login: login,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json', 
            }
        }).then(response => response.data);
        
        if(result.Token != undefined){
            const sessionService = _sessionService.get(this);
            const rootScope = _rootScope.get(this);
            const authConst = _authConst.get(this);

            sessionService.create(result.Token);
            rootScope.$broadcast(authConst.loginSuccess);
        }
    }
}

export default LoginService;