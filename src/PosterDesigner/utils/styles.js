const styles = [
    {
        style: 1,
        styleName: 'Neon',
        styleUrl: 'mapbox://styles/touseefyounas/clv4bn8lr02a401pkfamv245h',
        styleImage: '/Neon.png'
    },
    {
        style: 2,
        styleName: 'Nautica',
        styleUrl: 'mapbox://styles/touseefyounas/clv4bf0jk02bk01nugg46b6hx',
        styleImage: '/Nautica.png'
    },
    {
        style: 3,
        styleName: 'Minimal',
        styleUrl: 'mapbox://styles/touseefyounas/clv4ai31s02b401nu34ut83gg',
        styleImage: '/Minimal.png'
    },
    {
        style: 4,
        styleName: 'Vintage',
        styleUrl: 'mapbox://styles/touseefyounas/clv4a4fzf02b601pe6aw3flsc',
        styleImage: '/Vintage.png'
    },
    {
        style: 5,
        styleName: 'Yellow',
        styleUrl: 'mapbox://styles/touseefyounas/clv43ol39026l01pk6zvh9gbf',
        styleImage: '/yellow.png'
    },
    {
        style: 6,
        styleName: 'Broon',
        styleUrl: 'mapbox://styles/touseefyounas/clv44b8w4028i01pe8std3c8s',
        styleImage: '/broon.png'
    },
    {
        style: 7,
        styleName: 'Maroon',
        styleUrl: 'mapbox://styles/touseefyounas/clzbb6kfb00k201qmac8mddet',
        styleImage: '/Maroon.png'
    },
    {
        style: 8,
        styleName: 'Night',
        styleUrl: 'mapbox://styles/touseefyounas/clualwfm2007x01qfch2ga9ah',
        styleImage: '/Night.png'
    },
    
]

const sizes = [
    {
        size: 1,
        sizeName: '12" x 16"',
    },
    {
        size: 2,
        sizeName: '16" x 20"',
    },
    {
        size: 3,
        sizeName: '18" x 24"',
    },
    {
        size: 4,
        sizeName: '24" x 36"',
    },
    
]

const layouts = [
    {
        id: 'default',
        name: 'default',
        component: ({headline, tagline, subtitle, mapLocation, labels}) => {
        return (
        <div className={`${labels ? 'block' : 'hidden'} absolute self-end  text-white w-full pb-10 px-5 pt-15`}> 
            <div className="block text-center text-[2em] font-bold tracking-wider overflow-hidden z-10">{headline? headline : mapLocation?mapLocation.city: 'New York'}</div>
            <div className="block divider text-center overflow-hidden">
                <span className="block-inline relative text-[1em]">{tagline? tagline : mapLocation? mapLocation.country: 'United States'}</span>
            </div>
            <div className="text-center text-[0.7em] font-light">{subtitle? subtitle : mapLocation?`${mapLocation.center.lat} / ${mapLocation.center.long}`: '40.7128 °N / 74.0060 °W'}</div>
        </div>
        )
        },
        layoutImage: '/layout4.png'
    },
    {
        id: 'block',
        name: 'block',
        component: ({headline, tagline, subtitle, mapLocation, labels}) => {
        return (
        <div className={`${labels ? 'block' : 'hidden'} absolute self-end  text-black bg-white w-auto min-w-[240px] left-[50%] px-5 pb-2 my-5`} style={{ transform: 'translate(-50%)' }}> 
            <div className="block text-center text-[1.5em] font-bold tracking-wider overflow-hidden z-10">{headline? headline : mapLocation?mapLocation.city: 'New York'}</div>
            <div className="block divider text-center overflow-hidden">
                <span className="block-inline relative text-[1em]">{tagline? tagline : mapLocation? mapLocation.country: 'United States'}</span>
            </div>
            <div className="text-center text-[0.7em] font-light">{subtitle? subtitle : mapLocation?`${mapLocation.center.lat} / ${mapLocation.center.long}`: '40.7128 °N / 74.0060 °W'}</div>
        </div>
        )
        },
        layoutImage: '/layout1.png'
    },
    {
        id: 'mono',
        name: 'mono',
        component: ({headline, tagline, subtitle, mapLocation, labels}) => {
        return (
        <div className={`${labels ? 'block' : 'hidden'} absolute self-end text-black bg-white z-10 w-full px-3 pb-2`}>
            <div className="block text-end text-[1.5em] font-semibold font-mono tracking-wider overflow-hidden">{headline? headline : mapLocation?mapLocation.city: 'New York'}</div>
            <div className="block text-end tracking-wider overflow-hidden">
                <span className="block-inline relative  text-[0.8em] font-mono">{tagline? tagline : mapLocation? mapLocation.country: 'United States'}</span>
            </div>
            <div className="font-mono text-[0.7em] text-end font-light">{subtitle? subtitle : mapLocation?`${mapLocation.center.lat} / ${mapLocation.center.long}`: '40.7128 °N / 74.0060 °W'}</div>
        </div>
        )
        },
        layoutImage: '/layout3.png'
    },
    {
        id: 'top',
        name: 'top',
        component: ({headline, tagline, subtitle, mapLocation, labels}) => {
            return (
            <div className={`flex items-center justify-between ${labels ? 'block' : 'hidden'} absolute text-black bg-white z-10 w-full px-2 pb-2`}>
                
                <div className="text-[1.5em] font-semibold font-mono tracking-wider overflow-hidden">{headline? headline : mapLocation?mapLocation.city: 'New York'}</div>
                <div>
                <div className="tracking-wider text-end font-semibold text-[0.8em] font-mono">{tagline? tagline : mapLocation? mapLocation.country: 'United States'}</div>
                
                <div className="font-mono text-[0.7em] font-semibold">{subtitle? subtitle : mapLocation?`${mapLocation.center.lat} / ${mapLocation.center.long}`: '40.7128 °N / 74.0060 °W'}</div>
                </div>
            </div>
            )
            },
        layoutImage: '/layout2.png',
    },
    {
        id: 'bold',
        name: 'bold',
        component: ({headline, tagline, subtitle, mapLocation, labels}) => {
        return (
        <div className={`${labels ? 'block' : 'hidden'} absolute self-end w-full p-5`}> 
            <div className="text-teal-950 text-center text-[3em] font-normal tracking-wider overflow-hidden z-10">{headline? headline : mapLocation? mapLocation.city: 'NEW YORK'}</div>
        </div>
        )
        },
        layoutImage: '/layout5.png',
    },
    {
        id: 'bottom',
        name: 'bottom',
        component: ({headline, tagline, subtitle, mapLocation, labels}) => {
        return (
        <div className={`flex self-end items-center justify-between ${labels ? 'block' : 'hidden'} absolute text-black bg-white z-10 w-full px-2 py-2`}>
            
            <div className="text-[1.5em] font-semibold font-mono tracking-wider overflow-hidden">{headline? headline : mapLocation?mapLocation.city: 'New York'}</div>

            <div>
              <div className="tracking-wider text-end font-semibold text-[0.8em] font-mono">{tagline? tagline : mapLocation? mapLocation.country: 'United States'}</div>      
              <div className="font-mono text-[0.7em] font-semibold">{subtitle? subtitle : mapLocation?`${mapLocation.center.lat} / ${mapLocation.center.long}`: '40.7128 °N / 74.0060 °W'}</div>
            </div>
            
        </div>
        )
        },
        layoutImage: '/layout6.png',
    }
]

export  {
        styles,
        sizes,
        layouts
        };
