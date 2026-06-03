// fulltest7.js – Dr Shetye Academic Programme
// JSO Pre-Screening Test 4 — Goa Civil Service (Junior Scale Officer)
// 60 Questions · IDs 1181–1240
// Section A: General Intelligence & Reasoning — 50 Q (1181–1230)
// Section B: English Comprehension — 10 Q (1231–1240)
// Duration: 75 minutes · 60 marks · All answers verified

var questions = [

  // ── Number Series (1181–1186) ──
  { id:1181, section:"General Intelligence & Reasoning",
    text:"Find the missing number: 6, 11, 21, 41, 81, ?",
    options:["A) 161","B) 162","C) 163","D) 164"], answer:"A",
    explanation:"Pattern: ×2−1. 6×2−1=11, 11×2−1=21, 21×2−1=41, 41×2−1=81, 81×2−1=161." },

  { id:1182, section:"General Intelligence & Reasoning",
    text:"Find the wrong number in the series: 1, 3, 6, 10, 15, 21, 30",
    options:["A) 6","B) 15","C) 21","D) 30"], answer:"D",
    explanation:"Triangular numbers: n(n+1)/2. 7th term=7×8/2=28. 30 should be 28 — it is the wrong number." },

  { id:1183, section:"General Intelligence & Reasoning",
    text:"Find the missing term: 3, 9, 27, 81, ?, 729",
    options:["A) 162","B) 243","C) 324","D) 405"], answer:"B",
    explanation:"Geometric series, ratio=3. 81×3=243." },

  { id:1184, section:"General Intelligence & Reasoning",
    text:"Find the missing term: 2, 6, 12, 20, 30, 42, ?",
    options:["A) 54","B) 56","C) 60","D) 64"], answer:"B",
    explanation:"Pattern n(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42, 7×8=56." },

  { id:1185, section:"General Intelligence & Reasoning",
    text:"Find the next term: J2, L4, N8, P16, ?",
    options:["A) Q32","B) R32","C) R33","D) S32"], answer:"B",
    explanation:"Letters +2: J,L,N,P,R. Numbers ×2: 2,4,8,16,32. Next term: R32." },

  { id:1186, section:"General Intelligence & Reasoning",
    text:"Find the next term in the series: 5, 5, 10, 30, 120, ?",
    options:["A) 600","B) 360","C) 480","D) 720"], answer:"A",
    explanation:"Pattern: ×1, ×2, ×3, ×4, ×5. 5×1=5, 5×2=10, 10×3=30, 30×4=120, 120×5=600." },

  // ── Analogy (1187–1192) ──
  { id:1187, section:"General Intelligence & Reasoning",
    text:"Oasis : Desert :: Island : ?",
    options:["A) River","B) Ocean","C) Lake","D) Mountain"], answer:"B",
    explanation:"An oasis is a fertile spot surrounded by desert. An island is land surrounded by ocean." },

  { id:1188, section:"General Intelligence & Reasoning",
    text:"36 : 100 :: 49 : ?",
    options:["A) 121","B) 144","C) 196","D) 169"], answer:"A",
    explanation:"6²=36, 10²=100. Pattern: n² : (n+4)². 7²=49, (7+4)²=11²=121." },

  { id:1189, section:"General Intelligence & Reasoning",
    text:"Architect : Blueprint :: Composer : ?",
    options:["A) Piano","B) Score","C) Song","D) Orchestra"], answer:"B",
    explanation:"An architect creates a blueprint (technical plan). A composer creates a score (written musical notation). Both are technical representations of a creative work." },

  { id:1190, section:"General Intelligence & Reasoning",
    text:"BFJN : CGKO :: DHLP : ?",
    options:["A) EIMT","B) EIMQ","C) FJNR","D) GILQ"], answer:"B",
    explanation:"Each letter +1: B→C, F→G, J→K, N→O. Same: D→E, H→I, L→M, P→Q = EIMQ." },

  { id:1191, section:"General Intelligence & Reasoning",
    text:"8 : 512 :: 7 : ?",
    options:["A) 294","B) 343","C) 392","D) 441"], answer:"B",
    explanation:"8³=512. Relationship: n : n³. So 7³=343." },

  { id:1192, section:"General Intelligence & Reasoning",
    text:"Dermatology : Skin :: Cardiology : ?",
    options:["A) Brain","B) Lungs","C) Heart","D) Kidneys"], answer:"C",
    explanation:"Dermatology is the medical study of skin. Cardiology is the medical study of the heart." },

  // ── Coding & Decoding (1193–1198) ──
  { id:1193, section:"General Intelligence & Reasoning",
    text:"If CHAIR is coded as DIBJS (each letter +1), what is the code for BOARD?",
    options:["A) CPBSE","B) CQCSE","C) DPBSE","D) CPBTF"], answer:"A",
    explanation:"Each letter +1: B→C, O→P, A→B, R→S, D→E = CPBSE." },

  { id:1194, section:"General Intelligence & Reasoning",
    text:"If STONE = 13452 and NOTE = 4532, what is the code for ONSET?",
    options:["A) 45123","B) 54123","C) 45213","D) 41523"], answer:"A",
    explanation:"S=1,T=3,O=4,N=5,E=2. ONSET: O=4,N=5,S=1,E=2,T=3 = 45123." },

  { id:1195, section:"General Intelligence & Reasoning",
    text:"In a code: 'sky is blue'='pit na sa', 'blue bird flies'='ta na ra', 'bird is small'='pit ra ka'. What is the code for 'flies'?",
    options:["A) ta","B) na","C) ra","D) pit"], answer:"A",
    explanation:"'na' common to sentences 1&2 with 'blue' common → na=blue. 'ra' in 2&3 with 'bird' common → ra=bird. 'pit' in 1&3 with 'is' common → pit=is. Remaining in sentence 2: ta=flies." },

  { id:1196, section:"General Intelligence & Reasoning",
    text:"If '+' means '×', '×' means '÷', '÷' means '+', '−' means '−', find: 25 + 4 × 2 ÷ 8 − 3",
    options:["A) 53","B) 55","C) 57","D) 60"], answer:"B",
    explanation:"Substitute: 25×4÷2+8−3. BODMAS: 25×4=100, 100÷2=50, 50+8=58, 58−3=55." },

  { id:1197, section:"General Intelligence & Reasoning",
    text:"Matrix pattern: [2,3,7], [4,5,21], [6,7,?]. Find the missing number.",
    options:["A) 41","B) 43","C) 44","D) 45"], answer:"B",
    explanation:"Pattern: first×second+1. 2×3+1=7 ✓, 4×5+1=21 ✓, 6×7+1=43." },

  { id:1198, section:"General Intelligence & Reasoning",
    text:"If 4 ◈ 2 = 20, 3 ◈ 5 = 34, 6 ◈ 3 = 45, find 5 ◈ 4.",
    options:["A) 38","B) 39","C) 41","D) 43"], answer:"C",
    explanation:"Pattern: a◈b = a²+b². 4²+2²=20 ✓, 3²+5²=34 ✓, 6²+3²=45 ✓. So 5◈4=25+16=41." },

  // ── Blood Relations (1199–1202) ──
  { id:1199, section:"General Intelligence & Reasoning",
    text:"Pointing to a woman, a man says 'She is the sister of the father of my mother's son.' How is the woman related to the man?",
    options:["A) Mother","B) Aunt","C) Sister","D) Grandmother"], answer:"B",
    explanation:"'My mother's son'=the man. Father of the man=his father. Sister of his father=his paternal aunt." },

  { id:1200, section:"General Intelligence & Reasoning",
    text:"A is the father of C. B is the mother of D. C and D are married. How is A related to B?",
    options:["A) Father-in-law","B) Son-in-law","C) Brother","D) Co-father-in-law"], answer:"D",
    explanation:"C is A's child; D is B's child; C and D are married. A and B are co-parents-in-law (both parents of the married couple)." },

  { id:1201, section:"General Intelligence & Reasoning",
    text:"X is the brother of Y. Y is the daughter of Z. Z is the mother of W. W is the son of V. How is V related to X?",
    options:["A) Father","B) Uncle","C) Father-in-law","D) Brother"], answer:"A",
    explanation:"Y is Z's daughter. X is Y's brother → both are Z's children. W is also Z's son. V is W's father. Since Z is X's mother, V must be X's father." },

  { id:1202, section:"General Intelligence & Reasoning",
    text:"P is Q's son. Q is the father of R. S is R's brother. T is S's mother. How is T related to P?",
    options:["A) Grandmother","B) Mother","C) Aunt","D) Sister-in-law"], answer:"B",
    explanation:"Q is the father of R and S (S is R's brother, both are Q's sons). T is S's mother = Q's wife. P is Q's son. Q's wife T is P's mother. T is P's Mother." },

  // ── Direction Sense (1203–1206) ──
  { id:1203, section:"General Intelligence & Reasoning",
    text:"Priya walks 8 km North, turns right 6 km, turns right 8 km, turns left 4 km. How far from start and in which direction?",
    options:["A) 6 km East","B) 10 km West","C) 4 km East","D) 10 km East"], answer:"D",
    explanation:"N8→Right(E)6→Right(S)8→Left(E)4. Net N/S=0, East=6+4=10 km. Point E is 10 km East of start." },

  { id:1204, section:"General Intelligence & Reasoning",
    text:"Mohan walks 6 km South, 8 km West, 6 km North, 3 km East. How far from starting point?",
    options:["A) 5 km","B) 8 km","C) 10 km","D) 13 km"], answer:"A",
    explanation:"Net N/S: 6S−6N=0. Net W/E: 8W−3E=5W. Distance=5 km." },

  { id:1205, section:"General Intelligence & Reasoning",
    text:"A person facing South-West turns 135° clockwise. Which direction does he face?",
    options:["A) North","B) East","C) South-East","D) North-West"], answer:"A",
    explanation:"SW=225°. 225+135=360°=0°=North." },

  { id:1206, section:"General Intelligence & Reasoning",
    text:"From home Raju walks 3 km East, left 4 km, left 3 km, left 1 km. How far from home?",
    options:["A) 3 km North","B) 3 km South","C) 4 km North","D) 1 km West"], answer:"A",
    explanation:"E3→N4→W3→S1. Net E/W=0, N/S=4−1=3 North. He is 3 km North of home." },

  // ── Ranking & Arrangement (1207–1212) ──
  { id:1207, section:"General Intelligence & Reasoning",
    text:"In a class of 45 students, Rakesh is 19th from top and Seema is 24th from bottom. Students between them?",
    options:["A) 0","B) 1","C) 2","D) 3"], answer:"C",
    explanation:"Seema from top=45−24+1=22. Rakesh=19th. Between=22−19−1=2." },

  { id:1208, section:"General Intelligence & Reasoning",
    text:"In a row of 8 people, B is 5th from the right. What is B's position from the left?",
    options:["A) 3rd","B) 4th","C) 5th","D) 6th"], answer:"B",
    explanation:"Position from left = 8−5+1 = 4th." },

  { id:1209, section:"General Intelligence & Reasoning",
    text:"Five friends P,Q,R,S,T in a row. Q is between R and S. T is right of S. P is left of R. Left to right order:",
    options:["A) P,R,Q,S,T","B) P,Q,R,S,T","C) T,S,Q,R,P","D) R,P,Q,S,T"], answer:"A",
    explanation:"P left of R. Q between R and S. T right of S. Building: P, R, Q, S, T." },

  { id:1210, section:"General Intelligence & Reasoning",
    text:"Preet is 8th from the left and 14th from the right in a row. Total people in the row?",
    options:["A) 20","B) 21","C) 22","D) 23"], answer:"B",
    explanation:"Total = 8+14−1 = 21." },

  { id:1211, section:"General Intelligence & Reasoning",
    text:"In a queue of 50, Raj moved 8 places forward and is now 10th from front. Original position from back?",
    options:["A) 32","B) 33","C) 34","D) 35"], answer:"B",
    explanation:"Original from front=10+8=18. From back=50−18+1=33." },

  { id:1212, section:"General Intelligence & Reasoning",
    text:"If the 6th letter from the left and the 6th letter from the right of the alphabet are written, what are they?",
    options:["A) F and U","B) F and V","C) G and U","D) E and V"], answer:"A",
    explanation:"6th from left = F (A=1,B=2,C=3,D=4,E=5,F=6). 6th from right = U (Z=1,Y=2,X=3,W=4,V=5,U=6). Answer: F and U." },

  // ── Odd One Out (1213–1216) ──
  { id:1213, section:"General Intelligence & Reasoning",
    text:"Find the odd one out: 51, 63, 75, 82, 99",
    options:["A) 51","B) 63","C) 75","D) 82"], answer:"D",
    explanation:"51, 63, 75, 99 are all divisible by 3. 82=2×41 is not divisible by 3 — it is the odd one out." },

  { id:1214, section:"General Intelligence & Reasoning",
    text:"Find the odd one out: Violin, Guitar, Flute, Sitar, Veena",
    options:["A) Violin","B) Guitar","C) Flute","D) Sitar"], answer:"C",
    explanation:"Violin, Guitar, Sitar, Veena are all string instruments. Flute is a wind instrument — odd one out." },

  { id:1215, section:"General Intelligence & Reasoning",
    text:"Find the odd one out: 256, 289, 324, 360, 400",
    options:["A) 289","B) 324","C) 360","D) 400"], answer:"C",
    explanation:"16²=256, 17²=289, 18²=324, 20²=400 are perfect squares. 19²=361≠360. So 360 is not a perfect square." },

  { id:1216, section:"General Intelligence & Reasoning",
    text:"Find the odd one out: 64, 125, 216, 343, 512, 730",
    options:["A) 216","B) 343","C) 512","D) 730"], answer:"D",
    explanation:"4³=64, 5³=125, 6³=216, 7³=343, 8³=512 are all perfect cubes. 9³=729≠730. So 730 is the odd one out." },

  // ── Syllogism (1217–1221) ──
  { id:1217, section:"General Intelligence & Reasoning",
    text:"All doctors are engineers. Some engineers are teachers. Conclusions: I. Some doctors are teachers. II. Some teachers are engineers.",
    options:["A) Only I","B) Only II","C) Both","D) Neither"], answer:"B",
    explanation:"Some engineers are teachers → II ✓. All doctors are engineers but only some engineers are teachers — those teachers may not include any doctors. I not guaranteed. Only II." },

  { id:1218, section:"General Intelligence & Reasoning",
    text:"All rivers flow. All that flows is temporary. Conclusions: I. All rivers are temporary. II. Some temporary things are rivers.",
    options:["A) Only I","B) Only II","C) Both","D) Neither"], answer:"C",
    explanation:"All rivers→flow→temporary (I ✓). Since all rivers are temporary, some temporary things are rivers (II ✓). Both follow." },

  { id:1219, section:"General Intelligence & Reasoning",
    text:"No chair is a table. No table is a bed. Conclusions: I. No chair is a bed. II. Some tables are not beds.",
    options:["A) Only I","B) Only II","C) Both","D) Neither"], answer:"B",
    explanation:"No table is a bed → All tables are not beds → Some tables are not beds (II ✓). Chairs and beds are not directly linked in the statements, so I does not necessarily follow. Only II." },

  { id:1220, section:"General Intelligence & Reasoning",
    text:"All mangoes are fruits. Some fruits are sweet. All sweet things are healthy. Conclusions: I. Some mangoes are sweet. II. Some fruits are healthy.",
    options:["A) Only I","B) Only II","C) Both","D) Neither"], answer:"B",
    explanation:"Some fruits are sweet + All sweet → healthy → Some fruits are healthy (II ✓). 'Some fruits' that are sweet may not include mangoes, so I doesn't necessarily follow. Only II." },

  { id:1221, section:"General Intelligence & Reasoning",
    text:"Some stones are rocks. All rocks are metals. No metal is a gem. Conclusions: I. Some stones are metals. II. No rock is a gem. III. Some stones are not gems.",
    options:["A) Only I and II","B) Only II and III","C) All three","D) Only I"], answer:"C",
    explanation:"Some stones→rocks→metals (I ✓). All rocks→metals + No metal is gem → No rock is gem (II ✓). Some stones are metals + No metal is gem → Some stones are not gems (III ✓). All three follow." },

  // ── Mathematical Operations & Misc Reasoning (1222–1225) ──
  { id:1222, section:"General Intelligence & Reasoning",
    text:"If 2@3=17, 3@4=31, 4@5=49, find 5@6. (Pattern: a@b = a²+b²+(a+b−1))",
    options:["A) 68","B) 70","C) 71","D) 72"], answer:"C",
    explanation:"Verify: 4+9+4=17 ✓, 9+16+6=31 ✓, 16+25+8=49 ✓. 5@6=25+36+10=71." },

  { id:1223, section:"General Intelligence & Reasoning",
    text:"Select correct signs to satisfy: 15 ? 3 ? 2 ? 4 = 14",
    options:["A) ÷, ×, +","B) ÷, +, ×","C) ×, ÷, +","D) +, ×, ÷"], answer:"A",
    explanation:"A: 15÷3×2+4 = 5×2+4 = 14 ✓. B: 15÷3+2×4=5+8=13 ✗. C: 15×3÷2+4=26.5 ✗. Only A works." },

  { id:1224, section:"General Intelligence & Reasoning",
    text:"How many times does the digit 3 appear when counting from 1 to 100?",
    options:["A) 10","B) 11","C) 19","D) 20"], answer:"D",
    explanation:"Units place (3,13,23,33,...,93)=10 times. Tens place (30,31,...,39)=10 times. Total=20." },

  { id:1225, section:"General Intelligence & Reasoning",
    text:"Find the value of: 1/(1×2) + 1/(2×3) + 1/(3×4) + ... + 1/(9×10)",
    options:["A) 7/10","B) 8/10","C) 9/10","D) 1"], answer:"C",
    explanation:"Each term: 1/n − 1/(n+1). Telescoping sum = 1 − 1/10 = 9/10." },

  // ── Calendar & Clock (1226–1229) ──
  { id:1226, section:"General Intelligence & Reasoning",
    text:"A clock set right at 8 AM loses 4 minutes every hour. What does it show at 4 PM?",
    options:["A) 3:08 PM","B) 3:12 PM","C) 3:20 PM","D) 3:28 PM"], answer:"D",
    explanation:"8 AM to 4 PM = 8 hours. Loss = 4×8=32 minutes. Clock shows 4:00−32min = 3:28 PM." },

  { id:1227, section:"General Intelligence & Reasoning",
    text:"What is the angle between hour and minute hands of a clock at 8:15?",
    options:["A) 142.5°","B) 150°","C) 157.5°","D) 162.5°"], answer:"C",
    explanation:"Minute hand=15×6=90°. Hour hand=8×30+15×0.5=240+7.5=247.5°. Angle=|247.5−90|=157.5°." },

  { id:1228, section:"General Intelligence & Reasoning",
    text:"If today is Friday, what day will it be 100 days later?",
    options:["A) Sunday","B) Monday","C) Tuesday","D) Wednesday"], answer:"A",
    explanation:"100÷7=14 remainder 2. Friday+2=Sunday." },

  { id:1229, section:"General Intelligence & Reasoning",
    text:"A clock shows 10:10. What is the angle between the hour and minute hands?",
    options:["A) 110°","B) 115°","C) 120°","D) 125°"], answer:"B",
    explanation:"|30×10−(11/2)×10|=|300−55|=245°. Non-reflex angle=360−245=115°." },

  // ── Numerical Aptitude (1230) ──
  { id:1230, section:"General Intelligence & Reasoning",
    text:"The diagonal of a square is 14√2 cm. What is its area?",
    options:["A) 196 sq cm","B) 224 sq cm","C) 244 sq cm","D) 392 sq cm"], answer:"A",
    explanation:"Area = d²/2 = (14√2)²/2 = 392/2 = 196 sq cm." },

  // ══════════════════════════════════════════════════════════════
  // SECTION B: English Comprehension (Q51–Q60) — IDs 1231–1240
  // ══════════════════════════════════════════════════════════════

  { id:1231, section:"English Comprehension",
    text:"Choose the word most similar in meaning to ALACRITY:",
    options:["A) Laziness","B) Eagerness","C) Sadness","D) Anger"], answer:"B",
    explanation:"Alacrity means brisk and cheerful readiness. Its synonym is eagerness." },

  { id:1232, section:"English Comprehension",
    text:"Choose the word most opposite in meaning to BENIGN:",
    options:["A) Kind","B) Gentle","C) Malignant","D) Peaceful"], answer:"C",
    explanation:"Benign means gentle or not harmful. Its antonym is malignant — intending evil or (medically) life-threatening." },

  { id:1233, section:"English Comprehension",
    text:"Fill in the blank: The Prime Minister _______ the new policy at the press conference yesterday.",
    options:["A) announces","B) will announce","C) announced","D) has announced"], answer:"C",
    explanation:"'Yesterday' signals simple past tense. 'Announced' is correct. 'Has announced' (present perfect) cannot be used with 'yesterday'." },

  { id:1234, section:"English Comprehension",
    text:"Find the grammatical error: (A) The jury / (B) have delivered / (C) their verdict / (D) unanimously.",
    options:["A) Part A","B) Part B","C) Part C","D) No error"], answer:"D",
    explanation:"'Jury' acting as individual members takes a plural verb ('have') and plural pronoun ('their'). 'Unanimously' is correct. No grammatical error." },

  { id:1235, section:"English Comprehension",
    text:"One word substitution: A person who speaks many languages:",
    options:["A) Bilingual","B) Versatile","C) Polyglot","D) Linguist"], answer:"C",
    explanation:"Polyglot = person who knows several languages. Bilingual = two languages. Linguist = one who studies language professionally." },

  { id:1236, section:"English Comprehension",
    text:"What does the idiom 'To beat around the bush' mean?",
    options:["A) To search in a forest","B) To avoid the main topic","C) To work very hard","D) To speak clearly and directly"], answer:"B",
    explanation:"'Beat around the bush' means to avoid coming to the main point; to speak evasively rather than directly." },

  { id:1237, section:"English Comprehension",
    text:"Fill in the blank: She was so tired that she could _______ walk.",
    options:["A) nearly","B) hardly","C) almost","D) mostly"], answer:"B",
    explanation:"'Hardly' means barely or scarcely. 'She could hardly walk' means she was barely able to walk. 'Nearly/almost' would mean the opposite — she was close to walking." },

  { id:1238, section:"English Comprehension",
    text:"Find the grammatical error: (A) Being a rainy day, / (B) we could not / (C) go out / (D) for a picnic.",
    options:["A) Part A","B) Part B","C) Part C","D) No error"], answer:"A",
    explanation:"'Being a rainy day' is a dangling participle — it has no proper subject. Correct: 'It being a rainy day' or 'As it was a rainy day'. Error in Part A." },

  { id:1239, section:"English Comprehension",
    text:"Choose the word most similar in meaning to MAGNANIMOUS:",
    options:["A) Small-minded","B) Generous","C) Proud","D) Timid"], answer:"B",
    explanation:"Magnanimous means very generous or forgiving towards rivals or those less powerful. Its synonym is generous." },

  { id:1240, section:"English Comprehension",
    text:"Select the grammatically correct sentence:",
    options:["A) Neither of the plans are acceptable.","B) Neither of the plans is acceptable.","C) Neither of the plans were acceptable.","D) Neither of the plans have been accepted."], answer:"B",
    explanation:"'Neither' is singular and requires a singular verb. 'Neither of the plans is acceptable' is the only grammatically correct option." }

];
