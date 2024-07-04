import Footer from "../home/Footer";
import QuoteRequest from "../home/QuoteRequest";
import Testimonials from "../home/Testimonials";
import FAQ from "./FAQ";
import FindMore from "./FindMore";
import Hero from "./Hero";

export default function page () {
    return (
        <>
            <Hero />
            <FindMore />
            <FAQ />
            <Testimonials />
            <QuoteRequest />
            <Footer />
        </>
    )
}