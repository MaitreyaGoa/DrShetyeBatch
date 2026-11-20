// gssc_cbt2_groupA_mock2.js – Dr Shetye Academic Programme
// CBT 2 Group A Mock 2 · GSSC Advt. No. 2 of 2026 · CBT-II · Platoon Commander (Male) · Police Constable (Armed Police) · Assistant Superintendent (Male) · Warden (Male) · Matron (Female) · Lascar (Male) · Escort (Female)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 20061–20120
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | History of Goa Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Every year, Goa's beaches draw millions of visitors, and every year the sea claims lives that need not have been lost. Most drownings follow a familiar pattern. Visitors, often unfamiliar with the coast, enter the water in the late afternoon, sometimes after drinking, and are caught in a rip current — a narrow channel of water flowing rapidly away from the shore. The instinctive reaction is to swim straight back towards the beach, against the current. Even strong swimmers tire within minutes, and panic does the rest.\n\nLifeguards will tell you that the sea is rarely as dangerous as the ignorance with which people approach it. A rip current does not pull a swimmer under; it pulls him outwards. A person who stays calm, floats, and swims parallel to the shore until the pull weakens can usually return safely. Flags marking safe zones, warning boards in several languages and patrols during peak hours have reduced deaths considerably wherever they have been introduced consistently.\n\nYet no system works if people ignore it. Rescue teams report that a large share of those they pull from the water had entered areas clearly marked as unsafe. Prevention, therefore, depends as much on public discipline as on the number of lifeguards posted on the sand."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 20061, section: "Reasoning",
    text: "Find the next term in the series: 1, 2, 6, 24, 120, ?",
    options: ["A) 720", "B) 840", "C) 620", "D) 600"],
    answer: "A",
    explanation: "Multiply by 2, 3, 4, 5 and then 6: 120 × 6 = 720."
  },
  {
    id: 20062, section: "Reasoning",
    text: "Find the next term in the series: 2, 5, 10, 17, 26, ?",
    options: ["A) 36", "B) 39", "C) 37", "D) 35"],
    answer: "C",
    explanation: "The terms are n² + 1 for n = 1, 2, 3, …: 6² + 1 = 37."
  },
  {
    id: 20063, section: "Reasoning",
    text: "In a certain code, GUARD is written as TFZIW. How will POLICE be written in that code?",
    options: ["A) KLOSXV", "B) KLORXV", "C) JLORXV", "D) KLPRXV"],
    answer: "B",
    explanation: "Each letter is replaced by its opposite letter (A↔Z, B↔Y, …). P↔K, O↔L, L↔O, I↔R, C↔X, E↔V, giving KLORXV."
  },
  {
    id: 20064, section: "Reasoning",
    text: "Pointing to a girl in a photograph, Anil said, \"Her father is the only son of my mother.\" How is the girl related to Anil?",
    options: ["A) Sister", "B) Cousin", "C) Niece", "D) Daughter"],
    answer: "D",
    explanation: "The only son of Anil's mother is Anil himself. So the girl's father is Anil, and she is his daughter."
  },
  {
    id: 20065, section: "Reasoning",
    text: "Six persons A, B, C, D, E and F sit around a circular table facing the centre. A sits between E and F. E is to the immediate left of A. B sits opposite E. C is not an immediate neighbour of B. Who sits between C and B?",
    options: ["A) E", "B) A", "C) F", "D) D"],
    answer: "D",
    explanation: "Going clockwise from A: E, C, D, B, F. B is opposite E, and C cannot sit next to B, so D sits between C and B."
  },
  {
    id: 20066, section: "Reasoning",
    text: "If the day after tomorrow is Sunday, what was the day before yesterday?",
    options: ["A) Wednesday", "B) Thursday", "C) Monday", "D) Tuesday"],
    answer: "A",
    explanation: "The day after tomorrow is Sunday, so today is Friday. The day before yesterday was Wednesday."
  },
  {
    id: 20067, section: "Reasoning",
    text: "Statements: Some officers are women. All women are disciplined.<br>Conclusions:<br>I. Some officers are disciplined.<br>II. All disciplined persons are women.",
    options: ["A) Both I and II follow", "B) Only II follows", "C) Neither I nor II follows", "D) Only I follows"],
    answer: "D",
    explanation: "The officers who are women must be disciplined, so I follows. 'All women are disciplined' cannot be reversed, so II does not follow."
  },
  {
    id: 20068, section: "Reasoning",
    text: "Find the term that completes the analogy:  3 : 28 :: 5 : ?",
    options: ["A) 126", "B) 125", "C) 124", "D) 216"],
    answer: "A",
    explanation: "3³ + 1 = 28, so 5³ + 1 = 126."
  },
  {
    id: 20069, section: "Reasoning",
    text: "How many numbers from 1 to 100 are divisible by both 4 and 6?",
    options: ["A) 8", "B) 16", "C) 9", "D) 24"],
    answer: "A",
    explanation: "Divisible by both means divisible by LCM(4, 6) = 12. Multiples of 12 up to 100: 12, 24, …, 96, which is 8 numbers."
  },
  {
    id: 20070, section: "Reasoning",
    text: "Assertion (A): Prisoners are often given vocational training in jails.<br>Reason (R): Skills learnt in prison can help them earn a living after release.",
    options: ["A) Both A and R are true, but R is not the correct explanation of A", "B) Both A and R are true, and R is the correct explanation of A", "C) A is false, but R is true", "D) A is true, but R is false"],
    answer: "B",
    explanation: "Both statements are true, and the purpose in R is exactly why the training in A is given."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 20071, section: "Numerical Ability",
    text: "A number is first increased by 20% and then decreased by 25%. The result is 900. What was the original number?",
    options: ["A) 900", "B) 1080", "C) 960", "D) 1000"],
    answer: "D",
    explanation: "x × 1.2 × 0.75 = 0.9x = 900, so x = 1000."
  },
  {
    id: 20072, section: "Numerical Ability",
    text: "If the cost price of 15 articles equals the selling price of 12 articles, what is the profit percentage?",
    options: ["A) 25%", "B) 30%", "C) 15%", "D) 20%"],
    answer: "A",
    explanation: "Let each article cost ₹1. SP of 12 = ₹15, so the profit on 12 is 3, i.e. 3/12 = 25%."
  },
  {
    id: 20073, section: "Numerical Ability",
    text: "A train 150 m long passes a man walking at 6 km/h in the same direction in 10 seconds. What is the speed of the train?",
    options: ["A) 66 km/h", "B) 48 km/h", "C) 54 km/h", "D) 60 km/h"],
    answer: "D",
    explanation: "Relative speed = 150/10 = 15 m/s = 54 km/h. Train speed = 54 + 6 = 60 km/h."
  },
  {
    id: 20074, section: "Numerical Ability",
    text: "A can do a work in 6 days and B in 8 days. Working together, they are paid ₹2,800. What is A's share?",
    options: ["A) ₹1,500", "B) ₹1,600", "C) ₹1,200", "D) ₹1,400"],
    answer: "B",
    explanation: "Wages are shared in the ratio of work rates: 1/6 : 1/8 = 4 : 3. A gets 2800 × 4/7 = ₹1,600."
  },
  {
    id: 20075, section: "Numerical Ability",
    text: "What will ₹10,000 amount to in 1 year at 10% per annum, compounded half-yearly?",
    options: ["A) ₹11,025", "B) ₹11,100", "C) ₹11,050", "D) ₹11,000"],
    answer: "A",
    explanation: "Half-yearly rate = 5%, 2 periods: 10000 × 1.05² = ₹11,025."
  },
  {
    id: 20076, section: "Numerical Ability",
    text: "Five years ago, A was three times as old as B. Ten years from now, A will be twice as old as B. What is A's present age?",
    options: ["A) 55 years", "B) 50 years", "C) 40 years", "D) 45 years"],
    answer: "B",
    explanation: "A − 5 = 3(B − 5) gives A = 3B − 10. A + 10 = 2(B + 10) gives A = 2B + 10. So B = 20 and A = 50."
  },
  {
    id: 20077, section: "Numerical Ability",
    text: "The average age of 30 trainees is 15 years. When the instructor's age is included, the average rises by 1 year. What is the instructor's age?",
    options: ["A) 45 years", "B) 31 years", "C) 46 years", "D) 47 years"],
    answer: "C",
    explanation: "Instructor = 31 × 16 − 30 × 15 = 496 − 450 = 46 years."
  },
  {
    id: 20078, section: "Numerical Ability",
    text: "What is 15% of 40% of 2500?",
    options: ["A) 160", "B) 125", "C) 150", "D) 175"],
    answer: "C",
    explanation: "40% of 2500 = 1000, and 15% of 1000 = 150."
  },
  {
    id: 20079, section: "Numerical Ability",
    text: "The length of a rectangle is increased by 20% and its breadth is decreased by 20%. What is the effect on its area?",
    options: ["A) Increases by 4%", "B) Decreases by 2%", "C) No change", "D) Decreases by 4%"],
    answer: "D",
    explanation: "New area = 1.2 × 0.8 = 0.96 of the original, a 4% decrease."
  },
  {
    id: 20080, section: "Numerical Ability",
    text: "When a number is divided by 36, the remainder is 19. What will the remainder be when the same number is divided by 12?",
    options: ["A) 9", "B) 7", "C) 5", "D) 3"],
    answer: "B",
    explanation: "Number = 36k + 19 = 12(3k) + 19. 19 divided by 12 leaves remainder 7."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 20081, section: "English",
    passage: "passage_1",
    text: "Which of the following best states the main idea of the passage?",
    options: ["A) Most beach drownings are preventable through awareness, safety systems and public discipline", "B) Only strong swimmers should enter the sea", "C) Goa's beaches are too dangerous for tourists to visit", "D) Lifeguards alone can prevent all drownings"],
    answer: "A",
    explanation: "The passage describes how drownings happen, how they can be avoided, and why people must obey safety measures."
  },
  {
    id: 20082, section: "English",
    passage: "passage_1",
    text: "According to the passage, a rip current is",
    options: ["A) a large wave that breaks near the beach", "B) a current that flows parallel to the beach", "C) a narrow channel of water flowing rapidly away from the shore", "D) a whirlpool that pulls swimmers under the water"],
    answer: "C",
    explanation: "Defined in the first paragraph."
  },
  {
    id: 20083, section: "English",
    passage: "passage_1",
    text: "What is the correct response for a swimmer caught in a rip current, according to the passage?",
    options: ["A) Wave and shout continuously until rescued", "B) Swim straight back towards the beach as fast as possible", "C) Dive under the water to escape the current", "D) Stay calm, float, and swim parallel to the shore until the pull weakens"],
    answer: "D",
    explanation: "Stated in the second paragraph; swimming straight back against the current tires even strong swimmers."
  },
  {
    id: 20084, section: "English",
    passage: "passage_1",
    text: "The statement 'the sea is rarely as dangerous as the ignorance with which people approach it' suggests that",
    options: ["A) only foreigners are ignorant about the sea", "B) lack of knowledge increases the danger more than the sea itself", "C) the sea is never dangerous", "D) lifeguards are ignorant about the sea"],
    answer: "B",
    explanation: "The author stresses that knowing how to respond, e.g. to a rip current, makes the sea far less deadly."
  },
  {
    id: 20085, section: "English",
    passage: "passage_1",
    text: "Which of the following can be inferred from the passage?",
    options: ["A) Drownings happen mostly in the early morning", "B) Rip currents pull swimmers to the sea bed", "C) Warning boards have had no effect", "D) Many drowning victims had ignored safety markings"],
    answer: "D",
    explanation: "Rescue teams report that a large share had entered areas clearly marked as unsafe."
  },
  {
    id: 20086, section: "English",
    text: "Choose the word most similar in meaning to VIGILANT.",
    options: ["A) Timid", "B) Careless", "C) Sleepy", "D) Watchful"],
    answer: "D",
    explanation: "Vigilant means keeping careful watch for danger."
  },
  {
    id: 20087, section: "English",
    text: "Choose the word most similar in meaning to CONCEAL.",
    options: ["A) Confess", "B) Display", "C) Hide", "D) Reveal"],
    answer: "C",
    explanation: "To conceal is to hide."
  },
  {
    id: 20088, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to COURAGE.",
    options: ["A) Boldness", "B) Valour", "C) Bravery", "D) Cowardice"],
    answer: "D",
    explanation: "Courage is bravery; its opposite is cowardice."
  },
  {
    id: 20089, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to EXPAND.",
    options: ["A) Contract", "B) Extend", "C) Enlarge", "D) Swell"],
    answer: "A",
    explanation: "Expand means to become larger; its opposite is contract."
  },
  {
    id: 20090, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The police has (A) / arrested the suspects (B) / involved in (C) / the robbery. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "'Police' is always plural: 'The police have arrested …'."
  },
  {
    id: 20091, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Ten kilometres (A) / are a long distance (B) / to walk (C) / in this heat. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "A distance taken as one whole takes a singular verb: 'Ten kilometres is a long distance'."
  },
  {
    id: 20092, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>She is the most (A) / intelligent of (B) / all the other (C) / trainees in the batch. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "With a superlative ('the most … of all'), 'other' is wrong: 'the most intelligent of all the trainees'."
  },
  {
    id: 20093, section: "English",
    text: "Fill in the blank: The lascar dived ______ the water to save the drowning boy.",
    options: ["A) into", "B) in", "C) at", "D) on"],
    answer: "A",
    explanation: "'Into' shows movement from outside to inside."
  },
  {
    id: 20094, section: "English",
    text: "Fill in the blank: He prefers walking ______ cycling.",
    options: ["A) against", "B) from", "C) to", "D) than"],
    answer: "C",
    explanation: "'Prefer' takes 'to': prefer A to B."
  },
  {
    id: 20095, section: "English",
    text: "Fill in the blank: Hardly ______ the bell rung when the students rushed out.",
    options: ["A) was", "B) did", "C) had", "D) has"],
    answer: "C",
    explanation: "'Hardly had + subject + V3 … when' is the correct inverted past perfect structure."
  },
  {
    id: 20096, section: "English",
    text: "Choose the correct meaning of the idiom: A blessing in disguise",
    options: ["A) A hidden enemy", "B) A secret gift from a friend", "C) A false promise", "D) Something good that at first seemed bad"],
    answer: "D",
    explanation: "A blessing in disguise is an apparent misfortune that turns out to be good."
  },
  {
    id: 20097, section: "English",
    text: "Choose the correct meaning of the idiom: To cry over spilt milk",
    options: ["A) To waste food", "B) To regret something that cannot be undone", "C) To complain about poor service", "D) To weep without reason"],
    answer: "B",
    explanation: "To cry over spilt milk is to grieve uselessly over something that has already happened."
  },
  {
    id: 20098, section: "English",
    text: "Choose the one word for: A person who can speak many languages",
    options: ["A) Translator", "B) Bilingual", "C) Polyglot", "D) Philologist"],
    answer: "C",
    explanation: "A polyglot knows many languages. 'Bilingual' means two, and a philologist studies the history of languages."
  },
  {
    id: 20099, section: "English",
    text: "Choose the correctly spelt word.",
    options: ["A) Acomodation", "B) Accommodation", "C) Accomodation", "D) Acommodation"],
    answer: "B",
    explanation: "It is spelt with a double c and a double m: A-C-C-O-M-M-O-D-A-T-I-O-N."
  },
  {
    id: 20100, section: "English",
    text: "Arrange the sentences in a logical order:<br>P. The boy was then taken to the hospital in an ambulance.<br>Q. A lifeguard spotted a boy struggling in the waves.<br>R. He swam out and brought the boy safely to the shore.<br>S. He gave the boy first aid on the beach.",
    options: ["A) RQSP", "B) QRSP", "C) QRPS", "D) QSRP"],
    answer: "B",
    explanation: "Q (the lifeguard spots the boy) → R (rescue) → S (first aid on the beach) → P (taken to hospital)."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: History of Goa
  // ════════════════════════════════════════════════════════════
  {
    id: 20101, section: "History of Goa",
    text: "In which year did Chhatrapati Shivaji Maharaj capture the fort of Ponda from the Adil Shahis?",
    options: ["A) 1739", "B) 1683", "C) 1664", "D) 1675"],
    answer: "D",
    explanation: "Shivaji captured the Ponda fort from the Adil Shahis in 1675. (1683 is Sambhaji's campaign against the Portuguese.)"
  },
  {
    id: 20102, section: "History of Goa",
    text: "St. Francis Xavier arrived in Goa in the year",
    options: ["A) 1510", "B) 1542", "C) 1556", "D) 1560"],
    answer: "B",
    explanation: "He landed in Goa on 6 May 1542. (1556: first printing press; 1560: Inquisition.)"
  },
  {
    id: 20103, section: "History of Goa",
    text: "St. Joseph Vaz, canonised in 2015 and known as the 'Apostle of Sri Lanka', was born in which Goan village?",
    options: ["A) Candolim", "B) Benaulim", "C) Chandor", "D) Assolna"],
    answer: "B",
    explanation: "Joseph Vaz was born in 1651 at Benaulim (Salcete). He worked in Sri Lanka and was canonised by Pope Francis in 2015."
  },
  {
    id: 20104, section: "History of Goa",
    text: "Because of its many churches and religious institutions, Old Goa was once called the",
    options: ["A) Lisbon of Asia", "B) Venice of the East", "C) Rome of the East", "D) Paris of the East"],
    answer: "C",
    explanation: "In the 16th–17th centuries Old Goa was a great centre of the Church in Asia and was called the 'Rome of the East'."
  },
  {
    id: 20105, section: "History of Goa",
    text: "The 'Churches and Convents of Goa' were declared a UNESCO World Heritage Site in",
    options: ["A) 1961", "B) 1999", "C) 1986", "D) 2004"],
    answer: "C",
    explanation: "UNESCO inscribed them in 1986. The group includes the Basilica of Bom Jesus and the Se Cathedral."
  },
  {
    id: 20106, section: "History of Goa",
    text: "The Pinto Conspiracy of 1787, a plan to overthrow Portuguese rule, was hatched by priests and army officers mainly from which village?",
    options: ["A) Cuncolim", "B) Candolim", "C) Chandor", "D) Benaulim"],
    answer: "B",
    explanation: "The leaders belonged to the Pinto family of Candolim, Bardez. The plot was betrayed and the conspirators were severely punished."
  },
  {
    id: 20107, section: "History of Goa",
    text: "Who is regarded as the 'Father of modern Konkani literature', whose birth anniversary is celebrated as World Konkani Day?",
    options: ["A) Shenoi Goembab (Waman Raghunath Varde Valaulikar)", "B) Ravindra Kelekar", "C) Manohar Rai Sardesai", "D) Bakibab Borkar"],
    answer: "A",
    explanation: "Shenoi Goembab (1877–1946) championed Konkani as a literary language. His birth anniversary, 9 June, is observed as World Konkani Day."
  },
  {
    id: 20108, section: "History of Goa",
    text: "In which year did the Sahitya Akademi recognise Konkani as an independent literary language of India?",
    options: ["A) 1961", "B) 1975", "C) 1992", "D) 1987"],
    answer: "B",
    explanation: "Recognition came in 1975. (1987: official language of Goa; 1992: Eighth Schedule.)"
  },
  {
    id: 20109, section: "History of Goa",
    text: "Which of the following crops, now central to Goa's economy, was introduced by the Portuguese from Brazil?",
    options: ["A) Cashew", "B) Coconut", "C) Rice", "D) Arecanut"],
    answer: "A",
    explanation: "The Portuguese brought cashew from Brazil in the 16th century. Today it supports Goa's cashew and feni industry."
  },
  {
    id: 20110, section: "History of Goa",
    text: "Which fort in Goa was used by the Portuguese as a central jail where many freedom fighters were imprisoned?",
    options: ["A) Fort Aguada", "B) Cabo de Rama Fort", "C) Tiracol Fort", "D) Chapora Fort"],
    answer: "A",
    explanation: "Part of Fort Aguada was converted into a prison, where many satyagrahis and freedom fighters were held."
  },
  {
    id: 20111, section: "History of Goa",
    text: "During Operation Vijay, the Indian Air Force bombed which airfield to put it out of action?",
    options: ["A) Hubli", "B) Mopa", "C) Dabolim", "D) Belgaum"],
    answer: "C",
    explanation: "The IAF struck Dabolim airfield on 18 December 1961 to stop Portuguese use of the runway."
  },
  {
    id: 20112, section: "History of Goa",
    text: "Which island near the Goa–Karnataka coast, held by the Portuguese, was captured by an Indian Navy landing party during Operation Vijay?",
    options: ["A) Grande Island", "B) Anjediva", "C) Chorao", "D) Divar"],
    answer: "B",
    explanation: "Indian naval forces assaulted and captured Anjediva island, which the Portuguese administered as part of Goa."
  },
  {
    id: 20113, section: "History of Goa",
    text: "Fort Tiracol, Goa's northernmost fort, stands on the bank of which river?",
    options: ["A) Chapora", "B) Mandovi", "C) Sal", "D) Terekhol"],
    answer: "D",
    explanation: "Tiracol Fort overlooks the mouth of the Terekhol (Tiracol) river, which forms Goa's northern boundary with Maharashtra."
  },
  {
    id: 20114, section: "History of Goa",
    text: "The name of Chapora Fort is believed to be derived from 'Shahpura', a name linked to which rulers?",
    options: ["A) The Kadambas", "B) The Vijayanagara kings", "C) The Adil Shahis of Bijapur", "D) The Mughals"],
    answer: "C",
    explanation: "The fort site was earlier an Adil Shahi stronghold called Shahpura. The Portuguese rebuilt the fort in 1617."
  },
  {
    id: 20115, section: "History of Goa",
    text: "The ruined tower on the Holy Hill at Old Goa, about 46 m high, is all that remains of the",
    options: ["A) Church of St. Cajetan", "B) Se Cathedral", "C) Basilica of Bom Jesus", "D) Church of St. Augustine"],
    answer: "D",
    explanation: "The Augustinian church was abandoned in the 19th century. Only part of its massive bell tower survives."
  },
  {
    id: 20116, section: "History of Goa",
    text: "Which party formed the first elected government of the Union Territory of Goa, Daman and Diu in 1963?",
    options: ["A) Maharashtrawadi Gomantak Party", "B) Indian National Congress", "C) United Goans Party", "D) Janata Party"],
    answer: "A",
    explanation: "The MGP won the December 1963 election, and Dayanand Bandodkar became Chief Minister."
  },
  {
    id: 20117, section: "History of Goa",
    text: "Consider the following statements:<br>I. The Goa Legislative Assembly has 40 seats.<br>II. The Goa Legislative Assembly complex is located at Porvorim.<br>III. Goa elects three members to the Lok Sabha.<br>Which of the statements given above is/are correct?",
    options: ["A) I and II only", "B) II and III only", "C) I, II and III", "D) I and III only"],
    answer: "A",
    explanation: "I and II are correct. III is wrong: Goa has two Lok Sabha seats, North Goa and South Goa."
  },
  {
    id: 20118, section: "History of Goa",
    text: "Diu came under Portuguese control in the 1530s from which ruler?",
    options: ["A) Emperor Akbar", "B) The Zamorin of Calicut", "C) Sultan Bahadur Shah of Gujarat", "D) The Adil Shah of Bijapur"],
    answer: "C",
    explanation: "Bahadur Shah of Gujarat, threatened by the Mughals, allowed the Portuguese to build a fort at Diu (1535)."
  },
  {
    id: 20119, section: "History of Goa",
    text: "Arrange the following events in chronological order:<br>1. Shivaji captures Ponda fort<br>2. Arrival of St. Francis Xavier in Goa<br>3. Recognition of Konkani by the Sahitya Akademi<br>4. Pinto Conspiracy",
    options: ["A) 2 → 1 → 3 → 4", "B) 2 → 4 → 1 → 3", "C) 1 → 2 → 4 → 3", "D) 2 → 1 → 4 → 3"],
    answer: "D",
    explanation: "Xavier arrives (1542), Ponda fort (1675), Pinto Conspiracy (1787), Sahitya Akademi recognition (1975)."
  },
  {
    id: 20120, section: "History of Goa",
    text: "Match the temples with their present locations:<br>(P) Shri Shantadurga (Q) Shri Mahalasa Narayani (R) Shri Nagesh (S) Shri Saptakoteshwar<br>(1) Mardol (2) Narve (3) Kavlem (4) Bandora",
    options: ["A) P-3, Q-4, R-1, S-2", "B) P-3, Q-1, R-2, S-4", "C) P-3, Q-1, R-4, S-2", "D) P-1, Q-3, R-4, S-2"],
    answer: "C",
    explanation: "Shantadurga is at Kavlem, Mahalasa Narayani at Mardol, Nagesh at Bandora (Nagueshi) and Saptakoteshwar at Narve. The first two were moved from Quelossim and Verna in the 16th century."
  }
];
