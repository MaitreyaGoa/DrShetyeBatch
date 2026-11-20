// gssc_cbt2_groupA_mock3.js – Dr Shetye Academic Programme
// CBT 2 Group A Mock 3 · GSSC Advt. No. 2 of 2026 · CBT-II · Platoon Commander (Male) · Police Constable (Armed Police) · Assistant Superintendent (Male) · Warden (Male) · Matron (Female) · Lascar (Male) · Escort (Female)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 20761–20820
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | History of Goa Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "For decades, women in police forces were confined largely to clerical work and to cases involving women and children. That picture has changed. Women officers now patrol streets, investigate complex crimes and command units, and their presence has altered how many citizens experience the police. Victims of sexual violence, in particular, are often more willing to report offences when they can speak to a woman officer, and the quality of the evidence gathered improves when the victim feels safe.\n\nThe change has not been easy. Women recruits have had to prove themselves in institutions designed around male routines, from duty rosters that ignore family responsibilities to facilities that were never built with them in mind. Some still face the assumption that they are suited only to 'soft' duties. Such attitudes waste talent and weaken the force.\n\nRepresentation, however, is a beginning rather than an end. What matters is not merely how many women wear the uniform but whether they are given the training, responsibility and respect that allow them to do the full range of police work. A force that reflects the society it serves, and that values every member on merit, is better equipped to earn that society's trust."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 20761, section: "Reasoning",
    text: "Find the next term in the series: 1, 5, 14, 30, 55, ?",
    options: ["A) 91", "B) 81", "C) 90", "D) 86"],
    answer: "A",
    explanation: "The terms are running sums of squares: 1, 1+4, 1+4+9, …; the next is 55 + 6² = 91."
  },
  {
    id: 20762, section: "Reasoning",
    text: "Find the next letter in the series: A, C, F, H, K, M, ?",
    options: ["A) N", "B) O", "C) P", "D) Q"],
    answer: "C",
    explanation: "The steps alternate +2, +3: M + 3 = P."
  },
  {
    id: 20763, section: "Reasoning",
    text: "In a certain code, WARDEN is written as AWDRNE. How will MATRON be written in that code?",
    options: ["A) AMRTON", "B) AMRTNO", "C) MARTNO", "D) AMTRNO"],
    answer: "B",
    explanation: "Each adjacent pair of letters is swapped: WA→AW, RD→DR, EN→NE. So MA→AM, TR→RT, ON→NO, giving AMRTNO."
  },
  {
    id: 20764, section: "Reasoning",
    text: "A woman introduces a man as 'the son of the brother of my mother'. How is the man related to the woman?",
    options: ["A) Nephew", "B) Cousin", "C) Uncle", "D) Brother"],
    answer: "B",
    explanation: "Her mother's brother is her maternal uncle, and his son is her cousin."
  },
  {
    id: 20765, section: "Reasoning",
    text: "Six persons J, K, L, M, N and O sit around a circular table facing the centre. K sits second to the left of J. M sits immediately to the right of K. L is not an immediate neighbour of J or K. O is not an immediate neighbour of J. Who sits opposite M?",
    options: ["A) J", "B) O", "C) N", "D) L"],
    answer: "D",
    explanation: "With J at seat 0 and seats numbered clockwise (left = clockwise for people facing the centre), K = 2 and M = 1. L must avoid seats next to J (1, 5) and next to K (1, 3), so L = 4. O cannot be next to J, so O = 3 and N = 5. Opposite M (seat 1) is seat 4, which is L."
  },
  {
    id: 20766, section: "Reasoning",
    text: "In a test, P scored more than Q but less than R. S scored less than Q. T scored more than R. Who scored the third highest marks?",
    options: ["A) Q", "B) R", "C) T", "D) P"],
    answer: "D",
    explanation: "The order is T &gt; R &gt; P &gt; Q &gt; S, so P is third."
  },
  {
    id: 20767, section: "Reasoning",
    text: "Statements: Only a few guards are drivers. All drivers are trained. No trained person is lazy.<br>Conclusions:<br>I. Some guards are not drivers.<br>II. Some guards are not lazy.<br>III. No driver is lazy.",
    options: ["A) Only III follows", "B) Only I and III follow", "C) All of I, II and III follow", "D) Only II and III follow"],
    answer: "C",
    explanation: "'Only a few guards are drivers' means some guards are drivers and some are not, so I follows. The guards who are drivers are trained, so not lazy (II follows). All drivers are trained, so no driver is lazy (III follows)."
  },
  {
    id: 20768, section: "Reasoning",
    text: "Given that P &gt; Q ≥ R, S &lt; R and T ≥ P, which of the following is definitely true?",
    options: ["A) T &gt; S", "B) R &gt; P", "C) Q &gt; T", "D) S ≥ Q"],
    answer: "A",
    explanation: "T ≥ P &gt; Q ≥ R &gt; S, so T &gt; S. Each of the others contradicts the chain."
  },
  {
    id: 20769, section: "Reasoning",
    text: "Arrange the following words in dictionary order:<br>1. Warden 2. Warrant 3. Wander 4. Warder 5. Ward",
    options: ["A) 3, 1, 5, 4, 2", "B) 3, 5, 4, 1, 2", "C) 5, 3, 1, 4, 2", "D) 3, 5, 1, 4, 2"],
    answer: "D",
    explanation: "Wander (wan-) comes first, then Ward, Warden, Warder (n before r) and Warrant."
  },
  {
    id: 20770, section: "Reasoning",
    text: "Statement: 'Visitors are requested to deposit their mobile phones at the gate before entering the jail premises.'<br>Assumptions:<br>I. Mobile phones may be misused inside the jail.<br>II. Most visitors will follow the request.",
    options: ["A) Neither I nor II is implicit", "B) Both I and II are implicit", "C) Only II is implicit", "D) Only I is implicit"],
    answer: "B",
    explanation: "The rule assumes phones could be misused inside (I), and a request is made only if it is expected to be followed (II)."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 20771, section: "Numerical Ability",
    text: "If the numerator of a fraction is increased by 25% and its denominator is decreased by 20%, the new fraction is 5/4. What was the original fraction?",
    options: ["A) 5/4", "B) 2/3", "C) 4/5", "D) 3/4"],
    answer: "C",
    explanation: "New = x × 1.25/0.8 = 1.5625x = 5/4, so x = 0.8 = 4/5."
  },
  {
    id: 20772, section: "Numerical Ability",
    text: "A sells an article to B at a profit of 20%, and B sells it to C at a loss of 10%. If C pays ₹5,400, what did the article cost A?",
    options: ["A) ₹5,000", "B) ₹5,200", "C) ₹5,500", "D) ₹4,800"],
    answer: "A",
    explanation: "A's CP × 1.2 × 0.9 = 5400, so A's CP = 5400/1.08 = ₹5,000."
  },
  {
    id: 20773, section: "Numerical Ability",
    text: "Two trains 150 m and 100 m long run on parallel tracks in the same direction at 72 km/h and 54 km/h. How long does the faster train take to cross the slower one?",
    options: ["A) 10 seconds", "B) 50 seconds", "C) 25 seconds", "D) 40 seconds"],
    answer: "B",
    explanation: "Relative speed = 18 km/h = 5 m/s. Total length 250 m, so 250/5 = 50 s."
  },
  {
    id: 20774, section: "Numerical Ability",
    text: "Pipe A can fill a tank in 4 hours and pipe B can empty it in 6 hours. They are opened alternately for one hour each, starting with A. After how many hours will the empty tank be full?",
    options: ["A) 19 hours", "B) 17 hours", "C) 24 hours", "D) 20 hours"],
    answer: "A",
    explanation: "Each 2-hour cycle adds 1/4 − 1/6 = 1/12. After 9 cycles (18 h) the tank is 3/4 full. In the 19th hour, A adds 1/4 and fills it."
  },
  {
    id: 20775, section: "Numerical Ability",
    text: "A sum of money doubles itself in 5 years at compound interest. In how many years will it become eight times itself?",
    options: ["A) 20 years", "B) 10 years", "C) 15 years", "D) 40 years"],
    answer: "C",
    explanation: "8 = 2³, so it takes three doubling periods: 3 × 5 = 15 years."
  },
  {
    id: 20776, section: "Numerical Ability",
    text: "Milk and water are in the ratio 5 : 2 in one vessel and 8 : 5 in another. In what ratio should the contents be mixed to get a mixture with milk and water in the ratio 9 : 4?",
    options: ["A) 2 : 7", "B) 7 : 2", "C) 5 : 2", "D) 3 : 1"],
    answer: "B",
    explanation: "Milk fractions are 5/7, 8/13 and target 9/13. Alligation: (9/13 − 8/13) : (5/7 − 9/13) = 1/13 : 2/91 = 7 : 2."
  },
  {
    id: 20777, section: "Numerical Ability",
    text: "The average of 20 numbers is 40. Each number is multiplied by 3 and then 5 is subtracted from each. What is the new average?",
    options: ["A) 120", "B) 125", "C) 115", "D) 35"],
    answer: "C",
    explanation: "New average = 3 × 40 − 5 = 115."
  },
  {
    id: 20778, section: "Numerical Ability",
    text: "How many three-digit numbers are divisible by 7?",
    options: ["A) 127", "B) 129", "C) 128", "D) 142"],
    answer: "C",
    explanation: "The first is 105 and the last 994: (994 − 105)/7 + 1 = 128."
  },
  {
    id: 20779, section: "Numerical Ability",
    text: "The radius of a cylinder is doubled and its height is halved. Its volume becomes",
    options: ["A) four times the original", "B) twice the original", "C) the same", "D) half the original"],
    answer: "B",
    explanation: "V = πr²h becomes π(2r)²(h/2) = 2πr²h."
  },
  {
    id: 20780, section: "Numerical Ability",
    text: "The difference between compound interest and simple interest on a sum for 2 years at 10% per annum is ₹50. What is the sum?",
    options: ["A) ₹5,000", "B) ₹4,000", "C) ₹5,500", "D) ₹10,000"],
    answer: "A",
    explanation: "For 2 years, CI − SI = P(r/100)² = 0.01P = 50, so P = ₹5,000."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 20781, section: "English",
    passage: "passage_1",
    text: "Which of the following best expresses the main idea of the passage?",
    options: ["A) The police force should reduce its number of women officers", "B) Women's growing role strengthens policing, but true progress needs equal opportunity, not just numbers", "C) Women should do only clerical work in the police", "D) Women officers should handle only cases involving women"],
    answer: "B",
    explanation: "The passage welcomes the change but stresses training, responsibility and respect over mere representation."
  },
  {
    id: 20782, section: "English",
    passage: "passage_1",
    text: "According to the passage, why are victims of sexual violence often more willing to report to a woman officer?",
    options: ["A) They feel safer", "B) Women officers have more power", "C) Women officers work longer hours", "D) Male officers are not allowed to record complaints"],
    answer: "A",
    explanation: "Reporting and evidence improve 'when the victim feels safe'."
  },
  {
    id: 20783, section: "English",
    passage: "passage_1",
    text: "Which of the following is mentioned as a difficulty faced by women recruits?",
    options: ["A) Too few cases to handle", "B) Lack of interest in police work", "C) Higher salaries than men", "D) Institutions designed around male routines"],
    answer: "D",
    explanation: "Stated in the second paragraph."
  },
  {
    id: 20784, section: "English",
    passage: "passage_1",
    text: "The sentence 'Representation, however, is a beginning rather than an end' means that",
    options: ["A) the police force has ended discrimination", "B) representation is unimportant", "C) having more women in uniform is not enough by itself", "D) women should stop joining the police"],
    answer: "C",
    explanation: "The author goes on to say training, responsibility and respect are what matter."
  },
  {
    id: 20785, section: "English",
    passage: "passage_1",
    text: "The word 'confined', as used in the passage, most nearly means",
    options: ["A) released", "B) promoted", "C) trained", "D) restricted"],
    answer: "D",
    explanation: "Women were restricted mainly to clerical work and certain kinds of cases."
  },
  {
    id: 20786, section: "English",
    text: "Choose the word most similar in meaning to MEAGRE.",
    options: ["A) Ample", "B) Heavy", "C) Rich", "D) Scanty"],
    answer: "D",
    explanation: "Meagre means lacking in quantity; scanty."
  },
  {
    id: 20787, section: "English",
    text: "Choose the word most similar in meaning to OBSTINATE.",
    options: ["A) Stubborn", "B) Obedient", "C) Gentle", "D) Flexible"],
    answer: "A",
    explanation: "Obstinate means stubbornly refusing to change."
  },
  {
    id: 20788, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to HUMBLE.",
    options: ["A) Arrogant", "B) Modest", "C) Simple", "D) Meek"],
    answer: "A",
    explanation: "Humble means modest; its opposite is arrogant."
  },
  {
    id: 20789, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to ASCEND.",
    options: ["A) Mount", "B) Climb", "C) Descend", "D) Rise"],
    answer: "C",
    explanation: "Ascend means go up; its opposite is descend."
  },
  {
    id: 20790, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Being a rainy day, (A) / the parade (B) / was cancelled (C) / by the officer. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "The participle phrase has no proper subject. Write 'It being a rainy day' or 'As it was a rainy day'."
  },
  {
    id: 20791, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>I prefer (A) / coffee than (B) / tea in (C) / the morning. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "'Prefer' takes 'to': 'I prefer coffee to tea'."
  },
  {
    id: 20792, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The matron as well as (A) / the wardens (B) / have been (C) / transferred. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "With 'as well as', the verb agrees with the first subject, 'the matron': 'has been transferred'."
  },
  {
    id: 20793, section: "English",
    text: "Fill in the blank: She was appointed ______ the post of Matron last year.",
    options: ["A) at", "B) to", "C) for", "D) on"],
    answer: "B",
    explanation: "One is appointed TO a post."
  },
  {
    id: 20794, section: "English",
    text: "Fill in the blank: The prisoners were made ______ their cells every morning.",
    options: ["A) cleaned", "B) cleaning", "C) clean", "D) to clean"],
    answer: "D",
    explanation: "Active: 'made them clean'. In the passive, 'to' returns: 'were made to clean'."
  },
  {
    id: 20795, section: "English",
    text: "Fill in the blank: He has not been keeping well ______ last week.",
    options: ["A) for", "B) from", "C) by", "D) since"],
    answer: "D",
    explanation: "'Since' marks the starting point of a period continuing to now."
  },
  {
    id: 20796, section: "English",
    text: "Choose the correct meaning of the idiom: To keep one's fingers crossed",
    options: ["A) To refuse help", "B) To tell a lie", "C) To hope for a good outcome", "D) To be very angry"],
    answer: "C",
    explanation: "It means hoping that things will turn out well."
  },
  {
    id: 20797, section: "English",
    text: "Choose the correct meaning of the idiom: To be on cloud nine",
    options: ["A) To be in danger", "B) To be very tired", "C) To be confused", "D) To be extremely happy"],
    answer: "D",
    explanation: "To be on cloud nine is to be extremely happy."
  },
  {
    id: 20798, section: "English",
    text: "Choose the one word for: A home for children whose parents are dead",
    options: ["A) Orphanage", "B) Hospice", "C) Asylum", "D) Dormitory"],
    answer: "A",
    explanation: "An orphanage cares for orphans. A hospice cares for the terminally ill."
  },
  {
    id: 20799, section: "English",
    text: "Choose the correctly spelt word.",
    options: ["A) Leiutenant", "B) Lieutanant", "C) Lieutenent", "D) Lieutenant"],
    answer: "D",
    explanation: "The correct spelling is L-I-E-U-T-E-N-A-N-T."
  },
  {
    id: 20800, section: "English",
    text: "Arrange the sentences in a logical order:<br>P. The warden noticed an inmate behaving unusually during the evening count.<br>Q. He informed the jail superintendent and the medical officer.<br>R. The inmate was found to be ill and was treated in time.<br>S. A medical team examined the inmate within minutes.",
    options: ["A) PQRS", "B) PSQR", "C) QPSR", "D) PQSR"],
    answer: "D",
    explanation: "P (noticed) → Q (informed) → S (examined) → R (treated)."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: History of Goa
  // ════════════════════════════════════════════════════════════
  {
    id: 20801, section: "History of Goa",
    text: "Apart from Devanagari, Konkani is widely written in Goa, especially by the Catholic community, in which script?",
    options: ["A) Malayalam", "B) Roman", "C) Kannada", "D) Persian"],
    answer: "B",
    explanation: "Romi (Roman-script) Konkani has a long tradition in Goa through church literature, newspapers and tiatr. Devanagari is the official script."
  },
  {
    id: 20802, section: "History of Goa",
    text: "The 'Mando', a much-loved musical form of Goa, is",
    options: ["A) a type of fishing boat", "B) a song-and-dance form of the Goan Catholic community, blending Indian and Western elements", "C) a temple ritual of the Kadamba period", "D) a martial art of the Ranes"],
    answer: "B",
    explanation: "The Mando, sung in Konkani, developed in the 19th and 20th centuries and is performed at social gatherings."
  },
  {
    id: 20803, section: "History of Goa",
    text: "'Dhalo' is a Goan folk dance traditionally performed by",
    options: ["A) men, during Shigmo", "B) fishermen, at sea", "C) priests, in temples", "D) women, in the month of Pausha"],
    answer: "D",
    explanation: "Village women perform the Dhalo in the open space (mand) on winter nights in the month of Pausha."
  },
  {
    id: 20804, section: "History of Goa",
    text: "During the feast of 'Sao Joao' (St. John the Baptist) on 24 June, young men in Goa traditionally",
    options: ["A) climb coconut trees", "B) race bullock carts", "C) jump into wells and ponds", "D) burn effigies"],
    answer: "C",
    explanation: "Sao Joao is a monsoon festival. Revellers wear crowns of leaves and jump into wells, celebrating the joy of John the Baptist."
  },
  {
    id: 20805, section: "History of Goa",
    text: "The Goa Carnival, held before Lent, was introduced during Portuguese rule and is presided over by",
    options: ["A) King Momo", "B) the Viceroy", "C) the Archbishop", "D) King Narkasur"],
    answer: "A",
    explanation: "King Momo, the carnival king, leads the parades and 'orders' everyone to make merry."
  },
  {
    id: 20806, section: "History of Goa",
    text: "The Church of Our Lady of the Immaculate Conception in Panaji is easily recognised by its",
    options: ["A) golden dome", "B) leaning bell tower", "C) zig-zag (criss-cross) staircase", "D) underground crypt"],
    answer: "C",
    explanation: "This landmark church in Panaji has a distinctive criss-cross staircase leading up to its facade."
  },
  {
    id: 20807, section: "History of Goa",
    text: "The lighthouse at Fort Aguada, among the oldest of its kind in Asia, was added in",
    options: ["A) 1612", "B) 1759", "C) 1961", "D) 1864"],
    answer: "D",
    explanation: "The fort was built in 1612. The lighthouse, once lit by oil lamps, was added in 1864."
  },
  {
    id: 20808, section: "History of Goa",
    text: "The railway line connecting Mormugao harbour with the interior of the Deccan was first opened in the 1880s by the",
    options: ["A) Great Indian Peninsula Railway", "B) Konkan Railway Corporation", "C) West of India Portuguese Railway", "D) South Indian Railway"],
    answer: "C",
    explanation: "The West of India Portuguese Railway opened the Mormugao line in 1888 to carry trade from the Deccan to the harbour."
  },
  {
    id: 20809, section: "History of Goa",
    text: "Mormugao became one of India's 'major ports' in the year",
    options: ["A) 1998", "B) 1987", "C) 1947", "D) 1963"],
    answer: "D",
    explanation: "After liberation, Mormugao was declared a major port in 1963. It later became a leading iron-ore export port."
  },
  {
    id: 20810, section: "History of Goa",
    text: "The National Institute of Oceanography (NIO), a CSIR laboratory, was set up in 1966 with its headquarters at",
    options: ["A) Kochi", "B) Dona Paula, Goa", "C) Visakhapatnam", "D) Chennai"],
    answer: "B",
    explanation: "NIO is headquartered at Dona Paula, Goa, with regional centres at Mumbai, Kochi and Visakhapatnam."
  },
  {
    id: 20811, section: "History of Goa",
    text: "Goa Shipyard Limited, a defence public sector undertaking that builds ships for the Navy and Coast Guard, is located at",
    options: ["A) Mapusa", "B) Panaji", "C) Vasco da Gama", "D) Margao"],
    answer: "C",
    explanation: "Goa Shipyard Ltd. at Vasco builds offshore patrol vessels and other ships."
  },
  {
    id: 20812, section: "History of Goa",
    text: "Which Konkani writer became the second Konkani author to receive the Jnanpith Award?",
    options: ["A) Ravindra Kelekar", "B) Damodar Mauzo", "C) Bakibab Borkar", "D) Shenoi Goembab"],
    answer: "B",
    explanation: "Damodar Mauzo, author of 'Karmelin', received the Jnanpith Award, after Ravindra Kelekar."
  },
  {
    id: 20813, section: "History of Goa",
    text: "The Kala Academy building at Campal, Panaji, was designed by the renowned architect",
    options: ["A) Charles Correa", "B) Le Corbusier", "C) B. V. Doshi", "D) Laurie Baker"],
    answer: "A",
    explanation: "Charles Correa, of Goan origin, designed the Kala Academy complex."
  },
  {
    id: 20814, section: "History of Goa",
    text: "Balkrishna Bhagwant 'Bakibab' Borkar is remembered as",
    options: ["A) a celebrated poet in Konkani and Marathi", "B) a freedom fighter who led armed raids", "C) a classical vocalist", "D) the first Chief Minister of Goa"],
    answer: "A",
    explanation: "Bakibab Borkar was a well-known poet. He received the Padma Shri."
  },
  {
    id: 20815, section: "History of Goa",
    text: "The memorial to the martyrs of Goa's freedom struggle stands at",
    options: ["A) Fort Aguada", "B) Mollem", "C) Colva beach", "D) Azad Maidan, Panaji"],
    answer: "D",
    explanation: "The Martyrs' Memorial at Azad Maidan in Panaji honours those who died in the liberation struggle."
  },
  {
    id: 20816, section: "History of Goa",
    text: "The open ground in Margao where Dr. Ram Manohar Lohia addressed the people on 18 June 1946 is now named",
    options: ["A) Lohia Maidan", "B) Kranti Maidan", "C) Gandhi Maidan", "D) Azad Maidan"],
    answer: "A",
    explanation: "Lohia Maidan in Margao commemorates his defiance of the Portuguese ban on public meetings."
  },
  {
    id: 20817, section: "History of Goa",
    text: "In the Opinion Poll of 1967, the people of Goa were asked to choose between",
    options: ["A) merger with Maharashtra and continuing as a separate Union Territory", "B) Portuguese rule and Indian rule", "C) independence and union with India", "D) statehood and merger with Karnataka"],
    answer: "A",
    explanation: "The choice was merger with Maharashtra or a separate identity as a UT. The people voted to remain separate."
  },
  {
    id: 20818, section: "History of Goa",
    text: "Which of the following was the earliest to be established in Goa?",
    options: ["A) Goa University", "B) Krishnadas Shama Goa State Central Library", "C) Kala Academy", "D) Goa Medical College (Escola Medico-Cirurgica)"],
    answer: "B",
    explanation: "Central Library (1832), Medical School (1842), Kala Academy (1970), Goa University (1985)."
  },
  {
    id: 20819, section: "History of Goa",
    text: "Arrange the following in chronological order:<br>1. Mormugao becomes a major port<br>2. Lighthouse added to Fort Aguada<br>3. Setting up of the National Institute of Oceanography<br>4. Opening of the West of India Portuguese Railway line to Mormugao",
    options: ["A) 2 → 1 → 4 → 3", "B) 2 → 4 → 1 → 3", "C) 2 → 4 → 3 → 1", "D) 4 → 2 → 1 → 3"],
    answer: "B",
    explanation: "Aguada lighthouse (1864), railway (1888), Mormugao major port (1963), NIO (1966)."
  },
  {
    id: 20820, section: "History of Goa",
    text: "The Indian forces in Operation Vijay were under the overall command of the GOC-in-C, Southern Command,",
    options: ["A) Field Marshal Sam Manekshaw", "B) Gen. K. M. Cariappa", "C) Lt. Gen. J. N. Chaudhuri", "D) Gen. K. S. Thimayya"],
    answer: "C",
    explanation: "Lt. Gen. J. N. Chaudhuri was in overall command. Maj. Gen. K. P. Candeth led the 17th Infantry Division."
  }
];
