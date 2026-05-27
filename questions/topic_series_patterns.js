// ============================================================
// Dr. Shetye Academic Program — Topic Test: Series & Patterns
// Subject: Reasoning | 10 Questions
// ============================================================

var questions = [

  {
    id: 5001, section: "Reasoning",
    text: "Find the next number in the series: 2, 6, 18, 54, ___",
    options: ["A) 108", "B) 144", "C) 162", "D) 216"],
    answer: "C",
    explanation: "Each term is multiplied by 3. 54×3 = 162."
  },

  {
    id: 5002, section: "Reasoning",
    text: "Find the next term: B, E, H, K, ___",
    options: ["A) M", "B) N", "C) O", "D) P"],
    answer: "B",
    explanation: "Gap between each letter = 3. B+3=E, E+3=H, H+3=K, K+3=N."
  },

  {
    id: 5003, section: "Reasoning",
    text: "Find the missing number: 3, 8, 15, 24, 35, ___",
    options: ["A) 46", "B) 48", "C) 50", "D) 52"],
    answer: "B",
    explanation: "Differences: 5,7,9,11 (+2 each). Next difference=13. 35+13=48."
  },

  {
    id: 5004, section: "Reasoning",
    text: "Find the odd one out: 4, 9, 16, 25, 35, 49",
    options: ["A) 9", "B) 25", "C) 35", "D) 49"],
    answer: "C",
    explanation: "All others are perfect squares (2²,3²,4²,5²,7²). 35 is not a perfect square."
  },

  {
    id: 5005, section: "Reasoning",
    text: "Complete the series: 1, 1, 2, 3, 5, 8, ___",
    options: ["A) 11", "B) 12", "C) 13", "D) 14"],
    answer: "C",
    explanation: "Fibonacci series — each term = sum of previous two. 5+8=13."
  },

  {
    id: 5006, section: "Reasoning",
    text: "Find the missing term: AZ, BY, CX, DW, ___",
    options: ["A) EV", "B) EU", "C) FV", "D) EW"],
    answer: "A",
    explanation: "First letter goes forward (A,B,C,D,E), second letter goes backward (Z,Y,X,W,V). Next = EV."
  },

  {
    id: 5007, section: "Reasoning",
    text: "Find the next number: 5, 11, 23, 47, 95, ___",
    options: ["A) 181", "B) 189", "C) 191", "D) 193"],
    answer: "C",
    explanation: "Pattern: ×2+1 each time. 5×2+1=11, 11×2+1=23, 23×2+1=47, 47×2+1=95, 95×2+1=191."
  },

  {
    id: 5008, section: "Reasoning",
    text: "What comes next: 2, 5, 10, 17, 26, ___",
    options: ["A) 35", "B) 36", "C) 37", "D) 38"],
    answer: "C",
    explanation: "Differences: 3,5,7,9 (+2 each). Next difference=11. 26+11=37."
  },

  {
    id: 5009, section: "Reasoning",
    text: "Find the missing number in: 6, 12, 21, 33, 48, ___",
    options: ["A) 60", "B) 63", "C) 65", "D) 66"],
    answer: "D",
    explanation: "Differences: 6,9,12,15 (+3 each). Next difference=18. 48+18=66."
  },

  {
    id: 5010, section: "Reasoning",
    text: "Complete: QAR, RBT, SCW, TDZ, ___",
    options: ["A) UEC", "B) UED", "C) VEC", "D) UFD"],
    answer: "A",
    explanation: "1st letter: Q,R,S,T → U (+1 each). 2nd letter: A,B,C,D → E (+1). 3rd letter: R,T,W,Z → +2,+3,+3... gaps 2,3,3 → next +3 = C. Answer: UEC."
  }

];

var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
