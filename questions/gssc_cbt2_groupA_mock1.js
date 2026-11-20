// gssc_cbt2_groupA_mock1.js – Dr Shetye Academic Programme
// CBT 2 Group A Mock 1 · GSSC Advt. No. 2 of 2026 · CBT-II · Platoon Commander (Male) · Police Constable (Armed Police) · Assistant Superintendent (Male) · Warden (Male) · Matron (Female) · Lascar (Male) · Escort (Female)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 20001–20060
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | History of Goa Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "For most of history, prisons existed to hold people until their punishment was decided, not to serve as the punishment itself. The modern prison, which confines offenders for fixed terms, emerged only in the last two or three centuries, and with it came a question that remains unsettled: should confinement merely punish, or should it also prepare the prisoner to return to society? Those who favour reform point out that almost every prisoner will one day be released. A person who leaves prison without skills, without family ties and without hope is more likely to reoffend, and society then pays twice — once for the crime and again for its repetition.\n\nCritics of this view are not necessarily vindictive. They worry that an emphasis on rehabilitation can seem to excuse wrongdoing, and that victims may feel their suffering is being forgotten. These concerns deserve a serious answer. Rehabilitation, properly understood, does not replace accountability; it gives it a purpose. Vocational training, education and counselling inside prison walls are not favours granted to offenders but investments in public safety. The officer who supervises a prisoner's daily routine, who notices despair before it turns to violence and who treats inmates firmly but fairly, is therefore doing more than guarding a door. He or she is shaping, in small daily acts, the kind of citizen who will walk out of the gate."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 20001, section: "Reasoning",
    text: "Find the next term in the series: 5, 11, 23, 47, 95, ?",
    options: ["A) 193", "B) 185", "C) 191", "D) 189"],
    answer: "C",
    explanation: "Each term is (previous × 2) + 1: 95 × 2 + 1 = 191."
  },
  {
    id: 20002, section: "Reasoning",
    text: "Find the next group of letters: BDF, GIK, LNP, ?",
    options: ["A) QSU", "B) PRT", "C) RTV", "D) QRT"],
    answer: "A",
    explanation: "Each group is three alternate letters, and each group starts 5 letters after the previous one: B→G→L→Q. So the answer is Q, S, U."
  },
  {
    id: 20003, section: "Reasoning",
    text: "If CAT = 24 and DOG = 26 (sum of the alphabetical positions of the letters), what is COW?",
    options: ["A) 45", "B) 39", "C) 43", "D) 41"],
    answer: "D",
    explanation: "C(3) + O(15) + W(23) = 41."
  },
  {
    id: 20004, section: "Reasoning",
    text: "P is the son of Q. Q is the daughter of R. S is the husband of R. T is the brother of S. How is T related to P?",
    options: ["A) Uncle", "B) Cousin", "C) Grandfather", "D) Grandfather's brother (grand-uncle)"],
    answer: "D",
    explanation: "Q is P's mother, and S (R's husband) is Q's father, i.e. P's maternal grandfather. T is S's brother, so T is P's grandfather's brother."
  },
  {
    id: 20005, section: "Reasoning",
    text: "Rohan walks 5 km East, turns left and walks 3 km, turns left and walks 9 km, then turns left again and walks 3 km. How far and in which direction is he from his starting point?",
    options: ["A) 4 km East", "B) 14 km West", "C) 4 km West", "D) 3 km North"],
    answer: "C",
    explanation: "Positions: (5,0) → (5,3) → (−4,3) → (−4,0). He is 4 km West of the start."
  },
  {
    id: 20006, section: "Reasoning",
    text: "In a batch of trainees, Anil ranks 9th from the top and 32nd from the bottom. How many trainees are there in the batch?",
    options: ["A) 39", "B) 41", "C) 42", "D) 40"],
    answer: "D",
    explanation: "Total = 9 + 32 − 1 = 40."
  },
  {
    id: 20007, section: "Reasoning",
    text: "Statements: All guards are trained. No trained person is careless. Some guards are drivers.<br>Conclusions:<br>I. No guard is careless.<br>II. Some drivers are not careless.<br>III. Some trained persons are drivers.",
    options: ["A) All of I, II and III follow", "B) Only II follows", "C) Only I and III follow", "D) Only I and II follow"],
    answer: "A",
    explanation: "Guards are within 'trained', which excludes 'careless', so I follows. The drivers who are guards are not careless, so II follows. Those same drivers are trained, so III follows."
  },
  {
    id: 20008, section: "Reasoning",
    text: "What is the angle between the hour hand and the minute hand of a clock at 8:30?",
    options: ["A) 90°", "B) 75°", "C) 60°", "D) 80°"],
    answer: "B",
    explanation: "Angle = |30H − 5.5M| = |240 − 165| = 75°."
  },
  {
    id: 20009, section: "Reasoning",
    text: "Find the odd one out: Cruiser, Frigate, Destroyer, Bomber",
    options: ["A) Cruiser", "B) Frigate", "C) Destroyer", "D) Bomber"],
    answer: "D",
    explanation: "Cruiser, frigate and destroyer are warships. A bomber is an aircraft."
  },
  {
    id: 20010, section: "Reasoning",
    text: "Statement: Several cases of chain-snatching have been reported near a town market during the evening hours.<br>Courses of action:<br>I. Police should increase patrolling in the area during the evening.<br>II. The market should be closed down permanently.",
    options: ["A) Only I follows", "B) Only II follows", "C) Neither I nor II follows", "D) Both I and II follow"],
    answer: "A",
    explanation: "Extra patrolling is a practical, proportionate step. Closing the market permanently is extreme and harms law-abiding people."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 20011, section: "Numerical Ability",
    text: "A's income is 20% more than B's. By what percentage is B's income less than A's?",
    options: ["A) 18%", "B) 20%", "C) 16⅔%", "D) 15%"],
    answer: "C",
    explanation: "Required % = 20/120 × 100 = 16⅔%."
  },
  {
    id: 20012, section: "Numerical Ability",
    text: "A dealer buys 20 pens for ₹100 and sells 15 pens for ₹90. What is his profit percentage?",
    options: ["A) 10%", "B) 15%", "C) 20%", "D) 25%"],
    answer: "C",
    explanation: "CP per pen = ₹5, SP per pen = ₹6. Profit = 1/5 = 20%."
  },
  {
    id: 20013, section: "Numerical Ability",
    text: "A man walks to a place at 4 km/h and returns at 6 km/h, taking 5 hours in all. What is the distance to the place?",
    options: ["A) 12 km", "B) 10 km", "C) 15 km", "D) 24 km"],
    answer: "A",
    explanation: "d/4 + d/6 = 5 gives 5d/12 = 5, so d = 12 km."
  },
  {
    id: 20014, section: "Numerical Ability",
    text: "A and B can finish a job in 10 days, B and C in 15 days, and A and C in 12 days. In how many days can A, B and C together finish it?",
    options: ["A) 10 days", "B) 7.5 days", "C) 9 days", "D) 8 days"],
    answer: "D",
    explanation: "2(A+B+C) = 1/10 + 1/15 + 1/12 = 15/60 = 1/4, so A+B+C = 1/8 and they take 8 days."
  },
  {
    id: 20015, section: "Numerical Ability",
    text: "At what rate of simple interest will ₹5,000 amount to ₹6,500 in 5 years?",
    options: ["A) 7.5%", "B) 5%", "C) 6%", "D) 6.5%"],
    answer: "C",
    explanation: "SI = 1,500. Rate = 1500 × 100/(5000 × 5) = 6%."
  },
  {
    id: 20016, section: "Numerical Ability",
    text: "₹7,800 is divided among A, B and C in the ratio 1/2 : 1/3 : 1/4. What is B's share?",
    options: ["A) ₹2,400", "B) ₹2,600", "C) ₹1,800", "D) ₹3,600"],
    answer: "A",
    explanation: "Multiplying by 12 gives 6 : 4 : 3. B = 7800 × 4/13 = ₹2,400."
  },
  {
    id: 20017, section: "Numerical Ability",
    text: "The average of five consecutive odd numbers is 41. What is the largest of these numbers?",
    options: ["A) 45", "B) 43", "C) 49", "D) 47"],
    answer: "A",
    explanation: "The middle number is 41, so the numbers are 37, 39, 41, 43, 45."
  },
  {
    id: 20018, section: "Numerical Ability",
    text: "What is the largest four-digit number exactly divisible by 88?",
    options: ["A) 9988", "B) 9944", "C) 9856", "D) 9966"],
    answer: "B",
    explanation: "9999 = 88 × 113 + 55. Largest multiple = 9999 − 55 = 9944."
  },
  {
    id: 20019, section: "Numerical Ability",
    text: "A wire bent into a square of side 33 cm is re-bent into a circle. What is the area of the circle? (Take π = 22/7)",
    options: ["A) 1320 cm²", "B) 1386 cm²", "C) 1089 cm²", "D) 1452 cm²"],
    answer: "B",
    explanation: "Length = 4 × 33 = 132 cm = 2πr, so r = 21 cm. Area = 22/7 × 21 × 21 = 1386 cm²."
  },
  {
    id: 20020, section: "Numerical Ability",
    text: "Two successive discounts of 20% and 10% are equivalent to a single discount of",
    options: ["A) 28%", "B) 32%", "C) 25%", "D) 30%"],
    answer: "A",
    explanation: "Net price = 0.8 × 0.9 = 0.72, so the single discount is 28%."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 20021, section: "English",
    passage: "passage_1",
    text: "Which of the following best expresses the central idea of the passage?",
    options: ["A) Prisons should be abolished because they fail to reform offenders", "B) Victims' feelings are more important than the reform of prisoners", "C) Prison officers should avoid interacting with inmates", "D) Rehabilitation in prisons serves public safety without abandoning accountability"],
    answer: "D",
    explanation: "The author argues that rehabilitation gives accountability a purpose and calls it an investment in public safety."
  },
  {
    id: 20022, section: "English",
    passage: "passage_1",
    text: "According to the passage, for most of history prisons were mainly used to",
    options: ["A) punish offenders for fixed terms", "B) separate men and women offenders", "C) train offenders in useful skills", "D) hold people until their punishment was decided"],
    answer: "D",
    explanation: "The first sentence says they held people until punishment was decided, not as the punishment itself."
  },
  {
    id: 20023, section: "English",
    passage: "passage_1",
    text: "What does the author mean by saying that society 'pays twice'?",
    options: ["A) Taxpayers fund two separate prison systems", "B) Society bears the cost of both the original crime and its repetition", "C) Victims are compensated twice for the same crime", "D) Prisoners are punished twice for one offence"],
    answer: "B",
    explanation: "Explained in the passage: 'once for the crime and again for its repetition'."
  },
  {
    id: 20024, section: "English",
    passage: "passage_1",
    text: "How does the author treat the critics of rehabilitation?",
    options: ["A) The author accepts that their concerns are genuine and then answers them", "B) The author dismisses them as cruel and vindictive", "C) The author fully agrees with them", "D) The author ignores their arguments"],
    answer: "A",
    explanation: "'Critics … are not necessarily vindictive … These concerns deserve a serious answer.'"
  },
  {
    id: 20025, section: "English",
    passage: "passage_1",
    text: "The word 'vindictive', as used in the passage, most nearly means",
    options: ["A) indifferent", "B) revengeful", "C) forgiving", "D) careless"],
    answer: "B",
    explanation: "Vindictive means having a strong desire for revenge."
  },
  {
    id: 20026, section: "English",
    text: "Choose the word most similar in meaning to DILIGENT.",
    options: ["A) Clever", "B) Careless", "C) Hard-working", "D) Lazy"],
    answer: "C",
    explanation: "Diligent means showing care and steady effort in one's work."
  },
  {
    id: 20027, section: "English",
    text: "Choose the word most similar in meaning to AMBIGUOUS.",
    options: ["A) Unclear", "B) Obvious", "C) Accurate", "D) Definite"],
    answer: "A",
    explanation: "Ambiguous means open to more than one interpretation, i.e. unclear."
  },
  {
    id: 20028, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to LENIENT.",
    options: ["A) Mild", "B) Tolerant", "C) Gentle", "D) Strict"],
    answer: "D",
    explanation: "Lenient means merciful or not strict. Its opposite is strict."
  },
  {
    id: 20029, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to TRANSPARENT.",
    options: ["A) Clear", "B) Opaque", "C) Lucid", "D) Obvious"],
    answer: "B",
    explanation: "Transparent means see-through. Its opposite is opaque."
  },
  {
    id: 20030, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The number of applicants have (A) / increased sharply (B) / for the post (C) / this year. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "'The number of' takes a singular verb: 'The number of applicants has increased'."
  },
  {
    id: 20031, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Scarcely had he left (A) / the house than (B) / it began (C) / to rain heavily. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "'Scarcely' is paired with 'when', not 'than': 'Scarcely had he left the house when …'."
  },
  {
    id: 20032, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The prisoner, along with (A) / his two accomplices, (B) / were produced (C) / before the magistrate. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "With 'along with', the verb agrees with the first subject, 'the prisoner' (singular): 'was produced'."
  },
  {
    id: 20033, section: "English",
    text: "Fill in the blank: The warden was entrusted ______ the keys of the jail.",
    options: ["A) by", "B) with", "C) to", "D) for"],
    answer: "B",
    explanation: "A person is entrusted WITH a thing; a thing is entrusted TO a person."
  },
  {
    id: 20034, section: "English",
    text: "Fill in the blank: She has been working in this department ______ 2019.",
    options: ["A) from", "B) by", "C) since", "D) for"],
    answer: "C",
    explanation: "'Since' marks a point of time with the present perfect continuous."
  },
  {
    id: 20035, section: "English",
    text: "Fill in the blank: Neither the guards nor the warden ______ aware of the escape plan.",
    options: ["A) were", "B) was", "C) have been", "D) are"],
    answer: "B",
    explanation: "With 'neither … nor', the verb agrees with the nearer subject, 'the warden' (singular, past context): 'was'."
  },
  {
    id: 20036, section: "English",
    text: "Choose the correct meaning of the idiom: To be in hot water",
    options: ["A) To be very angry", "B) To be in trouble", "C) To be very busy", "D) To take a bath"],
    answer: "B",
    explanation: "To be in hot water means to be in trouble or difficulty."
  },
  {
    id: 20037, section: "English",
    text: "Choose the correct meaning of the idiom: To let the cat out of the bag",
    options: ["A) To create confusion", "B) To escape punishment", "C) To reveal a secret", "D) To set someone free"],
    answer: "C",
    explanation: "To let the cat out of the bag is to disclose a secret, often accidentally."
  },
  {
    id: 20038, section: "English",
    text: "Choose the one word for: A person held captive by another as a security for the fulfilment of certain demands",
    options: ["A) Refugee", "B) Convict", "C) Hostage", "D) Fugitive"],
    answer: "C",
    explanation: "A hostage is held as security. A fugitive is one who has escaped and a convict is one found guilty."
  },
  {
    id: 20039, section: "English",
    text: "Choose the correct passive form of: Somebody has stolen my bicycle.",
    options: ["A) My bicycle is stolen.", "B) My bicycle was stolen by somebody.", "C) My bicycle had been stolen.", "D) My bicycle has been stolen."],
    answer: "D",
    explanation: "Present perfect active becomes 'has been + V3'. An indefinite agent ('somebody') is usually dropped."
  },
  {
    id: 20040, section: "English",
    text: "Choose the correct indirect speech: The teacher said, \"The earth revolves around the sun.\"",
    options: ["A) The teacher told that the earth revolves around the sun.", "B) The teacher said that the earth had revolved around the sun.", "C) The teacher said that the earth revolves around the sun.", "D) The teacher said that the earth revolved around the sun."],
    answer: "C",
    explanation: "A universal truth keeps its present tense in indirect speech. ('Told' needs an object.)"
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: History of Goa
  // ════════════════════════════════════════════════════════════
  {
    id: 20041, section: "History of Goa",
    text: "The Aihole inscription records that a Chalukya king of Badami conquered Revatidvipa, the coastal region associated with Goa. Who was this king?",
    options: ["A) Pulakeshin II", "B) Vikramaditya II", "C) Mangalesha", "D) Kirtivarman I"],
    answer: "A",
    explanation: "The Aihole inscription (634 CE), composed by Ravikirti, praises Pulakeshin II. It mentions his naval conquest of Revatidvipa (Redi area) on the Konkan coast."
  },
  {
    id: 20042, section: "History of Goa",
    text: "Which Kadamba king of Goa shifted his capital from Chandrapur to the port of Gopakapattana in the 11th century?",
    options: ["A) Guhalladeva III", "B) Tribhuvanamalla", "C) Shashthadeva I", "D) Jayakeshi I"],
    answer: "D",
    explanation: "Jayakeshi I made Gopakapattana (Goa Velha) his capital, which helped trade with Arab and other merchants."
  },
  {
    id: 20043, section: "History of Goa",
    text: "Copper-plate grants of the Bhoja king Devaraja, an important source for the early history of Goa, were found at",
    options: ["A) Chandor", "B) Shiroda", "C) Mapusa", "D) Old Goa"],
    answer: "B",
    explanation: "The Shiroda copper plates of Devaraja are among the earliest records of the Bhoja dynasty, which ruled from Chandrapur."
  },
  {
    id: 20044, section: "History of Goa",
    text: "Goa came under the Adil Shahi dynasty after the break-up of the Bahmani kingdom. Who founded the Adil Shahi dynasty of Bijapur?",
    options: ["A) Ibrahim Adil Shah", "B) Ismail Adil Shah", "C) Yusuf Adil Shah", "D) Ali Adil Shah"],
    answer: "C",
    explanation: "Yusuf Adil Khan declared independence at Bijapur around 1489–90. Goa was an important Adil Shahi port until 1510."
  },
  {
    id: 20045, section: "History of Goa",
    text: "Who was the first Portuguese Viceroy of India (1505)?",
    options: ["A) Afonso de Albuquerque", "B) Vasco da Gama", "C) Francisco de Almeida", "D) Nuno da Cunha"],
    answer: "C",
    explanation: "Francisco de Almeida was the first Viceroy. Albuquerque, who captured Goa, held the title of Governor."
  },
  {
    id: 20046, section: "History of Goa",
    text: "In which year did Goa replace Cochin as the capital of the Portuguese 'Estado da India'?",
    options: ["A) 1510", "B) 1542", "C) 1560", "D) 1530"],
    answer: "D",
    explanation: "Governor Nuno da Cunha made Goa the capital of Portuguese India in 1530."
  },
  {
    id: 20047, section: "History of Goa",
    text: "Which social practice did Afonso de Albuquerque ban in Goa soon after its capture in 1510?",
    options: ["A) Untouchability", "B) Child marriage", "C) Dowry", "D) Sati"],
    answer: "D",
    explanation: "Albuquerque prohibited sati in the territory under his control, long before the British ban of 1829."
  },
  {
    id: 20048, section: "History of Goa",
    text: "The 'Foral' issued by the Portuguese in 1526 (Foral de Mexia) is important because it",
    options: ["A) recorded the customs and rights of Goa's village communities", "B) declared Goa the capital of Portuguese India", "C) established the Goa Inquisition", "D) introduced the Portuguese Civil Code"],
    answer: "A",
    explanation: "Prepared under Afonso Mexia, the Foral of 1526 codified the usages and rights of the gaunkari village communities."
  },
  {
    id: 20049, section: "History of Goa",
    text: "The traditional system of village land-holding in Goa, later called 'Communidade' by the Portuguese, was originally known as",
    options: ["A) Mahalwari", "B) Zamindari", "C) Gaunkari", "D) Ryotwari"],
    answer: "C",
    explanation: "The gaunkars (village founders and their descendants) collectively owned and managed village land under the gaunkari system."
  },
  {
    id: 20050, section: "History of Goa",
    text: "The Church of St. Cajetan at Old Goa was modelled on which famous church?",
    options: ["A) St. Paul's Cathedral, London", "B) Notre-Dame, Paris", "C) Hagia Sophia, Istanbul", "D) St. Peter's Basilica, Rome"],
    answer: "D",
    explanation: "The Italian Theatine friars who built it modelled it on St. Peter's Basilica in Rome."
  },
  {
    id: 20051, section: "History of Goa",
    text: "The Viceroy's Arch at Old Goa, erected in 1599, commemorates",
    options: ["A) Vasco da Gama", "B) Afonso de Albuquerque", "C) St. Francis Xavier", "D) King Manuel I"],
    answer: "A",
    explanation: "It was raised by Viceroy Francisco da Gama, Vasco da Gama's great-grandson, in honour of Vasco da Gama."
  },
  {
    id: 20052, section: "History of Goa",
    text: "The talukas of Ponda, Sanguem, Quepem and Canacona came under Portuguese control in the 1760s when they were handed over by",
    options: ["A) the Bhonsles of Sawantwadi", "B) the Raja of Sonda, who sought refuge from Hyder Ali", "C) the Peshwa of Pune", "D) the Nawab of Savanur"],
    answer: "B",
    explanation: "Fleeing Hyder Ali's advance, the Raja of Sonda placed his Goan territories under Portuguese protection. They became part of the Novas Conquistas."
  },
  {
    id: 20053, section: "History of Goa",
    text: "The 'Novas Conquistas' (New Conquests) were added to Portuguese Goa mainly during the",
    options: ["A) 18th century", "B) 19th century", "C) 17th century", "D) 16th century"],
    answer: "A",
    explanation: "Ponda, Sanguem, Quepem, Canacona, Pernem, Bicholim and Sattari were acquired between about 1763 and 1788."
  },
  {
    id: 20054, section: "History of Goa",
    text: "What was the name of the first newspaper published in Goa (1821)?",
    options: ["A) O Debate", "B) Gazeta de Goa", "C) Boletim do Governo", "D) O Heraldo"],
    answer: "B",
    explanation: "The Gazeta de Goa began in 1821 as a government publication. O Heraldo (1900) and O Debate came much later."
  },
  {
    id: 20055, section: "History of Goa",
    text: "Goa's Uniform Civil Code, still in force, is derived from the Portuguese Civil Code enacted in",
    options: ["A) 1830", "B) 1961", "C) 1910", "D) 1867"],
    answer: "D",
    explanation: "The Portuguese Civil Code of 1867 was extended to Goa in 1870. It was retained after liberation and is the basis of Goa's common civil code."
  },
  {
    id: 20056, section: "History of Goa",
    text: "The clandestine radio station 'Voice of Freedom' (Goencho Sodvonecho Awaz), which broadcast against Portuguese rule from the forests near the border, was run by",
    options: ["A) T. B. Cunha and Purushottam Kakodkar", "B) Libia Lobo Sardesai and Vaman Sardesai", "C) Mohan Ranade and Prabhakar Sinari", "D) Ram Manohar Lohia and Juliao Menezes"],
    answer: "B",
    explanation: "Libia Lobo Sardesai and her husband Vaman Sardesai ran the underground radio from 1955 until liberation in 1961."
  },
  {
    id: 20057, section: "History of Goa",
    text: "During Operation Vijay (1961), which Portuguese frigate was disabled by the Indian Navy in Mormugao harbour?",
    options: ["A) NRP Vasco da Gama", "B) NRP Afonso de Albuquerque", "C) NRP Joao de Castro", "D) NRP Bartolomeu Dias"],
    answer: "B",
    explanation: "The frigate NRP Afonso de Albuquerque was engaged by Indian frigates led by INS Betwa. It was badly damaged and beached."
  },
  {
    id: 20058, section: "History of Goa",
    text: "Under which High Court does the State of Goa fall?",
    options: ["A) Kerala High Court", "B) Goa has its own separate High Court", "C) Karnataka High Court", "D) Bombay High Court (Bench at Goa)"],
    answer: "D",
    explanation: "Goa is under the jurisdiction of the Bombay High Court, which has a bench in Goa."
  },
  {
    id: 20059, section: "History of Goa",
    text: "Consider the following statements:<br>I. The Portuguese acquired Diu from the Sultan of Gujarat.<br>II. The Portuguese obtained Dadra and Nagar Haveli from the Marathas.<br>III. In 2020, Daman and Diu was merged with Dadra and Nagar Haveli into a single Union Territory.<br>Which of the statements given above is/are correct?",
    options: ["A) II and III only", "B) I and III only", "C) I, II and III", "D) I and II only"],
    answer: "C",
    explanation: "All are correct. Diu came from Sultan Bahadur Shah of Gujarat (1530s), Dadra and Nagar Haveli from the Marathas (1779–85), and the two UTs merged on 26 January 2020."
  },
  {
    id: 20060, section: "History of Goa",
    text: "Arrange the following in chronological order:<br>1. Goa attains statehood<br>2. Establishment of Goa University<br>3. Inclusion of Konkani in the Eighth Schedule<br>4. Establishment of Kala Academy, Goa",
    options: ["A) 4 → 2 → 1 → 3", "B) 4 → 1 → 2 → 3", "C) 2 → 4 → 1 → 3", "D) 4 → 2 → 3 → 1"],
    answer: "A",
    explanation: "Kala Academy (1970), Goa University (1985), Statehood (1987), Konkani in the Eighth Schedule (1992)."
  }
];
