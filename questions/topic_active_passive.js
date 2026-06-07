var questions = [
  // EASY (1–5)
  {
    id: "topic_apv_001",
    section: "English",
    topic: "Active/Passive Voice",
    text: "Identify the voice: 'The letter was written by Priya.'",
    options: ["Active Voice", "Passive Voice", "Interrogative", "Imperative"],
    answer: "B",
    explanation: "The subject (letter) receives the action → Passive Voice. Indicated by 'was written by'."
  },
  {
    id: "topic_apv_002",
    section: "English",
    topic: "Active/Passive Voice",
    text: "Convert to passive voice: 'Ram eats a mango.'",
    options: [
      "A mango is eaten by Ram.",
      "A mango was eaten by Ram.",
      "A mango has been eaten by Ram.",
      "A mango will be eaten by Ram."
    ],
    answer: "A",
    explanation: "Simple present active → passive: 'is/are + past participle'. Subject Ram → by Ram."
  },
  {
    id: "topic_apv_003",
    section: "English",
    topic: "Active/Passive Voice",
    text: "Convert to passive: 'She is writing a letter.'",
    options: [
      "A letter is being written by her.",
      "A letter was being written by her.",
      "A letter has been written by her.",
      "A letter is written by her."
    ],
    answer: "A",
    explanation: "Present continuous active → passive: 'is/are being + past participle'. She → her."
  },
  {
    id: "topic_apv_004",
    section: "English",
    topic: "Active/Passive Voice",
    text: "Identify the voice: 'Do you know him?'",
    options: ["Active Voice", "Passive Voice", "Both", "Neither"],
    answer: "A",
    explanation: "The subject (you) performs the action (know) — Active Voice."
  },
  {
    id: "topic_apv_005",
    section: "English",
    topic: "Active/Passive Voice",
    text: "Convert to active voice: 'The cake was baked by my mother.'",
    options: [
      "My mother bakes the cake.",
      "My mother has baked the cake.",
      "My mother baked the cake.",
      "My mother was baking the cake."
    ],
    answer: "C",
    explanation: "Past simple passive → active: 'was baked by my mother' → 'my mother baked the cake.'"
  },

  // MEDIUM (6–10)
  {
    id: "topic_apv_006",
    section: "English",
    topic: "Active/Passive Voice",
    text: "Convert to passive: 'They will complete the project by Monday.'",
    options: [
      "The project will be completed by them by Monday.",
      "The project was completed by them by Monday.",
      "The project is being completed by them by Monday.",
      "The project has been completed by them by Monday."
    ],
    answer: "A",
    explanation: "Simple future active → passive: 'will be + past participle'. They → them."
  },
  {
    id: "topic_apv_007",
    section: "English",
    topic: "Active/Passive Voice",
    text: "Convert to passive: 'The police arrested three suspects.'",
    options: [
      "Three suspects have been arrested by the police.",
      "Three suspects are arrested by the police.",
      "Three suspects were arrested by the police.",
      "Three suspects had been arrested by the police."
    ],
    answer: "C",
    explanation: "Simple past active → passive: 'were + past participle'. The police → by the police."
  },
  {
    id: "topic_apv_008",
    section: "English",
    topic: "Active/Passive Voice",
    text: "Convert to active: 'English is spoken by millions of people.'",
    options: [
      "Millions of people were speaking English.",
      "Millions of people speak English.",
      "Millions of people have spoken English.",
      "Millions of people had spoken English."
    ],
    answer: "B",
    explanation: "Simple present passive → active: 'millions of people speak English.'"
  },
  {
    id: "topic_apv_009",
    section: "English",
    topic: "Active/Passive Voice",
    text: "Convert to passive: 'Has the manager signed the documents?'",
    options: [
      "Were the documents signed by the manager?",
      "Have the documents been signed by the manager?",
      "Are the documents signed by the manager?",
      "Had the documents been signed by the manager?"
    ],
    answer: "B",
    explanation: "Present perfect interrogative active → passive: 'Have + object + been + past participle + by + agent?'"
  },
  {
    id: "topic_apv_010",
    section: "English",
    topic: "Active/Passive Voice",
    text: "Which of the following sentences is in passive voice?",
    options: [
      "The dog chased the cat.",
      "She has finished her work.",
      "The newspaper was read by the old man.",
      "They are playing cricket."
    ],
    answer: "C",
    explanation: "'Was read by' shows passive voice — the subject (newspaper) receives the action."
  },

  // HARD (11–15)
  {
    id: "topic_apv_011",
    section: "English",
    topic: "Active/Passive Voice",
    text: "Convert to passive: 'People believe that he is honest.'",
    options: [
      "It is believed by people that he is honest.",
      "He is believed to be honest.",
      "Both A and B are correct.",
      "Neither A nor B is correct."
    ],
    answer: "C",
    explanation: "Two passive forms are possible: impersonal ('It is believed that...') and personal ('He is believed to be...'). Both are correct."
  },
  {
    id: "topic_apv_012",
    section: "English",
    topic: "Active/Passive Voice",
    text: "Convert imperative to passive: 'Open the window.'",
    options: [
      "The window should open.",
      "Let the window be opened.",
      "The window is opened.",
      "The window was opened."
    ],
    answer: "B",
    explanation: "Imperative → passive: 'Let + object + be + past participle'. Open the window → Let the window be opened."
  },
  {
    id: "topic_apv_013",
    section: "English",
    topic: "Active/Passive Voice",
    text: "Convert to passive: 'They had already delivered the parcel when I called.'",
    options: [
      "The parcel was already delivered when I called.",
      "The parcel has already been delivered when I called.",
      "The parcel had already been delivered by them when I called.",
      "The parcel is already delivered when I called."
    ],
    answer: "C",
    explanation: "Past perfect active → passive: 'had been + past participle'. They → by them; tense retained."
  },
  {
    id: "topic_apv_014",
    section: "English",
    topic: "Active/Passive Voice",
    text: "Convert to active: 'The results are expected to be announced next week.'",
    options: [
      "They will announce the results next week.",
      "They expect the results to be announced next week.",
      "They are announcing the results next week.",
      "They expected to announce the results next week."
    ],
    answer: "B",
    explanation: "'Are expected to be announced' → active: 'They expect the results to be announced next week.' The agent performing 'expecting' is 'they'."
  },
  {
    id: "topic_apv_015",
    section: "English",
    topic: "Active/Passive Voice",
    text: "Select the correct passive form: 'Who wrote this poem?'",
    options: [
      "By whom was this poem written?",
      "By whom this poem was written?",
      "Who was this poem written by?",
      "This poem is written by whom?"
    ],
    answer: "A",
    explanation: "Interrogative passive places the preposition phrase 'by whom' at the front: 'By whom was this poem written?'"
  }
];
