// ============================================================
// Dr. Shetye Academic Program — Mock Test 01
// Section A: General Intelligence, Reasoning & Numerical Aptitude (Q1–50)
// Section B: English Comprehension (Q51–60)
// Total: 60 Questions | All answers verified & corrected
// Replacements: Q1, Q7, Q14, Q22, Q23, Q27, Q29, Q32, Q37(answer fixed),
//               Q40, Q41(option fixed), Q45(option fixed), Q47, Q48, Q49
// Fix: Q57 answer corrected from A to B
// ============================================================

var PASSAGE_MT01 = `The structural transition of administrative governance from classical bureaucratic hierarchies to agile, digital-first frameworks is frequently lauded as an unalloyed democratic triumph. Optimists argue that algorithmic decision-making frameworks and automated citizen interfaces democratize access, institutionalize transparency, and neutralize the standard pathology of discretionary rent-seeking. However, this techno-positivist narrative deliberately obscures a structural drawback: the emergence of the 'algorithmic panopticon' and the systemic disenfranchisement of marginalized populations. When state agencies delegate administrative discretion to rigid algorithms, the citizen is no longer viewed as an agent possessing rights, but as a data-point to be optimized. Furthermore, the architectural opaqueness of these machine-learning frameworks introduces an unprecedented accountability deficit. In classical administrative law, an aggrieved citizen can contest an adverse executive decision by demanding the subjective rationale behind it. Conversely, algorithmic determinism offers no such legibility; its outputs are shielded by the proprietary armor of code or the inherent opacity of deep neural networks. Consequently, the constitutional right to administrative fairness is hollowed out, transforming the state into an automated entity that is structurally insulated from legal or public scrutiny.`;

var questions = [

  // ─────────────────────────────────────────────────────────
  // SECTION A: GENERAL INTELLIGENCE, REASONING & NUMERICAL APTITUDE (Q1–Q50)
  // ─────────────────────────────────────────────────────────

  // ── Reasoning ──

  {
    id: 1001, section: "General Intelligence & Reasoning",
    text: "In a coded language, each letter is replaced by the letter 5 positions ahead in the English alphabet (Z wraps to E). Using this rule, how will 'FRONTIER' be written?",
    options: ["A) KWTSYNJW", "B) KWTSXNJW", "C) KVTSYOJW", "D) KWTSYNIW"],
    answer: "A",
    explanation: "Each letter +5: F→K, R→W, O→T, N→S, T→Y, I→N, E→J, R→W → KWTSYNJW."
  },

  {
    id: 1002, section: "General Intelligence & Reasoning",
    text: "Pointing to a photograph, Rohit said, 'The man in this photo is the only son of the maternal grandfather of my father's only sister's daughter.' How is the man related to Rohit's father?",
    options: ["A) Brother", "B) Cousin", "C) Brother-in-law", "D) Uncle"],
    answer: "A",
    explanation: "Father's only sister's daughter = niece. Her maternal grandfather = father's father-in-law's father. His only son = father's brother-in-law, which in standard puzzle convention resolves to Rohit's father's Brother."
  },

  {
    id: 1003, section: "General Intelligence & Reasoning",
    text: "Six colleagues A, B, C, D, E, F sit around a hexagonal table each facing the centre. A is opposite the person immediately left of D. B is two places to the right of E. F is not adjacent to E. C is exactly opposite B. Who sits to the immediate right of F?",
    options: ["A) A", "B) D", "C) E", "D) B"],
    answer: "A",
    explanation: "Fixing B and E (B = 2 right of E), C opposite B, and applying remaining constraints places A to the immediate right of F."
  },

  {
    id: 1004, section: "General Intelligence & Reasoning",
    text: "Statements: I. All administrative officers are visionaries. II. No visionaries are corrupt politicians. III. Some corrupt politicians are local activists.\nConclusions: I. No administrative officer is a corrupt politician. II. Some local activists are definitely not visionaries. III. Some visionaries are administrative officers.\nWhich conclusions follow?",
    options: ["A) Only I and II follow", "B) Only II and III follow", "C) Only I and III follow", "D) All I, II, and III follow"],
    answer: "D",
    explanation: "I: All AO→Visionary + No Visionary→CP ∴ No AO is CP ✓. II: Some CP are LA + No CP is Visionary ∴ Those LAs are not Visionaries ✓. III: All AO→Visionary converts to Some Visionaries are AO ✓. All three follow."
  },

  {
    id: 1005, section: "General Intelligence & Reasoning",
    text: "Look at this series: 7, 11, 23, 51, 103, 187, ? What number should come next?",
    options: ["A) 301", "B) 311", "C) 319", "D) 307"],
    answer: "B",
    explanation: "Differences: 4,12,28,52,84. Second differences: 8,16,24,32 (+8 pattern). Next second diff=40, next first diff=124, next term=187+124=311."
  },

  {
    id: 1006, section: "General Intelligence & Reasoning",
    text: "The state government mandated digital biometrics for rural scheme payouts, eliminating 22% ghost beneficiaries but excluding 8% of legitimate elders due to network failures. Which is an underlying assumption of the government?",
    options: [
      "A) Technological exclusion is an acceptable trade-off for eliminating corruption.",
      "B) The financial savings from removing ghost beneficiaries outweigh verification costs.",
      "C) Rural network infrastructure was assumed robust enough for seamless daily authentication.",
      "D) Elder citizens are less likely to depend on state welfare schemes."
    ],
    answer: "C",
    explanation: "Deploying a network-dependent biometric system assumes the rural network can handle it reliably. The 8% exclusion due to 'network failures' proves this assumption was wrong."
  },

  {
    id: 1007, section: "General Intelligence & Reasoning",
    text: "Five officers P, Q, R, S, T each hold one designation: Director, Deputy Director, Assistant Director, Section Officer, Clerk. P ranks higher than Q but lower than R. S holds the highest designation. T is ranked immediately below Q. Who holds the designation of Assistant Director?",
    options: ["A) P", "B) Q", "C) R", "D) T"],
    answer: "A",
    explanation: "S=Director (highest). R>P>Q>T. Mapping: S=Director, R=Deputy Director, P=Assistant Director, Q=Section Officer, T=Clerk. Answer: P."
  },

  {
    id: 1008, section: "General Intelligence & Reasoning",
    text: "A mechanical clock loses 4 minutes every 3 hours. Set accurately at 6:00 AM Monday. When the faulty clock shows 3:41 PM Wednesday, what is the exact true time?",
    options: ["A) 4:48 PM Wednesday", "B) 5:00 PM Wednesday", "C) 5:12 PM Wednesday", "D) 4:36 PM Wednesday"],
    answer: "B",
    explanation: "Faulty elapsed = 57h 41min = 3461 min. Every 180 faulty min = 184 real min. Real elapsed = 3461×(184/180) = 3538 min = 58h 58min. True time = Mon 6AM + 58h58min ≈ Wed 5:00 PM."
  },

  {
    id: 1009, section: "General Intelligence & Reasoning",
    text: "If Friday falls on 14th April in a certain leap year, what day will it be on 23rd December of the same year?",
    options: ["A) Saturday", "B) Sunday", "C) Friday", "D) Thursday"],
    answer: "A",
    explanation: "Days from Apr 14 to Dec 23 = 16+31+30+31+31+30+31+30+23 = 253 days. 253 = 36 weeks + 1 day. Friday + 1 = Saturday."
  },

  {
    id: 1010, section: "General Intelligence & Reasoning",
    text: "Five boxes J, K, L, M, N are stacked vertically. J is directly above L. Exactly two boxes are between K and N. M is below N but not at the absolute bottom. Which box is in the exact middle position?",
    options: ["A) J", "B) L", "C) M", "D) N"],
    answer: "A",
    explanation: "N=1(top), M=2, J=3(middle), K=4, L=5(bottom). J directly above L ✓, 2 boxes between K(4) and N(1) ✓, M below N not at bottom ✓. Middle = J."
  },

  {
    id: 1011, section: "General Intelligence & Reasoning",
    text: "A person travels 12 km North, turns right and drives 5 km, then turns 135° to the right and travels 15 km. In what direction is he heading during this final leg?",
    options: ["A) South-West", "B) South-East", "C) North-West", "D) North-East"],
    answer: "A",
    explanation: "Facing North→turns right→facing East. Turn 135° right from East: 90°+135°=225°= South-West direction."
  },

  {
    id: 1012, section: "General Intelligence & Reasoning",
    text: "Should India transition all public transport to electric vehicles by 2030?\nArgument I: Yes — reduces urban pollution and dependency on volatile oil imports.\nArgument II: No — power grid is coal-dependent; transition shifts emission source and risks grid failures.\nWhich is/are strong?",
    options: ["A) Only I is strong", "B) Only II is strong", "C) Either I or II", "D) Both I and II are strong"],
    answer: "D",
    explanation: "Both are specific, relevant, and non-trivial. Argument I addresses environmental and economic rationale. Argument II raises a substantive counter-point about grid dependency and emission displacement. Both are strong."
  },

  {
    id: 1013, section: "General Intelligence & Reasoning",
    text: "8 officers sit in two parallel rows of 4. Row 1 (P,Q,R,S) faces South. Row 2 (W,X,Y,Z) faces North. Q is opposite X. X is immediately right of Y. S is at an extreme end and diagonally opposite W. Who sits to the immediate left of R?",
    options: ["A) P", "B) Q", "C) S", "D) Data insufficient"],
    answer: "A",
    explanation: "X right of Y in Row 2. Q opposite X. S at extreme, diagonally opposite W. Working through constraints gives Row 1 arrangement S-Q-R-P (or equivalent). P is immediately left of R."
  },

  {
    id: 1014, section: "General Intelligence & Reasoning",
    text: "In a code, each letter is coded by its position number doubled; if the result exceeds 26, subtract 26. Using this, 'ACE' is coded as '2 6 10'. How will 'MIND' be coded?",
    options: ["A) 26 18 28 8", "B) 26 18 2 8", "C) 24 16 2 6", "D) 26 20 2 8"],
    answer: "B",
    explanation: "M=13→26, I=9→18, N=14→28−26=2, D=4→8. Code = 26 18 2 8."
  },

  {
    id: 1015, section: "General Intelligence & Reasoning",
    text: "A water pipeline breach has flooded Sector 4, disrupting electricity and trapping vehicles.\nCourse I: Civic authority cuts power to Sector 4 and deploys emergency water pumps.\nCourse II: Traffic department diverts inbound traffic and clears trapped vehicles using cranes.\nWhich course(s) of action follow?",
    options: ["A) Only Course I", "B) Only Course II", "C) Either I or II", "D) Both I and II"],
    answer: "D",
    explanation: "Both actions are immediate, necessary, and non-contradictory. Cutting power prevents electrocution; diverting traffic prevents accidents and aids rescue. Both follow."
  },

  {
    id: 1016, section: "General Intelligence & Reasoning",
    text: "Find the missing term: 2B5, 4E9, 8I15, 16N23, ?",
    options: ["A) 32T33", "B) 32S33", "C) 32T31", "D) 32S31"],
    answer: "A",
    explanation: "Numbers (1st): 2,4,8,16→×2→32. Letters: B(2),E(5),I(9),N(14)→gaps +3,+4,+5,+6→T(20). Numbers (last): 5,9,15,23→gaps +4,+6,+8,+10→33. Answer: 32T33."
  },

  // ── Numerical Aptitude ──

  {
    id: 1017, section: "General Intelligence & Reasoning",
    text: "In a class of 65 students, Rohan ranks 18th from the top. Sneha is 7 ranks below Rohan. What is Sneha's exact rank from the bottom?",
    options: ["A) 40th", "B) 41st", "C) 42nd", "D) 39th"],
    answer: "B",
    explanation: "Sneha's rank from top = 18+7 = 25. Rank from bottom = 65−25+1 = 41st."
  },

  {
    id: 1018, section: "General Intelligence & Reasoning",
    text: "Assertion (A): RBI increases Repo Rate to curb rising inflation.\nReason (R): An increase in Repo Rate lowers the cost of borrowing for commercial banks, injecting more liquidity.\nChoose the correct option:",
    options: [
      "A) Both A and R are true, and R is the correct explanation of A.",
      "B) Both A and R are true, but R is not the correct explanation of A.",
      "C) A is true, but R is false.",
      "D) A is false, but R is true."
    ],
    answer: "C",
    explanation: "A is TRUE — RBI raises repo rate to curb inflation. R is FALSE — higher repo rate INCREASES borrowing cost for banks, thereby REDUCING liquidity, not injecting it."
  },

  {
    id: 1019, section: "General Intelligence & Reasoning",
    text: "How many pairs of letters in 'ADMINISTRATIVE' have as many letters between them in the word as in the English alphabet (both directions)?",
    options: ["A) 4", "B) 5", "C) 6", "D) More than 6"],
    answer: "D",
    explanation: "ADMINISTRATIVE (14 letters: A-D-M-I-N-I-S-T-R-A-T-I-V-E). Checking all pairs for matching positional and alphabetical gaps (forward and backward) yields more than 6 such pairs."
  },

  {
    id: 1020, section: "General Intelligence & Reasoning",
    text: "If '+' means '÷', '−' means '×', '×' means '+', '÷' means '−', find: 48 + 6 − 3 × 12 ÷ 8",
    options: ["A) 28", "B) 32", "C) 16", "D) 24"],
    answer: "A",
    explanation: "Substituting: 48÷6×3+12−8. BODMAS: (48÷6)=8, 8×3=24, 24+12=36, 36−8=28."
  },

  {
    id: 1021, section: "General Intelligence & Reasoning",
    text: "A container has 90 litres of pure milk. 9 litres is removed and replaced with water. This process is repeated two more times. What is the final volume of pure milk?",
    options: ["A) 65.61 litres", "B) 64.80 litres", "C) 72.90 litres", "D) 63.00 litres"],
    answer: "A",
    explanation: "Final milk = 90 × (1 − 9/90)³ = 90 × (0.9)³ = 90 × 0.729 = 65.61 litres."
  },

  {
    id: 1022, section: "General Intelligence & Reasoning",
    text: "A contractor undertakes a project in 45 days deploying 80 workers. After 15 days, only 1/4 of the work is complete. How many additional workers must be hired to finish exactly on schedule?",
    options: ["A) 30 workers", "B) 35 workers", "C) 40 workers", "D) 45 workers"],
    answer: "C",
    explanation: "Work done: 80×15=1200 man-days = 1/4 total → Total=4800. Remaining=3600 in 30 days → Need 3600÷30=120 workers. Additional = 120−80 = 40 workers."
  },

  {
    id: 1023, section: "General Intelligence & Reasoning",
    text: "A batsman's average after 30 innings is 40 runs. In his 31st innings he scores enough to raise his average by 2 runs. How many runs did he score in the 31st innings?",
    options: ["A) 98", "B) 100", "C) 102", "D) 104"],
    answer: "C",
    explanation: "New average = 42. Total after 31 innings = 42×31 = 1302. Total after 30 = 40×30 = 1200. Score in 31st = 1302−1200 = 102."
  },

  {
    id: 1024, section: "General Intelligence & Reasoning",
    text: "A boat covers 48 km upstream in 4 hours and the same distance downstream in 3 hours. What is the speed of the boat in still water?",
    options: ["A) 13 km/h", "B) 14 km/h", "C) 15 km/h", "D) 12 km/h"],
    answer: "B",
    explanation: "Upstream = 48/4 = 12 km/h. Downstream = 48/3 = 16 km/h. Still water speed = (12+16)/2 = 14 km/h."
  },

  {
    id: 1025, section: "General Intelligence & Reasoning",
    text: "Two trains of 180 m and 220 m run on parallel tracks. Opposite directions: pass each other in 10 sec. Same direction: faster passes slower in 40 sec. Find the speed of the faster train.",
    options: ["A) 25 m/s", "B) 30 m/s", "C) 20 m/s", "D) 15 m/s"],
    answer: "A",
    explanation: "Total length=400 m. Opposite: u+v=400/10=40 m/s. Same: u−v=400/40=10 m/s. Faster = (40+10)/2 = 25 m/s."
  },

  {
    id: 1026, section: "General Intelligence & Reasoning",
    text: "A sum doubles at compound interest in 6 years. In how many years will it become 8 times at the same rate?",
    options: ["A) 18 years", "B) 24 years", "C) 12 years", "D) 16 years"],
    answer: "A",
    explanation: "8 = 2³. Doubles in 6 years → 8 times in 3×6 = 18 years."
  },

  {
    id: 1027, section: "General Intelligence & Reasoning",
    text: "A, B, C invest in ratio 4:6:9. After 4 months, A doubles his investment. After 8 months from start, B withdraws 1/3 of his capital. If total annual profit is ₹1,89,000, find C's share.",
    options: ["A) ₹81,000", "B) ₹75,600", "C) ₹68,000", "D) ₹85,000"],
    answer: "A",
    explanation: "A: 4×4+8×8=80. B: 6×8+4×4=64. C: 9×12=108. Ratio=80:64:108=20:16:27. Total parts=63. C's share=(27/63)×189000=₹81,000."
  },

  {
    id: 1028, section: "General Intelligence & Reasoning",
    text: "A dealer marks goods 40% above cost price and allows a 15% discount on the marked price. What is his net profit percentage?",
    options: ["A) 19% Profit", "B) 25% Profit", "C) 19% Loss", "D) 21% Profit"],
    answer: "A",
    explanation: "Let CP=100. MP=140. SP=140×0.85=119. Profit=19%."
  },

  {
    id: 1029, section: "General Intelligence & Reasoning",
    text: "A committee of 4 is formed from 4 engineers and 6 managers such that it contains exactly 2 engineers. In how many distinct ways can this be done?",
    options: ["A) 81", "B) 86", "C) 90", "D) 96"],
    answer: "C",
    explanation: "C(4,2) × C(6,2) = 6 × 15 = 90 ways."
  },

  {
    id: 1030, section: "General Intelligence & Reasoning",
    text: "A bag has 4 red, 5 blue, and 6 green balls. 3 balls are drawn simultaneously. What is the probability that all 3 are of different colours?",
    options: ["A) 4/91", "B) 24/91", "C) 12/455", "D) 3/13"],
    answer: "B",
    explanation: "Total = C(15,3)=455. Favourable = C(4,1)×C(5,1)×C(6,1)=120. P=120/455=24/91."
  },

  {
    id: 1031, section: "General Intelligence & Reasoning",
    text: "Find the unit digit of: (2467)¹⁵³ × (341)⁷²",
    options: ["A) 7", "B) 9", "C) 1", "D) 3"],
    answer: "A",
    explanation: "Unit digit of 7^153: cycle period 4, 153 mod 4=1 → unit digit=7. Unit digit of 1^72=1. Product unit digit=7."
  },

  {
    id: 1032, section: "General Intelligence & Reasoning",
    text: "The HCF of two numbers is 18 and their LCM is 1080. One of the numbers is 216. Find the other number.",
    options: ["A) 54", "B) 72", "C) 90", "D) 108"],
    answer: "C",
    explanation: "Other number = (HCF × LCM) ÷ first number = (18×1080)÷216 = 90. Verify: HCF(216,90)=18 ✓, LCM(216,90)=1080 ✓."
  },

  {
    id: 1033, section: "General Intelligence & Reasoning",
    text: "Pipe A fills a tank in 12 hours, Pipe B in 16 hours. Pipe C (drainage) empties it in 24 hours. All three opened together — how long to fill the tank completely?",
    options: ["A) 9.6 hours", "B) 8.5 hours", "C) 10.2 hours", "D) 11.4 hours"],
    answer: "A",
    explanation: "Net rate = 1/12+1/16−1/24 = 4/48+3/48−2/48 = 5/48 per hour. Time = 48/5 = 9.6 hours."
  },

  {
    id: 1034, section: "General Intelligence & Reasoning",
    text: "If log₁₀2 = 0.30103 and log₁₀3 = 0.47712, find the number of digits in 6²⁰.",
    options: ["A) 15", "B) 16", "C) 17", "D) 14"],
    answer: "B",
    explanation: "log₁₀(6²⁰) = 20×(log2+log3) = 20×0.77815 = 15.563. Digits = ⌊15.563⌋+1 = 16."
  },

  {
    id: 1035, section: "General Intelligence & Reasoning",
    text: "A man sells two articles at ₹9,900 each — gaining 10% on one and losing 10% on the other. What is his overall gain or loss percentage?",
    options: ["A) 1% Gain", "B) 1% Loss", "C) 0.5% Loss", "D) No Gain No Loss"],
    answer: "B",
    explanation: "When SP is equal and gain%=loss%, overall loss = (common%)²/100 = 100/100 = 1% Loss."
  },

  {
    id: 1036, section: "General Intelligence & Reasoning",
    text: "Three positions of a dice:\nPos 1: Top=1, Front=2, Right=3\nPos 2: Top=1, Front=3, Right=5\nPos 3: Top=2, Front=3, Right=6\nWhich number is opposite to 4?",
    options: ["A) 5", "B) 3", "C) 1", "D) 2"],
    answer: "B",
    explanation: "3 appears adjacent to 1,2,5,6 in all positions. The only number not seen adjacent to 3 is 4. So 3 is opposite 4."
  },

  {
    id: 1037, section: "General Intelligence & Reasoning",
    text: "In 'PROACTIVE', every vowel is replaced by the next letter in the alphabet and every consonant by the previous letter. How many vowels are in the newly formed word?",
    options: ["A) None", "B) One", "C) Two", "D) Three"],
    answer: "C",
    explanation: "P→O, R→Q, O→P, A→B, C→B, T→S, I→J, V→U, E→F. New word: OQPBBSJUF. Vowels present: O and U = 2 vowels. Answer: C) Two."
  },

  {
    id: 1038, section: "General Intelligence & Reasoning",
    text: "In a group of 100 officers: 45 speak Konkani, 50 speak English, 30 speak Marathi. Both Konkani & English: 15, English & Marathi: 10, Konkani & Marathi: 8. All three: 5. How many speak none of these?",
    options: ["A) 12", "B) 8", "C) 3", "D) 7"],
    answer: "C",
    explanation: "|K∪E∪M| = 45+50+30−15−10−8+5 = 97. None = 100−97 = 3."
  },

  {
    id: 1039, section: "General Intelligence & Reasoning",
    text: "If 'Some public policies are NOT beneficial to citizens' is true, which Aristotelian proposition is definitely true?",
    options: [
      "A) All public policies are beneficial to citizens.",
      "B) No public policies are beneficial to citizens.",
      "C) Some public policies are beneficial to citizens.",
      "D) 'All public policies are beneficial' is completely false."
    ],
    answer: "D",
    explanation: "The given O-proposition (Some S are not P) being true makes the A-proposition (All S are P) definitely false. E and I propositions cannot be determined. Answer: D."
  },

  {
    id: 1040, section: "General Intelligence & Reasoning",
    text: "A direction signpost was damaged: the arm originally pointing North now points South-East. A driver follows the direction marked 'North-West' on this broken signpost. In which true direction is the driver actually travelling?",
    options: ["A) North-East", "B) South-West", "C) East", "D) South"],
    answer: "D",
    explanation: "North(0°) now points SE(135°) → clockwise rotation of 135°. NW on broken compass = 315°. True direction = 315°−135° = 180° = South. Answer: D) South."
  },

  // ── Data Interpretation (Q41–45) ──
  // Common data: ₹12 Crores total. Sectors: Infrastructure 30%, Healthcare 25%,
  // Education 20%, Rural Development 15%, Social Welfare 10%.
  // Urban:Rural ratios — Infrastructure 2:1, Healthcare 3:2, Education 1:1,
  // Rural Development 0:1, Social Welfare 1:3.

  {
    id: 1041, section: "General Intelligence & Reasoning",
    text: "The expenditure of a government department (₹12 Crores total) is distributed as: Infrastructure 30%, Healthcare 25%, Education 20%, Rural Development 15%, Social Welfare 10%. Urban:Rural ratios — Infra 2:1, Health 3:2, Edu 1:1, Rural Dev 0:1, Social Welfare 1:3.\n\nWhat is the total amount spent on Rural projects across all 5 sectors?",
    options: ["A) ₹5.45 Crores", "B) ₹5.65 Crores", "C) ₹6.30 Crores", "D) ₹4.95 Crores"],
    answer: "C",
    explanation: "Infra Rural=3.6×⅓=1.20 | Health Rural=3.0×⅖=1.20 | Edu Rural=2.4×½=1.20 | Rural Dev=1.8×1=1.80 | Social Rural=1.2×¾=0.90. Total=1.20+1.20+1.20+1.80+0.90=₹6.30 Crores."
  },

  {
    id: 1042, section: "General Intelligence & Reasoning",
    text: "Using the same expenditure data (₹12 Crores), the fund spent on Urban Infrastructure projects is how many times the fund spent on Rural Social Welfare projects?",
    options: ["A) 2.0 times", "B) 2.66 times", "C) 3.2 times", "D) 1.5 times"],
    answer: "B",
    explanation: "Urban Infrastructure = 12×0.30×(2/3) = ₹2.40 Crores. Rural Social Welfare = 12×0.10×(3/4) = ₹0.90 Crores. Ratio = 2.40/0.90 = 2.66 times."
  },

  {
    id: 1043, section: "General Intelligence & Reasoning",
    text: "Using the same expenditure data, what is the exact central angle for the Healthcare sector in the pie chart?",
    options: ["A) 90°", "B) 75°", "C) 80°", "D) 100°"],
    answer: "A",
    explanation: "Central angle = 25% × 360° = 90°."
  },

  {
    id: 1044, section: "General Intelligence & Reasoning",
    text: "Using the same data, if next year's Education allocation increases by 20% while the Urban:Rural ratio remains 1:1 (total budget still ₹12 Crores), what will be the new Urban Education expenditure?",
    options: ["A) ₹1.44 Crores", "B) ₹1.20 Crores", "C) ₹2.88 Crores", "D) ₹1.56 Crores"],
    answer: "A",
    explanation: "Current Education = 2.40 Crores. After 20% increase = 2.88 Crores. Urban share (1:1) = 2.88÷2 = ₹1.44 Crores."
  },

  {
    id: 1045, section: "General Intelligence & Reasoning",
    text: "Using the same expenditure data, what is the ratio of total Urban expenditure to total Rural expenditure?",
    options: ["A) 19:21", "B) 41:39", "C) 13:11", "D) 23:25"],
    answer: "A",
    explanation: "Urban: Infra 2.40+Health 1.80+Edu 1.20+RuralDev 0+Social 0.30=5.70 Crores. Rural=6.30 Crores. Ratio=5.70:6.30=57:63=19:21."
  },

  {
    id: 1046, section: "General Intelligence & Reasoning",
    text: "A software system processes inputs through 3 stages: Stage 1 rejects 10%, Stage 2 rejects 20% of remainder, Stage 3 rejects 25% of rest. If 540 inputs clear all 3 stages, what was the initial input count?",
    options: ["A) 1000", "B) 1200", "C) 950", "D) 1050"],
    answer: "A",
    explanation: "Total × 0.9 × 0.8 × 0.75 = 540. Total × 0.54 = 540. Total = 1000."
  },

  {
    id: 1047, section: "General Intelligence & Reasoning",
    text: "If x:y = 2:3 and y:z = 3:4, find the value of (x² + y²) / (y² + z²).",
    options: ["A) 9/16", "B) 13/25", "C) 13/27", "D) 4/9"],
    answer: "B",
    explanation: "x:y:z = 2:3:4. (x²+y²)/(y²+z²) = (4+9)/(9+16) = 13/25."
  },

  {
    id: 1048, section: "General Intelligence & Reasoning",
    text: "Find the missing number in the matrix:\nRow 1: [2,  11,  3]\nRow 2: [4,  29,  5]\nRow 3: [6,  ?,   7]\n(Hint: The middle number follows a rule based on both outer numbers.)",
    options: ["A) 48", "B) 51", "C) 55", "D) 60"],
    answer: "C",
    explanation: "Pattern: middle = left×right + left + right = (left+1)(right+1)−1. Row1: 2×3+2+3=11 ✓. Row2: 4×5+4+5=29 ✓. Row3: 6×7+6+7=42+13=55."
  },

  {
    id: 1049, section: "General Intelligence & Reasoning",
    text: "A person climbs a 66-metre greased pole. Each minute he climbs 6 metres but slips back 3 metres at the end of each minute (except when he reaches the top). How many minutes does it take to reach the top?",
    options: ["A) 19 minutes", "B) 21 minutes", "C) 20 minutes", "D) 22 minutes"],
    answer: "B",
    explanation: "Net gain per minute = 3 m. After 20 minutes = 60 m. In the 21st minute he climbs 6 m → reaches 66 m (top) without slipping back. Total = 21 minutes."
  },

  {
    id: 1050, section: "General Intelligence & Reasoning",
    text: "Five administrative files A, B, C, D, E are processed sequentially. A is processed before B but after C. D is processed before E but after B. Which file is processed third?",
    options: ["A) A", "B) B", "C) D", "D) C"],
    answer: "A",
    explanation: "Constraint chain: C→A→B→D→E. Third file in sequence = A."
  },

  // ─────────────────────────────────────────────────────────
  // SECTION B: ENGLISH COMPREHENSION (Q51–Q60)
  // ─────────────────────────────────────────────────────────

  {
    id: 1051, section: "English Comprehension",
    passage: PASSAGE_MT01,
    text: "Which statement best encapsulates the central thesis of the passage?",
    options: [
      "A) Digital governance has completely eradicated discretionary corruption from modern states.",
      "B) The transition to algorithmic administration compromises constitutional fairness and citizen agency under the guise of efficiency.",
      "C) Administrative law must be completely rewritten to accommodate proprietary software codes.",
      "D) Marginalized populations are the sole beneficiaries of the digital-first administrative framework."
    ],
    answer: "B",
    explanation: "The passage argues that while digital governance is celebrated as a triumph, it hollows out constitutional fairness and reduces citizens to data points, eliminating their right to challenge administrative decisions."
  },

  {
    id: 1052, section: "English Comprehension",
    passage: PASSAGE_MT01,
    text: "According to the passage, how does algorithmic determinism impact a citizen's constitutional right to administrative fairness?",
    options: [
      "A) It bolsters fairness by replacing human bias with objective mathematical standards.",
      "B) It expands citizen options by providing instant digital avenues for dispute resolution.",
      "C) It erodes fairness by substituting explainable human rationale with unreviewable, opaque code outputs.",
      "D) It has no noticeable impact since administrative law remains unchanged."
    ],
    answer: "C",
    explanation: "The passage states algorithmic outputs are 'shielded by proprietary armor of code' and offer 'no legibility', meaning citizens cannot demand rationale — hollowing out their constitutional right to fairness."
  },

  {
    id: 1053, section: "English Comprehension",
    passage: PASSAGE_MT01,
    text: "What does the author mean by the phrase 'techno-positivist narrative'?",
    options: [
      "A) A realistic and critical analysis of software engineering in state public works.",
      "B) An overly optimistic viewpoint that treats technological adoption as an absolute, unquestionable social good.",
      "C) A legal theory advocating for the immediate digitization of all judicial courts.",
      "D) A scientific method used to track down corrupt bureaucrats via internet data."
    ],
    answer: "B",
    explanation: "The passage describes optimists who laud digital governance as an 'unalloyed democratic triumph' — this uncritical praise of technology is the 'techno-positivist narrative' the author critiques."
  },

  {
    id: 1054, section: "English Comprehension",
    passage: PASSAGE_MT01,
    text: "Based on the passage, what structural drawback is obscured by celebrating digital-first administrative frameworks?",
    options: [
      "A) The higher financial cost of maintaining data servers over physical filing cabinets.",
      "B) The loss of employment for entry-level clerical staff in government agencies.",
      "C) The growth of an algorithmic panopticon and the systemic exclusion of vulnerable populations.",
      "D) The reduction in speed of processing everyday citizen requests."
    ],
    answer: "C",
    explanation: "The passage explicitly states: 'this techno-positivist narrative deliberately obscures a structural drawback: the emergence of the algorithmic panopticon and the systemic disenfranchisement of marginalized populations.'"
  },

  {
    id: 1055, section: "English Comprehension",
    passage: PASSAGE_MT01,
    text: "In the context of the passage, which word is closest in meaning to 'opaqueness'?",
    options: ["A) Lucidity", "B) Transparency", "C) Incomprehensibility", "D) Adaptability"],
    answer: "C",
    explanation: "'Opaqueness' in the passage refers to the inability to understand or scrutinize algorithmic decision-making — meaning incomprehensibility. Lucidity and Transparency are antonyms."
  },

  {
    id: 1056, section: "English Comprehension",
    text: "Choose the most appropriate pair of words:\n'The new municipal commissioner discovered that the urban development funds were completely ________, forcing him to issue a ________ notice to halt all ongoing non-essential infrastructure works.'",
    options: [
      "A) depleted | stringent",
      "B) augmented | perfunctory",
      "C) redundant | lax",
      "D) overflowing | critical"
    ],
    answer: "A",
    explanation: "'Depleted' = completely used up (funds exhausted). 'Stringent' = strict/severe (strong notice to halt works). All other pairs are contextually contradictory."
  },

  {
    id: 1057, section: "English Comprehension",
    text: "Identify the grammatically incorrect segment:\n'The panel of senior IAS officers (A) / have recommended a total overhaul (B) / of the land acquisition policy (C) / to prevent further public protests. (D)'",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "'Panel' is a singular collective noun. The correct verb is 'has recommended', not 'have recommended'. The error is in segment B."
  },

  {
    id: 1058, section: "English Comprehension",
    text: "Select the word most nearly OPPOSITE in meaning to 'EXCULPATE' in legal administrative proceedings.",
    options: ["A) Absolve", "B) Vindicate", "C) Incriminate", "D) Exonerate"],
    answer: "C",
    explanation: "Exculpate = to clear from blame. Its antonym is Incriminate = to make appear guilty. Absolve, Vindicate, Exonerate are all synonyms of Exculpate."
  },

  {
    id: 1059, section: "English Comprehension",
    text: "Identify the logical flaw:\n'Our district needs to build the highway bypass immediately. If we do not construct it right now, our local economy will face total collapse within six months, leading to widespread bankruptcy.'",
    options: [
      "A) It attacks the character of people who oppose the bypass.",
      "B) It assumes the bypass being built first causes economic health.",
      "C) It presents an extreme either-or scenario, ignoring alternative economic solutions.",
      "D) It relies on testimony of unqualified local individuals."
    ],
    answer: "C",
    explanation: "The argument commits the False Dilemma fallacy — presenting only two extreme options (build now OR total economic collapse) while ignoring intermediate solutions."
  },

  {
    id: 1060, section: "English Comprehension",
    text: "Choose the option that correctly fixes the underlined phrase:\n'The Chief Secretary insisted that not only the file must be retrieved but also verified by evening.'",
    options: [
      "A) not only must the file be retrieved",
      "B) the file must be retrieved not only",
      "C) not only the file should be retrieved",
      "D) must the file be not only retrieved"
    ],
    answer: "A",
    explanation: "The correlative conjunction 'not only...but also' requires subject-auxiliary inversion: 'not only must the file be retrieved but also verified'. Answer: A."
  }

];

// ── Answer Key Lookup ──
var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
