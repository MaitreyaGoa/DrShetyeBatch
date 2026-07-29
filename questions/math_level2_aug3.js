// math_level2_aug3.js – Dr Shetye Academic Programme
// Maths Level 2 Test — August 3rd 2026
// 30 Questions · IDs 6061–6090 · 30 Marks · 45 Minutes
// CAT / IIM Level — PYQ-style from CAT, XAT, SNAP, GMAT, SSC CGL
// Topics: Profit/Loss, CI/SI, Ratio/Partnership, Alligation, Speed-Distance,
//         Time-Work, Percentage, Number Theory, P&C, Probability,
//         Algebra, Geometry, Sets, Averages, Logarithms, AP

var questions = [

  // ── PROFIT / LOSS & COMMERCIAL ──────────────────────────────────────

  {
    id: 6061, section: "Maths",
    text: "A trader buys an article for ₹1,400 and sells it for ₹1,260. Find the loss percentage.",
    options: ["A) 10%", "B) 9%", "C) 8%", "D) 12%"],
    answer: "A",
    explanation: "Loss = CP − SP = 1400 − 1260 = ₹140. Loss% = (Loss/CP) × 100 = (140/1400) × 100 = 10%."
  },

  {
    id: 6062, section: "Maths",
    text: "A man sells an article at a 10% loss. Had he sold it for ₹150 more, he would have made a 5% profit. Find the cost price.",
    options: ["A) ₹800", "B) ₹900", "C) ₹1,100", "D) ₹1,000"],
    answer: "D",
    explanation: "Let CP = x. SP at loss = 0.9x. SP at profit = 1.05x. Difference = 1.05x − 0.9x = 0.15x = 150 → x = ₹1,000. Verify: SP at loss = 900; SP at profit = 1050; 1050 − 900 = 150 ✓."
  },

  {
    id: 6063, section: "Maths",
    text: "A shopkeeper cheats by 20% while buying (uses a false weight — receives more than he pays for) and again by 20% while selling (gives less than the customer pays for). What is his profit percentage?",
    options: ["A) 50%", "B) 44%", "C) 40%", "D) 56%"],
    answer: "A",
    explanation: "When cheating by the same percentage on both sides, the profit% = [(100+x)/(100−x) × 100] − 100, where x = 20. Profit% = (120/80 × 100) − 100 = 150 − 100 = 50%. Alternatively: buys 1200g paying for 1000g (pays 1000 price units); sells 800g charging for 1000g units. For 1200g bought: sell in lots of 800g → can sell 1200/800 × 1000 = 1500. Profit = 1500−1000 = 500 on 1000 = 50%."
  },

  // ── COMPOUND INTEREST & SIMPLE INTEREST ──────────────────────────────

  {
    id: 6064, section: "Maths",
    text: "Find the difference between the compound interest and simple interest on ₹5,000 at 8% per annum for 2 years.",
    options: ["A) ₹28", "B) ₹32", "C) ₹36", "D) ₹40"],
    answer: "B",
    explanation: "Shortcut: Difference = P × (R/100)² = 5000 × (8/100)² = 5000 × 0.0064 = ₹32. Verify: SI = 5000×8×2/100 = ₹800. CI = 5000×[(1.08)²−1] = 5000×0.1664 = ₹832. Difference = 832−800 = ₹32 ✓."
  },

  {
    id: 6065, section: "Maths",
    text: "The compound interest on a certain sum at 10% per annum for 2 years is ₹420. Find the principal.",
    options: ["A) ₹1,800", "B) ₹1,900", "C) ₹2,100", "D) ₹2,000"],
    answer: "D",
    explanation: "CI = P[(1+R/100)ⁿ − 1]. 420 = P[(1.10)²−1] = P × 0.21. P = 420/0.21 = ₹2,000."
  },

  {
    id: 6066, section: "Maths",
    text: "If CI and SI are equal for one year, and for 2 years CI exceeds SI by ₹50 at 10% per annum, find the principal.",
    options: ["A) ₹5,000", "B) ₹4,500", "C) ₹4,000", "D) ₹5,500"],
    answer: "A",
    explanation: "For 2 years, CI − SI = P × (R/100)². So 50 = P × (10/100)² = P × 0.01. P = 50/0.01 = ₹5,000."
  },

  // ── RATIO, PROPORTION & PARTNERSHIP ─────────────────────────────────

  {
    id: 6067, section: "Maths",
    text: "The ratio of A's and B's shares is 3:4. After A receives ₹50 more, the ratio becomes 5:6. Find A's original share.",
    options: ["A) ₹350", "B) ₹400", "C) ₹500", "D) ₹450"],
    answer: "D",
    explanation: "Let shares be 3x and 4x. After A gets ₹50 more: (3x+50)/4x = 5/6. Cross-multiply: 18x + 300 = 20x → 2x = 300 → x = 150. A's original share = 3×150 = ₹450."
  },

  {
    id: 6068, section: "Maths",
    text: "Three friends split a bill of ₹1,950 in the ratio 1/2 : 1/3 : 1/4. Find the largest share.",
    options: ["A) ₹900", "B) ₹800", "C) ₹750", "D) ₹1,000"],
    answer: "A",
    explanation: "Convert 1/2:1/3:1/4 to equivalent integers by multiplying by LCM(2,3,4)=12: ratio = 6:4:3. Total parts = 13. Largest share (6 parts) = 1950 × 6/13 = ₹900."
  },

  // ── ALLIGATION & MIXTURES ────────────────────────────────────────────

  {
    id: 6069, section: "Maths",
    text: "Milk costs ₹16 per litre and water is free. A shopkeeper mixes water with milk and sells the mixture at ₹12 per litre, making a 50% profit. Find the ratio of milk to water in the mixture.",
    options: ["A) 1:2", "B) 1:1", "C) 2:1", "D) 3:1"],
    answer: "B",
    explanation: "SP = ₹12/L with 50% profit → CP of mixture = 12/1.5 = ₹8/L. By alligation: milk costs ₹16, water costs ₹0. Required CP = ₹8. Ratio of water:milk = (16−8):(8−0) = 8:8 = 1:1. So milk:water = 1:1."
  },

  {
    id: 6070, section: "Maths",
    text: "A 35-litre mixture of wine and water is in the ratio 4:3. 7 litres of the mixture is removed and replaced with 7 litres of pure water. Find the new ratio of wine to water.",
    options: ["A) 12:19", "B) 14:19", "C) 18:19", "D) 16:19"],
    answer: "D",
    explanation: "Initial: wine = 35×4/7 = 20L, water = 15L. Remove 7L of mixture: wine removed = 7×4/7 = 4L, water removed = 3L. After removal: wine = 16L, water = 12L. Add 7L water: wine = 16L, water = 19L. Ratio = 16:19."
  },

  // ── SPEED, DISTANCE & TIME ───────────────────────────────────────────

  {
    id: 6071, section: "Maths",
    text: "A person covers 2/5 of his journey at 40 km/h and the remaining 3/5 at 60 km/h. Find his average speed for the entire journey.",
    options: ["A) 50 km/h", "B) 48 km/h", "C) 44 km/h", "D) 52 km/h"],
    answer: "A",
    explanation: "Let total distance = D. Time₁ = (2D/5)/40 = D/100. Time₂ = (3D/5)/60 = D/100. Total time = D/50. Average speed = D/(D/50) = 50 km/h."
  },

  {
    id: 6072, section: "Maths",
    text: "A train crosses a pole in 15 seconds and a platform 300 m long in 45 seconds. Find the speed of the train in km/h.",
    options: ["A) 30 km/h", "B) 36 km/h", "C) 40 km/h", "D) 45 km/h"],
    answer: "B",
    explanation: "Let train length = L. L/15 = (L+300)/45 → 45L = 15L+4500 → L = 150 m. Speed = 150/15 = 10 m/s = 10×18/5 = 36 km/h."
  },

  // ── TIME & WORK ──────────────────────────────────────────────────────

  {
    id: 6073, section: "Maths",
    text: "A and B together complete work in 20 days. B and C in 30 days. C and A in 24 days. Find the number of days in which A, B, and C together will complete the work.",
    options: ["A) 12 days", "B) 14 days", "C) 18 days", "D) 16 days"],
    answer: "D",
    explanation: "2(A+B+C) = 1/20+1/30+1/24 = 6/120+4/120+5/120 = 15/120 = 1/8. So A+B+C = 1/16 per day. Together they finish in 16 days."
  },

  {
    id: 6074, section: "Maths",
    text: "A tap can fill a tank in 6 hours. A leak at the bottom empties the full tank in 8 hours. If the tank is empty and both the tap and the leak are active simultaneously, in how many hours will the tank be full?",
    options: ["A) 24 hours", "B) 22 hours", "C) 20 hours", "D) 28 hours"],
    answer: "A",
    explanation: "Net filling rate = 1/6 − 1/8 = 4/24 − 3/24 = 1/24 per hour. Time to fill = 24 hours."
  },

  // ── PERCENTAGE ───────────────────────────────────────────────────────

  {
    id: 6075, section: "Maths",
    text: "A number is first increased by 20% and then decreased by 25%. What is the net percentage change?",
    options: ["A) 5% decrease", "B) 8% decrease", "C) 12% decrease", "D) 10% decrease"],
    answer: "D",
    explanation: "Net factor = 1.20 × 0.75 = 0.90 → 10% decrease. Starting with 100: after 20% increase = 120; after 25% decrease = 120 × 0.75 = 90. Net change = −10%."
  },

  {
    id: 6076, section: "Maths",
    text: "If 30% of A equals 0.25 of B, find the ratio A:B.",
    options: ["A) 4:5", "B) 5:6", "C) 6:7", "D) 7:8"],
    answer: "B",
    explanation: "0.30A = 0.25B → A/B = 0.25/0.30 = 25/30 = 5/6. So A:B = 5:6."
  },

  // ── NUMBER THEORY ────────────────────────────────────────────────────

  {
    id: 6077, section: "Maths",
    text: "Find the HCF of 72 and 120.",
    options: ["A) 24", "B) 20", "C) 18", "D) 36"],
    answer: "A",
    explanation: "Using prime factorisation: 72 = 2³×3², 120 = 2³×3×5. HCF = 2³×3 = 8×3 = 24. Using Euclid's division: 120 = 72×1+48; 72 = 48×1+24; 48 = 24×2+0. HCF = 24."
  },

  {
    id: 6078, section: "Maths",
    text: "Find the remainder when 2²⁰⁰ is divided by 3.",
    options: ["A) 0", "B) 1", "C) 2", "D) 3"],
    answer: "B",
    explanation: "Powers of 2 mod 3 cycle: 2¹≡2, 2²≡1 (period 2). 200 is even → 2²⁰⁰ ≡ (2²)¹⁰⁰ ≡ 1¹⁰⁰ ≡ 1 (mod 3). Remainder = 1."
  },

  {
    id: 6079, section: "Maths",
    text: "Find the sum of the first 50 even natural numbers (2 + 4 + 6 + … + 100).",
    options: ["A) 2550", "B) 2500", "C) 2400", "D) 2600"],
    answer: "A",
    explanation: "Sum = 2(1+2+3+…+50) = 2 × [50×51/2] = 50×51 = 2550. Alternatively, sum of AP: n/2×(first+last) = 50/2×(2+100) = 25×102 = 2550."
  },

  // ── PERMUTATIONS & COMBINATIONS ──────────────────────────────────────

  {
    id: 6080, section: "Maths",
    text: "From a group of 6 people, a committee of 4 is to be formed. In how many ways can this be done if two specific people must NOT both be included in the committee?",
    options: ["A) 7", "B) 9", "C) 11", "D) 13"],
    answer: "B",
    explanation: "Total committees = C(6,4) = 15. Committees with BOTH specific people included = C(4,2) = 6 (choose remaining 2 from remaining 4). Valid committees = 15 − 6 = 9."
  },

  {
    id: 6081, section: "Maths",
    text: "How many 3-digit even numbers can be formed using the digits 1, 2, 3, 4, 5 without repetition?",
    options: ["A) 18", "B) 24", "C) 30", "D) 36"],
    answer: "B",
    explanation: "Units digit must be even: choices from {2,4} → 2 options. Hundreds digit: any of remaining 4 digits → 4 options. Tens digit: any of remaining 3 → 3 options. Total = 2×4×3 = 24."
  },

  // ── PROBABILITY ──────────────────────────────────────────────────────

  {
    id: 6082, section: "Maths",
    text: "If P(A) = 0.6, P(B) = 0.5, and P(A∩B) = 0.3, find P(A|B) — the probability of A given B.",
    options: ["A) 0.4", "B) 0.5", "C) 0.6", "D) 0.7"],
    answer: "C",
    explanation: "P(A|B) = P(A∩B)/P(B) = 0.3/0.5 = 0.6."
  },

  // ── ALGEBRA ──────────────────────────────────────────────────────────

  {
    id: 6083, section: "Maths",
    text: "If a + b + c = 9 and ab + bc + ca = 26, find a² + b² + c².",
    options: ["A) 25", "B) 27", "C) 31", "D) 29"],
    answer: "D",
    explanation: "(a+b+c)² = a²+b²+c² + 2(ab+bc+ca). 9² = a²+b²+c² + 2×26. 81 = a²+b²+c² + 52. a²+b²+c² = 81−52 = 29."
  },

  {
    id: 6084, section: "Maths",
    text: "Simplify: (x² − 5x + 6) ÷ (x − 2).",
    options: ["A) x + 3", "B) x − 3", "C) x + 2", "D) x − 2"],
    answer: "B",
    explanation: "Factorise the numerator: x²−5x+6 = (x−2)(x−3). Dividing by (x−2): (x−2)(x−3)/(x−2) = x−3, provided x ≠ 2."
  },

  // ── GEOMETRY & MENSURATION ───────────────────────────────────────────

  {
    id: 6085, section: "Maths",
    text: "A rectangle has sides 6 cm and 8 cm. A circle is drawn circumscribing the rectangle. Find the area of the circle. (Use π = 22/7)",
    options: ["A) 68.75 cm²", "B) 75.5 cm²", "C) 78.5 cm²", "D) 82 cm²"],
    answer: "C",
    explanation: "The diagonal of the rectangle = √(6²+8²) = √(36+64) = √100 = 10 cm. This is the diameter of the circumscribed circle, so radius = 5 cm. Area = πr² = (22/7)×25 = 550/7 ≈ 78.57 ≈ 78.5 cm²."
  },

  {
    id: 6086, section: "Maths",
    text: "Find the volume of a hemisphere of radius 7 cm. (Use π = 22/7)",
    options: ["A) 680.5 cm³", "B) 700 cm³", "C) 718.67 cm³", "D) 735 cm³"],
    answer: "C",
    explanation: "Volume of hemisphere = (2/3)πr³ = (2/3)×(22/7)×7³ = (2/3)×(22/7)×343 = (2/3)×22×49 = (2×22×49)/3 = 2156/3 ≈ 718.67 cm³."
  },

  // ── SETS, AVERAGES & STATISTICS ──────────────────────────────────────

  {
    id: 6087, section: "Maths",
    text: "The average of 15 numbers is 48. If one number is removed, the average of the remaining 14 numbers becomes 50. What is the number that was removed?",
    options: ["A) 14", "B) 18", "C) 20", "D) 22"],
    answer: "C",
    explanation: "Total of 15 numbers = 15×48 = 720. Total of 14 remaining numbers = 14×50 = 700. Number removed = 720−700 = 20."
  },

  {
    id: 6088, section: "Maths",
    text: "In a group of 80 students, 45 play cricket, 30 play football, and 20 play both. How many students play neither?",
    options: ["A) 15", "B) 20", "C) 25", "D) 30"],
    answer: "C",
    explanation: "Students playing at least one sport = 45+30−20 = 55. Students playing neither = 80−55 = 25."
  },

  // ── LOGARITHMS & SEQUENCES ───────────────────────────────────────────

  {
    id: 6089, section: "Maths",
    text: "Solve for x: log(x + 3) + log(x − 3) = log 16.",
    options: ["A) x = 4", "B) x = 5", "C) x = 6", "D) x = 7"],
    answer: "B",
    explanation: "log(x+3) + log(x−3) = log[(x+3)(x−3)] = log(x²−9) = log 16. So x²−9 = 16 → x² = 25 → x = 5 (taking positive value since x > 3 for domain)."
  },

  {
    id: 6090, section: "Maths",
    text: "In an AP, the 3rd term is 7 and the 7th term is 19. Find the sum of the first 10 terms.",
    options: ["A) 130", "B) 135", "C) 140", "D) 145"],
    answer: "D",
    explanation: "a+2d = 7 and a+6d = 19. Subtracting: 4d = 12 → d = 3. Then a = 7−2(3) = 1. Sum of first 10 terms = (10/2)[2a+(n−1)d] = 5[2(1)+9(3)] = 5[2+27] = 5×29 = 145."
  }

];
