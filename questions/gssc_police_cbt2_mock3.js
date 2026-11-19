// gssc_police_cbt2_mock3.js – Dr Shetye Academic Programme
// CBT 2 Goa Police Mock 3 · GSSC Advt. No. 2 of 2026 pattern (Police Constable CBT-II)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 11601–11660
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 (RC Q21–25) | History of Goa Q41–60

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Along Goa's estuaries lie the khazans — low-lying fields reclaimed from the tidal flats centuries ago by village communities. Their builders raised earthen embankments, called bunds, to keep out the brackish water, and fitted them with sluice gates that open and close with the tide. At low tide the gates let fresh rainwater drain from the fields; at high tide they shut, holding back the salt. Within this system, rice was grown in the monsoon, while the adjoining channels served as nurseries for fish and prawns. It was, in effect, an engineering of cooperation: no single family could maintain a bund, and the failure of one stretch could flood the land of all.\n\nThat cooperation has steadily weakened. As young people moved to salaried jobs and land changed hands, the collective labour that kept the bunds repaired became harder to organise. Breaches went unmended, saline water crept in, and fields that had produced rice for generations were abandoned or converted to other uses. Some observers see this as an inevitable consequence of economic change. Others argue that the khazans are worth preserving not out of nostalgia but because they buffer villages against flooding and support a richness of life that no concrete embankment can replicate. The question, then, is less whether the khazans can survive than whether communities and government will decide that they should."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 11601, section: "Reasoning",
    text: "Find the next term in the series: 7, 10, 16, 28, 52, ?",
    options: ["A) 98", "B) 96", "C) 104", "D) 100"],
    answer: "D",
    explanation: "The differences double each time: +3, +6, +12, +24, so the next is +48. 52 + 48 = 100."
  },
  {
    id: 11602, section: "Reasoning",
    text: "Find the term that completes the analogy:  8 : 81 :: 64 : ?",
    options: ["A) 1024", "B) 625", "C) 729", "D) 512"],
    answer: "B",
    explanation: "8 = 2³ and 81 = 3⁴, so n³ : (n+1)⁴. 64 = 4³, so the answer is 5⁴ = 625."
  },
  {
    id: 11603, section: "Reasoning",
    text: "In a certain language, 'pit na sa' means 'police catch thief', 'na ta ru' means 'thief runs fast' and 'sa ru pe' means 'police runs away'. What is the code for 'catch'?",
    options: ["A) sa", "B) pit", "C) na", "D) ta"],
    answer: "B",
    explanation: "'police' = sa (common to sentences 1 and 3), 'thief' = na (1 and 2), 'runs' = ru (2 and 3). The remaining word in sentence 1, 'catch', is pit."
  },
  {
    id: 11604, section: "Reasoning",
    text: "Introducing a woman, Ramesh said, \"She is the wife of the only son of my father's mother.\" How is the woman related to Ramesh?",
    options: ["A) Aunt", "B) Sister", "C) Grandmother", "D) Mother"],
    answer: "D",
    explanation: "The only son of Ramesh's father's mother is Ramesh's father. His wife is Ramesh's mother."
  },
  {
    id: 11605, section: "Reasoning",
    text: "Five persons A, B, C, D and E sit in a row facing North. B sits at the extreme left end. D sits third to the right of B. E sits immediately to the right of D. C sits immediately to the right of A. Who sits in the middle of the row?",
    options: ["A) D", "B) C", "C) E", "D) A"],
    answer: "B",
    explanation: "Positions from the left: B = 1, D = 4, E = 5. A and C must be adjacent with C to A's right, so A = 2 and C = 3. The middle seat (3) is C."
  },
  {
    id: 11606, section: "Reasoning",
    text: "A clock shows the time 3:40. What time will its mirror image show?",
    options: ["A) 8:20", "B) 9:20", "C) 7:20", "D) 8:40"],
    answer: "A",
    explanation: "For a mirror image, subtract the time from 11:60. 11:60 − 3:40 = 8:20."
  },
  {
    id: 11607, section: "Reasoning",
    text: "If 26 January 2026 was a Monday, what day of the week will 15 August 2026 be?",
    options: ["A) Saturday", "B) Thursday", "C) Sunday", "D) Friday"],
    answer: "A",
    explanation: "Days after 26 Jan: 5 (Jan) + 28 + 31 + 30 + 31 + 30 + 31 + 15 = 201. 201 = 28 weeks + 5 days, and Monday + 5 = Saturday."
  },
  {
    id: 11608, section: "Reasoning",
    text: "Find the odd one out: 17, 37, 57, 67, 97",
    options: ["A) 37", "B) 97", "C) 57", "D) 67"],
    answer: "C",
    explanation: "All the others are prime numbers; 57 = 3 × 19 is composite."
  },
  {
    id: 11609, section: "Reasoning",
    text: "Question: Is X greater than Y?<br>Statement I: X + Y = 20<br>Statement II: X − Y = 4",
    options: ["A) Statement II alone is sufficient", "B) Neither statement is sufficient", "C) Statement I alone is sufficient", "D) Both statements together are necessary"],
    answer: "A",
    explanation: "II alone gives X = Y + 4, so X &gt; Y. I alone gives no comparison. So II alone is sufficient."
  },
  {
    id: 11610, section: "Reasoning",
    text: "If P &gt; Q ≥ R = S &lt; T, which of the following is definitely true?",
    options: ["A) S ≥ P", "B) R &gt; T", "C) Q &gt; T", "D) P &gt; S"],
    answer: "D",
    explanation: "P &gt; Q ≥ R = S gives P &gt; S. Q and T cannot be compared, R &lt; T is given (so R &gt; T is false), and S ≥ P contradicts P &gt; S."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 11611, section: "Numerical Ability",
    text: "In an election between two candidates, 10% of the voters did not vote and 60 votes cast were invalid. The winner got 47% of the total number of voters and won by 308 votes. What was the total number of voters?",
    options: ["A) 6,400", "B) 6,200", "C) 6,000", "D) 5,800"],
    answer: "B",
    explanation: "Valid votes = 0.90N − 60. Loser = 0.90N − 60 − 0.47N = 0.43N − 60. Margin = 0.47N − (0.43N − 60) = 0.04N + 60 = 308, so N = 6,200."
  },
  {
    id: 11612, section: "Numerical Ability",
    text: "An article marked at ₹1,500 is sold for ₹1,200, and the seller still makes a profit of 20%. What are the cost price and the discount percentage?",
    options: ["A) ₹1,000 and 25%", "B) ₹960 and 20%", "C) ₹1,000 and 20%", "D) ₹960 and 25%"],
    answer: "C",
    explanation: "CP = 1200/1.20 = ₹1,000. Discount = 300/1500 × 100 = 20%."
  },
  {
    id: 11613, section: "Numerical Ability",
    text: "Two trains 120 m and 180 m long run on parallel tracks in opposite directions at 54 km/h and 36 km/h. How long will they take to cross each other completely?",
    options: ["A) 30 seconds", "B) 12 seconds", "C) 15 seconds", "D) 10 seconds"],
    answer: "B",
    explanation: "Relative speed = 54 + 36 = 90 km/h = 25 m/s. Total length = 300 m. Time = 300/25 = 12 s."
  },
  {
    id: 11614, section: "Numerical Ability",
    text: "A sum of money doubles itself in 8 years at simple interest. In how many years will it become four times itself at the same rate?",
    options: ["A) 20 years", "B) 32 years", "C) 16 years", "D) 24 years"],
    answer: "D",
    explanation: "Doubling means 100% interest in 8 years, i.e. 12.5% p.a. Four times needs 300% interest: 300/12.5 = 24 years."
  },
  {
    id: 11615, section: "Numerical Ability",
    text: "In what ratio must rice costing ₹40 per kg be mixed with rice costing ₹55 per kg so that the mixture costs ₹45 per kg?",
    options: ["A) 3 : 1", "B) 1 : 2", "C) 2 : 1", "D) 3 : 2"],
    answer: "C",
    explanation: "By alligation: (55 − 45) : (45 − 40) = 10 : 5 = 2 : 1."
  },
  {
    id: 11616, section: "Numerical Ability",
    text: "A is twice as efficient as B, and together they finish a piece of work in 14 days. In how many days can A alone finish the work?",
    options: ["A) 42 days", "B) 21 days", "C) 28 days", "D) 18 days"],
    answer: "B",
    explanation: "Let B's rate be x, so A's is 2x. Then 3x × 14 = 1, so x = 1/42 and A's rate = 1/21. A alone takes 21 days."
  },
  {
    id: 11617, section: "Numerical Ability",
    text: "The sum of the ages of 5 children born at intervals of 3 years each is 50 years. What is the age of the youngest child?",
    options: ["A) 5 years", "B) 8 years", "C) 6 years", "D) 4 years"],
    answer: "D",
    explanation: "Ages are y, y+3, y+6, y+9, y+12. The sum 5y + 30 = 50 gives y = 4."
  },
  {
    id: 11618, section: "Numerical Ability",
    text: "The average weight of 8 persons increases by 2.5 kg when a new person replaces one of them who weighs 65 kg. What is the weight of the new person?",
    options: ["A) 85 kg", "B) 75 kg", "C) 90 kg", "D) 80 kg"],
    answer: "A",
    explanation: "Total increase = 8 × 2.5 = 20 kg. New person = 65 + 20 = 85 kg."
  },
  {
    id: 11619, section: "Numerical Ability",
    text: "A pipe can fill a tank in 6 hours. Because of a leak at the bottom, it takes 8 hours to fill the tank. In how many hours can the leak alone empty the full tank?",
    options: ["A) 48 hours", "B) 12 hours", "C) 24 hours", "D) 14 hours"],
    answer: "C",
    explanation: "Leak rate = 1/6 − 1/8 = 1/24 per hour, so the leak empties the tank in 24 hours."
  },
  {
    id: 11620, section: "Numerical Ability",
    text: "A rectangular parade ground is 50 m long and 30 m wide. A path 2 m wide runs all around it on the outside. What is the area of the path?",
    options: ["A) 304 m²", "B) 320 m²", "C) 336 m²", "D) 352 m²"],
    answer: "C",
    explanation: "Outer dimensions are 54 m × 34 m = 1,836 m². Path area = 1,836 − 1,500 = 336 m²."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 11621, section: "English",
    passage: "passage_1",
    text: "What is the primary purpose of the passage?",
    options: ["A) To argue that rice cultivation should be banned in estuaries", "B) To explain how fish and prawns are farmed commercially", "C) To praise modern concrete embankments over traditional bunds", "D) To describe the khazan system and examine the causes and stakes of its decline"],
    answer: "D",
    explanation: "Paragraph 1 describes how khazans work. Paragraph 2 explains their decline and the debate over preserving them."
  },
  {
    id: 11622, section: "English",
    passage: "passage_1",
    text: "According to the passage, what do the sluice gates do at high tide?",
    options: ["A) They close to hold back the saline water", "B) They are removed for repair", "C) They open to let fish enter the fields", "D) They open to let fresh water drain out"],
    answer: "A",
    explanation: "'At high tide they shut, holding back the salt.'"
  },
  {
    id: 11623, section: "English",
    passage: "passage_1",
    text: "The phrase 'an engineering of cooperation' suggests that the khazan system",
    options: ["A) required cooperation between government departments", "B) was built quickly with modern machinery", "C) was designed by professional engineers from outside", "D) depended on collective effort by the whole community"],
    answer: "D",
    explanation: "The author explains that no single family could maintain a bund, so the system relied on shared community labour."
  },
  {
    id: 11624, section: "English",
    passage: "passage_1",
    text: "Which of the following is NOT mentioned in the passage as a cause of the decline of the khazans?",
    options: ["A) An increase in the frequency of cyclones", "B) Breaches in the bunds going unmended", "C) Land changing hands", "D) Young people moving to salaried jobs"],
    answer: "A",
    explanation: "Cyclones are never mentioned. The other three causes are stated in the second paragraph."
  },
  {
    id: 11625, section: "English",
    passage: "passage_1",
    text: "What does the author suggest in the concluding sentence?",
    options: ["A) The khazans will certainly disappear within a few years", "B) The survival of the khazans depends on a deliberate choice by communities and government", "C) Nothing can be done to save the khazans", "D) The khazans can survive only through private investment"],
    answer: "B",
    explanation: "'The question … is less whether the khazans can survive than whether communities and government will decide that they should.'"
  },
  {
    id: 11626, section: "English",
    text: "Choose the word most similar in meaning to VINDICATE.",
    options: ["A) Accuse", "B) Justify", "C) Punish", "D) Ignore"],
    answer: "B",
    explanation: "To vindicate is to clear someone of blame or to show something to be justified."
  },
  {
    id: 11627, section: "English",
    text: "Choose the word most similar in meaning to LETHARGIC.",
    options: ["A) Alert", "B) Energetic", "C) Sluggish", "D) Anxious"],
    answer: "C",
    explanation: "Lethargic means lacking energy, i.e. sluggish."
  },
  {
    id: 11628, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to ABUNDANT.",
    options: ["A) Plentiful", "B) Copious", "C) Ample", "D) Scarce"],
    answer: "D",
    explanation: "Abundant means existing in large quantities. Its opposite is scarce."
  },
  {
    id: 11629, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to HOSTILE.",
    options: ["A) Aggressive", "B) Belligerent", "C) Unfriendly", "D) Friendly"],
    answer: "D",
    explanation: "Hostile means unfriendly or antagonistic. Its opposite is friendly."
  },
  {
    id: 11630, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>I have been (A) / living in Bicholim (B) / since five years (C) / and I like it here. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "'Since' is used with a point of time (since 2021). For a period of time, use 'for': 'for five years'."
  },
  {
    id: 11631, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The news have spread (A) / quickly across (B) / the village after (C) / the arrests. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "'News' is an uncountable noun and takes a singular verb: 'The news has spread'."
  },
  {
    id: 11632, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>She did not know (A) / where was the (B) / police station located (C) / in the town. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "In an indirect question, the subject comes before the verb: 'where the police station was located'."
  },
  {
    id: 11633, section: "English",
    text: "Fill in the blank: If I ______ you, I would report the matter to the police at once.",
    options: ["A) were", "B) was", "C) had been", "D) am"],
    answer: "A",
    explanation: "Hypothetical present conditionals use the subjunctive 'were' with all subjects: 'If I were you'."
  },
  {
    id: 11634, section: "English",
    text: "Fill in the blank: The thief managed to ______ the police for three days before he was caught.",
    options: ["A) delude", "B) allude", "C) elude", "D) illude"],
    answer: "C",
    explanation: "'Elude' means to escape or evade. 'Allude' means to refer indirectly, 'delude' means to deceive, and 'illude' is archaic."
  },
  {
    id: 11635, section: "English",
    text: "Fill in the blank: Despite repeated warnings, he ______ to wear a helmet and was fined yesterday.",
    options: ["A) has refused", "B) refusing", "C) refuses", "D) refused"],
    answer: "D",
    explanation: "The time reference 'was fined yesterday' calls for the simple past: 'refused'."
  },
  {
    id: 11636, section: "English",
    text: "Choose the correct meaning of the idiom: To burn the midnight oil",
    options: ["A) To get very angry", "B) To celebrate a festival", "C) To work or study late into the night", "D) To waste resources"],
    answer: "C",
    explanation: "To burn the midnight oil is to stay up late working or studying."
  },
  {
    id: 11637, section: "English",
    text: "Choose the correct meaning of the idiom: At the eleventh hour",
    options: ["A) At a fixed time", "B) At the last possible moment", "C) After a long delay", "D) Very early in the morning"],
    answer: "B",
    explanation: "'At the eleventh hour' means at the latest possible moment."
  },
  {
    id: 11638, section: "English",
    text: "Choose the one word for: A person who does not believe in the existence of God",
    options: ["A) Theist", "B) Agnostic", "C) Atheist", "D) Pagan"],
    answer: "C",
    explanation: "An atheist denies that God exists. An agnostic holds that God's existence cannot be known, and a theist believes in God."
  },
  {
    id: 11639, section: "English",
    text: "Choose the correct passive form of: The police are investigating the case.",
    options: ["A) The case is being investigated by the police.", "B) The case has been investigated by the police.", "C) The case was being investigated by the police.", "D) The case is investigated by the police."],
    answer: "A",
    explanation: "Present continuous active (are investigating) becomes 'is/are being + V3' in the passive."
  },
  {
    id: 11640, section: "English",
    text: "Choose the correct indirect speech: She said, \"I will finish the report tomorrow.\"",
    options: ["A) She said that she will finish the report tomorrow.", "B) She said that she would finish the report the next day.", "C) She said that I would finish the report the next day.", "D) She told that she would finish the report tomorrow."],
    answer: "B",
    explanation: "'Will' becomes 'would', 'I' becomes 'she', and 'tomorrow' becomes 'the next day'. ('Told' needs an object, so 'She told that' is wrong.)"
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: History of Goa
  // ════════════════════════════════════════════════════════════
  {
    id: 11641, section: "History of Goa",
    text: "In ancient Indian literature and in Ashokan-period references, the Konkan coast including Goa formed part of the region known as",
    options: ["A) Vanga", "B) Aparanta", "C) Avanti", "D) Kalinga"],
    answer: "B",
    explanation: "Aparanta, the 'western end', was the ancient name for the north-west coast including the Konkan and Goa. It is mentioned in the Mauryan context of Ashoka's missionaries."
  },
  {
    id: 11642, section: "History of Goa",
    text: "Which Vijayanagara minister-general is credited with conquering Goa in the late 14th century?",
    options: ["A) Timoja", "B) Mahmud Gawan", "C) Ali Adil Shah", "D) Madhav Mantri"],
    answer: "D",
    explanation: "Madhav Mantri (Madhava), a Vijayanagara general, took Goa in the 1370s. Mahmud Gawan later recaptured it for the Bahmanis."
  },
  {
    id: 11643, section: "History of Goa",
    text: "The Se Cathedral at Old Goa, among the largest churches in Asia, is dedicated to",
    options: ["A) St. Francis of Assisi", "B) St. Francis Xavier", "C) St. Catherine of Alexandria", "D) Our Lady of the Immaculate Conception"],
    answer: "C",
    explanation: "It is dedicated to St. Catherine because Albuquerque captured Goa on her feast day, 25 November 1510."
  },
  {
    id: 11644, section: "History of Goa",
    text: "During the Portuguese religious policy of the 16th century, the deity of Shri Mangueshi was moved from Kushasthali (Cortalim) to",
    options: ["A) Priol in Ponda taluka", "B) Chandor in Salcete taluka", "C) Narve in Bicholim taluka", "D) Mapusa in Bardez taluka"],
    answer: "A",
    explanation: "Many deities were moved from the Old Conquests to the Antruz Mahal (Ponda) region, then outside Portuguese control. Shri Mangueshi was moved to Priol (Mangeshi village)."
  },
  {
    id: 11645, section: "History of Goa",
    text: "Which European power stationed its troops in Goa between 1799 and 1813 during the Napoleonic Wars, to prevent a French takeover?",
    options: ["A) Spain", "B) France", "C) The Netherlands", "D) Britain"],
    answer: "D",
    explanation: "British forces occupied Goa (with Portuguese consent) during the Napoleonic Wars and withdrew in 1813."
  },
  {
    id: 11646, section: "History of Goa",
    text: "Panaji (Nova Goa) was officially declared the capital of Portuguese India, replacing Old Goa, in",
    options: ["A) 1510", "B) 1961", "C) 1843", "D) 1759"],
    answer: "C",
    explanation: "After epidemics made Old Goa uninhabitable, the Viceroy moved to Panaji in 1759. Panaji was formally raised to capital (Nova Goa) in 1843."
  },
  {
    id: 11647, section: "History of Goa",
    text: "'Os Brahamanes' (1866), one of the earliest Indian novels to criticise caste and colonial injustice, was written by",
    options: ["A) Francisco Luis Gomes", "B) Abbe Faria", "C) Luis de Menezes Braganza", "D) Tristao de Braganza Cunha"],
    answer: "A",
    explanation: "Francisco Luis Gomes of Navelim, a physician, economist and member of the Portuguese Parliament, wrote 'Os Brahamanes'."
  },
  {
    id: 11648, section: "History of Goa",
    text: "Luis de Menezes Braganza, a leading opponent of the Portuguese Colonial Act of 1930, is remembered primarily as a",
    options: ["A) Catholic bishop", "B) military commander", "C) physician", "D) journalist and nationalist thinker"],
    answer: "D",
    explanation: "Menezes Braganza co-founded 'O Heraldo' and later founded 'O Debate'. The Institute Menezes Braganza in Panaji is named after him."
  },
  {
    id: 11649, section: "History of Goa",
    text: "Tristao de Braganza Cunha founded the Goa Congress Committee, affiliated to the Indian National Congress, in the year",
    options: ["A) 1938", "B) 1928", "C) 1946", "D) 1919"],
    answer: "B",
    explanation: "T. B. Cunha founded the Goa Congress Committee in 1928. It was affiliated to the INC at the Calcutta session."
  },
  {
    id: 11650, section: "History of Goa",
    text: "Dr. Ram Manohar Lohia came to Goa in 1946 at the invitation of which friend, at whose house in Assolna he stayed?",
    options: ["A) Tristao de Braganza Cunha", "B) Purushottam Kakodkar", "C) Dr. Juliao Menezes", "D) Peter Alvares"],
    answer: "C",
    explanation: "Dr. Juliao Menezes invited Lohia to Assolna. Lohia then launched the civil liberties movement at Margao on 18 June 1946."
  },
  {
    id: 11651, section: "History of Goa",
    text: "'Operation Vijay', the military action that ended Portuguese rule in Goa in December 1961, lasted approximately",
    options: ["A) 36 hours", "B) 12 hours", "C) 7 days", "D) 2 weeks"],
    answer: "A",
    explanation: "Indian forces moved in on 18 December 1961 and the Portuguese surrendered on 19 December, about 36 hours later."
  },
  {
    id: 11652, section: "History of Goa",
    text: "Portugal formally recognised India's sovereignty over Goa, Daman, Diu, Dadra and Nagar Haveli through a treaty signed in",
    options: ["A) 1967", "B) 1987", "C) 1974", "D) 1961"],
    answer: "C",
    explanation: "After Portugal's Carnation Revolution, the two countries signed a treaty on 31 December 1974 restoring diplomatic relations and recognising Indian sovereignty."
  },
  {
    id: 11653, section: "History of Goa",
    text: "The first general election to the Legislative Assembly of the Union Territory of Goa, Daman and Diu was held in",
    options: ["A) 1967", "B) 1963", "C) 1961", "D) 1962"],
    answer: "B",
    explanation: "The first Assembly election was held in December 1963. The MGP won, and Dayanand Bandodkar became Chief Minister."
  },
  {
    id: 11654, section: "History of Goa",
    text: "Which political party, led by Dr. Jack de Sequeira, campaigned AGAINST the merger of Goa with Maharashtra in the 1967 Opinion Poll?",
    options: ["A) Maharashtrawadi Gomantak Party", "B) Indian National Congress", "C) Janata Party", "D) United Goans Party"],
    answer: "D",
    explanation: "The United Goans Party led the anti-merger campaign. Jack de Sequeira is often called the 'Father of the Opinion Poll'."
  },
  {
    id: 11655, section: "History of Goa",
    text: "Under the Goa, Daman and Diu Official Language Act, 1987, Konkani was made the official language in which script?",
    options: ["A) Roman", "B) Persian", "C) Devanagari", "D) Kannada"],
    answer: "C",
    explanation: "The 1987 Act made Konkani in Devanagari script the official language. Marathi was allowed for official purposes too."
  },
  {
    id: 11656, section: "History of Goa",
    text: "Who was the first Governor of Goa after it became a state in 1987?",
    options: ["A) Gopal Singh", "B) Bhanu Prakash Singh", "C) Khurshed Alam Khan", "D) J. F. R. Jacob"],
    answer: "A",
    explanation: "Gopal Singh became Goa's first Governor on 30 May 1987. Khurshed Alam Khan, Bhanu Prakash Singh and Lt. Gen. J. F. R. Jacob held the office later."
  },
  {
    id: 11657, section: "History of Goa",
    text: "Who was the Chief Minister of Goa when it attained statehood on 30 May 1987?",
    options: ["A) Pratapsingh Rane", "B) Luizinho Faleiro", "C) Manohar Parrikar", "D) Churchill Alemao"],
    answer: "A",
    explanation: "Pratapsingh Rane was Chief Minister of the Union Territory and continued as the first Chief Minister of the new state."
  },
  {
    id: 11658, section: "History of Goa",
    text: "Match the forts with the talukas in which they are located:<br>(P) Tiracol Fort (Q) Cabo de Rama Fort (R) Reis Magos Fort (S) Rachol Fort<br>(1) Bardez (2) Salcete (3) Pernem (4) Canacona",
    options: ["A) P-4, Q-3, R-1, S-2", "B) P-3, Q-4, R-1, S-2", "C) P-3, Q-2, R-1, S-4", "D) P-1, Q-4, R-3, S-2"],
    answer: "B",
    explanation: "Tiracol is on Goa's northern tip (Pernem), Cabo de Rama is in Canacona, Reis Magos is at Verem (Bardez), and Rachol is in Salcete."
  },
  {
    id: 11659, section: "History of Goa",
    text: "The Mahadev temple at Tambdi Surla and the Saptakoteshwar temple at Narve are both associated with Shaivism. With which dynasty was Saptakoteshwar especially linked as its family deity (kuladevata)?",
    options: ["A) Bhojas", "B) Adil Shahis", "C) Silaharas", "D) Kadambas of Goa"],
    answer: "D",
    explanation: "Saptakoteshwar was the kuladevata of the Kadambas of Goa, whose coins and inscriptions invoke the deity."
  },
  {
    id: 11660, section: "History of Goa",
    text: "Consider the following statements:<br>I. The Goa Inquisition was finally abolished in 1812.<br>II. The Basilica of Bom Jesus is located in Panaji.<br>III. Goa University was established in 1985.<br>Which of the statements given above is/are correct?",
    options: ["A) I and III only", "B) I, II and III", "C) II and III only", "D) I and II only"],
    answer: "A",
    explanation: "I is correct: the Inquisition was abolished in 1812. II is wrong: the Basilica is in Old Goa. III is correct: Goa University was set up in 1985."
  }
];
