"use strict";

window.ProjectData = [
  {
    id:1,
    title:"AI 챗봇 개발",
    domain:"LLM 애플리케이션",
    level:"기초",
    description:"LLM API를 활용한 대화형 챗봇을 개발한다.",
    tasks:[
      "서비스 요구사항 정의",
      "프롬프트 작성",
      "LLM API 연결",
      "대화 이력 관리",
      "기능 테스트"
    ],
    rubric:[
      {name:"기능 구현",weight:30},
      {name:"프롬프트 품질",weight:20},
      {name:"코드 품질",weight:20},
      {name:"오류 처리",weight:15},
      {name:"사용자 경험",weight:15}
    ]
  },
  {
    id:2,
    title:"RAG 지식 검색 시스템",
    domain:"LLM 애플리케이션",
    level:"응용",
    description:"외부 문서를 검색해 근거 기반 답변을 제공한다.",
    tasks:[
      "문서 업로드",
      "문서 청킹",
      "Embedding 생성",
      "벡터 검색",
      "검색 결과 기반 답변 생성"
    ],
    rubric:[
      {name:"문서 처리",weight:20},
      {name:"검색 정확도",weight:30},
      {name:"근거 충실도",weight:25},
      {name:"응답 품질",weight:15},
      {name:"오류 처리",weight:10}
    ]
  },
  {
    id:3,
    title:"AI Agent 자동화",
    domain:"AI Agent 개발",
    level:"응용",
    description:"외부 도구를 사용하는 AI Agent를 개발한다.",
    tasks:[
      "Agent 목표 정의",
      "도구 및 함수 정의",
      "Function Calling",
      "실행 제한 설정",
      "결과 검증"
    ],
    rubric:[
      {name:"작업 수행",weight:25},
      {name:"도구 활용",weight:25},
      {name:"권한 관리",weight:20},
      {name:"예외 처리",weight:15},
      {name:"안정성",weight:15}
    ]
  },
  {
    id:4,
    title:"AI 서비스 통합 배포",
    domain:"테스트와 배포",
    level:"심화",
    description:"AI 기반 웹 서비스를 개발하고 배포한다.",
    tasks:[
      "서비스 설계",
      "Frontend 구현",
      "Backend API 구현",
      "보안 및 테스트",
      "배포 및 모니터링"
    ],
    rubric:[
      {name:"기능 완성도",weight:25},
      {name:"아키텍처",weight:20},
      {name:"보안",weight:20},
      {name:"테스트",weight:15},
      {name:"배포 및 운영",weight:20}
    ]
  }
];