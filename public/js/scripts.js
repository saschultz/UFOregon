/////////////////
// BACK END
////////////////

var google_styles = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}]
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}]
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry',
    stylers: [{color: 'white'}]
  }
];

//// this initMap is a 'callback' fucntion attached to the end of the URL on index.erb
function initMap(queryData) {
  console.log("queryData: " , queryData);
  // creates a new google maps object and centers on a area
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 44.06, lng: -121.32},
        styles: google_styles
      });

  // places each marker for the city
  var ufo = './img/ufo_marker_eerie.png'
  queryData.forEach(function(hash_obj) {
    var coord = new google.maps.LatLng(hash_obj['lat'],hash_obj['lng']);
    // coord = {lat: hash_obj['lat'],lng: hash_obj['lng']};
    marker = new google.maps.Marker({
      position: coord,
      animation: google.maps.Animation.DROP,
      icon: ufo,
      map: map
    });
    marker.addListener('click', toggleBounce);
    marker.addListener('click', showReport);
  });

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  function showReport() {
    $('#scrollable-content').show();
  }

  // You can use a LatLng literal in place of a google.maps.LatLng object when
  // creating the Marker object. Once the Marker object is instantiated, its
  // position will be available as a google.maps.LatLng object. In this case,
  // we retrieve the marker's position using the
  // google.maps.LatLng.getPosition() method.
  var infowindow = new google.maps.InfoWindow({
    // example of lattitude and longitude (use <br> after each line to had more 'content')
    // content: '<p>Marker Location:' + marker.getPosition() + '</p><br>' +
    content: '<p class="blk_text">location from database: (' + 'Lat: ' + queryData[0]['lat'] + ' Lng: ' + queryData[0]['lng'] + ')<p>'
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(map, marker, queryData);
  });
}

///////////////////
// FRONT END
///////////////////
$(document).ready(function() {

  test_hash = $("#json_test1").text();

  $("#toggle_map").click(function() {
    $("#map_super").toggleClass("hide");
    console.log("toggle_map clicked");
  });

  // AJAX get request - to refresh the map
  $.get("/ruby_data", function(ruby_data) {
    parsed_data = JSON.parse(ruby_data);
    initMap(parsed_data);
  });

  $("#map_it").click(function() {
    // AJAX get request
    $.get("/ruby_data", function(ruby_data) {
      parsed_data = JSON.parse(ruby_data);
      initMap(parsed_data);
    });
    console.log("run_map clicked");
  });

});

// TEST
// $("button").click(function(){
//   $("#div1").load("/play",function(responseTxt,statusTxt,xhr){
//     // if(statusTxt=="success") alert("External content loaded successfully!");
//     if(statusTxt=="error")
//       alert("Error: "+xhr.status+": "+xhr.statusText);
//   });
// });

// $.post("greeting", { salutation: "Howdy", name: "Friend" },
//        function(result) {
//      $("#greeting").html(result);
//  });

// AJAX request example
// $("button").click(function(){
//     $.ajax({url: "demo_test.txt", success: function(result){
//         $("#div1").html(result);
//     }});
// });

// TESTING COORDINATES OREGON
// # [
// #   {lat: 44.67, lng: -123.22},
// #   {lat: 43.74, lng: -117.07},
// #   {lat: 44.63, lng: -123.10},
// #   {lat: 45.50, lng: -122.87},
// #   {lat: 44.38, lng: -123.60},
// #   {lat: 44.13, lng: -123.26},
// #   {lat: 42.54, lng: -118.46},
// #   {lat: 45.12, lng: -123.21},
// #   {lat: 45.49, lng: -122.80},
// #   {lat: 44.06, lng: -121.32},
// #   {lat: 44.05, lng: -123.08},
// #   {lat: 45.52, lng: -122.99},
// #   {lat: 45.52, lng: -122.68},
// #   {lat: 43.45, lng: -119.14},
// #   {lat: 44.08, lng: -121.01},
// #   {lat: 44.08, lng: -121.01}
// # ].to_json
