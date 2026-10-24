// eng_ldc1.js – Dr Shetye Academic Programme
// LDC English Practice — Set 1
// 20 Q · voice, narration, vocabulary, idioms, grammar, error spotting, usage

var questions = [

  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 13401, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ACTIVE & PASSIVE VOICE</span><br>Change into passive voice:<br><b>The committee will announce the results tomorrow.</b>",
    options: ["The results would be announced by the committee tomorrow.", "The results will be announce by the committee tomorrow.", "The results will be announced by the committee tomorrow.", "The results are going to announce by the committee tomorrow.", "None of the above"],
    answer: "C",
    explanation: "Simple future active (will + V1) → passive 'will be + V3': will be announced. A changes the tense (would), B uses V1 'announce', D is still active in form."
  },
  {
    id: 13402, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">DIRECT & INDIRECT SPEECH</span><br>Change into indirect speech:<br><b>He said to me, “Where are you going?”</b>",
    options: ["He asked me where was I going.", "He asked me where I was going.", "He told me where I am going.", "He asked me where I am going.", "None of the above"],
    answer: "B",
    explanation: "'said to' → 'asked' for a question; the question becomes a statement (subject before verb: 'I was'); present continuous → past continuous; 'you' → 'I'."
  },
  {
    id: 13403, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SYNONYM</span><br>Choose the word most similar in meaning to <b>METICULOUS</b>.",
    options: ["Careless", "Hasty", "Generous", "Thorough", "None of the above"],
    answer: "D",
    explanation: "Meticulous = showing great attention to detail; very careful and thorough."
  },
  {
    id: 13404, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ANTONYM</span><br>Choose the word opposite in meaning to <b>FRUGAL</b>.",
    options: ["Extravagant", "Thrifty", "Economical", "Prudent", "None of the above"],
    answer: "A",
    explanation: "Frugal = careful with money. Thrifty, economical and prudent are near-synonyms; the opposite is extravagant (spending wastefully)."
  },
  {
    id: 13405, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ONE-WORD SUBSTITUTION</span><br>A person who does not believe in the existence of God.",
    options: ["Theist", "Agnostic", "Atheist", "Pessimist", "None of the above"],
    answer: "C",
    explanation: "Atheist denies God's existence. A theist believes in God; an agnostic holds that it cannot be known; a pessimist expects the worst."
  },
  {
    id: 13406, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ONE-WORD SUBSTITUTION</span><br>A speech delivered without any previous preparation.",
    options: ["Extempore", "Soliloquy", "Monologue", "Epilogue", "None of the above"],
    answer: "A",
    explanation: "Extempore = spoken without preparation. A soliloquy is talking to oneself on stage; a monologue is a long speech by one person; an epilogue is a concluding section."
  },
  {
    id: 13407, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">IDIOMS & PHRASES</span><br>Choose the meaning of the idiom: <b>To bury the hatchet</b>",
    options: ["To make peace", "To hide a weapon", "To start a quarrel", "To keep a secret", "None of the above"],
    answer: "A",
    explanation: "To bury the hatchet = to end a quarrel and become friendly again."
  },
  {
    id: 13408, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">IDIOMS & PHRASES</span><br>Choose the meaning of the idiom: <b>A blessing in disguise</b>",
    options: ["Something that seems bad at first but turns out to be good", "A secret gift from a friend", "A false promise", "A prayer said silently", "None of the above"],
    answer: "A",
    explanation: "A blessing in disguise is an apparent misfortune that later proves beneficial."
  },
  {
    id: 13409, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">FILL IN THE BLANK — PREPOSITION</span><br>She has been suffering ______ fever since Monday.",
    options: ["with", "by", "of", "from", "None of the above"],
    answer: "D",
    explanation: "The fixed preposition is 'suffer from' (an illness)."
  },
  {
    id: 13410, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">FILL IN THE BLANK — TENSE</span><br>By the time we reached the station, the train ______.",
    options: ["left", "had left", "has left", "was leaving", "None of the above"],
    answer: "B",
    explanation: "Of two past actions, the one completed first takes the past perfect: the train had left before we reached."
  },
  {
    id: 13411, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">PLURAL FORMS</span><br>Choose the correct plural of <b>criterion</b>.",
    options: ["Criterions", "Criterias", "Criteria", "Criterion", "None of the above"],
    answer: "C",
    explanation: "Criterion (Greek) → criteria, like phenomenon → phenomena."
  },
  {
    id: 13412, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ERROR SPOTTING</span><br>Find the part of the sentence that has an error. (If there is no error, choose E.)<br><b>(A) Neither the teacher nor the students / (B) was present / (C) in the classroom / (D) yesterday.</b>",
    options: ["Neither the teacher nor the students", "was present", "in the classroom", "yesterday", "None of the above"],
    answer: "B",
    explanation: "With 'neither … nor', the verb agrees with the nearer subject. 'the students' is plural, so 'was' must be 'were'."
  },
  {
    id: 13413, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SENTENCE REARRANGEMENT</span><br>Rearrange the parts to form a meaningful sentence:<br>P: gave us &nbsp; Q: The old man &nbsp; R: a basket of mangoes &nbsp; S: who lived next door",
    options: ["QPSR", "QSPR", "SQPR", "QSRP", "None of the above"],
    answer: "B",
    explanation: "Q–S–P–R: 'The old man who lived next door gave us a basket of mangoes.' The relative clause (S) must come right after the noun it describes (Q)."
  },
  {
    id: 13414, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ARTICLES</span><br>He is ______ honest man and ______ European by birth.",
    options: ["an, a", "a, an", "an, an", "a, a", "None of the above"],
    answer: "A",
    explanation: "Articles go by sound: 'honest' begins with a vowel sound (silent h) → an; 'European' begins with a 'yu' consonant sound → a."
  },
  {
    id: 13415, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">DEGREES OF COMPARISON</span><br>Choose the correct comparative form of:<br><b>Very few cities in India are as large as Mumbai.</b>",
    options: ["Mumbai is larger than any other city in India.", "Mumbai is the largest city in India.", "Mumbai is not larger than many cities in India.", "Mumbai is larger than most other cities in India.", "None of the above"],
    answer: "D",
    explanation: "'Very few … as large as' means Mumbai is among the largest, not the largest. Comparative: 'larger than most other cities'. Options A and B would mean it is the single largest city."
  },
  {
    id: 13416, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">VERBAL ANALOGY</span><br>Complete the analogy: <b>Sculptor : Statue :: Architect : ?</b>",
    options: ["Design", "Bricks", "Building", "Engineer", "None of the above"],
    answer: "C",
    explanation: "A sculptor creates a statue; an architect creates (designs) a building."
  },
  {
    id: 13417, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">FOREIGN PHRASES</span><br>The phrase <b>bona fide</b> means:",
    options: ["In bad faith", "Genuine", "Temporary", "Free of cost", "None of the above"],
    answer: "B",
    explanation: "Bona fide (Latin, 'in good faith') = genuine, real."
  },
  {
    id: 13418, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">COLLECTIVE NOUNS</span><br>Fill in the blank: a ______ of wolves",
    options: ["herd", "flock", "swarm", "pack", "None of the above"],
    answer: "D",
    explanation: "A pack of wolves (a herd of cattle, a flock of sheep, a swarm of bees)."
  },
  {
    id: 13419, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SENTENCE IMPROVEMENT</span><br>Choose the correct replacement for the underlined part:<br><u>If I was</u> the Prime Minister, I would ban single-use plastic.",
    options: ["If I am", "If I had been", "If I were", "No improvement", "None of the above"],
    answer: "C",
    explanation: "An imaginary or unreal present condition takes the subjunctive 'were' for all subjects: 'If I were the Prime Minister, I would…'."
  },
  {
    id: 13420, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SPELLING</span><br>Choose the correctly spelt word.",
    options: ["Comittee", "Commitee", "Committe", "Comitee", "None of the above"],
    answer: "E",
    explanation: "The correct spelling is <b>Committee</b> — double m, double t, double e. None of A–D is correct, so the answer is E."
  }

];

// Answer key lookup
var ANSWER_KEY = {};
questions.forEach(q => { ANSWER_KEY[q.id] = q.answer; });
