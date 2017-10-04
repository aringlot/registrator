const _chatHub = new WeakMap();
const _scope = new WeakMap();

class ChatController {
    constructor(ChatHub, HUB_CLIENT_EVENTS, $scope) {
        '$ngInject'
        _chatHub.set(this, ChatHub);
        _scope.set(this, $scope);

        $scope.$on(HUB_CLIENT_EVENTS.messageRecievedFromHub, (event, message) => this.handleRecievedMessage(event, message));
    }

    handleRecievedMessage(event, message) {
        console.log(message);
        this.lastMessage = message;
        _scope.get(this).$apply();
    }

    onInit() {
        this.group = '';
        this.message = '';
        this.lastMessage = '';
    }

    send() {
        const hub = _chatHub.get(this);
        if (!this.group) {
            hub.sendMessageToAll({
                UserName: 'test',
                Message: this.message
            });
        } else {
            hub.sendMessageToGroup({
                UserName: 'test',
                Message: this.message
            }, this.group);
        }
    }

    joinGroup() {
        _chatHub.get(this)
            .joinGroup(this.group);
    }

    leaveGroup() {
        _chatHub.get(this)
            .leaveGroup(this.group);
    }
}

export {ChatController};