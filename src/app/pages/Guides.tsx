import { Navigation } from '@/app/components/Navigation';
import { GraduationCap, Award, Heart } from 'lucide-react';

export function Guides() {
  const guides = [
    {
      name: '김민수',
      university: '서울대학교',
      major: '경영학과 3학년',
      experience: '투어 가이드 경력 1년',
      tours: 45,
      rating: 4.9,
      introduction: '안녕하세요! 서울대학교 경영학과 3학년 김민수입니다. 입학 전 고민했던 점들을 생생하게 전달해드립니다.',
      highlights: ['학과 선택 조언', '기숙사 생활 팁', '동아리 활동 정보'],
    },
    {
      name: '박지은',
      university: '연세대학교',
      major: '심리학과 4학년',
      experience: '투어 가이드 경력 2년',
      tours: 82,
      rating: 5.0,
      introduction: '연세대학교 심리학과 4학년 박지은입니다. 캠퍼스 생활의 모든 것을 솔직하게 알려드리겠습니다.',
      highlights: ['전공 수업 난이도', '대외활동 추천', '학생 복지 혜택'],
    },
    {
      name: '이준호',
      university: '고려대학교',
      major: '컴퓨터학과 3학년',
      experience: '투어 가이드 경력 1.5년',
      tours: 63,
      rating: 4.8,
      introduction: '고려대학교 컴퓨터학과 3학년 이준호입니다. IT 계열 관심 학생들에게 유용한 정보를 제공합니다.',
      highlights: ['진로 및 취업 정보', '학업 관리 비법', '캠퍼스 숨은 명소'],
    },
    {
      name: '최서연',
      university: '서울대학교',
      major: '의예과 2학년',
      experience: '투어 가이드 경력 6개월',
      tours: 28,
      rating: 4.9,
      introduction: '서울대학교 의예과 2학년 최서연입니다. 의대 입학을 준비하는 학생들에게 도움이 되겠습니다.',
      highlights: ['의대 생활 실제', '학습 환경 소개', '멘토링 프로그램'],
    },
    {
      name: '정우진',
      university: '연세대학교',
      major: '경제학과 4학년',
      experience: '투어 가이드 경력 2년',
      tours: 95,
      rating: 4.9,
      introduction: '연세대학교 경제학과 4학년 정우진입니다. 사회과학 계열 전공에 관심 있는 분들을 환영합니다.',
      highlights: ['장학금 제도 안내', '해외 교환학생', '취업 준비 노하우'],
    },
    {
      name: '한유진',
      university: '고려대학교',
      major: '영어교육과 3학년',
      experience: '투어 가이드 경력 1년',
      tours: 52,
      rating: 5.0,
      introduction: '고려대학교 영어교육과 3학년 한유진입니다. 사범대 및 교육 관련 정보를 상세히 안내합니다.',
      highlights: ['교직 이수 과정', '교생 실습 경험', '학습 동아리'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              투어 가이드 소개
            </h1>
            <p className="text-lg text-gray-600">
              검증된 재학생 가이드들이 여러분의 캠퍼스 투어를 안내합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {guide.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{guide.name}</h3>
                    <p className="text-sm text-gray-600">{guide.university}</p>
                    <p className="text-sm text-gray-600">{guide.major}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600">{guide.tours}회 투어</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-600">{guide.rating}/5.0</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {guide.introduction}
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs font-semibold text-gray-900 mb-2">전문 분야</p>
                  <div className="flex flex-wrap gap-2">
                    {guide.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                가이드 지원하기
              </h2>
              <p className="text-gray-600 mb-6">
                SKY 대학 재학생이라면 누구나 가이드로 지원할 수 있습니다.<br />
                재학 증명서와 간단한 면접을 통해 선발됩니다.
              </p>
              <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                가이드 지원하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
