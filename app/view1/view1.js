'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngMaterial', 'ngAnimate'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/view1", {
      templateUrl: "view1/view1.html",
      controller: "view1Ctrl"
  });
}])

.controller('view1Ctrl', function($scope, srvShareData, $location) {

    srvShareData.clearData();

    $scope.dataToShare = [];

    $scope.shareMyData = function (key, myValue, location) {
        $scope.dataToShare = myValue;
        srvShareData.addData(key, $scope.dataToShare, location);
        window.location.href = "/#!/view3";
    }


    $scope.grandparentImageNum = 3;
    $scope.grandchildImageNum = 3;

    $scope.cycleImage = function (who) {
        if (who === 'grandchild') {
            var grandchildImagePath = "../res/avatars/BB_2_" + $scope.grandchildImageNum + ".png";
            document.getElementById("grandchildImage").src = grandchildImagePath;
            $scope.grandchildImageNum = $scope.grandchildImageNum++ % 10 + 3;
        } else if (who === 'grandparent') {
            var grandparentImagePath = "../res/avatars/BB_2_" + $scope.grandparentImageNum + ".png";
            document.getElementById("grandparentImage").src = grandparentImagePath;
            $scope.grandparentImageNum = $scope.grandparentImageNum++ % 10 + 3;
        }

    }
});