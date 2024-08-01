import { styles } from "./utils/styles";


const StyleCard = ({mapStyle, setMapStyle})=> {

    const handleStyle = (mapStyle) => {
        setMapStyle(mapStyle);
    }

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <label className="mb-2 text-sm font-semibold w-5/6 text-text">Style</label>
        <div className="flex flex-wrap flex-row gap-3 m-3 justify-evenly">
        
            {styles.map(style=> {
               return(
               <div key={style.styleUrl} onClick={() => handleStyle(style.styleUrl)} className={`${mapStyle === style.styleUrl? 'bg-primary' : 'bg-white'} cursor-pointer w-1/5 p-1 rounded-md shadow-lg hover:border-2 hover:bg-accent hover:border-secondary hover:text-white`}>
                    <img className="w-full h-3/4 rounded-sm" src={style.styleImage} alt=''/>
                    <p className="flex justify-center text-sm font-medium text-text ">{style.styleName}</p>
                </div>
               )
            }
            )}

        </div>
        
        </div>
    )
}

export default StyleCard;