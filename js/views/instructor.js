"use strict";

window.InstructorView = {
  render() {
    const history = Storage.get("examHistory", []);

    return `
      <section class="page">
        <span class="eyebrow">INSTRUCTOR CONSOLE</span>
        <h1>강사 대시보드</h1>

        <div class="stats-grid">
          <div class="stat-card">
            <span>등록 학습자</span>
            <strong>${State.profile ? 1 : 0}</strong>
          </div>
          <div class="stat-card">
            <span>평가 횟수</span>
            <strong>${history.length}</strong>
          </div>
          <div class="stat-card">
            <span>프로젝트 제출</span>
            <strong>${State.submissions.length}</strong>
          </div>
          <div class="stat-card">
            <span>평가 대기</span>
            <strong>${State.submissions.filter(x => x.score === null).length}</strong>
          </div>
        </div>

        <div class="panel">
          <h2>학습자 정보</h2>
          <div id="studentGrid" class="ag-theme-quartz"
            style="height:280px;width:100%"></div>
        </div>

        <div class="panel">
          <h2>프로젝트 평가</h2>
          <div id="instructorProjectGrid" class="ag-theme-quartz"
            style="height:320px;width:100%"></div>
        </div>
      </section>`;
  }
};