
"use strict";
window.LessonContent=window.LessonContent||{};
LessonContent.ai=[
{
concepts:[
"인공지능은 인간의 인지적 작업을 기계가 수행하도록 만드는 기술이다. 규칙 기반 시스템과 데이터 기반 학습 시스템은 접근 방식이 다르다.",
"머신러닝은 데이터에서 패턴을 학습한다. 지도학습은 정답이 있는 데이터, 비지도학습은 정답 없이 구조를 발견하는 데이터, 강화학습은 보상을 통해 행동을 개선한다.",
"딥러닝은 여러 층의 신경망을 통해 특징을 학습한다. 손실 함수, 역전파, 경사하강법이 핵심 구성이다.",
"생성형 AI는 학습된 패턴을 바탕으로 콘텐츠를 생성한다. 확률적 생성 특성 때문에 환각과 편향이 발생할 수 있다."
],
example:`from sklearn.linear_model import LinearRegression
X = [[1], [2], [3], [4]]
y = [2, 4, 6, 8]
model = LinearRegression()
model.fit(X, y)
print(model.predict([[5]]))`,
practice:"간단한 예측 모델을 만들고 학습 데이터와 테스트 데이터의 성능을 비교한다.",
challenge:"분류와 회귀 문제를 각각 설계하고 적합한 모델을 선택한다.",
checkpoint:"테스트 데이터를 학습에 사용하면 어떤 문제가 발생하는가?"
},
{
concepts:[
"AI 시스템은 데이터 수집, 전처리, 모델 학습, 추론, 후처리로 구성된다.",
"과적합은 모델이 학습 데이터에 지나치게 맞춰져 새로운 데이터에서 성능이 떨어지는 현상이다.",
"훈련, 검증, 테스트 데이터는 각각 모델 학습, 모델 선택, 최종 성능 평가에 활용한다."
],
example:`from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(
 X, y, test_size=0.2, random_state=42
)
model.fit(X_train, y_train)
print(model.score(X_test, y_test))`,
practice:"훈련 데이터와 테스트 데이터의 성능 차이를 관찰한다.",
challenge:"데이터가 부족한 상황에서 과적합을 줄이는 전략을 세 가지 제안한다.",
checkpoint:"검증 데이터와 테스트 데이터의 역할은 어떻게 다른가?"
},
{
concepts:[
"생성형 AI는 텍스트, 이미지, 음성 등의 새로운 콘텐츠를 생성하는 모델을 포함한다.",
"Temperature는 다음 토큰의 확률 분포를 조절한다. 값이 높으면 출력의 다양성이 커질 수 있다.",
"생성 결과는 유창하더라도 사실과 다를 수 있으므로 출처 검증과 테스트가 필요하다."
],
example:`criteria = [
 "사실 정확성",
 "요구사항 충족",
 "출처와 근거",
 "일관성",
 "안전성"
]
for item in criteria:
 print(item)`,
practice:"같은 질문을 반복 입력해 결과의 일관성을 비교한다.",
challenge:"AI 환각 사례를 찾아 검증 절차를 설계한다.",
checkpoint:"언어 모델의 유창함이 사실의 정확성을 보장하지 않는 이유는?"
},
{
concepts:[
"LLM은 대규모 텍스트 데이터에서 언어의 패턴을 학습하는 모델이다.",
"모델의 파라미터는 학습 과정에서 조정되는 수치다. 파라미터 수가 많다고 모든 작업에서 우수한 것은 아니다.",
"모델 성능은 학습 데이터, 아키텍처, 학습 방법, 추론 설정과 평가 기준의 영향을 받는다."
],
example:`model_info = {
 "architecture":"Transformer",
 "task":"Next Token Prediction",
 "input":"Token Sequence",
 "output":"Probability Distribution"
}
print(model_info)`,
practice:"서로 다른 LLM에 같은 질문을 입력하고 응답 품질과 비용을 기록한다.",
challenge:"정확도, 비용, 속도, 보안을 고려한 모델 선택 기준을 작성한다.",
checkpoint:"파라미터 수만으로 모델을 평가하기 어려운 이유는?"
},
{
concepts:[
"AI 시스템은 개인정보, 저작권, 편향과 허위정보 문제를 고려해야 한다.",
"민감정보는 외부 모델에 전달하지 않도록 데이터 최소화와 접근 통제를 적용한다.",
"중요한 의사결정에는 사람이 검토할 수 있는 근거와 감사 기록이 필요하다."
],
example:`def sanitize_input(value):
 if not isinstance(value, str):
  raise TypeError("문자열만 허용")
 return value.strip()[:1000]`,
practice:"AI 서비스에서 허용할 정보와 제한할 정보를 구분한다.",
challenge:"사내 문서 AI 서비스의 개인정보 보호 정책을 작성한다.",
checkpoint:"데이터 최소화가 AI 서비스에 중요한 이유는?"
}
];
