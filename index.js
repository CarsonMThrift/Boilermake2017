function initMap() {
  const currentLocation = $("#currentLocation").val().split(",");
  const destination = $("#destination").val().split(",");

  const uluru = { lat: parseInt(currentLocation[0]), lng: parseInt(currentLocation[1]) }

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });

  const marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

}

$(document).ready(function() {
  $(".submitButton").on("click", function() {
    // Call various API functions as we get them set up
    initMap();
  });

});
