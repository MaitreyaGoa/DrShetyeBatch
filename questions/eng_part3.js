// ============================================================
// Dr Shetye Academic Program
// English Part Test 2 – 30 Questions / 30 Marks / 30 Minutes
// SSC CGL Level – All answers verified
// ============================================================
var questions = [

  // ── Vocabulary ────────────────────────────────────────────
  {
    id: 1001, section: "English",
    text: "Choose the synonym of \"Gregarious\".",
    options: ["Lonely", "Sociable", "Aggressive", "Timid"],
    answer: "B",
    explanation: "Gregarious means fond of company; sociable. It describes a person who enjoys being with others."
  },
  {
    id: 1002, section: "English",
    text: "Choose the antonym of \"Indolent\".",
    options: ["Lazy", "Careless", "Diligent", "Slow"],
    answer: "C",
    explanation: "Indolent means lazy and unwilling to work. Its antonym is Diligent, meaning hardworking and careful."
  },
  {
    id: 1003, section: "English",
    text: "Choose the correct meaning of \"Ameliorate\".",
    options: ["To worsen", "To improve", "To destroy", "To delay"],
    answer: "B",
    explanation: "Ameliorate means to make something bad or unsatisfactory better; to improve."
  },
  {
    id: 1004, section: "English",
    text: "Choose the synonym of \"Taciturn\".",
    options: ["Talkative", "Reserved", "Angry", "Generous"],
    answer: "B",
    explanation: "Taciturn means reserved and saying very little. Synonym = Reserved."
  },
  {
    id: 1005, section: "English",
    text: "Choose the antonym of \"Belligerent\".",
    options: ["Aggressive", "Hostile", "Peaceful", "Fearless"],
    answer: "C",
    explanation: "Belligerent means hostile and aggressive. Its antonym is Peaceful."
  },

  // ── Idioms & Phrases ──────────────────────────────────────
  {
    id: 1006, section: "English",
    text: "\"To throw in the towel\" means:",
    options: ["To start a fight", "To give up", "To clean something", "To win easily"],
    answer: "B",
    explanation: "The idiom means to admit defeat or surrender; to give up on something."
  },
  {
    id: 1007, section: "English",
    text: "\"To blow one's own trumpet\" means:",
    options: ["To play music", "To praise oneself", "To lie", "To shout loudly"],
    answer: "B",
    explanation: "It means to boast or brag about one's own achievements and abilities."
  },
  {
    id: 1008, section: "English",
    text: "\"A bolt from the blue\" means:",
    options: ["A flash of lightning", "A planned event", "A complete surprise", "A bad omen"],
    answer: "C",
    explanation: "It means something that is completely unexpected and surprising, like a sudden shock."
  },
  {
    id: 1009, section: "English",
    text: "\"To let the cat out of the bag\" means:",
    options: ["To free an animal", "To reveal a secret accidentally", "To create confusion", "To make a mistake"],
    answer: "B",
    explanation: "It means to accidentally reveal a secret that was supposed to be kept hidden."
  },
  {
    id: 1010, section: "English",
    text: "\"To paddle one's own canoe\" means:",
    options: ["To go for a swim", "To be self-reliant", "To ask for help", "To travel alone"],
    answer: "B",
    explanation: "It means to be independent and self-reliant; to manage one's own affairs without help."
  },

  // ── Fill in the Blanks ────────────────────────────────────
  {
    id: 1011, section: "English",
    text: "Despite working hard, he failed _______ clear the examination.",
    options: ["to", "in", "for", "at"],
    answer: "A",
    explanation: "'Failed to' is the correct structure followed by an infinitive → 'failed to clear'."
  },
  {
    id: 1012, section: "English",
    text: "The committee has _______ its decision to postpone the event.",
    options: ["reverting", "reversed", "reverted", "reversion"],
    answer: "B",
    explanation: "'Reversed its decision' means changed or undone a decision. 'Reversed' is the correct past participle here."
  },
  {
    id: 1013, section: "English",
    text: "He speaks English _______ his mother tongue.",
    options: ["as if", "like", "as", "such as"],
    answer: "B",
    explanation: "'Like' is used for comparison without a verb → 'like his mother tongue' (comparing manner, not a clause)."
  },
  {
    id: 1014, section: "English",
    text: "The teacher was _______ with the student's progress.",
    options: ["satisfy", "satisfying", "satisfied", "satisfaction"],
    answer: "C",
    explanation: "'Was satisfied with' is the correct past passive construction. 'Satisfied' is an adjective here."
  },
  {
    id: 1015, section: "English",
    text: "_______ the rain, the match was cancelled.",
    options: ["Despite", "Because", "Owing to", "Although"],
    answer: "C",
    explanation: "'Owing to' + noun phrase is grammatically correct for showing cause. 'Owing to the rain' correctly explains the reason for cancellation."
  },

  // ── Spotting Errors ───────────────────────────────────────
  {
    id: 1016, section: "English",
    text: "Find the error: \"Neither of the two boys have submitted their assignment.\"",
    options: ["Neither of", "the two boys", "have submitted", "their assignment"],
    answer: "C",
    explanation: "'Neither' is singular and takes a singular verb → 'has submitted'. Also 'their' should ideally be 'his'."
  },
  {
    id: 1017, section: "English",
    text: "Find the error: \"The number of students in the class are increasing every year.\"",
    options: ["The number", "of students", "in the class", "are increasing"],
    answer: "D",
    explanation: "'The number of' always takes a singular verb → 'is increasing'. (Note: 'A number of' takes plural verb.)"
  },
  {
    id: 1018, section: "English",
    text: "Find the error: \"She is one of those women who works tirelessly for the society.\"",
    options: ["She is one", "of those women", "who works", "tirelessly for the society"],
    answer: "C",
    explanation: "'Who' refers to 'those women' which is plural → verb should be 'who work' not 'who works'."
  },
  {
    id: 1019, section: "English",
    text: "Find the error: \"I have met him last evening at the railway station.\"",
    options: ["I have met", "him last evening", "at the railway", "station"],
    answer: "A",
    explanation: "'Last evening' is a specific past time. Present Perfect cannot be used with specific past time → should be 'I met'."
  },
  {
    id: 1020, section: "English",
    text: "Find the error: \"Ramesh together with his friends are going to the fair.\"",
    options: ["Ramesh together", "with his friends", "are going", "to the fair"],
    answer: "C",
    explanation: "'Together with' does not change the subject. Ramesh is singular → verb should be 'is going' not 'are going'."
  },

  // ── Sentence Improvement ──────────────────────────────────
  {
    id: 1021, section: "English",
    text: "\"The police have caught the thief which had stolen the car.\" Choose the improvement:",
    options: ["that had stolen", "who has stolen", "which has stolen", "No improvement"],
    answer: "A",
    explanation: "'Thief' is a person → use 'who/that' not 'which'. Past perfect 'had stolen' is correct for the earlier action → 'that had stolen'."
  },
  {
    id: 1022, section: "English",
    text: "\"No sooner did he arrive than everyone left.\" Choose the improvement:",
    options: ["when everyone left", "then everyone left", "before everyone left", "No improvement"],
    answer: "D",
    explanation: "'No sooner...than' is the correct correlative conjunction pair. The sentence is already grammatically correct."
  },
  {
    id: 1023, section: "English",
    text: "\"She is more intelligent than any student in the class.\" Choose the improvement:",
    options: ["than any other student", "than all students", "than every other student", "No improvement"],
    answer: "A",
    explanation: "She is part of the class, so comparing her to 'any student' includes herself. Correct form: 'than any other student'."
  },
  {
    id: 1024, section: "English",
    text: "\"He was too tired that he could not walk.\" Choose the improvement:",
    options: ["so tired that", "very tired that", "too tired to", "No improvement"],
    answer: "C",
    explanation: "Correct structure with 'too' is: 'too + adjective + to + verb' → 'too tired to walk'."
  },
  {
    id: 1025, section: "English",
    text: "\"Inspite of his hard work, he could not clear the exam.\" Choose the improvement:",
    options: ["In spite of", "Despite of", "In despite of", "No improvement"],
    answer: "A",
    explanation: "'Inspite' written as one word is incorrect. The correct form is 'In spite of' (three separate words). Note: 'Despite of' is also wrong — 'despite' never takes 'of'."
  },

  // ── One Word Substitution ─────────────────────────────────
  {
    id: 1026, section: "English",
    text: "One who studies the origin and history of words:",
    options: ["Linguist", "Etymologist", "Philologist", "Lexicographer"],
    answer: "B",
    explanation: "Etymologist = one who studies the origin, history and development of words."
  },
  {
    id: 1027, section: "English",
    text: "A person who is always optimistic even in difficult situations:",
    options: ["Stoic", "Pessimist", "Pollyanna", "Cynic"],
    answer: "C",
    explanation: "Pollyanna = an excessively or blindly optimistic person, even in the most difficult situations."
  },
  {
    id: 1028, section: "English",
    text: "The practice of a woman having more than one husband at the same time:",
    options: ["Polygamy", "Polyandry", "Bigamy", "Monogamy"],
    answer: "B",
    explanation: "Polyandry = the practice of a woman having more than one husband simultaneously. Polygamy = multiple spouses (general term)."
  },
  {
    id: 1029, section: "English",
    text: "A place where monks live and work:",
    options: ["Cathedral", "Monastery", "Seminary", "Convent"],
    answer: "B",
    explanation: "Monastery = a building where monks live and work. Convent = for nuns. Seminary = for training priests."
  },
  {
    id: 1030, section: "English",
    text: "One who pretends to be sick to avoid work:",
    options: ["Hypochondriac", "Malingerer", "Stoic", "Introvert"],
    answer: "B",
    explanation: "Malingerer = one who pretends to be ill or injured to avoid duty or work. (Hypochondriac = one who genuinely believes they are ill.)"
  }

];
