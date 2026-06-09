// ╔══════════════════════════════════════════════════════════╗
// ║         Dr Shetye Academic Program – MASTER CONFIG       ║
// ║  Edit this file to control tests, PDFs, question bank    ║
// ╚══════════════════════════════════════════════════════════╝

var ADMIN_PASSWORD = "shetye@admin";
var SCRIPT_URL     = "https://script.google.com/macros/s/AKfycbwc7NM-tgwtxCjZOOyLaFnLe41spGbr-0hzmYChly6cXjbzV4jrXSmelLxXN9IxPK2ZBA/exec";

// ──────────────────────────────────────────────────────────
// 00. DAILY TESTS  (one test per day, date-tabbed on homepage)
//     date: "YYYY-MM-DD" format
// ──────────────────────────────────────────────────────────
var DAILY_TESTS = [
  {
    id:          "daily_20260609_maths",
    date:        "2026-06-09",
    title:       "Daily Maths Quiz — 9 June 2026",
    description: "Goa Competitive Exams · 15 Questions · Mixed Topics",
    password:    "d090626",
    duration:    900,
    totalMarks:  15,
    sections:    { "Maths": 15 },
    questionsFile: "questions/math_dq2.js",
    live:        true
  },
  {
    id:          "daily_20260608_maths",
    date:        "2026-06-08",
    title:       "Daily Maths Quiz — 8 June 2026",
    description: "15 Questions · Mixed Topics",
    password:    "d080626",
    duration:    900,
    totalMarks:  15,
    sections:    { "Maths": 15 },
    questionsFile: "questions/math_dq3.js",
    live:        true
  },
   {
    id:          "daily_20260607_maths",
    date:        "2026-06-07",
    title:       "Daily Maths Quiz — 7 June 2026",
    description: "15 Questions · Mixed Topics",
    password:    "d070626",
    duration:    900,
    totalMarks:  15,
    sections:    { "Maths": 15 },
    questionsFile: "questions/math_dq4.js",
    live:        true
   },
   {
    id:          "daily_20260606_maths",
    date:        "2026-06-06",
    title:       "Daily Maths Quiz — 6 June 2026",
    description: "15 Questions · Mixed Topics",
    password:    "d060626",
    duration:    900,
    totalMarks:  15,
    sections:    { "Maths": 15 },
    questionsFile: "questions/math_dq1.js",
    live:        true
];

// ──────────────────────────────────────────────────────────
// 0. MONTHLY TESTS  (Monthly Full Tests — English + Reasoning + Maths + GK)
//    100 marks · 4 sections × 25 marks · 90 minutes
// ──────────────────────────────────────────────────────────
var MONTHLY_TESTS = [
  {
    id:          "monthly_may26",
    month:       "May",
    title:       "May 2026 Monthly Full Test",
    description: "English 25Q · Reasoning 25Q · Maths 25Q · GK 25Q · 100 Questions",
    password:    "may2026",
    duration:    5400,
    totalMarks:  100,
    sections:    { "English": 25, "Reasoning": 25, "Maths": 25, "General Knowledge": 25 },
    questionsFile: "questions/monthly_may25.js",
    live:        true
  },
    {
    id:          "monthly_june26",
    month:       "June",
    title:       "June 2026 Monthly Full Test",
    description: "English 25Q · Reasoning 25Q · Maths 25Q · GK 25Q · 100 Questions",
    password:    "june2026",
    duration:    5400,
    totalMarks:  100,
    sections:    { "English": 25, "Reasoning": 25, "Maths": 25, "General Knowledge": 25 },
    questionsFile: "questions/monthly_june25.js",
    live:        false
  }
];

// ──────────────────────────────────────────────────────────
// 1a. GSSC TESTS  (Goa State Service Commission — PC / Clerk / Junior posts)
// ──────────────────────────────────────────────────────────
var GSSC_TESTS = [
  {
    id:          "fulltest1",
    title:       "GSSC Full Mock Test 1",
    description: "English · Maths · Reasoning · 50 Questions",
    password:    "gssc001",
    duration:    3600,
    totalMarks:  50,
    sections:    { "English": 30, "Maths": 10, "Reasoning": 10 },
    questionsFile: "questions/fulltest1.js",
    live:        true
  },
  {
    id:          "fulltest2",
    title:       "GSSC Full Mock Test 2",
    description: "English · Maths · Reasoning · 50 Questions",
    password:    "gssc002",
    duration:    3600,
    totalMarks:  50,
    sections:    { "English": 30, "Maths": 10, "Reasoning": 10 },
    questionsFile: "questions/fulltest2.js",
    live:        true
  },
  {
    id:          "fulltest4",
    title:       "GSSC Full Mock Test 3",
    description: "English · Maths · Reasoning · 50 Questions",
    password:    "gssc003",
    duration:    3600,
    totalMarks:  50,
    sections:    { "English": 30, "Maths": 10, "Reasoning": 10 },
    questionsFile: "questions/fulltest4.js",
    live:        false
  }
];

// ──────────────────────────────────────────────────────────
// 1b. GPSC TESTS  (Goa Public Service Commission — JSO / Group A & B)
// ──────────────────────────────────────────────────────────
var GPSC_TESTS = [
  {
    id:          "fulltest3",
    title:       "JSO Pre-Screening Test 1",
    description: "General Intelligence & Reasoning 50Q · English 10Q",
    password:    "jso001",
    duration:    4500,
    totalMarks:  60,
    sections:    { "General Intelligence & Reasoning": 50, "English Comprehension": 10 },
    questionsFile: "questions/fulltest3.js",
    live:        true
  },
  {
    id:          "fulltest5",
    title:       "JSO Pre-Screening Test 2",
    description: "General Intelligence & Reasoning 50Q · English 10Q",
    password:    "jso002",
    duration:    4500,
    totalMarks:  60,
    sections:    { "General Intelligence & Reasoning": 50, "English Comprehension": 10 },
    questionsFile: "questions/fulltest5.js",
    live:        true
  },
  {
    id:          "fulltest6",
    title:       "JSO Pre-Screening Test 3",
    description: "General Intelligence & Reasoning 50Q · English 10Q",
    password:    "jso003",
    duration:    4500,
    totalMarks:  60,
    sections:    { "General Intelligence & Reasoning": 50, "English Comprehension": 10 },
    questionsFile: "questions/fulltest6.js",
    live:        true
  },
  {
    id:          "fulltest7",
    title:       "JSO Pre-Screening Test 4",
    description: "General Intelligence & Reasoning 50Q · English 10Q",
    password:    "jso004",
    duration:    4500,
    totalMarks:  60,
    sections:    { "General Intelligence & Reasoning": 50, "English Comprehension": 10 },
    questionsFile: "questions/fulltest7.js",
    live:        true
  }
];

// Keep FULL_TESTS as combined for backward compatibility
var FULL_TESTS = GSSC_TESTS.concat(GPSC_TESTS);

// ──────────────────────────────────────────────────────────
// 2. PREVIOUS YEAR QUESTION TESTS (PYQ)
// ──────────────────────────────────────────────────────────
var PYQ_TESTS = [
  {
    id:          "pyq_gssc1",
    title:       "GSSC PYQ Test 1",
    description: "Official GSSC Paper · 50 Questions · English + Maths + Reasoning",
    password:    "pyq001",
    duration:    3900,
    totalMarks:  50,
    sections:    { "English": 30, "Maths": 10, "Reasoning": 10 },
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
    sections:    { "English": 30, "Maths": 10, "Reasoning": 10 },
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
    sections:    { "Konkani": 10, "English": 30, "Maths": 10, "Reasoning": 10 },
    questionsFile: "questions/pyq_gssc3.js",
    live:        false
  }
];

// ──────────────────────────────────────────────────────────
// 3. PART TESTS  (section-wise)
// ──────────────────────────────────────────────────────────
var PART_TESTS = [

  // ── ENGLISH ──
  {
    id: "eng_part1", subject: "english",
    title: "English Part Test 1", description: "Synonyms · Antonyms · Grammar · Idioms · 30 Q",
    password: "eng001", duration: 1800, totalMarks: 30,
    sections: { "English": 30 },
    questionsFile: "questions/eng_part1.js", live: true
  },
  {
    id: "eng_part2", subject: "english",
    title: "English Part Test 2", description: "GSSC Police Constable · 30 Q",
    password: "eng002", duration: 1800, totalMarks: 30,
    sections: { "English": 30 },
    questionsFile: "questions/eng_part2.js", live: true
  },
  {
    id: "eng_part3", subject: "english",
    title: "English Part Test 3", description: "GSSC Police Constable · 30 Q",
    password: "eng003", duration: 1800, totalMarks: 30,
    sections: { "English": 30 },
    questionsFile: "questions/eng_part3.js", live: true
  },
  {
    id: "eng_part4", subject: "english",
    title: "English Part Test 4", description: "GSSC Police Constable · 30 Q",
    password: "eng004", duration: 1800, totalMarks: 30,
    sections: { "English": 30 },
    questionsFile: "questions/eng_part2.js", live: false
  },

  // ── MATHS ──
  {
    id: "math_dq1", subject: "maths",
    title: "Maths Daily Quiz 1", description: "Mixed Topics · 15 Q",
    password: "mdq001", duration: 900, totalMarks: 15,
    sections: { "Maths": 15 },
    questionsFile: "questions/math_dq1.js", live: true
  },
  {
    id: "math_part1", subject: "maths",
    title: "Maths Part Test 1", description: "Profit Loss · Time Work · Algebra · 10 Q",
    password: "mat001", duration: 600, totalMarks: 10,
    sections: { "Maths": 10 },
    questionsFile: "questions/math_part1.js", live: true
  },
  {
    id: "math_part2", subject: "maths",
    title: "Maths Part Test 2", description: "Profit Loss · SI · LCM · Pipes · 10 Q",
    password: "mat002", duration: 600, totalMarks: 10,
    sections: { "Maths": 10 },
    questionsFile: "questions/math_part2.js", live: true
  },
  {
    id: "math_part3", subject: "maths",
    title: "Maths Part Test 3", description: "GSSC Police Constable · 10 Q",
    password: "mat003", duration: 600, totalMarks: 10,
    sections: { "Maths": 10 },
    questionsFile: "questions/math_part3.js", live: true
  },
  {
    id: "math_part4", subject: "maths",
    title: "Maths Part Test 4", description: "GSSC Police Constable Difficult · 10 Q",
    password: "mat004", duration: 600, totalMarks: 10,
    sections: { "Maths": 10 },
    questionsFile: "questions/math_part4.js", live: true
  },
  {
    id: "math_part5", subject: "maths",
    title: "Maths Part Test 5", description: "GSSC Police Constable Moderate · 10 Q",
    password: "mat005", duration: 600, totalMarks: 10,
    sections: { "Maths": 10 },
    questionsFile: "questions/math_part5.js", live: true
  },
  {
    id: "math_part6", subject: "maths",
    title: "Maths Part Test 6", description: "Maths Advance · 20 Q",
    password: "mat006", duration: 1200, totalMarks: 20,
    sections: { "Maths": 20 },
    questionsFile: "questions/math_part6.js", live: true
  },
  {
    id: "math_part7", subject: "maths",
    title: "Maths Part Test 7", description: "Maths Basic · 10 Q",
    password: "mat007", duration: 600, totalMarks: 10,
    sections: { "Maths": 10 },
    questionsFile: "questions/math_part7.js", live: false
  },

  // ── REASONING ──
  {
    id: "reason_part1", subject: "reasoning",
    title: "Reasoning Part Test 1", description: "GSSC Police Constable · 10 Q",
    password: "rea001", duration: 600, totalMarks: 10,
    sections: { "Reasoning": 10 },
    questionsFile: "questions/reason_part1.js", live: true
  },
  {
    id: "reason_part2", subject: "reasoning",
    title: "Reasoning Part Test 2", description: "GSSC Part Test · 10 Q",
    password: "rea002", duration: 600, totalMarks: 10,
    sections: { "Reasoning": 10 },
    questionsFile: "questions/reason_part2.js", live: true
  },
  {
    id: "reason_part3", subject: "reasoning",
    title: "Reasoning Part Test 3", description: "GSSC Part Test · 20 Q",
    password: "rea003", duration: 1800, totalMarks: 20,
    sections: { "Reasoning": 20 },
    questionsFile: "questions/reason_part3.js", live: false
  },

  // ── KONKANI ──
  {
    id: "kon_part1", subject: "konkani",
    title: "Konkani Part Test 1", description: "Grammar & Comprehension · 20 Q",
    password: "kon001", duration: 1800, totalMarks: 20,
    sections: { "Konkani": 20 },
    questionsFile: "questions/kon_part1.js", live: false
  },
  {
    id: "kon_part2", subject: "konkani",
    title: "Konkani Part Test 2", description: "Vocabulary & Usage · 20 Q",
    password: "kon002", duration: 1800, totalMarks: 20,
    sections: { "Konkani": 20 },
    questionsFile: "questions/kon_part2.js", live: false
  }
];

// ──────────────────────────────────────────────────────────
// 4. PDF RESOURCES
// ──────────────────────────────────────────────────────────
var PDF_RESOURCES = [
  {
    category: "books",
    title:    "GOA SSC English Reference Book",
    subject:  "General",
    date:     "2025-05-14",
    url:      "https://drive.google.com/file/d/1CL9lbCk5z8_kydKrgNv8fmFr4qI2SJdo/view"
  },
  {
    category: "books",
    title:    "GOA SSC Maths Reference Book",
    subject:  "General",
    date:     "2025-05-14",
    url:      "https://drive.google.com/file/d/1lszCjggWuqbN4K11O9evJXyGmJ3P2TBE/view"
  }
];

// ──────────────────────────────────────────────────────────
// 5. DAILY QUESTION BANK
// ──────────────────────────────────────────────────────────
var QUESTION_BANK = [
  {
    date:    "2025-05-14",
    label:   "Today",
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
    ]
  }
];

// ──────────────────────────────────────────────────────────
// 6. TOPIC TESTS  (topic-wise drill tests)
// ──────────────────────────────────────────────────────────
var TOPIC_TESTS = [

  // ── MATHS TOPICS ──
  { id:"topic_pl",  subject:"maths", topic:"Profit & Loss",
    title:"Profit & Loss", description:"10 topic-focused questions",
    password:"tpl001", duration:600, totalMarks:10,
    sections:{"Maths":10}, questionsFile:"questions/topic_profit_loss.js", live:true },
  { id:"topic_si",  subject:"maths", topic:"Simple & Compound Interest",
    title:"SI & CI", description:"10 topic-focused questions",
    password:"tsi001", duration:600, totalMarks:10,
    sections:{"Maths":10}, questionsFile:"questions/topic_si_ci.js", live:true },
  { id:"topic_sdt", subject:"maths", topic:"Speed, Distance & Time",
    title:"Speed, Distance & Time", description:"10 topic-focused questions",
    password:"tsdt01", duration:600, totalMarks:10,
    sections:{"Maths":10}, questionsFile:"questions/topic_speed_distance.js", live:true },
  { id:"topic_tw",  subject:"maths", topic:"Time, Work & Pipes",
    title:"Time, Work & Pipes", description:"10 topic-focused questions",
    password:"ttw001", duration:600, totalMarks:10,
    sections:{"Maths":10}, questionsFile:"questions/topic_time_work.js", live:true },
  { id:"topic_pct", subject:"maths", topic:"Percentages",
    title:"Percentages", description:"10 topic-focused questions",
    password:"tpct01", duration:600, totalMarks:10,
    sections:{"Maths":10}, questionsFile:"questions/topic_percentages.js", live:true },
  { id:"topic_avg", subject:"maths", topic:"Averages",
    title:"Averages", description:"10 topic-focused questions",
    password:"tavg01", duration:600, totalMarks:10,
    sections:{"Maths":10}, questionsFile:"questions/topic_averages.js", live:true },
  { id:"topic_rp",  subject:"maths", topic:"Ratio & Proportion",
    title:"Ratio & Proportion", description:"10 topic-focused questions",
    password:"trp001", duration:600, totalMarks:10,
    sections:{"Maths":10}, questionsFile:"questions/topic_ratio_proportion.js", live:true },
  { id:"topic_ns",  subject:"maths", topic:"Number System & LCM/HCF",
    title:"Number System & LCM/HCF", description:"10 topic-focused questions",
    password:"tns001", duration:600, totalMarks:10,
    sections:{"Maths":10}, questionsFile:"questions/topic_number_system.js", live:true },
  { id:"topic_men", subject:"maths", topic:"Mensuration",
    title:"Mensuration", description:"10 topic-focused questions",
    password:"tmen01", duration:600, totalMarks:10,
    sections:{"Maths":10}, questionsFile:"questions/topic_mensuration.js", live:true },

  // ── ENGLISH TOPICS ──
  { id:"topic_ten", subject:"english", topic:"Tenses",
    title:"Tenses", description:"15 topic-focused questions",
    password:"tten01", duration:900, totalMarks:15,
    sections:{"English":15}, questionsFile:"questions/topic_tenses.js", live:true },
  { id:"topic_ap",  subject:"english", topic:"Articles & Prepositions",
    title:"Articles & Prepositions", description:"15 topic-focused questions",
    password:"tap001", duration:900, totalMarks:15,
    sections:{"English":15}, questionsFile:"questions/topic_articles_prepositions.js", live:true },
  { id:"topic_sa",  subject:"english", topic:"Synonyms & Antonyms",
    title:"Synonyms & Antonyms", description:"15 topic-focused questions",
    password:"tsa001", duration:900, totalMarks:15,
    sections:{"English":15}, questionsFile:"questions/topic_synonyms_antonyms.js", live:true },
  { id:"topic_ed",  subject:"english", topic:"Error Detection",
    title:"Error Detection", description:"15 topic-focused questions",
    password:"ted001", duration:900, totalMarks:15,
    sections:{"English":15}, questionsFile:"questions/topic_error_detection.js", live:true },
  { id:"topic_fb",  subject:"english", topic:"Fill in the Blanks",
    title:"Fill in the Blanks", description:"15 topic-focused questions",
    password:"tfb001", duration:900, totalMarks:15,
    sections:{"English":15}, questionsFile:"questions/topic_fill_blanks.js", live:true },
  { id:"topic_ip",  subject:"english", topic:"Idioms & Phrases",
    title:"Idioms & Phrases", description:"15 topic-focused questions",
    password:"tip001", duration:900, totalMarks:15,
    sections:{"English":15}, questionsFile:"questions/topic_idioms_phrases.js", live:true },
  { id:"topic_ows", subject:"english", topic:"One Word Substitution",
    title:"One Word Substitution", description:"15 topic-focused questions",
    password:"tows01", duration:900, totalMarks:15,
    sections:{"English":15}, questionsFile:"questions/topic_one_word_substitution.js", live:true },
  { id:"topic_rc",  subject:"english", topic:"Reading Comprehension",
    title:"Reading Comprehension", description:"3 passages · 15 questions",
    password:"trc001", duration:1200, totalMarks:15,
    sections:{"English":15}, questionsFile:"questions/topic_reading_comprehension.js", live:true },

  // ── REASONING TOPICS ──
  { id:"topic_sp",  subject:"reasoning", topic:"Series & Patterns",
    title:"Series & Patterns", description:"10 topic-focused questions",
    password:"tsp001", duration:600, totalMarks:10,
    sections:{"Reasoning":10}, questionsFile:"questions/topic_series_patterns.js", live:true },
  { id:"topic_br",  subject:"reasoning", topic:"Blood Relations",
    title:"Blood Relations", description:"10 topic-focused questions",
    password:"tbr001", duration:600, totalMarks:10,
    sections:{"Reasoning":10}, questionsFile:"questions/topic_blood_relations.js", live:true },
  { id:"topic_ds",  subject:"reasoning", topic:"Direction Sense",
    title:"Direction Sense", description:"10 topic-focused questions",
    password:"tds001", duration:600, totalMarks:10,
    sections:{"Reasoning":10}, questionsFile:"questions/topic_direction_sense.js", live:true },
  { id:"topic_cd",  subject:"reasoning", topic:"Coding & Decoding",
    title:"Coding & Decoding", description:"10 topic-focused questions",
    password:"tcd001", duration:600, totalMarks:10,
    sections:{"Reasoning":10}, questionsFile:"questions/topic_coding_decoding.js", live:true },
  { id:"topic_an",  subject:"reasoning", topic:"Analogy",
    title:"Analogy", description:"10 topic-focused questions",
    password:"tan001", duration:600, totalMarks:10,
    sections:{"Reasoning":10}, questionsFile:"questions/topic_analogy.js", live:true },
  { id:"topic_syl", subject:"reasoning", topic:"Syllogism",
    title:"Syllogism", description:"10 topic-focused questions",
    password:"tsyl01", duration:600, totalMarks:10,
    sections:{"Reasoning":10}, questionsFile:"questions/topic_syllogism.js", live:true },
  { id:"topic_ra",  subject:"reasoning", topic:"Ranking & Arrangement",
    title:"Ranking & Arrangement", description:"10 topic-focused questions",
    password:"tra001", duration:600, totalMarks:10,
    sections:{"Reasoning":10}, questionsFile:"questions/topic_ranking_arrangement.js", live:true },
  { id:"topic_mo",  subject:"reasoning", topic:"Mathematical Operations",
    title:"Mathematical Operations", description:"10 topic-focused questions",
    password:"tmo001", duration:600, totalMarks:10,
    sections:{"Reasoning":10}, questionsFile:"questions/topic_mathematical_operations.js", live:true }
];

// ──────────────────────────────────────────────────────────
// 8. SCHOLARSHIP & OLYMPIAD TESTS
//    stdClass: "10" | "9" | "8" | "7" | "6"
//    subject: used for grouping within class tab
// ──────────────────────────────────────────────────────────
var SCHOLARSHIP_TESTS = [
  {
    id: "scholar_cls10_apt1", stdClass: "10", subject: "Aptitude",
    title: "Class 10 Aptitude Test 1",
    description: "Number System · Algebra · Geometry · Statistics · Logic · 50 Questions",
    password: "cls10apt1", duration: 3000, totalMarks: 50,
    sections: { "Aptitude": 50 },
    questionsFile: "questions/scholar_cls10_apt1.js", live: true
  },
  {
    id: "scholar_cls9_apt1", stdClass: "9", subject: "Aptitude",
    title: "Class 9 Aptitude Test 1",
    description: "Number System · Polynomials · Geometry · Statistics · 50 Questions",
    password: "cls9apt1", duration: 3000, totalMarks: 50,
    sections: { "Aptitude": 50 },
    questionsFile: "questions/scholar_cls9_apt1.js", live: true
  },
  {
    id: "scholar_cls8_apt1", stdClass: "8", subject: "Aptitude",
    title: "Class 8 Aptitude Test 1",
    description: "Rational Numbers · Algebra · Mensuration · Proportion · 50 Questions",
    password: "cls8apt1", duration: 3000, totalMarks: 50,
    sections: { "Aptitude": 50 },
    questionsFile: "questions/scholar_cls8_apt1.js", live: true
  },
  {
    id: "scholar_cls7_apt1", stdClass: "7", subject: "Aptitude",
    title: "Class 7 Aptitude Test 1",
    description: "Integers · Fractions · Equations · Geometry · Percentage · 50 Questions",
    password: "cls7apt1", duration: 3000, totalMarks: 50,
    sections: { "Aptitude": 50 },
    questionsFile: "questions/scholar_cls7_apt1.js", live: true
  }
];
// ──────────────────────────────────────────────────────────
var SPECIAL_TESTS = [
  {
    id:          "sci10_cbse",
    title:       "Std 10 Science — CBSE Special Test 1",
    description: "100 Questions · Chemistry · Biology · Physics · Environment",
    password:    "sci001",
    duration:    5400,
    totalMarks:  100,
    sections:    { "Chemistry": 31, "Biology": 31, "Physics": 31, "Environment": 7 },
    questionsFile: "questions/science10_cbse.js",
    live:        true
  },
  {
    id:          "sci10_cbse_pyq",
    title:       "Std 10 Science — CBSE PYQ Test 2",
    description: "100 PYQ Questions from CBSE Board 2019–2025 · Chemistry · Biology · Physics · Environment",
    password:    "sci002",
    duration:    5400,
    totalMarks:  100,
    sections:    { "Chemistry": 31, "Biology": 31, "Physics": 31, "Environment": 7 },
    questionsFile: "questions/science10_cbse_pyq.js",
    live:        true
  }
];

// ── ALL_TESTS: used by test.js to find every test by ID ──
// FULL_TESTS itself stays as fulltest1-7 only (for homepage display)
// test.js checks window.ALL_TESTS first, then falls back to FULL_TESTS
var ALL_TESTS = (GSSC_TESTS       || [])
  .concat(GPSC_TESTS         || [])
  .concat(DAILY_TESTS        || [])
  .concat(MONTHLY_TESTS      || [])
  .concat(PYQ_TESTS          || [])
  .concat(PART_TESTS         || [])
  .concat(TOPIC_TESTS        || [])
  .concat(SPECIAL_TESTS      || [])
  .concat(SCHOLARSHIP_TESTS  || []);
