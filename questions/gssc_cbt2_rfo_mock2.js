// gssc_cbt2_rfo_mock2.js – Dr Shetye Academic Programme
// CBT 2 RFO Mock 2 · GSSC Advt. No. 2 of 2026 · CBT-II · Range Forest Officer
// 80 Questions · 80 Marks · 100 Minutes · No negative marking · IDs 20441–20520
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Subject (Forestry & Science) Q41–80 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "As forests shrink and fragment, encounters between people and wild animals become more frequent. Elephants raid crops planted along their traditional migration routes, leopards stray into villages in search of dogs and livestock, and gaur trample fields at the forest edge. For the farmer who loses a season's harvest in a single night, the animal is not a symbol of national heritage but a threat to his family's survival. Unless this reality is acknowledged, conservation risks losing the support of precisely those people whose tolerance it most depends on.\n\nTraditional responses have tended to be reactive: an animal causes damage, it is chased away or captured, and compensation is paid, often after long delays. Such measures address symptoms rather than causes. More durable solutions combine several approaches — securing corridors so that animals can move between habitats without passing through farmland, choosing crops that are less attractive to wildlife near forest boundaries, installing early-warning systems, and ensuring that compensation is prompt and fair.\n\nNo single measure removes conflict altogether. The goal is coexistence: a landscape in which both people and wildlife can survive with tolerable losses. Achieving it requires forest officers to be as skilled in listening to villagers as they are in tracking animals."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 20441, section: "Reasoning",
    text: "Find the next term in the series: 1, 3, 7, 13, 21, 31, ?",
    options: ["A) 42", "B) 43", "C) 45", "D) 41"],
    answer: "B",
    explanation: "The differences are 2, 4, 6, 8, 10, so the next is +12: 31 + 12 = 43."
  },
  {
    id: 20442, section: "Reasoning",
    text: "Find the next term in the series: Z1, X4, V9, T16, ?",
    options: ["A) S25", "B) R24", "C) Q25", "D) R25"],
    answer: "D",
    explanation: "The letters go back by 2 each time (Z, X, V, T, R), and the numbers are squares: 1, 4, 9, 16, 25."
  },
  {
    id: 20443, section: "Reasoning",
    text: "In a certain code, ECOLOGY is written as GEQNQIA. How will BIOLOGY be written in that code?",
    options: ["A) CKQNQIA", "B) DKPNQIA", "C) DKQNQHA", "D) DKQNQIA"],
    answer: "D",
    explanation: "Each letter moves 2 places forward (Y + 2 wraps round to A). B→D, I→K, O→Q, L→N, O→Q, G→I, Y→A."
  },
  {
    id: 20444, section: "Reasoning",
    text: "Q is the son of P. R is the wife of Q. S is the daughter of R. T is the brother of R. U is the father of T. How is U related to S?",
    options: ["A) Father", "B) Paternal grandfather", "C) Maternal grandfather", "D) Uncle"],
    answer: "C",
    explanation: "T is R's brother, so their father U is R's father. R is S's mother, so U is S's maternal grandfather."
  },
  {
    id: 20445, section: "Reasoning",
    text: "A surveyor walks 40 m towards the North-East and then 40 m towards the South-East. How far is he from his starting point, and in which direction?",
    options: ["A) 40√2 m, East", "B) 80 m, East", "C) 40 m, East", "D) 40√2 m, North"],
    answer: "A",
    explanation: "The two legs are at right angles, so the distance is √(40² + 40²) = 40√2 m. The north and south parts cancel, so he is due East."
  },
  {
    id: 20446, section: "Reasoning",
    text: "In a group of 50 forest staff, 30 can drive, 25 can swim and 10 can do both. How many can do neither?",
    options: ["A) 5", "B) 10", "C) 15", "D) 0"],
    answer: "A",
    explanation: "Drive or swim = 30 + 25 − 10 = 45, so 50 − 45 = 5 can do neither."
  },
  {
    id: 20447, section: "Reasoning",
    text: "Statements: No reptile is a mammal. Some mammals are aquatic.<br>Conclusions:<br>I. Some aquatic animals are not reptiles.<br>II. No aquatic animal is a reptile.",
    options: ["A) Neither I nor II follows", "B) Only II follows", "C) Both I and II follow", "D) Only I follows"],
    answer: "D",
    explanation: "The aquatic animals that are mammals cannot be reptiles, so I follows. Other aquatic animals may be reptiles (e.g. crocodiles), so II does not follow."
  },
  {
    id: 20448, section: "Reasoning",
    text: "How many odd days are there in 100 years?",
    options: ["A) 5", "B) 2", "C) 0", "D) 1"],
    answer: "A",
    explanation: "100 years have 24 leap years and 76 ordinary years: 24 × 2 + 76 = 124 odd days, and 124 mod 7 = 5."
  },
  {
    id: 20449, section: "Reasoning",
    text: "Find the term that completes the analogy:  6 : 35 :: 11 : ?",
    options: ["A) 120", "B) 121", "C) 110", "D) 132"],
    answer: "A",
    explanation: "6² − 1 = 35, so 11² − 1 = 120."
  },
  {
    id: 20450, section: "Reasoning",
    text: "Studies show that villages with community-managed forests report fewer forest fires. Which of the following, if true, most WEAKENS the conclusion that community management reduces fires?",
    options: ["A) Villagers report fires to the Forest Department promptly", "B) Community-managed forests are mostly in areas that naturally receive much higher rainfall", "C) Community members patrol the forests regularly in the dry season", "D) Fire lines are maintained by the village committees"],
    answer: "B",
    explanation: "If those forests are naturally wetter, the lower fire count may be due to rainfall rather than management. The other options strengthen the conclusion."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 20451, section: "Numerical Ability",
    text: "A deer population of 2,000 grows at 10% per year. What will it be after 3 years?",
    options: ["A) 2,620", "B) 2,662", "C) 2,600", "D) 2,700"],
    answer: "B",
    explanation: "2000 × 1.1³ = 2000 × 1.331 = 2,662."
  },
  {
    id: 20452, section: "Numerical Ability",
    text: "A sum amounts to ₹9,800 in 5 years and to ₹12,005 in 8 years at simple interest. What is the rate of interest?",
    options: ["A) 12%", "B) 9%", "C) 10%", "D) 11%"],
    answer: "A",
    explanation: "Interest for 3 years = 2,205, so ₹735 a year. Principal = 9800 − 5 × 735 = 6,125. Rate = 735/6125 × 100 = 12%."
  },
  {
    id: 20453, section: "Numerical Ability",
    text: "Pipe A fills a tank in 12 hours and pipe B empties it in 18 hours. If both are opened when the tank is half full, how long will it take to fill the tank?",
    options: ["A) 9 hours", "B) 12 hours", "C) 18 hours", "D) 36 hours"],
    answer: "C",
    explanation: "Net rate = 1/12 − 1/18 = 1/36 per hour. The remaining half takes 18 hours."
  },
  {
    id: 20454, section: "Numerical Ability",
    text: "A 200 m train running at 72 km/h overtakes a 300 m train running at 54 km/h in the same direction on a parallel track. How long does it take to pass completely?",
    options: ["A) 50 seconds", "B) 25 seconds", "C) 100 seconds", "D) 20 seconds"],
    answer: "C",
    explanation: "Relative speed = 18 km/h = 5 m/s. Distance = 500 m. Time = 100 s."
  },
  {
    id: 20455, section: "Numerical Ability",
    text: "The salaries of A and B are in the ratio 2 : 3. If each gets an increase of ₹4,000, the ratio becomes 3 : 4. What is B's present salary?",
    options: ["A) ₹12,000", "B) ₹16,000", "C) ₹8,000", "D) ₹9,000"],
    answer: "A",
    explanation: "4(2x + 4000) = 3(3x + 4000) gives x = 4000, so B = 3x = ₹12,000."
  },
  {
    id: 20456, section: "Numerical Ability",
    text: "A bag contains 4 red and 6 green balls. Two balls are drawn at random. What is the probability that both are red?",
    options: ["A) 2/15", "B) 1/5", "C) 2/5", "D) 4/25"],
    answer: "A",
    explanation: "⁴C₂/¹⁰C₂ = 6/45 = 2/15."
  },
  {
    id: 20457, section: "Numerical Ability",
    text: "A cylindrical log is 10 m long and 0.4 m in diameter. What is its volume? (Take π = 3.14)",
    options: ["A) 5.024 m³", "B) 0.1256 m³", "C) 12.56 m³", "D) 1.256 m³"],
    answer: "D",
    explanation: "V = πr²h = 3.14 × 0.2² × 10 = 1.256 m³."
  },
  {
    id: 20458, section: "Numerical Ability",
    text: "What is the median of 3, 7, 9, 12, 15 and 18?",
    options: ["A) 9", "B) 10.67", "C) 10.5", "D) 12"],
    answer: "C",
    explanation: "With six values, the median is the mean of the 3rd and 4th: (9 + 12)/2 = 10.5."
  },
  {
    id: 20459, section: "Numerical Ability",
    text: "In an election between two candidates, 4% of the votes cast were invalid. The winner got 58% of the valid votes and won by 4,800 votes. How many votes were cast in all?",
    options: ["A) 28,800", "B) 30,000", "C) 31,250", "D) 32,000"],
    answer: "C",
    explanation: "The margin is 16% of valid votes = 4,800, so valid votes = 30,000. Total = 30000/0.96 = 31,250."
  },
  {
    id: 20460, section: "Numerical Ability",
    text: "The HCF of two numbers is 16 and their LCM is 480. If one number is 96, what is the other?",
    options: ["A) 80", "B) 160", "C) 64", "D) 48"],
    answer: "A",
    explanation: "Product = HCF × LCM = 7,680. 7680/96 = 80."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 20461, section: "English",
    passage: "passage_1",
    text: "What is the primary argument of the passage?",
    options: ["A) Wild animals that damage crops should be removed from forests", "B) Farmers should be prohibited from living near forests", "C) Human–wildlife conflict must be tackled through preventive, people-sensitive measures if conservation is to keep local support", "D) Compensation alone can solve human–wildlife conflict"],
    answer: "C",
    explanation: "The passage argues for combined preventive measures and recognition of farmers' losses so that people keep supporting conservation."
  },
  {
    id: 20462, section: "English",
    passage: "passage_1",
    text: "Why does the author consider traditional responses inadequate?",
    options: ["A) They harm the animals", "B) They address symptoms rather than causes", "C) They are illegal", "D) They are too expensive"],
    answer: "B",
    explanation: "Stated in the second paragraph."
  },
  {
    id: 20463, section: "English",
    passage: "passage_1",
    text: "In the context of the passage, 'corridors' are",
    options: ["A) roads built for tourists", "B) fenced enclosures for captured animals", "C) strips of habitat that let animals move between forest areas", "D) passages inside forest offices"],
    answer: "C",
    explanation: "Corridors let animals move 'between habitats without passing through farmland'."
  },
  {
    id: 20464, section: "English",
    passage: "passage_1",
    text: "According to the passage, the realistic goal is",
    options: ["A) coexistence, with tolerable losses on both sides", "B) complete elimination of conflict", "C) relocation of all villages", "D) fencing every forest"],
    answer: "A",
    explanation: "'No single measure removes conflict altogether. The goal is coexistence.'"
  },
  {
    id: 20465, section: "English",
    passage: "passage_1",
    text: "The last sentence of the passage implies that",
    options: ["A) forest officers should stop tracking animals", "B) listening skills are unnecessary in forestry", "C) communicating with communities is as important for forest officers as technical skill", "D) villagers know more than forest officers about animals"],
    answer: "C",
    explanation: "It puts listening to villagers on par with tracking animals."
  },
  {
    id: 20466, section: "English",
    text: "Choose the word most similar in meaning to PROLIFERATE.",
    options: ["A) Multiply", "B) Decline", "C) Stagnate", "D) Wither"],
    answer: "A",
    explanation: "To proliferate is to increase rapidly in number."
  },
  {
    id: 20467, section: "English",
    text: "Choose the word most similar in meaning to CANDOUR.",
    options: ["A) Deceit", "B) Arrogance", "C) Shyness", "D) Frankness"],
    answer: "D",
    explanation: "Candour means openness and frankness."
  },
  {
    id: 20468, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to OBSOLETE.",
    options: ["A) Antiquated", "B) Archaic", "C) Current", "D) Outdated"],
    answer: "C",
    explanation: "Obsolete means no longer in use; its opposite is current."
  },
  {
    id: 20469, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to LUCID.",
    options: ["A) Explicit", "B) Obscure", "C) Plain", "D) Clear"],
    answer: "B",
    explanation: "Lucid means clear and easy to understand; its opposite is obscure."
  },
  {
    id: 20470, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>I am looking forward (A) / to work (B) / with your team (C) / next month. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "In 'look forward to', 'to' is a preposition, so it takes the gerund: 'looking forward to working'."
  },
  {
    id: 20471, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The quality of (A) / these timber logs (B) / are inferior (C) / to that of teak. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "The subject is 'the quality' (singular), so the verb must be 'is inferior'."
  },
  {
    id: 20472, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The researchers have (A) / spent three months (B) / studying the (C) / behaviour of the gaurs herd. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "D",
    explanation: "A noun used as a modifier is singular: 'the gaur herd' (or 'the herd of gaurs')."
  },
  {
    id: 20473, section: "English",
    text: "Fill in the blank: The new scheme is ______ to benefit tribal communities living near the sanctuary.",
    options: ["A) liable", "B) likely", "C) prone", "D) subject"],
    answer: "B",
    explanation: "'Likely' expresses a probable outcome. 'Liable' and 'prone' suggest something undesirable, and 'subject to' means exposed to."
  },
  {
    id: 20474, section: "English",
    text: "Fill in the blank: The officer was accused ______ negligence in handling the case.",
    options: ["A) with", "B) for", "C) on", "D) of"],
    answer: "D",
    explanation: "One is accused OF something."
  },
  {
    id: 20475, section: "English",
    text: "Fill in the blank: By the time the rescue team arrived, the elephant ______ back into the forest.",
    options: ["A) went", "B) goes", "C) had gone", "D) has gone"],
    answer: "C",
    explanation: "An action completed before another past action takes the past perfect."
  },
  {
    id: 20476, section: "English",
    text: "Choose the correct meaning of the idiom: To take the bull by the horns",
    options: ["A) To provoke someone", "B) To face a difficulty boldly", "C) To control animals", "D) To avoid responsibility"],
    answer: "B",
    explanation: "To take the bull by the horns is to deal with a problem directly and courageously."
  },
  {
    id: 20477, section: "English",
    text: "Choose the correct meaning of the idiom: A wild goose chase",
    options: ["A) A great adventure", "B) A successful mission", "C) A hunting expedition", "D) A futile search or pursuit"],
    answer: "D",
    explanation: "A wild goose chase is a hopeless or pointless pursuit."
  },
  {
    id: 20478, section: "English",
    text: "Choose the one word for: Animals that are active mainly at night",
    options: ["A) Diurnal", "B) Crepuscular", "C) Nocturnal", "D) Arboreal"],
    answer: "C",
    explanation: "Nocturnal animals are active at night, diurnal ones by day, and crepuscular ones at dawn and dusk. Arboreal means tree-dwelling."
  },
  {
    id: 20479, section: "English",
    text: "Choose the correctly spelt word.",
    options: ["A) Rododendron", "B) Rhododendrun", "C) Rhododendren", "D) Rhododendron"],
    answer: "D",
    explanation: "The correct spelling is R-H-O-D-O-D-E-N-D-R-O-N."
  },
  {
    id: 20480, section: "English",
    text: "Arrange the sentences in a logical order:<br>P. The images were then analysed to identify individual animals.<br>Q. The census team divided the sanctuary into grids.<br>R. Finally, the population estimate was published in a report.<br>S. Camera traps were installed in each grid for two months.",
    options: ["A) QPSR", "B) QSRP", "C) SQPR", "D) QSPR"],
    answer: "D",
    explanation: "Q (grids) → S (camera traps) → P (analysis) → R (report)."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Subject (Forestry & Science)
  // ════════════════════════════════════════════════════════════
  {
    id: 20481, section: "Subject (Forestry & Science)",
    text: "The Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act was enacted in",
    options: ["A) 1996", "B) 2010", "C) 2006", "D) 2002"],
    answer: "C",
    explanation: "The Forest Rights Act, 2006 recognises individual and community rights of forest-dwelling communities."
  },
  {
    id: 20482, section: "Subject (Forestry & Science)",
    text: "The National Biodiversity Authority, set up under the Biological Diversity Act, 2002, is headquartered at",
    options: ["A) Kolkata", "B) Chennai", "C) New Delhi", "D) Dehradun"],
    answer: "B",
    explanation: "The NBA was set up in 2003 at Chennai."
  },
  {
    id: 20483, section: "Subject (Forestry & Science)",
    text: "The Environment (Protection) Act was enacted in 1986, largely in response to",
    options: ["A) the Chipko movement", "B) the Silent Valley protests", "C) the Bhopal gas tragedy", "D) the Stockholm Conference"],
    answer: "C",
    explanation: "It followed the Bhopal gas disaster of December 1984 and gives the Centre wide powers."
  },
  {
    id: 20484, section: "Subject (Forestry & Science)",
    text: "The Compensatory Afforestation Fund Act, which governs funds collected when forest land is diverted for non-forest use, was passed in",
    options: ["A) 1980", "B) 2016", "C) 2023", "D) 2006"],
    answer: "B",
    explanation: "The CAF Act, 2016 created national and state CAMPA funds."
  },
  {
    id: 20485, section: "Subject (Forestry & Science)",
    text: "After the Wildlife (Protection) Amendment Act, 2022, how many Schedules does the Act have?",
    options: ["A) Four", "B) Five", "C) Three", "D) Six"],
    answer: "A",
    explanation: "The amendment cut the Schedules from six to four, removing the vermin schedule and adding one for CITES-listed species."
  },
  {
    id: 20486, section: "Subject (Forestry & Science)",
    text: "Project Elephant was launched by the Government of India in",
    options: ["A) 1973", "B) 2002", "C) 1986", "D) 1992"],
    answer: "D",
    explanation: "Project Elephant began in 1992 to protect elephants, their habitats and corridors."
  },
  {
    id: 20487, section: "Subject (Forestry & Science)",
    text: "Biosphere Reserves in India are designated under UNESCO's programme called",
    options: ["A) Ramsar Programme", "B) Man and the Biosphere (MAB)", "C) World Heritage Programme", "D) Global Environment Facility"],
    answer: "B",
    explanation: "Biosphere reserves follow UNESCO's MAB programme. The Nilgiri Biosphere Reserve (1986) was India's first."
  },
  {
    id: 20488, section: "Subject (Forestry & Science)",
    text: "Which of the following is an example of ex-situ conservation?",
    options: ["A) Wildlife sanctuaries", "B) National parks", "C) Seed banks and botanical gardens", "D) Biosphere reserves"],
    answer: "C",
    explanation: "Ex-situ conservation protects species outside their natural habitat. Parks, sanctuaries and reserves are in-situ."
  },
  {
    id: 20489, section: "Subject (Forestry & Science)",
    text: "On the IUCN Red List, which category indicates the highest risk of extinction in the wild for a species that still survives there?",
    options: ["A) Vulnerable", "B) Endangered", "C) Near Threatened", "D) Critically Endangered"],
    answer: "D",
    explanation: "The order of increasing risk is Near Threatened → Vulnerable → Endangered → Critically Endangered."
  },
  {
    id: 20490, section: "Subject (Forestry & Science)",
    text: "The Western Ghats were inscribed as a UNESCO World Natural Heritage Site in",
    options: ["A) 2016", "B) 2012", "C) 2002", "D) 1986"],
    answer: "B",
    explanation: "In 2012, 39 sites across Kerala, Karnataka, Tamil Nadu and Maharashtra were inscribed as the Western Ghats."
  },
  {
    id: 20491, section: "Subject (Forestry & Science)",
    text: "Champion and Seth's classification of Indian forest types recognises how many major forest type groups?",
    options: ["A) 12", "B) 16", "C) 22", "D) 6"],
    answer: "B",
    explanation: "Champion and Seth (1968) classified India's forests into 16 type groups, with about 200 types."
  },
  {
    id: 20492, section: "Subject (Forestry & Science)",
    text: "Tropical wet evergreen forests in India occur mainly where annual rainfall exceeds about",
    options: ["A) 100 cm", "B) 150 cm", "C) 50 cm", "D) 250 cm"],
    answer: "D",
    explanation: "They occur where rainfall is above roughly 250 cm and the dry season is short, as on the windward slopes of the Western Ghats and in the North-East."
  },
  {
    id: 20493, section: "Subject (Forestry & Science)",
    text: "In the 'selection system' of forest management",
    options: ["A) the entire crop is felled at once", "B) mature trees are removed singly or in small groups, keeping an uneven-aged forest", "C) agricultural crops are grown between seedlings", "D) only coppice shoots are retained"],
    answer: "B",
    explanation: "The selection system keeps continuous forest cover with trees of all ages."
  },
  {
    id: 20494, section: "Subject (Forestry & Science)",
    text: "In the 'clear-felling system', regeneration results in a forest that is",
    options: ["A) always mixed", "B) even-aged", "C) always coppice", "D) uneven-aged"],
    answer: "B",
    explanation: "Felling the whole crop at once and regenerating it produces an even-aged stand."
  },
  {
    id: 20495, section: "Subject (Forestry & Science)",
    text: "Seed scarification is done in forest nurseries to",
    options: ["A) break a hard seed coat and improve germination", "B) kill seed-borne pests", "C) increase seed size", "D) store seeds longer"],
    answer: "A",
    explanation: "Mechanical, acid or hot-water scarification lets water enter hard-coated seeds such as those of many legumes."
  },
  {
    id: 20496, section: "Subject (Forestry & Science)",
    text: "Air layering (gootee) is a method of",
    options: ["A) sowing seeds by air", "B) grafting two plants", "C) tissue culture", "D) vegetative propagation in which roots are induced on a branch while it is still attached to the parent plant"],
    answer: "D",
    explanation: "In air layering, roots form on a wounded, covered branch, which is then cut and planted."
  },
  {
    id: 20497, section: "Subject (Forestry & Science)",
    text: "Mycorrhiza is a symbiotic association between",
    options: ["A) fungi and plant roots", "B) algae and fungi", "C) insects and flowers", "D) bacteria and leaves"],
    answer: "A",
    explanation: "Mycorrhizal fungi improve the uptake of water and phosphorus, and the plant supplies carbohydrates. (Algae + fungi form lichens.)"
  },
  {
    id: 20498, section: "Subject (Forestry & Science)",
    text: "Heartwood, the central part of a tree trunk, is",
    options: ["A) dark, non-conducting and usually more durable", "B) the outermost protective layer", "C) the living layer that produces new cells", "D) light-coloured and conducts water"],
    answer: "A",
    explanation: "Heartwood is dead xylem filled with extractives. Sapwood conducts water."
  },
  {
    id: 20499, section: "Subject (Forestry & Science)",
    text: "Which tissue is responsible for secondary growth (increase in girth) in trees?",
    options: ["A) Epidermis", "B) Phloem", "C) Xylem", "D) Vascular cambium"],
    answer: "D",
    explanation: "The vascular cambium produces secondary xylem inwards and secondary phloem outwards."
  },
  {
    id: 20500, section: "Subject (Forestry & Science)",
    text: "Tendu leaves, an important non-timber forest product used for rolling bidis, come from",
    options: ["A) Butea monosperma", "B) Madhuca longifolia", "C) Acacia catechu", "D) Diospyros melanoxylon"],
    answer: "D",
    explanation: "Tendu is Diospyros melanoxylon. Acacia catechu yields katha, Butea is palash, and Madhuca is mahua."
  },
  {
    id: 20501, section: "Subject (Forestry & Science)",
    text: "Katha (cutch), used in paan and for tanning, is obtained from the heartwood of",
    options: ["A) Neem", "B) Khair (Acacia catechu)", "C) Teak", "D) Sal"],
    answer: "B",
    explanation: "Katha is extracted by boiling the heartwood of khair."
  },
  {
    id: 20502, section: "Subject (Forestry & Science)",
    text: "Lac is a resinous secretion produced by",
    options: ["A) an insect (Kerria lacca)", "B) the bark of sal trees", "C) a fungus", "D) a bacterium"],
    answer: "A",
    explanation: "Lac is secreted by the lac insect on host trees such as kusum, palash and ber."
  },
  {
    id: 20503, section: "Subject (Forestry & Science)",
    text: "Red Sanders (Pterocarpus santalinus), heavily targeted by smugglers, is endemic to the forests of",
    options: ["A) Goa", "B) Rajasthan", "C) Assam", "D) Andhra Pradesh (southern Eastern Ghats)"],
    answer: "D",
    explanation: "Red sanders is endemic to the Seshachalam and nearby hills of Andhra Pradesh."
  },
  {
    id: 20504, section: "Subject (Forestry & Science)",
    text: "Natural rubber is obtained from the latex of",
    options: ["A) Hevea brasiliensis", "B) Ficus elastica", "C) Tectona grandis", "D) Shorea robusta"],
    answer: "A",
    explanation: "Commercial rubber comes from Hevea brasiliensis, introduced from Brazil."
  },
  {
    id: 20505, section: "Subject (Forestry & Science)",
    text: "The Malabar giant squirrel, found in the forests of the Western Ghats, is scientifically known as",
    options: ["A) Funambulus palmarum", "B) Petaurista philippensis", "C) Ratufa indica", "D) Ratufa macroura"],
    answer: "C",
    explanation: "Ratufa indica is the Indian (Malabar) giant squirrel. Funambulus palmarum is the palm squirrel and Petaurista a flying squirrel."
  },
  {
    id: 20506, section: "Subject (Forestry & Science)",
    text: "Which snake is the only one known to build a nest for its eggs?",
    options: ["A) Common krait", "B) Indian python", "C) Russell's viper", "D) King cobra"],
    answer: "D",
    explanation: "The female king cobra (Ophiophagus hannah) builds a mound nest of leaves and guards it."
  },
  {
    id: 20507, section: "Subject (Forestry & Science)",
    text: "Hornbills are often called the 'farmers of the forest' because they",
    options: ["A) dig burrows that aerate the soil", "B) control insect pests", "C) disperse the seeds of many forest trees", "D) pollinate flowers"],
    answer: "C",
    explanation: "Large hornbills eat fruit and spread the seeds of many large-seeded trees widely."
  },
  {
    id: 20508, section: "Subject (Forestry & Science)",
    text: "In a single large tree supporting many herbivorous insects, the pyramid of numbers is",
    options: ["A) inverted", "B) spindle-shaped", "C) always linear", "D) upright"],
    answer: "A",
    explanation: "One producer (the tree) supports many primary consumers, so the base is narrower than the next level."
  },
  {
    id: 20509, section: "Subject (Forestry & Science)",
    text: "The transition zone between two ecosystems, such as between a forest and a grassland, is called an",
    options: ["A) ecological niche", "B) ecotone", "C) ecad", "D) ecotype"],
    answer: "B",
    explanation: "An ecotone often has more species than either ecosystem (the 'edge effect')."
  },
  {
    id: 20510, section: "Subject (Forestry & Science)",
    text: "Primary succession on bare rock usually begins with",
    options: ["A) large trees", "B) grasses", "C) shrubs", "D) lichens"],
    answer: "D",
    explanation: "Lichens start to break down rock and form soil, preparing the way for mosses, herbs and later woody plants."
  },
  {
    id: 20511, section: "Subject (Forestry & Science)",
    text: "The Kyoto Protocol, which set binding emission targets for developed countries, was adopted in",
    options: ["A) 2005", "B) 1997", "C) 1992", "D) 2015"],
    answer: "B",
    explanation: "It was adopted in 1997 and came into force in 2005. The Paris Agreement was adopted in 2015."
  },
  {
    id: 20512, section: "Subject (Forestry & Science)",
    text: "Under the Paris Agreement (2015), the climate pledges submitted by each country are called",
    options: ["A) Certified Emission Reductions", "B) Clean Development Mechanisms", "C) Nationally Determined Contributions (NDCs)", "D) Carbon Credits Allocation"],
    answer: "C",
    explanation: "Each Party submits and updates its NDC."
  },
  {
    id: 20513, section: "Subject (Forestry & Science)",
    text: "Rain is generally considered 'acid rain' when its pH is below",
    options: ["A) 8.5", "B) 5.6", "C) 3.0", "D) 7.0"],
    answer: "B",
    explanation: "Normal rain is slightly acidic (about 5.6) because of dissolved CO₂. Acid rain from SO₂ and NOₓ has a pH below this."
  },
  {
    id: 20514, section: "Subject (Forestry & Science)",
    text: "In photosynthesis, the oxygen released comes from",
    options: ["A) carbon dioxide", "B) glucose", "C) water", "D) chlorophyll"],
    answer: "C",
    explanation: "Isotope studies show that the O₂ comes from the splitting (photolysis) of water."
  },
  {
    id: 20515, section: "Subject (Forestry & Science)",
    text: "Cellulose, the main component of plant cell walls and wood, is a polymer of",
    options: ["A) β-glucose", "B) amino acids", "C) α-glucose", "D) fructose"],
    answer: "A",
    explanation: "Cellulose is a linear polymer of β-D-glucose with β-1,4 linkages. Starch is made of α-glucose."
  },
  {
    id: 20516, section: "Subject (Forestry & Science)",
    text: "The Normalised Difference Vegetation Index (NDVI), used in remote sensing of forests, is calculated from reflectance in the",
    options: ["A) blue and green bands", "B) ultraviolet and visible bands", "C) thermal and microwave bands", "D) red and near-infrared bands"],
    answer: "D",
    explanation: "NDVI = (NIR − Red)/(NIR + Red). Healthy vegetation reflects strongly in the near-infrared and absorbs red."
  },
  {
    id: 20517, section: "Subject (Forestry & Science)",
    text: "In the Forest Survey of India's classification, forest with tree canopy density of 70% and above is termed",
    options: ["A) Very Dense Forest", "B) Open Forest", "C) Scrub", "D) Moderately Dense Forest"],
    answer: "A",
    explanation: "Very Dense ≥ 70%, Moderately Dense 40–70%, Open 10–40%, Scrub &lt; 10%."
  },
  {
    id: 20518, section: "Subject (Forestry & Science)",
    text: "Silvipasture is an agroforestry system that combines",
    options: ["A) trees with pasture or fodder crops for livestock", "B) trees with agricultural crops", "C) trees with sericulture only", "D) trees with fish culture"],
    answer: "A",
    explanation: "Silvipasture integrates trees, pasture and animals. Agri-silviculture combines trees with crops."
  },
  {
    id: 20519, section: "Subject (Forestry & Science)",
    text: "The Wildlife Institute of India (WII), which trains wildlife managers and conducts research, is located at",
    options: ["A) Coimbatore", "B) Dehradun", "C) Bengaluru", "D) Bhopal"],
    answer: "B",
    explanation: "WII is an autonomous institute of the Ministry of Environment, Forest and Climate Change at Chandrabani, Dehradun."
  },
  {
    id: 20520, section: "Subject (Forestry & Science)",
    text: "Xylem and phloem in plants respectively conduct",
    options: ["A) gases; hormones", "B) food; water", "C) water and minerals; food (sugars)", "D) water; oxygen"],
    answer: "C",
    explanation: "Xylem carries water and minerals upward, and phloem carries sugars from source to sink."
  }
];
