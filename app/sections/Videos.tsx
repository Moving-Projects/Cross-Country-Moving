'use client'

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import '../styles/videos.css'
import Slider from "react-slick";
import { useEffect, useState } from 'react';

export default function Videos () {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

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
                    <div className='relative rounded-xl overflow-hidden aspect-[151/282] lg:aspect-[306/567]'>
                        <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center flex justify-center items-center' style={{backgroundImage: "url(/videos/video-2.png)"}}>
                            <div className='size-7 lg:size-14 bg-accent rounded-full flex justify-center items-center'>
                                <img src="play-triangle.svg" alt="play triangle" className='w-3 lg:w-6'/>
                            </div>
                        </div>
                    </div>
                    <div className='relative rounded-xl overflow-hidden aspect-[151/282] lg:aspect-[306/567]'>
                        <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center flex justify-center items-center' style={{backgroundImage: "url(/videos/video-1.png)"}}>
                            <div className='size-7 lg:size-14 bg-accent rounded-full flex justify-center items-center'>
                                <img src="play-triangle.svg" alt="play triangle" className='w-3 lg:w-6'/>
                            </div>
                        </div>
                    </div>
                    <div className='relative rounded-xl overflow-hidden aspect-[151/282] lg:aspect-[306/567]'>
                        <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center flex justify-center items-center' style={{backgroundImage: "url(/videos/video-2.png)"}}>
                            <div className='size-7 lg:size-14 bg-accent rounded-full flex justify-center items-center'>
                                <img src="play-triangle.svg" alt="play triangle" className='w-3 lg:w-6'/>
                            </div>
                        </div>
                    </div>
                    <div className='relative rounded-xl overflow-hidden aspect-[151/282] lg:aspect-[306/567]'>
                        <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center flex justify-center items-center' style={{backgroundImage: "url(/videos/video-1.png)"}}>
                            <div className='size-7 lg:size-14 bg-accent rounded-full flex justify-center items-center'>
                                <img src="play-triangle.svg" alt="play triangle" className='w-3 lg:w-6'/>
                            </div>
                        </div>
                    </div>
                    <div className='relative rounded-xl overflow-hidden aspect-[151/282] lg:aspect-[306/567]'>
                        <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center flex justify-center items-center' style={{backgroundImage: "url(/videos/video-2.png)"}}>
                            <div className='size-7 lg:size-14 bg-accent rounded-full flex justify-center items-center'>
                                <img src="play-triangle.svg" alt="play triangle" className='w-3 lg:w-6'/>
                            </div>
                        </div>
                    </div>
                    <div className='relative rounded-xl overflow-hidden aspect-[151/282] lg:aspect-[306/567]'>
                        <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center flex justify-center items-center' style={{backgroundImage: "url(/videos/video-1.png)"}}>
                            <div className='size-7 lg:size-14 bg-accent rounded-full flex justify-center items-center'>
                                <img src="play-triangle.svg" alt="play triangle" className='w-3 lg:w-6'/>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}