
// OREGON
function initMap() {
  var oregon = {lat: 43.8, lng: -120.5};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: oregon
  });

  // var marker = new google.maps.Marker({
  //   position: portland,
  //   map: map
  // });

}

// AUSTRALIA
// function initMap() {
//   var uluru = {lat: -25.363, lng: 131.044};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: uluru
//   });
//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// }
