"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="https://static.readdy.ai/image/8864c8d66d2b0793a2420b2c6e368183/542c11bc718313eebca2b950be62d923.png"
                  alt="ワタモ カーレスキュー静清 ロゴ"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-pacifico text-white-500 font-bold text-2xl">
                  有限会社ワタモ
                </h3>
                <p className="text-white-400">カーレスキュー静清</p>
              </div>
            </div>
            <p className="text-white-400 leading-relaxed mb-6">
              有限会社ワタモ
              カーレスキュー静清は、静岡で24時間365日お客様の車のトラブルに対応するロードサービス会社です。年間12,000件の出動実績で、確かな技術力と迅速な対応をお約束します。
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
                <i className="ri-phone-line"></i>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
                <i className="ri-mail-line"></i>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
                <i className="ri-map-pin-line"></i>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">サービス内容</h4>
            <ul className="space-y-3 text-white-400">
              <li>バッテリー上がり</li>
              <li> パンク時のスペア交換</li>
              <li> キー閉じ込み対応</li>
              <li> 落輪・スタック救出</li>
              <li> 車両搬送・牽引</li>
              <li> 出張整備</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">会社情報</h4>
            <div className="space-y-4 text-gray-400">
              <div>
                <p className="font-bold text-white mb-1">緊急ダイヤル</p>
                <p className="text-white">054-345-2838</p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">お問い合わせ</p>
                <p className="text-white">rescue@watamo.com</p>
              </div>
              <div></div>
              <div>
                <p className="font-bold text-white mb-1">清水インター店</p>
                <p className="text-sm text-white">静岡市清水区八坂北1-1-53-1</p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">静岡インター店</p>
                <p className="text-sm text-white">静岡市駿河区中島1131-1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 有限会社ワタモ カーレスキュー静清. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">
                プライバシーポリシー
              </span>
              <span className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">
                利用規約
              </span>
              <span className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">
                サイトマップ
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
