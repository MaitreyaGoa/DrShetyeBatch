// math_level2_jul20.js – Dr Shetye Academic Programme
// Maths Level 2 Test — July 20th 2026
// 30 Questions · IDs 6031–6060 · 30 Marks · 45 Minutes
// CAT / IIM Level — PYQ-style from CAT, XAT, SNAP, GMAT, SSC CGL
// Topics: Profit/Loss, CI/SI, Ratio/Partnership, Alligation, Speed-Distance,
//         Time-Work, Percentage, Number Theory, P&C, Probability,
//         Algebra, Geometry, Sets, Averages, Logarithms, AP

var questions = [

  // ── PROFIT / LOSS & COMMERCIAL ──────────────────────────────────────

  {
    id: 6031, section: "Maths",
    text: "A sells an article to B at a 25% profit. B sells it to C at a 10% loss. If C pays ₹3,375, what is A's cost price?",
    options: ["A) ₹3,000", "B) ₹2,800", "C) ₹2,500", "D) ₹3,200"],
    answer: "A",
    explanation: "B sold to C at 10% loss → B's CP = 3375 ÷ 0.9 = ₹3,750. A sold to B at 25% profit → A's CP = 3750 ÷ 1.25 = ₹3,000. Verify: A's SP = 3000×1.25 = 3750; B's SP = 3750×0.9 = 3375 ✓."
  },

  {
    id: 6032, section: "Maths",
    text: "By selling 45 items, a merchant loses an amount equal to the selling price of 5 items. Find the loss percentage.",
    options: ["A) 8%", "B) 9%", "C) 11%", "D) 10%"],
    answer: "D",
    explanation: "Total SP of 45 items = 45×SP. Loss = 5×SP. CP×45 − SP×45 = 5×SP → 45×CP = 50×SP → SP/CP = 45/50 = 9/10. Loss% = (1 − 9/10)×100 = 10%."
  },

  {
    id: 6033, section: "Maths",
    text: "A trader marks his goods 20% above cost price and allows a 10% discount. What is his profit percentage?",
    options: ["A) 6%", "B) 10%", "C) 8%", "D) 12%"],
    answer: "C",
    explanation: "Let CP = 100. MP = 120. SP = 120 × 0.90 = 108. Profit = 8%. Formula: Profit% = (1+markup%)(1−discount%) − 1 = 1.20 × 0.90 − 1 = 1.08 − 1 = 8%."
  },

  // ── COMPOUND INTEREST & SIMPLE INTEREST ──────────────────────────────

  {
    id: 6034, section: "Maths",
    text: "Find the difference between the compound interest and simple interest on ₹8,000 at 10% per annum for 2 years.",
    options: ["A) ₹80", "B) ₹70", "C) ₹60", "D) ₹90"],
    answer: "A",
    explanation: "SI = 8000×10×2/100 = ₹1,600. CI = 8000×[(1.1)²−1] = 8000×0.21 = ₹1,680. Difference = 1680−1600 = ₹80. Shortcut: Difference = P×(R/100)² = 8000×0.01 = ₹80."
  },

  {
    id: 6035, section: "Maths",
    text: "A sum of money triples itself in 8 years at simple interest. In how many years will it become 5 times itself at the same rate?",
    options: ["A) 12 years", "B) 14 years", "C) 18 years", "D) 16 years"],
    answer: "D",
    explanation: "Triple: SI = 2P in 8 years → 2P = P×R×8/100 → R = 25% p.a. For 5 times: SI = 4P → 4P = P×25×T/100 → T = 400/25 = 16 years."
  },

  {
    id: 6036, section: "Maths",
    text: "Find the compound interest on ₹10,000 at 10% per annum for 2 years, compounded annually.",
    options: ["A) ₹1,900", "B) ₹2,100", "C) ₹2,000", "D) ₹2,200"],
    answer: "B",
    explanation: "Amount = 10000×(1.10)² = 10000×1.21 = ₹12,100. CI = 12100 − 10000 = ₹2,100."
  },

  // ── RATIO, PROPORTION & PARTNERSHIP ─────────────────────────────────

  {
    id: 6037, section: "Maths",
    text: "A, B, and C share profits in the ratio 2:3:5. If the total profit is ₹30,500, what is B's share?",
    options: ["A) ₹9,150", "B) ₹8,500", "C) ₹9,500", "D) ₹10,000"],
    answer: "A",
    explanation: "Total ratio parts = 2+3+5 = 10. B's share = (3/10) × 30,500 = ₹9,150."
  },

  {
    id: 6038, section: "Maths",
    text: "A, B, C invest ₹20,000, ₹25,000, and ₹30,000 respectively. C is a working partner and receives 10% of the total profit first; the rest is divided in proportion to investment. If the total profit is ₹14,500, what is C's total share?",
    options: ["A) ₹6,670", "B) ₹6,450", "C) ₹6,120", "D) ₹7,000"],
    answer: "A",
    explanation: "C's management fee = 10% of 14,500 = ₹1,450. Remaining = ₹13,050. Investment ratio A:B:C = 20:25:30 = 4:5:6. Total parts = 15. C's investment share = 13,050×6/15 = ₹5,220. C's total = 1,450+5,220 = ₹6,670."
  },

  // ── ALLIGATION & MIXTURES ────────────────────────────────────────────

  {
    id: 6039, section: "Maths",
    text: "Two varieties of tea costing ₹126/kg and ₹135/kg are mixed. The mixture is sold at ₹130.50/kg at no profit or loss. In what ratio are they mixed?",
    options: ["A) 2:1", "B) 3:2", "C) 4:3", "D) 1:1"],
    answer: "D",
    explanation: "Using alligation: Ratio = (135−130.5) : (130.5−126) = 4.5 : 4.5 = 1:1. The two varieties are mixed in equal proportions."
  },

  {
    id: 6040, section: "Maths",
    text: "A container holds 8 litres of pure milk. 2 litres are removed and replaced with water. This process is repeated once more. What fraction of the mixture is now milk?",
    options: ["A) 7/16", "B) 9/16", "C) 5/8", "D) 3/4"],
    answer: "B",
    explanation: "After each replacement, milk fraction = (1 − 2/8) = 3/4. After 2 replacements: milk fraction = (3/4)² = 9/16. Verify: Initial milk=8L. After 1st: milk=6L. After 2nd replacement, remove 2L of 3/4 milk = 1.5L milk → milk = 4.5L out of 8L = 4.5/8 = 9/16 ✓."
  },

  // ── SPEED, DISTANCE & TIME ───────────────────────────────────────────

  {
    id: 6041, section: "Maths",
    text: "A and B start simultaneously from two ends of a circular track of length 26 km, walking towards each other at 5 km/h and 8 km/h respectively. After how many hours will they first meet?",
    options: ["A) 1.5 hours", "B) 2 hours", "C) 2.5 hours", "D) 3 hours"],
    answer: "B",
    explanation: "When two people walk towards each other on a circular track, their relative speed = sum of speeds = 5+8 = 13 km/h. They cover the full circle length (26 km) together before meeting. Time = 26÷13 = 2 hours."
  },

  {
    id: 6042, section: "Maths",
    text: "A boat goes 30 km upstream in 6 hours and downstream in 3.75 hours. Find the speed of the current.",
    options: ["A) 0.5 km/h", "B) 1 km/h", "C) 1.5 km/h", "D) 2 km/h"],
    answer: "C",
    explanation: "Upstream speed = 30/6 = 5 km/h. Downstream speed = 30/3.75 = 8 km/h. Speed of current = (Downstream − Upstream)/2 = (8−5)/2 = 1.5 km/h."
  },

  // ── TIME & WORK ──────────────────────────────────────────────────────

  {
    id: 6043, section: "Maths",
    text: "A and B together complete a work in 12 days. B and C together in 15 days. A and C together in 20 days. How many days will A alone take to complete the work?",
    options: ["A) 30 days", "B) 28 days", "C) 24 days", "D) 32 days"],
    answer: "A",
    explanation: "(A+B)+(B+C)+(C+A) = 1/12+1/15+1/20 = 5/60+4/60+3/60 = 12/60 = 1/5. So 2(A+B+C) = 1/5 → A+B+C = 1/10 per day. A alone = (A+B+C)−(B+C) = 1/10−1/15 = 3/30−2/30 = 1/30. A alone = 30 days."
  },

  {
    id: 6044, section: "Maths",
    text: "A is 3 times as efficient as B. Together they finish a piece of work in 12 days. In how many days can B alone finish the work?",
    options: ["A) 36 days", "B) 40 days", "C) 44 days", "D) 48 days"],
    answer: "D",
    explanation: "If B does 1 unit/day, A does 3 units/day. Together = 4 units/day. Work = 4×12 = 48 units. B alone = 48÷1 = 48 days."
  },

  // ── PERCENTAGE ───────────────────────────────────────────────────────

  {
    id: 6045, section: "Maths",
    text: "Two numbers are 20% and 25% more than a third number respectively. What percentage is the first number of the second?",
    options: ["A) 96%", "B) 94%", "C) 92%", "D) 98%"],
    answer: "A",
    explanation: "Let third number = x. First = 1.20x. Second = 1.25x. First as % of Second = (1.20x/1.25x)×100 = (1.20/1.25)×100 = 0.96×100 = 96%."
  },

  {
    id: 6046, section: "Maths",
    text: "A man's salary is first increased by 20% and then decreased by 20%. What is the net percentage change in his salary?",
    options: ["A) No change", "B) 2% decrease", "C) 4% decrease", "D) 4% increase"],
    answer: "C",
    explanation: "Net factor = 1.20 × 0.80 = 0.96 → 4% decrease. Alternatively: when the same % is applied as increase then decrease, net change = −(x²/100)% = −(400/100)% = −4%."
  },

  // ── NUMBER THEORY ────────────────────────────────────────────────────

  {
    id: 6047, section: "Maths",
    text: "Find the unit digit of 4¹⁰⁰ + 6¹⁰⁰.",
    options: ["A) 0", "B) 2", "C) 4", "D) 6"],
    answer: "B",
    explanation: "4ⁿ: unit digit is 6 when n is even (4²=16, 4⁴=256...). So 4¹⁰⁰ ends in 6. 6ⁿ: unit digit is always 6. So 6¹⁰⁰ ends in 6. Sum: 6+6=12. Unit digit = 2."
  },

  {
    id: 6048, section: "Maths",
    text: "Find the remainder when 7⁸⁰ is divided by 5.",
    options: ["A) 0", "B) 1", "C) 2", "D) 4"],
    answer: "B",
    explanation: "7 ≡ 2 (mod 5). Powers of 2 mod 5 cycle: 2,4,3,1 (period 4). 80 ÷ 4 = 20 remainder 0 → use the 4th value in cycle = 1. So 7⁸⁰ ≡ 2⁸⁰ ≡ 1 (mod 5). Remainder = 1."
  },

  {
    id: 6049, section: "Maths",
    text: "Find the sum of all odd numbers from 1 to 99.",
    options: ["A) 2000", "B) 2500", "C) 2250", "D) 2750"],
    answer: "B",
    explanation: "Odd numbers from 1 to 99: 1, 3, 5, …, 99. Number of terms = (99−1)/2 + 1 = 50. Sum of first n odd numbers = n². Sum = 50² = 2500."
  },

  // ── PERMUTATIONS & COMBINATIONS ──────────────────────────────────────

  {
    id: 6050, section: "Maths",
    text: "How many 4-letter words (with or without meaning) can be formed using letters of the word EQUATION, starting with a vowel? (All letters are distinct.)",
    options: ["A) 840", "B) 980", "C) 1200", "D) 1050"],
    answer: "D",
    explanation: "EQUATION: E,Q,U,A,T,I,O,N — 8 distinct letters. Vowels: E,U,A,I,O (5 vowels). Fix the 1st position as a vowel: 5 ways. Remaining 3 positions filled from remaining 7 letters: 7×6×5 = 210 ways. Total = 5×210 = 1050."
  },

  {
    id: 6051, section: "Maths",
    text: "In how many ways can 5 boys and 3 girls be seated in a row such that no two girls sit adjacent to each other?",
    options: ["A) 7200", "B) 10800", "C) 12000", "D) 14400"],
    answer: "D",
    explanation: "First arrange 5 boys: 5! = 120 ways. This creates 6 gaps (_B_B_B_B_B_). Select and arrange 3 girls in 3 of these 6 gaps: P(6,3) = 6×5×4 = 120 ways. Total = 120×120 = 14,400."
  },

  // ── PROBABILITY ──────────────────────────────────────────────────────

  {
    id: 6052, section: "Maths",
    text: "A speaks the truth 75% of the time and B speaks the truth 80% of the time. What is the probability that they contradict each other on the same statement?",
    options: ["A) 25%", "B) 30%", "C) 35%", "D) 40%"],
    answer: "C",
    explanation: "P(contradict) = P(A true, B false) + P(A false, B true) = (0.75×0.20) + (0.25×0.80) = 0.15 + 0.20 = 0.35 = 35%."
  },

  // ── ALGEBRA ──────────────────────────────────────────────────────────

  {
    id: 6053, section: "Maths",
    text: "If x² + 1/x² = 7, find the value of x⁴ + 1/x⁴.",
    options: ["A) 47", "B) 45", "C) 49", "D) 51"],
    answer: "A",
    explanation: "(x² + 1/x²)² = x⁴ + 2 + 1/x⁴. So x⁴ + 1/x⁴ = (x² + 1/x²)² − 2 = 7² − 2 = 49 − 2 = 47."
  },

  {
    id: 6054, section: "Maths",
    text: "Pipes A and B fill a tank in 20 and 30 minutes respectively. Pipe C empties it. All three together fill the tank in 24 minutes. How long does C take to empty a full tank alone?",
    options: ["A) 18 min", "B) 20 min", "C) 24 min", "D) 30 min"],
    answer: "C",
    explanation: "A+B rate = 1/20+1/30 = 3/60+2/60 = 5/60 = 1/12 per min. A+B+C = 1/24. C's drain rate = 1/12−1/24 = 2/24−1/24 = 1/24. C alone empties in 24 minutes."
  },

  // ── GEOMETRY & MENSURATION ───────────────────────────────────────────

  {
    id: 6055, section: "Maths",
    text: "The diagonal of a square is 12√2 cm. Find its area.",
    options: ["A) 120 cm²", "B) 132 cm²", "C) 156 cm²", "D) 144 cm²"],
    answer: "D",
    explanation: "Diagonal = a√2 where a is the side. 12√2 = a√2 → a = 12 cm. Area = a² = 144 cm². Shortcut: Area = (diagonal²)/2 = (12√2)²/2 = 288/2 = 144 cm²."
  },

  {
    id: 6056, section: "Maths",
    text: "A solid cone of radius 3 cm and height 12 cm is melted to form a solid sphere. Find the radius of the sphere.",
    options: ["A) 2 cm", "B) 4 cm", "C) 3 cm", "D) 5 cm"],
    answer: "C",
    explanation: "Volume of cone = (1/3)πr²h = (1/3)×π×9×12 = 36π cm³. Volume of sphere = (4/3)πR³. Setting equal: (4/3)πR³ = 36π → R³ = 27 → R = 3 cm."
  },

  // ── SETS, AVERAGES & STATISTICS ──────────────────────────────────────

  {
    id: 6057, section: "Maths",
    text: "The average of 5 consecutive even numbers is 52. Find the largest of these numbers.",
    options: ["A) 56", "B) 54", "C) 58", "D) 60"],
    answer: "A",
    explanation: "For consecutive even numbers, the average equals the middle (3rd) number. So the 3rd number = 52. The 5 numbers are: 48, 50, 52, 54, 56. Largest = 56."
  },

  {
    id: 6058, section: "Maths",
    text: "In a group of 50 students (25 boys and 25 girls), 50% of boys and 40% of girls are good at mathematics. What percentage of the entire group is good at mathematics?",
    options: ["A) 40%", "B) 42%", "C) 45%", "D) 48%"],
    answer: "C",
    explanation: "Boys good at maths = 50% of 25 = 12.5. Girls good at maths = 40% of 25 = 10. Total good = 22.5. Percentage = (22.5/50)×100 = 45%."
  },

  // ── LOGARITHMS & SEQUENCES ───────────────────────────────────────────

  {
    id: 6059, section: "Maths",
    text: "Given log 2 = 0.3010, find the value of log 5.",
    options: ["A) 0.6781", "B) 0.6881", "C) 0.6950", "D) 0.6990"],
    answer: "D",
    explanation: "log 5 = log(10/2) = log 10 − log 2 = 1 − 0.3010 = 0.6990."
  },

  {
    id: 6060, section: "Maths",
    text: "The first term of an AP is 3 and the common difference is 4. Which term of the AP is 99?",
    options: ["A) 22nd", "B) 23rd", "C) 24th", "D) 25th"],
    answer: "D",
    explanation: "General term: aₙ = a + (n−1)d. 99 = 3 + (n−1)×4 → 96 = (n−1)×4 → n−1 = 24 → n = 25. The 25th term is 99."
  }

];
