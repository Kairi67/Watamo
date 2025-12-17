"use client";

export default function ServicesSection() {
  const services = [
    {
      icon: "ri-battery-line",
      title: "バッテリー上がり",
      description:
        "エンジンがかからない時も迅速に対応。ジャンプスタートで即座に解決します。",
      image:
        "https://readdy.ai/api/search-image?query=Car%20battery%20jumpstart%20service%2C%20professional%20mechanic%20connecting%20jumper%20cables%20to%20car%20battery%2C%20automotive%20emergency%20assistance%2C%20clean%20white%20background%2C%20realistic%20photography%20style%2C%20professional%20service%20scene&width=400&height=300&seq=service1&orientation=landscape",
    },
    {
      icon: "ri-settings-line",
      title: "パンク時のスペア交換",
      description:
        "タイヤがパンクした際のスペアタイヤ交換を安全かつ迅速に行います。",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20tire%20change%20service%2C%20mechanic%20replacing%20flat%20tire%20with%20spare%20tire%20on%20roadside%2C%20automotive%20repair%20tools%2C%20clean%20background%2C%20realistic%20photography%20style%2C%20emergency%20roadside%20assistance&width=400&height=300&seq=service2&orientation=landscape",
    },

    {
      icon: "ri-arrow-up-line",
      title: "落輪・スタック",
      description:
        "溝に落輪した車両や泥濳りでスタックした車両を安全に救出します。",
      image:
        "https://readdy.ai/api/search-image?query=Vehicle%20recovery%20service%2C%20tow%20truck%20pulling%20stuck%20car%20from%20ditch%2C%20professional%20automotive%20rescue%20operation%2C%20winch%20cable%20system%2C%20clean%20background%2C%20realistic%20photography%20style&width=400&height=300&seq=service4&orientation=landscape",
    },
    {
      icon: "ri-truck-line",
      title: "車両の搬送/牽引",
      description:
        "故障車両の搬送や牽引を専用車両で安全に行います。各種車両に対応可能。",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20car%20towing%20service%2C%20flatbed%20tow%20truck%20loading%20damaged%20vehicle%2C%20automotive%20transportation%20service%2C%20clean%20background%2C%20realistic%20photography%20style%2C%20emergency%20roadside%20assistance&width=400&height=300&seq=service5&orientation=landscape",
    },
    {
      icon: "ri-tools-line",
      title: "出張整備",
      description:
        "現地での応急処置や簡易整備を行い、お客様の時間を大切にします。",
      image:
        "https://readdy.ai/api/search-image?query=Mobile%20mechanic%20service%2C%20professional%20automotive%20technician%20performing%20on-site%20car%20repair%2C%20diagnostic%20tools%2C%20clean%20workshop%20background%2C%20realistic%20photography%20style%2C%20mobile%20automotive%20service&width=400&height=300&seq=service6&orientation=landscape",
    },
    {
      icon: "ri-key-line",
      title: "キー閉じ込み",
      description:
        "車内にキーを閉じ込めてしまった場合も、特殊工具で車を傷つけずに開錠します。",
      image:
        "https://readdy.ai/api/search-image?query=Car%20lockout%20service%2C%20professional%20locksmith%20opening%20car%20door%20with%20special%20tools%2C%20automotive%20key%20rescue%20service%2C%20clean%20background%2C%20realistic%20photography%20style%2C%20emergency%20assistance&width=400&height=300&seq=service3&orientation=landscape",
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* ヘッダー: サイズ調整 */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            サービス内容
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
            JAF指定工場・全保険会社対応で、あらゆる車のトラブルに対応いたします。
          </p>
        </div>

        {/* サービスカードグリッド: スマホは1列、PCは3列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-xl transition-shadow cursor-pointer"
            >
              {/* 画像エリア: スマホでは高さを抑える (h-40) */}
              <div
                className="h-40 md:h-48 bg-cover bg-center bg-gray-200 rounded-lg md:rounded-xl mb-4 md:mb-6"
                style={{ backgroundImage: `url(${service.image})` }}
                role="img" // 画像が装飾目的の場合は role="img" を推奨
                aria-label={`${service.title}の作業風景`}
              ></div>

              {/* アイコンサークル: サイズ調整 */}
              <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <i
                  className={`${service.icon} text-red-600 text-lg md:text-xl`}
                ></i>
              </div>

              {/* タイトル */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                {service.title}
              </h3>

              {/* 説明文: スマホでは文字サイズを小さく */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* 緊急時CTA: スマホでの押しやすさを重視 */}
        <div className="mt-10 md:mt-16 text-center">
          <div className="bg-red-50 p-6 md:p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-red-900 mb-3 md:mb-4">
              緊急時はすぐにお電話ください
            </h3>
            <p className="text-sm md:text-base text-red-800 mb-4 md:mb-6">
              24時間365日対応・出動料金のお見積もりも無料です
            </p>
            {/* ボタン: 横幅いっぱいに広げ、タップエリアを確保 */}
            <a
              href="tel:0543452838"
              className="w-full sm:w-auto bg-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-lg md:text-xl cursor-pointer hover:bg-red-700 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              <i className="ri-phone-line mr-2 md:mr-3 text-xl md:text-2xl"></i>
              054-345-2838
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
