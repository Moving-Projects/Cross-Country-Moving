import { motion } from "framer-motion"

export default function PhoneMenu ({open, page}: {open: boolean, page: string}) {
    const variants = {
        visible: {
            height: '100vh',
        },
        hidden: {
            height: 0,
        }
    }

    const list = {
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
        hidden: {
          opacity: 0,
        },
      }

      const item = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -32 },
      }

    return (
        <motion.div className="h-screen w-screen top-0 left-0 fixed z-30 overflow-hidden bg-white" variants={variants} animate={open ? "visible" : "hidden"} transition={{ ease: "easeOut", duration: .5 }} initial="hidden">
            <motion.ul className="flex flex-col gap-6 justify-center items-center h-screen w-screen relative" variants={list} animate={open ? "visible" : "hidden"} initial="hidden">
                <motion.li variants={item}>
                    <a href="" className={`text-[2rem] font-russo ${page === "home" ? "relative after:absolute after:left-0 after:-bottom-1 after:bg-accent after:w-full after:h-[2px]" : ""}`}>HOME</a>
                </motion.li>
                <motion.li variants={item}>
                    <a href="/long-distance-moves" className={`text-[2rem] font-russo ${page === "long" ? "relative after:absolute after:left-0 after:-bottom-1 after:bg-accent after:w-full after:h-[2px]" : ""}`}>LONG DISTANCE</a>
                </motion.li>

                <motion.li variants={item}>
                <a href="/about-us" className={`text-[2rem] font-russo ${page === "about" ? "relative after:absolute after:left-0 after:-bottom-1 after:bg-accent after:w-full after:h-[2px]" : ""}`}>ABOUT  US</a>

                </motion.li>

                <motion.li variants={item}>
                <a href="/contacts" className={`text-[2rem] font-russo ${page === "contacts" ? "relative after:absolute after:left-0 after:-bottom-1 after:bg-accent after:w-full after:h-[2px]" : ""}`}>CONTACTS</a>

                </motion.li>

                <motion.li variants={item}>
                <a href="/contacts">
                    <button className="bg-black py-[1.125rem] items-center gap-2 px-8 rounded-3xl flex">
                        <img src="/quote-icon.svg" alt="quote icon" className="size-6 mb-[1px]"/>
                        <p className="font-bold text-white">GET A QUOTE</p>
                    </button>
                </a>
                </motion.li>
                
                <div className="absolute bottom-6 flex flex-col items-center w-full">
                    <p className="text-center font-medium text-xs">Copyright © 2024 Cross Country Moving. <br/> All rights reserved </p>
                    <div className="flex items-center gap-2">
                        <a href="https://studiomodvis.com/EN/home" className="text-xs font-medium">Powered by Studio Modvis </a>
                        <img src="/modvis-logo.svg" alt="modvis logo" className="size-2"/>
                    </div>  
                </div>
            </motion.ul>
        </motion.div>
    )
}