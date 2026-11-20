// gssc_cbt2_groupA_mock4.js – Dr Shetye Academic Programme
// CBT 2 Group A Mock 4 · GSSC Advt. No. 2 of 2026 · CBT-II · Platoon Commander (Male) · Police Constable (Armed Police) · Assistant Superintendent (Male) · Warden (Male) · Matron (Female) · Lascar (Male) · Escort (Female)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 20821–20880
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | History of Goa Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "India's long coastline was once regarded mainly as a frontier of trade and fishing, not of security. The attacks on Mumbai in 2008, in which the attackers arrived by sea, changed that perception sharply. The response since then has been to create layers of protection: the Navy watches the high seas, the Coast Guard patrols the waters closer to shore, and the coastal police of each state are responsible for the shallow waters and the landing points themselves.\n\nTechnology plays a part. Radar stations along the coast and automatic identification systems on vessels help authorities know who is moving at sea. But the sea is vast and small boats are many. The most valuable sensors are often human: fishermen who notice an unfamiliar boat, a vessel without the usual markings, or strangers who come ashore at an odd hour. Coastal security therefore depends on building trust with fishing communities and on making it easy for them to report what they see.\n\nA coastal police station that knows the local fishermen, holds regular meetings with them and acts promptly on their information will usually learn of trouble long before any radar can."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 20821, section: "Reasoning",
    text: "Find the next term in the series: 4, 18, 48, 100, 180, ?",
    options: ["A) 320", "B) 294", "C) 288", "D) 252"],
    answer: "B",
    explanation: "The terms are n³ − n² for n = 2 to 6, so the next is 7³ − 7² = 343 − 49 = 294."
  },
  {
    id: 20822, section: "Reasoning",
    text: "Find the next term in the series: KM5, IP8, GS11, EV14, ?",
    options: ["A) DY17", "B) CY17", "C) CY16", "D) CX17"],
    answer: "B",
    explanation: "The first letters go back by 2 (K, I, G, E, C), the second letters forward by 3 (M, P, S, V, Y), and the numbers rise by 3."
  },
  {
    id: 20823, section: "Reasoning",
    text: "In a certain code, LASCAR is written as MZTBBQ. How will ESCORT be written in that code?",
    options: ["A) FRDNSS", "B) GRDNSS", "C) FRDNSU", "D) FTDNSS"],
    answer: "A",
    explanation: "Letters in odd positions move +1 and letters in even positions move −1. E+1=F, S−1=R, C+1=D, O−1=N, R+1=S, T−1=S."
  },
  {
    id: 20824, section: "Reasoning",
    text: "If 'A # B' means A is the wife of B and 'A &amp; B' means A is the father of B, then in 'M # N &amp; O', how is M related to O?",
    options: ["A) Sister", "B) Daughter", "C) Mother", "D) Aunt"],
    answer: "C",
    explanation: "M is N's wife and N is O's father, so M is O's mother."
  },
  {
    id: 20825, section: "Reasoning",
    text: "Six boxes A, B, C, D, E and F are stacked one above another (position 1 is the bottom). B is at position 4. There are exactly two boxes between B and D. E is immediately above A. F is above C but below A. How many boxes are there between C and E?",
    options: ["A) 3", "B) 4", "C) 1", "D) 2"],
    answer: "A",
    explanation: "B = 4, so D = 1 (D cannot be at 7). A and E must be adjacent with C and F below A, so A = 5, E = 6, C = 2, F = 3. Between C (2) and E (6) lie F, B and A, which is 3 boxes."
  },
  {
    id: 20826, section: "Reasoning",
    text: "One evening, Ramesh and Suresh stand facing each other. Ramesh's shadow falls exactly to his right. Which direction is Suresh facing?",
    options: ["A) East", "B) West", "C) South", "D) North"],
    answer: "C",
    explanation: "In the evening the sun is in the West, so shadows fall East. If East is on Ramesh's right, he faces North, so Suresh, facing him, faces South."
  },
  {
    id: 20827, section: "Reasoning",
    text: "Statements: All lascars are swimmers. Some swimmers are divers. No diver is afraid of water.<br>Conclusions:<br>I. Some swimmers are not afraid of water.<br>II. Some lascars are divers.<br>III. All lascars being divers is a possibility.",
    options: ["A) All I, II and III follow", "B) Only I and III follow", "C) Only I follows", "D) Only I and II follow"],
    answer: "B",
    explanation: "The swimmers who are divers are not afraid of water, so I follows. II is not certain. III is possible, since nothing rules it out."
  },
  {
    id: 20828, section: "Reasoning",
    text: "Question: What is the code for 'safe' in a certain code language?<br>Statement I: 'safe and sound' is written as 'ta na ka'.<br>Statement II: 'sound sleep' is written as 'ka ri'.",
    options: ["A) Even both statements together are not sufficient", "B) Statement II alone is sufficient", "C) Both statements together are sufficient", "D) Statement I alone is sufficient"],
    answer: "A",
    explanation: "Together they show 'sound' = ka. But 'safe' and 'and' share 'ta' and 'na', which cannot be told apart."
  },
  {
    id: 20829, section: "Reasoning",
    text: "A clock shows 4:30. If the minute hand points towards North-East, in which direction does the hour hand point?",
    options: ["A) South", "B) East", "C) North-West", "D) North"],
    answer: "D",
    explanation: "At 4:30 the minute hand is 180° from the 12-mark and the hour hand 135°, so the hour hand is 45° anticlockwise of the minute hand. 45° anticlockwise from North-East is North."
  },
  {
    id: 20830, section: "Reasoning",
    text: "ACE : BDF :: PRT : ?",
    options: ["A) QSU", "B) QRS", "C) PQR", "D) RTV"],
    answer: "A",
    explanation: "Each letter moves forward by one: P→Q, R→S, T→U."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 20831, section: "Numerical Ability",
    text: "In an election between two candidates, a candidate who got 40% of the votes lost by 1,200 votes. How many votes were polled?",
    options: ["A) 6,000", "B) 5,000", "C) 4,800", "D) 3,000"],
    answer: "A",
    explanation: "The winner got 60%, so the margin is 20% = 1,200, giving 6,000 votes."
  },
  {
    id: 20832, section: "Numerical Ability",
    text: "By selling 33 metres of cloth, a merchant gains the selling price of 11 metres. What is his gain percentage?",
    options: ["A) 25%", "B) 50%", "C) 66⅔%", "D) 33⅓%"],
    answer: "B",
    explanation: "SP(33) − CP(33) = SP(11), so CP(33) = SP(22). Gain = 11/22 = 50%."
  },
  {
    id: 20833, section: "Numerical Ability",
    text: "A boat takes 3 hours more to go 36 km upstream than to come back downstream. If the stream flows at 3 km/h, what is the speed of the boat in still water?",
    options: ["A) 9 km/h", "B) 15 km/h", "C) 12 km/h", "D) 6 km/h"],
    answer: "A",
    explanation: "36/(b − 3) − 36/(b + 3) = 3 gives b² − 9 = 72, so b = 9. (Check: 36/6 − 36/12 = 3.)"
  },
  {
    id: 20834, section: "Numerical Ability",
    text: "A can do a work in 10 days and B in 15 days. They work on alternate days, A starting first. In how many days will the work be finished?",
    options: ["A) 6 days", "B) 13 days", "C) 11 days", "D) 12 days"],
    answer: "D",
    explanation: "Each 2-day cycle does 1/10 + 1/15 = 1/6. Six cycles (12 days) complete the work."
  },
  {
    id: 20835, section: "Numerical Ability",
    text: "The simple interest on a sum for 2 years is ₹800 and the compound interest for the same period at the same rate is ₹840. What is the rate of interest?",
    options: ["A) 5%", "B) 8%", "C) 10%", "D) 12%"],
    answer: "C",
    explanation: "One year's SI = 400. The extra 40 is interest on 400 for 1 year, so the rate = 40/400 = 10%."
  },
  {
    id: 20836, section: "Numerical Ability",
    text: "Three numbers are in the ratio 2 : 3 : 5 and the sum of their squares is 1,368. What is the largest number?",
    options: ["A) 35", "B) 20", "C) 25", "D) 30"],
    answer: "D",
    explanation: "4x² + 9x² + 25x² = 38x² = 1368, so x = 6 and the largest is 30."
  },
  {
    id: 20837, section: "Numerical Ability",
    text: "The average weight of A, B and C is 45 kg. The average of A and B is 40 kg and that of B and C is 43 kg. What is B's weight?",
    options: ["A) 28 kg", "B) 41 kg", "C) 31 kg", "D) 35 kg"],
    answer: "C",
    explanation: "A + B + C = 135, A + B = 80, B + C = 86. B = 80 + 86 − 135 = 31 kg."
  },
  {
    id: 20838, section: "Numerical Ability",
    text: "If 20% of a number is 12 less than 30% of it, what is the number?",
    options: ["A) 100", "B) 150", "C) 60", "D) 120"],
    answer: "D",
    explanation: "10% of the number = 12, so the number = 120."
  },
  {
    id: 20839, section: "Numerical Ability",
    text: "A rectangular field is 40 m long and 30 m wide. What is the length of a path running diagonally across it?",
    options: ["A) 70 m", "B) 50 m", "C) 60 m", "D) 45 m"],
    answer: "B",
    explanation: "Diagonal = √(40² + 30²) = 50 m."
  },
  {
    id: 20840, section: "Numerical Ability",
    text: "A card is drawn at random from a well-shuffled pack of 52 cards. What is the probability that it is a king or a heart?",
    options: ["A) 4/13", "B) 1/4", "C) 1/13", "D) 17/52"],
    answer: "A",
    explanation: "There are 4 kings and 13 hearts, with the king of hearts counted twice: 4 + 13 − 1 = 16. 16/52 = 4/13."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 20841, section: "English",
    passage: "passage_1",
    text: "Which of the following best expresses the main idea of the passage?",
    options: ["A) Fishermen should be stopped from going to sea", "B) Coastal security relies on layered agencies and, above all, on cooperation with fishing communities", "C) The Navy alone is responsible for coastal security", "D) Radar alone can secure the coastline"],
    answer: "B",
    explanation: "The passage describes the layers of protection and stresses that the most valuable sensors are human."
  },
  {
    id: 20842, section: "English",
    passage: "passage_1",
    text: "According to the passage, what changed the perception of India's coastline?",
    options: ["A) The growth of tourism", "B) The 2008 Mumbai attacks, in which attackers arrived by sea", "C) A dispute with a neighbouring country", "D) A cyclone that hit the coast"],
    answer: "B",
    explanation: "Stated in the first paragraph."
  },
  {
    id: 20843, section: "English",
    passage: "passage_1",
    text: "According to the passage, the coastal police are responsible for",
    options: ["A) the waters patrolled by the Coast Guard", "B) foreign ports", "C) the shallow waters and the landing points", "D) the high seas"],
    answer: "C",
    explanation: "Stated at the end of the first paragraph."
  },
  {
    id: 20844, section: "English",
    passage: "passage_1",
    text: "The statement 'The most valuable sensors are often human' means that",
    options: ["A) the observations of local people are a key source of information", "B) technology is useless at sea", "C) fishermen should be trained as radar operators", "D) radar is operated only by humans"],
    answer: "A",
    explanation: "Fishermen noticing unusual boats or people are the 'sensors'."
  },
  {
    id: 20845, section: "English",
    passage: "passage_1",
    text: "Which of the following can be inferred from the passage?",
    options: ["A) Coastal police stations need no contact with villagers", "B) Small boats are easy to track by radar", "C) Technology alone cannot guarantee coastal security", "D) Fishermen are a security threat"],
    answer: "C",
    explanation: "The sea is vast, small boats are many, and human information often comes first."
  },
  {
    id: 20846, section: "English",
    text: "Choose the word most similar in meaning to PERILOUS.",
    options: ["A) Calm", "B) Easy", "C) Safe", "D) Dangerous"],
    answer: "D",
    explanation: "Perilous means full of danger."
  },
  {
    id: 20847, section: "English",
    text: "Choose the word most similar in meaning to VIGOUR.",
    options: ["A) Fear", "B) Energy", "C) Laziness", "D) Weakness"],
    answer: "B",
    explanation: "Vigour is physical or mental strength; energy."
  },
  {
    id: 20848, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to AMPLE.",
    options: ["A) Enough", "B) Abundant", "C) Insufficient", "D) Plenty"],
    answer: "C",
    explanation: "Ample means more than enough; its opposite is insufficient."
  },
  {
    id: 20849, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to FEEBLE.",
    options: ["A) Strong", "B) Faint", "C) Weak", "D) Frail"],
    answer: "A",
    explanation: "Feeble means weak; its opposite is strong."
  },
  {
    id: 20850, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>He swam (A) / more faster (B) / than (C) / the others. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "Double comparative: use 'faster', not 'more faster'."
  },
  {
    id: 20851, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Neither the Coast Guard (A) / nor the police (B) / was informed (C) / about the boat. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "With 'neither … nor', the verb agrees with the nearer subject, 'the police' (always plural): 'were informed'."
  },
  {
    id: 20852, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The fishermen (A) / have been warned (B) / not to venture (C) / in the sea today. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "D",
    explanation: "Movement takes 'into': 'not to venture into the sea'."
  },
  {
    id: 20853, section: "English",
    text: "Fill in the blank: The boat capsized ______ the coast of Canacona.",
    options: ["A) off", "B) at", "C) from", "D) of"],
    answer: "A",
    explanation: "'Off the coast' means at sea, near the shore."
  },
  {
    id: 20854, section: "English",
    text: "Fill in the blank: The lascar was commended ______ his bravery.",
    options: ["A) with", "B) for", "C) of", "D) on"],
    answer: "B",
    explanation: "One is commended FOR an action or quality."
  },
  {
    id: 20855, section: "English",
    text: "Fill in the blank: If the patrol ______ earlier, the smugglers would have been caught.",
    options: ["A) had arrived", "B) would arrive", "C) has arrived", "D) arrived"],
    answer: "A",
    explanation: "Third conditional: 'If + had + V3, would have + V3'."
  },
  {
    id: 20856, section: "English",
    text: "Choose the correct meaning of the idiom: To be all at sea",
    options: ["A) To be on a voyage", "B) To be in the Navy", "C) To be completely confused", "D) To be very happy"],
    answer: "C",
    explanation: "To be all at sea is to be confused and uncertain."
  },
  {
    id: 20857, section: "English",
    text: "Choose the correct meaning of the idiom: To sail close to the wind",
    options: ["A) To take risks, nearly breaking rules", "B) To sail very fast", "C) To change one's opinion", "D) To be very cautious"],
    answer: "A",
    explanation: "To sail close to the wind is to behave in a risky way, almost breaking the rules."
  },
  {
    id: 20858, section: "English",
    text: "Choose the one word for: A person who runs away from justice or the law",
    options: ["A) Pilgrim", "B) Refugee", "C) Emigrant", "D) Fugitive"],
    answer: "D",
    explanation: "A fugitive flees from justice. A refugee flees from persecution or war."
  },
  {
    id: 20859, section: "English",
    text: "Choose the correct passive form of: The Coast Guard had rescued the fishermen.",
    options: ["A) The fishermen had been rescued by the Coast Guard.", "B) The fishermen have been rescued by the Coast Guard.", "C) The fishermen were rescued by the Coast Guard.", "D) The fishermen had rescued by the Coast Guard."],
    answer: "A",
    explanation: "Past perfect active becomes 'had been + V3'."
  },
  {
    id: 20860, section: "English",
    text: "Choose the correct indirect speech: He said, \"We must report the boat at once.\"",
    options: ["A) He told that they had to report the boat at once.", "B) He said that we must report the boat at once.", "C) He said that they must have reported the boat.", "D) He said that they had to report the boat at once."],
    answer: "D",
    explanation: "'Must' (obligation) usually becomes 'had to', and 'we' becomes 'they'."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: History of Goa
  // ════════════════════════════════════════════════════════════
  {
    id: 20861, section: "History of Goa",
    text: "Cabo de Rama fort in Canacona is traditionally linked by legend with",
    options: ["A) St. Francis Xavier", "B) Chhatrapati Shivaji", "C) the Kadamba king Jayakeshi", "D) Lord Rama, who is said to have stayed there during his exile"],
    answer: "D",
    explanation: "The headland and fort take their name from the legend that Rama stayed there during his exile."
  },
  {
    id: 20862, section: "History of Goa",
    text: "The name 'Reis Magos' (of the fort and church in Bardez) refers to",
    options: ["A) the royal navy", "B) the King of Portugal", "C) the Three Kings (the Magi)", "D) the three rivers"],
    answer: "C",
    explanation: "Reis Magos is Portuguese for the 'Three Wise Kings', the Magi of the Nativity story."
  },
  {
    id: 20863, section: "History of Goa",
    text: "The Basilica of Bom Jesus at Old Goa is regarded as a fine example of which architectural style?",
    options: ["A) Indo-Saracenic", "B) Gothic", "C) Dravidian", "D) Baroque"],
    answer: "D",
    explanation: "The Basilica, completed in 1605, is one of the best examples of Baroque architecture in India."
  },
  {
    id: 20864, section: "History of Goa",
    text: "The Chapel of St. Catherine at Old Goa was originally built on the orders of Afonso de Albuquerque to commemorate",
    options: ["A) his entry into Goa on St. Catherine's Day, 1510", "B) the death of King Manuel I", "C) the arrival of St. Francis Xavier", "D) the end of the Inquisition"],
    answer: "A",
    explanation: "Albuquerque retook Goa on St. Catherine's feast day (25 November 1510) and had a chapel built on the spot."
  },
  {
    id: 20865, section: "History of Goa",
    text: "Which of the following were the main causes of the decline of Old Goa as a city?",
    options: ["A) The shift of trade to Diu", "B) A Maratha conquest of the city", "C) An earthquake and a tsunami", "D) Repeated epidemics and the silting of the Mandovi"],
    answer: "D",
    explanation: "Cholera and malaria epidemics, together with the silting of the river, led the administration to move towards Panaji."
  },
  {
    id: 20866, section: "History of Goa",
    text: "In which year did the Portuguese Viceroy move his residence from Old Goa to Panaji?",
    options: ["A) 1612", "B) 1510", "C) 1843", "D) 1759"],
    answer: "D",
    explanation: "The Viceroy moved to the Idalcao Palace in Panaji in 1759. Panaji was formally declared the capital (Nova Goa) in 1843."
  },
  {
    id: 20867, section: "History of Goa",
    text: "Portuguese rule over Goa lasted for approximately",
    options: ["A) 350 years", "B) 451 years", "C) 200 years", "D) 500 years"],
    answer: "B",
    explanation: "From 1510 to 1961 is about 451 years."
  },
  {
    id: 20868, section: "History of Goa",
    text: "Goa was liberated how many years after India attained independence?",
    options: ["A) 14 years", "B) 16 years", "C) 10 years", "D) 12 years"],
    answer: "A",
    explanation: "India became independent in 1947 and Goa was liberated in 1961, 14 years later."
  },
  {
    id: 20869, section: "History of Goa",
    text: "After liberation, which law provided for the administration of Goa, Daman and Diu as a Union Territory with a legislature?",
    options: ["A) Goa, Daman and Diu Reorganisation Act, 1987", "B) Indian Independence Act, 1947", "C) Government of Union Territories Act, 1963", "D) States Reorganisation Act, 1956"],
    answer: "C",
    explanation: "The Government of Union Territories Act, 1963 created the UT's Legislative Assembly. Its first election was held in December 1963."
  },
  {
    id: 20870, section: "History of Goa",
    text: "Statehood for Goa in 1987, with Daman and Diu remaining a Union Territory, was granted under the",
    options: ["A) Government of Union Territories Act, 1963", "B) Goa, Daman and Diu Reorganisation Act, 1987", "C) Goa Official Language Act, 1987", "D) States Reorganisation Act, 1956"],
    answer: "B",
    explanation: "The Reorganisation Act, 1987 created the State of Goa and the separate UT of Daman and Diu."
  },
  {
    id: 20871, section: "History of Goa",
    text: "The mass satyagraha of 15 August 1955, in which volunteers from all over India marched into Goa, was organised under the banner of the",
    options: ["A) United Goans Party", "B) Azad Gomantak Dal", "C) Goa Vimochan Sahayak Samiti", "D) Goa Congress Committee"],
    answer: "C",
    explanation: "The Goa Vimochan Sahayak Samiti coordinated the 1955 satyagraha. The Azad Gomantak Dal followed armed methods."
  },
  {
    id: 20872, section: "History of Goa",
    text: "The ancient rock-cut caves at Rivona in Sanguem taluka are believed to have been associated with",
    options: ["A) the Adil Shahi army", "B) Buddhist monks", "C) Maratha soldiers", "D) Portuguese missionaries"],
    answer: "B",
    explanation: "The Rivona caves (also called Pandava caves) are thought to be early Buddhist monastic caves."
  },
  {
    id: 20873, section: "History of Goa",
    text: "The rock-cut caves at Lamgao, near Bicholim, are believed to be",
    options: ["A) Portuguese gunpowder stores", "B) colonial mining tunnels", "C) Maratha prisons", "D) early Buddhist caves"],
    answer: "D",
    explanation: "The Lamgao caves near Bicholim are among Goa's early rock-cut caves, generally linked with Buddhist monks."
  },
  {
    id: 20874, section: "History of Goa",
    text: "The Shri Ramnath temple at Ramnathi and the Shri Mahalakshmi temple at Bandora are both located in which taluka?",
    options: ["A) Salcete", "B) Pernem", "C) Bicholim", "D) Ponda"],
    answer: "D",
    explanation: "Ponda taluka (Antruz Mahal) has many of Goa's major temples, including Ramnath, Mahalakshmi, Nagesh, Mangueshi and Shantadurga."
  },
  {
    id: 20875, section: "History of Goa",
    text: "'O Heraldo', which became one of the earliest daily newspapers in Goa, was founded in",
    options: ["A) 1821", "B) 1961", "C) 1900", "D) 1843"],
    answer: "C",
    explanation: "O Heraldo was founded in 1900. It was originally in Portuguese and later moved to English."
  },
  {
    id: 20876, section: "History of Goa",
    text: "Goa's Statehood Day is observed every year on",
    options: ["A) 19 December", "B) 30 May", "C) 18 June", "D) 16 January"],
    answer: "B",
    explanation: "30 May (1987) is Statehood Day, 19 December Liberation Day, 18 June Revolution Day, and 16 January Opinion Poll Day (Asmitai Dis)."
  },
  {
    id: 20877, section: "History of Goa",
    text: "Which of the following talukas was NOT part of the Portuguese 'Velhas Conquistas' (Old Conquests)?",
    options: ["A) Salcete", "B) Ponda", "C) Bardez", "D) Tiswadi"],
    answer: "B",
    explanation: "The Old Conquests were Tiswadi, Bardez, Salcete and Mormugao. Ponda was added in the 18th century as part of the New Conquests."
  },
  {
    id: 20878, section: "History of Goa",
    text: "Arrange the following events in chronological order:<br>1. Construction of the Chapel of St. Catherine<br>2. Viceroy moves his residence to Panaji<br>3. Founding of 'O Heraldo'<br>4. The 1955 mass satyagraha",
    options: ["A) 1 → 2 → 4 → 3", "B) 1 → 3 → 2 → 4", "C) 1 → 2 → 3 → 4", "D) 2 → 1 → 3 → 4"],
    answer: "C",
    explanation: "Chapel of St. Catherine (1510), Viceroy to Panaji (1759), O Heraldo (1900), satyagraha (1955)."
  },
  {
    id: 20879, section: "History of Goa",
    text: "Consider the following statements:<br>I. Opinion Poll Day (16 January) is observed in Goa as 'Asmitai Dis'.<br>II. Goa's Liberation Day is 19 December.<br>III. Goa became a state in 1961.<br>Which of the statements given above is/are correct?",
    options: ["A) I and III only", "B) I, II and III", "C) I and II only", "D) II and III only"],
    answer: "C",
    explanation: "I and II are correct. III is wrong: Goa was liberated in 1961 and became a state in 1987."
  },
  {
    id: 20880, section: "History of Goa",
    text: "The Archbishop of Goa and Daman also holds the honorary title of",
    options: ["A) Primate of Portugal", "B) Bishop of Lisbon", "C) Cardinal of Asia", "D) Patriarch of the East Indies"],
    answer: "D",
    explanation: "Since 1886 the Archbishop of Goa and Daman has held the title of Patriarch of the East Indies."
  }
];
