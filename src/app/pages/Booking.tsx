import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Navigation } from '@/app/components/Navigation';
import { Calendar } from '@/app/components/ui/calendar';
import { Clock, Users, CreditCard, CheckCircle2, ArrowLeft } from 'lucide-react';

export function Booking() {
  const { university } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [participants, setParticipants] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  
  const universities: Record<string, any> = {
    seoul: {
      name: '서울대학교',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Seoul_National_University_emblem.svg/200px-Seoul_National_University_emblem.svg.png',
    },
    yonsei: {
      name: '연세대학교',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Yonsei_University_Emblem.svg/200px-Yonsei_University_Emblem.svg.png',
    },
    korea: {
      name: '고려대학교',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Korea_University_Logo.svg/200px-Korea_University_Logo.svg.png',
    },
  };

  const uni = universities[university || 'seoul'];
  const pricePerPerson = 30000;
  const totalPrice = pricePerPerson * participants;

  const availableTimes = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00'
  ];

  const paymentMethods = [
    { id: 'card', name: '신용/체크카드', icon: CreditCard },
    { id: 'transfer', name: '계좌이체', icon: CreditCard },
    { id: 'kakao', name: '카카오페이', icon: CreditCard },
    { id: 'naver', name: '네이버페이', icon: CreditCard },
  ];

  const handleSubmit = () => {
    // 예약 처리 로직 (실제로는 백엔드 API 호출)
    alert('예약이 완료되었습니다! 확인 이메일을 확인해주세요.');
    navigate('/');
  };

  const isStepComplete = (stepNum: number) => {
    if (stepNum === 1) return selectedDate !== undefined;
    if (stepNum === 2) return selectedTime !== '';
    if (stepNum === 3) return participants > 0;
    if (stepNum === 4) return paymentMethod !== '';
    return false;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>뒤로 가기</span>
          </button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    className="h-16 w-16 object-contain"
                  />
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {uni.name} 캠퍼스 투어
                    </h1>
                    <p className="text-gray-600">3.5시간 투어 + 0.5시간 Q&A</p>
                  </div>
                </div>

                {/* Progress Steps */}
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    {[1, 2, 3, 4].map((stepNum) => (
                      <div key={stepNum} className="flex items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                            step === stepNum
                              ? 'bg-blue-600 text-white'
                              : isStepComplete(stepNum)
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}
                        >
                          {isStepComplete(stepNum) ? (
                            <CheckCircle2 className="w-6 h-6" />
                          ) : (
                            stepNum
                          )}
                        </div>
                        {stepNum < 4 && (
                          <div
                            className={`w-16 h-1 mx-2 ${
                              isStepComplete(stepNum)
                                ? 'bg-green-500'
                                : 'bg-gray-200'
                            }`}
                          ></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-600">날짜 선택</span>
                    <span className="text-xs text-gray-600">시간 선택</span>
                    <span className="text-xs text-gray-600">인원 선택</span>
                    <span className="text-xs text-gray-600">결제</span>
                  </div>
                </div>

                {/* Step 1: Date Selection */}
                {step === 1 && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                      투어 날짜를 선택하세요
                    </h2>
                    <div className="flex justify-center">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border"
                        disabled={(date) => date < new Date()}
                      />
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() => setStep(2)}
                        disabled={!selectedDate}
                        className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        다음
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Time Selection */}
                {step === 2 && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                      투어 시간을 선택하세요
                    </h2>
                    <div className="grid grid-cols-3 gap-4">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-4 rounded-lg border-2 font-medium transition-all ${
                            selectedTime === time
                              ? 'border-blue-600 bg-blue-50 text-blue-600'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <Clock className="w-5 h-5 mx-auto mb-2" />
                          {time}
                        </button>
                      ))}
                    </div>
                    <div className="mt-6 flex justify-between">
                      <button
                        onClick={() => setStep(1)}
                        className="px-8 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        이전
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        disabled={!selectedTime}
                        className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        다음
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Participants */}
                {step === 3 && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                      참가 인원을 선택하세요
                    </h2>
                    <div className="max-w-md mx-auto">
                      <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Users className="w-6 h-6 text-blue-600" />
                          <span className="font-medium">인원 수</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => setParticipants(Math.max(1, participants - 1))}
                            className="w-10 h-10 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 font-bold"
                          >
                            -
                          </button>
                          <span className="text-xl font-bold w-12 text-center">
                            {participants}
                          </span>
                          <button
                            onClick={() => setParticipants(Math.min(15, participants + 1))}
                            className="w-10 h-10 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-4 text-center">
                        최대 15명까지 예약 가능합니다
                      </p>
                    </div>
                    <div className="mt-6 flex justify-between">
                      <button
                        onClick={() => setStep(2)}
                        className="px-8 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        이전
                      </button>
                      <button
                        onClick={() => setStep(4)}
                        className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        다음
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Payment */}
                {step === 4 && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                      결제 방법을 선택하세요
                    </h2>
                    <div className="space-y-3 mb-6">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          onClick={() => setPaymentMethod(method.id)}
                          className={`w-full p-4 rounded-lg border-2 font-medium transition-all flex items-center gap-3 ${
                            paymentMethod === method.id
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <method.icon className="w-6 h-6" />
                          <span>{method.name}</span>
                        </button>
                      ))}
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-gray-900 mb-4">예약자 정보</h3>
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="이름"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <input
                          type="email"
                          placeholder="이메일"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <input
                          type="tel"
                          placeholder="전화번호"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex justify-between">
                      <button
                        onClick={() => setStep(3)}
                        className="px-8 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        이전
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={!paymentMethod}
                        className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        결제하기
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  예약 정보
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">대학교</span>
                    <span className="font-medium text-gray-900">{uni.name}</span>
                  </div>
                  {selectedDate && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">날짜</span>
                      <span className="font-medium text-gray-900">
                        {selectedDate.toLocaleDateString('ko-KR')}
                      </span>
                    </div>
                  )}
                  {selectedTime && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">시간</span>
                      <span className="font-medium text-gray-900">{selectedTime}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">인원</span>
                    <span className="font-medium text-gray-900">{participants}명</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">1인 가격</span>
                    <span className="font-medium text-gray-900">
                      ₩{pricePerPerson.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-lg font-bold text-gray-900">총 결제 금액</span>
                    <span className="text-2xl font-bold text-blue-600">
                      ₩{totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-700">
                  <p className="font-semibold mb-2">환불 정책</p>
                  <ul className="space-y-1 text-xs">
                    <li>• 7일 전: 100% 환불</li>
                    <li>• 3~6일 전: 50% 환불</li>
                    <li>• 2일 전부터: 환불 불가</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
