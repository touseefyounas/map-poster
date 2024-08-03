const reverseGeocode = async (lng, lat, MapboxApiKey, googleApiKey) => {
    try {
    const data = await fetch(`https://api.mapbox.com/search/geocode/v6/reverse?longitude=${lng}&latitude=${lat}&types=address&access_token=${MapboxApiKey}`)
    const response = await data.json();

    if (response.features && response.features.length >0) {
        return response.features[0].properties.context;

    } else {
        
        const googleData = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleApiKey}`);
        const googleResponse = await googleData.json();
        
        if (googleResponse && googleResponse.status === 'OK'){

            console.log('Google Address: ', googleResponse.results[0].address_components);
            return googleResponse.results[0].address_components;

            } else {

            console.log('No address found.');
            return 'No address found.';
        
                }
        }
    } catch(err){
        
        console.log('Error with geocoding: ', err)
    
    }
}


const processGeocodeResponse = (data, mapData) => {
    let city, country;
    let center = {lat: null, long: null};

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

    if(mapData.center) {
        if (mapData.center.lat<0){
            center.lat = `${Math.abs(mapData.center.lat).toFixed(2)} °S`
        } else {
            center.lat = `${Math.abs(mapData.center.lat).toFixed(2)} °N`
        }
        if (mapData.center.lng<0) {
          center.long = `${Math.abs(mapData.center.lng).toFixed(2)} °W`
        } else {
            center.long = `${Math.abs(mapData.center.lng).toFixed(2)} °E`
        }
      } 
	return {city, country, center};
}


export {
        reverseGeocode, 
        processGeocodeResponse
        };