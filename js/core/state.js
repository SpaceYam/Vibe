
"use strict";

window.State = {
  page: "profile",
  role: "student",

  profile: null,

  answers: {},
  preAnswers: {},
  afterAnswers: {},

  expiredQuestions: {
    pre: [],
    after: []
  },

  question: 0,
  examType: "pre",

  currentLesson: null,
  completedLessons: [],
  lessonNotes: {},

  projects: [],
  submissions: [],
  feedback: [],

  prompts: [],
  tutorHistory: [],

  initialized: false,

  init() {
    this.profile = Storage.get("profile", null);

    this.answers = Storage.get("answers", {});
    this.preAnswers = Storage.get("preAnswers", {});
    this.afterAnswers = Storage.get("afterAnswers", {});

    this.expiredQuestions = Storage.get(
      "expiredQuestions",
      { pre: [], after: [] }
    );

    this.completedLessons = Storage.get("completedLessons", []);
    this.lessonNotes = Storage.get("lessonNotes", {});

    this.projects = Storage.get("projects", []);
    this.submissions = Storage.get("submissions", []);
    this.feedback = Storage.get("feedback", []);

    this.prompts = Storage.get("prompts", []);
    this.tutorHistory = Storage.get("tutorHistory", []);

    this.page = this.profile ? "home" : "profile";

    this.initialized = true;
  },

  persist() {
    [
      "profile",
      "answers",
      "preAnswers",
      "afterAnswers",
      "expiredQuestions",
      "completedLessons",
      "lessonNotes",
      "projects",
      "submissions",
      "feedback",
      "prompts",
      "tutorHistory"
    ].forEach(key => {
      Storage.set(key, this[key]);
    });
  },

  reset() {
    Storage.clear();
    location.reload();
  }
};
