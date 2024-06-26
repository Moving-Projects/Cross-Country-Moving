'use client'

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useEffect, useRef, useState } from 'react';

const videos = [
    "/videos/video-1",
    "/videos/video-2",
    "/videos/video-1",
    "/videos/video-2"
]


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
        <div className="mt-20 lg:mt-32 px-4 lg:max-w-[120rem] lg:mx-auto lg:px-48 relative">
            <img src="/video-bg-pc.svg" alt="video section background" className='w-[calc(100%-24rem)] left-48 top-0 absolute hidden lg:block'/>
            <Splide hasTrack={ false } className='mx-6 lg:mx-[10vw] pb-6 lg:pb-8 relative lg:pt-16 lg:max-w-[65rem]' options={{
                type: 'loop',
                drag: 'free',
                snap: true,
                perPage: isMobile ? 2 : 3,
                gap: isMobile ? '.5rem' : '4rem',
                flickPower: 200,
                flickMaxPages: 1
            }}>
                <img src="/video-bg-mobile.svg" alt="video section background" className='absolute -z-10 w-[calc(100%+32px)] max-w-none top-[calc(50%-12px)] -translate-y-1/2 -left-4 lg:hidden' draggable={false}/>
                <SplideTrack>
                    <VideosElement />
                </SplideTrack>

                <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev" style={{backgroundColor: 'transparent', aspectRatio: 1, opacity: 1, left: isMobile ? '-.25rem' : '-2rem', transform: 'translate(-100%, -50%)'}}> <img src="/carousell-arrow.svg" alt="carousell arrow" className='w-6 lg:w-12' /> </button>
                    <button className="splide__arrow splide__arrow--next" style={{backgroundColor: 'transparent', aspectRatio: 1, opacity: 1, right: isMobile ? '-.25rem' : '-2rem', transform: 'translate(100%, -50%)'}}><img src="/carousell-arrow.svg" alt="carousell arrow" className='rotate-180 w-6 lg:w-12'/></button>
                </div>
            </Splide>
        </div>
    )
}

const VideosElement = () => {
    return (
        <>
            {
                videos.map((img, index) => {
                    return (
                        <SplideSlide className='relative rounded-xl overflow-hidden shrink-0 aspect-[151/282] lg:aspect-[306/567]' key={index}>
                            <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center flex justify-center items-center' style={{backgroundImage: `url(${img + ".png"})`}}>
                                <div className='size-7 lg:size-14 bg-accent rounded-full flex justify-center items-center'>
                                    <img src="play-triangle.svg" alt="play triangle" className='w-3 lg:w-6'/>
                                </div>
                            </div>
                        </SplideSlide>
                    )
                })
            }
        </>
    )
}