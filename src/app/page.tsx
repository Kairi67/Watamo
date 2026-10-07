import HomeHero from "@/components/HomeHero";
import ServiceGrid from "@/components/ServiceGrid";
import AboutBlock from "@/components/AboutBlock";
import NewsSection from "@/components/NewsSection";
import FaqSection from "@/components/FaqSection";
import ContactBanner from "@/components/ContactBanner";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServiceGrid />
      <AboutBlock />
      <NewsSection />
      <FaqSection />
      <ContactBanner />
    </>
  );
}