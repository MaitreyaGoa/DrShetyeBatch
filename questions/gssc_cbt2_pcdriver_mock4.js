// gssc_cbt2_pcdriver_mock4.js – Dr Shetye Academic Programme
// CBT 2 PC Driver Mock 4 · GSSC Advt. No. 2 of 2026 · CBT-II · Police Constable Driver (Grade-III)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 21061–21120
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Traffic Rules & Vehicle Maintenance Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Overloaded goods vehicles are a familiar sight on India's highways: trucks piled high with sand, stone or iron ore, their springs flattened and their tyres bulging. To the operator, carrying a few extra tonnes in each trip may seem like simple economics. To everyone else on the road, it is a hazard. An overloaded vehicle takes longer to stop, is harder to steer on curves and is more likely to suffer brake failure or a tyre burst on a long descent.\n\nThe damage does not end with accidents. Roads and bridges are designed for specific axle loads. A vehicle carrying far more than its permitted weight causes damage out of all proportion to the excess, so that a road built to last for years may begin to crumble within months. The cost of repairs is ultimately borne by the public.\n\nEnforcement through weighbridges and fines has an important place, but it works best alongside a change in attitude among transporters. When operators understand that overloading shortens the life of their own vehicles, raises maintenance costs and endangers their own drivers, compliance becomes a matter of self-interest as well as law."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 21061, section: "Reasoning",
    text: "Find the next term in the series: 1, 2, 5, 14, 41, ?",
    options: ["A) 122", "B) 120", "C) 123", "D) 125"],
    answer: "A",
    explanation: "Each term is (previous × 3) − 1: 41 × 3 − 1 = 122."
  },
  {
    id: 21062, section: "Reasoning",
    text: "Find the next group in the series: DFH, JLN, PRT, ?",
    options: ["A) VXZ", "B) VWX", "C) WYA", "D) UWY"],
    answer: "A",
    explanation: "Each letter moves 6 places forward from group to group: P→V, R→X, T→Z."
  },
  {
    id: 21063, section: "Reasoning",
    text: "In a certain code, 'go slow now' is written as 'pa ki ma', 'slow down please' as 'ki ra ta', and 'now please stop' as 'ta ma su'. What is the code for 'down'?",
    options: ["A) ma", "B) ta", "C) ra", "D) ki"],
    answer: "C",
    explanation: "slow = ki (sentences 1 and 2), now = ma (1 and 3), please = ta (2 and 3). The remaining word in sentence 2, 'down', is ra."
  },
  {
    id: 21064, section: "Reasoning",
    text: "If 'A ★ B' means A is the husband of B, 'A ◆ B' means A is the sister of B and 'A ▲ B' means A is the son of B, then in 'P ▲ Q ★ R ◆ S', how is S related to P?",
    options: ["A) Maternal aunt", "B) Paternal uncle", "C) Grandmother", "D) Maternal uncle or maternal aunt"],
    answer: "D",
    explanation: "P is Q's son, Q is R's husband (so R is P's mother), and R is S's sister. S is P's mother's sibling. S's gender is not given, so S is P's maternal uncle or aunt."
  },
  {
    id: 21065, section: "Reasoning",
    text: "Seven buses A, B, C, D, E, F and G leave a depot one after another at 7, 8, 9, 10, 11 a.m., 12 noon and 1 p.m. C leaves at 10 a.m. Exactly two buses leave between C and F. A leaves immediately before E. B leaves after G but before D. Neither D nor F leaves last. Which bus leaves last, at 1 p.m.?",
    options: ["A) B", "B) E", "C) D", "D) A"],
    answer: "B",
    explanation: "C is 4th. F is 1st or 7th, and F is not last, so F = 1st. Of the remaining slots 2, 3, 5, 6 and 7, A–E must be consecutive, G &lt; B &lt; D, and D is not 7th. The only fit is G = 2, B = 3, D = 5, A = 6, E = 7."
  },
  {
    id: 21066, section: "Reasoning",
    text: "A driver goes 7 km West, turns right and goes 8 km, then turns right again and goes 13 km. How far is he from the starting point, and in which direction?",
    options: ["A) 14 km, North-East", "B) 10 km, North-West", "C) 8 km, North", "D) 10 km, North-East"],
    answer: "D",
    explanation: "(−7,0) → (−7,8) → (6,8). Distance = √(6² + 8²) = 10 km, to the North-East."
  },
  {
    id: 21067, section: "Reasoning",
    text: "Statements: Only drivers are licensed. Some licensed persons are mechanics.<br>Conclusions:<br>I. Some drivers are mechanics.<br>II. All mechanics are drivers.",
    options: ["A) Only I follows", "B) Neither follows", "C) Both follow", "D) Only II follows"],
    answer: "A",
    explanation: "'Only drivers are licensed' means every licensed person is a driver. The licensed mechanics are therefore drivers (I follows). Other mechanics may not be (II does not)."
  },
  {
    id: 21068, section: "Reasoning",
    text: "The mirror image of a clock shows the time 2:25. What is the actual time?",
    options: ["A) 9:35", "B) 9:25", "C) 10:35", "D) 10:25"],
    answer: "A",
    explanation: "Actual time = 11:60 − 2:25 = 9:35."
  },
  {
    id: 21069, section: "Reasoning",
    text: "If 15 August 2027 is a Sunday, what day of the week was 15 August 2026?",
    options: ["A) Friday", "B) Sunday", "C) Saturday", "D) Monday"],
    answer: "C",
    explanation: "Between the two dates are 365 days (no 29 February), i.e. 52 weeks + 1 day. One day before Sunday is Saturday."
  },
  {
    id: 21070, section: "Reasoning",
    text: "Statement: Should the use of hand-held mobile phones while driving be completely banned?<br>Arguments:<br>I. Yes. It diverts the driver's attention and causes accidents.<br>II. No. People need to stay connected at all times.",
    options: ["A) Only argument I is strong", "B) Only argument II is strong", "C) Both are strong", "D) Neither is strong"],
    answer: "A",
    explanation: "I gives a valid safety reason. II is weak, since a driver can stop safely to take calls."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 21071, section: "Numerical Ability",
    text: "The price of petrol rises from ₹96 to ₹120 per litre. What is the percentage increase?",
    options: ["A) 30%", "B) 24%", "C) 25%", "D) 20%"],
    answer: "C",
    explanation: "Increase = 24/96 = 25%."
  },
  {
    id: 21072, section: "Numerical Ability",
    text: "A dealer sells a scooter at a loss of 10%. Had he sold it for ₹9,000 more, he would have gained 8%. What is the cost price?",
    options: ["A) ₹50,000", "B) ₹40,000", "C) ₹60,000", "D) ₹45,000"],
    answer: "A",
    explanation: "The difference of 18% of the cost price is ₹9,000, so the cost price is ₹50,000."
  },
  {
    id: 21073, section: "Numerical Ability",
    text: "A truck goes 240 km at 40 km/h. At what speed must it return over the same distance so that the average speed for the round trip is 48 km/h?",
    options: ["A) 64 km/h", "B) 60 km/h", "C) 56 km/h", "D) 52 km/h"],
    answer: "B",
    explanation: "Total time allowed = 480/48 = 10 h. The trip out takes 6 h, so the return must take 4 h: 240/4 = 60 km/h."
  },
  {
    id: 21074, section: "Numerical Ability",
    text: "Two trains 120 m and 80 m long run in opposite directions at 54 km/h and 36 km/h. How long will they take to cross each other?",
    options: ["A) 10 seconds", "B) 12 seconds", "C) 8 seconds", "D) 20 seconds"],
    answer: "C",
    explanation: "Relative speed = 90 km/h = 25 m/s. 200/25 = 8 s."
  },
  {
    id: 21075, section: "Numerical Ability",
    text: "A man spends 30% of his income on rent and 20% of the remainder on food. If he saves ₹11,200, what is his income?",
    options: ["A) ₹18,000", "B) ₹16,000", "C) ₹22,400", "D) ₹20,000"],
    answer: "D",
    explanation: "Savings = 0.7 × 0.8 = 56% of income. 11200/0.56 = ₹20,000."
  },
  {
    id: 21076, section: "Numerical Ability",
    text: "What is the compound interest on ₹8,000 at 5% per annum for 2 years, compounded annually?",
    options: ["A) ₹820", "B) ₹800", "C) ₹810", "D) ₹840"],
    answer: "A",
    explanation: "8000 × 1.1025 = 8,820, so CI = ₹820."
  },
  {
    id: 21077, section: "Numerical Ability",
    text: "A bus's average speed over 6 hours is 45 km/h. If it travelled at 30 km/h for the first 2 hours, what was its average speed for the remaining 4 hours?",
    options: ["A) 55 km/h", "B) 60 km/h", "C) 52.5 km/h", "D) 50 km/h"],
    answer: "C",
    explanation: "Total distance = 270 km and the first part = 60 km. 210/4 = 52.5 km/h."
  },
  {
    id: 21078, section: "Numerical Ability",
    text: "In a town, 60% of the people use buses, 50% use trains and 20% use both. What percentage use neither?",
    options: ["A) 0%", "B) 20%", "C) 30%", "D) 10%"],
    answer: "D",
    explanation: "Users of at least one = 60 + 50 − 20 = 90%, so 10% use neither."
  },
  {
    id: 21079, section: "Numerical Ability",
    text: "The front wheel of a cart has a circumference of 2 m and the rear wheel 3 m. Over what distance will the front wheel make 10 more revolutions than the rear wheel?",
    options: ["A) 30 m", "B) 60 m", "C) 50 m", "D) 120 m"],
    answer: "B",
    explanation: "d/2 − d/3 = 10 gives d/6 = 10, so d = 60 m."
  },
  {
    id: 21080, section: "Numerical Ability",
    text: "A fuel tank is 2/5 full. After 21 litres are added, it is 3/4 full. What is the capacity of the tank?",
    options: ["A) 70 litres", "B) 50 litres", "C) 84 litres", "D) 60 litres"],
    answer: "D",
    explanation: "3/4 − 2/5 = 7/20 of the tank = 21 litres, so the capacity is 60 litres."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 21081, section: "English",
    passage: "passage_1",
    text: "Which of the following best expresses the main idea of the passage?",
    options: ["A) Weighbridges alone have solved the overloading problem", "B) Only bridges are affected by overloading", "C) Overloading endangers road users and damages roads, so enforcement must be matched by a change in transporters' attitudes", "D) Overloading is good economics and should be encouraged"],
    answer: "C",
    explanation: "The passage covers the dangers, the road damage, and the need for both enforcement and attitude change."
  },
  {
    id: 21082, section: "English",
    passage: "passage_1",
    text: "Which of the following is NOT mentioned as a consequence of overloading?",
    options: ["A) Longer stopping distance", "B) Improved fuel efficiency", "C) Damage to roads", "D) Brake failure on descents"],
    answer: "B",
    explanation: "Fuel efficiency is not mentioned. The other three are."
  },
  {
    id: 21083, section: "English",
    passage: "passage_1",
    text: "The phrase 'out of all proportion to the excess' means that the damage is",
    options: ["A) less than expected", "B) much greater than the extra load alone would suggest", "C) impossible to measure", "D) exactly equal to the extra load"],
    answer: "B",
    explanation: "A small excess load causes very large damage."
  },
  {
    id: 21084, section: "English",
    passage: "passage_1",
    text: "According to the passage, who ultimately pays for repairing roads damaged by overloaded vehicles?",
    options: ["A) The vehicle manufacturers", "B) The truck drivers", "C) The weighbridge operators", "D) The public"],
    answer: "D",
    explanation: "'The cost of repairs is ultimately borne by the public.'"
  },
  {
    id: 21085, section: "English",
    passage: "passage_1",
    text: "According to the author, compliance with load limits works best when",
    options: ["A) operators see that it serves their own interest", "B) fines are abolished", "C) roads are made wider", "D) drivers are paid less"],
    answer: "A",
    explanation: "Stated in the last sentence."
  },
  {
    id: 21086, section: "English",
    text: "Choose the word most similar in meaning to HALT.",
    options: ["A) Start", "B) Stop", "C) Hurry", "D) Continue"],
    answer: "B",
    explanation: "To halt is to stop."
  },
  {
    id: 21087, section: "English",
    text: "Choose the word most similar in meaning to HAZARD.",
    options: ["A) Risk", "B) Reward", "C) Comfort", "D) Safety"],
    answer: "A",
    explanation: "A hazard is a risk or danger."
  },
  {
    id: 21088, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to HEAVY.",
    options: ["A) Weighty", "B) Light", "C) Massive", "D) Bulky"],
    answer: "B",
    explanation: "The opposite of heavy is light."
  },
  {
    id: 21089, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to NARROW.",
    options: ["A) Wide", "B) Thin", "C) Slim", "D) Tight"],
    answer: "A",
    explanation: "The opposite of narrow is wide."
  },
  {
    id: 21090, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Sand and gravel (A) / was loaded (B) / on the truck (C) / at the quarry. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "Two subjects joined by 'and' take a plural verb: 'were loaded'."
  },
  {
    id: 21091, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The roads (A) / in the hilly area (B) / is (C) / very narrow. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "The subject 'roads' is plural: 'are very narrow'."
  },
  {
    id: 21092, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The truck had (A) / overturned (B) / before the police (C) / have arrived. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "D",
    explanation: "The later past action takes the simple past: 'before the police arrived'."
  },
  {
    id: 21093, section: "English",
    text: "Fill in the blank: The truck was found ______ the permitted load by three tonnes.",
    options: ["A) exceed", "B) to exceed", "C) exceeding", "D) exceeded"],
    answer: "C",
    explanation: "'Found + present participle' describes what it was doing: 'found exceeding'."
  },
  {
    id: 21094, section: "English",
    text: "Fill in the blank: The old bridge is not strong enough ______ heavy trucks.",
    options: ["A) for bear", "B) bore", "C) bearing", "D) to bear"],
    answer: "D",
    explanation: "'Enough' is followed by 'to + verb'."
  },
  {
    id: 21095, section: "English",
    text: "Fill in the blank: Every driver must comply ______ the traffic rules.",
    options: ["A) to", "B) by", "C) with", "D) for"],
    answer: "C",
    explanation: "'Comply with' is the correct collocation."
  },
  {
    id: 21096, section: "English",
    text: "Choose the correct meaning of the idiom: To go off the rails",
    options: ["A) To become rich", "B) To have a train accident", "C) To travel abroad", "D) To start behaving badly or wrongly"],
    answer: "D",
    explanation: "To go off the rails is to begin behaving in an unacceptable or uncontrolled way."
  },
  {
    id: 21097, section: "English",
    text: "Choose the correct meaning of the idiom: To drive a hard bargain",
    options: ["A) To refuse to work", "B) To lose an argument", "C) To negotiate firmly to get the best deal", "D) To drive a truck carelessly"],
    answer: "C",
    explanation: "It means to bargain strongly in one's own favour."
  },
  {
    id: 21098, section: "English",
    text: "Choose the one word for: A machine used to weigh loaded vehicles",
    options: ["A) Barometer", "B) Speedometer", "C) Weighbridge", "D) Odometer"],
    answer: "C",
    explanation: "A weighbridge weighs whole vehicles and their loads."
  },
  {
    id: 21099, section: "English",
    text: "Choose the correctly spelt word.",
    options: ["A) Occurence", "B) Ocurrence", "C) Occurance", "D) Occurrence"],
    answer: "D",
    explanation: "The correct spelling is O-C-C-U-R-R-E-N-C-E."
  },
  {
    id: 21100, section: "English",
    text: "Arrange the sentences in a logical order:<br>P. The weighbridge showed that the truck was carrying eight tonnes extra.<br>Q. A truck loaded with iron ore was stopped at the check-post.<br>R. The excess load was unloaded and the driver was fined.<br>S. It was directed to the nearby weighbridge.",
    options: ["A) QSPR", "B) SQPR", "C) QSRP", "D) QPSR"],
    answer: "A",
    explanation: "Q (stopped) → S (sent to the weighbridge) → P (excess found) → R (action taken)."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Traffic Rules & Vehicle Maintenance
  // ════════════════════════════════════════════════════════════
  {
    id: 21101, section: "Traffic Rules & Vehicle Maintenance",
    text: "An International Driving Permit (IDP) issued in India is valid for",
    options: ["A) five years", "B) one year", "C) ten years", "D) six months"],
    answer: "B",
    explanation: "An IDP is valid for one year from the date of issue (or until the Indian licence expires, if sooner)."
  },
  {
    id: 21102, section: "Traffic Rules & Vehicle Maintenance",
    text: "Using a hand-held mobile phone while driving is treated under the MV Act as",
    options: ["A) a parking offence", "B) no offence at all", "C) a registration offence", "D) dangerous driving"],
    answer: "D",
    explanation: "The amended Section 184 (dangerous driving) covers the use of hand-held communication devices while driving."
  },
  {
    id: 21103, section: "Traffic Rules & Vehicle Maintenance",
    text: "Under the MV Act, driving a vehicle when one is mentally or physically unfit to drive is",
    options: ["A) allowed for short distances", "B) not covered by law", "C) a punishable offence", "D) allowed in emergencies"],
    answer: "C",
    explanation: "Section 186 makes driving while unfit (in a way that is a danger to the public) punishable."
  },
  {
    id: 21104, section: "Traffic Rules & Vehicle Maintenance",
    text: "Under the amended MV Act, a two-wheeler carrying more than one pillion rider can attract",
    options: ["A) imprisonment for 1 year", "B) a fine of ₹1,000 and disqualification of the licence for 3 months", "C) only a warning", "D) a fine of ₹100 only"],
    answer: "B",
    explanation: "Section 194C covers violations of safety measures for two-wheeler riders and pillions."
  },
  {
    id: 21105, section: "Traffic Rules & Vehicle Maintenance",
    text: "Number plates of private non-transport vehicles in India have",
    options: ["A) white letters on a red background", "B) black letters on a white background", "C) yellow letters on a black background", "D) black letters on a yellow background"],
    answer: "B",
    explanation: "Private vehicles use white plates with black letters."
  },
  {
    id: 21106, section: "Traffic Rules & Vehicle Maintenance",
    text: "Self-drive rental vehicles in India carry number plates with",
    options: ["A) black letters on a white background", "B) black letters on a green background", "C) yellow letters on a black background", "D) white letters on a blue background"],
    answer: "C",
    explanation: "Commercial self-drive rental vehicles use black plates with yellow letters."
  },
  {
    id: 21107, section: "Traffic Rules & Vehicle Maintenance",
    text: "According to the Rules of the Road, a driver should NOT overtake",
    options: ["A) on a bend, near a junction or where the road ahead is not clearly visible", "B) a slow-moving tractor on an open road", "C) when the vehicle in front signals that it is safe", "D) on a straight, clear highway"],
    answer: "A",
    explanation: "Overtaking is unsafe and prohibited where visibility is limited."
  },
  {
    id: 21108, section: "Traffic Rules & Vehicle Maintenance",
    text: "Parking a vehicle is prohibited",
    options: ["A) in one's own garage", "B) in front of a hospital entrance or near a fire hydrant", "C) in a parking lot", "D) in a marked parking bay"],
    answer: "B",
    explanation: "Parking must not block entrances, emergency access, footpaths or fire hydrants."
  },
  {
    id: 21109, section: "Traffic Rules & Vehicle Maintenance",
    text: "What colour must a vehicle's reversing light be?",
    options: ["A) White", "B) Blue", "C) Red", "D) Amber"],
    answer: "A",
    explanation: "Reversing lamps are white, tail lamps red, and indicators amber."
  },
  {
    id: 21110, section: "Traffic Rules & Vehicle Maintenance",
    text: "A traffic policeman raises his right arm vertically with the palm facing forward. This signal means",
    options: ["A) vehicles must reverse", "B) all vehicles may proceed", "C) vehicles from the left may turn", "D) vehicles approaching from the front must stop"],
    answer: "D",
    explanation: "A raised right arm with the palm facing forward stops traffic approaching from the front."
  },
  {
    id: 21111, section: "Traffic Rules & Vehicle Maintenance",
    text: "A circular sign with a red border showing a horn crossed out means",
    options: ["A) Horn compulsory", "B) Loudspeakers allowed", "C) Horn prohibited", "D) Hospital ahead"],
    answer: "C",
    explanation: "It is a mandatory (prohibitory) sign meaning 'Horn Prohibited'."
  },
  {
    id: 21112, section: "Traffic Rules & Vehicle Maintenance",
    text: "The road sign warning of a 'Speed Breaker' ahead belongs to which category?",
    options: ["A) Prohibitory signs", "B) Mandatory signs", "C) Informatory signs", "D) Cautionary (warning) signs"],
    answer: "D",
    explanation: "Speed breaker signs are triangular warning signs."
  },
  {
    id: 21113, section: "Traffic Rules & Vehicle Maintenance",
    text: "Vibration of the steering wheel at high speeds is most commonly caused by",
    options: ["A) a weak battery", "B) low brake fluid", "C) a dirty air filter", "D) unbalanced wheels"],
    answer: "D",
    explanation: "Wheel balancing removes uneven weight distribution, which causes vibration at speed."
  },
  {
    id: 21114, section: "Traffic Rules & Vehicle Maintenance",
    text: "A clogged air filter in an engine most likely causes",
    options: ["A) better mileage", "B) black smoke and higher fuel consumption", "C) white smoke from the exhaust", "D) a flat battery"],
    answer: "B",
    explanation: "Too little air makes the fuel mixture rich, causing black smoke and poor mileage."
  },
  {
    id: 21115, section: "Traffic Rules & Vehicle Maintenance",
    text: "White powdery corrosion on battery terminals can be safely cleaned using",
    options: ["A) petrol", "B) engine oil", "C) a solution of baking soda in water", "D) sulphuric acid"],
    answer: "C",
    explanation: "Baking soda neutralises the acid deposits. A thin coat of petroleum jelly afterwards slows new corrosion."
  },
  {
    id: 21116, section: "Traffic Rules & Vehicle Maintenance",
    text: "What is a major safety advantage of tubeless tyres?",
    options: ["A) They can be used without rims", "B) They never wear out", "C) They do not need air", "D) They deflate slowly after a puncture, giving better control"],
    answer: "D",
    explanation: "A punctured tubeless tyre loses air gradually, unlike a tube tyre, which can deflate suddenly."
  },
  {
    id: 21117, section: "Traffic Rules & Vehicle Maintenance",
    text: "Why should the radiator cap of a hot engine never be opened?",
    options: ["A) The battery will discharge", "B) The pressurised hot coolant can spray out and cause severe burns", "C) The brakes will fail", "D) The engine will stop working"],
    answer: "B",
    explanation: "The cooling system is under pressure when hot. Let it cool first."
  },
  {
    id: 21118, section: "Traffic Rules & Vehicle Maintenance",
    text: "An unconscious accident victim who is breathing normally and has no suspected spinal injury should be placed",
    options: ["A) in the recovery position (on the side)", "B) sitting upright", "C) flat on the stomach with the face down", "D) with the head lower than the feet in a sitting position"],
    answer: "A",
    explanation: "The recovery position keeps the airway open and lets fluids drain from the mouth."
  },
  {
    id: 21119, section: "Traffic Rules & Vehicle Maintenance",
    text: "In case of a minor burn injury to a driver, the immediate first aid is to",
    options: ["A) cool the burn under clean running water", "B) apply butter or oil", "C) burst any blisters", "D) cover it tightly with cotton wool"],
    answer: "A",
    explanation: "Cool running water for several minutes reduces damage. Never apply oil or burst blisters."
  },
  {
    id: 21120, section: "Traffic Rules & Vehicle Maintenance",
    text: "The toll-free ambulance number used in Goa and many other states is",
    options: ["A) 101", "B) 108", "C) 100", "D) 1098"],
    answer: "B",
    explanation: "108 is the emergency ambulance service. 112 is the integrated emergency number."
  }
];
