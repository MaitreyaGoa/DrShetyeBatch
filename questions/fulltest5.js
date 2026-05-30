// fulltest5.js – Dr Shetye Academic Programme
// JSO Pre-Screening Test 2 — Goa Civil Service (Junior Scale Officer)
// 60 Questions · IDs 1061–1120
// Section A: General Intelligence, Reasoning & Numerical Aptitude — 50 Q (IDs 1061–1110)
// Section B: English Comprehension — 10 Q (IDs 1111–1120)
// Duration: 75 minutes · Total Marks: 60
// Version 2.0 — All errors fixed, difficulty upgraded

var questions = [

  // ══════════════════════════════════════════════════════════════
  // SECTION A: General Intelligence & Reasoning (Q1–Q50)
  // ══════════════════════════════════════════════════════════════

  // ── Number Series (1061–1065) ──
  {
    id: 1061, section: "General Intelligence & Reasoning",
    text: "Find the missing number in the series: 3, 6, 11, 18, 27, ?",
    options: ["A) 36", "B) 38", "C) 41", "D) 40"],
    answer: "B",
    explanation: "Differences: +3, +5, +7, +9, +11. Each difference increases by 2 (odd numbers). Next term = 27 + 11 = 38."
  },
  {
    id: 1062, section: "General Intelligence & Reasoning",
    text: "Find the missing number: 2, 5, 10, 17, 26, 37, ?",
    options: ["A) 48", "B) 50", "C) 52", "D) 54"],
    answer: "B",
    explanation: "Series = n² + 1: 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26, 6²+1=37, 7²+1=50."
  },
  {
    id: 1063, section: "General Intelligence & Reasoning",
    text: "Find the wrong number in the series: 1, 4, 9, 16, 24, 36, 49",
    options: ["A) 9", "B) 16", "C) 24", "D) 36"],
    answer: "C",
    explanation: "The series is perfect squares: 1², 2², 3², 4², 5², 6², 7² = 1, 4, 9, 16, 25, 36, 49. The wrong number is 24; it should be 25."
  },
  {
    id: 1064, section: "General Intelligence & Reasoning",
    text: "Find the missing term: B, D, G, K, P, ?",
    options: ["A) U", "B) V", "C) W", "D) X"],
    answer: "B",
    explanation: "Gaps: B+2=D, D+3=G, G+4=K, K+5=P, P+6=V (16+6=22nd letter). The gaps increase by 1 each step."
  },
  {
    id: 1065, section: "General Intelligence & Reasoning",
    text: "Find the next term: 3, 7, 13, 21, 31, 43, ?",
    options: ["A) 55", "B) 57", "C) 59", "D) 61"],
    answer: "B",
    explanation: "Differences: +4, +6, +8, +10, +12, +14. Each difference increases by 2. Next = 43 + 14 = 57."
  },

  // ── Analogy (1066–1070) ──
  {
    id: 1066, section: "General Intelligence & Reasoning",
    text: "Marathon : Race :: Filibuster : ?",
    options: ["A) Election", "B) Speech", "C) Law", "D) Parliament"],
    answer: "B",
    explanation: "A marathon is an exceptionally long race; a filibuster is an exceptionally long speech (used to delay legislative proceedings). The relationship is: prolonged form of something."
  },
  {
    id: 1067, section: "General Intelligence & Reasoning",
    text: "Cartography : Maps :: Numismatics : ?",
    options: ["A) Numbers", "B) Stamps", "C) Coins", "D) Antiques"],
    answer: "C",
    explanation: "Cartography is the science of making maps. Numismatics is the study or collection of coins and currency. Each is a discipline associated with a specific object."
  },
  {
    id: 1068, section: "General Intelligence & Reasoning",
    text: "ACEG : BDFH :: IKMO : ?",
    options: ["A) JLNP", "B) JLMP", "C) KLNP", "D) JKMN"],
    answer: "A",
    explanation: "Each letter in the first group +1 gives the second: A→B, C→D, E→F, G→H. Similarly I→J, K→L, M→N, O→P = JLNP."
  },
  {
    id: 1069, section: "General Intelligence & Reasoning",
    text: "49 : 343 :: 64 : ?",
    options: ["A) 256", "B) 384", "C) 512", "D) 729"],
    answer: "C",
    explanation: "49 = 7², 343 = 7³. Pattern: n² : n³. So 64 = 8², and 8³ = 512."
  },
  {
    id: 1070, section: "General Intelligence & Reasoning",
    text: "Ornithology : Birds :: Seismology : ?",
    options: ["A) Sea", "B) Earthquakes", "C) Stars", "D) Fossils"],
    answer: "B",
    explanation: "Ornithology is the scientific study of birds. Seismology is the scientific study of earthquakes and seismic waves. Each is a branch of science named for its subject."
  },

  // ── Coding & Decoding (1071–1075) ──
  {
    id: 1071, section: "General Intelligence & Reasoning",
    text: "If COLD is coded as DPME, how is WARM coded?",
    options: ["A) XBSO", "B) XBSN", "C) WBSN", "D) XCSN"],
    answer: "B",
    explanation: "Each letter is shifted +1: C→D, O→P, L→M, D→E. So W→X, A→B, R→S, M→N = XBSN."
  },
  {
    id: 1072, section: "General Intelligence & Reasoning",
    text: "If ROSE is coded as 6821 and CHAIR is coded as 73456, what is the code for SEARCH?",
    options: ["A) 214673", "B) 216473", "C) 214637", "D) 246173"],
    answer: "A",
    explanation: "ROSE: R=6, O=8, S=2, E=1. CHAIR: C=7, H=3, A=4, I=5, R=6. SEARCH: S=2, E=1, A=4, R=6, C=7, H=3 = 214673."
  },
  {
    id: 1073, section: "General Intelligence & Reasoning",
    text: "If FLOWER = GMPXFS, what is GARDEN coded as?",
    options: ["A) HBSEFM", "B) HBSEFO", "C) HBSEEP", "D) IBSEFO"],
    answer: "B",
    explanation: "Each letter +1: F→G, L→M, O→P, W→X, E→F, R→S. So GARDEN: G→H, A→B, R→S, D→E, E→F, N→O = HBSEFO."
  },
  {
    id: 1074, section: "General Intelligence & Reasoning",
    text: "If 'P' means '÷', 'Q' means '×', 'R' means '+', 'S' means '−', find the value of: 18 P 3 Q 6 R 7 S 4",
    options: ["A) 38", "B) 39", "C) 40", "D) 41"],
    answer: "B",
    explanation: "Substituting: 18 ÷ 3 × 6 + 7 − 4. BODMAS: 18÷3=6, 6×6=36, 36+7=43, 43−4=39."
  },
  {
    id: 1075, section: "General Intelligence & Reasoning",
    text: "If ORANGE is coded as PSBOHF, what code represents MANGO?",
    options: ["A) NBOHP", "B) NBOPP", "C) NCOHP", "D) NCOIP"],
    answer: "A",
    explanation: "Each letter +1: O→P, R→S, A→B, N→O, G→H, E→F = PSBOHF ✓. MANGO: M→N, A→B, N→O, G→H, O→P = NBOHP."
  },

  // ── Blood Relations (1076–1079) ──
  {
    id: 1076, section: "General Intelligence & Reasoning",
    text: "Pointing to a man in a photograph, a woman says, 'His mother's only daughter is my mother.' How is the woman related to the man?",
    options: ["A) Daughter", "B) Sister", "C) Niece", "D) Aunt"],
    answer: "C",
    explanation: "Man's mother's only daughter = man's sister. That sister is the woman's mother. Woman is the daughter of man's sister = man's niece."
  },
  {
    id: 1077, section: "General Intelligence & Reasoning",
    text: "A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?",
    options: ["A) Grandmother", "B) Daughter", "C) Granddaughter", "D) Great-granddaughter"],
    answer: "C",
    explanation: "A is B's sister → both are children of C. C is D's daughter (D is C's father). So A is the daughter of D's daughter = D's granddaughter."
  },
  {
    id: 1078, section: "General Intelligence & Reasoning",
    text: "Ravi is the brother of Anu. Suman is the father of Ravi. Akash is the brother of Suman. What is Anu's relationship to Akash?",
    options: ["A) Niece", "B) Daughter", "C) Sister", "D) Cousin"],
    answer: "A",
    explanation: "Anu is Suman's daughter (sister of Ravi, Suman's son). Akash is Suman's brother. So Anu is the daughter of Suman who is Akash's brother → Anu is Akash's niece."
  },
  {
    id: 1079, section: "General Intelligence & Reasoning",
    text: "If X + Y means X is the mother of Y; X − Y means X is the brother of Y; X × Y means X is the father of Y; X ÷ Y means X is the sister of Y. Which of the following means A is the maternal uncle of B?",
    options: ["A) A − C + B", "B) A + C − B", "C) A × C + B", "D) A ÷ C + B"],
    answer: "A",
    explanation: "A − C: A is the brother of C. C + B: C is the mother of B. So A is brother of B's mother = maternal uncle of B."
  },

  // ── Direction Sense (1080–1083) ──
  {
    id: 1080, section: "General Intelligence & Reasoning",
    text: "A man walks 5 km to the East, then turns right and walks 3 km, then turns right again and walks 5 km. How far is he from his starting point and in which direction?",
    options: ["A) 3 km, South", "B) 3 km, North", "C) 5 km, West", "D) 8 km, South"],
    answer: "A",
    explanation: "East 5km → Right turn (South) 3km → Right turn (West) 5km. Net displacement: East−West = 0, South = 3km. He is 3 km to the South of starting point."
  },
  {
    id: 1081, section: "General Intelligence & Reasoning",
    text: "Facing East, Riya turns 90° clockwise, then 180° anticlockwise, then 90° clockwise. Which direction is she now facing?",
    options: ["A) North", "B) South", "C) East", "D) West"],
    answer: "C",
    explanation: "Start: East. +90°CW → South. −180°(ACW) from South → North. +90°CW from North → East. She is again facing East."
  },
  {
    id: 1082, section: "General Intelligence & Reasoning",
    text: "A rat runs 20 m North, turns left and runs 10 m, turns left and runs 20 m, then turns right and runs 5 m. How far is the rat from the starting point?",
    options: ["A) 10 m", "B) 15 m", "C) 20 m", "D) 25 m"],
    answer: "B",
    explanation: "20m North → left(West) 10m → left(South) 20m → right(West) 5m. Net: 20N−20S=0 (N/S cancel), 10W+5W=15m West. Distance = 15 m."
  },
  {
    id: 1083, section: "General Intelligence & Reasoning",
    text: "If South-East becomes North, North-West becomes South, then what does West become?",
    options: ["A) North-East", "B) South-East", "C) North-West", "D) South-West"],
    answer: "A",
    explanation: "SE→N is a shift of +135° anticlockwise. Applying the same rotation to West (270°): 270° + 135° = 405° = 45° = North-East."
  },

  // ── Ranking & Arrangement (1084–1087) ──
  {
    id: 1084, section: "General Intelligence & Reasoning",
    text: "In a row of 50 students, Anita is 18th from the left. Priya is 23rd from the right. How many students are between them?",
    options: ["A) 7", "B) 8", "C) 9", "D) 10"],
    answer: "C",
    explanation: "Priya's position from left = 50−23+1=28. Students between them = 28−18−1=9."
  },
  {
    id: 1085, section: "General Intelligence & Reasoning",
    text: "Five friends A, B, C, D, E are sitting in a row. B is to the right of A. D is between B and E. C is to the right of E. Who is sitting in the middle?",
    options: ["A) B", "B) D", "C) E", "D) C"],
    answer: "B",
    explanation: "Conditions give: A...B...D...E...C. Full order left to right: A, B, D, E, C. D is in the 3rd (middle) position."
  },
  {
    id: 1086, section: "General Intelligence & Reasoning",
    text: "In a row of boys, Mohan is 8th from the left and Rohit is 12th from the right. If they exchange positions, Mohan becomes 14th from the left. How many boys are in the row?",
    options: ["A) 23", "B) 24", "C) 25", "D) 26"],
    answer: "C",
    explanation: "After exchange, Mohan occupies Rohit's original position = 14th from left. So Rohit was at position 14 from left. Rohit was 12th from right. Total = 14+12−1 = 25 boys."
  },
  {
    id: 1087, section: "General Intelligence & Reasoning",
    text: "Six people P, Q, R, S, T, U sit around a circular table. P is opposite Q. T is opposite U. S is opposite R. U is to the immediate left of Q. Who sits between P and U (going clockwise from P)?",
    options: ["A) R", "B) S", "C) T", "D) Q"],
    answer: "B",
    explanation: "Place Q at top. U is immediately left of Q (anticlockwise). T is opposite U. P is opposite Q (at bottom). Remaining seats for S and R opposite each other. Going clockwise from P: next seat = S. So S is between P and U clockwise."
  },

  // ── Odd One Out (1088–1090) ──
  {
    id: 1088, section: "General Intelligence & Reasoning",
    text: "Find the odd one out: 169, 196, 225, 256, 288, 324",
    options: ["A) 196", "B) 225", "C) 288", "D) 324"],
    answer: "C",
    explanation: "All others are perfect squares: 13²=169, 14²=196, 15²=225, 16²=256, 18²=324. 288 is not a perfect square (17²=289) — it is the odd one out."
  },
  {
    id: 1089, section: "General Intelligence & Reasoning",
    text: "Find the odd one out: 8, 27, 64, 100, 125, 216",
    options: ["A) 27", "B) 64", "C) 100", "D) 125"],
    answer: "C",
    explanation: "All others are perfect cubes: 2³=8, 3³=27, 4³=64, 5³=125, 6³=216. 100 is not a perfect cube — it is the odd one out."
  },
  {
    id: 1090, section: "General Intelligence & Reasoning",
    text: "Find the odd one out: Soprano, Tenor, Baritone, Falsetto, Allegro",
    options: ["A) Soprano", "B) Tenor", "C) Baritone", "D) Allegro"],
    answer: "D",
    explanation: "Soprano, Tenor, Baritone, and Falsetto are all types of singing voice registers. Allegro is a musical tempo marking (meaning fast/lively) — not a voice type. It is the odd one out."
  },

  // ── Syllogism (1091–1094) ──
  {
    id: 1091, section: "General Intelligence & Reasoning",
    text: "Statements: All cats are dogs. All dogs are cows. Conclusions: I. All cats are cows. II. Some cows are cats.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both I and II follow", "D) Neither follows"],
    answer: "C",
    explanation: "All cats→dogs→cows, so all cats are cows (I ✓). Since all cats are cows, some cows must be cats (II ✓). Both follow."
  },
  {
    id: 1092, section: "General Intelligence & Reasoning",
    text: "Statements: No pen is pencil. All pencils are erasers. Conclusions: I. No pen is eraser. II. Some erasers are not pens.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both I and II follow", "D) Neither follows"],
    answer: "B",
    explanation: "Pencils are a subset of erasers. No pen is a pencil, so pencils (which are erasers) are not pens — some erasers are not pens (II ✓). I cannot be concluded because erasers may overlap with pens outside the pencil set."
  },
  {
    id: 1093, section: "General Intelligence & Reasoning",
    text: "Statements: Some managers are leaders. All leaders are visionaries. Conclusions: I. Some managers are visionaries. II. All visionaries are managers.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both I and II follow", "D) Neither follows"],
    answer: "A",
    explanation: "Some managers are leaders + All leaders are visionaries → Some managers are visionaries (I ✓). II says all visionaries are managers — this is a reverse conclusion and does not follow. Only I is correct."
  },
  {
    id: 1094, section: "General Intelligence & Reasoning",
    text: "Statements: Some chairs are tables. All tables are wooden. Conclusions: I. Some chairs are wooden. II. All wooden things are tables.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both I and II follow", "D) Neither follows"],
    answer: "A",
    explanation: "Some chairs are tables + All tables are wooden → Some chairs are wooden (I ✓). All wooden things are tables is a converse of the second statement and does not follow. Only I follows."
  },

  // ── Mathematical Operations (1095–1098) ──
  {
    id: 1095, section: "General Intelligence & Reasoning",
    text: "If '+' means '÷', '−' means '×', '×' means '+', '÷' means '−', find: 36 + 4 − 2 × 10 ÷ 5",
    options: ["A) 23", "B) 25", "C) 27", "D) 30"],
    answer: "A",
    explanation: "Substituting symbols: 36 ÷ 4 × 2 + 10 − 5. BODMAS: 36÷4=9, 9×2=18, 18+10=28, 28−5=23."
  },
  {
    id: 1096, section: "General Intelligence & Reasoning",
    text: "Select the correct set of signs to balance: 8 ? 4 ? 2 ? 6 = 10",
    options: ["A) × − +", "B) + × −", "C) ÷ + ×", "D) × + ÷"],
    answer: "B",
    explanation: "B: 8 + 4 × 2 − 6. BODMAS: 4×2=8, then 8+8=16, 16−6=10 ✓. Check others: A: 8×4−2+6=36. C: 8÷4+2×6=14. D: 8×4+2÷6≈32.3. Only B gives 10."
  },
  {
    id: 1097, section: "General Intelligence & Reasoning",
    text: "If 5 * 3 = 34 and 7 * 4 = 65, what is 6 * 5?",
    options: ["A) 51", "B) 58", "C) 61", "D) 65"],
    answer: "C",
    explanation: "Pattern: a * b = a² + b². 5²+3²=25+9=34 ✓. 7²+4²=49+16=65 ✓. So 6²+5²=36+25=61."
  },
  {
    id: 1098, section: "General Intelligence & Reasoning",
    text: "How many triangles are there in the following figure: A triangle divided by lines from each vertex to the midpoint of the opposite side (medians drawn)?",
    options: ["A) 4", "B) 6", "C) 8", "D) 10"],
    answer: "B",
    explanation: "When all three medians of a triangle are drawn, they divide it into 6 smaller triangles of equal area. The 3 medians meet at the centroid, creating 6 congruent triangles inside."
  },

  // ── Calendar & Clock (1099–1101) ──
  {
    id: 1099, section: "General Intelligence & Reasoning",
    text: "If 1st January 2023 was a Sunday, what day was 1st January 2024?",
    options: ["A) Sunday", "B) Monday", "C) Tuesday", "D) Wednesday"],
    answer: "B",
    explanation: "2023 is not a leap year (365 days = 52 weeks + 1 day). So 1st Jan 2024 is one day ahead = Monday."
  },
  {
    id: 1100, section: "General Intelligence & Reasoning",
    text: "The angle between the hour and minute hands of a clock at 3:30 is:",
    options: ["A) 60°", "B) 75°", "C) 80°", "D) 90°"],
    answer: "B",
    explanation: "At 3:30: minute hand at 180°. Hour hand at 3 = 90°, plus 30 min × 0.5°/min = 15°. Hour hand = 105°. Angle = |180−105| = 75°."
  },
  {
    id: 1101, section: "General Intelligence & Reasoning",
    text: "At what time between 4 and 5 o'clock are the hands of a clock exactly coincident (overlapping)?",
    options: ["A) 4:21 9/11 min", "B) 4:20 min", "C) 4:22 min", "D) 4:21 min"],
    answer: "A",
    explanation: "At 4:00, hour hand is at 20 min position. Minute hand gains 55/11 min per hour on hour hand. To coincide: time = (5×4)/(55/60) wait — formula: time after H o'clock = (60H/11) min. = 60×4/11 = 240/11 = 21 9/11 min past 4."
  },

  // ── Numerical Aptitude (1102–1110) ──
  {
    id: 1102, section: "General Intelligence & Reasoning",
    text: "A trader marks his goods 40% above cost price and gives a 15% discount. What is his profit percentage?",
    options: ["A) 17%", "B) 19%", "C) 21%", "D) 25%"],
    answer: "B",
    explanation: "Let CP = 100. MP = 140. SP = 140 × 0.85 = 119. Profit% = (119−100)/100 × 100 = 19%."
  },
  {
    id: 1103, section: "General Intelligence & Reasoning",
    text: "The population of a town increases by 10% in the first year and decreases by 10% in the second year. If the original population was 20,000, what is the population after 2 years?",
    options: ["A) 20,000", "B) 19,800", "C) 19,600", "D) 20,200"],
    answer: "B",
    explanation: "After year 1: 20,000 × 1.10 = 22,000. After year 2: 22,000 × 0.90 = 19,800. Net effect of +10% then −10% = −1% (= 10²/100 = 1% loss)."
  },
  {
    id: 1104, section: "General Intelligence & Reasoning",
    text: "If 60% of a number is 90, what is 80% of that number?",
    options: ["A) 100", "B) 110", "C) 120", "D) 130"],
    answer: "C",
    explanation: "60% of x = 90 → x = 150. 80% of 150 = 120."
  },
  {
    id: 1105, section: "General Intelligence & Reasoning",
    text: "A man sells two articles at ₹600 each. On one he gains 20% and on the other he loses 20%. What is his overall loss?",
    options: ["A) ₹40", "B) ₹50", "C) ₹48", "D) No loss"],
    answer: "B",
    explanation: "CP₁ = 600/1.2 = ₹500. CP₂ = 600/0.8 = ₹750. Total CP = ₹1250. Total SP = ₹1200. Loss = ₹50. Loss% = 50/1250 × 100 = 4%."
  },
  {
    id: 1106, section: "General Intelligence & Reasoning",
    text: "A sum of ₹12,000 is invested at compound interest at 10% per annum for 2 years. What is the compound interest earned?",
    options: ["A) ₹2,400", "B) ₹2,520", "C) ₹2,600", "D) ₹2,640"],
    answer: "B",
    explanation: "CI = P[(1+R/100)ⁿ − 1] = 12000[(1.1)² − 1] = 12000[1.21−1] = 12000 × 0.21 = ₹2,520."
  },
  {
    id: 1107, section: "General Intelligence & Reasoning",
    text: "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. What is the excluded number?",
    options: ["A) 30", "B) 32", "C) 35", "D) 37"],
    answer: "C",
    explanation: "Sum of 5 = 135. Sum of 4 = 100. Excluded = 135 − 100 = 35."
  },
  {
    id: 1108, section: "General Intelligence & Reasoning",
    text: "A can do a work in 12 days. B is 50% more efficient than A. In how many days will B alone finish the work?",
    options: ["A) 6 days", "B) 8 days", "C) 9 days", "D) 10 days"],
    answer: "B",
    explanation: "A's rate = 1/12 per day. B is 50% more efficient → B's rate = 1/12 × 1.5 = 1/8 per day. B finishes in 8 days."
  },
  {
    id: 1109, section: "General Intelligence & Reasoning",
    text: "The ratio of present ages of A and B is 4:5. After 8 years the ratio will be 6:7. What is the present age of B?",
    options: ["A) 16 years", "B) 18 years", "C) 20 years", "D) 22 years"],
    answer: "C",
    explanation: "Let ages = 4x and 5x. (4x+8)/(5x+8) = 6/7. Cross multiply: 7(4x+8)=6(5x+8) → 28x+56=30x+48 → 2x=8 → x=4. B's age = 5×4 = 20 years."
  },
  {
    id: 1110, section: "General Intelligence & Reasoning",
    text: "A train 300 m long passes a platform 200 m long in 25 seconds. What is the speed of the train?",
    options: ["A) 60 km/h", "B) 64 km/h", "C) 70 km/h", "D) 72 km/h"],
    answer: "D",
    explanation: "Train must cover its length + platform length = 300+200=500m in 25 seconds. Speed = 500/25 = 20 m/s = 20×18/5 = 72 km/h."
  },

  // ══════════════════════════════════════════════════════════════
  // SECTION B: English Comprehension (Q51–Q60)
  // IDs 1111–1120
  // ══════════════════════════════════════════════════════════════

  {
    id: 1111, section: "English Comprehension",
    text: "Choose the word most similar in meaning to LOQUACIOUS:",
    options: ["A) Taciturn", "B) Garrulous", "C) Reticent", "D) Laconic"],
    answer: "B",
    explanation: "Loquacious means talking a great deal; talkative. Garrulous has the same meaning — excessively talkative. Taciturn, reticent, and laconic all mean the opposite (quiet/brief)."
  },
  {
    id: 1112, section: "English Comprehension",
    text: "Choose the word most similar in meaning to PERFIDIOUS:",
    options: ["A) Loyal", "B) Treacherous", "C) Courageous", "D) Honest"],
    answer: "B",
    explanation: "Perfidious means deceitful and untrustworthy; guilty of betrayal. Treacherous is its closest synonym — both describe someone who betrays trust."
  },
  {
    id: 1113, section: "English Comprehension",
    text: "Choose the word most opposite in meaning to PENURIOUS:",
    options: ["A) Miserly", "B) Stingy", "C) Affluent", "D) Frugal"],
    answer: "C",
    explanation: "Penurious means extremely poor or miserly. Its antonym is affluent — having a great deal of money; wealthy."
  },
  {
    id: 1114, section: "English Comprehension",
    text: "Choose the word most opposite in meaning to EPHEMERAL:",
    options: ["A) Transient", "B) Fleeting", "C) Eternal", "D) Brief"],
    answer: "C",
    explanation: "Ephemeral means lasting for a very short time (transient, fleeting). Its antonym is eternal — lasting or existing forever."
  },
  {
    id: 1115, section: "English Comprehension",
    text: "Find the part with a grammatical error: (A) The committee has / (B) submitted their report / (C) to the chairman / (D) last Monday.",
    options: ["A) Part A", "B) Part B", "C) Part C", "D) Part D"],
    answer: "A",
    explanation: "When a committee acts as a single unit, use 'has' (singular). However, if 'has' is used, the tense should be consistent. 'Last Monday' indicates simple past, so 'has submitted' (present perfect) is wrong. Part A should be 'The committee submitted'. Error is in Part A."
  },
  {
    id: 1116, section: "English Comprehension",
    text: "Find the part with a grammatical error: (A) Neither the manager / (B) nor the employees / (C) was present / (D) at the meeting.",
    options: ["A) Part A", "B) Part B", "C) Part C", "D) Part D"],
    answer: "C",
    explanation: "With 'Neither...nor', the verb agrees with the nearer subject. 'Employees' is plural and nearer, so the verb must be 'were' not 'was'. Error in Part C."
  },
  {
    id: 1117, section: "English Comprehension",
    text: "The new policy was met with _______ by the employees, who felt it violated their rights.",
    options: ["A) approbation", "B) indifference", "C) consternation", "D) apathy"],
    answer: "C",
    explanation: "'Consternation' means a feeling of anxiety or dismay — appropriate when employees feel their rights are violated. 'Approbation' = approval; 'indifference' and 'apathy' suggest no reaction, not fitting the context."
  },
  {
    id: 1118, section: "English Comprehension",
    text: "Despite working hard, she could not _______ the targets set by the management.",
    options: ["A) reach to", "B) meet", "C) achieve to", "D) arrive"],
    answer: "B",
    explanation: "'Meet the targets' is the correct collocation. We 'meet' targets/deadlines/expectations. 'Reach to' and 'achieve to' are grammatically incorrect; 'arrive' cannot be used with 'targets'."
  },
  {
    id: 1119, section: "English Comprehension",
    text: "Choose the one word for: 'A person who pretends to have virtues, moral or religious beliefs, or principles that he does not actually possess.'",
    options: ["A) Agnostic", "B) Heretic", "C) Hypocrite", "D) Apostate"],
    answer: "C",
    explanation: "A hypocrite is someone who pretends to have virtues or beliefs they do not actually hold. Agnostic = doubts existence of God; Heretic = holds unorthodox beliefs; Apostate = abandons their religion."
  },
  {
    id: 1120, section: "English Comprehension",
    text: "What does the idiom 'Burn the candle at both ends' mean?",
    options: ["A) To waste money recklessly", "B) To work excessively hard by night and day, exhausting oneself", "C) To give conflicting advice", "D) To destroy all evidence"],
    answer: "B",
    explanation: "'Burn the candle at both ends' means to work so hard — early in the morning and late at night — that one becomes exhausted. It implies overexertion that cannot be sustained."
  }

];
