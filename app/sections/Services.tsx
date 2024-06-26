import ServicesCard from "../components/ServicesCard";

export default function Services () {
    return (
        <div className="pt-16 lg:pt-40 px-4 lg:max-w-[120rem] lg:mx-auto lg:px-48">
            <div className="flex flex-col lg:flex-row lg:justify-between mb-14 lg:mb-28">
                <div className="relative">
                    <p className="text-xs lg:text-base mb-4 lg:mb-6 font-russo lg:absolute lg:-top-6 lg:-translate-y-full lg:left-0">WHAT CAN WE HELP YOU WITH</p>
                    <h3 className="text-2xl lg:text-5xl font-russo">All Cross Country <span className="text-accent lg:block">Moving Services</span></h3>
                </div>
                <div className="lg:w-[41rem]">
                    <p className="text-sm lg:text-lg font-medium mt-6 lg:mt-0 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mi nec tellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien ultrices vehicula placerat. Ut aliquet ante mauris, et maximus odio mollis id. Integer ut dignissim risus.</p>
                    <a href="" className="font-bold lg:text-lg relative after:absolute after:left-0 after:-bottom-1 after:bg-accent after:w-full after:h-[2px] hover:text-accent transition duration-300">MORE ABOUT US</a>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 mb-10 lg:mb-28">
                <ServicesCard title="Long Distance" content="Moving across the country? Our long-distance moving services ensure your belongings are transported safely and promptly, no matter the distance." image="/long-icon.svg"/>
                <ServicesCard title="Local Move" content="Relocating within the city? Our local move services are designed to make your transition smooth and hassle-free." image="/local-icon.svg"/>
                <ServicesCard title="Small Moves" content="Just a few items to move? Our small move services are perfect for transporting smaller loads with the same care and attention." image="/small-icon.svg"/>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 lg:justify-center lg:px-[16rem]">
                <ServicesCard title="24/7/365 Moving" content="Need to move at an unusual time? We are available around the clock, every day of the year, to accommodate your schedule." image="/time-icon.svg" split={true}/>
                <ServicesCard title="Commercial Moving" content="Moving your business? Our commercial move services are tailored to minimize downtime and ensure a seamless transition for your company." image="/commercial-icon.svg" split={true}/>
            </div>
        </div>
    )
}