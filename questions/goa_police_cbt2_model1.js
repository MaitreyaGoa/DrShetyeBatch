// Goa Police CBT-II Model Paper 1 | GSSC Advt. No. 2 of 2026 pattern
// 60 questions / 60 marks / 75 minutes / NO negative marking
// Reasoning 10 | Numerical Ability 10 | English Language & Comprehension 20 | General History of Goa 20
// answer = 0-based index into options
const goaPoliceCBT2Model1 = [
  {
    "id": "GPC2M1-01",
    "section": "Reasoning",
    "question": "Find the next term in the series: 3, 8, 27, 112, 565, ?",
    "options": [
      "3390",
      "3396",
      "3384",
      "3402"
    ],
    "answer": 1,
    "explanation": "Pattern: ×2+2, ×3+3, ×4+4, ×5+5, so the next step is ×6+6: 565×6 + 6 = 3396."
  },
  {
    "id": "GPC2M1-02",
    "section": "Reasoning",
    "question": "In a certain code, GOA is written as HQD. Following the same rule, how will POLICE be written?",
    "options": [
      "RQOJEH",
      "QPOJEH",
      "QQNJEG",
      "QQOJEH"
    ],
    "answer": 3,
    "explanation": "Letters are shifted by +1, +2, +3 and the cycle repeats. P+1=Q, O+2=Q, L+3=O, I+1=J, C+2=E, E+3=H, giving QQOJEH."
  },
  {
    "id": "GPC2M1-03",
    "section": "Reasoning",
    "question": "If 'A + B' means A is the mother of B, 'A − B' means A is the brother of B, 'A × B' means A is the father of B and 'A ÷ B' means A is the sister of B, which expression shows that P is the maternal uncle of Q?",
    "options": [
      "P ÷ R + Q",
      "P − R × Q",
      "P − R + Q",
      "P × R − Q"
    ],
    "answer": 2,
    "explanation": "P − R + Q: P is the brother of R and R is the mother of Q, so P is Q's mother's brother, i.e. maternal uncle. (P − R × Q makes P the paternal uncle; P ÷ R + Q makes P the maternal aunt; P × R − Q makes P the father.)"
  },
  {
    "id": "GPC2M1-04",
    "section": "Reasoning",
    "question": "A constable starts from the police station and walks 10 km North. He turns right and walks 6 km, turns right again and walks 18 km, then turns left and walks 9 km. How far and in which direction is he now from the police station?",
    "options": [
      "19 km, South-East",
      "17 km, North-East",
      "15 km, South-East",
      "17 km, South-East"
    ],
    "answer": 3,
    "explanation": "Coordinates: (0,10) → east 6 → (6,10) → south 18 → (6,−8) → left while facing south = east 9 → (15,−8). Distance = √(15²+8²) = 17 km, towards the South-East."
  },
  {
    "id": "GPC2M1-05",
    "section": "Reasoning",
    "question": "Six friends P, Q, R, S, T and U sit around a circular table facing the centre. P sits second to the right of R. Q sits immediately to the left of P. S is not an immediate neighbour of R. T sits opposite Q. Who sits opposite R?",
    "options": [
      "Q",
      "U",
      "S",
      "T"
    ],
    "answer": 2,
    "explanation": "Place R. P is second to R's right; Q is immediately to P's left; T is opposite Q. The two remaining seats are R's left neighbour and the seat opposite R. S cannot sit next to R, so S is opposite R and U sits to R's left."
  },
  {
    "id": "GPC2M1-06",
    "section": "Reasoning",
    "question": "Statements: All constables are officers. Some officers are graduates. No graduate is lazy.\nConclusions:\nI. Some constables are graduates.\nII. Some officers are not lazy.\nIII. No constable is lazy.",
    "options": [
      "None of the conclusions follows",
      "Only II follows",
      "Only I and II follow",
      "Only II and III follow"
    ],
    "answer": 1,
    "explanation": "The officers who are graduates cannot be lazy, so some officers are not lazy: II follows. Nothing links constables directly to graduates or to laziness, so I and III do not follow."
  },
  {
    "id": "GPC2M1-07",
    "section": "Reasoning",
    "question": "If 15 August 1947 was a Friday, what day of the week was 19 December 1961, the day Goa was liberated?",
    "options": [
      "Thursday",
      "Tuesday",
      "Wednesday",
      "Monday"
    ],
    "answer": 1,
    "explanation": "From 15-08-1947 to 15-08-1961 is 14 years with 4 leap years (1948, 52, 56, 60): 14+4 = 18 odd days = 4 odd days, so Friday+4 = Tuesday. From 15 Aug to 19 Dec 1961 is 16+30+31+30+19 = 126 days = 18 weeks exactly, so it is still Tuesday."
  },
  {
    "id": "GPC2M1-08",
    "section": "Reasoning",
    "question": "At what time between 4 o'clock and 5 o'clock will the hour and minute hands of a clock coincide?",
    "options": [
      "21 9/11 minutes past 4",
      "21 3/11 minutes past 4",
      "20 minutes past 4",
      "22 2/11 minutes past 4"
    ],
    "answer": 0,
    "explanation": "At 4:00 the minute hand is 20 minute-spaces behind. It gains 55/60 of a space each minute, so the time needed is 20 × 60/55 = 240/11 = 21 9/11 minutes."
  },
  {
    "id": "GPC2M1-09",
    "section": "Reasoning",
    "question": "Find the odd one out: 121, 169, 225, 289, 361",
    "options": [
      "289",
      "225",
      "361",
      "169"
    ],
    "answer": 1,
    "explanation": "121 = 11², 169 = 13², 289 = 17² and 361 = 19² are squares of prime numbers. 225 = 15², and 15 is not prime."
  },
  {
    "id": "GPC2M1-10",
    "section": "Reasoning",
    "question": "Statement: Goa Police has advised house-owners to submit tenant verification forms before renting out their premises.\nAssumptions:\nI. Verification of tenants may help in preventing crime.\nII. All tenants have a criminal background.",
    "options": [
      "Only assumption I is implicit",
      "Only assumption II is implicit",
      "Neither I nor II is implicit",
      "Both I and II are implicit"
    ],
    "answer": 0,
    "explanation": "The advisory makes sense only if verification helps prevent crime, so I is implicit. II is an extreme generalisation that the advisory does not need."
  },
  {
    "id": "GPC2M1-11",
    "section": "Numerical Ability",
    "question": "The price of petrol rises by 25%. By what percentage must a family reduce its consumption so that its expenditure on petrol stays the same?",
    "options": [
      "22.5%",
      "20%",
      "18%",
      "25%"
    ],
    "answer": 1,
    "explanation": "Reduction = 25/(100+25) × 100 = 20%."
  },
  {
    "id": "GPC2M1-12",
    "section": "Numerical Ability",
    "question": "A shopkeeper marks his goods 40% above the cost price and allows two successive discounts of 10% and 5%. What is his profit percentage?",
    "options": [
      "25%",
      "21%",
      "19.7%",
      "18.5%"
    ],
    "answer": 2,
    "explanation": "SP = 1.40 × 0.90 × 0.95 = 1.197 × CP, so the profit is 19.7%."
  },
  {
    "id": "GPC2M1-13",
    "section": "Numerical Ability",
    "question": "A can complete a work in 12 days and B in 18 days. They work together for 4 days, after which A leaves. In how many days will B finish the remaining work?",
    "options": [
      "9 days",
      "6 days",
      "8 days",
      "7 days"
    ],
    "answer": 2,
    "explanation": "Combined rate = 1/12 + 1/18 = 5/36 per day. In 4 days they do 20/36 = 5/9. Remaining 4/9 × 18 = 8 days."
  },
  {
    "id": "GPC2M1-14",
    "section": "Numerical Ability",
    "question": "A train 240 m long crosses a platform 360 m long in 30 seconds. What is the speed of the train?",
    "options": [
      "72 km/h",
      "54 km/h",
      "80 km/h",
      "64.8 km/h"
    ],
    "answer": 0,
    "explanation": "Distance = 240 + 360 = 600 m. Speed = 600/30 = 20 m/s = 20 × 18/5 = 72 km/h."
  },
  {
    "id": "GPC2M1-15",
    "section": "Numerical Ability",
    "question": "What is the difference between compound interest and simple interest on ₹16,000 for 2 years at 10% per annum?",
    "options": [
      "₹160",
      "₹180",
      "₹150",
      "₹1,600"
    ],
    "answer": 0,
    "explanation": "For 2 years, CI − SI = P(r/100)² = 16000 × (0.1)² = ₹160."
  },
  {
    "id": "GPC2M1-16",
    "section": "Numerical Ability",
    "question": "The average of 11 results is 50. The average of the first six results is 49 and that of the last six is 52. What is the sixth result?",
    "options": [
      "58",
      "54",
      "56",
      "50"
    ],
    "answer": 2,
    "explanation": "The sixth result is counted in both groups: 6×49 + 6×52 − 11×50 = 294 + 312 − 550 = 56."
  },
  {
    "id": "GPC2M1-17",
    "section": "Numerical Ability",
    "question": "A 60-litre mixture contains milk and water in the ratio 7 : 3. How much water must be added to make the ratio 3 : 2?",
    "options": [
      "15 litres",
      "8 litres",
      "12 litres",
      "10 litres"
    ],
    "answer": 3,
    "explanation": "Milk = 42 L, water = 18 L. 42/(18 + x) = 3/2 gives 84 = 54 + 3x, so x = 10 litres."
  },
  {
    "id": "GPC2M1-18",
    "section": "Numerical Ability",
    "question": "What is the least number which, when divided by 12, 15, 20 and 54, leaves a remainder of 8 in each case?",
    "options": [
      "540",
      "548",
      "1088",
      "268"
    ],
    "answer": 1,
    "explanation": "LCM(12, 15, 20, 54) = 540. Required number = 540 + 8 = 548."
  },
  {
    "id": "GPC2M1-19",
    "section": "Numerical Ability",
    "question": "The present ages of a father and his son are in the ratio 7 : 2. After 10 years the ratio will be 9 : 4. What is the father's present age?",
    "options": [
      "35 years",
      "42 years",
      "49 years",
      "28 years"
    ],
    "answer": 0,
    "explanation": "(7x + 10)/(2x + 10) = 9/4 gives 28x + 40 = 18x + 90, so x = 5. Father = 35 years."
  },
  {
    "id": "GPC2M1-20",
    "section": "Numerical Ability",
    "question": "Pipes A and B can fill a tank in 20 minutes and 30 minutes respectively, while pipe C can empty the full tank in 15 minutes. If all three are opened together, in how much time will the empty tank be filled?",
    "options": [
      "60 minutes",
      "50 minutes",
      "75 minutes",
      "45 minutes"
    ],
    "answer": 0,
    "explanation": "Net rate = 1/20 + 1/30 − 1/15 = (3 + 2 − 4)/60 = 1/60, so the tank fills in 60 minutes."
  },
  {
    "id": "GPC2M1-21",
    "section": "English Language & Comprehension",
    "question": "Read the passage and answer the question.\n\nPolicing in a small coastal state presents a paradox. On the one hand, the compact geography allows a modest force to respond quickly; on the other, a tourist population that swells several-fold during the season stretches every resource to its limit. Traditional policing, built around the police station and the patrol vehicle, treats the citizen largely as a complainant — someone who arrives after the harm is done. Community policing inverts this relationship. It assumes that residents, shopkeepers, fishermen and hoteliers are not merely sources of information but partners in prevention, because they notice the small irregularities — an unfamiliar boat at dawn, a rented room that is never occupied — long before these crystallise into crime.\n\nCritics argue that such partnerships blur accountability and may encourage vigilantism. The objection is not frivolous. A neighbourhood committee that confuses suspicion with evidence can do as much damage as the crime it seeks to prevent. The answer, however, lies not in abandoning the model but in disciplining it: clear protocols on what citizens may report, a duty on the police to respond, and a refusal to let any group act on its own authority. Trust, after all, is not a by-product of policing; it is its precondition. A force that is trusted hears early; a force that is feared hears late, if at all.\n\nQ. Which of the following best expresses the central idea of the passage?",
    "options": [
      "Tourism is the main cause of crime in small coastal states",
      "Neighbourhood committees should be empowered to act independently against suspects",
      "Community policing, if properly regulated, strengthens crime prevention by treating citizens as partners",
      "Traditional policing based on police stations has completely failed in coastal states"
    ],
    "answer": 2,
    "explanation": "The author defends community policing while admitting its risks, and argues that it should be 'disciplined', not abandoned."
  },
  {
    "id": "GPC2M1-22",
    "section": "English Language & Comprehension",
    "question": "Read the passage and answer the question.\n\nPolicing in a small coastal state presents a paradox. On the one hand, the compact geography allows a modest force to respond quickly; on the other, a tourist population that swells several-fold during the season stretches every resource to its limit. Traditional policing, built around the police station and the patrol vehicle, treats the citizen largely as a complainant — someone who arrives after the harm is done. Community policing inverts this relationship. It assumes that residents, shopkeepers, fishermen and hoteliers are not merely sources of information but partners in prevention, because they notice the small irregularities — an unfamiliar boat at dawn, a rented room that is never occupied — long before these crystallise into crime.\n\nCritics argue that such partnerships blur accountability and may encourage vigilantism. The objection is not frivolous. A neighbourhood committee that confuses suspicion with evidence can do as much damage as the crime it seeks to prevent. The answer, however, lies not in abandoning the model but in disciplining it: clear protocols on what citizens may report, a duty on the police to respond, and a refusal to let any group act on its own authority. Trust, after all, is not a by-product of policing; it is its precondition. A force that is trusted hears early; a force that is feared hears late, if at all.\n\nQ. The 'paradox' mentioned in the first sentence refers to the fact that",
    "options": [
      "the police are feared and trusted at the same time",
      "a small force has to police a large and sparsely populated state",
      "citizens report crimes only after the harm is done",
      "a compact geography aids quick response, while the seasonal tourist influx strains resources"
    ],
    "answer": 3,
    "explanation": "The next sentence explains it: compact geography helps ('on the one hand') but the swelling tourist population stretches resources ('on the other')."
  },
  {
    "id": "GPC2M1-23",
    "section": "English Language & Comprehension",
    "question": "Read the passage and answer the question.\n\nPolicing in a small coastal state presents a paradox. On the one hand, the compact geography allows a modest force to respond quickly; on the other, a tourist population that swells several-fold during the season stretches every resource to its limit. Traditional policing, built around the police station and the patrol vehicle, treats the citizen largely as a complainant — someone who arrives after the harm is done. Community policing inverts this relationship. It assumes that residents, shopkeepers, fishermen and hoteliers are not merely sources of information but partners in prevention, because they notice the small irregularities — an unfamiliar boat at dawn, a rented room that is never occupied — long before these crystallise into crime.\n\nCritics argue that such partnerships blur accountability and may encourage vigilantism. The objection is not frivolous. A neighbourhood committee that confuses suspicion with evidence can do as much damage as the crime it seeks to prevent. The answer, however, lies not in abandoning the model but in disciplining it: clear protocols on what citizens may report, a duty on the police to respond, and a refusal to let any group act on its own authority. Trust, after all, is not a by-product of policing; it is its precondition. A force that is trusted hears early; a force that is feared hears late, if at all.\n\nQ. According to the passage, critics object to community policing because it",
    "options": [
      "is too expensive for a small state",
      "ignores the role of tourists in crime",
      "may blur accountability and encourage vigilantism",
      "makes the police lazy and dependent on citizens"
    ],
    "answer": 2,
    "explanation": "This is stated directly: 'Critics argue that such partnerships blur accountability and may encourage vigilantism.'"
  },
  {
    "id": "GPC2M1-24",
    "section": "English Language & Comprehension",
    "question": "Read the passage and answer the question.\n\nPolicing in a small coastal state presents a paradox. On the one hand, the compact geography allows a modest force to respond quickly; on the other, a tourist population that swells several-fold during the season stretches every resource to its limit. Traditional policing, built around the police station and the patrol vehicle, treats the citizen largely as a complainant — someone who arrives after the harm is done. Community policing inverts this relationship. It assumes that residents, shopkeepers, fishermen and hoteliers are not merely sources of information but partners in prevention, because they notice the small irregularities — an unfamiliar boat at dawn, a rented room that is never occupied — long before these crystallise into crime.\n\nCritics argue that such partnerships blur accountability and may encourage vigilantism. The objection is not frivolous. A neighbourhood committee that confuses suspicion with evidence can do as much damage as the crime it seeks to prevent. The answer, however, lies not in abandoning the model but in disciplining it: clear protocols on what citizens may report, a duty on the police to respond, and a refusal to let any group act on its own authority. Trust, after all, is not a by-product of policing; it is its precondition. A force that is trusted hears early; a force that is feared hears late, if at all.\n\nQ. The word 'crystallise', as used in the passage, most nearly means",
    "options": [
      "become transparent",
      "take a definite form",
      "be forgotten",
      "dissolve completely"
    ],
    "answer": 1,
    "explanation": "Small irregularities are noticed before they 'crystallise into crime', i.e. before they take a definite shape as crime."
  },
  {
    "id": "GPC2M1-25",
    "section": "English Language & Comprehension",
    "question": "Read the passage and answer the question.\n\nPolicing in a small coastal state presents a paradox. On the one hand, the compact geography allows a modest force to respond quickly; on the other, a tourist population that swells several-fold during the season stretches every resource to its limit. Traditional policing, built around the police station and the patrol vehicle, treats the citizen largely as a complainant — someone who arrives after the harm is done. Community policing inverts this relationship. It assumes that residents, shopkeepers, fishermen and hoteliers are not merely sources of information but partners in prevention, because they notice the small irregularities — an unfamiliar boat at dawn, a rented room that is never occupied — long before these crystallise into crime.\n\nCritics argue that such partnerships blur accountability and may encourage vigilantism. The objection is not frivolous. A neighbourhood committee that confuses suspicion with evidence can do as much damage as the crime it seeks to prevent. The answer, however, lies not in abandoning the model but in disciplining it: clear protocols on what citizens may report, a duty on the police to respond, and a refusal to let any group act on its own authority. Trust, after all, is not a by-product of policing; it is its precondition. A force that is trusted hears early; a force that is feared hears late, if at all.\n\nQ. Which of the following can be inferred from the passage?",
    "options": [
      "Fishermen are the most reliable informants of the police",
      "Citizens should be allowed to detain suspicious persons",
      "Most crimes in coastal states are committed by tourists",
      "A police force that enjoys public trust is more likely to receive timely information"
    ],
    "answer": 3,
    "explanation": "'A force that is trusted hears early' supports the first option. The passage refuses to let any group act on its own authority, which rules out the last."
  },
  {
    "id": "GPC2M1-26",
    "section": "English Language & Comprehension",
    "question": "Choose the word most similar in meaning to PRAGMATIC.",
    "options": [
      "Idealistic",
      "Dogmatic",
      "Practical",
      "Hesitant"
    ],
    "answer": 2,
    "explanation": "Pragmatic means dealing with things sensibly and realistically, i.e. practical."
  },
  {
    "id": "GPC2M1-27",
    "section": "English Language & Comprehension",
    "question": "Choose the word most similar in meaning to EXACERBATE.",
    "options": [
      "Exaggerate",
      "Alleviate",
      "Examine",
      "Aggravate"
    ],
    "answer": 3,
    "explanation": "Exacerbate means to make a problem worse, i.e. aggravate. 'Alleviate' is its opposite; 'exaggerate' is a sound-alike trap."
  },
  {
    "id": "GPC2M1-28",
    "section": "English Language & Comprehension",
    "question": "Choose the word most nearly OPPOSITE in meaning to CANDID.",
    "options": [
      "Frank",
      "Evasive",
      "Honest",
      "Outspoken"
    ],
    "answer": 1,
    "explanation": "Candid means frank and open. Its opposite is evasive."
  },
  {
    "id": "GPC2M1-29",
    "section": "English Language & Comprehension",
    "question": "Choose the word most nearly OPPOSITE in meaning to EPHEMERAL.",
    "options": [
      "Permanent",
      "Brief",
      "Transient",
      "Fleeting"
    ],
    "answer": 0,
    "explanation": "Ephemeral means short-lived. Transient, fleeting and brief are synonyms; the opposite is permanent."
  },
  {
    "id": "GPC2M1-30",
    "section": "English Language & Comprehension",
    "question": "Identify the part of the sentence that contains an error:\nNeither the inspector nor his constables (A) / was present (B) / when the complaint (C) / was lodged. (D)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "With 'neither … nor', the verb agrees with the nearer subject, 'constables' (plural). So 'was present' should be 'were present'."
  },
  {
    "id": "GPC2M1-31",
    "section": "English Language & Comprehension",
    "question": "Identify the part of the sentence that contains an error:\nEach of the candidates (A) / who appeared for the test (B) / have been asked to bring (C) / the admit card. (D)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "'Each of' takes a singular verb, so 'have been asked' should be 'has been asked'."
  },
  {
    "id": "GPC2M1-32",
    "section": "English Language & Comprehension",
    "question": "Identify the part of the sentence that contains an error:\nHardly had the patrol (A) / reached the spot (B) / than the culprits (C) / escaped. (D)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "'Hardly' is followed by 'when', not 'than': 'Hardly had the patrol reached the spot when the culprits escaped.'"
  },
  {
    "id": "GPC2M1-33",
    "section": "English Language & Comprehension",
    "question": "Fill in the blank: The accused was acquitted ______ all the charges.",
    "options": [
      "from",
      "against",
      "off",
      "of"
    ],
    "answer": 3,
    "explanation": "The correct collocation is 'acquitted of' a charge."
  },
  {
    "id": "GPC2M1-34",
    "section": "English Language & Comprehension",
    "question": "Fill in the blank: Had he informed the police in time, the theft ______.",
    "options": [
      "would prevent",
      "can be prevented",
      "could have been prevented",
      "could be prevented"
    ],
    "answer": 2,
    "explanation": "This is a third conditional (past unreal): 'Had + past participle' takes 'could/would have + past participle'. The theft is acted upon, so the passive form is needed."
  },
  {
    "id": "GPC2M1-35",
    "section": "English Language & Comprehension",
    "question": "Fill in the blank: The leader's speech was so ______ that even his critics were moved by it.",
    "options": [
      "eloquent",
      "elusive",
      "loquacious",
      "verbose"
    ],
    "answer": 0,
    "explanation": "'Eloquent' means fluent and persuasive, which fits 'moved'. 'Verbose' and 'loquacious' only mean wordy or talkative; 'elusive' means hard to grasp."
  },
  {
    "id": "GPC2M1-36",
    "section": "English Language & Comprehension",
    "question": "Choose the correct meaning of the idiom: To turn a blind eye",
    "options": [
      "To be jealous of someone",
      "To look at something very carefully",
      "To lose one's eyesight",
      "To deliberately ignore something wrong"
    ],
    "answer": 3,
    "explanation": "To turn a blind eye is to pretend not to notice something, usually wrongdoing."
  },
  {
    "id": "GPC2M1-37",
    "section": "English Language & Comprehension",
    "question": "Choose the correct meaning of the idiom: A red-letter day",
    "options": [
      "A memorable and significant day",
      "A day of bad luck",
      "A day of danger",
      "A public holiday declared by the government"
    ],
    "answer": 0,
    "explanation": "A red-letter day is a day that is pleasantly memorable or significant."
  },
  {
    "id": "GPC2M1-38",
    "section": "English Language & Comprehension",
    "question": "Choose the one word for: The killing of one's own brother",
    "options": [
      "Homicide",
      "Fratricide",
      "Regicide",
      "Patricide"
    ],
    "answer": 1,
    "explanation": "Fratricide is the killing of a brother. Patricide is of a father, regicide of a king, and homicide of any human being."
  },
  {
    "id": "GPC2M1-39",
    "section": "English Language & Comprehension",
    "question": "Choose the correct passive form of: Who has broken the seal?",
    "options": [
      "By whom was the seal broken?",
      "Who has been broken the seal?",
      "By whom the seal has been broken?",
      "By whom has the seal been broken?"
    ],
    "answer": 3,
    "explanation": "Present perfect interrogative with 'who' becomes 'By whom + has + object + been + V3?'."
  },
  {
    "id": "GPC2M1-40",
    "section": "English Language & Comprehension",
    "question": "Choose the correct indirect speech: He said to me, \"Did you see the accident yesterday?\"",
    "options": [
      "He asked me if I saw the accident yesterday.",
      "He asked me whether I have seen the accident the previous day.",
      "He asked me if I had seen the accident the previous day.",
      "He said to me if I had seen the accident the day before yesterday."
    ],
    "answer": 2,
    "explanation": "Reporting verb 'asked'; 'if/whether'; past simple becomes past perfect; 'yesterday' becomes 'the previous day'."
  },
  {
    "id": "GPC2M1-41",
    "section": "General History of Goa",
    "question": "Gopakapattana, the famous port-capital of the Kadambas of Goa, was situated on the banks of which river?",
    "options": [
      "Mandovi",
      "Zuari",
      "Chapora",
      "Sal"
    ],
    "answer": 1,
    "explanation": "Gopakapattana (present-day Goa Velha) was on the Zuari estuary. It was the Kadamba capital and a major centre of trade with Arab merchants."
  },
  {
    "id": "GPC2M1-42",
    "section": "General History of Goa",
    "question": "Afonso de Albuquerque finally captured Goa on 25 November 1510 from the forces of",
    "options": [
      "the Marathas",
      "the Bahmani Sultanate",
      "the Adil Shahi Sultanate of Bijapur",
      "the Vijayanagara Empire"
    ],
    "answer": 2,
    "explanation": "Goa was then held by the Adil Shahis of Bijapur. Albuquerque's first capture in March 1510 was reversed, and he retook the city on St. Catherine's Day, 25 November 1510."
  },
  {
    "id": "GPC2M1-43",
    "section": "General History of Goa",
    "question": "In which year was the Inquisition established in Goa?",
    "options": [
      "1542",
      "1583",
      "1612",
      "1560"
    ],
    "answer": 3,
    "explanation": "The Goa Inquisition was set up in 1560 and finally abolished in 1812. (1542 is the year St. Francis Xavier arrived in Goa.)"
  },
  {
    "id": "GPC2M1-44",
    "section": "General History of Goa",
    "question": "The Cuncolim Revolt, in which five Jesuit priests were killed by villagers resisting Portuguese religious and land policies, took place in",
    "options": [
      "1583",
      "1563",
      "1603",
      "1654"
    ],
    "answer": 0,
    "explanation": "The Cuncolim revolt took place in July 1583 in Salcete. The Portuguese later killed the chieftains in reprisal, and Cuncolim is remembered as an early Goan resistance against colonial rule."
  },
  {
    "id": "GPC2M1-45",
    "section": "General History of Goa",
    "question": "The Basilica of Bom Jesus at Old Goa, a UNESCO World Heritage monument, houses the mortal remains of",
    "options": [
      "St. Joseph Vaz",
      "St. Francis Xavier",
      "St. Catherine",
      "St. Ignatius of Loyola"
    ],
    "answer": 1,
    "explanation": "The Basilica of Bom Jesus holds the relics of St. Francis Xavier, which are exposed for public veneration roughly once every ten years."
  },
  {
    "id": "GPC2M1-46",
    "section": "General History of Goa",
    "question": "Which of the following talukas formed part of the 'Velhas Conquistas' (Old Conquests) of the Portuguese in Goa?",
    "options": [
      "Ponda",
      "Bicholim",
      "Sattari",
      "Bardez"
    ],
    "answer": 3,
    "explanation": "The Old Conquests were Tiswadi (Ilhas), Bardez, Salcete and Mormugao, acquired in the 16th century. Bicholim, Ponda and Sattari were among the 'Novas Conquistas' added in the 18th century."
  },
  {
    "id": "GPC2M1-47",
    "section": "General History of Goa",
    "question": "Arrange the following events of Goan history in chronological order:\n1. Opinion Poll\n2. Cuncolim Revolt\n3. Conspiracy of the Pintos\n4. Establishment of the Goa Inquisition",
    "options": [
      "4 → 2 → 1 → 3",
      "4 → 2 → 3 → 1",
      "2 → 4 → 3 → 1",
      "2 → 4 → 1 → 3"
    ],
    "answer": 1,
    "explanation": "Inquisition (1560), Cuncolim Revolt (1583), Pinto Conspiracy (1787), Opinion Poll (1967)."
  },
  {
    "id": "GPC2M1-48",
    "section": "General History of Goa",
    "question": "The first printing press in India was set up in Goa, at St. Paul's College, in the year",
    "options": [
      "1556",
      "1600",
      "1498",
      "1510"
    ],
    "answer": 0,
    "explanation": "The Jesuits installed the printing press at St. Paul's College, Old Goa, in 1556. It was the first in India."
  },
  {
    "id": "GPC2M1-49",
    "section": "General History of Goa",
    "question": "Dipaji Rane, who led a prolonged revolt against Portuguese rule beginning in 1852, belonged to which region of Goa?",
    "options": [
      "Salcete",
      "Canacona",
      "Pernem",
      "Sattari"
    ],
    "answer": 3,
    "explanation": "The Ranes of Sattari revolted several times in the 18th and 19th centuries. Dipaji Rane's revolt (1852–1855) forced the Portuguese to negotiate."
  },
  {
    "id": "GPC2M1-50",
    "section": "General History of Goa",
    "question": "On 18 June 1946, a civil disobedience movement against Portuguese rule was launched at Margao by",
    "options": [
      "Dr. Ram Manohar Lohia",
      "Mohan Ranade",
      "Peter Alvares",
      "Tristao de Braganza Cunha"
    ],
    "answer": 0,
    "explanation": "Dr. Ram Manohar Lohia defied the ban on public meetings at Margao on 18 June 1946. The day is observed as Goa Revolution Day."
  },
  {
    "id": "GPC2M1-51",
    "section": "General History of Goa",
    "question": "Who is regarded as the 'Father of Goan Nationalism'?",
    "options": [
      "Jose Inacio de Loyola",
      "Luis de Menezes Braganza",
      "Tristao de Braganza Cunha",
      "Purushottam Kakodkar"
    ],
    "answer": 2,
    "explanation": "T. B. Cunha founded the Goa Congress Committee in 1928 and wrote 'Denationalisation of Goans'. He is called the Father of Goan Nationalism."
  },
  {
    "id": "GPC2M1-52",
    "section": "General History of Goa",
    "question": "Which organisation, founded in 1947, adopted the path of armed struggle against Portuguese rule in Goa?",
    "options": [
      "Goa Congress Committee",
      "National Congress (Goa)",
      "Azad Gomantak Dal",
      "Goa Vimochan Sahayak Samiti"
    ],
    "answer": 2,
    "explanation": "The Azad Gomantak Dal (Vishwanath Lawande, Narayan Hari Naik, Prabhakar Sinari and others) carried out armed raids on Portuguese posts. The other organisations followed non-violent methods."
  },
  {
    "id": "GPC2M1-53",
    "section": "General History of Goa",
    "question": "During the satyagraha of 15 August 1955, Portuguese forces fired on unarmed satyagrahis entering Goa. Which of the following was among those martyred?",
    "options": [
      "Peter Alvares",
      "Mohan Ranade",
      "Jagannathrao Joshi",
      "Karnail Singh Benipal"
    ],
    "answer": 3,
    "explanation": "Karnail Singh Benipal of Punjab was killed in the firing on 15 August 1955. Jagannathrao Joshi led satyagraha batches and survived; Mohan Ranade was imprisoned in Portugal."
  },
  {
    "id": "GPC2M1-54",
    "section": "General History of Goa",
    "question": "Which Goan freedom fighter was imprisoned in Portugal and released only in 1969, several years after Goa's liberation?",
    "options": [
      "Mohan Ranade",
      "Tristao de Braganza Cunha",
      "Dr. Ram Manohar Lohia",
      "Purushottam Kakodkar"
    ],
    "answer": 0,
    "explanation": "Mohan Ranade was arrested in 1955, sentenced to long imprisonment and held in Portugal. He was released in January 1969."
  },
  {
    "id": "GPC2M1-55",
    "section": "General History of Goa",
    "question": "Under 'Operation Vijay' (December 1961), which Portuguese Governor-General signed the instrument of surrender in Goa?",
    "options": [
      "Afonso de Albuquerque",
      "Manuel Antonio Vassalo e Silva",
      "Paulo Benard Guedes",
      "Francisco de Almeida"
    ],
    "answer": 1,
    "explanation": "Governor-General Manuel Antonio Vassalo e Silva surrendered on 19 December 1961, ending about 451 years of Portuguese rule."
  },
  {
    "id": "GPC2M1-56",
    "section": "General History of Goa",
    "question": "Consider the following statements:\nI. Dadra and Nagar Haveli were freed from Portuguese control in 1954.\nII. After liberation, Goa, Daman and Diu was administered as a Union Territory.\nIII. Panaji was the capital of the Kadamba kingdom.\nWhich of the statements given above is/are correct?",
    "options": [
      "I and II only",
      "II and III only",
      "I and III only",
      "I, II and III"
    ],
    "answer": 0,
    "explanation": "I is correct (1954). II is correct (Union Territory from 1961/62 to 1987). III is wrong: the Kadamba capitals were Chandrapur (Chandor) and later Gopakapattana."
  },
  {
    "id": "GPC2M1-57",
    "section": "General History of Goa",
    "question": "Who was the first Chief Minister of the Union Territory of Goa, Daman and Diu?",
    "options": [
      "Jack de Sequeira",
      "Dayanand Bandodkar",
      "Shashikala Kakodkar",
      "Pratapsingh Rane"
    ],
    "answer": 1,
    "explanation": "Dayanand (Bhausaheb) Bandodkar of the Maharashtrawadi Gomantak Party became the first Chief Minister in December 1963."
  },
  {
    "id": "GPC2M1-58",
    "section": "General History of Goa",
    "question": "The Opinion Poll, in which the people of Goa voted against merger with Maharashtra, was held on",
    "options": [
      "30 May 1987",
      "20 December 1963",
      "19 December 1961",
      "16 January 1967"
    ],
    "answer": 3,
    "explanation": "The Opinion Poll on 16 January 1967 rejected the merger and preserved Goa's separate identity. Dr. Jack de Sequeira is associated with the anti-merger campaign."
  },
  {
    "id": "GPC2M1-59",
    "section": "General History of Goa",
    "question": "When Goa attained statehood on 30 May 1987, it became which state of the Indian Union?",
    "options": [
      "22nd",
      "24th",
      "26th",
      "25th"
    ],
    "answer": 3,
    "explanation": "The Goa, Daman and Diu Reorganisation Act, 1987 made Goa the 25th state. Daman and Diu remained a Union Territory."
  },
  {
    "id": "GPC2M1-60",
    "section": "General History of Goa",
    "question": "Konkani was included in the Eighth Schedule of the Constitution of India in the year",
    "options": [
      "1992",
      "2003",
      "1975",
      "1987"
    ],
    "answer": 0,
    "explanation": "The 71st Constitutional Amendment (1992) added Konkani, Manipuri and Nepali to the Eighth Schedule. (In 1987 Konkani was made Goa's official language.)"
  }
];
if (typeof module !== 'undefined') module.exports = goaPoliceCBT2Model1;
