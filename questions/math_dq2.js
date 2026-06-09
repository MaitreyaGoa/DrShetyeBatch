// math_dq2.js – Dr Shetye Academic Programme
// Maths Daily Quiz 2 — 9 June 2026
// 15 Questions · IDs 5316–5330 · 15 Marks · 15 Minutes
// Topics: Percentage, Ratio, Time-Work, Speed-Distance,
//         Algebra, Number System, Profit/Loss, SI, Mensuration, Averages

var questions = [

  {
    id: 5316, section: "Maths",
    text: "The difference between 72% and 54% of a number is 198. What is the number?",
    options: ["A) 1000", "B) 1050", "C) 1100", "D) 1200"],
    answer: "C",
    explanation: "(72−54)% of x = 198 → 18% of x = 198 → x = 198×100/18 = 1100."
  },

  {
    id: 5317, section: "Maths",
    text: "A and B can do a job in 12 days. B and C can do it in 15 days. A and C can do it in 20 days. In how many days can all three together finish it?",
    options: ["A) 8 days", "B) 9 days", "C) 10 days", "D) 12 days"],
    answer: "C",
    explanation: "2(A+B+C) = 1/12+1/15+1/20 = 5/60+4/60+3/60 = 12/60 = 1/5. So A+B+C = 1/10. All three together finish in 10 days."
  },

  {
    id: 5318, section: "Maths",
    text: "A car covers 300 km at 50 km/h and another 300 km at 75 km/h. What is the average speed for the entire journey?",
    options: ["A) 58 km/h", "B) 60 km/h", "C) 62.5 km/h", "D) 65 km/h"],
    answer: "B",
    explanation: "Time 1 = 300/50 = 6h. Time 2 = 300/75 = 4h. Total time = 10h. Total distance = 600 km. Average speed = 600/10 = 60 km/h."
  },

  {
    id: 5319, section: "Maths",
    text: "If x − 1/x = 3, what is x² + 1/x²?",
    options: ["A) 9", "B) 10", "C) 11", "D) 12"],
    answer: "C",
    explanation: "(x − 1/x)² = x² − 2 + 1/x². So x² + 1/x² = (x−1/x)² + 2 = 9 + 2 = 11."
  },

  {
    id: 5320, section: "Maths",
    text: "Pipes A, B and C can fill a tank in 10, 15 and 30 hours respectively. All three are opened together. In how many hours will the tank be full?",
    options: ["A) 4 hours", "B) 5 hours", "C) 6 hours", "D) 7 hours"],
    answer: "B",
    explanation: "Combined rate = 1/10+1/15+1/30 = 3/30+2/30+1/30 = 6/30 = 1/5. Time = 5 hours."
  },

  {
    id: 5321, section: "Maths",
    text: "A shopkeeper buys an article for ₹800 and wants a profit of 25% after giving a 20% discount. What should the marked price be?",
    options: ["A) ₹1200", "B) ₹1250", "C) ₹1300", "D) ₹1350"],
    answer: "B",
    explanation: "SP = 800×1.25 = ₹1000. SP = MP×0.8. MP = 1000/0.8 = ₹1250."
  },

  {
    id: 5322, section: "Maths",
    text: "The ratio of A's salary to B's is 4:5 and B's to C's is 3:2. If C earns ₹9000, what does A earn?",
    options: ["A) ₹10,800", "B) ₹12,000", "C) ₹13,500", "D) ₹15,000"],
    answer: "A",
    explanation: "B:C = 3:2, C = 9000 → B = 9000×3/2 = ₹13500. A:B = 4:5 → A = 13500×4/5 = ₹10800."
  },

  {
    id: 5323, section: "Maths",
    text: "The compound interest on ₹10,000 for 3 years at 10% per annum compounded annually is:",
    options: ["A) ₹3000", "B) ₹3100", "C) ₹3300", "D) ₹3310"],
    answer: "D",
    explanation: "A = 10000×(1+10/100)³ = 10000×(11/10)³ = 10000×1331/1000 = 13310. CI = 13310−10000 = ₹3310."
  },

  {
    id: 5324, section: "Maths",
    text: "A train 200 m long travelling at 90 km/h crosses another train 280 m long travelling at 54 km/h in the opposite direction. Time taken to cross?",
    options: ["A) 10 sec", "B) 12 sec", "C) 15 sec", "D) 18 sec"],
    answer: "B",
    explanation: "Relative speed (opposite direction) = 90+54 = 144 km/h = 144×5/18 = 40 m/s. Total length = 200+280 = 480 m. Time = 480/40 = 12 seconds."
  },

  {
    id: 5325, section: "Maths",
    text: "The area of a circle is 154 sq cm. What is its circumference? (π = 22/7)",
    options: ["A) 44 cm", "B) 48 cm", "C) 52 cm", "D) 56 cm"],
    answer: "A",
    explanation: "πr² = 154 → 22/7 × r² = 154 → r² = 49 → r = 7 cm. Circumference = 2πr = 2×22/7×7 = 44 cm."
  },

  {
    id: 5326, section: "Maths",
    text: "The average of 8 numbers is 25. If two numbers 20 and 30 are removed, what is the average of the remaining 6 numbers?",
    options: ["A) 24", "B) 25", "C) 26", "D) 27"],
    answer: "B",
    explanation: "Sum of 8 = 200. Removed: 20+30 = 50. Remaining sum = 150. Average = 150/6 = 25."
  },

  {
    id: 5327, section: "Maths",
    text: "In how many ways can the letters of the word EXAM be arranged?",
    options: ["A) 12", "B) 16", "C) 24", "D) 48"],
    answer: "C",
    explanation: "EXAM has 4 distinct letters. Number of arrangements = 4! = 4×3×2×1 = 24."
  },

  {
    id: 5328, section: "Maths",
    text: "A man sells two articles each at ₹1200. On one he gains 20% and on the other he loses 20%. What is his overall profit or loss?",
    options: ["A) No profit no loss", "B) 4% loss", "C) 4% gain", "D) 2% loss"],
    answer: "B",
    explanation: "When SP is same and %gain = %loss = x, overall result is always a loss of x²/100 % = 400/100 = 4% loss."
  },

  {
    id: 5329, section: "Maths",
    text: "What is the least number that must be subtracted from 9999 to make it exactly divisible by 73?",
    options: ["A) 14", "B) 54", "C) 63", "D) 71"],
    answer: "D",
    explanation: "9999 ÷ 73 = 136 remainder 71. Verify: 73×136 = 9928. 9999−9928 = 71. Subtracting 71 gives 9928 which is exactly divisible by 73."
  },

  {
    id: 5330, section: "Maths",
    text: "The sum of two numbers is 45 and their product is 500. What is the sum of their reciprocals?",
    options: ["A) 9/100", "B) 45/500", "C) 500/45", "D) 1/10"],
    answer: "A",
    explanation: "Sum of reciprocals = 1/a + 1/b = (a+b)/(ab) = 45/500 = 9/100."
  }

];
