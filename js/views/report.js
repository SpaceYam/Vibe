"use strict";

window.ReportView = {
  charts: [],

  render() {
    const pre = Assessment.getScore(State.preAnswers);
    const after = Assessment.getScore(State.afterAnswers);
    const hasPre = Object.keys(State.preAnswers).length > 0;
    const hasAfter = Object.keys(State.afterAnswers).length > 0;
    const scores = Assessment.getDomainScores();

    return `
      <section class="page">
        <span class="eyebrow">LEARNING ANALYTICS</span>
        <h1>학습 성과 리포트</h1>
        <p>교육 전후의 역량 변화와 영역별 성취도를 확인하세요.</p>

        <div class="stats-grid">
          <div class="stat-card">
            <span>사전 평가</span>
            <strong>${hasPre ? pre + "점" : "-"}</strong>
          </div>
          <div class="stat-card">
            <span>사후 평가</span>
            <strong>${hasAfter ? after + "점" : "-"}</strong>
          </div>
          <div class="stat-card">
            <span>성장 점수</span>
            <strong>${hasPre && hasAfter
              ? (after - pre > 0 ? "+" : "") + (after - pre)
              : "-"}</strong>
          </div>
          <div class="stat-card">
            <span>학습 완료율</span>
            <strong>${Progress.rate}%</strong>
          </div>
        </div>

        <div class="dashboard-grid">
          <div class="panel">
            <h2>영역별 역량 분석</h2>
            <canvas id="radarChart"></canvas>
          </div>
          <div class="panel">
            <h2>사전·사후 비교</h2>
            <canvas id="growthChart"></canvas>
          </div>
        </div>

        <div class="panel">
          <h2>영역별 상세 결과</h2>
          <div class="data-table">
            <table>
              <thead>
                <tr>
                  <th>교육 영역</th>
                  <th>현재 점수</th>
                  <th>수준</th>
                </tr>
              </thead>
              <tbody>
                ${Object.entries(scores).map(([name, score]) => `
                  <tr>
                    <td>${App.escape(name)}</td>
                    <td>${score}점</td>
                    <td>${score >= 80 ? "우수" : score >= 60 ? "보통" : "보완 필요"}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <div class="panel">
          <h2>AI 학습 추천</h2>
          ${Recommendations.render()}
        </div>

        <div class="panel">
          <h2>프로젝트 성과</h2>
          ${State.submissions.map(s => `
            <div class="history-row">
              <strong>${App.escape(s.title)}</strong>
              <span>${s.score === null ? "평가 대기" : s.score + "점"}</span>
            </div>
          `).join("") || "<p>제출된 프로젝트가 없습니다.</p>"}
        </div>
      </section>`;
  },

  init() {
    this.destroy();

    const scores = Assessment.getDomainScores();
    const labels = Object.keys(scores);
    const values = Object.values(scores);

    const radar = document.getElementById("radarChart");
    const growth = document.getElementById("growthChart");

    if (radar) {
      this.charts.push(new Chart(radar, {
        type: "radar",
        data: {
          labels,
          datasets: [{
            label: "역량 점수",
            data: values,
            backgroundColor: "rgba(55,125,210,.15)",
            borderColor: "#3984D6",
            pointBackgroundColor: "#3984D6"
          }]
        },
        options: {
          responsive: true,
          scales: {
            r: {
              min: 0,
              max: 100,
              ticks: { stepSize: 20 }
            }
          }
        }
      }));
    }

    if (growth) {
      const history = Storage.get("examHistory", []);
      const pre = history.find(x => x.type === "pre");
      const after = [...history].reverse().find(x => x.type === "after");

      this.charts.push(new Chart(growth, {
        type: "bar",
        data: {
          labels: ["사전 평가", "사후 평가"],
          datasets: [{
            label: "평가 점수",
            data: [pre?.score || 0, after?.score || 0],
            backgroundColor: ["#94A3B8", "#3984D6"],
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          scales: { y: { min: 0, max: 100 } }
        }
      }));
    }
  },

  destroy() {
    this.charts.forEach(chart => chart.destroy());
    this.charts = [];
  }
};