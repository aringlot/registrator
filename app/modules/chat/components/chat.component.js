import {ChatController} from 'chat/controllers/chat.controller'
import template from 'views/chat/chat.template.html'

const ChatComponent = {
    controller: ChatController,
    controllerAs: 'vm',
    template
};

export {ChatComponent};