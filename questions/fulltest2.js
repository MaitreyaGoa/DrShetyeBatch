// ============================================================
// Dr Shetye Academic Program
// Full Mock Test 1 – 50 Questions / 50 Marks
// English: 30Q / 30M | Maths: 10Q / 10M | Reasoning: 10Q / 10M
// SSC CGL Level – All answers verified.
// ============================================================
var questions = [

  // ══════════════════════════════════════════════════════════
  // ENGLISH – 30 Questions (ID 501–530)
  // ══════════════════════════════════════════════════════════

  // ── Vocabulary ────────────────────────────────────────────
  {
    id: 501, section: "English",
    text: "Choose the synonym of \"Tenacious\".",
    options: ["Weak", "Persistent", "Lazy", "Flexible"],
    answer: "B",
    explanation: "Tenacious means holding firmly to something; persistent and determined."
  },
  {
    id: 502, section: "English",
    text: "Choose the antonym of \"Verbose\".",
    options: ["Wordy", "Talkative", "Concise", "Loud"],
    answer: "C",
    explanation: "Verbose = using too many words; its antonym is Concise = brief and clear."
  },
  {
    id: 503, section: "English",
    text: "Choose the correct meaning of \"Perfidious\".",
    options: ["Loyal", "Treacherous", "Honest", "Brave"],
    answer: "B",
    explanation: "Perfidious means deceitful and untrustworthy; guilty of betrayal."
  },
  {
    id: 504, section: "English",
    text: "Choose the synonym of \"Loquacious\".",
    options: ["Silent", "Talkative", "Angry", "Shy"],
    answer: "B",
    explanation: "Loquacious means tending to talk a great deal; garrulous."
  },
  {
    id: 505, section: "English",
    text: "Choose the antonym of \"Frugal\".",
    options: ["Thrifty", "Careful", "Extravagant", "Economical"],
    answer: "C",
    explanation: "Frugal = sparing and careful with money; its antonym is Extravagant = spending excessively."
  },

  // ── Idioms & Phrases ──────────────────────────────────────
  {
    id: 506, section: "English",
    text: "\"To add fuel to the fire\" means:",
    options: ["To calm a situation", "To make a bad situation worse", "To start a new problem", "To cook food"],
    answer: "B",
    explanation: "The idiom means to worsen an already bad or tense situation."
  },
  {
    id: 507, section: "English",
    text: "\"To have an axe to grind\" means:",
    options: ["To sharpen tools", "To have a selfish motive", "To be angry", "To work hard"],
    answer: "B",
    explanation: "It means to have a private or selfish reason for doing something."
  },
  {
    id: 508, section: "English",
    text: "\"Once in a blue moon\" means:",
    options: ["Every night", "Very rarely", "Every month", "During full moon"],
    answer: "B",
    explanation: "It means something that happens very rarely or infrequently."
  },
  {
    id: 509, section: "English",
    text: "\"To turn over a new leaf\" means:",
    options: ["To read a book", "To change one's behaviour for the better", "To start gardening", "To travel"],
    answer: "B",
    explanation: "It means to make a fresh start by changing one's habits or behaviour."
  },
  {
    id: 510, section: "English",
    text: "\"To cry wolf\" means:",
    options: ["To sound like a wolf", "To raise a false alarm", "To be afraid", "To call for genuine help"],
    answer: "B",
    explanation: "It means to raise a false alarm or call for help when it is not needed."
  },

  // ── Fill in the Blanks ────────────────────────────────────
  {
    id: 511, section: "English",
    text: "The teacher, along with her students, _______ going on a trip.",
    options: ["are", "were", "is", "have been"],
    answer: "C",
    explanation: "'Along with' does not change the subject. 'Teacher' is singular, so the verb is 'is'."
  },
  {
    id: 512, section: "English",
    text: "He _______ his homework before the teacher arrived.",
    options: ["completes", "completed", "had completed", "has completed"],
    answer: "C",
    explanation: "An action completed before another past action uses Past Perfect → 'had completed'."
  },
  {
    id: 513, section: "English",
    text: "_______ she works hard, she will not succeed.",
    options: ["If", "Unless", "Although", "Since"],
    answer: "B",
    explanation: "'Unless' means 'if not' and implies the condition under which she will fail."
  },
  {
    id: 514, section: "English",
    text: "The price of vegetables _______ risen sharply this month.",
    options: ["have", "has", "had", "were"],
    answer: "B",
    explanation: "'Price' is a singular noun and takes a singular verb → 'has risen'."
  },
  {
    id: 515, section: "English",
    text: "He is good _______ playing chess.",
    options: ["in", "for", "at", "with"],
    answer: "C",
    explanation: "The correct preposition with 'good' in context of skills is 'at' → 'good at playing'."
  },

  // ── Spotting Errors ───────────────────────────────────────
  {
    id: 516, section: "English",
    text: "Find the error: \"The police is looking into the matter.\"",
    options: ["The police", "is looking", "into the", "matter"],
    answer: "B",
    explanation: "'Police' is always treated as a plural noun → should be 'are looking'."
  },
  {
    id: 517, section: "English",
    text: "Find the error: \"One should do his duty sincerely.\"",
    options: ["One should", "do his", "duty", "sincerely"],
    answer: "B",
    explanation: "When subject is 'one', the possessive should be 'one's' not 'his' → 'do one's duty'."
  },
  {
    id: 518, section: "English",
    text: "Find the error: \"The children enjoyed during the holidays.\"",
    options: ["The children", "enjoyed", "during", "the holidays"],
    answer: "B",
    explanation: "'Enjoyed' is a transitive verb and needs an object → 'enjoyed themselves' or 'enjoyed the holidays'."
  },
  {
    id: 519, section: "English",
    text: "Find the error: \"He is the most cleverest boy in the class.\"",
    options: ["He is", "the most cleverest", "boy in", "the class"],
    answer: "B",
    explanation: "Double superlative is incorrect. 'Most cleverest' should be just 'cleverest'."
  },
  {
    id: 520, section: "English",
    text: "Find the error: \"Scarcely had he left when it begun to rain.\"",
    options: ["Scarcely had", "he left", "when it", "begun to rain"],
    answer: "D",
    explanation: "'Begun' is the past participle; here simple past is needed → 'began to rain'."
  },

  // ── Sentence Improvement ──────────────────────────────────
  {
    id: 521, section: "English",
    text: "\"Unless you do not work hard, you will fail.\" Choose the improvement:",
    options: ["Until you work hard", "Unless you work hard", "If you do not work hard", "No improvement"],
    answer: "B",
    explanation: "'Unless' already means 'if not', so 'do not' creates a double negative → 'Unless you work hard'."
  },
  {
    id: 522, section: "English",
    text: "\"She has been ill since three weeks.\" Choose the improvement:",
    options: ["for three weeks", "from three weeks", "since three weeks ago", "No improvement"],
    answer: "A",
    explanation: "'Since' is used with a point in time; 'for' is used with duration → 'for three weeks'."
  },
  {
    id: 523, section: "English",
    text: "\"The meeting was presided by the chairman.\" Choose the improvement:",
    options: ["presided over by", "presided with", "presided through", "No improvement"],
    answer: "A",
    explanation: "The correct phrasal verb is 'preside over' → 'presided over by the chairman'."
  },
  {
    id: 524, section: "English",
    text: "\"Hardly had I reached the station than the train left.\" Choose the improvement:",
    options: ["when the train left", "after the train left", "before the train left", "No improvement"],
    answer: "A",
    explanation: "'Hardly...when' is the correct correlative pair, not 'hardly...than'."
  },
  {
    id: 525, section: "English",
    text: "\"He insisted to go there alone.\" Choose the improvement:",
    options: ["insisted on going", "insisted for going", "insisted upon go", "No improvement"],
    answer: "A",
    explanation: "'Insist' must be followed by 'on + gerund' → 'insisted on going'."
  },

  // ── One Word Substitution ─────────────────────────────────
  {
    id: 526, section: "English",
    text: "One who is unable to pay debts:",
    options: ["Bankrupt", "Insolvent", "Pauper", "Debtor"],
    answer: "B",
    explanation: "Insolvent = a person who is legally unable to pay their debts."
  },
  {
    id: 527, section: "English",
    text: "A person who pretends to be what he is not:",
    options: ["Hypocrite", "Pessimist", "Cynic", "Stoic"],
    answer: "A",
    explanation: "Hypocrite = a person who pretends to have virtues or beliefs they do not actually possess."
  },
  {
    id: 528, section: "English",
    text: "The art of beautiful handwriting:",
    options: ["Typography", "Calligraphy", "Stenography", "Lithography"],
    answer: "B",
    explanation: "Calligraphy = the art of producing decorative and beautiful handwriting."
  },
  {
    id: 529, section: "English",
    text: "A person who hates mankind:",
    options: ["Philanthropist", "Misogynist", "Misanthrope", "Narcissist"],
    answer: "C",
    explanation: "Misanthrope = a person who dislikes humankind. Misogynist = one who hates women specifically."
  },
  {
    id: 530, section: "English",
    text: "Government by the people:",
    options: ["Monarchy", "Oligarchy", "Democracy", "Autocracy"],
    answer: "C",
    explanation: "Democracy = a system of government of, by, and for the people."
  },

  // ══════════════════════════════════════════════════════════
  // MATHS – 10 Questions (ID 531–540)
  // ══════════════════════════════════════════════════════════

  {
    id: 531, section: "Maths",
    text: "A man sells two articles at ₹990 each. On one he gains 10% and on the other he loses 10%. What is his overall profit or loss%?",
    options: ["No profit no loss", "1% profit", "1% loss", "2% loss"],
    answer: "C",
    explanation: "When SP is the same and gain% = loss%, there is always a loss. Loss% = (common%)² / 100 = 100/100 = 1% loss."
  },
  {
    id: 532, section: "Maths",
    text: "If x + 1/x = 5, find the value of x² + 1/x².",
    options: ["23", "25", "27", "21"],
    answer: "A",
    explanation: "(x + 1/x)² = x² + 2 + 1/x² → 25 = x² + 1/x² + 2 → x² + 1/x² = 23."
  },
  {
    id: 533, section: "Maths",
    text: "A sum of money doubles itself in 8 years at Simple Interest. What is the rate of interest per annum?",
    options: ["10%", "12%", "12.5%", "15%"],
    answer: "C",
    explanation: "SI = P (to double). P×R×8/100 = P → R = 100/8 = 12.5% per annum."
  },
  {
    id: 534, section: "Maths",
    text: "The diagonal of a square is 12√2 cm. Find its area.",
    options: ["144 cm²", "288 cm²", "169 cm²", "196 cm²"],
    answer: "A",
    explanation: "Diagonal = side × √2 → 12√2 = side × √2 → side = 12 cm. Area = 12² = 144 cm²."
  },
  {
    id: 535, section: "Maths",
    text: "Two numbers are in ratio 4:5. If 6 is subtracted from each, the ratio becomes 3:4. Find the larger number.",
    options: ["25", "30", "35", "40"],
    answer: "B",
    explanation: "Let numbers be 4x and 5x. (4x−6)/(5x−6) = 3/4 → 16x−24 = 15x−18 → x = 6. Larger number = 5×6 = 30."
  },
  {
    id: 536, section: "Maths",
    text: "A train 200 m long passes another train 150 m long coming from the opposite direction in 10 seconds. If the speed of the first train is 40 km/h, find the speed of the second train.",
    options: ["86 km/h", "88 km/h", "90 km/h", "92 km/h"],
    answer: "A",
    explanation: "Relative speed = (200+150)/10 = 35 m/s = 35×18/5 = 126 km/h. Speed of 2nd train = 126−40 = 86 km/h."
  },
  {
    id: 537, section: "Maths",
    text: "Find the value of sin²30° + cos²60° + tan²45°.",
    options: ["1.5", "2", "1", "2.5"],
    answer: "A",
    explanation: "sin30° = 1/2 → (1/2)² = 1/4. cos60° = 1/2 → (1/2)² = 1/4. tan45° = 1 → 1² = 1. Total = 1/4 + 1/4 + 1 = 1.5."
  },
  {
    id: 538, section: "Maths",
    text: "A can do a work in 12 days, B in 18 days. They work together for 3 days, then B leaves. In how many more days will A finish the remaining work?",
    options: ["5 days", "7 days", "8 days", "9 days"],
    answer: "B",
    explanation: "Together per day = 1/12 + 1/18 = 5/36. Work in 3 days = 15/36 = 5/12. Remaining = 7/12. A alone = (7/12)×12 = 7 days."
  },
  {
    id: 539, section: "Maths",
    text: "If 4 men or 6 women can do a work in 15 days, in how many days can 8 men and 6 women finish the same work?",
    options: ["5 days", "6 days", "7 days", "8 days"],
    answer: "A",
    explanation: "4 men = 6 women → 1 man = 1.5 women. 8 men = 12 women. Total = 12+6 = 18 women. Work = 6×15 = 90 woman-days. Days = 90/18 = 5 days."
  },
  {
    id: 540, section: "Maths",
    text: "The ages of A and B are in ratio 5:3. After 6 years the ratio will be 7:5. Find the present age of A.",
    options: ["12 yrs", "15 yrs", "18 yrs", "20 yrs"],
    answer: "B",
    explanation: "(5x+6)/(3x+6) = 7/5 → 25x+30 = 21x+42 → 4x = 12 → x = 3. A's age = 5×3 = 15 years."
  },

  // ══════════════════════════════════════════════════════════
  // REASONING – 10 Questions (ID 541–550)
  // ══════════════════════════════════════════════════════════

  {
    id: 541, section: "Reasoning",
    text: "Find the next number in the series: 4, 9, 25, 49, 121, ?",
    options: ["144", "169", "196", "225"],
    answer: "B",
    explanation: "These are squares of prime numbers: 2²=4, 3²=9, 5²=25, 7²=49, 11²=121, 13²=169."
  },
  {
    id: 542, section: "Reasoning",
    text: "Pituitary : Brain :: Thymus : ?",
    options: ["Liver", "Lungs", "Chest", "Kidney"],
    answer: "C",
    explanation: "The Pituitary gland is located in the Brain. The Thymus gland is located in the Chest."
  },
  {
    id: 543, section: "Reasoning",
    text: "Find the odd one out: BDFH, OMKI, QSUW, ACEG",
    options: ["BDFH", "OMKI", "QSUW", "ACEG"],
    answer: "B",
    explanation: "BDFH, QSUW and ACEG have letters in ascending order with a gap of +2. OMKI has letters in descending order (−2), making it the odd one out."
  },
  {
    id: 544, section: "Reasoning",
    text: "In a code: '134' = 'good and tasty', '478' = 'see good pictures', '729' = 'pictures are nice'. What is the code for 'see'?",
    options: ["4", "7", "8", "3"],
    answer: "C",
    explanation: "'4' is common in 134 & 478 → 4 = good. '7' is common in 478 & 729 → 7 = pictures. Remaining digit in 478 is 8 → 8 = see."
  },
  {
    id: 545, section: "Reasoning",
    text: "A and B are brothers. C and D are sisters. A's son is D's brother. How is B related to C?",
    options: ["Father", "Brother", "Uncle", "Grandfather"],
    answer: "C",
    explanation: "A's son is D's brother → A is the father of D and C. B is A's brother → B is the uncle of C."
  },
  {
    id: 546, section: "Reasoning",
    text: "Rohan walks 5 km North, turns Right and walks 3 km, turns Right and walks 5 km, then turns Left and walks 2 km. How far is he from the starting point and in which direction?",
    options: ["5 km East", "5 km West", "3 km East", "2 km East"],
    answer: "A",
    explanation: "5N → 3E → 5S (back to start latitude) → 2E. Final position = 3+2 = 5 km East of starting point."
  },
  {
    id: 547, section: "Reasoning",
    text: "Statement: 'Eat more fruits to stay healthy.' — an advertisement.\nAssumption I: People want to be healthy.\nAssumption II: Fruits are the only way to stay healthy.\nWhich assumption(s) are implicit?",
    options: ["Only I is implicit", "Only II is implicit", "Both are implicit", "Neither is implicit"],
    answer: "A",
    explanation: "The ad assumes people desire health (I is implicit ✓). It does not claim fruits are the ONLY way to stay healthy (II is not implicit ✗)."
  },
  {
    id: 548, section: "Reasoning",
    text: "On a standard dice, 1 is opposite to 6 and 2 is opposite to 5. Which number is opposite to 3?",
    options: ["2", "4", "5", "6"],
    answer: "B",
    explanation: "On a standard dice, the three opposite pairs are 1-6, 2-5, and 3-4. So 3 is opposite to 4."
  },
  {
    id: 549, section: "Reasoning",
    text: "If 5 $ 3 = 34, 7 $ 2 = 53, 6 $ 4 = 52, then 8 $ 3 = ?",
    options: ["72", "73", "75", "67"],
    answer: "B",
    explanation: "Pattern: a $ b = a² + b². 5²+3²=25+9=34 ✓, 7²+2²=49+4=53 ✓, 6²+4²=36+16=52 ✓. So 8²+3²=64+9=73."
  },
  {
    id: 550, section: "Reasoning",
    text: "If MASTER is coded as OCUVGT, how is DANGER coded?",
    options: ["FCPIGT", "FCPIHT", "FDPIGT", "ECPIGT"],
    answer: "A",
    explanation: "Each letter is shifted +2 positions forward in the alphabet. D→F, A→C, N→P, G→I, E→G, R→T → FCPIGT."
  }

];
