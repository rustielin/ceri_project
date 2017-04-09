'use strict';

angular.module('myApp.view8', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/view8", {
            templateUrl: "view8/view8.html",
            controller: "view8Ctrl"
        });
    }])


    .controller('view8Ctrl', function ($scope, srvShareData) {

        $scope.sharedData = srvShareData.getData();

        $scope.setJob = function (job) {

            var o;


            console.log(job);

        }




    });