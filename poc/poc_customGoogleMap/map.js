/*
 * Baccarat Hotels and Residences New York
 * 
 * Main Site
 *
 * Global Namespace
 */
 var googleMap = window.googleMap || {};

/*
 * Global logic
 * @namespace
 */
 (function (context, $) {

    'use strict';

    var googleMap = (function() {

        var vars = {
            INITIAL_LAT: 40.760825,
            INITIAL_LONG: -73.9772461,
            ZOOM: 16
        };

        var hotelPosition = new google.maps.LatLng(vars.INITIAL_LAT, vars.INITIAL_LONG);

        function addMarker(map) {
            //var hotelPosition = new google.maps.LatLng(vars.INITIAL_LAT, vars.INITIAL_LONG);
console.log(hotelPosition);
            var contentString = '<p>20 West 53rd Street<br />NEW YORK CITY<br />212-765-5300</p>';

            var infowindow = new google.maps.InfoWindow({
                content: '<div id="mapInfoWindow" style="line-height:1.35; overflow:hidden; white-space:nowrap;"><img src="img/logo-baccarat-map.png" />' + contentString +'</div>'
            });

            var marker = new google.maps.Marker({
              position: hotelPosition,
              map: map,
              title: 'Baccarat Hotel & Residences New York',
              icon: 'img/marker.png'
          });

            google.maps.event.addListener(marker, 'mouseover', function() {
                infowindow.open(map,marker);
            });
        }

        function init() {
            // Verify if Google Map Placeholder exists on the page
            if ($('#google-map').length) {
            
                // Map options
                var options = {
                    //center: new google.maps.LatLng(vars.INITIAL_LAT, vars.INITIAL_LONG),
                    center: hotelPosition,
                    zoom: vars.ZOOM,
                    panControl: false,
                    zoomControl: true,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.SMALL,
                        position: google.maps.ControlPosition.TOP_LEFT
                    },
                    streetViewControl: false
                };

                // Map Styler Array
             var styleArray = [
               
                  {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [
                        { hue: "#d1b1b0" },
                        { saturation: -60 }
                    ]
                    },
                  {
                    featureType: "landscape.man_made",
                    elementType: "geometry",
                    stylers: [
                      { hue: "#e5e1dd" }
                    ]
                  },
                  {
                    featureType: "poi.business",
                    elementType: "label",
                    stylers: [
                      { hue: "#cb6f80" }
                    ]
                  },
                  {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [
                      { hue: "#bed2b5" },
                      { saturation: -16 }
                    ]
                  },
                  {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [
                      { hue: "#bcdaff" },
                      { saturation: 26 }
                    ]
                  }              
                ];

                //Create the map
                var map = new google.maps.Map(document.getElementById("google-map"), options);
                map.setOptions({styles: styleArray});
                addMarker(map);
            }
        }

        return { init : init };

    })();

    function init() {
        googleMap.init();
    }

    $(init);

}(googleMap, jQuery));