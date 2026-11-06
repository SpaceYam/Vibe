"use strict";

window.TutorView = {
  render() {
    return `
      <section class="page">
        <span class="eyebrow">AI LEARNING ASSISTANT</span>
        <h1>AI 튜터</h1>
        <p>학습 중 궁금한 내용을 질문해 보세요.</p>

        <div class="panel tutor-panel">
          <div id="tutorMessages">
            <div class="chat-message assistant">
              안녕하세요! AI Vibe Developer 학습을 도와드리겠습니다.
            </div>
            ${State.tutorHistory.map(x => `
              <div class="chat-message user">
                ${App.escape(x.question)}
              </div>
              <div class="chat-message assistant">
                ${App.escape(x.answer)}
              </div>
            `).join("")}
          </div>

          <div class="chat-input">
            <textarea id="tutorQuestion" rows="2"
              placeholder="예: RAG와 Fine-tuning의 차이를 설명해 주세요."></textarea>
            <button class="btn primary" data-action="ask-tutor">질문하기</button>
          </div>
        </div>
        <p class="hint">현재 데모 응답을 제공합니다. 실제 AI 튜터는 서버 측 모델 API 연동이 필요합니다.</p>
      </section>`;
  }
};