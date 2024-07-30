import { useRef, useEffect, useState } from "react";
import { SearchBox } from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const accessToken = "pk.eyJ1IjoidG91c2VlZnlvdW5hcyIsImEiOiJjbHNnajllcTExbmtiMmxzYjM2YnBxa3U0In0.Q9H6YygAJWXVQiQ0QAU-UQ";

const Map = ({mapContainerRef}) => {

  return (
    <>
      
      <div id="map-container" ref={mapContainerRef} style={{ height: 900 }} />
    </>
  );
}


export default Map;
