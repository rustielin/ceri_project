'use strict';

angular.module('myApp.view10', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/view10", {
            templateUrl: "view10/view10.html",
            controller: "view10Ctrl"
        });
    }])

    .controller('view10Ctrl', function ($scope, $window, srvShareData) {



    });