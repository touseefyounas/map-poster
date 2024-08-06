const layouts = [
    {
        id: 'default',
        name: 'default',
        component: ({headline, tagline, subtitle, mapLocation}) => {
        <div className={`${labels ? 'block' : 'hidden'} absolute self-end  text-white w-full pb-10 px-5 pt-15`}> 
            <div className="block text-center text-[2em] font-bold tracking-wider overflow-hidden z-10">{headline? headline : mapLocation?mapLocation.city: 'New York'}</div>
            <div className="block divider text-center overflow-hidden">
                <span className="block-inline relative text-[1em]">{tagline? tagline : mapLocation? mapLocation.country: 'United States'}</span>
            </div>
            <div className="text-center text-[0.7em] font-light">{subtitle? subtitle : mapLocation?`${mapLocation.center.lat} / ${mapLocation.center.long}`: '40.7128 °N / 74.0060 °W'}</div>
        </div>
        }
    },
    {
        id: 
    }
]