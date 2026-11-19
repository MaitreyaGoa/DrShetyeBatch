// gssc_police_cbt2_mock1.js – Dr Shetye Academic Programme
// CBT 2 Goa Police Mock 1 · GSSC Advt. No. 2 of 2026 pattern (Police Constable CBT-II)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 11481–11540
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 (RC Q21–25) | History of Goa Q41–60

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Policing in a small coastal state presents a paradox. On the one hand, the compact geography allows a modest force to respond quickly; on the other, a tourist population that swells several-fold during the season stretches every resource to its limit. Traditional policing, built around the police station and the patrol vehicle, treats the citizen largely as a complainant — someone who arrives after the harm is done. Community policing inverts this relationship. It assumes that residents, shopkeepers, fishermen and hoteliers are not merely sources of information but partners in prevention, because they notice the small irregularities — an unfamiliar boat at dawn, a rented room that is never occupied — long before these crystallise into crime.\n\nCritics argue that such partnerships blur accountability and may encourage vigilantism. The objection is not frivolous. A neighbourhood committee that confuses suspicion with evidence can do as much damage as the crime it seeks to prevent. The answer, however, lies not in abandoning the model but in disciplining it: clear protocols on what citizens may report, a duty on the police to respond, and a refusal to let any group act on its own authority. Trust, after all, is not a by-product of policing; it is its precondition. A force that is trusted hears early; a force that is feared hears late, if at all."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 11481, section: "Reasoning",
    text: "Find the next term in the series: 3, 8, 27, 112, 565, ?",
    options: ["A) 3390", "B) 3396", "C) 3384", "D) 3402"],
    answer: "B",
    explanation: "Pattern: ×2+2, ×3+3, ×4+4, ×5+5, so the next step is ×6+6: 565×6 + 6 = 3396."
  },
  {
    id: 11482, section: "Reasoning",
    text: "In a certain code, GOA is written as HQD. Following the same rule, how will POLICE be written?",
    options: ["A) RQOJEH", "B) QPOJEH", "C) QQNJEG", "D) QQOJEH"],
    answer: "D",
    explanation: "Letters are shifted by +1, +2, +3 and the cycle repeats. P+1=Q, O+2=Q, L+3=O, I+1=J, C+2=E, E+3=H, giving QQOJEH."
  },
  {
    id: 11483, section: "Reasoning",
    text: "If 'A + B' means A is the mother of B, 'A − B' means A is the brother of B, 'A × B' means A is the father of B and 'A ÷ B' means A is the sister of B, which expression shows that P is the maternal uncle of Q?",
    options: ["A) P ÷ R + Q", "B) P − R × Q", "C) P − R + Q", "D) P × R − Q"],
    answer: "C",
    explanation: "P − R + Q: P is the brother of R and R is the mother of Q, so P is Q's mother's brother, i.e. maternal uncle. (P − R × Q makes P the paternal uncle; P ÷ R + Q makes P the maternal aunt; P × R − Q makes P the father.)"
  },
  {
    id: 11484, section: "Reasoning",
    text: "A constable starts from the police station and walks 10 km North. He turns right and walks 6 km, turns right again and walks 18 km, then turns left and walks 9 km. How far and in which direction is he now from the police station?",
    options: ["A) 19 km, South-East", "B) 17 km, North-East", "C) 15 km, South-East", "D) 17 km, South-East"],
    answer: "D",
    explanation: "Coordinates: (0,10) → east 6 → (6,10) → south 18 → (6,−8) → left while facing south = east 9 → (15,−8). Distance = √(15²+8²) = 17 km, towards the South-East."
  },
  {
    id: 11485, section: "Reasoning",
    text: "Six friends P, Q, R, S, T and U sit around a circular table facing the centre. P sits second to the right of R. Q sits immediately to the left of P. S is not an immediate neighbour of R. T sits opposite Q. Who sits opposite R?",
    options: ["A) Q", "B) U", "C) S", "D) T"],
    answer: "C",
    explanation: "Place R. P is second to R's right; Q is immediately to P's left; T is opposite Q. The two remaining seats are R's left neighbour and the seat opposite R. S cannot sit next to R, so S is opposite R and U sits to R's left."
  },
  {
    id: 11486, section: "Reasoning",
    text: "Statements: All constables are officers. Some officers are graduates. No graduate is lazy.<br>Conclusions:<br>I. Some constables are graduates.<br>II. Some officers are not lazy.<br>III. No constable is lazy.",
    options: ["A) None of the conclusions follows", "B) Only II follows", "C) Only I and II follow", "D) Only II and III follow"],
    answer: "B",
    explanation: "The officers who are graduates cannot be lazy, so some officers are not lazy: II follows. Nothing links constables directly to graduates or to laziness, so I and III do not follow."
  },
  {
    id: 11487, section: "Reasoning",
    text: "If 15 August 1947 was a Friday, what day of the week was 19 December 1961, the day Goa was liberated?",
    options: ["A) Thursday", "B) Tuesday", "C) Wednesday", "D) Monday"],
    answer: "B",
    explanation: "From 15-08-1947 to 15-08-1961 is 14 years with 4 leap years (1948, 52, 56, 60): 14+4 = 18 odd days = 4 odd days, so Friday+4 = Tuesday. From 15 Aug to 19 Dec 1961 is 16+30+31+30+19 = 126 days = 18 weeks exactly, so it is still Tuesday."
  },
  {
    id: 11488, section: "Reasoning",
    text: "At what time between 4 o'clock and 5 o'clock will the hour and minute hands of a clock coincide?",
    options: ["A) 21 9/11 minutes past 4", "B) 21 3/11 minutes past 4", "C) 20 minutes past 4", "D) 22 2/11 minutes past 4"],
    answer: "A",
    explanation: "At 4:00 the minute hand is 20 minute-spaces behind. It gains 55/60 of a space each minute, so the time needed is 20 × 60/55 = 240/11 = 21 9/11 minutes."
  },
  {
    id: 11489, section: "Reasoning",
    text: "Find the odd one out: 121, 169, 225, 289, 361",
    options: ["A) 289", "B) 225", "C) 361", "D) 169"],
    answer: "B",
    explanation: "121 = 11², 169 = 13², 289 = 17² and 361 = 19² are squares of prime numbers. 225 = 15², and 15 is not prime."
  },
  {
    id: 11490, section: "Reasoning",
    text: "Statement: Goa Police has advised house-owners to submit tenant verification forms before renting out their premises.<br>Assumptions:<br>I. Verification of tenants may help in preventing crime.<br>II. All tenants have a criminal background.",
    options: ["A) Only assumption I is implicit", "B) Only assumption II is implicit", "C) Neither I nor II is implicit", "D) Both I and II are implicit"],
    answer: "A",
    explanation: "The advisory makes sense only if verification helps prevent crime, so I is implicit. II is an extreme generalisation that the advisory does not need."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 11491, section: "Numerical Ability",
    text: "The price of petrol rises by 25%. By what percentage must a family reduce its consumption so that its expenditure on petrol stays the same?",
    options: ["A) 22.5%", "B) 20%", "C) 18%", "D) 25%"],
    answer: "B",
    explanation: "Reduction = 25/(100+25) × 100 = 20%."
  },
  {
    id: 11492, section: "Numerical Ability",
    text: "A shopkeeper marks his goods 40% above the cost price and allows two successive discounts of 10% and 5%. What is his profit percentage?",
    options: ["A) 25%", "B) 21%", "C) 19.7%", "D) 18.5%"],
    answer: "C",
    explanation: "SP = 1.40 × 0.90 × 0.95 = 1.197 × CP, so the profit is 19.7%."
  },
  {
    id: 11493, section: "Numerical Ability",
    text: "A can complete a work in 12 days and B in 18 days. They work together for 4 days, after which A leaves. In how many days will B finish the remaining work?",
    options: ["A) 9 days", "B) 6 days", "C) 8 days", "D) 7 days"],
    answer: "C",
    explanation: "Combined rate = 1/12 + 1/18 = 5/36 per day. In 4 days they do 20/36 = 5/9. Remaining 4/9 × 18 = 8 days."
  },
  {
    id: 11494, section: "Numerical Ability",
    text: "A train 240 m long crosses a platform 360 m long in 30 seconds. What is the speed of the train?",
    options: ["A) 72 km/h", "B) 54 km/h", "C) 80 km/h", "D) 64.8 km/h"],
    answer: "A",
    explanation: "Distance = 240 + 360 = 600 m. Speed = 600/30 = 20 m/s = 20 × 18/5 = 72 km/h."
  },
  {
    id: 11495, section: "Numerical Ability",
    text: "What is the difference between compound interest and simple interest on ₹16,000 for 2 years at 10% per annum?",
    options: ["A) ₹160", "B) ₹180", "C) ₹150", "D) ₹1,600"],
    answer: "A",
    explanation: "For 2 years, CI − SI = P(r/100)² = 16000 × (0.1)² = ₹160."
  },
  {
    id: 11496, section: "Numerical Ability",
    text: "The average of 11 results is 50. The average of the first six results is 49 and that of the last six is 52. What is the sixth result?",
    options: ["A) 58", "B) 54", "C) 56", "D) 50"],
    answer: "C",
    explanation: "The sixth result is counted in both groups: 6×49 + 6×52 − 11×50 = 294 + 312 − 550 = 56."
  },
  {
    id: 11497, section: "Numerical Ability",
    text: "A 60-litre mixture contains milk and water in the ratio 7 : 3. How much water must be added to make the ratio 3 : 2?",
    options: ["A) 15 litres", "B) 8 litres", "C) 12 litres", "D) 10 litres"],
    answer: "D",
    explanation: "Milk = 42 L, water = 18 L. 42/(18 + x) = 3/2 gives 84 = 54 + 3x, so x = 10 litres."
  },
  {
    id: 11498, section: "Numerical Ability",
    text: "What is the least number which, when divided by 12, 15, 20 and 54, leaves a remainder of 8 in each case?",
    options: ["A) 540", "B) 548", "C) 1088", "D) 268"],
    answer: "B",
    explanation: "LCM(12, 15, 20, 54) = 540. Required number = 540 + 8 = 548."
  },
  {
    id: 11499, section: "Numerical Ability",
    text: "The present ages of a father and his son are in the ratio 7 : 2. After 10 years the ratio will be 9 : 4. What is the father's present age?",
    options: ["A) 35 years", "B) 42 years", "C) 49 years", "D) 28 years"],
    answer: "A",
    explanation: "(7x + 10)/(2x + 10) = 9/4 gives 28x + 40 = 18x + 90, so x = 5. Father = 35 years."
  },
  {
    id: 11500, section: "Numerical Ability",
    text: "Pipes A and B can fill a tank in 20 minutes and 30 minutes respectively, while pipe C can empty the full tank in 15 minutes. If all three are opened together, in how much time will the empty tank be filled?",
    options: ["A) 60 minutes", "B) 50 minutes", "C) 75 minutes", "D) 45 minutes"],
    answer: "A",
    explanation: "Net rate = 1/20 + 1/30 − 1/15 = (3 + 2 − 4)/60 = 1/60, so the tank fills in 60 minutes."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 11501, section: "English",
    passage: "passage_1",
    text: "Which of the following best expresses the central idea of the passage?",
    options: ["A) Tourism is the main cause of crime in small coastal states", "B) Neighbourhood committees should be empowered to act independently against suspects", "C) Community policing, if properly regulated, strengthens crime prevention by treating citizens as partners", "D) Traditional policing based on police stations has completely failed in coastal states"],
    answer: "C",
    explanation: "The author defends community policing while admitting its risks, and argues that it should be 'disciplined', not abandoned."
  },
  {
    id: 11502, section: "English",
    passage: "passage_1",
    text: "The 'paradox' mentioned in the first sentence refers to the fact that",
    options: ["A) the police are feared and trusted at the same time", "B) a small force has to police a large and sparsely populated state", "C) citizens report crimes only after the harm is done", "D) a compact geography aids quick response, while the seasonal tourist influx strains resources"],
    answer: "D",
    explanation: "The next sentence explains it: compact geography helps ('on the one hand') but the swelling tourist population stretches resources ('on the other')."
  },
  {
    id: 11503, section: "English",
    passage: "passage_1",
    text: "According to the passage, critics object to community policing because it",
    options: ["A) is too expensive for a small state", "B) ignores the role of tourists in crime", "C) may blur accountability and encourage vigilantism", "D) makes the police lazy and dependent on citizens"],
    answer: "C",
    explanation: "This is stated directly: 'Critics argue that such partnerships blur accountability and may encourage vigilantism.'"
  },
  {
    id: 11504, section: "English",
    passage: "passage_1",
    text: "The word 'crystallise', as used in the passage, most nearly means",
    options: ["A) become transparent", "B) take a definite form", "C) be forgotten", "D) dissolve completely"],
    answer: "B",
    explanation: "Small irregularities are noticed before they 'crystallise into crime', i.e. before they take a definite shape as crime."
  },
  {
    id: 11505, section: "English",
    passage: "passage_1",
    text: "Which of the following can be inferred from the passage?",
    options: ["A) Fishermen are the most reliable informants of the police", "B) Citizens should be allowed to detain suspicious persons", "C) Most crimes in coastal states are committed by tourists", "D) A police force that enjoys public trust is more likely to receive timely information"],
    answer: "D",
    explanation: "'A force that is trusted hears early' supports the first option. The passage refuses to let any group act on its own authority, which rules out the last."
  },
  {
    id: 11506, section: "English",
    text: "Choose the word most similar in meaning to PRAGMATIC.",
    options: ["A) Idealistic", "B) Dogmatic", "C) Practical", "D) Hesitant"],
    answer: "C",
    explanation: "Pragmatic means dealing with things sensibly and realistically, i.e. practical."
  },
  {
    id: 11507, section: "English",
    text: "Choose the word most similar in meaning to EXACERBATE.",
    options: ["A) Exaggerate", "B) Alleviate", "C) Examine", "D) Aggravate"],
    answer: "D",
    explanation: "Exacerbate means to make a problem worse, i.e. aggravate. 'Alleviate' is its opposite; 'exaggerate' is a sound-alike trap."
  },
  {
    id: 11508, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to CANDID.",
    options: ["A) Frank", "B) Evasive", "C) Honest", "D) Outspoken"],
    answer: "B",
    explanation: "Candid means frank and open. Its opposite is evasive."
  },
  {
    id: 11509, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to EPHEMERAL.",
    options: ["A) Permanent", "B) Brief", "C) Transient", "D) Fleeting"],
    answer: "A",
    explanation: "Ephemeral means short-lived. Transient, fleeting and brief are synonyms; the opposite is permanent."
  },
  {
    id: 11510, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Neither the inspector nor his constables (A) / was present (B) / when the complaint (C) / was lodged. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "With 'neither … nor', the verb agrees with the nearer subject, 'constables' (plural). So 'was present' should be 'were present'."
  },
  {
    id: 11511, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Each of the candidates (A) / who appeared for the test (B) / have been asked to bring (C) / the admit card. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "'Each of' takes a singular verb, so 'have been asked' should be 'has been asked'."
  },
  {
    id: 11512, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Hardly had the patrol (A) / reached the spot (B) / than the culprits (C) / escaped. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "'Hardly' is followed by 'when', not 'than': 'Hardly had the patrol reached the spot when the culprits escaped.'"
  },
  {
    id: 11513, section: "English",
    text: "Fill in the blank: The accused was acquitted ______ all the charges.",
    options: ["A) from", "B) against", "C) off", "D) of"],
    answer: "D",
    explanation: "The correct collocation is 'acquitted of' a charge."
  },
  {
    id: 11514, section: "English",
    text: "Fill in the blank: Had he informed the police in time, the theft ______.",
    options: ["A) would prevent", "B) can be prevented", "C) could have been prevented", "D) could be prevented"],
    answer: "C",
    explanation: "This is a third conditional (past unreal): 'Had + past participle' takes 'could/would have + past participle'. The theft is acted upon, so the passive form is needed."
  },
  {
    id: 11515, section: "English",
    text: "Fill in the blank: The leader's speech was so ______ that even his critics were moved by it.",
    options: ["A) eloquent", "B) elusive", "C) loquacious", "D) verbose"],
    answer: "A",
    explanation: "'Eloquent' means fluent and persuasive, which fits 'moved'. 'Verbose' and 'loquacious' only mean wordy or talkative; 'elusive' means hard to grasp."
  },
  {
    id: 11516, section: "English",
    text: "Choose the correct meaning of the idiom: To turn a blind eye",
    options: ["A) To be jealous of someone", "B) To look at something very carefully", "C) To lose one's eyesight", "D) To deliberately ignore something wrong"],
    answer: "D",
    explanation: "To turn a blind eye is to pretend not to notice something, usually wrongdoing."
  },
  {
    id: 11517, section: "English",
    text: "Choose the correct meaning of the idiom: A red-letter day",
    options: ["A) A memorable and significant day", "B) A day of bad luck", "C) A day of danger", "D) A public holiday declared by the government"],
    answer: "A",
    explanation: "A red-letter day is a day that is pleasantly memorable or significant."
  },
  {
    id: 11518, section: "English",
    text: "Choose the one word for: The killing of one's own brother",
    options: ["A) Homicide", "B) Fratricide", "C) Regicide", "D) Patricide"],
    answer: "B",
    explanation: "Fratricide is the killing of a brother. Patricide is of a father, regicide of a king, and homicide of any human being."
  },
  {
    id: 11519, section: "English",
    text: "Choose the correct passive form of: Who has broken the seal?",
    options: ["A) By whom was the seal broken?", "B) Who has been broken the seal?", "C) By whom the seal has been broken?", "D) By whom has the seal been broken?"],
    answer: "D",
    explanation: "Present perfect interrogative with 'who' becomes 'By whom + has + object + been + V3?'."
  },
  {
    id: 11520, section: "English",
    text: "Choose the correct indirect speech: He said to me, \"Did you see the accident yesterday?\"",
    options: ["A) He asked me if I saw the accident yesterday.", "B) He asked me whether I have seen the accident the previous day.", "C) He asked me if I had seen the accident the previous day.", "D) He said to me if I had seen the accident the day before yesterday."],
    answer: "C",
    explanation: "Reporting verb 'asked'; 'if/whether'; past simple becomes past perfect; 'yesterday' becomes 'the previous day'."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: History of Goa
  // ════════════════════════════════════════════════════════════
  {
    id: 11521, section: "History of Goa",
    text: "Gopakapattana, the famous port-capital of the Kadambas of Goa, was situated on the banks of which river?",
    options: ["A) Mandovi", "B) Zuari", "C) Chapora", "D) Sal"],
    answer: "B",
    explanation: "Gopakapattana (present-day Goa Velha) was on the Zuari estuary. It was the Kadamba capital and a major centre of trade with Arab merchants."
  },
  {
    id: 11522, section: "History of Goa",
    text: "Afonso de Albuquerque finally captured Goa on 25 November 1510 from the forces of",
    options: ["A) the Marathas", "B) the Bahmani Sultanate", "C) the Adil Shahi Sultanate of Bijapur", "D) the Vijayanagara Empire"],
    answer: "C",
    explanation: "Goa was then held by the Adil Shahis of Bijapur. Albuquerque's first capture in March 1510 was reversed, and he retook the city on St. Catherine's Day, 25 November 1510."
  },
  {
    id: 11523, section: "History of Goa",
    text: "In which year was the Inquisition established in Goa?",
    options: ["A) 1542", "B) 1583", "C) 1612", "D) 1560"],
    answer: "D",
    explanation: "The Goa Inquisition was set up in 1560 and finally abolished in 1812. (1542 is the year St. Francis Xavier arrived in Goa.)"
  },
  {
    id: 11524, section: "History of Goa",
    text: "The Cuncolim Revolt, in which five Jesuit priests were killed by villagers resisting Portuguese religious and land policies, took place in",
    options: ["A) 1583", "B) 1563", "C) 1603", "D) 1654"],
    answer: "A",
    explanation: "The Cuncolim revolt took place in July 1583 in Salcete. The Portuguese later killed the chieftains in reprisal, and Cuncolim is remembered as an early Goan resistance against colonial rule."
  },
  {
    id: 11525, section: "History of Goa",
    text: "The Basilica of Bom Jesus at Old Goa, a UNESCO World Heritage monument, houses the mortal remains of",
    options: ["A) St. Joseph Vaz", "B) St. Francis Xavier", "C) St. Catherine", "D) St. Ignatius of Loyola"],
    answer: "B",
    explanation: "The Basilica of Bom Jesus holds the relics of St. Francis Xavier, which are exposed for public veneration roughly once every ten years."
  },
  {
    id: 11526, section: "History of Goa",
    text: "Which of the following talukas formed part of the 'Velhas Conquistas' (Old Conquests) of the Portuguese in Goa?",
    options: ["A) Ponda", "B) Bicholim", "C) Sattari", "D) Bardez"],
    answer: "D",
    explanation: "The Old Conquests were Tiswadi (Ilhas), Bardez, Salcete and Mormugao, acquired in the 16th century. Bicholim, Ponda and Sattari were among the 'Novas Conquistas' added in the 18th century."
  },
  {
    id: 11527, section: "History of Goa",
    text: "Arrange the following events of Goan history in chronological order:<br>1. Opinion Poll<br>2. Cuncolim Revolt<br>3. Conspiracy of the Pintos<br>4. Establishment of the Goa Inquisition",
    options: ["A) 4 → 2 → 1 → 3", "B) 4 → 2 → 3 → 1", "C) 2 → 4 → 3 → 1", "D) 2 → 4 → 1 → 3"],
    answer: "B",
    explanation: "Inquisition (1560), Cuncolim Revolt (1583), Pinto Conspiracy (1787), Opinion Poll (1967)."
  },
  {
    id: 11528, section: "History of Goa",
    text: "The first printing press in India was set up in Goa, at St. Paul's College, in the year",
    options: ["A) 1556", "B) 1600", "C) 1498", "D) 1510"],
    answer: "A",
    explanation: "The Jesuits installed the printing press at St. Paul's College, Old Goa, in 1556. It was the first in India."
  },
  {
    id: 11529, section: "History of Goa",
    text: "Dipaji Rane, who led a prolonged revolt against Portuguese rule beginning in 1852, belonged to which region of Goa?",
    options: ["A) Salcete", "B) Canacona", "C) Pernem", "D) Sattari"],
    answer: "D",
    explanation: "The Ranes of Sattari revolted several times in the 18th and 19th centuries. Dipaji Rane's revolt (1852–1855) forced the Portuguese to negotiate."
  },
  {
    id: 11530, section: "History of Goa",
    text: "On 18 June 1946, a civil disobedience movement against Portuguese rule was launched at Margao by",
    options: ["A) Dr. Ram Manohar Lohia", "B) Mohan Ranade", "C) Peter Alvares", "D) Tristao de Braganza Cunha"],
    answer: "A",
    explanation: "Dr. Ram Manohar Lohia defied the ban on public meetings at Margao on 18 June 1946. The day is observed as Goa Revolution Day."
  },
  {
    id: 11531, section: "History of Goa",
    text: "Who is regarded as the 'Father of Goan Nationalism'?",
    options: ["A) Jose Inacio de Loyola", "B) Luis de Menezes Braganza", "C) Tristao de Braganza Cunha", "D) Purushottam Kakodkar"],
    answer: "C",
    explanation: "T. B. Cunha founded the Goa Congress Committee in 1928 and wrote 'Denationalisation of Goans'. He is called the Father of Goan Nationalism."
  },
  {
    id: 11532, section: "History of Goa",
    text: "Which organisation, founded in 1947, adopted the path of armed struggle against Portuguese rule in Goa?",
    options: ["A) Goa Congress Committee", "B) National Congress (Goa)", "C) Azad Gomantak Dal", "D) Goa Vimochan Sahayak Samiti"],
    answer: "C",
    explanation: "The Azad Gomantak Dal (Vishwanath Lawande, Narayan Hari Naik, Prabhakar Sinari and others) carried out armed raids on Portuguese posts. The other organisations followed non-violent methods."
  },
  {
    id: 11533, section: "History of Goa",
    text: "During the satyagraha of 15 August 1955, Portuguese forces fired on unarmed satyagrahis entering Goa. Which of the following was among those martyred?",
    options: ["A) Peter Alvares", "B) Mohan Ranade", "C) Jagannathrao Joshi", "D) Karnail Singh Benipal"],
    answer: "D",
    explanation: "Karnail Singh Benipal of Punjab was killed in the firing on 15 August 1955. Jagannathrao Joshi led satyagraha batches and survived; Mohan Ranade was imprisoned in Portugal."
  },
  {
    id: 11534, section: "History of Goa",
    text: "Which Goan freedom fighter was imprisoned in Portugal and released only in 1969, several years after Goa's liberation?",
    options: ["A) Mohan Ranade", "B) Tristao de Braganza Cunha", "C) Dr. Ram Manohar Lohia", "D) Purushottam Kakodkar"],
    answer: "A",
    explanation: "Mohan Ranade was arrested in 1955, sentenced to long imprisonment and held in Portugal. He was released in January 1969."
  },
  {
    id: 11535, section: "History of Goa",
    text: "Under 'Operation Vijay' (December 1961), which Portuguese Governor-General signed the instrument of surrender in Goa?",
    options: ["A) Afonso de Albuquerque", "B) Manuel Antonio Vassalo e Silva", "C) Paulo Benard Guedes", "D) Francisco de Almeida"],
    answer: "B",
    explanation: "Governor-General Manuel Antonio Vassalo e Silva surrendered on 19 December 1961, ending about 451 years of Portuguese rule."
  },
  {
    id: 11536, section: "History of Goa",
    text: "Consider the following statements:<br>I. Dadra and Nagar Haveli were freed from Portuguese control in 1954.<br>II. After liberation, Goa, Daman and Diu was administered as a Union Territory.<br>III. Panaji was the capital of the Kadamba kingdom.<br>Which of the statements given above is/are correct?",
    options: ["A) I and II only", "B) II and III only", "C) I and III only", "D) I, II and III"],
    answer: "A",
    explanation: "I is correct (1954). II is correct (Union Territory from 1961/62 to 1987). III is wrong: the Kadamba capitals were Chandrapur (Chandor) and later Gopakapattana."
  },
  {
    id: 11537, section: "History of Goa",
    text: "Who was the first Chief Minister of the Union Territory of Goa, Daman and Diu?",
    options: ["A) Jack de Sequeira", "B) Dayanand Bandodkar", "C) Shashikala Kakodkar", "D) Pratapsingh Rane"],
    answer: "B",
    explanation: "Dayanand (Bhausaheb) Bandodkar of the Maharashtrawadi Gomantak Party became the first Chief Minister in December 1963."
  },
  {
    id: 11538, section: "History of Goa",
    text: "The Opinion Poll, in which the people of Goa voted against merger with Maharashtra, was held on",
    options: ["A) 30 May 1987", "B) 20 December 1963", "C) 19 December 1961", "D) 16 January 1967"],
    answer: "D",
    explanation: "The Opinion Poll on 16 January 1967 rejected the merger and preserved Goa's separate identity. Dr. Jack de Sequeira is associated with the anti-merger campaign."
  },
  {
    id: 11539, section: "History of Goa",
    text: "When Goa attained statehood on 30 May 1987, it became which state of the Indian Union?",
    options: ["A) 22nd", "B) 24th", "C) 26th", "D) 25th"],
    answer: "D",
    explanation: "The Goa, Daman and Diu Reorganisation Act, 1987 made Goa the 25th state. Daman and Diu remained a Union Territory."
  },
  {
    id: 11540, section: "History of Goa",
    text: "Konkani was included in the Eighth Schedule of the Constitution of India in the year",
    options: ["A) 1992", "B) 2003", "C) 1975", "D) 1987"],
    answer: "A",
    explanation: "The 71st Constitutional Amendment (1992) added Konkani, Manipuri and Nepali to the Eighth Schedule. (In 1987 Konkani was made Goa's official language.)"
  }
];
