import TrustedBrands from "@/components/sections/TrustedBrands";
import Hero from "../components/sections/Hero";
import OurServicesSection from "../components/sections/OurServicesSection";
import TestimonialsSection from "../components/sections/Testimonials";
import Footer from "../components/layout/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <OurServicesSection />
      <TrustedBrands />
      <TestimonialsSection />
      <Footer />
    </>
  );
}

export default HomePage;
