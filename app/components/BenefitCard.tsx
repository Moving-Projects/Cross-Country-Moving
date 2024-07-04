import { motion } from "framer-motion"

export default function BenefitCard ({title, content, image}: {title: string, content: string, image: string}) {

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
        <motion.div className="rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-xs lg:shadow-sm w-full border border-accent lg:hover:bg-accent transition duration-200 group" variants={variants} transition={{duration: .3}}>
            <img src={image} alt="image for benefits" className="w-full"/>
            <div className="py-4 lg:py-8 px-6 lg:px-8 group-hover:text-white">
                <h4 className="font-russo mb-3 lg:text-[2rem] transition duration-200">{title}</h4>
                <p className="text-sm lg:text-lg font-medium transition duration-200">{content}</p>
            </div>
        </motion.div>
    )
}