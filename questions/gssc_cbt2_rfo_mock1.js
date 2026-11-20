// gssc_cbt2_rfo_mock1.js – Dr Shetye Academic Programme
// CBT 2 RFO Mock 1 · GSSC Advt. No. 2 of 2026 · CBT-II · Range Forest Officer
// 80 Questions · 80 Marks · 100 Minutes · No negative marking · IDs 20361–20440
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Subject (Forestry & Science) Q41–80 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "The Western Ghats, a chain of hills running parallel to India's western coast, are one of the world's recognised biodiversity hotspots. Their steep slopes intercept the moisture-laden winds of the south-west monsoon, giving rise to rivers on which millions of people depend, and their forests shelter a remarkable proportion of species found nowhere else. Yet the same region is home to dense human settlements, plantations, mines and roads, and its protection has become a test case for a question that recurs across the developing world: how should a society weigh the immediate needs of its people against the long-term integrity of its ecosystems?\n\nOne answer, favoured by many ecologists, is to define zones of differing sensitivity and to restrict activities accordingly, allowing development where its costs are low and forbidding it where the damage would be irreversible. Critics argue that such zoning, when drawn by distant experts, can override the rights and livelihoods of local communities, who are then asked to bear the cost of conservation while others enjoy its benefits. Both positions contain an important truth. Conservation imposed without consent breeds resentment and quiet resistance; development pursued without limits consumes the very resources on which it depends.\n\nThe way forward probably lies less in choosing between these positions than in changing the process by which decisions are made. Where communities are given a genuine share in managing forests — and in the benefits that flow from them — conservation ceases to be an external rule and becomes a local interest."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 20361, section: "Reasoning",
    text: "Find the next term in the series: 2, 3, 10, 15, 26, 35, ?",
    options: ["A) 49", "B) 50", "C) 51", "D) 48"],
    answer: "B",
    explanation: "The terms are n² + 1 for odd n and n² − 1 for even n: 1+1, 4−1, 9+1, 16−1, 25+1, 36−1, so the next is 49 + 1 = 50."
  },
  {
    id: 20362, section: "Reasoning",
    text: "Find the next term in the series: A1, C3, F6, J10, ?",
    options: ["A) P16", "B) O14", "C) N14", "D) O15"],
    answer: "D",
    explanation: "The letter jumps by +2, +3, +4, +5 (J → O), and the number is the letter's alphabetical position: O = 15."
  },
  {
    id: 20363, section: "Reasoning",
    text: "In a certain code, 'forest is green' is written as 'ka la ma', 'green and dense' as 'pa ma ra', and 'dense forest area' as 'ta ra ka'. What is the code for 'area'?",
    options: ["A) ta", "B) ra", "C) ma", "D) ka"],
    answer: "A",
    explanation: "forest = ka (sentences 1 and 3), green = ma (1 and 2), dense = ra (2 and 3). The remaining word in sentence 3, 'area', is ta."
  },
  {
    id: 20364, section: "Reasoning",
    text: "A is B's brother. C is A's mother. D is C's father. E is D's mother. How is B related to D?",
    options: ["A) Granddaughter", "B) Grandson", "C) Grandson or granddaughter (gender cannot be determined)", "D) Great-grandchild"],
    answer: "C",
    explanation: "B is C's child and C is D's child, so B is D's grandchild. B's gender is never stated, so 'grandson' or 'granddaughter' alone cannot be fixed."
  },
  {
    id: 20365, section: "Reasoning",
    text: "Seven persons J, K, L, M, N, O and P sit in a row facing North. K is third from the left. M is immediately to the right of K. L is second to the right of M. P is at one end, and O sits immediately to the right of P. J sits at an extreme end. Who sits between M and L?",
    options: ["A) O", "B) J", "C) P", "D) N"],
    answer: "D",
    explanation: "K = 3, M = 4, L = 6. O must be to P's right, so P = 1 and O = 2. Then J = 7, leaving N = 5, which is between M and L."
  },
  {
    id: 20366, section: "Reasoning",
    text: "Question: What is the value of x?<br>Statement I: x² = 49<br>Statement II: x &gt; 0",
    options: ["A) Statement II alone is sufficient", "B) Neither statement is sufficient", "C) Statement I alone is sufficient", "D) Both statements together are necessary"],
    answer: "D",
    explanation: "I gives x = ±7. II alone gives no value. Together they give x = 7."
  },
  {
    id: 20367, section: "Reasoning",
    text: "Statements: All mangroves are halophytes. Some halophytes are shrubs. No shrub is a tree.<br>Conclusions:<br>I. Some halophytes are not trees.<br>II. Some mangroves are not trees.",
    options: ["A) Both I and II follow", "B) Only I follows", "C) Neither I nor II follows", "D) Only II follows"],
    answer: "B",
    explanation: "The halophytes that are shrubs cannot be trees, so I follows. The mangroves may or may not include those shrubs, so II does not necessarily follow."
  },
  {
    id: 20368, section: "Reasoning",
    text: "Mahatma Gandhi was born on 2 October 1869. On which day of the week was that?",
    options: ["A) Friday", "B) Sunday", "C) Monday", "D) Saturday"],
    answer: "D",
    explanation: "Counting odd days: 1600 years = 0; 1601–1868 = 268 years with 65 leap years (excluding 1700 and 1800), giving 268 + 65 = 333 = 4 odd days. From 1 January to 2 October 1869 is 275 days = 2 odd days. Total 6 odd days, so the day is Saturday."
  },
  {
    id: 20369, section: "Reasoning",
    text: "Botany : Plants :: Entomology : ?",
    options: ["A) Insects", "B) Reptiles", "C) Birds", "D) Fungi"],
    answer: "A",
    explanation: "Botany is the study of plants; entomology is the study of insects."
  },
  {
    id: 20370, section: "Reasoning",
    text: "Assertion (A): Mangrove forests are important for coastal protection.<br>Reason (R): The dense roots of mangroves reduce wave energy and trap sediments.",
    options: ["A) Both A and R are true, but R is not the correct explanation of A", "B) A is false, but R is true", "C) A is true, but R is false", "D) Both A and R are true, and R is the correct explanation of A"],
    answer: "D",
    explanation: "Mangrove roots dampen waves and storm surges and hold sediment, which is exactly why mangroves protect coasts."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 20371, section: "Numerical Ability",
    text: "The number of trees in a plantation increases by 20% in the first year, decreases by 10% in the second year and increases by 5% in the third year. What is the net percentage change over three years?",
    options: ["A) 12.6% increase", "B) 14.2% increase", "C) 13.4% increase", "D) 15% increase"],
    answer: "C",
    explanation: "1.20 × 0.90 × 1.05 = 1.134, a 13.4% increase."
  },
  {
    id: 20372, section: "Numerical Ability",
    text: "How many kg of tea costing ₹420/kg must be mixed with 25 kg of tea costing ₹300/kg so that selling the mixture at ₹396/kg gives a 10% profit?",
    options: ["A) 30 kg", "B) 25 kg", "C) 15 kg", "D) 20 kg"],
    answer: "B",
    explanation: "Cost price of the mixture = 396/1.1 = ₹360. Alligation: (420 − 360) : (360 − 300) = 1 : 1, so 25 kg is needed."
  },
  {
    id: 20373, section: "Numerical Ability",
    text: "A is 50% more efficient than B. Together they finish a piece of work in 18 days. In how many days can B alone finish it?",
    options: ["A) 30 days", "B) 54 days", "C) 36 days", "D) 45 days"],
    answer: "D",
    explanation: "If B's rate is b, A's is 1.5b. 2.5b × 18 = 1 gives b = 1/45, so B takes 45 days."
  },
  {
    id: 20374, section: "Numerical Ability",
    text: "A boat whose speed in still water is 15 km/h goes 36 km downstream and returns. If the stream flows at 3 km/h, what is the total time taken?",
    options: ["A) 5 hours", "B) 4.5 hours", "C) 4.8 hours", "D) 6 hours"],
    answer: "A",
    explanation: "36/18 + 36/12 = 2 + 3 = 5 hours."
  },
  {
    id: 20375, section: "Numerical Ability",
    text: "The difference between the compound interest and the simple interest on a sum for 3 years at 10% per annum is ₹93. What is the sum?",
    options: ["A) ₹9,300", "B) ₹2,700", "C) ₹3,100", "D) ₹3,000"],
    answer: "D",
    explanation: "For 3 years, CI − SI = P(0.331 − 0.3) = 0.031P = 93, so P = ₹3,000."
  },
  {
    id: 20376, section: "Numerical Ability",
    text: "Two fair dice are thrown together. What is the probability that the sum of the numbers is 8?",
    options: ["A) 5/36", "B) 1/9", "C) 1/6", "D) 7/36"],
    answer: "A",
    explanation: "Favourable outcomes are (2,6), (3,5), (4,4), (5,3), (6,2), which is 5 out of 36."
  },
  {
    id: 20377, section: "Numerical Ability",
    text: "A tree has a diameter at breast height (DBH) of 40 cm. What is its basal area? (Take π = 3.14)",
    options: ["A) 0.2512 m²", "B) 0.1256 m²", "C) 0.5024 m²", "D) 0.0314 m²"],
    answer: "B",
    explanation: "Basal area = πd²/4 = 3.14 × 0.4²/4 = 3.14 × 0.04 = 0.1256 m²."
  },
  {
    id: 20378, section: "Numerical Ability",
    text: "From a point on level ground 30 m from the base of a tree, the angle of elevation of the top of the tree is 60°. What is the height of the tree?",
    options: ["A) 30√3 m", "B) 30 m", "C) 10√3 m", "D) 15√3 m"],
    answer: "A",
    explanation: "Height = 30 × tan 60° = 30√3 m (about 52 m)."
  },
  {
    id: 20379, section: "Numerical Ability",
    text: "The mean of 10 observations is 20. It was later found that one observation, 25, had been wrongly recorded as 52. What is the correct mean?",
    options: ["A) 17.3", "B) 22.7", "C) 17.7", "D) 19.3"],
    answer: "A",
    explanation: "Correct total = 200 − 52 + 25 = 173, so the mean is 17.3."
  },
  {
    id: 20380, section: "Numerical Ability",
    text: "In how many different ways can the letters of the word FOREST be arranged?",
    options: ["A) 5040", "B) 120", "C) 360", "D) 720"],
    answer: "D",
    explanation: "FOREST has 6 distinct letters, so 6! = 720 arrangements."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 20381, section: "English",
    passage: "passage_1",
    text: "What is the central concern of the passage?",
    options: ["A) Why the Western Ghats receive heavy rainfall", "B) Why ecologists oppose all development", "C) How mining should be expanded in the Western Ghats", "D) How to balance development needs against the ecological integrity of the Western Ghats"],
    answer: "D",
    explanation: "The first paragraph sets out the question, and the rest discusses possible answers."
  },
  {
    id: 20382, section: "English",
    passage: "passage_1",
    text: "According to the passage, critics of zoning argue that it",
    options: ["A) has no support among ecologists", "B) is scientifically inaccurate", "C) can override the rights and livelihoods of local communities", "D) is too lenient towards mining companies"],
    answer: "C",
    explanation: "Stated in the second paragraph."
  },
  {
    id: 20383, section: "English",
    passage: "passage_1",
    text: "By saying 'Both positions contain an important truth', the author",
    options: ["A) acknowledges the merit of both the conservationist and the critics' views", "B) supports only the ecologists' view", "C) rejects both positions as false", "D) avoids taking any stand on the issue"],
    answer: "A",
    explanation: "The author then explains what each side gets right."
  },
  {
    id: 20384, section: "English",
    passage: "passage_1",
    text: "What solution does the author propose?",
    options: ["A) Allowing unrestricted development", "B) Giving communities a genuine share in managing forests and in their benefits", "C) Leaving all decisions to distant experts", "D) Banning all human settlement in the Ghats"],
    answer: "B",
    explanation: "Stated in the last paragraph."
  },
  {
    id: 20385, section: "English",
    passage: "passage_1",
    text: "Which of the following can be inferred from the passage?",
    options: ["A) Rivers of the Western Ghats are not used by people", "B) Biodiversity hotspots have no human population", "C) Zoning has already solved the problem in the Western Ghats", "D) Conservation is more likely to succeed when local communities see it as serving their own interest"],
    answer: "D",
    explanation: "The final sentence: with a genuine share, conservation 'becomes a local interest'."
  },
  {
    id: 20386, section: "English",
    text: "Choose the word most similar in meaning to UBIQUITOUS.",
    options: ["A) Rare", "B) Omnipresent", "C) Unique", "D) Obscure"],
    answer: "B",
    explanation: "Ubiquitous means present everywhere."
  },
  {
    id: 20387, section: "English",
    text: "Choose the word most similar in meaning to MITIGATE.",
    options: ["A) Alleviate", "B) Provoke", "C) Ignore", "D) Aggravate"],
    answer: "A",
    explanation: "To mitigate is to make something less severe."
  },
  {
    id: 20388, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to VERBOSE.",
    options: ["A) Prolix", "B) Wordy", "C) Garrulous", "D) Concise"],
    answer: "D",
    explanation: "Verbose means using too many words; its opposite is concise."
  },
  {
    id: 20389, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to BENIGN.",
    options: ["A) Malignant", "B) Kind", "C) Gentle", "D) Harmless"],
    answer: "A",
    explanation: "Benign means gentle or harmless; its opposite is malignant."
  },
  {
    id: 20390, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Not only he is (A) / an expert in botany (B) / but also (C) / a good administrator. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "When 'not only' begins a clause, the subject and verb are inverted: 'Not only is he …'."
  },
  {
    id: 20391, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The committee has (A) / submitted their (B) / report to (C) / the government. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "Having used the singular 'has', the committee is treated as one unit, so the pronoun must be 'its report'."
  },
  {
    id: 20392, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Scarcely had (A) / the team entered the forest (B) / than it (C) / started raining. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "'Scarcely' is followed by 'when', not 'than'."
  },
  {
    id: 20393, section: "English",
    text: "Fill in the blank: All proposals for diversion of forest land are ______ to scrutiny by an expert committee.",
    options: ["A) immune", "B) subject", "C) averse", "D) prone"],
    answer: "B",
    explanation: "'Subject to' means liable to undergo. 'Prone to' suggests a bad tendency, 'averse to' means opposed, and 'immune to' means unaffected."
  },
  {
    id: 20394, section: "English",
    text: "Fill in the blank: His remarks were ______ to the discussion and were therefore ignored.",
    options: ["A) irrelevant", "B) pertinent", "C) germane", "D) apposite"],
    answer: "A",
    explanation: "Remarks that were ignored must have been irrelevant. The other three words all mean relevant."
  },
  {
    id: 20395, section: "English",
    text: "Fill in the blank: No sooner ______ the survey begun than it started to rain.",
    options: ["A) was", "B) did", "C) had", "D) has"],
    answer: "C",
    explanation: "'No sooner had + subject + V3 … than' is the fixed structure."
  },
  {
    id: 20396, section: "English",
    text: "Choose the correct meaning of the idiom: To bury the hatchet",
    options: ["A) To plant a tree", "B) To start a quarrel", "C) To make peace", "D) To hide a weapon"],
    answer: "C",
    explanation: "To bury the hatchet is to end a quarrel and become friendly."
  },
  {
    id: 20397, section: "English",
    text: "Choose the correct meaning of the idiom: A red herring",
    options: ["A) Something that misleads or distracts from the real issue", "B) A sign of danger", "C) A valuable discovery", "D) A rare species of fish"],
    answer: "A",
    explanation: "A red herring is a misleading clue or distraction."
  },
  {
    id: 20398, section: "English",
    text: "Choose the one word for: Government by officials who follow rigid rules and procedures",
    options: ["A) Autocracy", "B) Bureaucracy", "C) Democracy", "D) Plutocracy"],
    answer: "B",
    explanation: "Bureaucracy is administration by appointed officials. Plutocracy is rule by the wealthy and autocracy rule by one person."
  },
  {
    id: 20399, section: "English",
    text: "Choose the correct passive form of: The committee is considering the proposal.",
    options: ["A) The proposal is being considered by the committee.", "B) The proposal has been considered by the committee.", "C) The proposal was being considered by the committee.", "D) The proposal is considered by the committee."],
    answer: "A",
    explanation: "Present continuous active becomes 'is/are being + V3'."
  },
  {
    id: 20400, section: "English",
    text: "Choose the correct indirect speech: The officer said, \"Let us survey the area tomorrow.\"",
    options: ["A) The officer told that they will survey the area the next day.", "B) The officer proposed that they should survey the area the next day.", "C) The officer said that let us survey the area tomorrow.", "D) The officer proposed to survey the area tomorrow by us."],
    answer: "B",
    explanation: "'Let us' becomes 'proposed/suggested that they should', and 'tomorrow' becomes 'the next day'."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Subject (Forestry & Science)
  // ════════════════════════════════════════════════════════════
  {
    id: 20401, section: "Subject (Forestry & Science)",
    text: "The Indian Forest Act, under which forests are classified as reserved, protected and village forests, was enacted in",
    options: ["A) 1980", "B) 1927", "C) 1952", "D) 1878"],
    answer: "B",
    explanation: "The Indian Forest Act, 1927 consolidated earlier laws (including the 1878 Act). It provides for reserved, protected and village forests."
  },
  {
    id: 20402, section: "Subject (Forestry & Science)",
    text: "Under the Wildlife (Protection) Act, 1972, which Schedule gives the highest degree of protection to animals?",
    options: ["A) Schedule III", "B) Schedule IV", "C) Schedule I", "D) Schedule II"],
    answer: "C",
    explanation: "Schedule I species, such as the tiger, carry the highest penalties for offences."
  },
  {
    id: 20403, section: "Subject (Forestry & Science)",
    text: "By the 2023 amendment, the Forest (Conservation) Act, 1980 has been renamed as the",
    options: ["A) Forest Rights Act, 2023", "B) National Forest Act, 2023", "C) Green India Act, 1980", "D) Van (Sanrakshan Evam Samvardhan) Adhiniyam, 1980"],
    answer: "D",
    explanation: "The Forest (Conservation) Amendment Act, 2023 renamed it the Van (Sanrakshan Evam Samvardhan) Adhiniyam, 1980."
  },
  {
    id: 20404, section: "Subject (Forestry & Science)",
    text: "The National Forest Policy, 1988 aims to bring what proportion of India's geographical area under forest or tree cover?",
    options: ["A) One-half", "B) One-third", "C) One-fourth", "D) Two-thirds"],
    answer: "B",
    explanation: "The goal is 33% of the country's area. In hills and mountains, the target is two-thirds."
  },
  {
    id: 20405, section: "Subject (Forestry & Science)",
    text: "The India State of Forest Report (ISFR) is published every two years by",
    options: ["A) Botanical Survey of India", "B) Wildlife Institute of India", "C) Indian Council of Agricultural Research", "D) Forest Survey of India, Dehradun"],
    answer: "D",
    explanation: "The Forest Survey of India, under the Ministry of Environment, Forest and Climate Change, publishes the ISFR."
  },
  {
    id: 20406, section: "Subject (Forestry & Science)",
    text: "The Forest Research Institute (FRI), Dehradun was established in",
    options: ["A) 1926", "B) 1878", "C) 1906", "D) 1947"],
    answer: "C",
    explanation: "FRI was set up in 1906 as the Imperial Forest Research Institute."
  },
  {
    id: 20407, section: "Subject (Forestry & Science)",
    text: "The Chipko movement, in which villagers hugged trees to prevent felling, began in the 1970s in present-day",
    options: ["A) Kerala", "B) Uttarakhand", "C) Karnataka", "D) Madhya Pradesh"],
    answer: "B",
    explanation: "Chipko began in 1973 in the Chamoli district of the Garhwal Himalaya, now Uttarakhand."
  },
  {
    id: 20408, section: "Subject (Forestry & Science)",
    text: "The 'Appiko' movement for forest conservation, inspired by Chipko, took place in",
    options: ["A) Odisha", "B) Karnataka", "C) Rajasthan", "D) Goa"],
    answer: "B",
    explanation: "Appiko ('to hug' in Kannada) began in 1983 in the Uttara Kannada district of Karnataka."
  },
  {
    id: 20409, section: "Subject (Forestry & Science)",
    text: "In silviculture, the 'coppice system' refers to regeneration of a crop mainly from",
    options: ["A) planting nursery-raised seedlings", "B) root suckers only", "C) seeds dispersed by birds", "D) shoots arising from the stumps of felled trees"],
    answer: "D",
    explanation: "In coppicing, trees are felled and new shoots grow from the stumps (stool shoots). It suits species such as teak, sal and eucalyptus."
  },
  {
    id: 20410, section: "Subject (Forestry & Science)",
    text: "The 'taungya' system of forest regeneration involves",
    options: ["A) regeneration by natural seed fall", "B) growing agricultural crops between rows of young forest plantation", "C) felling all trees at one time", "D) planting trees only along roads"],
    answer: "B",
    explanation: "Taungya, which originated in Burma, lets cultivators grow field crops between young forest seedlings for the first few years."
  },
  {
    id: 20411, section: "Subject (Forestry & Science)",
    text: "What is the botanical name of teak?",
    options: ["A) Tectona grandis", "B) Shorea robusta", "C) Santalum album", "D) Dalbergia latifolia"],
    answer: "A",
    explanation: "Teak is Tectona grandis. Shorea robusta is sal, Dalbergia latifolia rosewood, and Santalum album sandalwood."
  },
  {
    id: 20412, section: "Subject (Forestry & Science)",
    text: "Sal (Shorea robusta) belongs to which family?",
    options: ["A) Fabaceae", "B) Dipterocarpaceae", "C) Lamiaceae", "D) Myrtaceae"],
    answer: "B",
    explanation: "Sal belongs to the Dipterocarpaceae family. Teak is in Lamiaceae and eucalyptus in Myrtaceae."
  },
  {
    id: 20413, section: "Subject (Forestry & Science)",
    text: "Sandalwood (Santalum album) is known to be",
    options: ["A) a root hemiparasite", "B) an insectivorous plant", "C) a total stem parasite", "D) an epiphyte"],
    answer: "A",
    explanation: "Sandalwood makes its own food but draws water and nutrients from the roots of host plants through haustoria."
  },
  {
    id: 20414, section: "Subject (Forestry & Science)",
    text: "Bamboo belongs to which plant family?",
    options: ["A) Arecaceae (palm family)", "B) Fabaceae (legume family)", "C) Poaceae (grass family)", "D) Moraceae (fig family)"],
    answer: "C",
    explanation: "Bamboos are giant grasses (Poaceae). Many species flower gregariously at long intervals and then die."
  },
  {
    id: 20415, section: "Subject (Forestry & Science)",
    text: "Casuarina is able to grow on nitrogen-poor sandy soils because its roots form nodules with the nitrogen-fixing organism",
    options: ["A) Azotobacter", "B) Anabaena", "C) Rhizobium", "D) Frankia"],
    answer: "D",
    explanation: "Casuarina forms actinorhizal nodules with the actinomycete Frankia. Rhizobium forms nodules with legumes."
  },
  {
    id: 20416, section: "Subject (Forestry & Science)",
    text: "Pneumatophores, the specialised roots found in mangroves such as Avicennia, mainly help in",
    options: ["A) storing food", "B) anchoring the plant to rocks", "C) gaseous exchange (breathing) in waterlogged soil", "D) absorbing salt from sea water"],
    answer: "C",
    explanation: "Pneumatophores grow upward out of anaerobic mud and take in oxygen through lenticels."
  },
  {
    id: 20417, section: "Subject (Forestry & Science)",
    text: "In mangroves such as Rhizophora, the seed germinates while the fruit is still attached to the parent plant. This is called",
    options: ["A) apomixis", "B) parthenocarpy", "C) vivipary", "D) polyembryony"],
    answer: "C",
    explanation: "Vivipary lets the seedling establish quickly once it drops into tidal mud."
  },
  {
    id: 20418, section: "Subject (Forestry & Science)",
    text: "The science of dating past events and studying climate history by analysing annual growth rings of trees is called",
    options: ["A) Palynology", "B) Silviculture", "C) Phenology", "D) Dendrochronology"],
    answer: "D",
    explanation: "Dendrochronology uses tree-ring patterns. Palynology studies pollen, and phenology studies the timing of seasonal events."
  },
  {
    id: 20419, section: "Subject (Forestry & Science)",
    text: "In Indian forest mensuration, the diameter of a standing tree is measured at breast height, which is taken as",
    options: ["A) 0.5 m above ground", "B) 1.37 m above ground", "C) 1.0 m above ground", "D) 2.0 m above ground"],
    answer: "B",
    explanation: "Breast height is standardised at 1.37 m (4.5 ft) above ground level."
  },
  {
    id: 20420, section: "Subject (Forestry & Science)",
    text: "Which instrument is used to extract a thin core of wood from a living tree to count its annual rings?",
    options: ["A) Pressler's increment borer", "B) Hypsometer", "C) Callipers", "D) Abney's level"],
    answer: "A",
    explanation: "The increment borer removes a core from bark to pith without felling the tree."
  },
  {
    id: 20421, section: "Subject (Forestry & Science)",
    text: "The pyramid of energy in an ecosystem is",
    options: ["A) always inverted", "B) spindle-shaped", "C) sometimes inverted", "D) always upright"],
    answer: "D",
    explanation: "Energy decreases at each higher trophic level, so the energy pyramid can never be inverted."
  },
  {
    id: 20422, section: "Subject (Forestry & Science)",
    text: "According to Lindeman's ten per cent law, roughly what fraction of energy is transferred from one trophic level to the next?",
    options: ["A) 10%", "B) 50%", "C) 1%", "D) 90%"],
    answer: "A",
    explanation: "About 10% passes to the next level; the rest is lost mainly as heat through respiration."
  },
  {
    id: 20423, section: "Subject (Forestry & Science)",
    text: "How many of the world's recognised biodiversity hotspots lie wholly or partly in India?",
    options: ["A) 6", "B) 3", "C) 4", "D) 2"],
    answer: "C",
    explanation: "They are the Himalaya, Indo-Burma, the Western Ghats &amp; Sri Lanka, and Sundaland (Nicobar Islands)."
  },
  {
    id: 20424, section: "Subject (Forestry & Science)",
    text: "The Ramsar Convention (1971) is an international treaty for the conservation of",
    options: ["A) migratory birds only", "B) deserts", "C) wetlands", "D) the ozone layer"],
    answer: "C",
    explanation: "The Ramsar Convention, signed at Ramsar in Iran, covers the conservation and wise use of wetlands."
  },
  {
    id: 20425, section: "Subject (Forestry & Science)",
    text: "CITES is an international agreement that regulates",
    options: ["A) deep-sea fishing", "B) the transboundary movement of hazardous waste", "C) greenhouse gas emissions", "D) international trade in endangered species of wild fauna and flora"],
    answer: "D",
    explanation: "CITES is the Convention on International Trade in Endangered Species of Wild Fauna and Flora."
  },
  {
    id: 20426, section: "Subject (Forestry & Science)",
    text: "Project Tiger was launched in India in",
    options: ["A) 1986", "B) 1992", "C) 1972", "D) 1973"],
    answer: "D",
    explanation: "Project Tiger began on 1 April 1973. (Project Elephant began in 1992.)"
  },
  {
    id: 20427, section: "Subject (Forestry & Science)",
    text: "The Montreal Protocol (1987) is concerned with",
    options: ["A) reducing carbon dioxide emissions", "B) phasing out ozone-depleting substances such as CFCs", "C) conserving biological diversity", "D) protecting wetlands"],
    answer: "B",
    explanation: "It controls the production and use of ozone-depleting substances."
  },
  {
    id: 20428, section: "Subject (Forestry & Science)",
    text: "In photosynthesis, the light-independent reactions (Calvin cycle) take place in the",
    options: ["A) thylakoid membrane", "B) mitochondrial matrix", "C) stroma of the chloroplast", "D) cytoplasm"],
    answer: "C",
    explanation: "Light reactions occur on the thylakoid membranes, and the Calvin cycle in the stroma."
  },
  {
    id: 20429, section: "Subject (Forestry & Science)",
    text: "'Kranz anatomy', with bundle-sheath cells rich in chloroplasts, is characteristic of",
    options: ["A) C4 plants such as maize and sugarcane", "B) CAM plants such as cacti", "C) all gymnosperms", "D) C3 plants such as wheat"],
    answer: "A",
    explanation: "Kranz anatomy is the leaf structure of C4 plants."
  },
  {
    id: 20430, section: "Subject (Forestry & Science)",
    text: "Which plant hormone is mainly responsible for fruit ripening?",
    options: ["A) Cytokinin", "B) Auxin", "C) Ethylene", "D) Gibberellin"],
    answer: "C",
    explanation: "Ethylene, a gaseous hormone, promotes fruit ripening and leaf fall."
  },
  {
    id: 20431, section: "Subject (Forestry & Science)",
    text: "Which plant hormone causes stomatal closure during water stress and is called the 'stress hormone'?",
    options: ["A) Abscisic acid", "B) Cytokinin", "C) Auxin", "D) Gibberellin"],
    answer: "A",
    explanation: "Abscisic acid (ABA) closes stomata and promotes dormancy."
  },
  {
    id: 20432, section: "Subject (Forestry & Science)",
    text: "Which enzyme is responsible for biological nitrogen fixation?",
    options: ["A) Rubisco", "B) Nitrogenase", "C) Nitrate reductase", "D) Amylase"],
    answer: "B",
    explanation: "Nitrogenase converts atmospheric N₂ to ammonia and works only in low-oxygen conditions."
  },
  {
    id: 20433, section: "Subject (Forestry & Science)",
    text: "Laterite soils, common in Goa and the Western Ghats, are typically",
    options: ["A) neutral and rich in humus", "B) alkaline and rich in calcium", "C) acidic and rich in iron and aluminium oxides", "D) saline and rich in sodium"],
    answer: "C",
    explanation: "Heavy leaching removes bases and silica, leaving acidic soils rich in iron and aluminium oxides."
  },
  {
    id: 20434, section: "Subject (Forestry & Science)",
    text: "To correct excessive acidity in agricultural or nursery soil, the material usually added is",
    options: ["A) Urea", "B) Sulphur", "C) Gypsum", "D) Lime"],
    answer: "D",
    explanation: "Lime (calcium carbonate) neutralises soil acidity. Gypsum is used for alkaline and sodic soils."
  },
  {
    id: 20435, section: "Subject (Forestry & Science)",
    text: "A forest fire that spreads through the tops of trees and is the most destructive and hardest to control is called a",
    options: ["A) ground fire", "B) surface fire", "C) crown fire", "D) controlled burn"],
    answer: "C",
    explanation: "Crown fires travel through the canopy. Surface fires burn litter and undergrowth, and ground fires smoulder in humus and peat."
  },
  {
    id: 20436, section: "Subject (Forestry & Science)",
    text: "The term 'social forestry' was first used officially in India by the",
    options: ["A) Indian Forest Act (1927)", "B) Planning Commission (1951)", "C) National Commission on Agriculture (1976)", "D) Forest Survey of India (1981)"],
    answer: "C",
    explanation: "The National Commission on Agriculture (1976) introduced it for raising trees on non-forest land for community needs."
  },
  {
    id: 20437, section: "Subject (Forestry & Science)",
    text: "Joint Forest Management (JFM), involving village committees in protecting forests in return for a share of benefits, was introduced by a Government of India resolution in",
    options: ["A) 2006", "B) 1990", "C) 1980", "D) 1972"],
    answer: "B",
    explanation: "The MoEF circular of 1 June 1990 introduced JFM."
  },
  {
    id: 20438, section: "Subject (Forestry & Science)",
    text: "Van Mahotsav, the annual tree-planting festival, was started in 1950 by",
    options: ["A) Jawaharlal Nehru", "B) Sunderlal Bahuguna", "C) K. M. Munshi", "D) Salim Ali"],
    answer: "C",
    explanation: "K. M. Munshi, then Union Minister for Agriculture, started Van Mahotsav in 1950."
  },
  {
    id: 20439, section: "Subject (Forestry & Science)",
    text: "What is the scientific name of the Gaur (Indian bison), the state animal of Goa?",
    options: ["A) Bos gaurus", "B) Bubalus arnee", "C) Rusa unicolor", "D) Bos indicus"],
    answer: "A",
    explanation: "The Gaur is Bos gaurus. Bubalus arnee is the wild water buffalo and Rusa unicolor the sambar."
  },
  {
    id: 20440, section: "Subject (Forestry & Science)",
    text: "Felling of trees in Goa, including on private land, is regulated by the",
    options: ["A) Goa Land Revenue Code, 1968 only", "B) Goa Forest Rights Act, 2006", "C) Goa, Daman and Diu Preservation of Trees Act, 1984", "D) Goa Green Belt Act, 1995"],
    answer: "C",
    explanation: "The 1984 Act requires permission from the Tree Officer to fell trees, with replanting conditions."
  }
];
