// gssc_cbt2_greaser_mock1.js – Dr Shetye Academic Programme
// CBT 2 Greaser Mock 1 · GSSC Advt. No. 2 of 2026 · CBT-II · Constable (Greaser)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 20521–20580
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Trade (Diesel Mechanic / Fitter) Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "In a workshop, most injuries are not caused by dramatic failures of machines but by small lapses in routine. A spanner of the wrong size slips and gashes a hand; a jack is used without axle stands and the vehicle settles without warning; an oily rag left near a hot exhaust smoulders into a fire. Each of these accidents follows from a shortcut that seemed harmless at the time.\n\nGood mechanics develop habits that make such lapses less likely. They choose the correct tool for each job and return it to its place afterwards, so that nothing is left lying where it can trip someone or fall into moving parts. They wear protective equipment as a matter of course, not only when a supervisor is watching. They keep floors free of oil and grease, store flammable materials safely, and never work under a raised vehicle unless it is properly supported.\n\nPreventive maintenance follows the same logic. Regular lubrication, inspection and timely replacement of worn parts cost little compared with a breakdown on the road. A greaser who checks every grease point on schedule is not doing a minor task; he is preventing the kind of failure that can put a vehicle — and its occupants — at risk."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 20521, section: "Reasoning",
    text: "Find the next term in the series: 2, 6, 18, 54, ?",
    options: ["A) 156", "B) 216", "C) 162", "D) 108"],
    answer: "C",
    explanation: "Each term is multiplied by 3: 54 × 3 = 162."
  },
  {
    id: 20522, section: "Reasoning",
    text: "Find the next letter in the series: B, E, H, K, ?",
    options: ["A) O", "B) M", "C) N", "D) L"],
    answer: "C",
    explanation: "Each letter moves 3 places forward: K + 3 = N."
  },
  {
    id: 20523, section: "Reasoning",
    text: "If GEAR is coded as 7-5-1-18, how will BOLT be coded?",
    options: ["A) 2-15-11-20", "B) 2-14-12-20", "C) 3-15-12-20", "D) 2-15-12-20"],
    answer: "D",
    explanation: "Each letter is replaced by its position in the alphabet: B = 2, O = 15, L = 12, T = 20."
  },
  {
    id: 20524, section: "Reasoning",
    text: "Raju is the son of Mohan. Mohan's sister Rekha has a son, Sunil. How is Sunil related to Raju?",
    options: ["A) Uncle", "B) Cousin", "C) Nephew", "D) Brother"],
    answer: "B",
    explanation: "Sunil is the son of Raju's paternal aunt, so they are cousins."
  },
  {
    id: 20525, section: "Reasoning",
    text: "A man is facing South. He turns right, then right again, and then left. Which direction is he facing now?",
    options: ["A) West", "B) South", "C) East", "D) North"],
    answer: "A",
    explanation: "South → (right) West → (right) North → (left) West."
  },
  {
    id: 20526, section: "Reasoning",
    text: "Ramesh is 15th from the top in a class of 40 students. What is his rank from the bottom?",
    options: ["A) 26th", "B) 24th", "C) 25th", "D) 27th"],
    answer: "A",
    explanation: "Rank from the bottom = 40 − 15 + 1 = 26."
  },
  {
    id: 20527, section: "Reasoning",
    text: "Statements: All tools are made of metal. Some metals are rusted.<br>Conclusions:<br>I. Some tools are rusted.<br>II. Some rusted things are metals.",
    options: ["A) Only I follows", "B) Neither I nor II follows", "C) Both I and II follow", "D) Only II follows"],
    answer: "D",
    explanation: "II is simply 'some metals are rusted' reversed, so it follows. The rusted metals may not be tools, so I does not follow."
  },
  {
    id: 20528, section: "Reasoning",
    text: "Spanner : Nut :: Screwdriver : ?",
    options: ["A) Bolt", "B) Screw", "C) Hammer", "D) Nail"],
    answer: "B",
    explanation: "A spanner turns a nut; a screwdriver turns a screw."
  },
  {
    id: 20529, section: "Reasoning",
    text: "Find the odd one out: Hammer, Chisel, File, Micrometer",
    options: ["A) File", "B) Hammer", "C) Micrometer", "D) Chisel"],
    answer: "C",
    explanation: "Hammer, chisel and file are hand tools for working material. A micrometer is a measuring instrument."
  },
  {
    id: 20530, section: "Reasoning",
    text: "Three gears A, B and C are in mesh in a line (A with B, and B with C). If gear A turns clockwise, in which direction does gear C turn?",
    options: ["A) Clockwise", "B) Anticlockwise", "C) It does not turn", "D) It turns alternately"],
    answer: "A",
    explanation: "Meshing gears turn in opposite directions: A clockwise, B anticlockwise, C clockwise."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 20531, section: "Numerical Ability",
    text: "A machine produces 240 bolts in 8 hours. How many bolts will it produce in 5 hours?",
    options: ["A) 180", "B) 160", "C) 150", "D) 120"],
    answer: "C",
    explanation: "Rate = 30 bolts per hour, so 30 × 5 = 150."
  },
  {
    id: 20532, section: "Numerical Ability",
    text: "A drum contains 200 litres of oil. If 35% of it is used, how much oil remains?",
    options: ["A) 165 litres", "B) 130 litres", "C) 70 litres", "D) 135 litres"],
    answer: "B",
    explanation: "65% of 200 = 130 litres."
  },
  {
    id: 20533, section: "Numerical Ability",
    text: "If 1 inch = 25.4 mm, how many mm are there in 3 inches?",
    options: ["A) 75.4 mm", "B) 76.2 mm", "C) 78.2 mm", "D) 72.6 mm"],
    answer: "B",
    explanation: "3 × 25.4 = 76.2 mm."
  },
  {
    id: 20534, section: "Numerical Ability",
    text: "A spare part is bought for ₹800 and sold for ₹920. What is the profit percentage?",
    options: ["A) 13%", "B) 20%", "C) 12%", "D) 15%"],
    answer: "D",
    explanation: "Profit = 120, i.e. 120/800 = 15%."
  },
  {
    id: 20535, section: "Numerical Ability",
    text: "A driver gear with 20 teeth meshes with a driven gear with 60 teeth. If the driver gear turns at 900 rpm, what is the speed of the driven gear?",
    options: ["A) 300 rpm", "B) 600 rpm", "C) 450 rpm", "D) 2,700 rpm"],
    answer: "A",
    explanation: "Speed ratio = 20/60, so 900 × 20/60 = 300 rpm."
  },
  {
    id: 20536, section: "Numerical Ability",
    text: "What is the area of a circle with a diameter of 14 cm? (Take π = 22/7)",
    options: ["A) 44 cm²", "B) 88 cm²", "C) 154 cm²", "D) 616 cm²"],
    answer: "C",
    explanation: "r = 7 cm. Area = 22/7 × 7 × 7 = 154 cm²."
  },
  {
    id: 20537, section: "Numerical Ability",
    text: "What is the volume of a cylinder of radius 7 cm and height 10 cm? (Take π = 22/7)",
    options: ["A) 3,080 cm³", "B) 1,540 cm³", "C) 1,450 cm³", "D) 440 cm³"],
    answer: "B",
    explanation: "V = 22/7 × 7² × 10 = 1,540 cm³."
  },
  {
    id: 20538, section: "Numerical Ability",
    text: "What is the average of 12, 15, 18, 21 and 24?",
    options: ["A) 20", "B) 17", "C) 19", "D) 18"],
    answer: "D",
    explanation: "Sum = 90, and 90/5 = 18."
  },
  {
    id: 20539, section: "Numerical Ability",
    text: "What is the simple interest on ₹6,000 at 9% per annum for 2 years?",
    options: ["A) ₹540", "B) ₹1,080", "C) ₹980", "D) ₹1,200"],
    answer: "B",
    explanation: "6000 × 9 × 2/100 = ₹1,080."
  },
  {
    id: 20540, section: "Numerical Ability",
    text: "4 mechanics can overhaul a set of vehicles in 12 days. How many days will 6 mechanics take for the same work?",
    options: ["A) 10 days", "B) 18 days", "C) 8 days", "D) 6 days"],
    answer: "C",
    explanation: "Man-days = 48, and 48/6 = 8 days."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 20541, section: "English",
    passage: "passage_1",
    text: "What is the main idea of the passage?",
    options: ["A) Greasing is an unimportant task", "B) Only supervisors can prevent workshop accidents", "C) Machines in workshops are inherently unsafe", "D) Most workshop accidents and breakdowns are prevented by disciplined routine habits"],
    answer: "D",
    explanation: "The passage links accidents to small lapses and recommends good habits and preventive maintenance."
  },
  {
    id: 20542, section: "English",
    passage: "passage_1",
    text: "Which of the following is given in the passage as an example of a dangerous shortcut?",
    options: ["A) Using a jack without axle stands", "B) Wearing protective gloves", "C) Returning tools to their place", "D) Keeping the floor clean"],
    answer: "A",
    explanation: "Stated in the first paragraph."
  },
  {
    id: 20543, section: "English",
    passage: "passage_1",
    text: "According to the passage, good mechanics wear protective equipment",
    options: ["A) only for welding work", "B) only when a supervisor is watching", "C) as a matter of habit", "D) only during inspections"],
    answer: "C",
    explanation: "'As a matter of course, not only when a supervisor is watching.'"
  },
  {
    id: 20544, section: "English",
    passage: "passage_1",
    text: "With what does the author compare the cost of preventive maintenance?",
    options: ["A) The salary of a mechanic", "B) The price of new vehicles", "C) The cost of a breakdown on the road", "D) The cost of protective equipment"],
    answer: "C",
    explanation: "Preventive maintenance costs 'little compared with a breakdown on the road'."
  },
  {
    id: 20545, section: "English",
    passage: "passage_1",
    text: "The word 'smoulders', as used in the passage, means",
    options: ["A) burns slowly without a flame", "B) cools down", "C) explodes suddenly", "D) melts"],
    answer: "A",
    explanation: "To smoulder is to burn slowly with smoke but no flame."
  },
  {
    id: 20546, section: "English",
    text: "Choose the word most similar in meaning to RAPID.",
    options: ["A) Steady", "B) Slow", "C) Fast", "D) Late"],
    answer: "C",
    explanation: "Rapid means fast."
  },
  {
    id: 20547, section: "English",
    text: "Choose the word most similar in meaning to REPAIR.",
    options: ["A) Damage", "B) Break", "C) Mend", "D) Replace"],
    answer: "C",
    explanation: "To repair is to mend."
  },
  {
    id: 20548, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to LOOSE.",
    options: ["A) Free", "B) Open", "C) Slack", "D) Tight"],
    answer: "D",
    explanation: "The opposite of loose is tight."
  },
  {
    id: 20549, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to RIGID.",
    options: ["A) Hard", "B) Firm", "C) Stiff", "D) Flexible"],
    answer: "D",
    explanation: "Rigid means stiff; its opposite is flexible."
  },
  {
    id: 20550, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>He don't know (A) / how to (B) / repair (C) / this engine. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "With the third-person singular 'he', use 'doesn't'."
  },
  {
    id: 20551, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>He gave me (A) / an useful (B) / tip about (C) / the engine. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "'Useful' begins with a 'yoo' (consonant) sound, so it takes 'a': 'a useful tip'."
  },
  {
    id: 20552, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The mechanic told (A) / me that (B) / he will come (C) / the next day. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "In reported speech after a past reporting verb, 'will' becomes 'would': 'he would come'."
  },
  {
    id: 20553, section: "English",
    text: "Fill in the blank: This engine block is made ______ cast iron.",
    options: ["A) of", "B) with", "C) by", "D) from"],
    answer: "A",
    explanation: "'Made of' is used when the material is still recognisable in the product."
  },
  {
    id: 20554, section: "English",
    text: "Fill in the blank: He has been working in this workshop ______ five years.",
    options: ["A) since", "B) by", "C) from", "D) for"],
    answer: "D",
    explanation: "'For' is used with a period of time."
  },
  {
    id: 20555, section: "English",
    text: "Fill in the blank: Oil is lighter ______ water.",
    options: ["A) from", "B) than", "C) then", "D) to"],
    answer: "B",
    explanation: "Comparatives take 'than'."
  },
  {
    id: 20556, section: "English",
    text: "Choose the correct meaning of the idiom: To work like a horse",
    options: ["A) To work only for money", "B) To work slowly", "C) To refuse to work", "D) To work very hard"],
    answer: "D",
    explanation: "To work like a horse is to work very hard."
  },
  {
    id: 20557, section: "English",
    text: "Choose the correct meaning of the idiom: A piece of cake",
    options: ["A) A difficult problem", "B) A shared profit", "C) A small reward", "D) Something very easy"],
    answer: "D",
    explanation: "A piece of cake is something very easy to do."
  },
  {
    id: 20558, section: "English",
    text: "Choose the one word for: A person who repairs and maintains machines and engines",
    options: ["A) Mechanic", "B) Plumber", "C) Mason", "D) Carpenter"],
    answer: "A",
    explanation: "A mechanic repairs machinery. A carpenter works with wood, a plumber with pipes, and a mason with stone or brick."
  },
  {
    id: 20559, section: "English",
    text: "Choose the correct passive form of: The mechanic repaired the truck.",
    options: ["A) The truck has been repaired by the mechanic.", "B) The truck is repaired by the mechanic.", "C) The truck was repaired by the mechanic.", "D) The truck was repair by the mechanic."],
    answer: "C",
    explanation: "Simple past active becomes 'was + V3'."
  },
  {
    id: 20560, section: "English",
    text: "Choose the correct indirect speech: He said, \"I am tired.\"",
    options: ["A) He told that he was tired.", "B) He said that he was tired.", "C) He said that he is tired.", "D) He said that I am tired."],
    answer: "B",
    explanation: "Present simple becomes past simple, and 'I' becomes 'he'."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Trade (Diesel Mechanic / Fitter)
  // ════════════════════════════════════════════════════════════
  {
    id: 20561, section: "Trade (Diesel Mechanic / Fitter)",
    text: "On the basis of their method of ignition, diesel engines are classified as",
    options: ["A) spark-ignition (SI) engines", "B) hot-bulb (surface-ignition) engines", "C) compression-ignition (CI) engines", "D) magneto-ignition engines"],
    answer: "C",
    explanation: "In a diesel engine, the injected fuel ignites on contact with air heated by high compression, so it is a CI engine. Petrol engines are spark-ignition (SI) engines."
  },
  {
    id: 20562, section: "Trade (Diesel Mechanic / Fitter)",
    text: "The compression ratio of a typical diesel engine lies in the range of",
    options: ["A) 3 : 1 to 5 : 1", "B) 14 : 1 to 22 : 1", "C) 30 : 1 to 40 : 1", "D) 6 : 1 to 10 : 1"],
    answer: "B",
    explanation: "A high compression ratio is needed to heat the air enough for self-ignition. Petrol engines use about 6:1 to 10:1."
  },
  {
    id: 20563, section: "Trade (Diesel Mechanic / Fitter)",
    text: "What is the function of a glow plug in a diesel engine?",
    options: ["A) To help start the engine in cold conditions by pre-heating the combustion chamber", "B) To measure engine temperature", "C) To charge the battery", "D) To ignite fuel during normal running"],
    answer: "A",
    explanation: "Glow plugs heat the combustion chamber before starting, which helps cold starts."
  },
  {
    id: 20564, section: "Trade (Diesel Mechanic / Fitter)",
    text: "What is the most common firing order of a four-cylinder in-line engine?",
    options: ["A) 1-2-4-3", "B) 1-3-4-2", "C) 1-4-2-3", "D) 1-2-3-4"],
    answer: "B",
    explanation: "1-3-4-2 (or 1-2-4-3 in some designs) spreads the power impulses evenly. 1-3-4-2 is the most widely used."
  },
  {
    id: 20565, section: "Trade (Diesel Mechanic / Fitter)",
    text: "In a four-stroke engine, the camshaft rotates at",
    options: ["A) twice the speed of the crankshaft", "B) four times the speed of the crankshaft", "C) the same speed as the crankshaft", "D) half the speed of the crankshaft"],
    answer: "D",
    explanation: "Each valve opens once every two crankshaft revolutions, so the camshaft turns at half crankshaft speed."
  },
  {
    id: 20566, section: "Trade (Diesel Mechanic / Fitter)",
    text: "What is the main function of the flywheel?",
    options: ["A) To pump oil", "B) To store energy and keep the crankshaft speed steady", "C) To cool the engine", "D) To operate the valves"],
    answer: "B",
    explanation: "The flywheel smooths out the uneven power strokes and carries the engine through idle strokes."
  },
  {
    id: 20567, section: "Trade (Diesel Mechanic / Fitter)",
    text: "The lowest piston ring, which scrapes excess oil from the cylinder wall back to the sump, is called the",
    options: ["A) snap ring", "B) oil control (oil scraper) ring", "C) gudgeon ring", "D) compression ring"],
    answer: "B",
    explanation: "Compression rings seal the gas pressure, and the oil control ring controls oil consumption."
  },
  {
    id: 20568, section: "Trade (Diesel Mechanic / Fitter)",
    text: "A small fitting through which grease is pumped into a bearing or joint using a grease gun is called a",
    options: ["A) grease nipple", "B) breather", "C) drain plug", "D) dipstick"],
    answer: "A",
    explanation: "Grease nipples (zerk fittings) with a one-way ball valve are fitted at kingpins, universal joints, spring shackles and similar points."
  },
  {
    id: 20569, section: "Trade (Diesel Mechanic / Fitter)",
    text: "In the engine oil grade 'SAE 15W-40', the letter 'W' stands for",
    options: ["A) Weight", "B) Wear", "C) Water-resistant", "D) Winter"],
    answer: "D",
    explanation: "'15W' is the cold (winter) viscosity rating and '40' the viscosity at operating temperature (multigrade oil)."
  },
  {
    id: 20570, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Which of the following is NOT a function of engine lubricating oil?",
    options: ["A) To reduce friction and wear", "B) To clean and seal", "C) To help cool engine parts", "D) To increase friction between moving parts"],
    answer: "D",
    explanation: "Lubricating oil reduces friction. It also cools, cleans, seals and prevents corrosion."
  },
  {
    id: 20571, section: "Trade (Diesel Mechanic / Fitter)",
    text: "What is the function of the thermostat in an engine cooling system?",
    options: ["A) To keep the engine at its correct operating temperature by controlling coolant flow to the radiator", "B) To ignite the fuel", "C) To pump coolant", "D) To measure oil pressure"],
    answer: "A",
    explanation: "The thermostat stays closed when the engine is cold so it warms up quickly, then opens to send coolant through the radiator."
  },
  {
    id: 20572, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Which chemical is commonly used as an antifreeze in engine coolant?",
    options: ["A) Kerosene", "B) Sulphuric acid", "C) Sodium chloride", "D) Ethylene glycol"],
    answer: "D",
    explanation: "Ethylene glycol lowers the freezing point and raises the boiling point of coolant, and contains corrosion inhibitors."
  },
  {
    id: 20573, section: "Trade (Diesel Mechanic / Fitter)",
    text: "A turbocharger is driven by",
    options: ["A) the exhaust gases of the engine", "B) an electric motor", "C) the crankshaft through a belt", "D) the camshaft"],
    answer: "A",
    explanation: "A turbocharger uses exhaust energy to compress intake air. A supercharger is driven mechanically from the crankshaft."
  },
  {
    id: 20574, section: "Trade (Diesel Mechanic / Fitter)",
    text: "In a diesel engine, the governor is used to",
    options: ["A) control the engine speed by regulating the fuel supply", "B) control the coolant temperature", "C) adjust the valve clearance", "D) charge the battery"],
    answer: "A",
    explanation: "The governor adjusts fuel delivery to keep speed within limits under changing loads."
  },
  {
    id: 20575, section: "Trade (Diesel Mechanic / Fitter)",
    text: "'Bleeding' the fuel system of a diesel engine is done to",
    options: ["A) drain old engine oil", "B) remove trapped air from the fuel lines", "C) clean the radiator", "D) check the battery level"],
    answer: "B",
    explanation: "Air locks stop diesel from reaching the injectors, so air is bled out through bleed screws."
  },
  {
    id: 20576, section: "Trade (Diesel Mechanic / Fitter)",
    text: "What is the least count of a standard metric vernier caliper?",
    options: ["A) 0.02 mm", "B) 0.1 mm", "C) 0.001 mm", "D) 0.01 mm"],
    answer: "A",
    explanation: "A common metric vernier caliper reads to 0.02 mm. (Some read to 0.05 mm, but 0.02 mm is the standard workshop value.)"
  },
  {
    id: 20577, section: "Trade (Diesel Mechanic / Fitter)",
    text: "What is the least count of a standard outside micrometer?",
    options: ["A) 0.05 mm", "B) 0.1 mm", "C) 0.01 mm", "D) 0.02 mm"],
    answer: "C",
    explanation: "Pitch 0.5 mm ÷ 50 thimble divisions = 0.01 mm."
  },
  {
    id: 20578, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Which instrument is used to check the valve (tappet) clearance of an engine?",
    options: ["A) Hydrometer", "B) Vernier caliper", "C) Feeler gauge", "D) Tachometer"],
    answer: "C",
    explanation: "Feeler gauge blades of known thickness are slipped into the gap to measure small clearances."
  },
  {
    id: 20579, section: "Trade (Diesel Mechanic / Fitter)",
    text: "What is the standard point angle of a general-purpose twist drill?",
    options: ["A) 135°", "B) 90°", "C) 60°", "D) 118°"],
    answer: "D",
    explanation: "118° is the standard point angle for drilling mild steel and general work."
  },
  {
    id: 20580, section: "Trade (Diesel Mechanic / Fitter)",
    text: "In an interference (press) fit,",
    options: ["A) the shaft and hole are always equal", "B) the shaft is slightly larger than the hole", "C) the shaft is smaller than the hole", "D) there is always a large clearance"],
    answer: "B",
    explanation: "In an interference fit the shaft is oversize, so assembly needs pressure or heating. In a clearance fit the shaft is smaller than the hole."
  }
];
