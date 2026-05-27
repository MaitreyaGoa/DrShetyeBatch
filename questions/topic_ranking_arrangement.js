// ============================================================
// Dr. Shetye Academic Program — Topic: Ranking & Arrangement
// Subject: Reasoning | 10 Questions | All answers verified
// ============================================================
var questions = [
  {
    id: 8301, section: "Reasoning",
    text: "Amit is 8th from the top and 15th from the bottom in a class. How many students are there in the class?",
    options: ["A) 20", "B) 22", "C) 24", "D) 26"],
    answer: "B",
    explanation: "Total students = rank from top + rank from bottom − 1 = 8 + 15 − 1 = 22."
  },
  {
    id: 8302, section: "Reasoning",
    text: "In a row of 40 students, Priya is 12th from the left end. What is her position from the right end?",
    options: ["A) 27th", "B) 28th", "C) 29th", "D) 30th"],
    answer: "C",
    explanation: "Position from right = total − position from left + 1 = 40 − 12 + 1 = 29."
  },
  {
    id: 8303, section: "Reasoning",
    text: "Ravi is 5th from the top and 8th from the bottom of a list. How many names are in the list?",
    options: ["A) 10", "B) 11", "C) 12", "D) 13"],
    answer: "C",
    explanation: "Total = 5 + 8 − 1 = 12."
  },
  {
    id: 8304, section: "Reasoning",
    text: "In a class of 30, if Anita is ranked 8th from the top, what is her rank from the bottom?",
    options: ["A) 21st", "B) 22nd", "C) 23rd", "D) 24th"],
    answer: "C",
    explanation: "Rank from bottom = 30 − 8 + 1 = 23."
  },
  {
    id: 8305, section: "Reasoning",
    text: "In a row, Sita is 10th from the left and 20th from the right. How many people are in the row?",
    options: ["A) 27", "B) 28", "C) 29", "D) 30"],
    answer: "C",
    explanation: "Total = 10 + 20 − 1 = 29."
  },
  {
    id: 8306, section: "Reasoning",
    text: "Five people A, B, C, D, E are sitting in a row. A is to the left of B, B is to the right of C, D is to the right of E, and E is to the right of B. Who is sitting in the middle?",
    options: ["A) A", "B) B", "C) C", "D) E"],
    answer: "B",
    explanation: "C is left of B; A is left of B; B is left of E; E is left of D. Order: C/A ... B ... E ... D. With C-A-B-E-D or A-C-B-E-D, B is 3rd (middle of 5). Answer: B."
  },
  {
    id: 8307, section: "Reasoning",
    text: "In a queue, Mohan is ahead of Sohan by 5 places. Sohan is 8th from the end. The queue has 20 people. What is Mohan's position from the front?",
    options: ["A) 7th", "B) 8th", "C) 9th", "D) 10th"],
    answer: "B",
    explanation: "Sohan's position from front = 20 − 8 + 1 = 13th. Mohan is 5 places ahead → 13 − 5 = 8th from front."
  },
  {
    id: 8308, section: "Reasoning",
    text: "In a class, 20 students passed and 10 failed. Reena's rank among those who passed is 8th from the top. What is her overall rank in the class?",
    options: ["A) 8th", "B) 9th", "C) 10th", "D) Cannot be determined"],
    answer: "D",
    explanation: "We don't know whether the failed students are ranked above or below the passed students in the overall list. The answer cannot be determined."
  },
  {
    id: 8309, section: "Reasoning",
    text: "There are 50 students in a class. Karan is ranked 15th from the top. How many students are ranked below Karan?",
    options: ["A) 33", "B) 34", "C) 35", "D) 36"],
    answer: "C",
    explanation: "Students below Karan = total − rank from top = 50 − 15 = 35."
  },
  {
    id: 8310, section: "Reasoning",
    text: "Pooja is 3rd from the left in a row of girls and Neha is 5th from the right. They interchange positions, and now Pooja is 7th from the left. How many girls are in the row?",
    options: ["A) 9", "B) 10", "C) 11", "D) 12"],
    answer: "C",
    explanation: "After interchange, Pooja is at Neha's original position = 5th from right = 7th from left. Total = 7 + 5 − 1 = 11."
  }
];
var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
