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
// export const metadata = {
//   openGraph: {
//     title: "有限会社ワタモ カーレスキュー静清",
//     description:
//       "静岡市を中心に31年の信頼と実績を誇る「ワタモ カーレスキュー静清」では、年間12,000件のロードサービスを通じて多くのお客様に安心と安全をお届けしています。",
//     images: [
//       {
//         url: "/hero02.jpg", // 🌟 静的画像の指定
//         width: 1200,
//         height: 630,
//       },
//     ],
//   },
// };

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
