
var success = function(message) {
            alert(message);
        }

var failure = function() {
            alert("Error calling Hello Plugin");
        }
var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

  // onError Callback receives a PositionError object

function onError(error) {
	alert('code: '    + error.code    + '\n' +
		  'message: ' + error.message + '\n');
}

document.addEventListener("deviceready", onDeviceReady, false);

    // it's safe to make cordova calls:
	function onDeviceReady() {
		document.getElementById('sayHello').onclick = function () { alert("hola"); }

		document.getElementById('geo').onclick = function () {
            //alert("hola");
            //navigator.geolocation.getCurrentPosition(onSuccess, onError);
            var networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'No network connection';

            alert('Connection type: ' + states[networkState]);
        }

		document.getElementById('test').onclick = function () {hello.greet("World", success, failure);}
        document.getElementById('menu01').onclick = function () {alert("hola");}

		document.getElementById('takePhoto').onclick = function () {
					navigator.camera.getPicture( function(imageURI)
									{
										var lastPhoto= document.getElementById("thePhoto");
										lastPhoto.innerHTML="<img src='" + imageURI + "' style='width=60%;'/>" } )
					}
    }
