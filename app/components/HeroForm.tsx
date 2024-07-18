'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function HeroForm () {
    const [collection, setCollection] = useState("");
    const [moving, setMoving] = useState("");
    const router = useRouter()

    return (
        <form onSubmit={(e) => {e.preventDefault(); router.push(`/contacts?collection=${collection}&moving=${moving}`)}} className="bg-white rounded-3xl lg:rounded-[3rem] py-8 lg:py-12 px-6 lg:px-8 flex flex-col w-full lg:w-[33rem] shadow-sm lg:shadow-lg max-w-[25rem] lg:max-w-none mx-auto lg:mx-0">
            <input type="text" className="font-medium bg-transparent rounded-3xl border border-black py-2 lg:py-4 pl-4 lg:pl-8 placeholder:font-light placeholder:text-opacity-50 mb-2 lg:mb-4 lg:h-[3.25rem]" placeholder="Moving From" value={collection} onChange={(e) => {setCollection(e.currentTarget.value)}}/>
            <input type="text" className="font-medium bg-transparent rounded-3xl border border-black py-2 lg:py-4 pl-4 lg:pl-8 placeholder:font-light placeholder:text-opacity-50 mb-6 lg:mb-8 lg:h-[3.25rem]" placeholder="Moving To" value={moving} onChange={(e) => {setMoving(e.currentTarget.value)}}/>
            <button className="bg-black text-white flex justify-center items-center rounded-3xl h-10 lg:h-[3.25rem] text-[14px] lg:text-[16px] font-bold gap-1 lg:gap-2 group hover:bg-[#363636] transition duration-300">
                NEXT
                <img src="/left-arrow.svg" alt="left arrow" className="size-6 group-hover:translate-x-2 transition duration-300"/>
            </button>
        </form>
    )
}