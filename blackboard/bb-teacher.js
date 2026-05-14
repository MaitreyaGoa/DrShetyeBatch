// bb-teacher.js – Teacher blackboard logic

var db          = null;
var canvas      = null;
var ctx         = null;
var isDrawing   = false;
var currentTool = "chalk";
var currentColor = "#ffffff";
var brushSize   = 4;
var lastX       = 0;
var lastY       = 0;
var hasDrawn    = false;

// ── LOGIN ─────────────────────────────────────────────────
function teacherLogin() {
  var pass = document.getElementById("teacherPass").value;
  if (pass === TEACHER_PASSWORD) {
    document.getElementById("loginWrap").style.display = "none";
    document.getElementById("boardWrap").style.display = "block";
    initFirebase();
    initCanvas();
    watchViewers();
  } else {
    document.getElementById("loginErr").style.display = "block";
  }
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("teacherPass").addEventListener("keydown", function(e) {
    if (e.key === "Enter") teacherLogin();
  });
});

// ── FIREBASE ──────────────────────────────────────────────
function initFirebase() {
  try {
    db = firebase.database();
    setStatus("🟢 Connected to Firebase");
    document.getElementById("liveIndicator").classList.add("connected");
    // Load existing board if any
    db.ref("blackboard/current").once("value").then(function(snap) {
      var data = snap.val();
      if (data && data.imageData) {
        var img = new Image();
        img.onload = function() { ctx.drawImage(img, 0, 0); };
        img.src = data.imageData;
      }
    });
  } catch(e) {
    setStatus("🔴 Firebase not configured — check bb-config.js");
  }
}

function watchViewers() {
  if (!db) return;
  db.ref("blackboard/viewers").on("value", function(snap) {
    var count = snap.val() || 0;
    document.getElementById("viewerCount").textContent = "👁 " + count + " viewing";
  });
}

// ── CANVAS ────────────────────────────────────────────────
function initCanvas() {
  canvas = document.getElementById("blackboard");
  ctx    = canvas.getContext("2d");

  // Set canvas size to container
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Fill with blackboard green
  ctx.fillStyle = "#1a3a2a";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Mouse events
  canvas.addEventListener("mousedown",  startDraw);
  canvas.addEventListener("mousemove",  draw);
  canvas.addEventListener("mouseup",    stopDraw);
  canvas.addEventListener("mouseleave", stopDraw);

  // Touch events
  canvas.addEventListener("touchstart",  function(e) { e.preventDefault(); startDraw(e.touches[0]); });
  canvas.addEventListener("touchmove",   function(e) { e.preventDefault(); draw(e.touches[0]); });
  canvas.addEventListener("touchend",    stopDraw);
}

function resizeCanvas() {
  if (!canvas) return;
  var wrap  = canvas.parentElement;
  var imgData = ctx ? ctx.getImageData(0, 0, canvas.width, canvas.height) : null;
  canvas.width  = wrap.clientWidth;
  canvas.height = Math.max(500, wrap.clientWidth * 0.56);
  ctx.fillStyle = "#1a3a2a";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (imgData) ctx.putImageData(imgData, 0, 0);
}

function getPos(e) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: (e.clientX - rect.left) * (canvas.width / rect.width),
    y: (e.clientY - rect.top)  * (canvas.height / rect.height)
  };
}

function startDraw(e) {
  isDrawing = true;
  var pos = getPos(e);
  lastX = pos.x; lastY = pos.y;
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, brushSize/2, 0, Math.PI*2);
  ctx.fillStyle = currentTool === "eraser" ? "#1a3a2a" : currentColor;
  ctx.fill();
  hasDrawn = true;
}

function draw(e) {
  if (!isDrawing) return;
  var pos = getPos(e);

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(pos.x, pos.y);

  if (currentTool === "eraser") {
    ctx.strokeStyle = "#1a3a2a";
    ctx.lineWidth   = brushSize * 3;
  } else if (currentTool === "marker") {
    ctx.strokeStyle = currentColor;
    ctx.lineWidth   = brushSize * 2;
    ctx.globalAlpha = 0.85;
  } else {
    // chalk effect
    ctx.strokeStyle = currentColor;
    ctx.lineWidth   = brushSize;
    ctx.globalAlpha = 0.85 + Math.random() * 0.15;
  }

  ctx.lineCap    = "round";
  ctx.lineJoin   = "round";
  ctx.stroke();
  ctx.globalAlpha = 1;

  lastX = pos.x; lastY = pos.y;
  setStatus("Drawing...");
}

function stopDraw() {
  isDrawing = false;
  setStatus("Ready – click Publish to send to students");
}

// ── TOOLS ─────────────────────────────────────────────────
function setTool(tool) {
  currentTool = tool;
  document.querySelectorAll(".tool-btn").forEach(function(b) { b.classList.remove("active"); });
  document.getElementById("tool-" + tool).classList.add("active");
}

function setColor(color) {
  currentColor = color;
  document.querySelectorAll(".color-dot").forEach(function(d) { d.classList.remove("active"); });
  event.target.classList.add("active");
  if (currentTool === "eraser") setTool("chalk");
}

function updateBrushSize(val) {
  brushSize = parseInt(val);
  document.getElementById("sizeVal").textContent = val;
}

function addTextBox() {
  var text = prompt("Enter text to add to the board:");
  if (!text) return;
  ctx.font = "bold 28px 'Caveat', cursive";
  ctx.fillStyle = currentColor;
  ctx.fillText(text, 40, canvas.height / 2);
  hasDrawn = true;
}

function clearBoard() {
  if (!confirm("Clear the entire board?")) return;
  ctx.fillStyle = "#1a3a2a";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  hasDrawn = false;
  setStatus("Board cleared");
}

// ── PUBLISH ───────────────────────────────────────────────
function publishBoard() {
  if (!db) { alert("Firebase not connected. Check bb-config.js"); return; }

  var btn = document.getElementById("publishBtn");
  document.getElementById("publishText").textContent = "⏳ Publishing...";
  btn.disabled = true;

  var imageData  = canvas.toDataURL("image/jpeg", 0.7);
  var timestamp  = new Date().toLocaleString("en-IN");

  var payload = {
    imageData:  imageData,
    timestamp:  timestamp,
    teacherMsg: ""
  };

  // Save current board
  db.ref("blackboard/current").set(payload)
  .then(function() {
    // Also save to history
    return db.ref("blackboard/history").push({
      imageData: imageData,
      timestamp: timestamp
    });
  })
  .then(function() {
    document.getElementById("publishText").textContent = "✅ Published!";
    setStatus("✅ Board published to all students at " + timestamp);
    setTimeout(function() {
      document.getElementById("publishText").textContent = "📡 Publish to Students";
      btn.disabled = false;
    }, 2000);
  })
  .catch(function(err) {
    document.getElementById("publishText").textContent = "❌ Failed";
    setStatus("Error: " + err.message);
    btn.disabled = false;
  });
}

function publishAnnouncement() {
  if (!db) { alert("Firebase not connected."); return; }
  var text = document.getElementById("announceText").value.trim();
  if (!text) return;
  db.ref("blackboard/announcement").set({
    text: text,
    timestamp: new Date().toLocaleString("en-IN")
  }).then(function() {
    document.getElementById("announceText").value = "";
    setStatus("📢 Announcement sent: " + text);
  });
}

// ── HELPERS ───────────────────────────────────────────────
function setStatus(msg) {
  document.getElementById("boardStatus").textContent = msg;
}
