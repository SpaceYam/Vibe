"use strict";

window.PromptLab = {
  generate() {
    const role = document.getElementById("promptRole").value;
    const goal = document.getElementById("promptGoal").value;
    const context = document.getElementById("promptContext").value;
    const format = document.getElementById("promptFormat").value;
    const constraint = document.getElementById("promptConstraint").value;

    if (!goal.trim()) {
      return App.toast("목표를 입력하세요.");
    }

    const result = `
[역할]
${role}

[목표]
${goal}

[맥락]
${context || "필요한 맥락을 확인하세요."}

[제약 조건]
${constraint || "정확하고 명확하게 답변하세요."}

[출력 형식]
${format}

[검증]
요청 조건을 충족했는지 확인하고 불확실한 내용은 명시하세요.
`.trim();

    document.getElementById("promptResult").value = result;

    State.prompts.push({
      id: Date.now(),
      goal,
      result,
      date: new Date().toISOString()
    });

    State.persist();
    App.toast("프롬프트를 생성했습니다.");
  },

  copy() {
    const text = document.getElementById("promptResult").value;

    if (!text) return App.toast("복사할 내용이 없습니다.");

    navigator.clipboard.writeText(text)
      .then(() => App.toast("복사했습니다."))
      .catch(() => App.toast("클립보드 접근에 실패했습니다."));
  }
};