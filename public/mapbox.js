// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

let portraitMapData = {};
let landscapeMapData = {};
let mapDataLng;
let mapDataLat;
let initialSyncDone = false;
const sizeButtonId = ['#sizeButton1','#sizeButton2','#sizeButton3','#sizeButton4','#sizeButton5','#sizeButton6'];

let smallFontSize = 15;

$w.onReady(function () {  
    // Initializeing the button default condition
	$w('#portraitBox').show();
	$w('#landscapeBox').hide();
	setActiveButton("#portraitButton");
	setInactiveButton("#landscapeButton");
	
	//Setting the active and inactive state of the layouts
	displayLayout();

	//Setting the active and inactive state of the size button
	setupSizeButtonEvents();

	//Assigning html element value to htmlElementId button and displaying landscape and portrait html elements
	$w('#portraitButton').onClick(()=>{
		
		htmlElementId = "#html1";
		$w('#portraitBox').show();
		$w('#landscapeBox').hide();

		//Pass coordinates to sync maps
		if (landscapeMapData.Coordinates.lng != portraitMapData.Coordinates.lng || landscapeMapData.Zoomlevel != portraitMapData.Zoomlevel || 
		landscapeMapData.Direction != portraitMapData.Direction || landscapeMapData.Pitch != portraitMapData.Pitch){
			$w("#portraitHtml").postMessage({type: "syncCenter", lat: landscapeMapData.Coordinates.lat, lon: landscapeMapData.Coordinates.lng,
											zoom: landscapeMapData.Zoomlevel, direction: landscapeMapData.Direction, pitch: landscapeMapData.Pitch});
		}
	});

	$w('#landscapeButton').onClick(()=>{
		
		htmlElementId = '#html2';
		$w('#portraitBox').hide();
		$w('#landscapeBox').show();

		//Pass coordinates to sync maps
		if (!initialSyncDone || landscapeMapData.Coordinates.lng !=portraitMapData.Coordinates.lng || landscapeMapData.Zoomlevel != portraitMapData.Zoomlevel || 
		landscapeMapData.Direction != portraitMapData.Direction || landscapeMapData.Pitch != portraitMapData.Pitch){
			$w("#landscapeHtml").postMessage({type: "syncCenter", lat: portraitMapData.Coordinates.lat, lon: portraitMapData.Coordinates.lng,
											zoom: portraitMapData.Zoomlevel, direction: portraitMapData.Direction, pitch: portraitMapData.Pitch});
		}
	});


	// This will be used in designing the layout of the maps
	$w("#titleInput").onInput(() => {
        // Get the current value of the text input
        let userInputText = $w("#titleInput").value;
		$w('#landscapeLayout4Title').text = userInputText;
		$w('#portraitLayout4Title').text = userInputText;
    });

    /* Listening for the message from the HTML component
     The below message fetches the map details at the 'moveend' action function (Mapbox function). 
     It passes the coordiantes, zoom level and the beearing of the map that can be used to recreate the map in the html1 settings. 
     Map Style details can also be added here to get a complete picture. */
    $w("#portraitHtml").onMessage((event) => {
    if (event.data.type === "mapMoved") {
		portraitMapData = {"Coordinates": event.data.coordinates, "Zoomlevel":event.data.zoomlevel, "Direction":event.data.direction, "Pitch": event.data.pitch};
		
		console.log("Portrait Map Data: ",portraitMapData);


		// using reverse geocoding to assign the values of city and country to the layouts
		reverseGeocode(portraitMapData.Coordinates).then(address => {
    	let location = processGeocodeResponse(address);
		$w('#portraitLayout4Title').text = location.city.toUpperCase();
		$w('#portraitLayout4Heading').text = location.country.toUpperCase();
		$w('#portraitLayout2Title').text = location.city.toUpperCase();
		$w('#portraitLayout2Heading').text = location.country.toUpperCase();
    	console.log("City Name: ",location.city);
		console.log("Country Name: ", location.country);
		}).catch(error => {
    	console.error("Failed to get the address:", error);
		});

		//Display the coordinates of the location by fetching coordinates from mapData and formatting'em
		mapDataLng = portraitMapData.Coordinates.lng;
		mapDataLat = portraitMapData.Coordinates.lat;
		if (mapDataLat>0 && mapDataLng<0){
			$w('#portraitLayout4Coords').text = Math.abs(mapDataLat.toFixed(3))+"​ ° N / "+ Math.abs(mapDataLng.toFixed(3))+" ° W";
			$w('#portraitLayout2Coords').text = Math.abs(mapDataLat.toFixed(3))+"​ ° N / "+ Math.abs(mapDataLng.toFixed(3))+" ° W";
			} else if (mapDataLat<0 && mapDataLng<0){
			$w('#portraitLayout4Coords').text = Math.abs(mapDataLat.toFixed(3))+" ° S / "+ Math.abs(mapDataLng.toFixed(3))+" ° W";
			$w('#portraitLayout2Coords').text = Math.abs(mapDataLat.toFixed(3))+" ° S / "+ Math.abs(mapDataLng.toFixed(3))+" ° W";
			} else if (mapDataLat>0 && mapDataLng>0){
			$w('#portraitLayout4Coords').text = Math.abs(mapDataLat.toFixed(3))+" ° N / "+ Math.abs(mapDataLng.toFixed(3))+" ° E";
			$w('#portraitLayout2Coords').text = Math.abs(mapDataLat.toFixed(3))+" ° N / "+ Math.abs(mapDataLng.toFixed(3))+" ° E";
			} else if (mapDataLat<0 && mapDataLng>0){
			$w('#portraitLayout4Coords').text = Math.abs(mapDataLat.toFixed(3))+" ° S / "+ Math.abs(mapDataLng.toFixed(3))+" ° E";
			$w('#portraitLayout2Coords').text = Math.abs(mapDataLat.toFixed(3))+" ° S / "+ Math.abs(mapDataLng.toFixed(3))+" ° E";
			}

		//console.log(mapDataLng,"  ",mapDataLat);
		// Display the output
		//console.log("Address Array: ",addressArray);
		}
        });

	$w("#landscapeHtml").onMessage((event) => {
    if (event.data.type === "mapMoved") {
		landscapeMapData = {"Coordinates": event.data.coordinates, "Zoomlevel":event.data.zoomlevel, "Direction":event.data.direction, "Pitch": event.data.pitch};

		console.log("Landscape Map Data: ", landscapeMapData)
		initialSyncDone = true;
		// Getting required array form string 
		// by then, and split method
		reverseGeocode(landscapeMapData.Coordinates).then(address => {
    	let location = processGeocodeResponse(address);
		$w('#landscapeLayout4Title').text = location.city.toUpperCase();
		$w('#landscapeLayout2Title').text = location.city.toUpperCase();
		$w('#landscapeLayout4Heading').text = location.country.toUpperCase();
		$w('#landscapeLayout2Heading').text = location.country.toUpperCase();
    	console.log("City Name: ",location.city);
		console.log("Country Name: ", location.country);
		}).catch(error => {
    	console.error("Failed to get the address:", error);
		});
		
		//Display the coordinates of the location by fetching coordinates from mapData and formatting'em
		mapDataLng = landscapeMapData.Coordinates.lng;
		mapDataLat = landscapeMapData.Coordinates.lat;
		if (mapDataLat>0 && mapDataLng<0){
			$w('#landscapeLayout4Coords').text = Math.abs(mapDataLat.toFixed(3))+" ° N / "+ Math.abs(mapDataLng.toFixed(3))+" ° W";
			$w('#landscapeLayout2Coords').text = Math.abs(mapDataLat.toFixed(3))+" ° N / "+ Math.abs(mapDataLng.toFixed(3))+" ° W";
			} else if (mapDataLat<0 && mapDataLng<0){
			$w('#landscapeLayout4Coords').text = Math.abs(mapDataLat.toFixed(3))+" ° S / "+ Math.abs(mapDataLng.toFixed(3))+" ° W";
			$w('#landscapeLayout2Coords').text = Math.abs(mapDataLat.toFixed(3))+" ° S / "+ Math.abs(mapDataLng.toFixed(3))+" ° W";
			} else if (mapDataLat>0 && mapDataLng>0){
			$w('#landscapeLayout4Coords').text = Math.abs(mapDataLat.toFixed(3))+" ° N / "+ Math.abs(mapDataLng.toFixed(3))+" ° E";
			$w('#landscapeLayout2Coords').text = Math.abs(mapDataLat.toFixed(3))+" ° N / "+ Math.abs(mapDataLng.toFixed(3))+" ° E";
			} else if (mapDataLat<0 && mapDataLng>0){
			$w('#landscapeLayout4Coords').text = Math.abs(mapDataLat.toFixed(3))+" ° S / "+ Math.abs(mapDataLng.toFixed(3))+" ° E";
			$w('#landscapeLayout2Coords').text = Math.abs(mapDataLat.toFixed(3))+" ° S / "+ Math.abs(mapDataLng.toFixed(3))+" ° E";
			}
		}
        });
	
	$w("#addressInput").onChange(() => {
        // Checks if the #addressInput1 value is True i.e. exists
        if ($w("#addressInput").value) {
            let address = $w("#addressInput").value;
            let addressLat = address.location.latitude;
            let addressLon = address.location.longitude;
			let addressFormatted = address.formatted;

            // The following console log is showing the coordinates of the #addressInput search
            console.log("Latitude: ", addressLat, ", Longitude: ", addressLon, "Formatted Address: ", addressFormatted);

            // Now, pass the coordinates which were declared as addressLat and addressLon to the #html1 component for map.flyTo action
             $w("#portraitHtml").postMessage({type: "setCordinates", lat: addressLat, lon: addressLon });
			 $w("#landscapeHtml").postMessage({type: "setCordinates", lat: addressLat, lon: addressLon });}
             });
	


	// Adding event listener to the style selection repeater
	$w("#styleRepeater").onItemReady(($item, itemData, index) => {
        // Get the button in the repeater item and add a click event listener
        $item("#styleButton").onClick(() => {
            // When the button is clicked, send the styleUrl to the HTML element
            $w("#portraitHtml").postMessage({type: "style", styleURL: itemData.styleUrl});
			$w("#landscapeHtml").postMessage({type: "style", styleURL: itemData.styleUrl});
			
        });
	});

	//Adding event listener to the layout selection repeater
	$w("#layoutRepeater").onItemReady(($item, itemData, index) => {
	$item("#layoutButton").onClick(() => {
		toggleLayouts(itemData.layoutId);
		});
	});


	//Adding an event listener to the orientation buttons and passing the values to the html body containg the mapbox map

	// Toggle to Landscape
	$w("#landscapeButton").onClick(() => {
		setActiveButton("#landscapeButton");
		setInactiveButton("#portraitButton");
		});
	
	// Toggle to Portrait
	$w("#portraitButton").onClick(() => {
		setActiveButton("#portraitButton");
		setInactiveButton("#landscapeButton");
		});
	
});

// function that changes the color scheme of Active selection button to show the toggle feature
function setActiveButton(buttonId) {
	$w(buttonId).style.backgroundColor = "#000000";
	$w(buttonId).style.color = "#FFFFFF";
}

// function that changes the color scheme of Active selection button to show the toggle feature
function setInactiveButton(buttonId) {
	$w(buttonId).style.backgroundColor = "#E8E6E6";
	$w(buttonId).style.color = "#000000";
	$w(buttonId).style.fill = "50%";
}

let htmlElementId;

//Reverse geocoding function that fetches values from mapbox or google geocoding API
function reverseGeocode(center) {
    return new Promise((resolve, reject) => {
        // Mapbox URL
        const mapboxUrl = `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${center.lng}&latitude=${center.lat}&types=address&access_token=pk.eyJ1IjoidG91c2VlZnlvdW5hcyIsImEiOiJjbHNnajllcTExbmtiMmxzYjM2YnBxa3U0In0.Q9H6YygAJWXVQiQ0QAU-UQ`;

        // Attempt to get the address from Mapbox first
        fetch(mapboxUrl)
        .then(response => response.json())
        .then(data => {
            if (data.features && data.features.length > 0) {
                const address = data.features[0].properties.context;
                resolve(address);
            } else {
                // If no address found, use Google Geocoding API as a fallback
                const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${center.lat},${center.lng}&key=AIzaSyCK25N-sT4fsucc-hb3fGT0P6RlJ7FndgY`;
                return fetch(googleUrl);  // Return the fetch promise to continue the promise chain
            }
        })
        .then(response => {
            if (response) {
                return response.json();
            }
        })
        .then(data => {
            if (data && data.status === 'OK') {
                const address = data.results[0].address_components;
                resolve(address);
            } else {
                reject('No address found in Google Geocode either.');
            }
        })
        .catch(err => {
            console.error('Error with geocoding:', err);
            reject(err);
        });
    });
}


function processGeocodeResponse(data) {
    let city, country;

    // Check if the response is an array (indicating it's from Google)
    if (Array.isArray(data)) {
        // Assume Google Geocode Response
        // Loop through the address components to find city and country
        data.forEach(component => {
            if (component.types.includes("locality")) {
                city = component.long_name;
            }
            if (component.types.includes("country")) {
                country = component.long_name;
            }
        });
    } else {
		 city = data.place.name;
		country = data.country.name;
	}
	return {city, country};
}

// Function to set the clicked button active and all others inactive
function updateButtonStyles(activeButtonId) {
    sizeButtonId.forEach(buttonId => {
        if (buttonId === activeButtonId) {
            setActiveButton(buttonId);
        } else {
            setInactiveButton(buttonId);
        }
    });
}

// Function to initialize button click events
function setupSizeButtonEvents() {
    sizeButtonId.forEach(buttonId => {
        $w(buttonId).onClick(() => {
            updateButtonStyles(buttonId);
        });
    });
}

function toggleLayouts(activeLayoutId) {
    // List all your layout container IDs
    const portraitLayoutIds = ['#portraitLayout2', '#portraitLayout4']; // Add more layouts as needed
	const landscapeLayoutIds = ['#landscapeLayout2','#landscapeLayout4']

    // Hide all portrait containers first
    portraitLayoutIds.forEach(id => {
        $w(id).hide();
    });

    // Show only the active layout
    $w(`#portrait${activeLayoutId}`).show();

	// Hide all landscape containers
	landscapeLayoutIds.forEach(id => {
        $w(id).hide();
    });

    // Show only the active layout
    $w(`#landscape${activeLayoutId}`).show();
}

function displayLayout(){
	//replace the following logic with a for loop when all the layouts have been finalized
	$w('#portraitLayout4').hide();
	$w('#landscapeLayout4').hide();
}
/*function reverseGeocode(center) {
    return new Promise((resolve, reject) => {
        var url = `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${center.lng}&latitude=${center.lat}&types=address&access_token=pk.eyJ1IjoidG91c2VlZnlvdW5hcyIsImEiOiJjbHNnajllcTExbmtiMmxzYjM2YnBxa3U0In0.Q9H6YygAJWXVQiQ0QAU-UQ`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.features && data.features.length > 0) {
                const address = data.features[0].properties.full_address;
                resolve(address);  // Resolve the promise with the address
            //  console.log(data);
             // console.log(address);
            } 
          else {
                reject("No address found.");  // Reject the promise if no address is found
            }
        })
        .catch(err => {
            console.error('Error with reverse geocoding:', err);
            reject(err);  // Reject the promise with the error
        });
    });
}*/