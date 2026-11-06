"use strict";

window.Learning = {
  render() {
    return `
      <section class="page">
        <div class="page-heading">
          <div>
            <span class="eyebrow">CURRICULUM</span>
            <h1>교육과정</h1>
            <p>AI Vibe Developer를 위한 8개 전문 교육 영역</p>
          </div>
          <div class="stat-card">
            <strong>${Progress.rate}%</strong>
            <span>전체 학습 진도</span>
          </div>
        </div>

        <div class="course-grid">
          ${Courses.map(course => {
            const rate = Progress.domainProgress(course.name);
            return `
              <article class="course-card">
                <div class="course-icon">${course.id}</div>
                <h3>${App.escape(course.name)}</h3>
                <p>${App.escape(course.description)}</p>
                <div class="progress-track">
                  <div style="width:${rate}%"></div>
                </div>
                <span>${rate}% 완료</span>
                <button class="btn primary"
                  data-action="course"
                  data-id="${course.id}">
                  학습하기
                </button>
              </article>`;
          }).join("")}
        </div>

        <div id="courseLessons"></div>
      </section>`;
  },

  showCourse(id) {
    const course = Courses.find(x => x.id === id);
    const lessons = Lessons.filter(
      x => x.domain === course.name
    );

    document.getElementById("courseLessons").innerHTML = `
      <h2>${App.escape(course.name)}</h2>
      <div class="lesson-list">
        ${lessons.map((lesson, i) => `
          <div class="lesson-row">
            <div>
              <strong>${i + 1}. ${App.escape(lesson.title)}</strong>
              <p>${App.escape(lesson.summary || "")}</p>
            </div>
            <span>
              ${State.completedLessons.includes(lesson.id)
                ? "✓ 완료" : "미완료"}
            </span>
            <button class="btn outline"
              data-action="lesson"
              data-id="${lesson.id}">열기</button>
          </div>
        `).join("")}
      </div>`;
  },

  complete(id, note) {
    Progress.complete(id, note);
  }
};