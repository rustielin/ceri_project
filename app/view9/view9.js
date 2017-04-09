'use strict';

angular.module('myApp.view9', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/view9", {
            templateUrl: "view9/view9.html",
            controller: "view9Ctrl"
        });
    }])

    .controller('view9Ctrl', function ($scope, $window, srvShareData) {

        $scope.sharedData = srvShareData.getData();


    });