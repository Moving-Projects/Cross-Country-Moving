import ReviewList from "../components/ReviewList";
import Menu from "../components/Menu";

export default function Hero () {
    return (
        <>
            <Menu />
            <div className="flex flex-col lg:flex-row pt-12 px-4 lg:pr-0 lg:pl-48 pb-[9.5rem] lg:pb-12 relative max-w-[120rem] mx-auto">
                <div className="max-w-full lg:max-w-none">
                    <div className="pt-6 lg:pt-16 lg:pl-12 lg:pr-36 px-4 bg-accent rounded-3xl rounded-b-none lg:rounded-[3rem] lg:rounded-bl-none">
                        <h1 className="text-[2rem] lg:text-[4rem] font-russo text-white mb-6 lg:mb-8 leading-tight">Where Efficiency <br className="hidden lg:block"/> &  <span className="hidden lg:inline">Reliability</span> <span className="inline lg:hidden">Safety</span> <span className="text-black">Cross</span> Paths</h1>
                        <h2 className="text-base leading-none lg:text-[2rem] lg:leading-8 font-bold mb-4 lg:mb-12">Your trusted partner for all your moving needs</h2>
                        <p className="text-white text-xs lg:text-2xl lg:leading-6 font-medium">Easily estimate your move <span className="text-black">for free.</span></p>
                    </div>
                    <div className="flex flex-col lg:flex-row relative">
                        <div className="absolute w-2/3 bottom-12 lg:top-0 left-0 h-1/2 bg-accent -z-10"></div>
                        <div className="px-4 lg:px-12 pb-6 lg:pb-16 pt-2 lg:pt-8 bg-accent rounded-b-3xl lg:rounded-b-[3rem] lg:w-fit">
                            <form action="" className="bg-white rounded-3xl lg:rounded-[3rem] py-8 lg:py-12 px-6 lg:px-8 flex flex-col w-full lg:w-[33rem] shadow-sm lg:shadow-lg">
                                <input type="text" className="bg-transparent rounded-3xl border border-black py-2 lg:py-4 pl-4 lg:pl-8 placeholder:font-light placeholder:text-opacity-50 mb-2 lg:mb-4 lg:h-[3.25rem]" placeholder="Collection Address"/>
                                <input type="text" className="bg-transparent rounded-3xl border border-black py-2 lg:py-4 pl-4 lg:pl-8 placeholder:font-light placeholder:text-opacity-50 mb-6 lg:mb-8 lg:h-[3.25rem]" placeholder="Moving to Address"/>
                                <button className="bg-black text-white flex justify-center items-center rounded-3xl h-10 lg:h-[3.25rem] text-[14px] lg:text-[16px] font-bold gap-1 lg:gap-2 group hover:bg-opacity-85 transition duration-300">
                                    NEXT
                                    <img src="/left-arrow.svg" alt="left arrow" className="size-6 group-hover:translate-x-2 transition duration-300"/>
                                </button>
                            </form>
                        </div>
                        <div className="lg:flex-1 h-36 lg:h-auto w-1/2 bg-white lg:rounded-[3rem] rounded-3xl self-end lg:self-stretch"></div>
                        <div className="absolute w-1/2 bottom-0 left-0 h-1/2 rounded-b-3xl bg-accent -z-10 lg:hidden"></div>
                    </div>
                </div>
                <img src="/hero-image.png" alt="people carrying boxes" className="absolute right-0 bottom-0 w-full lg:h-full lg:max-w-[55%] object-contain object-bottom"/>
            </div>
            <ReviewList />
        </>
    )
}