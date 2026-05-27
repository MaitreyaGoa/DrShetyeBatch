// ============================================================
// Dr. Shetye Academic Program — Topic: Idioms & Phrases
// Subject: English | 15 Questions | All answers verified
// ============================================================
var questions = [
  {
    id: 7201, section: "English",
    text: "What does the idiom 'Break the ice' mean?",
    options: ["A) Destroy something", "B) Start a conversation in a social situation", "C) Feel very cold", "D) End a discussion"],
    answer: "B",
    explanation: "'Break the ice' means to do or say something to relieve tension and start a conversation in a social situation."
  },
  {
    id: 7202, section: "English",
    text: "What does 'Bite the bullet' mean?",
    options: ["A) Eat something hard", "B) Endure a painful situation with courage", "C) Make a quick decision", "D) Avoid a problem"],
    answer: "B",
    explanation: "'Bite the bullet' means to endure a painful or difficult situation bravely and without complaint."
  },
  {
    id: 7203, section: "English",
    text: "What does 'Burn the midnight oil' mean?",
    options: ["A) Waste energy", "B) Cook late at night", "C) Work or study late into the night", "D) Set fire to something"],
    answer: "C",
    explanation: "'Burn the midnight oil' means to work or study late at night."
  },
  {
    id: 7204, section: "English",
    text: "What does 'Beat around the bush' mean?",
    options: ["A) Strike plants", "B) Hunt in a forest", "C) Avoid coming to the main point", "D) Work in a garden"],
    answer: "C",
    explanation: "'Beat around the bush' means to avoid talking about the main subject directly."
  },
  {
    id: 7205, section: "English",
    text: "What does 'Cost an arm and a leg' mean?",
    options: ["A) Cause injury", "B) Be extremely expensive", "C) Require much effort", "D) Take a long time"],
    answer: "B",
    explanation: "'Cost an arm and a leg' means to be very expensive."
  },
  {
    id: 7206, section: "English",
    text: "What does 'Hit the nail on the head' mean?",
    options: ["A) Strike someone hard", "B) Do carpentry work", "C) Say or do exactly the right thing", "D) Hurt oneself accidentally"],
    answer: "C",
    explanation: "'Hit the nail on the head' means to describe exactly what is causing a situation or problem."
  },
  {
    id: 7207, section: "English",
    text: "What does 'Let the cat out of the bag' mean?",
    options: ["A) Release an animal", "B) Reveal a secret accidentally", "C) Make someone angry", "D) Cause confusion"],
    answer: "B",
    explanation: "'Let the cat out of the bag' means to accidentally reveal a secret."
  },
  {
    id: 7208, section: "English",
    text: "What does 'Once in a blue moon' mean?",
    options: ["A) During the night", "B) Very rarely", "C) Every month", "D) Under special circumstances"],
    answer: "B",
    explanation: "'Once in a blue moon' means something that happens very rarely."
  },
  {
    id: 7209, section: "English",
    text: "What does 'Spill the beans' mean?",
    options: ["A) Cook carelessly", "B) Make a mess", "C) Reveal secret information", "D) Waste food"],
    answer: "C",
    explanation: "'Spill the beans' means to accidentally or carelessly reveal confidential information."
  },
  {
    id: 7210, section: "English",
    text: "What does 'Pull someone's leg' mean?",
    options: ["A) Help someone walk", "B) Tease or joke with someone", "C) Harm someone physically", "D) Challenge someone"],
    answer: "B",
    explanation: "'Pull someone's leg' means to tease or joke with someone, especially by telling them something that is not true."
  },
  {
    id: 7211, section: "English",
    text: "What does 'Under the weather' mean?",
    options: ["A) In bad weather", "B) Feeling unwell or slightly sick", "C) Outdoors in rain", "D) Feeling cold"],
    answer: "B",
    explanation: "'Under the weather' means feeling slightly unwell or ill."
  },
  {
    id: 7212, section: "English",
    text: "What does 'The ball is in your court' mean?",
    options: ["A) Play a sport", "B) It is your turn to take action or make a decision", "C) You are winning a game", "D) Wait for instructions"],
    answer: "B",
    explanation: "'The ball is in your court' means it is now your responsibility to take the next step or make a decision."
  },
  {
    id: 7213, section: "English",
    text: "What does 'Barking up the wrong tree' mean?",
    options: ["A) A dog misbehaving", "B) Climbing the wrong tree", "C) Pursuing a mistaken or misguided course of action", "D) Making unnecessary noise"],
    answer: "C",
    explanation: "'Barking up the wrong tree' means to pursue a mistaken or misguided line of thought or action."
  },
  {
    id: 7214, section: "English",
    text: "What does 'Sit on the fence' mean?",
    options: ["A) Be physically uncomfortable", "B) Refuse to take sides or make a decision", "C) Guard a property", "D) Stay outdoors"],
    answer: "B",
    explanation: "'Sit on the fence' means to avoid taking sides in a dispute or making a decision."
  },
  {
    id: 7215, section: "English",
    text: "What does 'A blessing in disguise' mean?",
    options: ["A) A hidden danger", "B) Something good that seemed bad at first", "C) A religious ceremony", "D) A surprise gift"],
    answer: "B",
    explanation: "'A blessing in disguise' refers to something that seems bad at first but turns out to be good."
  }
];
var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
