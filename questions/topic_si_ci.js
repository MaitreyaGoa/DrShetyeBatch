// ============================================================
// Dr. Shetye Academic Program — Topic Test: Simple & Compound Interest
// Subject: Maths | 10 Questions | All answers verified
// ============================================================

var questions = [

  {
    id: 3101, section: "Maths",
    text: "Find the Simple Interest on ₹5,000 at 8% per annum for 3 years.",
    options: ["A) ₹1,000", "B) ₹1,100", "C) ₹1,200", "D) ₹1,300"],
    answer: "C",
    explanation: "SI = P×R×T/100 = 5000×8×3/100 = ₹1,200."
  },

  {
    id: 3102, section: "Maths",
    text: "A sum of money earns SI of ₹1,200 at 10% per annum in 4 years. Find the principal.",
    options: ["A) ₹2,500", "B) ₹3,000", "C) ₹3,500", "D) ₹4,000"],
    answer: "B",
    explanation: "P = SI×100/(R×T) = 1200×100/(10×4) = ₹3,000."
  },

  {
    id: 3103, section: "Maths",
    text: "Find the Compound Interest on ₹10,000 at 10% per annum for 2 years (compounded annually).",
    options: ["A) ₹1,900", "B) ₹2,000", "C) ₹2,100", "D) ₹2,200"],
    answer: "C",
    explanation: "Amount = 10000×(1.10)² = 12,100. CI = 12100−10000 = ₹2,100."
  },

  {
    id: 3104, section: "Maths",
    text: "At what rate of Simple Interest will a sum double itself in 8 years?",
    options: ["A) 10%", "B) 11%", "C) 12%", "D) 12.5%"],
    answer: "D",
    explanation: "For doubling: SI = P. P = P×R×8/100 → R = 100/8 = 12.5% per annum."
  },

  {
    id: 3105, section: "Maths",
    text: "Find the difference between CI and SI on ₹8,000 at 5% per annum for 2 years.",
    options: ["A) ₹15", "B) ₹18", "C) ₹20", "D) ₹25"],
    answer: "C",
    explanation: "Difference = P×R²/100² = 8000×25/10000 = ₹20."
  },

  {
    id: 3106, section: "Maths",
    text: "Calculate the Simple Interest on ₹15,000 at 12% per annum for 3 years.",
    options: ["A) ₹4,800", "B) ₹5,000", "C) ₹5,200", "D) ₹5,400"],
    answer: "D",
    explanation: "SI = 15000×12×3/100 = ₹5,400."
  },

  {
    id: 3107, section: "Maths",
    text: "The compound interest on a sum for 2 years at 10% per annum is ₹1,050. Find the principal.",
    options: ["A) ₹4,500", "B) ₹5,000", "C) ₹5,500", "D) ₹6,000"],
    answer: "B",
    explanation: "CI = P×((1.1)²−1) = P×0.21 = 1050 → P = ₹5,000."
  },

  {
    id: 3108, section: "Maths",
    text: "Find the Compound Interest on ₹20,000 at 15% per annum for 2 years.",
    options: ["A) ₹6,000", "B) ₹6,250", "C) ₹6,450", "D) ₹6,500"],
    answer: "C",
    explanation: "Amount = 20000×(1.15)² = 26,450. CI = 26450−20000 = ₹6,450."
  },

  {
    id: 3109, section: "Maths",
    text: "A sum at Simple Interest amounts to ₹6,500 in 3 years and ₹7,000 in 4 years. Find the rate of interest per annum.",
    options: ["A) 8%", "B) 10%", "C) 12%", "D) 15%"],
    answer: "B",
    explanation: "SI per year = 7000−6500 = ₹500. Principal = 6500−(3×500) = ₹5,000. Rate = 500×100/5000 = 10% per annum."
  },

  {
    id: 3110, section: "Maths",
    text: "₹6,000 is invested at Simple Interest. After 5 years the interest earned is ₹2,400. Find the rate of interest.",
    options: ["A) 6%", "B) 7%", "C) 8%", "D) 9%"],
    answer: "C",
    explanation: "R = SI×100/(P×T) = 2400×100/(6000×5) = 8% per annum."
  }

];

var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
