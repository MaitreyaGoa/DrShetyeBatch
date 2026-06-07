// math_dq1.js – Dr Shetye Academic Programme
// Maths Daily Quiz 1 — Goa Competitive Exams
// 15 Questions · IDs 5301–5315 · 15 Marks · 15 Minutes
// Topics: Percentage, Profit/Loss, SI/CI, Time-Work, Ratio,
//         Speed-Distance, Algebra, Number System, Mensuration, Averages

var questions = [

  {
    id: 5301, section: "Maths",
    text: "A number is increased by 20% and then decreased by 20%. The net change is:",
    options: ["A) 0%", "B) 4% increase", "C) 4% decrease", "D) 2% decrease"],
    answer: "C",
    explanation: "Let number = 100. After 20% increase = 120. After 20% decrease = 120 × 0.8 = 96. Net change = −4%. Loss% = (common%)²/100 = 20²/100 = 4% decrease."
  },

  {
    id: 5302, section: "Maths",
    text: "A trader marks his goods 25% above cost price and gives a 10% discount. His profit %:",
    options: ["A) 10%", "B) 12%", "C) 12.5%", "D) 15%"],
    answer: "C",
    explanation: "Let CP = 100. MP = 125. SP = 125 × 0.90 = 112.5. Profit% = (112.5 − 100)/100 × 100 = 12.5%."
  },

  {
    id: 5303, section: "Maths",
    text: "The difference between CI and SI on ₹8000 at 10% p.a. for 2 years is:",
    options: ["A) ₹60", "B) ₹70", "C) ₹80", "D) ₹100"],
    answer: "C",
    explanation: "Difference = P(R/100)² = 8000 × (0.1)² = 8000 × 0.01 = ₹80."
  },

  {
    id: 5304, section: "Maths",
    text: "A can do a work in 15 days and B in 20 days. They work together for 6 days, then A leaves. How many more days does B take to finish?",
    options: ["A) 6 days", "B) 7 days", "C) 8 days", "D) 9 days"],
    answer: "A",
    explanation: "Combined rate = 1/15+1/20 = 4/60+3/60 = 7/60 per day. In 6 days together: 6×7/60 = 42/60 = 7/10 done. Remaining = 3/10. B alone at 1/20 per day: time = (3/10)×20 = 6 days."
  },

  {
    id: 5305, section: "Maths",
    text: "If x : y = 3 : 4 and y : z = 5 : 6, what is x : y : z?",
    options: ["A) 15:20:24", "B) 12:16:20", "C) 9:12:16", "D) 3:4:6"],
    answer: "A",
    explanation: "x:y=3:4, y:z=5:6. Make y common: x:y=15:20, y:z=20:24. So x:y:z = 15:20:24."
  },

  {
    id: 5306, section: "Maths",
    text: "A train 180 m long passes a platform 270 m long in 30 seconds. What is the speed of the train in km/h?",
    options: ["A) 48 km/h", "B) 54 km/h", "C) 60 km/h", "D) 72 km/h"],
    answer: "B",
    explanation: "Total distance = 180+270 = 450 m in 30 s. Speed = 450/30 = 15 m/s = 15×18/5 = 54 km/h."
  },

  {
    id: 5307, section: "Maths",
    text: "If x + 1/x = 4, find the value of x² + 1/x².",
    options: ["A) 12", "B) 14", "C) 16", "D) 18"],
    answer: "B",
    explanation: "(x + 1/x)² = x² + 2 + 1/x². So x² + 1/x² = (x+1/x)² − 2 = 16 − 2 = 14."
  },

  {
    id: 5308, section: "Maths",
    text: "The sum of three consecutive even integers is 78. The largest of the three is:",
    options: ["A) 24", "B) 26", "C) 28", "D) 30"],
    answer: "C",
    explanation: "Let integers be n, n+2, n+4. Sum = 3n+6 = 78 → n = 24. Largest = 24+4 = 28."
  },

  {
    id: 5309, section: "Maths",
    text: "A sum doubles in 8 years at simple interest. In how many years will it become 5 times?",
    options: ["A) 24 years", "B) 28 years", "C) 32 years", "D) 36 years"],
    answer: "C",
    explanation: "Doubles in 8 years → SI=P in 8 years → Rate = 100/8 = 12.5% p.a. For 5 times: SI = 4P. T = 4P×100/(P×12.5) = 32 years."
  },

  {
    id: 5310, section: "Maths",
    text: "The area of a rhombus is 240 sq cm. One diagonal is 24 cm. What is the length of the other diagonal?",
    options: ["A) 16 cm", "B) 18 cm", "C) 20 cm", "D) 22 cm"],
    answer: "C",
    explanation: "Area = ½ × d₁ × d₂. 240 = ½ × 24 × d₂ → d₂ = 480/24 = 20 cm."
  },

  {
    id: 5311, section: "Maths",
    text: "The average of 11 numbers is 40. If the average of first 6 is 38 and last 6 is 43, what is the 6th number?",
    options: ["A) 46", "B) 48", "C) 50", "D) 52"],
    answer: "A",
    explanation: "Sum of all 11 = 11×40 = 440. Sum of first 6 = 6×38 = 228. Sum of last 6 = 6×43 = 258. The 6th number is counted in both groups. 6th number = 228+258−440 = 486−440 = 46."
  },

  {
    id: 5312, section: "Maths",
    text: "In a mixture of 60 litres, milk and water are in the ratio 7:3. How much water must be added to make the ratio 3:7?",
    options: ["A) 70 litres", "B) 72 litres", "C) 75 litres", "D) 80 litres"],
    answer: "D",
    explanation: "Milk = 42L, Water = 18L. For ratio 3:7: milk/water=3/7 → water=7×42/3=98L. Water to add = 98−18 = 80 litres."
  },

  {
    id: 5313, section: "Maths",
    text: "A boat goes 36 km upstream in 4 hours and 48 km downstream in 4 hours. What is the speed of the stream?",
    options: ["A) 1.5 km/h", "B) 2 km/h", "C) 2.5 km/h", "D) 3 km/h"],
    answer: "A",
    explanation: "Upstream speed = 36/4 = 9 km/h. Downstream speed = 48/4 = 12 km/h. Speed of stream = (Downstream − Upstream)/2 = (12−9)/2 = 1.5 km/h."
  },

  {
    id: 5314, section: "Maths",
    text: "If the selling price of 20 articles equals the cost price of 25 articles, what is the profit %?",
    options: ["A) 20%", "B) 22%", "C) 25%", "D) 30%"],
    answer: "C",
    explanation: "Let CP per article = ₹1. CP of 20 = ₹20. SP of 20 = CP of 25 = ₹25. Profit% = (25−20)/20 × 100 = 25%."
  },

  {
    id: 5315, section: "Maths",
    text: "A cylinder has radius 7 cm and height 20 cm. Its volume is: (π = 22/7)",
    options: ["A) 2960 cu cm", "B) 3080 cu cm", "C) 3140 cu cm", "D) 3360 cu cm"],
    answer: "B",
    explanation: "V = πr²h = 22/7 × 7 × 7 × 20 = 22 × 7 × 20 = 3080 cu cm."
  }

];
