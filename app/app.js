'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.view3',
    'myApp.view5',
    'myApp.version',
    'ngMaterial'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider, $mdThemingProvider) {

    // $mdThemingProvider.theme('default')
    //     .primaryPalette('cyan')
    //     .accentPalette('cyan')
    //     .backgroundPalette('cyan')
    //     .warnPalette('cyan');

    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.service('srvShareData', function ($window) {
    var KEY = 'App.SelectedValue';

    var addData = function (key, newObj, location) { // optional location as "grandparent" or "grandchild"
        var mydata = $window.sessionStorage.getItem(KEY);
        if (mydata) {
            mydata = JSON.parse(mydata);
        } else {
            mydata = {grandchild: {}, grandparent: {}};
        }

        if (typeof location === "undefined") {
            mydata[key] = newObj;
        } else {
            mydata[location][key] = newObj;
        }

        $window.sessionStorage.setItem(KEY, JSON.stringify(mydata));
    };

    var getData = function () {
        var mydata = $window.sessionStorage.getItem(KEY);
        if (mydata) {
            mydata = JSON.parse(mydata);
        }
        return mydata || {};
    };

    var clearData = function () {
        $window.sessionStorage.removeItem(KEY);
    };

    return {
        addData: addData,
        getData: getData,
        clearData: clearData
    };
});