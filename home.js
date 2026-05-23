// home.js – Dr Shetye Academic Programme

var top5Timers = {};

document.addEventListener("DOMContentLoaded", function () {
  renderTestsGrid();
  renderResourcesSection();
  document.getElementById("adminPass").addEventListener("keydown", function(e){ if(e.key==="Enter") adminLogin(); });
});

// ══════════════════════════════════════════════════════════
// TESTS GRID — Full + PYQ + Part all in one grid with labels
// ══════════════════════════════════════════════════════════
function renderTestsGrid() {
  var grid = document.getElementById("testsGrid");
  if(!grid) return;
  grid.innerHTML = "";

  // Full Tests
  appendTestGroup(grid, "📋 Full Mock Tests", FULL_TESTS || [], "#6366f1");
  // PYQ Tests
  appendTestGroup(grid, "📜 Previous Year Papers", PYQ_TESTS || [], "#f59e0b");
  // Part Tests — grouped by subject tabs handled inside dropdown
  appendPartTestsCard(grid);
}

function appendTestGroup(grid, label, tests, color) {
  if(!tests.length) return;
  // Group label spanning full row
  var lbl = document.createElement("div");
  lbl.style.cssText = "grid-column:1/-1;display:flex;align-items:center;gap:10px;margin-top:8px;";
  lbl.innerHTML = '<span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.5);">'+label+'</span>'
    +'<span style="flex:1;height:0.5px;background:rgba(255,255,255,0.08);"></span>';
  grid.appendChild(lbl);

  tests.forEach(function(test) {
    grid.appendChild(buildTestCard(test));
  });
}

function appendPartTestsCard(grid) {
  // Label
  var lbl = document.createElement("div");
  lbl.style.cssText = "grid-column:1/-1;display:flex;align-items:center;gap:10px;margin-top:8px;";
  lbl.innerHTML = '<span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.5);">📝 Part Tests</span>'
    +'<span style="flex:1;height:0.5px;background:rgba(255,255,255,0.08);"></span>';
  grid.appendChild(lbl);

  // Card spanning all columns
  var card = document.createElement("div");
  card.style.cssText = "grid-column:1/-1;background:rgba(255,255,255,0.03);border:0.5px solid rgba(255,255,255,0.08);border-radius:16px;padding:20px;";

  var subjectTabs = '<div class="subject-tabs" id="ptSubjTabs">'
    + '<button class="sub-tab active" onclick="showPartSubject(\'english\',this)">📘 English</button>'
    + '<button class="sub-tab" onclick="showPartSubject(\'maths\',this)">📐 Maths</button>'
    + '<button class="sub-tab" onclick="showPartSubject(\'reasoning\',this)">🧠 Reasoning</button>'
    + '<button class="sub-tab" onclick="showPartSubject(\'konkani\',this)">📖 Konkani</button>'
    + '</div>';

  var panels = "";
  ["english","maths","reasoning","konkani"].forEach(function(subj, i) {
    var tests = (PART_TESTS||[]).filter(function(t){ return t.subject===subj; });
    var rows = tests.length === 0
      ? '<p class="empty-msg" style="color:rgba(255,255,255,0.3);font-size:12px;padding:10px;font-style:italic;">No '+subj+' tests yet.</p>'
      : tests.map(function(t){ return buildTestRowHTML(t); }).join('');
    panels += '<div id="ptPanel-'+subj+'" class="subject-panel'+(i>0?' hidden':'')+'">'
      +'<div class="test-list">'+rows+'</div></div>';
  });

  card.innerHTML = subjectTabs + panels;
  grid.appendChild(card);
}

function showPartSubject(subj, btn) {
  document.querySelectorAll(".subject-panel").forEach(function(p){ p.classList.add("hidden"); });
  document.querySelectorAll("#ptSubjTabs .sub-tab").forEach(function(t){ t.classList.remove("active"); });
  var panel = document.getElementById("ptPanel-"+subj);
  if(panel) panel.classList.remove("hidden");
  btn.classList.add("active");
}

// ══════════════════════════════════════════════════════════
// BUILD TEST CARD (Full / PYQ)
// ══════════════════════════════════════════════════════════
function buildTestCard(test) {
  var glowColors = {"fulltest1":"#6366f1","fulltest2":"#6366f1","fulltest3":"#6366f1","pyq_gssc1":"#f59e0b","pyq_gssc2":"#f59e0b"};
  var glow = glowColors[test.id] || "#6366f1";

  var card = document.createElement("div");
  card.className = "test-card";
  card.style.setProperty("--glow", glow);

  var secTags = "";
  if(test.sections) {
    Object.keys(test.sections).forEach(function(s){
      var cls = s==="Maths"?"green":s==="Reasoning"?"amber":"";
      secTags += '<span class="tag '+cls+'">'+s+': '+test.sections[s]+'</span>';
    });
  }

  var badge = test.live
    ? '<span class="test-badge-live">Live</span>'
    : '<span class="test-badge-soon">Coming Soon</span>';

  var top5Html = test.live
    ? '<button class="top5-btn" onclick="toggleTop5(\''+test.id+'\',\''+test.title.replace(/'/g,'\\\'') +'\','+test.totalMarks+',this)">🏅 Toppers</button>'
    : '';

  var actionBtn = test.live
    ? '<button class="btn-start" onclick="goToTest(\''+test.id+'\')">Start →</button>'
    : '<button class="btn-soon">Coming Soon</button>';

  card.innerHTML =
    '<div class="test-card-header">'
    +'<div class="test-icon-wrap">'+(test.id.includes('pyq')? '📜':'📋')+'</div>'
    + badge
    +'</div>'
    +'<div class="test-card-title">'+test.title+'</div>'
    +'<div class="test-card-desc">'+test.description+'</div>'
    +'<div class="test-card-tags">'+secTags+'</div>'
    +'<div class="test-card-footer">'
    +'<span class="test-meta">⏱ '+Math.round(test.duration/60)+' min · '+test.totalMarks+' marks</span>'
    +'<div style="display:flex;gap:6px;">'+top5Html+actionBtn+'</div>'
    +'</div>';

  // Top 5 panel below
  var top5 = document.createElement("div");
  top5.className = "top5-panel";
  top5.id = "top5-"+test.id;

  var wrap = document.createElement("div");
  wrap.appendChild(card);
  wrap.appendChild(top5);
  return wrap;
}

// ══════════════════════════════════════════════════════════
// BUILD TEST ROW (Part Tests)
// ══════════════════════════════════════════════════════════
function buildTestRowHTML(test) {
  var badge = test.live
    ? '<span class="badge badge-live">Live</span>'
    : '<span class="badge badge-soon">Coming Soon</span>';
  var secTags = Object.keys(test.sections||{}).map(function(s){
    return '<span class="sec-tag">'+s+': '+test.sections[s]+'</span>';
  }).join('');
  var top5Btn = test.live
    ? '<button class="btn-sm gold" onclick="toggleTop5(\''+test.id+'\',\''+test.title.replace(/'/g,'\\\'') +'\','+test.totalMarks+',this)">🏅</button>'
    : '';
  var actionBtn = test.live
    ? '<button class="btn-sm primary" onclick="goToTest(\''+test.id+'\')">Start →</button>'
    : '<button class="btn-sm disabled">Soon</button>';

  return '<div class="test-row">'
    +'<div class="test-row-info">'
    +'<div class="test-row-top"><span class="test-row-title">'+test.title+'</span>'+badge+'</div>'
    +'<div class="test-row-meta">'+test.description+' · ⏱ '+Math.round(test.duration/60)+' min</div>'
    +'<div class="test-row-tags">'+secTags+'</div>'
    +'</div>'
    +'<div class="test-row-actions">'+top5Btn+actionBtn+'</div>'
    +'</div>'
    +'<div class="top5-panel" id="top5-'+test.id+'"></div>';
}

// ══════════════════════════════════════════════════════════
// TOPPERS
// ══════════════════════════════════════════════════════════
function toggleTop5(testId, testTitle, totalMarks, btn) {
  var panel = document.getElementById("top5-"+testId);
  if(!panel) return;
  if(panel.classList.contains("open")) {
    panel.classList.remove("open");
    btn.innerHTML = btn.innerHTML.includes("🏅") ? "🏅 Toppers" : "🏅";
    if(top5Timers[testId]){ clearInterval(top5Timers[testId]); delete top5Timers[testId]; }
    return;
  }
  panel.classList.add("open");
  btn.innerHTML = btn.innerHTML.length > 2 ? "✕ Hide" : "✕";
  fetchTop5Data(testId, testTitle, totalMarks, panel);
  top5Timers[testId] = setInterval(function(){ fetchTop5Data(testId, testTitle, totalMarks, panel); }, 30000);
}

function fetchTop5Data(testId, testTitle, totalMarks, panel) {
  if(!SCRIPT_URL || SCRIPT_URL==="PASTE_YOUR_APPS_SCRIPT_URL_HERE") {
    panel.innerHTML = '<div class="top5-hdr">🏆 '+testTitle+'</div><p class="top5-empty">Configure SCRIPT_URL in config.js</p>';
    return;
  }
  panel.innerHTML = '<p class="top5-empty">⏳ Loading...</p>';

  var cbName = "top5cb_"+testId.replace(/[^a-z0-9]/gi,"_");
  window[cbName] = function(res) {
    renderTop5(res, testTitle, totalMarks, panel);
    delete window[cbName];
    var s=document.getElementById(cbName); if(s) s.remove();
  };
  var s=document.createElement("script");
  s.id=cbName;
  s.src=SCRIPT_URL+"?action=read&testId="+testId+"&callback="+cbName;
  s.onerror=function(){
    panel.innerHTML='<div class="top5-hdr">🏆 '+testTitle+'</div><p class="top5-empty">Could not load results.</p>';
    delete window[cbName];
  };
  document.head.appendChild(s);
}

function renderTop5(res, testTitle, totalMarks, panel) {
  if(!res.success||!res.data||res.data.length===0){
    panel.innerHTML='<div class="top5-hdr">🏆 '+testTitle+' <span style="font-size:10px;color:rgba(255,255,255,0.3);">0 attempted</span></div>'
      +'<p class="top5-empty">No submissions yet — be first!</p>';
    return;
  }
  var top=res.data.slice(0,10), medals=["🥇","🥈","🥉"], outOf=totalMarks||50;
  var html='<div class="top5-hdr">🏆 '+testTitle+' <span style="font-size:10px;color:rgba(255,255,255,0.3);">'+res.data.length+' attempted</span></div><ol class="top5-list">';
  top.forEach(function(r,i){
    var pct=Math.round((r.total/outOf)*100);
    var rank=i<3?medals[i]:'<span style="width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,0.08);display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:rgba(255,255,255,0.4);">'+(i+1)+'</span>';
    html+='<li class="top5-item">'
      +'<span class="top5-rank">'+rank+'</span>'
      +'<div class="top5-info"><span class="top5-name">'+r.name+'</span>'
      +'<div class="top5-bar-wrap"><div class="top5-bar" style="width:'+Math.max(4,pct)+'%"></div></div></div>'
      +'<span class="top5-score">'+r.total+'<span class="top5-outof">/'+outOf+'</span></span>'
      +'</li>';
  });
  html+='</ol><div class="top5-footer">🔄 Auto-refreshes · '+res.data.length+' total</div>';
  panel.innerHTML=html;
}

// ══════════════════════════════════════════════════════════
// RESOURCES SECTION
// ══════════════════════════════════════════════════════════
function renderResourcesSection() {
  var container = document.getElementById("resourcesContainer");
  if(!container) return;

  var sections = [
    { id:"books",      icon:"📚", title:"Reference Books", desc:"Recommended books & PDFs" },
    { id:"qbank",      icon:"❓", title:"Question Bank",   desc:"Daily questions with answers & explanations" },
    { id:"blackboard", icon:"🖊", title:"Live Blackboard & Classes", desc:"Live board · Live YouTube classes · Daily 6–8:30 PM" },
  ];

  sections.forEach(function(sec) {
    var card = document.createElement("div");
    card.className = "dropdown-card";
    card.id = "dcard-"+sec.id;

    card.innerHTML =
      '<div class="dropdown-header" onclick="toggleDropdown(\''+sec.id+'\')">'
      +'<div class="dropdown-left">'
      +'<div class="dropdown-icon">'+sec.icon+'</div>'
      +'<div><div class="dropdown-title">'+sec.title+'</div><div class="dropdown-desc">'+sec.desc+'</div></div>'
      +'</div>'
      +'<span class="dropdown-chev" id="dchev-'+sec.id+'">▼</span>'
      +'</div>'
      +'<div class="dropdown-body" id="dbody-'+sec.id+'"></div>';

    container.appendChild(card);
  });

  renderPDFs();
  renderQBank();
  renderBlackboard();
}

function toggleDropdown(id) {
  var card=document.getElementById("dcard-"+id);
  var body=document.getElementById("dbody-"+id);
  var chev=document.getElementById("dchev-"+id);
  var isOpen=card.classList.contains("open");
  card.classList.toggle("open",!isOpen);
  body.style.display=isOpen?"none":"block";
  chev.style.transform=isOpen?"":"rotate(180deg)";
}

function renderPDFs() {
  ["notes","books","material"].forEach(function(cat) {
    var body=document.getElementById("dbody-"+cat);
    if(!body) return;
    var items=(PDF_RESOURCES||[]).filter(function(r){return r.category===cat;});
    if(items.length===0){body.innerHTML='<p class="empty-msg">No '+cat+' uploaded yet.</p>';return;}
    body.innerHTML=items.map(function(item){
      var icons={English:"📘",Maths:"📐",Reasoning:"🧠",Konkani:"📖",General:"📄"};
      var icon=icons[item.subject]||"📄";
      var fileId=""; var m=item.url.match(/\/d\/([a-zA-Z0-9_-]+)/); if(m) fileId=m[1];
      var viewUrl="https://drive.google.com/file/d/"+fileId+"/preview";
      var dlUrl="https://drive.google.com/uc?export=download&id="+fileId;
      return '<div class="pdf-row">'
        +'<div class="pdf-info"><div class="pdf-icon-wrap">'+icon+'</div>'
        +'<div><div class="pdf-title">'+item.title+'</div><div class="pdf-meta">'+item.subject+' · '+formatDate(item.date)+'</div></div>'
        +'</div><div class="pdf-actions">'
        +'<a href="'+viewUrl+'" target="_blank" class="btn-view">👁 View</a>'
        +'<a href="'+dlUrl+'" target="_blank" class="btn-dl">⬇ Download</a>'
        +'</div></div>';
    }).join('');
  });
}

function renderQBank() {
  var body=document.getElementById("dbody-qbank");
  if(!body) return;
  if(!QUESTION_BANK||QUESTION_BANK.length===0){body.innerHTML='<p class="empty-msg">No questions uploaded yet.</p>';return;}

  var tabs='<div class="qbank-date-tabs">';
  QUESTION_BANK.forEach(function(set,i){
    tabs+='<button class="date-tab'+(i===0?' active':'')+'" onclick="loadQBSet('+i+',this)">'+( set.label||set.date)+'</button>';
  });
  tabs+='</div><div id="qbListWrap"></div>';
  body.innerHTML=tabs;
  loadQBSet(0, body.querySelector('.date-tab'));
}

function loadQBSet(idx, btn) {
  document.querySelectorAll(".date-tab").forEach(function(t){t.classList.remove("active");});
  if(btn) btn.classList.add("active");
  var set=QUESTION_BANK[idx];
  var wrap=document.getElementById("qbListWrap");
  if(!wrap||!set) return;
  var labels=["A","B","C","D"];
  wrap.innerHTML='<div class="qbank-list">'+set.questions.map(function(q,i){
    var opts=q.options.map(function(opt,j){
      return '<li class="qb-option" data-qid="'+q.id+'" data-lbl="'+labels[j]+'" data-correct="'+q.answer+'" onclick="selectQBOpt(this)">'
        +'<span class="qb-lbl">'+labels[j]+'.</span>'+opt+'</li>';
    }).join('');
    return '<div class="qbank-item" id="qbi-'+q.id+'">'
      +'<div class="qb-num">Q'+(i+1)+'</div>'
      +'<div class="qb-text">'+q.text+'</div>'
      +'<ul class="qb-options">'+opts+'</ul>'
      +'<div class="qb-explanation hidden" id="qbexp-'+q.id+'">💡 '+q.explanation+'</div>'
      +'</div>';
  }).join('')+'</div>';
}

function selectQBOpt(el){
  var qid=el.getAttribute("data-qid");
  var wrap=document.getElementById("qbi-"+qid);
  if(wrap.classList.contains("answered")) return;
  wrap.classList.add("answered");
  var correct=el.getAttribute("data-correct");
  wrap.querySelectorAll(".qb-option").forEach(function(o){
    if(o.getAttribute("data-lbl")===correct) o.classList.add("qb-correct");
    else if(o===el) o.classList.add("qb-wrong");
    o.style.pointerEvents="none";
  });
  var exp=document.getElementById("qbexp-"+qid);
  if(exp) exp.classList.remove("hidden");
}

function renderBlackboard() {
  var body=document.getElementById("dbody-blackboard");
  if(!body) return;
  body.innerHTML=
    '<div style="padding:10px 4px;">'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">'

    // Live Blackboard tiles
    +'<a href="blackboard/student.html" target="_blank" style="display:flex;align-items:center;gap:10px;background:rgba(16,185,129,0.08);border:0.5px solid rgba(16,185,129,0.2);border-radius:12px;padding:14px 16px;text-decoration:none;">'
    +'<span style="font-size:24px;">👨‍🎓</span>'
    +'<div><div style="font-size:13px;font-weight:700;color:#34d399;">Student View</div><div style="font-size:11px;color:rgba(255,255,255,0.4);">Watch live board</div></div>'
    +'<span style="margin-left:auto;color:rgba(255,255,255,0.3);">→</span>'
    +'</a>'
    +'<a href="blackboard/teacher.html" target="_blank" style="display:flex;align-items:center;gap:10px;background:rgba(99,102,241,0.08);border:0.5px solid rgba(99,102,241,0.2);border-radius:12px;padding:14px 16px;text-decoration:none;">'
    +'<span style="font-size:24px;">👨‍🏫</span>'
    +'<div><div style="font-size:13px;font-weight:700;color:#a78bfa;">Teacher View</div><div style="font-size:11px;color:rgba(255,255,255,0.4);">Draw & publish</div></div>'
    +'<span style="margin-left:auto;color:rgba(255,255,255,0.3);">→</span>'
    +'</a>'

    // Live Classes tile
    +'<div style="grid-column:1/-1;display:flex;align-items:center;gap:14px;background:rgba(239,68,68,0.08);border:0.5px solid rgba(239,68,68,0.2);border-radius:12px;padding:16px;cursor:pointer;" onclick="alert(\'YouTube Live Classes coming soon! Stay tuned.\')">'
    +'<span style="font-size:28px;">📺</span>'
    +'<div style="flex:1;">'
    +'<div style="font-size:14px;font-weight:700;color:#f87171;margin-bottom:2px;">Live Classes</div>'
    +'<div style="font-size:11px;color:rgba(255,255,255,0.4);">Daily 6:00 PM – 8:30 PM · Maths · English · Reasoning · General Studies</div>'
    +'</div>'
    +'<div style="display:flex;align-items:center;gap:6px;background:rgba(239,68,68,0.15);border:0.5px solid rgba(239,68,68,0.3);border-radius:20px;padding:5px 12px;white-space:nowrap;">'
    +'<span style="width:7px;height:7px;border-radius:50%;background:#f87171;display:inline-block;"></span>'
    +'<span style="font-size:11px;font-weight:700;color:#f87171;">Coming Soon</span>'
    +'</div>'
    +'</div>'

    +'</div>'
    +'<div style="margin-top:10px;padding:10px;background:rgba(255,255,255,0.02);border-radius:8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center;">'
    +'🔴 Blackboard is real-time · Teacher draws → Students see instantly'
    +'</div></div>';
}

function renderLiveClasses() {
  var body = document.getElementById("dbody-liveclasses");
  if(!body) return;
  body.innerHTML =
    '<div style="padding:10px 4px;">'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">'
    +'<div style="background:rgba(99,102,241,0.1);border:0.5px solid rgba(99,102,241,0.25);border-radius:12px;padding:16px;">'
    +'<div style="font-size:11px;font-weight:700;color:#a78bfa;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">🕕 Class Timings</div>'
    +'<div style="font-size:18px;font-weight:700;color:#f1f5f9;letter-spacing:-0.3px;">6:00 PM – 8:30 PM</div>'
    +'<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px;">Monday to Saturday</div>'
    +'<div style="display:flex;align-items:center;gap:5px;margin-top:10px;">'
    +'<span style="width:7px;height:7px;border-radius:50%;background:#34d399;display:inline-block;"></span>'
    +'<span style="font-size:11px;color:#34d399;font-weight:600;">Daily Live Classes</span>'
    +'</div></div>'
    +'<div style="background:rgba(245,158,11,0.08);border:0.5px solid rgba(245,158,11,0.2);border-radius:12px;padding:16px;">'
    +'<div style="font-size:11px;font-weight:700;color:#fbbf24;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">📖 Subjects Covered</div>'
    +'<div style="display:flex;flex-direction:column;gap:6px;">'
    +'<div style="font-size:12px;color:rgba(255,255,255,0.7);">📐 Mathematics</div>'
    +'<div style="font-size:12px;color:rgba(255,255,255,0.7);">📘 English</div>'
    +'<div style="font-size:12px;color:rgba(255,255,255,0.7);">🧠 Reasoning</div>'
    +'<div style="font-size:12px;color:rgba(255,255,255,0.7);">📜 General Studies</div>'
    +'</div></div>'
    +'</div>'
    +'<div style="margin-top:10px;padding:12px 14px;background:rgba(255,255,255,0.03);border:0.5px solid rgba(255,255,255,0.07);border-radius:10px;display:flex;align-items:center;gap:10px;">'
    +'<span style="font-size:13px;">🏛</span>'
    +'<span style="font-size:12px;color:rgba(255,255,255,0.5);">Preparation for <strong style="color:rgba(255,255,255,0.7);">GSSC</strong> · <strong style="color:rgba(255,255,255,0.7);">GPSC</strong> · and other Govt Exams</span>'
    +'<a href="https://wa.me/917358425108" target="_blank" style="margin-left:auto;padding:6px 14px;background:rgba(16,185,129,0.15);border:0.5px solid rgba(16,185,129,0.3);border-radius:8px;font-size:11px;font-weight:700;color:#34d399;text-decoration:none;white-space:nowrap;">Enquire →</a>'
    +'</div></div>';
}

// ══════════════════════════════════════════════════════════
// NAVIGATION & ADMIN
// ══════════════════════════════════════════════════════════
function goToTest(testId) {
  window.location.href="test.html?id="+testId;
}

function openAdminModal() {
  var m=document.getElementById("adminModal");
  m.style.display="flex";m.style.alignItems="center";m.style.justifyContent="center";
  document.getElementById("adminPass").value="";
  document.getElementById("adminError").style.display="none";
  setTimeout(function(){document.getElementById("adminPass").focus();},100);
}
function closeModal() { document.getElementById("adminModal").style.display="none"; }
function adminLogin() {
  if(document.getElementById("adminPass").value===ADMIN_PASSWORD){
    closeModal(); window.location.href="admin.html";
  } else { document.getElementById("adminError").style.display="block"; }
}

function formatDate(d) {
  if(!d) return "";
  return new Date(d).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
}
