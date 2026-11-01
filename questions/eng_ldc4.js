// eng_ldc4.js – Dr Shetye Academic Programme
// LDC English Practice — Set 4
// 20 Q · voice, narration, vocabulary, idioms, grammar, error spotting, usage

var questions = [

  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 15501, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ACTIVE & PASSIVE VOICE</span><br>Change into passive voice:<br><b>Open the window.</b>",
    options: ["The window is opened.", "The window should open.", "Let the window be opened.", "Let the window opened.", "None of the above"],
    answer: "C",
    explanation: "An imperative (order) becomes passive with <b>Let + object + be + V3</b>: Let the window be opened."
  },
  {
    id: 15502, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">DIRECT & INDIRECT SPEECH</span><br>Change into indirect speech:<br><b>She said, “What a lovely garden this is!”</b>",
    options: ["She exclaimed that it was a very lovely garden.", "She exclaimed that what a lovely garden this was.", "She said that what a lovely garden it is.", "She asked what a lovely garden that was.", "None of the above"],
    answer: "A",
    explanation: "An exclamation → reporting verb <b>exclaimed</b> + that; ‘What a …’ becomes ‘very …’, and ‘this is’ becomes ‘it was’: She exclaimed that it was a very lovely garden."
  },
  {
    id: 15503, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SYNONYM</span><br>Choose the word closest in meaning to <b>TEDIOUS</b>.",
    options: ["Exciting", "Difficult", "Hurried", "Monotonous", "None of the above"],
    answer: "D",
    explanation: "Tedious = long, slow and boring → <b>monotonous</b>. ‘Exciting’ is its opposite."
  },
  {
    id: 15504, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ANTONYM</span><br>Choose the word opposite in meaning to <b>VIGILANT</b>.",
    options: ["Watchful", "Careless", "Alert", "Cautious", "None of the above"],
    answer: "B",
    explanation: "Vigilant = watchful and alert. Its opposite is <b>careless</b>. The other three mean nearly the same as vigilant."
  },
  {
    id: 15505, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ONE-WORD SUBSTITUTION</span><br>A place where patients recover after a long illness:",
    options: ["Dispensary", "Mortuary", "Sanatorium", "Laboratory", "None of the above"],
    answer: "C",
    explanation: "<b>Sanatorium</b> = a place for long-term recovery. A dispensary gives medicines; a mortuary keeps dead bodies."
  },
  {
    id: 15506, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ONE-WORD SUBSTITUTION</span><br>A person who never drinks alcohol:",
    options: ["Teetotaller", "Vegetarian", "Glutton", "Ascetic", "None of the above"],
    answer: "A",
    explanation: "<b>Teetotaller</b> = one who abstains completely from alcohol. A glutton eats too much; an ascetic gives up all pleasures."
  },
  {
    id: 15507, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">IDIOMS & PHRASES</span><br>Choose the meaning of the underlined idiom:<br>There has been <u>bad blood</u> between the two neighbours since the boundary dispute.",
    options: ["A family relationship", "Ill feeling or hostility", "A serious illness", "A fair agreement", "None of the above"],
    answer: "B",
    explanation: "Bad blood = <b>ill feeling, hostility</b> between people because of past quarrels."
  },
  {
    id: 15508, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">IDIOMS & PHRASES</span><br>Choose the meaning of the underlined idiom:<br>Winning the state-level award was <u>a feather in her cap</u>.",
    options: ["A cause of shame", "A small reward", "A decoration on a hat", "An achievement to be proud of", "None of the above"],
    answer: "D",
    explanation: "A feather in one's cap = an <b>achievement to be proud of</b>."
  },
  {
    id: 15509, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">FILL IN THE BLANK — PREPOSITION</span><br>Candidates must refrain ______ using mobile phones in the examination hall.",
    options: ["to", "of", "from", "against", "None of the above"],
    answer: "C",
    explanation: "‘Refrain’ (to stop oneself from doing something) takes <b>from</b>: refrain <b>from</b> using."
  },
  {
    id: 15510, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">FILL IN THE BLANK — TENSE</span><br>Look! The children ______ in the rain.",
    options: ["are playing", "play", "have played", "were playing", "None of the above"],
    answer: "A",
    explanation: "‘Look!’ shows the action is happening at this very moment → <b>present continuous</b>: are playing."
  },
  {
    id: 15511, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">PHRASAL VERBS</span><br>Choose the meaning of the underlined phrasal verb:<br>While cleaning the cupboard, I <u>came across</u> my old school photographs.",
    options: ["Threw away", "Searched for", "Tore up", "Found by chance", "None of the above"],
    answer: "D",
    explanation: "Come across = to <b>find or meet by chance</b>."
  },
  {
    id: 15512, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ERROR SPOTTING</span><br>Find the part of the sentence that has an error:<br>The police (i) / is investigating (ii) / the theft (iii) / very carefully. (iv)",
    options: ["(i)", "(ii)", "(iii)", "(iv)", "No error"],
    answer: "B",
    explanation: "‘Police’ is always treated as a <b>plural</b> noun (like cattle, people), so it takes a plural verb: The police <b>are</b> investigating. The error is in part (ii)."
  },
  {
    id: 15513, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SENTENCE REARRANGEMENT</span><br>Arrange the sentences in a logical order:<br>P: She switched it on and began typing her report.<br>Q: Meera reached the office early on Monday.<br>R: Just then the power went off and all her unsaved work was lost.<br>S: She went straight to her desk and took out her laptop.",
    options: ["Q-P-S-R", "S-Q-P-R", "Q-S-P-R", "Q-S-R-P", "None of the above"],
    answer: "C",
    explanation: "Arrival (Q) → goes to her desk and takes out the laptop (S) → switches it on and types (P) → power cut (R): <b>Q-S-P-R</b>."
  },
  {
    id: 15514, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">DETERMINERS</span><br>I have ______ friends in this city, so I never feel lonely here.",
    options: ["a few", "few", "a little", "little", "None of the above"],
    answer: "A",
    explanation: "‘Friends’ is countable, so use few / a few. <b>A few</b> means ‘some’ (positive) — which fits ‘I never feel lonely’. ‘Few’ would mean hardly any."
  },
  {
    id: 15515, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">CONJUNCTIONS</span><br>Work hard, ______ you will not clear the exam.",
    options: ["and", "otherwise", "but", "so", "None of the above"],
    answer: "B",
    explanation: "The second part shows what will happen if the first is <b>not</b> done → <b>otherwise</b> (or). ‘Work hard, and …’ would need a positive result."
  },
  {
    id: 15516, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">KINDS OF NOUNS</span><br>Identify the kind of noun underlined:<br>The soldier was awarded a medal for his <u>bravery</u>.",
    options: ["Proper noun", "Collective noun", "Material noun", "Abstract noun", "None of the above"],
    answer: "D",
    explanation: "Bravery is a quality that cannot be seen or touched → <b>abstract noun</b> (like honesty, kindness, freedom)."
  },
  {
    id: 15517, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SPELLING</span><br>Choose the <b>incorrectly</b> spelt word.",
    options: ["Fluorescent", "Supersede", "Exhilerate", "Harass", "None of the above"],
    answer: "C",
    explanation: "The correct spelling is <b>exhilarate</b> (to make very happy) — with an ‘a’ after the ‘l’: ex-hil-a-rate. Fluorescent, supersede and harass are spelt correctly."
  },
  {
    id: 15518, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">VERBAL ANALOGY</span><br>Doctor : Stethoscope :: Astronomer : ?",
    options: ["Telescope", "Microscope", "Planet", "Observatory", "None of the above"],
    answer: "A",
    explanation: "A doctor uses a stethoscope as his instrument; an astronomer uses a <b>telescope</b>. (An observatory is the place, not the instrument.)"
  },
  {
    id: 15519, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SENTENCE IMPROVEMENT</span><br>Choose the correct replacement for the underlined part:<br>Rohan is one of the <u>best player</u> in the team.",
    options: ["better player", "best players", "good players", "No improvement", "None of the above"],
    answer: "B",
    explanation: "‘One of the …’ is always followed by a <b>superlative + plural noun</b>: one of the <b>best players</b>."
  },
  {
    id: 15520, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">TYPES OF SENTENCES</span><br><b>Having finished his work, Rahul went home.</b><br>What kind of sentence is this (by structure)?",
    options: ["Compound sentence", "Compound-complex sentence", "Complex sentence", "Simple sentence", "None of the above"],
    answer: "D",
    explanation: "There is only <b>one finite verb</b> (‘went’) and one clause; ‘Having finished his work’ is a participle phrase, not a clause → <b>simple sentence</b>. (‘After he had finished his work, Rahul went home’ would be complex.)"
  }

];

// Answer key lookup
var ANSWER_KEY = {};
questions.forEach(q => { ANSWER_KEY[q.id] = q.answer; });
