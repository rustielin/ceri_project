'use strict';

angular.module('myApp.view4', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/view4", {
            templateUrl: "view4/view4.html",
            controller: "view4Ctrl"
        });
    }])


    .controller('view4Ctrl', function ($scope, $window, srvShareData) {

        //var start = ol.proj.transform([srvShareData.getData()['grandchild']['lat'], srvShareData.getData()['grandchild']['long']], 'EPSG:4326', 'EPSG:3857');
        //var dest = ol.proj.transform([srvShareData.getData()['grandfather']['lat'], srvShareData.getData()['grandfather']['long']], 'EPSG:4326', 'EPSG:3857');

        //var start = ol.proj.transform([134, -23], 'EPSG:4326', 'EPSG:3857');

        var pre_pos = ol.proj.transform([-122.5, 37], 'EPSG:4326', 'EPSG:3857');

        var start = "San Fransisco, CA, US";
        var end = "Phnom Penh, Cambodia";


        var geocoder =  new google.maps.Geocoder();

        var map;





        $scope.init = function () {

            geocoder.geocode( { 'address': start}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng());

                    var start_pos = ol.proj.transform([results[0].geometry.location.lng(), results[0].geometry.location.lat()], 'EPSG:4326','EPSG:3857');
                    doBounce(start_pos);


                    setTimeout(function () {
                        geocoder.geocode( { 'address': end}, function(results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                console.log("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng());

                                var end_pos = ol.proj.transform([results[0].geometry.location.lng(), results[0].geometry.location.lat()], 'EPSG:4326','EPSG:3857');
                                doBounce(end_pos)




                            } else {
                                console.log("Something got wrong " + status);
                            }
                        });
                    }, 5000);





                } else {
                    console.log("Something got wrong " + status);
                }
            });


            var layer = new ol.layer.Tile({
                source: new ol.source.OSM()
            });

            var view = new ol.View({
                center: pre_pos,
                zoom: 7
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
                resolution: map.getView().getResolution() * 4
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

            $window.location = "/#!/view5";
        };










    });