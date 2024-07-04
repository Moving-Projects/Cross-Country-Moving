import { Suspense } from "react";
import Menu from "../components/Menu";
import QuoteForm from "../components/QuoteForm";
import Footer from "../home/Footer";
import QuoteFormFallback from "../components/QuoteFormFallback";

export default function page () {
    return (
        <>
            <Menu page="contacts"/>
            <div className="pt-12 px-4 lg:max-w-[120rem] lg:mx-auto lg:px-48 mb-12 lg:mb-32">
                 <div className="flex flex-col lg:items-center xl:flex-row gap-6 py-6 lg:pt-16 lg:pb-8 mb-6 px-4 lg:px-12 bg-accent rounded-3xl rounded-br-none relative lg:justify-between">
                    <img src="/contacts-bottom.svg" alt="contacts bottom svg" className="absolute right-0 -bottom-6 h-6 lg:hidden object-contain object-right-top"/>
                    <img src="/contacts-bottom-pc.svg" alt="contacts bottom svg" className="absolute right-0 -bottom-[calc(2.75rem-1px)] object-contain object-right-top h-11 hidden lg:block"/>
                    <div className="lg:w-[45rem]">
                        <p className="font-russo text-xs lg:text-base mb-4 lg:mb-6 leading-none text-white">CONTACT US</p>
                        <h3 className="font-russo text-2xl lg:text-5xl 2xl:text-[4rem] mb-4 lg:mb-8 leading-none lg:leading-tight text-white">We’re Here to Help You <span className="text-black">Move With Ease</span></h3>
                        <p className="text-sm lg:text-lg font-medium leading-4 text-white mb-6 lg:mb-8">Feel free to reach out to us through your preferred method of contact. We are eager to connect with you and find out more about your needs for the moving service.</p>
                        <div className="md:flex md:gap-4 lg:gap-0 lg:block 2xl:flex 2xl:justify-between md:items-start 3xl:block 4xl:flex">
                            <div className="flex items-center gap-2 mb-2">
                                <img src="/phone-icon.svg" alt="phone icon" className="size-4 lg:size-6 invert"/>
                                <p className="text-sm lg:text-lg leading-4 lg:leading-6 font-medium">(800) - 000 - 0000</p>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <img src="/mail-icon.svg" alt="mail icon" className="size-4 lg:size-6 invert"/>
                                <p className="text-sm lg:text-lg leading-4 lg:leading-6 font-medium">info@crosscountry.com</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <img src="/map-icon.svg" alt="mail icon" className="size-4 lg:size-6"/>
                                <p className="text-sm lg:text-lg leading-4 lg:leading-6 font-medium ">915 Broadway Ste 501, <br/> New York, NY 10010</p>
                            </div>
                        </div>
                    </div>
                    <Suspense fallback={<QuoteFormFallback/>}>
                        <QuoteForm />
                    </Suspense>
                 </div>
            </div>
            <Footer />
        </>
    )
}