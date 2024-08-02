export default function QuoteConfirmation ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (value: boolean) => void}) {

    return (
        <div className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50 ${isOpen ? "block" : "hidden"} `} onClick={(e) => {e.stopPropagation(); setIsOpen(false)}}>
            <div className="rounded-[3rem] bg-white py-12 shadow-lg">
                <div className="px-16">
                    <h3 className="font-russo text-[2rem] leading-5 mb-6 text-center">Your Quote Has Been Sent! </h3>
                    <p className="text-center font-medium mb-12">You have successfully sent a secure message, we will get in <br/> touch as soon as possible. </p>
                </div>
                <div className="px-8">
                    <button className="bg-black text-white flex justify-center items-center rounded-3xl h-10 lg:h-[3.25rem] text-[14px] lg:text-[16px] w-full py-3 lg:py-0 font-bold gap-1 lg:gap-2 hover:bg-[#363636] transition duration-300" onClick={() => {setIsOpen(false)}}>CLOSE</button>
                    <div className="flex gap-1 items-center justify-center mt-1 lg:mt-2 z-10 relative">
                        <img src="/info-icon.svg" alt="info icon" className="size-3 lg:size-4"/>
                        <p className="text-xs lg:text-base font-medium leading-3">We do no share your information.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}