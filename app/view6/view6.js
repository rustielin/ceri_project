/**
 * Created by rustie on 4/9/17.
 */
'use strict';

angular.module('myApp.view6', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when("/view6", {
            templateUrl: "view6/view6.html",
            controller: "view6Ctrl"
        });
    }]).controller('view6Ctrl', function($scope, srvShareData) {

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