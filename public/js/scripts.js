
//// this initMap is a 'callback' fucntion attached to the end of the URL on index.erb
function initMap() {

  // Oregon cities only
  var Cities = {
    adair: {lat: 44.67, lng: -123.22},
    adrian: {lat: 43.74, lng: -117.07},
    albany: {lat: 44.63, lng: -123.10},
    aloha: {lat: 45.50, lng: -122.87},
    alsea: {lat: 44.38, lng: -123.60},
    alvadore: {lat: 44.13, lng: -123.26},
    alvord: {lat: 42.54, lng: -118.46},
    amity: {lat: 45.12, lng: -123.21},
    beaverton: {lat: 45.49, lng: -122.80},
    bend: {lat: 44.06, lng: -121.32},
    eugene: {lat: 44.05, lng: -123.08},
    hillsboro: {lat: 45.52, lng: -122.99},
    portland: {lat: 45.52, lng: -122.68},
    albertLake: {lat: 43.45, lng: -119.14},
    alfalfa: {lat: 44.08, lng: -121.01}
    //   : {lat: , lng: };
  };

  // creates a new google maps object and centers on a area
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 44.06, lng: -121.32}
  });

  // adds the coordinates for each city into an array
  coords = [];
  for (var key in Cities) {
    console.log("key:", Cities[key])
    coords.push(Cities[key]);
  };

  // places each marker for the city
  for (var city in coords) {
    coord = coords[city];
    marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  }

} //// END INITMAP


//  injections = <%= @injections.to_json %>;
//  medicines = <%= @medicines.to_json %>;
