// gssc_cbt2_electrician_mock3.js – Dr Shetye Academic Programme
// CBT 2 Electrician Mock 3 · GSSC Advt. No. 2 of 2026 · CBT-II · Constable (Electrician)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 21461–21520
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Trade (Electrician) Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Many electrical accidents happen not because workers do not know the rules but because, in a particular moment, they decide that the rules do not apply. The supply will only be off for a few minutes; the job is small; someone has assured them that the circuit is dead. Each shortcut feels reasonable at the time, and most of the time nothing goes wrong. That is exactly what makes such shortcuts dangerous: success breeds overconfidence.\n\nGood safety practice is designed to remove this element of judgment. Before work begins, the supply is isolated, the switch is locked in the off position and a tag is attached stating who is working on the circuit. The worker then tests the circuit himself to confirm that it is dead. No one else can restore the supply until the person who placed the lock removes it.\n\nSuch procedures may seem slow, but they protect not only the worker but also his colleagues. A culture in which every worker follows them, and in which anyone may stop a job that looks unsafe without fear of blame, prevents far more accidents than any warning poster."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 21461, section: "Reasoning",
    text: "Find the next term in the series: 2, 4, 12, 48, 240, ?",
    options: ["A) 960", "B) 1440", "C) 1680", "D) 1200"],
    answer: "B",
    explanation: "The multipliers are ×2, ×3, ×4, ×5, so the next is ×6: 240 × 6 = 1440."
  },
  {
    id: 21462, section: "Reasoning",
    text: "Find the next letter in the series: Y, U, Q, M, ?",
    options: ["A) I", "B) J", "C) H", "D) K"],
    answer: "A",
    explanation: "Each letter moves 4 places back: M − 4 = I."
  },
  {
    id: 21463, section: "Reasoning",
    text: "If FUSE is coded as 6-21-19-5, which word is coded as 20-1-16-5?",
    options: ["A) TAPE", "B) TAKE", "C) TUBE", "D) TYPE"],
    answer: "A",
    explanation: "T = 20, A = 1, P = 16, E = 5."
  },
  {
    id: 21464, section: "Reasoning",
    text: "Pointing to a man, a woman said, \"He is the only son of my mother's father.\" How is the man related to the woman?",
    options: ["A) Brother", "B) Maternal uncle", "C) Grandfather", "D) Father"],
    answer: "B",
    explanation: "The only son of her mother's father is her mother's brother, i.e. her maternal uncle."
  },
  {
    id: 21465, section: "Reasoning",
    text: "A lamp L glows when switch S1 is ON, or when both S2 and S3 are ON. In which of the following cases does the lamp NOT glow?",
    options: ["A) S1 ON, S2 OFF, S3 OFF", "B) S1 ON, S2 ON, S3 ON", "C) S1 OFF, S2 ON, S3 ON", "D) S1 OFF, S2 ON, S3 OFF"],
    answer: "D",
    explanation: "The lamp glows if S1 is ON, or if both S2 and S3 are ON. With S1 OFF and only S2 ON, neither condition is met."
  },
  {
    id: 21466, section: "Reasoning",
    text: "An electrician walks 10 m North, then 10 m East, then 20 m South, and then 10 m West. Where is he with respect to his starting point?",
    options: ["A) 10 m North", "B) 10 m South", "C) At the starting point", "D) 20 m South"],
    answer: "B",
    explanation: "(0,10) → (10,10) → (10,−10) → (0,−10). He is 10 m South of the start."
  },
  {
    id: 21467, section: "Reasoning",
    text: "Statements: No fuse is a switch. All switches are devices.<br>Conclusions:<br>I. Some devices are not fuses.<br>II. No device is a fuse.",
    options: ["A) Both follow", "B) Only II follows", "C) Only I follows", "D) Neither follows"],
    answer: "C",
    explanation: "The devices that are switches are not fuses, so I follows. II does not follow."
  },
  {
    id: 21468, section: "Reasoning",
    text: "What is the angle between the hour hand and the minute hand of a clock at 9:15?",
    options: ["A) 165°", "B) 180°", "C) 172.5°", "D) 187.5°"],
    answer: "C",
    explanation: "|30 × 9 − 5.5 × 15| = |270 − 82.5| = 187.5°. The smaller angle is 360 − 187.5 = 172.5°."
  },
  {
    id: 21469, section: "Reasoning",
    text: "Find the odd one out: Volt, Ampere, Ohm, Kilogram",
    options: ["A) Ohm", "B) Kilogram", "C) Ampere", "D) Volt"],
    answer: "B",
    explanation: "Volt, ampere and ohm are electrical units. The kilogram is a unit of mass."
  },
  {
    id: 21470, section: "Reasoning",
    text: "A is taller than B. C is shorter than B. D is taller than A. Who is the shortest?",
    options: ["A) A", "B) D", "C) B", "D) C"],
    answer: "D",
    explanation: "The order is D &gt; A &gt; B &gt; C, so C is the shortest."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 21471, section: "Numerical Ability",
    text: "An electricity meter reads 4,256 units at the start of a month and 4,481 at the end. How many units were consumed?",
    options: ["A) 215", "B) 235", "C) 8,737", "D) 225"],
    answer: "D",
    explanation: "4481 − 4256 = 225 units."
  },
  {
    id: 21472, section: "Numerical Ability",
    text: "Electricity is charged at ₹5 per unit for the first 100 units and ₹7 per unit after that. What is the bill for 225 units?",
    options: ["A) ₹1,475", "B) ₹1,575", "C) ₹1,375", "D) ₹1,125"],
    answer: "C",
    explanation: "100 × 5 + 125 × 7 = 500 + 875 = ₹1,375."
  },
  {
    id: 21473, section: "Numerical Ability",
    text: "Of 400 fuses tested, 3% are defective. How many are good?",
    options: ["A) 380", "B) 388", "C) 12", "D) 397"],
    answer: "B",
    explanation: "Defective = 12, so 388 are good."
  },
  {
    id: 21474, section: "Numerical Ability",
    text: "What is the simple interest on ₹12,000 at 8% per annum for 1½ years?",
    options: ["A) ₹1,440", "B) ₹960", "C) ₹1,800", "D) ₹1,200"],
    answer: "A",
    explanation: "12000 × 8 × 1.5/100 = ₹1,440."
  },
  {
    id: 21475, section: "Numerical Ability",
    text: "Two pieces of wire are in the ratio 7 : 9 and together measure 64 m. How long is the shorter piece?",
    options: ["A) 28 m", "B) 32 m", "C) 24 m", "D) 36 m"],
    answer: "A",
    explanation: "64 × 7/16 = 28 m."
  },
  {
    id: 21476, section: "Numerical Ability",
    text: "The average of five numbers is 48. When one number is removed, the average of the rest becomes 45. Which number was removed?",
    options: ["A) 57", "B) 45", "C) 48", "D) 60"],
    answer: "D",
    explanation: "240 − 4 × 45 = 240 − 180 = 60."
  },
  {
    id: 21477, section: "Numerical Ability",
    text: "A voltage tester bought for ₹800 is sold for ₹680. What is the loss percentage?",
    options: ["A) 18%", "B) 15%", "C) 20%", "D) 12%"],
    answer: "B",
    explanation: "Loss = 120, and 120/800 = 15%."
  },
  {
    id: 21478, section: "Numerical Ability",
    text: "A room measuring 6 m × 4.5 m needs a lighting load of 10 W per square metre. What total wattage is required?",
    options: ["A) 105 W", "B) 600 W", "C) 450 W", "D) 270 W"],
    answer: "D",
    explanation: "Area = 27 m², and 27 × 10 = 270 W."
  },
  {
    id: 21479, section: "Numerical Ability",
    text: "3 electricians wire 6 rooms in 4 days. How many rooms can 4 electricians wire in 6 days at the same rate?",
    options: ["A) 16", "B) 8", "C) 10", "D) 12"],
    answer: "D",
    explanation: "Each electrician wires 6/(3 × 4) = 0.5 room a day. 4 × 6 × 0.5 = 12 rooms."
  },
  {
    id: 21480, section: "Numerical Ability",
    text: "What is the square root of 1,764?",
    options: ["A) 48", "B) 38", "C) 42", "D) 44"],
    answer: "C",
    explanation: "42 × 42 = 1,764."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 21481, section: "English",
    passage: "passage_1",
    text: "What is the main idea of the passage?",
    options: ["A) Workers do not know the safety rules", "B) Safety procedures are too slow to be useful", "C) Warning posters are the best way to prevent accidents", "D) Electrical accidents often result from shortcuts, and strict procedures with a strong safety culture prevent them"],
    answer: "D",
    explanation: "The passage explains why shortcuts happen and how lock-out/tag-out procedures and a safety culture prevent accidents."
  },
  {
    id: 21482, section: "English",
    passage: "passage_1",
    text: "Why, according to the author, are shortcuts especially dangerous?",
    options: ["A) Success breeds overconfidence", "B) They always cause accidents", "C) They take more time", "D) They are forbidden by law"],
    answer: "A",
    explanation: "Most of the time nothing goes wrong, which breeds overconfidence."
  },
  {
    id: 21483, section: "English",
    passage: "passage_1",
    text: "What is the purpose of the tag attached to the locked switch?",
    options: ["A) To show the cost of the repair", "B) To indicate the voltage", "C) To show who is working on the circuit", "D) To mark the switch as faulty forever"],
    answer: "C",
    explanation: "The tag states who is working on the circuit."
  },
  {
    id: 21484, section: "English",
    passage: "passage_1",
    text: "According to the passage, who may restore the supply after it has been locked off?",
    options: ["A) Only the person who placed the lock", "B) Anyone who needs power", "C) Any senior officer", "D) The customer"],
    answer: "A",
    explanation: "'No one else can restore the supply until the person who placed the lock removes it.'"
  },
  {
    id: 21485, section: "English",
    passage: "passage_1",
    text: "The word 'isolated', as used in the passage, means",
    options: ["A) lonely", "B) connected", "C) disconnected", "D) insulated"],
    answer: "C",
    explanation: "Isolating the supply means disconnecting it from the circuit."
  },
  {
    id: 21486, section: "English",
    text: "Choose the word most similar in meaning to RELIABLE.",
    options: ["A) Dependable", "B) Doubtful", "C) Careless", "D) Weak"],
    answer: "A",
    explanation: "Reliable means dependable."
  },
  {
    id: 21487, section: "English",
    text: "Choose the word most similar in meaning to CAUTION.",
    options: ["A) Danger", "B) Courage", "C) Care", "D) Haste"],
    answer: "C",
    explanation: "Caution means care taken to avoid danger."
  },
  {
    id: 21488, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to DANGER.",
    options: ["A) Risk", "B) Safety", "C) Hazard", "D) Threat"],
    answer: "B",
    explanation: "The opposite of danger is safety."
  },
  {
    id: 21489, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to CONNECT.",
    options: ["A) Disconnect", "B) Join", "C) Attach", "D) Link"],
    answer: "A",
    explanation: "The opposite of connect is disconnect."
  },
  {
    id: 21490, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The supervisor told (A) / that the work (B) / must finish (C) / today. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "'Told' needs an object ('told us that') or should be 'said'."
  },
  {
    id: 21491, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Every one of the workers (A) / have been (B) / given (C) / a safety helmet. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "'Every one of' takes a singular verb: 'has been given'."
  },
  {
    id: 21492, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>I have been waiting (A) / for the electrician (B) / since two hours (C) / but he has not come. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "A period of time takes 'for': 'for two hours'."
  },
  {
    id: 21493, section: "English",
    text: "Fill in the blank: Never work on a live wire ______ proper protection.",
    options: ["A) beyond", "B) without", "C) with", "D) within"],
    answer: "B",
    explanation: "'Without proper protection' completes the warning."
  },
  {
    id: 21494, section: "English",
    text: "Fill in the blank: The worker was injured ______ he had not switched off the supply.",
    options: ["A) although", "B) unless", "C) until", "D) because"],
    answer: "D",
    explanation: "'Because' gives the reason."
  },
  {
    id: 21495, section: "English",
    text: "Fill in the blank: Safety is everybody's ______.",
    options: ["A) respond", "B) responsible", "C) responsibility", "D) responsibly"],
    answer: "C",
    explanation: "A noun is needed after the possessive 'everybody's'."
  },
  {
    id: 21496, section: "English",
    text: "Choose the correct meaning of the idiom: To play with fire",
    options: ["A) To have fun", "B) To start a fire", "C) To do something dangerous", "D) To cook food"],
    answer: "C",
    explanation: "To play with fire is to take a foolish risk."
  },
  {
    id: 21497, section: "English",
    text: "Choose the correct meaning of the idiom: Safe and sound",
    options: ["A) Wealthy", "B) Unharmed", "C) Noisy", "D) Locked"],
    answer: "B",
    explanation: "Safe and sound means unhurt."
  },
  {
    id: 21498, section: "English",
    text: "Choose the one word for: Something that can easily catch fire",
    options: ["A) Flammable", "B) Inert", "C) Fireproof", "D) Incombustible"],
    answer: "A",
    explanation: "Flammable (also 'inflammable') means easily set on fire. Fireproof and incombustible mean the opposite."
  },
  {
    id: 21499, section: "English",
    text: "Choose the correctly spelt word.",
    options: ["A) Necesary", "B) Necessary", "C) Neccessary", "D) Neccesary"],
    answer: "B",
    explanation: "One c and a double s: N-E-C-E-S-S-A-R-Y."
  },
  {
    id: 21500, section: "English",
    text: "Arrange the sentences in a logical order:<br>P. He then locked the switch and attached a tag with his name.<br>Q. The electrician switched off the supply to the faulty circuit.<br>R. After confirming that it was dead, he began the repair.<br>S. He tested the circuit with a voltage tester.",
    options: ["A) QSPR", "B) PQSR", "C) QPSR", "D) QPRS"],
    answer: "C",
    explanation: "Q (switch off) → P (lock and tag) → S (test) → R (repair)."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Trade (Electrician)
  // ════════════════════════════════════════════════════════════
  {
    id: 21501, section: "Trade (Electrician)",
    text: "Lenz's law states that the direction of an induced current is always such that it",
    options: ["A) is always clockwise", "B) opposes the change that produces it", "C) is independent of the magnetic field", "D) aids the change that produces it"],
    answer: "B",
    explanation: "Lenz's law expresses conservation of energy in electromagnetic induction."
  },
  {
    id: 21502, section: "Trade (Electrician)",
    text: "The direction of the induced current in a generator is given by",
    options: ["A) Kirchhoff's law", "B) Fleming's left-hand rule", "C) Fleming's right-hand rule", "D) Ohm's law"],
    answer: "C",
    explanation: "The right-hand rule is used for generators and the left-hand rule for motors."
  },
  {
    id: 21503, section: "Trade (Electrician)",
    text: "The specific gravity of the electrolyte in a fully charged lead-acid battery is approximately",
    options: ["A) 1.00", "B) 2.00", "C) 1.10", "D) 1.28"],
    answer: "D",
    explanation: "About 1.26–1.28 when fully charged, falling to about 1.12–1.15 when discharged."
  },
  {
    id: 21504, section: "Trade (Electrician)",
    text: "Connecting identical cells in parallel",
    options: ["A) decreases the capacity", "B) increases the current capacity (Ah) while keeping the voltage the same", "C) short-circuits the cells", "D) increases the voltage"],
    answer: "B",
    explanation: "In parallel the voltage stays the same and the capacities add. In series the voltages add."
  },
  {
    id: 21505, section: "Trade (Electrician)",
    text: "A Zener diode is mainly used for",
    options: ["A) voltage regulation", "B) amplification", "C) producing light", "D) rectification at high power"],
    answer: "A",
    explanation: "A reverse-biased Zener diode keeps a nearly constant voltage across it."
  },
  {
    id: 21506, section: "Trade (Electrician)",
    text: "How many diodes are used in a single-phase full-wave bridge rectifier?",
    options: ["A) 1", "B) 6", "C) 2", "D) 4"],
    answer: "D",
    explanation: "A bridge rectifier uses four diodes."
  },
  {
    id: 21507, section: "Trade (Electrician)",
    text: "What is the main advantage of concealed conduit wiring?",
    options: ["A) The wiring is protected and the walls look neat", "B) It is the cheapest system", "C) It needs no earthing", "D) It can be altered very easily"],
    answer: "A",
    explanation: "Concealed conduit gives mechanical protection and a good appearance, though changes are harder."
  },
  {
    id: 21508, section: "Trade (Electrician)",
    text: "For a 16 A power socket circuit in domestic wiring, the commonly used copper cable size is",
    options: ["A) 2.5 sq mm", "B) 25 sq mm", "C) 0.5 sq mm", "D) 10 sq mm"],
    answer: "A",
    explanation: "2.5 sq mm copper is common for power circuits, and 1.0–1.5 sq mm for lighting."
  },
  {
    id: 21509, section: "Trade (Electrician)",
    text: "A neon tester (line tester screwdriver) is used to",
    options: ["A) measure resistance", "B) tighten fuses only", "C) measure current", "D) check whether a conductor is live"],
    answer: "D",
    explanation: "The neon bulb glows when the tip touches a live conductor."
  },
  {
    id: 21510, section: "Trade (Electrician)",
    text: "A tong tester (clamp meter) is used to measure",
    options: ["A) energy consumed", "B) insulation resistance", "C) frequency only", "D) current without breaking the circuit"],
    answer: "D",
    explanation: "Its jaws clamp around a single conductor and sense the magnetic field of the current."
  },
  {
    id: 21511, section: "Trade (Electrician)",
    text: "Electrical power in a circuit is measured with a",
    options: ["A) wattmeter", "B) voltmeter", "C) ammeter", "D) megger"],
    answer: "A",
    explanation: "A wattmeter measures power directly."
  },
  {
    id: 21512, section: "Trade (Electrician)",
    text: "A domestic energy meter records electrical energy in",
    options: ["A) amperes", "B) kilowatts (kW)", "C) volts", "D) kilowatt-hours (kWh)"],
    answer: "D",
    explanation: "The energy meter totals kWh (units) for billing."
  },
  {
    id: 21513, section: "Trade (Electrician)",
    text: "The unit of luminous flux (the total light output of a lamp) is the",
    options: ["A) lumen", "B) candela", "C) lux", "D) watt"],
    answer: "A",
    explanation: "Luminous flux is measured in lumens. Lux (lumens per sq m) measures illumination on a surface."
  },
  {
    id: 21514, section: "Trade (Electrician)",
    text: "Low-pressure sodium vapour lamps, once common for street lighting, give light of which colour?",
    options: ["A) White", "B) Blue", "C) Yellow-orange", "D) Green"],
    answer: "C",
    explanation: "Sodium lamps emit an almost monochromatic yellow-orange light."
  },
  {
    id: 21515, section: "Trade (Electrician)",
    text: "A resistor has colour bands yellow, violet, red. What is its value?",
    options: ["A) 47 Ω", "B) 47 kΩ", "C) 4.7 kΩ", "D) 470 Ω"],
    answer: "C",
    explanation: "Yellow = 4, violet = 7 and red is the multiplier ×100: 47 × 100 = 4,700 Ω = 4.7 kΩ."
  },
  {
    id: 21516, section: "Trade (Electrician)",
    text: "A solar photovoltaic (PV) cell converts",
    options: ["A) chemical energy into heat", "B) light energy directly into electrical energy", "C) electrical energy into light", "D) heat into light"],
    answer: "B",
    explanation: "PV cells, usually of silicon, produce DC electricity from sunlight."
  },
  {
    id: 21517, section: "Trade (Electrician)",
    text: "In a star-connected three-phase system, the line current is",
    options: ["A) zero", "B) one-third of the phase current", "C) equal to the phase current", "D) √3 times the phase current"],
    answer: "C",
    explanation: "In star, I(line) = I(phase) and V(line) = √3 × V(phase)."
  },
  {
    id: 21518, section: "Trade (Electrician)",
    text: "In a delta-connected three-phase system, the line voltage is",
    options: ["A) zero", "B) √3 times the phase voltage", "C) half the phase voltage", "D) equal to the phase voltage"],
    answer: "D",
    explanation: "In delta, V(line) = V(phase) and I(line) = √3 × I(phase)."
  },
  {
    id: 21519, section: "Trade (Electrician)",
    text: "A balanced three-phase load draws 10 A at a line voltage of 400 V and a power factor of 0.8. What is the power consumed (approximately)?",
    options: ["A) 9,600 W", "B) 5,543 W", "C) 4,000 W", "D) 3,200 W"],
    answer: "B",
    explanation: "P = √3 × V × I × cosφ = 1.732 × 400 × 10 × 0.8 ≈ 5,543 W."
  },
  {
    id: 21520, section: "Trade (Electrician)",
    text: "A lightning arrester is installed to",
    options: ["A) increase supply voltage", "B) store electrical energy", "C) attract lightning to buildings", "D) protect equipment by diverting high-voltage surges from lightning safely to earth"],
    answer: "D",
    explanation: "It gives lightning surges a low-impedance path to earth."
  }
];
