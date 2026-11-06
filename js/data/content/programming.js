
"use strict";
window.LessonContent=window.LessonContent||{};
LessonContent.programming=[
{
concepts:[
"Python은 간결한 문법과 풍부한 라이브러리를 가진 범용 언어다. 변수, 자료형, 조건문, 반복문, 함수와 예외 처리를 익힌다.",
"리스트는 순서가 있는 데이터, 딕셔너리는 키와 값으로 데이터를 관리한다. JSON과 함께 AI 서비스에서 자주 사용된다.",
"함수는 입력을 처리하고 결과를 반환한다. 기능을 작고 재사용 가능한 단위로 분리하는 것이 중요하다."
],
example:`def summarize(values):
 if not values:
  return 0
 return sum(values)/len(values)
print(summarize([80,90,75]))`,
practice:"평균, 최댓값, 최솟값을 계산하는 프로그램을 작성한다.",
challenge:"입력 검증과 예외 처리를 추가한다.",
checkpoint:"return과 print의 차이는?"
},
{
concepts:[
"JavaScript는 브라우저와 서버에서 동작하는 프로그래밍 언어다.",
"Promise는 비동기 작업의 성공과 실패를 표현한다. async/await는 비동기 흐름을 읽기 쉽게 만든다.",
"DOM은 HTML 문서를 객체로 표현한다. 이벤트 리스너로 사용자 동작과 화면을 연결한다."
],
example:`async function loadData(){
 try{
  const r=await fetch("/api/data");
  if(!r.ok)throw new Error("요청 실패");
  return await r.json();
 }catch(e){
  console.error(e);
 }
}`,
practice:"버튼을 클릭하면 API를 요청하고 성공 및 실패 상태를 화면에 표시한다.",
challenge:"중복 API 요청을 방지하는 기능을 구현한다.",
checkpoint:"await를 사용하는 이유는?"
},
{
concepts:[
"자료구조는 데이터를 저장하고 접근하는 방법이다. 배열, 스택, 큐, 해시 테이블과 트리를 이해한다.",
"Big O는 입력 크기에 따른 연산량의 증가를 표현한다.",
"AI 서비스에서도 검색, 캐싱, 중복 제거와 데이터 처리에 자료구조가 중요하다."
],
example:`from collections import deque
queue=deque()
queue.append("task-1")
queue.append("task-2")
print(queue.popleft())`,
practice:"FIFO 방식의 작업 대기열을 구현한다.",
challenge:"리스트와 딕셔너리 검색 성능을 비교한다.",
checkpoint:"해시 테이블이 검색에 유리한 이유는?"
},
{
concepts:[
"HTML은 문서 구조, CSS는 디자인, JavaScript는 동작을 담당한다.",
"시맨틱 HTML은 header, nav, main, section 등의 의미 있는 요소로 문서를 구성한다.",
"반응형 디자인은 화면 크기에 맞춰 레이아웃을 조정한다. Flexbox, Grid와 미디어 쿼리를 활용한다."
],
example:`<main>
 <section>
  <h1>AI Assistant</h1>
  <input id="question">
  <button id="send">질문하기</button>
  <div id="result"></div>
 </section>
</main>`,
practice:"질문 입력, 전송, 응답 표시 기능을 가진 챗봇 화면을 만든다.",
challenge:"모바일과 데스크톱에서 동작하는 반응형 UI를 완성한다.",
checkpoint:"시맨틱 HTML이 중요한 이유는?"
},
{
concepts:[
"HTTP는 클라이언트와 서버 사이의 데이터 교환 규약이다.",
"GET, POST, PUT, PATCH, DELETE는 서로 다른 요청 목적을 가진다.",
"REST API는 리소스를 중심으로 설계한다. Git은 변경 이력을 관리한다."
],
example:`fetch("/api/tasks",{
 method:"POST",
 headers:{"Content-Type":"application/json"},
 body:JSON.stringify({title:"Learn AI"})
}).then(r=>r.json()).then(console.log);`,
practice:"할 일 API의 요청과 응답 JSON을 정의한다.",
challenge:"인증 실패, 잘못된 요청과 서버 오류의 응답 규격을 설계한다.",
checkpoint:"HTTP 401과 403의 차이는?"
}
];
