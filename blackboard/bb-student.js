// bb-student.js – Student real-time blackboard viewer

var db           = null;
var viewerRef    = null;
var currentCount = 0;

document.addEventListener("DOMContentLoaded", function() {
  initFirebase();
});

// ── FIREBASE ──────────────────────────────────────────────
function initFirebase() {
  try {
    db = firebase.database();

    // Register as viewer
    registerViewer();

    // Listen for board updates IN REAL TIME
    db.ref("blackboard/current").on("value", function(snap) {
      var data = snap.val();
      if (!data || !data.imageData) {
        showOffline();
        return;
      }
      showBoard(data);
    });

    // Listen for announcements
    db.ref("blackboard/announcement").on("value", function(snap) {
      var data = snap.val();
      if (data && data.text) {
        showAnnouncement(data.text);
      }
    });

    // Load history
    loadHistory();

    document.getElementById("liveIndicator").classList.add("connected");

  } catch(e) {
    showOffline();
    console.error("Firebase error:", e);
  }
}

// ── VIEWER COUNT ──────────────────────────────────────────
function registerViewer() {
  if (!db) return;
  var countRef = db.ref("blackboard/viewers");
  countRef.transaction(function(current) { return (current || 0) + 1; });

  // Decrease count when student leaves
  window.addEventListener("beforeunload", function() {
    countRef.transaction(function(current) { return Math.max(0, (current || 1) - 1); });
  });
}

// ── BOARD DISPLAY ─────────────────────────────────────────
function showBoard(data) {
  document.getElementById("offlineMsg").style.display     = "none";
  document.getElementById("boardImageWrap").style.display = "block";
  document.getElementById("boardImage").src               = data.imageData;

  if (data.timestamp) {
    document.getElementById("boardTimestamp").textContent = "Updated: " + data.timestamp;
    document.getElementById("lastUpdate").textContent     = "Last update: " + data.timestamp;
  }
}

function showOffline() {
  document.getElementById("offlineMsg").style.display     = "block";
  document.getElementById("boardImageWrap").style.display = "none";
  document.getElementById("lastUpdate").textContent       = "Waiting for teacher...";
}

// ── ANNOUNCEMENT ──────────────────────────────────────────
function showAnnouncement(text) {
  var banner = document.getElementById("announceBanner");
  document.getElementById("announceBannerText").textContent = text;
  banner.style.display = "flex";

  // Auto-hide after 30 seconds
  setTimeout(function() { banner.style.display = "none"; }, 30000);
}

// ── HISTORY ───────────────────────────────────────────────
function loadHistory() {
  db.ref("blackboard/history").limitToLast(7).on("value", function(snap) {
    var list = document.getElementById("notesList");
    var data = snap.val();

    if (!data) {
      list.innerHTML = '<p class="notes-empty">No saved boards yet.</p>';
      return;
    }

    var items = [];
    Object.keys(data).forEach(function(key) {
      items.push({ key: key, data: data[key] });
    });
    // Most recent first
    items.reverse();

    list.innerHTML = "";
    items.forEach(function(item, i) {
      var div = document.createElement("div");
      div.className = "note-item";
      div.innerHTML =
        '<div class="note-header">' +
          '<span class="note-num">Board ' + (items.length - i) + '</span>' +
          '<span class="note-time">' + (item.data.timestamp || "") + '</span>' +
        '</div>' +
        '<img class="note-thumb" src="' + item.data.imageData + '" ' +
          'alt="Board ' + (i+1) + '" onclick="expandNote(this.src)"/>';
      list.appendChild(div);
    });
  });
}

function expandNote(src) {
  var overlay = document.createElement("div");
  overlay.className = "note-overlay";
  overlay.innerHTML = '<img src="' + src + '" class="note-full"/><div class="note-close" onclick="this.parentElement.remove()">✕ Close</div>';
  document.body.appendChild(overlay);
}
