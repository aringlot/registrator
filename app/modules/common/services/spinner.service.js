const _isShown = new WeakMap();

class SpinnerService {
    constructor(){
        _isShown.set(this, false);
    }

    show(){
        _isShown.set(this, true);
    }

    hide(){
        _isShown.set(this, false);
    }

    get isShown(){
        return _isShown.get(this);
    }
}

export default SpinnerService;