


const Labels = ({headline, setHeadline, tagline, setTagline, subtitle, setSubtitle}) => {
    return (
    //     <div className="flex flex-col justify-center w-full items-center">
    //     <label className="mb-2 text-text text-sm font-semibold w-5/6">Labels</label>
    //     <div className="mb-2 w-5/6">
    //         <div className="rounded-none border py-1.5 px-3"><span className="text-text">Headline: </span><input className="border-none"/></div>
    //     </div>
    //   </div>
    <div className="flex flex-col justify-center w-full items-center">
  <label htmlFor="headline" className="mb-2 text-text text-sm font-semibold w-5/6">Labels</label>
  <div className="mb-3 w-5/6 relative">
    <input value={headline} onChange={(e)=>setHeadline(e.target.value)} id="headline" type="text" placeholder="Headline" className="bg-background text-text border py-1.5 px-4 pl-[4.3rem] w-full border-accent rounded-none placeholder-transparent focus:outline-none "/>
    <label htmlFor="headline" className="absolute left-2 top-[50%] mr-2 text-text pointer-events-none transform -translate-y-1/2 text-sm transition-all duration-200 ease-in-out">Headline: </label>
  </div>

  <div className="mb-3 w-5/6 relative">
    <input value={tagline} onChange={(e)=>setTagline(e.target.value)} id="tagline" type="text" placeholder="Headline" className="bg-background text-text border py-1.5 px-4 pl-[3.6rem] w-full border-accent rounded-none placeholder-transparent focus:outline-none "/>
    <label htmlFor="tagline" className="absolute left-2 top-[50%] mr-2 text-text pointer-events-none transform -translate-y-1/2 text-sm transition-all duration-200 ease-in-out">Tagline: </label>
  </div>

  <div className="mb-3 w-5/6 relative">
    <input value={subtitle} onChange={(e)=>setSubtitle(e.target.value)} id="subtitle" type="text" placeholder="Headline" className="bg-background text-text border py-1.5 px-4 pl-[3.9rem] w-full border-accent rounded-none placeholder-transparent focus:outline-none "/>
    <label htmlFor="subtitle" className="absolute left-2 top-[50%] mr-2 text-text pointer-events-none transform -translate-y-1/2 text-sm transition-all duration-200 ease-in-out">Subtitle: </label>
  </div>
</div>
    )
}

export default Labels;