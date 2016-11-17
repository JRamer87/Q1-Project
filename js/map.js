"use strict";
$(document)
    .ready(function() { /* google maps -----------------------------------------------------*/
        google.maps.event.addDomListener(window, 'load', initialize);

        /* -----         Loads the map once the page is loaded   ------- */

        function initialize() {

            /* position Austin */
            var latlng = new google.maps.LatLng(30.2655498, -97.7452663);

            var mapOptions = {
                center: latlng,
                scrollwheel: false,
                zoom: 12
            };

            var marker = new google.maps.Marker({
                position: latlng,
                // url: '/',
                animation: google.maps.Animation.DROP
            });

            var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
            marker.setMap(map);

        }
        //
        // function performSearch() {
        //     var request = {
        //         bounds: map.getBounds(),
        //         keyword: 'coffee'
        //     };
        //     service.radarSearch(request, callback);
        // }
        /* end google maps -----------------------------------------------------*/
        $('#search')
            .on('click', function(event) {
                console.log('you clicked me');
            })
    });
