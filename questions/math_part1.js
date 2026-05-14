// ============================================================
// Dr Shetye Academic Program
// Maths Part Test 1 – 10 Questions / 10 Marks / 10 Minutes
// All 10 answers independently verified
// ============================================================

var questions = [

  {
    id: 1, section: "Maths",
    text: "A shopkeeper bought 80 notebooks at ₹45 each. He sold 60 at ₹55 each and the remaining 20 at ₹40 each. Find his overall profit percentage.",
    options: ["5% Profit", "8.33% Profit", "13.89% Profit", "10% Profit"],
    answer: "C",
    explanation: "CP = 80×45 = ₹3600. SP = (60×55)+(20×40) = 3300+800 = ₹4100. Profit = ₹500. Profit% = (500/3600)×100 = 13.89%."
  },

  {
    id: 2, section: "Maths",
    text: "A can complete a work in 18 days, B in 24 days. Both work together for 6 days, then A leaves. In how many more days will B alone finish the remaining work?",
    options: ["8 days", "9 days", "10 days", "12 days"],
    answer: "C",
    explanation: "Together per day = 1/18 + 1/24 = 7/72. Work in 6 days = 42/72 = 7/12. Remaining = 5/12. B alone: (5/12)÷(1/24) = 10 days."
  },

  {
    id: 3, section: "Maths",
    text: "The ratio of ages of Ravi and Sohan is 5:7. After 8 years the ratio becomes 7:9. What is Ravi's present age?",
    options: ["20 years", "25 years", "28 years", "30 years"],
    answer: "A",
    explanation: "Let ages = 5x, 7x. (5x+8)/(7x+8) = 7/9 → 45x+72 = 49x+56 → x = 4. Ravi = 5×4 = 20 years. Verify: 28/36 = 7/9 ✓"
  },

  {
    id: 4, section: "Maths",
    text: "A sum becomes ₹13,200 in 3 years and ₹15,400 in 5 years at simple interest. Find the principal.",
    options: ["₹9,800", "₹9,900", "₹10,000", "₹11,000"],
    answer: "B",
    explanation: "SI for 2 years = 15400−13200 = ₹2200. SI per year = ₹1100. SI for 3 years = ₹3300. Principal = 13200−3300 = ₹9,900."
  },

  {
    id: 5, section: "Maths",
    text: "A train 240 m long crosses a platform 360 m long in 30 seconds. Find the speed of the train in km/h.",
    options: ["60 km/h", "72 km/h", "84 km/h", "90 km/h"],
    answer: "B",
    explanation: "Total distance = 240+360 = 600 m. Speed = 600÷30 = 20 m/s = 20×(18/5) = 72 km/h."
  },

  {
    id: 6, section: "Maths",
    text: "The average marks of 12 students is 68. One student's marks were wrongly recorded as 54 instead of 84. Find the correct average.",
    options: ["69.5", "70", "70.5", "71"],
    answer: "C",
    explanation: "Total = 12×68 = 816. Add correction: 84−54 = +30. Correct total = 846. Average = 846÷12 = 70.5."
  },

  {
    id: 7, section: "Maths",
    text: "A town's population increased 20% in Year 1 and decreased 10% in Year 2. Present population is 21,600. Find the original population.",
    options: ["18,000", "20,000", "22,000", "24,000"],
    answer: "B",
    explanation: "P × 1.20 × 0.90 = 21600. P × 1.08 = 21600. P = 20,000."
  },

  {
    id: 8, section: "Maths",
    text: "If x + 1/x = 5, find the value of x² + 1/x².",
    options: ["21", "23", "25", "27"],
    answer: "B",
    explanation: "(x + 1/x)² = x² + 2 + 1/x². So x² + 1/x² = 5² − 2 = 23."
  },

  {
    id: 9, section: "Maths",
    text: "The length of a rectangle is 8 cm more than its breadth. If the perimeter is 56 cm, find the area.",
    options: ["160 cm²", "168 cm²", "180 cm²", "192 cm²"],
    answer: "C",
    explanation: "Perimeter: 2(b + b+8) = 56 → 2b+8 = 28 → b = 10, length = 18. Area = 18×10 = 180 cm²."
  },

  {
    id: 10, section: "Maths",
    text: "A number when divided by 15 leaves remainder 7. What is the remainder when twice the number is divided by 15?",
    options: ["11", "12", "13", "14"],
    answer: "D",
    explanation: "Number = 15k+7. Twice = 30k+14. 30k divisible by 15, so remainder = 14."
  }

];
