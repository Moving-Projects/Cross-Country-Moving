import BenefitsCardSection from "../components/BenefitsCardSection";

export default function Benefits () {
    return (
        <div className="mt-20 lg:mt-32 px-4 lg:max-w-[120rem] lg:mx-auto lg:px-48">
             <p className="font-russo text-xs lg:text-base mb-4 lg:mb-6 leading-none">WHO ARE WE</p>
             <h3 className="font-russo text-2xl lg:text-5xl mb-6 lg:mb-16 leading-none">Benefits of Choosing <span className="text-accent block lg:inline">Cross Country Moving</span> Company</h3>
            <BenefitsCardSection />
        </div>
    )
}