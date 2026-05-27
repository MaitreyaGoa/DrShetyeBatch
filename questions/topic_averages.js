// ============================================================
// Dr. Shetye Academic Program — Topic: Averages
// Subject: Maths | 10 Questions | All answers verified
// ============================================================
var questions = [
  {
    id: 6101, section: "Maths",
    text: "Find the average of all natural numbers from 1 to 20.",
    options: ["A) 9.5", "B) 10", "C) 10.5", "D) 11"],
    answer: "C",
    explanation: "Sum = 20×21/2 = 210. Average = 210/20 = 10.5."
  },
  {
    id: 6102, section: "Maths",
    text: "The average of 15 numbers is 40. When a 16th number is added, the average becomes 45. What is the 16th number?",
    options: ["A) 100", "B) 110", "C) 120", "D) 130"],
    answer: "C",
    explanation: "Sum of 15 = 600. Sum of 16 = 720. 16th number = 720 − 600 = 120."
  },
  {
    id: 6103, section: "Maths",
    text: "Find the average of first 50 natural numbers.",
    options: ["A) 24.5", "B) 25", "C) 25.5", "D) 26"],
    answer: "C",
    explanation: "Sum = 50×51/2 = 1275. Average = 1275/50 = 25.5."
  },
  {
    id: 6104, section: "Maths",
    text: "The average age of 5 people is 28 years. When 2 new people join, the average becomes 30. What is the average age of the 2 new people?",
    options: ["A) 32", "B) 34", "C) 35", "D) 36"],
    answer: "C",
    explanation: "Sum of 5 = 140. Sum of 7 = 210. Sum of 2 new = 70. Average = 70/2 = 35."
  },
  {
    id: 6105, section: "Maths",
    text: "A batsman's average after 40 innings is 40 runs. How many runs must he score in his 41st innings to raise his average to 41?",
    options: ["A) 79", "B) 80", "C) 81", "D) 82"],
    answer: "C",
    explanation: "Required total = 41 × 41 = 1681. Current total = 40 × 40 = 1600. Score needed = 1681 − 1600 = 81."
  },
  {
    id: 6106, section: "Maths",
    text: "The average of 5 consecutive odd numbers is 35. Find the largest number.",
    options: ["A) 37", "B) 38", "C) 39", "D) 41"],
    answer: "C",
    explanation: "Middle number = 35. The 5 consecutive odd numbers are 31, 33, 35, 37, 39. Largest = 39."
  },
  {
    id: 6107, section: "Maths",
    text: "The average temperature from Monday to Friday is 20°C, and from Monday to Thursday is 15°C. What is the temperature on Friday?",
    options: ["A) 35°C", "B) 38°C", "C) 40°C", "D) 42°C"],
    answer: "C",
    explanation: "Sum Mon–Fri = 100. Sum Mon–Thu = 60. Friday = 100 − 60 = 40°C."
  },
  {
    id: 6108, section: "Maths",
    text: "In a class of 30 students, the average marks are 60. The top 10 students average 70 and the bottom 10 average 50. What is the average of the middle 10?",
    options: ["A) 55", "B) 58", "C) 60", "D) 62"],
    answer: "C",
    explanation: "Total = 1800. Top 10 = 700. Bottom 10 = 500. Middle 10 sum = 600. Average = 60."
  },
  {
    id: 6109, section: "Maths",
    text: "The average of 3 numbers is 54. If two of the numbers are 48 and 60, find the third number.",
    options: ["A) 50", "B) 52", "C) 54", "D) 56"],
    answer: "C",
    explanation: "Sum of 3 = 54 × 3 = 162. Third = 162 − 48 − 60 = 54."
  },
  {
    id: 6110, section: "Maths",
    text: "The average of 10 numbers is 15. When one number is replaced by 25, the average becomes 16. What was the replaced number?",
    options: ["A) 12", "B) 13", "C) 15", "D) 18"],
    answer: "C",
    explanation: "Old sum = 150. New sum = 160. Increase = 10 = 25 − x. So x = 15."
  }
];
var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
