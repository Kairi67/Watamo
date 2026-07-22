// "use client";

// export default function ContactSection() {
//   return (
//     <section id="contact" className="py-12 md:py-20 bg-white">
//       <div className="container mx-auto px-4">
//         {/* ヘッダー: サイズ調整 */}
//         <div className="text-center mb-10 md:mb-16">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
//             事業所案内
//           </h2>
//           <p className="text-sm md:text-xl text-gray-600">
//             緊急時は迷わずご連絡ください
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           {/* 拠点情報グリッド: スマホは1列、PCは2列 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//             {/* 清水インター店 */}
//             <div className="bg-gray-50 p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md">
//               <div className="flex items-center mb-4 md:mb-6">
//                 <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
//                   <i className="ri-map-pin-line text-blue-600 text-lg md:text-xl"></i>
//                 </div>
//                 <h3 className="text-lg md:text-xl font-bold text-gray-900">
//                   清水インター店
//                 </h3>
//               </div>
//               <div className="space-y-3 md:space-y-4">
//                 <div className="flex items-start">
//                   <i className="ri-map-pin-2-line text-gray-500 mt-1 mr-3 text-sm md:text-base flex-shrink-0"></i>
//                   <p className="text-gray-700 text-sm md:text-base">
//                     静岡市清水区八坂北1-1-53-1
//                   </p>
//                 </div>
//                 {/* 地図埋め込み: スマホで高さを抑える */}
//                 <div className="h-40 md:h-48 bg-gray-200 rounded-lg md:rounded-xl overflow-hidden">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26134.426860945194!2d138.477443!3d35.036649!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a34766ccbd687%3A0xdc95a3d518bf979b!2z44Kr44O844Os44K544Kt44Ol44O86Z2Z5riFIOa4heawtOOCpOODs-OCv-ODvOW6lw!5e0!3m2!1sja!2sjp!4v1764826222027!5m2!1sja!2sjp" // 実際の地図URLに置き換えてください
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     title="清水インター店の地図"
//                   ></iframe>
//                 </div>
//               </div>
//             </div>

//             {/* 静岡インター店 */}
//             <div className="bg-gray-50 p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md">
//               <div className="flex items-center mb-4 md:mb-6">
//                 <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
//                   <i className="ri-map-pin-line text-green-600 text-lg md:text-xl"></i>
//                 </div>
//                 <h3 className="text-lg md:text-xl font-bold text-gray-900">
//                   静岡インター店
//                 </h3>
//               </div>
//               <div className="space-y-3 md:space-y-4">
//                 <div className="flex items-start">
//                   <i className="ri-map-pin-2-line text-gray-500 mt-1 mr-3 text-sm md:text-base flex-shrink-0"></i>
//                   <p className="text-gray-700 text-sm md:text-base">
//                     静岡市駿河区中島1131-1
//                   </p>
//                 </div>
//                 {/* 地図埋め込み: スマホで高さを抑える */}
//                 <div className="h-40 md:h-48 bg-gray-200 rounded-lg md:rounded-xl overflow-hidden">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204.41799464250735!2d138.39708612483167!3d34.93936316991296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a499b1472d7b9%3A0x14ab99b6d02e3279!2z77yI5qCq77yJ5rih6L6644Oi44O844K_44O844K55ZWG5LyaIOmdmeWyoeOCpOODs-OCv-ODvOW6lw!5e0!3m2!1sja!2sjp!4v1764826432959!5m2!1sja!2sjp" // 実際の地図URLに置き換えてください
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     title="静岡インター店の地図"
//                   ></iframe>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* 対応エリア */}
//           <div className="mt-10 md:mt-12 bg-blue-50 p-6 md:p-8 rounded-2xl">
//             <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 md:mb-8 text-center">
//               対応エリア
//             </h3>
//             <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center">
//               {/* 静岡市全域 */}
//               <div>
//                 <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
//                   <i className="ri-roadster-line text-blue-600 text-xl md:text-2xl"></i>
//                 </div>
//                 <h4 className="font-bold text-blue-900 mb-1 md:mb-2 text-base md:text-lg">
//                   静岡市全域
//                 </h4>
//                 <p className="text-blue-800 text-xs md:text-sm">
//                   葵区・駿河区・清水区
//                 </p>
//               </div>

//               {/* 近隣地域 */}
//               <div>
//                 <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
//                   <i className="ri-map-line text-blue-600 text-xl md:text-2xl"></i>
//                 </div>
//                 <h4 className="font-bold text-blue-900 mb-1 md:mb-2 text-base md:text-lg">
//                   近隣地域
//                 </h4>
//                 <p className="text-blue-800 text-xs md:text-sm">
//                   焼津市・藤枝市・富士市・富士宮市など
//                 </p>
//               </div>

//               {/* 対応時間 (スマホ2列表示で均等にするためにここで配置) */}
//               <div>
//                 <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
//                   <i className="ri-time-line text-blue-600 text-xl md:text-2xl"></i>
//                 </div>
//                 <h4 className="font-bold text-blue-900 mb-1 md:mb-2 text-base md:text-lg">
//                   対応時間
//                 </h4>
//                 <p className="text-blue-800 text-xs md:text-sm">
//                   24時間365日対応
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

type Location = {
  name: string;
  type: "店舗" | "ヤード";
  address: string;
  iconClass: string;
  iconBackgroundClass: string;
  iconColorClass: string;
  badgeClass: string;
};

export default function ContactSection() {
  const locations: Location[] = [
    {
      name: "清水インター店",
      type: "店舗",
      address: "静岡市清水区八坂北1-1-53-1",
      iconClass: "ri-building-2-line",
      iconBackgroundClass: "bg-blue-100",
      iconColorClass: "text-blue-600",
      badgeClass: "bg-blue-50 text-blue-700 ring-blue-200",
    },
    {
      name: "静岡インター店",
      type: "店舗",
      address: "静岡市駿河区中島1131-1",
      iconClass: "ri-building-2-line",
      iconBackgroundClass: "bg-blue-100",
      iconColorClass: "text-blue-600",
      badgeClass: "bg-blue-50 text-blue-700 ring-blue-200",
    },
    {
      name: "タウ清水ヤード",
      type: "ヤード",
      address: "静岡市清水区小島町59-1",
      iconClass: "ri-truck-line",
      iconBackgroundClass: "bg-orange-100",
      iconColorClass: "text-orange-600",
      badgeClass: "bg-orange-50 text-orange-700 ring-orange-200",
    },
    {
      name: "タウ富士ヤード",
      type: "ヤード",
      address: "富士市入山瀬宇猪久保835-1",
      iconClass: "ri-truck-line",
      iconBackgroundClass: "bg-orange-100",
      iconColorClass: "text-orange-600",
      badgeClass: "bg-orange-50 text-orange-700 ring-orange-200",
    },
  ];

  const getMapEmbedUrl = (address: string) =>
    `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  const getGoogleMapsUrl = (address: string) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address,
    )}`;

  return (
    <section id="contact" className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* ヘッダー */}
        <div className="mb-10 text-center md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold tracking-wider text-blue-700 md:text-sm">
            <i className="ri-map-pin-line" aria-hidden="true" />
            LOCATION
          </div>

          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl md:mb-4 md:text-4xl">
            事業所案内
          </h2>

          <p className="text-sm leading-relaxed text-gray-600 md:text-xl">
            静岡市・富士市の各拠点から
            <br className="sm:hidden" />
            迅速に駆けつけます
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          {/* 拠点一覧 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {locations.map((location) => (
              <article
                key={location.name}
                className="
                  group flex h-full flex-col overflow-hidden rounded-2xl
                  border border-gray-100 bg-white
                  shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]
                "
              >
                {/* 拠点情報 */}
                <div className="p-5 sm:p-6 md:p-8">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center">
                      <div
                        className={`
                          ${location.iconBackgroundClass}
                          mr-3 flex h-11 w-11 flex-shrink-0
                          items-center justify-center rounded-full
                          sm:mr-4 sm:h-12 sm:w-12
                        `}
                      >
                        <i
                          className={`
                            ${location.iconClass}
                            ${location.iconColorClass}
                            text-xl
                          `}
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="min-w-0 text-lg font-bold leading-snug text-gray-900 sm:text-xl">
                        {location.name}
                      </h3>
                    </div>

                    <span
                      className={`
                        ${location.badgeClass}
                        flex-shrink-0 rounded-full px-3 py-1
                        text-xs font-bold ring-1 ring-inset
                      `}
                    >
                      {location.type}
                    </span>
                  </div>

                  <div className="flex items-start">
                    <i
                      className="ri-map-pin-2-line mr-3 mt-0.5 flex-shrink-0 text-lg text-gray-400"
                      aria-hidden="true"
                    />

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                      {location.address}
                    </p>
                  </div>
                </div>

                {/* 地図 */}
                <div className="px-5 sm:px-6 md:px-8">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 sm:aspect-video md:aspect-[4/3] lg:aspect-video">
                    <iframe
                      src={getMapEmbedUrl(location.address)}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${location.name}の地図`}
                      className="h-full w-full"
                    />
                  </div>
                </div>

                {/* Googleマップボタン */}
                <div className="mt-auto p-5 sm:p-6 md:p-8">
                  <a
                    href={getGoogleMapsUrl(location.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex w-full items-center justify-center
                      rounded-full border border-gray-200 bg-white
                      px-5 py-3 text-sm font-bold text-gray-700
                      transition-colors duration-200
                      hover:border-blue-200 hover:bg-blue-50
                      hover:text-blue-700
                      focus:outline-none focus-visible:ring-4
                      focus-visible:ring-blue-200
                      sm:text-base
                    "
                    aria-label={`${location.name}をGoogleマップで開く`}
                  >
                    <i
                      className="ri-navigation-line mr-2 text-lg"
                      aria-hidden="true"
                    />
                    Googleマップで見る
                    <i
                      className="ri-external-link-line ml-2"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* 対応エリア */}
          <div className="mt-10 rounded-2xl bg-blue-50 p-6 md:mt-14 md:p-8 lg:p-10">
            <h3 className="mb-7 text-center text-xl font-bold text-blue-950 md:mb-9 md:text-2xl">
              対応エリア
            </h3>

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-4 md:gap-8">
              {/* 静岡市全域 */}
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm md:mb-4 md:h-16 md:w-16">
                  <i
                    className="ri-roadster-line text-2xl text-blue-600"
                    aria-hidden="true"
                  />
                </div>

                <h4 className="mb-1 text-base font-bold text-blue-950 md:mb-2 md:text-lg">
                  静岡市全域
                </h4>

                <p className="text-xs leading-relaxed text-blue-800 md:text-sm">
                  葵区・駿河区・清水区
                </p>
              </div>

              {/* 近隣地域 */}
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm md:mb-4 md:h-16 md:w-16">
                  <i
                    className="ri-map-line text-2xl text-blue-600"
                    aria-hidden="true"
                  />
                </div>

                <h4 className="mb-1 text-base font-bold text-blue-950 md:mb-2 md:text-lg">
                  近隣地域
                </h4>

                <p className="text-xs leading-relaxed text-blue-800 md:text-sm">
                  焼津市・藤枝市・富士市
                  <br className="hidden lg:block" />
                  ・富士宮市など
                </p>
              </div>

              {/* 対応時間 */}
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm md:mb-4 md:h-16 md:w-16">
                  <i
                    className="ri-time-line text-2xl text-blue-600"
                    aria-hidden="true"
                  />
                </div>

                <h4 className="mb-1 text-base font-bold text-blue-950 md:mb-2 md:text-lg">
                  対応時間
                </h4>

                <p className="text-xs leading-relaxed text-blue-800 md:text-sm">
                  24時間365日対応
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
