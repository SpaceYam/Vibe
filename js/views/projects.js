"use strict";

window.ProjectsView = {
  render() {
    return `
      <section class="page">
        <span class="eyebrow">PROJECT STUDIO</span>
        <h1>AI 개발 프로젝트</h1>
        <p>실제 AI 서비스를 기획하고 개발해 보세요.</p>

        <div class="course-grid">
          ${ProjectData.map(p => `
            <article class="course-card">
              <span class="eyebrow">${App.escape(p.level)}</span>
              <h2>${App.escape(p.title)}</h2>
              <p>${App.escape(p.description)}</p>
              <ul>
                ${p.tasks.map(t => `<li>${App.escape(t)}</li>`).join("")}
              </ul>
              <button class="btn primary"
                data-action="project"
                data-id="${p.id}">프로젝트 시작</button>
            </article>
          `).join("")}
        </div>

        <div class="panel">
          <h2>내 프로젝트 제출 내역</h2>
          <div id="submissionGrid" class="ag-theme-quartz"
            style="height:320px;width:100%"></div>
        </div>
      </section>`;
  },

  form(id) {
    const p = ProjectData.find(x => x.id === id);
    if (!p) return;

    const modal = document.getElementById("modal");

    modal.innerHTML = `
      <div class="modal-box wide">
        <h2>${App.escape(p.title)}</h2>
        <p>${App.escape(p.description)}</p>
        <label>프로젝트 설명</label>
        <textarea id="projectDescription" rows="5"></textarea>
        <label>GitHub 또는 배포 URL</label>
        <input id="projectUrl" placeholder="https://...">
        <div class="actions">
          <button class="btn outline" data-action="cancel">취소</button>
          <button class="btn primary" data-action="submit-project"
            data-id="${id}">제출</button>
        </div>
      </div>`;

    modal.classList.add("show");
  }
};