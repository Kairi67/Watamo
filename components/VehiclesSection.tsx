"use client";

export default function VehiclesSection() {
  const vehicles = [
    {
      name: "レッカー車（大型）",
      type: "大型車両対応",
      capacity: "最大積載量8トン",
      features: ["高速道路対応", "大型車両牽引", "24時間出動"],
      image: "/DSC02277.jpg",
    },
    {
      name: "レッカー車（中型）",
      type: "普通車・軽自動車対応",
      capacity: "最大積載量3トン",
      features: ["市街地対応", "狭い道路OK", "スピード対応"],
      image:
        "https://readdy.ai/api/search-image?query=Medium%20size%20professional%20tow%20truck%20with%20tilting%20bed%2C%20automotive%20recovery%20vehicle%20for%20regular%20cars%2C%20red%20and%20white%20corporate%20colors%2C%20clean%20professional%20photography%2C%20urban%20service%20vehicle&width=400&height=300&seq=vehicle2&orientation=landscape",
    },
    {
      name: "サービスカー（小型）",
      type: "バッテリー・鍵開け対応",
      capacity: "軽作業専用",
      features: ["迅速到着", "軽作業対応", "機動力抜群"],
      image:
        "https://readdy.ai/api/search-image?query=Compact%20roadside%20assistance%20service%20van%2C%20mobile%20automotive%20repair%20vehicle%20with%20tools%20and%20equipment%2C%20red%20and%20white%20corporate%20colors%2C%20professional%20emergency%20response%20vehicle&width=400&height=300&seq=vehicle3&orientation=landscape",
    },
    {
      name: "クレーン車",
      type: "特殊作業対応",
      capacity: "吊上げ能力5トン",
      features: ["落輪救出", "重機対応", "特殊作業"],
      image:
        "https://readdy.ai/api/search-image?query=Professional%20crane%20truck%20for%20vehicle%20recovery%2C%20automotive%20rescue%20crane%20with%20extending%20boom%2C%20red%20and%20white%20corporate%20colors%2C%20heavy%20duty%20recovery%20equipment%2C%20realistic%20commercial%20vehicle&width=400&height=300&seq=vehicle4&orientation=landscape",
    },
    {
      name: "ウインチ車",
      type: "スタック救出専用",
      capacity: "ウインチ能力3トン",
      features: ["泥濘地対応", "スタック救出", "悪路対応"],
      image:
        "https://readdy.ai/api/search-image?query=Professional%20winch%20truck%20for%20vehicle%20recovery%2C%20specialized%20rescue%20vehicle%20with%20heavy%20duty%20winch%20system%2C%20red%20and%20white%20corporate%20colors%2C%20off-road%20recovery%20equipment&width=400&height=300&seq=vehicle5&orientation=landscape",
    },
    {
      name: "マルチサービス車",
      type: "総合サービス対応",
      capacity: "多目的作業車",
      features: ["出張整備", "応急処置", "オールマイティ"],
      image:
        "https://readdy.ai/api/search-image?query=Multi-purpose%20automotive%20service%20truck%2C%20mobile%20workshop%20vehicle%20with%20various%20tools%20and%20equipment%2C%20red%20and%20white%20corporate%20colors%2C%20comprehensive%20roadside%20assistance%20vehicle&width=400&height=300&seq=vehicle6&orientation=landscape",
    },
  ];

  return (
    <section id="vehicles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            保有車両一覧
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            あらゆるトラブルに対応できる専用車両を12台完備。用途に応じて最適な車両で駆けつけます
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className="h-48 bg-cover bg-center bg-gray-200"
                style={{ backgroundImage: `url(${vehicle.image})` }}
              ></div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {vehicle.name}
                  </h3>
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="ri-truck-line text-red-600 text-xl"></i>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {vehicle.type}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-gray-600 font-medium">
                    {vehicle.capacity}
                  </p>
                </div>

                <div className="space-y-2">
                  {vehicle.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 p-8 rounded-2xl max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-shield-check-line text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              全車両完備
            </h3>
            <p className="text-blue-800 mb-4">
              静岡市内2拠点に計21台の専用車両を配備。最短時間でお客様のもとへ駆けつけます
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  清水インター店
                </div>
                <div className="text-blue-700 text-sm">東名清水ICすぐ横</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  静岡インター店
                </div>
                <div className="text-blue-700 text-sm">
                  東名静岡ICから車で2分
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
