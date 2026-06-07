var questions = [
  // --- MATHS (6 questions) ---
  {
    id: "dq_20260608_001",
    section: "Maths",
    text: "The ratio of two numbers is 3:5. If each number is increased by 10, the new ratio becomes 5:7. What are the original numbers?",
    options: ["15 and 25", "18 and 30", "12 and 20", "9 and 15"],
    answer: "A",
    explanation: "Let numbers be 3x and 5x. (3x+10)/(5x+10) = 5/7 → 21x+70 = 25x+50 → 4x = 20 → x = 5. Numbers: 15 and 25."
  },
  {
    id: "dq_20260608_002",
    section: "Maths",
    text: "A sum of money doubles itself in 8 years at simple interest. What is the rate of interest per annum?",
    options: ["10%", "12%", "12.5%", "15%"],
    answer: "C",
    explanation: "SI = P (since it doubles). P = (P × R × 8)/100 → R = 100/8 = 12.5% per annum."
  },
  {
    id: "dq_20260608_003",
    section: "Maths",
    text: "A can do a piece of work in 15 days and B in 20 days. In how many days will they finish it together?",
    options: ["7 days", "8 days", "8.57 days", "9 days"],
    answer: "C",
    explanation: "A's 1-day work = 1/15, B's = 1/20. Together = 1/15 + 1/20 = 7/60. Days = 60/7 ≈ 8.57 days."
  },
  {
    id: "dq_20260608_004",
    section: "Maths",
    text: "If the selling price of 10 articles equals the cost price of 12 articles, what is the profit percentage?",
    options: ["15%", "20%", "25%", "30%"],
    answer: "B",
    explanation: "Let CP of 1 article = 1. CP of 10 = 10, SP of 10 = 12. Profit% = (2/10) × 100 = 20%."
  },
  {
    id: "dq_20260608_005",
    section: "Maths",
    text: "The perimeter of a square is 64 cm. What is its area?",
    options: ["196 sq cm", "225 sq cm", "256 sq cm", "289 sq cm"],
    answer: "C",
    explanation: "Side = 64/4 = 16 cm. Area = 16 × 16 = 256 sq cm."
  },
  {
    id: "dq_20260608_006",
    section: "Maths",
    text: "A number when divided by 6 leaves remainder 5. What will be the remainder when twice the number is divided by 6?",
    options: ["1", "2", "4", "5"],
    answer: "C",
    explanation: "Let number = 6k+5. Twice = 12k+10 = 12k+6+4. When divided by 6, remainder = 4."
  },

  // --- ENGLISH (5 questions) ---
  {
    id: "dq_20260608_007",
    section: "English",
    text: "Select the correct passive voice of: 'The teacher explained the lesson clearly.'",
    options: [
      "The lesson was explained clearly by the teacher.",
      "The lesson is explained clearly by the teacher.",
      "The lesson has been explained clearly by the teacher.",
      "The lesson explained clearly by the teacher."
    ],
    answer: "A",
    explanation: "Simple past active → passive: was + past participle. 'The lesson was explained clearly by the teacher.'"
  },
  {
    id: "dq_20260608_008",
    section: "English",
    text: "Choose the word most similar in meaning to CANDID:",
    options: ["Dishonest", "Frank", "Reserved", "Cunning"],
    answer: "B",
    explanation: "Candid means honest and straightforward — synonymous with Frank."
  },
  {
    id: "dq_20260608_009",
    section: "English",
    text: "Identify the correct sentence:",
    options: [
      "Neither of the boys have done their homework.",
      "Neither of the boys has done his homework.",
      "Neither of the boys have done his homework.",
      "Neither of the boys has done their homework."
    ],
    answer: "B",
    explanation: "'Neither' takes a singular verb ('has') and singular pronoun ('his')."
  },
  {
    id: "dq_20260608_010",
    section: "English",
    text: "Choose the one-word substitute for: 'Government by the people':",
    options: ["Oligarchy", "Monarchy", "Democracy", "Aristocracy"],
    answer: "C",
    explanation: "Democracy means a system of government by the whole population through elected representatives."
  },
  {
    id: "dq_20260608_011",
    section: "English",
    text: "Fill in the blank: The committee ______ its decision yesterday.",
    options: ["announce", "announces", "announced", "will announce"],
    answer: "C",
    explanation: "'Yesterday' indicates simple past tense, so 'announced' is correct."
  },

  // --- REASONING (4 questions) ---
  {
    id: "dq_20260608_012",
    section: "Reasoning",
    text: "If MANGO is coded as 13-1-14-7-15, how is GRAPE coded?",
    options: ["7-18-1-16-5", "7-17-1-16-5", "6-18-1-16-5", "7-18-2-16-5"],
    answer: "A",
    explanation: "Each letter is replaced by its position in the alphabet: G=7, R=18, A=1, P=16, E=5."
  },
  {
    id: "dq_20260608_013",
    section: "Reasoning",
    text: "Four friends — Anita, Bela, Charu, and Deepa — are sitting in a row facing north. Bela is to the right of Anita. Charu is between Bela and Deepa. Who is at the leftmost position?",
    options: ["Anita", "Bela", "Charu", "Deepa"],
    answer: "A",
    explanation: "Order from left to right: Anita, Bela, Charu, Deepa (Bela right of Anita; Charu between Bela and Deepa). Leftmost = Anita."
  },
  {
    id: "dq_20260608_014",
    section: "Reasoning",
    text: "What is the missing number? 2, 5, 10, 17, 26, ___",
    options: ["35", "36", "37", "38"],
    answer: "C",
    explanation: "Differences: 3, 5, 7, 9, 11 (odd numbers increasing by 2). 26 + 11 = 37."
  },
  {
    id: "dq_20260608_015",
    section: "Reasoning",
    text: "All cats are animals. Some animals are dogs. Which conclusion definitely follows?",
    options: [
      "All cats are dogs.",
      "Some cats are dogs.",
      "Some animals are cats.",
      "All animals are cats."
    ],
    answer: "C",
    explanation: "Since all cats are animals, it follows that some animals are cats. No other conclusion is definite."
  }
];
