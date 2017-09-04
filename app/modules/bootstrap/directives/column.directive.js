export default () => {
    return {
        scope: {
            size: '<',
            offset: '<'
        },
        restrict: 'E',
        transclude: true,
        template: `
            <div class="{{'col-md-' + size}} {{'col-md-offset-' + (offset || 0)}}" 
                    ng-transclude>
            </div>`
    };
};