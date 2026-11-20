// gssc_police_cbt2_mock4.js – Dr Shetye Academic Programme
// CBT 2 Goa Police Mock 4 · GSSC Advt. No. 2 of 2026 · CBT-II · Police Constable (Male / Female)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 20641–20700
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | History of Goa Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Across Indian towns, closed-circuit television cameras have become a familiar sight at junctions, markets and bus stands. Their supporters point to real successes: footage has helped identify hit-and-run drivers, trace missing children and solve thefts that would otherwise have gone cold. The mere presence of a camera, they argue, also deters crime, since a potential offender who believes he is being watched may think twice.\n\nThe evidence on deterrence, however, is more mixed than the enthusiasm suggests. Cameras appear to work best in confined spaces such as car parks, where they are combined with good lighting and regular patrols. In open streets, offenders often simply move to areas without cameras, or cover their faces. A camera that is poorly maintained, badly positioned or never monitored adds little except a sense of security.\n\nThere is also a question of balance. Recordings of ordinary citizens going about their lives are sensitive information. Clear rules on who may view footage, how long it is kept and when it must be deleted protect both the public and the credibility of the police. Technology, in short, is a tool and not a substitute: it extends the reach of good policing but cannot replace the officer who knows the neighbourhood."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 20641, section: "Reasoning",
    text: "Find the next term in the series: 3, 4, 12, 39, 103, ?",
    options: ["A) 216", "B) 228", "C) 225", "D) 232"],
    answer: "B",
    explanation: "The differences are 1, 8, 27, 64 (cubes of 1, 2, 3, 4). The next difference is 5³ = 125: 103 + 125 = 228."
  },
  {
    id: 20642, section: "Reasoning",
    text: "Find the missing pair in the series: Z, 2, X, 6, U, 12, Q, 20, ?, ?",
    options: ["A) L, 28", "B) K, 30", "C) M, 30", "D) L, 30"],
    answer: "D",
    explanation: "Letters go back by 2, 3, 4, 5 (Z→X→U→Q→L). Numbers increase by 4, 6, 8, 10 (2→6→12→20→30)."
  },
  {
    id: 20643, section: "Reasoning",
    text: "In a certain code, DELHI is written as 73541 and CALCUTTA as 82589662. How will CALICUT be written in that code?",
    options: ["A) 8251869", "B) 8251986", "C) 8521896", "D) 8251896"],
    answer: "D",
    explanation: "Each letter has a fixed digit: C = 8, A = 2, L = 5, I = 1, U = 9, T = 6. So CALICUT becomes 8-2-5-1-8-9-6."
  },
  {
    id: 20644, section: "Reasoning",
    text: "If 'P × Q' means P is the brother of Q, 'P − Q' means P is the sister of Q, 'P + Q' means P is the father of Q and 'P ÷ Q' means P is the mother of Q, which expression shows that M is the niece of N?",
    options: ["A) N × O + M − T", "B) N × O ÷ M × T", "C) N ÷ O + M − T", "D) N − O + M × T"],
    answer: "A",
    explanation: "N × O + M − T: N is O's brother, O is M's father, and M is T's sister (so M is female). M is the daughter of N's brother, i.e. N's niece. In the other options M is male (nephew) or N's granddaughter."
  },
  {
    id: 20645, section: "Reasoning",
    text: "Eight persons A, B, C, D, E, F, G and H sit around a circular table facing the centre. A sits third to the right of D. B sits second to the left of A. E sits immediately to the right of B. F sits opposite A. C sits second to the right of H. Who sits opposite G?",
    options: ["A) C", "B) H", "C) B", "D) E"],
    answer: "C",
    explanation: "Put D at seat 0 and count clockwise; for people facing the centre, right is anticlockwise. A = 5, B = 7, E = 6 and F = 1. That leaves seats 2, 3 and 4 for C, G and H. C is second to the right of H, so H = 4 and C = 2, which puts G at seat 3. The seat opposite G is 7, which is B."
  },
  {
    id: 20646, section: "Reasoning",
    text: "Five officers P, Q, R, S and T live on different floors of a five-storey building (floor 1 is the lowest). Q lives on an even-numbered floor above S. R lives on the floor immediately above P. Neither S nor T lives on floor 1. Who lives on the top floor?",
    options: ["A) Q", "B) T", "C) R", "D) S"],
    answer: "B",
    explanation: "Q must be on floor 4 (an even floor above S, and S is not on 1). If S were on 2, floors 1, 3 and 5 would be left, and P and R could not be on adjacent floors. So S = 3, and P = 1, R = 2. T takes floor 5."
  },
  {
    id: 20647, section: "Reasoning",
    text: "Statements: All inspectors are graduates. No graduate is a smoker. Some smokers are athletes.<br>Conclusions:<br>I. No inspector is a smoker.<br>II. Some athletes are not graduates.<br>III. All athletes being inspectors is a possibility.",
    options: ["A) Only I and II follow", "B) Only II and III follow", "C) Only I follows", "D) All I, II and III follow"],
    answer: "A",
    explanation: "I follows: inspectors are graduates and no graduate smokes. II follows: the athletes who smoke cannot be graduates. III is impossible: some athletes are smokers, and smokers can never be inspectors."
  },
  {
    id: 20648, section: "Reasoning",
    text: "If 'P @ Q' means P ≥ Q, 'P # Q' means P &gt; Q, 'P $ Q' means P = Q and 'P % Q' means P &lt; Q, then given A # B @ C $ D % E, which conclusions follow?<br>I. A # D<br>II. E # C",
    options: ["A) Only I follows", "B) Both I and II follow", "C) Only II follows", "D) Neither I nor II follows"],
    answer: "B",
    explanation: "The chain is A &gt; B ≥ C = D &lt; E. A &gt; B ≥ C = D, so A &gt; D (I follows). E &gt; D = C, so E &gt; C (II follows)."
  },
  {
    id: 20649, section: "Reasoning",
    text: "At what time between 5 o'clock and 6 o'clock are the hands of a clock at right angles for the first time?",
    options: ["A) 11 1/11 minutes past 5", "B) 43 7/11 minutes past 5", "C) 10 10/11 minutes past 5", "D) 10 minutes past 5"],
    answer: "C",
    explanation: "Angle = |30 × 5 − 5.5m| = 90 gives 5.5m = 60, so m = 120/11 = 10 10/11 minutes. (The second time is 43 7/11 minutes past 5.)"
  },
  {
    id: 20650, section: "Reasoning",
    text: "Question: Among A, B, C, D and E, who is the tallest?<br>Statement I: A is taller than C and E.<br>Statement II: B is shorter than E but taller than D.",
    options: ["A) Statement II alone is sufficient", "B) Both statements together are necessary", "C) Neither statement is sufficient even together", "D) Statement I alone is sufficient"],
    answer: "B",
    explanation: "I alone says nothing about B and D. II alone says nothing about A and C. Together: A &gt; E &gt; B &gt; D and A &gt; C, so A is the tallest."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 20651, section: "Numerical Ability",
    text: "₹12,000 is divided among A, B and C so that A gets 2/3 of what B and C together get, and B gets 1/4 of what A and C together get. What is C's share?",
    options: ["A) ₹5,200", "B) ₹4,800", "C) ₹3,600", "D) ₹4,000"],
    answer: "B",
    explanation: "A = (2/3)(B + C), so A = 2/5 of the total = 4,800. B = (1/4)(A + C), so B = 1/5 of the total = 2,400. C = 12,000 − 4,800 − 2,400 = ₹4,800."
  },
  {
    id: 20652, section: "Numerical Ability",
    text: "The price of rice rises by 20% and a family reduces its consumption by 10%. By what percentage does its expenditure on rice change?",
    options: ["A) Increases by 8%", "B) Decreases by 2%", "C) Increases by 12%", "D) Increases by 10%"],
    answer: "A",
    explanation: "1.20 × 0.90 = 1.08, an 8% increase."
  },
  {
    id: 20653, section: "Numerical Ability",
    text: "A train passes a 120 m long platform in 18 seconds and a man standing on the platform in 12 seconds. What are the length and speed of the train?",
    options: ["A) 180 m, 54 km/h", "B) 240 m, 72 km/h", "C) 240 m, 60 km/h", "D) 200 m, 72 km/h"],
    answer: "B",
    explanation: "L/v = 12 and (L + 120)/v = 18, so 120/v = 6 and v = 20 m/s = 72 km/h. L = 20 × 12 = 240 m."
  },
  {
    id: 20654, section: "Numerical Ability",
    text: "A and B can do a work in 12 days, B and C in 15 days, and C and A in 20 days. In how many days can A alone do it?",
    options: ["A) 24 days", "B) 20 days", "C) 40 days", "D) 30 days"],
    answer: "D",
    explanation: "A + B + C = (1/12 + 1/15 + 1/20)/2 = 1/10. A = 1/10 − 1/15 = 1/30, so 30 days."
  },
  {
    id: 20655, section: "Numerical Ability",
    text: "The difference between the simple interest on a sum for 5 years and for 3 years at 12% per annum is ₹1,440. What is the sum?",
    options: ["A) ₹4,800", "B) ₹5,000", "C) ₹7,200", "D) ₹6,000"],
    answer: "D",
    explanation: "Two years' interest = 24% of the sum = 1,440, so the sum is ₹6,000."
  },
  {
    id: 20656, section: "Numerical Ability",
    text: "From a container of 40 litres of milk, 4 litres are taken out and replaced with water. This is done once more. How much milk is now in the container?",
    options: ["A) 32 litres", "B) 32.4 litres", "C) 36 litres", "D) 30.6 litres"],
    answer: "B",
    explanation: "Milk left = 40 × (1 − 4/40)² = 40 × 0.81 = 32.4 litres."
  },
  {
    id: 20657, section: "Numerical Ability",
    text: "The average of five consecutive even numbers is 36. What is the product of the smallest and the largest of them?",
    options: ["A) 1,224", "B) 1,296", "C) 1,280", "D) 1,360"],
    answer: "C",
    explanation: "The numbers are 32, 34, 36, 38, 40, and 32 × 40 = 1,280."
  },
  {
    id: 20658, section: "Numerical Ability",
    text: "A boat goes 30 km downstream in 2 hours and 18 km upstream in 2 hours. What is the speed of the boat in still water?",
    options: ["A) 12 km/h", "B) 13 km/h", "C) 10 km/h", "D) 3 km/h"],
    answer: "A",
    explanation: "Downstream speed = 15 km/h and upstream = 9 km/h. Boat speed = (15 + 9)/2 = 12 km/h."
  },
  {
    id: 20659, section: "Numerical Ability",
    text: "How many zeros are there at the end of 100! (100 factorial)?",
    options: ["A) 22", "B) 25", "C) 20", "D) 24"],
    answer: "D",
    explanation: "Count the factors of 5: ⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = 24."
  },
  {
    id: 20660, section: "Numerical Ability",
    text: "A shopkeeper allows a discount of 20% and still gains 20%. If the cost price is ₹400, what is the marked price?",
    options: ["A) ₹560", "B) ₹640", "C) ₹580", "D) ₹600"],
    answer: "D",
    explanation: "SP = 400 × 1.2 = 480. MP = 480/0.8 = ₹600."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 20661, section: "English",
    passage: "passage_1",
    text: "Which of the following best expresses the main idea of the passage?",
    options: ["A) CCTV cameras have completely eliminated crime in towns", "B) Cameras should be removed because they violate privacy", "C) CCTV cameras are useful but limited, and work best with good policing and clear safeguards", "D) Police officers are no longer needed where cameras are installed"],
    answer: "C",
    explanation: "The passage weighs the benefits against the limits and privacy concerns, and ends by calling technology a tool, not a substitute."
  },
  {
    id: 20662, section: "English",
    passage: "passage_1",
    text: "According to the passage, where do cameras appear to work best?",
    options: ["A) In confined spaces combined with good lighting and regular patrols", "B) On open streets and highways", "C) In places where nobody monitors them", "D) Inside private homes"],
    answer: "A",
    explanation: "Stated in the second paragraph."
  },
  {
    id: 20663, section: "English",
    passage: "passage_1",
    text: "The statement that offenders 'simply move to areas without cameras' illustrates",
    options: ["A) the success of camera surveillance", "B) the displacement of crime to other places", "C) the complete prevention of crime", "D) the failure of street lighting"],
    answer: "B",
    explanation: "Crime is not prevented but shifted elsewhere, i.e. displaced."
  },
  {
    id: 20664, section: "English",
    passage: "passage_1",
    text: "Why, according to the author, are clear rules on CCTV footage necessary?",
    options: ["A) To reduce the cost of cameras", "B) To protect both the public and the credibility of the police", "C) To keep recordings permanently", "D) To allow anyone to view the recordings"],
    answer: "B",
    explanation: "Stated in the last paragraph."
  },
  {
    id: 20665, section: "English",
    passage: "passage_1",
    text: "The word 'deters', as used in the passage, most nearly means",
    options: ["A) records", "B) punishes", "C) discourages", "D) encourages"],
    answer: "C",
    explanation: "To deter is to discourage someone from doing something."
  },
  {
    id: 20666, section: "English",
    text: "Choose the word most similar in meaning to CLANDESTINE.",
    options: ["A) Open", "B) Brave", "C) Legal", "D) Secret"],
    answer: "D",
    explanation: "Clandestine means done secretly."
  },
  {
    id: 20667, section: "English",
    text: "Choose the word most similar in meaning to IMPECCABLE.",
    options: ["A) Careless", "B) Faulty", "C) Flawless", "D) Ordinary"],
    answer: "C",
    explanation: "Impeccable means without fault."
  },
  {
    id: 20668, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to APATHY.",
    options: ["A) Lethargy", "B) Indifference", "C) Enthusiasm", "D) Unconcern"],
    answer: "C",
    explanation: "Apathy is a lack of interest or concern; its opposite is enthusiasm."
  },
  {
    id: 20669, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to CONSPICUOUS.",
    options: ["A) Obvious", "B) Prominent", "C) Visible", "D) Inconspicuous"],
    answer: "D",
    explanation: "Conspicuous means clearly visible; its opposite is inconspicuous."
  },
  {
    id: 20670, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Despite of (A) / heavy rain, (B) / the parade (C) / went on as planned. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "'Despite' takes no 'of': 'Despite heavy rain' (or 'In spite of heavy rain')."
  },
  {
    id: 20671, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Each of the (A) / suspects were (B) / questioned (C) / separately. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "'Each of' takes a singular verb: 'was questioned'."
  },
  {
    id: 20672, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The officer, together with (A) / his men, (B) / were (C) / honoured by the state. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "With 'together with', the verb agrees with the first subject, 'the officer': 'was honoured'."
  },
  {
    id: 20673, section: "English",
    text: "Fill in the blank: The court ______ the accused on bail.",
    options: ["A) acquitted", "B) arrested", "C) released", "D) convicted"],
    answer: "C",
    explanation: "An accused is 'released on bail'. Acquittal means a finding of not guilty, which has nothing to do with bail."
  },
  {
    id: 20674, section: "English",
    text: "Fill in the blank: Hardly had the alarm sounded ______ the guards closed the gates.",
    options: ["A) then", "B) when", "C) than", "D) while"],
    answer: "B",
    explanation: "'Hardly … when' is the correct correlative pair."
  },
  {
    id: 20675, section: "English",
    text: "Fill in the blank: Constables in this station are used to ______ night shifts.",
    options: ["A) worked", "B) work", "C) working", "D) works"],
    answer: "C",
    explanation: "'Be used to' (accustomed to) is followed by a gerund."
  },
  {
    id: 20676, section: "English",
    text: "Choose the correct meaning of the idiom: To take to one's heels",
    options: ["A) To kick someone", "B) To walk slowly", "C) To run away", "D) To stand firm"],
    answer: "C",
    explanation: "To take to one's heels is to run away."
  },
  {
    id: 20677, section: "English",
    text: "Choose the correct meaning of the idiom: A wolf in sheep's clothing",
    options: ["A) A brave soldier", "B) A shepherd", "C) A shy person", "D) An enemy who pretends to be a friend"],
    answer: "D",
    explanation: "It describes someone who hides harmful intentions behind a friendly appearance."
  },
  {
    id: 20678, section: "English",
    text: "Choose the one word for: A list of items to be discussed at a meeting",
    options: ["A) Memorandum", "B) Agenda", "C) Minutes", "D) Syllabus"],
    answer: "B",
    explanation: "The agenda lists the items to be discussed. The minutes record what was discussed."
  },
  {
    id: 20679, section: "English",
    text: "Choose the correct passive form of: Did the police arrest him?",
    options: ["A) Did he arrested by the police?", "B) Had he been arrested by the police?", "C) Was he arrest by the police?", "D) Was he arrested by the police?"],
    answer: "D",
    explanation: "A simple past question becomes 'Was/Were + subject + V3?'."
  },
  {
    id: 20680, section: "English",
    text: "Choose the correct indirect speech: The constable said to me, \"Where are you going at this hour?\"",
    options: ["A) The constable asked me where I was going at that hour.", "B) The constable said to me where I am going at this hour.", "C) The constable asked me that where I was going at that hour.", "D) The constable asked me where was I going at that hour."],
    answer: "A",
    explanation: "A wh-question takes 'asked' + wh-word + subject + verb (no inversion). Present continuous becomes past continuous, and 'this' becomes 'that'."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: History of Goa
  // ════════════════════════════════════════════════════════════
  {
    id: 20681, section: "History of Goa",
    text: "In Puranic literature, the region of Goa is referred to as",
    options: ["A) Kanchi", "B) Gomantak (Gomanta)", "C) Kalinga", "D) Avanti"],
    answer: "B",
    explanation: "Goa is called Gomanta or Gomantak in Puranic texts, and the name 'Gomantak' is still widely used."
  },
  {
    id: 20682, section: "History of Goa",
    text: "According to popular legend, the land of Goa was reclaimed from the sea by",
    options: ["A) Parashurama, by shooting an arrow into the sea", "B) Lord Krishna", "C) Sage Agastya", "D) King Ashoka"],
    answer: "A",
    explanation: "The Parashurama legend says the sea retreated to where his arrow fell, creating the Konkan coast including Goa."
  },
  {
    id: 20683, section: "History of Goa",
    text: "The Silaharas of South Konkan, who ruled parts of Goa between the 8th and 11th centuries, were originally feudatories of the",
    options: ["A) Mauryas", "B) Vijayanagara kings", "C) Rashtrakutas", "D) Mughals"],
    answer: "C",
    explanation: "The Silaharas rose as Rashtrakuta feudatories before the Kadambas became dominant in Goa."
  },
  {
    id: 20684, section: "History of Goa",
    text: "The Kadambas of Goa ruled as feudatories of which dynasty?",
    options: ["A) The Chalukyas of Kalyani", "B) The Mughals", "C) The Pallavas", "D) The Cholas"],
    answer: "A",
    explanation: "The Goa Kadambas acknowledged the overlordship of the Western (Kalyani) Chalukyas."
  },
  {
    id: 20685, section: "History of Goa",
    text: "Under the Bahmani and Vijayanagara rulers, the port of Goa was especially important for the import of",
    options: ["A) European firearms", "B) Chinese silk", "C) Arabian and Persian horses", "D) African gold"],
    answer: "C",
    explanation: "Cavalry horses could not be bred well in the Deccan, so Goa was a key port for importing them from Arabia and Persia."
  },
  {
    id: 20686, section: "History of Goa",
    text: "In which year did Afonso de Albuquerque, the conqueror of Goa, die?",
    options: ["A) 1515", "B) 1510", "C) 1498", "D) 1530"],
    answer: "A",
    explanation: "Albuquerque died at sea off Goa in December 1515, shortly after being replaced as Governor."
  },
  {
    id: 20687, section: "History of Goa",
    text: "'Doutrina Christam' (1622), regarded as the first book printed in the Konkani language, was written by",
    options: ["A) Garcia da Orta", "B) St. Francis Xavier", "C) Abbe Faria", "D) Fr. Thomas Stephens"],
    answer: "D",
    explanation: "Fr. Thomas Stephens wrote this catechism in Roman-script Konkani. It was printed at Rachol in 1622."
  },
  {
    id: 20688, section: "History of Goa",
    text: "In 1684, the Portuguese Viceroy issued a decree that sought to",
    options: ["A) suppress the use of Konkani and enforce Portuguese", "B) grant Goans Portuguese citizenship", "C) shift the capital to Panaji", "D) abolish the Inquisition"],
    answer: "A",
    explanation: "The 1684 decree ordered people to stop using Konkani and adopt Portuguese within three years."
  },
  {
    id: 20689, section: "History of Goa",
    text: "In 1759, the Jesuits were expelled from Goa and other Portuguese territories by order of",
    options: ["A) Salazar", "B) the Marquis of Pombal", "C) Afonso de Albuquerque", "D) King Manuel I"],
    answer: "B",
    explanation: "The Marquis of Pombal, chief minister of Portugal, expelled the Society of Jesus from all Portuguese domains in 1759."
  },
  {
    id: 20690, section: "History of Goa",
    text: "The Idalcao Palace (Old Secretariat) in Panaji was originally built as a palace of",
    options: ["A) the Adil Shah", "B) the Portuguese Viceroys", "C) the Bhonsles of Sawantwadi", "D) the Kadamba kings"],
    answer: "A",
    explanation: "'Idalcao' is the Portuguese form of 'Adil Khan'. The building was originally the Adil Shah's summer palace."
  },
  {
    id: 20691, section: "History of Goa",
    text: "The Colonial Act of 1930, which curtailed the rights of people in Portuguese colonies including Goa, was introduced under",
    options: ["A) Afonso de Albuquerque", "B) King John III", "C) the Marquis of Pombal", "D) Antonio de Oliveira Salazar"],
    answer: "D",
    explanation: "Salazar, then Portugal's Minister of Colonies and later dictator, introduced the Acto Colonial in 1930."
  },
  {
    id: 20692, section: "History of Goa",
    text: "After his arrest in 1946 for taking part in the freedom movement, T. B. Cunha was",
    options: ["A) exiled to Mozambique", "B) executed by the Portuguese", "C) released after one day", "D) sentenced and deported to prison in Portugal"],
    answer: "D",
    explanation: "T. B. Cunha was court-martialled, sentenced to eight years and imprisoned in Portugal. He was released in 1950."
  },
  {
    id: 20693, section: "History of Goa",
    text: "The case 'Right of Passage over Indian Territory' (Portugal v. India), decided in 1960, was heard by the",
    options: ["A) International Court of Justice", "B) Supreme Court of India", "C) United Nations Security Council", "D) Permanent Court of Arbitration"],
    answer: "A",
    explanation: "Portugal asked the ICJ for a right of passage to Dadra and Nagar Haveli. In 1960 the court held that India could refuse passage to armed forces."
  },
  {
    id: 20694, section: "History of Goa",
    text: "During Operation Vijay, which paratroop formation, under Brigadier Sagat Singh, advanced rapidly and was among the first to reach Panaji?",
    options: ["A) 1st Armoured Division", "B) Madras Regiment", "C) 17th Infantry Division", "D) 50 Parachute Brigade"],
    answer: "D",
    explanation: "Brigadier Sagat Singh's 50 Parachute Brigade moved in from the north and east and reached Panaji ahead of schedule."
  },
  {
    id: 20695, section: "History of Goa",
    text: "During Operation Vijay, Portuguese positions at Diu were bombarded by the Indian Navy's cruiser",
    options: ["A) INS Delhi", "B) INS Vikrant", "C) INS Mysore", "D) INS Betwa"],
    answer: "A",
    explanation: "INS Delhi shelled Diu. INS Betwa engaged the Portuguese frigate at Mormugao."
  },
  {
    id: 20696, section: "History of Goa",
    text: "Goa was granted statehood in 1987 through which Constitutional Amendment Act?",
    options: ["A) 44th Amendment", "B) 12th Amendment", "C) 71st Amendment", "D) 56th Amendment"],
    answer: "D",
    explanation: "The 56th Amendment (1987) made special provision for the new State of Goa's Legislative Assembly. (The 12th Amendment incorporated Goa in 1962, and the 71st added Konkani to the Eighth Schedule.)"
  },
  {
    id: 20697, section: "History of Goa",
    text: "Manohar Parrikar, who served as Chief Minister of Goa and as Union Defence Minister, is often noted as the first",
    options: ["A) IIT graduate to become Chief Minister of an Indian state", "B) Chief Minister of the Union Territory of Goa, Daman and Diu", "C) Speaker of the Goa Legislative Assembly", "D) Goan to become Prime Minister"],
    answer: "A",
    explanation: "Parrikar graduated in metallurgical engineering from IIT Bombay. He was Defence Minister from 2014 to 2017."
  },
  {
    id: 20698, section: "History of Goa",
    text: "Since 2004, Goa has been the permanent venue of the",
    options: ["A) Hockey World Cup", "B) Republic Day parade", "C) International Film Festival of India (IFFI)", "D) National Games every year"],
    answer: "C",
    explanation: "IFFI has been held annually in Panaji since 2004."
  },
  {
    id: 20699, section: "History of Goa",
    text: "Who was the first Konkani writer to receive the Jnanpith Award?",
    options: ["A) Bakibab Borkar", "B) Ravindra Kelekar", "C) Damodar Mauzo", "D) Shenoi Goembab"],
    answer: "B",
    explanation: "Ravindra Kelekar received the Jnanpith Award for 2006. Damodar Mauzo became the second Konkani writer to receive it."
  },
  {
    id: 20700, section: "History of Goa",
    text: "Arrange the following events in chronological order:<br>1. Expulsion of the Jesuits from Goa<br>2. Death of Afonso de Albuquerque<br>3. Introduction of the Colonial Act<br>4. Printing of 'Doutrina Christam'",
    options: ["A) 4 → 2 → 1 → 3", "B) 2 → 4 → 3 → 1", "C) 2 → 4 → 1 → 3", "D) 2 → 1 → 4 → 3"],
    answer: "C",
    explanation: "Albuquerque's death (1515), Doutrina Christam (1622), expulsion of the Jesuits (1759), Colonial Act (1930)."
  }
];
