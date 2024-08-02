import HeroForm from "../components/HeroForm";
import Menu from "../components/Menu";
import ReviewList from "../components/ReviewList";

export default function Hero () {
    return (
        <>
            <Menu page={"about"}/>
            <div className="flex flex-col lg:flex-row pt-12 px-4 lg:pr-0 lg:pl-48 pb-[8rem] lg:pb-12 relative max-w-[120rem] mx-auto">
                <div className="max-w-full lg:max-w-none">
                    <div className="pt-6 lg:pt-16 lg:pl-12 lg:pr-36 px-4 bg-accent rounded-3xl rounded-b-none lg:rounded-[3rem] lg:rounded-bl-none">
                        <h1 className="text-[2rem] lg:text-[4rem] font-russo text-white mb-6 lg:mb-8 leading-tight">Find More About <br className="hidden lg:block"/> <span className="text-black">Cross</span> Country Moving</h1>
                        <h2 className="text-base leading-none lg:text-[2rem] lg:leading-8 font-bold mb-4 lg:mb-12">Your trusted partner for all your moving needs</h2>
                        <p className="text-white text-xs lg:text-2xl lg:leading-6 font-medium">Easily estimate your move <span className="text-black">for free.</span></p>
                    </div>
                    <div className="flex flex-col lg:flex-row relative">
                        <div className="absolute w-3/4 bottom-12 lg:top-0 left-0 h-1/2 bg-accent -z-10"></div>
                        <div className="px-4 lg:px-12 pb-6 lg:pb-16 pt-2 lg:pt-8 bg-accent rounded-b-3xl lg:rounded-b-[3rem] lg:w-fit">
                        <HeroForm />
                        </div>
                        <div className="lg:flex-1 h-36 lg:h-auto w-1/2 bg-white lg:rounded-[3rem] rounded-3xl self-end lg:self-stretch"></div>
                        <div className="absolute w-1/2 bottom-0 left-0 h-1/2 rounded-b-3xl bg-accent -z-10 lg:hidden"></div>
                    </div>
                </div>
                <img src="/about-us-hero.png" alt="people carrying boxes" className="absolute right-0 bottom-0 w-full lg:h-full lg:max-w-[55%] object-contain object-bottom max-w-[27rem]"/>
            </div>
            <ReviewList />
        </>
    )
}