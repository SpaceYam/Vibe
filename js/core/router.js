"use strict";

window.Router = {
  go(page) {
    State.page = page;
    App.render();
    window.scrollTo(0, 0);
  },

  lesson(id) {
    State.currentLesson = Number(id);
    State.page = "lesson";
    App.render();
    window.scrollTo(0, 0);
  }
};