const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZmF2b3VyLXRoZS1kZXYiLCJhIjoiY2xncjd3c2tqMTV2YjNqbXR3NjVsczN1NSJ9.3_ntmLyYZsHvNTeUQYGIwQ';


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function setMap(centerposition){
    const map = new mapboxgl.Map({
        accessToken: MAPBOX_ACCESS_TOKEN,
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: centerposition,
        zoom: 15
    });

    const navigationcontrols =  new mapboxgl.NavigationControl();
    map.addControl(navigationcontrols)

    const directionpluggin = new MapboxDirections({
        accessToken: MAPBOX_ACCESS_TOKEN
    })

    map.addControl(directionpluggin, 'top-left')
}

function successLocation(position){
    setMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setMap([-2.14, 53.4])
}