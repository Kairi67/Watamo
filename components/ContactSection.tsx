'use client';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">お問い合わせ・事業所案内</h2>
          <p className="text-xl text-gray-600">緊急時は迷わずお電話ください</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 p-8 rounded-2xl mb-12 text-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-phone-line text-white text-3xl"></i>
            </div>
            <h3 className="text-3xl font-bold text-red-900 mb-4">24時間緊急ダイヤル</h3>
            <div className="text-4xl font-bold text-red-600 mb-4">054-345-2838</div>
            <p className="text-red-800 text-lg">年中無休・24時間対応で駆けつけます</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-map-pin-line text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">清水インター店</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-map-pin-2-line text-gray-500 mt-1 mr-3"></i>
                  <p className="text-gray-700">静岡市清水区八坂北1-1-53-1</p>
                </div>
                <div className="h-48 bg-gray-200 rounded-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.5!2d138.4!3d35.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDAwJzAwLjAiTiAxMzjCsDI0JzAwLjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-map-pin-line text-green-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">静岡インター店</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-map-pin-2-line text-gray-500 mt-1 mr-3"></i>
                  <p className="text-gray-700">静岡市駿河区中島1131-1</p>
                </div>
                <div className="h-48 bg-gray-200 rounded-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.5!2d138.4!3d34.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU4JzEyLjAiTiAxMzjCsDI0JzAwLjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">対応エリア</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-roadster-line text-blue-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">静岡市全域</h4>
                <p className="text-blue-800 text-sm">葵区・駿河区・清水区</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-map-line text-blue-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">近隣地域</h4>
                <p className="text-blue-800 text-sm">焼津市・藤枝市・島田市</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-blue-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">対応時間</h4>
                <p className="text-blue-800 text-sm">24時間365日対応</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}