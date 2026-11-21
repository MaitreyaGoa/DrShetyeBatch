/* sw.js — Excel Bicholim offline support
   Strategy: NETWORK FIRST for everything on excelbicholim.in, so new tests and
   config.js changes appear immediately. The cache is only used when offline.
   Bump VERSION only if you change this file's logic. */
var VERSION = "eb-v1";
var CORE = [
  "/", "/index.html", "/styles.css", "/config.js", "/home.js",
  "/test.html", "/test.js", "/cat-test.html", "/cat-test.js",
  "/auth.js", "/pwa.js", "/account.html", "/offline.html",
  "/manifest.webmanifest", "/icons/icon-192.png", "/icons/icon-512.png",
  "/images/dr-shetye-photo.jpg"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(VERSION).then(function (c) {
      // add one by one so a single missing file never breaks install
      return Promise.all(CORE.map(function (u) { return c.add(u).catch(function () {}); }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

function isStaticCdn(url) {
  return url.hostname === "www.gstatic.com" || url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);

  // Firebase SDK + Google Fonts: serve from cache, refresh in background
  if (isStaticCdn(url)) {
    e.respondWith(caches.open(VERSION).then(function (c) {
      return c.match(req).then(function (hit) {
        var net = fetch(req).then(function (res) { if (res && (res.ok || res.type === "opaque")) c.put(req, res.clone()); return res; }).catch(function () { return hit; });
        return hit || net;
      });
    }));
    return;
  }

  // Everything else off-site (Apps Script scores, Firebase login/database, YouTube): never cache
  if (url.origin !== self.location.origin) return;

  // Own site: network first, cache as backup
  e.respondWith(
    fetch(req).then(function (res) {
      if (res && res.ok && res.type === "basic") {
        var copy = res.clone();
        caches.open(VERSION).then(function (c) { c.put(req, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(req, { ignoreSearch: req.mode === "navigate" }).then(function (hit) {
        if (hit) return hit;
        if (req.mode === "navigate") return caches.match("/offline.html");
        return new Response("", { status: 504, statusText: "Offline" });
      });
    })
  );
});
