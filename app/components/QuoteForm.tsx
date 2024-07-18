'use client'

import { useState } from "react";
import DatePicker from "./DatePicker";
import SizeSelect from "./SizeSelect";
import { useSearchParams } from 'next/navigation'

export default function QuoteForm () {
    const searchParams = useSearchParams()
    const [collection, setCollection] = useState(searchParams.get('collection'));
    const [moving, setMoving] = useState(searchParams.get('moving'));

    return (
        <form action="" className="bg-white rounded-3xl lg:rounded-[3rem] py-6 lg:py-12 px-4 lg:px-8 w-full max-w-[25rem] lg:max-w-none mx-auto lg:mx-0 lg:w-fit shadow-sm lg:shadow-lg z-10 relative lg:h-fit">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 w-full lg:w-fit">
            <div className="flex flex-col gap-2 lg:gap-4 lg:flex-1">
                <input required type="text" className="bg-transparent rounded-3xl border border-black py-2 lg:py-4 px-4 lg:px-8 placeholder:font-normal placeholder:text-opacity-50 lg:h-[3.25rem] focus:outline-black" placeholder="Moving From *" value={collection ? collection : undefined} onChange={(e) => {setCollection(e.currentTarget.value)}}/>
                <input required type="text" className="bg-transparent rounded-3xl border border-black py-2 lg:py-4 px-4 lg:px-8 placeholder:font-normal placeholder:text-opacity-50 lg:h-[3.25rem] focus:outline-black" placeholder="Moving To *" value={moving ? moving : undefined} onChange={(e) => {setMoving(e.currentTarget.value)}}/>
                <SizeSelect />
            </div>

            <div className="flex flex-col gap-2 lg:gap-4 lg:flex-1">
                <DatePicker />
                <input required type="tel" className="bg-transparent rounded-3xl border border-black py-2 lg:py-4 px-4 lg:px-8 placeholder:font-normal placeholder:text-opacity-50 lg:h-[3.25rem] focus:outline-black" placeholder="Name *"/>
                <input required type="email" className="bg-transparent rounded-3xl border border-black py-2 lg:py-4 px-4 lg:px-8 placeholder:font-normal placeholder:text-opacity-50 lg:h-[3.25rem] focus:outline-black" placeholder="Email *"/>
            </div>
        </div>

        <textarea name="info" id="info" className="bg-transparent rounded-3xl border border-black mt-2 lg:mt-4 py-2 lg:py-4 px-4 lg:px-8 placeholder:font-normal placeholder:text-opacity-50 w-full focus:outline-black h-[6.5rem]" placeholder="Additional Information"></textarea>
        
        <button className="bg-black text-white flex justify-center items-center rounded-3xl h-10 lg:h-[3.25rem] text-[14px] lg:text-[16px] mt-4 lg:mt-8 w-full py-3 lg:py-0 font-bold gap-1 lg:gap-2 group hover:bg-[#363636] transition duration-300">
            SEND REQUEST
            <img src="/left-arrow.svg" alt="left arrow" className="size-6 group-hover:translate-x-2 transition duration-300"/>
        </button>
        <div className="flex gap-1 items-center justify-center mt-1 lg:mt-2 z-10 relative">
            <img src="/info-icon.svg" alt="info icon" className="size-3 lg:size-4"/>
            <p className="text-xs lg:text-base font-medium leading-3">We do no share your information.</p>
        </div>
    </form>
    )
}