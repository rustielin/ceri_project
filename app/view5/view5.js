'use strict';

angular.module('myApp.view5', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when("/view5", {
            templateUrl: "view5/view5.html",
            controller: "view5Ctrl"
        });
    }]).controller('view5Ctrl', function($scope, srvShareData) {

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