"use strict";

window.Tutor = {
  async ask(question) {
    if (!question.trim()) {
      App.toast("질문을 입력하세요.");
      return;
    }

    const response = {
      question,
      answer: this.demoAnswer(question),
      date: new Date().toISOString()
    };

    State.tutorHistory.push(response);
    State.persist();

    return response;
  },

  demoAnswer(question) {
    const q = question.toLowerCase();

    if (q.includes("rag")) {
      return "RAG는 외부 문서를 검색하고 검색 결과를 LLM에 제공해 근거 기반 답변을 생성하는 방식입니다. 문서 청킹, 임베딩, 검색, 답변 생성 단계로 구성됩니다.";
    }

    if (q.includes("prompt")) {
      return "좋은 프롬프트에는 역할, 목표, 맥락, 제약 조건, 출력 형식이 명확하게 포함되어야 합니다.";
    }

    if (q.includes("agent")) {
      return "AI Agent는 목표를 달성하기 위해 상황을 판단하고 필요한 도구를 선택하여 작업을 수행하는 시스템입니다.";
    }

    return "질문을 확인했습니다. 학습 자료의 관련 개념을 살펴보고, 목표와 입력 조건을 구체화한 뒤 작은 예제로 검증해 보세요. 현재는 데모 답변이며 실제 AI 응답은 서버 API 연결 후 제공됩니다.";
  }
};