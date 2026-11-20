// gssc_cbt2_greaser_mock3.js – Dr Shetye Academic Programme
// CBT 2 Greaser Mock 3 · GSSC Advt. No. 2 of 2026 · CBT-II · Constable (Greaser)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 21341–21400
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Trade (Diesel Mechanic / Fitter) Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Every oil change in a workshop produces a quantity of used engine oil. It may look like a small amount, but across thousands of vehicles it adds up to a large volume of a substance that is harmful to soil and water. Poured into a drain or onto open ground, used oil can contaminate groundwater and streams, and only a little is enough to spoil a large quantity of water.\n\nResponsible workshops collect used oil in sealed containers and hand it over to authorised recyclers, who can clean and reprocess it for further use. Oil filters, which retain oil even after draining, are also collected separately. Spills on the workshop floor are soaked up with absorbent material rather than washed away with water.\n\nThese practices cost a little time and effort, but they protect the environment on which everyone depends. They also reflect the professionalism of the workshop. Customers increasingly notice whether a garage is clean, orderly and careful with waste, and they are more likely to trust it with their vehicles."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 21341, section: "Reasoning",
    text: "Find the next term in the series: 120, 60, 20, 5, 1, ?",
    options: ["A) 0", "B) 1/2", "C) 1/5", "D) 1/6"],
    answer: "D",
    explanation: "The divisors are ÷2, ÷3, ÷4, ÷5, so the next is ÷6: 1/6."
  },
  {
    id: 21342, section: "Reasoning",
    text: "Find the next term in the series: ZA, YB, XC, WD, ?",
    options: ["A) VF", "B) VE", "C) UE", "D) WE"],
    answer: "B",
    explanation: "The first letters go back (Z, Y, X, W, V) and the second go forward (A, B, C, D, E)."
  },
  {
    id: 21343, section: "Reasoning",
    text: "In a certain code, GEAR is written as HFBS. Which word is written as TQBOOFS in that code?",
    options: ["A) SPINNER", "B) SPANNER", "C) SCANNER", "D) SPANKER"],
    answer: "B",
    explanation: "In the code each letter moves one place forward, so move each letter of TQBOOFS one place back: SPANNER."
  },
  {
    id: 21344, section: "Reasoning",
    text: "X is the brother of Y. Y is the daughter of Z. Z is the wife of W. How is X related to W?",
    options: ["A) Nephew", "B) Brother", "C) Son", "D) Father"],
    answer: "C",
    explanation: "Y is the daughter of Z and W, and X is Y's brother, so X is W's son."
  },
  {
    id: 21345, section: "Reasoning",
    text: "Five machines P, Q, R, S and T stand in a row. S is at the right end and T at the left end. P is second to the right of T. R is somewhere to the right of Q. Which machine is in the middle?",
    options: ["A) Q", "B) P", "C) T", "D) R"],
    answer: "B",
    explanation: "T = 1, S = 5, P = 3. Q and R take positions 2 and 4 with Q to the left of R, so the order is T, Q, P, R, S, with P in the middle."
  },
  {
    id: 21346, section: "Reasoning",
    text: "A worker facing East turns 90° anticlockwise and then 180° clockwise. Which direction is he facing now?",
    options: ["A) South", "B) East", "C) North", "D) West"],
    answer: "A",
    explanation: "East → (90° anticlockwise) North → (180°) South."
  },
  {
    id: 21347, section: "Reasoning",
    text: "Statements: No wrench is a hammer. All hammers are tools.<br>Conclusions:<br>I. No tool is a wrench.<br>II. Some tools are not wrenches.",
    options: ["A) Only I follows", "B) Both follow", "C) Only II follows", "D) Neither follows"],
    answer: "C",
    explanation: "Hammers are tools and are not wrenches, so some tools are not wrenches (II). I does not follow."
  },
  {
    id: 21348, section: "Reasoning",
    text: "A clock shows 7:20. What time will its mirror image show?",
    options: ["A) 5:20", "B) 5:40", "C) 4:20", "D) 4:40"],
    answer: "D",
    explanation: "Mirror time = 11:60 − 7:20 = 4:40."
  },
  {
    id: 21349, section: "Reasoning",
    text: "If 6 × 4 = 42 and 7 × 3 = 12 (the product written in reverse), what is 8 × 4?",
    options: ["A) 42", "B) 32", "C) 23", "D) 24"],
    answer: "C",
    explanation: "8 × 4 = 32, written in reverse as 23."
  },
  {
    id: 21350, section: "Reasoning",
    text: "If today is Wednesday, what day of the week will it be 100 days from today?",
    options: ["A) Friday", "B) Thursday", "C) Wednesday", "D) Saturday"],
    answer: "A",
    explanation: "100 = 14 weeks + 2 days. Wednesday + 2 = Friday."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 21351, section: "Numerical Ability",
    text: "A lathe spindle turns at 1,200 rpm. How many revolutions does it make in 2.5 minutes?",
    options: ["A) 3,600", "B) 2,400", "C) 480", "D) 3,000"],
    answer: "D",
    explanation: "1200 × 2.5 = 3,000."
  },
  {
    id: 21352, section: "Numerical Ability",
    text: "A 50-litre tank is 3/5 full. How many litres are needed to fill it?",
    options: ["A) 20 litres", "B) 25 litres", "C) 15 litres", "D) 30 litres"],
    answer: "A",
    explanation: "It holds 30 litres, so 20 litres are needed."
  },
  {
    id: 21353, section: "Numerical Ability",
    text: "What is a speed of 72 km/h in metres per second?",
    options: ["A) 25 m/s", "B) 20 m/s", "C) 72 m/s", "D) 18 m/s"],
    answer: "B",
    explanation: "72 × 5/18 = 20 m/s."
  },
  {
    id: 21354, section: "Numerical Ability",
    text: "A tool kit bought for ₹1,250 is sold for ₹1,500. What is the profit percentage?",
    options: ["A) 15%", "B) 16.7%", "C) 20%", "D) 25%"],
    answer: "C",
    explanation: "Profit = 250, and 250/1250 = 20%."
  },
  {
    id: 21355, section: "Numerical Ability",
    text: "How many litres can a cuboidal oil tank measuring 2 m × 1.5 m × 1 m hold?",
    options: ["A) 30,000 litres", "B) 4,500 litres", "C) 3,000 litres", "D) 300 litres"],
    answer: "C",
    explanation: "Volume = 3 m³ = 3,000 litres."
  },
  {
    id: 21356, section: "Numerical Ability",
    text: "Coolant is mixed with water and antifreeze in the ratio 3 : 2. How much antifreeze is in 10 litres of coolant?",
    options: ["A) 3 litres", "B) 4 litres", "C) 6 litres", "D) 5 litres"],
    answer: "B",
    explanation: "Antifreeze = 10 × 2/5 = 4 litres."
  },
  {
    id: 21357, section: "Numerical Ability",
    text: "A mechanic earns ₹600 a day and works 25 days in a month. If he spends 70% of his earnings, how much does he save?",
    options: ["A) ₹5,000", "B) ₹3,600", "C) ₹10,500", "D) ₹4,500"],
    answer: "D",
    explanation: "Earnings = 15,000, and 30% of that is ₹4,500."
  },
  {
    id: 21358, section: "Numerical Ability",
    text: "What is the simple interest on ₹8,000 at 7.5% per annum for 2 years?",
    options: ["A) ₹1,500", "B) ₹1,000", "C) ₹1,200", "D) ₹600"],
    answer: "C",
    explanation: "8000 × 7.5 × 2/100 = ₹1,200."
  },
  {
    id: 21359, section: "Numerical Ability",
    text: "A 15-tooth gear drives a 45-tooth gear. If the small gear turns at 600 rpm, what is the speed of the large gear?",
    options: ["A) 300 rpm", "B) 200 rpm", "C) 1,800 rpm", "D) 400 rpm"],
    answer: "B",
    explanation: "600 × 15/45 = 200 rpm."
  },
  {
    id: 21360, section: "Numerical Ability",
    text: "6 workers can complete a job in 10 days. How many workers are needed to complete it in 5 days?",
    options: ["A) 15", "B) 10", "C) 8", "D) 12"],
    answer: "D",
    explanation: "Man-days = 60, and 60/5 = 12 workers."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 21361, section: "English",
    passage: "passage_1",
    text: "What is the main idea of the passage?",
    options: ["A) Used oil is harmful and must be handled responsibly, which also reflects a workshop's professionalism", "B) Oil changes are unnecessary", "C) Customers do not care about workshops", "D) Used oil should be poured into drains"],
    answer: "A",
    explanation: "The passage covers the harm, the correct practices and the benefit to the workshop."
  },
  {
    id: 21362, section: "English",
    passage: "passage_1",
    text: "What do responsible workshops do with used oil, according to the passage?",
    options: ["A) Collect it in sealed containers and hand it to authorised recyclers", "B) Mix it with fresh oil", "C) Pour it onto open ground", "D) Burn it in the open"],
    answer: "A",
    explanation: "Stated in the second paragraph."
  },
  {
    id: 21363, section: "English",
    passage: "passage_1",
    text: "According to the passage, how should oil spills on the workshop floor be cleaned?",
    options: ["A) Covered with paint", "B) Left to evaporate", "C) Washed away with water", "D) Soaked up with absorbent material"],
    answer: "D",
    explanation: "Stated in the second paragraph."
  },
  {
    id: 21364, section: "English",
    passage: "passage_1",
    text: "What does the author suggest about customers?",
    options: ["A) They never notice how a garage handles waste", "B) They are more likely to trust a clean, well-run, careful garage", "C) They avoid all workshops", "D) They prefer cheap garages only"],
    answer: "B",
    explanation: "Stated in the last paragraph."
  },
  {
    id: 21365, section: "English",
    passage: "passage_1",
    text: "The word 'contaminate', as used in the passage, means",
    options: ["A) cool", "B) measure", "C) purify", "D) pollute"],
    answer: "D",
    explanation: "To contaminate is to pollute."
  },
  {
    id: 21366, section: "English",
    text: "Choose the word most similar in meaning to DAMAGE.",
    options: ["A) Gain", "B) Repair", "C) Harm", "D) Benefit"],
    answer: "C",
    explanation: "Damage means harm."
  },
  {
    id: 21367, section: "English",
    text: "Choose the word most similar in meaning to PRECISE.",
    options: ["A) Rough", "B) Vague", "C) Exact", "D) Loose"],
    answer: "C",
    explanation: "Precise means exact."
  },
  {
    id: 21368, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to CLEAN.",
    options: ["A) Neat", "B) Pure", "C) Tidy", "D) Dirty"],
    answer: "D",
    explanation: "The opposite of clean is dirty."
  },
  {
    id: 21369, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to STRONG.",
    options: ["A) Weak", "B) Tough", "C) Sturdy", "D) Powerful"],
    answer: "A",
    explanation: "The opposite of strong is weak."
  },
  {
    id: 21370, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The workers was (A) / given new (B) / safety shoes (C) / yesterday. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "The subject 'workers' is plural: 'were given'."
  },
  {
    id: 21371, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>This spanner is (A) / more better (B) / than (C) / that one. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "Double comparative: use 'better', not 'more better'."
  },
  {
    id: 21372, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>We reached (A) / the workshop (B) / at 9 o'clock (C) / in the morning time. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "D",
    explanation: "'Morning time' is redundant; write 'in the morning'."
  },
  {
    id: 21373, section: "English",
    text: "Fill in the blank: Used oil should be disposed ______ safely.",
    options: ["A) off", "B) of", "C) from", "D) with"],
    answer: "B",
    explanation: "The phrasal verb is 'dispose of'."
  },
  {
    id: 21374, section: "English",
    text: "Fill in the blank: Always wear gloves ______ handling chemicals.",
    options: ["A) during", "B) since", "C) unless", "D) while"],
    answer: "D",
    explanation: "'While' + gerund means 'at the time of'."
  },
  {
    id: 21375, section: "English",
    text: "Fill in the blank: The engine stopped because it ran ______ of fuel.",
    options: ["A) off", "B) away", "C) down", "D) out"],
    answer: "D",
    explanation: "'Run out of' means to use up completely."
  },
  {
    id: 21376, section: "English",
    text: "Choose the correct meaning of the idiom: To call it a day",
    options: ["A) To stop working for the day", "B) To start a new job", "C) To name a holiday", "D) To fix a date"],
    answer: "A",
    explanation: "To call it a day is to stop work."
  },
  {
    id: 21377, section: "English",
    text: "Choose the correct meaning of the idiom: Elbow grease",
    options: ["A) A type of grease gun", "B) Hard physical effort", "C) A minor injury", "D) Lubricating oil"],
    answer: "B",
    explanation: "Elbow grease means hard physical work, especially cleaning or polishing."
  },
  {
    id: 21378, section: "English",
    text: "Choose the one word for: A person employed to drive a private car for someone",
    options: ["A) Pilot", "B) Conductor", "C) Chauffeur", "D) Mechanic"],
    answer: "C",
    explanation: "A chauffeur is a paid private driver."
  },
  {
    id: 21379, section: "English",
    text: "Choose the correctly spelt word.",
    options: ["A) Machinerry", "B) Machinary", "C) Mashinery", "D) Machinery"],
    answer: "D",
    explanation: "The correct spelling is M-A-C-H-I-N-E-R-Y."
  },
  {
    id: 21380, section: "English",
    text: "Arrange the sentences in a logical order:<br>P. He drained the old oil into a container.<br>Q. The mechanic raised the vehicle on the hoist.<br>R. He then refilled the engine with fresh oil.<br>S. He replaced the old oil filter with a new one.",
    options: ["A) QPRS", "B) QPSR", "C) QSPR", "D) PQSR"],
    answer: "B",
    explanation: "Q (raise the vehicle) → P (drain) → S (new filter) → R (refill)."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Trade (Diesel Mechanic / Fitter)
  // ════════════════════════════════════════════════════════════
  {
    id: 21381, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Sodium-based grease is not suitable where water is present because",
    options: ["A) it conducts electricity", "B) it is too hard", "C) it is soluble in water and gets washed out", "D) it catches fire easily"],
    answer: "C",
    explanation: "Sodium soap grease emulsifies with water. Calcium or lithium greases are used in wet conditions."
  },
  {
    id: 21382, section: "Trade (Diesel Mechanic / Fitter)",
    text: "The NLGI grade number of a grease indicates its",
    options: ["A) flash point", "B) consistency (hardness)", "C) colour", "D) price"],
    answer: "B",
    explanation: "NLGI grades run from 000 (very soft) to 6 (very hard). Grade 2 is common for general use."
  },
  {
    id: 21383, section: "Trade (Diesel Mechanic / Fitter)",
    text: "'EP' additives are added to gear oils to",
    options: ["A) change the colour", "B) reduce the price", "C) increase water content", "D) withstand extreme pressure between heavily loaded gear teeth"],
    answer: "D",
    explanation: "Extreme-pressure additives form protective films that prevent gear tooth scoring."
  },
  {
    id: 21384, section: "Trade (Diesel Mechanic / Fitter)",
    text: "The 'viscosity index' of a lubricating oil indicates",
    options: ["A) its density", "B) its flash point", "C) how little its viscosity changes with temperature", "D) its colour"],
    answer: "C",
    explanation: "A high viscosity index means the oil thins less when hot and thickens less when cold."
  },
  {
    id: 21385, section: "Trade (Diesel Mechanic / Fitter)",
    text: "The 'flash point' of an oil is",
    options: ["A) the lowest temperature at which its vapour ignites momentarily when a flame is applied", "B) the temperature at which it freezes", "C) its boiling point", "D) its viscosity at 40 °C"],
    answer: "A",
    explanation: "The flash point is an important safety property for storing and handling oils."
  },
  {
    id: 21386, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Most cars use which type of clutch?",
    options: ["A) Single-plate dry friction clutch", "B) Centrifugal clutch", "C) Electromagnetic clutch", "D) Multi-plate wet clutch"],
    answer: "A",
    explanation: "Single-plate dry clutches are common in cars. Multi-plate wet clutches are common in motorcycles."
  },
  {
    id: 21387, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Which type of gearbox uses synchronising devices so that gears can be shifted smoothly without clashing?",
    options: ["A) Epicyclic gearbox only", "B) Synchromesh gearbox", "C) Sliding-mesh gearbox", "D) Constant-mesh gearbox without synchronisers"],
    answer: "B",
    explanation: "Synchronisers match the speeds of the gear and shaft before engagement."
  },
  {
    id: 21388, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Why is a slip joint provided on the propeller shaft?",
    options: ["A) To change gear ratios", "B) To stop the vehicle", "C) To cool the shaft", "D) To allow changes in the length of the shaft as the rear axle moves up and down"],
    answer: "D",
    explanation: "Suspension movement changes the distance between the gearbox and the axle, and the slip joint absorbs this."
  },
  {
    id: 21389, section: "Trade (Diesel Mechanic / Fitter)",
    text: "In a rear-wheel-drive vehicle, the drive is turned through 90° to the rear wheels by the",
    options: ["A) clutch", "B) gearbox", "C) crown wheel and pinion in the final drive", "D) flywheel"],
    answer: "C",
    explanation: "The bevel pinion drives the crown wheel, giving the final reduction and turning the drive through a right angle."
  },
  {
    id: 21390, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Which type of bearing is commonly used in the universal joints of a propeller shaft?",
    options: ["A) Tapered roller bearings", "B) Needle roller bearings", "C) Plain bush bearings", "D) Thrust ball bearings"],
    answer: "B",
    explanation: "Needle bearings carry high loads in a small space, and the universal joint cups contain them."
  },
  {
    id: 21391, section: "Trade (Diesel Mechanic / Fitter)",
    text: "For cutting thin sheet metal or thin-walled tubes with a hacksaw, the blade should have",
    options: ["A) coarse teeth (fewer teeth per inch)", "B) no teeth", "C) fine teeth (more teeth per inch)", "D) teeth on both edges"],
    answer: "C",
    explanation: "At least three teeth should stay in contact with thin material. Coarse blades suit thick, soft material."
  },
  {
    id: 21392, section: "Trade (Diesel Mechanic / Fitter)",
    text: "A set of hand taps for cutting internal threads usually consists of",
    options: ["A) drill, reamer and die", "B) only one tap", "C) taper, intermediate (second) and plug (bottoming) taps", "D) file, chisel and punch"],
    answer: "C",
    explanation: "The taper tap starts the thread, the second tap continues it, and the plug tap finishes to the bottom of a blind hole."
  },
  {
    id: 21393, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Which tool is used to cut external threads on a rod or bolt?",
    options: ["A) Die", "B) Tap", "C) Countersink", "D) Reamer"],
    answer: "A",
    explanation: "A die cuts external threads. A tap cuts internal threads."
  },
  {
    id: 21394, section: "Trade (Diesel Mechanic / Fitter)",
    text: "The recommended tap drill size for an M10 × 1.5 coarse thread is approximately",
    options: ["A) 8.5 mm", "B) 10 mm", "C) 9.5 mm", "D) 7.5 mm"],
    answer: "A",
    explanation: "Tap drill ≈ nominal diameter − pitch = 10 − 1.5 = 8.5 mm."
  },
  {
    id: 21395, section: "Trade (Diesel Mechanic / Fitter)",
    text: "A centre punch, used to mark the position of holes for drilling, normally has a point angle of",
    options: ["A) 30°", "B) 90°", "C) 60°", "D) 118°"],
    answer: "B",
    explanation: "A centre punch has a 90° point. A prick punch has a sharper point (about 30°–60°) for fine marking."
  },
  {
    id: 21396, section: "Trade (Diesel Mechanic / Fitter)",
    text: "A try square is used in fitting work to",
    options: ["A) check whether surfaces are at right angles (90°)", "B) measure screw pitch", "C) measure diameters", "D) cut metal"],
    answer: "A",
    explanation: "A try square checks squareness and flatness."
  },
  {
    id: 21397, section: "Trade (Diesel Mechanic / Fitter)",
    text: "What is the least count of an ordinary steel rule used in a workshop?",
    options: ["A) 0.5 mm", "B) 0.02 mm", "C) 0.01 mm", "D) 1 cm"],
    answer: "A",
    explanation: "A steel rule can be read to about 0.5 mm. A vernier reads to 0.02 mm and a micrometer to 0.01 mm."
  },
  {
    id: 21398, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Which heat treatment process is used to soften steel and relieve internal stresses?",
    options: ["A) Quenching", "B) Hardening", "C) Case hardening", "D) Annealing"],
    answer: "D",
    explanation: "Annealing heats steel and cools it slowly, making it softer and more ductile."
  },
  {
    id: 21399, section: "Trade (Diesel Mechanic / Fitter)",
    text: "The ignition quality of diesel fuel is indicated by its",
    options: ["A) viscosity index", "B) API gravity", "C) cetane number", "D) octane number"],
    answer: "C",
    explanation: "A higher cetane number means quicker ignition. The octane number applies to petrol."
  },
  {
    id: 21400, section: "Trade (Diesel Mechanic / Fitter)",
    text: "Which extinguishing agent is suitable for a Class B fire (burning oil, diesel or petrol)?",
    options: ["A) Foam (or CO₂ / dry chemical powder)", "B) Water jet", "C) Wet sand mixed with water", "D) Blowing air on it"],
    answer: "A",
    explanation: "Foam smothers burning liquid. A water jet spreads burning oil."
  }
];
