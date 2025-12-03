'use client';

export default function StaffSection() {
  const staff = [
    {
      name: '渡邊 泰男',
      position: '代表取締役',
      experience: '経験年数 25年',
      specialties: ['事業統括', '大型車両対応', '特殊作業'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20Japanese%20automotive%20service%20company%20president%2C%20middle-aged%20businessman%20in%20work%20uniform%2C%20confident%20leadership%20pose%2C%20clean%20corporate%20background%2C%20realistic%20portrait%20photography%2C%20automotive%20industry%20professional&width=300&height=400&seq=staff1&orientation=portrait'
    },
    {
      name: '田中 健一',
      position: '現場責任者',
      experience: '経験年数 18年',
      specialties: ['レッカー作業', '事故処理', '現場指揮'],
      image: 'https://readdy.ai/api/search-image?query=Experienced%20Japanese%20tow%20truck%20operator%2C%20middle-aged%20man%20in%20professional%20work%20uniform%2C%20automotive%20rescue%20specialist%2C%20clean%20corporate%20background%2C%20realistic%20portrait%20photography%2C%20confident%20professional%20pose&width=300&height=400&seq=staff2&orientation=portrait'
    },
    {
      name: '佐藤 誠',
      position: 'メカニック長',
      experience: '経験年数 15年',
      specialties: ['出張整備', 'バッテリー交換', '応急処置'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20Japanese%20automotive%20mechanic%2C%20experienced%20technician%20in%20work%20uniform%20with%20tools%2C%20mobile%20repair%20specialist%2C%20clean%20corporate%20background%2C%20realistic%20portrait%20photography%2C%20skilled%20craftsman&width=300&height=400&seq=staff3&orientation=portrait'
    },
    {
      name: '山田 大輔',
      position: 'レスキュー隊員',
      experience: '経験年数 12年',
      specialties: ['落輪救出', 'スタック作業', 'ウインチ操作'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20Japanese%20rescue%20technician%2C%20automotive%20emergency%20specialist%20in%20safety%20gear%2C%20vehicle%20recovery%20expert%2C%20clean%20corporate%20background%2C%20realistic%20portrait%20photography%2C%20dedicated%20professional&width=300&height=400&seq=staff4&orientation=portrait'
    },
    {
      name: '鈴木 光男',
      position: 'サービス担当',
      experience: '経験年数 10年',
      specialties: ['鍵開け作業', 'パンク修理', '小型車対応'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20Japanese%20roadside%20assistance%20technician%2C%20skilled%20service%20worker%20in%20company%20uniform%2C%20automotive%20locksmith%20specialist%2C%20clean%20corporate%20background%2C%20realistic%20portrait%20photography%2C%20helpful%20professional&width=300&height=400&seq=staff5&orientation=portrait'
    },
    {
      name: '伊藤 正樹',
      position: 'ドライバー',
      experience: '経験年数 8年',
      specialties: ['車両搬送', '安全運転', '顧客対応'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20Japanese%20tow%20truck%20driver%2C%20experienced%20automotive%20transport%20specialist%20in%20uniform%2C%20safe%20driving%20expert%2C%20clean%20corporate%20background%2C%20realistic%20portrait%20photography%2C%20reliable%20professional&width=300&height=400&seq=staff6&orientation=portrait'
    }
  ];

  return (
    <section id="staff" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">スタッフ紹介</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            経験豊富なプロフェッショナルが24時間365日、お客様の安心をサポートします
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div 
                className="h-80 bg-cover bg-center bg-gray-200"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>
              
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-2">
                    {member.position}
                  </div>
                  <p className="text-blue-600 font-medium">{member.experience}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-gray-700 mb-3">専門分野</h4>
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <div key={specialtyIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-blue-50 p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-team-line text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">18名</h3>
                <p className="text-blue-700">総スタッフ数</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-award-line text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">平均12年</h3>
                <p className="text-green-700">経験年数</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-2">24時間</h3>
                <p className="text-purple-700">対応体制</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-blue-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">研修・資格について</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">保有資格</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li className="flex items-center"><i className="ri-check-line mr-2"></i>大型自動車免許</li>
                    <li className="flex items-center"><i className="ri-check-line mr-2"></i>クレーン運転士</li>
                    <li className="flex items-center"><i className="ri-check-line mr-2"></i>玉掛技能講習</li>
                    <li className="flex items-center"><i className="ri-check-line mr-2"></i>危険物取扱者</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">定期研修</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li className="flex items-center"><i className="ri-check-line mr-2"></i>安全運転講習</li>
                    <li className="flex items-center"><i className="ri-check-line mr-2"></i>接客マナー研修</li>
                    <li className="flex items-center"><i className="ri-check-line mr-2"></i>最新技術講習</li>
                    <li className="flex items-center"><i className="ri-check-line mr-2"></i>緊急時対応訓練</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}