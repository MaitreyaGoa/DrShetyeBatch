// ============================================================
// Dr. Shetye Academic Program — Topic: Mathematical Operations
// Subject: Reasoning | 10 Questions | All answers verified
// Rule for Q1-Q8: '+' means '×', '-' means '+', '×' means '-', '÷' means '÷'
// ============================================================
var questions = [
  {
    id: 8401, section: "Reasoning",
    text: "If '+' means '×', '−' means '+', '×' means '−', and '÷' means '÷', find: 8 + 4 − 12 × 24 ÷ 6",
    options: ["A) 36", "B) 38", "C) 40", "D) 42"],
    answer: "C",
    explanation: "Substituting: 8×4+12−24÷6. BODMAS: 8×4=32, 24÷6=4. → 32+12−4 = 40."
  },
  {
    id: 8402, section: "Reasoning",
    text: "Using same rules (+→×, −→+, ×→−, ÷→÷), find: 6 + 3 − 2 × 10 ÷ 5",
    options: ["A) 14", "B) 16", "C) 18", "D) 20"],
    answer: "C",
    explanation: "Substituting: 6×3+2−10÷5. BODMAS: 6×3=18, 10÷5=2. → 18+2−2 = 18."
  },
  {
    id: 8403, section: "Reasoning",
    text: "Using same rules (+→×, −→+, ×→−, ÷→÷), find: 5 + 4 − 3 × 18 ÷ 9",
    options: ["A) 17", "B) 19", "C) 21", "D) 23"],
    answer: "C",
    explanation: "Substituting: 5×4+3−18÷9. BODMAS: 5×4=20, 18÷9=2. → 20+3−2 = 21."
  },
  {
    id: 8404, section: "Reasoning",
    text: "Using same rules (+→×, −→+, ×→−, ÷→÷), find: 7 + 2 − 5 × 20 ÷ 4",
    options: ["A) 12", "B) 13", "C) 14", "D) 15"],
    answer: "C",
    explanation: "Substituting: 7×2+5−20÷4. BODMAS: 7×2=14, 20÷4=5. → 14+5−5 = 14."
  },
  {
    id: 8405, section: "Reasoning",
    text: "Using same rules (+→×, −→+, ×→−, ÷→÷), find: 9 + 3 − 4 × 12 ÷ 3",
    options: ["A) 25", "B) 26", "C) 27", "D) 28"],
    answer: "C",
    explanation: "Substituting: 9×3+4−12÷3. BODMAS: 9×3=27, 12÷3=4. → 27+4−4 = 27."
  },
  {
    id: 8406, section: "Reasoning",
    text: "Using same rules (+→×, −→+, ×→−, ÷→÷), find: 4 + 5 − 6 × 30 ÷ 6",
    options: ["A) 19", "B) 20", "C) 21", "D) 22"],
    answer: "C",
    explanation: "Substituting: 4×5+6−30÷6. BODMAS: 4×5=20, 30÷6=5. → 20+6−5 = 21."
  },
  {
    id: 8407, section: "Reasoning",
    text: "Using same rules (+→×, −→+, ×→−, ÷→÷), find: 3 + 6 − 1 × 15 ÷ 5",
    options: ["A) 14", "B) 15", "C) 16", "D) 17"],
    answer: "C",
    explanation: "Substituting: 3×6+1−15÷5. BODMAS: 3×6=18, 15÷5=3. → 18+1−3 = 16."
  },
  {
    id: 8408, section: "Reasoning",
    text: "Using same rules (+→×, −→+, ×→−, ÷→÷), find: 10 + 2 − 3 × 24 ÷ 8",
    options: ["A) 18", "B) 19", "C) 20", "D) 21"],
    answer: "C",
    explanation: "Substituting: 10×2+3−24÷8. BODMAS: 10×2=20, 24÷8=3. → 20+3−3 = 20."
  },
  {
    id: 8409, section: "Reasoning",
    text: "If '×' means '+', '+' means '−', '−' means '×', and '÷' means '÷', find: 12 × 3 + 4 − 5 ÷ 5",
    options: ["A) 9", "B) 10", "C) 11", "D) 12"],
    answer: "C",
    explanation: "Substituting: 12+3−4×5÷5. BODMAS: 4×5=20, 20÷5=4. → 12+3−4 = 11."
  },
  {
    id: 8410, section: "Reasoning",
    text: "If '+' means '×', '−' means '+', '×' means '−', '÷' means '÷', find: 2 + 3 − 1 × 12 ÷ 4",
    options: ["A) 2", "B) 3", "C) 4", "D) 5"],
    answer: "C",
    explanation: "Substituting: 2×3+1−12÷4. BODMAS: 2×3=6, 12÷4=3. → 6+1−3 = 4."
  }
];
var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
