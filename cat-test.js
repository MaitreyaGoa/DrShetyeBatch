/* ═══════════════════════════════════════════════════════════════
   cat-test.js — CAT-style exam console for Excel Bicholim
   Reads a test from config.js (CAT_TESTS, engine: "cat") and its
   question file (CAT_CTX + CAT_SECTIONS). Behaviour follows the CAT:
   · 3 sections, each with its own timer, attempted in order (no going back)
   · an answer counts only after "Save & Next" / "Mark for Review & Next"
   · MCQ +3 / −1, TITA +3 / 0
   ═══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  var params = new URLSearchParams(location.search);
  var testId = params.get("id");
  var TEST = null, SECS = null, CTX = {};
  var S = null;               // exam state
  var tick = null, calcOpen = false, guardArmed = false, examActive = false;
  var tentative = null;       // selection on screen, not yet saved

  var STORE_KEY = function () { return "excelcat:" + testId; };
  function save() { try { localStorage.setItem(STORE_KEY(), JSON.stringify(S)); } catch (e) {} }
  function load() { try { var r = localStorage.getItem(STORE_KEY()); return r ? JSON.parse(r) : null; } catch (e) { return null; } }
  function clearSaved() { try { localStorage.removeItem(STORE_KEY()); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function fmt(ms) { var t = Math.max(0, Math.ceil(ms / 1000)); var m = Math.floor(t / 60), s = t % 60; return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s; }
  function show(id) { ["login", "instr", "exam", "result"].forEach(function (p) { $(p).classList.toggle("hidden", p !== id); }); window.scrollTo(0, 0); }

  /* ── boot ─────────────────────────────────────────── */
  var all = window.ALL_TESTS || [];
  for (var i = 0; i < all.length; i++) if (all[i].id === testId) { TEST = all[i]; break; }
  if (!TEST || !TEST.live) { $("loginTitle").textContent = "Test not available"; $("loginSub").textContent = "This CAT test is not live yet or could not be found."; $("signIn").disabled = true; $("candName").disabled = true; $("pwField").classList.add("hidden"); return; }
  document.title = TEST.title + " – Dr Shetye Academic Program";
  $("loginTitle").textContent = TEST.title;
  $("loginSub").textContent = TEST.description + " · " + Math.round(TEST.duration / 60) + " min";
  var needPw = TEST.requirePassword === true || window.REQUIRE_PASSWORDS === true;
  if (!needPw) $("pwField").classList.add("hidden");

  var sc = document.createElement("script");
  sc.src = TEST.questionsFile;
  sc.onload = function () { SECS = window.CAT_SECTIONS || []; CTX = window.CAT_CTX || {}; checkResume(); };
  sc.onerror = function () { $("loginErr").textContent = "Question file not found: " + TEST.questionsFile; $("signIn").disabled = true; };
  document.body.appendChild(sc);

  ["candName", "candPw"].forEach(function (id) { $(id).addEventListener("keydown", function (e) { if (e.key === "Enter") signIn(); }); });
  $("signIn").onclick = signIn;

  function checkResume() {
    var old = load();
    if (!old || old.finished || !old.sections) return;
    var box = $("resumeBox"); box.classList.remove("hidden");
    box.innerHTML = "An unfinished attempt by <b>" + esc(old.name) + "</b> was found (Section " + (old.sec + 1) + ", " + fmt(old.left[old.sec]) + " left). " +
      '<div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-blue" id="resumeGo">Resume attempt</button><button class="btn" id="resumeNo">Start fresh</button></div>';
    $("resumeGo").onclick = function () { if (needPw && $("candPw").value.trim() !== TEST.password) { $("loginErr").textContent = "Enter the test password to resume."; return; } S = old; startExam(); };
    $("resumeNo").onclick = function () { clearSaved(); box.classList.add("hidden"); };
  }

  function signIn() {
    var name = $("candName").value.trim(), err = $("loginErr");
    if (!SECS) { err.textContent = "Questions are still loading — please wait a moment."; return; }
    if (!name) { err.textContent = "Please enter your full name."; return; }
    if (needPw && $("candPw").value.trim() !== TEST.password) { err.textContent = "Incorrect password. Please check with your coordinator."; return; }
    err.textContent = "";
    S = { name: name, sec: 0, q: 0, finished: false, started: Date.now(),
          left: SECS.map(function (s) { return (s.minutes || 40) * 60000; }),
          sections: SECS.map(function (s) { return { ans: s.questions.map(function () { return null; }), mark: s.questions.map(function () { return false; }),
                                                      st: s.questions.map(function () { return "nv"; }), done: false, used: 0 }; }) };
    renderInstructions();
  }

  /* ── instructions ─────────────────────────────────── */
  function legendHTML() {
    return '<div class="legend-row">' +
      '<span><span class="st nv">1</span> Not Visited</span><span><span class="st nans">2</span> Not Answered</span>' +
      '<span><span class="st ans">3</span> Answered</span><span><span class="st mr">4</span> Marked for Review</span>' +
      '<span><span class="st am">5</span> Answered &amp; Marked for Review (will be evaluated)</span></div>';
  }
  function patternTable() {
    var rows = SECS.map(function (s) {
      var m = s.questions.filter(function (q) { return q.type === "mcq"; }).length;
      return "<tr><td>" + esc(s.name) + " (" + esc(s.short) + ")</td><td>" + s.questions.length + "</td><td>" + m + "</td><td>" + (s.questions.length - m) + "</td><td>" + (s.minutes || 40) + " min</td></tr>";
    }).join("");
    var tq = SECS.reduce(function (a, s) { return a + s.questions.length; }, 0);
    return '<table class="pat"><tr><th>Section</th><th>Questions</th><th>MCQ</th><th>TITA</th><th>Time</th></tr>' + rows +
      "<tr><th>Total</th><th>" + tq + "</th><th colspan=\"2\">" + tq * 3 + " marks</th><th>" + SECS.reduce(function (a, s) { return a + (s.minutes || 40); }, 0) + " min</th></tr></table>";
  }
  function renderInstructions() {
    $("instrBody").innerHTML =
      "<p><b>" + esc(TEST.title) + "</b> — candidate: <b>" + esc(S.name) + "</b></p>" + patternTable() +
      "<ol>" +
      "<li>The test has three sections — VARC, DILR and QA — taken <b>in this order</b>. Each section has its own timer. When a section's time is over, it is submitted automatically and you move to the next one. <b>You cannot go back to a previous section.</b></li>" +
      "<li><b>Marking:</b> +3 for every correct answer. MCQ: −1 for a wrong answer. TITA (type in the answer): no negative marking.</li>" +
      "<li>An answer is saved only when you click <b>Save &amp; Next</b> or <b>Mark for Review &amp; Next</b>. Selecting an option and moving to another question from the palette will <b>not</b> save it.</li>" +
      "<li>Questions marked for review <b>with</b> an answer are evaluated. Questions marked for review without an answer are not.</li>" +
      "<li>Use <b>Clear Response</b> to remove a saved answer. For TITA questions, type the answer using the on-screen keypad.</li>" +
      "<li>An on-screen calculator is available from the calculator icon on the section bar.</li>" +
      "<li>The question palette on the right shows the status of each question:</li></ol>" + legendHTML() +
      '<label class="agree"><input type="checkbox" id="agree"> I have read and understood the instructions. I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this test.</label>' +
      '<div style="text-align:center"><button class="btn btn-blue" id="ready" disabled>I am ready to begin</button></div>';
    show("instr");
    $("agree").onchange = function () { $("ready").disabled = !this.checked; };
    $("ready").onclick = function () { startExam(); };
  }

  /* ── exam ─────────────────────────────────────────── */
  function cur() { return SECS[S.sec]; }
  function cs() { return S.sections[S.sec]; }
  function q() { return cur().questions[S.q]; }

  function startExam() {
    show("exam");
    $("xTitle").textContent = TEST.title + " — Excel Bicholim";
    $("candShow").textContent = S.name;
    $("legend").innerHTML =
      '<div><span class="st ans" id="cA">0</span> Answered</div><div><span class="st nans" id="cN">0</span> Not Answered</div>' +
      '<div><span class="st nv" id="cV">0</span> Not Visited</div><div><span class="st mr" id="cM">0</span> Marked for Review</div>' +
      '<div class="full"><span class="st am" id="cAM">0</span> Answered &amp; Marked for Review (will be considered for evaluation)</div>';
    renderSecBar();
    $("btnSave").onclick = function () { commit(false); };
    $("btnMark").onclick = function () { commit(true); };
    $("btnClear").onclick = clearResp;
    $("btnSubmit").onclick = confirmSectionSubmit;
    $("btnQP").onclick = questionPaper;
    $("btnIns").onclick = function () { modal("Instructions", patternTable() + legendHTML() + "<p style='font-size:13px'>MCQ: +3 / −1 · TITA: +3 / 0 · Save &amp; Next saves your answer · Sections cannot be revisited.</p>", [["Close", null]]); };
    $("sideToggle").onclick = function () { $("side").classList.toggle("open"); this.textContent = $("side").classList.contains("open") ? "❯" : "❮"; };
    setupCalc();
    armGuard();
    renderQ();
    startTick();
  }

  function renderSecBar() {
    var h = SECS.map(function (s, i) {
      return '<button class="secbtn' + (i === S.sec ? " on" : "") + '" ' + (i === S.sec ? "" : "disabled title=\"" + (i < S.sec ? "Section submitted" : "Locked until earlier sections are complete") + "\"") + '>' + esc(s.short) + ' <span class="ico">i</span></button>';
    }).join("");
    h += '<button class="calc-btn" id="calcBtn" title="Calculator" aria-label="Calculator"><svg width="18" height="20" viewBox="0 0 18 20"><rect x="1" y="1" width="16" height="18" rx="2" fill="#f7d36b" stroke="#a07a10"/><rect x="3.5" y="3.5" width="11" height="4" fill="#fff" stroke="#a07a10" stroke-width=".8"/><g fill="#a07a10"><rect x="3.5" y="10" width="2.5" height="2"/><rect x="7.7" y="10" width="2.5" height="2"/><rect x="12" y="10" width="2.5" height="2"/><rect x="3.5" y="14" width="2.5" height="2"/><rect x="7.7" y="14" width="2.5" height="2"/><rect x="12" y="14" width="2.5" height="2"/></g></svg></button>';
    $("secBar").innerHTML = h;
    $("calcBtn").onclick = toggleCalc;
    $("secChip").innerHTML = esc(cur().name) + ' <span class="ico" style="background:#fff;color:var(--chip)">i</span>';
    $("sideSec").textContent = cur().name;
  }

  function status(i) {
    var c = cs(), a = c.ans[i] !== null && c.ans[i] !== "";
    if (c.mark[i]) return a ? "am" : "mr";
    if (a) return "ans";
    return c.st[i] === "nv" ? "nv" : "nans";
  }

  function renderQ() {
    var c = cs(), qq = q();
    if (c.st[S.q] === "nv") c.st[S.q] = "seen";
    tentative = c.ans[S.q];
    var ctx = qq.ctx ? CTX[qq.ctx] : null;
    var panes = $("panes");
    var keepScroll = (panes.dataset.ctx === (qq.ctx || "") && $("ctxPane")) ? $("ctxPane").scrollTop : 0;
    panes.dataset.ctx = qq.ctx || "";
    panes.className = "x-panes" + (ctx ? "" : " single");
    var body;
    if (qq.type === "mcq") {
      body = '<div class="opts">' + qq.opts.map(function (o, j) {
        return '<label class="opt"><input type="radio" name="opt" value="' + j + '"' + (tentative === j ? " checked" : "") + "><span>" + o + "</span></label>";
      }).join("") + "</div>";
    } else {
      body = '<div class="tita"><input id="titaIn" readonly value="' + esc(tentative || "") + '" aria-label="Type your answer">' +
        '<div class="keypad">' + ["⌫", "", "", "7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "-"].map(function (k) {
          return k === "⌫" ? '<button class="wide" data-k="bk">Backspace</button>' : (k === "" ? "" : '<button data-k="' + k + '">' + k + "</button>");
        }).join("") + '<button class="wide" data-k="clr">Clear All</button></div></div>';
    }
    panes.innerHTML = (ctx ? '<div class="pane ctx" id="ctxPane">' + ctx + "</div>" : "") +
      '<div class="pane q" id="qPane"><div class="qno">Question No. ' + (S.q + 1) + "</div><div class=\"qtext\">" + qq.q + "</div>" + body + "</div>";
    if (ctx) $("ctxPane").scrollTop = keepScroll;
    $("marks").textContent = qq.type === "mcq" ? "Marks for correct answer 3 | Negative Marks 1" : "Marks for correct answer 3 | Negative Marks 0";
    if (qq.type === "mcq") {
      panes.querySelectorAll('input[name="opt"]').forEach(function (r) { r.onchange = function () { tentative = parseInt(this.value, 10); }; });
    } else {
      panes.querySelectorAll(".keypad button").forEach(function (b) {
        b.onclick = function () {
          var v = tentative || "", k = this.dataset.k;
          if (k === "bk") v = v.slice(0, -1); else if (k === "clr") v = "";
          else if (k === "-") v = v.charAt(0) === "-" ? v.slice(1) : "-" + v;
          else if (k === ".") { if (v.indexOf(".") < 0) v = (v === "" || v === "-" ? v + "0" : v) + "."; }
          else if (v.replace(/[-.]/g, "").length < 10) v += k;
          tentative = v === "" ? null : v; $("titaIn").value = v;
        };
      });
    }
    $("qPane").scrollTop = 0;
    if (window.innerWidth <= 700) window.scrollTo(0, 0);
    renderPalette();
  }

  function renderPalette() {
    var c = cs(), n = cur().questions.length, cnt = { ans: 0, nans: 0, nv: 0, mr: 0, am: 0 }, h = "";
    for (var i = 0; i < n; i++) {
      var st = status(i); cnt[st]++;
      h += '<button class="st ' + st + (i === S.q ? " cur" : "") + '" data-i="' + i + '" aria-label="Question ' + (i + 1) + '">' + (i + 1) + "</button>";
    }
    $("palette").innerHTML = h;
    $("palette").querySelectorAll("button").forEach(function (b) { b.onclick = function () { go(parseInt(this.dataset.i, 10)); if (window.innerWidth <= 900) { $("side").classList.remove("open"); $("sideToggle").textContent = "❮"; } }; });
    $("cA").textContent = cnt.ans; $("cN").textContent = cnt.nans; $("cV").textContent = cnt.nv; $("cM").textContent = cnt.mr; $("cAM").textContent = cnt.am;
  }

  function go(i) {          // navigate without saving the on-screen selection (as in CAT)
    var n = cur().questions.length;
    S.q = ((i % n) + n) % n; save(); renderQ();
  }
  function commit(markIt) {
    var c = cs(), v = tentative;
    if (q().type === "tita" && v !== null && (v === "-" || v === "." || v === "-." || isNaN(parseFloat(v)))) v = null;
    c.ans[S.q] = (v === null || v === "") ? null : v;
    c.mark[S.q] = !!markIt;
    c.st[S.q] = "seen";
    go(S.q + 1);
  }
  function clearResp() {
    var c = cs(); c.ans[S.q] = null; c.mark[S.q] = false; tentative = null; save(); renderQ();
  }

  /* ── timer ─────────────────────────────────────────── */
  var last = 0;
  function startTick() {
    stopTick(); last = Date.now();
    tick = setInterval(function () {
      var now = Date.now(), dt = now - last; last = now;
      S.left[S.sec] -= dt; cs().used += dt;
      var el = $("timer"); el.textContent = fmt(S.left[S.sec]); el.classList.toggle("low", S.left[S.sec] <= 5 * 60000);
      if (S.left[S.sec] % 5000 < dt) save();
      if (S.left[S.sec] <= 0) { S.left[S.sec] = 0; submitSection(true); }
    }, 500);
    $("timer").textContent = fmt(S.left[S.sec]);
  }
  function stopTick() { if (tick) clearInterval(tick); tick = null; }

  /* ── section submit ───────────────────────────────── */
  function counts(si) {
    var keep = S.sec; S.sec = si; var r = { ans: 0, nans: 0, nv: 0, mr: 0, am: 0 };
    for (var i = 0; i < SECS[si].questions.length; i++) r[status(i)]++;
    S.sec = keep; return r;
  }
  function summaryTable() {
    return '<table class="sum"><tr><th>Section</th><th>No. of Questions</th><th>Answered</th><th>Not Answered</th><th>Marked for Review</th><th>Answered &amp; Marked</th><th>Not Visited</th></tr>' +
      SECS.map(function (s, i) {
        var r = counts(i), state = i < S.sec ? " (submitted)" : (i === S.sec ? " (current)" : " (yet to attempt)");
        return "<tr><td>" + esc(s.short) + state + "</td><td>" + s.questions.length + "</td><td>" + r.ans + "</td><td>" + r.nans + "</td><td>" + r.mr + "</td><td>" + r.am + "</td><td>" + r.nv + "</td></tr>";
      }).join("") + "</table>";
  }
  function confirmSectionSubmit() {
    var lastSec = S.sec === SECS.length - 1;
    modal(lastSec ? "Submit the test?" : "Submit section " + cur().short + "?",
      summaryTable() + "<p style='font-size:13px;margin:10px 0 0'>" + (lastSec ? "This is the last section. Submitting will end the test and show your score." :
        "After submitting you <b>cannot return</b> to " + esc(cur().short) + ". The next section, " + esc(SECS[S.sec + 1].short) + ", will start immediately.") + "</p>",
      [["No", null], ["Yes, submit", function () { submitSection(false); }]]);
  }
  function submitSection(auto) {
    stopTick(); closeModal();
    cs().done = true;
    if (S.sec < SECS.length - 1) {
      var done = cur().short; S.sec++; S.q = 0; save();
      renderSecBar(); renderQ(); startTick();
      if (auto) modal("Time over for " + done, "<p>The time for <b>" + esc(done) + "</b> is over and the section has been submitted. <b>" + esc(cur().name) + "</b> has started.</p>", [["Continue", null]]);
    } else finish();
  }

  /* ── calculator (basic CAT-style) ──────────────────── */
  var cv = { disp: "0", acc: null, op: null, fresh: true };
  function setupCalc() {
    var keys = [["MC", "fn"], ["MR", "fn"], ["M+", "fn"], ["C", "fn"], ["7"], ["8"], ["9"], ["÷", "op"], ["4"], ["5"], ["6"], ["×", "op"], ["1"], ["2"], ["3"], ["−", "op"], ["0"], ["."], ["±", "fn"], ["+", "op"], ["√", "fn"], ["%", "fn"], ["⌫", "fn"], ["=", "eq"]];
    $("calcKeys").innerHTML = keys.map(function (k) { return '<button class="' + (k[1] || "") + '" data-k="' + k[0] + '">' + k[0] + "</button>"; }).join("");
    $("calcKeys").querySelectorAll("button").forEach(function (b) { b.onclick = function () { calcKey(this.dataset.k); }; });
    $("calcClose").onclick = toggleCalc;
    var hd = $("calcHd"), box = $("calc"), dx = 0, dy = 0, drag = false;
    hd.addEventListener("pointerdown", function (e) { if (e.target.tagName === "BUTTON") return; drag = true; var r = box.getBoundingClientRect(); dx = e.clientX - r.left; dy = e.clientY - r.top; hd.setPointerCapture(e.pointerId); });
    hd.addEventListener("pointermove", function (e) { if (!drag) return; box.style.left = Math.max(0, Math.min(innerWidth - box.offsetWidth, e.clientX - dx)) + "px"; box.style.top = Math.max(0, Math.min(innerHeight - 60, e.clientY - dy)) + "px"; box.style.right = "auto"; });
    hd.addEventListener("pointerup", function () { drag = false; });
  }
  var mem = 0;
  function toggleCalc() { calcOpen = !calcOpen; $("calc").classList.toggle("hidden", !calcOpen); }
  function nice(x) { if (!isFinite(x)) return "Error"; var s = String(parseFloat(x.toPrecision(12))); return s.length > 16 ? x.toExponential(8) : s; }
  function compute(a, op, b) { return op === "+" ? a + b : op === "−" ? a - b : op === "×" ? a * b : op === "÷" ? a / b : b; }
  function calcKey(k) {
    var x = parseFloat(cv.disp);
    if (/^[0-9]$/.test(k)) { cv.disp = (cv.fresh || cv.disp === "0") ? k : (cv.disp.length < 16 ? cv.disp + k : cv.disp); cv.fresh = false; }
    else if (k === ".") { if (cv.fresh) { cv.disp = "0."; cv.fresh = false; } else if (cv.disp.indexOf(".") < 0) cv.disp += "."; }
    else if (k === "C") { cv = { disp: "0", acc: null, op: null, fresh: true }; }
    else if (k === "⌫") { if (!cv.fresh) cv.disp = cv.disp.length > 1 ? cv.disp.slice(0, -1) : "0"; }
    else if (k === "±") { cv.disp = nice(-x); }
    else if (k === "√") { cv.disp = nice(Math.sqrt(x)); cv.fresh = true; }
    else if (k === "%") { cv.disp = nice(cv.acc !== null ? cv.acc * x / 100 : x / 100); cv.fresh = true; }
    else if (k === "MC") mem = 0; else if (k === "MR") { cv.disp = nice(mem); cv.fresh = true; } else if (k === "M+") { mem += x; cv.fresh = true; }
    else if (k === "=") { if (cv.op !== null) { cv.disp = nice(compute(cv.acc, cv.op, x)); cv.acc = null; cv.op = null; } cv.fresh = true; }
    else { if (cv.op !== null && !cv.fresh) cv.disp = nice(compute(cv.acc, cv.op, x)); cv.acc = parseFloat(cv.disp); cv.op = k; cv.fresh = true; }
    $("calcDisp").textContent = cv.disp;
  }

  /* ── modals ───────────────────────────────────────── */
  function modal(title, html, buttons) {
    var root = $("modalRoot");
    root.innerHTML = '<div class="modal-bg"><div class="modal" role="dialog" aria-modal="true"><h3>' + esc(title) + '</h3><div class="mb">' + html + '</div><div class="mf">' +
      buttons.map(function (b, i) { return '<button class="btn' + (i === buttons.length - 1 ? " btn-blue" : "") + '" data-i="' + i + '">' + b[0] + "</button>"; }).join("") + "</div></div></div>";
    root.querySelectorAll(".mf button").forEach(function (b) { b.onclick = function () { var f = buttons[this.dataset.i][1]; closeModal(); if (f) f(); }; });
  }
  function closeModal() { $("modalRoot").innerHTML = ""; }
  function questionPaper() {
    var h = cur().questions.map(function (qq, i) {
      return '<div class="qp-item"><b>Q' + (i + 1) + ".</b> " + qq.q + (qq.type === "mcq" ? '<ol type="A" style="margin:4px 0 0">' + qq.opts.map(function (o) { return "<li>" + o + "</li>"; }).join("") + "</ol>" : " <i>(TITA)</i>") + "</div>";
    }).join("");
    modal("Question Paper — " + cur().name, h, [["Close", null]]);
  }

  /* ── exit guard (browser Back / refresh) ──────────── */
  function armGuard() {
    examActive = true;
    if (!guardArmed) { guardArmed = true; try { history.pushState({ cat: true }, "", location.href); } catch (e) {} }
  }
  window.addEventListener("popstate", function () {
    if (examActive) {
      if (confirm("Are you sure you want to exit the test?\n\nYour progress is saved on this device and you can resume, but the timer is paused only while you are away.")) { examActive = false; save(); history.back(); }
      else { try { history.pushState({ cat: true }, "", location.href); } catch (e) {} }
    } else if (guardArmed) { guardArmed = false; history.back(); }
  });
  window.addEventListener("beforeunload", function (e) { if (examActive) { save(); e.preventDefault(); e.returnValue = ""; } });

  /* ── scoring & result ─────────────────────────────── */
  function isCorrect(qq, a) {
    if (a === null || a === undefined || a === "") return null;
    if (qq.type === "mcq") return a === qq.ans;
    if (/^\d{4,5}$/.test(qq.ans) && (qq.topic || "").indexOf("jumble") >= 0) return String(a) === qq.ans;   // para-jumble order
    var na = parseFloat(a), nb = parseFloat(qq.ans);
    return !isNaN(na) && Math.abs(na - nb) < 1e-9;
  }
  function grade() {
    return SECS.map(function (s, si) {
      var st = S.sections[si], c = 0, w = 0, sk = 0, score = 0;
      s.questions.forEach(function (qq, i) {
        var r = isCorrect(qq, st.ans[i]);
        if (r === null) sk++; else if (r) { c++; score += 3; } else { w++; if (qq.type === "mcq") score -= 1; }
      });
      var att = c + w;
      return { id: s.id, short: s.short, name: s.name, n: s.questions.length, c: c, w: w, sk: sk, att: att, score: score, acc: att ? Math.round(c / att * 100) : 0, used: st.used };
    });
  }
  function finish() {
    stopTick(); examActive = false; S.finished = true; S.finishedAt = Date.now(); save();
    if (calcOpen) toggleCalc();
    renderResult(); saveCentral();
  }
  function saveCentral() {
    var g = grade(), by = {}; g.forEach(function (x) { by[x.short] = x.score; });
    var total = g.reduce(function (a, x) { return a + x.score; }, 0), st = $("saving");
    if (!window.SCRIPT_URL || SCRIPT_URL === "PASTE_YOUR_APPS_SCRIPT_URL_HERE") { if (st) st.textContent = ""; return; }
    st.textContent = "⏳ Saving your result…";
    var p = ["action=save", "testId=" + encodeURIComponent(TEST.id), "testTitle=" + encodeURIComponent(TEST.title), "name=" + encodeURIComponent(S.name),
      "timestamp=" + encodeURIComponent(new Date().toLocaleString("en-IN")),
      "english=" + encodeURIComponent(by.VARC || 0), "maths=" + encodeURIComponent(by.QA || 0), "reasoning=" + encodeURIComponent(by.DILR || 0),
      "konkani=0", "total=" + encodeURIComponent(total), "outOf=" + encodeURIComponent(TEST.totalMarks || 204)].join("&");
    fetch(SCRIPT_URL + "?" + p, { method: "GET", mode: "cors" }).then(function (r) { return r.json(); })
      .then(function (res) { if (res.success) st.textContent = "✅ Result saved to the Excel Bicholim leaderboard."; else throw 0; })
      .catch(function () { st.textContent = "⚠️ Could not save the result online. Please inform your coordinator."; });
  }
  var filter = "all";
  function renderResult() {
    show("result");
    var g = grade(), tot = g.reduce(function (a, x) { return a + x.score; }, 0), max = g.reduce(function (a, x) { return a + x.n * 3; }, 0);
    var att = g.reduce(function (a, x) { return a + x.att; }, 0), cor = g.reduce(function (a, x) { return a + x.c; }, 0);
    var mins = function (ms) { var t = Math.round(ms / 1000); return Math.floor(t / 60) + "m " + (t % 60) + "s"; };
    $("resultWrap").innerHTML =
      '<div class="score-hero"><div><div style="font-size:13px;color:#555">' + esc(TEST.title) + " · " + esc(S.name) + '</div><div class="big">' + tot + " <small>/ " + max + "</small></div>" +
      '<div style="font-size:13px;color:#555">' + att + " attempted · " + cor + " correct · accuracy " + (att ? Math.round(cor / att * 100) : 0) + '%</div><div class="saving" id="saving"></div></div>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-blue" id="toSol">View solutions</button><a class="btn" href="index.html#sec-cat" style="text-decoration:none">← Back to tests</a><button class="btn" id="newAtt">New attempt</button></div></div>' +
      '<div class="cards">' + g.map(function (x) {
        return '<div class="scard"><h4>' + esc(x.name) + '</h4><div class="v">' + x.score + ' <small style="font-size:13px;color:#777">/ ' + x.n * 3 + "</small></div>" +
          '<div class="row"><span>Attempted</span><b>' + x.att + " / " + x.n + '</b></div><div class="row"><span>Correct</span><b style="color:#1b7f3a">' + x.c +
          '</b></div><div class="row"><span>Wrong</span><b style="color:#c62828">' + x.w + '</b></div><div class="row"><span>Accuracy</span><b>' + x.acc +
          '%</b></div><div class="row"><span>Time used</span><b>' + mins(x.used) + "</b></div></div>";
      }).join("") + "</div>" +
      '<h3 id="solHead" style="margin:18px 0 0;color:#1d3d63">Solutions</h3><div class="filters" id="filters"></div><div id="solList"></div>';
    $("toSol").onclick = function () { $("solHead").scrollIntoView({ behavior: "smooth" }); };
    $("newAtt").onclick = function () { if (confirm("Start a fresh attempt? This score card will be cleared from this device.")) { clearSaved(); location.reload(); } };
    renderSolutions();
  }
  function renderSolutions() {
    var f = [["all", "All"], ["c", "Correct"], ["w", "Wrong"], ["s", "Skipped"]];
    $("filters").innerHTML = f.map(function (x) { return '<button data-f="' + x[0] + '" class="' + (filter === x[0] ? "on" : "") + '">' + x[1] + "</button>"; }).join("");
    $("filters").querySelectorAll("button").forEach(function (b) { b.onclick = function () { filter = this.dataset.f; renderSolutions(); }; });
    var h = "";
    SECS.forEach(function (s, si) {
      var st = S.sections[si], block = "";
      s.questions.forEach(function (qq, i) {
        var a = st.ans[i], r = isCorrect(qq, a), k = r === null ? "s" : (r ? "c" : "w");
        if (filter !== "all" && filter !== k) return;
        var ansHtml;
        if (qq.type === "mcq") ansHtml = '<div class="ol">' + qq.opts.map(function (o, j) {
          var cls = j === qq.ans ? "ok" : (j === a ? "bad" : "");
          return "<div" + (cls ? ' class="' + cls + '"' : "") + ">" + "ABCD".charAt(j) + ". " + o + (j === qq.ans ? " ✔" : "") + "</div>";
        }).join("") + "</div>";
        else ansHtml = "<div>Your answer: <b>" + (a === null ? "—" : esc(a)) + '</b> · Correct answer: <b class="ok">' + esc(qq.ans) + "</b> <i>(TITA)</i></div>";
        block += '<div class="sol ' + k + '"><div><b>' + esc(s.short) + " Q" + (i + 1) + '</b><span class="tag">' + (k === "c" ? "Correct" : k === "w" ? "Wrong" : "Skipped") + '</span> <span style="font-size:11px;color:#777">' + esc(qq.topic || "") + "</span></div>" +
          (qq.ctx && CTX[qq.ctx] ? '<details><summary>Show passage / data set</summary><div class="ctxbox">' + CTX[qq.ctx] + "</div></details>" : "") +
          '<div style="margin:4px 0">' + qq.q + "</div>" + ansHtml + (qq.exp ? '<div class="exp">💡 ' + qq.exp + "</div>" : "") + "</div>";
      });
      if (block) h += '<h4 style="margin:16px 0 4px;color:#1d3d63">' + esc(s.name) + "</h4>" + block;
    });
    $("solList").innerHTML = h || "<p>No questions in this view.</p>";
  }

  // If the last attempt on this device is finished and belongs to this test, offer the score card from the login screen.
  var prev = load();
  if (prev && prev.finished) {
    var box = $("resumeBox"); box.classList.remove("hidden");
    box.innerHTML = "Your last attempt (" + esc(prev.name) + ") is complete. <button class=\"btn\" id=\"seeLast\" style=\"margin-left:6px\">View score card</button>";
    var wait = setInterval(function () { if (SECS) { clearInterval(wait); $("seeLast").onclick = function () { S = prev; renderResult(); var st = $("saving"); if (st) st.textContent = ""; }; } }, 100);
  }
})();
