
var Ping = angular.module("Ping", ["ngRoute"]).run(function() {
    FastClick.attach(document.body);
}); //add ngRoute ($routeProvider) as a dependency for the app, and init fastclick on body


<!--Routing-->
Ping.config(function ($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"partials/splash.html",
        controller:"mainCtrl"
    }).when("/main",{
            templateUrl:"partials/main.html",
            controller:"mainCtrl"
        }).when("/splash",{
            templateUrl:"partials/splash.html",
            controller:"mainCtrl"
        }).when("/word",{
            templateUrl:"partials/word.html",
            controller:"wordCtrl"
        }).otherwise({
            redirectTo:"/"
        })
});