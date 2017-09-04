export default () => {
    return {
        restrict: 'E',
        transclude: true,
        template: `<div ng-class="{'has-error' : invalid}"
                        ng-transclude>
                   </div>`,
        scope: {
            invalid: '='
        }
    };
};