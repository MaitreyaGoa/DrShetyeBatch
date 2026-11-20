// gssc_cbt2_electrician_mock1.js – Dr Shetye Academic Programme
// CBT 2 Electrician Mock 1 · GSSC Advt. No. 2 of 2026 · CBT-II · Constable (Electrician)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 20581–20640
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Trade (Electrician) Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Electricity is so much a part of daily life that we rarely think about its dangers until something goes wrong. Most electrical accidents in homes and workplaces have ordinary causes: worn insulation, overloaded sockets, makeshift joints wrapped in tape, and appliances used with wet hands. Because current cannot be seen, a fault may remain hidden for months before it causes a shock or a fire.\n\nProtective devices reduce the risk but do not remove it. A fuse or a miniature circuit breaker disconnects the supply when the current becomes too large, protecting the wiring from overheating. A residual current device goes further: it detects even a small leakage of current to earth, such as might flow through a person's body, and trips within a fraction of a second. Proper earthing ensures that if a metal body becomes live, the fault current has a safe path to the ground.\n\nYet the most important safety device is the trained electrician's habit of mind. He switches off and verifies that a circuit is dead before touching it, uses insulated tools, and never bypasses a protective device merely because it keeps tripping. A device that trips repeatedly is not a nuisance to be defeated; it is a warning that something is wrong."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 20581, section: "Reasoning",
    text: "Find the next term in the series: 1, 4, 13, 40, ?",
    options: ["A) 124", "B) 117", "C) 121", "D) 120"],
    answer: "C",
    explanation: "Each term is (previous × 3) + 1: 40 × 3 + 1 = 121."
  },
  {
    id: 20582, section: "Reasoning",
    text: "Find the next group of letters: AB, DE, GH, ?",
    options: ["A) KL", "B) JK", "C) IJ", "D) JL"],
    answer: "B",
    explanation: "Each pair starts 3 letters after the previous pair: A, D, G, J."
  },
  {
    id: 20583, section: "Reasoning",
    text: "In a certain code, SWITCH is written as HCTIWS. How will SOCKET be written in that code?",
    options: ["A) TEKOCS", "B) SOCKET", "C) TKECOS", "D) TEKCOS"],
    answer: "D",
    explanation: "The word is written in reverse order."
  },
  {
    id: 20584, section: "Reasoning",
    text: "A is the father of B. C is the mother of A. How is C related to B?",
    options: ["A) Aunt", "B) Grandmother", "C) Sister", "D) Mother"],
    answer: "B",
    explanation: "C is the mother of B's father, i.e. B's paternal grandmother."
  },
  {
    id: 20585, section: "Reasoning",
    text: "An electrician walks 4 km East and then 3 km North. How far is he from his starting point?",
    options: ["A) 7 km", "B) 6 km", "C) 5 km", "D) 1 km"],
    answer: "C",
    explanation: "Distance = √(4² + 3²) = 5 km."
  },
  {
    id: 20586, section: "Reasoning",
    text: "In a row of 25 workers, Amit is 10th from the left. What is his position from the right?",
    options: ["A) 17th", "B) 14th", "C) 16th", "D) 15th"],
    answer: "C",
    explanation: "Position from the right = 25 − 10 + 1 = 16."
  },
  {
    id: 20587, section: "Reasoning",
    text: "Statements: All wires are conductors. No conductor is an insulator.<br>Conclusions:<br>I. No wire is an insulator.<br>II. Some insulators are wires.",
    options: ["A) Both I and II follow", "B) Neither I nor II follows", "C) Only II follows", "D) Only I follows"],
    answer: "D",
    explanation: "Wires lie inside 'conductors', which excludes insulators, so I follows and II is false."
  },
  {
    id: 20588, section: "Reasoning",
    text: "Ammeter : Current :: Voltmeter : ?",
    options: ["A) Resistance", "B) Power", "C) Voltage", "D) Energy"],
    answer: "C",
    explanation: "An ammeter measures current; a voltmeter measures voltage."
  },
  {
    id: 20589, section: "Reasoning",
    text: "Find the odd one out: Copper, Aluminium, Silver, Rubber",
    options: ["A) Silver", "B) Aluminium", "C) Rubber", "D) Copper"],
    answer: "C",
    explanation: "Copper, aluminium and silver are good conductors of electricity. Rubber is an insulator."
  },
  {
    id: 20590, section: "Reasoning",
    text: "What is the angle between the hour hand and the minute hand of a clock at 4:20?",
    options: ["A) 10°", "B) 5°", "C) 0°", "D) 20°"],
    answer: "A",
    explanation: "|30 × 4 − 5.5 × 20| = |120 − 110| = 10°."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 20591, section: "Numerical Ability",
    text: "If 5 LED bulbs cost ₹450, how much will 8 such bulbs cost?",
    options: ["A) ₹640", "B) ₹800", "C) ₹680", "D) ₹720"],
    answer: "D",
    explanation: "One bulb costs ₹90, so 8 × 90 = ₹720."
  },
  {
    id: 20592, section: "Numerical Ability",
    text: "A 15 m wire is cut into pieces of 75 cm each. How many pieces are obtained?",
    options: ["A) 20", "B) 15", "C) 18", "D) 25"],
    answer: "A",
    explanation: "1500/75 = 20 pieces."
  },
  {
    id: 20593, section: "Numerical Ability",
    text: "A household uses 240 units of electricity at ₹4.50 per unit, plus a fixed charge of ₹60. What is the total bill?",
    options: ["A) ₹1,200", "B) ₹1,140", "C) ₹1,080", "D) ₹1,100"],
    answer: "B",
    explanation: "240 × 4.50 = 1,080, plus 60 = ₹1,140."
  },
  {
    id: 20594, section: "Numerical Ability",
    text: "A fan bought for ₹1,600 is sold at a profit of 12.5%. What is the selling price?",
    options: ["A) ₹1,750", "B) ₹1,812", "C) ₹1,700", "D) ₹1,800"],
    answer: "D",
    explanation: "1600 × 1.125 = ₹1,800."
  },
  {
    id: 20595, section: "Numerical Ability",
    text: "18 is what percentage of 72?",
    options: ["A) 18%", "B) 25%", "C) 30%", "D) 20%"],
    answer: "B",
    explanation: "18/72 × 100 = 25%."
  },
  {
    id: 20596, section: "Numerical Ability",
    text: "Four voltage readings are 220 V, 225 V, 230 V and 229 V. What is their average?",
    options: ["A) 226 V", "B) 228 V", "C) 227 V", "D) 225 V"],
    answer: "A",
    explanation: "Sum = 904, and 904/4 = 226 V."
  },
  {
    id: 20597, section: "Numerical Ability",
    text: "₹900 is divided between two workers in the ratio 4 : 5. What is the larger share?",
    options: ["A) ₹400", "B) ₹450", "C) ₹540", "D) ₹500"],
    answer: "D",
    explanation: "900 × 5/9 = ₹500."
  },
  {
    id: 20598, section: "Numerical Ability",
    text: "An electrician can wire a house in 6 days and his helper in 12 days. In how many days can they do it together?",
    options: ["A) 5 days", "B) 4 days", "C) 9 days", "D) 3 days"],
    answer: "B",
    explanation: "1/6 + 1/12 = 1/4, so they take 4 days."
  },
  {
    id: 20599, section: "Numerical Ability",
    text: "What is the simple interest on ₹5,000 at 6% per annum for 3 years?",
    options: ["A) ₹800", "B) ₹900", "C) ₹1,000", "D) ₹600"],
    answer: "B",
    explanation: "5000 × 6 × 3/100 = ₹900."
  },
  {
    id: 20600, section: "Numerical Ability",
    text: "A room is 5 m long and 4 m wide. What is the cost of flooring it at ₹250 per m²?",
    options: ["A) ₹5,000", "B) ₹4,500", "C) ₹5,500", "D) ₹2,250"],
    answer: "A",
    explanation: "Area = 20 m², and 20 × 250 = ₹5,000."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 20601, section: "English",
    passage: "passage_1",
    text: "What is the main idea of the passage?",
    options: ["A) Only residual current devices can prevent accidents", "B) Electrical safety depends on protective devices and, above all, on the disciplined habits of the electrician", "C) Fuses are no longer needed in modern wiring", "D) Electricity is too dangerous to use at home"],
    answer: "B",
    explanation: "Devices reduce risk, but the 'most important safety device' is the electrician's habit of mind."
  },
  {
    id: 20602, section: "English",
    passage: "passage_1",
    text: "According to the passage, how does a residual current device differ from a fuse or MCB?",
    options: ["A) It increases the voltage", "B) It detects even a small leakage of current to earth", "C) It works only on DC", "D) It protects only against overloads"],
    answer: "B",
    explanation: "Stated in the second paragraph."
  },
  {
    id: 20603, section: "English",
    passage: "passage_1",
    text: "According to the passage, what is the purpose of proper earthing?",
    options: ["A) To make appliances work faster", "B) To reduce the electricity bill", "C) To increase the supply voltage", "D) To give fault current a safe path to the ground if a metal body becomes live"],
    answer: "D",
    explanation: "Stated in the second paragraph."
  },
  {
    id: 20604, section: "English",
    passage: "passage_1",
    text: "What does the author say about a protective device that keeps tripping?",
    options: ["A) It is faulty and should be removed", "B) It should be bypassed", "C) It is a warning that something is wrong and should be investigated", "D) It is a minor nuisance"],
    answer: "C",
    explanation: "'It is a warning that something is wrong.'"
  },
  {
    id: 20605, section: "English",
    passage: "passage_1",
    text: "The word 'makeshift', as used in the passage, means",
    options: ["A) expensive", "B) permanent and strong", "C) temporary and improvised", "D) factory-made"],
    answer: "C",
    explanation: "Makeshift means a temporary substitute, often of poor quality."
  },
  {
    id: 20606, section: "English",
    text: "Choose the word most similar in meaning to HAZARDOUS.",
    options: ["A) Safe", "B) Useful", "C) Simple", "D) Dangerous"],
    answer: "D",
    explanation: "Hazardous means risky or dangerous."
  },
  {
    id: 20607, section: "English",
    text: "Choose the word most similar in meaning to ACCURATE.",
    options: ["A) Wrong", "B) Rough", "C) Precise", "D) Doubtful"],
    answer: "C",
    explanation: "Accurate means correct in all details; precise."
  },
  {
    id: 20608, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to VISIBLE.",
    options: ["A) Obvious", "B) Invisible", "C) Clear", "D) Bright"],
    answer: "B",
    explanation: "The opposite of visible is invisible."
  },
  {
    id: 20609, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to STRENGTHEN.",
    options: ["A) Fortify", "B) Weaken", "C) Support", "D) Reinforce"],
    answer: "B",
    explanation: "To strengthen is to make stronger; its opposite is weaken."
  },
  {
    id: 20610, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>He has went (A) / to the market (B) / to buy (C) / some wires. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "The present perfect uses the past participle: 'has gone'."
  },
  {
    id: 20611, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Neither of the two switches (A) / are working (B) / properly (C) / today. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "'Neither of' takes a singular verb: 'is working'."
  },
  {
    id: 20612, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The electrician (A) / fixed the fan (B) / quick and (C) / left. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "An adverb is needed to modify the verb 'fixed': 'quickly'."
  },
  {
    id: 20613, section: "English",
    text: "Fill in the blank: Copper is a good conductor ______ electricity.",
    options: ["A) for", "B) with", "C) of", "D) to"],
    answer: "C",
    explanation: "The correct phrase is 'conductor of'."
  },
  {
    id: 20614, section: "English",
    text: "Fill in the blank: Switch off the main supply ______ you start the repair.",
    options: ["A) before", "B) until", "C) after", "D) while"],
    answer: "A",
    explanation: "Safety requires switching off before work begins."
  },
  {
    id: 20615, section: "English",
    text: "Fill in the blank: The lights ______ when the fuse blew.",
    options: ["A) took off", "B) set off", "C) put off", "D) went off"],
    answer: "D",
    explanation: "'Go off' means to stop working (of lights or power)."
  },
  {
    id: 20616, section: "English",
    text: "Choose the correct meaning of the idiom: To burn the candle at both ends",
    options: ["A) To waste electricity", "B) To overwork oneself by doing too much", "C) To be very careless", "D) To light a room brightly"],
    answer: "B",
    explanation: "It means exhausting oneself by working very hard or keeping late hours."
  },
  {
    id: 20617, section: "English",
    text: "Choose the correct meaning of the idiom: In black and white",
    options: ["A) In a confused way", "B) In writing", "C) Without colour", "D) In secret"],
    answer: "B",
    explanation: "Having something in black and white means having it in writing."
  },
  {
    id: 20618, section: "English",
    text: "Choose the one word for: A worker skilled in a particular craft or trade",
    options: ["A) Amateur", "B) Apprentice", "C) Novice", "D) Artisan"],
    answer: "D",
    explanation: "An artisan is a skilled craftsperson. An amateur is a non-professional, a novice a beginner, and an apprentice a learner."
  },
  {
    id: 20619, section: "English",
    text: "Choose the correct passive form of: Someone switched off the lights.",
    options: ["A) The lights were switched off.", "B) The lights had switched off.", "C) The lights are switched off.", "D) The lights was switched off."],
    answer: "A",
    explanation: "Simple past active with a plural object becomes 'were + V3'. The indefinite agent is dropped."
  },
  {
    id: 20620, section: "English",
    text: "Choose the correct indirect speech: He said, \"The power will return at six.\"",
    options: ["A) He told that the power would return at six.", "B) He said that the power returns at six.", "C) He said that the power will return at six.", "D) He said that the power would return at six."],
    answer: "D",
    explanation: "'Will' becomes 'would' after a past reporting verb."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Trade (Electrician)
  // ════════════════════════════════════════════════════════════
  {
    id: 20621, section: "Trade (Electrician)",
    text: "A potential difference of 12 V is applied across a resistance of 4 Ω. What current flows?",
    options: ["A) 3 A", "B) 0.33 A", "C) 16 A", "D) 48 A"],
    answer: "A",
    explanation: "By Ohm's law, I = V/R = 12/4 = 3 A."
  },
  {
    id: 20622, section: "Trade (Electrician)",
    text: "What is the equivalent resistance of three 6 Ω resistors connected in parallel?",
    options: ["A) 3 Ω", "B) 6 Ω", "C) 2 Ω", "D) 18 Ω"],
    answer: "C",
    explanation: "For n equal resistors in parallel, R = 6/3 = 2 Ω."
  },
  {
    id: 20623, section: "Trade (Electrician)",
    text: "An appliance connected to a 230 V supply draws a current of 5 A. What is its power?",
    options: ["A) 1,150 W", "B) 46 W", "C) 235 W", "D) 1,050 W"],
    answer: "A",
    explanation: "P = V × I = 230 × 5 = 1,150 W."
  },
  {
    id: 20624, section: "Trade (Electrician)",
    text: "1 kilowatt-hour (one 'unit' of electrical energy) is equal to",
    options: ["A) 3.6 × 10⁶ joules", "B) 3,600 joules", "C) 1,000 joules", "D) 36 × 10⁶ joules"],
    answer: "A",
    explanation: "1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J."
  },
  {
    id: 20625, section: "Trade (Electrician)",
    text: "A 100 W lamp is used for 10 hours. How many units of electricity does it consume?",
    options: ["A) 10 units", "B) 0.1 unit", "C) 100 units", "D) 1 unit"],
    answer: "D",
    explanation: "100 W × 10 h = 1000 Wh = 1 kWh = 1 unit."
  },
  {
    id: 20626, section: "Trade (Electrician)",
    text: "What is the frequency of the AC mains supply in India?",
    options: ["A) 50 Hz", "B) 100 Hz", "C) 25 Hz", "D) 60 Hz"],
    answer: "A",
    explanation: "India uses 50 Hz (some countries, such as the USA, use 60 Hz)."
  },
  {
    id: 20627, section: "Trade (Electrician)",
    text: "The domestic supply voltage of 230 V is an RMS value. What is its approximate peak value?",
    options: ["A) 163 V", "B) 325 V", "C) 230 V", "D) 400 V"],
    answer: "B",
    explanation: "Peak = RMS × √2 = 230 × 1.414 ≈ 325 V."
  },
  {
    id: 20628, section: "Trade (Electrician)",
    text: "In a three-phase star-connected supply with a phase voltage of 230 V, the line voltage is approximately",
    options: ["A) 400 V", "B) 690 V", "C) 460 V", "D) 230 V"],
    answer: "A",
    explanation: "Line voltage = √3 × phase voltage = 1.732 × 230 ≈ 400 V (often quoted as 415 V)."
  },
  {
    id: 20629, section: "Trade (Electrician)",
    text: "A transformer works on the principle of",
    options: ["A) mutual induction, and therefore does not work on DC", "B) self-induction, and works on both AC and DC", "C) the Hall effect", "D) electrostatic induction"],
    answer: "A",
    explanation: "A changing current in the primary induces an EMF in the secondary. Steady DC produces no changing flux."
  },
  {
    id: 20630, section: "Trade (Electrician)",
    text: "The core of a transformer is made of thin laminated sheets mainly to reduce",
    options: ["A) copper losses", "B) the output voltage", "C) the turns ratio", "D) eddy current losses"],
    answer: "D",
    explanation: "Insulated laminations of silicon steel limit circulating eddy currents in the core."
  },
  {
    id: 20631, section: "Trade (Electrician)",
    text: "What is the synchronous speed of a 4-pole induction motor on a 50 Hz supply?",
    options: ["A) 750 rpm", "B) 3,000 rpm", "C) 1,000 rpm", "D) 1,500 rpm"],
    answer: "D",
    explanation: "Ns = 120f/P = 120 × 50/4 = 1,500 rpm."
  },
  {
    id: 20632, section: "Trade (Electrician)",
    text: "A star–delta starter is used with three-phase induction motors to",
    options: ["A) reverse the direction of rotation", "B) increase the starting torque greatly", "C) reduce the starting current", "D) change the supply frequency"],
    answer: "C",
    explanation: "Starting in star applies voltage/√3 per phase, cutting the starting current to one-third of the direct-on-line value."
  },
  {
    id: 20633, section: "Trade (Electrician)",
    text: "The direction of force on a current-carrying conductor in a magnetic field, as in an electric motor, is given by",
    options: ["A) Ohm's law", "B) Fleming's right-hand rule", "C) Fleming's left-hand rule", "D) Lenz's law"],
    answer: "C",
    explanation: "The left-hand rule is used for motors and the right-hand rule for generators."
  },
  {
    id: 20634, section: "Trade (Electrician)",
    text: "Fuse wire is usually made of an alloy of tin and lead because it has",
    options: ["A) a low melting point", "B) a high melting point", "C) a very high resistance", "D) high strength"],
    answer: "A",
    explanation: "A fuse must melt quickly when excess current heats it."
  },
  {
    id: 20635, section: "Trade (Electrician)",
    text: "For protection of human life against electric shock, a residual current circuit breaker (RCCB) is commonly rated to trip at a leakage current of",
    options: ["A) 300 mA", "B) 30 A", "C) 3 A", "D) 30 mA"],
    answer: "D",
    explanation: "A 30 mA RCCB is the usual rating for personal protection. Higher ratings are used for fire protection."
  },
  {
    id: 20636, section: "Trade (Electrician)",
    text: "Which instrument is used to measure the insulation resistance of wiring and cables?",
    options: ["A) Energy meter", "B) Megger", "C) Wattmeter", "D) Ammeter"],
    answer: "B",
    explanation: "A megger (insulation tester) applies a high DC voltage and reads resistance in megohms."
  },
  {
    id: 20637, section: "Trade (Electrician)",
    text: "How is an ammeter connected in a circuit?",
    options: ["A) In parallel with the load", "B) Between phase and earth", "C) In series with the load", "D) Across the supply terminals"],
    answer: "C",
    explanation: "An ammeter has very low resistance and must carry the load current, so it goes in series. A voltmeter goes in parallel."
  },
  {
    id: 20638, section: "Trade (Electrician)",
    text: "What is the nominal voltage of a single lead-acid cell?",
    options: ["A) 1.5 V", "B) 12 V", "C) 1.2 V", "D) 2 V"],
    answer: "D",
    explanation: "Each lead-acid cell gives about 2 V, so a 12 V battery has six cells."
  },
  {
    id: 20639, section: "Trade (Electrician)",
    text: "In staircase wiring, where one lamp is controlled from two different places, the switches used are",
    options: ["A) two 2-way switches", "B) two 1-way switches", "C) one intermediate switch only", "D) two push-button switches"],
    answer: "A",
    explanation: "Two-way switches at the top and bottom of the stairs let either one switch the lamp on or off."
  },
  {
    id: 20640, section: "Trade (Electrician)",
    text: "Which fire extinguisher is suitable for a fire in live electrical equipment?",
    options: ["A) Water", "B) Foam", "C) Carbon dioxide (CO₂)", "D) Sand mixed with water"],
    answer: "C",
    explanation: "CO₂ does not conduct electricity and leaves no residue. Water and foam conduct and can cause electrocution."
  }
];
