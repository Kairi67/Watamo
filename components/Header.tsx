"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src="https://static.readdy.ai/image/8864c8d66d2b0793a2420b2c6e368183/542c11bc718313eebca2b950be62d923.png"
                alt="ワタモ カーレスキュー静清 ロゴ"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-600 leading-tight">
                有限会社 ワタモ
              </h1>
              <p className="text-m font-semibold text-gray-700 leading-tight">
                カーレスキュー静清
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              サービス内容
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              会社概要
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              お問い合わせ
            </Link>
            <div className="bg-red-600 text-white px-6 py-2 rounded-full font-bold cursor-pointer whitespace-nowrap hover:bg-red-700 transition-colors">
              <i className="ri-phone-line mr-2"></i>
              054-345-2838
            </div>
          </nav>

          <button
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="#services"
                className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer"
              >
                サービス内容
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer"
              >
                会社概要
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer"
              >
                お問い合わせ
              </Link>
              <div className="bg-red-600 text-white px-6 py-2 rounded-full font-bold cursor-pointer whitespace-nowrap hover:bg-red-700 transition-colors text-center">
                054-345-2838
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
