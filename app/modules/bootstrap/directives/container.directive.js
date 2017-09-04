export default () => {
    return {
        restrict: 'E',
        transclude: true,
        template: `
            <div class="container" 
                    ng-transclude>
            </div>
        `
    };
};
