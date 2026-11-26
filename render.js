const TARGETS = { individual: 85, team: 95 };
const PARAM_ORDER = ["uq", "res", "sys", "sla"];
const MONTH_LABEL = "November 2026";
const AUDITOR = "Fuzail";

function teamAgentsSorted(team, dir) {
  const t = TEAMS[team];
  const list = t.order.map(k => ({ key: k, ...t.agents[k] }));
  list.sort((a, b) => dir === "asc" ? a.cq - b.cq : b.cq - a.cq);
  return list;
}

function weightedTeamAvg(team) {
  const t = TEAMS[team];
  let sumScore = 0, sumAudits = 0;
  t.order.forEach(k => {
    const a = t.agents[k];
    sumScore += a.cq * a.audits;
    sumAudits += a.audits;
  });
  return sumAudits ? Math.round(sumScore / sumAudits) : 0;
}

function teamTotals(team) {
  const t = TEAMS[team];
  let audits = 0, ncf = 0, errors = 0, aboveIndiv = 0;
  t.order.forEach(k => {
    const a = t.agents[k];
    audits += a.audits;
    ncf += a.ncf;
    errors += a.totalErrors;
    if (a.cq >= TARGETS.individual) aboveIndiv++;
  });
  return { audits, ncf, errors, agents: t.order.length, aboveIndiv, avg: weightedTeamAvg(team) };
}

function scoreBarClass(cq) {
  if (cq >= 95) return { bar: "bar-gold", pct: "c-gold" };
  if (cq >= 85) return { bar: "bar-green", pct: "c-green" };
  if (cq >= 75) return { bar: "bar-orange", pct: "c-orange" };
  return { bar: "bar-orange", pct: "c-red" };
}

function targetTag(cq) {
  if (cq >= TARGETS.individual) return `<span class="ti ti-above">✓ Above target</span>`;
  if (cq >= TARGETS.individual - 8) return `<span class="ti ti-near">Near target</span>`;
  return `<span class="ti ti-below">Below target</span>`;
}

function buildHero(team) {
  const meta = TEAM_META[team];
  const tt = teamTotals(team);
  return `
  <div class="hero-eyebrow">Quality Assurance · ${meta.fullName}</div>
  <div class="hero-title">CQ <em>Dashboard</em></div>
  <div class="hero-date">${MONTH_LABEL}</div>
  <div class="hero-sub">${meta.desc}<br>${tt.audits} audits &nbsp;·&nbsp; ${tt.agents} agents &nbsp;·&nbsp; Audited by ${AUDITOR}</div>
  <div class="hero-stats">
    <div class="hs"><div class="hs-val white" data-countup="${tt.audits}">${tt.audits}</div><div class="hs-lbl">Audits</div></div>
    <div class="hs"><div class="hs-val gold" data-countup="${tt.avg}" data-suffix="%">${tt.avg}%</div><div class="hs-lbl">Team CQ</div></div>
    <div class="hs"><div class="hs-val white">${TARGETS.team}%</div><div class="hs-lbl">Target</div></div>
    <div class="hs"><div class="hs-val red" data-countup="${tt.ncf}">${tt.ncf}</div><div class="hs-lbl">NCF</div></div>
  </div>`;
}

function buildTargetBanner(team) {
  const tt = teamTotals(team);
  return `
  <div class="target-banner">
    <div class="tb-icon">\u{1F3AF}</div>
    <div class="tb-lbl">Monthly Targets</div>
    <div class="tb-txt">Individual target is <strong style="color:var(--gold)">${TARGETS.individual}%</strong>. Team target is <strong style="color:#f87171">${TARGETS.team}%</strong>.</div>
    <div class="tb-right">
      <div class="tb-stat"><div class="tb-num gold">${tt.avg}%</div><div class="tb-slbl">Team Avg</div></div>
      <div class="tb-stat"><div class="tb-num green">${tt.aboveIndiv}</div><div class="tb-slbl">Above Indiv Target</div></div>
      <div class="tb-stat"><div class="tb-num red">${tt.ncf}</div><div class="tb-slbl">NCF Total</div></div>
    </div>
  </div>`;
}

function buildScoreTable(team) {
  const list = teamAgentsSorted(team, "desc");
  let rows = "";
  list.forEach((a, i) => {
    const sb = scoreBarClass(a.cq);
    rows += `
    <tr onclick="openModal('${team}','${a.key}')">
      <td style="font-family:Georgia,serif;font-size:20px;font-weight:800;color:var(--gold);">${i + 1}</td>
      <td>
        <div class="agent-cell">
          <div class="agent-av" style="background:${a.color};">${a.initials}</div>
          <div>
            <div class="agent-nm">${a.name}</div>
            <div class="agent-hint">${a.audits} audits · ${a.ncf} NCF</div>
          </div>
        </div>
      </td>
      <td>${a.audits}</td>
      <td><span class="ncf-badge${a.ncf > 0 ? " ncf-warn" : ""}">${a.ncf}</span></td>
      <td>
        <div class="bar-cell">
          <div class="bar-track"><div class="bar-fill ${sb.bar}" data-width="${a.cq}"></div></div>
          <span class="pct ${sb.pct}">${a.cq}%</span>
        </div>
      </td>
      <td>${targetTag(a.cq)}</td>
    </tr>`;
  });
  return `
  <table class="score-table">
    <thead><tr><th>Rank</th><th>Agent</th><th>Audits</th><th>NCF</th><th>CQ Score</th><th>vs Target</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function buildParamAccordion(team) {
  const t = TEAMS[team];
  let html = "";
  PARAM_ORDER.forEach(p => {
    const rows = t.order
      .map(k => ({ key: k, ...t.agents[k] }))
      .filter(a => a.params[p] > 0)
      .sort((a, b) => b.params[p] - a.params[p]);
    const total = rows.reduce((s, a) => s + a.params[p], 0);
    const bodyId = `pbody-${team}-${p}`;
    const arrowId = `parr-${team}-${p}`;
    if (rows.length === 0) {
      html += `
      <div class="param-block">
        <div class="param-hdr" style="cursor:default;opacity:.8;">
          <span class="param-hdr-name">${PARAM_LABELS[p]}</span>
          <span class="no-errors">✓ 0 errors — Well done!</span>
        </div>
      </div>`;
      return;
    }
    let agentRows = "";
    rows.forEach(a => {
      const cClass = "c" + Math.min(a.params[p], 5);
      agentRows += `
      <div class="param-agent-row" onclick="event.stopPropagation();openModal('${team}','${a.key}','${p}')">
        <span class="par-name">${a.name}</span>
        <span class="par-count ${cClass}">${a.params[p]}</span>
        <button class="par-btn">View Cases</button>
      </div>`;
    });
    html += `
    <div class="param-block">
      <div class="param-hdr" onclick="toggleParam('${team}-${p}')">
        <span class="param-hdr-name">${PARAM_LABELS[p]}</span>
        <div class="param-hdr-right">
          <span class="param-hdr-count">${total}</span>
          <span class="param-arrow" id="${arrowId}">▼</span>
        </div>
      </div>
      <div class="param-body" id="${bodyId}">${agentRows}</div>
    </div>`;
  });
  return html;
}

function buildChartGrid(team) {
  return `
  <div class="chart-grid">
    <div class="chart-card">
      <div class="cc-title">CQ Score vs Targets</div>
      <div class="cc-sub">Agent scores vs individual (${TARGETS.individual}%) &amp; team (${TARGETS.team}%) targets — sorted high to low</div>
      <div class="ch"><canvas id="scoreChart-${team}"></canvas></div>
    </div>
    <div class="chart-card">
      <div class="cc-title">Error Distribution</div>
      <div class="cc-sub">Total errors split by parameter category</div>
      <div class="ch"><canvas id="errorChart-${team}"></canvas></div>
    </div>
    <div class="chart-card">
      <div class="cc-title">Errors per Agent</div>
      <div class="cc-sub">Total audit errors by agent — highest to lowest</div>
      <div class="ch"><canvas id="agentErrorChart-${team}"></canvas></div>
    </div>
    <div class="heatmap-card">
      <div class="cc-title">Error Heatmap</div>
      <div class="cc-sub">Agent × parameter breakdown — spot who struggles where at a glance</div>
      <div id="heatmapContainer-${team}"></div>
    </div>
  </div>`;
}

function buildTeamSection(team) {
  const meta = TEAM_META[team];
  return `
  <div class="hero">
    <div class="hero-glow"></div>
    <div class="hero-glow2"></div>
    <div class="hero-inner">${buildHero(team)}</div>
  </div>
  <div class="main">
    <section>
      <div class="sec-ey">Performance Overview</div>
      <div class="sec-ttl">Agent CQ Scores — ${MONTH_LABEL}</div>
      <div class="sec-sub">Click any agent row to view their full audit report — scores, case feedback, AOIs, and improvement areas.</div>
      ${buildTargetBanner(team)}
      ${buildScoreTable(team)}
    </section>
    <section>
      <div class="sec-ey">Error Breakdown</div>
      <div class="sec-ttl">By Audit Parameter</div>
      <div class="sec-sub">Click an agent under any parameter to jump straight to the flagged case in their report.</div>
      ${buildParamAccordion(team)}
    </section>
    <section>
      <div class="sec-ey">Visual Analysis</div>
      <div class="sec-ttl">Charts &amp; Distribution</div>
      <div class="sec-sub">Visual breakdown of CQ scores, error distribution, agent errors, and parameter heatmap.</div>
      ${buildChartGrid(team)}
    </section>
  </div>`;
}

let currentTeam = "sas";

function renderTeamNav() {
  const nav = document.getElementById("teamNav");
  nav.innerHTML = Object.keys(TEAM_META).map(team => {
    const meta = TEAM_META[team];
    return `<button class="team-tab${team === currentTeam ? " active" : ""}" id="tab-${team}" onclick="switchTeam('${team}')"><span class="tt-dot" style="background:${meta.accent}"></span>${meta.fullName}</button>`;
  }).join("");
}

function switchTeam(team) {
  currentTeam = team;
  document.getElementById("hdr-title-text").textContent = `CQ Dashboard · ${TEAM_META[team].fullName} · ${MONTH_LABEL}`;
  document.querySelectorAll(".team-tab").forEach(b => b.classList.remove("active"));
  document.getElementById(`tab-${team}`).classList.add("active");
  document.getElementById("team-content").innerHTML = buildTeamSection(team);
  requestAnimationFrame(() => {
    animateBars();
    document.querySelectorAll("[data-countup]").forEach(el => {
      const target = parseInt(el.getAttribute("data-countup"));
      const suffix = el.getAttribute("data-suffix") || "";
      countUp(el, target, suffix, 900);
    });
    initTeamCharts(team);
  });
}

function animateBars() {
  document.querySelectorAll(".bar-fill[data-width]").forEach(bar => {
    const w = bar.getAttribute("data-width");
    setTimeout(() => { bar.style.width = w + "%"; }, 150);
  });
}

function countUp(el, target, suffix, duration) {
  const startTime = performance.now();
  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * ease);
    el.textContent = current + (suffix || "");
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function toggleParam(id) {
  const body = document.getElementById("pbody-" + id);
  const arrow = document.getElementById("parr-" + id);
  const isOpen = body.classList.contains("open");
  body.classList.toggle("open");
  if (arrow) arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
}

document.addEventListener("DOMContentLoaded", () => {
  renderTeamNav();
  switchTeam(currentTeam);
});
