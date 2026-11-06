
"use strict";

window.Events = {
  init() {
    document.addEventListener("click", e => {
      const el = e.target.closest("[data-action]");
      if (!el) return;

      const action = el.dataset.action;
      const id = Number(el.dataset.id);
      const index = Number(el.dataset.index);

      switch (action) {

        case "save-profile": {
          const get = id =>
            document.getElementById(id)?.value.trim() || "";

          const name = get("pName");
          const project = get("pProject");

          if (!name || !project) {
            App.toast("이름과 프로젝트 목표를 입력하세요.");
            break;
          }

          State.profile = {
            name,
            project,
            goal: get("pGoal"),
            dev: get("pDev"),
            ai: get("pAI"),
            time: get("pTime")
          };

          State.persist();

          Assessment.start("pre");

          App.toast("프로필 생성 완료! 역량 평가를 시작합니다.");

          break;
        }

        case "home":
          Router.go("home");
          break;

        case "learning":
          Router.go("learning");
          break;

        case "course":
          Learning.showCourse(id);
          break;

        case "lesson":
          Router.lesson(id);
          break;

        case "lesson-complete": {
          const note =
            document.getElementById("lessonNote")?.value || "";

          Learning.complete(id, note);
          break;
        }

        case "pre":
          Assessment.start("pre");
          break;

        case "final":
          if (Progress.rate < 100) {
            App.toast("교육과정을 모두 완료해야 합니다.");
          } else {
            App.modal(
              "사후 평가",
              "사후 평가를 시작하시겠습니까?",
              () => Assessment.start("after")
            );
          }
          break;

        case "answer":
          Assessment.answer(index);
          break;

        case "prev":
          Assessment.prev();
          break;

        case "next":
          Assessment.next();
          break;

        case "finish":
          App.modal(
            "평가 제출",
            "제출 후 답변을 수정할 수 없습니다. 제출하시겠습니까?",
            () => Assessment.finish()
          );
          break;

        case "prompt":
          Router.go("prompt");
          break;

        case "generate-prompt":
          PromptLab.generate();
          break;

        case "copy-prompt":
          PromptLab.copy();
          break;

        case "projects":
          Router.go("projects");
          break;

        case "project":
          ProjectsView.form(id);
          break;

        case "submit-project":
          Projects.submit(
            id,
            document.getElementById("projectDescription")?.value || "",
            document.getElementById("projectUrl")?.value || ""
          );

          App.closeModal();
          App.render();
          break;

        case "report":
          Router.go("report");
          break;

        case "tutor":
          Router.go("tutor");
          break;

        case "ask-tutor":
          Tutor.ask(
            document.getElementById("tutorQuestion")?.value || ""
          ).then(() => App.render());
          break;

        case "confirm": {
          const callback = App.confirmAction;
          App.closeModal();
          callback?.();
          break;
        }

        case "cancel":
          App.closeModal();
          break;

        case "export":
          App.exportData();
          break;

        case "reset":
          App.modal(
            "데이터 초기화",
            "저장된 학습 데이터를 모두 삭제하시겠습니까?",
            () => State.reset()
          );
          break;
      }
    });
  }
};
