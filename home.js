// home.js – Home page logic for all 6 sections

document.addEventListener("DOMContentLoaded", function () {
  renderFullTests();
  renderPartTests();
  renderPDFs();
  renderQuestionBank();
  document.getElementById("adminPass").addEventListener("keydown", function (e) {
    if (e.key === "Enter") adminLogin();
  });
});

// ══════════════════════════════════════════════════════════
// TOGGLE DROPDOWN
// ══════════════════════════════════════════════════════════
function toggleSection(id) {
  var drop = document.getElementById("drop-" + id);
  var chev = document.getElementById("chev-" + id);
  var card = document.getElementById("card-" + id);
  var isOpen = !drop.classList.contains("hidden");
  drop.classList.toggle("hidden");
  chev.textContent = isOpen ? "▼" : "▲";
  card.classList.toggle("card-open", !isOpen);
}

// ══════════════════════════════════════════════════════════
// 1. FULL TESTS
// ══════════════════════════════════════════════════════════
function renderFullTests() {
  var container = document.getElementById("fulltest-list");
  container.innerHTML = "";
  FULL_TESTS.forEach(function (test) {
    container.appendChild(buildTestRow(test, "fulltest"));
  });
}

// ══════════════════════════════════════════════════════════
// 2. PART TESTS
// ══════════════════════════════════════════════════════════
function renderPartTests() {
  ["english", "maths", "reasoning", "konkani"].forEach(function (subj) {
    var container = document.getElementById("part-" + subj + "-list");
    container.innerHTML = "";
    var tests = PART_TESTS.filter(function (t) { return t.subject === subj; });
    if (tests.length === 0) {
      container.innerHTML = '<p class="empty-msg">No ' + subj + ' tests yet.</p>';
      return;
    }
    tests.forEach(function (test) {
      container.appendChild(buildTestRow(test, "parttest"));
    });
  });
}

function showSubject(subj, btn) {
  document.querySelectorAll(".subject-panel").forEach(function (p) { p.classList.add("hidden"); });
  document.querySelectorAll(".sub-tab").forEach(function (t) { t.classList.remove("active"); });
  document.getElementById("part-" + subj).classList.remove("hidden");
  btn.classList.add("active");
}

// ══════════════════════════════════════════════════════════
// SHARED: BUILD TEST ROW (Full + Part)
// ══════════════════════════════════════════════════════════
function buildTestRow(test, type) {
  var row = document.createElement("div");
  row.className = "test-row";

  var statusBadge = test.live
    ? '<span class="badge badge-live">● Live</span>'
    : '<span class="badge badge-soon">Coming Soon</span>';

  var secTags = "";
  if (test.sections) {
    Object.keys(test.sections).forEach(function (sec) {
      secTags += '<span class="sec-tag">' + sec + ': ' + test.sections[sec] + '</span>';
    });
  }

  var mins = Math.round(test.duration / 60);

  // Top-5 button (always visible for live tests)
  var top5Btn = test.live
    ? '<button class="btn btn-sm btn-ghost" onclick="showTop5(\'' + test.id + '\',\'' + test.title + '\',' + test.totalMarks + ',this)">🏅 Toppers</button>'
    : '';

  var startBtn = test.live
    ? '<button class="btn btn-sm btn-primary" onclick="goToTest(\'' + test.id + '\')">Start Test →</button>'
    : '<button class="btn btn-sm btn-disabled" disabled>Coming Soon</button>';

  row.innerHTML =
    '<div class="test-row-info">' +
      '<div class="test-row-top">' +
        '<span class="test-row-title">' + test.title + '</span>' +
        statusBadge +
      '</div>' +
      '<div class="test-row-meta">' + test.description + ' · ⏱ ' + mins + ' min</div>' +
      '<div class="test-row-tags">' + secTags + '</div>' +
    '</div>' +
    '<div class="test-row-actions">' + top5Btn + startBtn + '</div>';

  // Top 5 panel (hidden by default, toggled below row)
  var top5Panel = document.createElement("div");
  top5Panel.className = "top5-panel hidden";
  top5Panel.id = "top5-" + test.id;
  top5Panel.innerHTML = '<p class="top5-loading">Loading...</p>';

  var wrapper = document.createElement("div");
  wrapper.appendChild(row);
  wrapper.appendChild(top5Panel);
  return wrapper;
}

// ══════════════════════════════════════════════════════════
// TOP 5 PERFORMANCE
// ══════════════════════════════════════════════════════════

// Store refresh timers so we can clear them
var top5Timers = {};

function showTop5(testId, testTitle, totalMarks, btn) {
  var panel = document.getElementById("top5-" + testId);

  // Toggle close
  if (!panel.classList.contains("hidden")) {
    panel.classList.add("hidden");
    btn.innerHTML = '🏅 Toppers';
    if (top5Timers[testId]) { clearInterval(top5Timers[testId]); delete top5Timers[testId]; }
    return;
  }

  // Open panel
  panel.classList.remove("hidden");
  btn.innerHTML = '✕ Hide';

  // Load immediately then every 30 seconds
  fetchTop5(testId, testTitle, totalMarks, panel);
  top5Timers[testId] = setInterval(function () {
    fetchTop5(testId, testTitle, totalMarks, panel);
  }, 30000);
}

function fetchTop5(testId, testTitle, totalMarks, panel) {
  if (!SCRIPT_URL || SCRIPT_URL === "PASTE_YOUR_APPS_SCRIPT_URL_HERE") {
    panel.innerHTML =
      '<div class="top5-header">🏆 Toppers – ' + testTitle + '</div>' +
      '<p class="top5-empty" style="color:rgba(245,158,11,0.7);">Configure SCRIPT_URL in config.js to see live results.</p>';
    return;
  }

  panel.innerHTML = '<p class="top5-loading">⏳ Loading...</p>';

  fetch(SCRIPT_URL + "?action=read&testId=" + testId, {
    method: "GET",
    mode: "cors"
  })
  .then(function(r) {
    if (!r.ok) throw new Error("Network error");
    return r.json();
  })
  .then(function(res) {
    renderTop5Data(res, testTitle, totalMarks, panel);
  })
  .catch(function() {
    // Try with no-cors as last resort — won't return data but at least won't error
    panel.innerHTML =
      '<div class="top5-header">🏆 Toppers – ' + testTitle + '</div>' +
      '<p class="top5-empty">⚠️ Could not load. Make sure your Apps Script is deployed with <strong>Anyone</strong> access and re-deploy after any code change.</p>';
  });
}

function renderTop5Data(res, testTitle, totalMarks, panel) {
  if (!res.success || !res.data || res.data.length === 0) {
    panel.innerHTML =
      '<div class="top5-header">🏆 Toppers – ' + testTitle + '</div>' +
      '<p class="top5-empty">No submissions yet. Be the first to attempt!</p>';
    return;
  }

  var top    = res.data.slice(0, 5);
  var total  = res.data.length;
  var outOf  = totalMarks || 50;
  var medals = ["🥇", "🥈", "🥉"];

  var html = '<div class="top5-header">'
    + '🏆 Top Performers – ' + testTitle
    + '<span class="top5-count">' + total + ' attempted</span>'
    + '</div>'
    + '<ol class="top5-list">';

  top.forEach(function(r, i) {
    var pct  = Math.round((r.total / outOf) * 100);
    var rank = i < 3
      ? medals[i]
      : '<span class="top5-num">' + (i + 1) + '</span>';

    html += '<li class="top5-item">'
      + '<span class="top5-rank">' + rank + '</span>'
      + '<div class="top5-info">'
      +   '<span class="top5-name">' + r.name + '</span>'
      +   '<div class="top5-bar-wrap"><div class="top5-bar" style="width:' + Math.max(4, pct) + '%"></div></div>'
      + '</div>'
      + '<span class="top5-score">' + r.total + '<span class="top5-outof">/' + outOf + '</span></span>'
      + '</li>';
  });

  html += '</ol><div class="top5-footer">🔄 Auto-refreshes every 30s</div>';
  panel.innerHTML = html;
}

// ══════════════════════════════════════════════════════════
// 3/4/5. PDF SECTIONS
// ══════════════════════════════════════════════════════════
function renderPDFs() {
  ["notes", "books", "material"].forEach(function (cat) {
    var items = PDF_RESOURCES.filter(function (r) { return r.category === cat; });
    var list  = document.getElementById(cat + "-list");
    var empty = document.getElementById(cat + "-empty");
    list.innerHTML = "";
    if (items.length === 0) { empty.style.display = "block"; list.style.display = "none"; return; }
    empty.style.display = "none"; list.style.display = "block";
    items.forEach(function (item) { list.appendChild(buildPDFRow(item)); });
  });
}

function buildPDFRow(item) {
  var row = document.createElement("div");
  row.className = "pdf-row";
  var subjectIcon = { English:"📘", Maths:"📐", Reasoning:"🧠", Konkani:"📖", General:"📄" };
  var icon = subjectIcon[item.subject] || "📄";
  row.innerHTML =
    '<div class="pdf-row-info">' +
      '<span class="pdf-icon">' + icon + '</span>' +
      '<div>' +
        '<div class="pdf-title">' + item.title + '</div>' +
        '<div class="pdf-meta">' + item.subject + ' · ' + formatDate(item.date) + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="pdf-row-actions">' +
      '<a href="' + item.url + '" target="_blank" class="btn btn-sm btn-outline">👁 View</a>' +
      '<a href="' + item.url.replace("/view","").replace("/preview","") + '&export=download" class="btn btn-sm btn-primary">⬇ Download</a>' +
    '</div>';
  return row;
}

// ══════════════════════════════════════════════════════════
// 6. QUESTION BANK
// ══════════════════════════════════════════════════════════
function renderQuestionBank() {
  var tabs  = document.getElementById("qbankDateTabs");
  var qList = document.getElementById("qbank-questions");
  var empty = document.getElementById("qbank-empty");
  tabs.innerHTML = ""; qList.innerHTML = "";

  if (!QUESTION_BANK || QUESTION_BANK.length === 0) {
    empty.style.display = "block"; return;
  }
  empty.style.display = "none";

  // Build date tabs
  QUESTION_BANK.forEach(function (set, i) {
    var btn = document.createElement("button");
    btn.className = "date-tab" + (i === 0 ? " active" : "");
    btn.textContent = set.label || set.date;
    btn.onclick = (function (idx) { return function () { loadQBankSet(idx, btn); }; })(i);
    tabs.appendChild(btn);
  });

  loadQBankSet(0, tabs.firstChild);
}

function loadQBankSet(idx, btn) {
  document.querySelectorAll(".date-tab").forEach(function (t) { t.classList.remove("active"); });
  btn.classList.add("active");
  var set   = QUESTION_BANK[idx];
  var qList = document.getElementById("qbank-questions");
  qList.innerHTML = "";
  if (!set || !set.questions || set.questions.length === 0) {
    qList.innerHTML = '<p class="empty-msg">No questions for this date.</p>'; return;
  }

  var header = document.createElement("div");
  header.className = "qbank-day-header";
  header.innerHTML = '<span>📅 ' + (set.label || set.date) + '</span>'
    + '<span class="qbank-count">' + set.questions.length + ' Questions</span>';
  qList.appendChild(header);

  set.questions.forEach(function (q, i) {
    qList.appendChild(buildQBankItem(q, i));
  });
}

function buildQBankItem(q, idx) {
  var wrap = document.createElement("div");
  wrap.className = "qbank-item";
  wrap.id = "qb-" + q.id;

  var labels = ["A","B","C","D"];
  var optsHtml = "";
  q.options.forEach(function (opt, i) {
    optsHtml += '<li class="qb-option" data-lbl="' + labels[i] + '" data-qid="' + q.id + '" data-correct="' + q.answer + '" onclick="selectQBOption(this)">'
      + '<span class="qb-lbl">' + labels[i] + '.</span> ' + opt + '</li>';
  });

  wrap.innerHTML =
    '<div class="qb-qnum">Q' + (idx + 1) + '</div>' +
    '<div class="qb-text">' + q.text + '</div>' +
    '<ul class="qb-options">' + optsHtml + '</ul>' +
    '<div class="qb-explanation hidden" id="exp-' + q.id + '">' +
      '<strong>💡 Explanation:</strong> ' + (q.explanation || "No explanation provided.") +
    '</div>';
  return wrap;
}

function selectQBOption(el) {
  var qid     = el.getAttribute("data-qid");
  var chosen  = el.getAttribute("data-lbl");
  var correct = el.getAttribute("data-correct");
  var wrap    = document.getElementById("qb-" + qid);

  // Prevent re-answering
  if (wrap.classList.contains("answered")) return;
  wrap.classList.add("answered");

  // Mark all options
  wrap.querySelectorAll(".qb-option").forEach(function (opt) {
    var lbl = opt.getAttribute("data-lbl");
    if (lbl === correct) opt.classList.add("qb-correct");
    else if (lbl === chosen) opt.classList.add("qb-wrong");
    opt.style.pointerEvents = "none";
  });

  // Show explanation
  document.getElementById("exp-" + qid).classList.remove("hidden");
}

// ══════════════════════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════════════════════
function goToTest(testId) {
  window.location.href = "test.html?id=" + testId;
}

// ══════════════════════════════════════════════════════════
// ADMIN
// ══════════════════════════════════════════════════════════
function openAdminModal() {
  var modal = document.getElementById("adminModal");
  modal.style.display = "flex";
  document.getElementById("adminPass").value = "";
  document.getElementById("adminError").style.display = "none";
  setTimeout(function () { document.getElementById("adminPass").focus(); }, 100);
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

function adminLogin() {
  if (document.getElementById("adminPass").value === ADMIN_PASSWORD) {
    closeModal("adminModal");
    window.location.href = "admin.html";
  } else {
    document.getElementById("adminError").style.display = "block";
  }
}

// ══════════════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════════════
function formatDate(dateStr) {
  if (!dateStr) return "";
  var d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}
