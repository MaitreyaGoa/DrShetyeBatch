// admin.js – Admin panel: shows all Full Tests + Part Tests with merit lists

var activeTestId = null;

document.addEventListener("DOMContentLoaded", function () {
  buildTabs();
  var allTests = (FULL_TESTS || []).concat(PART_TESTS || []);
  var firstLive = null;
  for (var i = 0; i < allTests.length; i++) { if (allTests[i].live) { firstLive = allTests[i]; break; } }
  if (firstLive) loadResults(firstLive.id);
});

function buildTabs() {
  var tabsEl = document.getElementById("adminTabs");
  tabsEl.innerHTML = "";

  var ftLabel = document.createElement("div");
  ftLabel.className = "tab-group-label";
  ftLabel.textContent = "Full Tests";
  tabsEl.appendChild(ftLabel);
  (FULL_TESTS || []).forEach(function (test) { tabsEl.appendChild(makeTab(test)); });

  var ptLabel = document.createElement("div");
  ptLabel.className = "tab-group-label";
  ptLabel.textContent = "Part Tests";
  tabsEl.appendChild(ptLabel);
  (PART_TESTS || []).forEach(function (test) { tabsEl.appendChild(makeTab(test)); });
}

function makeTab(test) {
  var btn = document.createElement("button");
  btn.className = "admin-tab" + (test.live ? "" : " tab-inactive");
  btn.id = "tab-" + test.id;
  btn.innerHTML = test.title + (test.live ? ' <span class="tab-live">Live</span>' : ' <span class="tab-soon">Soon</span>');
  if (test.live) btn.onclick = function () { loadResults(test.id); };
  return btn;
}

function loadResults(testId) {
  activeTestId = testId;
  document.querySelectorAll(".admin-tab").forEach(function (t) { t.classList.remove("active"); });
  var tab = document.getElementById("tab-" + testId);
  if (tab) tab.classList.add("active");

  var allTests = (FULL_TESTS || []).concat(PART_TESTS || []);
  var test = null;
  for (var i = 0; i < allTests.length; i++) { if (allTests[i].id === testId) { test = allTests[i]; break; } }
  var panel = document.getElementById("adminResultsPanel");

  if (!test || !test.live) { panel.innerHTML = '<p style="color:#6b7280;text-align:center;padding:40px;">Test not live yet.</p>'; return; }
  panel.innerHTML = '<p style="color:#6b7280;text-align:center;padding:30px;">⏳ Loading ' + test.title + '...</p>';

  if (!SCRIPT_URL || SCRIPT_URL === "PASTE_YOUR_APPS_SCRIPT_URL_HERE") {
    panel.innerHTML = '<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:18px;border-radius:8px;"><strong style="color:#92400e;">⚠️ Configure SCRIPT_URL in config.js to load results.</strong></div>'; return;
  }

  fetch(SCRIPT_URL + "?testId=" + testId)
    .then(function (r) { return r.json(); })
    .then(function (res) { renderResultsTable(test, res.data || []); })
    .catch(function () { panel.innerHTML = '<div style="background:#fee2e2;border-left:4px solid #dc2626;padding:18px;border-radius:8px;"><strong style="color:#991b1b;">❌ Could not load data.</strong></div>'; });
}

function renderResultsTable(test, data) {
  var panel = document.getElementById("adminResultsPanel");
  var secKeys = Object.keys(test.sections);
  var headerRow = '<th>Rank</th><th>Student Name</th>';
  secKeys.forEach(function (s) { headerRow += '<th>' + s + '(/' + test.sections[s] + ')</th>'; });
  headerRow += '<th>Total(/' + test.totalMarks + ')</th><th>%</th><th>Time</th>';

  var rows = data.length === 0
    ? '<tr><td colspan="' + (4+secKeys.length) + '" style="text-align:center;color:#6b7280;padding:24px;">No submissions yet.</td></tr>'
    : data.map(function (r, i) {
        var vals = secKeys.map(function (s) { return r.scores ? (r.scores[s]||0) : 0; }).join('</td><td>');
        return '<tr><td>'+(i+1)+'</td><td><strong>'+r.name+'</strong></td><td>'+vals+'</td><td><strong>'+r.total+'</strong></td><td>'+r.percent+'</td><td style="font-size:.75rem;color:#6b7280;">'+r.timestamp+'</td></tr>';
      }).join('');

  panel.innerHTML =
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px;">' +
      '<div><h3 style="font-family:\'Playfair Display\',serif;color:#0d2b55;">' + test.title + '</h3>' +
      '<p style="color:#6b7280;font-size:.82rem;">' + data.length + ' submission(s)</p></div>' +
      '<button class="btn btn-sm btn-outline" onclick="exportCSV(\'' + test.id + '\')">📥 Export CSV</button>' +
    '</div><div style="overflow-x:auto;">' +
    '<table class="merit-table"><thead><tr>' + headerRow + '</tr></thead><tbody>' + rows + '</tbody></table></div>';
}

function exportCSV(testId) {
  if (!SCRIPT_URL || SCRIPT_URL === "PASTE_YOUR_APPS_SCRIPT_URL_HERE") { alert("Configure SCRIPT_URL first."); return; }
  var allTests = (FULL_TESTS || []).concat(PART_TESTS || []);
  var test = allTests.find(function (t) { return t.id === testId; });
  fetch(SCRIPT_URL + "?testId=" + testId)
    .then(function (r) { return r.json(); })
    .then(function (res) {
      if (!res.data || res.data.length === 0) { alert("No data."); return; }
      var secKeys = Object.keys(test.sections);
      var csv = "Rank,Name," + secKeys.map(function (s) { return s+"(/"+test.sections[s]+")"; }).join(",") + ",Total(/"+test.totalMarks+"),Pct,DateTime\n";
      res.data.forEach(function (r, i) {
        var vals = secKeys.map(function (s) { return r.scores?(r.scores[s]||0):0; }).join(",");
        csv += (i+1)+',"'+r.name+'",'+vals+','+r.total+','+r.percent+',"'+r.timestamp+'"\n';
      });
      var blob = new Blob([csv],{type:"text/csv"}); var url=URL.createObjectURL(blob);
      var a=document.createElement("a"); a.href=url; a.download="Merit_"+testId+".csv";
      document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
    });
}
