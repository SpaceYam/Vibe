
"use strict";

window.Quizzes = [
  // 1. AI와 인공지능 기초
  {
    id: 1, domain: "AI와 인공지능 기초",
    difficulty: "기초", type: "concept", seconds: 60,
    question: "지도학습(Supervised Learning)의 특징으로 가장 적절한 것은?",
    options: [
      "보상과 처벌을 통해 행동을 학습한다",
      "정답이 포함된 데이터를 이용해 학습한다",
      "정답 없이 데이터의 군집을 발견한다",
      "학습 없이 사람이 규칙을 직접 입력한다"
    ],
    answer: 1,
    explanation: "지도학습은 입력 데이터와 정답 레이블을 함께 사용해 입력과 출력 사이의 관계를 학습한다."
  },
  {
    id: 2, domain: "AI와 인공지능 기초",
    difficulty: "기초", type: "concept", seconds: 60,
    question: "모델이 훈련 데이터에서는 높은 성능을 보이지만 새로운 데이터에서 성능이 낮다면?",
    options: ["과소적합", "정규화", "과적합", "일반화"],
    answer: 2,
    explanation: "과적합은 학습 데이터의 세부 패턴이나 잡음까지 학습해 새로운 데이터에 대한 일반화 성능이 낮아지는 현상이다."
  },
  {
    id: 3, domain: "AI와 인공지능 기초",
    difficulty: "응용", type: "application", seconds: 120,
    question: "AI 분류 모델의 성능을 객관적으로 평가하기 위한 가장 적절한 방법은?",
    options: [
      "훈련 데이터로만 정확도를 측정한다",
      "테스트 데이터를 학습에 계속 추가한다",
      "훈련에 사용하지 않은 테스트 데이터로 평가한다",
      "학습 데이터의 개수를 무조건 늘린다"
    ],
    answer: 2,
    explanation: "테스트 데이터는 학습에 사용하지 않은 데이터여야 일반화 성능을 객관적으로 평가할 수 있다."
  },
  {
    id: 4, domain: "AI와 인공지능 기초",
    difficulty: "응용", type: "application", seconds: 120,
    question: "암 환자를 판별하는 모델에서 실제 환자를 정상으로 잘못 분류하는 상황을 줄이려면 어떤 지표를 우선 고려해야 하는가?",
    options: ["Recall", "Inference Latency", "Throughput", "Parameter Count"],
    answer: 0,
    explanation: "Recall은 실제 양성 중 양성으로 탐지한 비율이다. 환자를 놓치는 False Negative를 줄이는 데 중요하다."
  },
  {
    id: 5, domain: "AI와 인공지능 기초",
    difficulty: "심화", type: "reasoning", seconds: 180,
    question: "AI 모델의 정확도가 98%이지만 실제 서비스에서 만족도가 낮다. 가장 먼저 검토할 사항은?",
    options: [
      "모델 파라미터 수를 늘린다",
      "평가 데이터와 실제 서비스 데이터의 분포 차이를 확인한다",
      "학습 시간을 무조건 늘린다",
      "정확도가 높으므로 검토를 종료한다"
    ],
    answer: 1,
    explanation: "평가 데이터와 운영 데이터의 분포가 다르면 데이터 분포 변화(Data Drift)가 발생할 수 있다. 실제 운영 환경의 지표와 사용자 요구사항을 함께 확인해야 한다."
  },

  // 2. 프로그래밍과 웹 개발
  {
    id: 6, domain: "프로그래밍과 웹 개발",
    difficulty: "기초", type: "concept", seconds: 60,
    question: "Python에서 딕셔너리의 주요 특징은?",
    options: [
      "항상 정렬된 숫자만 저장한다",
      "키와 값의 쌍으로 데이터를 저장한다",
      "중복된 키를 여러 개 유지한다",
      "문자열만 저장할 수 있다"
    ],
    answer: 1,
    explanation: "딕셔너리는 키와 값의 쌍으로 데이터를 저장하며 키를 통해 값을 조회한다."
  },
  {
    id: 7, domain: "프로그래밍과 웹 개발",
    difficulty: "기초", type: "code", seconds: 90,
    question: "다음 Python 코드의 출력 결과는?",
    code: `values = [10, 20, 30]
print(sum(values) / len(values))`,
    options: ["10", "20.0", "30", "60"],
    answer: 1,
    explanation: "sum(values)는 60이고 len(values)는 3이므로 결과는 20.0이다."
  },
  {
    id: 8, domain: "프로그래밍과 웹 개발",
    difficulty: "응용", type: "code", seconds: 120,
    question: "다음 JavaScript 코드에서 발생하는 문제는?",
    code: `async function load() {
  const response = fetch("/api/users");
  return response.json();
}`,
    options: [
      "fetch는 문자열을 반환한다",
      "response는 Promise이므로 await가 필요하다",
      "async 함수 안에서는 return을 사용할 수 없다",
      "JSON은 JavaScript에서 사용할 수 없다"
    ],
    answer: 1,
    explanation: "fetch는 Promise를 반환한다. await fetch()로 응답을 받은 다음 response.json()을 호출해야 한다."
  },
  {
    id: 9, domain: "프로그래밍과 웹 개발",
    difficulty: "응용", type: "application", seconds: 120,
    question: "REST API에서 새로운 사용자 데이터를 생성할 때 일반적으로 사용하는 HTTP 메서드는?",
    options: ["GET", "POST", "DELETE", "HEAD"],
    answer: 1,
    explanation: "POST는 일반적으로 새로운 리소스를 생성하거나 서버에 데이터를 제출할 때 사용한다."
  },
  {
    id: 10, domain: "프로그래밍과 웹 개발",
    difficulty: "심화", type: "reasoning", seconds: 180,
    question: "AI 서비스에서 외부 API 응답이 느려지는 문제가 발생했다. 가장 적절한 대응은?",
    options: [
      "브라우저 화면을 계속 새로고침한다",
      "모든 요청을 동기 방식으로 변경한다",
      "타임아웃, 재시도 정책, 캐싱을 적절하게 설계한다",
      "API 오류를 무시한다"
    ],
    answer: 2,
    explanation: "네트워크 장애에 대비한 타임아웃과 제한된 재시도, 캐싱을 활용하면 안정성과 응답성을 개선할 수 있다."
  },


  // 3. Transformer와 LLM 구조
  {
    id: 11, domain: "Transformer와 LLM 구조",
    difficulty: "기초", type: "concept", seconds: 60,
    question: "LLM에서 토큰(Token)의 의미로 가장 적절한 것은?",
    options: [
      "항상 하나의 완성된 단어",
      "모델이 텍스트를 처리하는 기본 단위",
      "신경망의 가중치",
      "GPU의 메모리 단위"
    ],
    answer: 1,
    explanation: "토큰은 단어 전체일 수도 있고 단어의 일부, 문자 또는 기호일 수도 있다."
  },
  {
    id: 12, domain: "Transformer와 LLM 구조",
    difficulty: "기초", type: "concept", seconds: 60,
    question: "Transformer 아키텍처의 핵심 구성 요소는?",
    options: ["Self-Attention", "SQL JOIN", "TCP Handshake", "DOM Tree"],
    answer: 0,
    explanation: "Self-Attention은 입력 토큰 사이의 관계를 계산해 문맥 정보를 반영한다."
  },
  {
    id: 13, domain: "Transformer와 LLM 구조",
    difficulty: "응용", type: "concept", seconds: 120,
    question: "Embedding의 주요 목적은?",
    options: [
      "문장을 HTML로 변환한다",
      "텍스트 토큰을 벡터 공간의 수치 표현으로 변환한다",
      "모델의 가중치를 삭제한다",
      "API 요청을 암호화한다"
    ],
    answer: 1,
    explanation: "Embedding은 토큰이나 문장을 수치 벡터로 표현해 의미적 관계를 계산할 수 있도록 한다."
  },
  {
    id: 14, domain: "Transformer와 LLM 구조",
    difficulty: "응용", type: "reasoning", seconds: 120,
    question: "Self-Attention에서 Query, Key, Value의 역할을 올바르게 설명한 것은?",
    options: [
      "Query와 Key로 관련도를 계산하고 Value를 가중합한다",
      "Query는 토큰을 삭제하고 Key는 문장을 암호화한다",
      "Value는 모델의 학습률을 결정한다",
      "세 요소는 모두 동일한 역할을 한다"
    ],
    answer: 0,
    explanation: "Query와 Key의 유사도를 통해 Attention 가중치를 계산하고, 이를 Value에 적용해 문맥 표현을 만든다."
  },
  {
    id: 15, domain: "Transformer와 LLM 구조",
    difficulty: "심화", type: "reasoning", seconds: 180,
    question: "LLM의 긴 입력 문맥 처리에서 Context Window가 중요한 이유는?",
    options: [
      "모델의 인터넷 속도를 결정하기 때문에",
      "한 번의 입력과 생성 과정에서 처리할 수 있는 토큰 범위와 관련되기 때문에",
      "GPU 온도를 자동으로 낮추기 때문에",
      "모델의 학습 데이터를 무제한으로 늘리기 때문에"
    ],
    answer: 1,
    explanation: "Context Window는 모델이 한 번의 처리 과정에서 다룰 수 있는 문맥 토큰 범위와 관련된다."
  },

  // 4. 프롬프트 엔지니어링
  {
    id: 16, domain: "프롬프트 엔지니어링",
    difficulty: "기초", type: "concept", seconds: 60,
    question: "좋은 프롬프트를 구성하는 요소로 가장 적절한 것은?",
    options: [
      "역할, 목표, 맥락, 제약 조건, 출력 형식",
      "긴 문장만 작성",
      "모호한 지시를 최대한 많이 포함",
      "결과 형식을 지정하지 않음"
    ],
    answer: 0,
    explanation: "역할, 목표, 맥락, 제약 조건과 출력 형식을 명확하게 지정하면 결과의 일관성을 높이는 데 도움이 된다."
  },
  {
    id: 17, domain: "프롬프트 엔지니어링",
    difficulty: "기초", type: "concept", seconds: 60,
    question: "Few-shot Prompting이란?",
    options: [
      "모델을 처음부터 재학습하는 방법",
      "몇 가지 예시를 프롬프트에 제공하는 방법",
      "모델의 파라미터를 삭제하는 방법",
      "API 응답을 캐싱하는 방법"
    ],
    answer: 1,
    explanation: "Few-shot Prompting은 입력과 원하는 출력의 예시를 제공해 모델이 작업 패턴을 이해하도록 돕는다."
  },
  {
    id: 18, domain: "프롬프트 엔지니어링",
    difficulty: "응용", type: "application", seconds: 120,
    question: "AI가 반드시 JSON 형식으로 결과를 반환하도록 만들고 싶다. 가장 적절한 방법은?",
    options: [
      "결과 형식에 대한 지시 없이 요청한다",
      "JSON 스키마와 필수 필드를 명시하고 구조화 출력 기능을 활용한다",
      "프롬프트 길이만 늘린다",
      "Temperature를 최대로 설정한다"
    ],
    answer: 1,
    explanation: "출력 스키마를 명시하고 지원되는 경우 구조화 출력이나 JSON Schema 기반 기능을 사용하면 형식 준수율을 높일 수 있다."
  },
  {
    id: 19, domain: "프롬프트 엔지니어링",
    difficulty: "응용", type: "reasoning", seconds: 120,
    question: "프롬프트를 개선했지만 결과 품질이 오히려 불안정해졌다. 가장 적절한 접근은?",
    options: [
      "한 번의 성공 결과만 보고 확정한다",
      "평가 기준과 테스트 입력을 고정하고 변경 사항을 비교한다",
      "모든 제약 조건을 제거한다",
      "모델의 답변을 무조건 신뢰한다"
    ],
    answer: 1,
    explanation: "프롬프트 변경은 동일한 평가 데이터와 기준을 이용해 반복적으로 검증해야 한다."
  },
  {
    id: 20, domain: "프롬프트 엔지니어링",
    difficulty: "심화", type: "reasoning", seconds: 180,
    question: "프롬프트 인젝션 공격에 대한 적절한 방어 방법은?",
    options: [
      "사용자 입력을 시스템 지시보다 항상 우선한다",
      "외부 입력과 신뢰된 지시를 구분하고 도구 권한과 데이터 접근을 제한한다",
      "모든 외부 문서를 시스템 프롬프트에 그대로 추가한다",
      "모델에게 보안에 신경 쓰라고 한 번만 지시한다"
    ],
    answer: 1,
    explanation: "프롬프트만으로 보안을 보장할 수 없다. 신뢰 경계, 최소 권한, 입력 검증, 도구 실행 통제와 데이터 접근 제어가 필요하다."
  },


  // 5. AI Vibe Coding
  {
    id: 21, domain: "AI Vibe Coding",
    difficulty: "기초", type: "concept", seconds: 60,
    question: "Vibe Coding의 핵심적인 개발 방식은?",
    options: [
      "AI에게 모든 코드를 맡기고 검증하지 않는다",
      "자연어로 의도를 전달하고 AI와 반복적으로 코드를 만들고 검증한다",
      "프로그래밍 언어를 전혀 이해할 필요가 없다",
      "테스트를 생략한다"
    ],
    answer: 1,
    explanation: "Vibe Coding은 AI와 협업해 개발 속도를 높이는 접근이다. 개발자는 요구사항, 검증, 품질과 보안을 책임져야 한다."
  },
  {
    id: 22, domain: "AI Vibe Coding",
    difficulty: "기초", type: "concept", seconds: 60,
    question: "AI에게 기존 프로젝트의 기능을 수정하도록 요청할 때 가장 중요한 정보는?",
    options: [
      "프로젝트 구조와 기존 동작, 수정 목표 및 제약 조건",
      "개발자의 이름",
      "무조건 짧은 프롬프트",
      "파일의 색상"
    ],
    answer: 0,
    explanation: "프로젝트의 현재 구조와 변경 범위를 명확히 전달해야 기존 기능을 깨뜨릴 위험을 줄일 수 있다."
  },
  {
    id: 23, domain: "AI Vibe Coding",
    difficulty: "응용", type: "application", seconds: 120,
    question: "AI가 작성한 코드에서 오류가 발생했다. 가장 효과적인 대응은?",
    options: [
      "오류 메시지를 무시하고 계속 개발한다",
      "오류 재현 조건과 스택 트레이스, 관련 코드를 제공해 원인을 좁힌다",
      "프로젝트 전체를 무조건 삭제한다",
      "오류가 발생한 코드를 모두 주석 처리한다"
    ],
    answer: 1,
    explanation: "재현 가능한 정보와 오류 메시지를 활용하면 AI가 원인을 분석하고 수정안을 제시하기 쉬워진다."
  },
  {
    id: 24, domain: "AI Vibe Coding",
    difficulty: "응용", type: "reasoning", seconds: 120,
    question: "AI가 여러 파일을 한 번에 수정하려고 한다. 안전한 작업 방법은?",
    options: [
      "모든 변경을 즉시 적용한다",
      "변경 범위와 영향을 먼저 분석하고 작은 단위로 수정 후 테스트한다",
      "테스트 없이 배포한다",
      "기존 코드를 백업하지 않는다"
    ],
    answer: 1,
    explanation: "작은 단위의 변경과 단계별 검증은 회귀 오류를 발견하고 수정 범위를 추적하기 쉽게 만든다."
  },
  {
    id: 25, domain: "AI Vibe Coding",
    difficulty: "심화", type: "reasoning", seconds: 180,
    question: "AI가 생성한 코드가 정상 작동하지만 보안 취약점이 있을 수 있다. 가장 적절한 조치는?",
    options: [
      "정상 실행되므로 배포한다",
      "코드 리뷰, 의존성 검사, 입력 검증, 권한 및 보안 테스트를 수행한다",
      "AI가 생성했으므로 안전하다고 판단한다",
      "오류 로그를 모두 제거한다"
    ],
    answer: 1,
    explanation: "기능 테스트만으로 보안성을 보장할 수 없다. 별도의 보안 검토와 테스트가 필요하다."
  },

  // 6. LLM 애플리케이션
  {
    id: 26, domain: "LLM 애플리케이션",
    difficulty: "기초", type: "concept", seconds: 60,
    question: "LLM API를 활용하는 애플리케이션의 일반적인 구성은?",
    options: [
      "클라이언트, 서버, 모델 API",
      "모니터, 키보드, 마우스",
      "HTML만으로 구성된 정적 페이지",
      "데이터베이스만 존재하는 구조"
    ],
    answer: 0,
    explanation: "일반적으로 클라이언트가 서버에 요청하고 서버가 모델 API를 호출한 뒤 결과를 반환한다."
  },
  {
    id: 27, domain: "LLM 애플리케이션",
    difficulty: "기초", type: "concept", seconds: 60,
    question: "RAG의 주요 목적은?",
    options: [
      "LLM의 파라미터를 자동으로 삭제한다",
      "외부 지식 검색 결과를 활용해 응답의 근거를 보강한다",
      "API 통신을 제거한다",
      "모델의 토큰 수를 무조건 늘린다"
    ],
    answer: 1,
    explanation: "RAG는 검색된 외부 정보를 모델의 문맥으로 제공해 최신 정보나 특정 도메인 지식 활용을 돕는다."
  },
  {
    id: 28, domain: "LLM 애플리케이션",
    difficulty: "응용", type: "application", seconds: 120,
    question: "RAG 시스템에서 Vector Database를 사용하는 주된 이유는?",
    options: [
      "이미지를 압축하기 위해",
      "벡터 간 유사도를 이용해 관련 문서를 검색하기 위해",
      "사용자의 비밀번호를 저장하기 위해",
      "HTML을 생성하기 위해"
    ],
    answer: 1,
    explanation: "벡터 데이터베이스는 임베딩 간 유사도 검색을 통해 의미적으로 관련된 문서 조각을 찾는 데 사용된다."
  },
  {
    id: 29, domain: "LLM 애플리케이션",
    difficulty: "응용", type: "reasoning", seconds: 120,
    question: "RAG 응답의 정확도가 낮다. 가장 먼저 점검할 부분은?",
    options: [
      "검색된 문서의 관련성과 청킹, 검색 품질",
      "웹사이트의 배경색",
      "서버의 이름",
      "사용자의 모니터 해상도"
    ],
    answer: 0,
    explanation: "검색 단계에서 관련 문서를 가져오지 못하면 생성 모델도 올바른 근거를 활용하기 어렵다."
  },
  {
    id: 30, domain: "LLM 애플리케이션",
    difficulty: "심화", type: "reasoning", seconds: 180,
    question: "RAG 시스템의 품질을 종합적으로 평가하는 방법으로 가장 적절한 것은?",
    options: [
      "최종 답변의 길이만 비교한다",
      "검색 적합성, 근거 충실도, 답변 정확성과 사용자 요구 충족도를 함께 평가한다",
      "모델의 파라미터 수만 확인한다",
      "첫 번째 응답만 확인한다"
    ],
    answer: 1,
    explanation: "RAG 평가는 검색 단계와 생성 단계의 품질을 분리해 평가하고 실제 사용자 질문에 대한 성능도 확인해야 한다."
  },


  // 7. AI Agent 개발
  {
    id: 31, domain: "AI Agent 개발",
    difficulty: "기초", type: "concept", seconds: 60,
    question: "AI Agent의 특징으로 가장 적절한 것은?",
    options: [
      "입력 문장을 그대로 출력한다",
      "목표에 따라 상황을 판단하고 도구를 활용해 작업을 수행할 수 있다",
      "항상 인터넷에 무제한 접근한다",
      "사람의 승인 없이 모든 작업을 수행해야 한다"
    ],
    answer: 1,
    explanation: "AI Agent는 목표와 상황에 따라 추론하고 도구를 호출하는 작업 흐름을 구성할 수 있다."
  },
  {
    id: 32, domain: "AI Agent 개발",
    difficulty: "기초", type: "concept", seconds: 60,
    question: "Function Calling의 주요 역할은?",
    options: [
      "모델이 외부 함수나 도구를 구조화된 형태로 요청하도록 한다",
      "모델을 자동으로 재학습한다",
      "데이터베이스를 삭제한다",
      "HTML 스타일을 변경한다"
    ],
    answer: 0,
    explanation: "Function Calling은 모델이 도구 호출에 필요한 함수명과 인자를 구조화된 방식으로 표현하도록 한다. 실제 실행은 애플리케이션이 담당한다."
  },
  {
    id: 33, domain: "AI Agent 개발",
    difficulty: "응용", type: "application", seconds: 120,
    question: "Agent가 외부 API를 호출하기 전에 가장 중요한 검증은?",
    options: [
      "함수 이름의 길이",
      "인자 유효성, 권한, 실행 가능한 작업 범위",
      "브라우저의 글꼴",
      "모델의 이름"
    ],
    answer: 1,
    explanation: "도구 호출은 외부 시스템에 영향을 줄 수 있으므로 입력 검증과 권한 확인이 필수다."
  },
  {
    id: 34, domain: "AI Agent 개발",
    difficulty: "응용", type: "reasoning", seconds: 120,
    question: "Agent가 같은 작업을 반복하는 무한 루프에 빠졌다. 적절한 방어책은?",
    options: [
      "실행 시간을 무제한으로 허용한다",
      "최대 반복 횟수, 실행 시간 제한, 종료 조건을 설정한다",
      "오류 로그를 삭제한다",
      "모든 도구의 권한을 높인다"
    ],
    answer: 1,
    explanation: "실행 횟수와 시간 제한, 명확한 종료 조건을 통해 무한 실행과 비용 증가를 방지할 수 있다."
  },
  {
    id: 35, domain: "AI Agent 개발",
    difficulty: "심화", type: "reasoning", seconds: 180,
    question: "MCP(Model Context Protocol)의 주요 목적은?",
    options: [
      "LLM을 학습시키는 GPU 프로토콜",
      "AI 애플리케이션과 외부 도구 및 데이터 소스를 연결하는 표준화된 방식 제공",
      "웹페이지의 디자인을 통일하는 CSS 규격",
      "데이터베이스의 SQL 문법을 대체하는 언어"
    ],
    answer: 1,
    explanation: "MCP는 AI 애플리케이션이 도구와 리소스 등을 일관된 프로토콜로 연결하도록 돕는다."
  },

  // 8. 테스트와 배포
  {
    id: 36, domain: "테스트와 배포",
    difficulty: "기초", type: "concept", seconds: 60,
    question: "단위 테스트(Unit Test)의 주요 목적은?",
    options: [
      "시스템 전체를 실제 사용자에게 공개한다",
      "작은 기능 단위가 의도대로 작동하는지 확인한다",
      "서버를 자동으로 확장한다",
      "데이터베이스를 초기화한다"
    ],
    answer: 1,
    explanation: "단위 테스트는 함수나 클래스 등 작은 단위의 동작을 검증한다."
  },
  {
    id: 37, domain: "테스트와 배포",
    difficulty: "기초", type: "concept", seconds: 60,
    question: "Docker의 주요 목적은?",
    options: [
      "애플리케이션과 실행 환경을 컨테이너로 패키징한다",
      "코드를 자동으로 완벽하게 작성한다",
      "모델의 정확도를 자동으로 높인다",
      "네트워크를 제거한다"
    ],
    answer: 0,
    explanation: "Docker는 애플리케이션과 의존성을 컨테이너 이미지로 패키징해 환경 차이를 줄이는 데 도움을 준다."
  },
  {
    id: 38, domain: "테스트와 배포",
    difficulty: "응용", type: "application", seconds: 120,
    question: "AI API 키를 관리하는 가장 안전한 일반적인 방법은?",
    options: [
      "HTML에 API 키를 직접 작성한다",
      "GitHub 공개 저장소에 키를 업로드한다",
      "서버 환경변수나 안전한 Secret 관리 시스템을 사용한다",
      "사용자 브라우저에 키를 저장한다"
    ],
    answer: 2,
    explanation: "비밀 키는 클라이언트에 노출하지 않고 서버 측 환경변수나 Secret Manager를 통해 관리해야 한다."
  },
  {
    id: 39, domain: "테스트와 배포",
    difficulty: "응용", type: "reasoning", seconds: 120,
    question: "AI 서비스 배포 이후 응답 품질이 점점 낮아진다. 적절한 대응은?",
    options: [
      "서비스를 무조건 종료한다",
      "운영 로그, 데이터 변화, 모델 및 프롬프트 버전을 추적한다",
      "모든 사용자 요청을 무시한다",
      "모델의 이름만 변경한다"
    ],
    answer: 1,
    explanation: "운영 환경에서는 입력 분포와 사용자 요구가 변화할 수 있다. 로그와 평가 데이터를 이용해 성능 저하 원인을 추적해야 한다."
  },
  {
    id: 40, domain: "테스트와 배포",
    difficulty: "심화", type: "reasoning", seconds: 180,
    question: "AI 기반 서비스를 실제 배포하기 전 반드시 확인해야 할 항목으로 가장 적절한 것은?",
    options: [
      "화면 디자인만 확인한다",
      "기능, 보안, 개인정보, 성능, 장애 복구 및 모니터링을 종합적으로 검증한다",
      "AI 응답이 한 번 정상적으로 나오면 배포한다",
      "테스트를 생략하고 사용자 피드백으로만 검증한다"
    ],
    answer: 1,
    explanation: "실제 서비스는 기능뿐 아니라 보안, 개인정보 보호, 성능, 장애 대응과 운영 모니터링까지 검증해야 한다."
  }
];

console.info(
  `[VIBE SCHOOL] ${window.Quizzes.length} assessment questions loaded.`
);

