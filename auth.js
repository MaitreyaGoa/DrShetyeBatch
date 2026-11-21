/* ═══════════════════════════════════════════════════════════════
   auth.js — Google sign-in + student history for excelbicholim.in
   Uses the existing Firebase project (shetye-blackboard):
     · Firebase Auth  → Google sign-in
     · Cloud Firestore → users/{uid} profile + users/{uid}/attempts/*
   Load AFTER the three Firebase compat SDKs and AFTER config.js.

   SWITCH: tests require Google sign-in by default. To turn it off
   (e.g. if sign-in has a problem on exam day) add this line to config.js:
       var REQUIRE_GOOGLE_LOGIN = false;
   If Firebase itself fails to load, tests stay open with name entry,
   so a network problem never locks students out of a test.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var FIREBASE_CONFIG = {
    apiKey:            "AIzaSyDm8gQdtj_H89SftMO62ndVN-P5c6PU6F8",
    authDomain:        "shetye-blackboard.firebaseapp.com",
    databaseURL:       "https://shetye-blackboard-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId:         "shetye-blackboard",
    storageBucket:     "shetye-blackboard.firebasestorage.app",
    messagingSenderId: "153698821134",
    appId:             "1:153698821134:web:9c7a00492b09385edb885f"
  };

  if (typeof window.REQUIRE_GOOGLE_LOGIN === "undefined") window.REQUIRE_GOOGLE_LOGIN = true;

  var A = window.ExcelAuth = {
    user: null, profile: null,
    ready: false,      // first auth check finished
    ok: false,         // Firebase loaded and working
    _cbs: []
  };
  var auth = null, db = null;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  A.esc = esc;

  // Instagram / Facebook / other in-app browsers: Google blocks sign-in there.
  A.inAppBrowser = function () {
    var ua = navigator.userAgent || "";
    return /FBAN|FBAV|FB_IAB|Instagram|Line\/|Snapchat|; wv\)/i.test(ua);
  };

  A.onChange = function (cb) {
    A._cbs.push(cb);
    if (A.ready) { try { cb(A.user, A.profile); } catch (e) { console.error(e); } }
  };
  function emit() {
    A._cbs.forEach(function (cb) { try { cb(A.user, A.profile); } catch (e) { console.error(e); } });
  }

  A.name = function () {
    if (A.profile && A.profile.name) return A.profile.name;
    return A.user ? (A.user.displayName || (A.user.email || "").split("@")[0]) : "";
  };

  // Tests may start when: switch is off, Firebase failed (fail-open), or signed in.
  A.canStart = function () {
    if (window.REQUIRE_GOOGLE_LOGIN === false) return true;
    if (!A.ok) return true;
    return !!A.user;
  };

  // ── init ───────────────────────────────────────────────
  function init() {
    if (typeof firebase === "undefined" || !firebase.auth || !firebase.firestore) {
      console.warn("auth.js: Firebase SDK not loaded — sign-in disabled, tests open by name.");
      A.ready = true; A.ok = false; emit(); return;
    }
    try {
      if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
      auth = firebase.auth();
      db = firebase.firestore();
      A.ok = true;
    } catch (e) {
      console.error("auth.js: Firebase init failed", e);
      A.ready = true; A.ok = false; emit(); return;
    }
    auth.getRedirectResult().catch(function (e) { A.lastError = friendlyError(e); emit(); });
    auth.onAuthStateChanged(function (u) {
      A.user = u;
      if (!u) { A.profile = null; A.ready = true; emit(); return; }
      var ref = db.collection("users").doc(u.uid);
      ref.get().then(function (snap) {
        var now = firebase.firestore.FieldValue.serverTimestamp();
        if (snap.exists) {
          A.profile = snap.data();
          ref.set({ lastLoginAt: now, photo: u.photoURL || "", email: u.email || "" }, { merge: true }).catch(function () {});
        } else {
          A.profile = { name: u.displayName || "", email: u.email || "", photo: u.photoURL || "", attemptCount: 0 };
          ref.set({ name: A.profile.name, email: A.profile.email, photo: A.profile.photo,
                    attemptCount: 0, createdAt: now, lastLoginAt: now }).catch(function (e) { console.error(e); });
        }
      }).catch(function (e) {
        console.error("auth.js: profile read failed", e);
        A.profile = { name: u.displayName || "", email: u.email || "", photo: u.photoURL || "" };
      }).then(function () { A.ready = true; emit(); });
    });
  }

  function friendlyError(e) {
    var c = (e && e.code) || "";
    if (c === "auth/popup-closed-by-user" || c === "auth/cancelled-popup-request") return "";
    if (c === "auth/unauthorized-domain") return "Sign-in is not enabled for this website yet. Please inform the coordinator (7358425108).";
    if (c === "auth/operation-not-allowed") return "Google sign-in is not switched on yet. Please inform the coordinator (7358425108).";
    if (c === "auth/network-request-failed") return "No internet connection. Please check your network and try again.";
    return "Sign-in failed (" + (c || "unknown error") + "). Please try again.";
  }

  A.signIn = function () {
    if (!A.ok) return Promise.reject(new Error("Sign-in unavailable"));
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    A.lastError = "";
    return auth.signInWithPopup(provider).catch(function (e) {
      if (e && (e.code === "auth/popup-blocked" || e.code === "auth/operation-not-supported-in-this-environment")) {
        return auth.signInWithRedirect(provider);
      }
      A.lastError = friendlyError(e); emit();
      throw e;
    });
  };
  A.signOut = function () { return auth ? auth.signOut() : Promise.resolve(); };

  A.updateName = function (name) {
    name = String(name || "").trim().slice(0, 60);
    if (!A.user || !name) return Promise.reject(new Error("Not signed in"));
    return db.collection("users").doc(A.user.uid).set({ name: name }, { merge: true }).then(function () {
      A.profile = A.profile || {}; A.profile.name = name; emit();
    });
  };

  // rec: { testId, testTitle, engine, score, outOf, sections:[{name,score,max}],
  //        correct, wrong, skipped, totalQ, timeUsedSec, answers:{} }
  A.saveAttempt = function (rec) {
    if (!A.ok || !A.user) return Promise.resolve(null);
    var uid = A.user.uid, FV = firebase.firestore.FieldValue;
    var doc = {};
    Object.keys(rec).forEach(function (k) { if (rec[k] !== undefined) doc[k] = rec[k]; });
    doc.pct = rec.outOf ? Math.round((rec.score / rec.outOf) * 1000) / 10 : 0;
    doc.name = A.name();
    doc.createdAt = FV.serverTimestamp();
    doc.clientTime = Date.now();
    var userRef = db.collection("users").doc(uid);
    return userRef.collection("attempts").add(doc).then(function (r) {
      userRef.set({ attemptCount: FV.increment(1), lastAttemptAt: FV.serverTimestamp() }, { merge: true }).catch(function () {});
      return r.id;
    }).catch(function (e) { console.error("auth.js: saveAttempt failed", e); return null; });
  };

  A.listAttempts = function (max) {
    if (!A.ok || !A.user) return Promise.resolve([]);
    return db.collection("users").doc(A.user.uid).collection("attempts")
      .orderBy("clientTime", "desc").limit(max || 200).get()
      .then(function (qs) { var out = []; qs.forEach(function (d) { var x = d.data(); x.id = d.id; out.push(x); }); return out; });
  };

  // ── shared styles ──────────────────────────────────────
  function injectCss() {
    if (document.getElementById("excelAuthCss")) return;
    var st = document.createElement("style");
    st.id = "excelAuthCss";
    st.textContent =
      ".xa-gbtn{min-height:48px;display:inline-flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:11px 16px;background:#fff;color:#1f2937;border:1.5px solid #d1d5db;border-radius:8px;font:600 15px/1.2 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;cursor:pointer;box-shadow:0 1px 2px rgba(0,0,0,.06)}" +
      ".xa-gbtn:hover{background:#f9fafb;border-color:#9ca3af}.xa-gbtn:disabled{opacity:.6;cursor:wait}" +
      ".xa-gbtn svg{flex-shrink:0}" +
      ".xa-gate{margin:0 0 16px;padding:14px;border:1.5px solid #bbf7d0;background:#f0fdf4;border-radius:10px;font:14px/1.45 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#14532d;text-align:left}" +
      ".xa-gate.xa-out{border-color:#fde68a;background:#fffbeb;color:#78350f}" +
      ".xa-gate b{font-weight:700}.xa-gate p{margin:0 0 10px}" +
      ".xa-who{display:flex;align-items:center;gap:10px}" +
      ".xa-who img,.xa-ph{width:38px;height:38px;border-radius:50%;flex-shrink:0;object-fit:cover;background:#166534;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700}" +
      ".xa-who .xa-meta{flex:1;min-width:0}.xa-who .xa-mail{font-size:12px;color:#4b5563;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}" +
      ".xa-link{background:none;border:none;color:#166534;font-weight:700;font-size:14px;cursor:pointer;padding:10px 4px;min-height:40px;text-decoration:underline}" +
      ".xa-err{margin-top:8px;color:#b91c1c;font-size:13px;font-weight:600}" +
      ".xa-hdr{display:inline-flex;align-items:center;gap:7px;padding:4px 12px 4px 4px;border-radius:999px;background:#fff;border:1px solid rgba(0,0,0,.14);color:#1d1d1f;text-decoration:none;font:600 12px/1 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;cursor:pointer;white-space:nowrap}" +
      ".xa-hdr:hover{background:#f0fdf4;border-color:#86efac}" +
      ".xa-hdr img,.xa-hdr .xa-ph{width:26px;height:26px;font-size:12px}" +
      ".xa-hdr.xa-in-btn{padding:6px 12px}" +
      "@media(max-width:420px){.xa-hdr.xa-acc span:not(.xa-ph){display:none}.xa-hdr.xa-acc{padding:3px}}";
    document.head.appendChild(st);
  }

  var G_ICON = '<svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>';
  A.G_ICON = G_ICON;

  function avatar(u, name) {
    if (u && u.photoURL) return '<img src="' + esc(u.photoURL) + '" alt="" referrerpolicy="no-referrer"/>';
    return '<span class="xa-ph">' + esc((name || "?").charAt(0).toUpperCase()) + "</span>";
  }
  A.avatar = avatar;

  A.googleButton = function (label) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "xa-gbtn";
    b.innerHTML = G_ICON + "<span>" + esc(label || "Sign in with Google") + "</span>";
    b.onclick = function () {
      if (A.inAppBrowser()) {
        alert("Google sign-in does not work inside the Instagram / Facebook app browser.\n\nTap ⋮ (top-right) → \"Open in Chrome\" (or copy the link into Chrome), then sign in.");
        return;
      }
      b.disabled = true;
      A.signIn().catch(function () {}).then(function () { b.disabled = false; });
    };
    return b;
  };

  // ── header widget (index.html) ─────────────────────────
  A.mountHeader = function (el) {
    if (!el) return;
    injectCss();
    A.onChange(function (u) {
      if (!A.ok) { el.innerHTML = ""; return; }
      if (u) {
        el.innerHTML = '<a class="xa-hdr xa-acc" href="account.html" title="My Account">' + avatar(u, A.name()) + "<span>My Account</span></a>";
      } else {
        el.innerHTML = '<button type="button" class="xa-hdr xa-in-btn">' + G_ICON + "<span>Sign in</span></button>";
        el.firstChild.onclick = function () { if (A.inAppBrowser()) { alert("Please open this site in Chrome to sign in."); return; } A.signIn().catch(function () {}); };
      }
    });
  };

  // ── test-page gate ─────────────────────────────────────
  // opts: { mount: element to insert the box before, nameInput: <input>,
  //         hide: [elements to hide while signed out] }
  A.gate = function (opts) {
    injectCss();
    var box = document.createElement("div");
    box.className = "xa-gate";
    box.innerHTML = "Checking sign-in…";
    opts.mount.parentNode.insertBefore(box, opts.mount);
    var hide = opts.hide || [];
    function setHidden(h) { hide.forEach(function (e) { if (e) e.style.display = h ? "none" : ""; }); }
    setHidden(true);

    A.onChange(function (u) {
      var required = window.REQUIRE_GOOGLE_LOGIN !== false && A.ok;
      if (!required) {
        box.style.display = "none";
        if (opts.nameInput) opts.nameInput.readOnly = false;
        setHidden(false);
        return;
      }
      box.style.display = "";
      if (u) {
        var nm = A.name();
        box.className = "xa-gate";
        box.innerHTML = '<div class="xa-who">' + avatar(u, nm) +
          '<div class="xa-meta"><div>Signed in as <b>' + esc(nm) + '</b></div><div class="xa-mail">' + esc(u.email || "") + "</div></div></div>" +
          '<div style="margin-top:6px;font-size:12px;color:#166534">Your result will be saved to <a href="account.html" style="color:#166534;font-weight:700">My Account</a>. ' +
          '<button type="button" class="xa-link" id="xaSwitch">Switch account</button></div>';
        document.getElementById("xaSwitch").onclick = function () { A.signOut(); };
        if (opts.nameInput) { opts.nameInput.value = nm; opts.nameInput.readOnly = true; opts.nameInput.title = "Change your name from My Account"; }
        setHidden(false);
      } else {
        box.className = "xa-gate xa-out";
        box.innerHTML = "<p><b>Sign in with Google to take this test.</b><br>Your scores and progress will be saved to your own account.</p>";
        box.appendChild(A.googleButton("Sign in with Google"));
        if (A.inAppBrowser()) {
          var w = document.createElement("div"); w.className = "xa-err";
          w.textContent = "You are inside the Instagram/Facebook app. Tap ⋮ → \"Open in Chrome\" first, then sign in.";
          box.appendChild(w);
        }
        if (A.lastError) { var er = document.createElement("div"); er.className = "xa-err"; er.textContent = A.lastError; box.appendChild(er); }
        if (opts.nameInput) { opts.nameInput.value = ""; }
        setHidden(true);
      }
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
