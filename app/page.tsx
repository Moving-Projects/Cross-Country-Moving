import AboutUs from "./sections/AboutUs";
import Benefits from "./sections/Benefits";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import QuoteRequest from "./sections/QuoteRequest";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Videos from "./sections/Videos";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Cross Country Moving',
}

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