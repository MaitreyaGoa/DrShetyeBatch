// home.js – Dr Shetye Academic Programme
// Updated: Added Core Subject Tests section (5th tab group)

var top5Timers = {};

document.addEventListener("DOMContentLoaded", function () {
  renderTestsGrid();
  renderResourcesSection();
  document.getElementById("adminPass").addEventListener("keydown", function(e){
    if(e.key==="Enter") adminLogin();
  });
});

// ══ TESTS GRID ════════════════════════════════════════════
function renderTestsGrid() {
  var grid = document.getElementById("testsGrid");
  if(!grid) return;
  grid.innerHTML = "";

  appendGroup(grid, "Full Mock Tests", FULL_TESTS || []);
  appendGroup(grid, "Previous Year Papers", PYQ_TESTS || []);
  appendPartTests(grid);
  appendTopicTests(grid);
  appendSpecialTests(grid);   // ← Section 5: Core Subject Tests
}

function appendGroup(grid, label, tests) {
  if(!tests.length) return;
  var lbl = document.createElement("div");
  lbl.className = "test-group-label";
  lbl.textContent = label;
  grid.appendChild(lbl);
  tests.forEach(function(t){ grid.appendChild(buildTestCard(t)); });
}

// ══ PART TESTS ════════════════════════════════════════════
function appendPartTests(grid) {
  var lbl = document.createElement("div");
  lbl.className = "test-group-label";
  lbl.textContent = "Part Tests";
  grid.appendChild(lbl);

  var wrap = document.createElement("div");
  wrap.className = "part-wrap";

  var tabs = '<div class="subject-tabs" id="partTabs">'
    +'<button class="sub-tab active" onclick="showPart(\'english\',this)">📘 English</button>'
    +'<button class="sub-tab" onclick="showPart(\'maths\',this)">📐 Maths</button>'
    +'<button class="sub-tab" onclick="showPart(\'reasoning\',this)">🧠 Reasoning</button>'
    +'<button class="sub-tab" onclick="showPart(\'konkani\',this)">📖 Konkani</button>'
    +'</div>';

  var panels = "";
  ["english","maths","reasoning","konkani"].forEach(function(subj,i){
    var tests = (PART_TESTS||[]).filter(function(t){ return t.subject===subj; });
    var rows = tests.length===0
      ? '<p class="empty-msg">No '+subj+' tests yet.</p>'
      : tests.map(buildTestRowHTML).join('');
    panels += '<div id="ptPanel-'+subj+'" class="subject-panel'+(i>0?' hidden':'')+'">'
      +'<div class="test-list">'+rows+'</div></div>';
  });

  wrap.innerHTML = tabs + panels;
  grid.appendChild(wrap);
}

function showPart(subj, btn) {
  ["english","maths","reasoning","konkani"].forEach(function(s){
    var p = document.getElementById("ptPanel-"+s);
    if(p) p.classList.add("hidden");
  });
  btn.closest(".subject-tabs").querySelectorAll(".sub-tab")
    .forEach(function(t){ t.classList.remove("active"); });
  var panel = document.getElementById("ptPanel-"+subj);
  if(panel) panel.classList.remove("hidden");
  btn.classList.add("active");
}

// ══ TOPIC TESTS (4th section) ════════════════════════════
function appendTopicTests(grid) {
  if(!window.TOPIC_TESTS || !TOPIC_TESTS.length) return;

  var lbl = document.createElement("div");
  lbl.className = "test-group-label";
  lbl.textContent = "Topic Tests";
  grid.appendChild(lbl);

  var wrap = document.createElement("div");
  wrap.className = "part-wrap";

  var subjects  = ["maths","english","reasoning"];
  var icons     = { maths:"📐", english:"📘", reasoning:"🧠" };
  var subLabels = { maths:"Maths", english:"English", reasoning:"Reasoning" };

  var tabs = '<div class="subject-tabs" id="topicTabs">';
  subjects.forEach(function(subj,i){
    tabs += '<button class="sub-tab'+(i===0?' active':'')+'" '
          + 'onclick="showTopicTab(\''+subj+'\',this)">'
          + icons[subj]+' '+subLabels[subj]+'</button>';
  });
  tabs += '</div>';

  var panels = "";
  subjects.forEach(function(subj,i){
    var tests = (TOPIC_TESTS||[]).filter(function(t){ return t.subject===subj; });

    var rows = "";
    if(!tests.length){
      rows = '<p class="empty-msg">No '+subj+' topic tests yet.</p>';
    } else {
      var groups = {};
      tests.forEach(function(t){
        var key = t.topic || t.title;
        if(!groups[key]) groups[key] = [];
        groups[key].push(t);
      });
      Object.keys(groups).forEach(function(topicName){
        rows += '<div class="topic-group">'
              + '<div class="topic-group-label">📌 '+topicName+'</div>';
        groups[topicName].forEach(function(t){
          rows += buildTopicRowHTML(t);
        });
        rows += '</div>';
      });
    }

    panels += '<div id="ttPanel-'+subj+'" class="subject-panel'+(i>0?' hidden':'')+'">'
            + '<div class="test-list">'+rows+'</div></div>';
  });

  wrap.innerHTML = tabs + panels;
  grid.appendChild(wrap);
}

function showTopicTab(subj, btn) {
  ["maths","english","reasoning"].forEach(function(s){
    var p = document.getElementById("ttPanel-"+s);
    if(p) p.classList.add("hidden");
  });
  btn.closest(".subject-tabs").querySelectorAll(".sub-tab")
    .forEach(function(t){ t.classList.remove("active"); });
  var panel = document.getElementById("ttPanel-"+subj);
  if(panel) panel.classList.remove("hidden");
  btn.classList.add("active");
}

// ══ CORE SUBJECT TESTS (5th section) ══════════════════════
function appendSpecialTests(grid) {
  if(!window.SPECIAL_TESTS || !SPECIAL_TESTS.length) return;

  var lbl = document.createElement("div");
  lbl.className = "test-group-label";
  lbl.textContent = "Core Subject Tests";
  grid.appendChild(lbl);

  SPECIAL_TESTS.forEach(function(t){ grid.appendChild(buildTestCard(t)); });
}

// ══ TEST CARD (Full/PYQ/Special tests) ════════════════════
function buildTestCard(test) {
  var card = document.createElement("div");
  card.className = "test-card";

  var icon = test.id.includes("pyq") ? "📜" : test.id.includes("sci") ? "🔬" : "📋";
  var badge = test.live
    ? '<span class="tc-badge-live">Live</span>'
    : '<span class="tc-badge-soon">Coming Soon</span>';

  var secTags = Object.keys(test.sections||{}).map(function(s){
    return '<span class="tc-tag">'+s+': '+test.sections[s]+'</span>';
  }).join('');

  var top5Btn = test.live
    ? '<button class="btn-top5" onclick="toggleTop5(\''+test.id+'\',\''+test.title.replace(/'/g,"\\'")+'\','+test.totalMarks+',this)">🏅 Toppers</button>'
    : '';

  var actionBtn = test.live
    ? '<button class="btn-start" onclick="goToTest(\''+test.id+'\')">Start →</button>'
    : '<button class="btn-soon">Coming Soon</button>';

  card.innerHTML =
    '<div class="tc-header">'
    +'<div class="tc-icon">'+icon+'</div>'+badge
    +'</div>'
    +'<div class="tc-title">'+test.title+'</div>'
    +'<div class="tc-desc">'+test.description+'</div>'
    +'<div class="tc-tags">'+secTags+'</div>'
    +'<div class="tc-footer">'
    +'<span class="tc-meta">⏱ '+Math.round(test.duration/60)+' min · '+test.totalMarks+' marks</span>'
    +'<div class="tc-actions">'+top5Btn+actionBtn+'</div>'
    +'</div>';

  var top5 = document.createElement("div");
  top5.className = "top5-panel";
  top5.id = "top5-"+test.id;

  var wrap = document.createElement("div");
  wrap.appendChild(card);
  wrap.appendChild(top5);
  return wrap;
}

// ══ TEST ROW (Part tests) ═════════════════════════════════
function buildTestRowHTML(test) {
  var badge = test.live
    ? '<span class="badge-live">Live</span>'
    : '<span class="badge-soon">Soon</span>';
  var secTags = Object.keys(test.sections||{}).map(function(s){
    return '<span class="sec-tag">'+s+': '+test.sections[s]+'</span>';
  }).join('');
  var top5Btn = test.live
    ? '<button class="btn-sm-gold" onclick="toggleTop5(\''+test.id+'\',\''+test.title.replace(/'/g,"\\'")+'\','+test.totalMarks+',this)">🏅</button>'
    : '';
  var actionBtn = test.live
    ? '<button class="btn-sm-primary" onclick="goToTest(\''+test.id+'\')">Start →</button>'
    : '<button class="btn-sm-disabled">Soon</button>';

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

function buildTopicRowHTML(test) {
  var badge = test.live
    ? '<span class="badge-live">Live</span>'
    : '<span class="badge-soon">Soon</span>';
  var top5Btn = test.live
    ? '<button class="btn-sm-gold" onclick="toggleTop5(\''+test.id+'\',\''+test.title.replace(/'/g,"\\'")+'\','+test.totalMarks+',this)">🏅</button>'
    : '';
  var actionBtn = test.live
    ? '<button class="btn-sm-primary" onclick="goToTest(\''+test.id+'\')">Start →</button>'
    : '<button class="btn-sm-disabled">Soon</button>';

  return '<div class="test-row">'
    +'<div class="test-row-info">'
    +'<div class="test-row-top"><span class="test-row-title">'+test.title+'</span>'+badge+'</div>'
    +'<div class="test-row-meta">'+test.description+' · ⏱ '+Math.round(test.duration/60)+' min · '+test.totalMarks+' marks</div>'
    +'</div>'
    +'<div class="test-row-actions">'+top5Btn+actionBtn+'</div>'
    +'</div>'
    +'<div class="top5-panel" id="top5-'+test.id+'"></div>';
}

// ══ TOPPERS ═══════════════════════════════════════════════
function toggleTop5(testId, testTitle, totalMarks, btn) {
  var panel = document.getElementById("top5-"+testId);
  if(!panel) return;
  if(panel.classList.contains("open")) {
    panel.classList.remove("open");
    btn.textContent = btn.textContent.length > 2 ? "🏅 Toppers" : "🏅";
    if(top5Timers[testId]){ clearInterval(top5Timers[testId]); delete top5Timers[testId]; }
    return;
  }
  panel.classList.add("open");
  btn.textContent = "✕";
  fetchTop5(testId, testTitle, totalMarks, panel);
  top5Timers[testId] = setInterval(function(){
    fetchTop5(testId, testTitle, totalMarks, panel);
  }, 30000);
}

function fetchTop5(testId, testTitle, totalMarks, panel) {
  if(!SCRIPT_URL || SCRIPT_URL==="PASTE_YOUR_APPS_SCRIPT_URL_HERE") {
    panel.innerHTML = '<div class="top5-hdr">🏆 '+testTitle+'</div>'
      +'<p class="top5-empty">Configure SCRIPT_URL in config.js</p>';
    return;
  }
  panel.innerHTML = '<p class="top5-empty">⏳ Loading...</p>';
  var cb = "cb_"+testId.replace(/[^a-z0-9]/gi,"_");
  window[cb] = function(res){
    renderTop5(res, testTitle, totalMarks, panel);
    delete window[cb];
    var s=document.getElementById(cb); if(s) s.remove();
  };
  var s=document.createElement("script");
  s.id=cb;
  s.src=SCRIPT_URL+"?action=read&testId="+testId+"&callback="+cb;
  s.onerror=function(){
    panel.innerHTML='<div class="top5-hdr">🏆 '+testTitle+'</div>'
      +'<p class="top5-empty">Could not load.</p>';
    delete window[cb];
  };
  document.head.appendChild(s);
}

function renderTop5(res, testTitle, totalMarks, panel) {
  if(!res.success||!res.data||!res.data.length){
    panel.innerHTML='<div class="top5-hdr">🏆 '+testTitle
      +' <span class="top5-count">0 attempted</span></div>'
      +'<p class="top5-empty">No submissions yet — be the first!</p>';
    return;
  }
  var top=res.data.slice(0,10), medals=["🥇","🥈","🥉"], outOf=totalMarks||50;
  var html='<div class="top5-hdr">🏆 '+testTitle
    +' <span class="top5-count">'+res.data.length+' attempted</span></div>'
    +'<ol class="top5-list">';
  top.forEach(function(r,i){
    var pct=Math.round((r.total/outOf)*100);
    var rank=i<3?medals[i]
      :'<span style="width:20px;height:20px;border-radius:50%;background:#e5e5ea;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#6e6e73;">'+(i+1)+'</span>';
    html+='<li class="top5-item">'
      +'<span class="top5-rank">'+rank+'</span>'
      +'<div class="top5-info">'
      +'<span class="top5-name">'+r.name+'</span>'
      +'<div class="top5-bar-wrap"><div class="top5-bar" style="width:'+Math.max(4,pct)+'%"></div></div>'
      +'</div>'
      +'<span class="top5-score">'+r.total+'<span class="top5-outof">/'+outOf+'</span></span></li>';
  });
  html+='</ol><div class="top5-footer">🔄 Auto-refreshes every 30s</div>';
  panel.innerHTML=html;
}

// ══ RESOURCES ═════════════════════════════════════════════
function renderResourcesSection() {
  var container = document.getElementById("resourcesContainer");
  if(!container) return;

  var sections = [
    { id:"books",      icon:"📚", title:"Reference Books",           desc:"Recommended books & PDFs" },
    { id:"qbank",      icon:"❓", title:"Question Bank",             desc:"Daily questions with answers & explanations" },
    { id:"blackboard", icon:"🖊", title:"Live Blackboard & Classes", desc:"Live board · Live classes · Daily 6–8:30 PM" },
  ];

  sections.forEach(function(sec) {
    var card = document.createElement("div");
    card.className = "dropdown-card";
    card.id = "dcard-"+sec.id;
    card.innerHTML =
      '<div class="dropdown-header" onclick="toggleDrop(\''+sec.id+'\')">'
      +'<div class="dropdown-left">'
      +'<div class="dropdown-icon">'+sec.icon+'</div>'
      +'<div><div class="dropdown-title">'+sec.title+'</div><div class="dropdown-desc">'+sec.desc+'</div></div>'
      +'</div>'
      +'<span class="dropdown-chev" id="dchev-'+sec.id+'">▼</span>'
      +'</div>'
      +'<div class="dropdown-body" id="dbody-'+sec.id+'"></div>';
    container.appendChild(card);
  });

  renderBooks();
  renderQBank();
  renderBlackboard();
}

function toggleDrop(id) {
  var card=document.getElementById("dcard-"+id);
  var body=document.getElementById("dbody-"+id);
  var isOpen=card.classList.contains("open");
  card.classList.toggle("open",!isOpen);
  body.style.display=isOpen?"none":"block";
}

// ══ BOOKS ═════════════════════════════════════════════════
function renderBooks() {
  var body=document.getElementById("dbody-books");
  if(!body) return;
  var items=(PDF_RESOURCES||[]).filter(function(r){ return r.category==="books"; });
  if(!items.length){ body.innerHTML='<p class="empty-msg">No books uploaded yet.</p>'; return; }
  body.innerHTML=items.map(function(item){
    var m=item.url.match(/\/d\/([a-zA-Z0-9_-]+)/); var fid=m?m[1]:"";
    return '<div class="pdf-row">'
      +'<div class="pdf-info"><div class="pdf-icon-w">📄</div>'
      +'<div><div class="pdf-title">'+item.title+'</div><div class="pdf-meta">'+item.subject+' · '+formatDate(item.date)+'</div></div></div>'
      +'<div class="pdf-actions">'
      +'<a href="https://drive.google.com/file/d/'+fid+'/preview" target="_blank" class="btn-view">👁 View</a>'
      +'<a href="https://drive.google.com/uc?export=download&id='+fid+'" target="_blank" class="btn-dl">⬇ Download</a>'
      +'</div></div>';
  }).join('');
}

// ══ Q BANK ════════════════════════════════════════════════
function renderQBank() {
  var body=document.getElementById("dbody-qbank");
  if(!body) return;
  if(!QUESTION_BANK||!QUESTION_BANK.length){
    body.innerHTML='<p class="empty-msg">No questions uploaded yet.</p>'; return;
  }
  var tabs='<div class="qbank-date-tabs">';
  QUESTION_BANK.forEach(function(set,i){
    tabs+='<button class="date-tab'+(i===0?' active':'')+'" onclick="loadQB('+i+',this)">'
      +(set.label||set.date)+'</button>';
  });
  tabs+='</div><div id="qbWrap"></div>';
  body.innerHTML=tabs;
  loadQB(0, body.querySelector('.date-tab'));
}

function loadQB(idx,btn) {
  document.querySelectorAll(".date-tab").forEach(function(t){t.classList.remove("active");});
  if(btn) btn.classList.add("active");
  var set=QUESTION_BANK[idx];
  var wrap=document.getElementById("qbWrap");
  if(!wrap||!set) return;
  var labels=["A","B","C","D"];
  wrap.innerHTML='<div class="qbank-list">'+set.questions.map(function(q,i){
    var opts=q.options.map(function(opt,j){
      return '<li class="qb-option" data-qid="'+q.id+'" data-lbl="'+labels[j]+'" data-correct="'+q.answer+'" onclick="answerQB(this)">'
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

function answerQB(el){
  var qid=el.getAttribute("data-qid");
  var wrap=document.getElementById("qbi-"+qid);
  if(wrap.classList.contains("answered")) return;
  wrap.classList.add("answered");
  wrap.querySelectorAll(".qb-option").forEach(function(o){
    if(o.getAttribute("data-lbl")===el.getAttribute("data-correct")) o.classList.add("qb-correct");
    else if(o===el) o.classList.add("qb-wrong");
    o.style.pointerEvents="none";
  });
  var exp=document.getElementById("qbexp-"+qid);
  if(exp) exp.classList.remove("hidden");
}

// ══ BLACKBOARD + LIVE CLASSES ═════════════════════════════
function renderBlackboard() {
  var body=document.getElementById("dbody-blackboard");
  if(!body) return;
  body.innerHTML=
    '<div style="padding-top:14px;display:grid;grid-template-columns:1fr 1fr;gap:10px;">'
    +'<a href="blackboard/student.html" target="_blank" style="display:flex;align-items:center;gap:10px;background:#f0fdf4;border:1px solid rgba(52,197,89,0.2);border-radius:14px;padding:14px 16px;text-decoration:none;">'
    +'<span style="font-size:22px;">👨‍🎓</span>'
    +'<div><div style="font-size:13px;font-weight:700;color:#1b5e20;">Student View</div><div style="font-size:11px;color:#6e6e73;">Watch live board</div></div>'
    +'<span style="margin-left:auto;color:#aeaeb2;font-size:12px;">↗</span>'
    +'</a>'
    +'<a href="blackboard/teacher.html" target="_blank" style="display:flex;align-items:center;gap:10px;background:#f0f0ff;border:1px solid rgba(99,102,241,0.2);border-radius:14px;padding:14px 16px;text-decoration:none;">'
    +'<span style="font-size:22px;">👨‍🏫</span>'
    +'<div><div style="font-size:13px;font-weight:700;color:#3730a3;">Teacher View</div><div style="font-size:11px;color:#6e6e73;">Draw & publish</div></div>'
    +'<span style="margin-left:auto;color:#aeaeb2;font-size:12px;">↗</span>'
    +'</a>'
    +'<div style="grid-column:1/-1;display:flex;align-items:center;gap:14px;background:#fff8f0;border:1px solid rgba(255,152,0,0.2);border-radius:14px;padding:16px;cursor:pointer;" onclick="alert(\'YouTube Live Classes coming soon!\')">'
    +'<span style="font-size:26px;">📺</span>'
    +'<div style="flex:1;">'
    +'<div style="font-size:14px;font-weight:700;color:#e65100;margin-bottom:2px;">Live Classes</div>'
    +'<div style="font-size:11px;color:#6e6e73;">Daily 6:00 PM – 8:30 PM · Maths · English · Reasoning · General Studies</div>'
    +'</div>'
    +'<div style="display:flex;align-items:center;gap:5px;background:#fff3e0;border:1px solid rgba(255,152,0,0.25);border-radius:20px;padding:4px 12px;white-space:nowrap;">'
    +'<span style="font-size:8px;color:#e65100;">●</span>'
    +'<span style="font-size:11px;font-weight:700;color:#e65100;">Coming Soon</span>'
    +'</div></div>'
    +'</div>'
    +'<div style="margin-top:10px;padding:10px;background:#f5f5f7;border-radius:8px;font-size:11px;color:#aeaeb2;text-align:center;">🔴 Blackboard is real-time · Teacher draws → Students see instantly</div>';
}

// ══ STYLES for Topic Group ═════════════════════════════════
(function injectTopicStyles(){
  var style = document.createElement("style");
  style.textContent =
    ".topic-group { margin-bottom: 8px; }"
    +".topic-group-label { font-family:'Source Sans 3',sans-serif; font-size:0.78rem; font-weight:700;"
    +"  color:#166534; background:#f0fdf4; border-left:3px solid #166534;"
    +"  padding:6px 12px; margin:6px 0 4px; border-radius:0 6px 6px 0; }";
  document.head.appendChild(style);
})();

// ══ NAV & ADMIN ═══════════════════════════════════════════
function goToTest(testId){ window.location.href="test.html?id="+testId; }

function openAdminModal(){
  var m=document.getElementById("adminModal");
  m.style.display="flex"; m.style.alignItems="center"; m.style.justifyContent="center";
  document.getElementById("adminPass").value="";
  document.getElementById("adminError").style.display="none";
  setTimeout(function(){ document.getElementById("adminPass").focus(); },100);
}
function closeModal(){ document.getElementById("adminModal").style.display="none"; }
function adminLogin(){
  if(document.getElementById("adminPass").value===ADMIN_PASSWORD){
    closeModal(); window.location.href="admin.html";
  } else {
    document.getElementById("adminError").style.display="block";
  }
}
function formatDate(d){
  return d ? new Date(d).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}) : "";
}
