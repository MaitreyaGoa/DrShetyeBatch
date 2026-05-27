// ============================================================
// Dr. Shetye Academic Program — Topic: Fill in the Blanks (Grammar)
// Subject: English | 15 Questions | All answers verified
// ============================================================
var questions = [
  {
    id: 7101, section: "English",
    text: "She ________ playing tennis since morning.",
    options: ["A) is", "B) was", "C) has been", "D) had been"],
    answer: "C",
    explanation: "Present Perfect Continuous is used for an action that started in the past and is still continuing. 'Has been playing' is correct."
  },
  {
    id: 7102, section: "English",
    text: "He insisted ________ seeing the manager personally.",
    options: ["A) to", "B) for", "C) on", "D) at"],
    answer: "C",
    explanation: "'Insist on + gerund' is the correct collocation. 'Insist on seeing' is correct."
  },
  {
    id: 7103, section: "English",
    text: "If it rains tomorrow, we ________ the match.",
    options: ["A) cancel", "B) will cancel", "C) would cancel", "D) cancelled"],
    answer: "B",
    explanation: "Type 1 conditional: If + present simple, will + base verb. 'Will cancel' is correct."
  },
  {
    id: 7104, section: "English",
    text: "Neither the principal nor the teachers ________ present at the function.",
    options: ["A) was", "B) were", "C) has been", "D) is"],
    answer: "B",
    explanation: "With 'neither...nor', the verb agrees with the subject closest to it. 'Teachers' is plural → 'were'."
  },
  {
    id: 7105, section: "English",
    text: "He is the best student ________ I have ever taught.",
    options: ["A) who", "B) whom", "C) which", "D) that"],
    answer: "D",
    explanation: "After superlatives (best, worst, only), 'that' is preferred over 'who' as a relative pronoun."
  },
  {
    id: 7106, section: "English",
    text: "The thief ________ before the police arrived.",
    options: ["A) escaped", "B) has escaped", "C) had escaped", "D) was escaping"],
    answer: "C",
    explanation: "Past Perfect is used for the action that happened before another past action. 'Had escaped' is correct."
  },
  {
    id: 7107, section: "English",
    text: "I wish I ________ a millionaire.",
    options: ["A) am", "B) was", "C) were", "D) had been"],
    answer: "C",
    explanation: "In subjunctive mood with 'wish' (present/future unreal), we use 'were' for all persons."
  },
  {
    id: 7108, section: "English",
    text: "The book ________ on the table belongs to the principal.",
    options: ["A) lay", "B) laid", "C) lying", "D) lain"],
    answer: "C",
    explanation: "'Lying' (present participle of 'lie') is used here as a participial adjective. 'The book lying on the table'."
  },
  {
    id: 7109, section: "English",
    text: "No sooner ________ the bell ring than the students rushed out.",
    options: ["A) did", "B) has", "C) had", "D) was"],
    answer: "C",
    explanation: "'No sooner...than' uses Past Perfect. 'No sooner had the bell rung than...' is correct."
  },
  {
    id: 7110, section: "English",
    text: "She speaks English ________ she were a native speaker.",
    options: ["A) like", "B) as if", "C) as though it", "D) as if that"],
    answer: "B",
    explanation: "'As if' introduces a clause comparing an action to an imagined situation. 'As if she were' uses the subjunctive correctly."
  },
  {
    id: 7111, section: "English",
    text: "The work must be completed ________ Friday.",
    options: ["A) till", "B) until", "C) by", "D) upto"],
    answer: "C",
    explanation: "'By' is used with a deadline (a specific point in time when something must be done). 'By Friday' is correct."
  },
  {
    id: 7112, section: "English",
    text: "Despite ________ hard, he failed the examination.",
    options: ["A) study", "B) studied", "C) to study", "D) studying"],
    answer: "D",
    explanation: "'Despite' is followed by a noun or gerund (verb+ing). 'Despite studying hard' is correct."
  },
  {
    id: 7113, section: "English",
    text: "The child ________ by its mother when I arrived.",
    options: ["A) was fed", "B) is fed", "C) was being fed", "D) has been fed"],
    answer: "C",
    explanation: "The feeding was in progress when I arrived → Past Continuous Passive: 'was being fed' is correct."
  },
  {
    id: 7114, section: "English",
    text: "Not only ________ late, but he also forgot the report.",
    options: ["A) he came", "B) did he come", "C) he did come", "D) came he"],
    answer: "B",
    explanation: "When 'not only' begins a clause, subject-auxiliary inversion occurs. 'Not only did he come late' is correct."
  },
  {
    id: 7115, section: "English",
    text: "I have been living in this city ________ 2015.",
    options: ["A) for", "B) from", "C) since", "D) during"],
    answer: "C",
    explanation: "'Since' is used with a specific point in time (2015). 'For' is used with a duration (5 years)."
  }
];
var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
