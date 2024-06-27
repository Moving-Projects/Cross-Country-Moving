'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion"
import BenefitCard from "./BenefitCard";

export default function BenefitsCardSection () {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const list = {
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
          },
        },
        hide: {
          opacity: 0,
        },
      }

    return (
        <motion.div className="flex flex-col lg:flex-row gap-4 lg:gap-8" ref={ref} variants={list} animate={isInView ? "show": "hide"} transition={{duration: .3}}>
            <BenefitCard title="Reliable Experts" content="Our team consists of seasoned movers who handle your belongings with care." image="/benefits-1.png"/>
            <BenefitCard title="Comprehensive Services" content="From packing to unpacking, we cover all aspects of your move." image="/benefits-2.png"/>
            <BenefitCard title="Customizable Solutions" content="We tailor our services to meet your specific needs and preferences." image="/benefits-3.png"/>
        </motion.div>
    )
}