export default () => { 
    return {
        restrict: 'E',
        transclude: true,
        template: `<div class="row" ng-transclude></div>`
    };
}