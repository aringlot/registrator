export default () => { 
    return {
        restrict: 'E',
        transclude: true,
        template: `
            <div class="container-fluid" 
                ng-transclude>
            </div>
        `
    };
};
