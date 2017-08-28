const _cookieService = new WeakMap();
const _dateTimeService = new WeakMap();
const _authConst = new WeakMap();

class SessionService{
    constructor($cookies, DateTimeService, AUTH_CONST){
        'ngInject'
        _cookieService.set(this, $cookies);
        _dateTimeService.set(this, DateTimeService);
        _authConst.set(this, AUTH_CONST);
    }

    create(user){
        const cookieService = _cookieService.get(this);
        const dateTimeService = _dateTimeService.get(this);
        const authConst = _authConst.get(this);

        cookieService.put(authConst.cookieName, user, { expires : new Date(dateTimeService.now.getTime() + 30 * 60 * 1000 )})
    }

    get currentUser(){
        const cookieService = _cookieService.get(this);
        const authConst = _authConst.get(this);

        return cookieService.get(authConst.cookieName);
    }
}

export default SessionService