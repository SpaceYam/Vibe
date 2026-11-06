
"use strict";

window.LessonContent = window.LessonContent || {};
LessonContent.agent = [
{
concepts:[
"AI Agent는 모델이 목표를 이해하고 도구를 선택하거나 여러 단계를 수행하도록 구성한 시스템이다.",
"일반적인 구성은 모델, 시스템 지시, 도구, 상태, 실행 루프와 종료 조건이다.",
"모든 작업을 Agent로 구현할 필요는 없다. 명확한 순서의 작업은 일반적인 코드와 Workflow가 더 안정적일 수 있다."
],
example:`agent = {
 "goal":"문서 요약",
 "tools":["search","read","summarize"],
 "max_steps":5,
 "requires_review":True
}
print(agent)`,
practice:"문서 검색과 요약을 수행하는 Agent의 구성 요소를 설계한다.",
challenge:"Agent와 단순 LLM API 호출, 고정 Workflow의 차이를 비교한다.",
checkpoint:"Agent가 반드시 필요한 작업과 일반 코드로 충분한 작업의 차이는?"
},
{
concepts:[
"Tool Calling은 모델이 외부 함수의 실행을 요청하는 방식이다.",
"실제 도구 실행은 애플리케이션이 담당한다. 입력 검증, 권한 확인과 실행 결과 반환이 필요하다.",
"모델이 생성한 인자값을 신뢰하면 안 된다. 스키마와 허용 목록으로 검증해야 한다."
],
example:`def get_weather(city):
    allowed = {"Seoul", "Busan"}
    if city not in allowed:
        raise ValueError("허용되지 않은 도시")
    return {"city":city,"status":"example"}`,
practice:"계산기 도구를 정의하고 입력값 검증과 오류 처리를 구현한다.",
challenge:"도구 호출 실패, 잘못된 인자, 권한 부족 상황을 처리한다.",
checkpoint:"모델의 Tool Calling 요청을 그대로 실행하면 안 되는 이유는?"
},
{
concepts:[
"Workflow는 작업 단계, 분기, 상태와 실패 처리를 정의한다.",
"순차 실행, 병렬 실행, 조건 분기와 반복 구조를 조합할 수 있다.",
"각 단계는 입력과 출력을 명확히 정의해야 디버깅과 재실행이 쉬워진다."
],
example:`workflow = [
 "사용자 요청 분석",
 "자료 검색",
 "결과 검증",
 "응답 작성"
]
for step in workflow:
    print(step)`,
practice:"자료 검색과 답변 검증이 포함된 순차 Workflow를 설계한다.",
challenge:"검색 실패 시 재시도하고 반복 횟수를 제한하는 흐름을 만든다.",
checkpoint:"Workflow의 실행 단계를 명시적으로 관리해야 하는 이유는?"
},
{
concepts:[
"MCP는 AI 애플리케이션과 외부 도구 및 데이터 소스를 연결하기 위한 개방형 프로토콜이다.",
"서버는 도구, 리소스와 프롬프트 등을 제공할 수 있다.",
"연결된 도구의 권한과 데이터 접근 범위를 제한하고 신뢰할 수 있는 서버만 연결해야 한다."
],
example:`mcp_server = {
 "name":"internal-docs",
 "capabilities":["tools","resources"],
 "access":"read-only"
}
print(mcp_server)`,
practice:"내부 문서 검색 기능을 MCP 서버로 제공한다고 가정하고 도구 명세를 작성한다.",
challenge:"MCP 서버의 인증, 권한, 입력 검증과 감사 로그 정책을 설계한다.",
checkpoint:"MCP 도구에 최소 권한 원칙을 적용해야 하는 이유는?"
},
{
concepts:[
"Agent의 안정성은 종료 조건, 실행 단계 제한, 도구 권한, 시간 제한과 오류 복구에 영향을 받는다.",
"무한 반복, 중복 실행과 잘못된 외부 작업을 방지해야 한다.",
"중요한 작업은 사용자 승인 후 실행하고 모든 실행 내역을 기록하는 것이 안전하다."
],
example:`def run_agent(steps, max_steps=5):
    for i, step in enumerate(steps[:max_steps]):
        print(i + 1, step)
    return "completed"`,
practice:"실행 횟수와 시간 제한이 있는 Agent 실행 흐름을 만든다.",
challenge:"외부 결제나 데이터 변경 도구를 실행하기 전에 사용자 승인을 받는 구조를 설계한다.",
checkpoint:"Agent에 최대 실행 횟수와 사용자 승인 절차가 필요한 이유는?"
}
];
