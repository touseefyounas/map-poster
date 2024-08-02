
import "mapbox-gl/dist/mapbox-gl.css";
import './map.css';

//const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = ({mapContainerRef, orientation, mapData, mapLocation, headline, tagline, subtitle}) => {

  let lat = null;
  let long = null;

  if(mapData.center) {
    if (mapData.center.lat<0){
      lat = `${Math.abs(mapData.center.lat).toFixed(2)} °S`
    } else {
      lat = `${Math.abs(mapData.center.lat).toFixed(2)} °N`
    }
    if (mapData.center.lng<0) {
      long = `${Math.abs(mapData.center.lng).toFixed(2)} °W`
    } else {
      long = `${Math.abs(mapData.center.lng).toFixed(2)} °E`
    }
  } 
  
  const landscapeStyle = 'w-[540px] aspect-poster-landscape';
  const portraitStyle = 'h-[540px] aspect-poster-portrait';

  return (
    <>
     <div className="flex justify-center items-center w-full h-screen p-16">
        <div className={`relative ${orientation==='landscape'? landscapeStyle : portraitStyle} bg-white shadow-black shadow-2xl p-4 max-w-full max-h-screen`}>
        <div className="relative flex h-full w-full border-2 border-black max-w-full max-h-screen">
        <div className="p-1 border-black h-full w-full">
          <div id="map-container" ref={mapContainerRef} className="w-full h-full" />
        </div>
        <div className="absolute self-end  text-white w-full pb-10 px-5 pt-15"> 
          <div className="block text-center text-[2em] font-normal overflow-hidden z-10">{headline? headline : mapLocation?mapLocation.city: 'New York'}</div>
          <div className="block divider text-center overflow-hidden">
            <span className="block-inline relative text-[1em]">{tagline? tagline : mapLocation? mapLocation.country: 'United States'}</span>
            </div>
          <div className="text-center text-[0.7em] font-light">{subtitle? subtitle : mapData.center?`${lat} / ${long}`: '40.7128 °N / 74.0060 °W'}</div>
        </div>
        {/* <div className="h-1/6 flex flex-col w-full justify-center items-center"> 
          <div className="font-semibold text-[3vw]">New York</div>
          {/* <div className="font-bold pr-1.5 text-[3vw] md:text-[3vw]">New York</div>
          <div className="font-medium pr-1.5 text-[2vw] md:text-[1vw]">United States</div>
        </div> */}
        {/* bg-gradient-to-b from-transparent to-white */}
        </div>
        </div>
        </div>
    </>
  );
}


export default Map;
