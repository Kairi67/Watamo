// "use client";

// import { useState } from "react";

// export default function PricingSection() {
//   const [activeTab, setActiveTab] = useState("accident");

//   const accidentPricing = [
//     {
//       category: "普通車種",
//       basicFee: "18,000円",
//       dispatchFee: "18,000円",
//       transportFee: "300円/km〜",
//       workFee: "800円/km",
//     },
//     {
//       category: "中型車種",
//       basicFee: "30,000円",
//       dispatchFee: "30,000円",
//       transportFee: "400円/km〜",
//       workFee: "1,800円~/km",
//     },
//     {
//       category: "大型車種",
//       basicFee: "40,000円",
//       dispatchFee: "50,000円",
//       transportFee: "400円/km〜",
//       workFee: "2,000円~/km",
//     },
//   ];

//   const workPricing = [
//     { service: "バッテリー上がり", price: "4,000円〜" },
//     { service: "スペアタイヤ交換", price: "3,000円〜" },
//     { service: "ウインチ積載", price: "5,000円〜" },
//     { service: "クレーン作業・脱輪", price: "5,000円〜" },
//     { service: "横転・転覆", price: "15,000円〜" },
//     { service: "タイヤドーリー使用", price: "5,000円〜" },
//   ];

//   const vehicleCategories = [
//     {
//       category: "普通車種",
//       examples: "二輪車、軽自動車、普通乗用車、小型貨物",
//     },
//     {
//       category: "中型車種",
//       examples: "最大積載量2t~5t未満の普通貨物車、マイクロバス（~29人）",
//     },
//     {
//       category: "大型車種",
//       examples: "最大積載量5t以上大型貨物車、大型バス（30人~）",
//     },
//   ];

//   const notes = [
//     "料金は全て税込み価格です",
//     "高速道路での作業は別途高速料金・通行料が発生します",
//     "作業内容により追加料金が発生する場合があります",
//     "事前にお見積もりをご提示いたします",
//     "JAF会員様、各種保険適用の場合は料金が変動します",
//   ];

//   return (
//     <section id="pricing" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">料金表</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             明確な料金体系で安心してご利用いただけます。事前見積もりも無料です
//           </p>
//         </div>

//         {/* タブ切り替え */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-gray-100 p-1 rounded-full">
//             <button
//               onClick={() => setActiveTab("accident")}
//               className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
//                 activeTab === "accident"
//                   ? "bg-red-600 text-white shadow-md"
//                   : "text-gray-600 hover:text-gray-900"
//               }`}
//             >
//               <i className="ri-car-line mr-2"></i>
//               事故車・故障車料金表
//             </button>
//             <button
//               onClick={() => setActiveTab("work")}
//               className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
//                 activeTab === "work"
//                   ? "bg-red-600 text-white shadow-md"
//                   : "text-gray-600 hover:text-gray-900"
//               }`}
//             >
//               <i className="ri-tools-line mr-2"></i>
//               作業料金表
//             </button>
//           </div>
//         </div>

//         {/* 事故車・故障車料金表 */}
//         {activeTab === "accident" && (
//           <div className="mb-16">
//             <div className="bg-red-50 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-red-900 mb-8 text-center">
//                 事故車・故障車料金表
//               </h3>
//               <div className="overflow-x-auto">
//                 <table className="w-full bg-white rounded-xl shadow-lg">
//                   <thead>
//                     <tr className="bg-red-600 text-white">
//                       <th className="px-6 py-4 text-left font-bold">
//                         車種区分
//                       </th>
//                       <th className="px-6 py-4 text-center font-bold">
//                         基本料金 <br />
//                         8:00~18:00
//                       </th>
//                       <th className="px-6 py-4 text-center font-bold">
//                         基本料金
//                         <br />
//                         18:00~8:00
//                       </th>
//                       <th className="px-6 py-4 text-center font-bold">
//                         回送料金
//                       </th>
//                       <th className="px-6 py-4 text-center font-bold">
//                         作業料金
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {accidentPricing.map((item, index) => (
//                       <tr
//                         key={index}
//                         className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
//                       >
//                         <td className="px-6 py-4 font-bold text-gray-900">
//                           {item.category}
//                         </td>
//                         <td className="px-6 py-4 text-center text-red-600 font-bold">
//                           {item.basicFee}
//                         </td>
//                         <td className="px-6 py-4 text-center text-red-600 font-bold">
//                           {item.dispatchFee}
//                         </td>
//                         <td className="px-6 py-4 text-center text-red-600 font-bold">
//                           {item.transportFee}
//                         </td>
//                         <td className="px-6 py-4 text-center text-red-600 font-bold">
//                           {item.workFee}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* 作業料金表 */}
//         {activeTab === "work" && (
//           <div className="mb-16">
//             <div className="bg-blue-50 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">
//                 作業料金表
//               </h3>
//               <div className="grid md:grid-cols-2 gap-6">
//                 {workPricing.map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-white rounded-xl p-6 shadow-lg"
//                   >
//                     <div className="flex justify-between items-center">
//                       <div className="flex items-center">
//                         <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
//                           <i className="ri-tools-line text-blue-600 text-xl"></i>
//                         </div>
//                         <span className="font-bold text-gray-900">
//                           {item.service}
//                         </span>
//                       </div>
//                       <span className="text-2xl font-bold text-blue-600">
//                         {item.price}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* 対象車両区分 */}
//         <div className="mb-16">
//           <div className="bg-green-50 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-green-900 mb-8 text-center">
//               対象車両区分
//             </h3>
//             <div className="grid md:grid-cols-3 gap-6">
//               {vehicleCategories.map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-xl p-6 shadow-lg text-center"
//                 >
//                   <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <i className="ri-car-line text-green-600 text-2xl"></i>
//                   </div>
//                   <h4 className="text-xl font-bold text-gray-900 mb-3">
//                     {item.category}
//                   </h4>
//                   <p className="text-gray-600 leading-relaxed">
//                     {item.examples}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* 注意事項 */}
//         <div className="mb-16">
//           <div className="bg-yellow-50 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-yellow-900 mb-8 text-center">
//               注意事項
//             </h3>
//             <div className="bg-white rounded-xl p-6 shadow-lg">
//               <div className="space-y-4">
//                 {notes.map((note, index) => (
//                   <div key={index} className="flex items-start">
//                     <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
//                       <i className="ri-information-line text-yellow-600 text-sm"></i>
//                     </div>
//                     <span className="text-gray-700 leading-relaxed">
//                       {note}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* お見積もりCTA */}
//         <div className="text-center">
//           <div className="bg-red-50 p-8 rounded-2xl max-w-2xl mx-auto">
//             <h3 className="text-2xl font-bold text-red-900 mb-4">
//               無料お見積もり
//             </h3>
//             <p className="text-red-800 mb-6">
//               作業前に必ず料金をご提示いたします。お気軽にお問い合わせください
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <div className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-xl cursor-pointer whitespace-nowrap hover:bg-red-700 transition-colors inline-flex items-center justify-center">
//                 <i className="ri-phone-line mr-3 text-2xl"></i>
//                 054-345-2838
//               </div>
//               <div className="bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-full font-bold text-xl cursor-pointer whitespace-nowrap hover:bg-red-50 transition-colors inline-flex items-center justify-center">
//                 <i className="ri-mail-line mr-3 text-2xl"></i>
//                 rescue@watamo.com
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("accident");

  const accidentPricing = [
    {
      category: "普通車種",
      basicFee: "18,000円",
      dispatchFee: "18,000円",
      transportFee: "300円/km〜",
      workFee: "800円/km",
    },
    {
      category: "中型車種",
      basicFee: "30,000円",
      dispatchFee: "30,000円",
      transportFee: "400円/km〜",
      workFee: "1,800円~/km",
    },
    {
      category: "大型車種",
      basicFee: "40,000円",
      dispatchFee: "50,000円",
      transportFee: "400円/km〜",
      workFee: "2,000円~/km",
    },
  ];

  const workPricing = [
    { service: "バッテリー上がり", price: "4,000円〜" },
    { service: "スペアタイヤ交換", price: "3,000円〜" },
    { service: "ウインチ積載", price: "5,000円〜" },
    { service: "クレーン作業・脱輪", price: "5,000円〜" },
    { service: "横転・転覆", price: "15,000円〜" },
    { service: "タイヤドーリー使用", price: "5,000円〜" },
  ];

  const vehicleCategories = [
    {
      category: "普通車種",
      examples: "二輪車、軽自動車、普通乗用車、小型貨物",
    },
    {
      category: "中型車種",
      examples: "最大積載量2t~5t未満の普通貨物車、マイクロバス（~29人）",
    },
    {
      category: "大型車種",
      examples: "最大積載量5t以上大型貨物車、大型バス（30人~）",
    },
  ];

  const notes = [
    "料金は全て税込み価格です",
    "高速道路での作業は別途高速料金・通行料が発生します",
    "作業内容により追加料金が発生する場合があります",
    "事前にお見積もりをご提示いたします",
    "JAF会員様、各種保険適用の場合は料金が変動します",
  ];

  return (
    <section id="pricing" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー: サイズ調整 */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            料金表
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
            明確な料金体系で安心してご利用いただけます。事前見積もりも無料です
          </p>
        </div>

        {/* タブ切り替え: スマホでのタッチ領域を考慮 */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div className="bg-gray-100 p-1 rounded-full flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("accident")}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base w-full ${
                activeTab === "accident"
                  ? "bg-red-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <i className="ri-car-line mr-2"></i>
              事故車・故障車
            </button>
            <button
              onClick={() => setActiveTab("work")}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base w-full ${
                activeTab === "work"
                  ? "bg-red-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <i className="ri-tools-line mr-2"></i>
              作業料金
            </button>
          </div>
        </div>

        {/* 事故車・故障車料金表 */}
        {activeTab === "accident" && (
          <div className="mb-10 md:mb-16">
            <div className="bg-red-50 rounded-2xl p-4 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-red-900 mb-6 md:mb-8 text-center">
                事故車・故障車料金表
              </h3>
              {/* テーブルを横スクロール可能にする */}
              <div className="overflow-x-auto shadow-xl rounded-xl">
                <table className="w-full min-w-[700px] bg-white">
                  <thead>
                    <tr className="bg-red-600 text-white text-sm">
                      <th className="px-3 py-2 md:px-6 md:py-4 text-left font-bold w-1/5">
                        車種区分
                      </th>
                      <th className="px-3 py-2 md:px-6 md:py-4 text-center font-bold w-1/5">
                        基本料金 (日中)
                      </th>
                      <th className="px-3 py-2 md:px-6 md:py-4 text-center font-bold w-1/5">
                        基本料金 (夜間)
                      </th>
                      <th className="px-3 py-2 md:px-6 md:py-4 text-center font-bold w-1/5">
                        回送料金
                      </th>
                      <th className="px-3 py-2 md:px-6 md:py-4 text-center font-bold w-1/5">
                        作業料金
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {accidentPricing.map((item, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="px-3 py-3 md:px-6 md:py-4 font-bold text-gray-900 text-sm md:text-base whitespace-nowrap">
                          {item.category}
                        </td>
                        <td className="px-3 py-3 md:px-6 md:py-4 text-center text-red-600 font-bold text-sm md:text-base whitespace-nowrap">
                          {item.basicFee}
                        </td>
                        <td className="px-3 py-3 md:px-6 md:py-4 text-center text-red-600 font-bold text-sm md:text-base whitespace-nowrap">
                          {item.dispatchFee}
                        </td>
                        <td className="px-3 py-3 md:px-6 md:py-4 text-center text-red-600 font-bold text-sm md:text-base whitespace-nowrap">
                          {item.transportFee}
                        </td>
                        <td className="px-3 py-3 md:px-6 md:py-4 text-center text-red-600 font-bold text-sm md:text-base whitespace-nowrap">
                          {item.workFee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 作業料金表 */}
        {activeTab === "work" && (
          <div className="mb-10 md:mb-16">
            <div className="bg-blue-50 rounded-2xl p-4 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 md:mb-8 text-center">
                作業料金表
              </h3>
              {/* グリッド: スマホでは1列、PCでは2列 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {workPricing.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 md:p-6 shadow-lg"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                          <i className="ri-tools-line text-blue-600 text-lg md:text-xl"></i>
                        </div>
                        <span className="font-bold text-gray-900 text-base md:text-lg">
                          {item.service}
                        </span>
                      </div>
                      <span className="text-xl md:text-2xl font-bold text-blue-600 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 対象車両区分 */}
        <div className="mb-10 md:mb-16">
          <div className="bg-green-50 rounded-2xl p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-green-900 mb-6 md:mb-8 text-center">
              対象車両区分
            </h3>
            {/* グリッド: スマホでは1列、PCでは3列 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {vehicleCategories.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 md:p-6 shadow-lg text-center"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <i className="ri-car-line text-green-600 text-xl md:text-2xl"></i>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                    {item.category}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.examples}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 注意事項 */}
        <div className="mb-10 md:mb-16">
          <div className="bg-yellow-50 rounded-2xl p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-900 mb-6 md:mb-8 text-center">
              注意事項
            </h3>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
              <div className="space-y-3 md:space-y-4">
                {notes.map((note, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <i className="ri-information-line text-yellow-600 text-xs md:text-sm"></i>
                    </div>
                    <span className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* お見積もりCTA */}
        <div className="text-center">
          <div className="bg-red-50 p-6 md:p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-red-900 mb-3 md:mb-4">
              無料お見積もり
            </h3>
            <p className="text-sm md:text-base text-red-800 mb-4 md:mb-6">
              作業前に必ず料金をご提示いたします。お気軽にお問い合わせください
            </p>
            {/* CTAボタン: スマホで縦並び、横幅いっぱいに広げる */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="tel:0543452838"
                className="w-full bg-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-xl cursor-pointer hover:bg-red-700 transition-colors inline-flex items-center justify-center shadow-lg"
              >
                <i className="ri-phone-line mr-2 md:mr-3 text-xl md:text-2xl"></i>
                054-345-2838
              </a>
              <a
                href="mailto:rescue@watamo.com"
                className="w-full bg-white text-red-600 border-2 border-red-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-xl cursor-pointer hover:bg-red-50 transition-colors inline-flex items-center justify-center"
              >
                <i className="ri-mail-line mr-2 md:mr-3 text-xl md:text-2xl"></i>
                メールでお問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
