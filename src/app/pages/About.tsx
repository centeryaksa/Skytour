import { Navigation } from '@/app/components/Navigation';
import { Target, Users, Award, Heart } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Target,
      title: '진정성',
      description: '홍보가 아닌 실제 경험을 기반으로 한 솔직한 정보를 제공합니다.',
    },
    {
      icon: Users,
      title: '소통',
      description: '소규모 그룹으로 가이드와 참가자 간 원활한 소통을 보장합니다.',
    },
    {
      icon: Award,
      title: '전문성',
      description: '검증된 재학생 가이드가 체계적인 투어를 진행합니다.',
    },
    {
      icon: Heart,
      title: '배려',
      description: '참가자의 입장에서 생각하며 최상의 경험을 제공합니다.',
    },
  ];

  const timeline = [
    { year: '2024.03', event: 'SKY Campus Tour 서비스 기획 시작' },
    { year: '2024.09', event: '첫 파일럿 투어 진행 (서울대학교)' },
    { year: '2024.12', event: '연세대, 고려대 투어 확대' },
    { year: '2025.03', event: '누적 참가자 500명 돌파' },
    { year: '2025.09', event: '가이드 30명 선발 완료' },
    { year: '2026.01', event: '누적 참가자 1,000명 달성' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              SKY Campus Tour 소개
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              입학 전 꼭 필요한 정보를 제공하는<br />
              프리미엄 캠퍼스 투어 서비스입니다
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                우리의 미션
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                SKY Campus Tour는 대학 입학을 준비하는 학생들에게 실제 캠퍼스 생활을 미리 경험하고, 
                재학생의 솔직한 조언을 들을 수 있는 기회를 제공합니다.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                홍보성 정보가 아닌, 실제 경험에 기반한 현실적인 정보를 전달하여 
                학생들이 더 나은 진로 결정을 할 수 있도록 돕습니다.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              핵심 가치
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              우리의 여정
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative flex gap-6">
                      <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex-shrink-0 z-10"></div>
                      <div className="bg-white rounded-lg shadow-md p-6 flex-1">
                        <div className="text-sm font-semibold text-blue-600 mb-2">
                          {item.year}
                        </div>
                        <div className="text-gray-900 font-medium">
                          {item.event}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { label: '누적 참가자', value: '1,247명' },
              { label: '투어 만족도', value: '98%' },
              { label: '재방문 의향', value: '95%' },
              { label: '가이드 수', value: '30명' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              함께 만들어가는 SKY Campus Tour
            </h2>
            <p className="text-lg mb-8 opacity-90">
              더 많은 학생들에게 유익한 정보를 전달하고,<br />
              올바른 진로 결정을 도울 수 있도록 노력하겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/booking/seoul"
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                투어 예약하기
              </a>
              <a
                href="mailto:info@skycampustour.com"
                className="px-8 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-colors"
              >
                문의하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
