export default function Footer () {
    return (
        <div className="px-4 lg:max-w-[120rem] lg:mx-auto lg:px-48">
            <div className="bg-black py-6 lg:pt-12 lg:pb-8 px-8 lg:px-32 rounded-t-3xl lg:rounded-t-[3rem]">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
                    <img src="/logo-inverted.png" alt="inverted logo" className="h-12 lg:h-14 w-fit lg:mr-24"/>
                    <div className="lg:mr-8">
                        <p className="font-russo text-sm lg:text-lg leading-4 lg:leading-6 mb-4 lg:mb-6 text-white">OUR CONTACTS</p>
                        <p className="text-sm lg:text-lg leading-4 lg:leading-6 mb-2 font-medium text-white">Mon - Sun: 9AM - 6PM</p>
                        <div className="flex items-center gap-1 mb-2">
                            <img src="/phone-icon.svg" alt="phone icon" className="size-4"/>
                            <p className="text-sm lg:text-lg leading-4 lg:leading-6 font-medium text-white">(800) - 000 - 0000</p>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                            <img src="/mail-icon.svg" alt="mail icon" className="size-4"/>
                            <p className="text-sm lg:text-lg leading-4 lg:leading-6 font-medium text-white">info@crosscountry.com</p>
                        </div>
                    </div>
                    <div className="lg:mr-8">
                        <p className="font-russo text-sm lg:text-lg leading-4 lg:leading-6 mb-4 lg:mb-6 text-white">EXPLORE MORE</p>
                        <a href="" className="text-sm lg:text-lg leading-4 lg:leading-6 mb-2 font-medium text-white block">Long Distance Move</a>
                        <a href="" className="text-sm lg:text-lg leading-4 lg:leading-6 mb-2 font-medium text-white block">About Us</a>
                        <a href="" className="text-sm lg:text-lg leading-4 lg:leading-6 mb-2 font-medium text-white block">Contacts</a>
                    </div>
                    <div className="flex gap-20 lg:gap-0 lg:flex-1 lg:justify-between">
                        <div>
                            <p className="font-russo text-sm lg:text-lg leading-4 lg:leading-6 mb-4 lg:mb-6 text-white">LEGAL</p>
                            <a href="" className="text-sm lg:text-lg leading-4 lg:leading-6 mb-2 font-medium text-white block">Legal</a>
                            <a href="" className="text-sm lg:text-lg leading-4 lg:leading-6 mb-2 font-medium text-white block">Privacy Policy</a>
                        </div>
                        <div>
                            <p className="font-russo text-sm lg:text-lg leading-4 lg:leading-6 mb-4 lg:mb-6 text-white">OUR SOCIALS</p>
                            <a href="" className="inline-block mr-2"><img src="/instagram-icon.svg" alt="instagram icon" className="size-6" /></a>
                            <a href="" className="inline-block"><img src="/facebook-icon.svg" alt="facebook icon" className="size-6" /></a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:justify-between mt-20 lg:mt-32">
                    <p className="text-xs lg:text-base font-medium mb-2 lg:mb-0 text-white text-center">Copyright © 2024 Cross Country Moving. <br className="lg:hidden"/> All rights reserved </p>
                    <div className="flex items-center gap-2">
                        <a href="https://studiomodvis.com/EN/home" className="text-xs lg:text-base font-medium text-white">Powered by Studio Modvis </a>
                        <img src="/modvis-logo.svg" alt="modvis logo" className="size-2 lg:size-3"/>
                    </div>  
                </div>
            </div>
        </div>
    )
}