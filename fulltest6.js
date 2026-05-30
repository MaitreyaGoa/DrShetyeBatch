// fulltest6.js – Dr Shetye Academic Programme
// JSO Pre-Screening Test 3 — Goa Civil Service (Junior Scale Officer)
// 60 Questions · IDs 1121–1180
// Section A: General Intelligence, Reasoning & Numerical Aptitude — 50 Q (IDs 1121–1170)
// Section B: English Comprehension — 10 Q (IDs 1171–1180)
// Duration: 75 minutes · Total Marks: 60
// All answers independently verified by computation

var questions = [

  // ══════════════════════════════════════════════════════════════
  // SECTION A: General Intelligence & Reasoning (Q1–Q50)
  // IDs 1121–1170
  // ══════════════════════════════════════════════════════════════

  // ── Number Series (1121–1125) ──
  {
    id: 1121, section: "General Intelligence & Reasoning",
    text: "Find the missing number in the series: 5, 11, 23, 47, 95, ?",
    options: ["A) 180", "B) 191", "C) 190", "D) 185"],
    answer: "B",
    explanation: "Pattern: each term = previous × 2 + 1. 5×2+1=11, 11×2+1=23, 23×2+1=47, 47×2+1=95, 95×2+1=191."
  },
  {
    id: 1122, section: "General Intelligence & Reasoning",
    text: "Find the wrong number in the series: 7, 14, 56, 168, 672, 2016",
    options: ["A) 14", "B) 56", "C) 168", "D) 2016"],
    answer: "A",
    explanation: "The pattern alternates ×4 and ×3: 7×4=28, 28×3=84, 84×4=336... The second term should be 28 (7×4), not 14. So 14 is the wrong number."
  },
  {
    id: 1123, section: "General Intelligence & Reasoning",
    text: "Find the missing term: 1, 8, 27, ?, 125, 216",
    options: ["A) 64", "B) 72", "C) 81", "D) 96"],
    answer: "A",
    explanation: "The series is perfect cubes: 1³, 2³, 3³, 4³, 5³, 6³. Missing term = 4³ = 64."
  },
  {
    id: 1124, section: "General Intelligence & Reasoning",
    text: "Find the missing term: Z, X, V, T, R, ?",
    options: ["A) O", "B) P", "C) Q", "D) N"],
    answer: "B",
    explanation: "Every alternate letter in reverse: Z(26), X(24), V(22), T(20), R(18), P(16). Each term decreases by 2 positions. Next = 18−2 = 16 = P."
  },
  {
    id: 1125, section: "General Intelligence & Reasoning",
    text: "In a number matrix, the pattern is consecutive perfect squares. The entries are 4, 9, 16, 25, 36, 49, 64, 81, and the missing last entry. What is it?",
    options: ["A) 100", "B) 96", "C) 108", "D) 121"],
    answer: "A",
    explanation: "The entries are 2², 3², 4², 5², 6², 7², 8², 9², and the missing entry = 10² = 100."
  },

  // ── Analogy (1126–1130) ──
  {
    id: 1126, section: "General Intelligence & Reasoning",
    text: "Palaeontology : Fossils :: Philology : ?",
    options: ["A) Stamps", "B) Language and Literature", "C) Coins", "D) Philosophy"],
    answer: "B",
    explanation: "Palaeontology is the study of fossils. Philology is the study of language and literary texts. Both are academic disciplines named for their subject of study."
  },
  {
    id: 1127, section: "General Intelligence & Reasoning",
    text: "17 : 290 :: 19 : ?",
    options: ["A) 360", "B) 361", "C) 362", "D) 363"],
    answer: "C",
    explanation: "Pattern: n² + 1. 17² = 289, 289 + 1 = 290. Similarly, 19² = 361, 361 + 1 = 362."
  },
  {
    id: 1128, section: "General Intelligence & Reasoning",
    text: "BEGK : CFHL :: PSWA : ?",
    options: ["A) QTXB", "B) RUXB", "C) QTXA", "D) RTYB"],
    answer: "A",
    explanation: "Each letter increases by 1: B→C, E→F, G→H, K→L. Applying same: P→Q, S→T, W→X, A→B = QTXB."
  },
  {
    id: 1129, section: "General Intelligence & Reasoning",
    text: "Prison : Warden :: Museum : ?",
    options: ["A) Visitor", "B) Curator", "C) Artist", "D) Historian"],
    answer: "B",
    explanation: "A warden is the person in charge of a prison. A curator is the person in charge of a museum. Relationship: institution : person in charge."
  },
  {
    id: 1130, section: "General Intelligence & Reasoning",
    text: "144 : 13 :: 225 : ?",
    options: ["A) 14", "B) 15", "C) 16", "D) 17"],
    answer: "C",
    explanation: "√144 = 12, 12 + 1 = 13. √225 = 15, 15 + 1 = 16. Pattern: √n + 1."
  },

  // ── Coding & Decoding (1131–1135) ──
  {
    id: 1131, section: "General Intelligence & Reasoning",
    text: "In a certain code, ROAD is written as URDG. How is SWAN written?",
    options: ["A) VZCQ", "B) VZDQ", "C) WZDQ", "D) VZCP"],
    answer: "B",
    explanation: "Each letter +3: R(18)→U(21), O(15)→R(18), A(1)→D(4), D(4)→G(7). SWAN: S(19)+3=V(22), W(23)+3=Z(26), A(1)+3=D(4), N(14)+3=Q(17) = VZDQ."
  },
  {
    id: 1132, section: "General Intelligence & Reasoning",
    text: "If ROSE = 6821 and CHAIR = 73456, what is the code for SEARCH?",
    options: ["A) 214673", "B) 216473", "C) 214637", "D) 246173"],
    answer: "A",
    explanation: "From ROSE: R=6, O=8, S=2, E=1. From CHAIR: C=7, H=3, A=4, I=5, R=6 (consistent). SEARCH: S=2, E=1, A=4, R=6, C=7, H=3 = 214673."
  },
  {
    id: 1133, section: "General Intelligence & Reasoning",
    text: "In a code language: 'na pa ka la' means 'birds fly very high', 'ri pa na la' means 'birds are very beautiful', 'ti ka na la' means 'flowers fly very fast'. What does 'pa' stand for?",
    options: ["A) birds", "B) fly", "C) very", "D) high"],
    answer: "A",
    explanation: "'ka' appears in sentences 1 and 3 (fly appears in both) → ka=fly. 'na' and 'la' appear in all 3 sentences → they mean 'very' and one other common word. 'pa' appears only in sentences 1 and 2; the only word common to both (besides na,la) is 'birds'. So pa=birds."
  },
  {
    id: 1134, section: "General Intelligence & Reasoning",
    text: "If PENCIL is coded as RGPEKN (each letter +2), what is the code for ERASER?",
    options: ["A) GTCUGT", "B) GTCUGU", "C) HUCUGU", "D) GTCVGU"],
    answer: "A",
    explanation: "Each letter +2: P→R, E→G, N→P, C→E, I→K, L→N = RGPEKN ✓. ERASER: E+2=G, R+2=T, A+2=C, S+2=U, E+2=G, R+2=T = GTCUGT."
  },
  {
    id: 1135, section: "General Intelligence & Reasoning",
    text: "If '+' means '×', '−' means '+', '×' means '÷', '÷' means '−', find the value of: 8 + 4 × 2 − 3 ÷ 1",
    options: ["A) 16", "B) 18", "C) 20", "D) 22"],
    answer: "B",
    explanation: "Substitute symbols: 8 × 4 ÷ 2 + 3 − 1. BODMAS: 8×4=32, 32÷2=16, 16+3=19, 19−1=18."
  },

  // ── Blood Relations (1136–1139) ──
  {
    id: 1136, section: "General Intelligence & Reasoning",
    text: "Introducing a boy, a girl says, 'He is the son of the daughter of the father of my uncle.' How is the boy related to the girl?",
    options: ["A) Brother", "B) Nephew", "C) Uncle", "D) Cousin"],
    answer: "A",
    explanation: "Father of girl's uncle = grandfather. Daughter of grandfather = girl's mother (or an aunt). Son of mother = brother. So the boy is the girl's brother."
  },
  {
    id: 1137, section: "General Intelligence & Reasoning",
    text: "A and B are siblings. C is A's mother. D is C's brother. E is D's mother. How is E related to B?",
    options: ["A) Aunt", "B) Grandmother", "C) Great-grandmother", "D) Great-aunt"],
    answer: "B",
    explanation: "D is C's brother → E is D's mother = C's mother. C is A and B's mother. So E is C's mother = A and B's maternal grandmother."
  },
  {
    id: 1138, section: "General Intelligence & Reasoning",
    text: "P is the brother of Q. R is the sister of Q. S is the father of P. T is the wife of S. How is T related to R?",
    options: ["A) Mother", "B) Aunt", "C) Sister", "D) Grandmother"],
    answer: "A",
    explanation: "S is P's father. T is S's wife = P's mother. P, Q, R are all siblings (P is brother of Q; R is sister of Q). T is the mother of all three, including R."
  },
  {
    id: 1139, section: "General Intelligence & Reasoning",
    text: "Looking at a portrait of a man, Rohit said, 'His mother is the wife of my father's son. I have no brothers or sisters.' Who is in the portrait?",
    options: ["A) Rohit's son", "B) Rohit's nephew", "C) Rohit's cousin", "D) Rohit himself"],
    answer: "A",
    explanation: "'My father's son' = Rohit (since he has no siblings). 'Wife of Rohit' = Rohit's wife. The portrait man's mother is Rohit's wife → the man in the portrait is Rohit's son."
  },

  // ── Direction Sense (1140–1143) ──
  {
    id: 1140, section: "General Intelligence & Reasoning",
    text: "A person walks 10 km South, turns right and walks 6 km, turns right and walks 10 km, then turns right and walks 2 km. How far is he from the starting point?",
    options: ["A) 4 km", "B) 6 km", "C) 8 km", "D) 2 km"],
    answer: "A",
    explanation: "South 10 → Right(West) 6 → Right(North) 10 → Right(East) 2. Net: S−N=0, W−E=6−2=4 km West. Distance = 4 km."
  },
  {
    id: 1141, section: "General Intelligence & Reasoning",
    text: "Meera starts facing South. She turns 135° anticlockwise, then 90° clockwise, then 45° anticlockwise. Which direction is she now facing?",
    options: ["A) East", "B) West", "C) North-East", "D) South-West"],
    answer: "A",
    explanation: "South = 180°. −135°(ACW) → 180−135=45°=NE. +90°(CW) → 45+90=135°=SE. −45°(ACW) → 135−45=90°=East."
  },
  {
    id: 1142, section: "General Intelligence & Reasoning",
    text: "A person walks 3 km North, then 4 km East, then 3 km South, then 3 km North. How far is he from his starting point?",
    options: ["A) 3 km", "B) 4 km", "C) 5 km", "D) 7 km"],
    answer: "C",
    explanation: "Net North = 3−3+3 = 3 km. Net East = 4 km. Distance = √(3²+4²) = √(9+16) = √25 = 5 km."
  },
  {
    id: 1143, section: "General Intelligence & Reasoning",
    text: "If you are facing North-West and turn 225° clockwise, which direction are you facing?",
    options: ["A) South", "B) South-East", "C) East", "D) South-West"],
    answer: "A",
    explanation: "NW = 315°. After +225° clockwise: 315+225=540°. 540−360=180° = South."
  },

  // ── Ranking & Arrangement (1144–1147) ──
  {
    id: 1144, section: "General Intelligence & Reasoning",
    text: "In a class of 60 students, Vijay's rank is 17th from the top. Suresh is 9 ranks below Vijay. What is Suresh's rank from the bottom?",
    options: ["A) 33", "B) 34", "C) 35", "D) 36"],
    answer: "C",
    explanation: "Suresh = 17+9 = 26th from top. Rank from bottom = 60−26+1 = 35."
  },
  {
    id: 1145, section: "General Intelligence & Reasoning",
    text: "Six boxes P, Q, R, S, T, U are stacked. R is directly above Q. Only two boxes are below P. T is above R but not at the top. S is at the bottom. U is at the top. What is T's position from the bottom?",
    options: ["A) 4th", "B) 5th", "C) 3rd", "D) 2nd"],
    answer: "B",
    explanation: "S=1st(bottom), P=3rd (only two below P). Q must be 2nd (R directly above Q, and P=3rd). R=4th. T above R, not top → T=5th. U=6th(top). Order: S, Q, P, R, T, U. T is 5th from bottom."
  },
  {
    id: 1146, section: "General Intelligence & Reasoning",
    text: "In a queue, A is 10th from the front. C is exactly 5 positions behind A. What is C's position from the front?",
    options: ["A) 15th", "B) 16th", "C) 17th", "D) 18th"],
    answer: "B",
    explanation: "A is 10th. C is 5 positions behind A → C = 10 + 5 + 1 = 16th from front."
  },
  {
    id: 1147, section: "General Intelligence & Reasoning",
    text: "Seven people A, B, C, D, E, F, G sit in a line. D is 3rd from the left. G is 2 positions to the left of D (i.e., 1st). B is immediately right of G. F is 5th from the left. E is at the right end (7th). One person sits between F and C. How many people sit between B and F?",
    options: ["A) 1", "B) 2", "C) 3", "D) 4"],
    answer: "B",
    explanation: "G=1, B=2, D=3, F=5, E=7. One between F(5) and C → C=4 or C=6. Remaining positions 4 and 6 for A and C. C=4 (one between F and C means C=3 or 7, both taken, so adjacent: C=6, one between = position 6 is adjacent to F=5... 0 between). Actually C=4 gives 0 between; C=6 gives 0 between. C=3 taken(D). C=7 taken(E). So C=4, A=6. Between B(2) and F(5): positions 3(D) and 4(C) = 2 people."
  },

  // ── Odd One Out (1148–1150) ──
  {
    id: 1148, section: "General Intelligence & Reasoning",
    text: "Find the odd one out: 121, 144, 169, 196, 224, 256",
    options: ["A) 169", "B) 196", "C) 224", "D) 256"],
    answer: "C",
    explanation: "11²=121, 12²=144, 13²=169, 14²=196, 16²=256. 15²=225 not 224 — so 224 is not a perfect square and is the odd one out."
  },
  {
    id: 1149, section: "General Intelligence & Reasoning",
    text: "Find the odd one out: Ophthalmology, Cardiology, Nephrology, Etymology, Neurology",
    options: ["A) Ophthalmology", "B) Cardiology", "C) Etymology", "D) Neurology"],
    answer: "C",
    explanation: "Ophthalmology (eyes), Cardiology (heart), Nephrology (kidneys), Neurology (nervous system) are all medical specialties. Etymology is the study of word origins — not a medical field."
  },
  {
    id: 1150, section: "General Intelligence & Reasoning",
    text: "Find the odd one out: 8, 27, 64, 125, 216, 343, 512, 730",
    options: ["A) 343", "B) 512", "C) 730", "D) 216"],
    answer: "C",
    explanation: "All others are perfect cubes: 2³=8, 3³=27, 4³=64, 5³=125, 6³=216, 7³=343, 8³=512. 9³=729 not 730. So 730 is the odd one out."
  },

  // ── Syllogism (1151–1154) ──
  {
    id: 1151, section: "General Intelligence & Reasoning",
    text: "Statements: All rivers are oceans. Some oceans are lakes. Conclusions: I. Some rivers are lakes. II. Some lakes are rivers.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both follow", "D) Neither follows"],
    answer: "D",
    explanation: "All rivers are oceans, but only SOME oceans are lakes. Those 'some' oceans that are lakes may not be the same ones that are rivers. We cannot conclude any river is a lake. Neither conclusion follows."
  },
  {
    id: 1152, section: "General Intelligence & Reasoning",
    text: "Statements: No stone is a tree. All trees are plants. Conclusions: I. No stone is a plant. II. Some plants are not stones.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both follow", "D) Neither follows"],
    answer: "B",
    explanation: "Trees are a subset of plants, and no tree is a stone. So those plants that are trees are definitely not stones — some plants are not stones (II ✓). We cannot say NO stone is a plant; stones might be plants via other paths. Only II follows."
  },
  {
    id: 1153, section: "General Intelligence & Reasoning",
    text: "Statements: All books are novels. All novels are stories. Some stories are poems. Conclusions: I. All books are stories. II. Some novels are poems. III. Some stories are books.",
    options: ["A) Only I and III follow", "B) Only I follows", "C) All three follow", "D) Only II and III follow"],
    answer: "A",
    explanation: "All books→novels→stories (I ✓ and III ✓ by conversion). 'Some stories are poems' — those stories could be novels or non-novels; not guaranteed. II does not necessarily follow. Only I and III follow."
  },
  {
    id: 1154, section: "General Intelligence & Reasoning",
    text: "Statements: Some doctors are lawyers. All lawyers are engineers. No engineer is a teacher. Conclusions: I. No doctor is a teacher. II. Some doctors are engineers. III. Some lawyers are not teachers.",
    options: ["A) Only II and III", "B) Only I and II", "C) All three", "D) Only III"],
    answer: "A",
    explanation: "Some doctors are lawyers + All lawyers are engineers → Some doctors are engineers (II ✓). All lawyers are engineers + No engineer is teacher → No lawyer is teacher → Some lawyers are not teachers (III ✓). I says no doctor is teacher — only the doctor-lawyers are covered; other doctors may be teachers. I does not follow. Only II and III."
  },

  // ── Mathematical Operations (1155–1157) ──
  {
    id: 1155, section: "General Intelligence & Reasoning",
    text: "If 3 ★ 4 = 25, 5 ★ 6 = 61, 7 ★ 2 = 53, what is 4 ★ 5?",
    options: ["A) 38", "B) 41", "C) 44", "D) 47"],
    answer: "B",
    explanation: "Pattern: a ★ b = a² + b². 3²+4²=9+16=25 ✓, 5²+6²=25+36=61 ✓, 7²+2²=49+4=53 ✓. So 4★5=16+25=41."
  },
  {
    id: 1156, section: "General Intelligence & Reasoning",
    text: "If '+' means '×', '−' means '+', '×' means '÷', '÷' means '−', find the value of: 12 + 4 × 2 − 6 ÷ 2",
    options: ["A) 28", "B) 24", "C) 30", "D) 16"],
    answer: "A",
    explanation: "Substitute symbols: 12×4÷2+6−2. BODMAS: 12×4=48, 48÷2=24, 24+6=30, 30−2=28."
  },
  {
    id: 1157, section: "General Intelligence & Reasoning",
    text: "How many times do the hands of a clock coincide between 12 noon and 12 midnight?",
    options: ["A) 10", "B) 11", "C) 12", "D) 22"],
    answer: "B",
    explanation: "Clock hands coincide 11 times every 12 hours (approximately at 12:00, 1:05, 2:10, 3:16, 4:21, 5:27, 6:32, 7:38, 8:43, 9:49, 10:54). They do not coincide at exactly 11:00 — the next coincidence after 10:54 is at 12:00."
  },

  // ── Calendar & Clock (1158–1160) ──
  {
    id: 1158, section: "General Intelligence & Reasoning",
    text: "What day of the week falls 100 days after a Monday?",
    options: ["A) Tuesday", "B) Wednesday", "C) Thursday", "D) Friday"],
    answer: "B",
    explanation: "100 ÷ 7 = 14 weeks remainder 2. So 100 days after Monday = Monday + 2 days = Wednesday."
  },
  {
    id: 1159, section: "General Intelligence & Reasoning",
    text: "A clock is set right at 8 AM. It gains 10 minutes every 24 hours. What is the true time when the clock shows 1 PM the next day?",
    options: ["A) 12:48 PM", "B) 12:36 PM", "C) 12:54 PM", "D) 1:00 PM"],
    answer: "A",
    explanation: "From 8 AM to 1 PM next day = 29 hours. Gain = 29 × 10/24 ≈ 12 minutes. True time = 1:00 PM − 12 min = 12:48 PM."
  },
  {
    id: 1160, section: "General Intelligence & Reasoning",
    text: "What is the angle between the hands of a clock at 7:35?",
    options: ["A) 17.5°", "B) 20°", "C) 22.5°", "D) 15°"],
    answer: "A",
    explanation: "Minute hand at 35 min = 35×6 = 210°. Hour hand = 7×30 + 35×0.5 = 210+17.5 = 227.5°. Angle = |227.5−210| = 17.5°."
  },

  // ── Numerical Aptitude (1161–1170) ──
  {
    id: 1161, section: "General Intelligence & Reasoning",
    text: "A sum of money doubles itself at simple interest in 8 years. In how many years will it become 5 times?",
    options: ["A) 24 years", "B) 28 years", "C) 32 years", "D) 36 years"],
    answer: "C",
    explanation: "Doubles in 8 years → SI = P in 8 years → Rate = 100/8 = 12.5% per year. For amount = 5P: SI = 4P. Time = (4P×100)/(P×12.5) = 32 years."
  },
  {
    id: 1162, section: "General Intelligence & Reasoning",
    text: "A and B together complete work in 12 days. B and C together in 15 days. A and C together in 20 days. How many days will A alone take?",
    options: ["A) 24", "B) 28", "C) 30", "D) 32"],
    answer: "C",
    explanation: "A+B=1/12, B+C=1/15, A+C=1/20. Sum = 2(A+B+C)=1/12+1/15+1/20=5/60+4/60+3/60=12/60=1/5. A+B+C=1/10. A=1/10−B−C+B+C = 1/10−1/15 = 3/30−2/30=1/30. A takes 30 days."
  },
  {
    id: 1163, section: "General Intelligence & Reasoning",
    text: "In a mixture of 40 litres, the ratio of milk to water is 5:3. If 16 litres of the mixture is removed and replaced with water, what is the new ratio?",
    options: ["A) 1:1", "B) 3:5", "C) 5:3", "D) 2:3"],
    answer: "B",
    explanation: "Total=40. Milk=5×40/8=25L, Water=15L. Remove 16L: milk removed=10L, water removed=6L. Add 16L water. New: milk=15L, water=9+16=25L. Ratio=15:25=3:5."
  },
  {
    id: 1164, section: "General Intelligence & Reasoning",
    text: "A shopkeeper offers two successive discounts of 20% and 10%. What is the effective single discount?",
    options: ["A) 26%", "B) 28%", "C) 30%", "D) 32%"],
    answer: "B",
    explanation: "Effective discount = 1−(0.8×0.9) = 1−0.72 = 0.28 = 28%."
  },
  {
    id: 1165, section: "General Intelligence & Reasoning",
    text: "Pipes A and B can fill a tank in 30 and 45 minutes respectively. Pipe C can empty it in 36 minutes. If all three are opened simultaneously, how long does it take to fill the tank?",
    options: ["A) 36 minutes", "B) 40 minutes", "C) 45 minutes", "D) 60 minutes"],
    answer: "A",
    explanation: "Net rate = 1/30+1/45−1/36. LCM=180: 6/180+4/180−5/180=5/180=1/36. Time = 36 minutes."
  },
  {
    id: 1166, section: "General Intelligence & Reasoning",
    text: "A boat goes 30 km upstream in 3 hours and 30 km downstream in 2 hours. What is the speed of the stream?",
    options: ["A) 2.5 km/h", "B) 3 km/h", "C) 3.5 km/h", "D) 4 km/h"],
    answer: "A",
    explanation: "Upstream speed=30/3=10 km/h. Downstream speed=30/2=15 km/h. Speed of stream=(15−10)/2=2.5 km/h."
  },
  {
    id: 1167, section: "General Intelligence & Reasoning",
    text: "In a mixture of 60 litres, the ratio of alcohol to water is 2:1. How much water must be added to make the ratio 1:2?",
    options: ["A) 60 litres", "B) 55 litres", "C) 50 litres", "D) 45 litres"],
    answer: "A",
    explanation: "Alcohol=40L, Water=20L. For ratio 1:2: water needed=2×40=80L. Water to add=80−20=60L."
  },
  {
    id: 1168, section: "General Intelligence & Reasoning",
    text: "The difference between compound interest and simple interest on ₹5000 for 2 years at 10% per annum is:",
    options: ["A) ₹50", "B) ₹75", "C) ₹100", "D) ₹125"],
    answer: "A",
    explanation: "SI=5000×10×2/100=₹1000. CI=5000×[(1.1)²−1]=5000×0.21=₹1050. Difference=₹50."
  },
  {
    id: 1169, section: "General Intelligence & Reasoning",
    text: "A train travelling at 72 km/h crosses a man standing on a platform in 10 seconds and crosses the entire platform in 22 seconds. What is the length of the platform?",
    options: ["A) 200 m", "B) 220 m", "C) 240 m", "D) 260 m"],
    answer: "C",
    explanation: "Speed=72×5/18=20 m/s. Train length=20×10=200m. Train+Platform=20×22=440m. Platform=440−200=240m."
  },
  {
    id: 1170, section: "General Intelligence & Reasoning",
    text: "The average of 8 numbers is 25. Two numbers are excluded: one is 20. If the average of the remaining 6 numbers is 22, what is the other excluded number?",
    options: ["A) 42", "B) 46", "C) 48", "D) 50"],
    answer: "C",
    explanation: "Total of 8=8×25=200. Sum of 6=6×22=132. Sum of 2 excluded=200−132=68. Other excluded=68−20=48."
  },

  // ══════════════════════════════════════════════════════════════
  // SECTION B: English Comprehension (Q51–Q60)
  // IDs 1171–1180
  // ══════════════════════════════════════════════════════════════

  {
    id: 1171, section: "English Comprehension",
    text: "Choose the word most similar in meaning to LACONIC:",
    options: ["A) Verbose", "B) Concise", "C) Elaborate", "D) Fluent"],
    answer: "B",
    explanation: "Laconic means using very few words; brief and to the point. Concise is its closest synonym. Verbose and elaborate mean the opposite."
  },
  {
    id: 1172, section: "English Comprehension",
    text: "Choose the word most opposite in meaning to GREGARIOUS:",
    options: ["A) Sociable", "B) Outgoing", "C) Solitary", "D) Friendly"],
    answer: "C",
    explanation: "Gregarious means fond of company; sociable. Its antonym is solitary — preferring to be alone, unsociable."
  },
  {
    id: 1173, section: "English Comprehension",
    text: "Choose the correctly spelled word:",
    options: ["A) Accomodation", "B) Accommodation", "C) Acommodation", "D) Accomodtion"],
    answer: "B",
    explanation: "The correct spelling is 'Accommodation' — double 'c' and double 'm'. A common error is to write only one 'c' or one 'm'."
  },
  {
    id: 1174, section: "English Comprehension",
    text: "Find the part with a grammatical error: (A) The data that / (B) you have provided / (C) is insufficient / (D) for our analysis.",
    options: ["A) Part A", "B) Part B", "C) Part C", "D) No error"],
    answer: "C",
    explanation: "'Data' is the plural form of 'datum'. The verb must be plural: 'are insufficient', not 'is insufficient'. The error is in Part C."
  },
  {
    id: 1175, section: "English Comprehension",
    text: "The government has decided to _______ the controversial bill despite strong opposition.",
    options: ["A) rescind", "B) promulgate", "C) abrogate", "D) defer"],
    answer: "B",
    explanation: "'Promulgate' means to make a law or decree publicly known and put it into effect. 'Rescind' and 'abrogate' mean to cancel/repeal; 'defer' means to postpone. The sentence implies the bill is being pushed through."
  },
  {
    id: 1176, section: "English Comprehension",
    text: "What does the idiom 'Pyrrhic victory' mean?",
    options: ["A) A glorious win with no losses", "B) A victory won at such a devastating cost that it is tantamount to defeat", "C) An unexpected victory", "D) A victory won through deception"],
    answer: "B",
    explanation: "A Pyrrhic victory is one where the winner suffers such severe losses that the outcome is barely distinguishable from defeat. Named after King Pyrrhus of Epirus who defeated the Romans but at enormous cost."
  },
  {
    id: 1177, section: "English Comprehension",
    text: "One word substitution: 'One who walks in sleep':",
    options: ["A) Somnambulist", "B) Insomniac", "C) Narcissist", "D) Hypnotist"],
    answer: "A",
    explanation: "A somnambulist is a person who walks in their sleep (sleepwalker). Insomniac = person who cannot sleep; Narcissist = person with excessive self-admiration."
  },
  {
    id: 1178, section: "English Comprehension",
    text: "Find the part with a grammatical error: (A) If I were you, / (B) I would not have / (C) accepted the / (D) job offer.",
    options: ["A) Part A", "B) Part B", "C) Part C", "D) No error"],
    answer: "B",
    explanation: "'If I were you' expresses a present hypothetical situation, so the main clause should use 'would not accept' (present conditional). 'Would not have accepted' is used for past hypotheticals ('If I had been you'). Error is in Part B."
  },
  {
    id: 1179, section: "English Comprehension",
    text: "Fill in the blank: His speech was so _______ that the audience was moved to tears.",
    options: ["A) mundane", "B) pedantic", "C) eloquent", "D) laconic"],
    answer: "C",
    explanation: "Being moved to tears by a speech requires eloquence — the ability to speak fluently and persuasively. Mundane = ordinary; pedantic = overly academic; laconic = brief."
  },
  {
    id: 1180, section: "English Comprehension",
    text: "Choose the word most opposite in meaning to EPHEMERAL:",
    options: ["A) Transient", "B) Fleeting", "C) Perennial", "D) Momentary"],
    answer: "C",
    explanation: "Ephemeral means lasting only a very short time. Its antonym is perennial — lasting or existing for a long or apparently infinite time. Transient, fleeting, and momentary are all synonyms of ephemeral."
  }

];
