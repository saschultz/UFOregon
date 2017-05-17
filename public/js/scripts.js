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

  // Oregon cities only
  // var Cities = {
  //   adair: {lat: 44.67, lng: -123.22},
  //   adrian: {lat: 43.74, lng: -117.07},
  //   albany: {lat: 44.63, lng: -123.10},
  //   aloha: {lat: 45.50, lng: -122.87},
  //   alsea: {lat: 44.38, lng: -123.60},
  //   alvadore: {lat: 44.13, lng: -123.26},
  //   alvord: {lat: 42.54, lng: -118.46},
  //   amity: {lat: 45.12, lng: -123.21},
  //   beaverton: {lat: 45.49, lng: -122.80},
  //   bend: {lat: 44.06, lng: -121.32},
  //   eugene: {lat: 44.05, lng: -123.08},
  //   hillsboro: {lat: 45.52, lng: -122.99},
  //   portland: {lat: 45.52, lng: -122.68},
  //   albertLake: {lat: 43.45, lng: -119.14},
  //   alfalfa: {lat: 44.08, lng: -121.01}
  //   //   : {lat: , lng: };
  // }

  // places each marker for the city
  myData.forEach(function(hash_obj) {
    // console.log("coord" , stuff);
    coord = {lat: hash_obj['lat'],lng: hash_obj['lng']};
    marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  });
}

function removeQuotes(data) {
  clean_arr = data.replace(/"/g,"");
  return clean_arr;
}


///////////////////
// FRONT END
///////////////////
$(document).ready(function() {

  test_hash = {};
  test_hash = $("#json_test1").text();


  $("#output_hash").append(test_hash);
  console.log(test_hash)

  $("#toggle_map").click(function(){
    $("#map_super").toggleClass("hide");
    console.log("toggle_map clicked");
  });

  $("#run_map").click(function(){
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
