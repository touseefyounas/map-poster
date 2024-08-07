import { useState } from "react";
import ToggleButton from "./toggleButton";


const Labels = ({headline, setHeadline, tagline, setTagline, subtitle, setSubtitle, labels, setLabels, mapLocation}) => {
    
    const [ customHeadline, setCustomHeadline ] = useState(false);

    const handleHeadline = (e) => {    
        setHeadline(e.target.value);
        setCustomHeadline(true);
        
    }

    const handleTagline = (e) => {
        
        setTagline(e.target.value);

        
    }

    const handleSubtitle = (e) => {
       
        setSubtitle(e.target.value);
        
    }


    return (
    
    <div className="flex flex-col justify-center w-full items-center">

    <div className="flex flex-row justify-between w-5/6">
    <label htmlFor="headline" className=" mb-2 text-text text-sm font-semibold w-5/6">Labels</label>
    <div ><ToggleButton labels={labels} setLabels={setLabels}/></div>
    </div>

    <div className="mb-3 w-5/6 relative">
        <input value={headline} onChange={handleHeadline} disabled={!labels} id="headline" type="text" placeholder="Headline" className={`${labels?'text-text':'text-gray-400'} bg-background  border py-1.5 px-4 pl-[4.3rem] w-full border-accent rounded-none placeholder-transparent focus:outline-none` }/>
        <label htmlFor="headline" className={`${labels?'text-text':'text-gray-400'} absolute left-2 top-[50%] mr-2 text-text pointer-events-none transform -translate-y-1/2 text-sm transition-all duration-200 ease-in-out`}>Headline: </label>
        
    </div>

    <div className="mb-3 w-5/6 relative">
        <input value={tagline} onChange={handleTagline} disabled={!labels} id="tagline" type="text" placeholder="Tagline" className={`${labels?'text-text':'text-gray-400'} bg-background  border py-1.5 px-4 pl-[4.3rem] w-full border-accent rounded-none placeholder-transparent focus:outline-none`}/>
        <label htmlFor="tagline" className={`${labels?'text-text':'text-gray-400'} absolute left-2 top-[50%] mr-2 text-text pointer-events-none transform -translate-y-1/2 text-sm transition-all duration-200 ease-in-out`}>Tagline: </label>
    </div>

    <div className="mb-3 w-5/6 relative">
        <input value={subtitle} onChange={handleSubtitle} disabled={!labels} id="subtitle" type="text" placeholder="Subtitle" className={`${labels?'text-text':'text-gray-400'} bg-background  border py-1.5 px-4 pl-[4.3rem] w-full border-accent rounded-none placeholder-transparent focus:outline-none`}/>
        <label htmlFor="subtitle" className={`${labels?'text-text':'text-gray-400'} absolute left-2 top-[50%] mr-2 text-text pointer-events-none transform -translate-y-1/2 text-sm transition-all duration-200 ease-in-out`}>Subtitle: </label>
    </div>

    </div>
        )
}

export default Labels;

//     <div className="flex flex-col justify-center w-full items-center">
    //     <label className="mb-2 text-text text-sm font-semibold w-5/6">Labels</label>
    //     <div className="mb-2 w-5/6">
    //         <div className="rounded-none border py-1.5 px-3"><span className="text-text">Headline: </span><input className="border-none"/></div>
    //     </div>
    //   </div>