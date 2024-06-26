import AboutUs from "./sections/AboutUs";
import Benefits from "./sections/Benefits";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import QuoteRequest from "./sections/QuoteRequest";
import Services from "./sections/Services";
import Videos from "./sections/Videos";

export default function () {
  return (
    <>
      <Hero />
      <Services />
      <Videos />
      <AboutUs />
      <Benefits />
      <QuoteRequest />
      <Footer />
    </>
  )
}