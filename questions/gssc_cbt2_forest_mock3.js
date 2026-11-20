// gssc_cbt2_forest_mock3.js – Dr Shetye Academic Programme
// CBT 2 Forest Mock 3 · GSSC Advt. No. 2 of 2026 · CBT-II · Round Forester · Forest Guard
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 20881–20940
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Geography of Goa Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Not every threat to a forest arrives with an axe or a bulldozer. Some come quietly, as seeds carried on vehicles or plants introduced for gardens. Lantana, a flowering shrub brought to India as an ornamental plant in the nineteenth century, now covers vast stretches of forest across the country. It grows densely, shades out native seedlings and releases chemicals that suppress the growth of other plants. Where it spreads, the variety of grasses and herbs on which deer and other grazers depend declines, and the forest floor becomes more prone to intense fires.\n\nRemoving an invasive species once it is established is slow and costly. Lantana regrows from cut stems, so simply slashing it back often makes the problem worse. The most successful efforts uproot the plant entirely and then restore native grasses quickly, before the shrub can return. Some communities have found ways to turn the cleared lantana into furniture and handicrafts, giving local people a reason to keep the land clear.\n\nThe wider lesson is that prevention is far cheaper than cure. Careful checks on the introduction of new plants, and early action when an unfamiliar species appears, can spare a forest decades of damage."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 20881, section: "Reasoning",
    text: "Find the next term in the series: 2, 6, 15, 31, 56, ?",
    options: ["A) 87", "B) 96", "C) 92", "D) 91"],
    answer: "C",
    explanation: "The differences are 4, 9, 16, 25 (squares of 2 to 5), so the next difference is 36: 56 + 36 = 92."
  },
  {
    id: 20882, section: "Reasoning",
    text: "Find the next term in the series: AZ, BY, DW, GT, KP, ?",
    options: ["A) PK", "B) PL", "C) OK", "D) QK"],
    answer: "A",
    explanation: "The first letters move +1, +2, +3, +4, +5 (K → P) and the second letters move −1, −2, −3, −4, −5 (P → K)."
  },
  {
    id: 20883, section: "Reasoning",
    text: "In a certain code, TIGER is written as SHFDQ. How will LEOPARD be written in that code?",
    options: ["A) KDNOZQC", "B) KDNOZQE", "C) MFPQBSE", "D) KDOOZQC"],
    answer: "A",
    explanation: "Each letter moves one place back: L→K, E→D, O→N, P→O, A→Z, R→Q, D→C."
  },
  {
    id: 20884, section: "Reasoning",
    text: "Pointing to a boy, Meena says, \"He is the son of my grandfather's only son.\" How is the boy related to Meena?",
    options: ["A) Uncle", "B) Nephew", "C) Cousin", "D) Brother"],
    answer: "D",
    explanation: "Her grandfather's only son is her father, and her father's son is her brother."
  },
  {
    id: 20885, section: "Reasoning",
    text: "Five friends A, B, C, D and E each like a different tree: Teak, Sal, Neem, Mango and Jamun. C likes Jamun and D likes Teak. B likes neither Teak nor Sal. E does not like Mango. A likes neither Mango nor Sal. Who likes Sal?",
    options: ["A) A", "B) E", "C) C", "D) B"],
    answer: "B",
    explanation: "With Jamun (C) and Teak (D) taken, A, B and E share Sal, Neem and Mango. Only B can take Mango. A cannot take Sal, so A = Neem and E = Sal."
  },
  {
    id: 20886, section: "Reasoning",
    text: "A forest guard walks 20 m South, turns left and walks 30 m, turns left again and walks 20 m, then turns right and walks 10 m. How far is he from his starting point, and in which direction?",
    options: ["A) 10 m North", "B) 40 m West", "C) 30 m East", "D) 40 m East"],
    answer: "D",
    explanation: "(0,−20) → east 30 → (30,−20) → north 20 → (30,0) → east 10 → (40,0). He is 40 m East of the start."
  },
  {
    id: 20887, section: "Reasoning",
    text: "Statements: Some trees are shrubs. No shrub is a climber. All climbers are plants.<br>Conclusions:<br>I. Some trees are not climbers.<br>II. Some plants are not shrubs.<br>III. All trees being climbers is a possibility.",
    options: ["A) Only I follows", "B) Only II and III follow", "C) Only I and II follow", "D) All I, II and III follow"],
    answer: "C",
    explanation: "The trees that are shrubs cannot be climbers (I follows). Climbers are plants but never shrubs, so some plants are not shrubs (II follows). III is impossible because some trees are shrubs."
  },
  {
    id: 20888, section: "Reasoning",
    text: "How many pairs of letters in the word FOREST have as many letters between them in the word as there are between them in the English alphabet?",
    options: ["A) Three", "B) None", "C) One", "D) Two"],
    answer: "C",
    explanation: "Only S and T qualify: they are adjacent in both the word and the alphabet. No other pair matches."
  },
  {
    id: 20889, section: "Reasoning",
    text: "If A ≥ B &gt; C, C = D, D &gt; E and F &gt; A, which conclusions follow?<br>I. F &gt; C<br>II. B &gt; E",
    options: ["A) Neither follows", "B) Only II follows", "C) Only I follows", "D) Both I and II follow"],
    answer: "D",
    explanation: "F &gt; A ≥ B &gt; C gives F &gt; C. B &gt; C = D &gt; E gives B &gt; E."
  },
  {
    id: 20890, section: "Reasoning",
    text: "Statement: The Forest Department has banned plastic in all the wildlife sanctuaries of the state.<br>Conclusions:<br>I. Plastic is harmful to wildlife.<br>II. Tourists will stop visiting the sanctuaries.",
    options: ["A) Only conclusion I follows", "B) Neither follows", "C) Only conclusion II follows", "D) Both follow"],
    answer: "A",
    explanation: "The ban only makes sense if plastic harms wildlife (I). II is an unjustified extreme."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 20891, section: "Numerical Ability",
    text: "A plantation has teak and sal trees in the ratio 5 : 3. If 60 more sal saplings are planted, the ratio becomes 5 : 4. How many teak trees are there?",
    options: ["A) 250", "B) 360", "C) 300", "D) 240"],
    answer: "C",
    explanation: "5x/(3x + 60) = 5/4 gives 20x = 15x + 300, so x = 60 and there are 300 teak trees."
  },
  {
    id: 20892, section: "Numerical Ability",
    text: "A trader mixes 50 kg of rice costing ₹36/kg with 30 kg costing ₹44/kg. At what price per kg must he sell the mixture to gain 20%?",
    options: ["A) ₹44.40", "B) ₹48.00", "C) ₹46.80", "D) ₹45.00"],
    answer: "C",
    explanation: "Cost = 1,800 + 1,320 = 3,120 for 80 kg, i.e. ₹39/kg. With 20% gain: 39 × 1.2 = ₹46.80."
  },
  {
    id: 20893, section: "Numerical Ability",
    text: "Walking at 5 km/h, a man reaches his office 10 minutes late. Walking at 6 km/h, he reaches 5 minutes early. How far is his office?",
    options: ["A) 6 km", "B) 9 km", "C) 5 km", "D) 7.5 km"],
    answer: "D",
    explanation: "d/5 − d/6 = 15 min = 1/4 h, so d/30 = 1/4 and d = 7.5 km."
  },
  {
    id: 20894, section: "Numerical Ability",
    text: "8 men or 12 women can do a work in 25 days. In how many days can 6 men and 11 women do it?",
    options: ["A) 15 days", "B) 18 days", "C) 20 days", "D) 12 days"],
    answer: "A",
    explanation: "1 man = 1.5 women, so 6 men + 11 women = 20 women. 12 women take 25 days, so 20 women take 12 × 25/20 = 15 days."
  },
  {
    id: 20895, section: "Numerical Ability",
    text: "In how many years will ₹6,250 amount to ₹6,760 at 4% per annum compound interest?",
    options: ["A) 1.5 years", "B) 3 years", "C) 4 years", "D) 2 years"],
    answer: "D",
    explanation: "6760/6250 = 1.0816 = (1.04)², so 2 years."
  },
  {
    id: 20896, section: "Numerical Ability",
    text: "A 50-litre solution contains 20% alcohol. How much pure alcohol must be added to make it a 50% solution?",
    options: ["A) 20 litres", "B) 30 litres", "C) 15 litres", "D) 25 litres"],
    answer: "B",
    explanation: "(10 + x)/(50 + x) = 1/2 gives 20 + 2x = 50 + x, so x = 30 litres."
  },
  {
    id: 20897, section: "Numerical Ability",
    text: "The average of 8 numbers is 21. If two numbers, 25 and 33, are removed, what is the average of the remaining numbers?",
    options: ["A) 19", "B) 20", "C) 17⅔", "D) 18⅓"],
    answer: "D",
    explanation: "(168 − 58)/6 = 110/6 = 18⅓."
  },
  {
    id: 20898, section: "Numerical Ability",
    text: "The LCM of two numbers is 4 times their HCF, and the sum of the HCF and LCM is 125. If one number is 100, what is the other?",
    options: ["A) 75", "B) 20", "C) 25", "D) 50"],
    answer: "C",
    explanation: "HCF + 4 HCF = 125, so HCF = 25 and LCM = 100. Other number = 25 × 100/100 = 25."
  },
  {
    id: 20899, section: "Numerical Ability",
    text: "What is the area of a triangular plot with sides 13 m, 14 m and 15 m?",
    options: ["A) 96 m²", "B) 84 m²", "C) 72 m²", "D) 91 m²"],
    answer: "B",
    explanation: "By Heron's formula, s = 21 and area = √(21 × 8 × 7 × 6) = √7056 = 84 m²."
  },
  {
    id: 20900, section: "Numerical Ability",
    text: "A sanctuary has 1,250 birds. Their number increases by 8% in the first year and decreases by 4% in the second year. How many birds are there after two years?",
    options: ["A) 1,280", "B) 1,300", "C) 1,310", "D) 1,296"],
    answer: "D",
    explanation: "1250 × 1.08 × 0.96 = 1,296."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 20901, section: "English",
    passage: "passage_1",
    text: "Which of the following best expresses the main idea of the passage?",
    options: ["A) Invasive species like lantana badly damage forests and are hard to remove, so prevention is better than cure", "B) Lantana is a useful ornamental plant", "C) Only bulldozers threaten forests", "D) Forest fires are caused mainly by lantana"],
    answer: "A",
    explanation: "The passage describes the harm lantana does, the difficulty of removing it, and the lesson that prevention is cheaper."
  },
  {
    id: 20902, section: "English",
    passage: "passage_1",
    text: "According to the passage, how does lantana harm other plants?",
    options: ["A) It attracts insects that eat other plants", "B) It shades out native seedlings and releases chemicals that suppress their growth", "C) It uses up all the water in the soil", "D) It causes floods"],
    answer: "B",
    explanation: "Stated in the first paragraph."
  },
  {
    id: 20903, section: "English",
    passage: "passage_1",
    text: "Why does simply slashing lantana back often make the problem worse?",
    options: ["A) Slashing kills native grasses", "B) The plant regrows from cut stems", "C) It releases more chemicals when cut", "D) Cutting spreads its seeds by wind"],
    answer: "B",
    explanation: "'Lantana regrows from cut stems.'"
  },
  {
    id: 20904, section: "English",
    passage: "passage_1",
    text: "Why does the author mention turning cleared lantana into furniture and handicrafts?",
    options: ["A) It encourages planting more lantana", "B) It shows lantana is valuable timber", "C) It gives local people a reason to keep the land clear", "D) It is the only use of lantana"],
    answer: "C",
    explanation: "Stated at the end of the second paragraph."
  },
  {
    id: 20905, section: "English",
    passage: "passage_1",
    text: "The word 'established', as used in the passage, most nearly means",
    options: ["A) officially recognised", "B) firmly settled", "C) removed", "D) newly arrived"],
    answer: "B",
    explanation: "Once an invasive species is firmly settled in an area, removing it is slow and costly."
  },
  {
    id: 20906, section: "English",
    text: "Choose the word most similar in meaning to DENSE.",
    options: ["A) Sparse", "B) Light", "C) Thick", "D) Open"],
    answer: "C",
    explanation: "Dense means closely packed; thick."
  },
  {
    id: 20907, section: "English",
    text: "Choose the word most similar in meaning to NATIVE.",
    options: ["A) Alien", "B) Indigenous", "C) Foreign", "D) Exotic"],
    answer: "B",
    explanation: "Native means belonging to a place by origin; indigenous."
  },
  {
    id: 20908, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to FRAGILE.",
    options: ["A) Sturdy", "B) Weak", "C) Brittle", "D) Delicate"],
    answer: "A",
    explanation: "Fragile means easily broken; its opposite is sturdy."
  },
  {
    id: 20909, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to LUSH.",
    options: ["A) Green", "B) Thick", "C) Sparse", "D) Dense"],
    answer: "C",
    explanation: "Lush means growing thickly; its opposite is sparse."
  },
  {
    id: 20910, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The flock of birds (A) / were flying (B) / towards the (C) / sanctuary. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "'Flock' is a collective noun acting as one unit here: 'was flying'."
  },
  {
    id: 20911, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The villagers had (A) / no sooner (B) / seen the leopard when (C) / they ran inside. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "'No sooner' pairs with 'than', not 'when'."
  },
  {
    id: 20912, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The tiger was seen (A) / near the waterhole (B) / by the tourists (C) / yesterday at 6 p.m. in the evening. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "D",
    explanation: "'6 p.m.' already means evening, so 'in the evening' is redundant."
  },
  {
    id: 20913, section: "English",
    text: "Fill in the blank: The sanctuary remains closed ______ visitors during the monsoon.",
    options: ["A) for", "B) to", "C) from", "D) with"],
    answer: "B",
    explanation: "'Closed to visitors' is the correct phrase."
  },
  {
    id: 20914, section: "English",
    text: "Fill in the blank: Lantana has spread ______ a large part of the forest.",
    options: ["A) upon", "B) over", "C) at", "D) on"],
    answer: "B",
    explanation: "'Spread over' an area is the correct collocation."
  },
  {
    id: 20915, section: "English",
    text: "Fill in the blank: The forest guard, who ______ on duty all night, was very tired in the morning.",
    options: ["A) will be", "B) has been", "C) is", "D) had been"],
    answer: "D",
    explanation: "An action continuing up to a past moment takes the past perfect (continuous)."
  },
  {
    id: 20916, section: "English",
    text: "Choose the correct meaning of the idiom: To make hay while the sun shines",
    options: ["A) To waste time", "B) To enjoy the summer", "C) To work in the fields", "D) To make the most of an opportunity"],
    answer: "D",
    explanation: "It means to use a favourable situation while it lasts."
  },
  {
    id: 20917, section: "English",
    text: "Choose the correct meaning of the idiom: A drop in the ocean",
    options: ["A) A sudden fall", "B) A large contribution", "C) A very small amount compared with what is needed", "D) A wasteful act"],
    answer: "C",
    explanation: "A drop in the ocean is an amount too small to make a difference."
  },
  {
    id: 20918, section: "English",
    text: "Choose the one word for: A plant that grows on another plant without harming it",
    options: ["A) Symbiont", "B) Parasite", "C) Saprophyte", "D) Epiphyte"],
    answer: "D",
    explanation: "An epiphyte (such as many orchids) grows on another plant for support only. A parasite takes nourishment from its host."
  },
  {
    id: 20919, section: "English",
    text: "Choose the correct passive form of: The guards are patrolling the forest.",
    options: ["A) The forest is being patrolled by the guards.", "B) The forest is patrolled by the guards.", "C) The forest has been patrolled by the guards.", "D) The forest was being patrolled by the guards."],
    answer: "A",
    explanation: "Present continuous active becomes 'is being + V3'."
  },
  {
    id: 20920, section: "English",
    text: "Choose the correct indirect speech: The officer said, \"The tigers have been counted.\"",
    options: ["A) The officer said that the tigers had been counted.", "B) The officer told that the tigers had been counted.", "C) The officer said that the tigers were being counted.", "D) The officer said that the tigers have been counted."],
    answer: "A",
    explanation: "Present perfect passive becomes past perfect passive."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Geography of Goa
  // ════════════════════════════════════════════════════════════
  {
    id: 20921, section: "Geography of Goa",
    text: "Goa lies roughly along which line of latitude?",
    options: ["A) 10° North", "B) 15° North", "C) 23° North", "D) 20° North"],
    answer: "B",
    explanation: "Goa lies between about 14°53' N and 15°48' N, i.e. close to 15° N."
  },
  {
    id: 20922, section: "Geography of Goa",
    text: "Canacona taluka, in the extreme south of Goa, shares its border with which district of Karnataka?",
    options: ["A) Belagavi", "B) Udupi", "C) Dharwad", "D) Uttara Kannada"],
    answer: "D",
    explanation: "Canacona borders Uttara Kannada (Karwar) district."
  },
  {
    id: 20923, section: "Geography of Goa",
    text: "Which ghat road links Sattari taluka of Goa with Belagavi in Karnataka?",
    options: ["A) Amboli Ghat", "B) Chorla Ghat", "C) Anmod Ghat", "D) Kumbharjua Ghat"],
    answer: "B",
    explanation: "Chorla Ghat, on the Goa–Karnataka–Maharashtra border, links Sattari with Belagavi. It is known for its biodiversity."
  },
  {
    id: 20924, section: "Geography of Goa",
    text: "Anmod Ghat, through which traffic moves between Mollem and Belagavi/Londa, lies on which National Highway?",
    options: ["A) NH 66", "B) NH 44", "C) NH 48", "D) NH 748"],
    answer: "D",
    explanation: "NH 748 (formerly NH 4A) runs from Panaji via Ponda, Mollem and Anmod Ghat into Karnataka."
  },
  {
    id: 20925, section: "Geography of Goa",
    text: "Which river forms the boundary between the Pernem and Bardez talukas?",
    options: ["A) Chapora", "B) Mandovi", "C) Terekhol", "D) Sal"],
    answer: "A",
    explanation: "The Chapora river separates Pernem (north) from Bardez (south)."
  },
  {
    id: 20926, section: "Geography of Goa",
    text: "The Sal river of Salcete meets the Arabian Sea near",
    options: ["A) Colva", "B) Panaji", "C) Betul and Mobor", "D) Vasco"],
    answer: "C",
    explanation: "The Sal estuary lies between Mobor and Betul in south Goa."
  },
  {
    id: 20927, section: "Geography of Goa",
    text: "The Kushavati river, which flows through Quepem, is a tributary of which river?",
    options: ["A) Mandovi", "B) Zuari", "C) Chapora", "D) Talpona"],
    answer: "B",
    explanation: "The Kushavati joins the Zuari system. The Usgalimal petroglyphs are on its banks."
  },
  {
    id: 20928, section: "Geography of Goa",
    text: "The town of Sanquelim in Bicholim taluka stands on the banks of which river?",
    options: ["A) Kushavati", "B) Sal", "C) Talpona", "D) Valvanti"],
    answer: "D",
    explanation: "The Valvanti, a tributary of the Mandovi, flows past Sanquelim."
  },
  {
    id: 20929, section: "Geography of Goa",
    text: "The island of Divar lies in which river?",
    options: ["A) Sal", "B) Mandovi", "C) Chapora", "D) Zuari"],
    answer: "B",
    explanation: "Divar is a river island in the Mandovi, near Old Goa."
  },
  {
    id: 20930, section: "Geography of Goa",
    text: "Dona Paula is a headland located where",
    options: ["A) the Sal enters the sea at Betul", "B) the Chapora meets the Terekhol", "C) the Mandovi and Zuari estuaries open into the Arabian Sea", "D) the Talpona meets the Galgibag"],
    answer: "C",
    explanation: "Dona Paula, near Panaji, overlooks the mouths of the Mandovi and Zuari."
  },
  {
    id: 20931, section: "Geography of Goa",
    text: "The Arvalem (Harvalem) waterfall is located near which town?",
    options: ["A) Sanquelim", "B) Pernem", "C) Canacona", "D) Quepem"],
    answer: "A",
    explanation: "The Arvalem waterfall and the nearby rock-cut caves are close to Sanquelim in Bicholim taluka."
  },
  {
    id: 20932, section: "Geography of Goa",
    text: "Mayem Lake, a popular tourist spot, is in which taluka?",
    options: ["A) Salcete", "B) Tiswadi", "C) Bicholim", "D) Canacona"],
    answer: "C",
    explanation: "Mayem Lake is in Bicholim taluka."
  },
  {
    id: 20933, section: "Geography of Goa",
    text: "Carambolim Lake, known for its migratory birds, is located in which taluka?",
    options: ["A) Bardez", "B) Tiswadi", "C) Quepem", "D) Ponda"],
    answer: "B",
    explanation: "Carambolim Lake, near Old Goa in Tiswadi, is a well-known birding wetland."
  },
  {
    id: 20934, section: "Geography of Goa",
    text: "Under the Koppen classification, Goa's climate is best described as",
    options: ["A) Tropical monsoon", "B) Hot desert", "C) Mediterranean", "D) Temperate"],
    answer: "A",
    explanation: "Goa has a tropical monsoon climate: warm all year, with a very wet south-west monsoon season."
  },
  {
    id: 20935, section: "Geography of Goa",
    text: "Which month is generally the hottest in Goa?",
    options: ["A) May", "B) December", "C) August", "D) January"],
    answer: "A",
    explanation: "May, just before the monsoon, is usually the hottest month."
  },
  {
    id: 20936, section: "Geography of Goa",
    text: "Which type of forest covers the largest part of Goa's forest area?",
    options: ["A) Tropical dry thorn", "B) Alpine", "C) Tropical moist deciduous", "D) Temperate coniferous"],
    answer: "C",
    explanation: "Moist deciduous forests dominate, with semi-evergreen and evergreen forests in the higher Ghats and mangroves along the estuaries."
  },
  {
    id: 20937, section: "Geography of Goa",
    text: "In terms of earthquake risk, Goa falls in which seismic zone of India?",
    options: ["A) Zone III", "B) Zone IV", "C) Zone V", "D) Zone II"],
    answer: "A",
    explanation: "Goa is classified as Seismic Zone III (moderate risk)."
  },
  {
    id: 20938, section: "Geography of Goa",
    text: "According to the 2011 Census, which is the most populous taluka of Goa?",
    options: ["A) Salcete", "B) Tiswadi", "C) Bardez", "D) Sattari"],
    answer: "A",
    explanation: "Salcete, with Margao, had the largest population. Bardez was second."
  },
  {
    id: 20939, section: "Geography of Goa",
    text: "How many wildlife sanctuaries are there in Goa (excluding the National Park)?",
    options: ["A) 3", "B) 4", "C) 8", "D) 6"],
    answer: "D",
    explanation: "Bhagwan Mahavir, Bondla, Cotigao, Mhadei, Netravali and Dr. Salim Ali Bird Sanctuary."
  },
  {
    id: 20940, section: "Geography of Goa",
    text: "Consider the following statements:<br>I. Panaji lies on the south bank of the Mandovi.<br>II. Margao is in Salcete taluka.<br>III. Vasco da Gama town is in Ponda taluka.<br>Which of the statements given above is/are correct?",
    options: ["A) I and II only", "B) II and III only", "C) I and III only", "D) I, II and III"],
    answer: "A",
    explanation: "I and II are correct. III is wrong: Vasco is in Mormugao taluka."
  }
];
