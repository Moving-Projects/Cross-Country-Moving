'use client'

import { useState } from "react";
import DatePicker from "./DatePicker";
import SizeSelect from "./SizeSelect";

export default function QuoteFormFallback () {
    const [collection, setCollection] = useState("");
    const [moving, setMoving] = useState("");

    return (
        <form action="" className="bg-white rounded-3xl lg:rounded-[3rem] py-6 lg:py-12 px-4 lg:px-8 w-full max-w-[25rem] lg:max-w-none mx-auto lg:mx-0 lg:w-fit shadow-sm lg:shadow-lg z-10 relative lg:h-fit">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 w-full lg:w-fit">
            <div className="flex flex-col gap-2 lg:gap-4 lg:flex-1">
                <input type="text" className="font-medium bg-transparent rounded-3xl border border-black py-2 lg:py-4 px-4 lg:px-8 placeholder:font-light placeholder:text-opacity-50 lg:h-[3.25rem] focus:outline-black" placeholder="Collection Address *" value={collection} onChange={(e) => {setCollection(e.currentTarget.value)}}/>
                <input type="text" className="font-medium bg-transparent rounded-3xl border border-black py-2 lg:py-4 px-4 lg:px-8 placeholder:font-light placeholder:text-opacity-50 lg:h-[3.25rem] focus:outline-black" placeholder="Moving Address *" value={moving} onChange={(e) => {setMoving(e.currentTarget.value)}}/>
                <SizeSelect />
            </div>

            <div className="flex flex-col gap-2 lg:gap-4 lg:flex-1">
                <DatePicker />
                <input type="tel" className="font-medium bg-transparent rounded-3xl border border-black py-2 lg:py-4 px-4 lg:px-8 placeholder:font-light placeholder:text-opacity-50 lg:h-[3.25rem] focus:outline-black" placeholder="Primary Phone *"/>
                <input type="email" className="font-medium bg-transparent rounded-3xl border border-black py-2 lg:py-4 px-4 lg:px-8 placeholder:font-light placeholder:text-opacity-50 lg:h-[3.25rem] focus:outline-black" placeholder="Email *"/>
            </div>
        </div>
        
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