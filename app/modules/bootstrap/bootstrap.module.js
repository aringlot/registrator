import angular from 'angular'

import column from 'registrator/bootstrap/directives/column.directive'
import container from 'registrator/bootstrap/directives/container.directive'
import containerFluid from 'registrator/bootstrap/directives/container-fluid.directive'
import row from 'registrator/bootstrap/directives/row.directive'
import formGroup from 'registrator/bootstrap/directives/form-group.directive'

var module = angular.module('custom.bootstrap', [])
    .directive('column', column)
    .directive('container', container)
    .directive('containerFluid', containerFluid)
    .directive('row', row)
    .directive('fGroup', formGroup);

export default module;