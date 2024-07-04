'use client'

import { motion } from "framer-motion";
import { useState } from "react";

export default function Question ({item, index}: {item: any, index: number}) {
    const [isActive, setActive] = useState(false);

    const cardVariants = {
        show: {
            height: 'auto'
        },
        hide: {
            height: 0,
        }
    }

    return (
        <div className='border-b border-black border-opacity-15 first-of-type:border-t'>
            <button className='flex w-full justify-between items-center py-6 lg:py-8' onClick={() => {setActive(!isActive)}}>
                <p className='text-base lg:text-2xl leading-4 lg:leading-6 font-bold'>{item.question}</p>
                <motion.img src="/left-arrow.svg" alt="right arrow" className='invert size-4 lg:size-6' variants={{initial: {rotate: 0}, active: {rotate: 90}}} animate={isActive ? 'active' : 'initial'}/>
            </button>
            <motion.div className='overflow-hidden' variants={cardVariants} animate={isActive ? "show" : "hide"} initial={"hide"}>
                <p className='font-medium text-sm lg:text-lg leading-4 lg:leading-6 mb-6 lg:mb-8'>{item.answer}</p>
            </motion.div>   
        </div>
    )
}