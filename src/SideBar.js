import Searchbox from "./SearchBox";
import Orientation from "./Orientation";
import StyleCard from "./StyleCard";
import Size from "./size";
import Format from './format';
import Labels from "./Labels";
import ToggleButton from './utils/toggleButton';

const SideBar = ({accessToken, mapboxgl, inputValue, setInputValue, mapInstanceRef, orientation, setOrientation, mapStyle, setMapStyle, mapSize, setMapSize, mapFormat, setMapFormat, headline, setHeadline, tagline, setTagline, subtitle, setSubtitle, labels, setLabels}) => {

    return (
        <div className="w-full">
            <div className="flex justify-center pt-5">
            <div className="md:w-4/6 lg:w-full m-10 lg:m-0">
                <div className="mb-10">
                    <Searchbox accessToken={accessToken} mapboxgl={mapboxgl} inputValue={inputValue} setInputValue={setInputValue} mapInstanceRef={mapInstanceRef} />
                </div>

                <div className="mb-10">
                    <Orientation orientation={orientation} setOrientation={setOrientation}/>
                </div>

                <div className="mb-10">
                    <StyleCard mapStyle={mapStyle} setMapStyle={setMapStyle}/>
                </div>

                <div className="mb-10">
                    <Labels headline={headline} setHeadline={setHeadline} tagline={tagline} setTagline={setTagline} subtitle={subtitle} setSubtitle={setSubtitle} labels={labels} setLabels={setLabels}/>
                </div>

                <div className="mb-10">
                    <Size mapSize={mapSize} setMapSize={setMapSize}/>
                </div>

                <div className="mb-10">
                    <Format mapFormat={mapFormat} setMapFormat={setMapFormat}/>
                </div>


            </div>
            </div>
        </div>
    )
}

export default SideBar;


