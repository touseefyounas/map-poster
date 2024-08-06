import { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import './map.css';

//const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = ({mapContainerRef, orientation, mapData, mapLocation, headline, tagline, subtitle, labels, mapLayout}) => {

  const [scale, setScale ] = useState(1);


  const calculateScale = (width) => {
    const minWidth = 320
    const maxWidth = 1920
    const minScale = 0.30
    const maxScale = 1

    return (((maxScale-minScale)/(maxWidth-minWidth))*width) + minScale;
  }


  useEffect( () => {  

    const handleScale = () => {
      const width = window.innerWidth;
      const newScale = calculateScale(width);
      // console.log('Width: ', width);
      // console.log('New scale:', newScale);
      setScale(newScale);
    }

    handleScale();

    window.addEventListener('resize', handleScale);
    return () => window.removeEventListener('resize', handleScale);
    
  },[])
  
  const landscapeStyle = 'w-[720px] h-[540px]';
  const portraitStyle = 'w-[540px] h-[720px]';

  return (
    <>
     <div className="flex justify-center items-center w-full h-screen overflow-hidden">
      <div style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}>
        <div className={`relative ${orientation==='landscape'? landscapeStyle : portraitStyle} bg-white shadow-black shadow-2xl p-2`}>
        <div className="relative flex h-full w-full">
        <div className="p-1 h-full w-full">
          <div id="map-container" ref={mapContainerRef} className="w-full h-full" />
        </div>
        <div className={`flex items-center justify-between ${labels ? 'block' : 'hidden'} absolute self-end text-black bg-white z-10 w-full px-2 py-2`}>
            
            <div className="text-[1.5em] font-semibold font-mono tracking-wider overflow-hidden">{headline? headline : mapLocation?mapLocation.city: 'New York'}</div>

            <div>
              <div className="tracking-wider text-end font-semibold text-[0.8em] font-mono">{tagline? tagline : mapLocation? mapLocation.country: 'United States'}</div>      
              <div className="font-mono text-[0.7em] font-semibold">{subtitle? subtitle : mapLocation?`${mapLocation.center.lat} / ${mapLocation.center.long}`: '40.7128 °N / 74.0060 °W'}</div>
            </div>

          </div>           
             </div>
            </div>
          </div>
        </div>
    </>
  );
}


export default Map;

