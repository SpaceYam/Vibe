
"use strict";

window.LessonContent = window.LessonContent || {};
LessonContent.vibe = [
{
concepts:[
"Vibe Coding은 자연어로 요구사항을 전달하고 AI의 코드 생성 및 수정 능력을 활용해 소프트웨어를 개발하는 방식이다.",
"AI는 개발자를 대체하는 검증자가 아니다. 설계, 코드 검토, 테스트, 보안과 운영 책임은 개발자에게 남는다.",
"작은 작업 단위로 요청하고 변경 사항을 확인하는 것이 전체 코드를 한 번에 생성하는 것보다 오류 추적에 유리하다."
],
example:`// 요구사항을 작은 기능으로 분리
const tasks = [
 "사용자 입력 검증",
 "API 호출",
 "응답 표시",
 "오류 처리",
 "테스트 작성"
];
console.log(tasks);`,
practice:"기존 웹 페이지에 검색 기능을 추가하도록 AI에 요청하고 변경 전후 파일을 비교한다.",
challenge:"AI가 만든 기능을 직접 테스트하고 발견한 오류와 수정 과정을 기록한다.",
checkpoint:"AI가 생성한 코드를 검증 없이 배포하면 안 되는 이유는?"
},
{
concepts:[
"요구사항은 기능 요구사항과 비기능 요구사항으로 나눈다.",
"기능 요구사항은 시스템이 수행해야 할 작업이고 비기능 요구사항은 성능, 보안, 사용성, 안정성 등의 기준이다.",
"수용 기준은 구현 완료 여부를 판단할 수 있는 구체적인 조건이다."
],
example:`const requirement = {
 feature:"로그인",
 acceptance:[
  "올바른 계정으로 로그인 가능",
  "잘못된 비밀번호 오류 표시",
  "인증 정보 안전하게 보관"
 ]
};`,
practice:"AI 챗봇의 사용자, 핵심 기능, 데이터, 예외, 수용 기준을 작성한다.",
challenge:"요구사항을 개발 가능한 작업 목록과 우선순위로 분해한다.",
checkpoint:"수용 기준이 모호하면 개발 과정에서 어떤 문제가 생기는가?"
},
{
concepts:[
"AI에 코드 생성을 요청할 때는 현재 파일 구조, 관련 코드, 변경 범위와 완료 기준을 함께 제공한다.",
"코드 생성 후에는 기존 기능과의 호환성, 의존성, 예외 처리와 데이터 흐름을 확인한다.",
"변경을 작은 단위로 나누고 각 단계에서 실행 가능한 상태를 유지한다."
],
example:`// 간단한 입력 검증
function validateEmail(value) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
}
console.log(validateEmail("dev@example.com"));`,
practice:"기존 함수 하나를 선택해 AI로 리팩터링하고 테스트 결과를 비교한다.",
challenge:"AI가 작성한 코드의 의존성 및 보안 위험을 검토하는 체크리스트를 작성한다.",
checkpoint:"AI에게 전체 파일을 무조건 재작성하도록 요청할 때 발생할 수 있는 위험은?"
},
{
concepts:[
"디버깅은 오류를 재현하고 원인을 좁힌 다음 수정하고 회귀 테스트하는 과정이다.",
"에러 메시지, 스택 트레이스, 입력값, 실행 환경을 함께 제공하면 AI가 원인을 분석하기 쉽다.",
"오류를 가리는 임시 수정과 근본 원인을 해결하는 수정은 구분해야 한다."
],
example:`def divide(a, b):
    if b == 0:
        raise ValueError("0으로 나눌 수 없습니다.")
    return a / b

try:
    print(divide(10, 0))
except ValueError as e:
    print(e)`,
practice:"일부러 발생시킨 예외를 로그와 함께 분석하고 수정한다.",
challenge:"동일한 버그가 다시 발생하지 않도록 회귀 테스트를 작성한다.",
checkpoint:"오류 메시지만 없애는 수정이 위험한 이유는?"
},
{
concepts:[
"리팩터링은 기능을 유지하면서 코드 구조를 개선하는 작업이다.",
"중복 제거, 함수 분리, 명확한 이름, 모듈화와 책임 분리가 주요 기법이다.",
"컨텍스트 관리는 AI에 제공하는 정보의 관련성과 최신성을 유지하는 과정이다."
],
example:`def calculate_total(items):
    return sum(
        item["price"] * item["quantity"]
        for item in items
    )`,
practice:"중복 코드가 있는 프로그램을 함수와 모듈로 분리한다.",
challenge:"AI 개발 프로젝트에 사용할 README, 구조 설명, 변경 이력과 테스트 문서를 작성한다.",
checkpoint:"기능이 동작하더라도 리팩터링이 필요한 경우는?"
}
];
