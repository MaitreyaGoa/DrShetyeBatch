// livestream-home.js
// Reads live stream config from localStorage and renders the card on the homepage.

(function () {
  function getLSConfig() {
    try {
      var raw = localStorage.getItem('ls_config');
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function extractYTId(url) {
    if (!url) return null;
    // youtu.be/ID
    var m = url.match(/youtu\.be\/([A-Za-z0-9_\-]{11})/);
    if (m) return m[1];
    // watch?v=ID
    m = url.match(/[?&]v=([A-Za-z0-9_\-]{11})/);
    if (m) return m[1];
    // live/ID
    m = url.match(/live\/([A-Za-z0-9_\-]{11})/);
    if (m) return m[1];
    // embed/ID
    m = url.match(/embed\/([A-Za-z0-9_\-]{11})/);
    if (m) return m[1];
    // bare 11-char ID
    if (/^[A-Za-z0-9_\-]{11}$/.test(url.trim())) return url.trim();
    return null;
  }

  function renderLSCard() {
    var cfg = getLSConfig();
    var container = document.getElementById('ls-content');
    var badge = document.getElementById('lsBadgeHeader');
    if (!container) return;

    if (!cfg || !cfg.url) {
      // No stream configured – show offline state
      container.innerHTML = '<div class="ls-no-stream">' +
        '<div class="ls-offline-icon">📡</div>' +
        '<p style="font-weight:600;color:#555;">No Live Class Scheduled</p>' +
        '<p style="font-size:12px;color:#999;margin-top:4px;">Check back at class time or join our WhatsApp channel for announcements.</p>' +
        '</div>';
      return;
    }

    var ytId = extractYTId(cfg.url);
    var isLive = cfg.status === 'live';
    var topic = cfg.topic || 'Online Class';
    var schedule = cfg.schedule || '';
    var chatUrl = ytId ? 'https://www.youtube.com/live_chat?v=' + ytId + '&embed_domain=' + location.hostname : '';
    var watchUrl = cfg.url;

    // Show LIVE badge in header
    if (badge) badge.style.display = isLive ? 'inline-flex' : 'none';

    var statusHtml = '';
    if (isLive) {
      statusHtml = '<div class="ls-status-bar"><span class="ls-status-dot"></span><span><strong>CLASS IS LIVE NOW</strong> – Join immediately!</span></div>';
    } else if (cfg.status === 'scheduled') {
      statusHtml = '<div class="ls-status-bar" style="border-left-color:#f39c12;background:rgba(243,156,18,.07);">' +
        '<span style="width:8px;height:8px;border-radius:50%;background:#f39c12;flex-shrink:0;display:inline-block;"></span>' +
        '<span><strong>Upcoming:</strong> ' + (schedule || 'Class scheduled soon') + '</span></div>';
    }

    var topicHtml = '<div style="font-size:14px;font-weight:600;color:#1a1a2e;margin-bottom:2px;">' + topic + '</div>';

    var watchCard = '<a href="livestream.html" target="_blank" class="ls-link-card ls-student-card">' +
      '<div class="ls-link-icon">🎬</div>' +
      '<div class="ls-link-info">' +
        '<div class="ls-link-title">Watch Live Class</div>' +
        '<div class="ls-link-desc">Opens the class stream page</div>' +
      '</div>' +
      '<div class="ls-link-arrow">→</div></a>';

    var ytCard = '<a href="' + watchUrl + '" target="_blank" class="ls-link-card" style="background:#fff8f8;border-color:#ffcdd2;">' +
      '<div class="ls-link-icon">▶️</div>' +
      '<div class="ls-link-info">' +
        '<div class="ls-link-title">Open on YouTube</div>' +
        '<div class="ls-link-desc">Watch directly on YouTube app</div>' +
      '</div>' +
      '<div class="ls-link-arrow">→</div></a>';

    var howHtml = '<div class="ls-how">' +
      '<div class="ls-how-step"><span class="ls-step-num">1</span> Open "Watch Live Class" or YouTube link</div>' +
      '<div class="ls-how-step"><span class="ls-step-num">2</span> Watch the class live with audio &amp; video</div>' +
      '<div class="ls-how-step"><span class="ls-step-num">3</span> Use YouTube chat to ask questions</div>' +
      '</div>';

    container.innerHTML = statusHtml + topicHtml +
      '<p style="font-size:12px;color:#999;margin-bottom:12px;">' + (schedule || '') + '</p>' +
      '<div class="ls-link-cards">' + watchCard + ytCard + '</div>' +
      howHtml;
  }

  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderLSCard);
  } else {
    renderLSCard();
  }

  // Re-render if storage changes (admin updates from another tab)
  window.addEventListener('storage', function (e) {
    if (e.key === 'ls_config') renderLSCard();
  });
})();
