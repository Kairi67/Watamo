// "use client";

type Office = {
  name: string;
  address: string;
  type: "店舗" | "ヤード";
};

const services = [
  "バッテリー上がり",
  "パンク時のスペア交換",
  "キー閉じ込み対応",
  "落輪・スタック救出",
  "車両搬送・牽引",
  "出張整備",
];

const offices: Office[] = [
  {
    name: "清水インター店",
    address: "静岡市清水区八坂北1-1-53-1",
    type: "店舗",
  },
  {
    name: "静岡インター店",
    address: "静岡市駿河区中島1131-1",
    type: "店舗",
  },
  {
    name: "タウ清水ヤード",
    address: "静岡市清水区小島町59-1",
    type: "ヤード",
  },
  {
    name: "タウ富士ヤード",
    address: "富士市入山瀬宇猪久保835-1",
    type: "ヤード",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      {/* 緊急連絡エリア */}
      <div className="border-b border-white/10 bg-red-600">
        <div className="container mx-auto px-4 py-5 md:py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="mb-1 text-sm font-bold text-red-100">
                お車のトラブルでお困りの方
              </p>

              <p className="text-xl font-bold text-white md:text-2xl">
                24時間365日、迅速に対応します
              </p>
            </div>

            <a
              href="tel:0543452838"
              aria-label="054-345-2838へ電話する"
              className="
                inline-flex w-full items-center justify-center
                rounded-full bg-white px-6 py-3
                text-lg font-bold text-red-600
                shadow-lg transition-all duration-200
                hover:-translate-y-0.5 hover:bg-red-50
                focus:outline-none focus-visible:ring-4
                focus-visible:ring-white/50
                sm:w-auto md:px-8 md:text-xl
              "
            >
              <i
                className="ri-phone-fill mr-2 text-xl md:text-2xl"
                aria-hidden="true"
              />
              054-345-2838
            </a>
          </div>
        </div>
      </div>

      {/* フッター本体 */}
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* 会社情報 */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="h-full rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 md:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-white p-1.5 md:h-16 md:w-16">
                  <img
                    src="https://static.readdy.ai/image/8864c8d66d2b0793a2420b2c6e368183/542c11bc718313eebca2b950be62d923.png"
                    alt="有限会社ワタモ カーレスキュー静清"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <p className="text-lg font-bold text-white md:text-xl">
                    有限会社ワタモ
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-300">
                    カーレスキュー静清
                  </p>
                </div>
              </div>

              <p className="text-sm leading-7 text-gray-300">
                静岡県内を中心に、24時間365日対応するロードサービス会社です。
                年間12,000件の出動実績をもとに、迅速かつ安全にお客様をサポートします。
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="tel:0543452838"
                  aria-label="電話をかける"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full bg-white/10 text-lg text-white
                    transition-colors hover:bg-red-600
                    focus:outline-none focus-visible:ring-4
                    focus-visible:ring-red-400/40
                  "
                >
                  <i className="ri-phone-line" aria-hidden="true" />
                </a>

                <a
                  href="mailto:rescue@watamo.com"
                  aria-label="メールを送る"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full bg-white/10 text-lg text-white
                    transition-colors hover:bg-red-600
                    focus:outline-none focus-visible:ring-4
                    focus-visible:ring-red-400/40
                  "
                >
                  <i className="ri-mail-line" aria-hidden="true" />
                </a>

                <a
                  href="#contact"
                  aria-label="事業所案内を見る"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full bg-white/10 text-lg text-white
                    transition-colors hover:bg-red-600
                    focus:outline-none focus-visible:ring-4
                    focus-visible:ring-red-400/40
                  "
                >
                  <i className="ri-map-pin-line" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* サービス内容 */}
          <div className="h-full rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 md:p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600/20">
                <i
                  className="ri-tools-line text-lg text-red-400"
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-base font-bold text-white md:text-lg">
                サービス内容
              </h3>
            </div>

            <ul className="space-y-1">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="
                      group flex min-h-9 items-center
                      rounded-lg px-2 py-1.5
                      text-sm text-gray-300
                      transition-colors
                      hover:bg-white/[0.06] hover:text-white
                    "
                  >
                    <i
                      className="
                        ri-arrow-right-s-line mr-2
                        text-base text-red-400
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                      aria-hidden="true"
                    />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* お問い合わせ */}
          <div className="h-full rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 md:p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600/20">
                <i
                  className="ri-customer-service-2-line text-lg text-red-400"
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-base font-bold text-white md:text-lg">
                お問い合わせ
              </h3>
            </div>

            <div className="space-y-5">
              <div>
                <p className="mb-1.5 text-xs font-bold tracking-wide text-gray-400">
                  緊急ダイヤル
                </p>

                <a
                  href="tel:0543452838"
                  className="
                    inline-flex items-center text-lg
                    font-bold text-white
                    transition-colors hover:text-red-400
                  "
                >
                  <i
                    className="ri-phone-fill mr-2 text-red-400"
                    aria-hidden="true"
                  />
                  054-345-2838
                </a>
              </div>

              <div>
                <p className="mb-1.5 text-xs font-bold tracking-wide text-gray-400">
                  メール
                </p>

                <a
                  href="mailto:rescue@watamo.com"
                  className="
                    break-all text-sm text-gray-200
                    transition-colors hover:text-red-400
                  "
                >
                  rescue@watamo.com
                </a>
              </div>
              <div>
                <p className="mb-1.5 text-xs font-bold tracking-wide text-gray-400">
                  インスタグラム
                </p>

                <a
                  href="https://www.instagram.com/watamo_rescue24/"
                  className="
                    break-all text-sm text-gray-200
                    transition-colors hover:text-red-400
                  "
                >
                  @watamo_rescue24
                </a>
              </div>

              <div className="rounded-xl bg-red-600/10 p-4 ring-1 ring-red-500/20">
                <div className="flex items-center gap-2">
                  <i
                    className="ri-time-line text-lg text-red-400"
                    aria-hidden="true"
                  />

                  <p className="font-bold text-white">24時間365日対応</p>
                </div>

                <p className="mt-2 text-xs leading-5 text-gray-300">
                  深夜・早朝・休日を問わずご相談ください。
                </p>
              </div>
            </div>
          </div>

          {/* 事業所 */}
          <div className="h-full rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 md:p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600/20">
                <i
                  className="ri-map-pin-line text-lg text-red-400"
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-base font-bold text-white md:text-lg">
                事業所案内
              </h3>
            </div>

            <div className="space-y-4">
              {offices.map((office) => (
                <div
                  key={office.name}
                  className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="mb-1.5 flex items-center gap-2">
                    <p className="text-sm font-bold text-white">
                      {office.name}
                    </p>

                    <span
                      className={`
                        rounded-full px-2 py-0.5 text-[10px] font-bold
                        ${
                          office.type === "店舗"
                            ? "bg-blue-500/20 text-blue-300"
                            : "bg-orange-500/20 text-orange-300"
                        }
                      `}
                    >
                      {office.type}
                    </span>
                  </div>

                  <p className="pl-0 text-xs leading-5 text-gray-300">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="
                mt-5 inline-flex w-full items-center justify-center
                rounded-full border border-white/15
                px-4 py-2.5 text-sm font-bold text-white
                transition-colors
                hover:border-red-500 hover:bg-red-600
              "
            >
              詳しい地図を見る
              <i className="ri-arrow-right-line ml-2" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-10 border-t border-white/10 pt-6 md:mt-12 md:pt-8">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-center text-xs leading-relaxed text-gray-400 md:text-left md:text-sm">
              © {currentYear} 有限会社ワタモ カーレスキュー静清. All rights
              reserved.
            </p>

            <a
              href="#"
              className="text-xs text-gray-400 transition-colors hover:text-white md:text-sm"
            >
              ページ上部へ
              <i className="ri-arrow-up-line ml-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
