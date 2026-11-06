
"use strict";

window.AssessmentView = {
  render() {
    const answers = Assessment.getAnswers();
    const count = Object.keys(answers).length;

    return `
      <section class="page">

        <div class="page-heading">
          <div>
            <span class="eyebrow">ASSESSMENT</span>

            <h1>
              ${State.examType === "pre"
                ? "사전 역량 평가"
                : "사후 역량 평가"}
            </h1>

            <p>문제별 제한 시간 안에 답변을 선택하세요.</p>
          </div>
        </div>

        <div class="panel exam-progress-panel">

          <div class="exam-progress-info">
            <strong>평가 진행 현황</strong>
            <span id="examCount">
              ${count}/${Quizzes.length} 완료
            </span>
          </div>

          <div class="progress-track">
            <div style="
              width:${count / Quizzes.length * 100}%;
            "></div>
          </div>

        </div>

        <div id="questionArea">
          ${this.question()}
        </div>

        <div class="panel exam-grid-panel">

          <h3>문제 목록</h3>

          <p>
            완료된 문제는 체크 표시되며 다시 수정할 수 없습니다.
          </p>

          <div
            id="questionGrid"
            class="ag-theme-quartz"
            style="height:450px;width:100%">
          </div>

        </div>

      </section>
    `;
  },

  question() {
    return Assessment.question();
  }
};
