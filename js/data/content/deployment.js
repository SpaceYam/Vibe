
"use strict";

window.LessonContent = window.LessonContent || {};
LessonContent.deployment = [
{
concepts:[
"단위 테스트는 개별 함수와 모듈의 동작을 검증한다. 통합 테스트는 구성 요소 사이의 상호작용을 확인한다.",
"테스트는 정상 입력뿐 아니라 경계값, 잘못된 입력, 예외 상황을 포함해야 한다.",
"AI가 생성한 코드도 테스트 없이 신뢰할 수 없다. 테스트는 요구사항과 수용 기준을 기반으로 작성한다."
],
example:`def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0

test_add()`,
practice:"기존 함수에 정상, 경계, 잘못된 입력 테스트를 작성한다.",
challenge:"AI가 생성한 기능에 회귀 테스트를 추가하고 실패 사례를 기록한다.",
checkpoint:"단위 테스트와 통합 테스트의 차이는?"
},
{
concepts:[
"AI 서비스는 프롬프트 인젝션, 데이터 유출, 과도한 권한과 부적절한 출력에 노출될 수 있다.",
"외부 입력을 검증하고 비밀키를 보호하며 사용자별 접근 권한을 적용한다.",
"LLM 출력은 신뢰할 수 없는 데이터로 취급하고 HTML이나 SQL에 사용할 때 적절한 처리를 적용한다."
],
example:`def check_role(role):
    allowed = {"user", "admin"}
    if role not in allowed:
        raise ValueError("권한 오류")
    return role`,
practice:"사용자별 문서 접근 권한을 정의하고 다른 사용자의 문서 접근이 차단되는지 테스트한다.",
challenge:"프롬프트 인젝션과 민감정보 노출에 대한 방어 정책을 작성한다.",
checkpoint:"LLM이 생성한 문자열을 신뢰해서 SQL에 직접 삽입하면 안 되는 이유는?"
},
{
concepts:[
"Docker는 애플리케이션과 실행 환경을 이미지로 패키징한다.",
"컨테이너는 동일한 실행 환경을 제공해 개발과 배포 사이의 차이를 줄인다.",
"이미지 크기, 비밀정보, 포트, 네트워크와 볼륨 설정을 고려해야 한다."
],
example:`FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]`,
practice:"간단한 Python 애플리케이션의 Dockerfile을 작성하고 로컬에서 실행한다.",
challenge:"개발과 운영 환경의 설정값을 분리한다.",
checkpoint:"컨테이너에 비밀키를 이미지 내부에 저장하면 안 되는 이유는?"
},
{
concepts:[
"배포는 개발한 애플리케이션을 사용자가 접근할 수 있는 환경에 제공하는 과정이다.",
"환경변수, 데이터베이스, 도메인, HTTPS와 로그 수집을 구성해야 한다.",
"운영 단계에서는 응답시간, 오류율, 토큰 사용량과 비용을 지속적으로 관찰한다."
],
example:`health = {
 "status":"ok",
 "service":"ai-assistant",
 "version":"1.0.0"
}
print(health)`,
practice:"서비스의 Health Check와 오류 로그 구조를 설계한다.",
challenge:"장애 발생 시 알림, 롤백과 복구 절차를 문서화한다.",
checkpoint:"배포 후에도 모니터링이 필요한 이유는?"
},
{
concepts:[
"최종 프로젝트는 실제 문제를 정의하고 AI 기술을 적용해 동작하는 제품으로 완성하는 과정이다.",
"프로젝트는 요구사항, 아키텍처, 데이터 흐름, 구현, 테스트, 배포와 사용자 문서로 구성한다.",
"AI 사용 여부보다 문제 해결의 적합성, 결과의 신뢰성, 유지보수성과 보안이 중요하다."
],
example:`project = {
 "problem":"사내 문서 검색 시간 단축",
 "solution":"RAG 기반 AI Assistant",
 "evaluation":["검색 정확도","근거성","응답시간","비용"]
}
print(project)`,
practice:"자신의 목표에 맞는 AI 프로젝트를 정의하고 MVP를 구현한다.",
challenge:"실제 사용자 테스트와 성능 평가를 거쳐 개선 버전을 배포한다.",
checkpoint:"최종 프로젝트가 단순 코드 실행을 넘어 제품으로 평가받으려면 무엇이 필요한가?"
}
];
