function initMap(coords) {
    // TODO Get GPS location of device

    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: coords
    });

    const originMarker = new google.maps.Marker({
      position: coords,
      map: map
    });
}

function convertAddress(address, action) {
  var geocoder = new google.maps.Geocoder();
  // var address = "8228 E 21st St, Indianapolis, Indiana 46219";
  let coords;

  geocoder.geocode( { 'address': address}, function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      const lat = parseFloat(latitude);
      const long = parseFloat(longitude);
      coords = {lat: lat, lng: long};


    }
    switch(action) {
        case 1:
            initMap(coords);
            break;
        case 2:
            getParking(coords);
            break;
        default:
            break;
    }
  });


}

function getParking(coords) {
    const options = {
      "url": `https://apis.solarialabs.com/shine/v1/parking-rules/meters?lat=${coords.lat}&long=${coords.lng}&apikey=3eXq0tri3mABFAZJapJX1uAvD0AZY1qP`,
      "method": "GET",
      "processData": false
    }
    $.ajax(options).done((response)=>{
        // setParkingData(response);
  });
}

$(document).ready(function() {
  $(".submitButton").on("click", function() {
    const destination = $("#destination").val();

    // Call various API functions as we get them set up
    document.querySelector('.output-container').style.display="initial";
    document.querySelector('#map').style.display="block";
    document.querySelector('#footer').style.display="block";
    convertAddress(destination, 1); // Initialize Map
    convertAddress(destination, 2); // Get parking data
  });

});
