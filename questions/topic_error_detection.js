// ============================================================
// Dr. Shetye Academic Program — Topic: Error Detection
// Subject: English | 15 Questions | All answers verified
// ============================================================
var questions = [
  {
    id: 7001, section: "English",
    text: "Find the error: 'He do not know the answer.'",
    options: ["A) He", "B) do not", "C) know", "D) the answer"],
    answer: "B",
    explanation: "'Do not' should be 'does not'. With third person singular (He/She/It), we use 'does not'."
  },
  {
    id: 7002, section: "English",
    text: "Find the error: 'She has went to the market.'",
    options: ["A) She", "B) has went", "C) to the", "D) market"],
    answer: "B",
    explanation: "'Has went' is incorrect. The past participle of 'go' is 'gone'. Correct: 'has gone'."
  },
  {
    id: 7003, section: "English",
    text: "Find the error: 'Each of the students have submitted their assignment.'",
    options: ["A) Each of", "B) the students", "C) have submitted", "D) their assignment"],
    answer: "C",
    explanation: "'Each' is singular and takes a singular verb. Correct: 'has submitted'."
  },
  {
    id: 7004, section: "English",
    text: "Find the error: 'I am senior than him in this office.'",
    options: ["A) I am", "B) senior than", "C) him in", "D) this office"],
    answer: "B",
    explanation: "'Senior than' is incorrect. Latin comparatives (senior, junior, superior, inferior) take 'to', not 'than'. Correct: 'senior to him'."
  },
  {
    id: 7005, section: "English",
    text: "Find the error: 'The committee have decided to postpone the meeting.'",
    options: ["A) The committee", "B) have decided", "C) to postpone", "D) the meeting"],
    answer: "B",
    explanation: "Collective nouns (committee, jury, team) take singular verbs when acting as a unit. Correct: 'has decided'."
  },
  {
    id: 7006, section: "English",
    text: "Find the error: 'Neither of the two options are acceptable.'",
    options: ["A) Neither of", "B) the two", "C) options are", "D) acceptable"],
    answer: "C",
    explanation: "'Neither' is singular. Correct: 'Neither of the two options is acceptable'."
  },
  {
    id: 7007, section: "English",
    text: "Find the error: 'He is one of those officers who works tirelessly.'",
    options: ["A) He is one of", "B) those officers", "C) who works", "D) tirelessly"],
    answer: "C",
    explanation: "The relative pronoun 'who' refers to 'officers' (plural). Correct: 'who work tirelessly'."
  },
  {
    id: 7008, section: "English",
    text: "Find the error: 'The news are very disturbing.'",
    options: ["A) The news", "B) are", "C) very", "D) disturbing"],
    answer: "B",
    explanation: "'News' is an uncountable noun and always singular. Correct: 'The news is very disturbing'."
  },
  {
    id: 7009, section: "English",
    text: "Find the error: 'He insisted to go there immediately.'",
    options: ["A) He insisted", "B) to go", "C) there", "D) immediately"],
    answer: "B",
    explanation: "'Insist' takes 'on + gerund' not 'to + infinitive'. Correct: 'insisted on going'."
  },
  {
    id: 7010, section: "English",
    text: "Find the error: 'No sooner did the bell rang than the students left.'",
    options: ["A) No sooner did", "B) the bell", "C) rang", "D) the students left"],
    answer: "C",
    explanation: "With 'no sooner did', the verb must be in base form. Correct: 'No sooner did the bell ring than...'."
  },
  {
    id: 7011, section: "English",
    text: "Find the error: 'The police has arrested three suspects.'",
    options: ["A) The police", "B) has arrested", "C) three", "D) suspects"],
    answer: "B",
    explanation: "'Police' is always plural. Correct: 'The police have arrested three suspects'."
  },
  {
    id: 7012, section: "English",
    text: "Find the error: 'She told that she would come tomorrow.'",
    options: ["A) She told", "B) that she", "C) would come", "D) tomorrow"],
    answer: "A",
    explanation: "'Tell' must have an object (person told). Correct: 'She said that she would come tomorrow'."
  },
  {
    id: 7013, section: "English",
    text: "Find the error: 'Mala as well as her sisters have gone to Delhi.'",
    options: ["A) Mala as well as", "B) her sisters", "C) have gone", "D) to Delhi"],
    answer: "C",
    explanation: "When 'as well as' joins subjects, the verb agrees with the first subject (Mala = singular). Correct: 'has gone'."
  },
  {
    id: 7014, section: "English",
    text: "Find the error: 'The furniture are very expensive.'",
    options: ["A) The furniture", "B) are", "C) very", "D) expensive"],
    answer: "B",
    explanation: "'Furniture' is an uncountable noun (always singular). Correct: 'The furniture is very expensive'."
  },
  {
    id: 7015, section: "English",
    text: "Find the error: 'He is more smarter than his brother.'",
    options: ["A) He is", "B) more smarter", "C) than his", "D) brother"],
    answer: "B",
    explanation: "Double comparative is wrong. 'Smarter' already means 'more smart'. Correct: 'He is smarter than his brother'."
  }
];
var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
