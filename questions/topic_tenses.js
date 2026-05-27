// ============================================================
// Dr. Shetye Academic Program — Topic Test: English Tenses
// Subject: English | 15 Questions
// ============================================================

var questions = [

  {
    id: 4001, section: "English",
    text: "She ________ to school every day.",
    options: ["A) go", "B) goes", "C) going", "D) gone"],
    answer: "B",
    explanation: "Simple Present tense with third person singular (She) takes 'goes'."
  },

  {
    id: 4002, section: "English",
    text: "They ________ football when it started to rain.",
    options: ["A) play", "B) played", "C) were playing", "D) have played"],
    answer: "C",
    explanation: "Past Continuous tense — an ongoing action interrupted by another. 'Were playing' is correct."
  },

  {
    id: 4003, section: "English",
    text: "By the time he arrived, the train ________.",
    options: ["A) left", "B) has left", "C) had left", "D) was leaving"],
    answer: "C",
    explanation: "Past Perfect tense — action completed before another past action. 'Had left' is correct."
  },

  {
    id: 4004, section: "English",
    text: "I ________ this book for two hours. (ongoing action with result)",
    options: ["A) read", "B) am reading", "C) have been reading", "D) had read"],
    answer: "C",
    explanation: "Present Perfect Continuous — action started in past, still ongoing. 'Have been reading' is correct."
  },

  {
    id: 4005, section: "English",
    text: "The Sun ________ in the East.",
    options: ["A) rise", "B) rises", "C) rose", "D) has risen"],
    answer: "B",
    explanation: "Universal truth uses Simple Present tense. 'Rises' is correct."
  },

  {
    id: 4006, section: "English",
    text: "He ________ here since 2018.",
    options: ["A) lives", "B) lived", "C) has lived", "D) is living"],
    answer: "C",
    explanation: "Present Perfect tense is used with 'since' to show an action continuing from the past. 'Has lived' is correct."
  },

  {
    id: 4007, section: "English",
    text: "Identify the correct sentence:",
    options: [
      "A) She did not went to the market.",
      "B) She did not go to the market.",
      "C) She does not went to the market.",
      "D) She has not went to the market."
    ],
    answer: "B",
    explanation: "With 'did not', the base form of the verb is used. 'Go' not 'went'. Option B is correct."
  },

  {
    id: 4008, section: "English",
    text: "When I ________ home, my mother was cooking dinner.",
    options: ["A) reach", "B) reached", "C) had reached", "D) was reaching"],
    answer: "B",
    explanation: "Simple Past for a completed action ('reached') alongside Past Continuous for the background action ('was cooking')."
  },

  {
    id: 4009, section: "English",
    text: "The students ________ their exam by 5 PM tomorrow.",
    options: ["A) will finish", "B) will have finished", "C) are finishing", "D) finish"],
    answer: "B",
    explanation: "Future Perfect tense — action that will be completed before a future time. 'Will have finished' is correct."
  },

  {
    id: 4010, section: "English",
    text: "He ________ his keys. Now he can't open the door.",
    options: ["A) lost", "B) loses", "C) has lost", "D) had lost"],
    answer: "C",
    explanation: "Present Perfect — past action with present relevance. 'Has lost' is correct."
  },

  {
    id: 4011, section: "English",
    text: "We ________ in this city for ten years before we moved.",
    options: ["A) lived", "B) have lived", "C) had lived", "D) were living"],
    answer: "C",
    explanation: "Past Perfect — action completed before another past action (moving). 'Had lived' is correct."
  },

  {
    id: 4012, section: "English",
    text: "Choose the sentence in Future Continuous tense:",
    options: [
      "A) She will complete the work.",
      "B) She will be completing the work at noon.",
      "C) She will have completed the work.",
      "D) She completes the work."
    ],
    answer: "B",
    explanation: "Future Continuous = will be + present participle. Option B 'will be completing' is Future Continuous."
  },

  {
    id: 4013, section: "English",
    text: "The report ________ before the meeting starts. (passive, future)",
    options: ["A) will prepare", "B) will be prepared", "C) is prepared", "D) was prepared"],
    answer: "B",
    explanation: "Passive voice in Future tense = will be + past participle. 'Will be prepared' is correct."
  },

  {
    id: 4014, section: "English",
    text: "She said she ________ the assignment the previous day.",
    options: ["A) submits", "B) submitted", "C) had submitted", "D) has submitted"],
    answer: "C",
    explanation: "In reported speech, Simple Past shifts to Past Perfect. 'Had submitted' is correct."
  },

  {
    id: 4015, section: "English",
    text: "Every morning, he ________ up at 5 AM and ________ for an hour.",
    options: ["A) wakes / runs", "B) woke / ran", "C) has woken / ran", "D) wakes / ran"],
    answer: "A",
    explanation: "Habitual present routine uses Simple Present throughout. 'Wakes and runs' is correct."
  }

];

var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
