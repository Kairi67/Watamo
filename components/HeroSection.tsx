"use client";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/hero01.jpg')`,
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="bg-white/95 p-6 rounded-2xl backdrop-blur-sm">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">24時間365日</span>
              <br />
              車のトラブルに駆けつけます
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              静岡市を中心に31年の信頼と実績を誇る「ワタモ
              カーレスキュー静清」では、
              <br />
              年間12,000件のロードサービスを通じて多くのお客様に安心と安全をお届けしています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg cursor-pointer whitespace-nowrap hover:bg-blue-700 transition-colors flex items-center">
                <i className="ri-phone-line mr-3 text-xl"></i>
                <a href="tel:054-345-2838">今すぐ電話：054-345-2838</a>
              </div>
              <div className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold text-lg cursor-pointer whitespace-nowrap hover:bg-blue-50 transition-colors flex items-center">
                <a href="#services">
                  <i className="ri-information-line mr-3 text-xl"></i>
                  サービス詳細を見る
                </a>
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
