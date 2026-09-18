import Hero from "@/components/sections/home/Hero";
import OurServicesSection from "@/components/sections/home/OurServicesSection";
import TestimonialsSection from "@/components/sections/home/Testimonials";
import TrustedBrands from "@/components/sections/home/TrustedBrands";
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
