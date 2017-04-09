'use strict';

angular.module('myApp.view95', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/view95", {
            templateUrl: "view95/view95.html",
            controller: "view95Ctrl"
        });
    }])

    .controller('view95Ctrl', function ($scope, $window, srvShareData) {

        $scope.sharedData = srvShareData.getData();


    });