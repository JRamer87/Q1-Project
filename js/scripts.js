"use strict";
$(document)
    .ready(function() { /* google maps -----------------------------------------------------*/
        google.maps.event.addDomListener(window, 'load', initialize);

        function initialize() {

            /* position Amsterdam */
            var latlng = new google.maps.LatLng(30.3076863, -97.8934865);

            var mapOptions = {
                center: latlng,
                scrollWheel: false,
                zoom: 13
            };

            var marker = new google.maps.Marker({
                position: latlng,
                url: '/',
                animation: google.maps.Animation.DROP
            });

            var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
            marker.setMap(map);

        }

        function performSearch() {
            var request = {
                bounds: map.getBounds(),
                keyword: 'fire stations'
            };
            service.radarSearch(request, callback);
        }
        /* end google maps -----------------------------------------------------*/
    });
