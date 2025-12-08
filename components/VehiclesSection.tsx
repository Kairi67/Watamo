"use client";

export default function VehiclesSection() {
  const vehicles = [
    {
      name: "レッカー車（大型）",
      type: "大型車両対応",
      capacity: "積載能力 10t",
      features: ["高速道路対応", "大型車両牽引", "24時間出動"],
      image: "/vehicle01.png",
    },
    {
      name: "レッカー車（中型）",
      type: "中型車両対応",
      capacity: "積載能力 5t",
      features: ["市街地対応", "狭い道路OK", "スピード対応"],
      image: "/vehicle02.png",
    },
    {
      name: "レッカー車（小型）",
      type: "普通車・軽自動車対応",
      capacity: "積載能力 2t",
      features: ["迅速到着", "狭い道路OK", "機動力抜群"],
      image: "/about02.jpg",
    },
    {
      name: "クレーン車",
      type: "特殊作業対応",
      capacity: "吊上げ能力 〇〇トン",
      features: ["落輪救出", "重機対応", "特殊作業"],
      image: "/vehicle04.jpg",
    },
    {
      name: "車載専用車",
      type: "搬送用",
      capacity: "5台積み搬送可",
      features: ["泥濘地対応", "スタック救出", "悪路対応"],
      image: "/vehicle05.png",
    },
    {
      name: "サービスカー",
      type: "総合サービス対応",
      capacity: "多目的作業車",
      features: ["出張整備", "応急処置", "オールマイティ"],
      image: "/vehicle06.jpg",
    },
  ];

  return (
    <section id="vehicles" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* ヘッダー: サイズ調整 */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            保有車両一覧
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
            あらゆるトラブルに対応できる専用車両を20台以上完備。用途に応じて最適な車両で駆けつけます。
          </p>
        </div>

        {/* 車両カードグリッド: スマホは1列、PCは3列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* 画像エリア: スマホでは高さを抑える (h-40) */}
              <div
                className="h-40 md:h-56 bg-cover bg-center bg-gray-200"
                style={{ backgroundImage: `url(${vehicle.image})` }}
                role="img"
                aria-label={`${vehicle.name}の画像`}
              ></div>

              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-2">
                  {/* 車両名: 文字サイズ調整 */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight pr-4">
                    {vehicle.name}
                  </h3>
                  {/* アイコンサークル: サイズ調整 */}
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-truck-line text-red-600 text-lg md:text-xl"></i>
                  </div>
                </div>

                {/* 車両タイプ */}
                <div className="mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs md:text-sm font-medium px-2 md:px-3 py-0.5 md:py-1 rounded-full whitespace-nowrap">
                    {vehicle.type}
                  </span>
                </div>

                {/* 積載量/能力 */}
                <div className="mb-2">
                  <p className="text-gray-600 font-medium text-sm md:text-base">
                    {vehicle.capacity}
                  </p>
                </div>

                {/* 特徴リスト (コメントアウトされていますが、もし使うならレスポンシブ対応) */}
                {/* <div className="space-y-1 mt-3">
                  {vehicle.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-xs md:text-sm">{feature}</span>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* 拠点情報エリア */}
        <div className="mt-10 md:mt-16 text-center">
          <div className="bg-blue-50 p-6 md:p-8 rounded-2xl max-w-2xl mx-auto">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <i className="ri-shield-check-line text-white text-2xl md:text-3xl"></i>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">
              全車両完備
            </h3>
            <p className="text-sm md:text-base text-blue-800 mb-4 md:mb-6">
              静岡市内2拠点に計20台の専用車両を配備。最短時間でお客様のもとへ駆けつけます
            </p>
            {/* 拠点情報: スマホでも読みやすいサイズに調整 */}
            <div className="grid grid-cols-2 gap-4 mt-4 md:mt-6">
              <div className="text-center">
                <div className="text-lg md:text-2xl font-bold text-blue-600">
                  清水インター店
                </div>
                <div className="text-xs md:text-sm text-blue-700">
                  東名清水ICすぐ横
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-2xl font-bold text-blue-600">
                  静岡インター店
                </div>
                <div className="text-xs md:text-sm text-blue-700">
                  東名静岡ICから車で2分
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// "use client";

// export default function VehiclesSection() {
//   const vehicles = [
//     {
//       name: "レッカー車（大型）",
//       type: "大型車両対応",
//       capacity: "〇〇作業",
//       features: ["高速道路対応", "大型車両牽引", "24時間出動"],
//       image: "/vehicle01.png",
//     },
//     {
//       name: "レッカー車（中型）",
//       type: "中型車両対応",
//       capacity: "〇〇作業",
//       features: ["市街地対応", "狭い道路OK", "スピード対応"],
//       image: "/vehicle02.png",
//     },
//     {
//       name: "レッカー車（小型）",
//       type: "普通車・軽自動車対応",
//       capacity: "〇〇作業",
//       features: ["迅速到着", "狭い道路OK", "機動力抜群"],
//       image: "/about02.jpg",
//     },
//     {
//       name: "クレーン車",
//       type: "特殊作業対応",
//       capacity: "吊上げ能力〇〇トン",
//       features: ["落輪救出", "重機対応", "特殊作業"],
//       image: "/vehicle04.jpg",
//     },
//     {
//       name: "車載専用車",
//       type: "搬送用",
//       capacity: "5台積み搬送可",
//       features: ["泥濘地対応", "スタック救出", "悪路対応"],
//       image: "/vehicle05.png",
//     },
//     {
//       name: "サービスカー",
//       type: "総合サービス対応",
//       capacity: "多目的作業車",
//       features: ["出張整備", "応急処置", "オールマイティ"],
//       image: "/vehicle06.jpg",
//     },
//   ];

//   return (
//     <section id="vehicles" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-2">
//             保有車両一覧
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             あらゆるトラブルに対応できる専用車両を20台以上完備。用途に応じて最適な車両で駆けつけます。
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {vehicles.map((vehicle, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <div
//                 className="h-56 bg-cover bg-center bg-gray-200"
//                 style={{ backgroundImage: `url(${vehicle.image})` }}
//               ></div>

//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="text-xl font-bold text-gray-900">
//                     {vehicle.name}
//                   </h3>
//                   <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
//                     <i className="ri-truck-line text-red-600 text-xl"></i>
//                   </div>
//                 </div>

//                 <div className="mb-2">
//                   <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
//                     {vehicle.type}
//                   </span>
//                 </div>

//                 <div className="mb-2">
//                   <p className="text-gray-600 font-medium">
//                     {vehicle.capacity}
//                   </p>
//                 </div>

//                 {/* <div className="space-y-2">
//                   {vehicle.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-center">
//                       <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
//                       <span className="text-gray-700 text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div> */}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <div className="bg-blue-50 p-8 rounded-2xl max-w-2xl mx-auto">
//             <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
//               <i className="ri-shield-check-line text-white text-3xl"></i>
//             </div>
//             <h3 className="text-2xl font-bold text-blue-900 mb-4">
//               全車両完備
//             </h3>
//             <p className="text-blue-800 mb-4">
//               静岡市内2拠点に計20台の専用車両を配備。最短時間でお客様のもとへ駆けつけます
//             </p>
//             <div className="grid grid-cols-2 gap-4 mt-6">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-blue-600">
//                   清水インター店
//                 </div>
//                 <div className="text-blue-700 text-sm">東名清水ICすぐ横</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-blue-600">
//                   静岡インター店
//                 </div>
//                 <div className="text-blue-700 text-sm">
//                   東名静岡ICから車で2分
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
