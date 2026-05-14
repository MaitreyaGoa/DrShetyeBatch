// ============================================================
// FIREBASE CONFIG – Dr Shetye Live Blackboard
// ============================================================

var TEACHER_PASSWORD = "shetye@board";

var FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDm8gQdtj_H89SftMO62ndVN-P5c6PU6F8",
  authDomain:        "shetye-blackboard.firebaseapp.com",
  databaseURL:       "https://shetye-blackboard-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "shetye-blackboard",
  storageBucket:     "shetye-blackboard.firebasestorage.app",
  messagingSenderId: "153698821134",
  appId:             "1:153698821134:web:9c7a00492b09385edb885f"
};

// Initialize Firebase — wait for SDK to load
(function initFirebaseApp() {
  if (typeof firebase !== "undefined") {
    try {
      // Check if already initialized
      if (!firebase.apps.length) {
        firebase.initializeApp(FIREBASE_CONFIG);
      }
      console.log("Firebase initialized OK");
    } catch(e) {
      console.error("Firebase init error:", e);
    }
  } else {
    console.error("Firebase SDK not loaded");
  }
})();
