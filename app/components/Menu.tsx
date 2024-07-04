'use client'

import { useState } from "react"
import PhoneMenu from "./PhoneMenu"
import { motion } from "framer-motion"

export default function Menu ({page}: {page:string}) {
    const [isOpen, setOpen] = useState(false);

    const firstLine = {
        open: {
            rotate: '45deg',
            y: '-50%',
            top: '50%'
        },

        closed: {
            y: 0,
            rotate: 0,
            top: 0
        }
    }

    const lastLine = {
        open: {
            rotate: '-45deg',
            y: '50%',
            bottom: '50%'
        },

        closed: {
            y: 0,
            rotate: 0,
            bottom: 0
        }
    }

    const middleLine = {
        open: {
            x: '-100%',
            opacity: 0,
            y: '-50%',
        },

        closed: {
            x: 0,
            y: '-50%',
            opacity: 1
        }
    }

    return (
        <>
            <PhoneMenu open={isOpen} page={page}/>
            <div className="xl:px-48 xl:max-w-[120rem] xl:mx-auto flex justify-between items-center pt-4 px-8 xl:py-8 relative z-50">
                <a href="/"><img src="/logo.png" alt="logo" className="h-8 xl:h-14"/></a>
                <nav className="bg-black rounded-[2rem] px-[4.5rem] gap-11 py-[1.125rem] items-center absolute left-1/2 -translate-x-1/2 hidden xl:flex">
                    <a href="/" className={`text-white font-bold text-base lg:text-lg 2xl:text-base relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-accent after:w-full ${page === "home" ? "after:scale-x-100" : "after:scale-x-0"} after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-1px]`}>HOME</a>
                    <a href="/long-distance-moves" className={`text-white font-bold text-base lg:text-lg 2xl:text-base relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-accent after:w-full ${page === "long" ? "after:scale-x-100" : "after:scale-x-0"} after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-1px]`}>LONG DISTANCE MOVES</a>
                    <a href="/about-us" className={`text-white font-bold text-base lg:text-lg 2xl:text-base relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-accent after:w-full ${page === "about" ? "after:scale-x-100" : "after:scale-x-0"} after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-1px]`}>ABOUT US</a>
                    <a href="/contacts" className={`text-white font-bold text-base lg:text-lg 2xl:text-base relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-accent after:w-full ${page === "contacts" ? "after:scale-x-100" : "after:scale-x-0"} after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-1px]`}>CONTACTS</a>
                </nav>
                <a href="/contacts">
                    <button className="bg-black py-[1.125rem] items-center gap-2 px-8 rounded-3xl lg:text-lg 2xl:text-base hidden xl:flex hover:bg-[#363636] transition duration-300" id="get-quote">
                        <img src="/quote-icon.svg" alt="quote icon" className="size-6 mb-[1px]"/>
                        <p className="font-bold text-white">GET A QUOTE</p>
                    </button>
                </a>
                
                <motion.button className="relative xl:hidden w-6 h-4" onClick={() => {setOpen(!isOpen); document.body.style.overflow = isOpen ? "visible" : "hidden"}} initial="closed" animate={isOpen ? "open" : "closed"}> 
                    <motion.div className="bg-black w-full h-[3px] top-0 absolute origin-center" variants={firstLine} transition={{ ease: "easeOut", duration: .3 }}></motion.div>
                    <motion.div className="bg-black w-full h-[3px] top-1/2 -translate-y-1/2 absolute" variants={middleLine} transition={{ ease: "easeOut", duration: .3 }}></motion.div>
                    <motion.div className="bg-black w-full h-[3px] bottom-0 absolute origin-center" variants={lastLine} transition={{ ease: "easeOut", duration: .3 }}></motion.div>
                </motion.button>
            </div>
        </>
    )
}