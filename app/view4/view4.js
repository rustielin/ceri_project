'use strict';

angular.module('myApp.view4', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/view4", {
            templateUrl: "view4/view4.html",
            controller: "view4Ctrl"
        });
    }])

    .controller('view4Ctrl', function ($scope, $window) {

        var london = ol.proj.transform([-0.12755, 51.507222], 'EPSG:4326', 'EPSG:3857');
        var rome = ol.proj.transform([12.5, 41.9], 'EPSG:4326', 'EPSG:3857');


        var map;

        $scope.init = function () {

            var layer = new ol.layer.Tile({
                source: new ol.source.OSM()
            });

            var view = new ol.View({
                center: london,
                zoom: 6
            });


            map = new ol.Map({
                target: 'map',
                layers: [layer],
                view: view
            });


        };


        function doBounce(location) {
            // bounce by zooming out one level and back in
            var bounce = ol.animation.bounce({
                resolution: map.getView().getResolution() * 2
            });
            // start the pan at the current center of the map
            var pan = ol.animation.pan({
                source: map.getView().getCenter()
            });
            map.beforeRender(bounce);
            map.beforeRender(pan);
            // when we set the center to the new location, the animated move will
            // trigger the bounce and pan effects
            map.getView().setCenter(location);
        };

        $scope.activate = function () {

            doBounce(rome);
        };







    });