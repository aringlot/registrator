export const hubSettings = {
    CHAT_HUB: 'ChatHub',
    CHAT_HUB_URL: 'http://localhost:59788/signalr'
}

export const clientEvents = {
    messageRecievedFromHub : 'message-recieved-from-hub'
}

// Following events are copied from documentation
export const hubEvents = {
    connecting: 0,
    connected: 1,
    reconnecting: 2,
    disconnected: 4
}