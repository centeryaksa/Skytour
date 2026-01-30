import { Navigation } from '@/app/components/Navigation';
import { Star, ThumbsUp } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      name: '김**',
      university: '서울대학교 투어',
      rating: 5,
      date: '2026.01.15',
      content: '재학생 가이드님이 정말 친절하게 설명해주셔서 너무 좋았습니다. 입학 전에 궁금했던 것들을 모두 물어볼 수 있어서 유익했어요. 강의동부터 기숙사까지 꼼꼼하게 안내해주셨습니다.',
      helpful: 42,
    },
    {
      name: '이**',
      university: '연세대학교 투어',
      rating: 5,
      date: '2026.01.12',
      content: '백양로를 걸으며 캠퍼스 분위기를 느낄 수 있었고, 실제 학생 식당에서 식사도 해볼 수 있어서 좋았습니다. 가이드님이 전공 선택에 대한 조언도 해주셔서 진로 결정에 도움이 되었어요.',
      helpful: 38,
    },
    {
      name: '박**',
      university: '고려대학교 투어',
      rating: 4,
      date: '2026.01.10',
      content: '중앙광장과 도서관이 정말 멋있었어요. 가이드님이 학교 생활의 장단점을 솔직하게 말씀해주셔서 현실적인 정보를 얻을 수 있었습니다. 다만 투어 시간이 조금 더 길었으면 하는 아쉬움이 있네요.',
      helpful: 29,
    },
    {
      name: '최**',
      university: '서울대학교 투어',
      rating: 5,
      date: '2026.01.08',
      content: '의예과 가이드님께서 의대 생활에 대해 자세히 설명해주셔서 진로 결정에 큰 도움이 되었습니다. 중앙도서관의 규모에 놀랐고, 다양한 연구 시설도 구경할 수 있어서 좋았어요.',
      helpful: 51,
    },
    {
      name: '정**',
      university: '연세대학교 투어',
      rating: 5,
      date: '2026.01.05',
      content: '가이드님의 설명이 정말 재미있고 유익했습니다. 특히 동아리 활동과 대외활동에 대한 정보가 많아서 입학 후 계획을 세우는데 도움이 되었어요. 추천합니다!',
      helpful: 35,
    },
    {
      name: '한**',
      university: '고려대학교 투어',
      rating: 5,
      date: '2026.01.03',
      content: '안암동 캠퍼스타운의 분위기가 너무 좋았어요. 가이드님이 학교 주변 맛집과 카페까지 추천해주셔서 투어 후에도 즐겁게 시간을 보낼 수 있었습니다. 매우 만족스러운 투어였어요.',
      helpful: 44,
    },
    {
      name: '신**',
      university: '서울대학교 투어',
      rating: 4,
      date: '2025.12.28',
      content: '관악캠퍼스가 생각보다 넓어서 놀랐습니다. 3시간 반 동안 주요 건물들을 모두 돌아볼 수 있었고, Q&A 시간에 장학금과 기숙사에 대해 자세히 물어볼 수 있어서 좋았어요.',
      helpful: 27,
    },
    {
      name: '오**',
      university: '연세대학교 투어',
      rating: 5,
      date: '2025.12.25',
      content: '노천극장과 대운동장을 보니 학교 축제가 정말 기대되네요. 가이드님이 학생 복지 혜택에 대해서도 자세히 알려주셔서 유익했습니다. 친구들에게도 추천하고 싶어요!',
      helpful: 40,
    },
  ];

  const stats = [
    { label: '평균 평점', value: '4.9/5.0' },
    { label: '총 투어 횟수', value: '1,247회' },
    { label: '만족도', value: '98%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              투어 후기
            </h1>
            <p className="text-lg text-gray-600">
              실제 참여자들의 솔직한 후기를 확인해보세요
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <p className="text-gray-600 mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Reviews */}
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900">{review.name}</h3>
                      <span className="text-sm text-gray-500">|</span>
                      <span className="text-sm text-gray-600">{review.university}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  {review.content}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span>도움이 됐어요 ({review.helpful})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              여러분의 후기를 남겨주세요
            </h2>
            <p className="text-gray-600 mb-6">
              투어에 참여하신 후 소중한 후기를 작성해주시면<br />
              다음 참여자들에게 큰 도움이 됩니다.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              후기 작성하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
