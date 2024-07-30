import { SearchBox } from "@mapbox/search-js-react";




const Searchbox = ({accessToken, mapboxgl, inputValue, setInputValue, mapInstanceRef}) =>{
    return (
        <div className="flex flex-col justify-center w-full items-center">
          <label className="mb-2 text-text text-sm font-semibold w-5/6">Search home</label>
          <div className="mb-2 w-5/6">
          <SearchBox
            accessToken={accessToken}
            map={mapInstanceRef.current}
            mapboxgl={mapboxgl}
            value={inputValue}
            onChange={(d) => {
              setInputValue(d);
            }}
          />
          </div>
        </div>
    )
}

export default Searchbox;