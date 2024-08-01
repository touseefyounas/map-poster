import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import Orientation from "./Orientation";
import Map from "./Map";
import Searchbox from "./SearchBox";
import StyleCard from './StyleCard';

const Container = ()=> {
    const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    const mapContainerRef = useRef();
    const mapInstanceRef = useRef();
    const [mapLoaded, setMapLoaded] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [mapData, setMapData] = useState({
        center: null,
        zoom: null,
        bearing: null,
        pitch: null,
    })
    const [mapStyle, setMapStyle] = useState('mapbox://styles/touseefyounas/clv4bn8lr02a401pkfamv245h');
    const [orientation, setOrientation ] = useState('portrait');


    useEffect(() => {
        mapboxgl.accessToken = accessToken;
    
        mapInstanceRef.current = new mapboxgl.Map({
          container: mapContainerRef.current, // container ID
          center: [-74.0060, 40.7128], // starting position [lng, lat]
          zoom: 9, // starting zoom
          style: mapStyle,
        });
    
        mapInstanceRef.current.on("load", () => {
          setMapLoaded(true);
        });

        mapInstanceRef.current.addControl(new mapboxgl.NavigationControl());

        // Add the moveend event listener
        mapInstanceRef.current.on('moveend', () => {
            const map = mapInstanceRef.current;
            const center = map.getCenter();
            const zoom = map.getZoom();
            const bearing = map.getBearing();
            const pitch = map.getPitch();

            setMapData({
                center: center,
                zoom: zoom,
                bearing: bearing,
                pitch: pitch
            })
        });
        

      }, []);
    
    useEffect(()=> {
        console.log('Map Data: ', mapData);
    }, [mapData])

    useEffect(() => {
        if (mapLoaded) {

          // Update the map style without changing the view state
          mapInstanceRef.current.setStyle(mapStyle);
        }
      }, [mapStyle, mapLoaded]);

    useEffect(()=> {
        if (mapInstanceRef.current){
            mapInstanceRef.current.resize();
        }
    }, [orientation])

    return (
    <div className="grid grid-rows-auto lg:grid-rows-12 grid-cols-1 lg:grid-cols-12">
        <div className="row-start-1 lg:row-span-12 col-start-1 lg:col-start-4 md:col-span-9 bg-amber-50 lg:h-screen">
            <Map mapContainerRef={mapContainerRef} orientation={orientation} mapData={mapData}/>
        </div>
        <div className="row-start-2 lg:row-span-12 lg:row-start-1 lg:col-start-1 lg:col-span-3 bg-white">
            <Searchbox accessToken={accessToken} mapboxgl={mapboxgl} inputValue={inputValue} setInputValue={setInputValue} mapInstanceRef={mapInstanceRef} />
            <Orientation orientation={orientation} setOrientation={setOrientation}/>
            <StyleCard mapStyle={mapStyle} setMapStyle={setMapStyle}/>
        </div>
    </div>
    )
    };

export default Container;

