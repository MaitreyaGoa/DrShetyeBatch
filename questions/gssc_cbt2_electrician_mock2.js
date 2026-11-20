// gssc_cbt2_electrician_mock2.js – Dr Shetye Academic Programme
// CBT 2 Electrician Mock 2 · GSSC Advt. No. 2 of 2026 · CBT-II · Constable (Electrician)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 21401–21460
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Trade (Electrician) Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Saving electricity is often presented as a matter of switching off lights when leaving a room. That habit matters, but the larger savings usually lie elsewhere. Old fans, inefficient motors and outdated lighting can draw far more power than modern equipment doing the same work. Replacing an incandescent lamp with an LED that gives the same light, for instance, cuts consumption by a large margin, and the LED lasts many times longer.\n\nIn offices and public buildings, much electricity is wasted simply because nobody is responsible for it. Air-conditioners run in empty rooms, pumps operate longer than needed and equipment is left on standby overnight. A simple audit — recording what is used, where and when — often reveals savings that cost almost nothing to achieve.\n\nElectricians are well placed to lead this effort. They understand how loads behave, can recommend efficient equipment and can spot faults that waste power, such as loose connections that heat up. Every unit saved is a unit that need not be generated, which benefits both the consumer's bill and the environment."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 21401, section: "Reasoning",
    text: "Find the next term in the series: 2, 3, 5, 7, 11, 13, ?",
    options: ["A) 15", "B) 19", "C) 16", "D) 17"],
    answer: "D",
    explanation: "These are consecutive prime numbers, so the next is 17."
  },
  {
    id: 21402, section: "Reasoning",
    text: "Find the next group in the series: EJO, FKP, GLQ, ?",
    options: ["A) HMS", "B) HNR", "C) HMR", "D) IMR"],
    answer: "C",
    explanation: "Each letter moves one place forward in every group."
  },
  {
    id: 21403, section: "Reasoning",
    text: "In a certain code, CURRENT is written as TNERRUC. How will VOLTAGE be written in that code?",
    options: ["A) EGALTOV", "B) EGATLOV", "C) VOLTAGE", "D) EGATLVO"],
    answer: "B",
    explanation: "The word is written in reverse."
  },
  {
    id: 21404, section: "Reasoning",
    text: "Q is the mother of P. R is the brother of Q. S is the son of R. How is S related to P?",
    options: ["A) Cousin", "B) Uncle", "C) Nephew", "D) Brother"],
    answer: "A",
    explanation: "R is P's maternal uncle, so R's son S is P's cousin."
  },
  {
    id: 21405, section: "Reasoning",
    text: "A lamp glows only when switch A is ON and at least one of switches B and C is ON. In which of the following cases will the lamp glow?",
    options: ["A) A ON, B OFF, C ON", "B) A OFF, B ON, C ON", "C) A OFF, B OFF, C ON", "D) A ON, B OFF, C OFF"],
    answer: "A",
    explanation: "A must be ON, plus B or C. Only 'A ON, B OFF, C ON' meets both conditions."
  },
  {
    id: 21406, section: "Reasoning",
    text: "Starting from an electric pole, a lineman walks 12 m South and then turns left and walks 5 m. How far is he from the pole?",
    options: ["A) 7 m", "B) 15 m", "C) 17 m", "D) 13 m"],
    answer: "D",
    explanation: "√(12² + 5²) = 13 m."
  },
  {
    id: 21407, section: "Reasoning",
    text: "Statements: All bulbs are lamps. Some lamps are LEDs.<br>Conclusions:<br>I. Some bulbs are LEDs.<br>II. Some LEDs are lamps.",
    options: ["A) Only II follows", "B) Neither follows", "C) Both follow", "D) Only I follows"],
    answer: "A",
    explanation: "II is 'some lamps are LEDs' reversed. The bulbs may not overlap with the LEDs, so I does not follow."
  },
  {
    id: 21408, section: "Reasoning",
    text: "Ohm : Resistance :: Farad : ?",
    options: ["A) Current", "B) Inductance", "C) Capacitance", "D) Power"],
    answer: "C",
    explanation: "The ohm is the unit of resistance; the farad is the unit of capacitance."
  },
  {
    id: 21409, section: "Reasoning",
    text: "Find the odd one out: Ammeter, Voltmeter, Wattmeter, Transformer",
    options: ["A) Ammeter", "B) Transformer", "C) Voltmeter", "D) Wattmeter"],
    answer: "B",
    explanation: "The first three are measuring instruments. A transformer changes voltage levels."
  },
  {
    id: 21410, section: "Reasoning",
    text: "In a queue, A is 7th from the front and B is 11th from the back, with exactly 3 persons between them. If A is ahead of B, how many persons are in the queue?",
    options: ["A) 18", "B) 20", "C) 13", "D) 21"],
    answer: "D",
    explanation: "From the front: A (7) + 3 between + B + 10 behind B = 21."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 21411, section: "Numerical Ability",
    text: "A 60 W bulb is used for 5 hours a day for 30 days. How many units (kWh) of electricity does it consume?",
    options: ["A) 9 units", "B) 18 units", "C) 0.9 units", "D) 90 units"],
    answer: "A",
    explanation: "60 × 5 × 30 = 9,000 Wh = 9 kWh."
  },
  {
    id: 21412, section: "Numerical Ability",
    text: "At ₹6 per unit, what is the cost of running a 60 W bulb for 5 hours a day for 30 days?",
    options: ["A) ₹540", "B) ₹45", "C) ₹60", "D) ₹54"],
    answer: "D",
    explanation: "Energy = 9 units, so cost = 9 × 6 = ₹54."
  },
  {
    id: 21413, section: "Numerical Ability",
    text: "Wire costs ₹25 per metre. What is the cost of a 90 m roll after a discount of 8%?",
    options: ["A) ₹2,000", "B) ₹2,250", "C) ₹2,180", "D) ₹2,070"],
    answer: "D",
    explanation: "2250 × 0.92 = ₹2,070."
  },
  {
    id: 21414, section: "Numerical Ability",
    text: "How much energy does a 2 kW heater use in 45 minutes?",
    options: ["A) 0.75 kWh", "B) 90 kWh", "C) 1.5 kWh", "D) 2.25 kWh"],
    answer: "C",
    explanation: "2 kW × 0.75 h = 1.5 kWh."
  },
  {
    id: 21415, section: "Numerical Ability",
    text: "What is the average of the current readings 4.2 A, 4.5 A and 4.8 A?",
    options: ["A) 4.5 A", "B) 13.5 A", "C) 4.4 A", "D) 4.6 A"],
    answer: "A",
    explanation: "13.5/3 = 4.5 A."
  },
  {
    id: 21416, section: "Numerical Ability",
    text: "If the supply voltage of 230 V falls by 5%, what is the new voltage?",
    options: ["A) 225 V", "B) 218.5 V", "C) 211.5 V", "D) 220 V"],
    answer: "B",
    explanation: "230 × 0.95 = 218.5 V."
  },
  {
    id: 21417, section: "Numerical Ability",
    text: "A 24 m copper wire is cut into two pieces in the ratio 5 : 3. What is the length of the longer piece?",
    options: ["A) 9 m", "B) 16 m", "C) 12 m", "D) 15 m"],
    answer: "D",
    explanation: "24 × 5/8 = 15 m."
  },
  {
    id: 21418, section: "Numerical Ability",
    text: "Electrician A can wire a house in 8 days and B in 12 days. How long will they take working together?",
    options: ["A) 4 days", "B) 4.8 days", "C) 10 days", "D) 5 days"],
    answer: "B",
    explanation: "1/8 + 1/12 = 5/24, so 24/5 = 4.8 days."
  },
  {
    id: 21419, section: "Numerical Ability",
    text: "An inverter is sold for ₹1,320 at a profit of 10%. What was its cost price?",
    options: ["A) ₹1,188", "B) ₹1,250", "C) ₹1,452", "D) ₹1,200"],
    answer: "D",
    explanation: "1320/1.1 = ₹1,200."
  },
  {
    id: 21420, section: "Numerical Ability",
    text: "What is the area of a circle of radius 14 cm? (Take π = 22/7)",
    options: ["A) 616 cm²", "B) 88 cm²", "C) 308 cm²", "D) 1,232 cm²"],
    answer: "A",
    explanation: "22/7 × 14 × 14 = 616 cm²."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 21421, section: "English",
    passage: "passage_1",
    text: "What is the main idea of the passage?",
    options: ["A) Switching off lights is the only way to save electricity", "B) Large electricity savings come from efficient equipment and audits, and electricians can lead this effort", "C) Offices never waste electricity", "D) LED lamps waste more power than incandescent lamps"],
    answer: "B",
    explanation: "The passage moves from small habits to efficient equipment, audits and the electrician's role."
  },
  {
    id: 21422, section: "English",
    passage: "passage_1",
    text: "Which example of a large saving is given in the passage?",
    options: ["A) Leaving equipment on standby", "B) Using more air-conditioners", "C) Running pumps longer", "D) Replacing an incandescent lamp with an LED"],
    answer: "D",
    explanation: "Stated in the first paragraph."
  },
  {
    id: 21423, section: "English",
    passage: "passage_1",
    text: "According to the passage, why is much electricity wasted in offices?",
    options: ["A) Nobody is responsible for it", "B) Office equipment cannot be switched off", "C) Electricity is free in offices", "D) Audits are too expensive"],
    answer: "A",
    explanation: "Stated in the second paragraph."
  },
  {
    id: 21424, section: "English",
    passage: "passage_1",
    text: "What does the energy 'audit' described in the passage involve?",
    options: ["A) Replacing all wiring", "B) Installing new air-conditioners", "C) Recording what is used, where and when", "D) Doubling the electricity bill"],
    answer: "C",
    explanation: "Defined in the second paragraph."
  },
  {
    id: 21425, section: "English",
    passage: "passage_1",
    text: "Which of the following can be inferred from the passage?",
    options: ["A) LEDs have a shorter life than incandescent lamps", "B) Standby mode uses no electricity", "C) Loose connections waste power as heat", "D) Electricians increase power wastage"],
    answer: "C",
    explanation: "The passage mentions 'loose connections that heat up' as faults that waste power."
  },
  {
    id: 21426, section: "English",
    text: "Choose the word most similar in meaning to CONSUME.",
    options: ["A) Produce", "B) Create", "C) Save", "D) Use up"],
    answer: "D",
    explanation: "To consume is to use up."
  },
  {
    id: 21427, section: "English",
    text: "Choose the word most similar in meaning to FAULT.",
    options: ["A) Merit", "B) Repair", "C) Strength", "D) Defect"],
    answer: "D",
    explanation: "A fault is a defect."
  },
  {
    id: 21428, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to WASTE.",
    options: ["A) Lose", "B) Squander", "C) Save", "D) Spend"],
    answer: "C",
    explanation: "The opposite of waste is save."
  },
  {
    id: 21429, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to MODERN.",
    options: ["A) Outdated", "B) Current", "C) Recent", "D) New"],
    answer: "A",
    explanation: "The opposite of modern is outdated."
  },
  {
    id: 21430, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Him and his assistant (A) / installed the (B) / new meter (C) / yesterday. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "As subject, use 'He and his assistant'."
  },
  {
    id: 21431, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>He did not (A) / told me (B) / about the fault (C) / in the meter. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "After 'did not', use the base form: 'tell'."
  },
  {
    id: 21432, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The wires (A) / in this building (B) / is very old (C) / and unsafe. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "The subject 'wires' is plural: 'are very old'."
  },
  {
    id: 21433, section: "English",
    text: "Fill in the blank: The fan is not working; it needs ______.",
    options: ["A) repair", "B) to repair", "C) repaired", "D) repairing"],
    answer: "D",
    explanation: "'Need' + gerund has a passive meaning: 'it needs repairing' (= needs to be repaired)."
  },
  {
    id: 21434, section: "English",
    text: "Fill in the blank: Keep the switchboard away ______ water.",
    options: ["A) off", "B) by", "C) from", "D) of"],
    answer: "C",
    explanation: "'Away from' is the correct phrase."
  },
  {
    id: 21435, section: "English",
    text: "Fill in the blank: The power went off ______ the middle of the work.",
    options: ["A) in", "B) at", "C) on", "D) during of"],
    answer: "A",
    explanation: "'In the middle of' is the correct phrase."
  },
  {
    id: 21436, section: "English",
    text: "Choose the correct meaning of the idiom: To be in the dark",
    options: ["A) To be uninformed", "B) To be afraid", "C) To be asleep", "D) To be in danger"],
    answer: "A",
    explanation: "To be in the dark about something is not to know about it."
  },
  {
    id: 21437, section: "English",
    text: "Choose the correct meaning of the idiom: A live wire",
    options: ["A) A broken cable", "B) A dangerous criminal", "C) A quiet person", "D) A lively, energetic person"],
    answer: "D",
    explanation: "A live wire is an energetic, enthusiastic person."
  },
  {
    id: 21438, section: "English",
    text: "Choose the one word for: A person who designs buildings",
    options: ["A) Mason", "B) Engineer", "C) Architect", "D) Contractor"],
    answer: "C",
    explanation: "An architect designs buildings."
  },
  {
    id: 21439, section: "English",
    text: "Choose the correct passive form of: The electrician has replaced the fuse.",
    options: ["A) The fuse has replaced by the electrician.", "B) The fuse has been replaced by the electrician.", "C) The fuse was replaced by the electrician.", "D) The fuse had been replaced by the electrician."],
    answer: "B",
    explanation: "Present perfect active becomes 'has been + V3'."
  },
  {
    id: 21440, section: "English",
    text: "Choose the correct indirect speech: She asked me, \"Have you paid the electricity bill?\"",
    options: ["A) She told me that had I paid the electricity bill.", "B) She asked me if I have paid the electricity bill.", "C) She asked me if I had paid the electricity bill.", "D) She asked me have I paid the electricity bill."],
    answer: "C",
    explanation: "A yes/no question uses 'if/whether', no inversion, and present perfect becomes past perfect."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Trade (Electrician)
  // ════════════════════════════════════════════════════════════
  {
    id: 21441, section: "Trade (Electrician)",
    text: "If a copper wire is stretched uniformly to twice its original length, its resistance becomes",
    options: ["A) unchanged", "B) four times", "C) half", "D) twice"],
    answer: "B",
    explanation: "R = ρL/A. Doubling L halves A (the volume is constant), so R becomes 2 × 2 = 4 times."
  },
  {
    id: 21442, section: "Trade (Electrician)",
    text: "What is the total resistance of 2 Ω, 3 Ω and 5 Ω resistors connected in series?",
    options: ["A) 5 Ω", "B) 10 Ω", "C) 30 Ω", "D) 0.97 Ω"],
    answer: "B",
    explanation: "In series the resistances add: 2 + 3 + 5 = 10 Ω."
  },
  {
    id: 21443, section: "Trade (Electrician)",
    text: "A 4 Ω resistor is connected in series with a parallel combination of 6 Ω and 3 Ω. What is the total resistance?",
    options: ["A) 6 Ω", "B) 9 Ω", "C) 2 Ω", "D) 13 Ω"],
    answer: "A",
    explanation: "6 ∥ 3 = (6 × 3)/(6 + 3) = 2 Ω, and 4 + 2 = 6 Ω."
  },
  {
    id: 21444, section: "Trade (Electrician)",
    text: "Kirchhoff's Voltage Law states that in any closed loop of a circuit",
    options: ["A) the algebraic sum of all voltages is zero", "B) the power is constant", "C) the current is the same everywhere", "D) the resistance is zero"],
    answer: "A",
    explanation: "KVL: ΣV = 0 around any closed loop. KCL: ΣI = 0 at any junction."
  },
  {
    id: 21445, section: "Trade (Electrician)",
    text: "A current of 5 A flows through a 2 Ω resistor. What is the power dissipated as heat?",
    options: ["A) 20 W", "B) 50 W", "C) 25 W", "D) 10 W"],
    answer: "B",
    explanation: "P = I²R = 25 × 2 = 50 W."
  },
  {
    id: 21446, section: "Trade (Electrician)",
    text: "The filament of an incandescent lamp is made of tungsten because it has",
    options: ["A) a low melting point", "B) a very low resistance", "C) a very high melting point", "D) magnetic properties"],
    answer: "C",
    explanation: "Tungsten melts at about 3,400 °C, so it can glow white-hot without melting."
  },
  {
    id: 21447, section: "Trade (Electrician)",
    text: "Which of the following materials has a negative temperature coefficient of resistance (its resistance falls as temperature rises)?",
    options: ["A) Carbon", "B) Copper", "C) Aluminium", "D) Silver"],
    answer: "A",
    explanation: "Carbon and semiconductors have a negative temperature coefficient. Metals have a positive one."
  },
  {
    id: 21448, section: "Trade (Electrician)",
    text: "Which of the following is a good electrical insulator commonly used in electrical appliances?",
    options: ["A) Graphite", "B) Copper", "C) Mica", "D) Aluminium"],
    answer: "C",
    explanation: "Mica is an excellent insulator that withstands heat, and is used in irons and heaters."
  },
  {
    id: 21449, section: "Trade (Electrician)",
    text: "Two capacitors of 4 µF and 6 µF are connected in parallel. What is their total capacitance?",
    options: ["A) 2 µF", "B) 10 µF", "C) 24 µF", "D) 2.4 µF"],
    answer: "B",
    explanation: "In parallel, capacitances add: 4 + 6 = 10 µF. (In series the total would be 2.4 µF.)"
  },
  {
    id: 21450, section: "Trade (Electrician)",
    text: "The inductive reactance (Xₗ = 2πfL) of a coil",
    options: ["A) is independent of frequency", "B) is zero on AC", "C) decreases as the frequency increases", "D) increases as the frequency increases"],
    answer: "D",
    explanation: "Xₗ is directly proportional to frequency."
  },
  {
    id: 21451, section: "Trade (Electrician)",
    text: "The power factor of an inductive load, such as an induction motor installation, is usually improved by connecting",
    options: ["A) inductors in parallel", "B) resistors in series", "C) capacitors in parallel", "D) a fuse in series"],
    answer: "C",
    explanation: "Capacitors supply leading reactive power, which offsets the lagging current of inductive loads."
  },
  {
    id: 21452, section: "Trade (Electrician)",
    text: "A load takes 8 kW of real power and 10 kVA of apparent power. What is its power factor?",
    options: ["A) 0.6", "B) 0.8", "C) 0.08", "D) 1.25"],
    answer: "B",
    explanation: "Power factor = kW/kVA = 8/10 = 0.8."
  },
  {
    id: 21453, section: "Trade (Electrician)",
    text: "A transformer has 1,000 turns on its primary winding and steps 230 V down to 23 V. How many turns does the secondary winding have?",
    options: ["A) 230", "B) 10,000", "C) 10", "D) 100"],
    answer: "D",
    explanation: "V₁/V₂ = N₁/N₂, so N₂ = 1000 × 23/230 = 100 turns."
  },
  {
    id: 21454, section: "Trade (Electrician)",
    text: "A transformer operates at its maximum efficiency when",
    options: ["A) there is no load", "B) iron losses are maximum", "C) copper losses equal iron (core) losses", "D) copper losses are zero"],
    answer: "C",
    explanation: "Maximum efficiency occurs at the load where variable copper loss equals constant iron loss."
  },
  {
    id: 21455, section: "Trade (Electrician)",
    text: "The Buchholz relay is used to protect",
    options: ["A) oil-filled transformers against internal faults", "B) domestic fans", "C) fluorescent lamps", "D) lead-acid batteries"],
    answer: "A",
    explanation: "It is a gas-actuated relay that responds to gas produced by internal faults in oil-filled transformers."
  },
  {
    id: 21456, section: "Trade (Electrician)",
    text: "A DC series motor should never be started without a mechanical load because",
    options: ["A) it will draw no current", "B) it can run at dangerously high speed", "C) it will not start at all", "D) it will reverse direction"],
    answer: "B",
    explanation: "On no load the series motor's speed rises very high and can damage it."
  },
  {
    id: 21457, section: "Trade (Electrician)",
    text: "The single-phase motor of a ceiling fan is typically",
    options: ["A) a three-phase synchronous motor", "B) a DC series motor", "C) a capacitor-start capacitor-run (permanent split capacitor) induction motor", "D) a stepper motor"],
    answer: "C",
    explanation: "A capacitor produces the phase shift needed to create a rotating field."
  },
  {
    id: 21458, section: "Trade (Electrician)",
    text: "How can the direction of rotation of a three-phase induction motor be reversed?",
    options: ["A) By adding a capacitor", "B) By interchanging any two of the three supply phases", "C) By reversing the neutral", "D) By changing the frequency"],
    answer: "B",
    explanation: "Swapping any two phases reverses the phase sequence and the rotating field."
  },
  {
    id: 21459, section: "Trade (Electrician)",
    text: "A 4-pole, 50 Hz induction motor runs at 1,440 rpm. What is its slip?",
    options: ["A) 6%", "B) 1.5%", "C) 2%", "D) 4%"],
    answer: "D",
    explanation: "Ns = 120f/P = 1500 rpm. Slip = (1500 − 1440)/1500 = 4%."
  },
  {
    id: 21460, section: "Trade (Electrician)",
    text: "Which device converts DC into AC, as in a home power-backup system?",
    options: ["A) Transformer", "B) Inverter", "C) Diode", "D) Rectifier"],
    answer: "B",
    explanation: "An inverter converts DC (from a battery) into AC. A rectifier does the reverse."
  }
];
