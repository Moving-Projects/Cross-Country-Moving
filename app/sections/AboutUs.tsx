export default function AboutUs () {
    return (
        <div className="flex flex-col lg:flex-row-reverse mt-20 lg:mt-32 px-4 lg:max-w-[120rem] lg:mx-auto lg:px-48 lg:justify-between lg:gap-32">
            <div className="relative mb-2 lg:flex-1">
                <img src="/about-us-1.png" alt="about us image" className="rounded-xl shadow-xs lg:shadow-lg w-[45%] mb-10 lg:mb-0"/>
                <img src="/about-us-2.png" alt="about us image" className="rounded-xl shadow-xs lg:shadow-lg absolute right-0 bottom-0 w-[60%] border-white border-[5px]"/>
            </div>
            <div className="lg:w-[45%]">
                <p className="font-russo text-xs lg:text-base mb-4 lg:mb-6 leading-none">WHO ARE WE</p>
                <h3 className="font-russo text-2xl lg:text-5xl mb-6 lg:mb-12 leading-none">About the <span className="text-accent">Company</span></h3>
                <p className="text-sm lg:text-[16px] lg:leading-6 2xl:text-lg font-medium mb-6">At Cross Country Moving Company, we are more than just movers; we are a team of dedicated professionals committed to making your moving experience as smooth and stress-free as possible. <br/><br/> With over a decade of experience in the moving industry, we have built a reputation for excellence, reliability, and top-notch customer service. Our mission is to provide efficient and reliable moving solutions tailored to meet the unique needs of each client.</p>
                <button className="flex gap-1 lg:gap-2 py-3 lg:py-[1.125rem] px-6 lg:px-8 text-xs lg:text-[14px] lg:leading-6 font-bold bg-black text-white rounded-3xl group hover:bg-[#363636] transition duration-300">FIND MORE <img src="/left-arrow.svg" alt="arrow right" className="size-4 lg:size-6 group-hover:translate-x-2 transition duration-300"/></button>
            </div>
        </div>
    )
}