"use strict";

jQuery(document)
    .ready(function($) {
        $.ajax({
            url: "http://api.wunderground.com/api/fa68cab032c04fcd/geolookup/conditions/q/TX/Austin.json",
            dataType: "jsonp",
            success: function(parsed_json) {
                var location = parsed_json['location']['city'];
                var temp_f = parsed_json['current_observation']['temp_f'];
                var weather = parsed_json['current_observation']['weather'];
                // alert("Current temperature in " + location + " is: " + temp_f);
                document.getElementById('weather')
                    .innerHTML = "It's " + temp_f.toFixed(0) + "&#176" + " and " + weather + " In " + location;
            }
        });
    });
