function mainCtrl($scope, $location, stateService) {

    $scope.stateService=stateService;

    $scope.message = "MONGO!";      //en test

    $scope.redirect = function(path) {
        $location.path(path);
    };

    $scope.changeShit = function() {
        var parentElement = document.getElementById("deviceready");
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    }

}
