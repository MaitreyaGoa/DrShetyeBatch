/* pwa.js — registers the offline service worker and shows an
   "Install app" banner on the homepage and My Account page.
   Android/Chrome: one-tap install.  iPhone/Safari: Share → Add to Home Screen tip. */
(function () {
  "use strict";
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/sw.js").catch(function (e) { console.warn("SW register failed", e); });
    });
  }

  var path = location.pathname.replace(/\/+$/, "") || "/";
  var bannerPage = path === "/" || /\/(index|account)(\.html)?$/.test(path);
  var standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  if (!bannerPage || standalone) return;

  var KEY = "eb-install-dismissed";
  function dismissedRecently() {
    try { var t = +localStorage.getItem(KEY); return t && Date.now() - t < 5 * 864e5; } catch (e) { return false; }
  }
  if (dismissedRecently()) return;

  var ua = navigator.userAgent || "";
  var isIOS = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  var isIOSSafari = isIOS && /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS|Instagram|FBAN|FBAV/.test(ua);

  function css() {
    if (document.getElementById("ebPwaCss")) return;
    var s = document.createElement("style"); s.id = "ebPwaCss";
    s.textContent =
      ".eb-inst{position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom));z-index:9999;max-width:520px;margin:0 auto;" +
      "display:flex;align-items:center;gap:12px;padding:12px 12px 12px 12px;border-radius:16px;background:#0b1f66;color:#fff;" +
      "box-shadow:0 10px 30px rgba(0,0,0,.3);font:14px/1.35 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;animation:ebUp .3s ease}" +
      "@keyframes ebUp{from{transform:translateY(30px);opacity:0}to{transform:none;opacity:1}}" +
      ".eb-inst img{width:46px;height:46px;border-radius:11px;flex-shrink:0}" +
      ".eb-inst .t{flex:1;min-width:0}.eb-inst b{display:block;font-size:15px}" +
      ".eb-inst .s{opacity:.85;font-size:12.5px}" +
      ".eb-inst .go{background:#2fb457;color:#fff;border:none;border-radius:10px;padding:9px 14px;font-weight:700;font-size:14px;cursor:pointer;flex-shrink:0}" +
      ".eb-inst .x{background:none;border:none;color:#fff;opacity:.7;font-size:20px;line-height:1;cursor:pointer;padding:4px 6px;flex-shrink:0}" +
      ".eb-share{display:inline-block;vertical-align:-3px}";
    document.head.appendChild(s);
  }

  function show(html, onGo) {
    css();
    var el = document.createElement("div");
    el.className = "eb-inst";
    el.innerHTML = '<img src="/icons/icon-192.png" alt=""/><div class="t">' + html + "</div>" +
      (onGo ? '<button class="go" type="button">Install</button>' : "") +
      '<button class="x" type="button" aria-label="Close">×</button>';
    document.body.appendChild(el);
    el.querySelector(".x").onclick = function () { try { localStorage.setItem(KEY, Date.now()); } catch (e) {} el.remove(); };
    if (onGo) el.querySelector(".go").onclick = function () { onGo(el); };
    return el;
  }

  // Android / desktop Chrome / Edge
  var deferred = null;
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferred = e;
    setTimeout(function () {
      show("<b>Install the Excel Bicholim app</b><span class=\"s\">Free mock tests on your home screen — opens full-screen, works offline.</span>",
        function (el) {
          el.remove();
          deferred.prompt();
          deferred.userChoice.finally(function () { deferred = null; });
        });
    }, 2500);
  });
  window.addEventListener("appinstalled", function () {
    var b = document.querySelector(".eb-inst"); if (b) b.remove();
  });

  // iPhone / iPad Safari — no install prompt exists, so show the steps
  if (isIOSSafari) {
    window.addEventListener("load", function () {
      setTimeout(function () {
        show('<b>Add Excel Bicholim to your Home Screen</b><span class="s">Tap ' +
          '<svg class="eb-share" width="16" height="18" viewBox="0 0 16 20" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 1v12M4 5l4-4 4 4"/><path d="M5 8H2v11h12V8h-3"/></svg>' +
          ' Share, then <b style="display:inline">“Add to Home Screen”</b>.</span>');
      }, 2500);
    });
  }
})();
