// test.js – Dr Shetye Academic Program — Test Engine v3.0
// Features: Section tabs · HH:MM:SS timer · Mark for Review (purple)
// Clear Response · Floating palette button · Slide-out palette drawer
// 5-status legend · Shield shape for current/not-answered · Light UI

var currentTest    = null;
var currentStudent = "";
var currentQ       = 0;
var userAnswers    = {};
var markedReview   = {};
var visitedQ       = {};
var timerInterval  = null;
var timeLeft       = 3600;
var questions      = [];

// ── INIT ──────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  var params  = new URLSearchParams(window.location.search);
  var testId  = params.get("id");
  var allTests = (window.FULL_TESTS || []).concat(window.PYQ_TESTS || []).concat(window.PART_TESTS || []).concat(window.TOPIC_TESTS || []);
  for (var i = 0; i < allTests.length; i++) {
    if (allTests[i].id === testId) { currentTest = allTests[i]; break; }
  }

  if (!currentTest || !currentTest.live) {
    document.getElementById("loginPage").innerHTML =
      '<div class="card login-card">' +
      '<span class="back-link" onclick="history.back()">← Back</span>' +
      '<h2 class="card-title" style="color:#dc2626;">Test Not Available</h2>' +
      '<p class="card-subtitle">This test is not live yet or could not be found.</p></div>';
    return;
  }

  document.getElementById("loginTestBadge").textContent = currentTest.title;
  document.getElementById("loginSubtitle").textContent  =
    currentTest.description + " · " + Math.round(currentTest.duration / 60) + " min";
  document.title = currentTest.title + " – Dr Shetye Academic Program";

  document.getElementById("studentPassword").addEventListener("keydown", function (e) { if (e.key === "Enter") login(); });
  document.getElementById("studentName").addEventListener("keydown",     function (e) { if (e.key === "Enter") login(); });

  loadQuestions(currentTest.questionsFile);
});

function loadQuestions(filename) {
  var script = document.createElement("script");
  script.src = filename;
  script.onerror = function () {
    document.getElementById("loginPage").innerHTML =
      '<div class="card login-card">' +
      '<span class="back-link" onclick="history.back()">← Back</span>' +
      '<h2 class="card-title" style="color:#dc2626;">Questions Not Uploaded</h2>' +
      '<p class="card-subtitle">File <strong>' + filename + '</strong> not found. Upload it to GitHub to activate this test.</p></div>';
  };
  document.body.appendChild(script);
}

// ── PAGE ROUTING ──────────────────────────────────────────
function showPage(id) {
  ["loginPage", "testPage", "resultPage", "answerPage"].forEach(function (p) {
    document.getElementById(p).style.display = "none";
  });
  document.getElementById(id).style.display = "block";
  window.scrollTo(0, 0);
}

// ── LOGIN ─────────────────────────────────────────────────
function login() {
  var name = document.getElementById("studentName").value.trim();
  var pass = document.getElementById("studentPassword").value.trim();
  var err  = document.getElementById("loginError");
  if (!name) { err.textContent = "Please enter your full name."; err.style.display = "block"; return; }
  if (pass !== currentTest.password) { err.textContent = "Incorrect password. Please check with your coordinator."; err.style.display = "block"; return; }
  if (!questions || questions.length === 0) { err.textContent = "Questions not loaded yet. Please refresh."; err.style.display = "block"; return; }
  err.style.display  = "none";
  currentStudent     = name;
  userAnswers        = {};
  markedReview       = {};
  visitedQ           = {};
  currentQ           = 0;
  timeLeft           = currentTest.duration;
  startTest();
}

// ── SECTIONS ─────────────────────────────────────────────
var SECTION_ORDER = [
  "General Intelligence & Reasoning",
  "English Comprehension",
  "English", "Maths", "Reasoning", "Konkani"
];

function getSections() {
  var secs = [];
  SECTION_ORDER.forEach(function (sec) {
    var start = -1, count = 0;
    questions.forEach(function (q, i) {
      if (q.section === sec) { if (start === -1) start = i; count++; }
    });
    if (count > 0) secs.push({ name: sec, short: secShort(sec), start: start, end: start + count });
  });
  return secs;
}

function secShort(s) {
  return { "General Intelligence & Reasoning": "Reasoning & Aptitude", "English Comprehension": "English" }[s] || s;
}

// ── START TEST ────────────────────────────────────────────
function startTest() {
  document.getElementById("paletteStudentName").textContent = currentStudent;
  document.getElementById("topTestName").textContent = currentTest.title;
  buildSectionTabs();
  showPage("testPage");
  buildPalette();
  renderQuestion(0);
  startTimer();
}

function buildSectionTabs() {
  var bar = document.getElementById("sectionTabBar");
  bar.innerHTML = "";
  var secs = getSections();
  secs.forEach(function (s, i) {
    var btn = document.createElement("button");
    btn.className = "sec-tab" + (i === 0 ? " active" : "");
    btn.textContent = s.short;
    btn.id = "sectab-" + i;
    btn.onclick = (function (start, idx) {
      return function () {
        renderQuestion(start);
        document.querySelectorAll(".sec-tab").forEach(function (t) { t.classList.remove("active"); });
        document.getElementById("sectab-" + idx).classList.add("active");
      };
    })(s.start, i);
    bar.appendChild(btn);
  });
}

// ── RENDER QUESTION ───────────────────────────────────────
function renderQuestion(idx) {
  currentQ = idx;
  visitedQ[idx] = true;

  var q   = questions[idx];
  var box = document.getElementById("questionBox");

  // Sync active section tab
  var secs = getSections();
  secs.forEach(function (s, i) {
    var t = document.getElementById("sectab-" + i);
    if (t) { t.classList.remove("active"); if (idx >= s.start && idx < s.end) t.classList.add("active"); }
  });

  // Q number
  document.getElementById("qNumLabel").textContent = "No. " + (idx + 1);

  var html = "";

  // Passage
  if (q.passage) {
    html += '<div class="passage-box">'
          + '<div class="passage-label">📄 Read the following passage carefully</div>'
          + q.passage + '</div>';
  }
  if (q.clozeContext) {
    html += '<div class="passage-box" style="font-style:italic;">' + q.clozeContext + '</div>';
  }
  if (q.image) {
    html += '<div class="question-image-wrap"><img src="' + q.image + '" class="question-image" alt="Question image"/></div>';
  }

  html += '<div class="question-text">' + q.text + '</div>';
  html += '<ul class="options-list">';
  var labels = ["A", "B", "C", "D"];
  for (var i = 0; i < q.options.length; i++) {
    var lbl = labels[i];
    var isSel = userAnswers[q.id] === lbl;
    html += '<li class="option-item' + (isSel ? " selected" : "") + '" '
          + 'data-qid="' + q.id + '" data-lbl="' + lbl + '" onclick="selectAnswer(this)">'
          // Left cell: radio + letter label (light blue column)
          + '<span class="opt-label-cell">'
          + '<span class="radio-circle' + (isSel ? " checked" : "") + '"></span>'
          + '<span class="opt-letter">' + lbl + '</span>'
          + '</span>'
          // Right cell: option text (white column)
          + '<span class="opt-text-cell">' + q.options[i] + '</span>'
          + '</li>';
  }
  html += '</ul>';
  box.innerHTML = html;

  // Mark for review button state
  var mrBtn = document.getElementById("markReviewBtn");
  if (markedReview[idx]) {
    mrBtn.classList.add("marked");
    mrBtn.textContent = "🟣 Marked for Review";
  } else {
    mrBtn.classList.remove("marked");
    mrBtn.textContent = "Mark & Save";
  }

  // Prev / Next button states
  var pb = document.getElementById("prevBtn");
  var nb = document.getElementById("nextBtn");
  if (pb) pb.disabled = (idx === 0);
  if (nb) {
    nb.disabled = (idx === questions.length - 1);
    nb.textContent = (idx === questions.length - 1) ? "Last ▶" : "Next ▶";
  }
  updatePalette();
}

function selectAnswer(el) {
  var qid = parseInt(el.getAttribute("data-qid"));
  userAnswers[qid] = el.getAttribute("data-lbl");
  document.querySelectorAll(".option-item").forEach(function (li) {
    li.classList.remove("selected");
    li.querySelector(".radio-circle").classList.remove("checked");
  });
  el.classList.add("selected");
  el.querySelector(".radio-circle").classList.add("checked");
  updatePalette();
}

function clearResponse() {
  delete userAnswers[questions[currentQ].id];
  document.querySelectorAll(".option-item").forEach(function (li) {
    li.classList.remove("selected");
    li.querySelector(".radio-circle").classList.remove("checked");
  });
  updatePalette();
}

function markForReview() {
  markedReview[currentQ] = !markedReview[currentQ];
  var mrBtn = document.getElementById("markReviewBtn");
  if (markedReview[currentQ]) {
    mrBtn.classList.add("marked");
    mrBtn.textContent = "🟣 Marked for Review";
  } else {
    mrBtn.classList.remove("marked");
    mrBtn.textContent = "Mark & Save";
  }
  updatePalette();
  // Advance to next question
  if (currentQ < questions.length - 1) renderQuestion(currentQ + 1);
}

function saveAndNext() {
  if (currentQ < questions.length - 1) renderQuestion(currentQ + 1);
}

function prevQuestion() { if (currentQ > 0) renderQuestion(currentQ - 1); }
function nextQuestion() {
  if (currentQ >= questions.length - 1) return;
  // Flash "Saved ✓" on Next button if an answer is selected
  var nb = document.getElementById("nextBtn");
  if (nb && userAnswers[questions[currentQ].id]) {
    var orig = nb.textContent;
    nb.textContent = "Saved ✓";
    nb.style.background = "#15803d";
    setTimeout(function () {
      renderQuestion(currentQ + 1);
    }, 350);
  } else {
    renderQuestion(currentQ + 1);
  }
}

// ── PALETTE ──────────────────────────────────────────────
function openPalette() {
  document.getElementById("paletteDrawer").classList.add("open");
  document.getElementById("paletteOverlay").style.display = "block";
}
function closePalette() {
  document.getElementById("paletteDrawer").classList.remove("open");
  document.getElementById("paletteOverlay").style.display = "none";
}

function buildPalette() {
  var grid = document.getElementById("palette");
  grid.innerHTML = "";
  getSections().forEach(function (s) {
    var secDiv = document.createElement("div");
    secDiv.className = "pal-sec-group";

    var label = document.createElement("div");
    label.className = "pal-sec-label";
    label.innerHTML = "<b>Section:</b> " + s.short;
    secDiv.appendChild(label);

    var btnRow = document.createElement("div");
    btnRow.className = "pal-btn-row";
    for (var i = s.start; i < s.end; i++) {
      (function (idx) {
        var btn = document.createElement("button");
        btn.id = "pal-" + idx;
        btn.className = "pal-btn";
        btn.textContent = idx + 1;
        btn.onclick = function () { renderQuestion(idx); closePalette(); };
        btnRow.appendChild(btn);
      })(i);
    }
    secDiv.appendChild(btnRow);
    grid.appendChild(secDiv);
  });
  updatePalette();
}

function updatePalette() {
  var counts = { answered: 0, marked: 0, notVisited: 0, markedAns: 0, notAnswered: 0 };

  for (var i = 0; i < questions.length; i++) {
    var btn       = document.getElementById("pal-" + i);
    if (!btn) continue;
    var isAns     = !!userAnswers[questions[i].id];
    var isMark    = !!markedReview[i];
    var isVisited = !!visitedQ[i];
    var isCurrent = i === currentQ;

    btn.className = "pal-btn";

    if (isCurrent) {
      btn.classList.add("pal-current");
    } else if (isMark && isAns) {
      btn.classList.add("pal-marked-ans"); counts.markedAns++;
    } else if (isMark) {
      btn.classList.add("pal-marked");     counts.marked++;
    } else if (isAns) {
      btn.classList.add("pal-answered");   counts.answered++;
    } else if (isVisited) {
      btn.classList.add("pal-not-ans");    counts.notAnswered++;
    } else {
      btn.classList.add("pal-not-visited"); counts.notVisited++;
    }
  }

  function set(id, val) { var e = document.getElementById(id); if (e) e.textContent = val; }
  set("cnt-answered",    counts.answered);
  set("cnt-marked",      counts.marked);
  set("cnt-not-visited", counts.notVisited);
  set("cnt-marked-ans",  counts.markedAns);
  set("cnt-not-ans",     counts.notAnswered);
}

// ── TIMER ─────────────────────────────────────────────────
function startTimer() {
  clearInterval(timerInterval);
  renderTimer();
  // Use Date-based timer to avoid browser throttling on background tabs
  var startAt   = Date.now();
  var startLeft = timeLeft;
  timerInterval = setInterval(function () {
    var elapsed = Math.floor((Date.now() - startAt) / 1000);
    timeLeft = Math.max(0, startLeft - elapsed);
    renderTimer();
    if (timeLeft <= 0) { clearInterval(timerInterval); submitTest(); }
  }, 500); // poll every 500ms for accuracy
}

function renderTimer() {
  var h  = Math.floor(timeLeft / 3600);
  var m  = Math.floor((timeLeft % 3600) / 60);
  var s  = timeLeft % 60;

  // Update individual spans by ID — NO innerHTML rebuild = no flicker
  var elH = document.getElementById("t-h");
  var elM = document.getElementById("t-m");
  var elS = document.getElementById("t-s");
  if (!elH || !elM || !elS) return;

  elH.textContent = pad(h);
  elM.textContent = pad(m);
  elS.textContent = pad(s);

  // Update timer bar colour class
  var bar = document.querySelector(".timer-bar");
  if (bar) {
    bar.classList.remove("warning", "urgent");
    if      (timeLeft <= 60)  bar.classList.add("urgent");
    else if (timeLeft <= 300) bar.classList.add("warning");
  }
}

function pad(n) { return String(n).padStart(2, "0"); }

// ── SUBMIT ────────────────────────────────────────────────
function confirmSubmit() {
  var skipped = questions.length - Object.keys(userAnswers).length;
  var msg = (skipped > 0 ? "You have " + skipped + " unanswered question(s).\n\n" : "") + "Submit the test now?";
  if (confirm(msg)) submitTest();
}

function submitTest() {
  clearInterval(timerInterval);
  saveResultCentral(calculateScore());
}

function calculateScore() {
  var scores = {};
  questions.forEach(function (q) {
    if (!scores[q.section]) scores[q.section] = 0;
    if (userAnswers[q.id] === q.answer) scores[q.section]++;
  });
  var total = 0;
  Object.keys(scores).forEach(function (k) { total += scores[k]; });
  return { testId: currentTest.id, testTitle: currentTest.title, name: currentStudent,
           timestamp: new Date().toLocaleString("en-IN"), scores: scores,
           total: total, outOf: currentTest.totalMarks };
}

// ── SAVE ──────────────────────────────────────────────────
function saveResultCentral(result) {
  showPage("resultPage");
  renderResult(result);
  var statusEl = document.getElementById("savingStatus");
  if (!window.SCRIPT_URL || SCRIPT_URL === "PASTE_YOUR_APPS_SCRIPT_URL_HERE") { statusEl.style.display = "none"; return; }
  statusEl.style.display = "block";
  statusEl.textContent = "⏳ Saving your result...";
  var sc = result.scores || {};
  var params = ["action=save",
    "testId="    + encodeURIComponent(result.testId),
    "testTitle=" + encodeURIComponent(result.testTitle),
    "name="      + encodeURIComponent(result.name),
    "timestamp=" + encodeURIComponent(result.timestamp),
    "english="   + encodeURIComponent(sc["English Comprehension"] || sc["English"] || 0),
    "maths="     + encodeURIComponent(sc["Maths"] || 0),
    "reasoning=" + encodeURIComponent(sc["General Intelligence & Reasoning"] || sc["Reasoning"] || 0),
    "konkani="   + encodeURIComponent(sc["Konkani"] || 0),
    "total="     + encodeURIComponent(result.total),
    "outOf="     + encodeURIComponent(result.outOf || 60)
  ].join("&");
  fetch(SCRIPT_URL + "?" + params, { method: "GET", mode: "cors" })
    .then(function (r) { return r.json(); })
    .then(function (res) {
      if (res.success) { statusEl.textContent = "✅ Result saved!"; setTimeout(function () { statusEl.style.display = "none"; }, 3000); }
      else throw new Error(res.error || "Save failed");
    })
    .catch(function () { statusEl.textContent = "⚠️ Could not save. Please inform coordinator."; });
}

// ── RENDER RESULT ─────────────────────────────────────────
function renderResult(result) {
  document.getElementById("resultName").textContent        = "Well done, " + result.name + "!";
  document.getElementById("resultTestLabel").textContent   = result.testTitle;
  document.getElementById("totalScore").textContent        = result.total;
  document.getElementById("totalMarksDisplay").textContent = result.outOf;
  var bk = document.getElementById("scoreBreakdown");
  bk.innerHTML = "";
  Object.keys(result.scores).forEach(function (sec) {
    var max = currentTest.sections ? (currentTest.sections[sec] || "?") : "?";
    var div = document.createElement("div");
    div.className = "breakdown-item";
    div.innerHTML = '<span class="bd-label">' + sec + '</span><span class="bd-val">' + result.scores[sec] + ' / ' + max + '</span>';
    bk.appendChild(div);
  });
  var pct   = (result.total / result.outOf) * 100;
  var badge = document.getElementById("rankBadge");
  if      (pct >= 80) { badge.textContent = "🥇 Excellent"; badge.className = "rank-badge excellent"; }
  else if (pct >= 60) { badge.textContent = "🥈 Good";      badge.className = "rank-badge good"; }
  else if (pct >= 40) { badge.textContent = "🥉 Average";   badge.className = "rank-badge average"; }
  else                { badge.textContent = "📚 Keep Going"; badge.className = "rank-badge below"; }
}

// ── ANSWER REVIEW ─────────────────────────────────────────
function viewAnswers() {
  var list   = document.getElementById("answerList");
  var labels = ["A", "B", "C", "D"];
  list.innerHTML = "";
  questions.forEach(function (q, i) {
    var given   = userAnswers[q.id];
    var correct = q.answer;
    var optText = function (lbl) { return lbl ? q.options[labels.indexOf(lbl)] : "—"; };
    var status  = given === correct ? "correct" : given ? "incorrect" : "skipped";
    var div     = document.createElement("div");
    div.className = "answer-item " + status;
    div.innerHTML =
      '<div class="answer-q"><span class="ans-num">Q' + (i + 1) + '</span> ' + q.text + '</div>' +
      '<div class="answer-detail">' +
      (given === correct ? "✅ Correct" : given ? "❌ Incorrect" : "⬜ Skipped") +
      ' | Your answer: <span class="' + (given === correct ? "correct-ans" : "wrong-ans") + '">' +
      (given ? given + ". " + optText(given) : "Not Attempted") + '</span>' +
      ' | Correct: <span class="correct-ans">' + correct + ". " + optText(correct) + '</span>' +
      (q.explanation ? '<div class="ans-explanation">💡 ' + q.explanation + '</div>' : '') +
      '</div>';
    list.appendChild(div);
  });
  showPage("answerPage");
}

function goHome() { window.location.href = "index.html"; }
