Wanker.controller("NotificationController", function ($scope, NotificationService) {
    $scope.showAlert = function () {
        NotificationService.alert("You caused an alert.", "Alert", "Ok", function () {
            $scope.message = "You clicked it!"
        })
    };
});