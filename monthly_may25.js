// monthly_may25.js – Dr Shetye Academic Programme
// May 2025 Monthly Full Test
// 100 Questions · IDs 2001–2100
// English: 25Q (2001–2025) | Reasoning: 25Q (2026–2050) | Maths: 25Q (2051–2075) | GK: 25Q (2076–2100)
// Duration: 90 minutes · Total Marks: 100

var questions = [

  // ══════════════════════════════════════════════════════════════
  // SECTION: English (Q1–Q25) — IDs 2001–2025
  // ══════════════════════════════════════════════════════════════

  // Synonyms (2001–2004)
  {
    id: 2001, section: "English",
    text: "Choose the word most similar in meaning to AMELIORATE:",
    options: ["A) Worsen", "B) Improve", "C) Maintain", "D) Destroy"],
    answer: "B",
    explanation: "Ameliorate means to make something bad or unsatisfactory better. Its synonym is improve."
  },
  {
    id: 2002, section: "English",
    text: "Choose the word most similar in meaning to VERBOSE:",
    options: ["A) Concise", "B) Silent", "C) Wordy", "D) Accurate"],
    answer: "C",
    explanation: "Verbose means using more words than needed; long-winded. Its synonym is wordy."
  },
  {
    id: 2003, section: "English",
    text: "Choose the word most similar in meaning to TENACIOUS:",
    options: ["A) Weak", "B) Persistent", "C) Careless", "D) Generous"],
    answer: "B",
    explanation: "Tenacious means holding firmly to something; not giving up easily. Its synonym is persistent."
  },
  {
    id: 2004, section: "English",
    text: "Choose the word most similar in meaning to FRUGAL:",
    options: ["A) Extravagant", "B) Generous", "C) Thrifty", "D) Wasteful"],
    answer: "C",
    explanation: "Frugal means being careful with money and resources, not wasteful. Its synonym is thrifty."
  },

  // Antonyms (2005–2008)
  {
    id: 2005, section: "English",
    text: "Choose the word most opposite in meaning to BENEVOLENT:",
    options: ["A) Kind", "B) Generous", "C) Malevolent", "D) Helpful"],
    answer: "C",
    explanation: "Benevolent means well-meaning and kindly. Its antonym is malevolent — having or showing a desire to do evil."
  },
  {
    id: 2006, section: "English",
    text: "Choose the word most opposite in meaning to PAUCITY:",
    options: ["A) Scarcity", "B) Lack", "C) Abundance", "D) Shortage"],
    answer: "C",
    explanation: "Paucity means presence of something in very small quantities; scarcity. Its antonym is abundance — a very large quantity."
  },
  {
    id: 2007, section: "English",
    text: "Choose the word most opposite in meaning to TACITURN:",
    options: ["A) Silent", "B) Reserved", "C) Talkative", "D) Shy"],
    answer: "C",
    explanation: "Taciturn means reserved or uncommunicative in speech. Its antonym is talkative — fond of or given to talking."
  },
  {
    id: 2008, section: "English",
    text: "Choose the word most opposite in meaning to ASTUTE:",
    options: ["A) Clever", "B) Shrewd", "C) Naive", "D) Cunning"],
    answer: "C",
    explanation: "Astute means having good judgement and clever understanding. Its antonym is naive — lacking worldly experience and wisdom."
  },

  // Error Detection (2009–2012)
  {
    id: 2009, section: "English",
    text: "Find the grammatical error: (A) The committee have / (B) decided to postpone / (C) the meeting / (D) until further notice.",
    options: ["A) Part A", "B) Part B", "C) Part C", "D) No error"],
    answer: "A",
    explanation: "When a committee acts as a single unified body, it takes a singular verb. 'The committee has decided' is correct. 'Have' (plural) is incorrect here. Error in Part A."
  },
  {
    id: 2010, section: "English",
    text: "Find the grammatical error: (A) Each of the students / (B) were asked to submit / (C) their assignment / (D) by Monday.",
    options: ["A) Part A", "B) Part B", "C) Part C", "D) No error"],
    answer: "B",
    explanation: "'Each' is singular, so the verb must be singular: 'was asked', not 'were asked'. Error in Part B."
  },
  {
    id: 2011, section: "English",
    text: "Find the grammatical error: (A) She insisted / (B) on me / (C) attending the / (D) conference.",
    options: ["A) Part A", "B) Part B", "C) Part C", "D) No error"],
    answer: "B",
    explanation: "After a preposition, the pronoun should be in the possessive form: 'insisted on my attending'. 'On me attending' is incorrect. Error in Part B."
  },
  {
    id: 2012, section: "English",
    text: "Find the grammatical error: (A) No sooner did / (B) he enter the room / (C) when everyone / (D) started clapping.",
    options: ["A) Part A", "B) Part B", "C) Part C", "D) Part D"],
    answer: "C",
    explanation: "'No sooner...than' is the correct correlative conjunction pair, not 'no sooner...when'. Error in Part C: 'when' should be 'than'."
  },

  // Fill in the Blanks (2013–2016)
  {
    id: 2013, section: "English",
    text: "The new regulation was _______ by the authorities to curb the rising pollution levels.",
    options: ["A) revoked", "B) enacted", "C) abolished", "D) dismissed"],
    answer: "B",
    explanation: "'Enacted' means to make a law officially. A regulation being enacted to curb pollution fits perfectly. 'Revoked' and 'abolished' mean to cancel/end an existing rule."
  },
  {
    id: 2014, section: "English",
    text: "Despite several setbacks, the scientist remained _______ in her pursuit of the discovery.",
    options: ["A) deterred", "B) indifferent", "C) undaunted", "D) discouraged"],
    answer: "C",
    explanation: "'Undaunted' means not discouraged by difficulty or danger. It perfectly fits a scientist who continues despite setbacks."
  },
  {
    id: 2015, section: "English",
    text: "The judge _______ the evidence presented by the prosecution as circumstantial and inconclusive.",
    options: ["A) validated", "B) dismissed", "C) fabricated", "D) upheld"],
    answer: "B",
    explanation: "'Dismissed' means to reject something as unworthy of consideration. A judge dismissing evidence as circumstantial is the correct usage."
  },
  {
    id: 2016, section: "English",
    text: "The politician's speech was full of _______ promises that he had no intention of keeping.",
    options: ["A) sincere", "B) hollow", "C) meaningful", "D) substantial"],
    answer: "B",
    explanation: "'Hollow promises' means insincere or empty promises with no substance. This is a standard collocation used to describe deceptive political speech."
  },

  // Idioms & Phrases (2017–2019)
  {
    id: 2017, section: "English",
    text: "What does the idiom 'Bite off more than you can chew' mean?",
    options: ["A) To eat excessively", "B) To take on more responsibility than one can handle", "C) To speak before thinking", "D) To be overly ambitious without a plan"],
    answer: "B",
    explanation: "'Bite off more than you can chew' means to take on a task that is too big or difficult for you to complete successfully."
  },
  {
    id: 2018, section: "English",
    text: "What does the idiom 'Hit the nail on the head' mean?",
    options: ["A) To physically hit something", "B) To make a mistake", "C) To describe exactly what is causing a problem", "D) To solve a problem forcefully"],
    answer: "C",
    explanation: "'Hit the nail on the head' means to describe exactly what is causing a situation or problem — to say something precisely correct."
  },
  {
    id: 2019, section: "English",
    text: "What does 'Once in a blue moon' mean?",
    options: ["A) During a lunar eclipse", "B) Very rarely", "C) Every month", "D) On special occasions only"],
    answer: "B",
    explanation: "'Once in a blue moon' means something that happens very rarely. A 'blue moon' (second full moon in a month) is an infrequent event."
  },

  // One Word Substitution (2020–2022)
  {
    id: 2020, section: "English",
    text: "A person who is unable to pay their debts is called:",
    options: ["A) Miser", "B) Insolvent", "C) Bankrupt", "D) Creditor"],
    answer: "B",
    explanation: "An insolvent person is one who cannot pay their debts. 'Bankrupt' is the legal term when insolvency is declared by a court. Insolvent is the broader, more accurate one-word substitution."
  },
  {
    id: 2021, section: "English",
    text: "A government in which all religions are equally respected is called:",
    options: ["A) Democracy", "B) Monarchy", "C) Secular state", "D) Theocracy"],
    answer: "C",
    explanation: "A secular state is one that treats all religions equally and does not favour any particular religion. India is constitutionally a secular state."
  },
  {
    id: 2022, section: "English",
    text: "Fear of open or public places is known as:",
    options: ["A) Claustrophobia", "B) Agoraphobia", "C) Acrophobia", "D) Xenophobia"],
    answer: "B",
    explanation: "Agoraphobia is the fear of open or public places. Claustrophobia = fear of enclosed spaces; Acrophobia = fear of heights; Xenophobia = fear of foreigners."
  },

  // Reading Comprehension — short (2023–2025)
  {
    id: 2023, section: "English",
    text: "Choose the correctly punctuated sentence:",
    options: ["A) Its a well known fact that exercising daily improves health.", "B) It's a well-known fact that exercising daily improves health.", "C) Its a well-known fact, that exercising daily improves health.", "D) It's a well known fact, that exercising daily, improves health."],
    answer: "B",
    explanation: "'It's' = 'It is' (apostrophe required for contraction). 'Well-known' requires a hyphen when used as a compound adjective before a noun. Option B is correctly written."
  },
  {
    id: 2024, section: "English",
    text: "Choose the sentence that is grammatically correct:",
    options: ["A) Neither of the boys were present.", "B) Neither of the boys was present.", "C) Neither of the boys are present.", "D) Neither boys was present."],
    answer: "B",
    explanation: "'Neither of the boys' requires a singular verb because 'neither' is singular. 'Was present' is correct. Options A and C use plural verbs; D is missing the article."
  },
  {
    id: 2025, section: "English",
    text: "Select the word that is closest in meaning to the underlined word: The manager gave an AMBIGUOUS reply that left everyone confused.",
    options: ["A) Clear", "B) Decisive", "C) Vague", "D) Firm"],
    answer: "C",
    explanation: "Ambiguous means unclear or open to more than one interpretation. Its closest synonym in this context is vague."
  },

  // ══════════════════════════════════════════════════════════════
  // SECTION: Reasoning (Q26–Q50) — IDs 2026–2050
  // ══════════════════════════════════════════════════════════════

  // Series (2026–2028)
  {
    id: 2026, section: "Reasoning",
    text: "Find the next number: 4, 9, 20, 43, 90, ?",
    options: ["A) 183", "B) 185", "C) 180", "D) 187"],
    answer: "B",
    explanation: "Pattern: ×2+1, ×2+2, ×2+3, ×2+4, ×2+5... 4×2+1=9, 9×2+2=20, 20×2+3=43, 43×2+4=90, 90×2+5=185."
  },
  {
    id: 2027, section: "Reasoning",
    text: "Find the wrong number in the series: 3, 5, 9, 17, 33, 65, 128",
    options: ["A) 9", "B) 33", "C) 65", "D) 128"],
    answer: "D",
    explanation: "Pattern: each term = previous × 2 − 1. 3×2−1=5✓, 5×2−1=9✓, 9×2−1=17✓, 17×2−1=33✓, 33×2−1=65✓, 65×2−1=129≠128. The wrong number is 128; it should be 129."
  },
  {
    id: 2028, section: "Reasoning",
    text: "Find the missing term: 2, 3, 6, 18, 108, ?",
    options: ["A) 1944", "B) 1296", "C) 216", "D) 648"],
    answer: "A",
    explanation: "Each term is the product of the previous two terms: 2×3=6, 3×6=18, 6×18=108, 18×108=1944."
  },

  // Analogy (2029–2031)
  {
    id: 2029, section: "Reasoning",
    text: "Archipelago : Islands :: Constellation : ?",
    options: ["A) Moon", "B) Stars", "C) Planets", "D) Galaxies"],
    answer: "B",
    explanation: "An archipelago is a group of islands. A constellation is a group of stars. Both refer to a collection of celestial/geographical objects."
  },
  {
    id: 2030, section: "Reasoning",
    text: "Canteen : Factory :: Library : ?",
    options: ["A) Book", "B) School", "C) Reader", "D) Study"],
    answer: "B",
    explanation: "A canteen is a facility provided within a factory. A library is a facility provided within a school. Relationship: facility : institution it serves."
  },
  {
    id: 2031, section: "Reasoning",
    text: "Flow : River :: Stagnant : ?",
    options: ["A) Sea", "B) Ocean", "C) Pond", "D) Stream"],
    answer: "C",
    explanation: "A river has flowing water. A pond has stagnant (still, not flowing) water. The relationship is: type of water movement : body of water."
  },

  // Coding (2032–2034)
  {
    id: 2032, section: "Reasoning",
    text: "If PAINT = 97348 and PRANK = 96935, what is the code for TRAIN?",
    options: ["A) 86734", "B) 87634", "C) 86743", "D) 68734"],
    answer: "A",
    explanation: "From PAINT: P=9,A=7,I=3,N=4,T=8. From PRANK: P=9,R=6,A=7,N=4,K=5 (R=6 new). TRAIN: T=8,R=6,A=7,I=3,N=4 = 86734."
  },
  {
    id: 2033, section: "Reasoning",
    text: "In a code language, 'go home now' = 'na ja pa', 'come home again' = 'ma na ra', 'go again slowly' = 'pa ra ta'. What is the code for 'home'?",
    options: ["A) na", "B) ja", "C) pa", "D) ra"],
    answer: "A",
    explanation: "'go home now'=na ja pa; 'come home again'=ma na ra. 'na' is common to both sentences. The common word is 'home'. So 'na'=home. ✓"
  },
  {
    id: 2034, section: "Reasoning",
    text: "If '+' means '÷', '−' means '+', '×' means '−', '÷' means '×', find: 18 + 3 × 4 − 6 ÷ 2",
    options: ["A) 12", "B) 14", "C) 16", "D) 18"],
    answer: "B",
    explanation: "Substitute: 18÷3 − 4 + 6×2. BODMAS: 18÷3=6, 6×2=12. Then: 6−4+12=14."
  },

  // Blood Relations (2035–2036)
  {
    id: 2035, section: "Reasoning",
    text: "A woman introduces a man as 'the son of the brother of my mother'. What is the man's relation to the woman?",
    options: ["A) Uncle", "B) Son", "C) Cousin", "D) Nephew"],
    answer: "C",
    explanation: "Brother of woman's mother = maternal uncle. Son of maternal uncle = cousin. The man is the woman's cousin."
  },
  {
    id: 2036, section: "Reasoning",
    text: "X is the father of Y. Y is the mother of Z. W is the brother of Y. What is Z's relationship to W?",
    options: ["A) Son/Daughter", "B) Niece/Nephew", "C) Cousin", "D) Grandson/Granddaughter"],
    answer: "B",
    explanation: "Y is Z's mother. W is Y's brother = Z's maternal uncle. So Z is the niece or nephew of W."
  },

  // Direction (2037–2038)
  {
    id: 2037, section: "Reasoning",
    text: "Seema walks 12 km North, turns left and walks 5 km, turns left and walks 12 km. How far is she from the starting point?",
    options: ["A) 5 km", "B) 7 km", "C) 12 km", "D) 17 km"],
    answer: "A",
    explanation: "North 12 → Left(West) 5 → Left(South) 12. Net: North−South=12−12=0. West=5. Distance=5 km West of start."
  },
  {
    id: 2038, section: "Reasoning",
    text: "Facing West, Kiran turns 90° clockwise, then 180° clockwise, then 90° anticlockwise. Which direction is Kiran facing?",
    options: ["A) North", "B) South", "C) East", "D) West"],
    answer: "C",
    explanation: "West(270°). +90°CW=North(360°=0°). +180°CW=South(180°). −90°ACW: from South(180°)−90°=90°=East. Kiran is facing East."
  },

  // Ranking (2039–2040)
  {
    id: 2039, section: "Reasoning",
    text: "In a row of 35 children, Rajan is 14th from the right and Seema is 18th from the left. How many children are between them?",
    options: ["A) 2", "B) 3", "C) 4", "D) 5"],
    answer: "B",
    explanation: "Rajan from left = 35−14+1 = 22nd. Seema = 18th. Children between = 22−18−1 = 3."
  },
  {
    id: 2040, section: "Reasoning",
    text: "In a class, Anita ranks 8th from the top and 27th from the bottom. How many students are in the class?",
    options: ["A) 33", "B) 34", "C) 35", "D) 36"],
    answer: "B",
    explanation: "Total = rank from top + rank from bottom − 1 = 8 + 27 − 1 = 34."
  },

  // Odd One Out (2041–2042)
  {
    id: 2041, section: "Reasoning",
    text: "Find the odd one out: Mercury, Venus, Earth, Moon, Mars",
    options: ["A) Mercury", "B) Venus", "C) Moon", "D) Mars"],
    answer: "C",
    explanation: "Mercury, Venus, Earth, and Mars are all planets of the Solar System. Moon is a natural satellite of Earth — it is not a planet. Moon is the odd one out."
  },
  {
    id: 2042, section: "Reasoning",
    text: "Find the odd one out: 2, 5, 11, 17, 23, 29",
    options: ["A) 2", "B) 5", "C) 11", "D) 17"],
    answer: "A",
    explanation: "From 5 onwards: 5, 11, 17, 23, 29 form a series with differences of +6. The number 2 does not fit this +6 pattern and is also the only even prime. Answer = 2."
  },

  // Syllogism (2043–2044)
  {
    id: 2043, section: "Reasoning",
    text: "Statements: All pens are pencils. No pencil is eraser. Conclusions: I. No pen is eraser. II. Some pencils are pens.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both follow", "D) Neither follows"],
    answer: "C",
    explanation: "All pens are pencils → pens are a subset of pencils (II ✓). No pencil is eraser → no pen (a subset of pencils) is eraser either (I ✓). Both follow."
  },
  {
    id: 2044, section: "Reasoning",
    text: "Statements: Some dogs are cats. All cats are white. Conclusions: I. Some dogs are white. II. All white things are cats.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both follow", "D) Neither follows"],
    answer: "A",
    explanation: "Some dogs are cats + All cats are white → Some dogs are white (I ✓). All white things are cats is the converse of statement 2 and does not follow. Only I."
  },

  // Mathematical Operations (2045–2046)
  {
    id: 2045, section: "Reasoning",
    text: "If 5 @ 3 = 34, 6 @ 4 = 52, what is 7 @ 5?",
    options: ["A) 70", "B) 72", "C) 74", "D) 76"],
    answer: "C",
    explanation: "Pattern: a @ b = a² + b² − (a−b). 5²+3²−2=25+9−2=32≠34. Try a²+b²: 25+9=34 ✓, 36+16=52 ✓. So 7@5=49+25=74."
  },
  {
    id: 2046, section: "Reasoning",
    text: "How many meaningful English words can be formed using the letters A, E, T, S (each used once)?",
    options: ["A) 2", "B) 3", "C) 4", "D) 5"],
    answer: "C",
    explanation: "Words: EATS, ETAS, SATE, TEAS, SEAT, ATES, EAST, ETSA... Valid common words: EATS, SEAT, SATE, EAST, TEAS, ETAS = at least 4 meaningful words. Answer C."
  },

  // Venn Diagram / Misc Reasoning (2047–2050)
  {
    id: 2047, section: "Reasoning",
    text: "In a group of 100 students, 60 study Maths, 50 study Science and 30 study both. How many study neither?",
    options: ["A) 10", "B) 15", "C) 20", "D) 25"],
    answer: "C",
    explanation: "Students in Maths or Science = 60+50−30=80. Students studying neither = 100−80=20."
  },
  {
    id: 2048, section: "Reasoning",
    text: "A man is facing East. He turns 45° anticlockwise, then 90° clockwise, then 135° anticlockwise. Which direction does he face?",
    options: ["A) North", "B) South", "C) West", "D) North-West"],
    answer: "A",
    explanation: "East=90°. −45°ACW → 45°=NE. +90°CW → 135°=SE. −135°ACW → 135°−135°=0°=North. He is facing North."
  },
  {
    id: 2049, section: "Reasoning",
    text: "If the day before yesterday was Saturday, what day will it be the day after tomorrow?",
    options: ["A) Wednesday", "B) Thursday", "C) Friday", "D) Tuesday"],
    answer: "A",
    explanation: "Day before yesterday=Saturday → Yesterday=Sunday → Today=Monday → Tomorrow=Tuesday → Day after tomorrow=Wednesday."
  },
  {
    id: 2050, section: "Reasoning",
    text: "Find the missing number: 7, 12, 19, 28, 39, ?",
    options: ["A) 52", "B) 50", "C) 48", "D) 54"],
    answer: "A",
    explanation: "Differences: +5, +7, +9, +11, +13 (odd numbers increasing by 2). Next = 39+13=52."
  },

  // ══════════════════════════════════════════════════════════════
  // SECTION: Maths (Q51–Q75) — IDs 2051–2075
  // ══════════════════════════════════════════════════════════════

  {
    id: 2051, section: "Maths",
    text: "A shopkeeper marks an article 40% above cost price and gives a 25% discount. His profit or loss percentage is:",
    options: ["A) 5% profit", "B) 5% loss", "C) 10% profit", "D) 10% loss"],
    answer: "A",
    explanation: "Let CP=100. MP=140 (40% above CP). SP=140×0.75=105 (25% discount). Profit=105−100=5. Profit%=5%."
  },
  {
    id: 2052, section: "Maths",
    text: "The simple interest on ₹8000 at 5% per annum for 3 years is:",
    options: ["A) ₹1000", "B) ₹1200", "C) ₹1400", "D) ₹1600"],
    answer: "B",
    explanation: "SI = P×R×T/100 = 8000×5×3/100 = 120000/100 = ₹1200."
  },
  {
    id: 2053, section: "Maths",
    text: "A train 240 m long passes a pole in 12 seconds. What is its speed in km/h?",
    options: ["A) 60 km/h", "B) 66 km/h", "C) 70 km/h", "D) 72 km/h"],
    answer: "D",
    explanation: "Speed = 240/12 = 20 m/s. Convert: 20 × 18/5 = 72 km/h."
  },
  {
    id: 2054, section: "Maths",
    text: "If the average of 6 numbers is 35 and one number is excluded, the average becomes 33. What is the excluded number?",
    options: ["A) 43", "B) 45", "C) 47", "D) 49"],
    answer: "B",
    explanation: "Sum of 6 = 6×35=210. Sum of 5 = 5×33=165. Excluded = 210−165=45."
  },
  {
    id: 2055, section: "Maths",
    text: "Pipes A and B fill a tank in 20 and 30 minutes respectively. Both are opened together. In how many minutes will the tank be full?",
    options: ["A) 10 min", "B) 12 min", "C) 15 min", "D) 18 min"],
    answer: "B",
    explanation: "Combined rate = 1/20+1/30 = 3/60+2/60 = 5/60 = 1/12. Time = 12 minutes."
  },
  {
    id: 2056, section: "Maths",
    text: "A can complete work in 15 days. B is 50% more efficient than A. How many days does B take alone?",
    options: ["A) 8 days", "B) 9 days", "C) 10 days", "D) 12 days"],
    answer: "C",
    explanation: "A's rate=1/15. B is 50% more efficient → B's rate = 1/15 × 1.5 = 1/10. B takes 10 days."
  },
  {
    id: 2057, section: "Maths",
    text: "What is the compound interest on ₹10,000 at 10% per annum for 2 years compounded annually?",
    options: ["A) ₹2000", "B) ₹2100", "C) ₹2200", "D) ₹2500"],
    answer: "B",
    explanation: "A = 10000×(1.1)² = 10000×1.21 = ₹12100. CI = 12100−10000 = ₹2100."
  },
  {
    id: 2058, section: "Maths",
    text: "The ratio of two numbers is 3:5. If each is increased by 10, the ratio becomes 5:7. What are the numbers?",
    options: ["A) 12 and 20", "B) 15 and 25", "C) 9 and 15", "D) 18 and 30"],
    answer: "B",
    explanation: "Let numbers = 3x and 5x. (3x+10)/(5x+10)=5/7. Cross: 7(3x+10)=5(5x+10) → 21x+70=25x+50 → 4x=20 → x=5. Numbers=15 and 25."
  },
  {
    id: 2059, section: "Maths",
    text: "A boat's speed in still water is 12 km/h and the stream speed is 4 km/h. How long to go 64 km upstream?",
    options: ["A) 6 hours", "B) 7 hours", "C) 8 hours", "D) 9 hours"],
    answer: "C",
    explanation: "Upstream speed = 12−4 = 8 km/h. Time = 64/8 = 8 hours."
  },
  {
    id: 2060, section: "Maths",
    text: "A mixture of 40 litres has milk and water in the ratio 3:1. How much water must be added to make the ratio 3:2?",
    options: ["A) 8 litres", "B) 10 litres", "C) 12 litres", "D) 15 litres"],
    answer: "B",
    explanation: "Milk=30L, Water=10L. For ratio 3:2: water=2×30/3=20L. Add=20−10=10 litres."
  },
  {
    id: 2061, section: "Maths",
    text: "The LCM of 12, 18 and 24 is:",
    options: ["A) 48", "B) 60", "C) 72", "D) 96"],
    answer: "C",
    explanation: "12=2²×3, 18=2×3², 24=2³×3. LCM=2³×3²=8×9=72."
  },
  {
    id: 2062, section: "Maths",
    text: "If 2x + 3y = 18 and x + y = 7, what is the value of x?",
    options: ["A) 2", "B) 3", "C) 4", "D) 5"],
    answer: "B",
    explanation: "From x+y=7: x=7−y. Substitute: 2(7−y)+3y=18 → 14−2y+3y=18 → y=4. x=7−4=3."
  },
  {
    id: 2063, section: "Maths",
    text: "The HCF of 48 and 72 is:",
    options: ["A) 12", "B) 18", "C) 24", "D) 36"],
    answer: "C",
    explanation: "48 = 2⁴×3, 72 = 2³×3². HCF = 2³×3 = 8×3 = 24."
  },
  {
    id: 2064, section: "Maths",
    text: "A person covers 60 km in 4 hours partly by walking at 12 km/h and partly by cycling at 20 km/h. For how long did he walk?",
    options: ["A) 1 hour", "B) 1.5 hours", "C) 2 hours", "D) 2.5 hours"],
    answer: "D",
    explanation: "Let walk time = t. Cycle time = 4−t. Distance: 12t + 20(4−t)=60 → 12t+80−20t=60 → −8t=−20 → t=2.5 hours."
  },
  {
    id: 2065, section: "Maths",
    text: "The perimeter of a rectangle is 54 cm. If its length is 15 cm, what is its area?",
    options: ["A) 150 sq cm", "B) 160 sq cm", "C) 180 sq cm", "D) 225 sq cm"],
    answer: "C",
    explanation: "Perimeter = 2(l+b) = 54 → l+b=27 → b=27−15=12 cm. Area = 15×12=180 sq cm."
  },
  {
    id: 2066, section: "Maths",
    text: "What percentage of 400 is 60?",
    options: ["A) 12%", "B) 15%", "C) 18%", "D) 20%"],
    answer: "B",
    explanation: "(60/400)×100 = 15%."
  },
  {
    id: 2067, section: "Maths",
    text: "The difference between compound interest and simple interest on ₹2000 at 10% for 2 years is:",
    options: ["A) ₹10", "B) ₹20", "C) ₹30", "D) ₹40"],
    answer: "B",
    explanation: "Difference = P×(R/100)² = 2000×(0.1)² = 2000×0.01 = ₹20."
  },
  {
    id: 2068, section: "Maths",
    text: "If the selling price of 12 articles equals the cost price of 16 articles, the profit percentage is:",
    options: ["A) 25%", "B) 30%", "C) 33.33%", "D) 40%"],
    answer: "C",
    explanation: "SP of 12 = CP of 16. Let CP per article = 1. CP of 12=12, SP of 12=16. Profit=(16−12)/12×100=4/12×100=33.33%."
  },
  {
    id: 2069, section: "Maths",
    text: "A sum of ₹5000 at 8% per annum simple interest amounts to ₹6200. Find the time period.",
    options: ["A) 2 years", "B) 2.5 years", "C) 3 years", "D) 3.5 years"],
    answer: "C",
    explanation: "SI=6200−5000=1200. T=SI×100/(P×R)=1200×100/(5000×8)=120000/40000=3 years."
  },
  {
    id: 2070, section: "Maths",
    text: "The area of a circle with diameter 14 cm is: (use π = 22/7)",
    options: ["A) 144 sq cm", "B) 154 sq cm", "C) 164 sq cm", "D) 176 sq cm"],
    answer: "B",
    explanation: "Radius=7 cm. Area=πr²=22/7×7×7=22×7=154 sq cm."
  },
  {
    id: 2071, section: "Maths",
    text: "In a school, the ratio of boys to girls is 5:4. If there are 360 students, how many are girls?",
    options: ["A) 150", "B) 160", "C) 170", "D) 180"],
    answer: "B",
    explanation: "Girls = 4/(5+4) × 360 = 4/9 × 360 = 160."
  },
  {
    id: 2072, section: "Maths",
    text: "What is the value of √(0.0625)?",
    options: ["A) 0.025", "B) 0.25", "C) 2.5", "D) 0.0025"],
    answer: "B",
    explanation: "0.0625 = 625/10000 = (25/100)². √0.0625 = 25/100 = 0.25."
  },
  {
    id: 2073, section: "Maths",
    text: "Three numbers are in the ratio 2:3:4. Their sum is 54. What is the largest number?",
    options: ["A) 18", "B) 20", "C) 22", "D) 24"],
    answer: "D",
    explanation: "Total parts = 2+3+4=9. Each part = 54/9=6. Largest = 4×6=24."
  },
  {
    id: 2074, section: "Maths",
    text: "Two numbers are in the ratio 7:9. Their LCM is 252. What is their HCF?",
    options: ["A) 4", "B) 6", "C) 8", "D) 9"],
    answer: "A",
    explanation: "Let numbers = 7k and 9k. LCM = 7×9×k = 63k = 252 → k=4. HCF = k = 4."
  },
  {
    id: 2075, section: "Maths",
    text: "A man sold an article for ₹720 at a loss of 10%. At what price should he sell to gain 15%?",
    options: ["A) ₹840", "B) ₹880", "C) ₹900", "D) ₹920"],
    answer: "D",
    explanation: "SP=720 at 10% loss → CP=720×100/90=800. To gain 15%: SP=800×1.15=920."
  },

  // ══════════════════════════════════════════════════════════════
  // SECTION: General Knowledge (Q76–Q100) — IDs 2076–2100
  // ══════════════════════════════════════════════════════════════

  // Indian Polity & Constitution
  {
    id: 2076, section: "General Knowledge",
    text: "Which article of the Indian Constitution abolishes untouchability?",
    options: ["A) Article 14", "B) Article 15", "C) Article 17", "D) Article 21"],
    answer: "C",
    explanation: "Article 17 of the Indian Constitution abolishes untouchability and forbids its practice in any form. Enforcement of any disability arising from untouchability is an offence."
  },
  {
    id: 2077, section: "General Knowledge",
    text: "The concept of Judicial Review in India is borrowed from which country?",
    options: ["A) UK", "B) USA", "C) Australia", "D) Canada"],
    answer: "B",
    explanation: "Judicial Review — the power of courts to review legislative and executive actions — is borrowed from the United States Constitution."
  },
  {
    id: 2078, section: "General Knowledge",
    text: "Which schedule of the Indian Constitution deals with the distribution of powers between the Union and States?",
    options: ["A) Fifth Schedule", "B) Sixth Schedule", "C) Seventh Schedule", "D) Eighth Schedule"],
    answer: "C",
    explanation: "The Seventh Schedule contains three lists — Union List, State List, and Concurrent List — that distribute legislative powers between the Union and States."
  },

  // Indian History
  {
    id: 2079, section: "General Knowledge",
    text: "The Battle of Plassey (1757) was fought between the British and the Nawab of:",
    options: ["A) Mysore", "B) Hyderabad", "C) Bengal", "D) Awadh"],
    answer: "C",
    explanation: "The Battle of Plassey (1757) was fought between the British East India Company (under Clive) and Siraj ud-Daulah, the Nawab of Bengal. This victory established British dominance in India."
  },
  {
    id: 2080, section: "General Knowledge",
    text: "Who gave the slogan 'Do or Die' during the Quit India Movement of 1942?",
    options: ["A) Jawaharlal Nehru", "B) Sardar Patel", "C) Subhas Chandra Bose", "D) Mahatma Gandhi"],
    answer: "D",
    explanation: "Mahatma Gandhi gave the famous 'Do or Die' (Karo ya Maro) slogan during the Quit India Movement launched on August 8, 1942, at the Bombay session of the All India Congress Committee."
  },

  // Geography
  {
    id: 2081, section: "General Knowledge",
    text: "The Tropic of Cancer does NOT pass through which of the following states?",
    options: ["A) Rajasthan", "B) Gujarat", "C) Odisha", "D) Maharashtra"],
    answer: "D",
    explanation: "The Tropic of Cancer passes through 8 Indian states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram. Maharashtra is not one of them."
  },
  {
    id: 2082, section: "General Knowledge",
    text: "Which is the longest river in India?",
    options: ["A) Yamuna", "B) Godavari", "C) Ganga", "D) Krishna"],
    answer: "C",
    explanation: "The Ganga (Ganges) is the longest river in India with a total length of about 2525 km. It flows from Gangotri glacier through the Indo-Gangetic plain to the Bay of Bengal."
  },
  {
    id: 2083, section: "General Knowledge",
    text: "The Konkan Railway connects:",
    options: ["A) Mumbai to Kochi", "B) Roha (Maharashtra) to Thokur (Mangaluru)", "C) Goa to Hyderabad", "D) Mumbai to Pune"],
    answer: "B",
    explanation: "Konkan Railway runs along India's west coast connecting Roha in Maharashtra to Thokur near Mangaluru (Karnataka), passing through Goa. It was one of India's most challenging railway construction projects."
  },

  // Science & Technology
  {
    id: 2084, section: "General Knowledge",
    text: "Which vitamin is produced by the skin in the presence of sunlight?",
    options: ["A) Vitamin A", "B) Vitamin B12", "C) Vitamin C", "D) Vitamin D"],
    answer: "D",
    explanation: "Vitamin D is synthesised in the skin when exposed to sunlight (specifically UVB radiation). It is essential for calcium absorption and bone health."
  },
  {
    id: 2085, section: "General Knowledge",
    text: "What is the chemical name of 'Laughing Gas'?",
    options: ["A) Nitrogen dioxide", "B) Nitrous oxide", "C) Nitrogen monoxide", "D) Dinitrogen trioxide"],
    answer: "B",
    explanation: "Nitrous oxide (N₂O) is called laughing gas because inhaling it produces feelings of euphoria and sometimes uncontrollable laughter. It is also used as an anaesthetic."
  },
  {
    id: 2086, section: "General Knowledge",
    text: "India's first successful indigenously developed satellite launch vehicle was:",
    options: ["A) PSLV", "B) GSLV", "C) SLV-3", "D) ASLV"],
    answer: "C",
    explanation: "SLV-3 (Satellite Launch Vehicle-3) was India's first indigenously developed operational launch vehicle, developed under Dr APJ Abdul Kalam. Its first successful flight was on July 18, 1980, placing Rohini satellite in orbit."
  },

  // Economy
  {
    id: 2087, section: "General Knowledge",
    text: "The Reserve Bank of India was established in the year:",
    options: ["A) 1930", "B) 1935", "C) 1947", "D) 1949"],
    answer: "B",
    explanation: "The Reserve Bank of India (RBI) was established on April 1, 1935, under the Reserve Bank of India Act, 1934. It was nationalised on January 1, 1949."
  },
  {
    id: 2088, section: "General Knowledge",
    text: "The term 'Bull Market' in the stock exchange refers to a market condition where:",
    options: ["A) Prices are falling", "B) Prices are rising", "C) Prices are stable", "D) Trading is suspended"],
    answer: "B",
    explanation: "A 'Bull Market' refers to a market condition where prices are rising or expected to rise. A 'Bear Market' is the opposite — prices are falling. The terms come from the way bulls thrust upward and bears swipe downward."
  },

  // Current Affairs / Goa specific
  {
    id: 2089, section: "General Knowledge",
    text: "Goa was liberated from Portuguese rule on:",
    options: ["A) August 15, 1947", "B) January 26, 1950", "C) December 19, 1961", "D) May 30, 1987"],
    answer: "C",
    explanation: "Goa was liberated from 450 years of Portuguese colonial rule on December 19, 1961, through Operation Vijay conducted by the Indian Armed Forces. December 19 is celebrated as Goa Liberation Day."
  },
  {
    id: 2090, section: "General Knowledge",
    text: "Goa achieved full statehood on:",
    options: ["A) December 19, 1961", "B) June 1, 1985", "C) May 30, 1987", "D) January 26, 1975"],
    answer: "C",
    explanation: "Goa became India's 25th state on May 30, 1987. Before that it was a Union Territory since liberation in 1961. May 30 is celebrated as Goa Statehood Day."
  },
  {
    id: 2091, section: "General Knowledge",
    text: "Which is the largest wildlife sanctuary in Goa?",
    options: ["A) Bondla Wildlife Sanctuary", "B) Cotigao Wildlife Sanctuary", "C) Bhagwan Mahavir Wildlife Sanctuary", "D) Dr Salim Ali Bird Sanctuary"],
    answer: "C",
    explanation: "Bhagwan Mahavir Wildlife Sanctuary is the largest wildlife sanctuary in Goa, covering about 240 sq km. It is adjacent to Mollem National Park and is home to tigers, leopards, and diverse wildlife."
  },

  // Sports
  {
    id: 2092, section: "General Knowledge",
    text: "The 2024 Paris Olympics was held in which year?",
    options: ["A) 2023", "B) 2024", "C) 2025", "D) 2022"],
    answer: "B",
    explanation: "The XXXIII Summer Olympic Games were held in Paris, France from July 26 to August 11, 2024. India won 6 medals — 1 silver and 5 bronze."
  },
  {
    id: 2093, section: "General Knowledge",
    text: "Who won the FIFA World Cup 2022?",
    options: ["A) France", "B) Brazil", "C) Argentina", "D) Germany"],
    answer: "C",
    explanation: "Argentina won the FIFA World Cup 2022 held in Qatar, defeating France on penalties in the final. Lionel Messi won the Golden Ball as the best player of the tournament."
  },

  // India — Miscellaneous
  {
    id: 2094, section: "General Knowledge",
    text: "The National Voters' Day is celebrated in India on:",
    options: ["A) January 25", "B) January 26", "C) November 26", "D) August 15"],
    answer: "A",
    explanation: "National Voters' Day is celebrated on January 25 every year to mark the founding anniversary of the Election Commission of India (established on January 25, 1950) and to encourage electoral participation."
  },
  {
    id: 2095, section: "General Knowledge",
    text: "Project Tiger was launched in India in:",
    options: ["A) 1970", "B) 1973", "C) 1980", "D) 1985"],
    answer: "B",
    explanation: "Project Tiger was launched in 1973 under Prime Minister Indira Gandhi to protect tigers in India. It started with 9 tiger reserves and has now grown to over 50 reserves."
  },
  {
    id: 2096, section: "General Knowledge",
    text: "The first woman President of India was:",
    options: ["A) Indira Gandhi", "B) Sonia Gandhi", "C) Pratibha Patil", "D) Sarojini Naidu"],
    answer: "C",
    explanation: "Pratibha Devisingh Patil became India's first woman President, serving from 2007 to 2012. She was the 12th President of India."
  },
  {
    id: 2097, section: "General Knowledge",
    text: "The 'Right to Education' Act was enacted in India in the year:",
    options: ["A) 2005", "B) 2008", "C) 2009", "D) 2010"],
    answer: "C",
    explanation: "The Right of Children to Free and Compulsory Education Act (Right to Education Act) was enacted in 2009 and came into force on April 1, 2010. It provides free and compulsory education to children aged 6–14 years."
  },
  {
    id: 2098, section: "General Knowledge",
    text: "Which Indian city is known as the 'City of Nawabs'?",
    options: ["A) Agra", "B) Hyderabad", "C) Lucknow", "D) Delhi"],
    answer: "C",
    explanation: "Lucknow, the capital of Uttar Pradesh, is known as the 'City of Nawabs' due to its historical association with the Nawabs of Awadh who made it a centre of Mughal culture, art, and architecture."
  },
  {
    id: 2099, section: "General Knowledge",
    text: "The headquarters of ISRO (Indian Space Research Organisation) is located in:",
    options: ["A) New Delhi", "B) Mumbai", "C) Ahmedabad", "D) Bengaluru"],
    answer: "D",
    explanation: "The headquarters of ISRO is located in Bengaluru (Bangalore), Karnataka. It was established in 1969 and is the national space agency of India."
  },
  {
    id: 2100, section: "General Knowledge",
    text: "Under the Indian Constitution, the Right to Property is a:",
    options: ["A) Fundamental Right", "B) Directive Principle", "C) Constitutional Right", "D) Legal Right"],
    answer: "C",
    explanation: "The Right to Property was originally a Fundamental Right (Article 19(f) and 31) but was removed from the Fundamental Rights chapter by the 44th Constitutional Amendment (1978). It is now a Constitutional Right under Article 300A."
  }

];
