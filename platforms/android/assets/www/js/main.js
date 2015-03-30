var map;		//this will be the global reference to your map object
var myLatlng = new google.maps.LatLng(45.349356,-75.753222);
 var myOptions = {
			zoom: 14,
			center: myLatlng,
			disableDefaultUI: true,
			mapTypeControl: true,
			zoomControl: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP, 
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.TERRAIN, google.maps.MapTypeId.SATELLITE],
				style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
			}
}
	
window.onload = init;

function init(){
	//create the map
	map = new google.maps.Map(document.getElementById("map"), myOptions);
	
	google.maps.event.addListener(map, 'dblclick', one);
	google.maps.event.addListener(map, 'dragend', function(ev){
		//alert('dragend');
		//alert(ev.latLng); not with drag
	//	alert(  map.getCenter() );
		map.setZoom(3);
		var lat = (Math.random() * 180) - 90;		// -90 to 90
		var lng = (Math.random() * 360) - 180;		//-180 to 180
		var LL = new google.maps.LatLng(lat, lng);
		map.panTo( LL );
		map.setZoom(12);
		var b = map.getBounds();		//b is now a LatLngBounds object
		alert("ne: " +  b.getNorthEast() + " sw: " + b.getSouthWest() );
		//this tells us what the coordinates are for the top right and bottom left of the map showing
	});
}

function one( ev ){
	alert(ev.latLng );	//ev is the event and it has a latLng object	
	alert( ev.latLng.lat() );
}