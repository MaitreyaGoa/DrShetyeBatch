// ============================================================
// Dr. Shetye Academic Program — Topic: Mensuration
// Subject: Maths | 10 Questions | All answers verified
// ============================================================
var questions = [
  {
    id: 6401, section: "Maths",
    text: "Find the area of a rectangle with length 24 cm and breadth 18 cm.",
    options: ["A) 402 sq cm", "B) 422 sq cm", "C) 432 sq cm", "D) 452 sq cm"],
    answer: "C",
    explanation: "Area = length × breadth = 24 × 18 = 432 sq cm."
  },
  {
    id: 6402, section: "Maths",
    text: "Find the perimeter of a square whose side is 14 cm.",
    options: ["A) 48 cm", "B) 52 cm", "C) 56 cm", "D) 60 cm"],
    answer: "C",
    explanation: "Perimeter = 4 × side = 4 × 14 = 56 cm."
  },
  {
    id: 6403, section: "Maths",
    text: "Find the area of a circle with radius 7 cm. (Use π = 22/7)",
    options: ["A) 144 sq cm", "B) 148 sq cm", "C) 150 sq cm", "D) 154 sq cm"],
    answer: "D",
    explanation: "Area = π × r² = (22/7) × 7 × 7 = 22 × 7 = 154 sq cm."
  },
  {
    id: 6404, section: "Maths",
    text: "Find the area of a triangle with base 12 cm and height 8 cm.",
    options: ["A) 42 sq cm", "B) 46 sq cm", "C) 48 sq cm", "D) 52 sq cm"],
    answer: "C",
    explanation: "Area = (1/2) × base × height = (1/2) × 12 × 8 = 48 sq cm."
  },
  {
    id: 6405, section: "Maths",
    text: "Find the length of the diagonal of a square whose side is 10 cm.",
    options: ["A) 10 cm", "B) 10√2 cm", "C) 12 cm", "D) 14 cm"],
    answer: "B",
    explanation: "Diagonal = side × √2 = 10√2 cm ≈ 14.14 cm."
  },
  {
    id: 6406, section: "Maths",
    text: "Find the volume of a cuboid with dimensions 8 cm × 5 cm × 3 cm.",
    options: ["A) 100 cubic cm", "B) 110 cubic cm", "C) 115 cubic cm", "D) 120 cubic cm"],
    answer: "D",
    explanation: "Volume = l × b × h = 8 × 5 × 3 = 120 cubic cm."
  },
  {
    id: 6407, section: "Maths",
    text: "Find the circumference of a circle with radius 14 cm. (Use π = 22/7)",
    options: ["A) 80 cm", "B) 84 cm", "C) 88 cm", "D) 92 cm"],
    answer: "C",
    explanation: "Circumference = 2πr = 2 × (22/7) × 14 = 88 cm."
  },
  {
    id: 6408, section: "Maths",
    text: "Find the area of a trapezium with parallel sides 10 cm and 6 cm, and height 4 cm.",
    options: ["A) 28 sq cm", "B) 30 sq cm", "C) 32 sq cm", "D) 34 sq cm"],
    answer: "C",
    explanation: "Area = (1/2) × (sum of parallel sides) × height = (1/2) × (10+6) × 4 = 32 sq cm."
  },
  {
    id: 6409, section: "Maths",
    text: "The area of a square is 1764 sq cm. Find the length of its side.",
    options: ["A) 38 cm", "B) 40 cm", "C) 42 cm", "D) 44 cm"],
    answer: "C",
    explanation: "Side = √1764 = 42 cm. (42 × 42 = 1764 ✓)"
  },
  {
    id: 6410, section: "Maths",
    text: "Find the volume of a cube with side 6 cm.",
    options: ["A) 196 cubic cm", "B) 206 cubic cm", "C) 216 cubic cm", "D) 226 cubic cm"],
    answer: "C",
    explanation: "Volume = side³ = 6³ = 216 cubic cm."
  }
];
var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
