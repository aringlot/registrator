import angular from 'angular'
import 'angular-ui-router'

import {ChatComponent} from 'chat/components/chat.component'

import config from 'chat/config/chat.config'

const chatModule = angular
    .module('chat', ['ui.router'])
    .component('chat', ChatComponent)
    .config(config);

export default chatModule.name;

export {chatModule};

