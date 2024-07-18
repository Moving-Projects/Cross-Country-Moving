'use client'

import { useEffect, useState } from "react"

export default function ScrollUpButton () {

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight) setVisible(true);
            else setVisible(false);
        })
    }, []);

    return (
        <button className="fixed right-6 lg:right-24 bottom-12 lg:bottom-24 rounded-full bg-accent z-50 p-0.5 lg:p-1 transition-all duration-300" style={{opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0}} onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>
            <img src="/left-arrow.svg" alt="up arrow" className="-rotate-90 size-8 lg:size-12"/>
        </button>
    )
}