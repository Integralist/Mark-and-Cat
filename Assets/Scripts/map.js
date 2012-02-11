define(['async!http://maps.google.com/maps/api/js?sensor=false'], function(){

	var marker, 
		latlng = new google.maps.LatLng(51.5835853340362, 0.67008050000004),
		options = {
			zoom: 16, 
			center: latlng, 
			mapTypeControl: true,
			mapTypeControlOptions: { style: google.maps.MapTypeControlStyle.DROPDOWN_MENU },
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false
		},
		map = new google.maps.Map(document.getElementById('map'), options),
		logo = new google.maps.MarkerImage('/Assets/Images/marker.png', new google.maps.Size(107, 83), new google.maps.Point(0,0)),
		infowindow = new google.maps.InfoWindow({ 
			content: '<p><strong>The Lawn</strong><br>01702 203669<br>Hall Road, Rochford, Essex, SS4 1PL</p>',
			maxWidth: 100
		});
		
	marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title: 'The Lawn',
		icon: logo
	});
	
	infowindow.open(map, marker);
	
	google.maps.event.addListener(marker, 'click', function() { 
		infowindow.open(map, marker);
	});

});