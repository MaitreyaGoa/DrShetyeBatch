// gssc_cbt2_greaser_mock2.js – Dr Shetye Academic Programme
// CBT 2 Greaser Mock 2 · GSSC Advt. No. 2 of 2026 · CBT-II · Constable (Greaser)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 21281–21340
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Trade (Diesel Mechanic / Fitter) Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "For many young people, a job in a workshop is seen as a second choice, something to fall back on if a desk job does not come through. This attitude does a disservice both to the individuals and to the country. Skilled mechanics, fitters and electricians keep vehicles moving, machines running and power flowing. When they are scarce, everything else slows down.\n\nA good tradesman needs more than physical strength. He must understand how a machine works, diagnose a fault from its symptoms, read drawings and manuals, and work to precise measurements. Modern vehicles, with electronic controls and sensors, demand even more knowledge than older ones did. Those who keep learning remain in demand throughout their careers.\n\nInstitutions such as industrial training institutes play a vital role, but their value depends on the quality of practical training. A certificate earned without real hands-on experience is of little use in a workshop. The best trainees are those who combine classroom learning with hours of supervised practice, and who take pride in a job done correctly the first time."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 21281, section: "Reasoning",
    text: "Find the next term in the series: 5, 10, 20, 35, 55, ?",
    options: ["A) 75", "B) 80", "C) 85", "D) 70"],
    answer: "B",
    explanation: "The differences are 5, 10, 15, 20, so the next is +25: 55 + 25 = 80."
  },
  {
    id: 21282, section: "Reasoning",
    text: "Find the next term in the series: AZ, CX, EV, GT, ?",
    options: ["A) IS", "B) IR", "C) HR", "D) JR"],
    answer: "B",
    explanation: "The first letters move +2 (A, C, E, G, I) and the second letters −2 (Z, X, V, T, R)."
  },
  {
    id: 21283, section: "Reasoning",
    text: "In a certain code, PUMP is written as QVNQ. How will VALVE be written in that code?",
    options: ["A) WBMWF", "B) WBMWE", "C) UZKUD", "D) WCMWF"],
    answer: "A",
    explanation: "Each letter moves one place forward."
  },
  {
    id: 21284, section: "Reasoning",
    text: "A man said, \"This boy is the son of my father's only son.\" How is the boy related to the man?",
    options: ["A) Nephew", "B) Brother", "C) Cousin", "D) Son"],
    answer: "D",
    explanation: "His father's only son is the man himself, so the boy is his son."
  },
  {
    id: 21285, section: "Reasoning",
    text: "Four gears A, B, C and D are in mesh in a line. A has 10 teeth, B has 20, C has 40 and D has 10. If A makes 8 complete turns, how many turns does D make?",
    options: ["A) 2", "B) 4", "C) 16", "D) 8"],
    answer: "D",
    explanation: "In a simple gear train the intermediate gears do not change the overall ratio. A and D both have 10 teeth, so D makes 8 turns."
  },
  {
    id: 21286, section: "Reasoning",
    text: "A man walks 6 km North, turns right and walks 8 km, turns right again and walks 6 km, then turns left and walks 4 km. How far is he from his starting point?",
    options: ["A) 12 km East", "B) 8 km East", "C) 10 km North-East", "D) 4 km East"],
    answer: "A",
    explanation: "(0,6) → (8,6) → (8,0) → (12,0). He is 12 km East of the start."
  },
  {
    id: 21287, section: "Reasoning",
    text: "Statements: Some spanners are tools. All tools are metallic.<br>Conclusions:<br>I. Some spanners are metallic.<br>II. All metallic things are tools.",
    options: ["A) Both follow", "B) Only II follows", "C) Neither follows", "D) Only I follows"],
    answer: "D",
    explanation: "The spanners that are tools are metallic (I). 'All tools are metallic' cannot be reversed (II)."
  },
  {
    id: 21288, section: "Reasoning",
    text: "In a row of 30 workers, A is 12th from the left and B is 17th from the right. How many workers sit between A and B?",
    options: ["A) 0", "B) 3", "C) 2", "D) 1"],
    answer: "D",
    explanation: "B's position from the left = 30 − 17 + 1 = 14. Between positions 12 and 14 is 1 worker."
  },
  {
    id: 21289, section: "Reasoning",
    text: "Find the odd one out: Diesel, Petrol, Kerosene, Grease",
    options: ["A) Diesel", "B) Grease", "C) Petrol", "D) Kerosene"],
    answer: "B",
    explanation: "Diesel, petrol and kerosene are fuels. Grease is a lubricant."
  },
  {
    id: 21290, section: "Reasoning",
    text: "Engine : Car :: Heart : ?",
    options: ["A) Doctor", "B) Lungs", "C) Blood", "D) Body"],
    answer: "D",
    explanation: "The engine drives the car; the heart powers the body."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 21291, section: "Numerical Ability",
    text: "A machine works 7.5 hours a day and makes 18 parts an hour. How many parts does it make in 6 days?",
    options: ["A) 864", "B) 750", "C) 810", "D) 780"],
    answer: "C",
    explanation: "7.5 × 18 × 6 = 810."
  },
  {
    id: 21292, section: "Numerical Ability",
    text: "A generator uses 3 litres of diesel per hour. How long will a full 45-litre tank last?",
    options: ["A) 12 hours", "B) 18 hours", "C) 135 hours", "D) 15 hours"],
    answer: "D",
    explanation: "45/3 = 15 hours."
  },
  {
    id: 21293, section: "Numerical Ability",
    text: "1 horsepower = 746 watts. What is the power of a 5 hp motor in kilowatts (approximately)?",
    options: ["A) 37.3 kW", "B) 5 kW", "C) 0.37 kW", "D) 3.73 kW"],
    answer: "D",
    explanation: "5 × 746 = 3,730 W = 3.73 kW."
  },
  {
    id: 21294, section: "Numerical Ability",
    text: "A spare part costing ₹2,500 is sold at a loss of 8%. What is the selling price?",
    options: ["A) ₹2,200", "B) ₹2,420", "C) ₹2,300", "D) ₹2,700"],
    answer: "C",
    explanation: "2500 × 0.92 = ₹2,300."
  },
  {
    id: 21295, section: "Numerical Ability",
    text: "What is the area of a rectangular metal plate 25 cm long and 16 cm wide?",
    options: ["A) 400 cm²", "B) 41 cm²", "C) 200 cm²", "D) 82 cm²"],
    answer: "A",
    explanation: "25 × 16 = 400 cm²."
  },
  {
    id: 21296, section: "Numerical Ability",
    text: "What is the circumference of a wheel of radius 21 cm? (Take π = 22/7)",
    options: ["A) 66 cm", "B) 1,386 cm", "C) 264 cm", "D) 132 cm"],
    answer: "D",
    explanation: "2 × 22/7 × 21 = 132 cm."
  },
  {
    id: 21297, section: "Numerical Ability",
    text: "What is the average of the readings 18, 22, 20, 24, 19 and 17?",
    options: ["A) 20", "B) 22", "C) 19", "D) 21"],
    answer: "A",
    explanation: "Sum = 120, and 120/6 = 20."
  },
  {
    id: 21298, section: "Numerical Ability",
    text: "Two-stroke oil is mixed with petrol in the ratio 1 : 25. How much oil is needed for 5 litres of petrol?",
    options: ["A) 200 ml", "B) 250 ml", "C) 125 ml", "D) 500 ml"],
    answer: "A",
    explanation: "5000 ml/25 = 200 ml."
  },
  {
    id: 21299, section: "Numerical Ability",
    text: "3 mechanics service 9 vehicles in 6 hours. How many vehicles can 5 mechanics service in 8 hours at the same rate?",
    options: ["A) 18", "B) 15", "C) 20", "D) 24"],
    answer: "C",
    explanation: "Each mechanic services 9/(3 × 6) = 0.5 vehicle an hour. 5 × 8 × 0.5 = 20."
  },
  {
    id: 21300, section: "Numerical Ability",
    text: "What is 15% of 2,400?",
    options: ["A) 340", "B) 360", "C) 380", "D) 300"],
    answer: "B",
    explanation: "0.15 × 2400 = 360."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 21301, section: "English",
    passage: "passage_1",
    text: "What is the main idea of the passage?",
    options: ["A) Only physical strength matters in a workshop", "B) Skilled trades are valuable and demand both knowledge and real practical training", "C) Workshop jobs are only for those who fail to get desk jobs", "D) Modern vehicles need no mechanics"],
    answer: "B",
    explanation: "The passage argues for respecting trades and stresses knowledge and practice."
  },
  {
    id: 21302, section: "English",
    passage: "passage_1",
    text: "Which of the following skills is NOT mentioned in the passage?",
    options: ["A) Diagnosing faults from symptoms", "B) Reading drawings and manuals", "C) Public speaking", "D) Working to precise measurements"],
    answer: "C",
    explanation: "Public speaking is not mentioned. The other three are listed in the second paragraph."
  },
  {
    id: 21303, section: "English",
    passage: "passage_1",
    text: "Why do modern vehicles demand more knowledge, according to the passage?",
    options: ["A) They use more fuel", "B) They are heavier", "C) They have fewer parts", "D) They have electronic controls and sensors"],
    answer: "D",
    explanation: "Stated in the second paragraph."
  },
  {
    id: 21304, section: "English",
    passage: "passage_1",
    text: "What is the author's view of a certificate earned without hands-on experience?",
    options: ["A) It is more valuable than practice", "B) It is required for all desk jobs", "C) It guarantees a job", "D) It is of little use in a workshop"],
    answer: "D",
    explanation: "Stated in the last paragraph."
  },
  {
    id: 21305, section: "English",
    passage: "passage_1",
    text: "The word 'disservice', as used in the passage, means",
    options: ["A) reward", "B) service", "C) harm", "D) help"],
    answer: "C",
    explanation: "A disservice is a harmful action."
  },
  {
    id: 21306, section: "English",
    text: "Choose the word most similar in meaning to DURABLE.",
    options: ["A) Temporary", "B) Fragile", "C) Long-lasting", "D) Cheap"],
    answer: "C",
    explanation: "Durable means able to last a long time."
  },
  {
    id: 21307, section: "English",
    text: "Choose the word most similar in meaning to ASSIST.",
    options: ["A) Order", "B) Help", "C) Ignore", "D) Hinder"],
    answer: "B",
    explanation: "To assist is to help."
  },
  {
    id: 21308, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to SMOOTH.",
    options: ["A) Flat", "B) Polished", "C) Rough", "D) Even"],
    answer: "C",
    explanation: "The opposite of smooth is rough."
  },
  {
    id: 21309, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to JUNIOR.",
    options: ["A) Minor", "B) Subordinate", "C) Younger", "D) Senior"],
    answer: "D",
    explanation: "The opposite of junior is senior."
  },
  {
    id: 21310, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Me and my friend (A) / repaired the bike (B) / in the (C) / workshop. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "As subject, use 'My friend and I'."
  },
  {
    id: 21311, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The tools in the box (A) / is (B) / very old (C) / and rusty. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "The subject 'tools' is plural: 'are'."
  },
  {
    id: 21312, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>He has been working (A) / here since (B) / three years (C) / now. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "A period of time needs 'for': 'for three years'."
  },
  {
    id: 21313, section: "English",
    text: "Fill in the blank: The mechanic is busy ______ the engine.",
    options: ["A) repairing", "B) to repair", "C) repair", "D) repaired"],
    answer: "A",
    explanation: "'Busy' is followed by a gerund: 'busy repairing'."
  },
  {
    id: 21314, section: "English",
    text: "Fill in the blank: The workshop remains closed ______ Sundays.",
    options: ["A) by", "B) in", "C) on", "D) at"],
    answer: "C",
    explanation: "'On' is used with days of the week."
  },
  {
    id: 21315, section: "English",
    text: "Fill in the blank: This bolt is too tight; I cannot loosen ______.",
    options: ["A) them", "B) it", "C) its", "D) itself"],
    answer: "B",
    explanation: "'It' refers to the singular 'bolt'."
  },
  {
    id: 21316, section: "English",
    text: "Choose the correct meaning of the idiom: To lend a hand",
    options: ["A) To shake hands", "B) To borrow money", "C) To help", "D) To fight"],
    answer: "C",
    explanation: "To lend a hand is to help."
  },
  {
    id: 21317, section: "English",
    text: "Choose the correct meaning of the idiom: To keep an eye on",
    options: ["A) To watch carefully", "B) To close one's eyes", "C) To ignore", "D) To blink"],
    answer: "A",
    explanation: "To keep an eye on something is to watch it."
  },
  {
    id: 21318, section: "English",
    text: "Choose the one word for: A person who is learning a trade under a skilled worker",
    options: ["A) Apprentice", "B) Master", "C) Expert", "D) Veteran"],
    answer: "A",
    explanation: "An apprentice learns a trade under supervision."
  },
  {
    id: 21319, section: "English",
    text: "Choose the correct passive form of: They are painting the truck.",
    options: ["A) The truck has painted by them.", "B) The truck is being painted by them.", "C) The truck was painted by them.", "D) The truck is painted by them."],
    answer: "B",
    explanation: "Present continuous active becomes 'is being + V3'."
  },
  {
    id: 21320, section: "English",
    text: "Choose the correct indirect speech: The foreman said to us, \"Clean the tools.\"",
    options: ["A) The foreman said us to clean the tools.", "B) The foreman told us that clean the tools.", "C) The foreman told us to clean the tools.", "D) The foreman asked that we cleaned the tools."],
    answer: "C",
    explanation: "A command becomes 'told + object + to + verb'."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Trade (Diesel Mechanic / Fitter)
  // ════════════════════════════════════════════════════════════
  {
    id: 21321, section: "Trade (Diesel Mechanic / Fitter)",
    text: "In a two-stroke engine, how often does a power stroke occur?",
    options: ["A) Once in every revolution of the crankshaft", "B) Once in every two revolutions", "C) Twice in every revolution", "D) Once in every four revolutions"],
    answer: "A",
    explanation: "A two-stroke engine completes its cycle in one revolution. A four-stroke engine needs two."
  },
  {
    id: 21322, section: "Trade (Diesel Mechanic / Fitter)",
    text: "A petrol (spark-ignition) engine works on the",
    options: ["A) Otto cycle", "B) Rankine cycle", "C) Diesel cycle", "D) Brayton cycle"],
    answer: "A",
    explanation: "SI engines follow the Otto (constant-volume) cycle and CI engines the Diesel (constant-pressure) cycle."
  },
  {
    id: 21323, section: "Trade (Diesel Mechanic / Fitter)",
    text: "The two main types of fuel injection pump (FIP) used in diesel engines are",
    options: ["A) gear and vane type", "B) centrifugal and axial type", "C) piston and diaphragm type", "D) in-line and distributor (rotary) type"],
    answer: "D",
    explanation: "In-line pumps have one element per cylinder. Distributor (rotary) pumps use one element feeding all cylinders."
  },
  {
    id: 21324, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Which type of injector nozzle is generally used in direct-injection diesel engines?",
    options: ["A) Carburettor jet", "B) Pintle nozzle", "C) Multi-hole nozzle", "D) Pintaux nozzle"],
    answer: "C",
    explanation: "Multi-hole nozzles spray fuel finely into the open combustion chamber. Pintle nozzles are used in indirect-injection engines."
  },
  {
    id: 21325, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Many diesel fuel filters include a water separator because",
    options: ["A) diesel freezes without water", "B) water in diesel can damage the injection pump and injectors", "C) water cools the fuel", "D) water improves combustion"],
    answer: "B",
    explanation: "Water causes corrosion and poor lubrication of the precision pump and injector parts."
  },
  {
    id: 21326, section: "Trade (Diesel Mechanic / Fitter)",
    text: "In a diesel fuel system, the feed (lift) pump",
    options: ["A) supplies fuel from the tank to the fuel injection pump", "B) injects fuel into the cylinder", "C) pumps lubricating oil", "D) returns fuel to the tank"],
    answer: "A",
    explanation: "The feed pump lifts fuel from the tank through the filters to the FIP."
  },
  {
    id: 21327, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Which two types of air cleaner are commonly used on engines?",
    options: ["A) Magnetic and centrifugal type", "B) Water and foam type", "C) Dry (paper element) and oil-bath type", "D) Wet and electric type"],
    answer: "C",
    explanation: "Dry paper-element filters are common in modern vehicles. Oil-bath cleaners are used in dusty conditions."
  },
  {
    id: 21328, section: "Trade (Diesel Mechanic / Fitter)",
    text: "A 'wet' cylinder liner is so called because",
    options: ["A) it is in direct contact with the engine coolant", "B) it is fitted while wet", "C) it is always wet with fuel", "D) it is lubricated by water"],
    answer: "A",
    explanation: "Wet liners form the inner wall of the water jacket. Dry liners are pressed into the block."
  },
  {
    id: 21329, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Which part connects the piston to the small end of the connecting rod?",
    options: ["A) Gudgeon pin (piston pin)", "B) Crank pin", "C) King pin", "D) Cotter pin"],
    answer: "A",
    explanation: "The gudgeon pin passes through the piston bosses and the small end."
  },
  {
    id: 21330, section: "Trade (Diesel Mechanic / Fitter)",
    text: "The big end of the connecting rod is attached to the",
    options: ["A) camshaft", "B) crank pin of the crankshaft", "C) piston", "D) flywheel"],
    answer: "B",
    explanation: "The big-end bearing runs on the crank pin."
  },
  {
    id: 21331, section: "Trade (Diesel Mechanic / Fitter)",
    text: "'Valve overlap' in a four-stroke engine is the period when",
    options: ["A) the engine is idling", "B) both valves are closed", "C) only the exhaust valve is open", "D) both the inlet and exhaust valves are open together"],
    answer: "D",
    explanation: "Overlap near top dead centre (end of exhaust, start of intake) helps scavenging."
  },
  {
    id: 21332, section: "Trade (Diesel Mechanic / Fitter)",
    text: "In an overhead-valve (OHV) engine with the camshaft in the block, the motion from cam to valve is passed through",
    options: ["A) a chain and sprocket only", "B) tappets, push rods and rocker arms", "C) a gear train", "D) a belt and pulley"],
    answer: "B",
    explanation: "The cam lifts the tappet, the push rod lifts the rocker arm, and the rocker opens the valve."
  },
  {
    id: 21333, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Timing gears, chains or belts in an engine ensure that",
    options: ["A) the coolant flows correctly", "B) the wheels turn at the correct speed", "C) the battery is charged", "D) the camshaft opens the valves in correct relation to the piston position"],
    answer: "D",
    explanation: "They keep the camshaft and crankshaft in a fixed relationship."
  },
  {
    id: 21334, section: "Trade (Diesel Mechanic / Fitter)",
    text: "A four-cylinder engine has a bore of 10 cm and a stroke of 12 cm. What is its total swept volume? (Take π = 3.14)",
    options: ["A) 942 cc", "B) 3,768 cc", "C) 1,200 cc", "D) 4,800 cc"],
    answer: "B",
    explanation: "Volume per cylinder = π/4 × 10² × 12 = 942 cc. For four cylinders: 3,768 cc."
  },
  {
    id: 21335, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Which tool is used to tighten cylinder head bolts to the exact value specified by the manufacturer?",
    options: ["A) Hammer", "B) Pipe wrench", "C) Box spanner", "D) Torque wrench"],
    answer: "D",
    explanation: "A torque wrench applies a measured tightening torque."
  },
  {
    id: 21336, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Cylinder head bolts should normally be tightened",
    options: ["A) gradually, in the specified sequence, starting from the centre and working outwards", "B) starting from one end and finishing at the other", "C) all at once to full torque", "D) in any random order"],
    answer: "A",
    explanation: "This prevents distortion of the head and ensures the gasket seals evenly."
  },
  {
    id: 21337, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Coolant in the engine oil, or white smoke from the exhaust, often indicates",
    options: ["A) worn brake shoes", "B) a clogged air filter", "C) a blown cylinder head gasket", "D) a weak battery"],
    answer: "C",
    explanation: "A failed head gasket lets coolant leak into the combustion chamber or the oil."
  },
  {
    id: 21338, section: "Trade (Diesel Mechanic / Fitter)",
    text: "The oil pump commonly used in automobile engines is the",
    options: ["A) diaphragm pump", "B) gear type pump", "C) jet pump", "D) centrifugal pump"],
    answer: "B",
    explanation: "Gear-type (and rotor-type) positive displacement pumps supply oil under pressure."
  },
  {
    id: 21339, section: "Trade (Diesel Mechanic / Fitter)",
    text: "In a 'full-flow' lubrication filter system,",
    options: ["A) oil goes to the bearings before the pump", "B) no oil is filtered", "C) all the oil from the pump passes through the filter before reaching the bearings", "D) only a part of the oil is filtered"],
    answer: "C",
    explanation: "A bypass valve opens only if the filter becomes clogged."
  },
  {
    id: 21340, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Calcium-based (cup) grease is preferred where",
    options: ["A) temperatures are very high", "B) the part is exposed to water", "C) food is processed", "D) electrical insulation is needed"],
    answer: "B",
    explanation: "Calcium grease resists water well but is limited to moderate temperatures."
  }
];
