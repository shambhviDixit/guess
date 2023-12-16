let Latitude= 23.41667000;
let Longitude= 75.50000000;

mapboxgl.accessToken='pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map=new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[Longitude,Latitude],
    zoom:16,
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true,
        },
        trackUserLocation: true,
    })),
map.addControl(
  new MapboxDirections({
    accessToken:mapboxgl.accessToken,
  }),
    'top-left'
)