
var Wanker = angular.module("Wanker", ["ngRoute"]); //add ngRoute ($routeProvider) as a dependency for the app


<!--Routing-->
Wanker.config(function ($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"partials/splash.html",
        controller:"testCtrl"
    }).when("/test",{
            templateUrl:"partials/test.html",
            controller:"testCtrl"
        }).otherwise({
            redirectTo:"/"
        })
});