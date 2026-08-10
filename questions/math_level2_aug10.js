// math_level2_aug10.js – Dr Shetye Academic Programme
// Maths Level 2 Test — August 10th 2026
// 30 Questions · IDs 6091–6120 · 30 Marks · 45 Minutes
// CAT / IIM / XAT / SNAP Level — Multi-concept, textbook-quality questions
// Difficulty: ~75% Medium-Hard, ~25% Very Hard
// Topics: Profit/Loss (3), CI/SI (3), Ratio/Partnership (2), Alligation (2),
//         Speed-Distance-Boats (2), Time-Work (2), Percentage (2),
//         Number Theory (3), P&C (2), Probability (1), Algebra (2),
//         Geometry (3), Sets/Averages (1), Logarithms (1), AP (1)

var questions = [

  // ── PROFIT / LOSS & COMMERCIAL ──────────────────────────────────────

  {
    id: 6091, section: "Maths",
    text: "A dishonest dealer claims to sell goods at cost price but uses a false weight of 800 g in place of 1 kg. He also adulterates the goods by mixing 20% impurity (by weight) in every lot he sells. If the impurity costs him nothing, what is his overall profit percentage?",
    options: ["A) 56.25%", "B) 50%", "C) 52.5%", "D) 60%"],
    answer: "A",
    explanation: "The dealer sells 800 g of mixture (claiming 1 kg) at the CP of 1 kg. Of the 800 g sold, 20% = 160 g is free impurity, so actual goods in each 'kg' sold = 640 g. He charges the CP of 1000 g but his real cost is only that of 640 g of actual goods. Profit% = [(1000 − 640) / 640] × 100 = (360/640) × 100 = 56.25%."
  },

  {
    id: 6092, section: "Maths",
    text: "A trader purchases goods at a 25% discount on the listed price and sells them at a 10% discount on the listed price. Additionally, he uses a false weight — he gives only 800 g of goods while claiming to give 1 kg. Calculate the trader's overall profit percentage on the actual cost incurred.",
    options: ["A) 40%", "B) 46%", "C) 56%", "D) 50%"],
    answer: "D",
    explanation: "Let the listed price per 1 kg = ₹100. Trader buys 1 kg at 25% discount → pays ₹75 per kg. He gives only 800 g per 'kg', so his actual outgo for what he delivers is 75 × (800/1000) = ₹60. He sells at 10% discount on listed price → charges ₹90 per kg (i.e., per 800 g given). Profit% = [(90 − 60) / 60] × 100 = (30/60) × 100 = 50%."
  },

  {
    id: 6093, section: "Maths",
    text: "A sells a laptop to B at 20% profit. B sells it to C at a 10% loss. C then sells it to D at 25% profit. If D paid ₹10,800 for the laptop, find the original cost price of the laptop for A.",
    options: ["A) ₹8,000", "B) ₹7,000", "C) ₹7,500", "D) ₹8,500"],
    answer: "A",
    explanation: "Working backwards: D's price = C's SP = ₹10,800. C's CP = 10,800 / 1.25 = ₹8,640. B's SP = C's CP = ₹8,640. B's CP = 8,640 / 0.90 = ₹9,600. A's SP = B's CP = ₹9,600. A's CP = 9,600 / 1.20 = ₹8,000."
  },

  // ── COMPOUND INTEREST & SIMPLE INTEREST ──────────────────────────────

  {
    id: 6094, section: "Maths",
    text: "A principal amount invested at 10% per annum compound interest (compounded annually) earns a total compound interest of ₹3,310 over 3 years. Find the principal. Also verify by computing the amount.",
    options: ["A) ₹8,000", "B) ₹9,000", "C) ₹12,000", "D) ₹10,000"],
    answer: "D",
    explanation: "CI = P[(1 + R/100)ⁿ − 1]. Here R=10%, n=3: (1.10)³ = 1.331, so factor = 0.331. Thus 3310 = P × 0.331 → P = 3310 / 0.331 = ₹10,000. Verify: Amount = 10,000 × 1.331 = ₹13,310; CI = ₹3,310 ✓."
  },

  {
    id: 6095, section: "Maths",
    text: "A sum of ₹5,000 is lent in two parts: one part at 6% per annum simple interest and the remaining part at 9% per annum simple interest. If the total interest earned at the end of 2 years is ₹780, find the sum lent at 9% per annum.",
    options: ["A) ₹3,000", "B) ₹2,000", "C) ₹2,500", "D) ₹3,500"],
    answer: "A",
    explanation: "If the entire ₹5,000 were lent at 6%, interest = 5000 × 0.06 × 2 = ₹600. But actual interest = ₹780 → excess = ₹180. Each rupee transferred from 6% to 9% earns extra 3% per year × 2 years = 6% = ₹0.06 per rupee. Sum at 9% = 180 / 0.06 = ₹3,000. Verify: 2000 × 6% × 2 + 3000 × 9% × 2 = 240 + 540 = ₹780 ✓."
  },

  {
    id: 6096, section: "Maths",
    text: "The difference between compound interest (compounded annually) and simple interest on a certain principal at 10% per annum for 3 years is ₹620. Find the principal.",
    options: ["A) ₹16,000", "B) ₹18,000", "C) ₹22,000", "D) ₹20,000"],
    answer: "D",
    explanation: "For 3 years, CI − SI = P × R² × (R + 300) / 100³, where R = 10. Substituting: 620 = P × 100 × 310 / 1,000,000 = P × 31,000 / 1,000,000 = 0.031P. Hence P = 620 / 0.031 = ₹20,000. Verify: SI = 20,000 × 0.3 = ₹6,000; CI = 20,000 × (1.331 − 1) = ₹6,620; Difference = ₹620 ✓."
  },

  // ── RATIO, PROPORTION & PARTNERSHIP ─────────────────────────────────

  {
    id: 6097, section: "Maths",
    text: "A, B, and C enter into a business partnership. A's capital is invested for 4 months, B's capital for 8 months, and C's capital for 12 months. At the end of the year, it is found that A's capital for 4 months equals B's capital for 8 months equals C's capital for 12 months. If the total profit earned is ₹9,900, find the share of each partner.",
    options: ["A) A = ₹4,400; B = ₹3,300; C = ₹2,200", "B) A = ₹4,950; B = ₹3,300; C = ₹1,650", "C) A = ₹3,300; B = ₹3,300; C = ₹3,300", "D) A = ₹5,400; B = ₹2,700; C = ₹1,800"],
    answer: "C",
    explanation: "Let A × 4 = B × 8 = C × 12 = k (a common value). Then effective capital-time products are A×4 : B×8 : C×12 = k : k : k = 1 : 1 : 1. Since the profit-sharing ratio is 1:1:1, each partner receives ₹9,900 / 3 = ₹3,300."
  },

  {
    id: 6098, section: "Maths",
    text: "A starts a business with ₹75,000. After 4 months, B joins with ₹45,000. After a further 8 months (i.e., 12 months from A's start), C joins with ₹60,000 for the remaining 4 months of the year. Total profit at year-end is ₹66,000. Find the difference between B's share and C's share of the profit.",
    options: ["A) ₹10,000", "B) ₹8,000", "C) ₹9,000", "D) ₹12,000"],
    answer: "D",
    explanation: "Effective capital-time: A = 75,000 × 16 = 12,00,000; B = 45,000 × 12 = 5,40,000; C = 60,000 × 4 = 2,40,000. Ratio A:B:C = 1,200,000 : 540,000 : 240,000 = 20 : 9 : 4 (dividing by 60,000). Total parts = 33. B's share = 66,000 × 9/33 = ₹18,000. C's share = 66,000 × 4/33 = ₹8,000. Difference = ₹18,000 − ₹8,000 = ₹10,000."
  },

  // ── ALLIGATION & MIXTURES ────────────────────────────────────────────

  {
    id: 6099, section: "Maths",
    text: "Three vessels A, B, and C have capacities 3 L, 5 L, and 7 L respectively. Vessel A contains milk and water in the ratio 1:2; vessel B in the ratio 2:3; and vessel C in the ratio 3:4. All three vessels are completely emptied into a large container. Find the percentage of milk in the resulting mixture.",
    options: ["A) 38%", "B) 39%", "C) 42%", "D) 40%"],
    answer: "D",
    explanation: "Milk in A = 3 × 1/3 = 1 L; Milk in B = 5 × 2/5 = 2 L; Milk in C = 7 × 3/7 = 3 L. Total milk = 1 + 2 + 3 = 6 L. Total mixture = 3 + 5 + 7 = 15 L. Percentage of milk = (6/15) × 100 = 40%."
  },

  {
    id: 6100, section: "Maths",
    text: "A container holds 81 litres of pure acid. 27 litres of acid is drawn out and replaced with water. The mixture is stirred well, and then 27 litres of the mixture is again drawn out and replaced with water. Find the final ratio of acid to water in the container.",
    options: ["A) 3:5", "B) 4:5", "C) 5:4", "D) 2:3"],
    answer: "B",
    explanation: "After each replacement of 27 L from 81 L, the fraction of acid remaining is (1 − 27/81) = 2/3. After two replacements: fraction of acid = (2/3)² = 4/9. Acid = 81 × 4/9 = 36 L; Water = 81 − 36 = 45 L. Ratio of acid to water = 36 : 45 = 4 : 5."
  },

  // ── SPEED, DISTANCE & TIME ───────────────────────────────────────────

  {
    id: 6101, section: "Maths",
    text: "A boat covers 30 km upstream in 3 hours and returns the same 30 km downstream in 2 hours. Find (i) the speed of the current and (ii) the distance the boat travels downstream in 5 hours.",
    options: ["A) 2 km/h; 65 km", "B) 2.5 km/h; 75 km", "C) 3 km/h; 80 km", "D) 3.5 km/h; 85 km"],
    answer: "B",
    explanation: "Upstream speed = 30/3 = 10 km/h. Downstream speed = 30/2 = 15 km/h. Speed of current = (Downstream − Upstream)/2 = (15 − 10)/2 = 2.5 km/h. Speed of boat in still water = (15 + 10)/2 = 12.5 km/h. Downstream distance in 5 hours = 15 × 5 = 75 km."
  },

  {
    id: 6102, section: "Maths",
    text: "Two cities P and Q are 420 km apart. A train leaves P for Q at 7:00 AM travelling at 60 km/h. Another train leaves Q for P at 9:00 AM travelling at 90 km/h. At what time do the two trains meet, and how far from city P does the meeting occur?",
    options: ["A) 11:00 AM; 240 km", "B) 10:30 AM; 210 km", "C) 11:00 AM; 220 km", "D) 11:30 AM; 255 km"],
    answer: "A",
    explanation: "By 9:00 AM, the first train has travelled 2 × 60 = 120 km, leaving a gap of 420 − 120 = 300 km between the trains. They now approach each other at a combined speed of 60 + 90 = 150 km/h. Time to meet = 300 / 150 = 2 hours after 9:00 AM → meeting time = 11:00 AM. Distance of meeting from P = 120 + 60 × 2 = 120 + 120 = 240 km from P."
  },

  // ── TIME & WORK ──────────────────────────────────────────────────────

  {
    id: 6103, section: "Maths",
    text: "A and B together can complete a work in 12 days. A alone can complete it in 20 days. C is twice as efficient as A. All three — A, B, and C — work together for 4 days, after which A leaves. B and C then finish the remaining work. How many additional days do B and C take to complete the remaining work?",
    options: ["A) 1 day", "B) 2 days", "C) 3 days", "D) 4 days"],
    answer: "B",
    explanation: "A's rate = 1/20 per day. A+B rate = 1/12 per day → B's rate = 1/12 − 1/20 = (5−3)/60 = 2/60 = 1/30 per day. C = twice A → C's rate = 2/20 = 1/10 per day. Combined rate of A+B+C = 1/20 + 1/30 + 1/10 = 3/60 + 2/60 + 6/60 = 11/60 per day. Work done in 4 days = 4 × 11/60 = 44/60 = 11/15. Remaining = 1 − 11/15 = 4/15. B+C rate = 1/30 + 1/10 = 1/30 + 3/30 = 4/30 = 2/15 per day. Days needed = (4/15) ÷ (2/15) = 2 days."
  },

  {
    id: 6104, section: "Maths",
    text: "A certain number of men can complete a piece of work in 100 days. If there were 10 fewer men, the work would take 10 more days to complete. Assuming each man works at the same rate, find the original number of men.",
    options: ["A) 90", "B) 110", "C) 100", "D) 120"],
    answer: "B",
    explanation: "Let the original number of men = n. Since total work is constant: n × 100 = (n − 10) × 110. Expanding: 100n = 110n − 1100. Solving: 10n = 1100 → n = 110. Verify: 110 men × 100 days = 11,000 man-days; 100 men × 110 days = 11,000 man-days ✓."
  },

  // ── PERCENTAGE ───────────────────────────────────────────────────────

  {
    id: 6105, section: "Maths",
    text: "In an election between two candidates, 20% of the total votes cast were declared invalid. Candidate A received 60% of the valid votes. If the total number of votes cast was 7,500, find the number of votes received by the losing candidate.",
    options: ["A) 2,000", "B) 2,200", "C) 2,600", "D) 2,400"],
    answer: "D",
    explanation: "Invalid votes = 20% of 7,500 = 1,500. Valid votes = 7,500 − 1,500 = 6,000. Candidate A (winner) received 60% of 6,000 = 3,600 votes. Losing candidate (B) received 40% of 6,000 = 2,400 votes."
  },

  {
    id: 6106, section: "Maths",
    text: "A book has a marked price of ₹1,500. A customer is offered successive discounts of 20% and 10% on the marked price. After applying both discounts, the shopkeeper charges 8% GST on the final discounted price. Find the total amount the customer pays.",
    options: ["A) ₹1,100.80", "B) ₹1,134.40", "C) ₹1,152.00", "D) ₹1,166.40"],
    answer: "D",
    explanation: "After first discount (20%): 1,500 × 0.80 = ₹1,200. After second discount (10%): 1,200 × 0.90 = ₹1,080. After GST (8%): 1,080 × 1.08 = ₹1,166.40."
  },

  // ── NUMBER THEORY ────────────────────────────────────────────────────

  {
    id: 6107, section: "Maths",
    text: "Find the largest 4-digit number that is exactly divisible by each of 12, 15, 18, and 27.",
    options: ["A) 9,450", "B) 9,720", "C) 9,540", "D) 9,810"],
    answer: "B",
    explanation: "LCM(12, 15, 18, 27): 12 = 2²×3; 15 = 3×5; 18 = 2×3²; 27 = 3³. LCM = 2² × 3³ × 5 = 4 × 27 × 5 = 540. Largest 4-digit multiple of 540: ⌊9999/540⌋ = 18; 18 × 540 = 9,720. The next multiple, 19 × 540 = 10,260, exceeds 9,999. Answer = 9,720."
  },

  {
    id: 6108, section: "Maths",
    text: "Find the number of trailing zeros in 100! (i.e., in the product 1 × 2 × 3 × … × 100).",
    options: ["A) 24", "B) 20", "C) 22", "D) 25"],
    answer: "A",
    explanation: "Trailing zeros are produced by factors of 10 = 2 × 5. Since factors of 2 exceed factors of 5 in any factorial, count factors of 5 in 100!. Multiples of 5 up to 100: ⌊100/5⌋ = 20. Multiples of 25 (contributing an extra 5): ⌊100/25⌋ = 4. Multiples of 125: ⌊100/125⌋ = 0. Total trailing zeros = 20 + 4 = 24."
  },

  {
    id: 6109, section: "Maths",
    text: "A two-digit number is such that when it is multiplied by the sum of its digits, the product is 424. Find the two-digit number.",
    options: ["A) 48", "B) 64", "C) 53", "D) 72"],
    answer: "C",
    explanation: "Let the two-digit number = N and the sum of its digits = S. Then N × S = 424. Factorising 424: 424 = 8 × 53. Since 53 is a two-digit number and the sum of its digits = 5 + 3 = 8, we have 53 × 8 = 424 ✓. Verify the other factor pair 424 = 1×424 (not two-digit); 2×212 (not two-digit); 4×106 (not two-digit). N = 53 is the unique solution."
  },

  // ── PERMUTATIONS & COMBINATIONS ──────────────────────────────────────

  {
    id: 6110, section: "Maths",
    text: "How many 5-digit numbers can be formed using the digits 0, 1, 2, 3, 4 (each used at most once) such that the number is divisible by 4? (A number is divisible by 4 if its last two digits form a number divisible by 4.)",
    options: ["A) 24", "B) 27", "C) 36", "D) 30"],
    answer: "D",
    explanation: "Two-digit endings from {0,1,2,3,4} (distinct digits) divisible by 4: 04, 12, 20, 24, 32, 40. For each, count valid arrangements of the remaining 3 digits in the first 3 positions (first digit ≠ 0). Endings 04, 20, 40 → remaining digits are all non-zero: 3! = 6 each. Endings 12, 24, 32 → remaining digits include 0: first position has 2 choices, then 2! for remaining = 4 each. Total = 3×6 + 3×4 = 18 + 12 = 30."
  },

  {
    id: 6111, section: "Maths",
    text: "In how many ways can 6 boys and 4 girls be seated in a row such that no two girls are adjacent to each other?",
    options: ["A) 4,32,000", "B) 6,04,800", "C) 5,04,000", "D) 7,20,000"],
    answer: "B",
    explanation: "First arrange 6 boys in a row: 6! = 720 ways. This creates 7 gaps (including the two ends): _ B _ B _ B _ B _ B _ B _. Choose 4 of these 7 gaps for the 4 girls: C(7,4) = 35 ways. Arrange the 4 girls in the chosen gaps: 4! = 24 ways. Total = 720 × 35 × 24 = 6,04,800."
  },

  // ── PROBABILITY ──────────────────────────────────────────────────────

  {
    id: 6112, section: "Maths",
    text: "A bag contains 4 red balls, 6 blue balls, and 5 green balls. Three balls are drawn at random without replacement. Find the probability that one ball of each colour is drawn.",
    options: ["A) 24/91", "B) 8/91", "C) 12/91", "D) 16/91"],
    answer: "A",
    explanation: "Total ways to choose 3 balls from 15 = C(15,3) = 455. Favourable outcomes (one red, one blue, one green) = C(4,1) × C(6,1) × C(5,1) = 4 × 6 × 5 = 120. Probability = 120/455 = 24/91."
  },

  // ── ALGEBRA ──────────────────────────────────────────────────────────

  {
    id: 6113, section: "Maths",
    text: "If x² + y² = 29 and xy = 10, find the value of (x + y)² − (x − y)².",
    options: ["A) 30", "B) 35", "C) 45", "D) 40"],
    answer: "D",
    explanation: "Using the algebraic identity: (x+y)² − (x−y)² = [(x+y) + (x−y)][(x+y) − (x−y)] = (2x)(2y) = 4xy. Therefore the value = 4 × 10 = 40. (Alternatively: (x+y)² = x²+y²+2xy = 29+20 = 49; (x−y)² = x²+y²−2xy = 29−20 = 9; difference = 49 − 9 = 40.)"
  },

  {
    id: 6114, section: "Maths",
    text: "The sum of three consecutive terms of a geometric progression is 7 and their product is 8. Find the largest of the three terms.",
    options: ["A) 2", "B) 4", "C) 3", "D) 5"],
    answer: "B",
    explanation: "Let the three consecutive terms of the GP be a/r, a, ar. Their product = (a/r)(a)(ar) = a³ = 8 → a = 2. Their sum = a/r + a + ar = 2/r + 2 + 2r = 7 → 2/r + 2r = 5 → 2r² − 5r + 2 = 0 → (2r−1)(r−2) = 0 → r = 2 or r = 1/2. If r = 2: terms are 1, 2, 4. If r = 1/2: terms are 4, 2, 1. Either way, the three terms are 1, 2, 4. Largest = 4."
  },

  // ── GEOMETRY & MENSURATION ───────────────────────────────────────────

  {
    id: 6115, section: "Maths",
    text: "The diagonals of a rhombus are 24 cm and 10 cm. Find the perimeter of the rhombus.",
    options: ["A) 52 cm", "B) 48 cm", "C) 50 cm", "D) 56 cm"],
    answer: "A",
    explanation: "The diagonals of a rhombus bisect each other at right angles. Each side of the rhombus = √[(half-diagonal₁)² + (half-diagonal₂)²] = √[(12)² + (5)²] = √[144 + 25] = √169 = 13 cm. Perimeter = 4 × 13 = 52 cm."
  },

  {
    id: 6116, section: "Maths",
    text: "A solid cone of base radius 30 cm and height 40 cm is melted and recast into small solid spheres each of radius 5 cm. Find the number of spheres so formed.",
    options: ["A) 54", "B) 60", "C) 72", "D) 66"],
    answer: "C",
    explanation: "Volume of cone = (1/3)πr²h = (1/3)π(30)²(40) = (1/3)π × 900 × 40 = 12,000π cm³. Volume of each small sphere = (4/3)πr³ = (4/3)π(5)³ = (4/3)π × 125 = 500π/3 cm³. Number of spheres = 12,000π ÷ (500π/3) = 12,000 × 3/500 = 72."
  },

  {
    id: 6117, section: "Maths",
    text: "A cylindrical vessel of base radius 10 cm is filled with water to a height of 20 cm. A solid iron sphere of radius 5 cm is gently dropped into the vessel and sinks completely to the bottom. By how many centimetres does the water level rise? (Express as a fraction.)",
    options: ["A) 1/3 cm", "B) 2/3 cm", "C) 7/3 cm", "D) 5/3 cm"],
    answer: "D",
    explanation: "Volume of water displaced = volume of sphere = (4/3)π(5)³ = (4/3)π × 125 = 500π/3 cm³. This volume occupies the cross-sectional area of the cylinder: π(10)² = 100π cm². Rise in water level = displaced volume ÷ cross-sectional area = (500π/3) ÷ (100π) = 500/(300) = 5/3 cm."
  },

  // ── SETS, AVERAGES & STATISTICS ──────────────────────────────────────

  {
    id: 6118, section: "Maths",
    text: "In a class of 50 students, the overall average marks in Mathematics is 74. The average marks of the girls in the class is 80 and the average marks of the boys is 70. Find the number of girls in the class.",
    options: ["A) 15", "B) 20", "C) 18", "D) 25"],
    answer: "B",
    explanation: "Let the number of girls = g, so number of boys = 50 − g. Total marks equation: 80g + 70(50 − g) = 74 × 50 → 80g + 3500 − 70g = 3700 → 10g = 200 → g = 20. Verify: 80 × 20 + 70 × 30 = 1,600 + 2,100 = 3,700 = 74 × 50 ✓."
  },

  // ── LOGARITHMS ───────────────────────────────────────────────────────

  {
    id: 6119, section: "Maths",
    text: "Solve for x: log₂[log₃(log₄ x)] = 0. Find the value of x.",
    options: ["A) 16", "B) 32", "C) 64", "D) 256"],
    answer: "A",
    explanation: "Working from the outermost logarithm inward: log₂[log₃(log₄ x)] = 0 → log₃(log₄ x) = 2⁰ = 1 → log₄ x = 3¹ = 3 → x = 4³ = 64. Verify: log₄ 64 = log₄ 4³ = 3; log₃ 3 = 1; log₂ 1 = 0 ✓."
  },

  // ── ARITHMETIC PROGRESSION ───────────────────────────────────────────

  {
    id: 6120, section: "Maths",
    text: "The sum of the first n terms of an arithmetic progression is given by Sₙ = 3n² + 5n. Find the 20th term of the progression.",
    options: ["A) 116", "B) 119", "C) 122", "D) 125"],
    answer: "C",
    explanation: "The nth term Tₙ = Sₙ − Sₙ₋₁ = (3n²+5n) − [3(n−1)²+5(n−1)] = 3n²+5n − 3n²+6n−3−5n+5 = 6n + 2. Therefore T₂₀ = 6(20) + 2 = 122. Verify: T₁ = S₁ = 3+5 = 8; formula gives 6(1)+2 = 8 ✓. T₂ = S₂−S₁ = (12+10)−8 = 14; formula gives 6(2)+2 = 14 ✓."
  }

];
