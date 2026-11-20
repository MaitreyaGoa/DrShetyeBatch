// gssc_cbt2_pcdriver_mock3.js – Dr Shetye Academic Programme
// CBT 2 PC Driver Mock 3 · GSSC Advt. No. 2 of 2026 · CBT-II · Police Constable Driver (Grade-III)
// 60 Questions · 60 Marks · 75 Minutes · No negative marking · IDs 21001–21060
// Reasoning Q1–10 | Numerical Ability Q11–20 | English Q21–40 | Traffic Rules & Vehicle Maintenance Q41–60 (RC Q21–25)

var RC_PASSAGES = {
  "passage_1": {
    title: "Passage",
    label: "Read the following passage carefully and answer Questions 21–25.",
    text: "When a road accident occurs, the minutes that follow often decide whether a victim lives or dies. Severe bleeding, a blocked airway or a head injury can become fatal if treatment is delayed. Yet for years many bystanders hesitated to help, fearing that they would be dragged into police inquiries, made to wait at hospitals or even blamed for the accident. Drivers involved in a collision sometimes fled the scene, worried about an angry crowd, leaving the injured with no help at all.\n\nThe law has tried to change this. A person who helps an accident victim in good faith is now protected from harassment and need not disclose his identity if he does not wish to. Hospitals cannot refuse to treat an injured person or demand payment before giving emergency care. A driver, meanwhile, has a clear legal duty: to secure medical attention for the injured and to report the accident to the police.\n\nLaws, however, work only when people know about them. Many citizens still do not realise that they are protected. Spreading this awareness is a responsibility shared by the police, schools and the media, and it can save more lives than any single piece of equipment."
  }
};

var questions = [
  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 21001, section: "Reasoning",
    text: "Find the next term in the series: 2, 10, 30, 68, 130, ?",
    options: ["A) 226", "B) 222", "C) 216", "D) 210"],
    answer: "B",
    explanation: "The terms are n³ + n for n = 1 to 5, so the next is 6³ + 6 = 222."
  },
  {
    id: 21002, section: "Reasoning",
    text: "Find the next group in the series: ZYX, VUT, RQP, ?",
    options: ["A) ONM", "B) NML", "C) NMK", "D) MLK"],
    answer: "B",
    explanation: "Each group is three letters in reverse order, and each new group starts 4 letters back: Z, V, R, N."
  },
  {
    id: 21003, section: "Reasoning",
    text: "If JEEP is coded as 16-5-5-10 (alphabet positions written in reverse order), how will TAXI be coded?",
    options: ["A) 9-1-24-20", "B) 9-24-20-1", "C) 9-24-1-20", "D) 20-1-24-9"],
    answer: "C",
    explanation: "TAXI = 20-1-24-9. Written in reverse order: 9-24-1-20."
  },
  {
    id: 21004, section: "Reasoning",
    text: "Rahul said, \"This girl is the wife of the grandson of my mother.\" How is Rahul related to the girl?",
    options: ["A) Father-in-law", "B) Father", "C) Uncle", "D) Brother-in-law"],
    answer: "A",
    explanation: "The grandson of Rahul's mother is Rahul's son (taking the direct line), so the girl is his son's wife and Rahul is her father-in-law."
  },
  {
    id: 21005, section: "Reasoning",
    text: "Six vehicles (a truck, bus, car, jeep, van and bike) are parked in slots 1 to 6 in a row. The truck is at one end. The bus is two slots to the right of the car. The jeep is immediately to the right of the bus. The bike is in slot 3. The van is not next to the car. Which vehicle is in slot 6?",
    options: ["A) Bus", "B) Van", "C) Jeep", "D) Truck"],
    answer: "B",
    explanation: "The car cannot be in slot 1 (that would put the bus in slot 3, where the bike is), so car = 2, bus = 4, jeep = 5. Slot 1 is next to the car, so the van takes slot 6 and the truck slot 1."
  },
  {
    id: 21006, section: "Reasoning",
    text: "A car travels 10 km South, turns West and travels 10 km, turns North and travels 20 km, then turns East and travels 10 km. Where is it now with respect to its starting point?",
    options: ["A) At the starting point", "B) 10 km South", "C) 20 km North", "D) 10 km North"],
    answer: "D",
    explanation: "(0,−10) → (−10,−10) → (−10,10) → (0,10). It is 10 km North of the start."
  },
  {
    id: 21007, section: "Reasoning",
    text: "Statements: All trucks are heavy vehicles. Some heavy vehicles are tankers. No tanker is a bus.<br>Conclusions:<br>I. Some heavy vehicles are not buses.<br>II. Some trucks are tankers.<br>III. No truck is a bus.",
    options: ["A) Only I and III follow", "B) Only I and II follow", "C) All follow", "D) Only I follows"],
    answer: "D",
    explanation: "The heavy vehicles that are tankers cannot be buses, so I follows. II and III are possible but not certain."
  },
  {
    id: 21008, section: "Reasoning",
    text: "If J ≤ K &lt; L = M &gt; N ≥ O, which conclusions definitely follow?<br>I. L &gt; J<br>II. M &gt; O",
    options: ["A) Only II follows", "B) Both I and II follow", "C) Neither follows", "D) Only I follows"],
    answer: "B",
    explanation: "J ≤ K &lt; L gives L &gt; J. M &gt; N ≥ O gives M &gt; O."
  },
  {
    id: 21009, section: "Reasoning",
    text: "If '×' means '+', '+' means '÷', '−' means '×' and '÷' means '−', what is the value of 16 × 12 + 4 − 3 ÷ 5?",
    options: ["A) 18", "B) 26", "C) 22", "D) 20"],
    answer: "D",
    explanation: "The expression becomes 16 + 12 ÷ 4 × 3 − 5 = 16 + 9 − 5 = 20."
  },
  {
    id: 21010, section: "Reasoning",
    text: "In the sequence below, how many 7s are immediately preceded by 3 and immediately followed by 5?<br>3 7 5 2 3 7 5 7 3 7 4 3 7 5",
    options: ["A) 3", "B) 2", "C) 4", "D) 5"],
    answer: "A",
    explanation: "The pattern '3 7 5' appears at the beginning, in the middle (3 7 5) and at the end, which is 3 times."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Numerical Ability
  // ════════════════════════════════════════════════════════════
  {
    id: 21011, section: "Numerical Ability",
    text: "A car covers 400 km in 8 hours. If its speed is increased by 10 km/h, how much time will be saved on the same journey?",
    options: ["A) 40 min", "B) 1 h 30 min", "C) 1 h", "D) 1 h 20 min"],
    answer: "D",
    explanation: "The speed was 50 km/h and becomes 60 km/h. The time falls from 8 h to 6 h 40 min, saving 1 h 20 min."
  },
  {
    id: 21012, section: "Numerical Ability",
    text: "Bus fares are increased by 25% and, as a result, the number of passengers falls by 20%. What is the effect on revenue?",
    options: ["A) Increases by 25%", "B) Increases by 5%", "C) Decreases by 5%", "D) No change"],
    answer: "D",
    explanation: "1.25 × 0.80 = 1.00, so revenue is unchanged."
  },
  {
    id: 21013, section: "Numerical Ability",
    text: "Two cars start at 9 a.m. from towns 400 km apart and drive towards each other at 45 km/h and 55 km/h. At what time will they meet?",
    options: ["A) 2 p.m.", "B) 1:30 p.m.", "C) 1 p.m.", "D) 12 noon"],
    answer: "C",
    explanation: "Closing speed = 100 km/h, so they meet after 4 hours, at 1 p.m."
  },
  {
    id: 21014, section: "Numerical Ability",
    text: "A truck runs 5 km on 1 litre of diesel, and diesel costs ₹90 per litre. What is the fuel cost of a 350 km trip?",
    options: ["A) ₹6,000", "B) ₹7,000", "C) ₹6,300", "D) ₹5,400"],
    answer: "C",
    explanation: "Diesel needed = 70 litres, and 70 × 90 = ₹6,300."
  },
  {
    id: 21015, section: "Numerical Ability",
    text: "A vehicle covers equal thirds of a journey at 20 km/h, 30 km/h and 60 km/h. What is its average speed for the whole journey?",
    options: ["A) 30 km/h", "B) 35 km/h", "C) 40 km/h", "D) 36.7 km/h"],
    answer: "A",
    explanation: "Average speed = 3/(1/20 + 1/30 + 1/60) = 3/(6/60) = 30 km/h."
  },
  {
    id: 21016, section: "Numerical Ability",
    text: "A 300 m long train crosses a pole in 15 seconds. How long will it take to cross a bridge 450 m long?",
    options: ["A) 30 seconds", "B) 45 seconds", "C) 22.5 seconds", "D) 37.5 seconds"],
    answer: "D",
    explanation: "Speed = 20 m/s. To cross the bridge it covers 750 m: 750/20 = 37.5 s."
  },
  {
    id: 21017, section: "Numerical Ability",
    text: "A vehicle loan of ₹3,00,000 is taken at 10% simple interest for 3 years. What is the total amount to be repaid?",
    options: ["A) ₹4,00,000", "B) ₹3,30,000", "C) ₹3,90,000", "D) ₹3,99,300"],
    answer: "C",
    explanation: "SI = 3,00,000 × 10 × 3/100 = 90,000. Total = ₹3,90,000."
  },
  {
    id: 21018, section: "Numerical Ability",
    text: "A tyre has a diameter of 70 cm. About how many revolutions does it make per kilometre? (Take π = 22/7)",
    options: ["A) 425", "B) 455", "C) 500", "D) 400"],
    answer: "B",
    explanation: "Circumference = 22/7 × 70 = 220 cm. 1,00,000/220 ≈ 454.5, i.e. about 455."
  },
  {
    id: 21019, section: "Numerical Ability",
    text: "Driving at 80% of his usual speed, a driver reaches his destination 30 minutes late. What is his usual travel time?",
    options: ["A) 3 hours", "B) 2 hours", "C) 2.5 hours", "D) 1.5 hours"],
    answer: "B",
    explanation: "At 4/5 of the speed, the time is 5/4 of usual. The extra 1/4 of the usual time is 30 min, so the usual time is 2 hours."
  },
  {
    id: 21020, section: "Numerical Ability",
    text: "The speeds of two vehicles are in the ratio 5 : 4. The first covers 300 km in 6 hours. How far does the second travel in 5 hours?",
    options: ["A) 180 km", "B) 250 km", "C) 200 km", "D) 240 km"],
    answer: "C",
    explanation: "First = 50 km/h, so second = 40 km/h, and 40 × 5 = 200 km."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 21021, section: "English",
    passage: "passage_1",
    text: "Which of the following best states the main idea of the passage?",
    options: ["A) Prompt help saves accident victims, and the law protects helpers and sets duties, but awareness is essential", "B) Bystanders should never help accident victims", "C) Drivers should flee from angry crowds", "D) Hospitals are responsible for all road accidents"],
    answer: "A",
    explanation: "The passage covers why help is delayed, how the law responds, and the need for awareness."
  },
  {
    id: 21022, section: "English",
    passage: "passage_1",
    text: "Why, according to the passage, did many bystanders hesitate to help accident victims?",
    options: ["A) They feared harassment, police inquiries or blame", "B) They were not allowed to touch victims", "C) They did not know first aid", "D) Hospitals were too far away"],
    answer: "A",
    explanation: "Stated in the first paragraph."
  },
  {
    id: 21023, section: "English",
    passage: "passage_1",
    text: "According to the passage, what is the legal duty of a driver involved in an accident?",
    options: ["A) To pay compensation on the spot", "B) To wait for the insurance company", "C) To secure medical attention for the injured and report the accident to the police", "D) To leave the scene immediately"],
    answer: "C",
    explanation: "Stated in the second paragraph."
  },
  {
    id: 21024, section: "English",
    passage: "passage_1",
    text: "What does the passage say about hospitals?",
    options: ["A) They can refuse to treat accident victims", "B) They cannot refuse emergency treatment or demand payment first", "C) They must report every helper's identity", "D) They treat only insured persons"],
    answer: "B",
    explanation: "Stated in the second paragraph."
  },
  {
    id: 21025, section: "English",
    passage: "passage_1",
    text: "The phrase 'in good faith', as used in the passage, means",
    options: ["A) for a reward", "B) on the orders of the police", "C) with a written guarantee", "D) with honest intentions"],
    answer: "D",
    explanation: "Acting in good faith means acting honestly, without any wrong motive."
  },
  {
    id: 21026, section: "English",
    text: "Choose the word most similar in meaning to COLLIDE.",
    options: ["A) Escape", "B) Pass", "C) Avoid", "D) Crash"],
    answer: "D",
    explanation: "To collide is to crash into something."
  },
  {
    id: 21027, section: "English",
    text: "Choose the word most similar in meaning to PROMPT.",
    options: ["A) Late", "B) Slow", "C) Quick", "D) Careless"],
    answer: "C",
    explanation: "Prompt means done without delay."
  },
  {
    id: 21028, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to CARELESS.",
    options: ["A) Careful", "B) Negligent", "C) Heedless", "D) Reckless"],
    answer: "A",
    explanation: "The opposite of careless is careful."
  },
  {
    id: 21029, section: "English",
    text: "Choose the word most nearly OPPOSITE in meaning to ARRIVAL.",
    options: ["A) Approach", "B) Entry", "C) Landing", "D) Departure"],
    answer: "D",
    explanation: "The opposite of arrival is departure."
  },
  {
    id: 21030, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The injured was (A) / taken to (B) / the hospital (C) / immediately. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "A",
    explanation: "'The injured' (meaning injured people) is plural: 'The injured were taken'."
  },
  {
    id: 21031, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>He drove (A) / very fastly (B) / on the highway (C) / last night. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "B",
    explanation: "'Fast' is both adjective and adverb; 'fastly' is not a word."
  },
  {
    id: 21032, section: "English",
    text: "Identify the part of the sentence that contains an error:<br>The driver, along with (A) / the conductor, (B) / have been (C) / suspended. (D)",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "With 'along with', the verb agrees with the first subject: 'has been suspended'."
  },
  {
    id: 21033, section: "English",
    text: "Fill in the blank: The bus was overloaded ______ passengers.",
    options: ["A) of", "B) from", "C) by", "D) with"],
    answer: "D",
    explanation: "'Overloaded with' is the correct collocation."
  },
  {
    id: 21034, section: "English",
    text: "Fill in the blank: The accident took place ______ midnight.",
    options: ["A) in", "B) by", "C) at", "D) on"],
    answer: "C",
    explanation: "'At' is used with exact times such as midnight and noon."
  },
  {
    id: 21035, section: "English",
    text: "Fill in the blank: The truck driver was arrested ______ the spot.",
    options: ["A) in", "B) over", "C) on", "D) at"],
    answer: "C",
    explanation: "'On the spot' means immediately, at the scene."
  },
  {
    id: 21036, section: "English",
    text: "Choose the correct meaning of the idiom: To hit the road",
    options: ["A) To have an accident", "B) To repair a road", "C) To stop driving", "D) To set out on a journey"],
    answer: "D",
    explanation: "To hit the road means to start a journey."
  },
  {
    id: 21037, section: "English",
    text: "Choose the correct meaning of the idiom: A back-seat driver",
    options: ["A) A driver who drives slowly", "B) A passenger who gives unwanted advice to the driver", "C) A chauffeur", "D) A learner driver"],
    answer: "B",
    explanation: "A back-seat driver offers unwanted advice or criticism."
  },
  {
    id: 21038, section: "English",
    text: "Choose the one word for: A place where motor vehicles are serviced and repaired",
    options: ["A) Garage", "B) Depot", "C) Dock", "D) Hangar"],
    answer: "A",
    explanation: "A garage repairs vehicles. A hangar houses aircraft and a dock is for ships."
  },
  {
    id: 21039, section: "English",
    text: "Choose the correct passive form of: The police will check all vehicles.",
    options: ["A) All vehicles will checked by the police.", "B) All vehicles will be checked by the police.", "C) All vehicles are checked by the police.", "D) All vehicles would be checked by the police."],
    answer: "B",
    explanation: "Future simple active becomes 'will be + V3'."
  },
  {
    id: 21040, section: "English",
    text: "Choose the correct indirect speech: The officer said to the driver, \"Show me your licence.\"",
    options: ["A) The officer ordered the driver that show him his licence.", "B) The officer asked the driver if he shows his licence.", "C) The officer said to the driver to show me your licence.", "D) The officer ordered the driver to show him his licence."],
    answer: "D",
    explanation: "A command becomes 'ordered/told + object + to + verb', with pronouns changed."
  },
  // ════════════════════════════════════════════════════════════
  // SECTION: Traffic Rules & Vehicle Maintenance
  // ════════════════════════════════════════════════════════════
  {
    id: 21041, section: "Traffic Rules & Vehicle Maintenance",
    text: "Under Section 129 of the Motor Vehicles Act, the requirement to wear a protective helmet does NOT apply to",
    options: ["A) a Sikh wearing a turban", "B) a person riding in a village", "C) a person riding below 40 km/h", "D) a pillion rider"],
    answer: "A",
    explanation: "Section 129 exempts a person of the Sikh faith wearing a turban."
  },
  {
    id: 21042, section: "Traffic Rules & Vehicle Maintenance",
    text: "When asked by a police officer in uniform, a driver is legally bound to produce",
    options: ["A) a character certificate", "B) only his Aadhaar card", "C) his driving licence and the vehicle's documents", "D) his bank passbook"],
    answer: "C",
    explanation: "Section 130 requires the driver to produce his licence, and the registration and other certificates, on demand."
  },
  {
    id: 21043, section: "Traffic Rules & Vehicle Maintenance",
    text: "Under the amended MV Act, the compensation payable from the government fund in a hit-and-run case resulting in death is",
    options: ["A) ₹50,000", "B) ₹2,00,000", "C) ₹10,00,000", "D) ₹25,000"],
    answer: "B",
    explanation: "Section 161 provides ₹2 lakh for death and ₹50,000 for grievous hurt in hit-and-run cases."
  },
  {
    id: 21044, section: "Traffic Rules & Vehicle Maintenance",
    text: "Under the amended MV Act, the penalty for driving a vehicle without registration (first offence) can be a fine of up to",
    options: ["A) ₹100", "B) ₹50,000", "C) ₹5,000", "D) ₹500"],
    answer: "C",
    explanation: "Section 192 provides a fine of up to ₹5,000 for a first offence."
  },
  {
    id: 21045, section: "Traffic Rules & Vehicle Maintenance",
    text: "Under the amended MV Act (2019), the penalty for overloading a goods vehicle is",
    options: ["A) ₹20,000 plus ₹2,000 per extra tonne", "B) ₹1,000 per extra tonne only", "C) ₹5,000 flat", "D) ₹500 only"],
    answer: "A",
    explanation: "Section 194 provides ₹20,000 plus ₹2,000 for each extra tonne, and the excess load must be removed."
  },
  {
    id: 21046, section: "Traffic Rules & Vehicle Maintenance",
    text: "Under the amended MV Act, carrying passengers beyond the permitted seating capacity attracts a fine of",
    options: ["A) ₹2,000 per extra passenger", "B) ₹200 per extra passenger", "C) ₹50 per extra passenger", "D) ₹10,000 flat"],
    answer: "B",
    explanation: "Section 194A provides ₹200 for each excess passenger."
  },
  {
    id: 21047, section: "Traffic Rules & Vehicle Maintenance",
    text: "Under the amended MV Act, using the horn needlessly or in a 'Silence Zone' (first offence) attracts a fine of",
    options: ["A) ₹10,000", "B) ₹1,000", "C) ₹100", "D) ₹25,000"],
    answer: "B",
    explanation: "Section 194F provides ₹1,000 for a first offence and ₹2,000 for a repeat offence."
  },
  {
    id: 21048, section: "Traffic Rules & Vehicle Maintenance",
    text: "Under the amended MV Act, driving a vehicle without valid insurance (first offence) attracts",
    options: ["A) imprisonment up to 3 months and/or a fine of ₹2,000", "B) only a warning", "C) a fine of ₹100", "D) seizure of the driving licence for life"],
    answer: "A",
    explanation: "Section 196 provides up to 3 months' imprisonment and/or ₹2,000 for a first offence."
  },
  {
    id: 21049, section: "Traffic Rules & Vehicle Maintenance",
    text: "At an uncontrolled road junction (with no signals or police), a driver should normally give way to",
    options: ["A) the faster vehicle", "B) the bigger vehicle", "C) traffic approaching from the right", "D) traffic approaching from the left"],
    answer: "C",
    explanation: "Under the Rules of the Road, give way to traffic from the right at uncontrolled intersections."
  },
  {
    id: 21050, section: "Traffic Rules & Vehicle Maintenance",
    text: "While entering a roundabout, a driver should give way to",
    options: ["A) no one; entering vehicles have priority", "B) vehicles waiting to enter", "C) pedestrians only", "D) vehicles already on the roundabout"],
    answer: "D",
    explanation: "Traffic already circulating on the roundabout has the right of way."
  },
  {
    id: 21051, section: "Traffic Rules & Vehicle Maintenance",
    text: "In India, what colour scheme is used on the number plates of commercial (transport) vehicles?",
    options: ["A) Black letters on a white background", "B) Black letters on a yellow background", "C) Yellow letters on a black background", "D) White letters on a green background"],
    answer: "B",
    explanation: "Commercial vehicles have yellow plates with black letters. Private vehicles have white plates with black letters."
  },
  {
    id: 21052, section: "Traffic Rules & Vehicle Maintenance",
    text: "Number plates with a green background are used for",
    options: ["A) electric vehicles", "B) diplomatic vehicles", "C) government vehicles", "D) army vehicles"],
    answer: "A",
    explanation: "Battery-operated (electric) vehicles carry green number plates: white letters for private and yellow letters for commercial use."
  },
  {
    id: 21053, section: "Traffic Rules & Vehicle Maintenance",
    text: "A learner driver must display",
    options: ["A) the letter 'L' on the front and rear of the vehicle", "B) a red flag on the roof", "C) a blue beacon", "D) his learner's licence on the windscreen"],
    answer: "A",
    explanation: "The 'L' sign warns others that the driver is learning. He must also be accompanied by a licensed instructor."
  },
  {
    id: 21054, section: "Traffic Rules & Vehicle Maintenance",
    text: "In a driving licence, the category 'MCWG' stands for",
    options: ["A) Medium Commercial Weight Goods", "B) Motor Car With Goods", "C) Motor Cycle With Gear", "D) Motor Cycle Without Gear"],
    answer: "C",
    explanation: "MCWG = Motor Cycle With Gear. MCWOG is without gear and LMV is Light Motor Vehicle."
  },
  {
    id: 21055, section: "Traffic Rules & Vehicle Maintenance",
    text: "On a tyre marked '195/65 R15', the number 15 indicates",
    options: ["A) the tyre width in mm", "B) the maximum speed", "C) the rim diameter in inches", "D) the aspect ratio"],
    answer: "C",
    explanation: "195 is the width in mm, 65 the aspect ratio (sidewall height as a % of width), R means radial, and 15 is the rim diameter in inches."
  },
  {
    id: 21056, section: "Traffic Rules & Vehicle Maintenance",
    text: "If a vehicle keeps pulling to one side while driving on a straight, level road, the most likely cause is",
    options: ["A) a weak battery", "B) incorrect wheel alignment or unequal tyre pressure", "C) low engine oil", "D) a dirty air filter"],
    answer: "B",
    explanation: "Misalignment or unequal pressure makes the vehicle drift to one side."
  },
  {
    id: 21057, section: "Traffic Rules & Vehicle Maintenance",
    text: "If the engine speed rises when the accelerator is pressed but the vehicle does not gain speed, the likely fault is",
    options: ["A) a slipping clutch", "B) a punctured tyre", "C) worn brake pads", "D) a discharged battery"],
    answer: "A",
    explanation: "A slipping clutch fails to transmit full engine power to the wheels."
  },
  {
    id: 21058, section: "Traffic Rules & Vehicle Maintenance",
    text: "When removing a vehicle battery, which terminal should be disconnected first?",
    options: ["A) The positive (+) terminal", "B) Both together", "C) Either, it does not matter", "D) The negative (−) terminal"],
    answer: "D",
    explanation: "Removing the negative (earth) terminal first avoids a short circuit if the spanner touches the body."
  },
  {
    id: 21059, section: "Traffic Rules & Vehicle Maintenance",
    text: "'Aquaplaning' (hydroplaning) occurs when",
    options: ["A) the windscreen gets fogged", "B) the radiator runs out of water", "C) a vehicle is washed in a river", "D) a layer of water builds up between the tyres and the road, causing loss of grip"],
    answer: "D",
    explanation: "At speed on wet roads, tyres can ride on a film of water and lose steering and braking control."
  },
  {
    id: 21060, section: "Traffic Rules & Vehicle Maintenance",
    text: "The single all-India emergency helpline number (Emergency Response Support System) is",
    options: ["A) 112", "B) 101", "C) 100", "D) 1098"],
    answer: "A",
    explanation: "112 connects to police, fire and ambulance services. 101 is fire and 1098 is the child helpline."
  }
];
