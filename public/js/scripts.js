/////////////////
// BACK END
////////////////

//// this initMap is a 'callback' fucntion attached to the end of the URL on index.erb
function initMap(myData) {
  // creates a new google maps object and centers on a area
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 44.06, lng: -121.32}
  });

  // places each marker for the city
  myData.forEach(function(hash_obj) {
    var coord = new google.maps.LatLng(hash_obj['lat'],hash_obj['lng']);
    // coord = {lat: hash_obj['lat'],lng: hash_obj['lng']};
    marker = new google.maps.Marker({
      position: coord,
      map: map
    });
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

  // // AJAX get request - to refresh the map
  // $.get("/ruby_data", function(ruby_data) {
  //   parsed_data = JSON.parse(ruby_data);
  //   initMap(parsed_data);
  // });

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
