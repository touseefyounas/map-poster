import { useRef, useEffect, useState } from "react";
import { SearchBox } from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = ({mapContainerRef}) => {


  return (
    <>
     
      <div className="flex justify-center items-center h-full w-full" >
        <div className="bg-white shadow-black shadow-2xl aspect-poster-portrait w-4/6 p-4">
        <div className="h-full w-full border-2 border-black">
          <div className="border-b-2 p-1 border-black h-5/6 w-full">
        <div id="map-container" ref={mapContainerRef} className="w-full h-full" />
        </div>
        <div className="h-1/6 flex flex-col justify-start items-end">
          <div className="font-bold pr-1.5 text-[3vw] md:text-[2vh]">New York</div>
          <div className="font-medium pr-1.5 text-[2vw] md:text-[1vh]">United States</div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}


export default Map;
