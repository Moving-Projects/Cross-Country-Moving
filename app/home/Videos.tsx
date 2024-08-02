'use client'

import { useEffect, useState } from 'react';
import Video from "../components/Video";

export default function Videos () {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        if (window.innerWidth < 1024) setIsMobile(true); else setIsMobile(false);

        const onResize = () => {
            setIsMobile(window.innerWidth < 1024);
        }

        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    if (isMobile === null) return;

    return (
        <div className="mt-20 lg:mt-32 px-4 lg:max-w-[120rem] lg:mx-auto lg:px-48 relative" id="videos">
            <img src="/video-bg-pc.svg" alt="video section background" className='w-[calc(100%-24rem)] left-48 top-0 absolute hidden lg:block'/>
            <div className='slider-container'>
                <div className='mx-6 lg:mx-[8.5vw] relative lg:pt-16 lg:max-w-[70rem] flex gap-2 lg:gap-16'>
                    <Video videoSrc="/videos/video-1"/>
                    <Video videoSrc="/videos/video-2"/>
                    {
                        !isMobile && <Video videoSrc="/videos/video-3"/>
                    }
                </div>
                {/* <Slider {...settings} className='mx-6 lg:mx-[8.5vw] relative lg:pt-16 lg:max-w-[70rem]'>
                    <Video videoSrc="/videos/video-1" isDrag={isDrag}/>
                    <Video videoSrc="/videos/video-2" isDrag={isDrag}/>
                    <Video videoSrc="/videos/video-3" isDrag={isDrag}/>
                    <Video videoSrc="/videos/video-3" isDrag={isDrag}/>
                    <Video videoSrc="/videos/video-2" isDrag={isDrag}/>
                    <Video videoSrc="/videos/video-1" isDrag={isDrag}/>
                </Slider> */}
            </div>
        </div>
    )
}