import { useEffect, useState } from "react";
import Searchbox from "./SearchBox";
import Orientation from "./Orientation";
import StyleCard from "./StyleCard";
import Size from "./size";
import Format from './format';
import Labels from "./Labels";
import LayoutCard from "./LayoutCard";
import Order from "./Order";

const SideBar = ({accessToken, mapboxgl, inputValue, setInputValue, mapInstanceRef, orientation, setOrientation, mapStyle, setMapStyle, mapSize, setMapSize, mapFormat, setMapFormat, headline, setHeadline, tagline, setTagline, subtitle, setSubtitle, labels, setLabels, mapLocation, mapLayout, setMapLayout}) => {


    return (
        <div className="w-full">
            <div className="flex justify-center pt-5">
            <div className="xs:w-full sm:w-4/6 md:w-3/6 lg:w-full m-2 lg:m-0">

                <div className="mb-10">
                    <Searchbox accessToken={accessToken} mapboxgl={mapboxgl} inputValue={inputValue} setInputValue={setInputValue} mapInstanceRef={mapInstanceRef} />
                </div>

                <div className="mb-10">
                    <StyleCard mapStyle={mapStyle} setMapStyle={setMapStyle}/>
                </div>

                <div className="mb-10">
                    <LayoutCard mapLayout={mapLayout} setMapLayout={setMapLayout}/>
                </div>

                <div className="mb-10">
                    <Labels headline={headline} setHeadline={setHeadline} tagline={tagline} setTagline={setTagline} subtitle={subtitle} setSubtitle={setSubtitle} labels={labels} setLabels={setLabels} mapLocation={mapLocation}/>
                </div>

                <div className="mb-10">
                    <Size mapSize={mapSize} setMapSize={setMapSize}/>
                </div>

                <div className="mb-10">
                    <Orientation orientation={orientation} setOrientation={setOrientation}/>
                </div>

                <div className="mb-20">
                    <Format mapFormat={mapFormat} setMapFormat={setMapFormat}/>
                </div>

                <div className="sticky bottom-0">
                    <Order />
                </div>

            </div>
            </div>
        </div>
    )
}

export default SideBar;


