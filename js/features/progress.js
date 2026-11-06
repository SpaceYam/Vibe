 "use strict";

window.Progress = {
  get completed() {
    return State.completedLessons.length;
  },

  get total() {
    return Lessons.length;
  },

  get rate() {
    return this.total
      ? Math.round(this.completed / this.total * 100)
      : 0;
  },

  domainProgress(domain) {
    const lessons = Lessons.filter(x => x.domain === domain);
    if (!lessons.length) return 0;

    const done = lessons.filter(
      x => State.completedLessons.includes(x.id)
    ).length;

    return Math.round(done / lessons.length * 100);
  },

  complete(id, note = "") {
    if (!State.completedLessons.includes(id)) {
      State.completedLessons.push(id);
    }

    State.lessonNotes[id] = note;
    State.persist();

    App.toast("학습 완료!");
    App.render();
  }
};