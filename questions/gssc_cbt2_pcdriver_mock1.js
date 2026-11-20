// gssc_cbt2_pcdriver_mock1.js – Dr Shetye Academic Programme
// CBT 2 PC Driver Mock 1 · GSSC Advt. No. 2 of 2026 · CBT-II · Police Constable Driver (Grade-III)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 20241–20300
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Traffic Rules & Vehicle Maintenance Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Ask most drivers what causes road accidents and they will mention speed, alcohol or bad roads. Few will mention tiredness, yet fatigue is among the most underestimated dangers on the highway. A tired driver does not usually fall asleep suddenly at the wheel. Long before that happens, his reaction time lengthens, his attention narrows and his judgement of distance and speed becomes unreliable. He may experience 'micro-sleeps' — lapses of a few seconds in which the brain simply switches off. At seventy kilometres an hour, a vehicle travels nearly sixty metres in three seconds, a distance in which almost anything can happen.\n\nProfessional drivers are particularly at risk because their work often involves long hours, night duty and pressure to reach the destination on time. The warning signs are well known: repeated yawning, heavy eyelids, drifting out of the lane and difficulty remembering the last few kilometres. The only reliable remedy is rest. Opening the window, turning up the radio or drinking strong tea may keep a driver alert for a few minutes, but they do not remove the underlying need for sleep.\n\nA responsible driver plans his journey with regular breaks and treats tiredness not as a weakness to be overcome but as a signal to stop."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 20241, section: "Reasoning",
    text: "Find the next term in the series: 4, 6, 10, 18, 34, ?",
    options: ["A) 64", "B) 66", "C) 68", "D) 62"],
    answer: "B",
    explanation: "Each term is (previous × 2) − 2: 34 × 2 − 2 = 66. (Equivalently, the differences 2, 4, 8, 16 double, so the next is +32.)"
  },
  {
    id: 20242, section: "Reasoning",
    text: "Find the next letter in the series: D, G, K, P, ?",
    options: ["A) W", "B) U", "C) V", "D) T"],
    answer: "C",
    explanation: "Positions 4, 7, 11, 16 increase by 3, 4, 5, so the next step is +6: 16 + 6 = 22, which is V."
  },
  {
    id: 20243, section: "Reasoning",
    text: "In a certain code, ROAD is written as URDG. How will LANE be written in that code?",
    options: ["A) ODQH", "B) OCQH", "C) ODPH", "D) NDQH"],
    answer: "A",
    explanation: "Each letter moves 3 places forward: L→O, A→D, N→Q, E→H."
  },
  {
    id: 20244, section: "Reasoning",
    text: "X said to Y, \"Your father's only brother is my father.\" How is X related to Y?",
    options: ["A) Uncle", "B) Cousin", "C) Brother", "D) Nephew"],
    answer: "B",
    explanation: "X's father is Y's paternal uncle, so X and Y are first cousins."
  },
  {
    id: 20245, section: "Reasoning",
    text: "A bus starts from a depot, travels 12 km North, then turns right and travels 5 km. What is the shortest distance between the bus and the depot, and in which direction is the bus?",
    options: ["A) 13 km, North-East", "B) 7 km, North-East", "C) 13 km, North-West", "D) 17 km, North-East"],
    answer: "A",
    explanation: "Distance = √(12² + 5²) = 13 km. The bus is north and east of the depot."
  },
  {
    id: 20246, section: "Reasoning",
    text: "In a queue of vehicles at a toll plaza, a truck is 8th from the front and 13th from the back. How many vehicles are in the queue?",
    options: ["A) 20", "B) 21", "C) 22", "D) 19"],
    answer: "A",
    explanation: "Total = 8 + 13 − 1 = 20."
  },
  {
    id: 20247, section: "Reasoning",
    text: "Statements: All drivers are licensed. Some licensed persons are mechanics.<br>Conclusions:<br>I. Some drivers are mechanics.<br>II. All mechanics are licensed.",
    options: ["A) Both I and II follow", "B) Only I follows", "C) Only II follows", "D) Neither I nor II follows"],
    answer: "D",
    explanation: "The mechanics who are licensed need not be drivers, so I does not follow. Only some mechanics are known to be licensed, so II does not follow."
  },
  {
    id: 20248, section: "Reasoning",
    text: "How many times do the hour and minute hands of a clock coincide in a day (24 hours)?",
    options: ["A) 24", "B) 21", "C) 44", "D) 22"],
    answer: "D",
    explanation: "They coincide 11 times in every 12 hours (the overlap near 12 is shared), so 22 times in 24 hours."
  },
  {
    id: 20249, section: "Reasoning",
    text: "Petrol : Car :: Food : ?",
    options: ["A) Farmer", "B) Body", "C) Hunger", "D) Kitchen"],
    answer: "B",
    explanation: "Petrol is the fuel that runs a car; food is the fuel for the body."
  },
  {
    id: 20250, section: "Reasoning",
    text: "Find the odd one out: Speedometer, Odometer, Tachometer, Carburettor",
    options: ["A) Carburettor", "B) Speedometer", "C) Odometer", "D) Tachometer"],
    answer: "A",
    explanation: "The first three are measuring instruments on the dashboard. A carburettor mixes air and fuel in a petrol engine."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 20251, section: "Numerical Ability",
    text: "A car covers 360 km on 30 litres of petrol. How many litres will it need to cover 540 km?",
    options: ["A) 45 litres", "B) 40 litres", "C) 48 litres", "D) 50 litres"],
    answer: "A",
    explanation: "Mileage = 12 km per litre. 540/12 = 45 litres."
  },
  {
    id: 20252, section: "Numerical Ability",
    text: "A driver increases his speed from 40 km/h to 50 km/h. By what percentage does the time taken for a fixed distance decrease?",
    options: ["A) 15%", "B) 25%", "C) 20%", "D) 10%"],
    answer: "C",
    explanation: "Time is inversely proportional to speed: new time = 40/50 = 0.8 of the old, a 20% decrease."
  },
  {
    id: 20253, section: "Numerical Ability",
    text: "A truck goes from A to B at 30 km/h and returns at 60 km/h. What is its average speed for the round trip?",
    options: ["A) 40 km/h", "B) 42 km/h", "C) 36 km/h", "D) 45 km/h"],
    answer: "A",
    explanation: "Average speed = 2 × 30 × 60/(30 + 60) = 40 km/h."
  },
  {
    id: 20254, section: "Numerical Ability",
    text: "A taxi charges a fixed ₹50 plus ₹18 per km. What is the fare for a 23 km trip?",
    options: ["A) ₹464", "B) ₹450", "C) ₹482", "D) ₹414"],
    answer: "A",
    explanation: "50 + 18 × 23 = 50 + 414 = ₹464."
  },
  {
    id: 20255, section: "Numerical Ability",
    text: "A vehicle bought for ₹5,00,000 depreciates by 10% of its value every year. What will its value be after 2 years?",
    options: ["A) ₹4,00,000", "B) ₹4,50,000", "C) ₹4,10,000", "D) ₹4,05,000"],
    answer: "D",
    explanation: "500000 × 0.9 × 0.9 = ₹4,05,000."
  },
  {
    id: 20256, section: "Numerical Ability",
    text: "Two buses start at the same time from towns 300 km apart and travel towards each other at 70 km/h and 80 km/h. After how long will they meet?",
    options: ["A) 2.5 hours", "B) 1.5 hours", "C) 3 hours", "D) 2 hours"],
    answer: "D",
    explanation: "Closing speed = 150 km/h. Time = 300/150 = 2 hours."
  },
  {
    id: 20257, section: "Numerical Ability",
    text: "A wheel has a radius of 35 cm. How many revolutions will it make in covering 2.2 km? (Take π = 22/7)",
    options: ["A) 1,100", "B) 100", "C) 1,000", "D) 2,000"],
    answer: "C",
    explanation: "Circumference = 2 × 22/7 × 35 = 220 cm = 2.2 m. 2200/2.2 = 1,000 revolutions."
  },
  {
    id: 20258, section: "Numerical Ability",
    text: "Petrol costs ₹100 per litre and a car gives 15 km per litre. What is the monthly fuel cost if the car runs 1,200 km a month?",
    options: ["A) ₹7,500", "B) ₹9,000", "C) ₹12,000", "D) ₹8,000"],
    answer: "D",
    explanation: "Fuel = 1200/15 = 80 litres. Cost = 80 × 100 = ₹8,000."
  },
  {
    id: 20259, section: "Numerical Ability",
    text: "A jeep travels for 2 hours at 50 km/h and then for 3 hours at 60 km/h. What is its average speed for the whole journey?",
    options: ["A) 55 km/h", "B) 54 km/h", "C) 56 km/h", "D) 58 km/h"],
    answer: "C",
    explanation: "Total distance = 100 + 180 = 280 km in 5 hours. Average = 56 km/h."
  },
  {
    id: 20260, section: "Numerical Ability",
    text: "What is the simple interest on ₹12,000 at 8% per annum for 2½ years?",
    options: ["A) ₹2,400", "B) ₹2,600", "C) ₹2,000", "D) ₹2,880"],
    answer: "A",
    explanation: "SI = 12000 × 8 × 2.5/100 = ₹2,400."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 20261, section: "English",
    passage: "passage_1",
    text: "Which of the following best states the main idea of the passage?",
    options: ["A) Speed and alcohol are the only causes of accidents", "B) Professional drivers should never drive at night", "C) Drinking strong tea is the best way to stay alert while driving", "D) Driver fatigue is a seriously underestimated danger, and rest is its only real remedy"],
    answer: "D",
    explanation: "The passage describes how fatigue affects driving and concludes that 'the only reliable remedy is rest'."
  },
  {
    id: 20262, section: "English",
    passage: "passage_1",
    text: "As used in the passage, 'micro-sleeps' are",
    options: ["A) periods of deep sleep at night", "B) short naps taken during breaks", "C) moments of daydreaming while parked", "D) brief lapses of a few seconds in which the brain switches off"],
    answer: "D",
    explanation: "Defined in the first paragraph."
  },
  {
    id: 20263, section: "English",
    passage: "passage_1",
    text: "According to the passage, professional drivers are particularly at risk because their work often involves",
    options: ["A) driving only on village roads", "B) long hours, night duty and pressure to reach on time", "C) carrying heavy loads", "D) poorly maintained vehicles"],
    answer: "B",
    explanation: "Stated at the start of the second paragraph."
  },
  {
    id: 20264, section: "English",
    passage: "passage_1",
    text: "What does the author say about opening the window or turning up the radio?",
    options: ["A) They are recommended by traffic police", "B) They give only temporary alertness and do not remove the need for sleep", "C) They are the most effective remedies for fatigue", "D) They are dangerous and should be avoided"],
    answer: "B",
    explanation: "They 'may keep a driver alert for a few minutes, but they do not remove the underlying need for sleep'."
  },
  {
    id: 20265, section: "English",
    passage: "passage_1",
    text: "Why does the author mention that a vehicle travels nearly sixty metres in three seconds?",
    options: ["A) To prove that micro-sleeps last three seconds", "B) To explain how to calculate speed", "C) To show how dangerous even a brief lapse of attention can be", "D) To recommend a speed limit of seventy km/h"],
    answer: "C",
    explanation: "The figure shows how much can happen during a few seconds of inattention."
  },
  {
    id: 20266, section: "English",
    text: "Choose the word most similar in meaning to HAZARD.",
    options: ["A) Safety", "B) Danger", "C) Signal", "D) Accident"],
    answer: "B",
    explanation: "A hazard is a source of danger."
  },
  {
    id: 20267, section: "English",
    text: "Choose the word most similar in meaning to CAUTIOUS.",
    options: ["A) Fearless", "B) Reckless", "C) Careful", "D) Quick"],
    answer: "C",
    explanation: "Cautious means careful to avoid risks."
  },
  {
    id: 20268, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to RECKLESS.",
    options: ["A) Hasty", "B) Rash", "C) Prudent", "D) Careless"],
    answer: "C",
    explanation: "Reckless means heedless of danger. Its opposite is prudent (careful and sensible)."
  },
  {
    id: 20269, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to ACCELERATE.",
    options: ["A) Hasten", "B) Decelerate", "C) Speed up", "D) Quicken"],
    answer: "B",
    explanation: "To accelerate is to increase speed; to decelerate is to reduce it."
  },
  {
    id: 20270, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Each of the drivers (A) / have to carry (B) / a valid licence (C) / at all times. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "'Each of' takes a singular verb: 'Each of the drivers has to carry'."
  },
  {
    id: 20271, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>If I was (A) / the driver, (B) / I would have (C) / stopped the bus. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "A past unreal condition with 'would have' needs the past perfect: 'If I had been the driver'."
  },
  {
    id: 20272, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The bus as well as (A) / the trucks (B) / were stopped (C) / at the check-post. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "With 'as well as', the verb agrees with the first subject, 'the bus': 'was stopped'."
  },
  {
    id: 20273, section: "English",
    text: "Fill in the blank: The driver was fined ______ jumping the red signal.",
    options: ["A) with", "B) on", "C) for", "D) of"],
    answer: "C",
    explanation: "One is fined FOR an offence."
  },
  {
    id: 20274, section: "English",
    text: "Fill in the blank: You must stop your vehicle ______ the zebra crossing when the light is red.",
    options: ["A) before", "B) over", "C) on", "D) across"],
    answer: "A",
    explanation: "Vehicles must stop before (behind) the stop line, not on the crossing."
  },
  {
    id: 20275, section: "English",
    text: "Fill in the blank: He drives carefully ______ he should meet with an accident.",
    options: ["A) so that", "B) lest", "C) unless", "D) until"],
    answer: "B",
    explanation: "'Lest' means 'for fear that' and is followed by 'should'."
  },
  {
    id: 20276, section: "English",
    text: "Choose the correct meaning of the idiom: To be at the wheel",
    options: ["A) To be repairing a vehicle", "B) To be confused", "C) To be driving or in control", "D) To be unemployed"],
    answer: "C",
    explanation: "Being at the wheel means driving, or more broadly being in charge."
  },
  {
    id: 20277, section: "English",
    text: "Choose the correct meaning of the idiom: To go the extra mile",
    options: ["A) To lose one's way", "B) To drive very fast", "C) To make more effort than is expected", "D) To travel a long distance"],
    answer: "C",
    explanation: "To go the extra mile is to do more than what is required."
  },
  {
    id: 20278, section: "English",
    text: "Choose the one word for: A person who travels on foot",
    options: ["A) Pedestrian", "B) Commuter", "C) Passenger", "D) Pilgrim"],
    answer: "A",
    explanation: "A pedestrian is a person walking, especially in a street."
  },
  {
    id: 20279, section: "English",
    text: "Choose the correct passive form of: The traffic police stopped the speeding car.",
    options: ["A) The speeding car had stopped the traffic police.", "B) The speeding car is stopped by the traffic police.", "C) The speeding car was stopped by the traffic police.", "D) The speeding car has been stopped by the traffic police."],
    answer: "C",
    explanation: "Simple past active becomes 'was/were + V3'."
  },
  {
    id: 20280, section: "English",
    text: "Choose the correct indirect speech: He said, \"I have repaired the brakes.\"",
    options: ["A) He told that he repaired the brakes.", "B) He said that I had repaired the brakes.", "C) He said that he had repaired the brakes.", "D) He said that he has repaired the brakes."],
    answer: "C",
    explanation: "Present perfect becomes past perfect, and 'I' becomes 'he'."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Traffic Rules & Vehicle Maintenance
  // ════════════════════════════════════════════════════════════
  {
    id: 20281, section: "Traffic Rules & Vehicle Maintenance",
    text: "The principal law in India governing driving licences, vehicle registration and traffic offences is the",
    options: ["A) Transport Vehicles Act, 1975", "B) Motor Vehicles Act, 1988", "C) Indian Road Traffic Act, 1950", "D) Road Safety Act, 2005"],
    answer: "B",
    explanation: "The Motor Vehicles Act, 1988 is the main law. It was significantly amended in 2019."
  },
  {
    id: 20282, section: "Traffic Rules & Vehicle Maintenance",
    text: "A learner's licence is valid for a period of",
    options: ["A) 1 year", "B) 1 month", "C) 3 months", "D) 6 months"],
    answer: "D",
    explanation: "A learner's licence is valid for six months. The applicant must pass the driving test within this period."
  },
  {
    id: 20283, section: "Traffic Rules & Vehicle Maintenance",
    text: "What is the minimum age to obtain a licence to drive a transport vehicle?",
    options: ["A) 20 years", "B) 21 years", "C) 18 years", "D) 25 years"],
    answer: "A",
    explanation: "Under the MV Act, a person must be at least 20 to drive a transport vehicle. The minimum for a private car (LMV) is 18."
  },
  {
    id: 20284, section: "Traffic Rules & Vehicle Maintenance",
    text: "Under the Motor Vehicles Act, driving is an offence if the alcohol in the driver's blood exceeds",
    options: ["A) 30 mg per 100 ml of blood", "B) 80 mg per 100 ml of blood", "C) 50 mg per 100 ml of blood", "D) 10 mg per 100 ml of blood"],
    answer: "A",
    explanation: "Section 185 sets the limit at 30 mg of alcohol per 100 ml of blood, detected by breath analyser."
  },
  {
    id: 20285, section: "Traffic Rules & Vehicle Maintenance",
    text: "Under the amended Motor Vehicles Act (2019), the penalty for riding a two-wheeler without a helmet is",
    options: ["A) ₹100 fine only", "B) ₹500 fine only", "C) ₹5,000 fine and 1 year imprisonment", "D) ₹1,000 fine and disqualification of licence for 3 months"],
    answer: "D",
    explanation: "Section 194D provides a ₹1,000 fine and disqualification of the licence for three months."
  },
  {
    id: 20286, section: "Traffic Rules & Vehicle Maintenance",
    text: "Mandatory (regulatory) road signs, such as 'No Entry' and speed limits, are generally of which shape?",
    options: ["A) Triangular", "B) Circular", "C) Square", "D) Rectangular"],
    answer: "B",
    explanation: "Mandatory signs are circular, cautionary signs triangular, and informatory signs rectangular."
  },
  {
    id: 20287, section: "Traffic Rules & Vehicle Maintenance",
    text: "What is the shape of the 'STOP' sign?",
    options: ["A) Triangular", "B) Hexagonal", "C) Circular", "D) Octagonal"],
    answer: "D",
    explanation: "The STOP sign is a red octagon, a unique shape so that it is recognised even from behind or when covered with dirt."
  },
  {
    id: 20288, section: "Traffic Rules & Vehicle Maintenance",
    text: "A continuous yellow line along the centre of the road means",
    options: ["A) Overtaking or crossing the line is not allowed", "B) Overtaking is allowed with care", "C) The road is one-way", "D) Parking is allowed along the line"],
    answer: "A",
    explanation: "A solid yellow (or solid double) centre line prohibits crossing or overtaking."
  },
  {
    id: 20289, section: "Traffic Rules & Vehicle Maintenance",
    text: "As per the Rules of the Road, from which side should a vehicle normally overtake another vehicle?",
    options: ["A) From the left side", "B) From the right side", "C) Overtaking is not permitted", "D) From either side"],
    answer: "B",
    explanation: "In India vehicles keep to the left and overtake from the right, except where the vehicle in front has signalled a right turn."
  },
  {
    id: 20290, section: "Traffic Rules & Vehicle Maintenance",
    text: "A flashing amber (yellow) traffic signal means",
    options: ["A) The signal is out of order, so stop completely", "B) Stop and wait for green", "C) Speed up to cross quickly", "D) Slow down and proceed with caution"],
    answer: "D",
    explanation: "A flashing amber light warns drivers to slow down and proceed carefully. A flashing red light means stop, then proceed when safe."
  },
  {
    id: 20291, section: "Traffic Rules & Vehicle Maintenance",
    text: "A driver extends his right arm straight out horizontally, palm facing down. This hand signal means",
    options: ["A) I intend to turn right", "B) You may overtake me", "C) I intend to turn left", "D) I am slowing down"],
    answer: "A",
    explanation: "Right arm held straight out signals a right turn. Rotating the arm anticlockwise signals a left turn, and moving it up and down means slowing down."
  },
  {
    id: 20292, section: "Traffic Rules & Vehicle Maintenance",
    text: "The 'golden hour' defined in the Motor Vehicles Act refers to",
    options: ["A) The hour of sunrise when visibility is best", "B) The peak traffic hour in the evening", "C) The time allowed to report an accident to the police", "D) The first hour after a traumatic injury, when prompt medical care is most effective"],
    answer: "D",
    explanation: "Section 2(12A) defines the golden hour, the period after injury when timely treatment gives the highest chance of preventing death."
  },
  {
    id: 20293, section: "Traffic Rules & Vehicle Maintenance",
    text: "A person who voluntarily helps a road accident victim in good faith is legally protected under the MV Act as a",
    options: ["A) Special Police Officer", "B) Witness", "C) First Responder Officer", "D) Good Samaritan"],
    answer: "D",
    explanation: "Section 134A (added in 2019) protects Good Samaritans from civil or criminal liability."
  },
  {
    id: 20294, section: "Traffic Rules & Vehicle Maintenance",
    text: "The electrolyte used in a lead-acid vehicle battery is",
    options: ["A) Hydrochloric acid", "B) Dilute sulphuric acid", "C) Distilled water only", "D) Nitric acid"],
    answer: "B",
    explanation: "A lead-acid battery uses dilute sulphuric acid. Its specific gravity is checked with a hydrometer."
  },
  {
    id: 20295, section: "Traffic Rules & Vehicle Maintenance",
    text: "When the electrolyte level in a lead-acid battery falls, it should be topped up with",
    options: ["A) Engine oil", "B) Sulphuric acid", "C) Tap water", "D) Distilled water"],
    answer: "D",
    explanation: "Water evaporates during charging, so the level is restored with distilled water. Tap water contains impurities that damage the plates."
  },
  {
    id: 20296, section: "Traffic Rules & Vehicle Maintenance",
    text: "Blue smoke coming from a vehicle's exhaust usually indicates",
    options: ["A) Excess fuel (rich mixture)", "B) A perfectly tuned engine", "C) Water or coolant leaking", "D) Engine oil being burnt"],
    answer: "D",
    explanation: "Blue smoke means burning oil, often from worn piston rings or valve guides. Black smoke means excess fuel, and white smoke means water or coolant."
  },
  {
    id: 20297, section: "Traffic Rules & Vehicle Maintenance",
    text: "What is the function of the differential in a vehicle?",
    options: ["A) To cool the engine", "B) To stop the vehicle", "C) To allow the driving wheels to rotate at different speeds while turning", "D) To change gears smoothly"],
    answer: "C",
    explanation: "On a turn the outer wheel travels farther than the inner one. The differential lets them rotate at different speeds."
  },
  {
    id: 20298, section: "Traffic Rules & Vehicle Maintenance",
    text: "In a diesel engine, the fuel is ignited by",
    options: ["A) A spark plug", "B) An electric arc in the injector", "C) The heat of compressed air", "D) A glow from the exhaust"],
    answer: "C",
    explanation: "Diesel engines are compression-ignition engines: air is compressed until hot enough to ignite the injected fuel. Petrol engines use spark plugs."
  },
  {
    id: 20299, section: "Traffic Rules & Vehicle Maintenance",
    text: "Which instrument on the dashboard shows the engine speed in revolutions per minute (rpm)?",
    options: ["A) Odometer", "B) Tachometer", "C) Speedometer", "D) Ammeter"],
    answer: "B",
    explanation: "The tachometer shows engine rpm, the speedometer vehicle speed, and the odometer the total distance travelled."
  },
  {
    id: 20300, section: "Traffic Rules & Vehicle Maintenance",
    text: "If a tyre is under-inflated, the tread usually wears out faster",
    options: ["A) In the centre only", "B) On both outer edges", "C) Only on the inner side", "D) Evenly across the tread"],
    answer: "B",
    explanation: "Low pressure makes the tyre flex so the edges carry the load. Over-inflation wears the centre."
  }
];
