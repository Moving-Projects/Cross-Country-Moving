export default function FindMore () {
    return (
        <div className="flex flex-col lg:flex-row mt-20 lg:mt-32 px-4 lg:max-w-[120rem] lg:mx-auto lg:px-48 lg:justify-between lg:items-center">
            <img src="/long-find-more.png" alt="men moving plants" className="mb-6 lg:mb-0 lg:w-1/2 rounded-3xl"/>
            <div className="lg:w-[45%]">
                <p className="font-russo text-xs lg:text-base mb-4 lg:mb-6 leading-none">FIND MORE</p>
                <h3 className="font-russo text-2xl lg:text-5xl mb-6 lg:mb-12 leading-none">What’s Long Distance & <span className="text-accent">How Can We Help?</span></h3>
                <p className="text-sm lg:text-[16px] lg:leading-6 2xl:text-lg font-medium mb-6">Long-distance moving involves relocating to a destination that is typically over 100 miles away, often crossing state lines. Unlike local moves, long-distance moves require more planning, coordination, and logistics to ensure that all your belongings arrive safely and on time. <br/><br/> At Cross Country Moving, we understand the complexities involved in these moves and have developed expertise in managing them seamlessly. Trust us to handle every detail of your long-distance move with care and efficiency.</p>
                <button className="flex gap-1 lg:gap-2 py-3 lg:py-[1.125rem] px-6 lg:px-8 text-xs lg:text-[14px] lg:leading-6 font-bold bg-black text-white rounded-3xl group hover:bg-[#363636] transition duration-300">ABOUT US <img src="/left-arrow.svg" alt="arrow right" className="size-4 lg:size-6 group-hover:translate-x-2 transition duration-300"/></button>
            </div>
        </div>
    )
}