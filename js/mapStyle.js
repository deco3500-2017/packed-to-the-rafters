
/*====== INITIALISING MAP ======*/

function initMap() {
  var brisbane = {lat: -27.4698, lng: 153.0251};
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: {lat: -27.499915, lng: 153.015202},
  disableDefaultUI: true,
  styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c8c8c8"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#a3a3a3"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#fdfdfd"
      },
      {
        "weight": 2
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#888888"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e0e0e0"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c1c1c1"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#a5a5a5"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "saturation": -100
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "transit.station.rail",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#a5a5a5"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]
});


  /*====== DISCOVER ICONS ======*/
  // Marker Array
  var mapMarkers = [];

  /* Gets location of user and forever shows it on the map */
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }

    var yourMarker = 'https://i.imgur.com/y5BW1fL.png';
    var yourPostition = new google.maps.Marker({
      position: {lat: -27.499512, lng: 153.014220},
      map: map,
      icon: yourMarker,
      optimized: false,
      zIndex: 9999
    });
  });


  /*====== WIFI HOTSPOTS ======*/

  google.maps.event.addDomListener(document.getElementById('wifi-hotspots'), 'click', function () {
      map.panTo(new google.maps.LatLng(-27.499516, 153.014538));
      map.setZoom(18);
  });

  $("#wifi-hotspots").on("click", function() {
    // Clear Markers
    removeMarkers();

    var wifiImg = 'https://i.imgur.com/TAa7l22.png';

    var hotspot1 = new google.maps.Marker({
      position: {lat: -27.499512, lng: 153.014220},
      map: map,
      icon: wifiImg
    });

    var hotspot2 = new google.maps.Marker({
      position: {lat: -27.499587, lng: 153.014937},
      map: map,
      icon: wifiImg
    });

    var hotspot3 = new google.maps.Marker({
      position: {lat: -27.499087, lng: 153.014606},
      map: map,
      icon: wifiImg
    });

    var hotspot4 = new google.maps.Marker({
      position: {lat: -27.499767, lng: 153.014252},
      map: map,
      icon: wifiImg
    });

    var hotspot5 = new google.maps.Marker({
      position: {lat: -27.500485, lng: 153.014150},
      map: map,
      icon: wifiImg
    });

    mapMarkers.push(hotspot1);
    mapMarkers.push(hotspot2);
    mapMarkers.push(hotspot3);
    mapMarkers.push(hotspot4);
    mapMarkers.push(hotspot5);
  });


  /*====== POPULAR ATTRACTIONS ======*/

  google.maps.event.addDomListener(document.getElementById('pop-attracts'), 'click', function () {
      map.panTo(new google.maps.LatLng(-27.4698, 153.0251));
      map.setZoom(14);
  });

  $("#pop-attracts").on("click", function() {
    console.log("lol");
    // Clear Markers
    removeMarkers();

    var attractionMarker = 'https://i.imgur.com/HhLNXSF.png';

    var contentUQ = '<div id="content">'+
     '<div id="siteNotice">'+
     '</div>'+
     '<h1 id="firstHeading" class="firstHeading">UQ Lakes</h1>'+
     '<div id="bodyContent">'+
     '<p><b>Rating: 5/5</b><br></p>'+
     '<p>University of Queenslands beautiful man made lakes.'+
     '<br>Filled with beautiful wildlife such as ducks, turles, fish and pelicans'+
     '</div>'+
     '</div>';

     var infowindowUQ = new google.maps.InfoWindow({
       content: contentUQ
     });

    var uqlakes = new google.maps.Marker({
      position: {lat: -27.499093, lng: 153.016522},
      map: map,
      icon: attractionMarker
    });

    uqlakes.addListener('click', function() {
      infowindowUQ.open(map, uqlakes);
    });

    var contentQueenStreet = '<div id="content">'+
     '<div id="siteNotice">'+
     '</div>'+
     '<h1 id="firstHeading" class="firstHeading">Queen Street Mall</h1>'+
     '<div id="bodyContent">'+
     '<p><b>Rating: 4/5</b><br></p>'+
     '<p>The heart of Brisbane City, Queen Street Mall is filled with great shopping and restraunts.'+
     '</div>'+
     '</div>';

     var infowindowQS = new google.maps.InfoWindow({
       content: contentQueenStreet
     });

    var queenStreet = new google.maps.Marker({
      position: {lat: -27.469522, lng: 153.025214},
      map: map,
      icon: attractionMarker
    });

    queenStreet.addListener('click', function() {
      infowindowQS.open(map, queenStreet);
    });

    var contentGoma = '<div id="content">'+
     '<div id="siteNotice">'+
     '</div>'+
     '<h1 id="firstHeading" class="firstHeading">The Gallery of Modern Art</h1>'+
     '<div id="bodyContent">'+
     '<p><b>Rating: 5/5</b><br></p>'+
     '<p>Also known as GOMA, this art museum always has amazing exhibits to explore. Great photo opportunities as well.</p>'+
     '</div>'+
     '</div>';

     var infowindowGoma = new google.maps.InfoWindow({
       content: contentGoma
     });

    var goma = new google.maps.Marker({
      position: {lat: -27.470430, lng: 153.016971},
      map: map,
      icon: attractionMarker
    });

    goma.addListener('click', function() {
      infowindowGoma.open(map, goma);
    });

    var contentWheel = '<div id="content">'+
     '<div id="siteNotice">'+
     '</div>'+
     '<h1 id="firstHeading" class="firstHeading">The Wheel of Brisbane</h1>'+
     '<div id="bodyContent">'+
     '<p><b>Rating: 4/5</b><br></p>'+
     '<p>Placed in SouthBank Parklands, the Brisbane Eye, is a huge ferriswheel showing off Brisbane city from an amazing height</p>'+
     '</div>'+
     '</div>';

     var infowindowWheel = new google.maps.InfoWindow({
       content: contentWheel
     });

    var wheel = new google.maps.Marker({
      position: {lat: -27.475094, lng: 153.020859},
      map: map,
      icon: attractionMarker
    });

    wheel.addListener('click', function() {
      infowindowWheel.open(map, wheel);
    });

    mapMarkers.push(uqlakes);
    mapMarkers.push(queenStreet);
    mapMarkers.push(goma);
    mapMarkers.push(wheel);
    console.log("pushed");

  });


  /*====== EVENTS YOU'RE ATTENDING/YOU'VE CREATED ======*/

  google.maps.event.addDomListener(document.getElementById('your-events'), 'click', function () {
      map.panTo(new google.maps.LatLng(-27.451850, 153.035789));
      map.setZoom(15);
  });

  $("#your-events").on("click", function() {
    console.log("displaying events");
    // Clear Markers
    removeMarkers();

    var oktImg = 'https://i.imgur.com/mVnUvNT.png';
    var oktoberfest = new google.maps.Marker({
      position: {lat: -27.451003, lng: 153.031977},
      map: map,
      icon: oktImg
    });

    var empImg = 'https://i.imgur.com/Hln9nrj.png';
    var emporium = new google.maps.Marker({
      position: {lat: -27.452250, lng: 153.039319},
      map: map,
      icon: empImg
    });

    mapMarkers.push(oktoberfest);
    mapMarkers.push(emporium);
  });

  function removeMarkers() {
    for (i=0; i<mapMarkers.length; i++){
        mapMarkers[i].setMap(null);
    };
  };


  /*====== SEARCH BOX ======*/
  // Author: Yeldar Kurmangaliyev
  // REF: http://jsfiddle.net/mwdav69t/1/

  // Locations
  var locations = [ "UQ St Lucia", "South Bank, South Brisbane", "Northshore Harbour, Hamilton", "Fortitude Valley"];
  // Respective Lat and Lng of Locations
  var mapLat = [ -27.499915, -27.473559, -27.444794, -27.457218 ];
  var mapLng = [ 153.015202, 153.018790, 153.084351, 153.034969 ];

  /* Keyword autocomplete of search box */
  $("#keyword").autocomplete({
      source: locations,
      minLength: 0,
      select: function (event, ui) {
          var index = locations.indexOf(ui.item.value);
          console.log(index);
          var setMapLat = mapLat[index];
          var setMapLng = mapLng[index];

          removeMarkers();
          // Sets value of search box
          $("#keyword").val(locations[index]);
          // Pans map to selected location
          map.panTo(new google.maps.LatLng(setMapLat, setMapLng));
          map.setZoom(15);

          // Popular attractions marker
          var attractionPin = 'https://i.imgur.com/HhLNXSF.png';

          // If UQ chosen
          if (index == 0) {
            // Clear markers
            removeMarkers();

            var contentUQ = '<div id="content">'+
             '<div id="siteNotice">'+
             '</div>'+
             '<h1 id="firstHeading" class="firstHeading">UQ Lakes</h1>'+
             '<div id="bodyContent">'+
             '<p><b>Rating: 5/5</b><br></p>'+
             '<p>University of Queenslands beautiful man made lakes.'+
             '<br>Filled with beautiful wildlife such as ducks, turles, fish and pelicans'+
             '</div>'+
             '</div>';

             var infowindowUQ = new google.maps.InfoWindow({
               content: contentUQ
             });

            var uqlakes = new google.maps.Marker({
              position: {lat: -27.499093, lng: 153.016522},
              map: map,
              icon: attractionPin
            });

            uqlakes.addListener('click', function() {
              infowindowUQ.open(map, uqlakes);
            });

            mapMarkers.push(uqLakes);
          }

          // If South Bank chosen
          if (index == 1) {
            // Clear markers
            removeMarkers();

            var contentWheel = '<div id="content">'+
             '<div id="siteNotice">'+
             '</div>'+
             '<h1 id="firstHeading" class="firstHeading">The Wheel of Brisbane</h1>'+
             '<div id="bodyContent">'+
             '<p><b>Rating: 4/5</b><br></p>'+
             '<p>Placed in SouthBank Parklands, the Brisbane Eye, is a huge ferriswheel showing off Brisbane city from an amazing height</p>'+
             '</div>'+
             '</div>';

             var infowindowWheel = new google.maps.InfoWindow({
               content: contentWheel
             });

            var wheel = new google.maps.Marker({
              position: {lat: -27.475094, lng: 153.020859},
              map: map,
              icon: attractionPin
            });

            wheel.addListener('click', function() {
              infowindowWheel.open(map, wheel);
            });

            var contentGoma = '<div id="content">'+
             '<div id="siteNotice">'+
             '</div>'+
             '<h1 id="firstHeading" class="firstHeading">The Gallery of Modern Art</h1>'+
             '<div id="bodyContent">'+
             '<p><b>Rating: 5/5</b><br></p>'+
             '<p>Also known as GOMA, this art museum always has amazing exhibits to explore. Great photo opportunities as well.</p>'+
             '</div>'+
             '</div>';

             var infowindowGoma = new google.maps.InfoWindow({
               content: contentGoma
             });

            var goma = new google.maps.Marker({
              position: {lat: -27.470430, lng: 153.016971},
              map: map,
              icon: attractionPin
            });

            goma.addListener('click', function() {
              infowindowGoma.open(map, goma);
            });

            mapMarkers.push(wheel);
            mapMarkers.push(goma);
          }

          // If Northshore chosen
          if (index == 2) {
            // Clear markers
            removeMarkers();


            var contentEat = '<div id="content">'+
             '<div id="siteNotice">'+
             '</div>'+
             '<h1 id="firstHeading" class="firstHeading"> Eat Street</h1>'+
             '<div id="bodyContent">'+
             '<p><b>Rating: 5/5</b><br></p>'+
             '<p>Amazing atmosphere with food, markets and various live music. Great place to bring the family or go for date night</p>'+
             '</div>'+
             '</div>';

             var infowindowEat = new google.maps.InfoWindow({
               content: contentEat
             });

            var eatStreet = new google.maps.Marker({
              position: {lat: -27.443737, lng: 153.079849},
              map: map,
              icon: attractionPin
            });

            eatStreet.addListener('click', function() {
              infowindowEat.open(map, eatStreet);
            });

            mapMarkers.push(eatStreet);
          }

          // If Fortitude valley chosen
          if (index == 3) {
            // Clear markers
            removeMarkers();


            var contentChina = '<div id="content">'+
             '<div id="siteNotice">'+
             '</div>'+
             '<h1 id="firstHeading" class="firstHeading"> China Town</h1>'+
             '<div id="bodyContent">'+
             '<p><b>Rating: 4/5</b><br></p>'+
             '<p>Great Asian culture and food. Nice little city inside Brisbanes own</p>'+
             '</div>'+
             '</div>';

             var infowindowChina = new google.maps.InfoWindow({
               content: contentChina
             });

            var chinaTown = new google.maps.Marker({
              position: {lat: -27.457956, lng: 153.033075},
              map: map,
              icon: attractionPin
            });

            chinaTown.addListener('click', function() {
              infowindowChina.open(map, chinaTown);
            });

            mapMarkers.push(chinaTown);
          }

      }
  }).focus(function () {
    $(this).autocomplete("search");
  });
};
