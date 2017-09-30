
function convertAddress() {
    var geocoder = new google.maps.Geocoder();
    var address = "8228 E 21st St, Indianapolis, Indiana 46219";
    
    geocoder.geocode( { 'address': address}, function(results, status) {
    
    if (status == google.maps.GeocoderStatus.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      console.log(latitude + "," + longitude);
    } 
    });
}

$(document).ready(function() {
    $(".submitButton").on("click", function() {
      // Call various API functions as we get them set up
      convertAddress();
    });
  
});