// gssc_police_cbt2_mock5.js – Dr Shetye Academic Programme
// CBT 2 Goa Police Mock 5 · GSSC Advt. No. 2 of 2026 · CBT-II · Police Constable (Male / Female)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 20701–20760
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | History of Goa Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Drug abuse among young people rarely begins with a deliberate decision to become addicted. It usually starts with curiosity, the influence of friends, or the wish to escape stress for a few hours. In tourist areas, easy availability and the false belief that 'everyone does it' can make experimentation seem harmless. By the time the habit is recognised, it may already have damaged a student's studies, family relationships and health.\n\nEnforcement is essential. Those who supply drugs to young people profit from their ruin and must face the full force of the law. Yet arrests alone cannot dry up demand. If one supplier is removed, another often takes his place as long as there are buyers. Prevention therefore has to work on the demand side as well — through honest education in schools, sports and cultural activities that give young people a sense of purpose, and parents who notice changes in behaviour early.\n\nThose already addicted need treatment rather than contempt. Addiction is a condition that can be overcome, but only with support. A society that treats every user as a criminal drives the problem underground, where it becomes harder to detect and to cure."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 20701, section: "Reasoning",
    text: "Find the next term in the series: 7, 9, 13, 21, 37, ?",
    options: ["A) 73", "B) 67", "C) 69", "D) 65"],
    answer: "C",
    explanation: "The differences double: +2, +4, +8, +16, so the next is +32: 37 + 32 = 69."
  },
  {
    id: 20702, section: "Reasoning",
    text: "Find the next group in the series: BCD, GHI, MNO, ?",
    options: ["A) TUV", "B) RST", "C) STU", "D) UVW"],
    answer: "A",
    explanation: "The first letters B, G, M, T are 5, 6 and 7 places apart. Each group is three consecutive letters."
  },
  {
    id: 20703, section: "Reasoning",
    text: "If 'sky' is called 'sea', 'sea' is called 'forest', 'forest' is called 'river' and 'river' is called 'mountain', where do fish live?",
    options: ["A) Forest", "B) Mountain", "C) River", "D) Sea"],
    answer: "A",
    explanation: "Fish live in the sea, and in this code 'sea' is called 'forest'."
  },
  {
    id: 20704, section: "Reasoning",
    text: "A family of six (A, B, C, D, E and F) has two married couples. D is the grandmother of A and the mother of B. C is the wife of B and the mother of F. F is the granddaughter of E. How is A related to F?",
    options: ["A) Cousin", "B) Uncle", "C) Daughter", "D) Brother or sister"],
    answer: "D",
    explanation: "D and E are one couple and B and C the other. A and F are both grandchildren of D and E, and F is C's child, so A and F are siblings. A's gender is not given, so A is F's brother or sister."
  },
  {
    id: 20705, section: "Reasoning",
    text: "Eight persons P, Q, R, S, T, U, V and W sit in a row facing North. R is third from the left end. V is third to the right of R. P is immediately to the left of V. T is second to the left of R. Q is immediately to the right of V. S sits at one of the ends and U does not. W is not an immediate neighbour of T. Who sits exactly between R and P?",
    options: ["A) W", "B) U", "C) S", "D) T"],
    answer: "A",
    explanation: "From the left: T = 1, R = 3, P = 5, V = 6, Q = 7. S takes an end, so S = 8. U and W share seats 2 and 4. W cannot sit next to T (seat 1), so W = 4 and U = 2. W is between R (3) and P (5)."
  },
  {
    id: 20706, section: "Reasoning",
    text: "Ravi's house faces East. From the back of his house he walks 50 m straight ahead, turns left and walks 30 m, then turns left again and walks 90 m. How far is he from his house, and in which direction?",
    options: ["A) 40 m, South", "B) 50 m, North-East", "C) 50 m, South-East", "D) 70 m, South-East"],
    answer: "C",
    explanation: "The back of the house faces West. He walks 50 m West, 30 m South, then 90 m East, ending 40 m East and 30 m South of the house. √(40² + 30²) = 50 m, towards the South-East."
  },
  {
    id: 20707, section: "Reasoning",
    text: "Statements: Some phones are cameras. All cameras are devices. No device is a toy.<br>Conclusions:<br>I. Some phones are not toys.<br>II. All phones being devices is a possibility.<br>III. Some cameras are toys.",
    options: ["A) All I, II and III follow", "B) Only I follows", "C) Only II and III follow", "D) Only I and II follow"],
    answer: "D",
    explanation: "The phones that are cameras are devices and so cannot be toys, so I follows. Nothing rules out all phones being devices, so II is a valid possibility. III contradicts the statements."
  },
  {
    id: 20708, section: "Reasoning",
    text: "If '+' means '×', '−' means '÷', '×' means '−' and '÷' means '+', what is the value of 18 − 6 + 4 × 5 ÷ 2?",
    options: ["A) 7", "B) 9", "C) 13", "D) 11"],
    answer: "B",
    explanation: "The expression becomes 18 ÷ 6 × 4 − 5 + 2 = 3 × 4 − 5 + 2 = 9."
  },
  {
    id: 20709, section: "Reasoning",
    text: "If 1 March 2027 is a Monday, what day of the week will 1 March 2028 be?",
    options: ["A) Thursday", "B) Monday", "C) Tuesday", "D) Wednesday"],
    answer: "D",
    explanation: "The period includes 29 February 2028 (a leap day), so it is 366 days = 52 weeks + 2 days. Monday + 2 = Wednesday."
  },
  {
    id: 20710, section: "Reasoning",
    text: "A 5 × 5 × 5 cube is painted on all faces and then cut into 125 identical small cubes. How many small cubes have exactly ONE face painted?",
    options: ["A) 36", "B) 54", "C) 48", "D) 27"],
    answer: "B",
    explanation: "Cubes with exactly one painted face are on each face, excluding the edges: 6 × (5 − 2)² = 6 × 9 = 54."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 20711, section: "Numerical Ability",
    text: "The price of an article is reduced by 25% and, as a result, its sales go up by 40%. What is the effect on the shop's revenue from the article?",
    options: ["A) No change", "B) Increases by 5%", "C) Decreases by 5%", "D) Increases by 15%"],
    answer: "B",
    explanation: "0.75 × 1.40 = 1.05, a 5% increase."
  },
  {
    id: 20712, section: "Numerical Ability",
    text: "A trader marks his goods 50% above the cost price and then gives successive discounts of 20% and 10%. What is his profit percentage?",
    options: ["A) 8%", "B) 12%", "C) 15%", "D) 20%"],
    answer: "A",
    explanation: "1.5 × 0.8 × 0.9 = 1.08, a profit of 8%."
  },
  {
    id: 20713, section: "Numerical Ability",
    text: "Two taps fill a cistern in 12 minutes and 18 minutes respectively. Both are opened together, but the second tap is closed 3 minutes before the cistern is full. How long does it take to fill the cistern?",
    options: ["A) 9 min", "B) 7 min 12 s", "C) 8 min", "D) 8 min 24 s"],
    answer: "D",
    explanation: "t/12 + (t − 3)/18 = 1 gives 3t + 2t − 6 = 36, so t = 8.4 minutes = 8 min 24 s."
  },
  {
    id: 20714, section: "Numerical Ability",
    text: "A police jeep chases a thief who is 2 km ahead. The jeep travels at 60 km/h and the thief at 50 km/h. How long will the jeep take to catch the thief?",
    options: ["A) 20 minutes", "B) 12 minutes", "C) 15 minutes", "D) 10 minutes"],
    answer: "B",
    explanation: "Relative speed = 10 km/h. Time = 2/10 h = 12 minutes."
  },
  {
    id: 20715, section: "Numerical Ability",
    text: "What is the compound interest on ₹15,625 for 3 years at 4% per annum, compounded annually?",
    options: ["A) ₹1,926", "B) ₹2,000", "C) ₹1,875", "D) ₹1,951"],
    answer: "D",
    explanation: "Amount = 15625 × (1.04)³ = 17,576. CI = 17,576 − 15,625 = ₹1,951."
  },
  {
    id: 20716, section: "Numerical Ability",
    text: "The present ages of A and B are in the ratio 4 : 5. After 8 years the ratio will be 6 : 7. What is B's present age?",
    options: ["A) 28 years", "B) 20 years", "C) 25 years", "D) 16 years"],
    answer: "B",
    explanation: "7(4x + 8) = 6(5x + 8) gives 28x + 56 = 30x + 48, so x = 4 and B = 20."
  },
  {
    id: 20717, section: "Numerical Ability",
    text: "In a class, the average mark of the boys is 52 and that of the girls is 42. The class average is 48. What is the ratio of boys to girls?",
    options: ["A) 3 : 2", "B) 4 : 3", "C) 2 : 3", "D) 5 : 4"],
    answer: "A",
    explanation: "By alligation: (48 − 42) : (52 − 48) = 6 : 4 = 3 : 2."
  },
  {
    id: 20718, section: "Numerical Ability",
    text: "A number leaves a remainder of 3 when divided by 5. What remainder does its square leave when divided by 5?",
    options: ["A) 1", "B) 4", "C) 3", "D) 9"],
    answer: "B",
    explanation: "If n = 5k + 3, then n² = 25k² + 30k + 9, which leaves the same remainder as 9 does, i.e. 4."
  },
  {
    id: 20719, section: "Numerical Ability",
    text: "The perimeter of a square equals the perimeter of a rectangle measuring 18 m × 14 m. What is the area of the square?",
    options: ["A) 324 m²", "B) 196 m²", "C) 256 m²", "D) 252 m²"],
    answer: "C",
    explanation: "Perimeter = 2(18 + 14) = 64 m, so the side is 16 m and the area 256 m²."
  },
  {
    id: 20720, section: "Numerical Ability",
    text: "If 40% of A is equal to 60% of B, what is the ratio A : B?",
    options: ["A) 3 : 2", "B) 4 : 6", "C) 2 : 3", "D) 6 : 5"],
    answer: "A",
    explanation: "0.4A = 0.6B, so A/B = 3/2."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 20721, section: "English",
    passage: "passage_1",
    text: "Which of the following best states the central idea of the passage?",
    options: ["A) Young people who use drugs should be expelled from school", "B) Drug abuse is a problem only in tourist areas", "C) Only strict punishment of users can end drug abuse", "D) Drug abuse must be tackled through enforcement against suppliers as well as prevention and treatment for users"],
    answer: "D",
    explanation: "The author calls for enforcement against suppliers, prevention aimed at demand, and treatment for addicts."
  },
  {
    id: 20722, section: "English",
    passage: "passage_1",
    text: "According to the passage, drug use among young people usually begins with",
    options: ["A) medical prescriptions", "B) pressure from teachers", "C) curiosity, peer influence or the wish to escape stress", "D) a deliberate decision to become addicted"],
    answer: "C",
    explanation: "Stated in the first sentence."
  },
  {
    id: 20723, section: "English",
    passage: "passage_1",
    text: "Why, according to the author, are arrests alone not enough?",
    options: ["A) Drugs are legal in tourist areas", "B) Courts release all suppliers", "C) The police cannot arrest suppliers", "D) Suppliers are replaced as long as demand continues"],
    answer: "D",
    explanation: "'If one supplier is removed, another often takes his place as long as there are buyers.'"
  },
  {
    id: 20724, section: "English",
    passage: "passage_1",
    text: "What is the author's view of people already addicted to drugs?",
    options: ["A) They should all be imprisoned", "B) They need treatment and support rather than contempt", "C) They should be ignored", "D) They cannot be cured"],
    answer: "B",
    explanation: "Stated in the last paragraph."
  },
  {
    id: 20725, section: "English",
    passage: "passage_1",
    text: "The phrase 'drives the problem underground' means",
    options: ["A) makes the problem more visible", "B) moves the problem to rural areas", "C) solves the problem completely", "D) makes the problem hidden and harder to deal with"],
    answer: "D",
    explanation: "The next words explain it: 'where it becomes harder to detect and to cure'."
  },
  {
    id: 20726, section: "English",
    text: "Choose the word most similar in meaning to DETERIORATE.",
    options: ["A) Recover", "B) Improve", "C) Stabilise", "D) Worsen"],
    answer: "D",
    explanation: "To deteriorate is to become worse."
  },
  {
    id: 20727, section: "English",
    text: "Choose the word most similar in meaning to LUCRATIVE.",
    options: ["A) Profitable", "B) Popular", "C) Illegal", "D) Risky"],
    answer: "A",
    explanation: "Lucrative means producing a great deal of profit."
  },
  {
    id: 20728, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to PROHIBIT.",
    options: ["A) Bar", "B) Forbid", "C) Permit", "D) Ban"],
    answer: "C",
    explanation: "To prohibit is to forbid; its opposite is to permit."
  },
  {
    id: 20729, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to GENUINE.",
    options: ["A) Fake", "B) Original", "C) Authentic", "D) Real"],
    answer: "A",
    explanation: "Genuine means real; its opposite is fake."
  },
  {
    id: 20730, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Inspite of (A) / repeated warnings, (B) / he continued (C) / to smoke. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "The correct form is three words: 'In spite of'."
  },
  {
    id: 20731, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Every student and every teacher (A) / were present (B) / at the anti-drug (C) / rally. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "When 'every' qualifies nouns joined by 'and', the verb is singular: 'was present'."
  },
  {
    id: 20732, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>He is one of those (A) / officers who (B) / has won (C) / the President's medal. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "'Who' refers to 'officers' (plural), so the verb must be 'have won'."
  },
  {
    id: 20733, section: "English",
    text: "Fill in the blank: Students must abstain ______ drugs and alcohol.",
    options: ["A) of", "B) from", "C) against", "D) with"],
    answer: "B",
    explanation: "The correct collocation is 'abstain from'."
  },
  {
    id: 20734, section: "English",
    text: "Fill in the blank: The drug peddler was sentenced ______ ten years' rigorous imprisonment.",
    options: ["A) for", "B) with", "C) to", "D) by"],
    answer: "C",
    explanation: "One is 'sentenced to' a punishment."
  },
  {
    id: 20735, section: "English",
    text: "Fill in the blank: The more you practise, ______ you become.",
    options: ["A) better", "B) more better", "C) the best", "D) the better"],
    answer: "D",
    explanation: "The comparative correlative 'the more … the better' is used."
  },
  {
    id: 20736, section: "English",
    text: "Choose the correct meaning of the idiom: To nip in the bud",
    options: ["A) To stop something at an early stage", "B) To delay a decision", "C) To grow flowers", "D) To cut costs"],
    answer: "A",
    explanation: "To nip something in the bud is to stop it before it develops."
  },
  {
    id: 20737, section: "English",
    text: "Choose the correct meaning of the idiom: To turn over a new leaf",
    options: ["A) To change one's behaviour for the better", "B) To plant trees", "C) To read a new book", "D) To change one's job"],
    answer: "A",
    explanation: "To turn over a new leaf is to make a fresh start and improve one's conduct."
  },
  {
    id: 20738, section: "English",
    text: "Choose the one word for: That which cannot be cured",
    options: ["A) Incorrigible", "B) Invincible", "C) Incurable", "D) Inevitable"],
    answer: "C",
    explanation: "Incurable means cannot be cured. Incorrigible means cannot be reformed, invincible cannot be defeated, and inevitable cannot be avoided."
  },
  {
    id: 20739, section: "English",
    text: "Choose the correct passive form of: Let him do the work.",
    options: ["A) Let the work been done by him.", "B) Let the work is done by him.", "C) The work should done by him.", "D) Let the work be done by him."],
    answer: "D",
    explanation: "Imperatives with 'let' become 'Let + object + be + V3'."
  },
  {
    id: 20740, section: "English",
    text: "Choose the correct indirect speech: She said to me, \"Please help me.\"",
    options: ["A) She said me to please help her.", "B) She told to me to help me.", "C) She requested me that please help her.", "D) She requested me to help her."],
    answer: "D",
    explanation: "A polite request becomes 'requested + object + to + verb'."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: History of Goa
  // ════════════════════════════════════════════════════════════
  {
    id: 20741, section: "History of Goa",
    text: "The 12th-century Mahadev temple of Kurdi, which faced submergence by the Selaulim dam, was",
    options: ["A) converted into a museum in Panaji", "B) shifted to Old Goa", "C) dismantled and rebuilt at a new site", "D) allowed to be submerged"],
    answer: "C",
    explanation: "The Kadamba-era Kurdi Mahadev temple was dismantled stone by stone and reassembled at a new site."
  },
  {
    id: 20742, section: "History of Goa",
    text: "The Chandreshwar Bhutnath temple on the Chandranath hill at Paroda (Quepem) is associated with which ancient capital of Goa?",
    options: ["A) Chandrapur (Chandor)", "B) Old Goa", "C) Gopakapattana", "D) Ponda"],
    answer: "A",
    explanation: "Chandreshwar was the presiding deity of Chandrapur, the early capital of the Bhojas and Kadambas."
  },
  {
    id: 20743, section: "History of Goa",
    text: "One of the very few temples dedicated to Lord Brahma in India is located at Brahma Karmali in which taluka of Goa?",
    options: ["A) Sattari", "B) Pernem", "C) Mormugao", "D) Salcete"],
    answer: "A",
    explanation: "The Brahma temple at Brahma Karmali is in Sattari taluka. The image is said to have come from Carambolim in Tiswadi."
  },
  {
    id: 20744, section: "History of Goa",
    text: "The Namazgah at Bicholim is associated with which Mughal prince, who stayed in the area in the 1680s?",
    options: ["A) Prince Salim", "B) Prince Akbar, son of Aurangzeb", "C) Prince Muazzam", "D) Dara Shikoh"],
    answer: "B",
    explanation: "Prince Akbar, the rebel son of Aurangzeb, took refuge in the region and is credited with building the Namazgah at Bicholim."
  },
  {
    id: 20745, section: "History of Goa",
    text: "Bicholim, Pernem and Sattari became part of Portuguese Goa (Novas Conquistas) in the late 18th century after being taken from",
    options: ["A) the Peshwas of Pune", "B) the Bhonsles of Sawantwadi", "C) the Raja of Sonda", "D) the Adil Shahis"],
    answer: "B",
    explanation: "These talukas were acquired from the Bhonsles of Sawantwadi (Sardesais), finally by 1788."
  },
  {
    id: 20746, section: "History of Goa",
    text: "The Ranes, who led many revolts against the Portuguese in Sattari, had their traditional seat at",
    options: ["A) Sanquelim", "B) Canacona", "C) Ponda", "D) Margao"],
    answer: "A",
    explanation: "The Rane chieftains of Sattari were based at Sanquelim. Their revolts continued into the early 20th century."
  },
  {
    id: 20747, section: "History of Goa",
    text: "The 'Lairai Zatra', famous for devotees (dhonds) walking over burning embers, is held at",
    options: ["A) Mangeshi in Ponda taluka", "B) Fatorpa in Quepem taluka", "C) Chandor in Salcete taluka", "D) Shirgao in Bicholim taluka"],
    answer: "D",
    explanation: "The Shri Lairai Zatra at Shirgao is known for the homkhand (fire-walk) by devotees."
  },
  {
    id: 20748, section: "History of Goa",
    text: "'Bonderam', the flag festival held in August, is celebrated on which island?",
    options: ["A) Grande Island", "B) Chorao", "C) Divar", "D) Anjediva"],
    answer: "C",
    explanation: "Bonderam is held on Divar island. Colourful flags recall old disputes over property boundaries."
  },
  {
    id: 20749, section: "History of Goa",
    text: "On the eve of Diwali (Naraka Chaturdashi), towns and villages in Goa make and burn giant effigies of",
    options: ["A) Ravana", "B) Narakasur", "C) Kansa", "D) Mahishasur"],
    answer: "B",
    explanation: "Burning Narakasur effigies at dawn on Naraka Chaturdashi is a distinctive Goan Diwali tradition."
  },
  {
    id: 20750, section: "History of Goa",
    text: "'Shigmo' is a major spring festival of Goa, celebrated around the time of",
    options: ["A) Christmas", "B) Ganesh Chaturthi", "C) Holi (month of Phalgun)", "D) Diwali"],
    answer: "C",
    explanation: "Shigmo, Goa's spring festival, falls around Holi and features folk dances, music and float parades."
  },
  {
    id: 20751, section: "History of Goa",
    text: "'Tiatr', popular in Goa since the late 19th century, is a form of",
    options: ["A) Portuguese folk dance", "B) Konkani musical theatre", "C) Marathi religious poetry", "D) classical Carnatic music"],
    answer: "B",
    explanation: "Tiatr mixes drama with songs (kantaram) and is performed mainly in Romi Konkani."
  },
  {
    id: 20752, section: "History of Goa",
    text: "The 'Ghumot', declared a heritage instrument of Goa, is a",
    options: ["A) wind instrument made of bamboo", "B) brass trumpet", "C) stringed instrument like the sitar", "D) percussion instrument made from an earthen pot"],
    answer: "D",
    explanation: "The Ghumot is an earthen pot with a skin stretched over its wide mouth. It is played in temple and folk music."
  },
  {
    id: 20753, section: "History of Goa",
    text: "The surname of the singer Lata Mangeshkar's family is derived from which Goan village?",
    options: ["A) Mangeshi", "B) Mapusa", "C) Margao", "D) Marcel"],
    answer: "A",
    explanation: "Her father, Pandit Dinanath Mangeshkar, was from Mangeshi, home of the Shri Mangueshi temple, and the family took its name from the village."
  },
  {
    id: 20754, section: "History of Goa",
    text: "The famous cartoonist Mario Miranda belonged to which Goan village?",
    options: ["A) Benaulim", "B) Aldona", "C) Loutolim", "D) Candolim"],
    answer: "C",
    explanation: "Mario Miranda's ancestral house is at Loutolim in Salcete. He received the Padma Vibhushan posthumously."
  },
  {
    id: 20755, section: "History of Goa",
    text: "Kesarbai Kerkar, the celebrated Hindustani classical vocalist of the Jaipur-Atrauli gharana, was born at",
    options: ["A) Valpoi in Sattari taluka", "B) Mapusa in Bardez taluka", "C) Margao in Salcete taluka", "D) Keri in Pernem taluka"],
    answer: "D",
    explanation: "Kesarbai Kerkar was born at Keri. The Kesarbai Kerkar music festival in Goa is named after her."
  },
  {
    id: 20756, section: "History of Goa",
    text: "The family of the mathematician and historian D. D. Kosambi, and of his father the Buddhist scholar Dharmanand Kosambi, came from which Goan village?",
    options: ["A) Keri", "B) Chandor", "C) Sancoale", "D) Mashel"],
    answer: "C",
    explanation: "Dharmanand Kosambi was born at Sancoale (Sankhval) in Goa."
  },
  {
    id: 20757, section: "History of Goa",
    text: "The eminent chemical engineer and former Director-General of CSIR, Raghunath Anant Mashelkar, was born at",
    options: ["A) Pune", "B) Margao", "C) Mashel in Goa", "D) Mumbai"],
    answer: "C",
    explanation: "R. A. Mashelkar was born at Mashel, Goa, in 1943, and his surname comes from the village."
  },
  {
    id: 20758, section: "History of Goa",
    text: "The Krishnadas Shama Goa State Central Library in Panaji traces its origins to",
    options: ["A) 1910", "B) 1832", "C) 1987", "D) 1961"],
    answer: "B",
    explanation: "Established in 1832, it is regarded as one of the oldest public libraries in India."
  },
  {
    id: 20759, section: "History of Goa",
    text: "The ornate marble tomb (mausoleum) of St. Francis Xavier in the Basilica of Bom Jesus was a gift from",
    options: ["A) King John III of Portugal", "B) Cosimo III de' Medici, Grand Duke of Tuscany", "C) Pope Gregory XIII", "D) Afonso de Albuquerque"],
    answer: "B",
    explanation: "Cosimo III de' Medici presented the marble mausoleum, made in Florence by the sculptor Giovanni Battista Foggini. (The silver casket was made by Goan silversmiths.)"
  },
  {
    id: 20760, section: "History of Goa",
    text: "Consider the following statements:<br>I. The 'Golden Bell' of Goa is housed in the Se Cathedral.<br>II. Fontainhas is known as the Latin Quarter of Panaji.<br>III. The Archaeological Museum at Old Goa is housed in the convent of St. Francis of Assisi.<br>Which of the statements given above is/are correct?",
    options: ["A) I and III only", "B) II and III only", "C) I, II and III", "D) I and II only"],
    answer: "C",
    explanation: "All three are correct. The Se Cathedral's Golden Bell is the largest in Goa. Fontainhas is Panaji's old Latin Quarter. The ASI museum is in the convent of St. Francis of Assisi."
  }
];
