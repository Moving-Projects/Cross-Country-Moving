export default function Menu () {
    return (
        <div className="xl:px-48 xl:max-w-[120rem] xl:mx-auto flex justify-between items-center pt-4 px-8 xl:py-8 relative">
            <img src="/logo.png" alt="logo" className="h-8 xl:h-14"/>
            <nav className="bg-black rounded-[2rem] px-[4.5rem] gap-11 py-[1.125rem] items-center absolute left-1/2 -translate-x-1/2 hidden xl:flex">
                <a href="" className="text-white font-bold text-base lg:text-lg 2xl:text-base relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-accent after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-1px]">HOME</a>
                <a href="" className="text-white font-bold text-base lg:text-lg 2xl:text-base relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-accent after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-1px]">LONG DISTANCE MOVES</a>
                <a href="" className="text-white font-bold text-base lg:text-lg 2xl:text-base relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-accent after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-1px]">ABOUT US</a>
                <a href="" className="text-white font-bold text-base lg:text-lg 2xl:text-base relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-accent after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-1px]">CONTACTS</a>
            </nav>
            <button className="bg-black py-[1.125rem] items-center gap-2 px-8 rounded-3xl lg:text-lg 2xl:text-base hidden xl:flex" id="get-quote">
                <img src="/quote-icon.svg" alt="quote icon" className="size-6 mb-[1px]"/>
                <p className="font-bold text-white">GET A QUOTE</p>
            </button>
            <div className="flex flex-col gap-1 xl:hidden">
                <div className="bg-black w-6 h-1"></div>
                <div className="bg-black w-6 h-1"></div>
                <div className="bg-black w-6 h-1"></div>
            </div>
        </div>
    )
}