"use client";

export default function StatsSection() {
  const stats = [
    { number: "12,000件", label: "年間出動件数", icon: "ri-car-line" },
    { number: "24時間", label: "対応", icon: "ri-time-line" },
    { number: "365日", label: "年中無休", icon: "ri-calendar-line" },
    { number: "20台", label: "レッカー・車載専用車", icon: "ri-truck-line" },
    { number: "20人", label: "現場隊員", icon: "ri-team-line" },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* ヘッダー部分: マージンと文字サイズを調整 */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            信頼の実績
          </h2>
          <p className="text-sm md:text-xl text-gray-600">
            数字で見るワタモカーレスキュー静清の実績
          </p>
        </div>

        {/* グリッド: スマホは gap-4, PCは gap-8 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              // 最後のアイテム（index 4）だけ、スマホ表示時(grid-cols-2の時)に中央配置のために2列分使う
              // md以上では通常の1列分に戻す
              className={`text-center bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-center ${
                index === stats.length - 1
                  ? "col-span-2 md:col-span-1 lg:col-span-1"
                  : ""
              }`}
            >
              {/* アイコンサークル: サイズ調整 */}
              <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <i
                  className={`${stat.icon} text-red-600 text-xl md:text-2xl`}
                ></i>
              </div>

              {/* 数字: スマホで改行しないよう whitespace-nowrap とサイズ調整 */}
              <div className="text-xl md:text-3xl font-bold text-red-600 mb-1 md:mb-2 whitespace-nowrap">
                {stat.number}
              </div>

              {/* ラベル: サイズ調整 */}
              <div className="text-xs md:text-base text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* TUV認証エリア */}
        <div className="mt-10 md:mt-16 text-center">
          <div className="bg-blue-50 p-6 md:p-8 rounded-2xl max-w-2xl mx-auto shadow-sm">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <i className="ri-award-line text-white text-2xl md:text-3xl"></i>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">
              TUV認証取得
            </h3>
            <p className="text-sm md:text-base text-blue-800 leading-relaxed">
              ロードサービスにおける最高位の認証を取得し、
              <br className="hidden md:block" />
              どのような車両トラブルへも対応できる体制を整えております
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
// "use client";

// export default function StatsSection() {
//   const stats = [
//     { number: "12,000件", label: "年間出動件数", icon: "ri-car-line" },
//     { number: "24時間", label: "対応", icon: "ri-time-line" },
//     { number: "365日", label: "年中無休", icon: "ri-calendar-line" },
//     { number: "20台", label: "レッカー・車載専用車", icon: "ri-truck-line" },
//     { number: "20人", label: "現場隊員", icon: "ri-team-line" },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">信頼の実績</h2>
//           <p className="text-xl text-gray-600">
//             数字で見るワタモカーレスキュー静清の実績
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <i className={`${stat.icon} text-red-600 text-2xl`}></i>
//               </div>
//               <div className="text-3xl font-bold text-red-600 mb-2">
//                 {stat.number}
//               </div>
//               <div className="text-gray-700 font-medium">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <div className="bg-blue-50 p-8 rounded-2xl max-w-2xl mx-auto">
//             <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
//               <i className="ri-award-line text-white text-3xl"></i>
//             </div>
//             <h3 className="text-2xl font-bold text-blue-900 mb-4">
//               TUV認証取得
//             </h3>
//             <p className="text-blue-800">
//               ロードサービスにおける最高位の認証を取得し、どのような車両トラブルへも対応できる体制を整えております
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
