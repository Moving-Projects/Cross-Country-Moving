import FAQComponent from "./FAQComponent";

export default function FAQ () {
    return (
        <div className="mt-20 lg:mt-32 px-4 lg:max-w-[120rem] lg:mx-auto lg:px-72">
            <p className="font-russo text-xs lg:text-base mb-4 lg:mb-6 leading-none text-center">WHERE WE SPECIALIZE</p>
            <h3 className="font-russo text-2xl lg:text-5xl mb-6 lg:mb-16 leading-none text-center"><span className="text-accent">Why Choose Us</span> for Your Long Distance Move?</h3>
            <FAQComponent />
        </div>
    )
}