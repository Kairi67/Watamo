"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // リンクをクリックしたらメニューを閉じる関数
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* h-16 (スマホ) / md:h-20 (PC) で高さを切り替え */}
        <div className="flex items-center justify-between h-16 md:h-20 transition-all duration-300">
          {/* 左側：ロゴと社名 */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* ロゴサイズ調整: w-10/h-10 (スマホ) -> w-16/h-16 (PC) */}
            <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
              <img
                src="https://static.readdy.ai/image/8864c8d66d2b0793a2420b2c6e368183/542c11bc718313eebca2b950be62d923.png"
                alt="ワタモ カーレスキュー静清 ロゴ"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              {/* 文字サイズ調整: text-lg (スマホ) -> text-2xl (PC) */}
              <h1 className="text-lg md:text-2xl font-bold text-black-600 leading-tight whitespace-nowrap">
                有限会社ワタモ
              </h1>
              {/* 文字サイズ調整: text-xs (スマホ) -> text-base (PC) */}
              <p className="text-xs md:text-base font-semibold text-black-700 leading-tight">
                カーレスキュー静清
              </p>
            </div>
          </div>

          {/* PC用ナビゲーション (スマホでは非表示) */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              サービス内容
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              会社概要
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              お問い合わせ
            </Link>
            <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold cursor-pointer whitespace-nowrap hover:bg-blue-700 transition-colors flex items-center">
              <i className="ri-phone-line mr-2"></i>
              054-345-2838
            </div>
          </nav>

          {/* スマホ用ハンバーガーメニューボタン (PCでは非表示) */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            {/* メニューが開いているときは「✕」、閉じているときは「三」を表示するロジック（お好みで） */}
            {isMenuOpen ? (
              <i className="ri-close-line text-2xl"></i>
            ) : (
              <i className="ri-menu-line text-2xl"></i>
            )}
          </button>
        </div>

        {/* スマホ用ドロップダウンメニュー */}
        {isMenuOpen && (
          // absolute にしてヘッダーの上に被らないようにし、画面幅いっぱいに広げる
          <div className="md:hidden border-t bg-white absolute left-0 right-0 shadow-lg px-4 py-6 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4 text-center">
              <Link
                href="#services"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer py-2 block font-medium"
              >
                サービス内容
              </Link>
              <Link
                href="#about"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer py-2 block font-medium"
              >
                会社概要
              </Link>
              <Link
                href="#contact"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer py-2 block font-medium"
              >
                お問い合わせ
              </Link>

              {/* スマホ用電話ボタン：幅いっぱいにして押しやすく */}
              <a href="tel:0543452838" className="block w-full">
                <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold cursor-pointer hover:bg-blue-700 transition-colors text-center shadow-sm">
                  <i className="ri-phone-line mr-2"></i>
                  054-345-2838
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           <div className="flex items-center space-x-4">
//             <div className="w-16 h-16 flex items-center justify-center">
//               <img
//                 src="https://static.readdy.ai/image/8864c8d66d2b0793a2420b2c6e368183/542c11bc718313eebca2b950be62d923.png"
//                 alt="ワタモ カーレスキュー静清 ロゴ"
//                 className="w-full h-full object-contain"
//               />
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold text-gray-600 leading-tight">
//                 有限会社 ワタモ
//               </h1>
//               <p className="text-m font-semibold text-gray-700 leading-tight">
//                 カーレスキュー静清
//               </p>
//             </div>
//           </div>

//           <nav className="hidden md:flex items-center space-x-8">
//             <Link
//               href="#services"
//               className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
//             >
//               サービス内容
//             </Link>
//             <Link
//               href="#about"
//               className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
//             >
//               会社概要
//             </Link>
//             <Link
//               href="#contact"
//               className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
//             >
//               お問い合わせ
//             </Link>
//             <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold cursor-pointer whitespace-nowrap hover:bg-blue-700 transition-colors">
//               <i className="ri-phone-line mr-2"></i>
//               054-345-2838
//             </div>
//           </nav>

//           <button
//             className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <i className="ri-menu-line text-xl"></i>
//           </button>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden border-t bg-white py-4">
//             <div className="flex flex-col space-y-4">
//               <Link
//                 href="#services"
//                 className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
//               >
//                 サービス内容
//               </Link>
//               <Link
//                 href="#about"
//                 className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
//               >
//                 会社概要
//               </Link>
//               <Link
//                 href="#contact"
//                 className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
//               >
//                 お問い合わせ
//               </Link>
//               <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold cursor-pointer whitespace-nowrap hover:bg-blue-700 transition-colors text-center">
//                 054-345-2838
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }
