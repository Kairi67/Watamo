"use client";

import Link from "next/link";
import Image from "next/image";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import VehiclesSection from "../components/VehiclesSection";
import PricingSection from "../components/PricingSection";
import StaffSection from "../components/StaffSection";
import ContactSection from "../components/ContactSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <VehiclesSection />
      <PricingSection />
      {/* <StaffSection /> */}
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
