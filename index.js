function initMap(destination) {
  const currentLocation = $("#currentLocation").val();

  const origin = convertAddress(currentLocation);
  // destination = convertAddress(destination);


  // const destinationMarker = new google.maps.Marker({
  //   position: destination,
  //   map: map
  // });


}


function convertAddress(address) {
  var geocoder = new google.maps.Geocoder();
  // var address = "8228 E 21st St, Indianapolis, Indiana 46219";
  let coords;
  
  geocoder.geocode( { 'address': address}, function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      coords = {lat: `${latitude}`, lng: `${longitude}`};
      console.log(coords)

      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: coords
      });
    
      const originMarker = new google.maps.Marker({
        position: coords,
        map: map
      });
    }
  });

  
}

function getParking() {

}

$(document).ready(function() {
  $(".submitButton").on("click", function() {
      const destination = $("#destination").val();

    // Call various API functions as we get them set up
    document.querySelector('.output-container').style.display="initial";
    document.querySelector('#map').style.display="block";
    document.querySelector('#footer').style.display="block";
    initMap(destination);
    getParking(destination);
  });

});
