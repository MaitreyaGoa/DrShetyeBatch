// eng_ldc2.js – Dr Shetye Academic Programme
// LDC English Practice — Set 2
// 20 Q · voice, narration, vocabulary, idioms, grammar, error spotting, usage

var questions = [

  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 13501, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ACTIVE & PASSIVE VOICE</span><br>Change into passive voice:<br><b>Who wrote this letter?</b>",
    options: ["By whom this letter was written?", "Who was this letter written by whom?", "By whom was this letter written?", "This letter was written by who?", "None of the above"],
    answer: "C",
    explanation: "'Who' becomes 'By whom' and the question form is kept (helping verb before subject): 'By whom was this letter written?'"
  },
  {
    id: 13502, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">DIRECT & INDIRECT SPEECH</span><br>Change into indirect speech:<br><b>The teacher said to the students, “Do not make a noise.”</b>",
    options: ["The teacher told the students to not to make a noise.", "The teacher told the students not to make a noise.", "The teacher said the students do not make a noise.", "The teacher ordered the students that do not make a noise.", "None of the above"],
    answer: "B",
    explanation: "A negative command → 'told/ordered … not to + verb': 'told the students not to make a noise'."
  },
  {
    id: 13503, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SYNONYM</span><br>Choose the word most similar in meaning to <b>CANDID</b>.",
    options: ["Secretive", "Rude", "Frank", "Shy", "None of the above"],
    answer: "C",
    explanation: "Candid = honest and straightforward; frank."
  },
  {
    id: 13504, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ANTONYM</span><br>Choose the word opposite in meaning to <b>DILIGENT</b>.",
    options: ["Lazy", "Industrious", "Careful", "Attentive", "None of the above"],
    answer: "A",
    explanation: "Diligent = hard-working. Industrious is a synonym; the opposite is lazy."
  },
  {
    id: 13505, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ONE-WORD SUBSTITUTION</span><br>A person who can speak many languages.",
    options: ["Bilingual", "Polyglot", "Translator", "Philologist", "None of the above"],
    answer: "B",
    explanation: "Polyglot = one who knows many languages. Bilingual = two languages; a philologist studies the history of languages."
  },
  {
    id: 13506, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ONE-WORD SUBSTITUTION</span><br>A place where birds are kept.",
    options: ["Apiary", "Aquarium", "Kennel", "Aviary", "None of the above"],
    answer: "D",
    explanation: "Aviary — birds. Apiary — bees; aquarium — fish; kennel — dogs."
  },
  {
    id: 13507, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">IDIOMS & PHRASES</span><br>Choose the meaning of the idiom: <b>To call a spade a spade</b>",
    options: ["To speak plainly and frankly", "To dig the ground", "To insult someone", "To change one's opinion", "None of the above"],
    answer: "A",
    explanation: "To call a spade a spade = to speak honestly and directly, without softening the truth."
  },
  {
    id: 13508, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">IDIOMS & PHRASES</span><br>Choose the meaning of the idiom: <b>Once in a blue moon</b>",
    options: ["Every night", "At midnight", "Very rarely", "During a festival", "None of the above"],
    answer: "C",
    explanation: "Once in a blue moon = very rarely."
  },
  {
    id: 13509, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">FILL IN THE BLANK — PREPOSITION</span><br>He is junior ______ me by three years.",
    options: ["than", "from", "of", "to", "None of the above"],
    answer: "D",
    explanation: "Latin comparatives (junior, senior, superior, inferior, prior) take 'to', not 'than'."
  },
  {
    id: 13510, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">FILL IN THE BLANK — TENSE</span><br>I ______ in this city for ten years now.",
    options: ["have been living", "am living", "lived", "was living", "None of the above"],
    answer: "A",
    explanation: "An action that began in the past and is still continuing, with 'for ten years now', takes the present perfect continuous: have been living."
  },
  {
    id: 13511, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SUBJECT–VERB AGREEMENT</span><br>Each of the boys ______ a new bicycle.",
    options: ["have", "are having", "has", "were having", "None of the above"],
    answer: "C",
    explanation: "'Each of' + plural noun takes a singular verb: Each … has."
  },
  {
    id: 13512, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ERROR SPOTTING</span><br>Find the part of the sentence that has an error. (If there is no error, choose E.)<br><b>(A) One of my friends / (B) have gone / (C) to Delhi / (D) for higher studies.</b>",
    options: ["One of my friends", "have gone", "to Delhi", "for higher studies", "None of the above"],
    answer: "B",
    explanation: "The subject is 'One' (singular), so 'have gone' must be 'has gone'."
  },
  {
    id: 13513, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SENTENCE REARRANGEMENT</span><br>Rearrange the parts to form a meaningful sentence:<br>P: the students &nbsp; Q: of the classroom &nbsp; R: When the bell rang &nbsp; S: rushed out",
    options: ["PRSQ", "RSPQ", "RPQS", "RPSQ", "None of the above"],
    answer: "D",
    explanation: "R–P–S–Q: 'When the bell rang, the students rushed out of the classroom.'"
  },
  {
    id: 13514, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">QUESTION TAGS</span><br>She can swim very well, ______?",
    options: ["can she", "can't she", "doesn't she", "isn't she", "None of the above"],
    answer: "B",
    explanation: "A positive statement takes a negative tag with the same helping verb: can → can't she?"
  },
  {
    id: 13515, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">CONJUNCTIONS</span><br>He worked hard ______ he could pass the examination.",
    options: ["so that", "because", "unless", "although", "None of the above"],
    answer: "A",
    explanation: "'So that' expresses purpose — he worked hard in order to pass."
  },
  {
    id: 13516, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">VERBAL ANALOGY</span><br>Complete the analogy: <b>Lion : Roar :: Snake : ?</b>",
    options: ["Bark", "Howl", "Bleat", "Neigh", "None of the above"],
    answer: "E",
    explanation: "A lion roars; a snake <b>hisses</b>. 'Hiss' is not among A–D (bark — dog, howl — wolf, bleat — goat/sheep, neigh — horse), so the answer is E."
  },
  {
    id: 13517, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">PROVERBS</span><br>Choose the meaning of the proverb: <b>Strike while the iron is hot.</b>",
    options: ["Do not waste your energy", "Never work in anger", "Hard work always pays", "Make use of an opportunity at the right time", "None of the above"],
    answer: "D",
    explanation: "Act promptly when the moment is favourable — as a blacksmith shapes iron only while it is hot."
  },
  {
    id: 13518, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">GENDER</span><br>Choose the feminine form of <b>monk</b>.",
    options: ["Monkess", "Priestess", "Nun", "Abbess", "None of the above"],
    answer: "C",
    explanation: "Monk → nun. (Abbess is the feminine of abbot; priestess of priest.)"
  },
  {
    id: 13519, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SENTENCE IMPROVEMENT</span><br>Choose the correct replacement for the underlined part:<br>My brother is <u>senior than me</u> by two years.",
    options: ["senior from me", "senior to me", "more senior than me", "No improvement", "None of the above"],
    answer: "B",
    explanation: "'Senior' takes 'to', not 'than': 'senior to me'."
  },
  {
    id: 13520, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SPELLING</span><br>Choose the correctly spelt word.",
    options: ["Occassion", "Ocasion", "Occation", "Occasion", "None of the above"],
    answer: "D",
    explanation: "Occasion — double c, single s."
  }

];

// Answer key lookup
var ANSWER_KEY = {};
questions.forEach(q => { ANSWER_KEY[q.id] = q.answer; });
