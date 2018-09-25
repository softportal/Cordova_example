var map_used = false;
function print(message) {
	alert(message);
}

function print_geo(){
    function onSuccess(position){
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    }

    function onError(error){
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}


function hide_all(){
    var div_blocks = document.getElementsByClassName("main_div");
    for (var i = 0; i < div_blocks.length; i ++) {
           div_blocks[i].style.display = 'none';
    }
}

function hide(div_name){
    var x = document.getElementById(div_name);
    x.style.display = "none"
}

function show(div_name){
    hide_all();

    var x = document.getElementById(div_name);

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function display_map(lat, lng){
    if (map_used){
        map_used = false;
        show("map_canvas");
        return;
    }
    show("map_canvas");
    map_used = true;
    var div = document.getElementById("map_canvas");

      // Create a Google Maps native view under the map_canvas div.
    var map = plugin.google.maps.Map.getMap(div);

	// Move to the position with animation
	map.animateCamera({
	  target: {lat: lat, lng: lng},
	  zoom: 17,
	  tilt: 60,
	  bearing: 140,
	  duration: 5000
	});

	// Add a maker
	var marker = map.addMarker({
	  position: {lat: lat, lng: lng},
	  title: "Welecome to \n" +
			 "Cordova GoogleMaps plugin for iOS and Android",
	  snippet: "This plugin is awesome!",
	  animation: plugin.google.maps.Animation.BOUNCE
	});

	// Show the info window
	marker.showInfoWindow();
}

function map(){
    function onSuccess(position){
		var lat = position.coords.latitude;
		var lon = position.coords.lon;

		display_map(lat, lon);
    }

    function onError(error){
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
