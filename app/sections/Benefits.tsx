import BenefitCard from "../components/BenefitCard";

export default function Benefits () {
    return (
        <div className="mt-20 lg:mt-32 px-4 lg:max-w-[120rem] lg:mx-auto lg:px-48">
             <p className="font-russo text-xs lg:text-base mb-4 lg:mb-6 leading-none">WHO ARE WE</p>
             <h3 className="font-russo text-2xl lg:text-5xl mb-6 lg:mb-16 leading-none">Benefits of Choosing <span className="text-accent block lg:inline">Cross Country Moving</span> Company</h3>
             <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                <BenefitCard title="Reliable Experts" content="Our team consists of seasoned movers who handle your belongings with care." image="/benefits-1.png"/>
                <BenefitCard title="Comprehensive Services" content="From packing to unpacking, we cover all aspects of your move." image="/benefits-2.png"/>
                <BenefitCard title="Customizable Solutions" content="We tailor our services to meet your specific needs and preferences." image="/benefits-3.png"/>
             </div>
        </div>
    )
}