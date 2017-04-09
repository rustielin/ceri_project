'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngMaterial', 'ngAnimate'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider

            .when("/view1", {
                templateUrl: "view1/view1.html",
                controller: "view1Ctrl"
            })

        ;
    }])

    .controller('view1Ctrl', function ($scope, srvShareData, $location) {

        srvShareData.clearData();

        $scope.dataToShare = [];

        $scope.shareMyData = function (myValue) {

            $scope.dataToShare = myValue;
            srvShareData.addData($scope.dataToShare);


            window.location.href = "/#!/view2";
        }
    });