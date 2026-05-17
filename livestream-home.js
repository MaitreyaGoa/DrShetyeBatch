// livestream-home.js
// Reads live stream URL from Google Apps Script and renders the homepage card.
// Requires SCRIPT_URL to be defined in config.js (already is).

(function () {
  function extractYTId(url) {
    if (!url) return null;
    var pp = [/youtu\.be\/([A-Za-z0-9_\-]{11})/, /[?&]v=([A-Za-z0-9_\-]{11})/, /live\/([A-Za-z0-9_\-]{11})/, /embed\/([A-Za-z0-9_\-]{11})/];
    for (var i = 0; i < pp.length; i++) { var m = url.match(pp[i]); if (m) return m[1]; }
    if (/^[A-Za-z0-9_\-]{11}$/.test(url.trim())) return url.trim();
    return null;
  }

  function renderCard(data) {
    var container = document.getElementById('ls-content');
    if (!container) return;

    if (!data || !data.active || !data.url) {
      container.innerHTML =
        '<div class="ls-no-stream">' +
          '<div class="ls-offline-icon">📡</div>' +
          '<p style="font-weight:600;color:#555;">No Live Class Right Now</p>' +
          '<p style="font-size:12px;color:#999;margin-top:4px;">Join our WhatsApp channel for announcements.</p>' +
        '</div>';
      return;
    }

    var ytId = extractYTId(data.url);
    var thumb = ytId
      ? '<img src="https://img.youtube.com/vi/' + ytId + '/mqdefault.jpg" style="width:100%;border-radius:10px;margin-bottom:12px;" onerror="this.style.display=\'none\'">'
      : '';

    container.innerHTML =
      '<div style="padding:16px;">' +
        '<div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;">' +
          '<span style="width:9px;height:9px;border-radius:50%;background:#ff4757;display:inline-block;animation:livePulse 1.2s infinite;flex-shrink:0;"></span>' +
          '<span style="font-size:12px;font-weight:700;color:#ff4757;letter-spacing:.5px;">CLASS IS LIVE NOW</span>' +
        '</div>' +
        thumb +
        '<a href="livestream.html" target="_blank" style="display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:10px;text-decoration:none;background:linear-gradient(135deg,#fff5f5,#ffe8e8);border:1.5px solid #ffcdd2;margin-bottom:8px;">' +
          '<div style="font-size:26px;">🎬</div>' +
          '<div style="flex:1;">' +
            '<div style="font-size:14px;font-weight:700;color:#1a1a2e;">Watch Live Class</div>' +
            '<div style="font-size:12px;color:#666;">Tap to open the live stream</div>' +
          '</div>' +
          '<div style="font-size:18px;color:#ff4757;font-weight:700;">→</div>' +
        '</a>' +
        '<a href="' + data.url + '" target="_blank" style="display:flex;align-items:center;gap:14px;padding:12px 16px;border-radius:10px;text-decoration:none;background:#f8f8f8;border:1.5px solid #eee;">' +
          '<div style="font-size:22px;">▶️</div>' +
          '<div style="flex:1;">' +
            '<div style="font-size:13px;font-weight:700;color:#1a1a2e;">Open on YouTube</div>' +
            '<div style="font-size:12px;color:#666;">Watch in YouTube app</div>' +
          '</div>' +
          '<div style="font-size:16px;color:#999;">→</div>' +
        '</a>' +
      '</div>';
  }

  function init() {
    if (typeof SCRIPT_URL === 'undefined') { setTimeout(init, 300); return; }
    fetch(SCRIPT_URL + '?action=getStream')
      .then(function(r){ return r.json(); })
      .then(function(res){ renderCard(res); })
      .catch(function(){ renderCard(null); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
