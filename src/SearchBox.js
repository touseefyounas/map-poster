import { SearchBox } from "@mapbox/search-js-react";




const Searchbox = ({accessToken, mapboxgl, inputValue, setInputValue, mapInstanceRef}) =>{

  const theme = {
    variables: {
      fontFamily: 'Avenir, sans-serif',
      padding: '0.5em',
      borderRadius: '0px',
      boxShadow: '0 0 0 1px #C7D1BE',
      colorBackground: '#F2F5EF'
    }
  };
  

    return (
        <div className="flex flex-col justify-center w-full items-center">
          <label className="mb-2 text-text text-sm font-semibold w-5/6">Search home</label>
          <div className="mb-2 w-5/6">
          <SearchBox
            theme={theme}
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