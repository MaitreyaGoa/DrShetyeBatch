// ============================================================
// Dr. Shetye Academic Program — Topic: Number System & LCM/HCF
// Subject: Maths | 10 Questions | All answers verified
// ============================================================
var questions = [
  {
    id: 6301, section: "Maths",
    text: "Find the HCF of 72 and 108.",
    options: ["A) 12", "B) 18", "C) 36", "D) 54"],
    answer: "C",
    explanation: "72 = 2³×3². 108 = 2²×3³. HCF = 2²×3² = 4×9 = 36."
  },
  {
    id: 6302, section: "Maths",
    text: "Find the LCM of 12, 15, and 20.",
    options: ["A) 30", "B) 45", "C) 60", "D) 90"],
    answer: "C",
    explanation: "LCM(12,15,20): 12=2²×3, 15=3×5, 20=2²×5. LCM = 2²×3×5 = 60."
  },
  {
    id: 6303, section: "Maths",
    text: "What is the sum of all natural numbers from 1 to 100?",
    options: ["A) 4950", "B) 5000", "C) 5050", "D) 5100"],
    answer: "C",
    explanation: "Sum = n(n+1)/2 = 100×101/2 = 5050."
  },
  {
    id: 6304, section: "Maths",
    text: "The HCF of two numbers is 8 and their LCM is 48. If one number is 16, find the other.",
    options: ["A) 20", "B) 22", "C) 24", "D) 28"],
    answer: "C",
    explanation: "Other number = (HCF × LCM)/first = (8 × 48)/16 = 384/16 = 24."
  },
  {
    id: 6305, section: "Maths",
    text: "Find the largest 4-digit number exactly divisible by 12, 15, and 18.",
    options: ["A) 9720", "B) 9840", "C) 9900", "D) 9960"],
    answer: "C",
    explanation: "LCM(12,15,18) = 180. Largest 4-digit multiple = ⌊9999/180⌋×180 = 55×180 = 9900."
  },
  {
    id: 6306, section: "Maths",
    text: "Find the unit digit of 7³⁵.",
    options: ["A) 1", "B) 3", "C) 7", "D) 9"],
    answer: "B",
    explanation: "Unit digits of powers of 7 cycle as 7,9,3,1 (period 4). 35 ÷ 4 = remainder 3. Unit digit of 7³ = 3."
  },
  {
    id: 6307, section: "Maths",
    text: "Find the smallest number divisible by 4, 6, 8, 10, and 12.",
    options: ["A) 100", "B) 110", "C) 120", "D) 240"],
    answer: "C",
    explanation: "LCM(4,6,8,10,12) = LCM(8,10,12) = 120."
  },
  {
    id: 6308, section: "Maths",
    text: "What is the sum of all even numbers between 1 and 100 (inclusive)?",
    options: ["A) 2450", "B) 2500", "C) 2550", "D) 2600"],
    answer: "C",
    explanation: "Even numbers 2,4,...100. Sum = 2+4+...+100 = 2(1+2+...+50) = 2×1275 = 2550."
  },
  {
    id: 6309, section: "Maths",
    text: "What is the least number that must be added to 5765 to make it exactly divisible by 9?",
    options: ["A) 2", "B) 3", "C) 4", "D) 5"],
    answer: "C",
    explanation: "Sum of digits of 5765 = 5+7+6+5 = 23. 23 ÷ 9 gives remainder 5. Need to add 9−5 = 4."
  },
  {
    id: 6310, section: "Maths",
    text: "Three bells ring at intervals of 15, 20, and 30 minutes. If they ring together at 12:00 noon, when will they next ring together?",
    options: ["A) 12:30 PM", "B) 12:45 PM", "C) 1:00 PM", "D) 1:30 PM"],
    answer: "C",
    explanation: "LCM(15, 20, 30): 15=3×5, 20=2²×5, 30=2×3×5. LCM = 2²×3×5 = 60 minutes = 1 hour. Next ring = 12:00 + 1 hour = 1:00 PM."
  }
];
var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
