"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigationItems = [
  {
    label: "サービス内容",
    href: "#services",
  },
  {
    label: "会社概要",
    href: "#about",
  },
  {
    label: "採用情報",
    href: "#recruit",
  },
  {
    label: "事業所案内",
    href: "#contact",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // スマホメニュー表示中は背景スクロールを防止
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* PC用トップインフォメーションバー */}
        <div className="hidden bg-slate-950 text-white lg:block">
          <div className="container mx-auto flex h-9 items-center justify-between px-4">
            <div className="flex items-center gap-5 text-xs text-slate-300">
              <p className="flex items-center gap-1.5">
                <i className="ri-time-line text-red-400" aria-hidden="true" />
                24時間365日対応
              </p>

              <p className="flex items-center gap-1.5">
                <i
                  className="ri-map-pin-line text-red-400"
                  aria-hidden="true"
                />
                静岡市・富士市を中心に迅速出動
              </p>

              <p className="flex items-center gap-1.5">
                <i
                  className="ri-shield-check-line text-red-400"
                  aria-hidden="true"
                />
                JAF指定工場・全保険会社対応
              </p>
            </div>

            <p className="text-xs font-bold tracking-wide text-slate-200">
              CAR RESCUE SEISHIN
            </p>
          </div>
        </div>

        {/* メインヘッダー */}
        <div className="border-b border-slate-200/80 bg-white/95 shadow-[0_4px_25px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          <div className="container mx-auto px-4">
            <div className="flex h-[72px] items-center justify-between lg:h-[86px]">
              {/* ロゴ・会社名 */}
              <Link
                href="/"
                onClick={handleLinkClick}
                className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
                aria-label="有限会社ワタモ カーレスキュー静清 トップページ"
              >
                <div
                  className="
                    flex h-12 w-12 flex-shrink-0 items-center justify-center
                    overflow-hidden rounded-xl bg-white p-1
                    ring-1 ring-slate-200
                    transition-all duration-300
                    group-hover:scale-105 group-hover:shadow-md
                    sm:h-14 sm:w-14
                    lg:h-16 lg:w-16
                  "
                >
                  <img
                    src="https://static.readdy.ai/image/8864c8d66d2b0793a2420b2c6e368183/542c11bc718313eebca2b950be62d923.png"
                    alt="有限会社ワタモ カーレスキュー静清"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <div className="mb-0.5 flex items-center gap-2">
                    <p className="truncate text-base font-bold leading-tight text-slate-950 sm:text-lg lg:text-xl">
                      有限会社ワタモ
                    </p>

                    <span className="hidden rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold tracking-wide text-red-600 ring-1 ring-red-100 sm:inline-flex">
                      24H
                    </span>
                  </div>

                  <p className="truncate text-xs font-bold tracking-wide text-slate-500 sm:text-sm">
                    カーレスキュー静清
                  </p>
                </div>
              </Link>

              {/* PCナビゲーション */}
              <nav
                className="hidden items-center gap-1 lg:flex"
                aria-label="メインナビゲーション"
              >
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="
                      group relative rounded-lg px-3 py-3
                      text-sm font-bold text-slate-700
                      transition-colors duration-200
                      hover:text-red-600
                      xl:px-4
                    "
                  >
                    {item.label}

                    <span
                      className="
                        absolute bottom-1 left-1/2 h-0.5 w-0
                        -translate-x-1/2 rounded-full bg-red-600
                        transition-all duration-300
                        group-hover:w-[calc(100%-24px)]
                      "
                      aria-hidden="true"
                    />
                  </Link>
                ))}

                {/* 電話CTA */}
                <a
                  href="tel:0543452838"
                  className="
                    ml-3 inline-flex items-center
                    rounded-full bg-red-600 px-5 py-3
                    text-sm font-bold text-white
                    shadow-[0_8px_20px_rgba(220,38,38,0.25)]
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:bg-red-700
                    hover:shadow-[0_12px_24px_rgba(220,38,38,0.32)]
                    focus:outline-none
                    focus-visible:ring-4
                    focus-visible:ring-red-200
                    xl:px-6
                  "
                  aria-label="054-345-2838へ電話する"
                >
                  <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                    <i className="ri-phone-fill" aria-hidden="true" />
                  </span>

                  <span>
                    <span className="block text-[10px] font-medium leading-none text-red-100">
                      緊急ダイヤル
                    </span>
                    <span className="mt-1 block leading-none">
                      054-345-2838
                    </span>
                  </span>
                </a>
              </nav>

              {/* スマホ操作エリア */}
              <div className="flex items-center gap-2 lg:hidden">
                {/* 電話ボタン */}
                <a
                  href="tel:0543452838"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full bg-red-600 text-xl text-white
                    shadow-md transition-colors
                    hover:bg-red-700
                    focus:outline-none
                    focus-visible:ring-4
                    focus-visible:ring-red-200
                  "
                  aria-label="054-345-2838へ電話する"
                >
                  <i className="ri-phone-fill" aria-hidden="true" />
                </a>

                {/* メニューボタン */}
                <button
                  type="button"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className={`
                    flex h-11 w-11 items-center justify-center
                    rounded-full border text-2xl
                    transition-all duration-200
                    focus:outline-none focus-visible:ring-4
                    focus-visible:ring-slate-200
                    ${
                      isMenuOpen
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                    }
                  `}
                  aria-label={
                    isMenuOpen ? "メニューを閉じる" : "メニューを開く"
                  }
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-navigation"
                >
                  <i
                    className={isMenuOpen ? "ri-close-line" : "ri-menu-3-line"}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* スマホ用背景オーバーレイ */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className={`
            fixed inset-x-0 bottom-0 top-[72px]
            bg-slate-950/45 backdrop-blur-[2px]
            transition-all duration-300
            lg:hidden
            ${
              isMenuOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }
          `}
          aria-label="メニューを閉じる"
          tabIndex={isMenuOpen ? 0 : -1}
        />

        {/* スマホ用メニュー */}
        <div
          id="mobile-navigation"
          className={`
            absolute left-0 right-0 top-full
            border-t border-slate-100
            bg-white shadow-2xl
            transition-all duration-300
            lg:hidden
            ${
              isMenuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-3 opacity-0"
            }
          `}
        >
          <div className="container mx-auto px-4 py-5">
            {/* モバイル向け案内 */}
            <div className="mb-4 grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-slate-50 p-3">
                <div className="mb-1 flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <i className="ri-time-line text-red-600" aria-hidden="true" />
                  24時間365日
                </div>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  深夜・早朝も対応
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-3">
                <div className="mb-1 flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <i
                    className="ri-map-pin-line text-red-600"
                    aria-hidden="true"
                  />
                  静岡県内
                </div>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  各拠点から迅速出動
                </p>
              </div>
            </div>

            {/* モバイルナビ */}
            <nav
              className="overflow-hidden rounded-2xl border border-slate-100"
              aria-label="スマートフォン用ナビゲーション"
            >
              {navigationItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`
                    group flex min-h-14 items-center justify-between
                    bg-white px-4 py-3
                    text-sm font-bold text-slate-800
                    transition-colors
                    hover:bg-red-50 hover:text-red-600
                    ${
                      index !== navigationItems.length - 1
                        ? "border-b border-slate-100"
                        : ""
                    }
                  `}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 group-hover:bg-red-100 group-hover:text-red-600">
                      <i
                        className={
                          index === 0
                            ? "ri-tools-line"
                            : index === 1
                              ? "ri-building-line"
                              : index === 2
                                ? "ri-user-star-line"
                                : "ri-map-pin-line"
                        }
                        aria-hidden="true"
                      />
                    </span>

                    {item.label}
                  </span>

                  <i
                    className="ri-arrow-right-s-line text-xl text-slate-400"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </nav>

            {/* モバイル電話CTA */}
            <a
              href="tel:0543452838"
              onClick={handleLinkClick}
              className="
                mt-4 flex w-full items-center justify-center
                rounded-2xl bg-red-600 px-5 py-4
                font-bold text-white
                shadow-[0_10px_25px_rgba(220,38,38,0.25)]
                transition-colors hover:bg-red-700
                focus:outline-none
                focus-visible:ring-4 focus-visible:ring-red-200
              "
              aria-label="054-345-2838へ電話する"
            >
              <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <i className="ri-phone-fill text-xl" aria-hidden="true" />
              </span>

              <span className="text-left">
                <span className="block text-xs font-medium text-red-100">
                  お車のトラブルはこちら
                </span>
                <span className="block text-lg leading-tight">
                  054-345-2838
                </span>
              </span>
            </a>

            <p className="mt-3 text-center text-[11px] text-slate-500">
              24時間365日、緊急出動に対応しています
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
