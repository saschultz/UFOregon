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
    coord = {lat: hash_obj['lat'],lng: hash_obj['lng']};
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

  $.get("/ruby_data", function(ruby_data) {
    parsed_data = JSON.parse(ruby_data);
    initMap(parsed_data);
  });

  $("#run_map").click(function() {
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
