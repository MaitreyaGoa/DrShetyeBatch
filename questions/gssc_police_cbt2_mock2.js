// gssc_police_cbt2_mock2.js – Dr Shetye Academic Programme
// CBT 2 Goa Police Mock 2 · GSSC Advt. No. 2 of 2026 pattern (Police Constable CBT-II)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 11541–11600
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 (RC Q21–25) | History of Goa Q41–60

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Few crimes have adapted to technology as quickly as fraud. The confidence trickster of an earlier age needed a crowded market and a persuasive voice; his modern successor needs only a mobile number and a few minutes of a victim's attention. A message announcing a frozen bank account, a caller posing as a courier agent, a link promising a refund — each relies less on technical skill than on a precise understanding of human anxiety. Urgency is the fraudster's most dependable weapon, because a frightened person rarely pauses to verify.\n\nIt is tempting to treat the victims of such fraud as careless or ignorant. The evidence suggests otherwise. Retired professionals, students and even bank employees have been deceived, not because they lacked intelligence but because the deception was designed to bypass deliberate thought. This is why awareness campaigns that merely list do's and don'ts have limited effect. People who know the rules still break them under pressure.\n\nA more durable defence lies in habits rather than information: a reflexive pause before any payment, a rule never to share a one-time password, and the confidence to disconnect a call and verify independently. Equally important is reporting. Many victims stay silent out of embarrassment, and their silence allows the same script to be used again on someone else. Every complaint, however small, adds a piece to the picture investigators need."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 11541, section: "Reasoning",
    text: "Find the next term in the series: 4, 9, 25, 49, 121, ?",
    options: ["A) 196", "B) 225", "C) 169", "D) 144"],
    answer: "C",
    explanation: "The terms are squares of consecutive prime numbers: 2², 3², 5², 7², 11², so the next is 13² = 169."
  },
  {
    id: 11542, section: "Reasoning",
    text: "Find the next term in the series: AZ, CX, FU, JQ, ?",
    options: ["A) OL", "B) NL", "C) PL", "D) OK"],
    answer: "A",
    explanation: "First letters: A(1) +2 = C, +3 = F, +4 = J, +5 = O. Second letters: Z(26) −2 = X, −3 = U, −4 = Q, −5 = L. Answer: OL."
  },
  {
    id: 11543, section: "Reasoning",
    text: "In a certain code, FRIEND is written as HUMJTK. How will CANDLE be written in that code?",
    options: ["A) FDRIRL", "B) EDRJRL", "C) EDQIRL", "D) EDRIRL"],
    answer: "D",
    explanation: "The letters are shifted by +2, +3, +4, +5, +6, +7 in order. C+2=E, A+3=D, N+4=R, D+5=I, L+6=R, E+7=L, giving EDRIRL."
  },
  {
    id: 11544, section: "Reasoning",
    text: "A is the sister of B. C is the mother of B. D is the father of C. E is the mother of D. How is A related to D?",
    options: ["A) Daughter", "B) Great-granddaughter", "C) Grandmother", "D) Granddaughter"],
    answer: "D",
    explanation: "A and B are children of C, and C is D's child. So A is D's granddaughter. (E is D's mother and does not affect the answer.)"
  },
  {
    id: 11545, section: "Reasoning",
    text: "In a row of 40 students, Ravi is 12th from the left end and Sunil is 18th from the right end. How many students sit between Ravi and Sunil?",
    options: ["A) 9", "B) 12", "C) 10", "D) 11"],
    answer: "C",
    explanation: "Sunil's position from the left = 40 − 18 + 1 = 23. Students between = 23 − 12 − 1 = 10."
  },
  {
    id: 11546, section: "Reasoning",
    text: "One morning after sunrise, a constable was standing facing a flag-pole. The shadow of the pole fell exactly to his right. Which direction was he facing?",
    options: ["A) South", "B) East", "C) North", "D) West"],
    answer: "A",
    explanation: "In the morning the sun is in the East, so shadows fall towards the West. If West is on his right, he is facing South."
  },
  {
    id: 11547, section: "Reasoning",
    text: "Statements: Some pens are books. All books are tables. No table is a chair.<br>Conclusions:<br>I. Some pens are tables.<br>II. No book is a chair.<br>III. All tables are books.",
    options: ["A) Only I follows", "B) All I, II and III follow", "C) Only I and II follow", "D) Only II and III follow"],
    answer: "C",
    explanation: "The pens that are books are also tables, so I follows. All books are tables and no table is a chair, so no book is a chair: II follows. 'All books are tables' does not reverse into 'all tables are books', so III does not follow."
  },
  {
    id: 11548, section: "Reasoning",
    text: "Study the pattern and find the missing number:<br>Row 1: 3, 4, 25<br>Row 2: 5, 12, 169<br>Row 3: 6, 8, ?",
    options: ["A) 110", "B) 96", "C) 64", "D) 100"],
    answer: "D",
    explanation: "Third number = (first)² + (second)². 3²+4² = 25, 5²+12² = 169, 6²+8² = 36+64 = 100."
  },
  {
    id: 11549, section: "Reasoning",
    text: "A cube painted red on all faces is cut into 64 identical smaller cubes. How many of the smaller cubes have exactly two faces painted?",
    options: ["A) 8", "B) 32", "C) 24", "D) 16"],
    answer: "C",
    explanation: "64 = 4×4×4, so n = 4. Cubes with exactly two painted faces lie on the edges, excluding corners: 12 × (n − 2) = 12 × 2 = 24."
  },
  {
    id: 11550, section: "Reasoning",
    text: "Statement: More than 70% of the road accidents in the state last year involved two-wheelers, and most of the victims were not wearing helmets.<br>Conclusions:<br>I. Wearing helmets may reduce fatalities in two-wheeler accidents.<br>II. Four-wheelers are never involved in road accidents.",
    options: ["A) Both I and II follow", "B) Neither I nor II follows", "C) Only conclusion II follows", "D) Only conclusion I follows"],
    answer: "D",
    explanation: "Linking helmet non-use with victims supports I. II contradicts the statement, since 30% of accidents involved other vehicles."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 11551, section: "Numerical Ability",
    text: "The population of a town is 50,000. It increases by 10% in the first year and decreases by 10% in the second year. What is the population after two years?",
    options: ["A) 50,000", "B) 49,500", "C) 49,000", "D) 50,500"],
    answer: "B",
    explanation: "50,000 × 1.10 × 0.90 = 49,500. (+x% then −x% always gives a net loss of x²/100 % = 1%.)"
  },
  {
    id: 11552, section: "Numerical Ability",
    text: "By selling an article for ₹720, a man loses 10%. At what price should he sell it to gain 15%?",
    options: ["A) ₹900", "B) ₹940", "C) ₹920", "D) ₹880"],
    answer: "C",
    explanation: "CP = 720/0.90 = ₹800. Required SP = 800 × 1.15 = ₹920."
  },
  {
    id: 11553, section: "Numerical Ability",
    text: "A boat covers 36 km downstream in 2 hours and returns the same distance upstream in 3 hours. What is the speed of the stream?",
    options: ["A) 3 km/h", "B) 6 km/h", "C) 2.5 km/h", "D) 4 km/h"],
    answer: "A",
    explanation: "Downstream speed = 18 km/h, upstream speed = 12 km/h. Stream speed = (18 − 12)/2 = 3 km/h."
  },
  {
    id: 11554, section: "Numerical Ability",
    text: "12 men can complete a work in 18 days. After working for 6 days, 4 more men join them. In how many more days will the remaining work be completed?",
    options: ["A) 12 days", "B) 9 days", "C) 8 days", "D) 10 days"],
    answer: "B",
    explanation: "Total work = 12 × 18 = 216 man-days. Done in 6 days = 72. Remaining 144 man-days ÷ 16 men = 9 days."
  },
  {
    id: 11555, section: "Numerical Ability",
    text: "What is the compound interest on ₹8,000 for 3 years at 10% per annum, compounded annually?",
    options: ["A) ₹2,400", "B) ₹2,600", "C) ₹2,648", "D) ₹2,748"],
    answer: "C",
    explanation: "Amount = 8000 × (1.1)³ = ₹10,648. CI = 10,648 − 8,000 = ₹2,648."
  },
  {
    id: 11556, section: "Numerical Ability",
    text: "A patrol jeep travels from A to B at 40 km/h and returns from B to A at 60 km/h. What is its average speed for the whole journey?",
    options: ["A) 52 km/h", "B) 45 km/h", "C) 48 km/h", "D) 50 km/h"],
    answer: "C",
    explanation: "For equal distances, average speed = 2xy/(x + y) = 2 × 40 × 60/100 = 48 km/h."
  },
  {
    id: 11557, section: "Numerical Ability",
    text: "A starts a business with ₹30,000. B joins after 3 months with ₹40,000. At the end of the year the profit is ₹26,000. What is B's share?",
    options: ["A) ₹15,000", "B) ₹11,000", "C) ₹14,000", "D) ₹13,000"],
    answer: "D",
    explanation: "Capital × time: A = 30,000 × 12 = 3,60,000; B = 40,000 × 9 = 3,60,000. The ratio is 1 : 1, so B gets ₹13,000."
  },
  {
    id: 11558, section: "Numerical Ability",
    text: "To pass an examination a candidate needs 45% of the maximum marks. A candidate scores 23 marks and fails by 4 marks. What are the maximum marks?",
    options: ["A) 60", "B) 75", "C) 50", "D) 80"],
    answer: "A",
    explanation: "Pass mark = 23 + 4 = 27, and 45% of M = 27, so M = 60."
  },
  {
    id: 11559, section: "Numerical Ability",
    text: "The circumference of a circular ground is 88 m. What is its area? (Take π = 22/7)",
    options: ["A) 616 m²", "B) 1232 m²", "C) 572 m²", "D) 704 m²"],
    answer: "A",
    explanation: "2πr = 88, so r = 14 m. Area = 22/7 × 14 × 14 = 616 m²."
  },
  {
    id: 11560, section: "Numerical Ability",
    text: "The product of two numbers is 2160 and their HCF is 12. How many such pairs of numbers are possible?",
    options: ["A) 1", "B) 3", "C) 4", "D) 2"],
    answer: "D",
    explanation: "Let the numbers be 12a and 12b with a, b co-prime. Then 144ab = 2160, so ab = 15. Co-prime pairs: (1, 15) and (3, 5), giving 2 pairs: (12, 180) and (36, 60)."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 11561, section: "English",
    passage: "passage_1",
    text: "Which of the following best captures the central idea of the passage?",
    options: ["A) Fraud exploits human psychology, so lasting protection depends on habits and prompt reporting", "B) Banks alone are responsible for preventing online fraud", "C) Most victims of online fraud are careless and poorly educated", "D) Technology has made fraud impossible to prevent"],
    answer: "A",
    explanation: "The passage explains that fraud targets anxiety and urgency, rejects the 'careless victim' view, and recommends habits and reporting."
  },
  {
    id: 11562, section: "English",
    passage: "passage_1",
    text: "According to the passage, the fraudster's 'most dependable weapon' is",
    options: ["A) advanced technical skill", "B) a persuasive voice", "C) access to bank databases", "D) creating a sense of urgency"],
    answer: "D",
    explanation: "This is stated directly: 'Urgency is the fraudster's most dependable weapon, because a frightened person rarely pauses to verify.'"
  },
  {
    id: 11563, section: "English",
    passage: "passage_1",
    text: "Why, according to the author, do awareness campaigns that only list do's and don'ts have limited effect?",
    options: ["A) Because the rules keep changing every year", "B) Because most people never read such campaigns", "C) Because fraudsters can block such messages", "D) Because people who know the rules still break them under pressure"],
    answer: "D",
    explanation: "The second paragraph ends: 'People who know the rules still break them under pressure.'"
  },
  {
    id: 11564, section: "English",
    passage: "passage_1",
    text: "The author's attitude towards the victims of fraud can best be described as",
    options: ["A) indifferent, since fraud is inevitable", "B) understanding, since they were deceived by methods designed to bypass careful thought", "C) contemptuous, since they lacked intelligence", "D) critical, since they ignored obvious warnings"],
    answer: "B",
    explanation: "The author rejects the view that victims are careless or ignorant and explains why intelligent people are also deceived."
  },
  {
    id: 11565, section: "English",
    passage: "passage_1",
    text: "The word 'reflexive', as used in the passage, is closest in meaning to",
    options: ["A) reluctant", "B) automatic", "C) occasional", "D) thoughtful"],
    answer: "B",
    explanation: "A 'reflexive pause' is one made automatically, out of habit, which matches the idea of 'habits rather than information'."
  },
  {
    id: 11566, section: "English",
    text: "Choose the word most similar in meaning to BENEVOLENT.",
    options: ["A) Cautious", "B) Wealthy", "C) Kind", "D) Cruel"],
    answer: "C",
    explanation: "Benevolent means well-meaning and kindly."
  },
  {
    id: 11567, section: "English",
    text: "Choose the word most similar in meaning to METICULOUS.",
    options: ["A) Careless", "B) Ambitious", "C) Painstaking", "D) Hasty"],
    answer: "C",
    explanation: "Meticulous means showing great attention to detail, i.e. painstaking."
  },
  {
    id: 11568, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to FRUGAL.",
    options: ["A) Extravagant", "B) Thrifty", "C) Prudent", "D) Economical"],
    answer: "A",
    explanation: "Frugal means sparing with money. Thrifty, economical and prudent are near-synonyms; the opposite is extravagant."
  },
  {
    id: 11569, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to OBSCURE.",
    options: ["A) Vague", "B) Dim", "C) Hidden", "D) Clear"],
    answer: "D",
    explanation: "Obscure means unclear or not well known. Its opposite is clear."
  },
  {
    id: 11570, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>One of the constable (A) / who were on duty (B) / was injured (C) / in the clash. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "'One of' is followed by a plural noun: 'One of the constables'. ('who were' correctly refers to the plural 'constables', and 'was injured' agrees with 'one'.)"
  },
  {
    id: 11571, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>He is senior (A) / than me (B) / in the department (C) / by two years. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "'Senior', 'junior', 'superior' and 'inferior' take 'to', not 'than': 'He is senior to me'."
  },
  {
    id: 11572, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The officer insisted (A) / that every applicant (B) / submits the form (C) / before Monday. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "After 'insist that', the base form (subjunctive) or 'should + verb' is used: 'that every applicant submit / should submit the form'."
  },
  {
    id: 11573, section: "English",
    text: "Fill in the blank: The suspect was charged ______ forgery.",
    options: ["A) on", "B) with", "C) of", "D) for"],
    answer: "B",
    explanation: "The correct collocation is 'charged with' an offence (compare 'accused of' and 'acquitted of')."
  },
  {
    id: 11574, section: "English",
    text: "Fill in the blank: No sooner had the alarm rung ______ the guards rushed in.",
    options: ["A) than", "B) when", "C) that", "D) then"],
    answer: "A",
    explanation: "'No sooner … than' is the fixed correlative pair. ('Hardly/Scarcely' take 'when'.)"
  },
  {
    id: 11575, section: "English",
    text: "Fill in the blank: The committee has been asked to ______ the complaint thoroughly.",
    options: ["A) look after", "B) look for", "C) look into", "D) look up to"],
    answer: "C",
    explanation: "'Look into' means to investigate. 'Look after' means take care of, 'look for' means search, and 'look up to' means respect."
  },
  {
    id: 11576, section: "English",
    text: "Choose the correct meaning of the idiom: To bell the cat",
    options: ["A) To catch a criminal red-handed", "B) To make a lot of noise", "C) To waste time on trifles", "D) To take a risk for the common good"],
    answer: "D",
    explanation: "From the fable: to undertake a dangerous task that benefits everyone."
  },
  {
    id: 11577, section: "English",
    text: "Choose the correct meaning of the idiom: To smell a rat",
    options: ["A) To lose one's way", "B) To discover a hidden treasure", "C) To dislike someone intensely", "D) To suspect that something is wrong"],
    answer: "D",
    explanation: "To smell a rat is to sense that something is wrong or that one is being deceived."
  },
  {
    id: 11578, section: "English",
    text: "Choose the one word for: A place where arms and ammunition are stored",
    options: ["A) Granary", "B) Aviary", "C) Arsenal", "D) Apiary"],
    answer: "C",
    explanation: "An arsenal stores weapons. An aviary keeps birds, a granary grain and an apiary bees."
  },
  {
    id: 11579, section: "English",
    text: "Choose the correctly spelt word.",
    options: ["A) Surveilance", "B) Surveillance", "C) Surviellance", "D) Survellance"],
    answer: "B",
    explanation: "The correct spelling is S-U-R-V-E-I-L-L-A-N-C-E."
  },
  {
    id: 11580, section: "English",
    text: "Arrange the sentences in a logical order:<br>P. Within minutes, a patrol van reached the spot.<br>Q. A shopkeeper noticed two men trying to break open an ATM late at night.<br>R. The men were arrested before they could escape.<br>S. He immediately dialled the police helpline.",
    options: ["A) QPSR", "B) QSPR", "C) PQSR", "D) SQPR"],
    answer: "B",
    explanation: "Q introduces the event, S is the shopkeeper's response, P is the police arriving, and R is the outcome: QSPR."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: History of Goa
  // ════════════════════════════════════════════════════════════
  {
    id: 11581, section: "History of Goa",
    text: "Which dynasty is regarded as the earliest known ruling dynasty of Goa, with its capital at Chandrapur (Chandor)?",
    options: ["A) Kadambas", "B) Silaharas", "C) Bhojas", "D) Rashtrakutas"],
    answer: "C",
    explanation: "The Bhojas, known from copper-plate grants found in Goa, ruled from Chandrapur around the 4th–6th centuries CE. They are considered the earliest known local dynasty."
  },
  {
    id: 11582, section: "History of Goa",
    text: "The Mahadev Temple at Tambdi Surla, the oldest surviving temple of its kind in Goa, was built during the rule of the",
    options: ["A) Adil Shahis", "B) Portuguese", "C) Marathas", "D) Kadambas"],
    answer: "D",
    explanation: "This 12th–13th century basalt temple in Kadamba-Yadava style survived the Portuguese temple destruction because of its remote forest location."
  },
  {
    id: 11583, section: "History of Goa",
    text: "The ancient rock-cut Arvalem (Harvalem) caves are located in which taluka of Goa?",
    options: ["A) Sattari", "B) Bicholim", "C) Canacona", "D) Quepem"],
    answer: "B",
    explanation: "The Arvalem caves are near Sanquelim in Bicholim taluka, close to the Arvalem waterfall."
  },
  {
    id: 11584, section: "History of Goa",
    text: "The prehistoric rock carvings (petroglyphs) of Usgalimal in Sanguem taluka are found on the banks of which river?",
    options: ["A) Kushavati", "B) Mandovi", "C) Talpona", "D) Chapora"],
    answer: "A",
    explanation: "The Usgalimal petroglyphs lie on laterite rock along the Kushavati river and are among the oldest traces of human settlement in Goa."
  },
  {
    id: 11585, section: "History of Goa",
    text: "Goa was conquered for the Bahmani Sultanate in the 15th century by which famous minister-general?",
    options: ["A) Madhav Mantri", "B) Mahmud Gawan", "C) Yusuf Adil Khan", "D) Malik Kafur"],
    answer: "B",
    explanation: "Mahmud Gawan, the Bahmani prime minister, captured Goa from Vijayanagara around 1469–72. After the Bahmani kingdom broke up, Goa passed to the Adil Shahis of Bijapur."
  },
  {
    id: 11586, section: "History of Goa",
    text: "Which local chieftain and naval commander assisted Afonso de Albuquerque in the capture of Goa in 1510?",
    options: ["A) Rasul Khan", "B) Yusuf Adil Shah", "C) Krishnadevaraya", "D) Timoja"],
    answer: "D",
    explanation: "Timoja (Thimayya), a Hindu privateer from Honavar, encouraged and helped Albuquerque. Rasul Khan was an Adil Shahi commander who fought the Portuguese."
  },
  {
    id: 11587, section: "History of Goa",
    text: "The Safa Masjid at Ponda, one of the oldest surviving mosques in Goa, was built by",
    options: ["A) Yusuf Adil Shah", "B) Mahmud Gawan", "C) Ibrahim Adil Shah", "D) Aurangzeb"],
    answer: "C",
    explanation: "Ibrahim Adil Shah of Bijapur built the Safa Masjid in 1560. Its tank with arched niches is a notable feature."
  },
  {
    id: 11588, section: "History of Goa",
    text: "St. Francis Xavier wrote a letter in 1545 recommending the setting up of the Inquisition in Goa. To whom was it addressed?",
    options: ["A) King Philip II of Spain", "B) King John III of Portugal", "C) King Sebastian of Portugal", "D) King Manuel I of Portugal"],
    answer: "B",
    explanation: "Xavier wrote to King John III (Joao III) in 1545. The Inquisition was established in Goa in 1560."
  },
  {
    id: 11589, section: "History of Goa",
    text: "'Coloquios dos Simples e Drogas da India' (1563), a pioneering work on Indian medicinal plants printed in Goa, was written by",
    options: ["A) Duarte Barbosa", "B) Garcia da Orta", "C) Luis Vaz de Camoes", "D) Thomas Stephens"],
    answer: "B",
    explanation: "Garcia da Orta, a Portuguese physician in Goa, wrote this landmark work on Indian medicinal plants. It was printed at Goa in 1563."
  },
  {
    id: 11590, section: "History of Goa",
    text: "The 'Kristapurana', an epic on the life of Christ in a Marathi-Konkani idiom, and an early grammar of Konkani were written by",
    options: ["A) Fr. Joseph Vaz", "B) St. Francis Xavier", "C) Abbe Faria", "D) Fr. Thomas Stephens"],
    answer: "D",
    explanation: "Fr. Thomas Stephens, an English Jesuit in Salcete, wrote the Kristapurana and 'Arte da Lingoa Canarim', an early Konkani grammar."
  },
  {
    id: 11591, section: "History of Goa",
    text: "In 1683, Maratha forces nearly captured Goa and were forced to withdraw only when a Mughal army entered their territory. The Maratha ruler at that time was",
    options: ["A) Sambhaji", "B) Baji Rao I", "C) Shahu", "D) Shivaji"],
    answer: "A",
    explanation: "Chhatrapati Sambhaji besieged Portuguese territory in 1683 and nearly took Goa. The Mughal advance into the Konkan forced him to retreat."
  },
  {
    id: 11592, section: "History of Goa",
    text: "Chhatrapati Shivaji Maharaj renovated which ancient temple at Narve in Bicholim taluka in 1668?",
    options: ["A) Saptakoteshwar Temple", "B) Shri Mahalasa Temple", "C) Shri Mangueshi Temple", "D) Shri Shantadurga Temple"],
    answer: "A",
    explanation: "Shivaji rebuilt the Saptakoteshwar temple at Narve, the Kadamba family deity's shrine. The temple had been shifted there after its original site was destroyed."
  },
  {
    id: 11593, section: "History of Goa",
    text: "Fort Aguada, built in 1612 at the mouth of the Mandovi, was constructed mainly as a defence against the",
    options: ["A) British", "B) Dutch", "C) Mughals", "D) Adil Shahis"],
    answer: "B",
    explanation: "The fort guarded the Mandovi estuary against the Dutch, who threatened Portuguese trade in the early 17th century (and later the Marathas). Its freshwater spring supplied passing ships."
  },
  {
    id: 11594, section: "History of Goa",
    text: "Who became the first Goan-born Governor (Prefect) of Goa under Portuguese rule, in 1835?",
    options: ["A) Bernardo Peres da Silva", "B) Joaquim Heliodoro da Cunha Rivara", "C) Abbe Faria", "D) Francisco Luis Gomes"],
    answer: "A",
    explanation: "Bernardo Peres da Silva of Neura was appointed in 1835 but was overthrown within weeks by opponents of a native governor."
  },
  {
    id: 11595, section: "History of Goa",
    text: "Abbe Faria (Jose Custodio de Faria), regarded as a pioneer of the scientific study of hypnotism, was born in which Goan village?",
    options: ["A) Mapusa", "B) Chandor", "C) Margao", "D) Candolim"],
    answer: "D",
    explanation: "Abbe Faria was born in Candolim, Bardez, in 1756. His statue stands near the Old Secretariat in Panaji."
  },
  {
    id: 11596, section: "History of Goa",
    text: "The Escola Medico-Cirurgica de Goa, one of the oldest medical colleges in Asia, was established in",
    options: ["A) 1842", "B) 1900", "C) 1925", "D) 1878"],
    answer: "A",
    explanation: "The Goa Medical School (Escola Medico-Cirurgica) was founded in 1842 in Panaji. It later became Goa Medical College."
  },
  {
    id: 11597, section: "History of Goa",
    text: "In which year did India close its Legation (diplomatic mission) in Lisbon after Portugal refused to negotiate the transfer of Goa?",
    options: ["A) 1961", "B) 1947", "C) 1953", "D) 1955"],
    answer: "C",
    explanation: "India closed its Legation in Lisbon in June 1953. In 1955 it also closed its consulate in Goa and imposed an economic blockade."
  },
  {
    id: 11598, section: "History of Goa",
    text: "Who commanded the 17th Infantry Division during 'Operation Vijay' and became the first Military Governor of Goa?",
    options: ["A) Gen. K. M. Cariappa", "B) Maj. Gen. K. P. Candeth", "C) Gen. J. N. Chaudhuri", "D) Field Marshal Sam Manekshaw"],
    answer: "B",
    explanation: "Maj. Gen. K. P. Candeth led the 17th Infantry Division into Goa and served as Military Governor until civil administration was set up."
  },
  {
    id: 11599, section: "History of Goa",
    text: "Goa, Daman and Diu were formally incorporated into the Constitution of India as a Union Territory by which Constitutional Amendment (1962)?",
    options: ["A) 10th Amendment", "B) 12th Amendment", "C) 7th Amendment", "D) 14th Amendment"],
    answer: "B",
    explanation: "The 12th Amendment (1962) added Goa, Daman and Diu to the First Schedule. The 10th Amendment covered Dadra and Nagar Haveli, and the 14th covered Puducherry."
  },
  {
    id: 11600, section: "History of Goa",
    text: "Consider the following statements:<br>I. Shashikala Kakodkar was the first woman Chief Minister of Goa, Daman and Diu.<br>II. The Opinion Poll of 1967 was held under a special Act of Parliament.<br>III. The Maharashtrawadi Gomantak Party campaigned against merger with Maharashtra.<br>Which of the statements given above is/are correct?",
    options: ["A) I and II only", "B) I and III only", "C) II and III only", "D) I, II and III"],
    answer: "A",
    explanation: "I is correct: she succeeded her father, Dayanand Bandodkar, in 1973. II is correct: the poll was held under the Goa, Daman and Diu (Opinion Poll) Act, 1966. III is wrong: the MGP supported merger, and the United Goans Party opposed it."
  }
];
