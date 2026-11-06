
"use strict";

window.App = {
  charts: [],
  grids: [],
  confirmAction: null,
  toastTimer: null,

  escape(value) {
    return String(value ?? "").replace(/[&<>"']/g, c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[c]);
  },

  toast(message) {
    const el = document.getElementById("toast");
    if (!el) return;

    el.textContent = message;
    el.classList.add("show");

    clearTimeout(this.toastTimer);

    this.toastTimer = setTimeout(
      () => el.classList.remove("show"),
      2500
    );
  },

  modal(title, message, callback) {
    this.confirmAction = callback;

    const el = document.getElementById("modal");

    el.innerHTML = `
      <div class="modal-box">
        <h2>${this.escape(title)}</h2>
        <p>${this.escape(message)}</p>

        <div class="actions">
          <button class="btn outline"
            data-action="cancel">취소</button>

          <button class="btn primary"
            data-action="confirm">확인</button>
        </div>
      </div>`;

    el.classList.add("show");
  },

  closeModal() {
    document.getElementById("modal")?.classList.remove("show");
    this.confirmAction = null;
  },

  updateQuestion() {
    const area = document.getElementById("questionArea");

    if (area) {
      area.innerHTML = Assessment.question();
    }

    const answers = Assessment.getAnswers();
    const count = Object.keys(answers).length;

    const label = document.getElementById("examCount");

    if (label) {
      label.textContent = `${count}/${Quizzes.length} 완료`;
    }

    const bar = document.querySelector(
      ".exam-progress-panel .progress-track > div"
    );

    if (bar) {
      bar.style.width =
        `${count / Quizzes.length * 100}%`;
    }

    Assessment.updateGrid();

    Assessment.updateTimerDisplay();
  },

  destroy() {
    Assessment.destroy();

    if (window.ReportView) {
      ReportView.destroy();
    }

    this.grids.forEach(grid => grid.destroy());

    this.grids = [];

    this.charts.forEach(chart => chart.destroy());

    this.charts = [];
  },

  createGrid(elementId, options) {
    const el = document.getElementById(elementId);

    if (!el || !window.agGrid) return null;

    const grid = agGrid.createGrid(el, {
      defaultColDef: {
        sortable: true,
        filter: true,
        resizable: true,
        floatingFilter: true
      },

      // pagination: true,
      paginationPageSize: 10,
      animateRows: true,

      ...options
    });

    this.grids.push(grid);

    return grid;
  },

  render() {
    this.destroy();

    const pages = {
      profile: HomeView.profile(),
      home: HomeView.render(),
      learning: Learning.render(),
      lesson: LessonView.render(),
      assessment: AssessmentView.render(),
      prompt: PromptLab.render(),
      projects: ProjectsView.render(),
      report: ReportView.render(),
      tutor: TutorView.render()
    };

    const page = State.profile
      ? State.page
      : "profile";

    State.page = page;

    document.getElementById("app").innerHTML = `
      <header class="topbar">

        <a class="logo" href="#" data-action="home">
          VIBE<span>SCHOOL · AI ACADEMY</span>
        </a>

        ${State.profile ? `
          <nav class="nav">
            <button data-action="home">대시보드</button>
            <button data-action="learning">교육과정</button>
            <button data-action="pre">역량 진단</button>
            <button data-action="prompt">프롬프트 실습</button>
            <button data-action="projects">프로젝트</button>
            <button data-action="tutor">AI 튜터</button>
            <button data-action="report">리포트</button>
          </nav>
        ` : ""}

      </header>

      <main>${pages[page] || pages.home}</main>

      <footer>
        VIBE SCHOOL · AI VIBE DEVELOPER ACADEMY
      </footer>
    `;

    if (page === "assessment") {
      Assessment.grid = this.createGrid(
        "questionGrid",
        {
          getRowId: p => String(p.data.no),

          rowData: Quizzes.map((q, i) => ({
            no: i + 1,
            domain: q.domain,
            question: q.question,
            status: Assessment.isCompleted(i)
              ? "✓ 완료"
              : Assessment.isExpired(i)
                ? "시간 초과"
                : "미완료"
          })),

          columnDefs: [
            { field: "no", headerName: "번호", width: 80 },
            { field: "domain", headerName: "영역", width: 170 },
            { field: "question", headerName: "문제", flex: 1 },
            { field: "status", headerName: "상태", width: 120 }
          ],

          onRowClicked: params => {
            Assessment.select(params.data.no - 1);
          },

          suppressCellFocus: true
        }
      );

      Assessment.startTimer();
    }

    if (page === "projects") {
      this.createGrid("submissionGrid", {
        rowData: State.submissions,
        columnDefs: [
          { field: "title", headerName: "프로젝트", flex: 1 },
          { field: "status", headerName: "상태" },
          { field: "score", headerName: "점수" },
          { field: "date", headerName: "제출일" }
        ]
      });
    }

    if (page === "report") {
      ReportView.init();
    }
  },

  exportData() {
    const data = {
      profile: State.profile,
      answers: State.answers,
      preAnswers: State.preAnswers,
      afterAnswers: State.afterAnswers,
      expiredQuestions: State.expiredQuestions,
      completedLessons: State.completedLessons,
      lessonNotes: State.lessonNotes,
      projects: State.projects,
      submissions: State.submissions,
      prompts: State.prompts,
      examHistory: Storage.get("examHistory", [])
    };

    const blob = new Blob(
      [JSON.stringify(data, null, 2)],
      { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "vibe-school-backup.json";
    a.click();

    URL.revokeObjectURL(url);
  },

  init() {
    State.init();
    Events.init();
    this.render();
  }
};

document.addEventListener(
  "DOMContentLoaded",
  () => App.init()
);
