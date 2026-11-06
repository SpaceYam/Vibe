
"use strict";

window.LessonContent = window.LessonContent || {};
LessonContent.llm = [
{
concepts:[
"LLM API는 외부 애플리케이션에서 언어 모델의 추론 기능을 호출하는 인터페이스다.",
"요청에는 모델, 메시지, 생성 옵션이 포함될 수 있다. 응답에는 생성 결과와 사용량 정보가 포함될 수 있다.",
"비밀키는 서버 환경변수나 비밀 저장소에 보관해야 한다. 브라우저 코드에 API Key를 넣으면 노출될 수 있다."
],
example:`# 서버 측 Python 개념 예제
import os

api_key = os.environ.get("LLM_API_KEY")
if not api_key:
    raise RuntimeError("API Key가 설정되지 않았습니다.")`,
practice:"LLM API 요청의 입력, 응답, 오류와 사용량을 정리한다.",
challenge:"요청 제한, 재시도, 타임아웃과 비용 기록을 포함하는 API 호출 구조를 설계한다.",
checkpoint:"브라우저에 비밀키를 직접 넣으면 안 되는 이유는?"
},
{
concepts:[
"Embedding 모델은 텍스트를 벡터로 변환해 의미적 검색에 활용한다.",
"Vector DB는 벡터와 원본 문서의 메타데이터를 함께 관리할 수 있다.",
"검색 품질은 청크 크기, 중복 구간, 임베딩 모델과 검색 전략의 영향을 받는다."
],
example:`documents = [
 {"text":"환불은 7일 이내 가능","source":"policy"},
 {"text":"배송은 평균 2일 소요","source":"delivery"}
]
for doc in documents:
    print(doc["source"], doc["text"])`,
practice:"문서를 작은 청크로 나누고 각 청크에 출처와 문서 ID를 부여한다.",
challenge:"키워드 검색과 벡터 검색 결과를 비교해 검색 품질을 평가한다.",
checkpoint:"벡터와 원본 문서의 메타데이터를 함께 보관하는 이유는?"
},
{
concepts:[
"RAG는 검색된 외부 정보를 LLM 입력에 포함해 응답을 생성하는 구조다.",
"일반적인 흐름은 문서 수집, 분할, 임베딩, 검색, 문맥 구성, 생성과 검증으로 구성된다.",
"검색 결과가 부정확하면 생성 결과도 나빠질 수 있다. 검색과 생성 단계를 분리해 평가해야 한다."
],
example:`def build_context(chunks):
    return "\\n".join(
        f"[출처: {x['source']}] {x['text']}"
        for x in chunks
    )

context = build_context([
    {"source":"규정","text":"환불은 7일 이내"}
])
print(context)`,
practice:"소규모 문서 집합으로 질문과 관련된 문서를 찾아 답변에 근거를 포함한다.",
challenge:"검색 실패, 문서 충돌, 근거 부족 상황에 대한 응답 정책을 설계한다.",
checkpoint:"RAG를 적용해도 환각이 완전히 사라지지 않는 이유는?"
},
{
concepts:[
"멀티모달 모델은 텍스트, 이미지, 음성 등 여러 형태의 정보를 입력 또는 출력으로 처리한다.",
"이미지 입력은 해상도와 패치 처리 방식에 따라 비용과 정보량이 달라진다.",
"음성 시스템은 음성 인식, 언어 모델 처리, 음성 합성 등의 단계를 결합할 수 있다."
],
example:`media_request = {
 "text":"이 이미지의 내용을 설명해줘",
 "image":"image-data",
 "task":"visual_question_answering"
}
print(media_request)`,
practice:"이미지 설명, 표 분석과 음성 변환 사례를 비교한다.",
challenge:"이미지 기반 문서 분석 AI의 오류 유형과 검증 방법을 정의한다.",
checkpoint:"이미지의 시각적 정보가 텍스트만으로 전달되지 않는 이유는?"
},
{
concepts:[
"LLM 평가는 정확성, 근거성, 관련성, 안전성, 지연시간과 비용을 함께 고려한다.",
"테스트 데이터는 실제 사용 사례와 실패 사례를 포함해야 한다.",
"모델이나 프롬프트 변경 시 동일한 평가 데이터로 이전 결과와 비교한다."
],
example:`results = [
 {"case":"정확성","score":4},
 {"case":"근거성","score":3},
 {"case":"안전성","score":5}
]
for item in results:
    print(item["case"], item["score"])`,
practice:"10개 이상의 테스트 질문으로 LLM 응답 평가표를 작성한다.",
challenge:"모델 변경 전후 품질과 비용을 비교하는 평가 파이프라인을 설계한다.",
checkpoint:"평균 점수만으로 모델 품질을 판단하면 안 되는 이유는?"
}
];
