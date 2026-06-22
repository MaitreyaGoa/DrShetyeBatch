// math_part13.js – Dr Shetye Academic Programme
// Maths Part Test 13 — CAT / IIM Level (Extreme Difficulty)
// 10 Questions · IDs 5593–5602 · 10 Marks · 10 Minutes
// Topics: Speed with stoppages, Quadratic word problems, Circle tangents,
//         Divisibility, Permutations, Composite solids, Ages, Probability,
//         Remainder theorem, Relative speed

var questions = [

  {
    id: 5593, section: "Maths",
    text: "A train travels at 60 km/h excluding stoppages and 40 km/h including stoppages. For how many minutes does the train stop per hour?",
    options: ["A) 20 minutes", "B) 18 minutes", "C) 15 minutes", "D) 24 minutes"],
    answer: "A",
    explanation: "Distance lost per hour due to stoppage = 60−40 = 20 km. Time to cover 20 km at the train's actual running speed of 60 km/h = (20/60)×60 = 20 minutes."
  },

  {
    id: 5594, section: "Maths",
    text: "The sum of a positive number and its reciprocal is 26/5. Find the number.",
    options: ["A) 4", "B) 5", "C) 6", "D) 7"],
    answer: "B",
    explanation: "Let the number be x. x + 1/x = 26/5 → 5x² − 26x + 5 = 0. Using the quadratic formula: x = [26±√(676−100)]/10 = [26±24]/10. This gives x=5 or x=1/5. The positive number greater than 1 is 5."
  },

  {
    id: 5595, section: "Maths",
    text: "From an external point 13 cm from the centre of a circle of radius 5 cm, a tangent is drawn to the circle. Find the length of the tangent.",
    options: ["A) 10 cm", "B) 11 cm", "C) 13 cm", "D) 12 cm"],
    answer: "D",
    explanation: "Using the tangent-length formula: tangent² = d² − r², where d is the distance from the external point to the centre. Tangent² = 13² − 5² = 169−25 = 144. Tangent length = √144 = 12 cm."
  },

  {
    id: 5596, section: "Maths",
    text: "What is the smallest number that must be added to 1000 to make it exactly divisible by 23?",
    options: ["A) 12", "B) 11", "C) 10", "D) 13"],
    answer: "A",
    explanation: "1000 ÷ 23 = 43 remainder 11 (since 23×43=989, 1000−989=11). To reach the next multiple of 23, we need to add 23−11 = 12. Verify: 1000+12 = 1012 = 23×44."
  },

  {
    id: 5597, section: "Maths",
    text: "A committee of 5 people is to be selected from 5 men and 4 women such that the committee has exactly 3 men. In how many ways can this be done?",
    options: ["A) 40", "B) 60", "C) 50", "D) 70"],
    answer: "B",
    explanation: "Choose 3 men from 5: C(5,3) = 10. Choose 2 women from 4 (since committee size is 5, and 3 are men): C(4,2) = 6. Total ways = 10 × 6 = 60."
  },

  {
    id: 5598, section: "Maths",
    text: "A solid hemisphere of radius 7 cm is mounted on top of a cylinder of the same radius and height 10 cm. Find the total surface area of the resulting solid that is exposed to the outside (excluding the cylinder's top, which is covered by the hemisphere). Use π = 22/7.",
    options: ["A) 858 cm²", "B) 880 cm²", "C) 924 cm²", "D) 902 cm²"],
    answer: "D",
    explanation: "Exposed surfaces: curved surface of cylinder = 2πrh = 2×(22/7)×7×10 = 440 cm². Base of cylinder = πr² = (22/7)×49 = 154 cm². Curved surface of hemisphere = 2πr² = 2×(22/7)×49 = 308 cm². Total = 440+154+308 = 902 cm²."
  },

  {
    id: 5599, section: "Maths",
    text: "The present ages of A and B are in the ratio 5:7. After 6 years, the ratio of their ages becomes 3:4. Find A's present age.",
    options: ["A) 24 years", "B) 30 years", "C) 27 years", "D) 33 years"],
    answer: "B",
    explanation: "Let present ages be 5x and 7x. After 6 years: (5x+6)/(7x+6) = 3/4. Cross-multiplying: 4(5x+6) = 3(7x+6) → 20x+24 = 21x+18 → x = 6. A's present age = 5×6 = 30 years."
  },

  {
    id: 5600, section: "Maths",
    text: "Two cards are drawn one after another without replacement from a well-shuffled deck of 52 cards. Find the probability that both cards are Kings.",
    options: ["A) 1/169", "B) 1/204", "C) 1/221", "D) 1/225"],
    answer: "C",
    explanation: "P(first King) = 4/52. P(second King | first was King) = 3/51. P(both Kings) = (4/52)×(3/51) = 12/2652 = 1/221."
  },

  {
    id: 5601, section: "Maths",
    text: "Find the remainder when x³ − 6x² + 11x − 6 is divided by (x − 1).",
    options: ["A) −1", "B) 1", "C) 0", "D) 2"],
    answer: "C",
    explanation: "By the Remainder Theorem, the remainder when a polynomial p(x) is divided by (x−a) equals p(a). Here, p(1) = 1³−6(1)²+11(1)−6 = 1−6+11−6 = 0. The remainder is 0 (meaning x=1 is a root of the polynomial)."
  },

  {
    id: 5602, section: "Maths",
    text: "Two cyclists start from the same point and ride in opposite directions at speeds of 15 km/h and 20 km/h respectively. After how much time will they be 70 km apart?",
    options: ["A) 1.5 hours", "B) 2 hours", "C) 2.5 hours", "D) 3 hours"],
    answer: "B",
    explanation: "Since the cyclists move in opposite directions, their relative speed = 15+20 = 35 km/h. Time to be 70 km apart = 70/35 = 2 hours."
  }

];
