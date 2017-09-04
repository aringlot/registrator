import angular from 'angular'
import 'angular-ui-router'
import 'angular-translate'

import galleryComponent from 'gallery/components/gallery.component'
import isExistentTopicDirective from 'gallery/directives/isExistentTopic.directive'

import config from 'gallery/config/gallery.config'

let module = angular
    .module('gallery', ['ui.router', 'pascalprecht.translate'])
    .component('gallery', galleryComponent)
    .directive('existentTopic', isExistentTopicDirective)
    .config(config);

export default module;