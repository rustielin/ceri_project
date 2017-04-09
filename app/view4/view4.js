'use strict';

angular.module('myApp.view4', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when("/view4", {
            templateUrl: "view4/view4.html",
            controller: "view4Ctrl"
        });
    }]).controller('view4Ctrl', function($scope, srvShareData) {

    $scope.sharedData = srvShareData.getData();

    // srvShareData.clearData();

    // $scope.dataToShare = [];

    $scope.shareMyData = function (key, myValue, location) {
        $scope.dataToShare = myValue;
        srvShareData.addData(key, $scope.dataToShare, location);
    }

    $scope.uncheck = function (event) {
        if ($scope.checked == event.target.value) {
            $scope.checked = false
        }
    }
});