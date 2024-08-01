import { useRef, useEffect, useState } from "react";
import { SearchBox } from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import './map.css';

const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = ({mapContainerRef, orientation}) => {

  const landscapeStyle = 'w-[540px] aspect-poster-landscape';
  const portraitStyle = 'h-[540px] aspect-poster-portrait';

  return (
    <>
     <div className="flex justify-center items-center w-full h-screen p-16">
        <div className={`relative ${orientation==='landscape'?landscapeStyle:portraitStyle} bg-white shadow-black shadow-2xl p-4 max-w-full max-h-screen`}>
        <div className="relative flex h-full w-full border-2 border-black max-w-full max-h-screen">
        <div className="p-1 border-black h-full w-full">
          <div id="map-container" ref={mapContainerRef} className="w-full h-full" />
        </div>
        <div className="absolute self-end  text-white w-full pb-10 px-5 pt-20">
          <div className="block text-center text-[2em] font-normal overflow-hidden">New York</div>
          <div className="block divider text-center overflow-hidden">
            <span className="block-inline relative text-[1em]">United States</span>
            </div>
        </div>
        {/* <div className="h-1/6 flex flex-col w-full justify-center items-center"> 
          <div className="font-semibold text-[3vw]">New York</div>
          {/* <div className="font-bold pr-1.5 text-[3vw] md:text-[3vw]">New York</div>
          <div className="font-medium pr-1.5 text-[2vw] md:text-[1vw]">United States</div>
        </div> */}
        </div>
        </div>
        </div>
    </>
  );
}


export default Map;
