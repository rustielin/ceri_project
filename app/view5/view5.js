'use strict';

angular.module('myApp.view5', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/view5", {
            templateUrl: "view5/view5.html",
            controller: "view5Ctrl"
        });
    }])


    .controller('view5Ctrl', function ($scope, srvShareData) {







    });