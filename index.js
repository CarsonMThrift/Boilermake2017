

function initMap() {
  const currentLocation = $("#currentLocation").val();
  const destinationLocation = $("#destination").val();

  const origin = convertAddress(currentLocation);
  // const destination = convertAddress(destinationLocation);
  console.log(origin);

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: origin
  });

  const originMarker = new google.maps.Marker({
    position: origin,
    map: map
  });
  

  // const destinationMarker = new google.maps.Marker({
  //   position: destination,
  //   map: map
  // });


}

function convertAddress(address) {
  var geocoder = new google.maps.Geocoder();
  // var address = "8228 E 21st St, Indianapolis, Indiana 46219";
  
  geocoder.geocode( { 'address': address}, function(results, status) {
  
  if (status == google.maps.GeocoderStatus.OK) {
    var latitude = results[0].geometry.location.lat();
    var longitude = results[0].geometry.location.lng();
    const coords = {lat: `${latitude}`, lng: `${longitude}`};
    console.log(coords);
    return coords;
  } 
  });
}

// function initMap() {
//      var uluru = {lat: -25.363, lng: 131.044};
//      var map = new google.maps.Map(document.getElementById('map'), {
//        zoom: 4,
//        center: uluru
//      });
//      var marker = new google.maps.Marker({
//        position: uluru,
//        map: map
//      });
//    }

$(document).ready(function() {
  $(".submitButton").on("click", function() {
    // Call various API functions as we get them set up
    initMap();
  });

});
