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

//////////////////v////////////////////////////////////
//// initMap = master google maps API output
//////////////////////////////////////////////////////
function initMap(queryData) {
  // console.log("queryData: " , queryData);
  let startCoord = new google.maps.LatLng(queryData[0]["lat"],queryData[0]["lng"]);
  // creates a new google maps object and centers on a area
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    // center: {lat: 44.06, lng: -121.32},
    center: startCoord,
    styles: google_styles
  });
  // places each marker for the city
  queryData.forEach(function(hash_obj) {
    let coord = new google.maps.LatLng(hash_obj['lat'],hash_obj['lng']);
    marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  });
  // setting up the marker window HTML content
  var myContent = "";
  if (queryData[0]['tot'] !== 0) {
    myContent = "<h3 class='blk_text'>" + queryData[0]["cit"] + "</h3><br>" + "<p class='blk_text'>Found = " + queryData[0]["tot"] + " UFOs <br>" +
    "<p class='blk_text'>Lat= " + queryData[0]["lat"] + "<br>" + " Long= " + queryData[0]["lng"] + "<p>";
  }
  // map marker window
  var infowindow = new google.maps.InfoWindow({
    content: myContent
  });

  google.maps.event.addListener(marker, 'click', function() {
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
