"use client";

export default function StatsSection() {
  const stats = [
    { number: "11,000", label: "年間出動件数", icon: "ri-car-line" },
    { number: "24", label: "時間対応", icon: "ri-time-line" },
    { number: "365", label: "日年中無休", icon: "ri-calendar-line" },
    { number: "21", label: "レッカー車・車載専用車", icon: "ri-truck-line" },
    { number: "18", label: "従業員数", icon: "ri-team-line" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">信頼の実績</h2>
          <p className="text-xl text-gray-600">
            数字で見るワタモカーレスキュー静清の実力
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-red-600 text-2xl`}></i>
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 p-8 rounded-2xl max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-award-line text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              TUV認証取得
            </h3>
            <p className="text-blue-800">
              ロードサービスにおける最高位の認証を取得し、どのような車両トラブルへも対応できる体制を整えております
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
