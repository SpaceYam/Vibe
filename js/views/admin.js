"use strict";

window.AdminView = {
  render() {
    return `
      <section class="page">
        <span class="eyebrow">ADMINISTRATION</span>
        <h1>관리자 시스템</h1>

        <div class="stats-grid">
          <div class="stat-card">
            <span>교육과정</span>
            <strong>${Courses.length}</strong>
          </div>
          <div class="stat-card">
            <span>평가 문항</span>
            <strong>${Quizzes.length}</strong>
          </div>
          <div class="stat-card">
            <span>프로젝트</span>
            <strong>${ProjectData.length}</strong>
          </div>
          <div class="stat-card">
            <span>강의</span>
            <strong>${Lessons.length}</strong>
          </div>
        </div>

        <div class="panel">
          <h2>평가 문제 은행</h2>
          <div id="adminQuizGrid" class="ag-theme-quartz"
            style="height:500px;width:100%"></div>
        </div>

        <div class="panel">
          <h2>프로젝트 관리</h2>
          <div id="adminProjectGrid" class="ag-theme-quartz"
            style="height:320px;width:100%"></div>
        </div>

        <div class="panel">
          <h2>데이터 관리</h2>
          <button class="btn outline" data-action="export">데이터 백업</button>
          <button class="btn danger" data-action="reset">학습 데이터 초기화</button>
        </div>
      </section>`;
  }
};