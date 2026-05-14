// ============================================================
// FIREBASE CONFIG – Dr Shetye Live Blackboard
// Fill in your Firebase project credentials below
// See SETUP_GUIDE.md for step-by-step instructions
// ============================================================

var TEACHER_PASSWORD = "shetye@board";   // Change this!

var FIREBASE_CONFIG = {
  apiKey:            "PASTE_YOUR_API_KEY_HERE",
  authDomain:        "PASTE_YOUR_AUTH_DOMAIN_HERE",
  databaseURL:       "PASTE_YOUR_DATABASE_URL_HERE",
  projectId:         "PASTE_YOUR_PROJECT_ID_HERE",
  storageBucket:     "PASTE_YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID_HERE",
  appId:             "PASTE_YOUR_APP_ID_HERE"
};

// Initialize Firebase
if (typeof firebase !== "undefined") {
  firebase.initializeApp(FIREBASE_CONFIG);
}
