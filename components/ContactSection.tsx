"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* ヘッダー: サイズ調整 */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            事業所案内
          </h2>
          <p className="text-sm md:text-xl text-gray-600">
            緊急時は迷わずご連絡ください
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* 拠点情報グリッド: スマホは1列、PCは2列 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* 清水インター店 */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <i className="ri-map-pin-line text-blue-600 text-lg md:text-xl"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  清水インター店
                </h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <i className="ri-map-pin-2-line text-gray-500 mt-1 mr-3 text-sm md:text-base flex-shrink-0"></i>
                  <p className="text-gray-700 text-sm md:text-base">
                    静岡市清水区八坂北1-1-53-1
                  </p>
                </div>
                {/* 地図埋め込み: スマホで高さを抑える */}
                <div className="h-40 md:h-48 bg-gray-200 rounded-lg md:rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26134.426860945194!2d138.477443!3d35.036649!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a34766ccbd687%3A0xdc95a3d518bf979b!2z44Kr44O844Os44K544Kt44Ol44O86Z2Z5riFIOa4heawtOOCpOODs-OCv-ODvOW6lw!5e0!3m2!1sja!2sjp!4v1764826222027!5m2!1sja!2sjp" // 実際の地図URLに置き換えてください
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="清水インター店の地図"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* 静岡インター店 */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <i className="ri-map-pin-line text-green-600 text-lg md:text-xl"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  静岡インター店
                </h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <i className="ri-map-pin-2-line text-gray-500 mt-1 mr-3 text-sm md:text-base flex-shrink-0"></i>
                  <p className="text-gray-700 text-sm md:text-base">
                    静岡市駿河区中島1131-1
                  </p>
                </div>
                {/* 地図埋め込み: スマホで高さを抑える */}
                <div className="h-40 md:h-48 bg-gray-200 rounded-lg md:rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204.41799464250735!2d138.39708612483167!3d34.93936316991296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a499b1472d7b9%3A0x14ab99b6d02e3279!2z77yI5qCq77yJ5rih6L6644Oi44O844K_44O844K55ZWG5LyaIOmdmeWyoeOCpOODs-OCv-ODvOW6lw!5e0!3m2!1sja!2sjp!4v1764826432959!5m2!1sja!2sjp" // 実際の地図URLに置き換えてください
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="静岡インター店の地図"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* 対応エリア */}
          <div className="mt-10 md:mt-12 bg-blue-50 p-6 md:p-8 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 md:mb-8 text-center">
              対応エリア
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center">
              {/* 静岡市全域 */}
              <div>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <i className="ri-roadster-line text-blue-600 text-xl md:text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-1 md:mb-2 text-base md:text-lg">
                  静岡市全域
                </h4>
                <p className="text-blue-800 text-xs md:text-sm">
                  葵区・駿河区・清水区
                </p>
              </div>

              {/* 近隣地域 */}
              <div>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <i className="ri-map-line text-blue-600 text-xl md:text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-1 md:mb-2 text-base md:text-lg">
                  近隣地域
                </h4>
                <p className="text-blue-800 text-xs md:text-sm">
                  焼津市・藤枝市・富士市・富士宮市など
                </p>
              </div>

              {/* 対応時間 (スマホ2列表示で均等にするためにここで配置) */}
              <div>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <i className="ri-time-line text-blue-600 text-xl md:text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-1 md:mb-2 text-base md:text-lg">
                  対応時間
                </h4>
                <p className="text-blue-800 text-xs md:text-sm">
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

// "use client";

// export default function ContactSection() {
//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">事業所案内</h2>
//           <p className="text-xl text-gray-600">緊急時は迷わずご連絡ください</p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           {/* <div className="bg-red-50 p-8 rounded-2xl mb-12 text-center">
//             <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
//               <i className="ri-phone-line text-white text-3xl"></i>
//             </div>
//             <h3 className="text-3xl font-bold text-red-900 mb-4">
//               24時間緊急ダイヤル
//             </h3>
//             <div className="text-4xl font-bold text-red-600 mb-4">
//               054-345-2838
//             </div>
//             <p className="text-red-800 text-lg">
//               年中無休・24時間対応で駆けつけます
//             </p>
//           </div> */}

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-gray-50 p-8 rounded-2xl">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
//                   <i className="ri-map-pin-line text-blue-600 text-xl"></i>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">
//                   清水インター店
//                 </h3>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <i className="ri-map-pin-2-line text-gray-500 mt-1 mr-3"></i>
//                   <p className="text-gray-700">静岡市清水区八坂北1-1-53-1</p>
//                 </div>
//                 <div className="h-48 bg-gray-200 rounded-xl">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26134.426860945194!2d138.477443!3d35.036649!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a34766ccbd687%3A0xdc95a3d518bf979b!2z44Kr44O844Os44K544Kt44Ol44O86Z2Z5riFIOa4heawtOOCpOODs-OCv-ODvOW6lw!5e0!3m2!1sja!2sjp!4v1764826222027!5m2!1sja!2sjp"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0, borderRadius: "12px" }}
//                     allowFullScreen
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                   ></iframe>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-50 p-8 rounded-2xl">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
//                   <i className="ri-map-pin-line text-green-600 text-xl"></i>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">
//                   静岡インター店
//                 </h3>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <i className="ri-map-pin-2-line text-gray-500 mt-1 mr-3"></i>
//                   <p className="text-gray-700">静岡市駿河区中島1131-1</p>
//                 </div>
//                 <div className="h-48 bg-gray-200 rounded-xl">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204.41799464250735!2d138.39708612483167!3d34.93936316991296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a499b1472d7b9%3A0x14ab99b6d02e3279!2z77yI5qCq77yJ5rih6L6644Oi44O844K_44O844K55ZWG5LyaIOmdmeWyoeOCpOODs-OCv-ODvOW6lw!5e0!3m2!1sja!2sjp!4v1764826432959!5m2!1sja!2sjp"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0, borderRadius: "12px" }}
//                     allowFullScreen
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                   ></iframe>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 bg-blue-50 p-8 rounded-2xl">
//             <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
//               対応エリア
//             </h3>
//             <div className="grid md:grid-cols-3 gap-6 text-center">
//               <div>
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <i className="ri-roadster-line text-blue-600 text-2xl"></i>
//                 </div>
//                 <h4 className="font-bold text-blue-900 mb-2">静岡市全域</h4>
//                 <p className="text-blue-800 text-sm">葵区・駿河区・清水区</p>
//               </div>
//               <div>
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <i className="ri-map-line text-blue-600 text-2xl"></i>
//                 </div>
//                 <h4 className="font-bold text-blue-900 mb-2">近隣地域</h4>
//                 <p className="text-blue-800 text-sm">
//                   焼津市・藤枝市・富士市・富士宮市など
//                 </p>
//               </div>
//               <div>
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <i className="ri-time-line text-blue-600 text-2xl"></i>
//                 </div>
//                 <h4 className="font-bold text-blue-900 mb-2">対応時間</h4>
//                 <p className="text-blue-800 text-sm">24時間365日対応</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
