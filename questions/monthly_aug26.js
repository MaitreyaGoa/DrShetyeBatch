// monthly_aug26.js – Dr Shetye Academic Programme
// August 2026 Monthly Full Test · 100 Questions · 100 Marks · 90 Minutes
// English Q1–25 | Reasoning Q26–50 | Maths Q51–75 | General Knowledge Q76–100 · IDs 2301–2400
// GK Q96–100 = Current Affairs (August 2026)

var PASSAGE_AUG = "<b>Mangroves: Goa's Living Sea Wall</b><br>Along the estuaries of the Mandovi and Zuari, mangrove forests form a quiet but powerful line of defence. Their tangled roots trap silt, slow down tidal currents and reduce the force of storm surges before they reach villages. Beneath the water, the same roots serve as nurseries for fish, crabs and prawns, sustaining the livelihoods of thousands of fishing families. Mangroves also store several times more carbon per hectare than most land forests, locking it away in waterlogged soil for centuries. Yet these forests are often treated as wasteland. Reclamation for roads, housing and aquaculture has shrunk them across much of India's coastline. Encouragingly, Goa's mangrove cover has expanded in recent decades, helped by protection laws and community awareness. Conservationists argue that the next step is to value mangroves not merely as scenery but as infrastructure — as essential to coastal safety as a sea wall, and far cheaper to maintain.";

var questions = [

  // ══════════════════════════════════════════════════════════════
  // SECTION: English (Q1–Q25) — IDs 2301–2325
  // ══════════════════════════════════════════════════════════════

  {
    id: 2301, section: "English",
    passage: PASSAGE_AUG,
    text: "What is the central idea of the passage?",
    options: ["A) Mangroves provide vital protective and economic services and should be valued as essential infrastructure.", "B) Goa has the largest mangrove forests in India.", "C) Sea walls are better than mangroves for coastal protection.", "D) Mangroves should be cleared for aquaculture and housing."],
    answer: "A",
    explanation: "The passage lists the protective, economic and climate benefits of mangroves and ends by arguing they should be valued as infrastructure."
  },
  {
    id: 2302, section: "English",
    passage: PASSAGE_AUG,
    text: "According to the passage, how do mangrove roots protect coastal villages?",
    options: ["A) By blocking all tidal water from entering estuaries", "B) By preventing fishing near villages", "C) By supplying fresh drinking water", "D) By trapping silt and reducing the force of storm surges"],
    answer: "D",
    explanation: "The second sentence says the roots trap silt, slow tidal currents and reduce the force of storm surges."
  },
  {
    id: 2303, section: "English",
    passage: PASSAGE_AUG,
    text: "The author's remark that mangroves are 'often treated as wasteland' suggests that:",
    options: ["A) they are protected everywhere in India", "B) they are useful only as scenery", "C) they are mostly unproductive land", "D) their value is commonly underestimated"],
    answer: "D",
    explanation: "Calling them 'wasteland' shows people overlook their real benefits — the passage argues the opposite."
  },
  {
    id: 2304, section: "English",
    passage: PASSAGE_AUG,
    text: "The word 'sustaining' as used in the passage most nearly means:",
    options: ["A) testing", "B) ending", "C) reducing", "D) supporting"],
    answer: "D",
    explanation: "Roots 'sustaining the livelihoods' of fishing families means supporting or maintaining them."
  },
  {
    id: 2305, section: "English",
    passage: PASSAGE_AUG,
    text: "The tone of the passage is best described as:",
    options: ["A) appreciative and persuasive", "B) angry and accusing", "C) humorous and light", "D) indifferent and neutral"],
    answer: "A",
    explanation: "The author praises mangroves and argues for valuing them — appreciative and persuasive."
  },
  {
    id: 2306, section: "English",
    text: "Identify the part of the sentence that contains an error:<br><i>(A) The committee have submitted / (B) its report / (C) to the Collector.</i>",
    options: ["A) The committee have submitted", "B) its report", "C) to the Collector.", "D) No error"],
    answer: "A",
    explanation: "A collective noun acting as one body takes a singular verb; 'its report' confirms this. Use 'The committee has submitted'."
  },
  {
    id: 2307, section: "English",
    text: "Identify the part of the sentence that contains an error:<br><i>(A) Each of the clerks / (B) were asked / (C) to submit the report.</i>",
    options: ["A) Each of the clerks", "B) were asked", "C) to submit the report.", "D) No error"],
    answer: "B",
    explanation: "'Each of' takes a singular verb: 'was asked'."
  },
  {
    id: 2308, section: "English",
    text: "Identify the part of the sentence that contains an error:<br><i>(A) He is one of the most / (B) honest officer / (C) in the department.</i>",
    options: ["A) He is one of the most", "B) honest officer", "C) in the department.", "D) No error"],
    answer: "B",
    explanation: "'One of the most …' is followed by a plural noun: 'honest officers'."
  },
  {
    id: 2309, section: "English",
    text: "Identify the part of the sentence that contains an error:<br><i>(A) Scarcely had the meeting begun / (B) than / (C) the lights went out.</i>",
    options: ["A) Scarcely had the meeting begun", "B) than", "C) the lights went out.", "D) No error"],
    answer: "B",
    explanation: "'Scarcely' pairs with 'when', not 'than'."
  },
  {
    id: 2310, section: "English",
    text: "Choose the correct word: The officer insisted ______ seeing the original documents.",
    options: ["A) to", "B) on", "C) at", "D) for"],
    answer: "B",
    explanation: "'Insist on' + -ing form."
  },
  {
    id: 2311, section: "English",
    text: "Choose the correct option: Neither the manager nor the clerks ______ aware of the new rule.",
    options: ["A) has been", "B) were", "C) is", "D) was"],
    answer: "B",
    explanation: "With 'neither…nor', the verb agrees with the nearer subject 'clerks' (plural)."
  },
  {
    id: 2312, section: "English",
    text: "Choose the correct option: By the time we reached the office, the meeting ______.",
    options: ["A) starts", "B) will start", "C) has started", "D) had started"],
    answer: "D",
    explanation: "The earlier of two past actions takes the past perfect."
  },
  {
    id: 2313, section: "English",
    text: "Choose the most suitable word: The new policy aims to ______ the hardships of small farmers.",
    options: ["A) aggravate", "B) allocate", "C) alleviate", "D) alienate"],
    answer: "C",
    explanation: "To alleviate means to lessen. Aggravate = worsen, alienate = isolate, allocate = distribute."
  },
  {
    id: 2314, section: "English",
    text: "Choose the word most similar in meaning to 'EPHEMERAL'.",
    options: ["A) Durable", "B) Eternal", "C) Short-lived", "D) Ancient"],
    answer: "C",
    explanation: "Ephemeral means lasting for a very short time."
  },
  {
    id: 2315, section: "English",
    text: "Choose the word opposite in meaning to 'CANDID'.",
    options: ["A) Frank", "B) Evasive", "C) Honest", "D) Open"],
    answer: "B",
    explanation: "Candid means frank and open; its opposite is evasive."
  },
  {
    id: 2316, section: "English",
    text: "Choose the word most similar in meaning to 'PRAGMATIC'.",
    options: ["A) Practical", "B) Romantic", "C) Theoretical", "D) Idealistic"],
    answer: "A",
    explanation: "Pragmatic means dealing with things practically."
  },
  {
    id: 2317, section: "English",
    text: "Choose the meaning of the idiom: <b>To burn one's boats</b>",
    options: ["A) To waste money", "B) To destroy one's property", "C) To take an irreversible step", "D) To cancel a journey"],
    answer: "C",
    explanation: "It means to do something that makes going back impossible."
  },
  {
    id: 2318, section: "English",
    text: "Choose the meaning of the idiom: <b>Hobson's choice</b>",
    options: ["A) No real choice at all", "B) A popular choice", "C) A choice between two good options", "D) A wise choice"],
    answer: "A",
    explanation: "Hobson's choice means taking what is offered or nothing."
  },
  {
    id: 2319, section: "English",
    text: "Choose the meaning of the idiom: <b>To smell a rat</b>",
    options: ["A) To feel unwell", "B) To catch a thief", "C) To find something dirty", "D) To suspect that something is wrong"],
    answer: "D",
    explanation: "To smell a rat means to sense trickery or wrongdoing."
  },
  {
    id: 2320, section: "English",
    text: "Choose the one word for: <b>A person who is indifferent to pleasure or pain</b>",
    options: ["A) Epicure", "B) Stoic", "C) Cynic", "D) Hedonist"],
    answer: "B",
    explanation: "A stoic endures hardship without complaint; a hedonist seeks pleasure."
  },
  {
    id: 2321, section: "English",
    text: "Choose the one word for: <b>Government by a small group of people</b>",
    options: ["A) Monarchy", "B) Oligarchy", "C) Anarchy", "D) Democracy"],
    answer: "B",
    explanation: "Oligarchy = rule by a few."
  },
  {
    id: 2322, section: "English",
    text: "Change the voice: \"The Collector inaugurated the new library.\"",
    options: ["A) The new library was inaugurate by the Collector.", "B) The new library was inaugurated by the Collector.", "C) The new library has been inaugurated by the Collector.", "D) The new library is inaugurated by the Collector."],
    answer: "B",
    explanation: "Simple past active → was/were + V3."
  },
  {
    id: 2323, section: "English",
    text: "Choose the correct indirect speech: He said, \"I have finished the work.\"",
    options: ["A) He said that I had finished the work.", "B) He said that he had finished the work.", "C) He said that he has finished the work.", "D) He told that he finished the work."],
    answer: "B",
    explanation: "Present perfect → past perfect; 'I' → 'he'."
  },
  {
    id: 2324, section: "English",
    text: "Choose the correct improvement: \"If I would have known his address, I would have written to him.\"",
    options: ["A) No improvement", "B) If I had known his address", "C) If I knew his address", "D) If I have known his address"],
    answer: "B",
    explanation: "Third conditional: If + past perfect, would have + V3."
  },
  {
    id: 2325, section: "English",
    text: "Arrange the sentences in a logical order:<br>P: Within weeks, the lake was full again.<br>Q: Last summer, the village lake had dried up completely.<br>R: The villagers decided to desilt it before the monsoon.<br>S: When the rains came, the deeper lake held much more water.",
    options: ["A) QSRP", "B) QRSP", "C) RSQP", "D) RQPS"],
    answer: "B",
    explanation: "Q introduces the problem, R the action, S the rains, P the result."
  },
  // ══════════════════════════════════════════════════════════════
  // SECTION: Reasoning (Q26–Q50) — IDs 2326–2350
  // ══════════════════════════════════════════════════════════════

  {
    id: 2326, section: "Reasoning",
    text: "In a certain code, PAPER is written as OZODQ. How is FILE written in that code?",
    options: ["A) DKHE", "B) FILE", "C) EHKD", "D) DGJC"],
    answer: "C",
    explanation: "Each letter moves 1 place(s) backward: P→O, A→Z… So FILE → EHKD."
  },
  {
    id: 2327, section: "Reasoning",
    text: "In a code language, SCHOOL is written as HXSLLO. How is PLANT written in that language?",
    options: ["A) KOZMG", "B) JNYLF", "C) LPANH", "D) GMZOK"],
    answer: "A",
    explanation: "Each letter is replaced by its opposite letter (positions add up to 27: A↔Z, B↔Y, …). So PLANT → KOZMG."
  },
  {
    id: 2328, section: "Reasoning",
    text: "If SUN = 54, then TEA = ?",
    options: ["A) 26", "B) 25", "C) 27", "D) 28"],
    answer: "A",
    explanation: "Add the alphabet positions: SUN = 19+21+14 = 54. TEA = 20+5+1 = 26."
  },
  {
    id: 2329, section: "Reasoning",
    text: "Find the next number in the series: 6, 8, 12, 20, 36, ?",
    options: ["A) 70", "B) 69", "C) 68", "D) 67"],
    answer: "C",
    explanation: "Rule: differences double: +2, +4, +8, …. Next term = 68."
  },
  {
    id: 2330, section: "Reasoning",
    text: "Find the next number in the series: 3, 5, 7, 11, 13, ?",
    options: ["A) 19", "B) 16", "C) 18", "D) 17"],
    answer: "D",
    explanation: "Rule: consecutive prime numbers. Next term = 17."
  },
  {
    id: 2331, section: "Reasoning",
    text: "Find the wrong number in the series: 5, 7, 13, 16, 32, 34",
    options: ["A) 7", "B) 5", "C) 13", "D) 32"],
    answer: "C",
    explanation: "Rule: alternately +2 and × 2. The term 13 should be 14."
  },
  {
    id: 2332, section: "Reasoning",
    text: "Find the next letter: A, C, F, J, ?",
    options: ["A) O", "B) N", "C) P", "D) Q"],
    answer: "A",
    explanation: "The gaps increase by one: +2, +3, +4, so the next gap is +5: J → O."
  },
  {
    id: 2333, section: "Reasoning",
    text: "Find the next term: EV, GT, IR, KP, ?",
    options: ["A) MN", "B) NM", "C) NN", "D) MM"],
    answer: "A",
    explanation: "First letters move forward by 2; second letters move backward by 2 from Z. Next = MN."
  },
  {
    id: 2334, section: "Reasoning",
    text: "12 : 1728 :: 4 : ?",
    options: ["A) 64", "B) 63", "C) 68", "D) 65"],
    answer: "A",
    explanation: "The second number is the cube of the first. 4 → 64."
  },
  {
    id: 2335, section: "Reasoning",
    text: "PEN : RGP :: GIK : ?",
    options: ["A) KMO", "B) MKI", "C) JLN", "D) IKM"],
    answer: "D",
    explanation: "Each letter moves 2 place(s) forward. GIK → IKM."
  },
  {
    id: 2336, section: "Reasoning",
    text: "Find the odd number out: 121, 64, 67, 196",
    options: ["A) 67", "B) 196", "C) 121", "D) 64"],
    answer: "A",
    explanation: "64, 196, 121 are perfect squares; 67 is not."
  },
  {
    id: 2337, section: "Reasoning",
    text: "Find the odd letter group: NQT, HKO, ADG, EHK",
    options: ["A) EHK", "B) NQT", "C) HKO", "D) ADG"],
    answer: "C",
    explanation: "In each group the letters are 3 apart (ADG: A→D→G). In HKO the last gap is 4."
  },
  {
    id: 2338, section: "Reasoning",
    text: "If the English alphabet is written in the usual order, which letter will be 5th to the left of the 9th letter from the left?",
    options: ["A) E", "B) C", "C) D", "D) F"],
    answer: "C",
    explanation: "The 9th letter from the left is I. Moving 5 places to the left gives position 4: D."
  },
  {
    id: 2339, section: "Reasoning",
    text: "Study the arrangement: <b>7 * A D 2 N E 5 Q T B K @ H & 4</b><br>Which element is 4th to the left of the 8th element from the right end?",
    options: ["A) D", "B) Q", "C) N", "D) 2"],
    answer: "D",
    explanation: "There are 16 elements, so the 8th from the right is the 9th from the left (Q). 4 places to its left is the 5th element: 2."
  },
  {
    id: 2340, section: "Reasoning",
    text: "Rohan walks 3 m North, turns left and walks 8 m and then turns left and walks 3 m. How far and in which direction is Rohan from the starting point?",
    options: ["A) 8 m East", "B) 10 m West", "C) 8 m South", "D) 8 m West"],
    answer: "D",
    explanation: "Track the position: final displacement = 8 m west and 0 m south → 8 m, towards the West."
  },
  {
    id: 2341, section: "Reasoning",
    text: "In a row, A is 12th from the left and B is 11th from the right. When they interchange their positions, A becomes 25th from the left. How many persons are there in the row?",
    options: ["A) 35", "B) 34", "C) 36", "D) 22"],
    answer: "A",
    explanation: "After interchanging, A is at B's old place, which is 25th from the left and 11th from the right. Total = 25 + 11 − 1 = 35."
  },
  {
    id: 2342, section: "Reasoning",
    text: "What is the angle between the hour hand and the minute hand of a clock at 5:30?",
    options: ["A) 25°", "B) 30°", "C) 15°", "D) 20°"],
    answer: "C",
    explanation: "Angle = |30H − 5.5M| = |150 − 165| = 15°."
  },
  {
    id: 2343, section: "Reasoning",
    text: "A is the father of B. C is the daughter of B. D is the brother of B. E is the son of A. How is C related to E?",
    options: ["A) Cousin", "B) Sister", "C) Niece", "D) Daughter"],
    answer: "C",
    explanation: "E is A's son, so E is B's brother. C is B's daughter, so C is E's niece."
  },
  {
    id: 2344, section: "Reasoning",
    text: "If P @ Q means P is the mother of Q, and P # Q means P is the brother of Q, then in A # B @ C, how is A related to C?",
    options: ["A) Brother", "B) Father", "C) Paternal uncle", "D) Maternal uncle"],
    answer: "D",
    explanation: "A is B's brother and B is C's mother, so A is C's maternal uncle."
  },
  {
    id: 2345, section: "Reasoning",
    text: "Statements: All doctors are graduates. No graduate is illiterate.<br>Conclusions:<br>I. No doctor is illiterate.<br>II. Some graduates are doctors.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both I and II follow", "D) Neither follows"],
    answer: "C",
    explanation: "Doctors lie inside graduates, who are separate from the illiterate, so I follows. 'All doctors are graduates' gives 'Some graduates are doctors', so II follows."
  },
  {
    id: 2346, section: "Reasoning",
    text: "Statements: Some books are pens. No pen is a pencil.<br>Conclusions:<br>I. Some books are not pencils.<br>II. Some pencils are books.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both I and II follow", "D) Neither follows"],
    answer: "A",
    explanation: "The books that are pens cannot be pencils, so I follows. Nothing links pencils to books, so II does not."
  },
  {
    id: 2347, section: "Reasoning",
    text: "Six friends A, B, C, D, E and F sit around a circular table facing the centre. A sits between B and C. B is to the immediate right of A. D is opposite A. E is to the immediate left of D. Who is opposite B?",
    options: ["A) C", "B) E", "C) D", "D) F"],
    answer: "D",
    explanation: "Facing the centre, right is anticlockwise. With A at the top, B is on A's right, C on A's left, D opposite A, E on D's left. The remaining seat, opposite B, is F's."
  },
  {
    id: 2348, section: "Reasoning",
    text: "Five boxes P, Q, R, S and T are stacked one above another. P is at the bottom and S is at the top. Q is immediately above T, and R is immediately above Q. Which box is in the middle?",
    options: ["A) P", "B) T", "C) Q", "D) R"],
    answer: "C",
    explanation: "From the bottom: P, T, Q, R, S. The middle (3rd) box is Q."
  },
  {
    id: 2349, section: "Reasoning",
    text: "If '+' means '×', '×' means '−', '−' means '÷' and '÷' means '+', find the value of 18 − 6 + 4 ÷ 5 × 3.",
    options: ["A) 21", "B) 14", "C) 10", "D) 17"],
    answer: "B",
    explanation: "The expression becomes 18 ÷ 6 × 4 + 5 − 3 = 3 × 4 + 5 − 3 = 14."
  },
  {
    id: 2350, section: "Reasoning",
    text: "In a group of 60 people, 35 like tea, 30 like coffee and 10 like neither. How many like both?",
    options: ["A) 15", "B) 5", "C) 20", "D) 10"],
    answer: "A",
    explanation: "People liking at least one = 50. Both = 35 + 30 − 50 = 15."
  },
  // ══════════════════════════════════════════════════════════════
  // SECTION: Maths (Q51–Q75) — IDs 2351–2375
  // ══════════════════════════════════════════════════════════════

  {
    id: 2351, section: "Maths",
    text: "The price of an article is first increased by 50% and then decreased by 20%. What is the net percentage change in its price?",
    options: ["A) 21% increase", "B) 20% increase", "C) No change", "D) 20% decrease"],
    answer: "B",
    explanation: "Net change = 50 − 20 − (50 × 20)/100 = 20%. So it is 20% increase."
  },
  {
    id: 2352, section: "Maths",
    text: "A student gets 32% marks and fails by 15 marks. Another student gets 40% marks and gets 9 marks more than the passing marks. What are the maximum marks?",
    options: ["A) 350", "B) 200", "C) 300", "D) 400"],
    answer: "C",
    explanation: "(40% − 32%) of maximum = 15 + 9 = 24. So 8% = 24 → maximum = 24 × 100/8 = 300."
  },
  {
    id: 2353, section: "Maths",
    text: "The marked price of a fan is ₹1,200. Two successive discounts of 20% and 10% are given. What is the selling price?",
    options: ["A) ₹864", "B) ₹840", "C) ₹964", "D) ₹960"],
    answer: "A",
    explanation: "SP = 1200 × 80/100 × 90/100 = ₹864. Successive discounts are not simply added."
  },
  {
    id: 2354, section: "Maths",
    text: "A trader marks his goods 30% above cost price and allows a discount of 10%. What is his profit or loss percent?",
    options: ["A) 20% profit", "B) 17% profit", "C) 17% loss", "D) 19% profit"],
    answer: "B",
    explanation: "Take CP = 100. MP = 130. SP = 130 × 90/100 = 117. So 17% profit."
  },
  {
    id: 2355, section: "Maths",
    text: "Find the compound interest on ₹12,500 at 5% per annum for 2 years, compounded annually.",
    options: ["A) ₹1,281.25", "B) ₹13,781.25", "C) ₹1,906.25", "D) ₹1,250"],
    answer: "A",
    explanation: "Amount = 12500 × (1 + 5/100)² = ₹13,781.25. CI = ₹13,781.25 − ₹12,500 = ₹1,281.25."
  },
  {
    id: 2356, section: "Maths",
    text: "A sum of money becomes triple itself in 8 years at simple interest. What is the rate of interest per annum?",
    options: ["A) 37 1/2%", "B) 12 1/2%", "C) 27%", "D) 25%"],
    answer: "D",
    explanation: "Interest = 2 × principal = 200% in 8 years. Rate = 200/8 = 25%."
  },
  {
    id: 2357, section: "Maths",
    text: "If A : B = 1 : 2 and B : C = 3 : 4, find A : B : C.",
    options: ["A) 1 : 2 : 4", "B) 1 : 6 : 4", "C) 3 : 6 : 9", "D) 3 : 6 : 8"],
    answer: "D",
    explanation: "Make B equal: multiply the first ratio by 3 and the second by 2: A : B : C = 3 : 6 : 8 = 3 : 6 : 8."
  },
  {
    id: 2358, section: "Maths",
    text: "A batsman has an average of 32 runs in 16 innings. How many runs must he score in the next innings to raise his average to 36?",
    options: ["A) 36", "B) 84", "C) 100", "D) 104"],
    answer: "C",
    explanation: "Required total = 36 × 17 = 612. Present total = 32 × 16 = 512. Runs needed = 100."
  },
  {
    id: 2359, section: "Maths",
    text: "The average of 11 numbers is 60. The average of the first six is 58 and of the last six is 63. Find the sixth number.",
    options: ["A) 62", "B) 72", "C) 60", "D) 66"],
    answer: "D",
    explanation: "6th number = 6 × 58 + 6 × 63 − 11 × 60 = 348 + 378 − 660 = 66. It is counted in both groups."
  },
  {
    id: 2360, section: "Maths",
    text: "A is thrice as efficient as B. Working together they finish a work in 20 days. In how many days can A alone finish it?",
    options: ["A) 80 days", "B) 60 days", "C) 30 2/3 days", "D) 26 2/3 days"],
    answer: "D",
    explanation: "If B does 1 unit/day, A does 3. Total work = 4 × 20 = 80 units. A alone = 80/3 = 26 2/3 days."
  },
  {
    id: 2361, section: "Maths",
    text: "A can do a work in 15 days and B in 20 days. A works alone for 6 days and then leaves. In how many days will B finish the remaining work?",
    options: ["A) 12 days", "B) 14 days", "C) 10 days", "D) 8 days"],
    answer: "A",
    explanation: "A does 6/15 = 2/5 of the work. Remaining = 3/5. B takes 3/5 × 20 = 12 days."
  },
  {
    id: 2362, section: "Maths",
    text: "Two trains 100 m and 125 m long run in the same direction at 54 km/h and 36 km/h. In how many seconds will they completely cross each other?",
    options: ["A) 90 seconds", "B) 9 seconds", "C) 48 seconds", "D) 45 seconds"],
    answer: "D",
    explanation: "Relative speed = 54 − 36 = 18 km/h = 5 m/s. Distance = 225 m. Time = 45 s."
  },
  {
    id: 2363, section: "Maths",
    text: "Walking at 2/3 of his usual speed, a man is 10 minutes late. What is his usual time for the journey?",
    options: ["A) 10 minutes", "B) 20 minutes", "C) 30 minutes", "D) 15 minutes"],
    answer: "B",
    explanation: "At 2/3 speed, time becomes 3/2 of usual. Extra = 1/2 of usual = 10 min. Usual time = 20 minutes."
  },
  {
    id: 2364, section: "Maths",
    text: "Find the greatest number that will divide 43, 91 and 183 leaving the same remainder in each case.",
    options: ["A) 5", "B) 2", "C) 4", "D) 8"],
    answer: "C",
    explanation: "Differences: 48, 92, 140. Their HCF = 4. That is the required number."
  },
  {
    id: 2365, section: "Maths",
    text: "The length of a rectangle is increased by 20% and its breadth is decreased by 20%. What is the percentage change in its area?",
    options: ["A) 20% decrease", "B) 4% increase", "C) No change", "D) 4% decrease"],
    answer: "D",
    explanation: "Net change = 20 − 20 − (20 × 20)/100 = −4%. The area decreases by 4%."
  },
  {
    id: 2366, section: "Maths",
    text: "A trader marks his goods 40% above cost price and allows two successive discounts of 10% each. What is his profit percent?",
    options: ["A) 20%", "B) 13.4%", "C) 12%", "D) 26%"],
    answer: "B",
    explanation: "Take CP = 100. MP = 140. SP = 140 × 0.9 × 0.9 = 113.4. Profit = 13.4%."
  },
  {
    id: 2367, section: "Maths",
    text: "A sum of money doubles itself in 5 years at compound interest. In how many years will it become 8 times?",
    options: ["A) 40 years", "B) 10 years", "C) 15 years", "D) 20 years"],
    answer: "C",
    explanation: "8 = 2³, so it takes 3 doubling periods: 3 × 5 = 15 years."
  },
  {
    id: 2368, section: "Maths",
    text: "Pipes A and B can fill a tank in 12 minutes and 15 minutes respectively, while pipe C can empty it in 20 minutes. If all three are opened together, in how much time will the empty tank be filled?",
    options: ["A) 12 minutes", "B) 10 minutes", "C) 15 minutes", "D) 6 2/3 minutes"],
    answer: "B",
    explanation: "Net rate = 1/12 + 1/15 − 1/20 = (5 + 4 − 3)/60 = 1/10. Time = 10 minutes."
  },
  {
    id: 2369, section: "Maths",
    text: "Two trains run in the same direction at 60 km/h and 42 km/h. The faster train crosses a man sitting in the slower train in 30 seconds. What is the length of the faster train?",
    options: ["A) 150 m", "B) 200 m", "C) 180 m", "D) 125 m"],
    answer: "A",
    explanation: "Relative speed = 18 km/h = 5 m/s. Length = 5 × 30 = 150 m."
  },
  {
    id: 2370, section: "Maths",
    text: "A 40-litre mixture contains milk and water in the ratio 3 : 1. How much water must be added to make the ratio 3 : 2?",
    options: ["A) 20 litres", "B) 15 litres", "C) 10 litres", "D) 8 litres"],
    answer: "C",
    explanation: "Milk = 30 L, water = 10 L. For 3 : 2, water must be 20 L, so add 10 L."
  },
  {
    id: 2371, section: "Maths",
    text: "A invests ₹30,000 for 12 months and B invests ₹40,000 for 6 months in a business. Out of a total profit of ₹15,000, what is A's share?",
    options: ["A) ₹8,000", "B) ₹9,000", "C) ₹6,000", "D) ₹7,500"],
    answer: "B",
    explanation: "Capital-time ratio = 3,60,000 : 2,40,000 = 3 : 2. A's share = 3/5 × 15,000 = ₹9,000."
  },
  {
    id: 2372, section: "Maths",
    text: "How many zeros are there at the end of 100! (100 factorial)?",
    options: ["A) 20", "B) 22", "C) 25", "D) 24"],
    answer: "D",
    explanation: "Count factors of 5: 100/5 + 100/25 = 20 + 4 = 24."
  },
  {
    id: 2373, section: "Maths",
    text: "If x + 1/x = 5, find the value of x² + 1/x².",
    options: ["A) 25", "B) 27", "C) 21", "D) 23"],
    answer: "D",
    explanation: "x² + 1/x² = (x + 1/x)² − 2 = 25 − 2 = 23."
  },
  {
    id: 2374, section: "Maths",
    text: "A boat goes 24 km upstream and 36 km downstream in 6 hours. It goes 36 km upstream and 24 km downstream in 6 hours 30 minutes. What is the speed of the boat in still water?",
    options: ["A) 12 km/h", "B) 10 km/h", "C) 8 km/h", "D) 9 km/h"],
    answer: "B",
    explanation: "Solving 24/u + 36/d = 6 and 36/u + 24/d = 6.5 gives upstream u = 8 and downstream d = 12 km/h. Boat = (8 + 12)/2 = 10 km/h."
  },
  {
    id: 2375, section: "Maths",
    text: "The average of five consecutive even numbers is 36. What is the product of the smallest and the largest of them?",
    options: ["A) 1360", "B) 1296", "C) 1152", "D) 1280"],
    answer: "D",
    explanation: "The numbers are 32, 34, 36, 38, 40. Product = 32 × 40 = 1280."
  },
  // ══════════════════════════════════════════════════════════════
  // SECTION: General Knowledge (Q76–Q100) — IDs 2376–2400
  // ══════════════════════════════════════════════════════════════

  {
    id: 2376, section: "General Knowledge",
    text: "Which Article of the Indian Constitution provides for the Election Commission of India?",
    options: ["A) Article 280", "B) Article 324", "C) Article 312", "D) Article 356"],
    answer: "B",
    explanation: "Article 324 vests the superintendence, direction and control of elections in the Election Commission."
  },
  {
    id: 2377, section: "General Knowledge",
    text: "What is the minimum age to become a member of the Rajya Sabha?",
    options: ["A) 30 years", "B) 25 years", "C) 35 years", "D) 21 years"],
    answer: "A",
    explanation: "Article 84 sets 30 years for the Rajya Sabha and 25 years for the Lok Sabha."
  },
  {
    id: 2378, section: "General Knowledge",
    text: "Who appoints the Chief Justice of India?",
    options: ["A) The Parliament", "B) The Law Minister", "C) The President of India", "D) The Prime Minister"],
    answer: "C",
    explanation: "The President appoints the CJI under Article 124."
  },
  {
    id: 2379, section: "General Knowledge",
    text: "Fundamental Duties were added to the Constitution by which amendment?",
    options: ["A) 44th Amendment, 1978", "B) 86th Amendment, 2002", "C) 42nd Amendment, 1976", "D) 73rd Amendment, 1992"],
    answer: "C",
    explanation: "The 42nd Amendment added Part IV-A (Article 51A) on the Swaran Singh Committee's recommendation."
  },
  {
    id: 2380, section: "General Knowledge",
    text: "Who founded the Indian National Congress in 1885?",
    options: ["A) A. O. Hume", "B) W. C. Bonnerjee", "C) Dadabhai Naoroji", "D) Bal Gangadhar Tilak"],
    answer: "A",
    explanation: "Allan Octavian Hume founded the INC; W. C. Bonnerjee presided over its first session."
  },
  {
    id: 2381, section: "General Knowledge",
    text: "The first session of the Indian National Congress was held at:",
    options: ["A) Madras", "B) Bombay", "C) Allahabad", "D) Calcutta"],
    answer: "B",
    explanation: "The first session met in Bombay (Mumbai) in December 1885."
  },
  {
    id: 2382, section: "General Knowledge",
    text: "Who was the first Governor-General of independent India?",
    options: ["A) Lord Linlithgow", "B) Lord Wavell", "C) Lord Mountbatten", "D) C. Rajagopalachari"],
    answer: "C",
    explanation: "Lord Mountbatten served first; C. Rajagopalachari was the first (and only) Indian Governor-General."
  },
  {
    id: 2383, section: "General Knowledge",
    text: "The First Battle of Panipat (1526) was fought between:",
    options: ["A) Babur and Ibrahim Lodi", "B) Akbar and Hemu", "C) Ahmad Shah Abdali and the Marathas", "D) Babur and Rana Sanga"],
    answer: "A",
    explanation: "Babur defeated Ibrahim Lodi and founded the Mughal Empire."
  },
  {
    id: 2384, section: "General Knowledge",
    text: "Which is the largest state of India by area?",
    options: ["A) Uttar Pradesh", "B) Maharashtra", "C) Madhya Pradesh", "D) Rajasthan"],
    answer: "D",
    explanation: "Rajasthan covers about 3.42 lakh sq km."
  },
  {
    id: 2385, section: "General Knowledge",
    text: "Which river is known as the 'Dakshin Ganga'?",
    options: ["A) Godavari", "B) Kaveri", "C) Narmada", "D) Krishna"],
    answer: "A",
    explanation: "The Godavari, the longest river of peninsular India, is called Dakshin Ganga."
  },
  {
    id: 2386, section: "General Knowledge",
    text: "Which is the highest peak of the Western Ghats?",
    options: ["A) Anamudi", "B) Doddabetta", "C) Sonsogor", "D) Kalsubai"],
    answer: "A",
    explanation: "Anamudi (about 2,695 m) in Kerala is the highest peak in the Western Ghats."
  },
  {
    id: 2387, section: "General Knowledge",
    text: "In which year was the Reserve Bank of India established?",
    options: ["A) 1935", "B) 1947", "C) 1949", "D) 1969"],
    answer: "A",
    explanation: "The RBI was established on 1 April 1935 and nationalised in 1949."
  },
  {
    id: 2388, section: "General Knowledge",
    text: "The Goods and Services Tax (GST) came into force in India on:",
    options: ["A) 1 January 2017", "B) 1 April 2016", "C) 1 July 2017", "D) 15 August 2017"],
    answer: "C",
    explanation: "GST was implemented from 1 July 2017 through the 101st Constitutional Amendment."
  },
  {
    id: 2389, section: "General Knowledge",
    text: "What is the chemical formula of common salt?",
    options: ["A) CaCl₂", "B) NaCl", "C) NaOH", "D) KCl"],
    answer: "B",
    explanation: "Common salt is sodium chloride, NaCl."
  },
  {
    id: 2390, section: "General Knowledge",
    text: "Deficiency of which vitamin causes scurvy?",
    options: ["A) Vitamin A", "B) Vitamin C", "C) Vitamin B12", "D) Vitamin D"],
    answer: "B",
    explanation: "Vitamin C (ascorbic acid) deficiency causes scurvy."
  },
  {
    id: 2391, section: "General Knowledge",
    text: "What is the SI unit of electric current?",
    options: ["A) Ohm", "B) Watt", "C) Ampere", "D) Volt"],
    answer: "C",
    explanation: "Current is measured in amperes."
  },
  {
    id: 2392, section: "General Knowledge",
    text: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["A) Oxygen", "B) Argon", "C) Nitrogen", "D) Carbon dioxide"],
    answer: "C",
    explanation: "Nitrogen makes up about 78% of the atmosphere."
  },
  {
    id: 2393, section: "General Knowledge",
    text: "What is the official language of Goa under the Goa, Daman and Diu Official Language Act, 1987?",
    options: ["A) English", "B) Marathi", "C) Konkani", "D) Portuguese"],
    answer: "C",
    explanation: "Konkani (Devanagari) is the official language; Marathi may be used for official purposes too."
  },
  {
    id: 2394, section: "General Knowledge",
    text: "Which is the highest waterfall in Goa?",
    options: ["A) Hivre Falls", "B) Tambdi Surla Falls", "C) Dudhsagar Falls", "D) Arvalem Falls"],
    answer: "C",
    explanation: "Dudhsagar on the Mandovi, on the Goa–Karnataka border, is about 310 m high."
  },
  {
    id: 2395, section: "General Knowledge",
    text: "What is the state animal of Goa?",
    options: ["A) Tiger", "B) Blackbuck", "C) Elephant", "D) Gaur (Indian bison)"],
    answer: "D",
    explanation: "The Gaur is Goa's state animal."
  },
  {
    id: 2396, section: "General Knowledge",
    text: "The 23rd Commonwealth Games, held in July–August 2026, were hosted by:",
    options: ["A) Glasgow, Scotland", "B) Gold Coast, Australia", "C) Birmingham, England", "D) Victoria, Canada"],
    answer: "A",
    explanation: "The 2026 Commonwealth Games were held in Glasgow; Australia topped the medal tally."
  },
  {
    id: 2397, section: "General Knowledge",
    text: "At the 2026 Commonwealth Games, India finished at which position on the medal table?",
    options: ["A) 6th", "B) 3rd", "C) 2nd", "D) 4th"],
    answer: "D",
    explanation: "India finished 4th with 13 gold, 17 silver and 9 bronze medals."
  },
  {
    id: 2398, section: "General Knowledge",
    text: "Glaw Lake, declared India's 101st Ramsar site in August 2026, is located in:",
    options: ["A) Ladakh", "B) Assam", "C) Sikkim", "D) Arunachal Pradesh"],
    answer: "D",
    explanation: "Glaw Lake, in the Kamlang Tiger Reserve, is Arunachal Pradesh's first Ramsar site."
  },
  {
    id: 2399, section: "General Knowledge",
    text: "In August 2026, who became the first Indian to win the Grand Chess Tour?",
    options: ["A) D. Gukesh", "B) R. Praggnanandhaa", "C) Viswanathan Anand", "D) Arjun Erigaisi"],
    answer: "B",
    explanation: "Praggnanandhaa beat Fabiano Caruana in the final in St. Louis."
  },
  {
    id: 2400, section: "General Knowledge",
    text: "India celebrated its ___ Independence Day on 15 August 2026.",
    options: ["A) 75th", "B) 81st", "C) 79th", "D) 80th"],
    answer: "D",
    explanation: "15 August 1947 was the 1st; 2026 marks the 80th Independence Day."
  }

];

// Answer key lookup
var ANSWER_KEY = {};
questions.forEach(q => { ANSWER_KEY[q.id] = q.answer; });
