// ============================================================
// Dr. Shetye Academic Program — Topic: Analogy
// Subject: Reasoning | 10 Questions | All answers verified
// ============================================================
var questions = [
  {
    id: 8101, section: "Reasoning",
    text: "Doctor : Hospital :: Teacher : ?",
    options: ["A) Student", "B) Classroom", "C) School", "D) Book"],
    answer: "C",
    explanation: "A Doctor works at a Hospital. A Teacher works at a School. (Person : Workplace analogy)"
  },
  {
    id: 8102, section: "Reasoning",
    text: "Pen : Write :: Knife : ?",
    options: ["A) Sharp", "B) Cook", "C) Metal", "D) Cut"],
    answer: "D",
    explanation: "A Pen is used to Write. A Knife is used to Cut. (Tool : Function analogy)"
  },
  {
    id: 8103, section: "Reasoning",
    text: "Bird : Nest :: Fish : ?",
    options: ["A) Pond", "B) Gill", "C) Water", "D) Fin"],
    answer: "C",
    explanation: "A Bird lives in a Nest. A Fish lives in Water. (Animal : Habitat analogy)"
  },
  {
    id: 8104, section: "Reasoning",
    text: "Iron : Metal :: Diamond : ?",
    options: ["A) Hard", "B) Gem", "C) Carbon", "D) Jewellery"],
    answer: "C",
    explanation: "Iron is a type of Metal. Diamond is a form of Carbon. (Substance : Material composition analogy)"
  },
  {
    id: 8105, section: "Reasoning",
    text: "Kilometre : Distance :: Kilogram : ?",
    options: ["A) Speed", "B) Weight", "C) Volume", "D) Temperature"],
    answer: "B",
    explanation: "Kilometre is a unit of Distance. Kilogram is a unit of Weight. (Unit : Measurement analogy)"
  },
  {
    id: 8106, section: "Reasoning",
    text: "Flowers : Bouquet :: Stars : ?",
    options: ["A) Sky", "B) Night", "C) Galaxy", "D) Moon"],
    answer: "C",
    explanation: "A collection of Flowers is called a Bouquet. A collection of Stars forms a Galaxy. (Individual : Collection analogy)"
  },
  {
    id: 8107, section: "Reasoning",
    text: "Carpenter : Wood :: Sculptor : ?",
    options: ["A) Paint", "B) Clay", "C) Brush", "D) Stone"],
    answer: "D",
    explanation: "A Carpenter works with Wood. A Sculptor works with Stone. (Craftsperson : Material analogy)"
  },
  {
    id: 8108, section: "Reasoning",
    text: "Biologist : Life :: Geologist : ?",
    options: ["A) Water", "B) Rocks", "C) Plants", "D) Space"],
    answer: "B",
    explanation: "A Biologist studies Life. A Geologist studies Rocks (Earth's structure). (Scientist : Study subject analogy)"
  },
  {
    id: 8109, section: "Reasoning",
    text: "Optimist : Hope :: Pessimist : ?",
    options: ["A) Faith", "B) Gloom", "C) Patience", "D) Courage"],
    answer: "B",
    explanation: "An Optimist is associated with Hope. A Pessimist is associated with Gloom (despair/negativity)."
  },
  {
    id: 8110, section: "Reasoning",
    text: "Army : Soldier :: Fleet : ?",
    options: ["A) Pilot", "B) Captain", "C) Ship", "D) Crew"],
    answer: "C",
    explanation: "An Army consists of Soldiers. A Fleet consists of Ships. (Group : Member analogy)"
  }
];
var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
