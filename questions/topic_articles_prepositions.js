// ============================================================
// Dr. Shetye Academic Program — Topic Test: Articles & Prepositions
// Subject: English | 15 Questions
// ============================================================

var questions = [

  {
    id: 4101, section: "English",
    text: "She is ________ honest officer.",
    options: ["A) a", "B) an", "C) the", "D) no article"],
    answer: "B",
    explanation: "'Honest' starts with a vowel sound /ɒ/, so 'an' is used. 'An honest officer'."
  },

  {
    id: 4102, section: "English",
    text: "________ Taj Mahal is one of the Seven Wonders of the World.",
    options: ["A) A", "B) An", "C) The", "D) No article"],
    answer: "C",
    explanation: "'The' is used before unique monuments and proper names of famous places."
  },

  {
    id: 4103, section: "English",
    text: "He put the letter ________ the envelope.",
    options: ["A) in", "B) into", "C) on", "D) at"],
    answer: "B",
    explanation: "'Into' shows movement from outside to inside. 'In' shows static position. 'Put into' is correct."
  },

  {
    id: 4104, section: "English",
    text: "The train arrives ________ 9 AM.",
    options: ["A) in", "B) on", "C) at", "D) by"],
    answer: "C",
    explanation: "'At' is used for specific clock times. 'Arrives at 9 AM' is correct."
  },

  {
    id: 4105, section: "English",
    text: "She was born ________ 15th August.",
    options: ["A) in", "B) at", "C) on", "D) by"],
    answer: "C",
    explanation: "'On' is used with specific dates. 'Born on 15th August' is correct."
  },

  {
    id: 4106, section: "English",
    text: "I have been waiting here ________ two hours.",
    options: ["A) since", "B) for", "C) from", "D) during"],
    answer: "B",
    explanation: "'For' is used with a period/duration of time. 'Since' is used with a specific point of time."
  },

  {
    id: 4107, section: "English",
    text: "He has not eaten anything ________ morning.",
    options: ["A) for", "B) from", "C) since", "D) during"],
    answer: "C",
    explanation: "'Since' is used with a specific point in time (morning = a point, not a duration)."
  },

  {
    id: 4108, section: "English",
    text: "The book is ________ the table.",
    options: ["A) in", "B) on", "C) at", "D) above"],
    answer: "B",
    explanation: "'On' shows position on a surface. 'The book is on the table' is correct."
  },

  {
    id: 4109, section: "English",
    text: "She is good ________ Mathematics.",
    options: ["A) in", "B) at", "C) with", "D) on"],
    answer: "B",
    explanation: "'Good at' is the correct collocation for describing a skill or subject."
  },

  {
    id: 4110, section: "English",
    text: "Choose the correct sentence:",
    options: [
      "A) He is a university professor.",
      "B) He is an university professor.",
      "C) He is the university professor.",
      "D) He is an universities professor."
    ],
    answer: "A",
    explanation: "'University' starts with a consonant sound /juː/, so 'a' not 'an' is used."
  },

  {
    id: 4111, section: "English",
    text: "The thief jumped ________ the wall and ran away.",
    options: ["A) across", "B) over", "C) through", "D) along"],
    answer: "B",
    explanation: "'Over' means from one side to the other above something. 'Jumped over the wall' is correct."
  },

  {
    id: 4112, section: "English",
    text: "He died ________ cancer.",
    options: ["A) from", "B) of", "C) by", "D) with"],
    answer: "B",
    explanation: "'Die of' is used for diseases. 'Died of cancer' is the correct collocation."
  },

  {
    id: 4113, section: "English",
    text: "________ apple a day keeps the doctor away.",
    options: ["A) A", "B) An", "C) The", "D) No article"],
    answer: "B",
    explanation: "'Apple' starts with a vowel sound /æ/, so 'An' is used."
  },

  {
    id: 4114, section: "English",
    text: "The judge is known for his fairness. ________ judge is respected by all.",
    options: ["A) A", "B) An", "C) The", "D) No article"],
    answer: "C",
    explanation: "'The' is used to refer to a specific person already mentioned. 'The judge' refers to the same judge."
  },

  {
    id: 4115, section: "English",
    text: "He is interested ________ learning new languages.",
    options: ["A) for", "B) about", "C) in", "D) with"],
    answer: "C",
    explanation: "'Interested in' is the correct preposition collocation."
  }

];

var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
