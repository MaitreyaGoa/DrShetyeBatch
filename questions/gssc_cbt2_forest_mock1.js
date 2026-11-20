// gssc_cbt2_forest_mock1.js – Dr Shetye Academic Programme
// CBT 2 Forest Mock 1 · GSSC Advt. No. 2 of 2026 · CBT-II · Round Forester · Forest Guard
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 20121–20180
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Geography of Goa Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Long before the word 'conservation' entered official vocabulary, villages along the Western Ghats protected patches of forest dedicated to a local deity. In Goa these sacred groves, known by names such as devrai or pann, were left largely untouched: no tree could be felled, no branch lopped, and sometimes not even a fallen twig removed without ritual permission. The motive was religious rather than ecological, yet the result was remarkable. Many groves preserve old-growth trees, rare medicinal plants and perennial springs that have vanished from the surrounding landscape.\n\nEcologists value these groves as living archives. Because they have been protected for generations, they show what the forest of the region might have looked like before intensive clearing, and they serve as refuges from which seeds and animals can recolonise degraded land. Some groves shelter freshwater swamps of a kind found in very few places in India.\n\nThe protection, however, has always rested on belief and custom, and both are changing. As younger generations move away and land values rise, the informal rules that guarded the groves carry less weight. Legal recognition can help, but law alone cannot replace the sense of ownership that once made every villager a guardian. The future of the sacred groves may depend on whether that sense can be renewed in a new language — one that speaks of water security and heritage as well as of the gods."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 20121, section: "Reasoning",
    text: "Find the next term in the series: 3, 5, 9, 17, 33, ?",
    options: ["A) 66", "B) 63", "C) 65", "D) 64"],
    answer: "C",
    explanation: "Each term is (previous × 2) − 1: 33 × 2 − 1 = 65."
  },
  {
    id: 20122, section: "Reasoning",
    text: "Find the next letter in the series: Z, X, U, Q, L, ?",
    options: ["A) F", "B) E", "C) G", "D) H"],
    answer: "A",
    explanation: "Positions 26, 24, 21, 17, 12 decrease by 2, 3, 4, 5, so the next step is −6: 12 − 6 = 6, which is F."
  },
  {
    id: 20123, section: "Reasoning",
    text: "If TREE = 48 (sum of the alphabetical positions of its letters), what is LEAF?",
    options: ["A) 28", "B) 26", "C) 22", "D) 24"],
    answer: "D",
    explanation: "L(12) + E(5) + A(1) + F(6) = 24."
  },
  {
    id: 20124, section: "Reasoning",
    text: "M is the brother of N. N is the sister of O. O is the father of P. How is M related to P?",
    options: ["A) Uncle", "B) Brother", "C) Father", "D) Grandfather"],
    answer: "A",
    explanation: "M, N and O are siblings, and O is P's father. So M is P's paternal uncle."
  },
  {
    id: 20125, section: "Reasoning",
    text: "A forest guard walks 10 m South, turns right and walks 15 m, turns right and walks 30 m, then turns right again and walks 15 m. Where is he now with respect to his starting point?",
    options: ["A) 30 m North", "B) 10 m North", "C) 20 m South", "D) 20 m North"],
    answer: "D",
    explanation: "(0,−10) → west 15 → (−15,−10) → north 30 → (−15,20) → east 15 → (0,20). He is 20 m North of the start."
  },
  {
    id: 20126, section: "Reasoning",
    text: "Among P, Q, R, S and T, Q is taller than R but shorter than P. S is taller than P. T is the shortest of all. Who is the third tallest?",
    options: ["A) P", "B) R", "C) Q", "D) S"],
    answer: "C",
    explanation: "The order is S &gt; P &gt; Q &gt; R &gt; T, so the third tallest is Q."
  },
  {
    id: 20127, section: "Reasoning",
    text: "Statements: All trees are plants. Some plants are shrubs.<br>Conclusions:<br>I. Some trees are shrubs.<br>II. Some shrubs are plants.",
    options: ["A) Only I follows", "B) Neither I nor II follows", "C) Both I and II follow", "D) Only II follows"],
    answer: "D",
    explanation: "II is simply 'some plants are shrubs' reversed, so it follows. Trees and shrubs may not overlap, so I does not follow."
  },
  {
    id: 20128, section: "Reasoning",
    text: "Find the next term in the series: 2, 12, 36, 80, 150, ?",
    options: ["A) 252", "B) 256", "C) 228", "D) 240"],
    answer: "A",
    explanation: "The terms are n³ + n²: 1+1, 8+4, 27+9, 64+16, 125+25, so the next is 216 + 36 = 252."
  },
  {
    id: 20129, section: "Reasoning",
    text: "Find the odd one out: Teak, Sal, Rosewood, Bamboo",
    options: ["A) Teak", "B) Rosewood", "C) Sal", "D) Bamboo"],
    answer: "D",
    explanation: "Teak, sal and rosewood are timber trees. Bamboo is a giant grass (family Poaceae)."
  },
  {
    id: 20130, section: "Reasoning",
    text: "What day of the week was 1 January 2000?",
    options: ["A) Friday", "B) Saturday", "C) Sunday", "D) Monday"],
    answer: "B",
    explanation: "1 January 2001 was a Monday. The year 2000 was a leap year (366 days = 2 odd days), so 1 January 2000 was Monday − 2 = Saturday."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 20131, section: "Numerical Ability",
    text: "A forest area of 1,200 hectares loses 5% of its area every year to encroachment. What will the area be after 2 years?",
    options: ["A) 1,090 ha", "B) 1,100 ha", "C) 1,083 ha", "D) 1,080 ha"],
    answer: "C",
    explanation: "1200 × 0.95 × 0.95 = 1083 hectares."
  },
  {
    id: 20132, section: "Numerical Ability",
    text: "A trader sells two articles at ₹990 each. He gains 10% on one and loses 10% on the other. What is his overall result?",
    options: ["A) Loss of 2%", "B) No profit, no loss", "C) Gain of 1%", "D) Loss of 1%"],
    answer: "D",
    explanation: "When the selling prices are equal and the gain% and loss% are equal (x%), there is always a loss of x²/100 % = 1%."
  },
  {
    id: 20133, section: "Numerical Ability",
    text: "A forest guard covers 36 km on patrol, walking part of it at 4 km/h and cycling the rest at 12 km/h. If the patrol takes 5 hours, how far did he walk?",
    options: ["A) 15 km", "B) 18 km", "C) 12 km", "D) 9 km"],
    answer: "C",
    explanation: "w/4 + (36 − w)/12 = 5 gives 3w + 36 − w = 60, so w = 12 km."
  },
  {
    id: 20134, section: "Numerical Ability",
    text: "20 workers can plant 1,000 saplings in 5 days. How many saplings can 15 workers plant in 8 days at the same rate?",
    options: ["A) 1,000", "B) 1,500", "C) 960", "D) 1,200"],
    answer: "D",
    explanation: "Each worker plants 1000/(20 × 5) = 10 saplings a day. 15 × 8 × 10 = 1,200."
  },
  {
    id: 20135, section: "Numerical Ability",
    text: "The compound interest on a sum for 2 years at 5% per annum is ₹410. What is the simple interest on the same sum for the same period and rate?",
    options: ["A) ₹400", "B) ₹390", "C) ₹410", "D) ₹420"],
    answer: "A",
    explanation: "P × (1.05² − 1) = 0.1025P = 410, so P = 4000. SI = 4000 × 5 × 2/100 = ₹400."
  },
  {
    id: 20136, section: "Numerical Ability",
    text: "The ratio of boys to girls in a class is 5 : 3. If 10 more girls join, the ratio becomes 5 : 4. How many boys are there?",
    options: ["A) 40", "B) 50", "C) 60", "D) 45"],
    answer: "B",
    explanation: "5x/(3x + 10) = 5/4 gives 20x = 15x + 50, so x = 10. Boys = 50."
  },
  {
    id: 20137, section: "Numerical Ability",
    text: "The average of six numbers is 30. The average of the first four is 25 and that of the last three is 35. What is the fourth number?",
    options: ["A) 20", "B) 25", "C) 35", "D) 30"],
    answer: "B",
    explanation: "The fourth number is counted twice: 4×25 + 3×35 − 6×30 = 100 + 105 − 180 = 25."
  },
  {
    id: 20138, section: "Numerical Ability",
    text: "In an examination, 65% of the candidates passed in English, 55% passed in Mathematics and 25% failed in both. What percentage passed in both?",
    options: ["A) 40%", "B) 35%", "C) 45%", "D) 50%"],
    answer: "C",
    explanation: "Failed in English = 35%, failed in Maths = 45%. Failed in at least one = 35 + 45 − 25 = 55%, so 45% passed both."
  },
  {
    id: 20139, section: "Numerical Ability",
    text: "A circular garden of radius 21 m has a path 3.5 m wide around it on the outside. What is the area of the path? (Take π = 22/7)",
    options: ["A) 539 m²", "B) 500.5 m²", "C) 484 m²", "D) 462 m²"],
    answer: "B",
    explanation: "Area = π(24.5² − 21²) = 22/7 × (24.5 + 21)(3.5) = 22/7 × 159.25 = 500.5 m²."
  },
  {
    id: 20140, section: "Numerical Ability",
    text: "The sum of the digits of a two-digit number is 9. When the digits are reversed, the number increases by 27. What is the number?",
    options: ["A) 45", "B) 36", "C) 27", "D) 63"],
    answer: "B",
    explanation: "x + y = 9 and 9(y − x) = 27, so y − x = 3. Then x = 3 and y = 6, giving 36."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 20141, section: "English",
    passage: "passage_1",
    text: "Which of the following best expresses the main idea of the passage?",
    options: ["A) Religious beliefs have harmed forest conservation in Goa", "B) Sacred groves should be converted into government plantations", "C) Sacred groves protected by custom have great ecological value but face threats as traditional beliefs weaken", "D) Sacred groves contain no rare species"],
    answer: "C",
    explanation: "The passage explains their origin, their ecological value and the risk they now face."
  },
  {
    id: 20142, section: "English",
    passage: "passage_1",
    text: "According to the passage, the original motive for protecting sacred groves was",
    options: ["A) scientific", "B) legal", "C) economic", "D) religious"],
    answer: "D",
    explanation: "'The motive was religious rather than ecological.'"
  },
  {
    id: 20143, section: "English",
    passage: "passage_1",
    text: "Why do ecologists call sacred groves 'living archives'?",
    options: ["A) They are the oldest temples in Goa", "B) They show what the region's forest might have looked like before intensive clearing", "C) They contain written records of village history", "D) They are maintained by government archives"],
    answer: "B",
    explanation: "Explained at the start of the second paragraph."
  },
  {
    id: 20144, section: "English",
    passage: "passage_1",
    text: "The author suggests that the future of the sacred groves depends mainly on",
    options: ["A) renewing the community's sense of ownership in terms that matter today", "B) moving the deities to new temples", "C) converting the groves into tourist parks", "D) stricter penalties for tree felling alone"],
    answer: "A",
    explanation: "Law alone cannot replace the sense of ownership, which must be renewed 'in a new language' of water security and heritage."
  },
  {
    id: 20145, section: "English",
    passage: "passage_1",
    text: "The word 'recolonise', as used in the passage, most nearly means",
    options: ["A) destroy", "B) measure", "C) settle again", "D) abandon"],
    answer: "C",
    explanation: "Seeds and animals spreading from the groves can settle again on degraded land."
  },
  {
    id: 20146, section: "English",
    text: "Choose the word most similar in meaning to ARID.",
    options: ["A) Dry", "B) Cold", "C) Fertile", "D) Humid"],
    answer: "A",
    explanation: "Arid means having little or no rain; dry."
  },
  {
    id: 20147, section: "English",
    text: "Choose the word most similar in meaning to PRISTINE.",
    options: ["A) Ancient", "B) Unspoilt", "C) Ordinary", "D) Polluted"],
    answer: "B",
    explanation: "Pristine means in its original, unspoilt condition."
  },
  {
    id: 20148, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to SCARCE.",
    options: ["A) Limited", "B) Plentiful", "C) Few", "D) Rare"],
    answer: "B",
    explanation: "Scarce means insufficient; its opposite is plentiful."
  },
  {
    id: 20149, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to BARREN.",
    options: ["A) Fertile", "B) Empty", "C) Sterile", "D) Desolate"],
    answer: "A",
    explanation: "Barren land produces nothing; its opposite is fertile."
  },
  {
    id: 20150, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Many a tree (A) / were cut down (B) / in this forest (C) / last year. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "'Many a' takes a singular noun and verb: 'Many a tree was cut down'."
  },
  {
    id: 20151, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The forest guard (A) / as well as his assistants (B) / were present (C) / at the site. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "With 'as well as', the verb agrees with the first subject, 'the forest guard': 'was present'."
  },
  {
    id: 20152, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>He has been (A) / working as a (B) / forest guard (C) / since ten years. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "D",
    explanation: "A period of time takes 'for': 'for ten years'. 'Since' is used with a point of time."
  },
  {
    id: 20153, section: "English",
    text: "Fill in the blank: The sanctuary is home ______ many rare species of birds.",
    options: ["A) with", "B) for", "C) of", "D) to"],
    answer: "D",
    explanation: "The idiomatic phrase is 'home to'."
  },
  {
    id: 20154, section: "English",
    text: "Fill in the blank: Large-scale deforestation has resulted ______ severe soil erosion.",
    options: ["A) in", "B) from", "C) into", "D) with"],
    answer: "A",
    explanation: "'Result in' introduces the effect, while 'result from' introduces the cause. Here soil erosion is the effect."
  },
  {
    id: 20155, section: "English",
    text: "Fill in the blank: The officer was found ______ in his duty and was suspended.",
    options: ["A) remote", "B) remit", "C) remiss", "D) remorse"],
    answer: "C",
    explanation: "Remiss means careless or negligent in one's duty."
  },
  {
    id: 20156, section: "English",
    text: "Choose the correct meaning of the idiom: To beat about the bush",
    options: ["A) To avoid coming to the point", "B) To work very hard", "C) To search a forest carefully", "D) To punish someone"],
    answer: "A",
    explanation: "To beat about the bush is to talk around a subject without coming to the point."
  },
  {
    id: 20157, section: "English",
    text: "Choose the correct meaning of the idiom: Cannot see the wood for the trees",
    options: ["A) Too occupied with details to see the overall picture", "B) Short-sighted in a medical sense", "C) Unwilling to cut down trees", "D) Unable to find one's way in a forest"],
    answer: "A",
    explanation: "It means being so focused on details that one misses the whole."
  },
  {
    id: 20158, section: "English",
    text: "Choose the one word for: The scientific study of birds",
    options: ["A) Herpetology", "B) Ornithology", "C) Ichthyology", "D) Entomology"],
    answer: "B",
    explanation: "Ornithology is the study of birds. Entomology studies insects, herpetology reptiles and amphibians, and ichthyology fish."
  },
  {
    id: 20159, section: "English",
    text: "Choose the correct passive form of: They will plant a thousand saplings tomorrow.",
    options: ["A) A thousand saplings will be plant tomorrow.", "B) A thousand saplings would be planted tomorrow.", "C) A thousand saplings are planted tomorrow.", "D) A thousand saplings will be planted tomorrow."],
    answer: "D",
    explanation: "Future simple active becomes 'will be + V3'."
  },
  {
    id: 20160, section: "English",
    text: "Choose the correct indirect speech: The ranger said to us, \"Do not light a fire in the forest.\"",
    options: ["A) The ranger said us not to light a fire in the forest.", "B) The ranger told us that do not light a fire in the forest.", "C) The ranger told us not to light a fire in the forest.", "D) The ranger asked us that we do not light a fire in the forest."],
    answer: "C",
    explanation: "A negative command becomes 'told/ordered + object + not to + verb'."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Geography of Goa
  // ════════════════════════════════════════════════════════════
  {
    id: 20161, section: "Geography of Goa",
    text: "What is the approximate geographical area of Goa?",
    options: ["A) 2,702 sq km", "B) 4,702 sq km", "C) 5,702 sq km", "D) 3,702 sq km"],
    answer: "D",
    explanation: "Goa covers about 3,702 sq km, which makes it India's smallest state by area."
  },
  {
    id: 20162, section: "Geography of Goa",
    text: "Which river forms the northern boundary of Goa with Maharashtra?",
    options: ["A) Chapora", "B) Mandovi", "C) Talpona", "D) Terekhol"],
    answer: "D",
    explanation: "The Terekhol (Tiracol) river separates Goa's Pernem taluka from Maharashtra."
  },
  {
    id: 20163, section: "Geography of Goa",
    text: "Which is the highest peak in Goa?",
    options: ["A) Morlemgad", "B) Vagheri", "C) Sonsogor", "D) Dudhsagar"],
    answer: "C",
    explanation: "Sonsogor, in the Sahyadri range in Sattari taluka, is Goa's highest peak."
  },
  {
    id: 20164, section: "Geography of Goa",
    text: "Which is the largest taluka of Goa by area?",
    options: ["A) Canacona", "B) Sattari", "C) Salcete", "D) Sanguem"],
    answer: "D",
    explanation: "Sanguem is the largest taluka by area. Mormugao is the smallest."
  },
  {
    id: 20165, section: "Geography of Goa",
    text: "Which is the newest (12th) taluka of Goa, created in 2015?",
    options: ["A) Mormugao", "B) Dharbandora", "C) Quepem", "D) Bicholim"],
    answer: "B",
    explanation: "Dharbandora was carved mainly out of Sanguem taluka in 2015."
  },
  {
    id: 20166, section: "Geography of Goa",
    text: "The Dudhsagar waterfall is located on which river?",
    options: ["A) Mandovi (Mhadei)", "B) Chapora", "C) Zuari", "D) Sal"],
    answer: "A",
    explanation: "Dudhsagar falls on the Mandovi, on the Goa–Karnataka border inside Bhagwan Mahavir Wildlife Sanctuary."
  },
  {
    id: 20167, section: "Geography of Goa",
    text: "The Cumbarjua canal connects which two rivers of Goa?",
    options: ["A) Zuari and Sal", "B) Terekhol and Chapora", "C) Mandovi and Zuari", "D) Chapora and Mandovi"],
    answer: "C",
    explanation: "The Cumbarjua canal links the Mandovi and Zuari estuaries, forming an important inland waterway used by barges."
  },
  {
    id: 20168, section: "Geography of Goa",
    text: "The Dr. Salim Ali Bird Sanctuary, a mangrove habitat, is located on which island?",
    options: ["A) Grande Island", "B) Chorao", "C) Anjediva", "D) Divar"],
    answer: "B",
    explanation: "The sanctuary is on the western tip of Chorao island in the Mandovi estuary (Tiswadi taluka)."
  },
  {
    id: 20169, section: "Geography of Goa",
    text: "Which is the only National Park in Goa?",
    options: ["A) Mollem (Bhagwan Mahavir) National Park", "B) Netravali National Park", "C) Cotigao National Park", "D) Bondla National Park"],
    answer: "A",
    explanation: "Mollem National Park lies within the Bhagwan Mahavir Wildlife Sanctuary. Cotigao, Bondla and Netravali are wildlife sanctuaries."
  },
  {
    id: 20170, section: "Geography of Goa",
    text: "The Cotigao Wildlife Sanctuary is located in which taluka?",
    options: ["A) Sattari", "B) Ponda", "C) Canacona", "D) Sanguem"],
    answer: "C",
    explanation: "Cotigao Wildlife Sanctuary is in Canacona taluka in south Goa."
  },
  {
    id: 20171, section: "Geography of Goa",
    text: "Which type of soil is predominant in Goa?",
    options: ["A) Laterite soil", "B) Alluvial soil", "C) Desert soil", "D) Black cotton soil"],
    answer: "A",
    explanation: "Laterite soil, rich in iron and aluminium oxides and formed by leaching under heavy rainfall, covers most of Goa."
  },
  {
    id: 20172, section: "Geography of Goa",
    text: "What is the principal food crop of Goa?",
    options: ["A) Wheat", "B) Rice", "C) Millet", "D) Maize"],
    answer: "B",
    explanation: "Rice (paddy) is Goa's main food crop. It is grown mainly in the kharif (monsoon) season, including on khazan lands."
  },
  {
    id: 20173, section: "Geography of Goa",
    text: "What is the state animal of Goa?",
    options: ["A) Elephant", "B) Sambar", "C) Tiger", "D) Gaur (Indian bison)"],
    answer: "D",
    explanation: "The Gaur (Bos gaurus) is Goa's state animal."
  },
  {
    id: 20174, section: "Geography of Goa",
    text: "Mormugao Port, one of India's major ports, is located at the mouth of which river?",
    options: ["A) Mandovi", "B) Zuari", "C) Sal", "D) Chapora"],
    answer: "B",
    explanation: "Mormugao harbour lies at the Zuari estuary, near Vasco da Gama. It has long been a leading iron-ore export port."
  },
  {
    id: 20175, section: "Geography of Goa",
    text: "The new international airport at Mopa in Pernem taluka is named",
    options: ["A) Dayanand Bandodkar International Airport", "B) Manohar International Airport", "C) Goa Liberation International Airport", "D) Jack de Sequeira International Airport"],
    answer: "B",
    explanation: "It is named after former Chief Minister and Defence Minister Manohar Parrikar and began operations in January 2023."
  },
  {
    id: 20176, section: "Geography of Goa",
    text: "Galgibag beach, known for the nesting of Olive Ridley turtles, is located in which taluka?",
    options: ["A) Canacona", "B) Salcete", "C) Pernem", "D) Bardez"],
    answer: "A",
    explanation: "Galgibag (Canacona) and Morjim (Pernem) are Goa's main Olive Ridley nesting beaches."
  },
  {
    id: 20177, section: "Geography of Goa",
    text: "The Selaulim dam, a major source of drinking water for south Goa, is located in which taluka?",
    options: ["A) Sattari", "B) Bicholim", "C) Sanguem", "D) Pernem"],
    answer: "C",
    explanation: "The Selaulim irrigation project is in Sanguem taluka. It supplies water to much of south Goa."
  },
  {
    id: 20178, section: "Geography of Goa",
    text: "According to the 2011 Census, the population of Goa was approximately",
    options: ["A) 18.40 lakh", "B) 11.20 lakh", "C) 21.60 lakh", "D) 14.58 lakh"],
    answer: "D",
    explanation: "Goa's population in 2011 was 14,58,545."
  },
  {
    id: 20179, section: "Geography of Goa",
    text: "Goa receives most of its annual rainfall from the",
    options: ["A) South-West monsoon", "B) Western disturbances", "C) Cyclones from the Bay of Bengal", "D) North-East monsoon"],
    answer: "A",
    explanation: "The South-West monsoon (June–September) brings most of Goa's rainfall."
  },
  {
    id: 20180, section: "Geography of Goa",
    text: "Match the beaches with their talukas:<br>(P) Arambol (Q) Calangute (R) Colva (S) Palolem<br>(1) Salcete (2) Canacona (3) Pernem (4) Bardez",
    options: ["A) P-3, Q-1, R-4, S-2", "B) P-3, Q-4, R-2, S-1", "C) P-3, Q-4, R-1, S-2", "D) P-4, Q-3, R-1, S-2"],
    answer: "C",
    explanation: "Arambol is in Pernem, Calangute in Bardez, Colva in Salcete and Palolem in Canacona."
  }
];
