/* leonard verhave
   date: 12-5-24
   filer name: googleMaps.js */

   let map1;
   let map2;
   
   /* load map 1 of users location */
   function initMaps() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
    
          map1 = new google.maps.Map(document.getElementById("map1"), {
            zoom: 12,
            center: userLocation,
          });
    
          new google.maps.Marker({
            position: userLocation,
            map: map1,
            title: "Your Location",
          });
        });
    }

/* load map 2 of Paris */

const paris = { lat: 48.8566, lng: 2.3514 }; 

    map2 = new google.maps.Map(document.getElementById("map2"), {
        zoom: 12,
        center: paris,
});

    new google.maps.Marker({
        position: paris,
        map: map2,
        title: "Paris",
});
};