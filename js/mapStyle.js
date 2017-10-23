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


  // Marker Array
  var mapMarkers = [];

  // If you click wifi hotspots in Discover
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

  // If you click on the pop attractions in Discover
  google.maps.event.addDomListener(document.getElementById('pop-attracts'), 'click', function () {
      map.panTo(new google.maps.LatLng(-27.489171, 153.028228));
      map.setZoom(13);
  });

  $("#pop-attracts").on("click", function() {
    console.log("lol");
    // Clear Markers
    removeMarkers();

    var danceImg = 'https://i.imgur.com/8nr0DVt.png';
    var chakradance = new google.maps.Marker({
      position: {lat: -27.510199, lng: 153.032964},
      map: map,
      icon: danceImg
    }); 

    var openImg = 'https://i.imgur.com/1jee9H9.png';
    var openAir = new google.maps.Marker({
      position: {lat: -27.478389, lng: 153.023217},
      map: map,
      icon: openImg
    });

    mapMarkers.push(chakradance);
    mapMarkers.push(openAir);
  });

  // If you click on the events in Discover
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

};