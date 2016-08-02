$( document ).ready(function() {
    console.log( "ready!" );
});
function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: -18.124809, lng:178.450079 },
            zoom: 9
        });
      }




