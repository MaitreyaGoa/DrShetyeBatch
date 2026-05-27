// ============================================================
// Dr. Shetye Academic Program — Topic: Ratio & Proportion
// Subject: Maths | 10 Questions | All answers verified
// ============================================================
var questions = [
  {
    id: 6201, section: "Maths",
    text: "Two numbers are in the ratio 3:5 and their sum is 160. Find the larger number.",
    options: ["A) 90", "B) 95", "C) 100", "D) 105"],
    answer: "C",
    explanation: "Larger = (5/8) × 160 = 100."
  },
  {
    id: 6202, section: "Maths",
    text: "If a:b = 3:4 and b:c = 5:6, find a:b:c.",
    options: ["A) 15:20:24", "B) 12:20:24", "C) 15:20:18", "D) 9:12:16"],
    answer: "A",
    explanation: "a:b:c = (3×5):(4×5):(4×6) = 15:20:24."
  },
  {
    id: 6203, section: "Maths",
    text: "Find the mean proportional between 16 and 25.",
    options: ["A) 18", "B) 19", "C) 20", "D) 22"],
    answer: "C",
    explanation: "Mean proportional = √(16 × 25) = √400 = 20."
  },
  {
    id: 6204, section: "Maths",
    text: "₹540 is divided in the ratio 2:3:4. Find the largest share.",
    options: ["A) 220", "B) 230", "C) 240", "D) 250"],
    answer: "C",
    explanation: "Total parts = 9. Largest = (4/9) × 540 = ₹240."
  },
  {
    id: 6205, section: "Maths",
    text: "Find the fourth proportional to 3, 4, and 9.",
    options: ["A) 10", "B) 11", "C) 12", "D) 13"],
    answer: "C",
    explanation: "3:4 = 9:x → x = (4 × 9)/3 = 12."
  },
  {
    id: 6206, section: "Maths",
    text: "The salaries of A and B are in the ratio 3:5. When each gets a raise of ₹2,000, the new ratio becomes 7:11. Find the original salary of A.",
    options: ["A) ₹10,000", "B) ₹11,000", "C) ₹12,000", "D) ₹14,000"],
    answer: "C",
    explanation: "(3x+2000)/(5x+2000) = 7/11 → 33x+22000 = 35x+14000 → 2x = 8000 → x = 4000. A's salary = 3×4000 = ₹12,000."
  },
  {
    id: 6207, section: "Maths",
    text: "Find the compound ratio of 2:3, 4:5, and 6:7.",
    options: ["A) 48:100", "B) 48:105", "C) 24:35", "D) 48:110"],
    answer: "B",
    explanation: "Compound ratio = (2×4×6):(3×5×7) = 48:105."
  },
  {
    id: 6208, section: "Maths",
    text: "If a/3 = b/4 = c/5, find a:b:c.",
    options: ["A) 2:3:4", "B) 3:4:5", "C) 4:5:6", "D) 5:6:7"],
    answer: "B",
    explanation: "If a/3 = b/4 = c/5 = k, then a=3k, b=4k, c=5k. So a:b:c = 3:4:5."
  },
  {
    id: 6209, section: "Maths",
    text: "Two numbers are in the ratio 5:3 and their difference is 50. Find the larger number.",
    options: ["A) 115", "B) 120", "C) 125", "D) 130"],
    answer: "C",
    explanation: "5x − 3x = 2x = 50 → x = 25. Larger number = 5 × 25 = 125."
  },
  {
    id: 6210, section: "Maths",
    text: "Two numbers are in the ratio 7:5 and their LCM is 140. Find their sum.",
    options: ["A) 44", "B) 46", "C) 48", "D) 50"],
    answer: "C",
    explanation: "Let numbers be 7x and 5x. LCM(7x, 5x) = 35x = 140 → x = 4. Numbers = 28 and 20. Sum = 48."
  }
];
var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
