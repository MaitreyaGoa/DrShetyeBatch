// gssc_cbt2_rfo_mock3.js – Dr Shetye Academic Programme
// CBT 2 RFO Mock 3 · GSSC Advt. No. 2 of 2026 · CBT-II · Range Forest Officer
// 80 Questions · 80 Marks · 100 Minutes · No negative marking · IDs 21121–21200
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Subject (Forestry & Science) Q41–80 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Forests are often described as the lungs of the planet, but the metaphor can mislead. Mature tropical forests do absorb vast amounts of carbon dioxide, yet they also release much of it through respiration and decay, so that their net uptake is smaller than their size suggests. Their real climate value lies in the enormous stock of carbon they already hold. When such a forest is cleared or burnt, that stored carbon is released in a few years, undoing decades of slow accumulation.\n\nThis has an important implication for policy. Planting new trees is useful, but it is no substitute for protecting existing forests. A young plantation may take half a century to store what an old forest loses in a single fire. Moreover, plantations of a single fast-growing species provide little of the habitat, water regulation and resilience that natural forests offer. Counting only the number of trees planted therefore gives a misleading picture of progress.\n\nThe most effective climate strategies thus combine three elements: preventing the loss of standing forests, restoring degraded land with a mix of native species, and supporting the communities whose daily decisions determine whether forests survive."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 21121, section: "Reasoning",
    text: "Find the next term in the series: 3, 8, 24, 63, 168, ?",
    options: ["A) 441", "B) 360", "C) 399", "D) 440"],
    answer: "D",
    explanation: "The terms are n² − 1 where n runs through the Fibonacci numbers 2, 3, 5, 8, 13. The next n is 21, giving 21² − 1 = 440."
  },
  {
    id: 21122, section: "Reasoning",
    text: "Find the next term in the series: C4, F9, J16, O25, ?",
    options: ["A) U36", "B) T36", "C) V36", "D) U35"],
    answer: "A",
    explanation: "The letters move +3, +4, +5, then +6 (O → U), and the numbers are squares 2², 3², 4², 5², 6²."
  },
  {
    id: 21123, section: "Reasoning",
    text: "In a certain code, FOREST is written as ROFTSE and BAMBOO as MABOOB. How will MANGROVE be written in that code?",
    options: ["A) GNAMROVE", "B) EVORGNAM", "C) GNAMEVOR", "D) MANGEVOR"],
    answer: "C",
    explanation: "Each half of the word is reversed separately: FOR|EST → ROF|TSE. MANG|ROVE → GNAM|EVOR."
  },
  {
    id: 21124, section: "Reasoning",
    text: "In a three-generation family, A is the father of B, who is married to C. D is the son of C. E is the sister of A. F is the daughter of B. How is E related to F?",
    options: ["A) Mother's sister", "B) Aunt", "C) Grandmother", "D) Grandfather's sister (grand-aunt)"],
    answer: "D",
    explanation: "F is B's daughter and B is A's child, so A is F's grandfather. E, A's sister, is F's grand-aunt."
  },
  {
    id: 21125, section: "Reasoning",
    text: "Seven persons A, B, C, D, E, F and G sit in a row facing South. A sits at the extreme left end. D sits third to the right of A. F sits immediately to the left of D. B sits at the extreme right end. C sits immediately to the left of B. E is not immediately to the right of A. Who sits exactly between C and D?",
    options: ["A) E", "B) G", "C) F", "D) A"],
    answer: "A",
    explanation: "Facing South, a person's right is towards the West. Numbering the seats 1–7 from the West end: A = 7, D = 4, F = 5, B = 1, C = 2. E cannot be at 6 (immediately right of A), so E = 3 and G = 6. Between C (2) and D (4) sits E."
  },
  {
    id: 21126, section: "Reasoning",
    text: "Question: What is Ravi's present age?<br>Statement I: Ravi is 4 years older than Sita.<br>Statement II: The sum of their present ages is 40 years.",
    options: ["A) Neither statement is sufficient even together", "B) Both statements together are necessary", "C) Statement I alone is sufficient", "D) Statement II alone is sufficient"],
    answer: "B",
    explanation: "Together: R − S = 4 and R + S = 40, so R = 22. Neither statement alone gives the answer."
  },
  {
    id: 21127, section: "Reasoning",
    text: "Statements: All forests are ecosystems. Some ecosystems are aquatic. No aquatic system is arid.<br>Conclusions:<br>I. Some ecosystems are not arid.<br>II. Some forests are aquatic.<br>III. All forests being arid is a possibility.",
    options: ["A) All I, II and III follow", "B) Only I follows", "C) Only I and III follow", "D) Only II and III follow"],
    answer: "C",
    explanation: "The aquatic ecosystems are not arid, so I follows. II is only a possibility. III is possible because forests need not overlap with the aquatic group."
  },
  {
    id: 21128, section: "Reasoning",
    text: "In a leap year that begins on a Friday, what day of the week is 31 December?",
    options: ["A) Saturday", "B) Thursday", "C) Sunday", "D) Friday"],
    answer: "A",
    explanation: "31 December is the 366th day, i.e. 365 days after 1 January: 52 weeks + 1 day. Friday + 1 = Saturday. (Example: 2016.)"
  },
  {
    id: 21129, section: "Reasoning",
    text: "Statement: An awareness campaign urges citizens to 'Plant more trees to fight climate change'.<br>Assumptions:<br>I. Trees absorb carbon dioxide from the atmosphere.<br>II. People can be influenced by campaigns.",
    options: ["A) Only I is implicit", "B) Neither is implicit", "C) Only II is implicit", "D) Both I and II are implicit"],
    answer: "D",
    explanation: "The message assumes that trees help against climate change (I) and that a campaign can change behaviour (II)."
  },
  {
    id: 21130, section: "Reasoning",
    text: "A study found that districts with more forest cover have lower rates of respiratory illness, and concluded that forests improve air quality and health. Which of the following, if true, most WEAKENS this conclusion?",
    options: ["A) Trees are known to filter particulate matter", "B) Districts with more forest cover also have far fewer industries and vehicles", "C) Respiratory illness is measured the same way in all districts", "D) Forest districts have more health awareness camps about forests"],
    answer: "B",
    explanation: "If forested districts simply have less pollution from industry and traffic, the lower illness rate may have nothing to do with the forests."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 21131, section: "Numerical Ability",
    text: "A forest stand has 400 trees per hectare, with an average basal area of 0.05 m² per tree. What is the stand basal area?",
    options: ["A) 8 m²/ha", "B) 20 m²/ha", "C) 200 m²/ha", "D) 2 m²/ha"],
    answer: "B",
    explanation: "400 × 0.05 = 20 m² per hectare."
  },
  {
    id: 21132, section: "Numerical Ability",
    text: "Using Volume = Basal area × Height × Form factor, find the volume of a tree with basal area 0.2 m², height 25 m and form factor 0.5.",
    options: ["A) 2.5 m³", "B) 10 m³", "C) 1.25 m³", "D) 5 m³"],
    answer: "A",
    explanation: "0.2 × 25 × 0.5 = 2.5 m³."
  },
  {
    id: 21133, section: "Numerical Ability",
    text: "Using Smalian's formula, find the volume of a log 8 m long whose end cross-sectional areas are 0.32 m² and 0.18 m².",
    options: ["A) 4.0 m³", "B) 2.0 m³", "C) 2.56 m³", "D) 1.44 m³"],
    answer: "B",
    explanation: "V = (A1 + A2)/2 × L = (0.32 + 0.18)/2 × 8 = 0.25 × 8 = 2.0 m³."
  },
  {
    id: 21134, section: "Numerical Ability",
    text: "A herd of 500 deer grows by 20% every year (compounded). After how many complete years will the herd first exceed 800?",
    options: ["A) 5 years", "B) 4 years", "C) 2 years", "D) 3 years"],
    answer: "D",
    explanation: "Year 1: 600, year 2: 720, year 3: 864, which is the first figure above 800."
  },
  {
    id: 21135, section: "Numerical Ability",
    text: "From 5 teak and 3 sal saplings, 2 are chosen at random. What is the probability that both are teak?",
    options: ["A) 3/14", "B) 5/14", "C) 25/64", "D) 5/8"],
    answer: "B",
    explanation: "⁵C₂/⁸C₂ = 10/28 = 5/14."
  },
  {
    id: 21136, section: "Numerical Ability",
    text: "In how many ways can 5 officers sit in a row if two particular officers must always sit together?",
    options: ["A) 24", "B) 120", "C) 96", "D) 48"],
    answer: "D",
    explanation: "Treat the pair as one unit: 4! ways, times 2 for the order within the pair. 24 × 2 = 48."
  },
  {
    id: 21137, section: "Numerical Ability",
    text: "What is the mean of 4, 8, 15, 16, 23 and 42?",
    options: ["A) 16", "B) 15.5", "C) 20", "D) 18"],
    answer: "D",
    explanation: "Sum = 108, and 108/6 = 18."
  },
  {
    id: 21138, section: "Numerical Ability",
    text: "A seed lot has 80% germination, and 10% of the germinated seedlings die in the nursery. About how many seeds must be sown to raise 2,000 healthy seedlings?",
    options: ["A) 2,400", "B) 2,778", "C) 2,222", "D) 2,500"],
    answer: "B",
    explanation: "Fraction surviving = 0.8 × 0.9 = 0.72. 2000/0.72 ≈ 2,777.8, so about 2,778 seeds."
  },
  {
    id: 21139, section: "Numerical Ability",
    text: "From the top of a 20 m watch-tower, the angle of depression of a deer on level ground is 30°. How far is the deer from the foot of the tower?",
    options: ["A) 10√3 m", "B) 20√3 m", "C) 20/√3 m", "D) 40 m"],
    answer: "B",
    explanation: "tan 30° = 20/d, so d = 20√3 m (about 34.6 m)."
  },
  {
    id: 21140, section: "Numerical Ability",
    text: "If India's forest cover rises from 21.5% to 21.7% of its geographical area of about 32.87 lakh sq km, by roughly how much does it increase?",
    options: ["A) About 657 sq km", "B) About 2,000 sq km", "C) About 6,574 sq km", "D) About 65,740 sq km"],
    answer: "C",
    explanation: "0.2% of 32,87,000 sq km ≈ 6,574 sq km."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 21141, section: "English",
    passage: "passage_1",
    text: "What is the central argument of the passage?",
    options: ["A) Communities should not be involved in forest decisions", "B) Protecting existing forests matters more for the climate than tree planting alone", "C) Tree planting is the only effective climate strategy", "D) Tropical forests release more carbon than they absorb and are therefore harmful"],
    answer: "B",
    explanation: "The author argues that planting is no substitute for protecting standing forests, and proposes a three-part strategy."
  },
  {
    id: 21142, section: "English",
    passage: "passage_1",
    text: "Why, according to the author, can the 'lungs of the planet' metaphor mislead?",
    options: ["A) Forests do not absorb carbon dioxide at all", "B) Forests produce no oxygen", "C) Forests release much of the carbon they absorb, so their net uptake is smaller than it seems", "D) Lungs do not absorb carbon dioxide"],
    answer: "C",
    explanation: "Stated in the first paragraph."
  },
  {
    id: 21143, section: "English",
    passage: "passage_1",
    text: "According to the passage, the real climate value of mature forests lies in",
    options: ["A) the large stock of carbon they already store", "B) the timber they produce", "C) their ability to produce rain", "D) the speed of their growth"],
    answer: "A",
    explanation: "'Their real climate value lies in the enormous stock of carbon they already hold.'"
  },
  {
    id: 21144, section: "English",
    passage: "passage_1",
    text: "Why does counting only the number of trees planted give a misleading picture?",
    options: ["A) Old forests cannot be counted", "B) Most planted trees are never counted", "C) Young monoculture plantations store little carbon for decades and offer fewer ecological benefits", "D) Planted trees grow faster than natural forests"],
    answer: "C",
    explanation: "Explained in the second paragraph."
  },
  {
    id: 21145, section: "English",
    passage: "passage_1",
    text: "Which of the following can be inferred from the passage?",
    options: ["A) A single-species plantation is not the ecological equal of a natural forest", "B) Forest fires release no carbon", "C) All plantations are harmful", "D) Communities have no effect on forest survival"],
    answer: "A",
    explanation: "Single-species plantations 'provide little of the habitat, water regulation and resilience' of natural forests."
  },
  {
    id: 21146, section: "English",
    text: "Choose the word most similar in meaning to OSTENSIBLE.",
    options: ["A) Genuine", "B) Apparent", "C) Hidden", "D) Doubtful"],
    answer: "B",
    explanation: "Ostensible means apparently true but perhaps not actually so."
  },
  {
    id: 21147, section: "English",
    text: "Choose the word most similar in meaning to AMELIORATE.",
    options: ["A) Ignore", "B) Improve", "C) Worsen", "D) Prolong"],
    answer: "B",
    explanation: "To ameliorate is to make something better."
  },
  {
    id: 21148, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to PRODIGAL.",
    options: ["A) Wasteful", "B) Extravagant", "C) Lavish", "D) Thrifty"],
    answer: "D",
    explanation: "Prodigal means wasteful; its opposite is thrifty."
  },
  {
    id: 21149, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to TENACIOUS.",
    options: ["A) Irresolute", "B) Determined", "C) Stubborn", "D) Persistent"],
    answer: "A",
    explanation: "Tenacious means firmly persistent; its opposite is irresolute (wavering)."
  },
  {
    id: 21150, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The phenomena (A) / of seed dispersal (B) / by birds is (C) / well documented. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "With the singular verb 'is', the singular 'phenomenon' is needed."
  },
  {
    id: 21151, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The researcher, along with (A) / her assistants, were (B) / collecting samples (C) / in the forest. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "With 'along with', the verb agrees with the first subject, 'the researcher': 'was collecting'."
  },
  {
    id: 21152, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The criteria for (A) / selection (B) / has been (C) / revised. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "'Criteria' is plural (singular: criterion): 'have been revised'."
  },
  {
    id: 21153, section: "English",
    text: "Fill in the blank: These findings are ______ with the results of earlier studies.",
    options: ["A) insistent", "B) resistant", "C) persistent", "D) consistent"],
    answer: "D",
    explanation: "'Consistent with' means in agreement with."
  },
  {
    id: 21154, section: "English",
    text: "Fill in the blank: After a long debate, the committee ______ the proposal as impractical.",
    options: ["A) turned out", "B) turned down", "C) turned in", "D) turned up"],
    answer: "B",
    explanation: "'Turn down' means to reject."
  },
  {
    id: 21155, section: "English",
    text: "Fill in the blank: Seldom ______ such a rich diversity of orchids in one place.",
    options: ["A) did I saw", "B) have I seen", "C) I have seen", "D) I saw"],
    answer: "B",
    explanation: "A sentence beginning with a negative adverb such as 'seldom' takes subject–auxiliary inversion."
  },
  {
    id: 21156, section: "English",
    text: "Choose the correct meaning of the idiom: To throw caution to the wind",
    options: ["A) To act recklessly", "B) To make a wish", "C) To forecast the weather", "D) To be very careful"],
    answer: "A",
    explanation: "It means to stop worrying about risks and act boldly or recklessly."
  },
  {
    id: 21157, section: "English",
    text: "Choose the correct meaning of the idiom: The lion's share",
    options: ["A) An equal share", "B) The largest part", "C) A courageous act", "D) A small portion"],
    answer: "B",
    explanation: "The lion's share is the largest portion."
  },
  {
    id: 21158, section: "English",
    text: "Choose the one word for: The study of the relationships between organisms and their environment",
    options: ["A) Ethology", "B) Etymology", "C) Economics", "D) Ecology"],
    answer: "D",
    explanation: "Ecology studies organisms in relation to their environment. Ethology studies animal behaviour and etymology the origin of words."
  },
  {
    id: 21159, section: "English",
    text: "Choose the correct passive form of: One must protect the forests.",
    options: ["A) The forests should be protecting.", "B) The forests are must be protected.", "C) The forests must protected by one.", "D) The forests must be protected."],
    answer: "D",
    explanation: "Modal + be + V3, with the indefinite agent 'one' dropped."
  },
  {
    id: 21160, section: "English",
    text: "Choose the correct indirect speech: The scientist said, \"The species has become extinct.\"",
    options: ["A) The scientist told that the species had become extinct.", "B) The scientist said that the species became extinct.", "C) The scientist said that the species had become extinct.", "D) The scientist said that the species has became extinct."],
    answer: "C",
    explanation: "Present perfect becomes past perfect after a past reporting verb."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Subject (Forestry & Science)
  // ════════════════════════════════════════════════════════════
  {
    id: 21161, section: "Subject (Forestry & Science)",
    text: "The National Board for Wildlife, the apex body under the Wildlife (Protection) Act, is chaired by",
    options: ["A) the Chief Justice of India", "B) the President", "C) the Prime Minister", "D) the Union Environment Minister"],
    answer: "C",
    explanation: "The NBWL is chaired by the Prime Minister. Its Standing Committee is chaired by the Environment Minister."
  },
  {
    id: 21162, section: "Subject (Forestry & Science)",
    text: "The National Tiger Conservation Authority (NTCA) was constituted in 2006 through an amendment to the",
    options: ["A) Indian Forest Act, 1927", "B) Biological Diversity Act, 2002", "C) Environment (Protection) Act, 1986", "D) Wildlife (Protection) Act, 1972"],
    answer: "D",
    explanation: "The 2006 amendment to the WPA created the NTCA."
  },
  {
    id: 21163, section: "Subject (Forestry & Science)",
    text: "The All India Tiger Estimation is carried out once every",
    options: ["A) 10 years", "B) year", "C) 4 years", "D) 2 years"],
    answer: "C",
    explanation: "Tiger estimation is done every four years (2006, 2010, 2014, 2018, 2022)."
  },
  {
    id: 21164, section: "Subject (Forestry & Science)",
    text: "Eco-Sensitive Zones (ESZs) around protected areas are notified under the",
    options: ["A) Indian Forest Act, 1927", "B) Environment (Protection) Act, 1986", "C) Biological Diversity Act, 2002", "D) Forest Rights Act, 2006"],
    answer: "B",
    explanation: "ESZs are notified by the MoEFCC under the Environment (Protection) Act."
  },
  {
    id: 21165, section: "Subject (Forestry & Science)",
    text: "'Conservation Reserves' and 'Community Reserves' were added as new categories of protected areas by the",
    options: ["A) Indian Forest Act, 1927", "B) 2022 Biological Diversity Amendment", "C) 2002 amendment to the Wildlife (Protection) Act", "D) National Forest Policy, 1988"],
    answer: "C",
    explanation: "The Wildlife (Protection) Amendment Act, 2002 introduced these categories."
  },
  {
    id: 21166, section: "Subject (Forestry & Science)",
    text: "Under the Biological Diversity Act, People's Biodiversity Registers are prepared by",
    options: ["A) the Forest Survey of India", "B) the Wildlife Institute of India", "C) Biodiversity Management Committees", "D) District Collectors"],
    answer: "C",
    explanation: "Local BMCs document local biological resources and knowledge in PBRs."
  },
  {
    id: 21167, section: "Subject (Forestry & Science)",
    text: "The Nagoya Protocol under the Convention on Biological Diversity deals with",
    options: ["A) access to genetic resources and fair sharing of benefits", "B) the protection of wetlands", "C) the transboundary movement of living modified organisms", "D) trade in endangered species"],
    answer: "A",
    explanation: "The Nagoya Protocol (2010) concerns Access and Benefit Sharing. The Cartagena Protocol deals with biosafety."
  },
  {
    id: 21168, section: "Subject (Forestry & Science)",
    text: "The Cartagena Protocol is concerned with",
    options: ["A) ozone depletion", "B) biosafety and the safe handling of living modified organisms", "C) migratory species", "D) climate change"],
    answer: "B",
    explanation: "It regulates the transboundary movement of LMOs."
  },
  {
    id: 21169, section: "Subject (Forestry & Science)",
    text: "Under the Bonn Challenge, India has pledged to restore approximately how much degraded and deforested land by 2030?",
    options: ["A) 26 million hectares", "B) 100 million hectares", "C) 5 million hectares", "D) 1 million hectares"],
    answer: "A",
    explanation: "India raised its pledge to 26 million hectares by 2030."
  },
  {
    id: 21170, section: "Subject (Forestry & Science)",
    text: "The Green India Mission is one of the missions under India's",
    options: ["A) National Action Plan on Climate Change", "B) National Biodiversity Action Plan", "C) Project Tiger", "D) Swachh Bharat Mission"],
    answer: "A",
    explanation: "The National Mission for a Green India is one of the eight missions of the NAPCC (2008)."
  },
  {
    id: 21171, section: "Subject (Forestry & Science)",
    text: "Who was the first Inspector General of Forests in India, often called the father of tropical forestry?",
    options: ["A) E. P. Stebbing", "B) James Sykes Gamble", "C) Dietrich Brandis", "D) Berthold Ribbentrop"],
    answer: "C",
    explanation: "Sir Dietrich Brandis became the first Inspector General of Forests in 1864."
  },
  {
    id: 21172, section: "Subject (Forestry & Science)",
    text: "India's first national park, established in 1936 as Hailey National Park, is now known as",
    options: ["A) Gir National Park", "B) Kaziranga National Park", "C) Jim Corbett National Park", "D) Kanha National Park"],
    answer: "C",
    explanation: "It was renamed Corbett National Park in honour of Jim Corbett."
  },
  {
    id: 21173, section: "Subject (Forestry & Science)",
    text: "Kaziranga National Park in Assam is world-famous for the",
    options: ["A) Indian one-horned rhinoceros", "B) Great Indian bustard", "C) Asiatic lion", "D) Snow leopard"],
    answer: "A",
    explanation: "Kaziranga holds the largest population of the greater one-horned rhinoceros."
  },
  {
    id: 21174, section: "Subject (Forestry & Science)",
    text: "Silent Valley National Park in Kerala is especially associated with the protection of the",
    options: ["A) Asiatic lion", "B) one-horned rhinoceros", "C) lion-tailed macaque", "D) Nilgiri tahr only"],
    answer: "C",
    explanation: "The Silent Valley movement and park are linked with protecting the endangered lion-tailed macaque."
  },
  {
    id: 21175, section: "Subject (Forestry & Science)",
    text: "The Great Indian Bustard is classified by the IUCN as",
    options: ["A) Least Concern", "B) Extinct in the Wild", "C) Critically Endangered", "D) Vulnerable"],
    answer: "C",
    explanation: "Fewer than 200 survive, mainly in Rajasthan, and it is Critically Endangered."
  },
  {
    id: 21176, section: "Subject (Forestry & Science)",
    text: "The bending of a plant shoot towards light (phototropism) is mainly caused by unequal distribution of",
    options: ["A) auxin", "B) ethylene", "C) abscisic acid", "D) cytokinin"],
    answer: "A",
    explanation: "Auxin collects on the shaded side, making those cells elongate more, so the shoot bends towards the light."
  },
  {
    id: 21177, section: "Subject (Forestry & Science)",
    text: "The pink pigment in the root nodules of legumes, which protects nitrogenase from oxygen, is",
    options: ["A) anthocyanin", "B) carotene", "C) chlorophyll", "D) leghaemoglobin"],
    answer: "D",
    explanation: "Leghaemoglobin binds oxygen and keeps the nodule interior low in oxygen for nitrogenase."
  },
  {
    id: 21178, section: "Subject (Forestry & Science)",
    text: "Gymnosperms such as pines and cycads are so called because they have",
    options: ["A) spores instead of seeds", "B) no roots", "C) naked seeds not enclosed in a fruit", "D) flowers but no seeds"],
    answer: "C",
    explanation: "'Gymnosperm' means 'naked seed'. The ovules are not enclosed in an ovary."
  },
  {
    id: 21179, section: "Subject (Forestry & Science)",
    text: "Palms do not form annual growth rings and do not increase much in girth because they",
    options: ["A) are monocots and lack a vascular cambium", "B) are gymnosperms", "C) grow only in deserts", "D) have no xylem"],
    answer: "A",
    explanation: "Monocots lack a vascular cambium, so true secondary growth does not occur."
  },
  {
    id: 21180, section: "Subject (Forestry & Science)",
    text: "Commercial resin tapping in the Indian Himalaya is mainly done from",
    options: ["A) Teak", "B) Deodar", "C) Sal", "D) Chir pine (Pinus roxburghii)"],
    answer: "D",
    explanation: "Chir pine is the main source of resin for turpentine and rosin."
  },
  {
    id: 21181, section: "Subject (Forestry & Science)",
    text: "Neem (Azadirachta indica) belongs to which family?",
    options: ["A) Dipterocarpaceae", "B) Fabaceae", "C) Myrtaceae", "D) Meliaceae"],
    answer: "D",
    explanation: "Neem is in the mahogany family, Meliaceae."
  },
  {
    id: 21182, section: "Subject (Forestry & Science)",
    text: "Lantana camara is a serious problem in Indian forests mainly because it is",
    options: ["A) an aggressive invasive shrub that suppresses native vegetation", "B) a nitrogen-fixing legume", "C) a valuable timber tree", "D) a protected endemic species"],
    answer: "A",
    explanation: "Lantana, introduced as an ornamental, forms dense thickets and has allelopathic effects."
  },
  {
    id: 21183, section: "Subject (Forestry & Science)",
    text: "Prosopis juliflora, widely planted in arid areas, is now considered",
    options: ["A) a rare endemic tree", "B) an invasive species that spreads aggressively", "C) a sacred tree protected by law", "D) a mangrove species"],
    answer: "B",
    explanation: "Prosopis juliflora (vilayati babul) spreads aggressively and suppresses native species."
  },
  {
    id: 21184, section: "Subject (Forestry & Science)",
    text: "In silviculture, 'thinning' means",
    options: ["A) planting more trees in gaps", "B) removing some trees from a crop to improve the growth of those that remain", "C) pruning only the lower branches", "D) felling the entire crop"],
    answer: "B",
    explanation: "Thinning reduces competition so that the remaining trees grow better."
  },
  {
    id: 21185, section: "Subject (Forestry & Science)",
    text: "In forest management, the 'rotation' is",
    options: ["A) the rotation of crops in agriculture", "B) the turning of logs for seasoning", "C) the movement of guards between beats", "D) the planned number of years between the formation of a crop and its final felling"],
    answer: "D",
    explanation: "Rotation is the planned age at which a crop is harvested."
  },
  {
    id: 21186, section: "Subject (Forestry & Science)",
    text: "Rotation for maximum volume production is fixed at the age at which",
    options: ["A) current annual increment is zero", "B) trees start flowering", "C) mean annual increment (MAI) is at its maximum", "D) height growth stops"],
    answer: "C",
    explanation: "Maximum MAI is where the MAI and CAI curves intersect."
  },
  {
    id: 21187, section: "Subject (Forestry & Science)",
    text: "In forest mensuration, the 'form factor' of a tree is the ratio of",
    options: ["A) its volume to the volume of a cylinder of the same basal area and height", "B) height to diameter", "C) crown width to height", "D) bark thickness to diameter"],
    answer: "A",
    explanation: "The form factor allows for the taper of the stem."
  },
  {
    id: 21188, section: "Subject (Forestry & Science)",
    text: "A species that has a disproportionately large effect on its ecosystem relative to its abundance is called a",
    options: ["A) keystone species", "B) flagship species", "C) invasive species", "D) endemic species"],
    answer: "A",
    explanation: "Removing a keystone species, such as a fig tree or a top predator, causes major changes in the ecosystem."
  },
  {
    id: 21189, section: "Subject (Forestry & Science)",
    text: "The increasing concentration of a toxic substance, such as DDT, at successive higher trophic levels is called",
    options: ["A) biodegradation", "B) eutrophication", "C) bioremediation", "D) biomagnification"],
    answer: "D",
    explanation: "Persistent chemicals accumulate up the food chain and reach the highest levels in top predators."
  },
  {
    id: 21190, section: "Subject (Forestry & Science)",
    text: "Excessive growth of algae in water bodies due to nutrient enrichment from fertilisers and sewage is called",
    options: ["A) desalination", "B) biomagnification", "C) eutrophication", "D) succession"],
    answer: "C",
    explanation: "Eutrophication depletes oxygen and can kill fish."
  },
  {
    id: 21191, section: "Subject (Forestry & Science)",
    text: "Which bacterium converts nitrates back into atmospheric nitrogen (denitrification)?",
    options: ["A) Pseudomonas", "B) Rhizobium", "C) Azotobacter", "D) Nitrosomonas"],
    answer: "A",
    explanation: "Pseudomonas is a common denitrifier. Nitrosomonas carries out nitrification, and Rhizobium and Azotobacter fix nitrogen."
  },
  {
    id: 21192, section: "Subject (Forestry & Science)",
    text: "In the nitrogen cycle, ammonia is converted to nitrite by",
    options: ["A) Pseudomonas", "B) Nitrobacter", "C) Clostridium", "D) Nitrosomonas"],
    answer: "D",
    explanation: "Nitrosomonas converts NH₃ to NO₂⁻, and Nitrobacter then converts nitrite to nitrate."
  },
  {
    id: 21193, section: "Subject (Forestry & Science)",
    text: "In a soil profile, the uppermost layer rich in organic matter and humus is the",
    options: ["A) C horizon", "B) O horizon", "C) R horizon", "D) B horizon"],
    answer: "B",
    explanation: "The O horizon is organic matter on the surface, A is topsoil, B is subsoil, C is weathered parent material, and R is bedrock."
  },
  {
    id: 21194, section: "Subject (Forestry & Science)",
    text: "Deep channels cut into the land by concentrated run-off, often seen in ravine areas, are an example of",
    options: ["A) splash erosion", "B) sheet erosion", "C) wind erosion", "D) gully erosion"],
    answer: "D",
    explanation: "Gully erosion is an advanced stage of water erosion, after sheet and rill erosion."
  },
  {
    id: 21195, section: "Subject (Forestry & Science)",
    text: "Shifting cultivation, practised in north-east India, is locally known as",
    options: ["A) Kumri", "B) Jhum", "C) Taungya", "D) Khazan"],
    answer: "B",
    explanation: "Jhum is the slash-and-burn cultivation of the North-East. Kumri is a similar practice in the Western Ghats region."
  },
  {
    id: 21196, section: "Subject (Forestry & Science)",
    text: "The central atom of the chlorophyll molecule is",
    options: ["A) zinc", "B) calcium", "C) magnesium", "D) iron"],
    answer: "C",
    explanation: "Chlorophyll has a magnesium ion at the centre of its porphyrin ring. Haemoglobin has iron."
  },
  {
    id: 21197, section: "Subject (Forestry & Science)",
    text: "'Seasoning' of timber refers to",
    options: ["A) adding preservatives only", "B) cutting it into planks", "C) applying paint to it", "D) reducing its moisture content to a suitable level"],
    answer: "D",
    explanation: "Seasoning dries the wood to reduce shrinkage, warping and decay."
  },
  {
    id: 21198, section: "Subject (Forestry & Science)",
    text: "The Indian pangolin, the world's most heavily trafficked group of mammals, is protected in India under",
    options: ["A) no law", "B) the Indian Forest Act only", "C) Schedule IV of the Wildlife (Protection) Act", "D) Schedule I of the Wildlife (Protection) Act"],
    answer: "D",
    explanation: "The Indian pangolin (Manis crassicaudata) has the highest legal protection."
  },
  {
    id: 21199, section: "Subject (Forestry & Science)",
    text: "Which is the largest deer species of India?",
    options: ["A) Sambar", "B) Barking deer", "C) Mouse deer", "D) Chital"],
    answer: "A",
    explanation: "The sambar (Rusa unicolor) is the largest Indian deer. The mouse deer is the smallest."
  },
  {
    id: 21200, section: "Subject (Forestry & Science)",
    text: "The Southern Birdwing, found in the Western Ghats, is notable as",
    options: ["A) India's smallest bird", "B) a venomous moth", "C) India's largest butterfly", "D) a freshwater fish"],
    answer: "C",
    explanation: "The Southern Birdwing (Troides minos) is India's largest butterfly by wingspan."
  }
];
