// ============================================================
// Dr. Shetye Academic Program — Topic Test: Blood Relations
// Subject: Reasoning | 10 Questions
// ============================================================

var questions = [

  {
    id: 5101, section: "Reasoning",
    text: "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?",
    options: ["A) Grandmother", "B) Mother", "C) Sister", "D) Aunt"],
    answer: "B",
    explanation: "Only daughter of my mother = myself. So the man's mother = the woman. The woman is his Mother."
  },

  {
    id: 5102, section: "Reasoning",
    text: "A is the father of B. C is the daughter of A. D is the brother of C. How is B related to D?",
    options: ["A) Father", "B) Uncle", "C) Brother or Sister", "D) Cousin"],
    answer: "C",
    explanation: "A is father of B, C, and D (D is brother of C, both children of A). So B is the Brother or Sister of D."
  },

  {
    id: 5103, section: "Reasoning",
    text: "Ravi said, 'Neha's father is the only son of my grandfather.' How is Ravi related to Neha?",
    options: ["A) Father", "B) Uncle", "C) Brother", "D) Cousin"],
    answer: "C",
    explanation: "Only son of Ravi's grandfather = Ravi's father. So Neha's father = Ravi's father. Neha and Ravi are siblings. Ravi is Neha's Brother."
  },

  {
    id: 5104, section: "Reasoning",
    text: "P is the brother of Q. Q is the sister of R. R is the son of S. How is P related to S?",
    options: ["A) Son", "B) Daughter", "C) Son or Daughter", "D) Nephew"],
    answer: "C",
    explanation: "R is son of S. P and Q are siblings of R. P's gender is unknown from the given info. P is Son or Daughter of S."
  },

  {
    id: 5105, section: "Reasoning",
    text: "Introducing a boy, a girl said, 'He is the son of my mother's only brother.' How is the boy related to the girl?",
    options: ["A) Brother", "B) Cousin", "C) Nephew", "D) Son"],
    answer: "B",
    explanation: "Mother's only brother = maternal uncle. Uncle's son = Cousin. The boy is the girl's Cousin."
  },
  {
    id: 5106, section: "Reasoning",
    text: "A woman says, 'The man in this photo is my husband\'s father-in-law\'s only son.' Who is the man in the photo?",
    options: ["A) Her father", "B) Her brother", "C) Her husband", "D) Her son"],
    answer: "B",
    explanation: "Husband\'s father-in-law = husband\'s wife\'s father = the woman\'s own father. The woman\'s father\'s only son = the woman\'s brother. The man in the photo is her Brother."
  },

  {
    id: 5107, section: "Reasoning",
    text: "If X is the brother of Y, Y is the sister of Z, and Z is the father of W, how is X related to W?",
    options: ["A) Father", "B) Uncle", "C) Grandfather", "D) Brother"],
    answer: "B",
    explanation: "Z is father of W. Y is sister of Z → Y and Z are siblings. X is brother of Y → X, Y, Z are siblings. So X is the uncle/aunt of W. X is Uncle of W."
  },

  {
    id: 5108, section: "Reasoning",
    text: "Mohan said to Sohan, 'Your only sister's mother is my mother-in-law's only daughter.' How is Mohan's wife related to Sohan?",
    options: ["A) Sister", "B) Cousin", "C) Mother", "D) Aunt"],
    answer: "A",
    explanation: "Sohan's only sister's mother = Sohan's mother. Mohan's mother-in-law's only daughter = Mohan's wife. So Mohan's wife = Sohan's mother's... Sohan's mother = Mohan's wife. That means Mohan's wife is Sohan's Mother? No — Sohan's sister. Sohan's sister = Mohan's wife. Mohan's wife is Sohan's Sister."
  },

  {
    id: 5109, section: "Reasoning",
    text: "In a family of 6 members: A,B,C,D,E,F. B is the son of C but C is not the mother of B. A and C are married. D is the daughter of A. E is the brother of C. F is the mother of E. Who is the grandmother?",
    options: ["A) A", "B) B", "C) C", "D) F"],
    answer: "D",
    explanation: "C is not mother of B → C is father of B. A and C married → A is mother of B. D is daughter of A (and C). E is brother of C → C and E are siblings, children of F. F is mother of E and C. F is the grandmother of B and D. Answer: D) F."
  },

  {
    id: 5110, section: "Reasoning",
    text: "Looking at a portrait, Rajan said, 'She is the daughter of the wife of my father's only son.' Who is in the portrait?",
    options: ["A) His niece", "B) His daughter", "C) His sister", "D) His cousin"],
    answer: "B",
    explanation: "My father's only son = myself. Wife of myself = my wife. Daughter of my wife = my daughter. The portrait is his Daughter."
  }

];

var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
