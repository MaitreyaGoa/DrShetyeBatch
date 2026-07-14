// math_level2_jul14.js – Dr Shetye Academic Programme
// Maths Level 2 Test — July 14th 2026
// 30 Questions · IDs 6001–6030 · 30 Marks · 45 Minutes
// CAT / IIM Level — PYQ-style from CAT, XAT, SNAP, GMAT, SSC CGL
// Topics: Profit/Loss, CI/SI, Alligation, Speed-Distance, Time-Work,
//         Percentage, Ratio, P&C, Probability, Number Theory, Geometry,
//         Algebra, Mensuration, Averages, Logarithms, Sets, Clocks, Sequences

var questions = [

  // ── PROFIT / LOSS & COMMERCIAL ──────────────────────────────────────

  {
    id: 6001, section: "Maths",
    text: "A sells an article to B at a profit of 25%. B sells it to C at a loss of 20%. If C pays ₹1500, what is A's cost price?",
    options: ["A) ₹1000", "B) ₹1200", "C) ₹1250", "D) ₹1500"],
    answer: "D",
    explanation: "B's SP to C = ₹1500. B sold at 20% loss → B's CP = 1500/0.8 = ₹1875. But A sold to B at 25% profit → A's CP = 1875/1.25 = ₹1500. Verify: A's SP = 1500×1.25 = 1875; B's SP = 1875×0.8 = 1500 ✓."
  },

  {
    id: 6002, section: "Maths",
    text: "A man sold two articles each at ₹1320. On one he made a 20% profit and on the other a 20% loss. What is his overall percentage gain or loss?",
    options: ["A) No profit no loss", "B) 2% loss", "C) 4% loss", "D) 4% gain"],
    answer: "C",
    explanation: "When SP is same and percentage gain = percentage loss = x, overall result is always a loss of x²/100%. Here x=20, loss = 400/100 = 4%. Verify: CP₁=1320/1.2=1100, CP₂=1320/0.8=1650. Total CP=2750, Total SP=2640. Loss=110, Loss%=110/2750×100=4%."
  },

  {
    id: 6003, section: "Maths",
    text: "A trader marks goods 40% above cost price and allows a 15% discount. Find the profit percentage.",
    options: ["A) 19%", "B) 17%", "C) 21%", "D) 23%"],
    answer: "A",
    explanation: "Let CP=100. MP=140. SP=140×0.85=119. Profit=19. Profit%=19%. Standard formula: profit% = (1+markup)(1-discount)-1 = 1.4×0.85-1 = 1.19-1 = 19%."
  },

  // ── COMPOUND INTEREST & SIMPLE INTEREST ──────────────────────────────

  {
    id: 6004, section: "Maths",
    text: "Find the compound interest on ₹10,000 for 3 years at 20% per annum, compounded annually.",
    options: ["A) ₹6000", "B) ₹7500", "C) ₹8000", "D) ₹7280"],
    answer: "D",
    explanation: "Amount = P(1+R/100)ⁿ = 10000×(1.2)³ = 10000×1.728 = ₹17,280. CI = 17280-10000 = ₹7280."
  },

  {
    id: 6005, section: "Maths",
    text: "The compound interest on a sum for 2 years at 15% p.a. is ₹1,290. Find the principal.",
    options: ["A) ₹4000", "B) ₹3500", "C) ₹4500", "D) ₹5000"],
    answer: "A",
    explanation: "CI = P×[(1+R/100)²−1]. 1290 = P×[(1.15)²−1] = P×[1.3225−1] = P×0.3225. P = 1290/0.3225 = ₹4000."
  },

  {
    id: 6006, section: "Maths",
    text: "At what rate % simple interest per annum will ₹5000 amount to ₹8000 in 6 years?",
    options: ["A) 8%", "B) 10%", "C) 12%", "D) 15%"],
    answer: "B",
    explanation: "SI = 8000−5000 = ₹3000. SI = PRT/100 → 3000 = 5000×R×6/100 → R = 3000×100/(5000×6) = 10%."
  },

  // ── RATIO, PROPORTION & PARTNERSHIP ─────────────────────────────────

  {
    id: 6007, section: "Maths",
    text: "If a:b = 2:3 and b:c = 4:5 and c:d = 6:7, find a:d.",
    options: ["A) 12:35", "B) 16:35", "C) 14:35", "D) 18:35"],
    answer: "B",
    explanation: "a/d = (a/b)×(b/c)×(c/d) = (2/3)×(4/5)×(6/7) = 48/105 = 16/35. So a:d = 16:35."
  },

  {
    id: 6008, section: "Maths",
    text: "A invests ₹50,000 for the full year. B joins after 4 months with ₹60,000. At year end, total profit is ₹18,000. Find B's share.",
    options: ["A) ₹8000", "B) ₹7500", "C) ₹7000", "D) ₹8500"],
    answer: "A",
    explanation: "Capital × Time: A = 50000×12 = 6,00,000. B = 60000×8 = 4,80,000. Ratio A:B = 600:480 = 5:4. Total parts = 9. B's share = 18000×4/9 = ₹8000."
  },

  // ── ALLIGATION & MIXTURES ────────────────────────────────────────────

  {
    id: 6009, section: "Maths",
    text: "In what ratio must 30% alcohol solution be mixed with 50% alcohol solution to get a 37.5% alcohol solution?",
    options: ["A) 3:5", "B) 5:4", "C) 4:5", "D) 5:3"],
    answer: "D",
    explanation: "By rule of alligation: ratio = (50−37.5):(37.5−30) = 12.5:7.5 = 5:3. So 30% solution:50% solution = 5:3."
  },

  {
    id: 6010, section: "Maths",
    text: "A container has 40 litres of milk and water in ratio 3:1. How many litres of water must be added to make the ratio 3:2?",
    options: ["A) 10", "B) 8", "C) 12", "D) 15"],
    answer: "A",
    explanation: "Milk=30L, Water=10L. Adding x litres of water: 30/(10+x)=3/2 → 60=30+3x → 3x=30 → x=10 litres."
  },

  // ── SPEED, DISTANCE & TIME ───────────────────────────────────────────

  {
    id: 6011, section: "Maths",
    text: "A train 200 m long and another train 300 m long are running towards each other at 60 km/h and 90 km/h respectively. How long will they take to completely cross each other?",
    options: ["A) 10 sec", "B) 12 sec", "C) 14 sec", "D) 16 sec"],
    answer: "B",
    explanation: "Relative speed (opposite directions) = 60+90 = 150 km/h = 150×5/18 = 125/3 m/s. Total length = 200+300 = 500 m. Time = 500÷(125/3) = 500×3/125 = 12 seconds."
  },

  {
    id: 6012, section: "Maths",
    text: "A train crosses a platform of 200 m in 20 seconds at 90 km/h. Find the length of the train.",
    options: ["A) 250 m", "B) 300 m", "C) 320 m", "D) 350 m"],
    answer: "B",
    explanation: "Speed = 90 km/h = 90×5/18 = 25 m/s. Distance = Speed×Time = 25×20 = 500 m. Length of train = Total distance − Platform = 500−200 = 300 m."
  },

  // ── TIME & WORK ──────────────────────────────────────────────────────

  {
    id: 6013, section: "Maths",
    text: "A can do a work in 10 days, B in 15 days. They work together for 4 days, then A leaves. How many more days does B need to finish?",
    options: ["A) 4 days", "B) 6 days", "C) 7 days", "D) 5 days"],
    answer: "D",
    explanation: "Combined rate = 1/10+1/15 = 3/30+2/30 = 5/30 = 1/6 per day. In 4 days together: 4×1/6 = 2/3 done. Remaining = 1/3. B alone: (1/3)÷(1/15) = 15/3 = 5 days."
  },

  {
    id: 6014, section: "Maths",
    text: "12 men can complete a work in 20 days. After 10 days, 4 men leave. How many more days are needed to finish the remaining work?",
    options: ["A) 12", "B) 13", "C) 14", "D) 15"],
    answer: "D",
    explanation: "Total work = 12×20 = 240 man-days. Work done in 10 days = 12×10 = 120. Remaining = 120 man-days. Men left = 8. Additional days = 120/8 = 15 days."
  },

  // ── PERCENTAGE ───────────────────────────────────────────────────────

  {
    id: 6015, section: "Maths",
    text: "If the price of a commodity rises by 25%, by what percentage must its consumption be reduced to keep expenditure unchanged?",
    options: ["A) 20%", "B) 16%", "C) 22%", "D) 25%"],
    answer: "A",
    explanation: "Reduction in consumption = [Increase%/(100+Increase%)]×100 = [25/125]×100 = 20%. Verify: If price=100→125, consumption=100→80, expenditure=100×100=80×125=10000 ✓."
  },

  {
    id: 6016, section: "Maths",
    text: "A student scored 45% marks and failed by 30 marks. The passing mark is 60% of total. Find the total marks.",
    options: ["A) 150", "B) 200", "C) 250", "D) 300"],
    answer: "B",
    explanation: "0.45M + 30 = 0.60M → 0.15M = 30 → M = 200. Verify: 45% of 200=90, pass mark=60% of 200=120, 90+30=120 ✓."
  },

  // ── NUMBER THEORY ────────────────────────────────────────────────────

  {
    id: 6017, section: "Maths",
    text: "Find the unit digit of 173⁴⁵ × 162⁷².",
    options: ["A) 2", "B) 4", "C) 6", "D) 8"],
    answer: "D",
    explanation: "Unit digit of 3ⁿ cycles: 3,9,7,1 (period 4). 45 mod 4=1 → unit digit of 3⁴⁵=3. Unit digit of 2ⁿ cycles: 2,4,8,6 (period 4). 72 mod 4=0 → unit digit of 2⁷²=6. Product unit digit: 3×6=18, unit digit=8."
  },

  {
    id: 6018, section: "Maths",
    text: "Find the remainder when 3¹⁰⁰ is divided by 8.",
    options: ["A) 0", "B) 3", "C) 7", "D) 1"],
    answer: "D",
    explanation: "3¹=3, 3²=9≡1 (mod 8). Pattern repeats with period 2. 100 is even → 3¹⁰⁰≡(3²)⁵⁰≡1⁵⁰≡1 (mod 8). Remainder=1."
  },

  {
    id: 6019, section: "Maths",
    text: "Find the highest power of 5 in 100! (100 factorial).",
    options: ["A) 20", "B) 24", "C) 22", "D) 26"],
    answer: "B",
    explanation: "Using Legendre's formula: ⌊100/5⌋+⌊100/25⌋+⌊100/125⌋+... = 20+4+0 = 24."
  },

  // ── PERMUTATIONS & COMBINATIONS ──────────────────────────────────────

  {
    id: 6020, section: "Maths",
    text: "How many 4-digit numbers can be formed using the digits 1, 2, 3, 4, 5 (no repetition) that are divisible by 4?",
    options: ["A) 16", "B) 20", "C) 24", "D) 28"],
    answer: "C",
    explanation: "A number is divisible by 4 if its last 2 digits form a number divisible by 4. Valid last-2-digit pairs from {1,2,3,4,5}: 12, 24, 32, 52 (four pairs). For each, the remaining 3 digits can be arranged in 3!=6 ways. Total = 4×6 = 24."
  },

  {
    id: 6021, section: "Maths",
    text: "From 5 men and 4 women, a committee of 4 is to be formed. In how many ways can this be done if the committee must have at least 2 women?",
    options: ["A) 81", "B) 76", "C) 66", "D) 86"],
    answer: "A",
    explanation: "Exactly 2 women: C(4,2)×C(5,2) = 6×10 = 60. Exactly 3 women: C(4,3)×C(5,1) = 4×5 = 20. Exactly 4 women: C(4,4)×C(5,0) = 1×1 = 1. Total = 60+20+1 = 81."
  },

  // ── PROBABILITY ──────────────────────────────────────────────────────

  {
    id: 6022, section: "Maths",
    text: "A bag contains 4 red, 3 green, and 2 blue balls. Two balls are drawn at random. Find the probability that both are the same colour.",
    options: ["A) 5/18", "B) 7/18", "C) 5/12", "D) 7/12"],
    answer: "A",
    explanation: "Total ways = C(9,2) = 36. Same colour: C(4,2)+C(3,2)+C(2,2) = 6+3+1 = 10. Probability = 10/36 = 5/18."
  },

  // ── ALGEBRA ──────────────────────────────────────────────────────────

  {
    id: 6023, section: "Maths",
    text: "If x+y=5 and xy=6, find x³+y³.",
    options: ["A) 25", "B) 30", "C) 40", "D) 35"],
    answer: "D",
    explanation: "x³+y³=(x+y)³−3xy(x+y) = 5³−3×6×5 = 125−90 = 35."
  },

  {
    id: 6024, section: "Maths",
    text: "The cost of 3 pens and 4 pencils is ₹52. The cost of 4 pens and 3 pencils is ₹53. Find the cost of one pen.",
    options: ["A) ₹6", "B) ₹7", "C) ₹8", "D) ₹9"],
    answer: "C",
    explanation: "3x+4y=52 ...(1), 4x+3y=53 ...(2). Adding: 7x+7y=105 → x+y=15. Subtracting (1) from (2): x−y=1. Solving: x=8, y=7. Cost of one pen = ₹8."
  },

  // ── GEOMETRY & MENSURATION ───────────────────────────────────────────

  {
    id: 6025, section: "Maths",
    text: "Two circles have radii 8 cm and 3 cm. The distance between their centres is 13 cm. Find the length of the common external tangent.",
    options: ["A) 10 cm", "B) 11 cm", "C) 12 cm", "D) 14 cm"],
    answer: "C",
    explanation: "Length of external common tangent = √[d²−(r₁−r₂)²] = √[13²−(8−3)²] = √[169−25] = √144 = 12 cm."
  },

  {
    id: 6026, section: "Maths",
    text: "Find the total surface area of a right circular cylinder of radius 7 cm and height 10 cm. (π=22/7)",
    options: ["A) 704 cm²", "B) 726 cm²", "C) 748 cm²", "D) 770 cm²"],
    answer: "C",
    explanation: "TSA = 2πr(r+h) = 2×(22/7)×7×(7+10) = 2×22×17 = 44×17 = 748 cm²."
  },

  // ── SETS, AVERAGES & STATISTICS ──────────────────────────────────────

  {
    id: 6027, section: "Maths",
    text: "In a class of 100 students, 60 like Cricket, 50 like Football, and 30 like both. How many students like neither sport?",
    options: ["A) 10", "B) 15", "C) 20", "D) 25"],
    answer: "C",
    explanation: "Using inclusion-exclusion: |C∪F| = 60+50−30 = 80. Students liking neither = 100−80 = 20."
  },

  {
    id: 6028, section: "Maths",
    text: "The average of 20 numbers is 45. Later it is found that two numbers 60 and 45 were wrongly noted as 40 and 25. Find the correct average.",
    options: ["A) 46", "B) 47", "C) 48", "D) 49"],
    answer: "B",
    explanation: "Sum error: correct values (60+45)=105; recorded (40+25)=65; error=−40 (undercounted by 40). Correct sum = 20×45+40 = 900+40 = 940. Correct average = 940/20 = 47."
  },

  // ── LOGARITHMS & SEQUENCES ───────────────────────────────────────────

  {
    id: 6029, section: "Maths",
    text: "Given log 2 = 0.3010 and log 3 = 0.4771, find the value of log 12.",
    options: ["A) 1.0681", "B) 1.0781", "C) 1.0791", "D) 1.0981"],
    answer: "C",
    explanation: "log 12 = log(4×3) = log 4 + log 3 = 2 log 2 + log 3 = 2(0.3010)+0.4771 = 0.6020+0.4771 = 1.0791."
  },

  {
    id: 6030, section: "Maths",
    text: "In a G.P., the 4th term is 24 and the 7th term is 192. Find the first term.",
    options: ["A) 2", "B) 3", "C) 4", "D) 6"],
    answer: "B",
    explanation: "Let a be the first term and r the common ratio. ar³=24 and ar⁶=192. Dividing: r³=192/24=8 → r=2. Substituting back: a×8=24 → a=3. First term=3."
  }

];
