



const ToggleButton = ({labels, setLabels}) =>{
    return (
        <div>
            <label className="inline-flex items-center mb-5 cursor-pointer">
  <input checked={labels} onChange={()=> setLabels(!labels)} type="checkbox" className="sr-only peer"/>
  <div className="relative w-9 h-5 border-accent border bg-background peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-primary after:content-[''] after:absolute after:top-[1px] after:start-[2px] after:bg-white after:border-accent after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
        </div>
    )
}

export default ToggleButton;