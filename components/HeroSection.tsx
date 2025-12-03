"use client";

// import { CldImage } from "next-cloudinary";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/hero01.jpeg')`,
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="bg-white/95 p-8 rounded-2xl backdrop-blur-sm">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">24時間365日</span>
              <br />
              車のトラブルに駆けつけます
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              不安を安心、安心を満足へ、満足を感動へ！
              <br />
              年間11,000件の出動実績で静岡の皆様の安心をサポートします
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg cursor-pointer whitespace-nowrap hover:bg-red-700 transition-colors flex items-center">
                <i className="ri-phone-line mr-3 text-xl"></i>
                今すぐ電話：054-345-2838
              </div>
              <div className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-full font-bold text-lg cursor-pointer whitespace-nowrap hover:bg-red-50 transition-colors flex items-center">
                <i className="ri-information-line mr-3 text-xl"></i>
                サービス詳細を見る
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="ri-arrow-down-line text-2xl"></i>
      </div>
    </section>
  );
}
