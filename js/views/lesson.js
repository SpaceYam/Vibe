"use strict";

window.LessonView = {
  render() {
    const lesson = Lessons.find(
      x => x.id === State.currentLesson
    );

    if (!lesson) return "<section>강의를 찾을 수 없습니다.</section>";

    const parsedContent = (typeof marked !== 'undefined' && marked.parse) 
      ? marked.parse(lesson.content) 
      : `<pre>${(lesson.content || lesson.summary || "")}</pre>`;

    return `
      <section class="page">
        <button class="btn outline" data-action="learning">
          ← 교육과정
        </button>

        <div class="lesson-content">
          <span class="eyebrow">${App.escape(lesson.domain)}</span>
          <h1>${App.escape(lesson.title)}</h1>
          <div class="lesson-body">
            ${parsedContent}
          </div>

          <label>학습 메모</label>
          <textarea id="lessonNote" rows="5"
            placeholder="학습 내용과 느낀 점을 기록하세요.">${App.escape(State.lessonNotes[lesson.id] || "")}</textarea>

          <button class="btn primary"
            data-action="lesson-complete"
            data-id="${lesson.id}">
            학습 완료
          </button>
        </div>
      </section>`;
  }
};