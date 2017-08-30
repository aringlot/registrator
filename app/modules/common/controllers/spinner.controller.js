const _spinnerService = new WeakMap();
class SpinnerController {
    constructor(SpinnerService){
        'ngInject'
        _spinnerService.set(this, SpinnerService);
    }

    get isShown(){
        return _spinnerService.get(this).isShown;
    }
}

export default SpinnerController;