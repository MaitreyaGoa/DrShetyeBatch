// ╔══════════════════════════════════════════════════════════╗
// ║         Dr Shetye Academic Program – MASTER CONFIG       ║
// ║  Edit this file to control tests, PDFs, question bank    ║
// ╚══════════════════════════════════════════════════════════╝

var ADMIN_PASSWORD = "shetye@admin";
var SCRIPT_URL     = "https://script.google.com/macros/s/AKfycbwc7NM-tgwtxCjZOOyLaFnLe41spGbr-0hzmYChly6cXjbzV4jrXSmelLxXN9IxPK2ZBA/exec";

// ──────────────────────────────────────────────────────────
// 1. FULL TESTS
//    live: true  → shows "Start Test" button
//    live: false → shows "Coming Soon"
// ──────────────────────────────────────────────────────────
var FULL_TESTS = [
  {
    id:          "fulltest1",
    title:       "Full Mock Test 1",
    description: "All sections · 50 Questions",
    password:    "ssc001",
    duration:    3600,
    totalMarks:  50,
    sections:    { English: 30, Maths: 10, Reasoning: 10 },
    questionsFile: "questions/fulltest1.js",
    live:        true
  },
  {
    id:          "fulltest2",
    title:       "Full Mock Test 2",
    description: "All sections · 50 Questions",
    password:    "ssc002",
    duration:    3600,
    totalMarks:  50,
    sections:    { English: 30, Maths: 10, Reasoning: 10 },
    questionsFile: "questions/fulltest2.js",
    live:        true
  },
  {
    id:          "fulltest3",
    title:       "Full Mock Test 3",
    description: "All sections · 50 Questions",
    password:    "ssc003",
    duration:    3600,
    totalMarks:  50,
    sections:    { English: 30, Maths: 10, Reasoning: 10 },
    questionsFile: "questions/fulltest3.js",
    live:        false
  }
];

// ──────────────────────────────────────────────────────────
// PREVIOUS YEAR QUESTION TESTS (PYQ)
// ──────────────────────────────────────────────────────────
var PYQ_TESTS = [
  {
    id:          "pyq_gssc1",
    title:       "GSSC PYQ Test 1",
    description: "Official GSSC Paper · 50 Questions · English + Maths + Reasoning",
    password:    "pyq001",
    duration:    3900,
    totalMarks:  50,
    sections:    { English: 30, Maths: 10, Reasoning: 10 },
    questionsFile: "questions/pyq_gssc1.js",
    live:        true
  },
  {
    id:          "pyq_gssc2",
    title:       "GSSC PYQ Test 2",
    description: "Official GSSC Paper · 50 Questions · English + Maths + Reasoning",
    password:    "pyq002",
    duration:    3900,
    totalMarks:  50,
    sections:    { English: 30, Maths: 10, Reasoning: 10 },
    questionsFile: "questions/pyq_gssc2.js",
    live:        false
  },
  {
    id:          "pyq_gssc3",
    title:       "GSSC PYQ Test 3",
    description: "Official GSSC Paper · 60 Questions",
    password:    "pyq003",
    duration:    4500,
    totalMarks:  60,
    sections:    { Konkani: 10, English: 30, Maths: 10, Reasoning: 10 },
    questionsFile: "questions/pyq_gssc3.js",
    live:        false
  }
];

// ──────────────────────────────────────────────────────────
// 2. PART TESTS  (section-wise)
//    subject: "english" | "maths" | "reasoning" | "konkani"
// ──────────────────────────────────────────────────────────
var PART_TESTS = [
  // ENGLISH
  {
    id: "eng_part1", subject: "english",
    title: "English Part Test 1", description: "Synonyms · Antonyms · Grammar · Idioms · 30 Q",
    password: "eng001", duration: 1800, totalMarks: 30,
    sections: { English: 30 },
    questionsFile: "questions/eng_part1.js", live: true
  },
  {
    id: "eng_part2", subject: "english",
    title: "English Part Test 2", description: "GSSC Police Constable · 30 Q",
    password: "eng002", duration: 1800, totalMarks: 30,
    sections: { English: 30 },
    questionsFile: "questions/eng_part2.js", live: true
  },
    {
    id: "eng_part3", subject: "english",
    title: "English Part Test 3", description: "GSSC Police Constable · 30 Q",
    password: "eng002", duration: 1800, totalMarks: 30,
    sections: { English: 30 },
    questionsFile: "questions/eng_part2.js", live: false
  },
  // MATHS
  {
    id: "math_part1", subject: "maths",
    title: "Maths Part Test 1", description: "Profit Loss · Time Work · Algebra · 10 Q",
    password: "mat001", duration: 600, totalMarks: 10,
    sections: { Maths: 10 },
    questionsFile: "questions/math_part1.js", live: true
  },
  {
    id: "math_part2", subject: "maths",
    title: "Maths Part Test 2", description: "Profit Loss · SI · LCM · Pipes · 10 Q",
    password: "mat002", duration: 600, totalMarks: 10,
    sections: { Maths: 10 },
    questionsFile: "questions/math_part2.js", live: true
  },
  {
    id: "math_part3", subject: "maths",
    title: "Maths Part Test 3", description: "GSSC Police Constable · 10 Q",
    password: "mat003", duration: 600, totalMarks: 10,
    sections: { Maths: 10 },
    questionsFile: "questions/math_part3.js", live: true
  },
   {
    id: "math_part4", subject: "maths",
    title: "Maths Part Test 4", description: "GSSC Police Constable Difficult · 10 Q",
    password: "mat004", duration: 600, totalMarks: 10,
    sections: { Maths: 10 },
    questionsFile: "questions/math_part4.js", live: true
  },
   {
    id: "math_part5", subject: "maths",
    title: "Maths Part Test 5", description: "GSSC Police Constable Moderate · 10 Q",
    password: "mat005", duration: 600, totalMarks: 10,
    sections: { Maths: 10 },
    questionsFile: "questions/math_part5.js", live: true
  },
   {
    id: "math_part6", subject: "maths",
    title: "Maths Part Test 6", description: "GSSC Police Constable · 10 Q",
    password: "mat006", duration: 600, totalMarks: 10,
    sections: { Maths: 10 },
    questionsFile: "questions/math_part6.js", live: false
  },
  // REASONING
  {
    id: "reason_part1", subject: "reasoning",
    title: "Reasoning Part Test 1", description: "GSSC Police Constable · 10 Q",
    password: "rea001", duration: 600, totalMarks: 10,
    sections: { Reasoning: 10 },
    questionsFile: "questions/reason_part1.js", live: true
  },
  {
    id: "reason_part2", subject: "reasoning",
    title: "Reasoning Part Test 2", description: "GSSC Part Test · 10 Q",
    password: "rea002", duration: 600, totalMarks: 10,
    sections: { Reasoning: 10 },
    questionsFile: "questions/reason_part2.js", live: true
  },
   {
    id: "reason_part3", subject: "reasoning",
    title: "Reasoning Part Test 3", description: "GSSC Part Test · 20 Q",
    password: "rea002", duration: 1800, totalMarks: 20,
    sections: { Reasoning: 20 },
    questionsFile: "questions/reason_part3.js", live: false
  },
  // KONKANI
  {
    id: "kon_part1", subject: "konkani",
    title: "Konkani Part Test 1", description: "Grammar & Comprehension · 20 Q",
    password: "kon001", duration: 1800, totalMarks: 20,
    sections: { Konkani: 20 },
    questionsFile: "questions/kon_part1.js", live: false
  },
  {
    id: "kon_part2", subject: "konkani",
    title: "Konkani Part Test 2", description: "Vocabulary & Usage · 20 Q",
    password: "kon002", duration: 1800, totalMarks: 20,
    sections: { Konkani: 20 },
    questionsFile: "questions/kon_part2.js", live: false
  }
];

// ──────────────────────────────────────────────────────────
// 3. PDF RESOURCES
//    category: "notes" | "books" | "material"
//    url: direct link to PDF (Google Drive, Dropbox, etc.)
//    To share from Google Drive:
//      Open file → Share → "Anyone with link" → Copy link
//      Replace /view with /preview for in-browser, or use direct download link
// ──────────────────────────────────────────────────────────
var PDF_RESOURCES = [
  {
    category: "books",
    title:    "GOA SSC English Refference Book",
    subject:  "General",
    date:     "2025-05-14",
    url:      "https://drive.google.com/file/d/1CL9lbCk5z8_kydKrgNv8fmFr4qI2SJdo/view"
  },
    {
    category: "books",
    title:    "GOA SSC Maths Refference Book",
    subject:  "General",
    date:     "2025-05-14",
    url:      "https://drive.google.com/file/d/1lszCjggWuqbN4K11O9evJXyGmJ3P2TBE/view"
  }
];

// ──────────────────────────────────────────────────────────
// 4. QUESTION BANK
//    Add daily questions here. Each set has a date label.
//    Correct answer shown GREEN, wrong shown RED on click.
//    Explanation appears below on click.
// ──────────────────────────────────────────────────────────
var QUESTION_BANK = [
  {
    date:  "2025-05-14",
    label: "Today",
    subject: "Mixed",
    questions: [
      {
        id: "qb_1",
        text: "Which article is used before a vowel sound?",
        options: ["A", "An", "The", "None"],
        answer: "B",
        explanation: "'An' is used before words starting with a vowel sound. E.g., 'an apple', 'an hour'."
      },
      {
        id: "qb_2",
        text: "What is 15% of 200?",
        options: ["20", "25", "30", "35"],
        answer: "C",
        explanation: "15% of 200 = (15/100) × 200 = 30."
      },
      {
        id: "qb_3",
        text: "Opposite of 'Expand' is:",
        options: ["Grow", "Contract", "Increase", "Develop"],
        answer: "B",
        explanation: "Contract means to reduce in size, which is the opposite of expand."
      },
      {
        id: "qb_4",
        text: "Find the odd one: Cat, Dog, Parrot, Crow",
        options: ["Cat", "Dog", "Parrot", "Crow"],
        answer: "D",
        explanation: "Crow is a wild bird. Cat, Dog, Parrot are domestic/pet animals."
      },
      {
        id: "qb_5",
        text: "A train runs at 60 km/h. Distance covered in 2.5 hours?",
        options: ["120 km", "140 km", "150 km", "160 km"],
        answer: "C",
        explanation: "Distance = Speed × Time = 60 × 2.5 = 150 km."
      }
      // Add up to 20 questions per day here
    ]
  }
  // To add next day: copy the block above, change date and questions
];
