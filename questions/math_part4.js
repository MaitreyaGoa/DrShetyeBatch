// ============================================================
// Dr Shetye Academic Program
// Maths Part Test – Difficult Level
// 10 Questions / 10 Marks / 10 Minutes
// SSC CGL Difficult Level – All answers verified
// ============================================================
var questions = [

  {
    id: 701, section: "Maths",
    text: "If x² + y² + z² = xy + yz + zx, then the value of (x+y+z)² / (x² + y² + z²) is:",
    options: ["1", "2", "3", "0"],
    answer: "C",
    explanation: "If x²+y²+z² = xy+yz+zx, then x=y=z. Substituting: (3x)² / 3x² = 9x² / 3x² = 3."
  },
  {
    id: 702, section: "Maths",
    text: "If sin θ + cos θ = √2 cos θ, then the value of tan θ is:",
    options: ["√2 − 1", "√2 + 1", "1/√2", "−1"],
    answer: "A",
    explanation: "sin θ = √2 cos θ − cos θ = (√2−1) cos θ. Dividing both sides by cos θ: tan θ = √2 − 1."
  },
  {
    id: 703, section: "Maths",
    text: "A trader marks his goods 40% above cost price and allows a discount of 25%. If he sells the article for ₹1050, what is the cost price?",
    options: ["₹900", "₹1000", "₹950", "₹875"],
    answer: "B",
    explanation: "SP = CP × 1.40 × 0.75 = CP × 1.05. So 1.05 × CP = 1050 → CP = 1050/1.05 = ₹1000."
  },
  {
    id: 704, section: "Maths",
    text: "A and B together complete a work in 12 days. B and C together in 15 days. C and A together in 20 days. In how many days can all three together complete the work?",
    options: ["10 days", "12 days", "8 days", "15 days"],
    answer: "A",
    explanation: "2(A+B+C) = 1/12 + 1/15 + 1/20 = 5/60 + 4/60 + 3/60 = 12/60 = 1/5. So A+B+C = 1/10 → 10 days."
  },
  {
    id: 705, section: "Maths",
    text: "The sum of digits of a two-digit number is 9. If 27 is added to the number, the digits get reversed. Find the number.",
    options: ["27", "36", "45", "54"],
    answer: "B",
    explanation: "Let number = 10a+b. a+b=9. 10a+b+27 = 10b+a → 9a−9b = −27 → a−b = −3. Solving: a=3, b=6 → number = 36."
  },
  {
    id: 706, section: "Maths",
    text: "In triangle ABC, the angle bisector of angle A meets BC at D. If AB = 6 cm, AC = 9 cm and BC = 10 cm, find BD.",
    options: ["3 cm", "4 cm", "5 cm", "6 cm"],
    answer: "B",
    explanation: "By angle bisector theorem: BD/DC = AB/AC = 6/9 = 2/3. So BD = 2/(2+3) × 10 = 2/5 × 10 = 4 cm."
  },
  {
    id: 707, section: "Maths",
    text: "A sum of money at compound interest doubles itself in 4 years. In how many years will it become 16 times?",
    options: ["12 years", "16 years", "8 years", "20 years"],
    answer: "B",
    explanation: "Doubles in 4 yrs → 4P in 8 yrs → 8P in 12 yrs → 16P in 16 years. Each doubling takes 4 more years."
  },
  {
    id: 708, section: "Maths",
    text: "The radius of a cone is 7 cm and its slant height is 25 cm. Find the total surface area. (π = 22/7)",
    options: ["704 cm²", "720 cm²", "680 cm²", "750 cm²"],
    answer: "A",
    explanation: "TSA = πr(l + r) = 22/7 × 7 × (25 + 7) = 22 × 32 = 704 cm²."
  },
  {
    id: 709, section: "Maths",
    text: "Two trains start simultaneously from stations A and B towards each other. Distance = 300 km. Train from A travels at 70 km/h and from B at 80 km/h. After how much time and at what distance from A will they meet?",
    options: ["2 hrs, 140 km", "2 hrs, 150 km", "1.5 hrs, 105 km", "3 hrs, 210 km"],
    answer: "A",
    explanation: "Time = 300 / (70+80) = 300/150 = 2 hours. Distance from A = 70 × 2 = 140 km."
  },
  {
    id: 710, section: "Maths",
    text: "In an election between two candidates, one got 55% of valid votes. 20% of total votes were invalid. Total votes = 7500. By how many votes did the winner win?",
    options: ["300", "450", "600", "500"],
    answer: "C",
    explanation: "Valid votes = 80% of 7500 = 6000. Winner = 55% of 6000 = 3300. Loser = 45% of 6000 = 2700. Margin = 3300 − 2700 = 600."
  }

];
