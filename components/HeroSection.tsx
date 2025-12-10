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
          {/* コンテンツ背景: スマホではパディングを少し控えめに (p-6 -> p-8) */}
          <div className="bg-white/95 p-6 md:p-8 rounded-2xl backdrop-blur-sm shadow-xl">
            {/* 見出し: スマホで大きすぎないようにサイズ調整 */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              <span className="text-red-600 block sm:inline mb-1 sm:mb-0">
                24時間365日
              </span>
              {/* PCのみ改行を入れる（スマホは自動折り返し） */}
              <span className="hidden sm:inline"> </span>
              車のトラブルに駆けつけます
            </h1>

            {/* 本文: スマホでは文字サイズを少し小さくし、<br>を無効化 */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
              静岡市を中心に31年の信頼と実績を誇る
              <span className="inline-block">
                「ワタモ カーレスキュー静清」
              </span>
              では、
              <br className="hidden md:block" />
              年間12,000件のロードサービスを通じて
              <br className="hidden md:block" />
              多くのお客様に安心と安全をお届けしています。
            </p>

            {/* ボタンエリア: スマホでは縦並び、タブレット以上で横並び */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* 電話ボタン: <a>タグ自体にスタイルを適用し、ボタン全体をクリック可能に */}
              <a
                href="tel:054-345-2838"
                className="w-full sm:w-auto bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg cursor-pointer hover:bg-blue-700 transition-colors flex items-center justify-center shadow-md"
              >
                <i className="ri-phone-line mr-2 md:mr-3 text-xl"></i>
                今すぐ電話：054-345-2838
              </a>

              {/* 詳細ボタン */}
              <a
                href="#services"
                className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg cursor-pointer hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                <i className="ri-information-line mr-2 md:mr-3 text-xl"></i>
                サービス詳細を見る
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* スクロールダウンアイコン: スマホの縦幅が狭い場合に被らないよう、位置を少し調整 */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="ri-arrow-down-line text-2xl md:text-3xl drop-shadow-md"></i>
      </div>
    </section>
  );
}
