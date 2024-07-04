import Footer from "../home/Footer";
import Videos from "../home/Videos";
import FAQ from "./FAQ";
import Facts from "./Facts";
import Hero from "./Hero";

export default function page () {
    return (
        <>
            <Hero />
            <Facts />
            <Videos />
            <FAQ />
            <Footer />
        </>
    )
}