import { layouts } from "./utils/styles";


const LayoutCard = ({ mapLayout, setMapLayout }) => {


    const handleLayout = (mapLayout) => {
        setMapLayout(mapLayout)
    }
    return (
        <div className="flex flex-col justify-center items-center w-full">

        <label className="mb-2 text-sm font-semibold w-5/6 text-text">Layout</label>
        <div className="flex flex-wrap flex-row gap-3 m-3 justify-evenly">
        
            {layouts.map(layout=> {
               return(
               <div key={layout.name} onClick={() => handleLayout(layout.id)} className={`${mapLayout === layout.id? 'bg-primary border-primary border-2' : 'bg-background border-2 border-accent'} cursor-pointer w-1/5 rounded-md shadow-lg hover:border-2 hover:bg-accent hover:border-secondary hover:text-white `}>
                    <img className="w-full h-full rounded-md" src={layout.layoutImage} alt=''/>
                </div>
               )
            }
            )}

        </div>
        
        </div>
    )
}

export default LayoutCard;