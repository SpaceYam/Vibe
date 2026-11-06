"use strict";

window.HomeView = {
  profile() {
    return `
      <section class="profile-page">
        <div class="profile-intro">
          <span class="eyebrow">AI VIBE DEVELOPER ACADEMY</span>
          <h1>Build with AI.<br>Grow with VIBE.</h1>
          <p>AI 시대의 개발 역량을 키우는 새로운 학습 경험</p>
        </div>

        <div class="profile-form">
          <h2>학습자 프로필</h2>

          <label>이름</label>
          <input id="pName" placeholder="이름을 입력하세요">

          <label>프로젝트 목표</label>
          <input id="pProject" placeholder="만들고 싶은 프로젝트">

          <label>학습 목표</label>
          <select id="pGoal">
            <option>AI 개발자 역량 강화</option>
            <option>취업 및 포트폴리오</option>
            <option>업무 자동화</option>
            <option>AI 서비스 창업</option>
          </select>

          <label>개발 경험</label>
          <select id="pDev">
            <option>입문</option>
            <option>초급</option>
            <option>중급</option>
            <option>고급</option>
          </select>

          <label>AI 경험</label>
          <select id="pAI">
            <option>없음</option>
            <option>기초 활용</option>
            <option>API 활용 경험</option>
            <option>AI 서비스 개발 경험</option>
          </select>

          <label>하루 학습 가능 시간</label>
          <select id="pTime">
            <option>1시간 미만</option>
            <option>1~2시간</option>
            <option>2~4시간</option>
            <option>4시간 이상</option>
          </select>

          <button class="btn primary full"
            data-action="save-profile">학습 시작하기</button>
        </div>
      </section>`;
  },

  render() {
    const profile = State.profile;
    const history = Storage.get("examHistory", []);
    const latest = history.at(-1);

    const avatar = ''; // '<span class="avatar" >${App.escape((profile?.name || "V")[0])}</span>';
    return `
      <section class="page">
        <div class="welcome">
          <div>
            <span class="eyebrow">MY LEARNING DASHBOARD</span>
            <h1>안녕하세요, ${App.escape(profile?.name || "학습자")}님!</h1>
            <p>오늘도 AI 개발 역량을 성장시켜 보세요.</p>
          </div>
          ${avatar}
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <span>전체 학습 진도</span>
            <strong>${Progress.rate}%</strong>
          </div>
          <div class="stat-card">
            <span>완료 강의</span>
            <strong>${Progress.completed}/${Progress.total}</strong>
          </div>
          <div class="stat-card">
            <span>최근 평가 점수</span>
            <strong>${latest ? latest.score + "점" : "-"}</strong>
          </div>
          <div class="stat-card">
            <span>프로젝트 제출</span>
            <strong>${State.submissions.length}건</strong>
          </div>
        </div>

        <div class="dashboard-grid">
          <div class="panel">
            <h2>학습 진행 현황</h2>
            <div class="progress-track large">
              <div style="width:${Progress.rate}%"></div>
            </div>
            <p>${Progress.rate}% 학습 완료</p>
            <button class="btn primary"
              data-action="learning">교육과정 보기</button>
          </div>

          <div class="panel">
            <h2>추천 학습</h2>
            ${Recommendations.render()}
          </div>
        </div>

        <div class="panel">
          <h2>빠른 메뉴</h2>
          <div class="quick-links">
            <button data-action="pre">사전 평가</button>
            <button data-action="learning">교육과정</button>
            <button data-action="prompt">프롬프트 실습</button>
            <button data-action="projects">프로젝트</button>
            <button data-action="tutor">AI 튜터</button>
            <button data-action="report">학습 리포트</button>
          </div>
        </div>
      </section>`;
  }
};