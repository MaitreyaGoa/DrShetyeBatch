// math_part15.js – Dr Shetye Academic Programme
// Maths Part Test 15 — CAT / IIM Level (Extreme Difficulty)
// 10 Questions · IDs 5637–5646 · 10 Marks · 10 Minutes
// Topics: Statistics (Median), Mensuration (Trapezium, Sphere, Composite),
//         AP, Set Theory, LCM of Fractions, Permutations, Probability, Exponents

var questions = [

  {
    id: 5637, section: "Maths",
    text: "Find the median of the following data: 12, 15, 18, 21, 24, 27, 30, 9, 33, 6, 36.",
    options: ["A) 18", "B) 21", "C) 24", "D) 27"],
    answer: "B",
    explanation: "Arrange the data in ascending order: 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36. With 11 values, the median is the 6th value (the middle term). Counting: 6(1st), 9(2nd), 12(3rd), 15(4th), 18(5th), 21(6th). The median is 21."
  },

  {
    id: 5638, section: "Maths",
    text: "Find the area of a trapezium with parallel sides 12 cm and 18 cm, and a height of 10 cm.",
    options: ["A) 150 cm²", "B) 145 cm²", "C) 140 cm²", "D) 155 cm²"],
    answer: "A",
    explanation: "Area of trapezium = ½ × (sum of parallel sides) × height = ½ × (12+18) × 10 = ½ × 30 × 10 = 150 cm²."
  },

  {
    id: 5639, section: "Maths",
    text: "In an arithmetic progression, the first term is 50, the last term is −10, and the common difference is −5. Find the sum of all terms in this AP.",
    options: ["A) 250", "B) 255", "C) 265", "D) 260"],
    answer: "D",
    explanation: "Number of terms: using l = a+(n−1)d: −10 = 50+(n−1)(−5) → −60 = −5(n−1) → n−1 = 12 → n = 13. Sum = n/2 × (a+l) = 13/2 × (50+(−10)) = 13/2 × 40 = 260."
  },

  {
    id: 5640, section: "Maths",
    text: "In a survey of 50 students, 20 play only Cricket, 15 play only Football, and 10 play both Cricket and Football. How many students play neither sport?",
    options: ["A) 3", "B) 5", "C) 7", "D) 10"],
    answer: "B",
    explanation: "Students playing at least one sport = (Cricket only) + (Football only) + (Both) = 20+15+10 = 45. Students playing neither = Total − At least one = 50−45 = 5."
  },

  {
    id: 5641, section: "Maths",
    text: "The surface area of a sphere is 616 cm². Find its volume. (Use π = 22/7)",
    options: ["A) 1408 cm³", "B) 1437.33 cm³", "C) 1450 cm³", "D) 1500 cm³"],
    answer: "B",
    explanation: "Surface area = 4πr² = 616 → r² = 616/(4×22/7) = 616×7/88 = 49 → r = 7 cm. Volume = (4/3)πr³ = (4/3)×(22/7)×343 = (4×22×343)/(3×7) = 30184/21 ≈ 1437.33 cm³."
  },

  {
    id: 5642, section: "Maths",
    text: "Find the LCM of the fractions 2/3, 4/9, and 6/15.",
    options: ["A) 4", "B) 3", "C) 2", "D) 6"],
    answer: "A",
    explanation: "LCM of fractions = LCM(numerators) / GCD(denominators). LCM(2,4,6) = 12. GCD(3,9,15) = 3. LCM of fractions = 12/3 = 4."
  },

  {
    id: 5643, section: "Maths",
    text: "In how many ways can the letters of the word 'LEADER' be arranged so that the vowels always come together?",
    options: ["A) 48", "B) 72", "C) 60", "D) 96"],
    answer: "B",
    explanation: "LEADER has 6 letters: L,E,A,D,E,R, with E repeating twice. Vowels are E,A,E (3 letters, with E repeated). Treating the vowel-block as 1 unit alongside 3 consonants (L,D,R) gives 4 units to arrange: 4! = 24 ways. Within the vowel block, arrangements of E,A,E = 3!/2! = 3 ways (since E repeats). Total = 24×3 = 72."
  },

  {
    id: 5644, section: "Maths",
    text: "If P(A) = 0.3, P(B) = 0.4, and P(A∩B) = 0.1, find the probability that neither A nor B occurs.",
    options: ["A) 0.3", "B) 0.35", "C) 0.45", "D) 0.4"],
    answer: "D",
    explanation: "P(A∪B) = P(A)+P(B)−P(A∩B) = 0.3+0.4−0.1 = 0.6. P(neither A nor B) = 1−P(A∪B) = 1−0.6 = 0.4."
  },

  {
    id: 5645, section: "Maths",
    text: "Simplify: (3⁵ × 9³) ÷ (27² × 3²)",
    options: ["A) 9", "B) 18", "C) 81", "D) 27"],
    answer: "D",
    explanation: "Express all terms in base 3: 9³ = (3²)³ = 3⁶. 27² = (3³)² = 3⁶. So the expression becomes (3⁵ × 3⁶) ÷ (3⁶ × 3²) = 3^(5+6) ÷ 3^(6+2) = 3¹¹ ÷ 3⁸ = 3^(11−8) = 3³ = 27."
  },

  {
    id: 5646, section: "Maths",
    text: "A square has a side of 14 cm. A semicircle is drawn outward on one side of the square (with that side as diameter). Find the total perimeter of the resulting figure (3 straight sides of the square plus the semicircular arc). Use π = 22/7.",
    options: ["A) 56 cm", "B) 60 cm", "C) 64 cm", "D) 68 cm"],
    answer: "C",
    explanation: "Three straight sides of the square (excluding the one replaced by the semicircle) = 3×14 = 42 cm. The semicircular arc has radius = 14/2 = 7 cm, and its length = πr = (22/7)×7 = 22 cm. Total perimeter = 42+22 = 64 cm."
  }

];
