
"use strict";

window.Assessment = {
  grid: null,
  timer: null,
  deadline: null,
  startedAt: null,

  getAnswers() {
    return State.examType === "pre"
      ? State.preAnswers
      : State.afterAnswers;
  },

  getExpired() {
    return State.expiredQuestions[State.examType] || [];
  },

  isCompleted(index) {
    return this.getAnswers()[index] !== undefined;
  },

  isExpired(index) {
    return this.getExpired().includes(index);
  },

  isLocked(index) {
    return this.isCompleted(index) || this.isExpired(index);
  },

  start(type) {
    this.stopTimer();

    State.examType = type;
    State.question = 0;

    State.answers = type === "pre"
      ? { ...State.preAnswers }
      : { ...State.afterAnswers };

    if (!State.expiredQuestions[type]) {
      State.expiredQuestions[type] = [];
    }

    const firstAvailable = Quizzes.findIndex(
      (_, i) => !this.isLocked(i)
    );

    if (firstAvailable === -1) {
      State.page = "report";
      App.render();
      return;
    }

    State.question = firstAvailable;
    State.page = "assessment";

    this.startedAt = Date.now();

    App.render();
  },

  startTimer() {
    this.stopTimer();

    const index = State.question;

    if (this.isLocked(index)) return;

    const q = Quizzes[index];

    this.deadline = Date.now() + q.seconds * 1000;

    this.updateTimerDisplay();

    this.timer = setInterval(() => {
      const remaining = Math.max(
        0,
        Math.ceil((this.deadline - Date.now()) / 1000)
      );

      this.updateTimerDisplay(remaining);

      if (remaining <= 0) {
        this.expireQuestion(index);
      }
    }, 250);
  },

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }

    this.deadline = null;
  },

  updateTimerDisplay(value) {
    const el = document.getElementById("examTimer");

    if (!el) return;

    const remaining = value !== undefined
      ? value
      : this.deadline
        ? Math.max(0, Math.ceil(
            (this.deadline - Date.now()) / 1000
          ))
        : 0;

    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;

    el.textContent =
      `${String(minutes).padStart(2, "0")}:` +
      `${String(seconds).padStart(2, "0")}`;

    el.classList.toggle(
      "timer-danger",
      remaining <= 10
    );
  },

  expireQuestion(index) {
    if (this.isLocked(index)) return;

    this.stopTimer();

    State.expiredQuestions[State.examType].push(index);

    State.persist();

    App.toast("제한 시간이 종료되었습니다.");

    this.updateGrid();

    const next = this.findNextAvailable(index);

    if (next === -1) {
      App.updateQuestion();
      return;
    }

    State.question = next;

    App.updateQuestion();
    this.startTimer();
  },

  findNextAvailable(current) {
    for (let i = current + 1; i < Quizzes.length; i++) {
      if (!this.isLocked(i)) return i;
    }

    for (let i = 0; i < current; i++) {
      if (!this.isLocked(i)) return i;
    }

    return -1;
  },

  answer(index) {
    const questionIndex = State.question;

    // 이미 완료되었거나 시간 초과된 문제는 수정 불가
    if (this.isLocked(questionIndex)) {
      App.toast("이미 종료된 문제입니다.");
      return;
    }

    const q = Quizzes[questionIndex];

    if (!Number.isInteger(index) ||
        index < 0 ||
        index >= q.options.length) {
      return;
    }

    // 답변 선택 즉시 타이머 정지
    this.stopTimer();

    State.answers[questionIndex] = Number(index);

    if (State.examType === "pre") {
      State.preAnswers = { ...State.answers };
    } else {
      State.afterAnswers = { ...State.answers };
    }

    State.persist();

    // 완료 체크 갱신
    this.updateGrid();

    const next = this.findNextAvailable(questionIndex);

    if (next === -1) {
      App.updateQuestion();
      App.toast("모든 문제를 완료했습니다.");
      return;
    }

    // 다음 미완료 문제로 자동 이동
    State.question = next;

    App.updateQuestion();

    this.startTimer();
  },

  select(index) {
    if (index < 0 || index >= Quizzes.length) return;

    if (this.isLocked(index)) {
      App.toast("완료되었거나 시간이 종료된 문제입니다.");
      return;
    }

    this.stopTimer();

    State.question = index;

    App.updateQuestion();

    this.startTimer();
  },

  prev() {
    for (let i = State.question - 1; i >= 0; i--) {
      if (!this.isLocked(i)) {
        this.select(i);
        return;
      }
    }
  },

  next() {
    const next = this.findNextAvailable(State.question);

    if (next !== -1) {
      this.select(next);
    }
  },

  updateGrid() {
    if (!this.grid) return;

    this.grid.setGridOption(
      "rowData",
      Quizzes.map((q, i) => ({
        no: i + 1,
        domain: q.domain,
        question: q.question,
        status: this.isCompleted(i)
          ? "✓ 완료"
          : this.isExpired(i)
            ? "시간 초과"
            : "미완료"
      }))
    );
  },

  getDomainScores() {
    const scores = {};

    Courses.forEach(course => {
      const questions = Quizzes.filter(
        q => q.domain === course.name
      );

      if (!questions.length) return;

      const correct = questions.filter(q => {
        const index = Quizzes.indexOf(q);
        return this.getAnswers()[index] === q.answer;
      }).length;

      scores[course.name] = Math.round(
        correct / questions.length * 100
      );
    });

    return scores;
  },

  getScore(answers = this.getAnswers()) {
    const correct = Quizzes.filter(
      (q, i) => answers[i] === q.answer
    ).length;

    return Math.round(
      correct / Quizzes.length * 100
    );
  },

  finish() {
    this.stopTimer();

    const answers = this.getAnswers();

    const correct = Quizzes.filter(
      (q, i) => answers[i] === q.answer
    ).length;

    const result = {
      type: State.examType,
      score: Math.round(
        correct / Quizzes.length * 100
      ),
      correct,
      total: Quizzes.length,
      expired: this.getExpired().length,
      domainScores: this.getDomainScores(),
      date: new Date().toISOString()
    };

    const history = Storage.get("examHistory", []);

    history.push(result);

    Storage.set("examHistory", history);

    State.persist();

    State.page = "report";

    this.destroy();

    App.render();

    App.toast("역량 평가가 완료되었습니다.");
  },

  question() {
    const q = Quizzes[State.question];

    if (!q) return "";

    const answer = this.getAnswers()[State.question];

    const locked = this.isLocked(State.question);

    return `
      <div class="question-card">

        <div class="question-meta">
          <span>${App.escape(q.domain)}</span>
          <span>${App.escape(q.difficulty)}</span>
          <span>${q.seconds}초 제한</span>
        </div>

        <div class="exam-question-header">
          <h2>
            ${State.question + 1}.
            ${App.escape(q.question)}
          </h2>

          <div class="exam-timer-wrap">
            <span>남은 시간</span>
            <strong id="examTimer">--:--</strong>
          </div>
        </div>

        ${q.code ? `
          <pre class="code-block">
${App.escape(q.code)}
          </pre>
        ` : ""}

        <div class="option-list">

          ${q.options.map((option, i) => `
            <button
              class="option ${answer === i ? "selected" : ""}"
              data-action="answer"
              data-index="${i}"
              ${locked ? "disabled" : ""}
            >
              <span>${String.fromCharCode(65 + i)}</span>
              ${App.escape(option)}
            </button>
          `).join("")}

        </div>

        ${locked ? `
          <div class="answer-feedback">
            ${this.isExpired(State.question)
              ? "제한 시간이 종료되었습니다."
              : "답변이 저장되었습니다."}
          </div>
        ` : ""}

        <div class="exam-navigation">

          <button
            class="btn outline"
            data-action="prev">
            이전 미완료 문제
          </button>

          <span>
            ${State.question + 1} / ${Quizzes.length}
          </span>

          <button
            class="btn primary"
            data-action="next">
            다음 미완료 문제
          </button>

          <button
            class="btn teal"
            data-action="finish">
            평가 제출
          </button>

        </div>

      </div>
    `;
  },

  destroy() {
    this.stopTimer();

    if (this.grid) {
      this.grid.destroy();
      this.grid = null;
    }
  }
};
