export const doIfConnected = (isConnected, 
    {
        scope,
        event
    },
    action) => {

    if (!isConnected) {
        scope.$on(event, () => action());
    } else {
        return action();
    }
};