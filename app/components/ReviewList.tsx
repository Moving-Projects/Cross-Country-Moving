export default function ReviewList () {
    return (
        <div className="bg-black">
            <div className="py-4 lg:py-8 px-8 lg:px-48 flex justify-between max-w-[120rem] mx-auto">
                <h3 className="font-russo text-base leading-normal lg:text-[2rem] text-white">Highly Rated <br className="lg:hidden"/> Moving Company</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-2 lg:gap-x-8">
                    <div className="flex items-center gap-1 lg:gap-4">
                        <img src="/google-icon.svg" alt="google icon" className="size-4 lg:size-12"/>
                        <p className="text-white font-bold lg:text-[2rem] text-xs">4.9/5</p>
                    </div>
                    <div className="flex items-center gap-1 lg:gap-4">
                        <img src="/yota-icon.svg" alt="google icon" className="size-4 lg:size-12"/>
                        <p className="text-white font-bold lg:text-[2rem] text-xs">4.9/5</p>
                    </div>
                    <div className="flex items-center gap-1 lg:gap-4">
                        <img src="/trustpilot-icon.svg" alt="google icon" className="size-4 lg:size-12"/>
                        <p className="text-white font-bold lg:text-[2rem] text-xs">4.9/5</p>
                    </div>
                    <div className="flex items-center gap-1 lg:gap-4">
                        <img src="/thumbtack-icon.svg" alt="google icon" className="size-4 lg:size-12"/>
                        <p className="text-white font-bold lg:text-[2rem] text-xs">4.9/5</p>
                    </div>
                </div>
            </div>        
        </div>
    )
}