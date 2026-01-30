import { Navigation } from '@/app/components/Navigation';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: '예약 및 결제',
      questions: [
        {
          q: '투어 예약은 어떻게 하나요?',
          a: '웹사이트에서 원하시는 대학과 날짜를 선택한 후, 결제를 진행하시면 예약이 완료됩니다. 예약 확인 이메일이 발송되며, 투어 전날 카카오톡으로 안내 메시지를 보내드립니다.',
        },
        {
          q: '결제 방법은 어떤 것들이 있나요?',
          a: '신용카드, 체크카드, 계좌이체, 카카오페이, 네이버페이 등 다양한 결제 수단을 지원합니다. 모든 결제는 안전하게 암호화되어 처리됩니다.',
        },
        {
          q: '예약 취소 및 환불 정책은 어떻게 되나요?',
          a: '투어 7일 전까지는 100% 환불, 3~6일 전은 50% 환불, 2일 전부터는 환불이 불가능합니다. 천재지변이나 불가피한 사유가 있을 경우 별도 협의가 가능합니다.',
        },
      ],
    },
    {
      category: '투어 진행',
      questions: [
        {
          q: '투어 소요 시간은 얼마나 되나요?',
          a: '캠퍼스 투어는 약 3시간 30분이 소요되며, 이후 30분간 Q&A 시간이 제공됩니다. 총 4시간 동안 진행됩니다.',
        },
        {
          q: '투어 인원은 몇 명인가요?',
          a: '한 그룹당 최대 15명으로 구성됩니다. 소규모 그룹으로 진행하여 가이드와 충분한 소통이 가능하며, 개인적인 질문도 자유롭게 할 수 있습니다.',
        },
        {
          q: '투어 중 식사는 포함되나요?',
          a: '점심시간에 진행되는 투어의 경우 학생 식당에서 식사를 체험해볼 수 있습니다. 식사 비용(약 5,000~7,000원)은 개별 부담이며, 식권 구매 방법을 안내해드립니다.',
        },
        {
          q: '비가 오는 날에도 투어가 진행되나요?',
          a: '소나기나 약한 비가 오는 경우에는 정상적으로 진행되며, 우산을 준비해주시면 됩니다. 폭우나 태풍 등 기상 악화 시에는 일정 변경이나 환불이 가능합니다.',
        },
      ],
    },
    {
      category: '준비사항',
      questions: [
        {
          q: '투어에 참여할 때 준비해야 할 것이 있나요?',
          a: '편한 복장과 신발을 착용해주세요. 캠퍼스가 넓어 많이 걸으므로 운동화를 권장합니다. 여름에는 모자와 선크림, 겨울에는 따뜻한 옷을 준비해주세요. 물과 간단한 간식을 가져오셔도 좋습니다.',
        },
        {
          q: '사진 촬영이 가능한가요?',
          a: '네, 캠퍼스 내에서 자유롭게 사진 촬영이 가능합니다. 다만 일부 건물 내부나 연구실은 촬영이 제한될 수 있습니다. 가이드가 안내해드립니다.',
        },
        {
          q: '부모님과 함께 참여할 수 있나요?',
          a: '물론입니다! 학생 본인뿐만 아니라 학부모님, 친구들과 함께 참여하실 수 있습니다. 가족 단위 참가자도 많으시며, 모두에게 유익한 정보를 제공해드립니다.',
        },
      ],
    },
    {
      category: '기타',
      questions: [
        {
          q: '가이드는 어떻게 선발되나요?',
          a: '모든 가이드는 해당 대학의 재학생이며, 재학 증명 후 면접을 통해 선발됩니다. 가이드 교육을 이수하고 검증된 분들만 투어를 진행합니다.',
        },
        {
          q: '개인적으로 궁금한 사항을 질문할 수 있나요?',
          a: '투어 중에도 언제든지 질문하실 수 있으며, 마지막 30분의 Q&A 시간에는 더욱 자세한 질문과 답변이 가능합니다. 전공, 기숙사, 장학금, 동아리 등 무엇이든 편하게 물어보세요.',
        },
        {
          q: '단체 예약도 가능한가요?',
          a: '네, 학교 단체나 학원에서 10명 이상 단체로 예약하실 경우 할인 혜택이 제공됩니다. 고객센터로 문의주시면 맞춤 일정을 안내해드립니다.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h1>
            <p className="text-lg text-gray-600">
              투어 예약 전 궁금하신 사항을 확인해보세요
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div
                        key={faqIndex}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 pr-4">
                            {faq.q}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                              isOpen ? 'transform rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              더 궁금하신 사항이 있으신가요?
            </h2>
            <p className="text-gray-600 mb-6">
              언제든지 고객센터로 문의해주세요.<br />
              친절하게 안내해드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@skycampustour.com"
                className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors border border-gray-300"
              >
                이메일 문의
              </a>
              <a
                href="tel:02-1234-5678"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                전화 문의
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
