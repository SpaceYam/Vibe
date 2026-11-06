
"use strict";

window.LessonContent = window.LessonContent || {};
LessonContent.prompt = [
{
concepts:[
"프롬프트는 모델에 전달하는 작업 지시와 입력 맥락이다.",
"역할, 목표, 배경, 입력 데이터, 제약 조건, 출력 형식을 구분하면 모호성을 줄일 수 있다.",
"한 번에 많은 지시를 나열하기보다 우선순위와 성공 기준을 명시하는 것이 좋다."
],
example:`const prompt = {
 role:"Python 시니어 개발자",
 goal:"CSV 분석 프로그램 작성",
 context:"초보 개발자 대상",
 constraints:["표준 라이브러리 사용","예외 처리"],
 output:"코드와 테스트"
};`,
practice:"모호한 프롬프트를 구체적인 요구사항과 수용 기준이 있는 프롬프트로 개선한다.",
challenge:"동일한 개발 목표에 대해 간결한 프롬프트와 상세한 프롬프트의 결과를 비교한다.",
checkpoint:"좋은 프롬프트에서 성공 기준을 명시하는 이유는?"
},
{
concepts:[
"Role은 모델의 응답 관점을 지정하고 Context는 작업에 필요한 배경 정보를 제공한다.",
"시스템 지시와 사용자 요청의 역할을 구분하고 서로 충돌하는 지시를 방지해야 한다.",
"제약 조건은 사용 기술, 금지 사항, 성능, 보안과 응답 범위를 명확하게 제한한다."
],
example:`const prompt = \`
역할: 보안 중심 백엔드 개발자
목표: 로그인 API 설계
맥락: JWT 인증 사용
제약: 비밀키 하드코딩 금지
출력: 설계, 코드, 테스트
\`;`,
practice:"기존 프로젝트의 기술 스택과 파일 구조를 Context에 포함해 코드 변경을 요청한다.",
challenge:"요구사항이 서로 충돌하는 상황을 만들고 모델이 먼저 질문하도록 유도한다.",
checkpoint:"Context가 너무 길어지면 어떤 문제가 생길 수 있는가?"
},
{
concepts:[
"Zero-shot은 별도 예시 없이 지시를 수행하도록 요청하는 방식이다.",
"One-shot과 Few-shot은 입력과 원하는 출력 예시를 제공한다.",
"예시는 원하는 형식과 판단 기준을 구체화하지만 편향이나 잘못된 패턴을 함께 전달할 수도 있다."
],
example:`prompt = """
다음 감정을 분류하세요.

예시:
문장: 정말 만족스럽다
결과: 긍정

문장: 사용하기 불편하다
결과:
"""`,
practice:"예시가 없는 프롬프트와 3개 예시가 있는 프롬프트의 분류 결과를 비교한다.",
challenge:"경계 사례와 예외 사례를 포함한 Few-shot 예시 세트를 작성한다.",
checkpoint:"예시가 부적절하면 모델 출력에 어떤 문제가 생기는가?"
},
{
concepts:[
"구조화 출력은 응답을 JSON 등 정해진 형식으로 반환하도록 제한하는 방법이다.",
"JSON Schema는 필드, 타입, 필수값과 허용 범위를 정의한다.",
"형식 검증뿐 아니라 값의 의미와 업무 규칙을 검증하는 후처리도 필요하다."
],
example:`const schema = {
 type:"object",
 required:["title","priority"],
 properties:{
  title:{type:"string"},
  priority:{type:"number",minimum:1,maximum:5}
 }
};`,
practice:"프로젝트 작업 목록을 표현하는 JSON Schema를 정의한다.",
challenge:"잘못된 형식과 누락 필드를 탐지하고 재요청하는 흐름을 설계한다.",
checkpoint:"JSON 파싱 성공만으로 응답의 정확성을 보장할 수 없는 이유는?"
},
{
concepts:[
"프롬프트 평가는 여러 테스트 입력을 이용해 반복적으로 수행해야 한다.",
"정확성, 일관성, 근거성, 형식 준수, 안전성을 각각 측정한다.",
"프롬프트 변경 전후의 결과를 동일한 테스트 데이터로 비교하고 회귀 오류를 확인한다."
],
example:`cases = [
 {"input":"환불 정책","expected":"정책 근거 포함"},
 {"input":"배송 문의","expected":"배송 정보 포함"}
]
for case in cases:
 print(case["input"], case["expected"])`,
practice:"최소 10개 테스트 질문을 만들고 각 결과를 평가표에 기록한다.",
challenge:"프롬프트 버전 관리와 자동 평가 기준을 설계한다.",
checkpoint:"한 번 성공한 응답만으로 프롬프트 품질을 판단하면 안 되는 이유는?"
}
];
