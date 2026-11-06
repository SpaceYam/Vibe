"use strict";

window.Recommendations = {
  getWeakDomains() {
    const results = Assessment.getDomainScores();

    return Object.entries(results)
      .filter(([, score]) => score < 70)
      .sort((a, b) => a[1] - b[1])
      .map(([domain, score]) => ({
        domain,
        score,
        message: `${domain} 영역의 추가 학습을 추천합니다.`
      }));
  },

  render() {
    const weak = this.getWeakDomains();

    if (!weak.length) {
      return `<p>모든 영역의 역량이 양호합니다.</p>`;
    }

    return weak.map(x => `
      <div class="recommendation">
        <strong>${App.escape(x.domain)}</strong>
        <span>${x.score}점</span>
        <p>${App.escape(x.message)}</p>
      </div>
    `).join("");
  }
};