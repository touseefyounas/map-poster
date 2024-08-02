
const Format = ({ mapFormat, setMapFormat }) => {
    return (
        <div className="flex flex-col justify-center w-full items-center">
            <label className="mb-2 text-text text-sm font-semibold w-5/6">Format</label>
            <div className="mb-2 w-5/6">
                <div className="flex flex-row justify-around">
                    <button onClick = {()=> setMapFormat('Print')} className={`text-xs lg:text-sm font-semibold rounded-sm ${mapFormat === 'Print'? 'shadow-2xl bg-primary text-white':'bg-accent text-text'} hover:shadow-xl hover:bg-primary hover:text-white w-2/5 py-2 px-4`}>Print</button>
                    <button onClick = {()=> setMapFormat('Digital')} className={`text-xs lg:text-sm font-semibold rounded-sm ${mapFormat === 'Digital'? 'shadow-2xl bg-primary text-white':'bg-accent text-text'} hover:shadow-xl   hover:bg-primary hover:text-white w-2/5 py-2 px-4`}>Digital</button>
                </div>
            </div>
        </div>
    )
}

export default Format;