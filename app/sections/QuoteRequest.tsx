import DatePicker from "../components/DatePicker";
import SizeSelect from "../components/SizeSelect";

export default function QuoteRequest () {
    return (
        <div className="my-20 lg:my-32 px-4 lg:max-w-[120rem] lg:mx-auto lg:px-48">
            <div className="rounded-3xl lg:rounded-[3rem] bg-black px-4 py-6 relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:px-28 lg:justify-between lg:py-28">
                <img src="/quote-request-bg.png" alt="quote background" className="absolute top-0 left-0 h-full w-full object-cover opacity-50 z-0"/>
                <div>
                    <p className="font-russo text-xs lg:text-base mb-4 lg:mb-6 leading-none text-white z-10 relative">BOOK US NOW</p>
                    <h3 className="font-russo text-2xl lg:text-5xl mb-8 lg:mb-0 text-white z-10 relative lg:leading-tight">Request a <br/> <span className="text-accent">Free Quote</span> <br className="hidden lg:block"/> Today</h3>  
                </div>
                 
                <form action="" className="bg-white rounded-3xl lg:rounded-[3rem] py-6 lg:py-12 px-4 lg:px-8 w-full lg:w-fit shadow-sm lg:shadow-lg z-10 relative">
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 w-full lg:w-fit">
                        <div className="flex flex-col gap-2 lg:gap-4">
                            <input type="text" className="bg-transparent rounded-3xl border border-black py-2 lg:py-4 pl-4 lg:pl-8 placeholder:font-light placeholder:text-opacity-50 lg:h-[3.25rem] focus:outline-black" placeholder="Collection Address *"/>
                            <input type="text" className="bg-transparent rounded-3xl border border-black py-2 lg:py-4 pl-4 lg:pl-8 placeholder:font-light placeholder:text-opacity-50 lg:h-[3.25rem] focus:outline-black" placeholder="Moving Address *"/>
                            <SizeSelect />
                        </div>

                        <div className="flex flex-col gap-2 lg:gap-4">
                            <DatePicker />
                            <input type="tel" className="bg-transparent rounded-3xl border border-black py-2 lg:py-4 pl-4 lg:pl-8 placeholder:font-light placeholder:text-opacity-50 lg:h-[3.25rem] focus:outline-black" placeholder="Primary Phone *"/>
                            <input type="email" className="bg-transparent rounded-3xl border border-black py-2 lg:py-4 pl-4 lg:pl-8 placeholder:font-light placeholder:text-opacity-50 lg:h-[3.25rem] focus:outline-black" placeholder="Email *"/>
                        </div>
                    </div>
                    
                    <button className="bg-black text-white flex justify-center items-center rounded-3xl h-10 lg:h-[3.25rem] text-[14px] lg:text-[16px] mt-4 lg:mt-8 w-full py-3 lg:py-0 font-bold gap-1 lg:gap-2 group hover:bg-[#363636] transition duration-300">
                        SEND REQUEST
                        <img src="/left-arrow.svg" alt="left arrow" className="size-6 group-hover:translate-x-2 transition duration-300"/>
                    </button>
                    <div className="flex gap-1 items-center justify-center mt-1 lg:mt-2 z-10 relative">
                        <img src="/info-icon.svg" alt="info icon" className="size-3 lg:size-4"/>
                        <p className="text-xs lg:text-base font-medium leading-3">We do no share your information.</p>
                    </div>
                </form>
               
            </div>
        </div>
    )
}