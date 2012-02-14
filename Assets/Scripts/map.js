define(['async!http://maps.googleapis.com/maps/api/js?libraries=places&sensor=true'], function(){

	var marker, 
		latlng = new google.maps.LatLng(51.5835853340362, 0.67008050000004),
		options = {
			zoom: 10, 
			center: new google.maps.LatLng(51.60539783939976, 0.67008050000004), 
			mapTypeControl: true,
			mapTypeControlOptions: { style: google.maps.MapTypeControlStyle.DROPDOWN_MENU },
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false
		},
		map = new google.maps.Map(document.getElementById('map'), options),
		logo = new google.maps.MarkerImage('/Assets/Images/marker.png', new google.maps.Size(107, 83), new google.maps.Point(0,0)),
		infowindow = new google.maps.InfoWindow({ 
			content: '<strong>The Lawn</strong><br>01702 203669<br>Hall Road, Rochford, Essex, SS4 1PL<br><br>Click on the surrounding markers for hotels within the area…'
		}),
		hotelwindow;
		
	marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title: 'The Lawn',
		icon: logo
	});
	
	infowindow.open(map, marker);
	
	google.maps.event.addListener(marker, 'click', function() { 
		infowindow.open(map, marker);
		if (hotelwindow) {
			hotelwindow.close();
		}		
	});
	
	function createMarker(place) {
		var placeLoc = place.geometry.location,
			marker = new google.maps.Marker({
				map: map,
				position: place.geometry.location
			}),
			content = '<strong>' + place.name + '</strong><br>' + place.vicinity + '<br><a href="http://www.google.co.uk/search?q=' + place.name + '%2C ' + place.vicinity + '%2C Essex%2C UK">Click here to search for this Hotel\'s contact details</a><hr class="map"><small>(Sorry for the lack of contact number/email,<br>Google services doesn\'t provide contact information directly so we have to manually search for them)</small>';
		console.log(place);
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.close();
			hotelwindow.setContent(content);
			hotelwindow.open(map, this);
		});
	}
	
	function processLocation(position) {
		hotelwindow = new google.maps.InfoWindow();
		
		// Request any Hotels within 5 miles (in meters) from the current location
		var request = {
			location: latlng,
			radius: 8046.72, // 5 miles => http://www.unitconversion.org/length/meters-to-miles-conversion.html
			name: 'Hotel'
		};
		
		// Create the Places request
		var service = new google.maps.places.PlacesService(map);
			service.search(request, function(results, status){
				if (status == google.maps.places.PlacesServiceStatus.OK) {
					for (var i = 0; i < results.length; i++) {
						var place = results[i];
						createMarker(results[i]); 
					}
				}
			});
	}
	
	processLocation();

});