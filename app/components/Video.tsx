import { useEffect, useRef, useState } from "react"

export default function Video ({videoSrc}: {videoSrc: string}) {

    const [isPlaying, setPlaying] = useState(false);
    const ref = useRef<HTMLVideoElement>(null);

    return (
        <button className='relative rounded-xl overflow-hidden aspect-[151/282] lg:aspect-[306/567] w-full' onClick={() => {setPlaying(!isPlaying); isPlaying ? ref.current?.pause() : ref.current?.play()}}>
            <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center flex justify-center items-center z-10 transition duration-300' style={{backgroundImage: `url(${videoSrc + '.jpg'})`, opacity: isPlaying ? 0 : 1}}>
                <div className='size-7 lg:size-14 bg-accent rounded-full flex justify-center items-center'>
                    <img src="play-triangle.svg" alt="play triangle" className='w-3 lg:w-6'/>
                </div>
            </div>
            <video src={videoSrc + '.mp4'} className="absolute top-0 left-0 w-full h-full object-cover" ref={ref} loop></video>
        </button>
    )
}