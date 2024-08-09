


const Orientation = ({orientation, setOrientation}) => {

    const handleOrientation = (newOrientation) => {
        setOrientation(newOrientation)
    }

    return (
        <div className="flex flex-col justify-center w-full items-center">
            <label className="mb-2 text-text text-sm font-semibold w-5/6">Orientation</label>
            <div className="mb-2 w-5/6">
                <div className="flex flex-row justify-around">
                    <button onClick = {()=> handleOrientation('landscape')} className={`text-xs lg:text-sm font-semibold rounded-sm ${orientation === 'landscape'? 'shadow-2xl bg-primary text-white':'bg-accent text-text'} hover:shadow-xl hover:bg-primary hover:text-white w-2/5 py-2 px-4`}>Landscape</button>
                    <button onClick = {()=> handleOrientation('portrait')} className={`text-xs lg:text-sm font-semibold rounded-sm ${orientation === 'portrait'? 'shadow-2xl bg-primary text-white':'bg-accent text-text'} hover:shadow-xl   hover:bg-primary hover:text-white w-2/5 py-2 px-4`}>Portrait</button>
                </div>
            </div>
        </div>
    )
}

export default Orientation;