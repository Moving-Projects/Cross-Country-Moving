import ServicesCardSection from "../components/ServicesCardSection";

export default function Facts () {
    return (
        <div className="mt-20 lg:mt-32 px-4 lg:max-w-[120rem] lg:mx-auto lg:px-72">
            <p className="font-russo text-xs lg:text-base mb-4 lg:mb-6 leading-none text-center">FAQ</p>
            <h3 className="font-russo text-2xl lg:text-5xl mb-14 lg:mb-28 leading-none text-center"><span className="text-accent">FAQs</span> About the Process of Our Moving Services</h3>
            <ServicesCardSection rows={1}/>
        </div>
    )
}