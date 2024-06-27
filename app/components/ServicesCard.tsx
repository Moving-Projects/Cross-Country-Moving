import { motion } from "framer-motion"

export default function ServicesCard ({title, content, image, split=false}: {title: string, content: string, image: string, split?: boolean}) {

    const variants = {
        show: {
            opacity: 1,
            y: 0
        },
        hide: {
            opacity: 0,
            y: 50
        }
    }
    
    return (
        <motion.div className="rounded-3xl lg:rounded-[3rem] border border-green p-4 lg:pt-12 lg:pb-[4.5rem] lg:px-8 relative shadow-sm lg:flex-1" variants={variants} transition={{duration: .3}}>
            <img src={image} alt="local move icon" className="absolute size-20 lg:w-[30%] lg:h-auto right-8 -top-6 lg:-top-12"/>
            <h3 className={"font-russo mb-6 lg:text-[2rem] " + (split ? "lg:mb-6" : "lg:mb-16")}>{split ? <>{title.split(" ")[0]} <br/> {title.split(" ")[1]}</> : title}</h3>
            <p className="text-sm lg:text-lg leading-4 lg:leading-6 font-medium">{content}</p>
        </motion.div>
    )
}