'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngMaterial', 'ngAnimate'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/view1", {
      templateUrl: "view1/view1.html",
      controller: "view1Ctrl"
  });
}])

.controller('view1Ctrl', function($scope, srvShareData, $location) {



    $scope.pageClass = 'page-home';


    srvShareData.clearData();

    $scope.dataToShare = [];

    $scope.grandparentImageNum = 3;
    $scope.grandparentImagePath = "../res/avatars/BB_2_" + $scope.grandparentImageNum + ".png";

    $scope.grandchildImageNum = 3;
    $scope.grandchildImagePath = "../res/avatars/BB_2_" + $scope.grandchildImageNum + ".png";


    $scope.shareMyData = function (key, myValue, location) {
        $scope.dataToShare = myValue;
        srvShareData.addData(key, $scope.dataToShare, location);

        srvShareData.addData("pic", $scope.grandchildImagePath, "grandchild");
        srvShareData.addData("pic", $scope.grandparentImagePath, "grandparent");

        window.location.href = "/#!/view2";
    }

    $scope.cycleImage = function (who) {
        if (who === 'grandchild') {
            $scope.grandchildImagePath = "../res/avatars/BB_2_" + $scope.grandchildImageNum + ".png";
            document.getElementById("grandchildImage").src = $scope.grandchildImagePath;
            $scope.grandchildImageNum = $scope.grandchildImageNum++ % 10 + 3;
            srvShareData.addData("pic", $scope.grandchildImagePath, "grandchild");
        } else if (who === 'grandparent') {
            $scope.grandparentImagePath = "../res/avatars/BB_2_" + $scope.grandparentImageNum + ".png";
            document.getElementById("grandparentImage").src = $scope.grandparentImagePath;
            $scope.grandparentImageNum = $scope.grandparentImageNum++ % 10 + 3;
            srvShareData.addData("pic", $scope.grandparentImagePath, "grandparent");
        }

    }
});