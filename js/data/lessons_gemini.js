"use strict";

window.Lessons = [
/*
  {
    id: 1,
    domain: "AI와 인공지능 기초",
    title: "인공지능과 머신러닝 이해",
    summary: "인공지능의 개념과 머신러닝의 기본 구조",
    content: `
      <h2>인공지능이란?</h2>
      <p>인공지능은 데이터와 알고리즘을 이용하여 인간의 인지적 작업을 수행하는 기술입니다.</p>
      <h2>머신러닝</h2>
      <p>머신러닝은 데이터를 기반으로 패턴을 학습하는 기술입니다.</p>
      <h2>핵심 학습 목표</h2>
      <ul>
        <li>지도학습과 비지도학습 이해</li>
        <li>과적합과 일반화 이해</li>
        <li>모델 평가 지표 이해</li>
      </ul>
    `
  }, */

{
    id: 101,
    domain: "AI와 인공지능 기초",
    title: "인공지능과 머신러닝의 이해",
    summary: "인공지능의 기본 개념부터 머신러닝, 딥러닝의 포함 관계와 학습 방식 학습",
    content: `
# 🤖 1. 인공지능(AI)이란 무엇인가?

인공지능(Artificial Intelligence, AI)은 컴퓨터가 인간의 학습, 추론, 지각 등 지능적인 능력을 모방하도록 하는 컴퓨터 과학의 한 분야입니다.

### 💡 인공지능의 주요 핵심 분야

| 분야 | 핵심 역할 및 설명 | 주요 활용 예시 |
|---|---|---|
| 🗣️ 자연어 처리 (NLP) | 인간의 언어를 이해하고 생성하는 기술 | ChatGPT, Claude, 기계번역 |
| 👁️ 컴퓨터 비전 | 이미지를 인식하고 시각 정보를 분석하는 기술 | 자율주행 객체 감지, 얼굴 인식 |
| 🎵 음성 처리 | 음성을 인식하고 자연스러운 소리로 합성하는 기술 | 음성 비서(Siri, Bixby), STT/TTS |
| ✍️ 생성형 AI | 텍스트, 이미지, 코드 등 새로운 콘텐츠를 창조하는 기술 | 미드저니, 챗봇, 코드 생성 |

---

# 🧠 2. AI ⊃ 머신러닝 ⊃ 딥러닝의 포함 관계

세 가지 개념은 서로 대체되는 것이 아니라 거대한 포함 관계를 가집니다.

\`\`\`text
[ 인공지능 (Artificial Intelligence)
    [ 머신러닝 (Machine Learning)
        [ 딥러닝 (Deep Learning) ]
    ]
]
\`\`\`

1. **인공지능 (AI):** 인간의 지능을 컴퓨터로 구현하는 **모든 기술의 총칭**입니다.
2. **머신러닝 (ML):** 사람이 직접 규칙을 코딩하는 대신, **데이터를 통해 컴퓨터가 스스로 규칙을 학습**하는 AI의 하위 분야입니다.
3. **딥러닝 (Deep Learning):** 머신러닝의 일종으로, **인공신경망을 여러 층(Deep)으로 쌓아** 복잡한 비정형 데이터를 처리하는 핵심 기술입니다.
    `
  },
  {
    id: 102,
    domain: "AI와 인공지능 기초",
    title: "머신러닝의 학습 방식과 과적합",
    summary: "지도학습, 비지도학습, 강화학습의 차이점과 머신러닝 모델 학습 시 주의할 점 이해",
    content: `
# 📊 1. 머신러닝의 3대 학습 방식

머신러닝은 데이터를 학습하는 방식에 따라 크게 세 가지로 분류됩니다.

## ① 지도학습 (Supervised Learning)
- **정답(Label)이 포함된 데이터**를 기반으로 학습하는 방식입니다.
- **대표 예시:** 스팸 메일 분류(정답: 스팸/정상), 집값 예측(정답: 실제 가격)

## ② 비지도학습 (Unsupervised Learning)
- **정답이 없는 데이터**를 입력하여 스스로 패턴이나 공통점을 찾아내는 방식입니다.
- **대표 예시:** 고객 군집화(Clustering), 이상 거래 탐지

## ③ 강화학습 (Reinforcement Learning)
- 정답 대신 **행동에 따른 보상(Reward)과 벌점(Penalty)**을 반복하며 최대의 이익을 내는 방향으로 학습합니다.
- **대표 예시:** 알파고, 로봇 제어 및 자율주행 주행 경로 최적화

---

# ⚠️ 2. 머신러닝 모델 학습 시 주의할 점 (과적합)

모델을 학습시킬 때 가장 경계해야 할 현상은 **과적합(Overfitting)**입니다.

- **과적합이란?** 학습 데이터(Train Data)에만 너무 과도하게 맞춰져서, 처음 보는 새로운 테스트 데이터(Test Data)에서는 엉뚱한 결과를 내는 현상입니다.
- **해결 방안:** 충분하고 다양한 데이터 확보, 모델의 복잡도 조절, 데이터 분할 및 교차 검증 활용

---

# 🎯 3. 핵심 정리 및 체크포인트

- [ ] AI, 머신러닝, 딥러닝의 포함 관계를 명확히 설명할 수 있는가?
- [ ] 지도학습과 비지도학습의 결정적 차이(정답의 유무)를 아는가?
- [ ] 과적합이 왜 발생하며 이를 방지하기 위한 대책을 이해했는가?
    `
  },
  {
    id: 201,
    domain: "프로그래밍 기초",
    title: "파이썬(Python) 기본 문법과 자료구조",
    summary: "AI 개발의 언어인 파이썬의 기초 문법(변수, 조건문, 반복문)과 주요 자료구조(리스트, 딕셔너리) 이해",
    content: `
# 🐍 1. 왜 파이썬(Python)인가?

파이썬은 문법이 간결하고 직관적이며, 방대한 AI 및 데이터 분석 라이브러리(TensorFlow, PyTorch, Pandas 등)를 지원하기 때문에 **인공지능 개발의 사실상 표준 언어**로 자리 잡았습니다.

### 💡 파이썬의 핵심 특징
- **가독성:** 영어 문장과 유사하여 코드가 눈에 잘 들어옵니다.
- **풍부한 생태계:** 데이터 과학 및 인공지능 분야의 오픈소스 패키지가 압도적으로 많습니다.
- **인터프리터 언어:** 코드를 한 줄씩 곧바로 실행하며 결과를 확인할 수 있습니다.

---

# 📦 2. 파이썬 주요 자료구조 (Data Structures)

데이터를 효율적으로 다루기 위해 파이썬이 기본 제공하는 자료구조입니다.

## ① 리스트 (List) - \`[]\`
- 값을 순서대로 저장하며, **수정(추가/삭제/변경)이 가능**합니다.
\`\`\`python
ai_models = ["ChatGPT", "Claude", "Gemini"]
ai_models.append("Llama")  # 데이터 추가
print(ai_models[0])        # 출력: ChatGPT
\`\`\`

## ② 딕셔너리 (Dictionary) - \`{{}}\`
- **키(Key)와 값(Value)**의 쌍으로 데이터를 저장하는 구조입니다.
\`\`\`python
model_info = {
    "name": "ChatGPT",
    "company": "OpenAI",
    "version": "GPT-4"
}
print(model_info["company"])  # 출력: OpenAI
\`\`\`
    `
  },
  {
    id: 202,
    domain: "프로그래밍 기초",
    title: "파이썬 함수와 객체지향 기초",
    summary: "코드의 재사용성을 높이는 함수의 정의 및 사용법과 객체지향 프로그래밍(OOP) 기초 개념 습득",
    content: `
# ⚙️ 1. 함수 (Function)의 정의와 활용

함수란 특정한 작업을 수행하는 코드의 집합(블록)으로, 반복되는 코드를 줄이고 **재사용성을 극대화**합니다.

\`\`\`python
# 함수의 정의
def calculate_accuracy(correct_count, total_count):
    accuracy = (correct_count / total_count) * 100
    return accuracy

# 함수의 호출
result = calculate_accuracy(85, 100)
print(f"모델 정확도: {{result}}%")  # 출력: 모델 정확도: 85.0%
\`\`\`

---

# 🏛️ 2. 객체지향 프로그래밍 (OOP) 기초

파이썬은 객체지향 언어입니다. 프로그램의 속성과 동작을 **클래스(Class)**와 **객체(Object)**로 나누어 설계합니다.

- **클래스(Class):** 객체를 만들어내기 위한 설계도 (예: \`LLMModel\` 템플릿)
- **인스턴스(Instance):** 설계도를 바탕으로 실제로 메모리에 구현된 실체 (예: \`gpt_4\`, \`claude_3\`)

\`\`\`python
class LLMModel:
    def __init__(self, name, parameters):
        self.name = name
        self.parameters = parameters
        
    def generate_text(self, prompt):
        return f"[{self.name}] '{prompt}'에 대한 응답 생성 완료"

# 객체 생성 및 활용
my_model = LLMModel("GPT-4o", "Billion+")
print(my_model.generate_text("안녕하세요!"))
\`\`\`

---

# 🎯 3. 핵심 정리 및 체크포인트

- [ ] 리스트와 딕셔너리의 차이점과 활용법을 이해했는가?
- [ ] 함수를 직접 만들고 반환값(\`return\`)을 처리할 수 있는가?
- [ ] 클래스와 객체의 개념을 감잡았는가?
    `
  },

/*
  {
    id: 2,
    domain: "프로그래밍과 웹 개발",
    title: "Python과 JavaScript 기초",
    summary: "AI 애플리케이션 개발을 위한 프로그래밍",
    content: `
      <h2>Python</h2>
      <p>Python은 AI와 데이터 처리 분야에서 널리 활용되는 언어입니다.</p>
      <h2>JavaScript</h2>
      <p>JavaScript는 웹 애플리케이션의 동작을 구현합니다.</p>
      <h2>API</h2>
      <p>API는 서로 다른 소프트웨어가 통신할 수 있도록 합니다.</p>
    `
  }, 
*/



/*
  {
    id: 3,
    domain: "Transformer와 LLM 구조",
    title: "Transformer 아키텍처",
    summary: "Self-Attention과 Transformer 구조",
    content: `
      <h2>Transformer</h2>
      <p>Transformer는 Attention 메커니즘을 핵심으로 사용하는 신경망 아키텍처입니다.</p>
      <h2>Self-Attention</h2>
      <p>Query, Key, Value를 사용하여 입력 토큰 간 관계를 계산합니다.</p>
      <h2>Embedding</h2>
      <p>텍스트를 벡터 공간의 수치 표현으로 변환합니다.</p>
    `
  },
*/



/*
  {
    id: 4,
    domain: "프롬프트 엔지니어링",
    title: "프롬프트 설계 원칙",
    summary: "명확하고 효과적인 프롬프트 작성",
    content: `
      <h2>프롬프트 구성</h2>
      <ul>
        <li>역할</li>
        <li>목표</li>
        <li>맥락</li>
        <li>제약 조건</li>
        <li>출력 형식</li>
      </ul>
      <p>Few-shot 방식은 예시를 제공하여 원하는 결과의 패턴을 설명합니다.</p>
    `
  },
*/



/*
  {
    id: 5,
    domain: "AI Vibe Coding",
    title: "AI 협업 개발 방법",
    summary: "자연어를 활용한 AI 기반 코딩",
    content: `
      <h2>Vibe Coding</h2>
      <p>개발자의 의도를 자연어로 전달하고 AI와 반복적으로 코드를 생성하고 개선하는 방식입니다.</p>
      <h2>검증</h2>
      <p>AI가 생성한 코드는 반드시 테스트와 코드 리뷰를 거쳐야 합니다.</p>
    `
  },
*/



/*
  {
    id: 6,
    domain: "LLM 애플리케이션",
    title: "RAG 시스템 이해",
    summary: "검색 증강 생성 구조",
    content: `
      <h2>RAG</h2>
      <p>외부 지식을 검색하고 이를 LLM에 전달하여 답변을 생성합니다.</p>
      <h2>주요 구성</h2>
      <ul>
        <li>문서 수집</li>
        <li>청킹</li>
        <li>Embedding</li>
        <li>Vector Search</li>
        <li>Answer Generation</li>
      </ul>
    `
  },
*/



/*
  {
    id: 7,
    domain: "AI Agent 개발",
    title: "AI Agent와 도구 활용",
    summary: "Function Calling과 MCP",
    content: `
      <h2>AI Agent</h2>
      <p>목표를 달성하기 위해 상황을 판단하고 도구를 호출하는 시스템입니다.</p>
      <h2>Function Calling</h2>
      <p>모델이 외부 함수 호출에 필요한 정보를 구조화된 형태로 전달합니다.</p>
      <h2>권한 관리</h2>
      <p>도구 실행에는 입력 검증과 최소 권한 원칙이 필요합니다.</p>
    `
  },
*/



/*
  {
    id: 8,
    domain: "테스트와 배포",
    title: "AI 서비스 테스트와 배포",
    summary: "운영 안정성 및 보안",
    content: `
      <h2>테스트</h2>
      <p>단위 테스트와 통합 테스트를 통해 기능을 검증합니다.</p>
      <h2>보안</h2>
      <p>API Key는 서버 측 Secret 관리 시스템으로 보호합니다.</p>
      <h2>배포</h2>
      <p>모니터링과 장애 복구 전략을 준비해야 합니다.</p>
    `
  }
*/


];