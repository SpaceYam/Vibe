"use strict";

window.Projects = {
  submit(projectId, description, url) {
    const project = ProjectData.find(
      x => x.id === Number(projectId)
    );

    if (!project) return App.toast("프로젝트를 찾을 수 없습니다.");
    if (!description.trim()) {
      return App.toast("프로젝트 설명을 입력하세요.");
    }

    State.submissions.push({
      id: Date.now(),
      projectId: project.id,
      title: project.title,
      description: description.trim(),
      url: url.trim(),
      status: "제출 완료",
      score: null,
      feedback: "",
      date: new Date().toISOString()
    });

    State.persist();
    App.toast("프로젝트가 제출되었습니다.");
    App.render();
  },

  evaluate(id, scores, feedback) {
    const submission = State.submissions.find(
      x => x.id === Number(id)
    );

    if (!submission) return;

    const project = ProjectData.find(
      x => x.id === submission.projectId
    );

    const totalWeight = project.rubric.reduce(
      (sum, x) => sum + x.weight, 0
    );

    const total = project.rubric.reduce(
      (sum, item, i) =>
        sum + (Number(scores[i]) || 0) * item.weight / totalWeight,
      0
    );

    submission.score = Math.round(total);
    submission.feedback = feedback;
    submission.status = "평가 완료";

    State.persist();
    App.toast("평가가 저장되었습니다.");
    App.render();
  }
};