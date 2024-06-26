import AboutUs from "./sections/AboutUs";
import Benefits from "./sections/Benefits";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import QuoteRequest from "./sections/QuoteRequest";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Videos from "./sections/Videos";

export default function Page () {
  return (
    <>
      <Hero />
      <Services />
      <Videos />
      <AboutUs />
      <Benefits />
      <Testimonials />
      <QuoteRequest />
      <Footer />
    </>
  )
}