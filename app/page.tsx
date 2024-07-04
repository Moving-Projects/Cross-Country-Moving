import AboutUs from "./home/AboutUs";
import Benefits from "./home/Benefits";
import Footer from "./home/Footer";
import Hero from "./home/Hero";
import QuoteRequest from "./home/QuoteRequest";
import Services from "./home/Services";
import Testimonials from "./home/Testimonials";
import Videos from "./home/Videos";

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