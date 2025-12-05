"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">会社概要</h2>
          <p className="text-xl text-gray-600">
            有限会社ワタモ カーレスキュー静清について
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="h-96 bg-cover bg-center bg-gray-200 rounded-2xl shadow-lg"
              style={{ backgroundImage: `url("/about01.jpg")` }}
            ></div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                企業理念
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                「困ったに寄り添い、地域のインフラとなる」
                <br />
                365日24時間体制でお客様の車のトラブルに迅速に対応し、
                静岡の皆様の安全で快適なカーライフをサポートいたします。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-award-line text-blue-600 text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">高品質サービス</h4>
                <p className="text-gray-600 text-sm">
                  TUV認証取得による確かな技術力
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-time-line text-green-600 text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">迅速対応</h4>
                <p className="text-gray-600 text-sm">
                  24時間365日いつでも駆けつけます
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              会社データ
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-line text-blue-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">代表者名</h4>
                <p className="text-gray-600">渡邊 泰男</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-truck-line text-green-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  レッカー車・車載専用車数
                </h4>
                <p className="text-gray-600">20台</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-team-line text-purple-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  従業員数（アルバイト含）
                </h4>
                <p className="text-gray-600">23名</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-phone-line text-red-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">電話番号</h4>
                <p className="text-gray-600">054-345-2838</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-yellow-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">営業時間</h4>
                <p className="text-gray-600">年中無休／24時間営業</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-scan-line text-indigo-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">創業</h4>
                <p className="text-gray-600">1994年</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
