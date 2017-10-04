import {doIfConnected} from 'core/services/chat-hub.helper'

const _isConnected = new WeakMap();

const factory =
    (
        $rootScope,
        Hub, HUB_SETTINGS,
        HUB_CLIENT_EVENTS,
        HUB_EVENTS
    ) => {
        '$ngInject'

        var hub = new Hub(HUB_SETTINGS.CHAT_HUB, {
            rootPath: HUB_SETTINGS.CHAT_HUB_URL,

            listeners: {
                'ShowMessage': data => {
                    $rootScope.$broadcast(HUB_CLIENT_EVENTS.messageRecievedFromHub, data)
                }
            },

            methods: ['Send', 'JoinGroup', 'LeaveGroup'],

            errorHandler: error => console.error(error),

            stateChanged: state => {
                switch (state.newState) {
                    case $.signalR.connectionState.connecting:
                        break;
                    case $.signalR.connectionState.connected:
                        $rootScope.$broadcast(HUB_EVENTS.connected);
                        break;
                    case $.signalR.connectionState.reconnecting:
                        //your code here
                        break;
                    case $.signalR.connectionState.disconnected:
                        //your code here
                        break;
                }
            },

            autoConnect: false
        });

        const eventSource = {
            scope: $rootScope,
            event: HUB_EVENTS.connected            
        }

        const service = {
            connect: () => hub.connect(),
            sendMessageToAll: message => doIfConnected(_isConnected.get(service), eventSource, () => hub.Send(message)),
            sendMessageToGroup: (message, groupName) => doIfConnected(_isConnected.get(service), eventSource, () => hub.Send(message, groupName)),
            joinGroup: name => doIfConnected(_isConnected.get(service), eventSource, () => hub.JoinGroup(name)),
            leaveGroup: name => doIfConnected(_isConnected.get(service), eventSource, () => hub.LeaveGroup(name))
        };

        $rootScope.$on(HUB_EVENTS.connected, () => {
            _isConnected.set(service, true);
        });

        return service;
    };

export default factory;