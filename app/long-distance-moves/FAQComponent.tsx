'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const answers = [
    ["Specialization in Long-Distance Moves", "Cross Country Moving has extensive experience in handling long-distance relocations, navigating the complexities of moving across state lines and from coast to coast. We understand the unique challenges of long-distance moves, such as coordinating timelines, managing logistics, and ensuring compliance with state regulations. Our team’s expertise allows us to plan and execute your move with precision, minimizing the stress and ensuring your belongings reach their destination safely and on time."],
    ["Comprehensive Long-Distance Services", "We offer a full suite of services specifically designed for long-distance moves, ensuring every aspect of your relocation is covered. Our professional packing services use high-quality materials to protect your items during transit, while our secure transportation utilizes state-of-the-art trucks equipped with GPS tracking for real-time updates on your shipment. Additionally, we provide efficient unpacking services to help you settle into your new home quickly and storage solutions to accommodate any delays or transitions during your move."],
    ["Dedicated Customer Support", "At Cross Country Moving, our customer-centric approach means we are committed to providing exceptional service tailored to your needs. From your initial consultation to the final delivery, our dedicated team is available to answer questions, address concerns, and provide updates. We pride ourselves on clear communication and personalized support, ensuring you feel confident and informed throughout your long-distance move. Our goal is to make your relocation as smooth and stress-free as possible."],
    ["Transparent and Competitive Pricing", "We believe that quality long-distance moving services should be accessible and affordable. Our transparent pricing model ensures that you receive a detailed quote with no hidden fees, allowing you to budget effectively for your move. We offer competitive rates without compromising on service quality, providing excellent value for your investment. Contact us today for a free, no-obligation quote and discover how Cross Country Moving can make your long-distance relocation affordable and hassle-free."]
]

export default function FAQComponent () {
    const [question, setQuestion] = useState(0);
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    const cardVariants = {
        show: {
            height: 'auto'
        },
        hide: {
            height: 0,
        }
    }

    useEffect(() => {
        if (window.innerWidth < 1024) setIsMobile(true); else setIsMobile(false);

        const onResize = () => {
            setIsMobile(window.innerWidth < 1024);
        }

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

if (isMobile === null) return;
    
    const Question = ({question, index, active}: {question: string[], index: number, active: boolean}) => {
        return (
            <button className={`py-2 lg:py-4 px-4 lg:pl-8 lg:pr-4 flex justify-between items-center lg:hover:bg-white transition duration-300 rounded-3xl lg:rounded-[3rem] group text-left ${active ? 'bg-white' : ''}`} onClick={() => {setQuestion(index)}}>
                <p className='text-base lg:text-2xl leading-4 lg:leading-6 font-bold'>{question[0]} <br/> {question[1]}</p>
                <div className={`lg:bg-accent rounded-full size-8 lg:size-12 flex justify-center items-center group-hover:opacity-100 transition duration-300 ${active ? 'bg-accent lg:opacity-100' : 'bg-black lg:opacity-0'}`}>
                    <motion.img src="/left-arrow.svg" alt="right arrow" className='lg:invert size-4 lg:size-6' variants={{initial: {rotate: 0}, active: {rotate: 90}}} animate={active && isMobile ? 'active' : 'initial'}/>
                </div>
            </button>
        )
    }

    return (
        <div className='lg:flex lg:gap-24 py-4 lg:py-12 px-4 lg:pl-12 lg:pr-24 bg-accent rounded-3xl lg:rounded-[3rem] relative'>
            <div className='absolute right-0 top-0 h-full rounded-[3rem] bg-black w-[70%] hidden lg:block'></div>
            <div className='flex flex-col gap-2 lg:gap-4 w-full lg:w-[38%] z-10'>
                <Question active={question === 0} index={0} question={["1. Specialization in", "Long-Distance Moves"]}/>
                {
                    isMobile && 
                    <motion.div className='overflow-hidden rounded-3xl' variants={cardVariants} animate={question === 0 ? "show" : "hide"} initial={"show"}>
                        <div className='bg-black py-8 px-4 text-white rounded-3xl'>
                            <p className='font-russo mb-4'>{answers[0][0]}</p>
                            <p className='font-medium text-sm leading-4 mb-6'>{answers[0][1]}</p>
                            <a href="/contacts">
                                <button className="bg-white py-3 items-center gap-1 px-6 rounded-3xl flex transition duration-300" id="get-quote">
                                    <img src="/quote-icon.svg" alt="quote icon" className="size-6 invert"/>
                                    <p className="font-bold text-black">GET A QUOTE</p>
                                </button>
                            </a>
                        </div>
                        
                    </motion.div>   
                }
                <Question active={question === 1} index={1} question={["2. Comprehensive", "Services"]}/>
                {
                    isMobile && 
                    <motion.div className='overflow-hidden' variants={cardVariants} animate={question === 1 ? "show" : "hide"} initial={"show"}>
                        <div className='bg-black py-8 px-4 text-white rounded-3xl'>
                            <p className='font-russo mb-4'>{answers[1][0]}</p>
                            <p className='font-medium text-sm leading-4 mb-6'>{answers[1][1]}</p>
                            <a href="/contacts">
                                <button className="bg-white py-3 items-center gap-1 px-6 rounded-3xl flex transition duration-300" id="get-quote">
                                    <img src="/quote-icon.svg" alt="quote icon" className="size-6 invert"/>
                                    <p className="font-bold text-black">GET A QUOTE</p>
                                </button>
                            </a>
                        </div>
                        
                    </motion.div>   
                }
                <Question active={question === 2} index={2} question={["3. Dedicated Customer", "Support"]}/>
                {
                    isMobile && 
                    <motion.div className='overflow-hidden' variants={cardVariants} animate={question === 2 ? "show" : "hide"} initial={"show"}>
                        <div className='bg-black py-8 px-4 text-white rounded-3xl'>
                            <p className='font-russo mb-4'>{answers[2][0]}</p>
                            <p className='font-medium text-sm leading-4 mb-6'>{answers[2][1]}</p>
                            <a href="/contacts">
                                <button className="bg-white py-3 items-center gap-1 px-6 rounded-3xl flex transition duration-300" id="get-quote">
                                    <img src="/quote-icon.svg" alt="quote icon" className="size-6 invert"/>
                                    <p className="font-bold text-black">GET A QUOTE</p>
                                </button>
                            </a>
                        </div>
                        
                    </motion.div>   
                }
                <Question active={question === 3} index={3} question={["4. Transparent and", "Competitive Pricing"]}/>
                {
                    isMobile && 
                    <motion.div className='overflow-hidden' variants={cardVariants} animate={question === 3 ? "show" : "hide"} initial={"show"}>
                        <div className='bg-black py-8 px-4 text-white rounded-3xl'>
                            <p className='font-russo mb-4'>{answers[3][0]}</p>
                            <p className='font-medium text-sm leading-4 mb-6'>{answers[3][1]}</p>
                            <a href="/contacts">
                                <button className="bg-white py-3 items-center gap-1 px-6 rounded-3xl flex transition duration-300" id="get-quote">
                                    <img src="/quote-icon.svg" alt="quote icon" className="size-6 invert"/>
                                    <p className="font-bold text-black">GET A QUOTE</p>
                                </button>
                            </a>
                        </div>
                        
                    </motion.div>   
                }
            </div>
            {
                !isMobile && 
                <div className='flex-1 z-10'>
                    <p className='font-russo text-[2rem] text-white mb-6'>{answers[question][0]}</p>
                    <p className='font-medium text-lg leading-6 text-white mb-8'>{answers[question][1]}</p>
                    <a href="/contacts">
                        <button className="bg-white py-4 items-center gap-2 px-8 rounded-3xl lg:text-lg 2xl:text-base flex transition duration-300 hover:bg-opacity-75" id="get-quote">
                            <img src="/quote-icon.svg" alt="quote icon" className="size-6 mb-[1px] invert"/>
                            <p className="font-bold">GET A QUOTE</p>
                        </button>
                    </a>
                </div>
            }
            
        </div>
    )
}