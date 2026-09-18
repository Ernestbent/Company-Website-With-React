import Footer from "../components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutCompany from "@/components/sections/about/AboutCompany";
import MissionVision from "@/components/sections/about/MissionVision";
import OurCustomers from "../components/sections/about/OurCustomers";
import MapLocation from "../components/sections/about/MapLocationSection";

function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutCompany />
      <MissionVision />
      <OurCustomers />
      <MapLocation />
      <Footer />
    </>
  );
}

export default AboutPage;
