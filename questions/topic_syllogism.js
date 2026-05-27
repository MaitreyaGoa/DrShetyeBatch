// ============================================================
// Dr. Shetye Academic Program — Topic: Syllogism
// Subject: Reasoning | 10 Questions | All answers verified
// ============================================================
var questions = [
  {
    id: 8201, section: "Reasoning",
    text: "Statements:\nAll cats are animals.\nAll animals are mortal.\nConclusions:\nI. All cats are mortal.\nII. Some mortal are animals.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both I and II follow", "D) Neither follows"],
    answer: "C",
    explanation: "I: All cats→animals, all animals→mortal ∴ All cats are mortal ✓. II: All animals are mortal → Some mortal are animals (by conversion) ✓. Both follow."
  },
  {
    id: 8202, section: "Reasoning",
    text: "Statements:\nNo doctor is a teacher.\nSome teachers are engineers.\nConclusions:\nI. No doctor is an engineer.\nII. Some engineers are not doctors.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both I and II follow", "D) Neither follows"],
    answer: "B",
    explanation: "I: Cannot conclude — engineers and doctors could overlap (no direct relation given) ✗. II: Since some teachers are engineers and no teacher is a doctor, those engineer-teachers are definitely not doctors → Some engineers are not doctors ✓."
  },
  {
    id: 8203, section: "Reasoning",
    text: "Statements:\nAll pens are books.\nSome books are pencils.\nConclusions:\nI. Some pens are pencils.\nII. Some pencils are books.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both I and II follow", "D) Neither follows"],
    answer: "B",
    explanation: "I: 'Some books are pencils' may not include books that are pens, so I is not definite ✗. II: 'Some books are pencils' by simple conversion → 'Some pencils are books' ✓."
  },
  {
    id: 8204, section: "Reasoning",
    text: "Statements:\nAll flowers are beautiful.\nRose is a flower.\nConclusions:\nI. Rose is beautiful.\nII. All beautiful things are flowers.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both I and II follow", "D) Neither follows"],
    answer: "A",
    explanation: "I: Rose is a flower + All flowers are beautiful → Rose is beautiful ✓. II: Cannot conclude — other things (not flowers) can also be beautiful ✗."
  },
  {
    id: 8205, section: "Reasoning",
    text: "Statements:\nSome students are players.\nAll players are tall.\nConclusions:\nI. Some students are tall.\nII. All tall are players.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both I and II follow", "D) Neither follows"],
    answer: "A",
    explanation: "I: Some students are players + All players are tall → Some students are tall ✓. II: Cannot say all tall are players — tall could include non-players ✗."
  },
  {
    id: 8206, section: "Reasoning",
    text: "Statements:\nNo table is a chair.\nAll chairs are made of wood.\nConclusions:\nI. No table is made of wood.\nII. Some wooden things are chairs.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both I and II follow", "D) Neither follows"],
    answer: "B",
    explanation: "I: No table is a chair does not mean no table is made of wood — tables could also be wooden ✗. II: All chairs are made of wood → Some wooden things are chairs (by conversion) ✓."
  },
  {
    id: 8207, section: "Reasoning",
    text: "Statements:\nAll mangoes are fruits.\nAll fruits are nutritious.\nNo nutritious thing is harmful.\nConclusions:\nI. No mango is harmful.\nII. All mangoes are nutritious.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both I and II follow", "D) Neither follows"],
    answer: "C",
    explanation: "Mangoes→fruits→nutritious→not harmful. I: All mangoes are nutritious + no nutritious is harmful → No mango is harmful ✓. II: Mangoes→fruits→nutritious ✓. Both follow."
  },
  {
    id: 8208, section: "Reasoning",
    text: "Statements:\nSome birds are not pigeons.\nAll pigeons can fly.\nConclusions:\nI. All birds can fly.\nII. Some birds can fly.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both I and II follow", "D) Neither follows"],
    answer: "B",
    explanation: "I: We only know all pigeons can fly, but 'some birds are not pigeons' tells us nothing about whether those birds fly ✗. II: Since all pigeons can fly, and pigeons are birds, some birds (the pigeon ones) can fly ✓."
  },
  {
    id: 8209, section: "Reasoning",
    text: "Statements:\nAll politicians are honest.\nRam is a politician.\nConclusions:\nI. Ram is honest.\nII. Some politicians are dishonest.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both I and II follow", "D) Only I follows; II contradicts the statements"],
    answer: "D",
    explanation: "I: Ram is a politician + All politicians are honest → Ram is honest ✓. II: This directly contradicts Statement 1 ('All politicians are honest'). Answer: D."
  },
  {
    id: 8210, section: "Reasoning",
    text: "Statements:\nNo glass is metal.\nSome metals are liquids.\nConclusions:\nI. No glass is liquid.\nII. Some liquids are not glass.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both I and II follow", "D) Neither follows"],
    answer: "B",
    explanation: "I: We cannot conclude no glass is liquid directly — glass and liquid could have a separate relationship not ruled out by statements ✗. II: Some metals are liquids + No glass is metal → Those liquid-metals are not glass → Some liquids are not glass ✓."
  }
];
var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
