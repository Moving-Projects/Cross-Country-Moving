'use client'

import { useRef } from "react";
import ServicesCard from "../components/ServicesCard";
import { motion, useInView } from "framer-motion"

export default function ServicesCardSection ({rows}: {rows: number}) {
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

      const sectionList = {
        show: {
          opacity: 1,
          transition: {
            staggerChildren: .4,
          },
        },
        hide: {
          opacity: 0,
        },
      }

    return (
        <motion.div ref={ref} animate={isInView ? "show" : "hide"} variants={sectionList} transition={{duration: .3}}>
            {
              rows === 1 ?
              <motion.div className="flex flex-col lg:flex-row gap-10 lg:gap-8" variants={list} transition={{duration: .3}}>
                <ServicesCard title="99.5%|Happy Customers" content="Our focus on customer satisfaction has resulted in nearly perfect feedback from our clients. We prioritize your needs and strive to exceed expectations with every move." image="/facts-1.png" split={true}/>
                <ServicesCard title="0.1%|Damaged Goods" content="We take great care in handling your belongings, maintaining an exceptionally low rate of damaged items. Each item is treated with the utmost respect and protection during the moving process." image="/facts-2.png" split={true}/>
                <ServicesCard title="2 Years|of Experience" content="In just two years, we have quickly established ourselves as a reliable and efficient moving company. We continue to refine our services to provide the best possible moving experience for our clients." image="/facts-3.png" split={true}/>
              </motion.div> :
              <>
                <motion.div className="flex flex-col lg:flex-row gap-10 lg:gap-8 mb-10 lg:mb-28" variants={list} transition={{duration: .3}}>
                  <ServicesCard title="Long Distance" content="Moving across the country? Our long-distance moving services ensure your belongings are transported safely and promptly, no matter the distance." image="/long-icon.svg"/>
                  <ServicesCard title="Local Move" content="Relocating within the city? Our local move services are designed to make your transition smooth and hassle-free." image="/local-icon.svg"/>
                  <ServicesCard title="Small Moves" content="Just a few items to move? Our small move services are perfect for transporting smaller loads with the same care and attention." image="/small-icon.svg"/>
                </motion.div>
                <motion.div className="flex flex-col lg:flex-row gap-10 lg:gap-8 lg:justify-center lg:px-[16rem]" variants={list} transition={{duration: .3}}>
                  <ServicesCard title="24/7/365|Moving" content="Need to move at an unusual time? We are available around the clock, every day of the year, to accommodate your schedule." image="/time-icon.svg" split={true}/>
                  <ServicesCard title="Commercial|Moving" content="Moving your business? Our commercial move services are tailored to minimize downtime and ensure a seamless transition for your company." image="/commercial-icon.svg" split={true}/>
                </motion.div>
              </>
            }
            
            
        </motion.div>
    )
}