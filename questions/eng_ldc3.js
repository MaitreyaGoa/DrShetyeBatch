// eng_ldc3.js – Dr Shetye Academic Programme
// LDC English Practice — Set 3
// 20 Q · voice, narration, vocabulary, idioms, grammar, error spotting, usage

var questions = [

  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 15401, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ACTIVE & PASSIVE VOICE</span><br>Change into passive voice:<br><b>The villagers had rebuilt the old temple before the festival.</b>",
    options: ["The old temple was rebuilt by the villagers before the festival.", "The old temple had been rebuilt by the villagers before the festival.", "The old temple has been rebuilt by the villagers before the festival.", "The old temple had rebuilt by the villagers before the festival.", "None of the above"],
    answer: "B",
    explanation: "Past perfect active (had + V3) → passive <b>had been + V3</b>. The object 'the old temple' becomes the subject: The old temple <b>had been rebuilt</b> by the villagers before the festival."
  },
  {
    id: 15402, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">DIRECT & INDIRECT SPEECH</span><br>Change into indirect speech:<br><b>The coach said to the players, “Don't waste your energy now.”</b>",
    options: ["The coach told the players that don't waste their energy then.", "The coach said to the players not to waste your energy now.", "The coach advised the players not to waste their energy then.", "The coach advised the players to not wasting their energy.", "None of the above"],
    answer: "C",
    explanation: "A negative command/advice → reporting verb <b>advised/told</b> + <b>not to</b> + base verb. 'your' → their, 'now' → then: The coach advised the players not to waste their energy then."
  },
  {
    id: 15403, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SYNONYM</span><br>Choose the word closest in meaning to <b>ZEALOUS</b>.",
    options: ["Jealous", "Lazy", "Doubtful", "Enthusiastic", "None of the above"],
    answer: "D",
    explanation: "Zealous = full of energy and eagerness for a cause → <b>enthusiastic</b>. Don't confuse it with 'jealous' because the spelling looks similar."
  },
  {
    id: 15404, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ANTONYM</span><br>Choose the word opposite in meaning to <b>OPULENT</b>.",
    options: ["Impoverished", "Wealthy", "Lavish", "Grand", "None of the above"],
    answer: "A",
    explanation: "Opulent = very rich, luxurious. Its opposite is <b>impoverished</b> (very poor). Wealthy, lavish and grand are close to 'opulent'."
  },
  {
    id: 15405, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ONE-WORD SUBSTITUTION</span><br>A person who spends money recklessly and wastefully:",
    options: ["Spendthrift", "Miser", "Philanthropist", "Debtor", "None of the above"],
    answer: "A",
    explanation: "<b>Spendthrift</b> = one who spends money carelessly. A miser hoards money; a philanthropist gives money for good causes."
  },
  {
    id: 15406, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ONE-WORD SUBSTITUTION</span><br>A book or award that is published or given <b>after the death</b> of the author or person:",
    options: ["Anonymous", "Obituary", "Posthumous", "Epitaph", "None of the above"],
    answer: "C",
    explanation: "<b>Posthumous</b> = happening after a person's death (a posthumous award). An obituary is a news notice about a death; an epitaph is written on a tombstone; anonymous = without a known name."
  },
  {
    id: 15407, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">IDIOMS & PHRASES</span><br>Choose the meaning of the underlined idiom:<br>After the sudden transfer of the manager, the whole office was <u>at sixes and sevens</u>.",
    options: ["Very busy with work", "In a state of confusion and disorder", "Working in two shifts", "Celebrating happily", "None of the above"],
    answer: "B",
    explanation: "At sixes and sevens = in a state of <b>total confusion or disorder</b>."
  },
  {
    id: 15408, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">IDIOMS & PHRASES</span><br>Choose the meaning of the underlined idiom:<br>He was determined to win the contract <u>by hook or by crook</u>.",
    options: ["By any means, fair or unfair", "Only by honest hard work", "With the help of friends", "By luck alone", "None of the above"],
    answer: "A",
    explanation: "By hook or by crook = by <b>any means possible</b>, whether fair or unfair."
  },
  {
    id: 15409, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">FILL IN THE BLANK — PREPOSITION</span><br>Many children in remote areas are still deprived ______ basic education.",
    options: ["from", "off", "for", "of", "None of the above"],
    answer: "D",
    explanation: "‘Deprive’ always takes <b>of</b>: deprived <b>of</b> education, deprived of sleep."
  },
  {
    id: 15410, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">FILL IN THE BLANK — TENSE</span><br>She ______ in this bank since 2019.",
    options: ["is working", "works", "has been working", "worked", "None of the above"],
    answer: "C",
    explanation: "An action that began in the past and is still continuing, with ‘since’ → <b>present perfect continuous</b>: has been working."
  },
  {
    id: 15411, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">PHRASAL VERBS</span><br>Choose the meaning of the underlined phrasal verb:<br>Riya <u>takes after</u> her grandmother; both have the same smile.",
    options: ["Looks after", "Resembles", "Follows everywhere", "Respects", "None of the above"],
    answer: "B",
    explanation: "Take after = to <b>resemble</b> an older family member in looks or nature."
  },
  {
    id: 15412, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ERROR SPOTTING</span><br>Find the part of the sentence that has an error:<br>The news of the victory (i) / were received (ii) / with great joy (iii) / by everyone. (iv)",
    options: ["(i)", "(ii)", "(iii)", "(iv)", "No error"],
    answer: "B",
    explanation: "‘News’ looks plural but is an <b>uncountable singular</b> noun, so it takes a singular verb: The news … <b>was</b> received. The error is in part (ii)."
  },
  {
    id: 15413, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SENTENCE REARRANGEMENT</span><br>Arrange the sentences in a logical order:<br>P: Within minutes, the whole village had gathered at the river bank.<br>Q: A little boy slipped and fell into the swollen river.<br>R: A fisherman finally jumped in and pulled him out safely.<br>S: Hearing his cries, his friends ran to the village for help.",
    options: ["Q-S-P-R", "Q-P-S-R", "S-Q-P-R", "Q-R-S-P", "None of the above"],
    answer: "A",
    explanation: "The boy falls (Q) → his friends hear him and run for help (S) → the village gathers (P) → a fisherman rescues him (R): <b>Q-S-P-R</b>."
  },
  {
    id: 15414, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ARTICLES</span><br>She bought ______ umbrella and ______ uniform for school.",
    options: ["a; an", "an; an", "a; a", "an; a", "None of the above"],
    answer: "D",
    explanation: "Use the article by <b>sound</b>, not spelling: ‘umbrella’ starts with a vowel sound → <b>an</b>; ‘uniform’ starts with a ‘yu’ (consonant) sound → <b>a</b>."
  },
  {
    id: 15415, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">QUESTION TAGS</span><br>Nobody called me while I was out, ______?",
    options: ["didn't they", "did they", "did he", "didn't he", "None of the above"],
    answer: "B",
    explanation: "‘Nobody’ makes the statement <b>negative</b>, so the tag is positive, and ‘nobody/everybody’ take the pronoun <b>they</b>: …, <b>did they?</b>"
  },
  {
    id: 15416, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">PARTS OF SPEECH</span><br>Identify the part of speech of the underlined word:<br>The <u>poor</u> need our help and support.",
    options: ["Adjective", "Adverb", "Verb", "Noun", "None of the above"],
    answer: "D",
    explanation: "‘The poor’ means poor people — an adjective used with ‘the’ to name a group works as a <b>noun</b> (here it is the subject of ‘need’)."
  },
  {
    id: 15417, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SPELLING</span><br>Choose the correctly spelt word.",
    options: ["Liason", "Laison", "Liaison", "Liasion", "None of the above"],
    answer: "C",
    explanation: "<b>Liaison</b> (cooperation / a link between groups) has an ‘i’ on both sides of the ‘a’: l-i-a-i-s-o-n."
  },
  {
    id: 15418, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">VERBAL ANALOGY</span><br>Bee : Hive :: Horse : ?",
    options: ["Stable", "Den", "Kennel", "Burrow", "None of the above"],
    answer: "A",
    explanation: "A bee lives in a hive; a horse is kept in a <b>stable</b>. (Den — lion, kennel — dog, burrow — rabbit.)"
  },
  {
    id: 15419, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SENTENCE IMPROVEMENT</span><br>Choose the correct replacement for the underlined part:<br>My sister is <u>proficient at</u> three languages.",
    options: ["proficient for", "proficient with", "proficient on", "proficient in", "None of the above"],
    answer: "D",
    explanation: "‘Proficient’ (skilled) takes the preposition <b>in</b>: proficient <b>in</b> English, proficient in three languages."
  },
  {
    id: 15420, section: "English",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">TYPES OF SENTENCES</span><br><b>What a beautiful sunset it is!</b><br>What kind of sentence is this?",
    options: ["Interrogative", "Imperative", "Exclamatory", "Declarative", "None of the above"],
    answer: "C",
    explanation: "It expresses strong feeling and ends with an exclamation mark → <b>exclamatory</b>. It begins with ‘What’ but asks nothing, so it is not interrogative."
  }

];

// Answer key lookup
var ANSWER_KEY = {};
questions.forEach(q => { ANSWER_KEY[q.id] = q.answer; });
