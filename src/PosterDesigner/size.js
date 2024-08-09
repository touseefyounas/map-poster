import { sizes } from "./utils/styles"


const Size = ({mapSize, setMapSize}) =>{
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <label className="mb-2 text-sm font-semibold w-5/6 text-text">Size</label>
        <div className="flex flex-wrap flex-row gap-3 m-3 justify-evenly">
        
            {sizes.map(size => {
               return(
               <button key={size.size} onClick={() => setMapSize(size.size)} className={`text-xs lg:text-sm font-semibold rounded-sm ${mapSize === size.size? 'shadow-2xl bg-primary text-white':'bg-accent text-text'} hover:shadow-xl hover:bg-primary hover:text-white w-2/5 py-2 px-4`}>
                {size.sizeName}
                </button>
               )
            }
            )}

        </div>
        
        </div>
    );
}

export default Size;