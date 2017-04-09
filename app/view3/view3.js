'use strict';

angular.module('myApp.view3', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when("/view3", {
            templateUrl: "view3/view3.html",
            controller: "view3Ctrl"
        });
    }]).controller('view3Ctrl', function($scope, srvShareData) {

    $scope.nextPage = function() {
        window.location.href = "/#!/view2";
    }

    $scope.checkkey = function (event) {
        alert(event.keyCode);
    }

    $scope.$on('keypress', function (e, a, key) {
        $scope.$apply(function () {
            alert(key);
        });
    })

    $scope.next = function () {
        window.location.href = "/#!/view4";

    }

    $scope.sharedData = srvShareData.getData();
});