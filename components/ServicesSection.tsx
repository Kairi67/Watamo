"use client";

export default function ServicesSection() {
  const services = [
    {
      icon: "ri-battery-line",
      title: "バッテリー上がり",
      description:
        "エンジンがかからない時も迅速に対応。ジャンプスタートで即座に解決します。",
    },
    {
      icon: "ri-settings-line",
      title: "パンク時のスペア交換",
      description:
        "タイヤがパンクした際のスペアタイヤ交換を、安全かつ迅速に行います。",
    },
    {
      icon: "ri-arrow-up-line",
      title: "落輪・スタック",
      description:
        "側溝への落輪や、ぬかるみなどで動けなくなった車両を安全に救出します。",
    },
    {
      icon: "ri-truck-line",
      title: "車両の搬送・牽引",
      description:
        "故障車両の搬送や牽引を専用車両で安全に行います。各種車両に対応可能です。",
    },
    {
      icon: "ri-tools-line",
      title: "出張整備",
      description:
        "現地での応急処置や簡易整備を行い、お客様の大切な時間を守ります。",
    },
    {
      icon: "ri-key-line",
      title: "キー閉じ込み",
      description:
        "車内にキーを閉じ込めてしまった場合も、専用工具を使用して開錠します。",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-12 md:py-20"
    >
      {/* 背景装飾 */}
      <div
        className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-red-50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-gray-100 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4">
        {/* セクションヘッダー */}
        <div className="mb-10 text-center md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-bold tracking-wider text-red-600 md:text-sm">
            <i className="ri-customer-service-2-line" aria-hidden="true" />
            ROAD SERVICE
          </div>

          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl md:mb-4 md:text-4xl">
            サービス内容
          </h2>

          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-600 md:text-xl">
            JAF指定工場・全保険会社対応で、
            <br className="sm:hidden" />
            あらゆる車のトラブルに対応いたします。
          </p>
        </div>

        {/* サービスカード */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="
                group relative overflow-hidden rounded-2xl
                border border-gray-100 bg-white p-6
                shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-red-100
                hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]
                md:p-8
              "
            >
              {/* ホバー時の上部アクセント */}
              <div
                className="
                  absolute left-0 top-0 h-1 w-full
                  origin-left scale-x-0 bg-red-600
                  transition-transform duration-300
                  group-hover:scale-x-100
                "
                aria-hidden="true"
              />

              {/* アイコン */}
              <div
                className="
                  mb-5 flex h-20 w-20 items-center justify-center
                  rounded-2xl bg-red-50
                  ring-1 ring-red-100
                  transition-all duration-300
                  group-hover:scale-105
                  group-hover:bg-red-600
                  group-hover:shadow-lg
                  md:h-24 md:w-24
                "
              >
                <i
                  className={`
                    ${service.icon}
                    text-4xl text-red-600
                    transition-colors duration-300
                    group-hover:text-white
                    md:text-5xl
                  `}
                  aria-hidden="true"
                />
              </div>

              {/* タイトル */}
              <h3 className="mb-3 text-lg font-bold text-gray-900 md:text-xl">
                {service.title}
              </h3>

              {/* 説明 */}
              <p className="text-sm leading-7 text-gray-600 md:text-base">
                {service.description}
              </p>

              {/* カード下部の装飾 */}
              {/* <div className="mt-6 flex items-center gap-2 text-xs font-bold text-red-600 md:text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-50">
                  <i className="ri-check-line" aria-hidden="true" />
                </span>
                24時間365日対応
              </div> */}

              {/* 右下の薄いアイコン装飾 */}
              <i
                className={`
                  ${service.icon}
                  pointer-events-none absolute -bottom-5 -right-3
                  text-8xl text-gray-900/[0.025]
                  transition-all duration-300
                  group-hover:-translate-x-1
                  group-hover:-translate-y-1
                  group-hover:text-red-600/[0.05]
                `}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        {/* 緊急時CTA */}
        <div className="mt-10 text-center md:mt-16">
          <div
            className="
              relative mx-auto max-w-3xl overflow-hidden
              rounded-2xl bg-red-50 p-6
              ring-1 ring-red-100
              md:rounded-3xl md:p-10
            "
          >
            <div
              className="
                pointer-events-none absolute -right-10 -top-10
                h-40 w-40 rounded-full bg-red-100/70
              "
              aria-hidden="true"
            />

            <div className="relative">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-lg md:h-16 md:w-16">
                <i
                  className="ri-phone-line text-2xl text-white md:text-3xl"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mb-3 text-xl font-bold text-red-950 md:text-2xl">
                緊急時はすぐにお電話ください
              </h3>

              <p className="mb-5 text-sm text-red-800 md:mb-6 md:text-base">
                24時間365日対応。出動料金のお見積もりも無料です。
              </p>

              <a
                href="tel:0543452838"
                aria-label="054-345-2838に電話する"
                className="
                  inline-flex w-full items-center justify-center
                  rounded-full bg-red-600 px-7 py-4
                  text-lg font-bold text-white
                  shadow-lg transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-red-700
                  hover:shadow-xl
                  focus:outline-none
                  focus-visible:ring-4
                  focus-visible:ring-red-300
                  sm:w-auto md:px-10 md:text-xl
                "
              >
                <i
                  className="ri-phone-fill mr-3 text-xl md:text-2xl"
                  aria-hidden="true"
                />
                054-345-2838
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
