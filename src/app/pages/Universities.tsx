import { Link } from 'react-router';
import { Navigation } from '@/app/components/Navigation';
import { Clock, Users, Star } from 'lucide-react';

export function Universities() {
  const universities = [
    {
      id: 'seoul',
      name: '서울대학교',
      description: '대한민국을 대표하는 국립 종합대학교',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Seoul_National_University_emblem.svg/200px-Seoul_National_University_emblem.svg.png',
      highlights: ['관악캠퍼스 주요 건물 투어', '중앙도서관 견학', '학생식당 체험', '기숙사 단지 소개'],
      price: 30000,
      duration: '3.5시간 + 0.5시간 Q&A',
      maxPeople: 15,
    },
    {
      id: 'yonsei',
      name: '연세대학교',
      description: '한국 최초의 근대식 사립 종합대학교',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Yonsei_University_Emblem.svg/200px-Yonsei_University_Emblem.svg.png',
      highlights: ['백양로 투어', '언더우드관 및 중앙도서관', '노천극장 및 대운동장', '신촌 캠퍼스 라이프 소개'],
      price: 30000,
      duration: '3.5시간 + 0.5시간 Q&A',
      maxPeople: 15,
    },
    {
      id: 'korea',
      name: '고려대학교',
      description: '자유와 정의를 교육이념으로 하는 명문 사학',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Korea_University_Logo.svg/200px-Korea_University_Logo.svg.png',
      highlights: ['중앙광장 및 본관 투어', '중앙도서관 견학', '인촌기념관 소개', '안암동 캠퍼스타운 체험'],
      price: 30000,
      duration: '3.5시간 + 0.5시간 Q&A',
      maxPeople: 15,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              캠퍼스 투어 상품
            </h1>
            <p className="text-lg text-gray-600">
              SKY 3개 대학의 프리미엄 캠퍼스 투어를 만나보세요
            </p>
          </div>

          <div className="space-y-8">
            {universities.map((uni) => (
              <div
                key={uni.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-8">
                    <img
                      src={uni.logo}
                      alt={uni.name}
                      className="h-48 w-48 object-contain"
                    />
                  </div>
                  
                  <div className="md:col-span-2 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {uni.name}
                    </h2>
                    <p className="text-gray-600 mb-6">{uni.description}</p>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="text-sm">{uni.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span className="text-sm">최대 {uni.maxPeople}명</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <span className="text-sm">평점 4.9/5.0</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">투어 하이라이트</h3>
                      <ul className="grid grid-cols-2 gap-2">
                        {uni.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gray-900">
                          ₩{uni.price.toLocaleString()}
                        </span>
                        <span className="text-gray-600">/인</span>
                      </div>
                      <Link
                        to={`/booking/${uni.id}`}
                        className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        투어 예약하기
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
