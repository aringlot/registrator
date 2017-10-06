const factory =
    (
        $rootScope,
        Hub,
        HUB_SETTINGS,
        HUB_CLIENT_EVENTS,
        HUB_EVENTS
    ) => {
        '$ngInject'

        var hub = new Hub(HUB_SETTINGS.CHAT_HUB, {

            pingInterval: 1000,

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
                    case HUB_EVENTS.connecting:
                        break;
                    case HUB_EVENTS.connected:
                        break;
                    case HUB_EVENTS.reconnecting:
                        //your code here
                        break;
                    case HUB_EVENTS.disconnected:
                        //your code here
                        break;
                }
            },

            autoConnect: false
        });

        const service = {
            connect: () => {
                hub.promise = hub.connect();
                return hub.promise;
            },
            sendMessageToAll: message => hub.promise.then(() => hub.Send(message)),
            sendMessageToGroup: (message, groupName) => hub.promise.then(() => hub.Send(message, groupName)),
            joinGroup: name => hub.promise.then(() => hub.JoinGroup(name)),
            leaveGroup: name => hub.promise.then(() => hub.LeaveGroup(name))
        };

        return service;
    };

export default factory;