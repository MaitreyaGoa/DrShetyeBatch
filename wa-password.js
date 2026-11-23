/* ════════════════════════════════════════════════════════════
   WhatsApp "get the password" helper — ExcelBicholim
   Adds (1) a button next to the Test Password box and
        (2) a small floating WhatsApp button,
   both shown ONLY while a password box is on screen.
   Used by test.html and cat-test.html.
   To change the number, edit WA_NUMBER below (country code 91, no +).
   ════════════════════════════════════════════════════════════ */
(function () {
  var WA_NUMBER = "917358425108";

  function testTitle() {
    var t = (window.currentTest && window.currentTest.title) || (window.TEST && window.TEST.title);
    if (!t) { var el = document.getElementById("loginTitle") || document.getElementById("loginTestBadge"); t = el ? el.textContent.trim() : ""; }
    if (!t) t = (document.title || "").split("–")[0].trim();
    return t;
  }
  function waLink() {
    var nameEl = document.getElementById("studentName") || document.getElementById("candName");
    var name = nameEl && nameEl.value.trim() ? nameEl.value.trim() : "";
    var msg = "Hello ExcelBicholim, please share the password for the test: " + (testTitle() || "(test name)") + "." + (name ? " My name is " + name + "." : "");
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
  }

  var css = document.createElement("style");
  css.textContent =
    ".wa-pw-row{display:flex;gap:8px;align-items:stretch;}" +
    ".wa-pw-row>input{flex:1;min-width:0;}" +
    ".wa-pw-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;flex-shrink:0;padding:0 12px;border-radius:10px;" +
      "background:#25D366;color:#fff!important;font:700 12.5px/1.15 Inter,system-ui,-apple-system,'Segoe UI',sans-serif;text-decoration:none;" +
      "box-shadow:0 4px 12px -4px rgba(37,211,102,.7);white-space:nowrap;transition:filter .2s,transform .2s;}" +
    ".wa-pw-btn:hover{filter:brightness(1.06);transform:translateY(-1px);}" +
    ".wa-pw-btn svg{width:17px;height:17px;flex-shrink:0;}" +
    ".wa-pw-hint{margin-top:6px;font:500 12px/1.4 Inter,system-ui,sans-serif;color:#6e6e73;}" +
    ".wa-pw-hint b{color:#128C7E;}" +
    ".wa-float{position:fixed;right:16px;bottom:calc(18px + env(safe-area-inset-bottom));z-index:9999;display:none;align-items:center;gap:8px;" +
      "padding:10px 15px 10px 11px;border-radius:999px;background:#25D366;color:#fff!important;text-decoration:none;" +
      "font:700 13px/1 Inter,system-ui,-apple-system,'Segoe UI',sans-serif;box-shadow:0 10px 26px -8px rgba(18,140,126,.65);" +
      "animation:waIn .35s ease-out;}" +
    ".wa-float.show{display:inline-flex;}" +
    ".wa-float svg{width:22px;height:22px;flex-shrink:0;}" +
    ".wa-float:hover{filter:brightness(1.06);}" +
    ".wa-float::before{content:'';position:absolute;inset:0;border-radius:inherit;box-shadow:0 0 0 0 rgba(37,211,102,.55);animation:waPulse 2.2s infinite;}" +
    "@keyframes waPulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,.55);}70%{box-shadow:0 0 0 14px rgba(37,211,102,0);}100%{box-shadow:0 0 0 0 rgba(37,211,102,0);}}" +
    "@keyframes waIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:none;}}" +
    "@media(max-width:420px){.wa-pw-btn .wa-txt-long{display:none;}}" +
    "@media(min-width:421px){.wa-pw-btn .wa-txt-short{display:none;}}" +
    "@media (prefers-reduced-motion:reduce){.wa-float,.wa-float::before{animation:none;}}";
  document.head.appendChild(css);

  var ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  var inputs = [], btns = [], float = null;

  function setup() {
    ["studentPassword", "candPw"].forEach(function (id) {
      var inp = document.getElementById(id);
      if (!inp || inp.dataset.waDone) return;
      inp.dataset.waDone = "1";
      var row = document.createElement("div");
      row.className = "wa-pw-row";
      inp.parentNode.insertBefore(row, inp);
      row.appendChild(inp);
      var a = document.createElement("a");
      a.className = "wa-pw-btn"; a.target = "_blank"; a.rel = "noopener";
      a.setAttribute("aria-label", "Get the password on WhatsApp");
      a.innerHTML = ICON + '<span class="wa-txt-long">Get password</span><span class="wa-txt-short">Password</span>';
      a.href = waLink();
      row.appendChild(a);
      var hint = document.createElement("div");
      hint.className = "wa-pw-hint";
      hint.innerHTML = "Don't have the password? Tap <b>WhatsApp</b> to message us on 7358425108.";
      row.parentNode.insertBefore(hint, row.nextSibling);
      inputs.push(inp); btns.push(a);
    });
    if (!inputs.length) return;
    float = document.createElement("a");
    float.className = "wa-float"; float.target = "_blank"; float.rel = "noopener";
    float.setAttribute("aria-label", "WhatsApp for password");
    float.innerHTML = ICON + "<span>WhatsApp for password</span>";
    float.href = waLink();
    document.body.appendChild(float);
    // keep the links fresh (name typed / test title loaded) and show only while a password box is visible
    function sync() {
      var href = waLink(), visible = false;
      btns.forEach(function (b) { b.href = href; });
      float.href = href;
      inputs.forEach(function (i) { if (i.offsetParent !== null) visible = true; });
      float.classList.toggle("show", visible);
    }
    document.addEventListener("input", sync, true);
    [btns, [float]].forEach(function (list) { list.forEach(function (el) { el.addEventListener("click", sync, true); }); });
    setInterval(sync, 800); sync();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setup); else setup();
})();
