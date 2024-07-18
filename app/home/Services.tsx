import ServicesCardSection from "../components/ServicesCardSection";

export default function Services () {

    return (
        <div className="pt-16 lg:pt-40 px-4 lg:max-w-[120rem] lg:mx-auto lg:px-48" >
            <div className="flex flex-col lg:flex-row lg:justify-between mb-14 lg:mb-28">
                <div className="relative">
                    <p className="text-xs lg:text-base mb-4 lg:mb-6 font-russo lg:absolute lg:-top-6 lg:-translate-y-full lg:left-0">WHAT CAN WE HELP YOU WITH</p>
                    <h3 className="text-2xl lg:text-5xl font-russo">All Cross Country <span className="text-accent lg:block">Moving Services</span></h3>
                </div>
                <div className="lg:w-[41rem]">
                    <p className="text-sm lg:text-lg font-medium mt-6 lg:mt-0 mb-4">At Cross Country Moving Company, we are more than just movers; we are a team of dedicated professionals committed to making your moving experience as smooth and stress-free as possible.</p>
                    <a href="/about-us" className="font-bold lg:text-lg relative after:absolute after:left-0 after:-bottom-1 after:bg-accent after:w-full after:h-[2px] hover:text-accent transition duration-300">MORE ABOUT US</a>
                </div>
            </div>
            <ServicesCardSection rows={2}/>
        </div>
    )
}