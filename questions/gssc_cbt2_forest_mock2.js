// gssc_cbt2_forest_mock2.js – Dr Shetye Academic Programme
// CBT 2 Forest Mock 2 · GSSC Advt. No. 2 of 2026 · CBT-II · Round Forester · Forest Guard
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 20181–20240
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Geography of Goa Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Fire is not always the enemy of the forest. In many dry deciduous forests, periodic low-intensity fires have shaped the vegetation for centuries, clearing dead litter and favouring species whose seeds germinate after burning. The problem today is not fire as such but its frequency and timing. Most forest fires in India are started by people, whether to clear land, to encourage fresh grass for cattle, to collect forest produce more easily, or simply through carelessness with a lit match. When such fires recur every year, the young saplings that would have replaced the older trees are destroyed before they can establish themselves, and the forest slowly thins into scrub.\n\nFighting a fire after it has spread is costly and dangerous. Prevention is cheaper. Fire lines — strips cleared of vegetation before the dry season — can stop a surface fire from advancing. Watch towers and satellite alerts help detect fires early, when a small team can still control them. Above all, the cooperation of the people who live in and around the forest is essential, because they are often the first to see the smoke and the best placed to act.\n\nA forest guard who knows the villagers by name, understands why they use fire and offers practical alternatives will often achieve more than one who relies only on penalties."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 20181, section: "Reasoning",
    text: "Find the next term in the series: 120, 99, 80, 63, 48, ?",
    options: ["A) 36", "B) 35", "C) 39", "D) 33"],
    answer: "B",
    explanation: "The terms are n² − 1 for n = 11, 10, 9, 8, 7, so the next is 6² − 1 = 35."
  },
  {
    id: 20182, section: "Reasoning",
    text: "Find the next group in the series: AZY, BYX, CXW, ?",
    options: ["A) EWV", "B) DWV", "C) DVW", "D) DWU"],
    answer: "B",
    explanation: "The first letter moves forward (A, B, C, D) and the other two move backward by one each time: ZY → YX → XW → WV."
  },
  {
    id: 20183, section: "Reasoning",
    text: "In a certain code, RIVER is written as SHWDS. How will WATER be written in that code?",
    options: ["A) XZUDS", "B) XZUFS", "C) XBUFS", "D) VZUDS"],
    answer: "A",
    explanation: "The letters change by +1, −1, +1, −1, +1 in turn. W+1=X, A−1=Z, T+1=U, E−1=D, R+1=S, giving XZUDS."
  },
  {
    id: 20184, section: "Reasoning",
    text: "If 'A # B' means A is the father of B, 'A @ B' means A is the sister of B and 'A $ B' means A is the wife of B, then in 'P $ Q # R @ S', how is P related to S?",
    options: ["A) Aunt", "B) Mother", "C) Grandmother", "D) Sister"],
    answer: "B",
    explanation: "P is Q's wife, Q is R's father, and R is S's sister. So Q is S's father and P is S's mother."
  },
  {
    id: 20185, section: "Reasoning",
    text: "Five trees stand in a row. Sal is at the extreme left. Neem is to the right of Teak but to the left of Mango. Banyan is to the right of Mango. Which tree is in the middle?",
    options: ["A) Teak", "B) Mango", "C) Sal", "D) Neem"],
    answer: "D",
    explanation: "Teak &lt; Neem &lt; Mango &lt; Banyan, with Sal first, gives Sal, Teak, Neem, Mango, Banyan. Neem is in the middle."
  },
  {
    id: 20186, section: "Reasoning",
    text: "A clock gains 5 minutes every hour. If it is set right at 6:00 a.m., what time will it show at 6:00 p.m. on the same day?",
    options: ["A) 6:55 p.m.", "B) 6:30 p.m.", "C) 7:00 p.m.", "D) 7:05 p.m."],
    answer: "C",
    explanation: "In 12 hours it gains 12 × 5 = 60 minutes, so it shows 7:00 p.m."
  },
  {
    id: 20187, section: "Reasoning",
    text: "Statements: No animal is a plant. All trees are plants.<br>Conclusions:<br>I. No tree is an animal.<br>II. Some plants are trees.",
    options: ["A) Neither I nor II follows", "B) Both I and II follow", "C) Only II follows", "D) Only I follows"],
    answer: "B",
    explanation: "Trees lie inside 'plants', which excludes animals, so I follows. II is 'all trees are plants' converted to its particular form, so it also follows."
  },
  {
    id: 20188, section: "Reasoning",
    text: "In the sequence below, how many E's are immediately followed by T but NOT immediately preceded by S?<br>S E T E T R E T S E T E T",
    options: ["A) 3", "B) 5", "C) 2", "D) 4"],
    answer: "A",
    explanation: "Each E is followed by T. The E's at positions 2 and 10 come after S, so they are excluded. The E's at positions 4, 7 and 12 count, giving 3."
  },
  {
    id: 20189, section: "Reasoning",
    text: "Question: How is Ravi related to Meena?<br>Statement I: Ravi's mother is Meena's sister.<br>Statement II: Meena has no brother.",
    options: ["A) Neither statement is sufficient", "B) Statement I alone is sufficient", "C) Both statements together are necessary", "D) Statement II alone is sufficient"],
    answer: "B",
    explanation: "From I alone, Meena is the sister of Ravi's mother, so Ravi is Meena's nephew. II adds nothing."
  },
  {
    id: 20190, section: "Reasoning",
    text: "Statement I: Large areas of forest in the region were cleared for mining.<br>Statement II: Many streams in the area dried up within a few years.",
    options: ["A) Statement I is the cause and Statement II is its effect", "B) Both are independent causes", "C) Statement II is the cause and Statement I is its effect", "D) Both are effects of some common cause"],
    answer: "A",
    explanation: "Loss of forest cover reduces groundwater recharge and catchment protection, so the drying of streams follows from the clearing."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 20191, section: "Numerical Ability",
    text: "The height of a sapling increases by 10% every year. If it is 2.42 m tall now, what was its height 2 years ago?",
    options: ["A) 2 m", "B) 2.1 m", "C) 1.9 m", "D) 2.2 m"],
    answer: "A",
    explanation: "Height 2 years ago = 2.42/(1.1)² = 2.42/1.21 = 2 m."
  },
  {
    id: 20192, section: "Numerical Ability",
    text: "A bicycle is marked at ₹4,000. After a discount of 10%, the shopkeeper still makes a profit of 20%. What is the cost price?",
    options: ["A) ₹3,100", "B) ₹3,200", "C) ₹2,880", "D) ₹3,000"],
    answer: "D",
    explanation: "SP = 4000 × 0.9 = ₹3,600. CP = 3600/1.2 = ₹3,000."
  },
  {
    id: 20193, section: "Numerical Ability",
    text: "A and B are 76 km apart. A starts walking towards B at 4 km/h. One hour later, B starts walking towards A at 5 km/h. How far from A's starting point will they meet?",
    options: ["A) 38 km", "B) 36 km", "C) 40 km", "D) 32 km"],
    answer: "B",
    explanation: "After 1 hour the gap is 72 km, closing at 9 km/h, so they meet 8 hours later. A has walked 9 hours × 4 = 36 km."
  },
  {
    id: 20194, section: "Numerical Ability",
    text: "Pipe A can fill a tank in 10 hours and pipe B in 15 hours. Both are opened together, but A is closed after 3 hours. How long does it take in all to fill the tank?",
    options: ["A) 10.5 hours", "B) 7.5 hours", "C) 12 hours", "D) 9 hours"],
    answer: "A",
    explanation: "In 3 hours they fill 3 × (1/10 + 1/15) = 1/2. B fills the other half in 7.5 hours. Total = 3 + 7.5 = 10.5 hours."
  },
  {
    id: 20195, section: "Numerical Ability",
    text: "A sum amounts to ₹1,331 in 3 years at 10% per annum compound interest. What is the sum?",
    options: ["A) ₹1,000", "B) ₹1,100", "C) ₹900", "D) ₹1,210"],
    answer: "A",
    explanation: "P × (1.1)³ = 1331, and 1.331P = 1331, so P = ₹1,000."
  },
  {
    id: 20196, section: "Numerical Ability",
    text: "A 45-litre mixture contains milk and water in the ratio 4 : 1. How much water must be added to make the ratio 3 : 2?",
    options: ["A) 12 litres", "B) 10 litres", "C) 15 litres", "D) 18 litres"],
    answer: "C",
    explanation: "Milk = 36 L, water = 9 L. 36/(9 + x) = 3/2 gives 72 = 27 + 3x, so x = 15 L."
  },
  {
    id: 20197, section: "Numerical Ability",
    text: "A batsman's average after 11 innings is 40. How many runs must he score in the 12th innings to raise his average by 2?",
    options: ["A) 62", "B) 64", "C) 66", "D) 60"],
    answer: "B",
    explanation: "Required = 12 × 42 − 11 × 40 = 504 − 440 = 64."
  },
  {
    id: 20198, section: "Numerical Ability",
    text: "What is the least number that must be added to 1,000 to make it exactly divisible by 45?",
    options: ["A) 25", "B) 45", "C) 10", "D) 35"],
    answer: "D",
    explanation: "1000 = 45 × 22 + 10. Add 45 − 10 = 35 to get 1035 = 45 × 23."
  },
  {
    id: 20199, section: "Numerical Ability",
    text: "A cuboidal water tank measures 6 m × 5 m × 4 m. How many litres of water can it hold?",
    options: ["A) 1,200 litres", "B) 1,20,000 litres", "C) 12,000 litres", "D) 12,00,000 litres"],
    answer: "B",
    explanation: "Volume = 120 m³, and 1 m³ = 1,000 litres, so it holds 1,20,000 litres."
  },
  {
    id: 20200, section: "Numerical Ability",
    text: "A worker's wages are cut by 25%. By what percentage must the reduced wages be increased to restore the original wages?",
    options: ["A) 20%", "B) 25%", "C) 30%", "D) 33⅓%"],
    answer: "D",
    explanation: "Increase needed = 25/75 × 100 = 33⅓%."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 20201, section: "English",
    passage: "passage_1",
    text: "Which of the following best captures the main idea of the passage?",
    options: ["A) Satellites alone can solve the problem of forest fires", "B) The real problem is frequent man-made fire, and prevention with community cooperation is the best remedy", "C) All forest fires must be prevented because fire has no role in nature", "D) Forest fires are mainly caused by lightning"],
    answer: "B",
    explanation: "The author says fire itself is not the problem but its frequency. He stresses prevention and the cooperation of local people."
  },
  {
    id: 20202, section: "English",
    passage: "passage_1",
    text: "According to the passage, repeated annual fires harm the forest mainly by",
    options: ["A) attracting more cattle into the forest", "B) polluting rivers with ash", "C) destroying young saplings before they can establish themselves", "D) killing all the large trees at once"],
    answer: "C",
    explanation: "The young saplings are destroyed, so the forest 'slowly thins into scrub'."
  },
  {
    id: 20203, section: "English",
    passage: "passage_1",
    text: "As described in the passage, 'fire lines' are",
    options: ["A) lines of firefighters standing along the forest edge", "B) strips cleared of vegetation before the dry season", "C) rows of fire-resistant trees", "D) trenches filled with water"],
    answer: "B",
    explanation: "Defined in the second paragraph."
  },
  {
    id: 20204, section: "English",
    passage: "passage_1",
    text: "What is the author's view on the use of penalties to prevent forest fires?",
    options: ["A) Penalties should be abolished completely", "B) Penalties should be imposed only on outsiders", "C) Penalties alone are less effective than understanding people and offering them alternatives", "D) Penalties are the most effective method"],
    answer: "C",
    explanation: "The last sentence says a guard who understands villagers and offers alternatives 'will often achieve more'."
  },
  {
    id: 20205, section: "English",
    passage: "passage_1",
    text: "Which of the following can be inferred from the passage?",
    options: ["A) Some forest ecosystems have adapted to occasional low-intensity fires", "B) Villagers never cause forest fires", "C) Fire always destroys a forest permanently", "D) Watch towers are no longer useful"],
    answer: "A",
    explanation: "Periodic low-intensity fires have 'shaped the vegetation for centuries' and some seeds germinate after burning."
  },
  {
    id: 20206, section: "English",
    text: "Choose the word most similar in meaning to ROBUST.",
    options: ["A) Fragile", "B) Timid", "C) Weak", "D) Strong"],
    answer: "D",
    explanation: "Robust means strong and healthy."
  },
  {
    id: 20207, section: "English",
    text: "Choose the word most similar in meaning to ENDEAVOUR.",
    options: ["A) Failure", "B) Rest", "C) Attempt", "D) Refusal"],
    answer: "C",
    explanation: "An endeavour is an earnest attempt."
  },
  {
    id: 20208, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to AUGMENT.",
    options: ["A) Diminish", "B) Boost", "C) Increase", "D) Enlarge"],
    answer: "A",
    explanation: "Augment means increase; its opposite is diminish."
  },
  {
    id: 20209, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to RELUCTANT.",
    options: ["A) Hesitant", "B) Willing", "C) Unwilling", "D) Averse"],
    answer: "B",
    explanation: "Reluctant means unwilling; its opposite is willing."
  },
  {
    id: 20210, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>We discussed about (A) / the problem of (B) / forest fires (C) / at the meeting. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "'Discuss' is transitive and takes a direct object: 'We discussed the problem', without 'about'."
  },
  {
    id: 20211, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>He did not (A) / knew the way (B) / to the (C) / sanctuary. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "After 'did not', use the base form: 'did not know'."
  },
  {
    id: 20212, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The trainees were (A) / told to (B) / return back (C) / to the camp by evening. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "'Return' already means 'go back', so 'return back' is redundant. Use 'return'."
  },
  {
    id: 20213, section: "English",
    text: "Fill in the blank: The poacher was caught ______ the act.",
    options: ["A) by", "B) on", "C) in", "D) at"],
    answer: "C",
    explanation: "The idiom is 'caught in the act'."
  },
  {
    id: 20214, section: "English",
    text: "Fill in the blank: The ranger, along with his team, ______ reached the spot.",
    options: ["A) were", "B) have", "C) are", "D) has"],
    answer: "D",
    explanation: "With 'along with', the verb agrees with the first subject, 'the ranger' (singular): 'has reached'."
  },
  {
    id: 20215, section: "English",
    text: "Fill in the blank: I wish I ______ the trek last Sunday; I missed a great view.",
    options: ["A) have joined", "B) would join", "C) joined", "D) had joined"],
    answer: "D",
    explanation: "A wish about the past uses the past perfect: 'I wish I had joined'."
  },
  {
    id: 20216, section: "English",
    text: "Choose the correct meaning of the idiom: Out of the woods",
    options: ["A) Away from home", "B) Without any shelter", "C) Out of danger or difficulty", "D) Lost in a forest"],
    answer: "C",
    explanation: "Out of the woods means past the difficult or dangerous stage."
  },
  {
    id: 20217, section: "English",
    text: "Choose the correct meaning of the idiom: To add fuel to the fire",
    options: ["A) To help put out a fire", "B) To encourage someone", "C) To cook food quickly", "D) To make a bad situation worse"],
    answer: "D",
    explanation: "To add fuel to the fire is to worsen an already bad situation."
  },
  {
    id: 20218, section: "English",
    text: "Choose the one word for: An animal that feeds only on plants",
    options: ["A) Herbivore", "B) Omnivore", "C) Carnivore", "D) Insectivore"],
    answer: "A",
    explanation: "Herbivores eat plants. Carnivores eat flesh, omnivores eat both, and insectivores eat insects."
  },
  {
    id: 20219, section: "English",
    text: "Choose the correctly spelt word.",
    options: ["A) Concientious", "B) Consciencious", "C) Conscientous", "D) Conscientious"],
    answer: "D",
    explanation: "The correct spelling is C-O-N-S-C-I-E-N-T-I-O-U-S."
  },
  {
    id: 20220, section: "English",
    text: "Arrange the sentences in a logical order:<br>P. Within an hour, a team arrived with fire beaters and water.<br>Q. A villager noticed smoke rising from the hillside.<br>R. The fire was put out before it could reach the plantation.<br>S. He immediately informed the forest guard on duty.",
    options: ["A) SQPR", "B) QSRP", "C) QSPR", "D) QPSR"],
    answer: "C",
    explanation: "Q (smoke noticed) → S (guard informed) → P (team arrives) → R (fire put out)."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Geography of Goa
  // ════════════════════════════════════════════════════════════
  {
    id: 20221, section: "Geography of Goa",
    text: "What is the approximate length of Goa's coastline?",
    options: ["A) 105 km", "B) 250 km", "C) 160 km", "D) 40 km"],
    answer: "A",
    explanation: "Goa has a coastline of about 105 km along the Arabian Sea."
  },
  {
    id: 20222, section: "Geography of Goa",
    text: "Which is the smallest taluka of Goa by area?",
    options: ["A) Mormugao", "B) Bicholim", "C) Pernem", "D) Tiswadi"],
    answer: "A",
    explanation: "Mormugao is the smallest taluka by area. Sanguem is the largest."
  },
  {
    id: 20223, section: "Geography of Goa",
    text: "The Mandovi (Mhadei) river originates in",
    options: ["A) the Sahyadri hills of Sindhudurg district, Maharashtra", "B) the Netravali forest of Sanguem", "C) the Western Ghats in Belagavi district of Karnataka", "D) the Sattari plateau of Goa"],
    answer: "C",
    explanation: "The Mhadei rises in the Western Ghats in Karnataka's Belagavi district (Bhimgad area) and enters Goa in Sattari taluka. Sharing its water is the subject of the Mhadei dispute."
  },
  {
    id: 20224, section: "Geography of Goa",
    text: "The name 'Tiswadi' (Ilhas) is commonly explained as meaning",
    options: ["A) land between rivers", "B) land of temples", "C) three islands", "D) thirty villages"],
    answer: "D",
    explanation: "'Tis' means thirty and 'wadi' a settlement, so the name is taken to mean the thirty villages of the island taluka."
  },
  {
    id: 20225, section: "Geography of Goa",
    text: "Which is the largest wildlife sanctuary in Goa?",
    options: ["A) Dr. Salim Ali Bird Sanctuary", "B) Bondla Wildlife Sanctuary", "C) Cotigao Wildlife Sanctuary", "D) Bhagwan Mahavir Wildlife Sanctuary"],
    answer: "D",
    explanation: "Bhagwan Mahavir Wildlife Sanctuary at Mollem (about 240 sq km) is the largest. The Mollem National Park lies within it."
  },
  {
    id: 20226, section: "Geography of Goa",
    text: "Which is the smallest wildlife sanctuary in Goa (excluding the bird sanctuary)?",
    options: ["A) Bondla", "B) Netravali", "C) Cotigao", "D) Mhadei"],
    answer: "A",
    explanation: "Bondla, about 8 sq km in Ponda taluka, is the smallest. It also has a mini zoo and a deer park."
  },
  {
    id: 20227, section: "Geography of Goa",
    text: "The Netravali Wildlife Sanctuary is located in which taluka?",
    options: ["A) Pernem", "B) Canacona", "C) Sanguem", "D) Sattari"],
    answer: "C",
    explanation: "Netravali Wildlife Sanctuary is in Sanguem taluka, and is known for the Mainapi waterfall and the 'bubbling lake'."
  },
  {
    id: 20228, section: "Geography of Goa",
    text: "The Mhadei Wildlife Sanctuary is located in which taluka?",
    options: ["A) Bicholim", "B) Sanguem", "C) Canacona", "D) Sattari"],
    answer: "D",
    explanation: "The Mhadei Wildlife Sanctuary lies in Sattari taluka, in the Western Ghats bordering Karnataka and Maharashtra."
  },
  {
    id: 20229, section: "Geography of Goa",
    text: "What is the state bird of Goa?",
    options: ["A) Indian Peafowl", "B) Malabar Trogon", "C) Great Hornbill", "D) Flame-throated (Ruby-throated Yellow) Bulbul"],
    answer: "D",
    explanation: "The Flame-throated Bulbul, locally called 'Bulbul' or 'Ruby-throated Yellow Bulbul', is Goa's state bird."
  },
  {
    id: 20230, section: "Geography of Goa",
    text: "What is the state tree of Goa?",
    options: ["A) Banyan", "B) Matti", "C) Teak", "D) Coconut"],
    answer: "B",
    explanation: "The Matti tree (Terminalia elliptica, Indian laurel) is Goa's state tree."
  },
  {
    id: 20231, section: "Geography of Goa",
    text: "Mining in Goa has been mainly for which mineral?",
    options: ["A) Coal", "B) Copper", "C) Mica", "D) Iron ore"],
    answer: "D",
    explanation: "Goa's mining belt (Bicholim, Sattari, Sanguem, Quepem) has produced mainly iron ore, along with manganese and some bauxite."
  },
  {
    id: 20232, section: "Geography of Goa",
    text: "The Western Ghats running along Goa's eastern border are locally known as the",
    options: ["A) Aravallis", "B) Sahyadri", "C) Satpura", "D) Nilgiris"],
    answer: "B",
    explanation: "The Western Ghats are called the Sahyadri. Goa has three physiographic zones: the Sahyadri, the midland plateaus and the coastal plains."
  },
  {
    id: 20233, section: "Geography of Goa",
    text: "Goa's average annual rainfall is approximately",
    options: ["A) 600 mm", "B) 6,500 mm", "C) 3,000 mm", "D) 1,000 mm"],
    answer: "C",
    explanation: "Goa receives roughly 2,500–3,200 mm of rain a year, mostly from the South-West monsoon. The figure is higher in the Ghats."
  },
  {
    id: 20234, section: "Geography of Goa",
    text: "Atal Setu, the cable-stayed bridge at Panaji, is built over which river?",
    options: ["A) Zuari", "B) Mandovi", "C) Sal", "D) Chapora"],
    answer: "B",
    explanation: "Atal Setu, opened in 2019, is the third bridge across the Mandovi between Panaji and Porvorim."
  },
  {
    id: 20235, section: "Geography of Goa",
    text: "Which National Highway runs north–south along the Goa coast, connecting it with Mumbai and Mangaluru?",
    options: ["A) NH 748", "B) NH 48", "C) NH 66", "D) NH 44"],
    answer: "C",
    explanation: "NH 66 (formerly NH 17) runs along the west coast through Goa. NH 748 links Panaji with Belagavi."
  },
  {
    id: 20236, section: "Geography of Goa",
    text: "The full route of the Konkan Railway, which passes through Goa, was opened for traffic in",
    options: ["A) 2004", "B) 1985", "C) 1990", "D) 1998"],
    answer: "D",
    explanation: "The Konkan Railway's complete Roha–Thokur route opened on 26 January 1998."
  },
  {
    id: 20237, section: "Geography of Goa",
    text: "The Tillari irrigation project is a joint project of Goa and which state?",
    options: ["A) Maharashtra", "B) Kerala", "C) Gujarat", "D) Karnataka"],
    answer: "A",
    explanation: "The Tillari dam is in Sindhudurg district, Maharashtra. It is a joint Goa–Maharashtra project that supplies water to Pernem, Bardez and Bicholim."
  },
  {
    id: 20238, section: "Geography of Goa",
    text: "Goa has a long-standing inter-state river water dispute with Karnataka over the waters of which river?",
    options: ["A) Terekhol", "B) Zuari", "C) Mhadei (Mandovi)", "D) Kaveri"],
    answer: "C",
    explanation: "The Mhadei dispute concerns Karnataka's plans to divert water through the Kalasa–Banduri projects."
  },
  {
    id: 20239, section: "Geography of Goa",
    text: "According to the 2011 Census, Goa's sex ratio (females per 1,000 males) was",
    options: ["A) 973", "B) 943", "C) 918", "D) 1,084"],
    answer: "A",
    explanation: "Goa's sex ratio was 973. (943 is the national figure and 1,084 is Kerala's.)"
  },
  {
    id: 20240, section: "Geography of Goa",
    text: "Consider the following statements:<br>I. The Dudhsagar waterfall lies on the Goa–Karnataka border.<br>II. Chorao island is in Tiswadi taluka.<br>III. Goa has no National Park.<br>Which of the statements given above is/are correct?",
    options: ["A) I, II and III", "B) I and III only", "C) I and II only", "D) II and III only"],
    answer: "C",
    explanation: "I and II are correct. III is wrong: Mollem (Bhagwan Mahavir) is a National Park."
  }
];
