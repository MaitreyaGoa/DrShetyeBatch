var questions = [
  // --- MATHS (6 questions) ---
  {
    id: "dq_20260607_001",
    section: "Maths",
    text: "A shopkeeper sells an article for ₹840 and gains 20%. What is the cost price?",
    options: ["₹680", "₹700", "₹720", "₹750"],
    answer: "B",
    explanation: "CP = SP × 100 / (100 + Gain%) = 840 × 100 / 120 = ₹700."
  },
  {
    id: "dq_20260607_002",
    section: "Maths",
    text: "The simple interest on ₹5,000 at 8% per annum for 3 years is:",
    options: ["₹1,000", "₹1,200", "₹1,400", "₹1,600"],
    answer: "B",
    explanation: "SI = (P × R × T) / 100 = (5000 × 8 × 3) / 100 = ₹1,200."
  },
  {
    id: "dq_20260607_003",
    section: "Maths",
    text: "If 12 workers complete a job in 18 days, how many days will 9 workers take to complete the same job?",
    options: ["20 days", "22 days", "24 days", "27 days"],
    answer: "C",
    explanation: "Total work = 12 × 18 = 216 man-days. Days for 9 workers = 216 / 9 = 24 days."
  },
  {
    id: "dq_20260607_004",
    section: "Maths",
    text: "A train 180 m long passes a pole in 9 seconds. What is the speed of the train in km/h?",
    options: ["60 km/h", "68 km/h", "72 km/h", "80 km/h"],
    answer: "C",
    explanation: "Speed = 180 / 9 = 20 m/s. Convert: 20 × 18/5 = 72 km/h."
  },
  {
    id: "dq_20260607_005",
    section: "Maths",
    text: "The average of five consecutive odd numbers is 31. What is the largest of these numbers?",
    options: ["33", "35", "37", "39"],
    answer: "B",
    explanation: "The middle (3rd) number equals the average = 31. So the numbers are 27, 29, 31, 33, 35. Largest = 35."
  },
  {
    id: "dq_20260607_006",
    section: "Maths",
    text: "What percentage of 80 is 52?",
    options: ["60%", "62.5%", "65%", "67.5%"],
    answer: "C",
    explanation: "(52 / 80) × 100 = 65%."
  },

  // --- ENGLISH (5 questions) ---
  {
    id: "dq_20260607_007",
    section: "English",
    text: "Choose the correct synonym of ELOQUENT:",
    options: ["Silent", "Fluent", "Harsh", "Dull"],
    answer: "B",
    explanation: "Eloquent means fluent and persuasive in speech or writing."
  },
  {
    id: "dq_20260607_008",
    section: "English",
    text: "Fill in the blank: She ______ to the market before the rain started.",
    options: ["goes", "had gone", "has gone", "will go"],
    answer: "B",
    explanation: "'Had gone' (past perfect) is correct as the action was completed before another past event (rain starting)."
  },
  {
    id: "dq_20260607_009",
    section: "English",
    text: "Identify the correctly spelled word:",
    options: ["Accomodation", "Acommodation", "Accommodation", "Acomodation"],
    answer: "C",
    explanation: "Correct spelling is 'Accommodation' — with double 'c' and double 'm'."
  },
  {
    id: "dq_20260607_010",
    section: "English",
    text: "Choose the antonym of LENIENT:",
    options: ["Generous", "Strict", "Calm", "Gentle"],
    answer: "B",
    explanation: "Lenient means tolerant/permissive; its antonym is Strict."
  },
  {
    id: "dq_20260607_011",
    section: "English",
    text: "Which one-word substitute fits: 'A person who cannot be corrected'?",
    options: ["Inexorable", "Incorrigible", "Infallible", "Insolvent"],
    answer: "B",
    explanation: "Incorrigible describes someone whose bad habits or behaviour cannot be reformed."
  },

  // --- REASONING (4 questions) ---
  {
    id: "dq_20260607_012",
    section: "Reasoning",
    text: "Find the odd one out: 17, 23, 37, 41, 49",
    options: ["17", "23", "41", "49"],
    answer: "D",
    explanation: "17, 23, 37, and 41 are all prime numbers. 49 = 7 × 7 is composite, so it is the odd one out."
  },
  {
    id: "dq_20260607_013",
    section: "Reasoning",
    text: "Pointing to a photograph, Ravi says, 'She is the daughter of my grandfather's only son.' How is the girl related to Ravi?",
    options: ["Cousin", "Sister", "Niece", "Aunt"],
    answer: "B",
    explanation: "Grandfather's only son = Ravi's father. Father's daughter = Ravi's sister."
  },
  {
    id: "dq_20260607_014",
    section: "Reasoning",
    text: "What comes next in the series? 3, 6, 12, 24, 48, ___",
    options: ["72", "84", "96", "100"],
    answer: "C",
    explanation: "Each term is doubled: 3→6→12→24→48→96."
  },
  {
    id: "dq_20260607_015",
    section: "Reasoning",
    text: "In a certain code, CAT is written as FDW. How is DOG written in that code?",
    options: ["GRJ", "GRK", "GSJ", "HRJ"],
    answer: "A",
    explanation: "Each letter is shifted +3: D→G, O→R, G→J. So DOG = GRJ."
  }
];
