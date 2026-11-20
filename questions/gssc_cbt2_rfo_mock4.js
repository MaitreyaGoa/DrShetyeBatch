// gssc_cbt2_rfo_mock4.js – Dr Shetye Academic Programme
// CBT 2 RFO Mock 4 · GSSC Advt. No. 2 of 2026 · CBT-II · Range Forest Officer
// 80 Questions · 80 Marks · 100 Minutes · No negative marking · IDs 21201–21280
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Subject (Forestry & Science) Q41–80 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "For much of the colonial period, forests in India were managed primarily as sources of timber and revenue. Communities that had lived in and around them for generations were often recast as intruders on state property, their grazing, gathering and shifting cultivation restricted or criminalised. Independence did not immediately change this approach; in many places, forest laws continued to treat local use with suspicion.\n\nThe recognition of forest rights in recent decades marks a significant shift. It acknowledges that forest-dwelling communities have legitimate claims to the land and resources on which their lives depend, and that their knowledge can contribute to conservation. Where communities have been given secure rights to manage forests, studies have often found that forest condition improves, because people protect what they can rely on.\n\nThe shift is not without tension. Rights can be misused, and not every claim is genuine. Some conservationists fear that fragile habitats may suffer if access is expanded without safeguards. These concerns are legitimate, but they argue for careful verification and clear rules, not for returning to a model that treats the forest's oldest inhabitants as its enemies."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 21201, section: "Reasoning",
    text: "Find the next term in the series: 3, 6, 18, 72, 360, ?",
    options: ["A) 1440", "B) 2160", "C) 1800", "D) 2520"],
    answer: "B",
    explanation: "The multipliers are ×2, ×3, ×4, ×5, so the next is ×6: 360 × 6 = 2160."
  },
  {
    id: 21202, section: "Reasoning",
    text: "Find the next term in the series: Z26, X24, U21, Q17, ?",
    options: ["A) M13", "B) K12", "C) L12", "D) L11"],
    answer: "C",
    explanation: "Each letter is paired with its alphabetical position, and the steps are −2, −3, −4, −5. Q(17) − 5 = L(12)."
  },
  {
    id: 21203, section: "Reasoning",
    text: "If the code of a word is (sum of the alphabetical positions of its letters) × (number of letters), so that CAT = (3 + 1 + 20) × 3 = 72, what is the code for TREE?",
    options: ["A) 196", "B) 144", "C) 180", "D) 192"],
    answer: "D",
    explanation: "T + R + E + E = 20 + 18 + 5 + 5 = 48, and 48 × 4 = 192."
  },
  {
    id: 21204, section: "Reasoning",
    text: "Pointing to a woman, Anil said, \"Her only brother's father is my wife's father-in-law.\" How is the woman related to Anil?",
    options: ["A) Mother", "B) Wife", "C) Sister", "D) Sister-in-law"],
    answer: "C",
    explanation: "Anil's wife's father-in-law is Anil's father. The woman's brother's father is her own father, so she and Anil share a father. Anil is her only brother, and she is his sister."
  },
  {
    id: 21205, section: "Reasoning",
    text: "Eight persons P, Q, R, S, T, U, V and W sit around a circular table facing the centre. S sits second to the right of P. Q sits opposite P. T sits immediately to the left of Q. U sits third to the left of S. V is not an immediate neighbour of P, and V sits opposite W. Who sits opposite R?",
    options: ["A) S", "B) U", "C) T", "D) V"],
    answer: "A",
    explanation: "With P at seat 0 and seats numbered clockwise (left = clockwise for people facing the centre): S = 6, Q = 4, T = 5, U = 1. Seats 2, 3 and 7 remain. V cannot be next to P (seat 7), and V must be opposite W, which works only with V = 3 and W = 7. So R = 2, and opposite R is seat 6, which is S."
  },
  {
    id: 21206, section: "Reasoning",
    text: "Question: How many sons does Mr. X have?<br>Statement I: Mr. X has three children.<br>Statement II: All of Mr. X's children are boys except one, who is a girl.",
    options: ["A) Statement I alone is sufficient", "B) Neither statement is sufficient even together", "C) Statement II alone is sufficient", "D) Both statements together are necessary"],
    answer: "D",
    explanation: "Together: 3 children with exactly one girl gives 2 sons. Neither statement alone gives the number."
  },
  {
    id: 21207, section: "Reasoning",
    text: "Statements: Only a few rangers are botanists. All botanists are graduates. No graduate is untrained.<br>Conclusions:<br>I. Some rangers are not botanists.<br>II. All botanists are trained.<br>III. Some rangers are graduates.",
    options: ["A) Only I follows", "B) All of I, II and III follow", "C) Only I and II follow", "D) Only II and III follow"],
    answer: "B",
    explanation: "'Only a few' means some rangers are botanists and some are not (I). Botanists are graduates and graduates are trained (II). The rangers who are botanists are graduates (III)."
  },
  {
    id: 21208, section: "Reasoning",
    text: "What is the angle between the hour hand and the minute hand of a clock at 7:38?",
    options: ["A) 29°", "B) 11°", "C) 19°", "D) 1°"],
    answer: "D",
    explanation: "|30 × 7 − 5.5 × 38| = |210 − 209| = 1°."
  },
  {
    id: 21209, section: "Reasoning",
    text: "On what day of the week did 26 January 1950, when the Constitution of India came into force, fall?",
    options: ["A) Thursday", "B) Wednesday", "C) Sunday", "D) Friday"],
    answer: "A",
    explanation: "Counting odd days: 1600 years = 0. 1601–1900 = 1 odd day. 1901–1949 = 49 years with 12 leap years = 61, i.e. 5 odd days. 26 days of January = 5. Total 11 = 4 odd days, which is Thursday."
  },
  {
    id: 21210, section: "Reasoning",
    text: "Statement: Several cases of elephants straying into villages near a sanctuary and damaging crops have been reported.<br>Courses of action:<br>I. Compensation should be paid promptly to the affected farmers.<br>II. All the elephants of the sanctuary should be shifted to zoos.",
    options: ["A) Neither follows", "B) Only II follows", "C) Only I follows", "D) Both follow"],
    answer: "C",
    explanation: "Prompt compensation is a reasonable response. Moving all the elephants to zoos is impractical and defeats the purpose of conservation."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 21211, section: "Numerical Ability",
    text: "Of 2,500 seedlings planted, 18% die in the first year and 10% of the survivors die in the second year. How many survive after two years?",
    options: ["A) 1,800", "B) 1,900", "C) 1,845", "D) 1,750"],
    answer: "C",
    explanation: "2500 × 0.82 × 0.90 = 1,845."
  },
  {
    id: 21212, section: "Numerical Ability",
    text: "A forest guard walks twice around a circular boundary of radius 3.5 km. How far does he walk? (Take π = 22/7)",
    options: ["A) 38.5 km", "B) 44 km", "C) 77 km", "D) 22 km"],
    answer: "B",
    explanation: "One round = 2 × 22/7 × 3.5 = 22 km, so two rounds = 44 km."
  },
  {
    id: 21213, section: "Numerical Ability",
    text: "If logₓ 8 = 3, what is the value of x?",
    options: ["A) 8", "B) 1/2", "C) 3", "D) 2"],
    answer: "D",
    explanation: "x³ = 8, so x = 2."
  },
  {
    id: 21214, section: "Numerical Ability",
    text: "A plantation programme plants 200 trees in the first year and 50 more each year than in the year before. How many trees are planted in total over 10 years?",
    options: ["A) 4,500", "B) 2,450", "C) 4,000", "D) 4,250"],
    answer: "D",
    explanation: "This is an AP: S = 10/2 × (2 × 200 + 9 × 50) = 5 × 850 = 4,250."
  },
  {
    id: 21215, section: "Numerical Ability",
    text: "Algae in a pond double in area every day and cover the whole pond on day 20. On which day was half the pond covered?",
    options: ["A) Day 19", "B) Day 18", "C) Day 10", "D) Day 15"],
    answer: "A",
    explanation: "Since the area doubles daily, half the pond was covered one day earlier, on day 19."
  },
  {
    id: 21216, section: "Numerical Ability",
    text: "A nursery sells saplings at ₹45 each after a 10% discount and still makes a 25% profit. What is the cost price of a sapling?",
    options: ["A) ₹35", "B) ₹40", "C) ₹32", "D) ₹36"],
    answer: "D",
    explanation: "CP = 45/1.25 = ₹36."
  },
  {
    id: 21217, section: "Numerical Ability",
    text: "In how many ways can a committee of 3 be formed from 6 men and 4 women so that it includes at least one woman?",
    options: ["A) 100", "B) 120", "C) 96", "D) 80"],
    answer: "A",
    explanation: "Total ¹⁰C₃ = 120, minus the all-men committees ⁶C₃ = 20, leaves 100."
  },
  {
    id: 21218, section: "Numerical Ability",
    text: "15 workers clear 3 hectares of weeds in 4 days. How many workers are needed to clear 9 hectares in 6 days?",
    options: ["A) 30", "B) 36", "C) 45", "D) 20"],
    answer: "A",
    explanation: "Each worker clears 3/(15 × 4) = 0.05 ha a day. 9/(6 × 0.05) = 30 workers."
  },
  {
    id: 21219, section: "Numerical Ability",
    text: "The side of a square plot is measured 2% too long. What is the percentage error in the calculated area?",
    options: ["A) 2.02%", "B) 4%", "C) 4.04%", "D) 2%"],
    answer: "C",
    explanation: "(1.02)² = 1.0404, an error of 4.04%."
  },
  {
    id: 21220, section: "Numerical Ability",
    text: "A jeep travels at 54 km/h. How many metres does it cover in 20 seconds?",
    options: ["A) 270 m", "B) 360 m", "C) 300 m", "D) 1,080 m"],
    answer: "C",
    explanation: "54 km/h = 15 m/s, and 15 × 20 = 300 m."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 21221, section: "English",
    passage: "passage_1",
    text: "Which of the following best expresses the central idea of the passage?",
    options: ["A) Recognising forest rights marks a shift towards treating communities as partners, with safeguards against misuse", "B) All forest rights claims are genuine", "C) Colonial forest policy was ideal for conservation", "D) Forest communities should be removed to protect habitats"],
    answer: "A",
    explanation: "The passage traces the shift from exclusion to recognition and argues for safeguards rather than reversal."
  },
  {
    id: 21222, section: "English",
    passage: "passage_1",
    text: "According to the passage, forests in the colonial period were managed mainly for",
    options: ["A) tribal welfare", "B) tourism", "C) wildlife protection", "D) timber and revenue"],
    answer: "D",
    explanation: "Stated in the first sentence."
  },
  {
    id: 21223, section: "English",
    passage: "passage_1",
    text: "Why, according to the passage, does forest condition often improve when communities have secure rights?",
    options: ["A) Governments spend more money there", "B) People protect what they can rely on", "C) Tourists stop visiting", "D) Timber extraction is banned"],
    answer: "B",
    explanation: "Stated in the second paragraph."
  },
  {
    id: 21224, section: "English",
    passage: "passage_1",
    text: "How does the author respond to the fears of some conservationists?",
    options: ["A) Conservationists should manage all forests", "B) Rights should be withdrawn immediately", "C) The concerns are legitimate but call for verification and clear rules, not a reversal of rights", "D) The concerns are baseless and should be ignored"],
    answer: "C",
    explanation: "Stated in the last paragraph."
  },
  {
    id: 21225, section: "English",
    passage: "passage_1",
    text: "The word 'recast', as used in the passage, most nearly means",
    options: ["A) presented in a different role", "B) rewarded", "C) forgiven", "D) relocated"],
    answer: "A",
    explanation: "Communities were re-described or re-presented as intruders."
  },
  {
    id: 21226, section: "English",
    text: "Choose the word most similar in meaning to SPORADIC.",
    options: ["A) Frequent", "B) Occasional", "C) Constant", "D) Regular"],
    answer: "B",
    explanation: "Sporadic means occurring at irregular intervals."
  },
  {
    id: 21227, section: "English",
    text: "Choose the word most similar in meaning to RESILIENT.",
    options: ["A) Rigid", "B) Fragile", "C) Brittle", "D) Hardy"],
    answer: "D",
    explanation: "Resilient means able to recover quickly; hardy."
  },
  {
    id: 21228, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to SCARCITY.",
    options: ["A) Abundance", "B) Dearth", "C) Shortage", "D) Lack"],
    answer: "A",
    explanation: "Scarcity is shortage; its opposite is abundance."
  },
  {
    id: 21229, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to ESOTERIC.",
    options: ["A) Obscure", "B) Abstruse", "C) Commonplace", "D) Arcane"],
    answer: "C",
    explanation: "Esoteric means understood by only a few; its opposite is commonplace."
  },
  {
    id: 21230, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The datas (A) / collected from (B) / the survey (C) / were analysed. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "'Data' is already plural (singular: datum); 'datas' is wrong."
  },
  {
    id: 21231, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Each of the communities (A) / have (B) / a forest rights (C) / committee. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "'Each of' takes a singular verb: 'has'."
  },
  {
    id: 21232, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The officer insisted (A) / on him (B) / to submit (C) / the report. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "'Insist on' is followed by a gerund: 'insisted on his submitting the report' (or 'insisted that he submit')."
  },
  {
    id: 21233, section: "English",
    text: "Fill in the blank: The new rules are ______ to come into force next month.",
    options: ["A) liable", "B) due", "C) owing", "D) apt"],
    answer: "B",
    explanation: "'Due to' (scheduled to) is the correct choice."
  },
  {
    id: 21234, section: "English",
    text: "Fill in the blank: She has a remarkable flair ______ field botany.",
    options: ["A) of", "B) for", "C) with", "D) in"],
    answer: "B",
    explanation: "'A flair for' something is the correct collocation."
  },
  {
    id: 21235, section: "English",
    text: "Fill in the blank: It is high time the department ______ the pending claims.",
    options: ["A) will verify", "B) has verified", "C) verifies", "D) verified"],
    answer: "D",
    explanation: "'It is high time' is followed by the past subjunctive (simple past form)."
  },
  {
    id: 21236, section: "English",
    text: "Choose the correct meaning of the idiom: To call a spade a spade",
    options: ["A) To insult someone", "B) To speak plainly and directly", "C) To work in a garden", "D) To exaggerate"],
    answer: "B",
    explanation: "It means to speak frankly, without euphemism."
  },
  {
    id: 21237, section: "English",
    text: "Choose the correct meaning of the idiom: In the doldrums",
    options: ["A) Very busy", "B) In great danger", "C) In a state of inactivity or low spirits", "D) Extremely happy"],
    answer: "C",
    explanation: "Being in the doldrums means stagnant or depressed."
  },
  {
    id: 21238, section: "English",
    text: "Choose the one word for: The original inhabitants of a region",
    options: ["A) Emigrants", "B) Immigrants", "C) Aborigines", "D) Nomads"],
    answer: "C",
    explanation: "Aborigines are the original inhabitants. Nomads move from place to place."
  },
  {
    id: 21239, section: "English",
    text: "Choose the correctly spelt word.",
    options: ["A) Embarassment", "B) Embarrassment", "C) Embarrasment", "D) Embarasment"],
    answer: "B",
    explanation: "It has a double r and a double s: E-M-B-A-R-R-A-S-S-M-E-N-T."
  },
  {
    id: 21240, section: "English",
    text: "Arrange the sentences in a logical order:<br>P. The gram sabha verified each claim against old records.<br>Q. Villagers submitted claims for land they had cultivated for generations.<br>R. The district committee approved the verified claims.<br>S. Title deeds were then issued to the families.",
    options: ["A) QRPS", "B) PQRS", "C) QPSR", "D) QPRS"],
    answer: "D",
    explanation: "Q (claims) → P (verification) → R (approval) → S (title deeds)."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Subject (Forestry & Science)
  // ════════════════════════════════════════════════════════════
  {
    id: 21241, section: "Subject (Forestry & Science)",
    text: "The Indian Forest Service was constituted as an All India Service in",
    options: ["A) 1864", "B) 1966", "C) 1947", "D) 1980"],
    answer: "B",
    explanation: "The IFS was constituted in 1966 under the All India Services Act, 1951."
  },
  {
    id: 21242, section: "Subject (Forestry & Science)",
    text: "Gir National Park in Gujarat is the only natural home of the",
    options: ["A) Asiatic lion", "B) Bengal tiger", "C) One-horned rhinoceros", "D) Snow leopard"],
    answer: "A",
    explanation: "Gir and the surrounding Saurashtra landscape hold the world's only wild Asiatic lions."
  },
  {
    id: 21243, section: "Subject (Forestry & Science)",
    text: "The Sundarbans, the largest mangrove forest in the world, is also famous for its",
    options: ["A) Nilgiri tahr", "B) Royal Bengal tigers", "C) Snow leopards", "D) Asiatic lions"],
    answer: "B",
    explanation: "The Sundarbans tigers are well known for living and swimming in a mangrove habitat."
  },
  {
    id: 21244, section: "Subject (Forestry & Science)",
    text: "Bhitarkanika in Odisha is well known for its population of",
    options: ["A) Red pandas", "B) saltwater (estuarine) crocodiles", "C) Indian bison only", "D) Asiatic lions"],
    answer: "B",
    explanation: "Bhitarkanika's mangroves hold one of India's largest populations of estuarine crocodiles."
  },
  {
    id: 21245, section: "Subject (Forestry & Science)",
    text: "The mass nesting ('arribada') of Olive Ridley turtles in Odisha takes place mainly at",
    options: ["A) Sundarbans", "B) Chilika lake", "C) Marina beach", "D) Gahirmatha and Rushikulya"],
    answer: "D",
    explanation: "Gahirmatha and the Rushikulya rookery are among the world's largest Olive Ridley nesting sites."
  },
  {
    id: 21246, section: "Subject (Forestry & Science)",
    text: "Which is the highest peak in the Western Ghats (and in India south of the Himalayas)?",
    options: ["A) Mullayanagiri", "B) Sonsogor", "C) Anamudi", "D) Doddabetta"],
    answer: "C",
    explanation: "Anamudi (2,695 m) in Kerala is the highest. Sonsogor is the highest point in Goa."
  },
  {
    id: 21247, section: "Subject (Forestry & Science)",
    text: "The Purple Frog (Nasikabatrachus sahyadrensis), which lives underground and surfaces mainly during the monsoon, is endemic to the",
    options: ["A) Western Ghats", "B) Andaman Islands", "C) Himalayas", "D) Thar Desert"],
    answer: "A",
    explanation: "It was described only in 2003 and is endemic to the Western Ghats."
  },
  {
    id: 21248, section: "Subject (Forestry & Science)",
    text: "The slender loris, found in the forests of south India, is a",
    options: ["A) small nocturnal primate", "B) venomous snake", "C) large diurnal bird", "D) type of deer"],
    answer: "A",
    explanation: "The slender loris is a small, nocturnal, tree-dwelling primate."
  },
  {
    id: 21249, section: "Subject (Forestry & Science)",
    text: "The dhole is also known as the",
    options: ["A) Indian wolf", "B) Striped hyena", "C) Asiatic wild dog", "D) Golden jackal"],
    answer: "C",
    explanation: "The dhole (Cuon alpinus) is a social, pack-hunting wild dog found in Indian forests."
  },
  {
    id: 21250, section: "Subject (Forestry & Science)",
    text: "The Indian mouse deer (chevrotain) is notable as",
    options: ["A) the largest deer of India", "B) a carnivore", "C) an aquatic mammal", "D) the smallest hoofed animal of India"],
    answer: "D",
    explanation: "The mouse deer is the smallest ungulate in India and lacks antlers."
  },
  {
    id: 21251, section: "Subject (Forestry & Science)",
    text: "The Mahseer, a large freshwater game fish found in Himalayan and Western Ghats rivers, is valued as an indicator of",
    options: ["A) marine ecosystems", "B) desert conditions", "C) polluted water", "D) clean, well-oxygenated rivers"],
    answer: "D",
    explanation: "Mahseer need clean, fast-flowing water, so declining numbers signal river degradation."
  },
  {
    id: 21252, section: "Subject (Forestry & Science)",
    text: "Water vapour is lost from leaves mainly through tiny pores called",
    options: ["A) hydathodes", "B) lenticels", "C) stomata", "D) plasmodesmata"],
    answer: "C",
    explanation: "Most transpiration happens through stomata, which are regulated by guard cells."
  },
  {
    id: 21253, section: "Subject (Forestry & Science)",
    text: "Deodar, the national tree of Pakistan and an important Himalayan timber species, is",
    options: ["A) Cedrus deodara", "B) Pinus roxburghii", "C) Abies pindrow", "D) Tectona grandis"],
    answer: "A",
    explanation: "Deodar (Himalayan cedar) is Cedrus deodara."
  },
  {
    id: 21254, section: "Subject (Forestry & Science)",
    text: "Large-scale Eucalyptus plantations have been criticised mainly because they",
    options: ["A) produce no timber", "B) consume large amounts of water and support little biodiversity", "C) cannot grow in India", "D) are protected species"],
    answer: "B",
    explanation: "Eucalyptus monocultures are criticised for high water use and low habitat value."
  },
  {
    id: 21255, section: "Subject (Forestry & Science)",
    text: "Water hyacinth (Eichhornia crassipes), a free-floating weed that chokes water bodies, is commonly called the",
    options: ["A) 'Lotus of India'", "B) 'Green Gold'", "C) 'Terror of Bengal'", "D) 'Queen of Flowers'"],
    answer: "C",
    explanation: "It spreads rapidly over ponds and rivers, blocking light and oxygen."
  },
  {
    id: 21256, section: "Subject (Forestry & Science)",
    text: "A 'seed orchard' in forestry is",
    options: ["A) a plantation of genetically superior trees managed for producing improved seed", "B) an orchard of fruit trees", "C) a seed storage room", "D) a natural forest"],
    answer: "A",
    explanation: "Seed orchards supply quality seed for planting programmes."
  },
  {
    id: 21257, section: "Subject (Forestry & Science)",
    text: "'Hardening off' of nursery seedlings refers to",
    options: ["A) applying chemical hardeners", "B) freezing seeds before sowing", "C) gradually exposing them to field conditions before planting out", "D) removing their roots"],
    answer: "C",
    explanation: "Hardening off reduces watering and shade so that seedlings survive transplanting."
  },
  {
    id: 21258, section: "Subject (Forestry & Science)",
    text: "'Pruning' in forestry is mainly done to",
    options: ["A) remove branches so as to produce clear, knot-free timber", "B) remove the roots", "C) increase the number of branches", "D) fell the whole tree"],
    answer: "A",
    explanation: "Pruning improves timber quality by reducing knots."
  },
  {
    id: 21259, section: "Subject (Forestry & Science)",
    text: "Smalian's formula is used in forestry to calculate",
    options: ["A) the height of a tree", "B) the density of wood", "C) the volume of a log from its end areas and length", "D) the age of a tree"],
    answer: "C",
    explanation: "V = (A1 + A2)/2 × L, where A1 and A2 are the end areas."
  },
  {
    id: 21260, section: "Subject (Forestry & Science)",
    text: "A charismatic species used to attract public support for conservation, such as the tiger, is called a",
    options: ["A) keystone species", "B) flagship species", "C) invasive species", "D) indicator species"],
    answer: "B",
    explanation: "Flagship species are chosen for their public appeal."
  },
  {
    id: 21261, section: "Subject (Forestry & Science)",
    text: "A species whose conservation also protects many other species sharing its habitat is called an",
    options: ["A) extinct species", "B) umbrella species", "C) exotic species", "D) invasive species"],
    answer: "B",
    explanation: "Protecting an umbrella species, such as the elephant, protects its large habitat and the species in it."
  },
  {
    id: 21262, section: "Subject (Forestry & Science)",
    text: "The diversity of species within a particular habitat or community is called",
    options: ["A) alpha diversity", "B) genetic diversity", "C) beta diversity", "D) gamma diversity"],
    answer: "A",
    explanation: "Alpha is within-habitat diversity, beta the change between habitats, and gamma the total for a region."
  },
  {
    id: 21263, section: "Subject (Forestry & Science)",
    text: "Biochemical Oxygen Demand (BOD) is a measure of",
    options: ["A) the oxygen in the atmosphere", "B) the hardness of water", "C) the salinity of sea water", "D) the amount of organic pollution in water"],
    answer: "D",
    explanation: "High BOD means much decomposable organic matter and poor water quality."
  },
  {
    id: 21264, section: "Subject (Forestry & Science)",
    text: "REDD+ is an international framework for",
    options: ["A) renewable energy development", "B) restoring deserts", "C) reducing emissions from deforestation and forest degradation", "D) regulating endangered species trade"],
    answer: "C",
    explanation: "REDD+ provides incentives to reduce forest-related emissions and enhance forest carbon stocks."
  },
  {
    id: 21265, section: "Subject (Forestry & Science)",
    text: "Compared with carbon dioxide, methane is a",
    options: ["A) less powerful greenhouse gas", "B) gas that cools the earth", "C) harmless gas", "D) much more powerful greenhouse gas per molecule"],
    answer: "D",
    explanation: "Methane's global warming potential is roughly 25–30 times that of CO₂ over 100 years."
  },
  {
    id: 21266, section: "Subject (Forestry & Science)",
    text: "The ozone layer that protects life from harmful ultraviolet radiation is located in the",
    options: ["A) troposphere", "B) ionosphere", "C) mesosphere", "D) stratosphere"],
    answer: "D",
    explanation: "Most atmospheric ozone lies in the stratosphere, about 15–35 km above the surface."
  },
  {
    id: 21267, section: "Subject (Forestry & Science)",
    text: "The phosphorus cycle is described as a 'sedimentary cycle' because",
    options: ["A) it occurs only in water", "B) it involves no living organisms", "C) its main reservoir is in rocks and sediments, not the atmosphere", "D) phosphorus is a gas"],
    answer: "C",
    explanation: "Unlike nitrogen and carbon, phosphorus has no significant gaseous phase."
  },
  {
    id: 21268, section: "Subject (Forestry & Science)",
    text: "A soil with a balanced mixture of sand, silt and clay, ideal for most plants, is called",
    options: ["A) loam", "B) gravel", "C) laterite", "D) peat"],
    answer: "A",
    explanation: "Loam combines good drainage with good water and nutrient retention."
  },
  {
    id: 21269, section: "Subject (Forestry & Science)",
    text: "Small barriers built across streams in catchment areas to slow run-off and recharge groundwater are called",
    options: ["A) breakwaters", "B) check dams", "C) levees", "D) groynes"],
    answer: "B",
    explanation: "Check dams reduce erosion and increase groundwater recharge."
  },
  {
    id: 21270, section: "Subject (Forestry & Science)",
    text: "CCA (Chromated Copper Arsenate) is used in forestry and the timber industry as a",
    options: ["A) fertiliser", "B) wood preservative", "C) insect attractant", "D) herbicide for weeds"],
    answer: "B",
    explanation: "CCA protects wood against fungi and termites."
  },
  {
    id: 21271, section: "Subject (Forestry & Science)",
    text: "A piece of wood with a specific gravity of less than 1 will",
    options: ["A) float on water", "B) sink in water", "C) dissolve in water", "D) absorb no water at all"],
    answer: "A",
    explanation: "By Archimedes' principle, a material less dense than water floats."
  },
  {
    id: 21272, section: "Subject (Forestry & Science)",
    text: "The moisture content of wood is most accurately determined by the",
    options: ["A) hydrometer test", "B) flame test", "C) litmus test", "D) oven-dry method"],
    answer: "D",
    explanation: "The sample is weighed, dried at about 103 ± 2 °C until its weight is constant, and the weight loss calculated."
  },
  {
    id: 21273, section: "Subject (Forestry & Science)",
    text: "Which biome has the highest biodiversity on Earth?",
    options: ["A) Desert", "B) Tropical rainforest", "C) Tundra", "D) Temperate grassland"],
    answer: "B",
    explanation: "Tropical rainforests hold more than half of the world's species on a small fraction of its land."
  },
  {
    id: 21274, section: "Subject (Forestry & Science)",
    text: "LiDAR, increasingly used in forest surveys, is a remote-sensing technique that uses",
    options: ["A) sound waves under water", "B) radio signals from satellites only", "C) thermal cameras only", "D) laser pulses to measure distances and canopy structure"],
    answer: "D",
    explanation: "LiDAR maps tree height and canopy structure in three dimensions."
  },
  {
    id: 21275, section: "Subject (Forestry & Science)",
    text: "The release by some plants of chemicals that inhibit the growth of other plants nearby is called",
    options: ["A) photoperiodism", "B) allelopathy", "C) vernalisation", "D) symbiosis"],
    answer: "B",
    explanation: "Allelopathy is seen in species such as lantana, eucalyptus and black walnut."
  },
  {
    id: 21276, section: "Subject (Forestry & Science)",
    text: "The final, relatively stable community at the end of ecological succession is called the",
    options: ["A) climax community", "B) ecotone", "C) pioneer community", "D) seral stage"],
    answer: "A",
    explanation: "The climax community is in equilibrium with the climate and soil of the area."
  },
  {
    id: 21277, section: "Subject (Forestry & Science)",
    text: "A forest that absorbs more carbon dioxide than it releases acts as a",
    options: ["A) carbon sink", "B) carbon neutral zone", "C) carbon source", "D) greenhouse"],
    answer: "A",
    explanation: "A carbon sink stores more carbon than it emits."
  },
  {
    id: 21278, section: "Subject (Forestry & Science)",
    text: "The Indian Council of Forestry Research and Education (ICFRE), the apex body for forestry research in India, is headquartered at",
    options: ["A) Jabalpur", "B) Bengaluru", "C) Dehradun", "D) New Delhi"],
    answer: "C",
    explanation: "ICFRE is at Dehradun, the same city as FRI, WII and IGNFA."
  },
  {
    id: 21279, section: "Subject (Forestry & Science)",
    text: "The Nilgiri tahr, a mountain ungulate endemic to the Western Ghats, is the state animal of",
    options: ["A) Goa", "B) Karnataka", "C) Kerala", "D) Tamil Nadu"],
    answer: "D",
    explanation: "The Nilgiri tahr (Nilgiritragus hylocrius) is Tamil Nadu's state animal. Eravikulam NP in Kerala holds its largest population."
  },
  {
    id: 21280, section: "Subject (Forestry & Science)",
    text: "The Gaur, the state animal of Goa, is notable as",
    options: ["A) a type of antelope", "B) the smallest wild cattle", "C) a domesticated animal", "D) the largest living wild bovine"],
    answer: "D",
    explanation: "The gaur (Bos gaurus) is the largest of all wild cattle."
  }
];
