import { useRef, useEffect, useState } from "react";
import { SearchBox } from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const accessToken = "pk.eyJ1IjoidG91c2VlZnlvdW5hcyIsImEiOiJjbHNnajllcTExbmtiMmxzYjM2YnBxa3U0In0.Q9H6YygAJWXVQiQ0QAU-UQ";

const Map = ({mapContainerRef}) => {


  return (
    <>
      <div className="flex justify-center items-center h-full w-full" >
        <div className="bg-white shadow-black shadow-2xl h-5/6 w-9/12 p-4">
        <div className="h-full w-full border-2 border-black">
          <div className="border-b-2 p-1 border-black h-5/6 w-full">
        <div id="map-container" ref={mapContainerRef} className="w-full h-full" />
        </div>
        <div className="h-1/6 flex flex-col items-end p-2">
          <h1 className="font-bold text-2xl">New York</h1>
          <h1 className="font-normal text-xl">United States</h1>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}


export default Map;
