// gssc_cbt2_forest_mock4.js – Dr Shetye Academic Programme
// CBT 2 Forest Mock 4 · GSSC Advt. No. 2 of 2026 · CBT-II · Round Forester · Forest Guard
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 20941–21000
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Geography of Goa Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Mangroves occupy a narrow and difficult world. Twice a day the tide floods their roots with salt water and twice a day it withdraws, leaving behind soft, oxygen-poor mud. Few trees could survive such conditions, yet mangroves have adapted in remarkable ways. Some exclude salt at their roots; others excrete it through their leaves. Many send up breathing roots that poke out of the mud, and some produce seedlings that begin to grow while still attached to the parent tree.\n\nFor coastal people, these forests provide services that are easy to overlook until they are lost. Mangroves act as nurseries for fish, crabs and prawns, supporting the catches of fishermen far out at sea. Their tangled roots slow down waves and storm surges, protecting villages behind them, and they trap sediment that would otherwise silt up channels. They also store large amounts of carbon in their soils.\n\nYet mangroves have often been treated as wasteland, cleared for construction, aquaculture ponds or waste dumping. Once destroyed, they are slow to recover. Protecting the mangroves that remain is therefore one of the most cost-effective investments a coastal state can make."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 20941, section: "Reasoning",
    text: "Find the next term in the series: 6, 11, 21, 36, 56, ?",
    options: ["A) 81", "B) 71", "C) 76", "D) 86"],
    answer: "A",
    explanation: "The differences are 5, 10, 15, 20, so the next is +25: 56 + 25 = 81."
  },
  {
    id: 20942, section: "Reasoning",
    text: "Find the next term in the series: 2B, 4E, 8I, 16N, ?",
    options: ["A) 30T", "B) 32T", "C) 32U", "D) 32S"],
    answer: "B",
    explanation: "The numbers double. The letters move +3, +4, +5, then +6: N + 6 = T."
  },
  {
    id: 20943, section: "Reasoning",
    text: "In a certain code, GREEN is written as OFFSH. How will FOREST be written in that code?",
    options: ["A) UTFSPH", "B) TSEROF", "C) UTESPG", "D) UTFSPG"],
    answer: "D",
    explanation: "The word is reversed (GREEN → NEERG) and each letter moved one place forward (→ OFFSH). FOREST → TSEROF → UTFSPG."
  },
  {
    id: 20944, section: "Reasoning",
    text: "In a family, B is the son of C, but C is not B's mother. A and C are a married couple. E is C's brother. D is A's daughter. How is E related to D?",
    options: ["A) Brother", "B) Father", "C) Cousin", "D) Uncle"],
    answer: "D",
    explanation: "C is B's father, so C is male and his wife A is the mother. D is their daughter. E, C's brother, is D's paternal uncle."
  },
  {
    id: 20945, section: "Reasoning",
    text: "Five officers P, Q, R, S and T took leave in five different months from January to May. Q took leave in the only month among these with 30 days. R took leave in the month just before Q. P took leave in a later month than T. S did not take leave in February, and P did not take leave in May. Who took leave in January?",
    options: ["A) S", "B) T", "C) R", "D) P"],
    answer: "B",
    explanation: "Q = April (30 days) and R = March. January, February and May remain for P, S and T. P is not May and comes after T, and S is not February, so T = January, P = February and S = May."
  },
  {
    id: 20946, section: "Reasoning",
    text: "Two forest guards start from the same point. One walks 8 km North and then 6 km East. The other walks 6 km West and then 8 km South. What is the straight-line distance between them now?",
    options: ["A) 20 km", "B) 28 km", "C) 14 km", "D) 10 km"],
    answer: "A",
    explanation: "They are at (6, 8) and (−6, −8), which are 12 km apart east–west and 16 km apart north–south. √(12² + 16²) = 20 km."
  },
  {
    id: 20947, section: "Reasoning",
    text: "Statements: No forest is a desert. Some deserts are hot. All hot places are dry.<br>Conclusions:<br>I. Some dry places are not forests.<br>II. No forest is hot.<br>III. Some deserts are dry.",
    options: ["A) Only I follows", "B) All I, II and III follow", "C) Only I and III follow", "D) Only II and III follow"],
    answer: "C",
    explanation: "The hot deserts are dry and are not forests, so I follows. II does not follow, since forests might be hot. The hot deserts are dry, so III follows."
  },
  {
    id: 20948, section: "Reasoning",
    text: "At what time between 2 o'clock and 3 o'clock are the hands of a clock in a straight line, pointing in opposite directions?",
    options: ["A) 45 minutes past 2", "B) 10 10/11 minutes past 2", "C) 40 minutes past 2", "D) 43 7/11 minutes past 2"],
    answer: "D",
    explanation: "5.5m − 60 = 180 gives m = 240/5.5 = 43 7/11 minutes."
  },
  {
    id: 20949, section: "Reasoning",
    text: "Find the odd one out: 21, 35, 49, 63, 79",
    options: ["A) 35", "B) 49", "C) 79", "D) 63"],
    answer: "C",
    explanation: "All the others are multiples of 7."
  },
  {
    id: 20950, section: "Reasoning",
    text: "Question: Is the number N divisible by 6?<br>Statement I: N is divisible by 3.<br>Statement II: N is even.",
    options: ["A) Neither statement is sufficient even together", "B) Both statements together are necessary", "C) Statement II alone is sufficient", "D) Statement I alone is sufficient"],
    answer: "B",
    explanation: "A number is divisible by 6 exactly when it is divisible by both 2 and 3, so both statements are needed."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 20951, section: "Numerical Ability",
    text: "A forest range covers 2,000 hectares. 15% of it is under plantation, and 40% of the rest is grassland. How many hectares are neither plantation nor grassland?",
    options: ["A) 1,020", "B) 900", "C) 1,080", "D) 1,200"],
    answer: "A",
    explanation: "2000 × 0.85 × 0.60 = 1,020 hectares."
  },
  {
    id: 20952, section: "Numerical Ability",
    text: "A dishonest dealer sells goods at cost price but uses a weight of 900 g instead of 1 kg. What is his gain percentage?",
    options: ["A) 9 1/11%", "B) 11 1/9%", "C) 10%", "D) 12%"],
    answer: "B",
    explanation: "He gains 100 g on every 900 g: 100/900 × 100 = 11 1/9%."
  },
  {
    id: 20953, section: "Numerical Ability",
    text: "A man rows 12 km downstream in 2 hours and returns in 3 hours. What is his speed in still water?",
    options: ["A) 6 km/h", "B) 4 km/h", "C) 1 km/h", "D) 5 km/h"],
    answer: "D",
    explanation: "Downstream 6 km/h, upstream 4 km/h. Still-water speed = (6 + 4)/2 = 5 km/h."
  },
  {
    id: 20954, section: "Numerical Ability",
    text: "A is three times as efficient as B and finishes a job 40 days earlier than B. In how many days can they finish it together?",
    options: ["A) 30 days", "B) 20 days", "C) 15 days", "D) 10 days"],
    answer: "C",
    explanation: "B takes 3t and A takes t, so 3t − t = 40 and t = 20. A = 20 days, B = 60 days. Together: 1/20 + 1/60 = 1/15, so 15 days."
  },
  {
    id: 20955, section: "Numerical Ability",
    text: "At what rate of simple interest will a sum become three times itself in 16 years?",
    options: ["A) 12.5%", "B) 18.75%", "C) 10%", "D) 15%"],
    answer: "A",
    explanation: "The interest is 200% in 16 years, so the rate is 200/16 = 12.5% a year."
  },
  {
    id: 20956, section: "Numerical Ability",
    text: "The incomes of A and B are in the ratio 5 : 4 and their expenditures in the ratio 3 : 2. If each saves ₹1,600, what is A's income?",
    options: ["A) ₹5,000", "B) ₹4,800", "C) ₹3,200", "D) ₹4,000"],
    answer: "D",
    explanation: "5x − 3y = 1600 and 4x − 2y = 1600. Solving gives x = 800, so A's income = 5x = ₹4,000."
  },
  {
    id: 20957, section: "Numerical Ability",
    text: "The average of seven consecutive numbers is 20. What is the largest of them?",
    options: ["A) 20", "B) 26", "C) 24", "D) 23"],
    answer: "D",
    explanation: "The middle (4th) number is 20, so the largest is 20 + 3 = 23."
  },
  {
    id: 20958, section: "Numerical Ability",
    text: "If a² + b² = 34 and ab = 15, what is (a + b)²?",
    options: ["A) 64", "B) 19", "C) 49", "D) 34"],
    answer: "A",
    explanation: "(a + b)² = a² + b² + 2ab = 34 + 30 = 64."
  },
  {
    id: 20959, section: "Numerical Ability",
    text: "What is the volume of a cone with radius 7 cm and height 12 cm? (Take π = 22/7)",
    options: ["A) 1,848 cm³", "B) 308 cm³", "C) 616 cm³", "D) 924 cm³"],
    answer: "C",
    explanation: "V = (1/3)πr²h = (1/3) × 22/7 × 49 × 12 = 616 cm³."
  },
  {
    id: 20960, section: "Numerical Ability",
    text: "In a sanctuary, deer and peacocks are in the ratio 3 : 5 and together they have 64 heads. How many legs do they have in all?",
    options: ["A) 176", "B) 192", "C) 208", "D) 160"],
    answer: "A",
    explanation: "Deer = 24 and peacocks = 40. Legs = 24 × 4 + 40 × 2 = 96 + 80 = 176."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 20961, section: "English",
    passage: "passage_1",
    text: "Which of the following best expresses the main idea of the passage?",
    options: ["A) Mangroves are useless wasteland", "B) Mangroves grow only in fresh water", "C) Mangroves are remarkably adapted ecosystems whose valuable services make their protection worthwhile", "D) Mangroves should be replaced by aquaculture ponds"],
    answer: "C",
    explanation: "The passage describes their adaptations and services and ends by urging their protection."
  },
  {
    id: 20962, section: "English",
    passage: "passage_1",
    text: "Which of the following adaptations of mangroves is NOT mentioned in the passage?",
    options: ["A) Excluding salt at the roots", "B) Seedlings that grow while attached to the parent tree", "C) Breathing roots", "D) Shedding all leaves in summer"],
    answer: "D",
    explanation: "Leaf shedding is not mentioned. The other three are."
  },
  {
    id: 20963, section: "English",
    passage: "passage_1",
    text: "How, according to the passage, do mangroves help fishermen?",
    options: ["A) They keep tourists away", "B) They act as nurseries for fish, crabs and prawns", "C) They provide timber for boats", "D) They prevent fishing at night"],
    answer: "B",
    explanation: "Stated in the second paragraph."
  },
  {
    id: 20964, section: "English",
    passage: "passage_1",
    text: "What is the author's view of treating mangroves as wasteland?",
    options: ["A) It is mistaken and harmful", "B) It is necessary for development", "C) It has no effect", "D) It is justified"],
    answer: "A",
    explanation: "The author lists their services and calls protecting them one of the most cost-effective investments."
  },
  {
    id: 20965, section: "English",
    passage: "passage_1",
    text: "The word 'cost-effective', as used in the passage, means",
    options: ["A) temporary", "B) giving good value for the money spent", "C) free of cost", "D) very expensive"],
    answer: "B",
    explanation: "Cost-effective means producing good results for the cost involved."
  },
  {
    id: 20966, section: "English",
    text: "Choose the word most similar in meaning to SHELTER.",
    options: ["A) Attack", "B) Exposure", "C) Danger", "D) Refuge"],
    answer: "D",
    explanation: "A shelter is a place of refuge."
  },
  {
    id: 20967, section: "English",
    text: "Choose the word most similar in meaning to WITHDRAW.",
    options: ["A) Advance", "B) Enter", "C) Retreat", "D) Approach"],
    answer: "C",
    explanation: "To withdraw is to retreat or pull back."
  },
  {
    id: 20968, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to SHALLOW.",
    options: ["A) Narrow", "B) Wide", "C) Deep", "D) Thin"],
    answer: "C",
    explanation: "The opposite of shallow is deep."
  },
  {
    id: 20969, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to REMARKABLE.",
    options: ["A) Notable", "B) Ordinary", "C) Striking", "D) Extraordinary"],
    answer: "B",
    explanation: "Remarkable means unusual; its opposite is ordinary."
  },
  {
    id: 20970, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The mangroves along (A) / the river is (B) / being cleared (C) / for construction. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "The subject 'mangroves' is plural: 'are being cleared'."
  },
  {
    id: 20971, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Fishermen depend (A) / on mangroves (B) / for its (C) / livelihood. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "The pronoun refers to 'fishermen' (plural): 'their livelihood'."
  },
  {
    id: 20972, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Mangroves protect (A) / villages from (B) / storm surges, (C) / isn't it? (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "D",
    explanation: "The question tag must match the subject and verb: 'don't they?'."
  },
  {
    id: 20973, section: "English",
    text: "Fill in the blank: Low-lying coastal villages are prone ______ flooding.",
    options: ["A) to", "B) with", "C) of", "D) for"],
    answer: "A",
    explanation: "The correct phrase is 'prone to'."
  },
  {
    id: 20974, section: "English",
    text: "Fill in the blank: The more mangroves we protect, ______ our coasts will be.",
    options: ["A) more safe", "B) the safest", "C) the safer", "D) safer"],
    answer: "C",
    explanation: "'The more … the + comparative' structure."
  },
  {
    id: 20975, section: "English",
    text: "Fill in the blank: The fishermen had to wait ______ the tide came in.",
    options: ["A) while", "B) unless", "C) since", "D) until"],
    answer: "D",
    explanation: "'Until' marks the point at which the waiting ends."
  },
  {
    id: 20976, section: "English",
    text: "Choose the correct meaning of the idiom: To be in the same boat",
    options: ["A) To be in the same difficult situation as others", "B) To travel together", "C) To own a boat jointly", "D) To agree completely"],
    answer: "A",
    explanation: "It means sharing the same difficulty."
  },
  {
    id: 20977, section: "English",
    text: "Choose the correct meaning of the idiom: Between the devil and the deep sea",
    options: ["A) Facing two equally bad choices", "B) Lost at sea", "C) In a safe place", "D) Very religious"],
    answer: "A",
    explanation: "It means being caught between two dangerous alternatives."
  },
  {
    id: 20978, section: "English",
    text: "Choose the one word for: Animals that can live both on land and in water",
    options: ["A) Mammals", "B) Reptiles", "C) Crustaceans", "D) Amphibians"],
    answer: "D",
    explanation: "Amphibians, such as frogs, live both on land and in water."
  },
  {
    id: 20979, section: "English",
    text: "Choose the correctly spelt word.",
    options: ["A) Mischeivous", "B) Mischievious", "C) Mischievous", "D) Mischevous"],
    answer: "C",
    explanation: "The correct spelling is M-I-S-C-H-I-E-V-O-U-S."
  },
  {
    id: 20980, section: "English",
    text: "Arrange the sentences in a logical order:<br>P. Within a decade, the mangroves had grown back along the creek.<br>Q. The village decided to stop dumping waste in the creek.<br>R. Fishermen reported that the catch of crabs had increased.<br>S. Volunteers planted mangrove saplings along its banks.",
    options: ["A) QSPR", "B) QSRP", "C) QPSR", "D) SQPR"],
    answer: "A",
    explanation: "Q (decision) → S (planting) → P (mangroves grow back) → R (crab catch increases)."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Geography of Goa
  // ════════════════════════════════════════════════════════════
  {
    id: 20981, section: "Geography of Goa",
    text: "Goa lies roughly along which line of longitude?",
    options: ["A) 74° East", "B) 68° East", "C) 80° East", "D) 88° East"],
    answer: "A",
    explanation: "Goa lies between about 73°40' E and 74°20' E, close to 74° E."
  },
  {
    id: 20982, section: "Geography of Goa",
    text: "Sattari taluka shares its eastern border with which district of Karnataka?",
    options: ["A) Shivamogga", "B) Uttara Kannada", "C) Belagavi", "D) Dharwad"],
    answer: "C",
    explanation: "Sattari borders Belagavi district of Karnataka (and Sindhudurg of Maharashtra to the north)."
  },
  {
    id: 20983, section: "Geography of Goa",
    text: "Pernem taluka in the north of Goa shares its border with which district of Maharashtra?",
    options: ["A) Kolhapur", "B) Ratnagiri", "C) Sindhudurg", "D) Raigad"],
    answer: "C",
    explanation: "Pernem borders Sindhudurg district across the Terekhol river."
  },
  {
    id: 20984, section: "Geography of Goa",
    text: "The Mapusa river, flowing past the town of Mapusa, is a tributary of which river?",
    options: ["A) Mandovi", "B) Sal", "C) Chapora", "D) Zuari"],
    answer: "A",
    explanation: "The Mapusa river joins the Mandovi near Panaji."
  },
  {
    id: 20985, section: "Geography of Goa",
    text: "The Talpona river flows through which taluka of Goa?",
    options: ["A) Ponda", "B) Canacona", "C) Pernem", "D) Bicholim"],
    answer: "B",
    explanation: "The Talpona and Galgibag rivers are in Canacona taluka in south Goa."
  },
  {
    id: 20986, section: "Geography of Goa",
    text: "Grande Island, popular for diving and snorkelling, lies off the coast near",
    options: ["A) Bardez", "B) Mormugao (Vasco)", "C) Canacona", "D) Pernem"],
    answer: "B",
    explanation: "Grande Island is off the Mormugao peninsula, at the mouth of the Zuari."
  },
  {
    id: 20987, section: "Geography of Goa",
    text: "The Kesarval spring, a well-known natural spring of Goa, is located near",
    options: ["A) Mapusa", "B) Mollem", "C) Verna", "D) Valpoi"],
    answer: "C",
    explanation: "Kesarval spring is near Verna in Salcete taluka."
  },
  {
    id: 20988, section: "Geography of Goa",
    text: "During the monsoon, mechanised fishing is banned along Goa's coast every year from",
    options: ["A) 1 April to 31 May", "B) 1 June to 31 July", "C) 1 January to 28 February", "D) 1 October to 30 November"],
    answer: "B",
    explanation: "The annual 61-day monsoon fishing ban protects fish during their breeding season."
  },
  {
    id: 20989, section: "Geography of Goa",
    text: "Which fish, locally called 'bangdo', is among the most important catches of Goa's fishermen?",
    options: ["A) Mackerel", "B) Tuna", "C) Kingfish", "D) Pomfret"],
    answer: "A",
    explanation: "Bangdo (Indian mackerel) and tarlo (sardine) are among the most important catches."
  },
  {
    id: 20990, section: "Geography of Goa",
    text: "Which horticultural crop occupies the largest area in Goa?",
    options: ["A) Coconut", "B) Arecanut", "C) Mango", "D) Cashew"],
    answer: "D",
    explanation: "Cashew covers the largest horticultural area, mostly on the laterite slopes of the midlands. Coconut is second."
  },
  {
    id: 20991, section: "Geography of Goa",
    text: "In Goa, the paddy crop grown in the winter (rabi) season with irrigation is locally called",
    options: ["A) Kharif", "B) Khazan", "C) Vaingan", "D) Sorod"],
    answer: "C",
    explanation: "'Sorod' is the monsoon (kharif) crop and 'Vaingan' the winter (rabi) crop."
  },
  {
    id: 20992, section: "Geography of Goa",
    text: "The Opa water treatment plant, which supplies water to Ponda and parts of Tiswadi, draws water from which river?",
    options: ["A) Talpona", "B) Khandepar", "C) Chapora", "D) Sal"],
    answer: "B",
    explanation: "The Opa plant near Ponda draws water from the Khandepar river, a tributary of the Mandovi."
  },
  {
    id: 20993, section: "Geography of Goa",
    text: "The Anjunem dam is located in which taluka of Goa?",
    options: ["A) Canacona", "B) Salcete", "C) Sanguem", "D) Sattari"],
    answer: "D",
    explanation: "The Anjunem irrigation dam is in Sattari taluka."
  },
  {
    id: 20994, section: "Geography of Goa",
    text: "The Amthane dam, which augments water supply in north Goa, is located in which taluka?",
    options: ["A) Tiswadi", "B) Bicholim", "C) Quepem", "D) Pernem"],
    answer: "B",
    explanation: "The Amthane dam is in Bicholim taluka."
  },
  {
    id: 20995, section: "Geography of Goa",
    text: "In 2018, the Supreme Court of India quashed the renewal of around 88 mining leases in Goa. Mining in Goa was mainly for",
    options: ["A) limestone", "B) coal", "C) gold", "D) iron ore"],
    answer: "D",
    explanation: "In the Goa Foundation case (February 2018), the Supreme Court quashed the second renewal of 88 iron-ore leases, which halted most mining."
  },
  {
    id: 20996, section: "Geography of Goa",
    text: "Which is the main Konkan Railway station of Goa, serving Margao?",
    options: ["A) Pernem", "B) Karmali", "C) Thivim", "D) Madgaon"],
    answer: "D",
    explanation: "Madgaon (Margao) is the main Konkan Railway station in Goa. It is also a junction with the South Western Railway line."
  },
  {
    id: 20997, section: "Geography of Goa",
    text: "The railway line that passes right beside the Dudhsagar waterfall connects Goa (Vasco) with",
    options: ["A) Londa in Karnataka", "B) Ratnagiri", "C) Mumbai", "D) Mangaluru"],
    answer: "A",
    explanation: "The South Western Railway's Vasco–Madgaon–Kulem–Londa line crosses the Western Ghats beside Dudhsagar falls."
  },
  {
    id: 20998, section: "Geography of Goa",
    text: "According to the 2011 Census, about what percentage of Goa's population lives in urban areas?",
    options: ["A) About 45%", "B) About 62%", "C) About 31%", "D) About 80%"],
    answer: "B",
    explanation: "Goa is one of the most urbanised states, with about 62% of its people in urban areas."
  },
  {
    id: 20999, section: "Geography of Goa",
    text: "According to the 2011 Census, Goa's literacy rate was approximately",
    options: ["A) 74.0%", "B) 88.7%", "C) 65.4%", "D) 94.0%"],
    answer: "B",
    explanation: "Goa's literacy rate was 88.7%, well above the national average of about 74%."
  },
  {
    id: 21000, section: "Geography of Goa",
    text: "According to the 2011 Census, Goa's population density was about",
    options: ["A) 382 persons per sq km", "B) 150 persons per sq km", "C) 394 persons per sq km", "D) 1,102 persons per sq km"],
    answer: "C",
    explanation: "Goa's density was 394 per sq km, close to the national figure of 382."
  }
];
