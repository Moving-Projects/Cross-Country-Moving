import QuoteForm from "../components/QuoteForm";
import { Suspense } from 'react'
import QuoteFormFallback from "../components/QuoteFormFallback";

export default function QuoteRequest () {
    return (
        <div className="my-20 lg:my-32 px-4 lg:max-w-[120rem] lg:mx-auto lg:px-48">
            <div className="rounded-3xl lg:rounded-[3rem] bg-black px-4 py-6 relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:px-28 lg:justify-between lg:py-28">
                <img src="/quote-request-bg.png" alt="quote background" className="absolute top-0 left-0 h-full w-full object-cover opacity-50 z-0"/>
                <div>
                    <p className="font-russo text-xs lg:text-base mb-4 lg:mb-6 leading-none text-white z-10 relative">BOOK US NOW</p>
                    <h3 className="font-russo text-2xl lg:text-5xl mb-8 lg:mb-0 text-white z-10 relative lg:leading-tight">Request a <br/> <span className="text-accent">Free Quote</span> <br className="hidden lg:block"/> Today</h3>  
                </div>
                <Suspense fallback={<QuoteFormFallback/>}>
                    <QuoteForm />
                </Suspense>
            </div>
        </div>
    )
}