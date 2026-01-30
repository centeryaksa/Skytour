import { Link } from 'react-router';
import { Navigation } from '@/app/components/Navigation';
import { CheckCircle2, Users, MapPin, Star } from 'lucide-react';

export function Home() {
  const universities = [
    {
      id: 'seoul',
      name: '서울대학교',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Seoul_National_University_emblem.svg/200px-Seoul_National_University_emblem.svg.png',
      image: 'https://images.unsplash.com/photo-1680446544284-09e22e8d0e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc2OTc1MDU2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'yonsei',
      name: '연세대학교',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Yonsei_University_Emblem.svg/200px-Yonsei_University_Emblem.svg.png',
      image: 'https://images.unsplash.com/photo-1680446544284-09e22e8d0e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc2OTc1MDU2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'korea',
      name: '고려대학교',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Korea_University_Logo.svg/200px-Korea_University_Logo.svg.png',
      image: 'https://images.unsplash.com/photo-1680446544284-09e22e8d0e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc2OTc1MDU2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const features = [
    {
      icon: Users,
      title: '재학생 가이드',
      description: '홍보가 아닌 "실제 경험 기반" 정보: 수업 난이도, 전공 분위기, 동아리/대외활동, 기숙사/생활, 장단점',
    },
    {
      icon: MapPin,
      title: '검증된 동선 + 시간 설계',
      description: '처음 방문자도 낭비 없이 핵심만: 3.5h 투어 + 0.5h Q&A',
    },
    {
      icon: Star,
      title: '프리미엄 예약 경험',
      description: '깔끔한 UI, 명확한 가격/정책, 후기 기반 신뢰, 간편 예약 흐름(날짜→시간→옵션→결제)',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                SKY 캠퍼스 프리미엄 투어
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                재학생이 안내하는<br />
                프리미엄 캠퍼스 투어
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                3시간 30분 투어 + 30분 Q&A
              </p>
              <p className="text-gray-600 mb-8">
                전공/생활/분위기까지 입학 전에 꼭 필요한 정보를 현실적으로 제공합니다.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">3.5h+0.5h Q&A</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">소규모 관광</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">재학생 가이드</span>
                </div>
              </div>

              <div className="flex items-baseline gap-4 mb-8">
                <div className="text-4xl font-bold text-gray-900">₩30,000</div>
                <div className="text-gray-600">/인</div>
              </div>

              <div className="flex gap-4">
                <Link
                  to="/booking/seoul"
                  className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                >
                  투어 예약하기
                </Link>
                <Link
                  to="/universities"
                  className="px-8 py-4 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors border border-gray-300"
                >
                  프로그램 보기
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1680446544284-09e22e8d0e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc2OTc1MDU2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Campus tour with students"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              왜 SKY Campus Tour인가?
            </h2>
            <p className="text-lg text-gray-600">
              실제 재학생이 안내하는 차별화된 캠퍼스 투어 경험
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              투어 가능한 대학교
            </h2>
            <p className="text-lg text-gray-600">
              SKY 3개 대학의 투어를 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {universities.map((uni) => (
              <div
                key={uni.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    className="h-32 w-32 object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {uni.name}
                  </h3>
                  <Link
                    to={`/booking/${uni.id}`}
                    className="block w-full py-3 bg-blue-600 text-white text-center font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    투어 예약하기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">SKY Campus Tour</h3>
              <p className="text-gray-400 text-sm">
                재학생 가이드가 안내하는 프리미엄 캠퍼스 투어 서비스
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/universities" className="hover:text-white">상품</Link></li>
                <li><Link to="/guides" className="hover:text-white">가이드</Link></li>
                <li><Link to="/reviews" className="hover:text-white">후기</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">정보</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link to="/about" className="hover:text-white">소개</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">문의</h4>
              <p className="text-sm text-gray-400">
                이메일: info@skycampustour.com<br />
                전화: 02-1234-5678
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2026 SKY Campus Tour. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
