Wanker.factory("NotificationService", function () {
    return {
        alert: function (message, title, buttonText, buttonAction) {
            navigator.notification.alert(message,
                buttonAction,
                title,
                buttonText);
        }
    };
});