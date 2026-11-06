
"use strict";

window.PromptLab = {
  result: "",

  render() {
    return `
      <section class="page">

        <section class="card">
          <span class="tag">PROMPT ENGINEERING LAB</span>

          <h1>프롬프트 빌더</h1>

          <p>AI에게 전달할 개발 지시서를 설계하세요.</p>

          <label>AI 역할</label>
          <input id="prRole"
            value="시니어 AI 소프트웨어 개발자">

          <label>개발 목표</label>
          <textarea id="prGoal"
            placeholder="예: 사내 문서 검색 AI 챗봇"></textarea>

          <label>프로젝트 배경</label>
          <textarea id="prContext"
            placeholder="사용자와 해결할 문제"></textarea>

          <label>사용 기술</label>
          <input id="prTech"
            value="Python, JavaScript, LLM API">

          <label>필수 기능</label>
          <textarea id="prFeatures"
            placeholder="필요한 기능을 작성하세요."></textarea>

          <label>제약 조건</label>
          <textarea id="prRules"
            placeholder="보안, 성능, 파일 구조 등"></textarea>

          <label>출력 형식</label>
          <select id="prFormat">
            <option>구현 계획 + 코드 + 테스트</option>
            <option>단계별 개발 가이드</option>
            <option>JSON 구조화 출력</option>
            <option>코드 리뷰 및 개선안</option>
          </select>

          <button class="btn primary"
            data-action="generate-prompt">
            프롬프트 생성
          </button>

        </section>

        <section class="card">

          <h2>생성 결과</h2>

          <pre id="promptResult">입력값을 작성해 주세요.</pre>

          <button class="btn teal"
            data-action="copy-prompt">
            복사하기
          </button>

        </section>

      </section>
    `;
  },

  generate() {
    const get = id =>
      document.getElementById(id)?.value.trim() || "";

    if (!get("prGoal")) {
      App.toast("개발 목표를 입력해 주세요.");
      return;
    }

    this.result = `
[ROLE]
${get("prRole")}

[OBJECTIVE]
${get("prGoal")}

[CONTEXT]
${get("prContext")}

[TECHNOLOGY]
${get("prTech")}

[FEATURES]
${get("prFeatures")}

[CONSTRAINTS]
${get("prRules")}

[INSTRUCTIONS]
1. 요구사항과 누락 사항을 분석한다.
2. 시스템 구조와 데이터 흐름을 설계한다.
3. 구현 순서와 파일 구조를 제시한다.
4. 실행 가능한 코드를 작성한다.
5. 테스트와 예상 결과를 제시한다.
6. 보안과 오류 가능성을 검토한다.

[OUTPUT FORMAT]
${get("prFormat")}

불명확한 요구사항은 임의로 가정하지 말고 질문한다.
    `.trim();

    document.getElementById("promptResult").textContent =
      this.result;

    App.toast("프롬프트가 생성되었습니다.");
  },

  copy() {
    if (!this.result) {
      App.toast("먼저 프롬프트를 생성하세요.");
      return;
    }

    navigator.clipboard.writeText(this.result)
      .then(() => App.toast("프롬프트를 복사했습니다."))
      .catch(() => App.toast("브라우저 복사 권한을 확인하세요."));
  }
};
