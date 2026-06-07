// admin.js – Dr Shetye Academic Programme
// Covers ALL test arrays from config.js:
// DAILY_TESTS, MONTHLY_TESTS, GSSC_TESTS, GPSC_TESTS, PYQ_TESTS,
// PART_TESTS, TOPIC_TESTS, SPECIAL_TESTS, SCHOLARSHIP_TESTS

var activeTestId = null;

// ── All test categories with display config ──────────────────
var ADMIN_CATEGORIES = [
  {
    key:    "monthly",
    label:  "Monthly Tests",
    color:  "#ff9500",
    icon:   "📆",
    getter: function() { return window.MONTHLY_TESTS || []; }
  },
  {
    key:    "daily",
    label:  "Daily Quiz",
    color:  "#ff3b30",
    icon:   "📅",
    getter: function() { return window.DAILY_TESTS || []; }
  },
  {
    key:    "gssc",
    label:  "GSSC Mock Tests",
    color:  "#0071e3",
    icon:   "🏛",
    getter: function() { return window.GSSC_TESTS || []; }
  },
  {
    key:    "gpsc",
    label:  "GPSC / JSO Tests",
    color:  "#5856d6",
    icon:   "🎯",
    getter: function() { return window.GPSC_TESTS || []; }
  },
  {
    key:    "pyq",
    label:  "Previous Year Papers",
    color:  "#34c759",
    icon:   "📄",
    getter: function() { return window.PYQ_TESTS || []; }
  },
  {
    key:    "part",
    label:  "Part Tests",
    color:  "#007aff",
    icon:   "📝",
    getter: function() { return window.PART_TESTS || []; }
  },
  {
    key:    "topic",
    label:  "Topic Drills",
    color:  "#af52de",
    icon:   "🔬",
    getter: function() { return window.TOPIC_TESTS || []; }
  },
  {
    key:    "special",
    label:  "Core Subject Tests",
    color:  "#ff6b35",
    icon:   "🧪",
    getter: function() { return window.SPECIAL_TESTS || []; }
  },
  {
    key:    "scholar",
    label:  "Scholarship & Olympiad",
    color:  "#ff9f0a",
    icon:   "🏆",
    getter: function() { return window.SCHOLARSHIP_TESTS || []; }
  }
];

// ── Helper: find a test by id across ALL arrays ──────────────
function findTestById(id) {
  for (var c = 0; c < ADMIN_CATEGORIES.length; c++) {
    var tests = ADMIN_CATEGORIES[c].getter();
    for (var i = 0; i < tests.length; i++) {
      if (tests[i].id === id) return tests[i];
    }
  }
  return null;
}

// ── DOMContentLoaded ─────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  buildSidebar();
  // Auto-load first live test
  for (var c = 0; c < ADMIN_CATEGORIES.length; c++) {
    var tests = ADMIN_CATEGORIES[c].getter();
    for (var i = 0; i < tests.length; i++) {
      if (tests[i].live) { loadResults(tests[i].id); return; }
    }
  }
});

// ── BUILD SIDEBAR ─────────────────────────────────────────────
function buildSidebar() {
  var sidebar = document.getElementById("adminTabs");
  // Keep the header div, rebuild everything after it
  var hdr = sidebar.querySelector(".adm-sidebar-hdr");
  sidebar.innerHTML = "";
  if (hdr) sidebar.appendChild(hdr);

  ADMIN_CATEGORIES.forEach(function(cat) {
    var tests = cat.getter();
    if (!tests.length) return;

    // Category group label
    var grp = document.createElement("div");
    grp.className = "adm-cat";
    grp.style.setProperty("--cd", cat.color);

    var lbl = document.createElement("div");
    lbl.className = "adm-cat-label";
    lbl.innerHTML = '<span class="adm-cat-dot" style="background:' + cat.color + ';"></span>'
      + cat.icon + " " + cat.label;
    grp.appendChild(lbl);

    // Tab per test
    tests.forEach(function(test) {
      var btn = document.createElement("button");
      btn.className = "adm-tab" + (test.live ? "" : " tab-disabled");
      btn.id = "tab-" + test.id;

      var badge = test.live
        ? '<span class="adm-tab-live">Live</span>'
        : '<span class="adm-tab-soon">Soon</span>';

      btn.innerHTML = '<span class="adm-tab-text">' + test.title + '</span>' + badge;

      if (test.live) {
        btn.onclick = (function(id){ return function(){ loadResults(id); }; })(test.id);
      } else {
        btn.style.opacity = "0.5";
        btn.style.cursor = "default";
      }
      grp.appendChild(btn);
    });

    sidebar.appendChild(grp);
  });
}

// ── LOAD RESULTS ─────────────────────────────────────────────
function loadResults(testId) {
  activeTestId = testId;

  // Highlight active tab
  document.querySelectorAll(".adm-tab").forEach(function(t){ t.classList.remove("active"); });
  var tab = document.getElementById("tab-" + testId);
  if (tab) {
    tab.classList.add("active");
    // Scroll tab into view in sidebar
    tab.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  var test = findTestById(testId);
  var panel = document.getElementById("adminResultsPanel");

  if (!test || !test.live) {
    panel.innerHTML = renderEmpty("Test not live yet.");
    return;
  }

  // Show loading state
  panel.innerHTML =
    '<div class="adm-panel-header">'
    + '<div><div class="adm-panel-title">' + test.title + '</div>'
    + '<div class="adm-panel-meta">Loading results…</div></div>'
    + '</div>'
    + '<div class="adm-panel-body">'
    + '<div class="adm-empty"><div class="adm-empty-icon" style="animation:spin 1s linear infinite;">⏳</div>'
    + '<div class="adm-empty-text">Fetching from Google Sheets…</div></div>'
    + '</div>';

  if (!SCRIPT_URL || SCRIPT_URL === "PASTE_YOUR_APPS_SCRIPT_URL_HERE") {
    panel.innerHTML =
      '<div class="adm-panel-header">'
      + '<div><div class="adm-panel-title">' + test.title + '</div></div>'
      + '</div>'
      + '<div class="adm-panel-body">'
      + '<div class="adm-warn">⚠️ <strong>SCRIPT_URL not configured.</strong> Edit config.js and set your Google Apps Script URL to load results.</div>'
      + '</div>';
    return;
  }

  fetch(SCRIPT_URL + "?action=read&testId=" + testId)
    .then(function(r){ return r.json(); })
    .then(function(res){ renderResultsTable(test, res.data || []); })
    .catch(function(){
      panel.innerHTML =
        '<div class="adm-panel-header">'
        + '<div><div class="adm-panel-title">' + test.title + '</div></div>'
        + '</div>'
        + '<div class="adm-panel-body">'
        + '<div class="adm-error">❌ <strong>Could not load data.</strong> Check your network connection or Apps Script URL.</div>'
        + '</div>';
    });
}

// ── RENDER RESULTS TABLE ──────────────────────────────────────
function renderResultsTable(test, data) {
  var panel = document.getElementById("adminResultsPanel");
  var secKeys = Object.keys(test.sections || {});

  // Stats
  var totalSubs  = data.length;
  var avgScore   = totalSubs === 0 ? 0
    : Math.round(data.reduce(function(s,r){ return s + (parseFloat(r.total)||0); }, 0) / totalSubs * 10) / 10;
  var topScore   = totalSubs === 0 ? 0
    : Math.max.apply(null, data.map(function(r){ return parseFloat(r.total)||0; }));
  var passCount  = data.filter(function(r){ return (parseFloat(r.percent)||0) >= 40; }).length;

  // Table header
  var thCols = '<th class="rank-cell">Rank</th><th>Student Name</th>';
  secKeys.forEach(function(s){
    thCols += '<th>' + s + '<br/><span style="font-weight:400;color:#aeaeb2;">/' + test.sections[s] + '</span></th>';
  });
  thCols += '<th>Total<br/><span style="font-weight:400;color:#aeaeb2;">/' + test.totalMarks + '</span></th>'
    + '<th>%</th><th>Time Taken</th><th>Submitted</th>';

  // Table rows
  var tbRows;
  if (totalSubs === 0) {
    tbRows = '<tr><td colspan="' + (secKeys.length + 6) + '" style="text-align:center;color:#86868b;padding:32px;">No submissions yet.</td></tr>';
  } else {
    tbRows = data.map(function(r, i) {
      var rank = i + 1;
      var medal = rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : rank;
      var secCells = secKeys.map(function(s){
        return '<td style="text-align:center;">' + (r.scores ? (r.scores[s] !== undefined ? r.scores[s] : "—") : "—") + '</td>';
      }).join("");
      var pct = parseFloat(r.percent) || 0;
      var pctColor = pct >= 60 ? "#34c759" : pct >= 40 ? "#ff9500" : "#ff3b30";
      return '<tr>'
        + '<td class="rank-cell">' + medal + '</td>'
        + '<td class="name-cell">' + escHtml(r.name || "—") + '</td>'
        + secCells
        + '<td class="score-cell" style="text-align:center;">' + (r.total !== undefined ? r.total : "—") + '</td>'
        + '<td class="pct-cell" style="text-align:center;color:' + pctColor + ';">' + (r.percent || "—") + '</td>'
        + '<td class="time-cell">' + (r.timeTaken || "—") + '</td>'
        + '<td class="time-cell">' + (r.timestamp || "—") + '</td>'
        + '</tr>';
    }).join("");
  }

  panel.innerHTML =
    '<div class="adm-panel-header">'
    + '<div>'
    + '<div class="adm-panel-title">' + escHtml(test.title) + '</div>'
    + '<div class="adm-panel-meta">'
    + Object.keys(test.sections).map(function(s){ return s+': '+test.sections[s]+'Q'; }).join(' · ')
    + ' &nbsp;·&nbsp; ⏱ ' + Math.round(test.duration/60) + ' min'
    + ' &nbsp;·&nbsp; ' + test.totalMarks + ' marks'
    + '</div>'
    + '</div>'
    + '<div class="adm-panel-actions">'
    + '<button class="btn-refresh" onclick="loadResults(\'' + test.id + '\')">↻ Refresh</button>'
    + '<button class="btn-export" onclick="exportCSV(\'' + test.id + '\')">📥 Export CSV</button>'
    + '</div>'
    + '</div>'
    + '<div class="adm-panel-body">'

    // Stats row
    + '<div class="adm-stats">'
    + '<div class="adm-stat"><div class="adm-stat-val">' + totalSubs + '</div><div class="adm-stat-lbl">Submissions</div></div>'
    + '<div class="adm-stat"><div class="adm-stat-val">' + topScore + '</div><div class="adm-stat-lbl">Top Score</div></div>'
    + '<div class="adm-stat"><div class="adm-stat-val">' + avgScore + '</div><div class="adm-stat-lbl">Average</div></div>'
    + '<div class="adm-stat"><div class="adm-stat-val">' + passCount + '</div><div class="adm-stat-lbl">≥40% Pass</div></div>'
    + '</div>'

    // Table
    + '<div class="merit-wrap">'
    + '<table class="merit-table">'
    + '<thead><tr>' + thCols + '</tr></thead>'
    + '<tbody>' + tbRows + '</tbody>'
    + '</table>'
    + '</div>'
    + '</div>';
}

// ── EXPORT CSV ───────────────────────────────────────────────
function exportCSV(testId) {
  if (!SCRIPT_URL || SCRIPT_URL === "PASTE_YOUR_APPS_SCRIPT_URL_HERE") {
    alert("Configure SCRIPT_URL in config.js first.");
    return;
  }
  var test = findTestById(testId);
  if (!test) { alert("Test not found."); return; }

  fetch(SCRIPT_URL + "?action=read&testId=" + testId)
    .then(function(r){ return r.json(); })
    .then(function(res){
      var data = res.data || [];
      if (!data.length) { alert("No data to export."); return; }

      var secKeys = Object.keys(test.sections);
      var header = ["Rank","Name"]
        .concat(secKeys.map(function(s){ return s+"(/"+test.sections[s]+")"; }))
        .concat(["Total(/"+test.totalMarks+")","Percent","TimeTaken","DateTime"])
        .join(",");

      var rows = data.map(function(r, i){
        var secVals = secKeys.map(function(s){ return r.scores ? (r.scores[s] !== undefined ? r.scores[s] : 0) : 0; });
        return [
          i+1,
          '"'+(r.name||"").replace(/"/g,'""')+'"'
        ].concat(secVals).concat([
          r.total || 0,
          r.percent || "",
          '"'+(r.timeTaken||"")+'"',
          '"'+(r.timestamp||"")+'"'
        ]).join(",");
      });

      var csv = header + "\n" + rows.join("\n");
      var blob = new Blob([csv], {type:"text/csv;charset=utf-8;"});
      var url  = URL.createObjectURL(blob);
      var a    = document.createElement("a");
      a.href   = url;
      a.download = "Merit_" + testId + "_" + new Date().toISOString().slice(0,10) + ".csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    })
    .catch(function(){ alert("Failed to fetch data for export."); });
}

// ── HELPERS ──────────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;");
}

function renderEmpty(msg) {
  return '<div class="adm-empty">'
    + '<div class="adm-empty-icon">📭</div>'
    + '<div class="adm-empty-text">' + msg + '</div>'
    + '</div>';
}
