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
        id: 'block',
        name: 'block',
        component: ({headline, tagline, subtitle, mapLocation}) => {
            <div className={`${labels ? 'block' : 'hidden'} absolute self-end  text-black bg-white w-auto min-w-[240px] left-[50%] px-5 pb-2 my-5`} style={{ transform: 'translate(-50%)' }}> 
            <div className="block text-center text-[2em] font-bold tracking-wider overflow-hidden z-10">{headline? headline : mapLocation?mapLocation.city: 'New York'}</div>
            <div className="block divider text-center overflow-hidden">
                <span className="block-inline relative text-[1em]">{tagline? tagline : mapLocation? mapLocation.country: 'United States'}</span>
            </div>
            <div className="text-center text-[0.7em] font-light">{subtitle? subtitle : mapLocation?`${mapLocation.center.lat} / ${mapLocation.center.long}`: '40.7128 °N / 74.0060 °W'}</div>
        </div>
        }
    },
    {
        id: 'mono',
        name: 'mono',
        component: ({headline, tagline, subtitle, mapLocation}) => {
            <div className={`${labels ? 'block' : 'hidden'} absolute self-end text-black bg-white z-10 w-full px-3 pb-2`}>
            <div className="block text-end text-[1.5em] font-bold font-mono tracking-wider overflow-hidden">{headline? headline : mapLocation?mapLocation.city: 'New York'}</div>
            <div className="block text-end tracking-wider overflow-hidden">
                <span className="block-inline relative  text-[0.8em] font-mono">{tagline? tagline : mapLocation? mapLocation.country: 'United States'}</span>
            </div>
            <div className="font-mono text-[0.7em] text-end font-light">{subtitle? subtitle : mapLocation?`${mapLocation.center.lat} / ${mapLocation.center.long}`: '40.7128 °N / 74.0060 °W'}</div>
        </div>
        }
    }
]