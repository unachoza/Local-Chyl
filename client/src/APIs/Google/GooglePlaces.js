// import axios from 'axios'


// export default axios.create({
//     baseURL: "",
//     params: {

//     }
// })

import axios from 'axios'
// google.maps.PlacesService
// {google.maps.Map}

// var map;
// var service;
// var infowindow;

// function initMap() {
//   var newYork = new google.maps.LatLng(40.7128, 74.0060);

//   infowindow = new google.maps.InfoWindow();

//   map = new google.maps.Map(
//       document.getElementById('map'), {center: newYork, zoom: 15});

//   var request = {
//     query: 'MoMa',
//     fields: ['name', 'geometry'],
//   };

//   var service = new google.maps.places.PlacesService(map);

//   service.findPlaceFromQuery(request, function(results, status) {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//       for (var i = 0; i < results.length; i++) {
//         createMarker(results[i]);
//       }
//       map.setCenter(results[0].geometry.location);
//     }
//   });
// }

// AIzaSyBk84im0t2vFG0uUBq1p1mMcZkFkr0CBLI

export const getPizza = () => {
    axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=pizza+&type=restaurant&location=-40.7128,74.0060&radius=10000&key=AIzaSyBmWnWztEKra0Do5XJfk8HMiA2yz1bdwAA')
    .then( res => console.log(res))
}

