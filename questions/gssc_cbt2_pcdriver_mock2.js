// gssc_cbt2_pcdriver_mock2.js – Dr Shetye Academic Programme
// CBT 2 PC Driver Mock 2 · GSSC Advt. No. 2 of 2026 · CBT-II · Police Constable Driver (Grade-III)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 20301–20360
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Traffic Rules & Vehicle Maintenance Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "Defensive driving begins with a simple admission: you cannot control what other road users will do. The driver ahead may brake without warning, a pedestrian may step out from behind a parked bus, a motorcyclist may overtake on the wrong side. A defensive driver does not assume that others will follow the rules; he drives in a way that leaves room for their mistakes. He keeps a safe distance from the vehicle in front, scans the road well ahead rather than staring at the bumper before him, and checks his mirrors regularly so that he always knows what is behind and beside him.\n\nSpeed is the factor that turns small errors into serious accidents. The distance a vehicle needs to stop does not rise in simple proportion to its speed; braking distance roughly quadruples when speed doubles. A driver who is a few kilometres an hour too fast may find that the gap he relied upon has simply disappeared.\n\nDefensive driving is also a matter of temperament. Anger, impatience and the wish to 'teach someone a lesson' have no place behind the wheel. The professional driver's aim is not to win an argument on the road but to deliver his passengers and vehicle safely, every single time."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 20301, section: "Reasoning",
    text: "Find the next term in the series: 0, 7, 26, 63, 124, ?",
    options: ["A) 210", "B) 217", "C) 215", "D) 216"],
    answer: "C",
    explanation: "The terms are n³ − 1 for n = 1, 2, 3, 4, 5, so the next is 6³ − 1 = 215."
  },
  {
    id: 20302, section: "Reasoning",
    text: "Find the next group of letters: CFI, DGJ, EHK, ?",
    options: ["A) GIL", "B) FIK", "C) FJL", "D) FIL"],
    answer: "D",
    explanation: "Each letter moves forward by one in every group: C→D→E→F, F→G→H→I, I→J→K→L."
  },
  {
    id: 20303, section: "Reasoning",
    text: "In a certain code, BRAKE is written as EKARB. How will CLUTCH be written in that code?",
    options: ["A) CHTULC", "B) HTCULC", "C) HCTUCL", "D) HCTULC"],
    answer: "D",
    explanation: "The word is written in reverse: CLUTCH becomes HCTULC."
  },
  {
    id: 20304, section: "Reasoning",
    text: "Pointing to a man, a woman said, \"His mother is the only daughter of my mother.\" How is the woman related to the man?",
    options: ["A) Aunt", "B) Mother", "C) Sister", "D) Grandmother"],
    answer: "B",
    explanation: "The only daughter of the woman's mother is the woman herself. So she is the man's mother."
  },
  {
    id: 20305, section: "Reasoning",
    text: "A driver is facing North. He turns 90° clockwise, then 180° anticlockwise, and then 45° clockwise. Which direction is he facing now?",
    options: ["A) South-West", "B) West", "C) North-West", "D) North-East"],
    answer: "C",
    explanation: "North → (90° cw) East → (180° acw) West → (45° cw) North-West."
  },
  {
    id: 20306, section: "Reasoning",
    text: "Five vehicles are parked in a row. The car is at the left end and the jeep at the right end. The van is immediately to the left of the jeep. The bus is between the car and the truck. Which vehicle is in the middle?",
    options: ["A) Car", "B) Van", "C) Bus", "D) Truck"],
    answer: "D",
    explanation: "The order from the left is Car, Bus, Truck, Van, Jeep. The truck is in the middle."
  },
  {
    id: 20307, section: "Reasoning",
    text: "Statements: Some vehicles are buses. No bus is a truck.<br>Conclusions:<br>I. Some vehicles are not trucks.<br>II. No vehicle is a truck.",
    options: ["A) Both I and II follow", "B) Only II follows", "C) Neither I nor II follows", "D) Only I follows"],
    answer: "D",
    explanation: "The vehicles that are buses cannot be trucks, so I follows. Other vehicles may be trucks, so II does not follow."
  },
  {
    id: 20308, section: "Reasoning",
    text: "The calendar of the year 2026 will be exactly repeated in which year?",
    options: ["A) 2032", "B) 2031", "C) 2037", "D) 2036"],
    answer: "C",
    explanation: "2026 starts on a Thursday and is not a leap year. The next non-leap year that also starts on a Thursday is 2037."
  },
  {
    id: 20309, section: "Reasoning",
    text: "If 5 + 3 = 28, 9 + 1 = 810 and 8 + 6 = 214, then 7 + 3 = ?",
    options: ["A) 410", "B) 310", "C) 421", "D) 104"],
    answer: "A",
    explanation: "Write the difference followed by the sum: 5−3 = 2 and 5+3 = 8 give 28. For 7 and 3: 4 and 10 give 410."
  },
  {
    id: 20310, section: "Reasoning",
    text: "Statement: A sudden landslide has blocked the ghat road leading to the state border.<br>Courses of action:<br>I. Traffic should be diverted through an alternative route.<br>II. The road should be cleared at the earliest.",
    options: ["A) Only I follows", "B) Both I and II follow", "C) Only II follows", "D) Neither I nor II follows"],
    answer: "B",
    explanation: "Diverting traffic deals with the immediate problem and clearing the road restores normal movement. Both are practical steps."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 20311, section: "Numerical Ability",
    text: "A vehicle's fuel tank is 3/4 full. After 21 litres are used, it is 1/4 full. What is the capacity of the tank?",
    options: ["A) 42 litres", "B) 36 litres", "C) 48 litres", "D) 84 litres"],
    answer: "A",
    explanation: "3/4 − 1/4 = 1/2 of the tank = 21 litres, so the capacity is 42 litres."
  },
  {
    id: 20312, section: "Numerical Ability",
    text: "What is a speed of 90 km/h in metres per second?",
    options: ["A) 15 m/s", "B) 20 m/s", "C) 25 m/s", "D) 30 m/s"],
    answer: "C",
    explanation: "90 × 5/18 = 25 m/s."
  },
  {
    id: 20313, section: "Numerical Ability",
    text: "A bus covers a distance in 6 hours at 50 km/h. At what speed must it travel to cover the same distance in 5 hours?",
    options: ["A) 70 km/h", "B) 65 km/h", "C) 60 km/h", "D) 55 km/h"],
    answer: "C",
    explanation: "Distance = 300 km. 300/5 = 60 km/h."
  },
  {
    id: 20314, section: "Numerical Ability",
    text: "A tyre costing ₹4,500 lasts for 45,000 km. What is the tyre cost per kilometre?",
    options: ["A) 1 paisa", "B) 50 paise", "C) ₹1", "D) 10 paise"],
    answer: "D",
    explanation: "4500/45000 = ₹0.10 = 10 paise per km."
  },
  {
    id: 20315, section: "Numerical Ability",
    text: "A dealer buys a used vehicle for ₹2,40,000, spends ₹10,000 on repairs and sells it for ₹2,75,000. What is his profit percentage?",
    options: ["A) 14.6%", "B) 12.5%", "C) 8%", "D) 10%"],
    answer: "D",
    explanation: "Total cost = ₹2,50,000. Profit = 25,000, i.e. 25000/250000 = 10%."
  },
  {
    id: 20316, section: "Numerical Ability",
    text: "The speeds of A and B are in the ratio 3 : 4. A takes 20 minutes more than B to cover the same distance. How long does B take?",
    options: ["A) 60 minutes", "B) 45 minutes", "C) 40 minutes", "D) 80 minutes"],
    answer: "A",
    explanation: "Times are in the ratio 4 : 3. The difference of 1 part = 20 min, so B takes 3 parts = 60 min."
  },
  {
    id: 20317, section: "Numerical Ability",
    text: "A car runs 120 km at 12 km per litre and another 120 km at 20 km per litre. What is its overall fuel efficiency?",
    options: ["A) 16 km/litre", "B) 15 km/litre", "C) 17 km/litre", "D) 14 km/litre"],
    answer: "B",
    explanation: "Fuel used = 10 + 6 = 16 litres for 240 km, so 240/16 = 15 km/litre."
  },
  {
    id: 20318, section: "Numerical Ability",
    text: "A jeep and a truck start from the same point in opposite directions at 60 km/h and 40 km/h. How far apart will they be after 2½ hours?",
    options: ["A) 50 km", "B) 250 km", "C) 150 km", "D) 200 km"],
    answer: "B",
    explanation: "Separation speed = 100 km/h. 100 × 2.5 = 250 km."
  },
  {
    id: 20319, section: "Numerical Ability",
    text: "In a parking lot, 30% of the vehicles are two-wheelers and 40% of the remaining are buses. The remaining 84 vehicles are cars. How many vehicles are there in all?",
    options: ["A) 180", "B) 240", "C) 210", "D) 200"],
    answer: "D",
    explanation: "Cars = 70% × 60% = 42% of the total. 84/0.42 = 200."
  },
  {
    id: 20320, section: "Numerical Ability",
    text: "What is the compound interest on ₹20,000 at 10% per annum for 2 years, compounded annually?",
    options: ["A) ₹4,000", "B) ₹4,100", "C) ₹4,200", "D) ₹4,410"],
    answer: "C",
    explanation: "20000 × 1.21 = 24,200, so CI = ₹4,200."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 20321, section: "English",
    passage: "passage_1",
    text: "Which of the following best captures the central idea of the passage?",
    options: ["A) Mirrors are the most important part of a vehicle", "B) Other drivers are always at fault in accidents", "C) Safe driving means anticipating others' mistakes and controlling one's speed and temper", "D) Professional drivers should drive faster to save time"],
    answer: "C",
    explanation: "The passage covers anticipating others' errors, the effect of speed, and the role of temperament."
  },
  {
    id: 20322, section: "English",
    passage: "passage_1",
    text: "According to the passage, a defensive driver assumes that",
    options: ["A) pedestrians always use zebra crossings", "B) his own driving is always perfect", "C) all others will follow the rules", "D) other road users may make mistakes"],
    answer: "D",
    explanation: "He 'does not assume that others will follow the rules'."
  },
  {
    id: 20323, section: "English",
    passage: "passage_1",
    text: "According to the passage, what happens to braking distance when speed doubles?",
    options: ["A) It doubles", "B) It becomes roughly four times as long", "C) It stays the same", "D) It becomes half"],
    answer: "B",
    explanation: "Stated directly: 'braking distance roughly quadruples when speed doubles'."
  },
  {
    id: 20324, section: "English",
    passage: "passage_1",
    text: "The phrase 'teach someone a lesson', as used in the passage, refers to",
    options: ["A) training new drivers", "B) an angry desire to get even with another road user", "C) explaining traffic rules to passengers", "D) learning from one's own mistakes"],
    answer: "B",
    explanation: "It appears in a list with anger and impatience, i.e. retaliation on the road."
  },
  {
    id: 20325, section: "English",
    passage: "passage_1",
    text: "The word 'temperament', as used in the passage, most nearly means",
    options: ["A) speed", "B) temperature", "C) nature or disposition", "D) skill"],
    answer: "C",
    explanation: "Temperament is a person's emotional nature or disposition."
  },
  {
    id: 20326, section: "English",
    text: "Choose the word most similar in meaning to ABRUPT.",
    options: ["A) Sudden", "B) Smooth", "C) Gradual", "D) Planned"],
    answer: "A",
    explanation: "Abrupt means sudden and unexpected."
  },
  {
    id: 20327, section: "English",
    text: "Choose the word most similar in meaning to NEGLIGENT.",
    options: ["A) Attentive", "B) Cautious", "C) Diligent", "D) Careless"],
    answer: "D",
    explanation: "Negligent means failing to take proper care."
  },
  {
    id: 20328, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to HINDER.",
    options: ["A) Help", "B) Delay", "C) Block", "D) Obstruct"],
    answer: "A",
    explanation: "To hinder is to obstruct; its opposite is to help."
  },
  {
    id: 20329, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to PERMANENT.",
    options: ["A) Lasting", "B) Fixed", "C) Temporary", "D) Durable"],
    answer: "C",
    explanation: "Permanent means lasting; its opposite is temporary."
  },
  {
    id: 20330, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>Unless you do not (A) / slow down, (B) / you will (C) / lose control. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "'Unless' already means 'if not', so 'unless … not' is a double negative. Write: 'Unless you slow down'."
  },
  {
    id: 20331, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The driver and (A) / the conductor was (B) / suspended for (C) / misbehaviour. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "Two different persons joined by 'and' take a plural verb: 'the driver and the conductor were suspended'."
  },
  {
    id: 20332, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The traffic (A) / on this road (B) / are very heavy (C) / in the evening. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "'Traffic' is uncountable and takes a singular verb: 'is very heavy'."
  },
  {
    id: 20333, section: "English",
    text: "Fill in the blank: The truck collided ______ a bus near the bridge.",
    options: ["A) to", "B) with", "C) against", "D) on"],
    answer: "B",
    explanation: "The correct collocation is 'collide with'."
  },
  {
    id: 20334, section: "English",
    text: "Fill in the blank: If you ______ the rules, you will not be fined.",
    options: ["A) followed", "B) will follow", "C) had followed", "D) follow"],
    answer: "D",
    explanation: "First conditional: 'If + present simple, will + verb'."
  },
  {
    id: 20335, section: "English",
    text: "Fill in the blank: The road was so slippery ______ the bus skidded.",
    options: ["A) than", "B) as", "C) that", "D) which"],
    answer: "C",
    explanation: "'So … that' expresses result."
  },
  {
    id: 20336, section: "English",
    text: "Choose the correct meaning of the idiom: To jump the gun",
    options: ["A) To fire a weapon", "B) To act too soon", "C) To escape from custody", "D) To win a race"],
    answer: "B",
    explanation: "To jump the gun is to act before the proper time."
  },
  {
    id: 20337, section: "English",
    text: "Choose the correct meaning of the idiom: At a snail's pace",
    options: ["A) Very quickly", "B) Very slowly", "C) Unpredictably", "D) Steadily"],
    answer: "B",
    explanation: "At a snail's pace means very slowly."
  },
  {
    id: 20338, section: "English",
    text: "Choose the one word for: A road junction at which traffic moves in one direction round a central island",
    options: ["A) Roundabout", "B) Flyover", "C) Level crossing", "D) Underpass"],
    answer: "A",
    explanation: "A roundabout (traffic circle) has traffic circulating around a central island."
  },
  {
    id: 20339, section: "English",
    text: "Choose the correctly spelt word.",
    options: ["A) Mantenance", "B) Maintainance", "C) Maintenence", "D) Maintenance"],
    answer: "D",
    explanation: "The correct spelling is M-A-I-N-T-E-N-A-N-C-E."
  },
  {
    id: 20340, section: "English",
    text: "Arrange the sentences in a logical order:<br>P. He immediately pulled over to the side of the road.<br>Q. While driving on the highway, the driver noticed the temperature gauge rising.<br>R. After the engine had cooled, he topped up the coolant and continued.<br>S. He switched off the engine and waited.",
    options: ["A) PQSR", "B) QPRS", "C) QPSR", "D) QSPR"],
    answer: "C",
    explanation: "Q (gauge rises) → P (pulls over) → S (switches off and waits) → R (tops up and continues)."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Traffic Rules & Vehicle Maintenance
  // ════════════════════════════════════════════════════════════
  {
    id: 20341, section: "Traffic Rules & Vehicle Maintenance",
    text: "Under the MV Act as amended in 2019, a driving licence for a non-transport vehicle issued to a young person is ordinarily valid for",
    options: ["A) 5 years", "B) 10 years", "C) Life", "D) 20 years from the date of issue or until the holder turns 40, whichever is earlier"],
    answer: "D",
    explanation: "For non-transport vehicles, a licence is valid for 20 years or until age 40, whichever is earlier. After that it is renewed for shorter periods."
  },
  {
    id: 20342, section: "Traffic Rules & Vehicle Maintenance",
    text: "If a juvenile (minor) commits an offence while driving a motor vehicle, the MV Act (Section 199A) holds whom guilty?",
    options: ["A) The vehicle manufacturer", "B) The traffic police officer on duty", "C) The guardian or owner of the vehicle", "D) Only the juvenile"],
    answer: "C",
    explanation: "The guardian or owner is deemed guilty, with a fine of ₹25,000 and up to 3 years' imprisonment, and the vehicle's registration can be cancelled."
  },
  {
    id: 20343, section: "Traffic Rules & Vehicle Maintenance",
    text: "Under the amended MV Act, what is the penalty for not giving way to an ambulance or fire-service vehicle?",
    options: ["A) ₹2,000", "B) ₹10,000", "C) ₹500", "D) ₹1,000"],
    answer: "B",
    explanation: "Section 194E provides a fine of ₹10,000."
  },
  {
    id: 20344, section: "Traffic Rules & Vehicle Maintenance",
    text: "Under the amended MV Act (2019), what is the fine for driving without a valid driving licence?",
    options: ["A) ₹5,000", "B) ₹1,000", "C) ₹500", "D) ₹10,000"],
    answer: "A",
    explanation: "Section 181 provides a fine of ₹5,000."
  },
  {
    id: 20345, section: "Traffic Rules & Vehicle Maintenance",
    text: "Cautionary (warning) road signs, such as 'School Ahead' or 'Sharp Curve', are generally of which shape?",
    options: ["A) Triangular", "B) Circular", "C) Rectangular", "D) Octagonal"],
    answer: "A",
    explanation: "Warning signs are triangles pointing upward, with a red border."
  },
  {
    id: 20346, section: "Traffic Rules & Vehicle Maintenance",
    text: "Signs such as 'Petrol Pump', 'Hospital' and 'Parking' belong to which category?",
    options: ["A) Mandatory signs", "B) Prohibitory signs", "C) Cautionary signs", "D) Informatory signs"],
    answer: "D",
    explanation: "Informatory signs give useful information and are usually rectangular, often blue."
  },
  {
    id: 20347, section: "Traffic Rules & Vehicle Maintenance",
    text: "The 'GIVE WAY' sign has which shape?",
    options: ["A) Upward-pointing triangle", "B) Circle", "C) Octagon", "D) Inverted (downward-pointing) triangle"],
    answer: "D",
    explanation: "GIVE WAY is a downward-pointing triangle, telling the driver to yield to traffic on the main road."
  },
  {
    id: 20348, section: "Traffic Rules & Vehicle Maintenance",
    text: "When a driver extends his right arm with the palm facing down and moves it up and down several times, the signal means",
    options: ["A) I am slowing down", "B) You may overtake", "C) I intend to turn right", "D) I intend to turn left"],
    answer: "A",
    explanation: "Moving the arm up and down signals slowing down."
  },
  {
    id: 20349, section: "Traffic Rules & Vehicle Maintenance",
    text: "In a 'Silence Zone', such as near hospitals and courts, drivers must",
    options: ["A) drive only in the right lane", "B) not use the horn", "C) switch on hazard lights", "D) drive only at night"],
    answer: "B",
    explanation: "Horns are prohibited in silence zones."
  },
  {
    id: 20350, section: "Traffic Rules & Vehicle Maintenance",
    text: "When driving at night with high beam on and a vehicle approaches from the opposite direction, the driver should",
    options: ["A) dip the headlights to low beam", "B) keep the high beam on", "C) flash the high beam repeatedly", "D) switch off the headlights"],
    answer: "A",
    explanation: "Dipping prevents dazzling the oncoming driver."
  },
  {
    id: 20351, section: "Traffic Rules & Vehicle Maintenance",
    text: "The 'two-second rule' in driving is used to maintain",
    options: ["A) the correct speed at a toll plaza", "B) the time needed to change gears", "C) a safe following distance from the vehicle ahead", "D) the duration of a horn signal"],
    answer: "C",
    explanation: "Keep at least two seconds' gap behind the vehicle in front, and more in rain or fog."
  },
  {
    id: 20352, section: "Traffic Rules & Vehicle Maintenance",
    text: "If the speed of a vehicle is doubled, its braking distance becomes approximately",
    options: ["A) the same", "B) four times", "C) twice", "D) half"],
    answer: "B",
    explanation: "Braking distance is proportional to the square of the speed, since kinetic energy is proportional to v²."
  },
  {
    id: 20353, section: "Traffic Rules & Vehicle Maintenance",
    text: "While descending a long steep ghat road, a heavy vehicle driver should mainly",
    options: ["A) use a lower gear and engine braking", "B) switch off the engine", "C) keep the brakes pressed continuously", "D) keep the vehicle in neutral"],
    answer: "A",
    explanation: "Using a low gear lets the engine slow the vehicle. Continuous braking overheats the brakes and causes brake fade."
  },
  {
    id: 20354, section: "Traffic Rules & Vehicle Maintenance",
    text: "The engine oil level should be checked with the dipstick when",
    options: ["A) immediately after starting the engine", "B) the vehicle is on level ground and the engine has been off for a few minutes", "C) the engine is running at high speed", "D) the vehicle is parked on a slope"],
    answer: "B",
    explanation: "On level ground, with the oil allowed to drain back into the sump, the dipstick gives a correct reading."
  },
  {
    id: 20355, section: "Traffic Rules & Vehicle Maintenance",
    text: "Hydraulic brakes in vehicles work on the principle of",
    options: ["A) Archimedes' principle", "B) Ohm's law", "C) Newton's law of gravitation", "D) Pascal's law"],
    answer: "D",
    explanation: "Pressure applied to the brake fluid is transmitted equally to all wheel cylinders (Pascal's law)."
  },
  {
    id: 20356, section: "Traffic Rules & Vehicle Maintenance",
    text: "What is the main purpose of an Anti-lock Braking System (ABS)?",
    options: ["A) To reduce fuel consumption", "B) To lock the wheels when parked", "C) To prevent the wheels from locking during hard braking so the driver can steer", "D) To increase engine power"],
    answer: "C",
    explanation: "ABS stops wheel lock-up during hard braking, so steering control is kept."
  },
  {
    id: 20357, section: "Traffic Rules & Vehicle Maintenance",
    text: "Which of the following is a common cause of engine overheating?",
    options: ["A) Low coolant level or a broken fan belt", "B) New engine oil", "C) Correct tyre pressure", "D) Fully charged battery"],
    answer: "A",
    explanation: "Low coolant, a broken fan belt, a faulty thermostat or a clogged radiator can all cause overheating."
  },
  {
    id: 20358, section: "Traffic Rules & Vehicle Maintenance",
    text: "What is the function of a catalytic converter in a vehicle?",
    options: ["A) To reduce harmful exhaust emissions", "B) To increase engine speed", "C) To cool the engine", "D) To charge the battery"],
    answer: "A",
    explanation: "It converts CO, unburnt hydrocarbons and NOx into less harmful gases."
  },
  {
    id: 20359, section: "Traffic Rules & Vehicle Maintenance",
    text: "Bharat Stage VI (BS-VI) emission norms came into force across India from",
    options: ["A) 1 April 2010", "B) 1 April 2020", "C) 1 January 2023", "D) 1 April 2017"],
    answer: "B",
    explanation: "India moved directly from BS-IV to BS-VI on 1 April 2020."
  },
  {
    id: 20360, section: "Traffic Rules & Vehicle Maintenance",
    text: "Consider the following statements:<br>I. Third-party insurance is compulsory for every motor vehicle used in a public place.<br>II. A 12-volt lead-acid vehicle battery has six cells.<br>III. A petrol fire in a vehicle should be put out by pouring water on it.<br>Which of the statements given above is/are correct?",
    options: ["A) I and II only", "B) II and III only", "C) I and III only", "D) I, II and III"],
    answer: "A",
    explanation: "I is correct (Section 146). II is correct (6 × 2 V = 12 V). III is wrong: water spreads burning petrol, so use a foam, dry-powder or CO₂ extinguisher."
  }
];
