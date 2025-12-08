// "use client";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-16">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-4 gap-8">
//           <div className="col-span-2">
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="w-16 h-16 flex items-center justify-center">
//                 <img
//                   src="https://static.readdy.ai/image/8864c8d66d2b0793a2420b2c6e368183/542c11bc718313eebca2b950be62d923.png"
//                   alt="ワタモ カーレスキュー静清 ロゴ"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <div>
//                 <h3 className="font-pacifico text-white-500 font-bold text-2xl">
//                   有限会社ワタモ
//                 </h3>
//                 <p className="text-white-400">カーレスキュー静清</p>
//               </div>
//             </div>
//             <p className="text-white-400 leading-relaxed mb-6">
//               有限会社ワタモ
//               カーレスキュー静清は、静岡で24時間365日お客様の車のトラブルに対応するロードサービス会社です。年間12,000件の出動実績で、確かな技術力と迅速な対応をお約束します。
//             </p>
//             <div className="flex space-x-4">
//               <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
//                 <i className="ri-phone-line"></i>
//               </div>
//               <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
//                 <i className="ri-mail-line"></i>
//               </div>
//               <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
//                 <i className="ri-map-pin-line"></i>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-lg font-bold mb-6">サービス内容</h4>
//             <ul className="space-y-3 text-white-400">
//               <li>バッテリー上がり</li>
//               <li> パンク時のスペア交換</li>
//               <li> キー閉じ込み対応</li>
//               <li> 落輪・スタック救出</li>
//               <li> 車両搬送・牽引</li>
//               <li> 出張整備</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-bold mb-6">会社情報</h4>
//             <div className="space-y-4 text-gray-400">
//               <div>
//                 <p className="font-bold text-white mb-1">緊急ダイヤル</p>
//                 <p className="text-white">054-345-2838</p>
//               </div>
//               <div>
//                 <p className="font-bold text-white mb-1">お問い合わせ</p>
//                 <p className="text-white">rescue@watamo.com</p>
//               </div>
//               <div></div>
//               <div>
//                 <p className="font-bold text-white mb-1">清水インター店</p>
//                 <p className="text-sm text-white">静岡市清水区八坂北1-1-53-1</p>
//               </div>
//               <div>
//                 <p className="font-bold text-white mb-1">静岡インター店</p>
//                 <p className="text-sm text-white">静岡市駿河区中島1131-1</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm">
//               © 2024 有限会社ワタモ カーレスキュー静清. All rights reserved.
//             </p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <span className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">
//                 プライバシーポリシー
//               </span>
//               <span className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">
//                 利用規約
//               </span>
//               <span className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">
//                 サイトマップ
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* メイングリッド: スマホでは縦積み、PCで4列 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* 会社情報エリア (スマホで縦幅を大きく使うため、PCでは2カラム幅) */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
                <img
                  src="https://static.readdy.ai/image/8864c8d66d2b0793a2420b2c6e368183/542c11bc718313eebca2b950be62d923.png"
                  alt="ワタモ カーレスキュー静清 ロゴ"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-pacifico text-white font-bold text-xl md:text-2xl">
                  有限会社ワタモ
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  カーレスキュー静清
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              有限会社ワタモ
              カーレスキュー静清は、静岡で24時間365日お客様の車のトラブルに対応するロードサービス会社です。年間12,000件の出動実績で、確かな技術力と迅速な対応をお約束します。
            </p>

            {/* ソーシャル/連絡先アイコン (リンク化) */}
            <div className="flex space-x-3">
              <a
                href="tel:0543452838"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors"
                aria-label="電話をかける"
              >
                <i className="ri-phone-line"></i>
              </a>
              <a
                href="mailto:rescue@watamo.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors"
                aria-label="メールを送信"
              >
                <i className="ri-mail-line"></i>
              </a>
              <a
                href="https://maps.app.goo.gl/YourMapLinkHere" // 適切な地図リンクを設定
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors"
                aria-label="地図を見る"
              >
                <i className="ri-map-pin-line"></i>
              </a>
            </div>
          </div>

          {/* サービス内容 */}
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6">
              サービス内容
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  バッテリー上がり
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  パンク時のスペア交換
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  キー閉じ込み対応
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  落輪・スタック救出
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  車両搬送・牽引
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  出張整備
                </a>
              </li>
            </ul>
          </div>

          {/* 会社情報 / 連絡先 */}
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6">
              会社情報
            </h4>
            <div className="space-y-3 text-gray-400 text-sm">
              {/* 緊急ダイヤル (リンク化) */}
              <div>
                <p className="font-bold text-white mb-1">緊急ダイヤル</p>
                <a
                  href="tel:0543452838"
                  className="text-white text-base hover:text-red-400 transition-colors"
                >
                  054-345-2838
                </a>
              </div>
              {/* お問い合わせ (リンク化) */}
              <div>
                <p className="font-bold text-white mb-1">お問い合わせ</p>
                <a
                  href="mailto:rescue@watamo.com"
                  className="text-white hover:text-red-400 transition-colors"
                >
                  rescue@watamo.com
                </a>
              </div>

              {/* 店舗情報 */}
              <div>
                <p className="font-bold text-white mb-1">清水インター店</p>
                <p className="text-gray-400 text-xs">
                  静岡市清水区八坂北1-1-53-1
                </p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">静岡インター店</p>
                <p className="text-gray-400 text-xs">静岡市駿河区中島1131-1</p>
              </div>
            </div>
          </div>
        </div>

        {/* コピーライト/二次ナビゲーション */}
        <div className="border-t border-gray-800 mt-10 pt-6 md:mt-12 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-gray-400 text-xs md:text-sm text-center">
              © 2024 有限会社ワタモ カーレスキュー静清. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-6">
              <a
                href="#"
                className="text-gray-400 text-xs md:text-sm hover:text-white cursor-pointer transition-colors"
              >
                プライバシーポリシー
              </a>
              <a
                href="#"
                className="text-gray-400 text-xs md:text-sm hover:text-white cursor-pointer transition-colors"
              >
                利用規約
              </a>
              <a
                href="#"
                className="text-gray-400 text-xs md:text-sm hover:text-white cursor-pointer transition-colors"
              >
                サイトマップ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
