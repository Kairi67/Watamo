// "use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* ヘッダー: サイズ調整 */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            会社概要
          </h2>
          <p className="text-sm md:text-xl text-gray-600">
            有限会社ワタモ カーレスキュー静清について
          </p>
        </div>

        {/* メインコンテンツ: PCは2列、スマホは縦積み (デフォルト grid-cols-1) */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* 画像エリア: スマホでは高さを抑える (h-64) */}
          <div>
            <div
              className="h-64 md:h-80 lg:h-96 bg-cover bg-center bg-gray-200 rounded-xl md:rounded-2xl shadow-lg"
              style={{ backgroundImage: `url("/about01.jpg")` }}
              role="img"
              aria-label="会社外観または理念イメージ"
            ></div>
          </div>

          {/* テキスト/カードエリア */}
          <div className="space-y-6 md:space-y-8">
            <div>
              {/* 企業理念: サイズ調整 */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                企業理念
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                「困ったに寄り添い、地域のインフラとなる」
                <br className="hidden md:inline" />
                365日24時間体制でお客様の車のトラブルに迅速に対応し、
                <br className="hidden md:inline" />
                静岡の皆様の安全で快適なカーライフをサポートいたします。
              </p>
            </div>

            {/* 特徴カード: スマホでも2列表示を維持するが、パディングを縮小 */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <i className="ri-award-line text-blue-600 text-lg md:text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
                  高品質サービス
                </h4>
                <p className="text-gray-600 text-xs md:text-sm">
                  TUV認証取得による確かな技術力
                </p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <i className="ri-time-line text-green-600 text-lg md:text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
                  迅速対応
                </h4>
                <p className="text-gray-600 text-xs md:text-sm">
                  24時間365日いつでも駆けつけます
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 会社データエリア */}
        <div className="mt-10 md:mt-16">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              会社データ
            </h3>

            {/* データグリッド: スマホは2列、PCは3列 */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* 各データ項目 */}
              {[
                {
                  label: "代表者名",
                  value: "渡邊 泰男",
                  icon: "ri-user-line",
                  color: "blue",
                },
                {
                  label: "レッカー車・車載専用車数",
                  value: "20台",
                  icon: "ri-truck-line",
                  color: "green",
                },
                {
                  label: "従業員数（アルバイト含）",
                  value: "23名",
                  icon: "ri-team-line",
                  color: "purple",
                },
                {
                  label: "電話番号",
                  value: "054-345-2838",
                  icon: "ri-phone-line",
                  color: "red",
                },
                {
                  label: "営業時間",
                  value: "年中無休／24時間営業",
                  icon: "ri-time-line",
                  color: "yellow",
                },
                {
                  label: "創業",
                  value: "1994年",
                  icon: "ri-scan-line",
                  color: "indigo",
                },
              ].map((data, index) => (
                <div key={index} className="text-center">
                  {/* アイコンサークル: サイズ調整 */}
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 bg-${data.color}-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4`}
                  >
                    <i
                      className={`${data.icon} text-${data.color}-600 text-xl md:text-2xl`}
                    ></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
                    {data.label}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    {data.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
