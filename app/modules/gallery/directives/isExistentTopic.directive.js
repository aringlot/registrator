function directive($http, $q) {
    'ngInject'
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModel) {
            ngModel.$asyncValidators.isExistentTopic = function (modelValue, viewValue) {

                var result = $q.defer();

                try {
                    $http.get('/data/gallery-items.data')
                        .then(response => {
                            if (response.data.exsists) {
                                result.resolve();
                            } else {
                                result.reject();
                            }
                        });
                } catch (e) {
                    result.reject();
                }

                return result.promise;
            }
        }
    }
}
export default directive;