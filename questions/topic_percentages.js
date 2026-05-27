// ============================================================
// Dr. Shetye Academic Program — Topic: Percentages
// Subject: Maths | 10 Questions | All answers verified
// ============================================================
var questions = [
  {
    id: 6001, section: "Maths",
    text: "Find 35% of 480.",
    options: ["A) 158", "B) 162", "C) 168", "D) 172"],
    answer: "C",
    explanation: "35% of 480 = (35/100) × 480 = 168."
  },
  {
    id: 6002, section: "Maths",
    text: "75 is what percentage of 300?",
    options: ["A) 20%", "B) 25%", "C) 30%", "D) 35%"],
    answer: "B",
    explanation: "(75/300) × 100 = 25%."
  },
  {
    id: 6003, section: "Maths",
    text: "A shopkeeper increases the price of an item from ₹650 by 20%. What is the new price?",
    options: ["A) ₹760", "B) ₹770", "C) ₹780", "D) ₹790"],
    answer: "C",
    explanation: "New price = 650 × 1.20 = ₹780."
  },
  {
    id: 6004, section: "Maths",
    text: "A TV priced at ₹800 is sold after a 15% discount. What is the selling price?",
    options: ["A) ₹660", "B) ₹670", "C) ₹675", "D) ₹680"],
    answer: "D",
    explanation: "SP = 800 × 0.85 = ₹680."
  },
  {
    id: 6005, section: "Maths",
    text: "If 60% of a number is 180, what is the number?",
    options: ["A) 280", "B) 290", "C) 300", "D) 320"],
    answer: "C",
    explanation: "Number = 180 ÷ 0.60 = 300."
  },
  {
    id: 6006, section: "Maths",
    text: "A price is first increased by 25% and then decreased by 25%. What is the net percentage change?",
    options: ["A) 0% (no change)", "B) 5% gain", "C) 6.25% loss", "D) 3.5% loss"],
    answer: "C",
    explanation: "Net = 1.25 × 0.75 = 0.9375 → loss of 6.25%."
  },
  {
    id: 6007, section: "Maths",
    text: "A's salary is 20% more than B's salary. By what percentage is B's salary less than A's?",
    options: ["A) 15%", "B) 16.67%", "C) 18%", "D) 20%"],
    answer: "B",
    explanation: "If B = 100, A = 120. B is less than A by (20/120) × 100 = 16.67%."
  },
  {
    id: 6008, section: "Maths",
    text: "What is 40% of 60% of 500?",
    options: ["A) 100", "B) 110", "C) 120", "D) 130"],
    answer: "C",
    explanation: "60% of 500 = 300. 40% of 300 = 120."
  },
  {
    id: 6009, section: "Maths",
    text: "A town's population is 50,000. It increases by 10% in the first year and decreases by 10% in the second year. What is the final population?",
    options: ["A) 49,000", "B) 49,500", "C) 50,000", "D) 50,500"],
    answer: "B",
    explanation: "After yr1 = 50000 × 1.10 = 55000. After yr2 = 55000 × 0.90 = 49,500."
  },
  {
    id: 6010, section: "Maths",
    text: "A number when increased by 30% becomes 390. What is the original number?",
    options: ["A) 280", "B) 290", "C) 300", "D) 310"],
    answer: "C",
    explanation: "Original = 390 ÷ 1.30 = 300."
  }
];
var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
