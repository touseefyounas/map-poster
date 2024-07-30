import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import Orientation from "./Orientation";
import Map from "./Map";
import Searchbox from "./SearchBox";
import StyleCard from './StyleCard';

const Container = ()=> {
    const accessToken = process.env.REACT_APP_MAPBOX_TOKEN
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
    const [mapStyle, setMapStyle] = useState('');
    useEffect(() => {
        mapboxgl.accessToken = accessToken;
    
        mapInstanceRef.current = new mapboxgl.Map({
          container: mapContainerRef.current, // container ID
          center: [-74.5, 40], // starting position [lng, lat]
          zoom: 9, // starting zoom
          style: 'mapbox://styles/touseefyounas/clv43ol39026l01pk6zvh9gbf',
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

    return (
    <div className="grid grid-rows-auto md:grid-rows-12 grid-cols-1 md:grid-cols-12 min-h-screen">
        <div className="row-start-1 md:row-span-12 col-start-1 md:col-start-4 md:col-span-9 bg-amber-50">
            <Map mapContainerRef={mapContainerRef}/>
        </div>
        <div className="row-start-2 md:row-span-12 md:row-start-1 md:col-start-1 md:col-span-3 bg-white">
            <Searchbox accessToken={accessToken} mapboxgl={mapboxgl} inputValue={inputValue} setInputValue={setInputValue} mapInstanceRef={mapInstanceRef} />
            <Orientation/>
            <StyleCard/>
        </div>
    </div>
    )
    };

export default Container;

