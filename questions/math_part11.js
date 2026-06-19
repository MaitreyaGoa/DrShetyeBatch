// math_part11.js – Dr Shetye Academic Programme
// Maths Part Test 11 — CAT / IIM Level (Extreme Difficulty)
// 10 Questions · IDs 5549–5558 · 10 Marks · 10 Minutes
// Topics: Quadratics, Pipes & Cisterns, Mensuration, Set Theory,
//         Series, Time-Work, LCM-HCF, Probability, Algebraic Identities, Solids

var questions = [

  {
    id: 5549, section: "Maths",
    text: "If α and β are the roots of x² − 7x + 12 = 0, find the value of α² + β².",
    options: ["A) 25", "B) 24", "C) 23", "D) 26"],
    answer: "A",
    explanation: "Sum of roots α+β = 7, product αβ = 12. α²+β² = (α+β)² − 2αβ = 7² − 2(12) = 49−24 = 25."
  },

  {
    id: 5550, section: "Maths",
    text: "Pipe A can fill a tank in 12 hours. Pipe B can empty the same tank in 18 hours. If both pipes are opened together, how long will it take to fill the tank?",
    options: ["A) 30 hours", "B) 33 hours", "C) 36 hours", "D) 40 hours"],
    answer: "C",
    explanation: "Filling rate of A = 1/12 per hour. Emptying rate of B = 1/18 per hour. Net rate = 1/12 − 1/18 = 3/36 − 2/36 = 1/36 per hour. Time to fill = 36 hours."
  },

  {
    id: 5551, section: "Maths",
    text: "Find the area of a sector of a circle with radius 14 cm and central angle 45°. (Use π = 22/7)",
    options: ["A) 70 cm²", "B) 75 cm²", "C) 80 cm²", "D) 77 cm²"],
    answer: "D",
    explanation: "Area of sector = (θ/360) × πr² = (45/360) × (22/7) × 14² = (1/8) × (22/7) × 196 = (1/8) × 616 = 77 cm²."
  },

  {
    id: 5552, section: "Maths",
    text: "In a survey of 30 students who study Maths, 25 who study Science, and 20 who study Commerce: 10 study both Maths and Science, 8 study both Science and Commerce, 5 study both Maths and Commerce, and 3 study all three subjects. How many students study at least one of the three subjects?",
    options: ["A) 55", "B) 52", "C) 50", "D) 58"],
    answer: "A",
    explanation: "Using the inclusion-exclusion principle: |M∪S∪C| = |M|+|S|+|C| − |M∩S| − |S∩C| − |M∩C| + |M∩S∩C| = 30+25+20−10−8−5+3 = 55."
  },

  {
    id: 5553, section: "Maths",
    text: "Find the sum of the squares of the first 15 natural numbers.",
    options: ["A) 1200", "B) 1220", "C) 1260", "D) 1240"],
    answer: "D",
    explanation: "Sum of squares formula: Σn² = n(n+1)(2n+1)/6. For n=15: 15×16×31/6 = 7440/6 = 1240."
  },

  {
    id: 5554, section: "Maths",
    text: "A can complete a work in 20 days, B in 30 days, and C in 60 days. All three start working together, but C leaves after 5 days. In how many total days will the work be completed?",
    options: ["A) 9 days", "B) 10 days", "C) 12 days", "D) 11 days"],
    answer: "D",
    explanation: "Combined rate of A, B, C = 1/20+1/30+1/60 = 3/60+2/60+1/60 = 6/60 = 1/10 per day. In 5 days: 5×(1/10) = 1/2 work done. Remaining = 1/2. A+B's rate = 1/20+1/30 = 3/60+2/60 = 5/60 = 1/12 per day. Extra days needed = (1/2)÷(1/12) = 6 days. Total = 5+6 = 11 days."
  },

  {
    id: 5555, section: "Maths",
    text: "The HCF of two numbers is 12 and their LCM is 10 times the HCF. If one of the numbers is 60, find the other number.",
    options: ["A) 20", "B) 24", "C) 28", "D) 32"],
    answer: "B",
    explanation: "LCM = 10 × HCF = 10 × 12 = 120. Using the relation: Product of numbers = HCF × LCM = 12 × 120 = 1440. Other number = 1440 ÷ 60 = 24."
  },

  {
    id: 5556, section: "Maths",
    text: "Two fair dice are rolled together. What is the probability that the sum of the numbers shown is 8?",
    options: ["A) 4/36", "B) 5/36", "C) 6/36", "D) 7/36"],
    answer: "B",
    explanation: "Total outcomes = 36. Pairs summing to 8: (2,6),(3,5),(4,4),(5,3),(6,2) — 5 favourable outcomes. Probability = 5/36."
  },

  {
    id: 5557, section: "Maths",
    text: "If x + 1/x = 4, find the value of x³ + 1/x³.",
    options: ["A) 48", "B) 50", "C) 52", "D) 54"],
    answer: "C",
    explanation: "x² + 1/x² = (x+1/x)² − 2 = 16−2 = 14. x³+1/x³ = (x+1/x)³ − 3(x+1/x) = 4³ − 3(4) = 64−12 = 52."
  },

  {
    id: 5558, section: "Maths",
    text: "A cylinder's radius is doubled and its height is halved. What is the ratio of the new volume to the original volume?",
    options: ["A) 1:1", "B) 2:1", "C) 4:1", "D) 1:2"],
    answer: "B",
    explanation: "Original volume V = πr²h. New volume = π(2r)²(h/2) = π × 4r² × h/2 = 2πr²h = 2V. Ratio of new to original = 2:1."
  }

];
