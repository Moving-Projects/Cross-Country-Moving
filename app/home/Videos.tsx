'use client'

import Slider from "react-slick";
import { RefObject, useEffect, useRef, useState } from 'react';
import Video from "../components/Video";

export default function Videos () {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [isDrag, setIsDrag] = useState(false);

    const NextArrow = (props: any) => {
        const { onClick } = props;
        return (
            <button className="absolute top-1/2 lg:top-[calc(50%+2rem)] right-0" onClick={onClick}  style={{backgroundColor: 'transparent', aspectRatio: 1, opacity: 1, transform: 'translate(100%, -50%)'}}> <img src="/carousell-arrow.svg" alt="carousell arrow" className='rotate-180 w-6 lg:w-12' /> </button>
        );
    }
    
    const PrevArrow = (props: any) => {
        const { onClick } = props;
        return (
            <button className="absolute top-1/2 lg:top-[calc(50%+2rem)] left-0" onClick={onClick}  style={{backgroundColor: 'transparent', aspectRatio: 1, opacity: 1, transform: 'translate(-100%, -50%)'}}> <img src="/carousell-arrow.svg" alt="carousell arrow" className='w-6 lg:w-12' /> </button>
        );
    }

    const settings = {
        customPaging: function(i:number) {
            return (
              <div className="size-[16px] border border-green rounded-full transition duration-200"></div>
            );
          },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 2 : 3,
        slidesToScroll: isMobile ? 2 : 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: () => {
            setIsDrag(true)
        },
        afterChange: () => {
            setIsDrag(false)
        }
    };

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
        <div className="mt-20 lg:mt-32 px-4 lg:max-w-[120rem] lg:mx-auto lg:px-48 relative pb-6 lg:pb-8" id="videos">
            <img src="/video-bg-pc.svg" alt="video section background" className='w-[calc(100%-24rem)] left-48 top-0 absolute hidden lg:block'/>
            <div className='slider-container'>
                <Slider {...settings} className='mx-6 lg:mx-[8.5vw] relative lg:pt-16 lg:max-w-[70rem]'>
                    <Video videoSrc="/videos/video-1" isDrag={isDrag}/>
                    <Video videoSrc="/videos/video-2" isDrag={isDrag}/>
                    <Video videoSrc="/videos/video-3" isDrag={isDrag}/>
                    <Video videoSrc="/videos/video-3" isDrag={isDrag}/>
                    <Video videoSrc="/videos/video-2" isDrag={isDrag}/>
                    <Video videoSrc="/videos/video-1" isDrag={isDrag}/>
                </Slider>
            </div>
        </div>
    )
}