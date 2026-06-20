// math_part12.js – Dr Shetye Academic Programme
// Maths Part Test 12 — CAT / IIM Level (Extreme Difficulty)
// 10 Questions · IDs 5571–5580 · 10 Marks · 10 Minutes
// Topics: GP, 3D Mensuration (Cone), Number System (Unit digit, Remainder),
//         Permutations with repetition, AP, Polygon Area, Probability, Surds, Alloys

var questions = [

  {
    id: 5571, section: "Maths",
    text: "Find the sum to infinity of the geometric progression 8, 8/3, 8/9, 8/27, …",
    options: ["A) 10", "B) 11", "C) 13", "D) 12"],
    answer: "D",
    explanation: "First term a = 8, common ratio r = 1/3. Sum to infinity = a/(1−r) = 8/(1−1/3) = 8/(2/3) = 12."
  },

  {
    id: 5572, section: "Maths",
    text: "A cone has radius 6 cm and height 8 cm. Find its slant height and volume (leave volume in terms of π).",
    options: ["A) Slant=10 cm, Volume=96π cm³", "B) Slant=9 cm, Volume=90π cm³", "C) Slant=10 cm, Volume=100π cm³", "D) Slant=11 cm, Volume=96π cm³"],
    answer: "A",
    explanation: "Slant height l = √(r²+h²) = √(36+64) = √100 = 10 cm. Volume = (1/3)πr²h = (1/3)×π×36×8 = 96π cm³."
  },

  {
    id: 5573, section: "Maths",
    text: "What is the unit digit of 7⁸⁵?",
    options: ["A) 1", "B) 7", "C) 3", "D) 9"],
    answer: "B",
    explanation: "Unit digits of powers of 7 cycle every 4: 7¹=7, 7²=9, 7³=3, 7⁴=1, then repeats. 85 ÷ 4 = 21 remainder 1. So 7⁸⁵ has the same unit digit as 7¹, which is 7."
  },

  {
    id: 5574, section: "Maths",
    text: "How many distinct arrangements can be made using all the letters of the word 'STATISTICS'?",
    options: ["A) 50400", "B) 48600", "C) 45360", "D) 52920"],
    answer: "A",
    explanation: "STATISTICS has 10 letters: S appears 3 times, T appears 3 times, A appears 1 time, I appears 2 times, C appears 1 time. Distinct arrangements = 10! / (3!×3!×2!×1!×1!) = 3628800 / (6×6×2) = 3628800/72 = 50400."
  },

  {
    id: 5575, section: "Maths",
    text: "In an arithmetic progression, the 5th term is 26 and the 10th term is 51. Find the 15th term.",
    options: ["A) 71", "B) 76", "C) 81", "D) 86"],
    answer: "B",
    explanation: "Using aₙ = a+(n−1)d: a+4d=26 and a+9d=51. Subtracting: 5d=25 → d=5. Then a=26−4(5)=6. 15th term = a+14d = 6+14(5) = 6+70 = 76."
  },

  {
    id: 5576, section: "Maths",
    text: "Find the area of a regular hexagon with side length 8 cm.",
    options: ["A) 145.5 cm²", "B) 166.3 cm²", "C) 156.2 cm²", "D) 172.8 cm²"],
    answer: "B",
    explanation: "Area of regular hexagon = (3√3/2) × side² = (3√3/2) × 64 = 96√3 ≈ 96 × 1.732 ≈ 166.3 cm²."
  },

  {
    id: 5577, section: "Maths",
    text: "Find the remainder when 2¹⁰⁰ is divided by 7.",
    options: ["A) 1", "B) 2", "C) 4", "D) 6"],
    answer: "B",
    explanation: "Powers of 2 mod 7 cycle every 3: 2¹=2, 2²=4, 2³=1(mod 7), then repeats. 100 ÷ 3 = 33 remainder 1. So 2¹⁰⁰ ≡ 2¹ ≡ 2 (mod 7)."
  },

  {
    id: 5578, section: "Maths",
    text: "A card is drawn from a well-shuffled deck of 52 cards. What is the probability that it is a face card OR a red card?",
    options: ["A) 28/52", "B) 30/52", "C) 34/52", "D) 32/52"],
    answer: "D",
    explanation: "P(Face ∪ Red) = P(Face)+P(Red)−P(Face∩Red). Face cards = 12, Red cards = 26, Red face cards = 6 (red Jack, Queen, King in hearts and diamonds). Favourable = 12+26−6 = 32. Probability = 32/52."
  },

  {
    id: 5579, section: "Maths",
    text: "Simplify: (√7 + √3) / (√7 − √3)",
    options: ["A) (5+√21)/2", "B) (5+√21)/4", "C) (10+√21)/2", "D) 5+2√21"],
    answer: "A",
    explanation: "Rationalise by multiplying numerator and denominator by (√7+√3): [(√7+√3)²] / [(√7)²−(√3)²] = (7+3+2√21)/(7−3) = (10+2√21)/4 = (5+√21)/2."
  },

  {
    id: 5580, section: "Maths",
    text: "Alloy A has copper and zinc in the ratio 5:3. Alloy B has copper and zinc in the ratio 1:3. If 8 kg of Alloy A is mixed with 8 kg of Alloy B, what is the ratio of copper to zinc in the resulting mixture?",
    options: ["A) 5:7", "B) 6:8", "C) 7:9", "D) 8:10"],
    answer: "C",
    explanation: "Alloy A (8kg, ratio 5:3): Copper = 8×5/8 = 5 kg, Zinc = 8×3/8 = 3 kg. Alloy B (8kg, ratio 1:3): Copper = 8×1/4 = 2 kg, Zinc = 8×3/4 = 6 kg. Total Copper = 5+2 = 7 kg. Total Zinc = 3+6 = 9 kg. Ratio = 7:9."
  }

];
