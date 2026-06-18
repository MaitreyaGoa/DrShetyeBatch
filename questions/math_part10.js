// math_part10.js – Dr Shetye Academic Programme
// Maths Part Test 10 — CAT / IIM Level (Extreme Difficulty)
// 10 Questions · IDs 5525–5534 · 10 Marks · 10 Minutes
// Topics: Speed-Distance, Clocks, Number Theory (factorials), Coordinate Geometry,
//         Circular Permutations, Boats & Streams, Digit Sums, Circles, Ratios, Functions

var questions = [

  {
    id: 5525, section: "Maths",
    text: "Two trains, 150 m and 100 m long, run in opposite directions at 60 km/h and 40 km/h respectively. How long do they take to cross each other completely?",
    options: ["A) 9 seconds", "B) 8 seconds", "C) 7 seconds", "D) 10 seconds"],
    answer: "A",
    explanation: "Relative speed (opposite directions) = (60+40) km/h = 100 × 5/18 m/s = 250/9 m/s. Total length to cross = 150+100 = 250 m. Time = 250 ÷ (250/9) = 9 seconds."
  },

  {
    id: 5526, section: "Maths",
    text: "What is the angle between the hour hand and minute hand of a clock at 3:40?",
    options: ["A) 100°", "B) 110°", "C) 120°", "D) 130°"],
    answer: "D",
    explanation: "Hour hand position = 3×30 + 40×0.5 = 90+20 = 110°. Minute hand position = 40×6 = 240°. Difference = |240−110| = 130°. Since this is less than 180°, the angle between the hands is 130°."
  },

  {
    id: 5527, section: "Maths",
    text: "What is the highest power of 2 that divides 50! completely?",
    options: ["A) 44", "B) 45", "C) 46", "D) 47"],
    answer: "D",
    explanation: "Using Legendre's formula: highest power of 2 in 50! = ⌊50/2⌋+⌊50/4⌋+⌊50/8⌋+⌊50/16⌋+⌊50/32⌋ = 25+12+6+3+1 = 47."
  },

  {
    id: 5528, section: "Maths",
    text: "Find the area of the triangle with vertices at (2,3), (5,7), and (8,2).",
    options: ["A) 11.5", "B) 13.5", "C) 12.5", "D) 14.5"],
    answer: "B",
    explanation: "Using the coordinate area formula: Area = ½|x₁(y₂−y₃)+x₂(y₃−y₁)+x₃(y₁−y₂)| = ½|2(7−2)+5(2−3)+8(3−7)| = ½|10−5−32| = ½|−27| = 13.5."
  },

  {
    id: 5529, section: "Maths",
    text: "In how many ways can 8 people be seated around a circular table such that two particular people never sit next to each other?",
    options: ["A) 3600", "B) 3400", "C) 3200", "D) 3800"],
    answer: "A",
    explanation: "Total circular arrangements of 8 people = (8−1)! = 7! = 5040. Arrangements where the two specific people sit together = 2 × (7−1)! = 2 × 720 = 1440 (treat them as one unit, arrange 7 units in a circle, then 2 ways to order the pair). Arrangements where they are NOT together = 5040 − 1440 = 3600."
  },

  {
    id: 5530, section: "Maths",
    text: "A boat's speed in still water is 15 km/h and the speed of the stream is 3 km/h. What is the total time taken to travel 36 km upstream and 36 km downstream?",
    options: ["A) 4 hours", "B) 4.5 hours", "C) 5 hours", "D) 5.5 hours"],
    answer: "C",
    explanation: "Upstream speed = 15−3 = 12 km/h. Time upstream = 36/12 = 3 hours. Downstream speed = 15+3 = 18 km/h. Time downstream = 36/18 = 2 hours. Total time = 3+2 = 5 hours."
  },

  {
    id: 5531, section: "Maths",
    text: "What is the sum of all the digits used in writing the natural numbers from 1 to 100?",
    options: ["A) 891", "B) 901", "C) 911", "D) 921"],
    answer: "B",
    explanation: "Sum of digits from 1 to 99: each digit 0–9 appears 10 times in units place (sum=45×10=450) and 10 times in tens place for 10-99 (sum=45×10=450), total=900. Plus the number 100 contributes digit sum 1+0+0=1. Grand total = 900+1 = 901."
  },

  {
    id: 5532, section: "Maths",
    text: "A chord of a circle with radius 10 cm is at a perpendicular distance of 6 cm from the centre. Find the length of the chord.",
    options: ["A) 16 cm", "B) 15 cm", "C) 14 cm", "D) 18 cm"],
    answer: "A",
    explanation: "Using the perpendicular-from-centre-to-chord theorem: half-chord = √(r²−d²) = √(10²−6²) = √(100−36) = √64 = 8 cm. Full chord length = 2×8 = 16 cm."
  },

  {
    id: 5533, section: "Maths",
    text: "A mixture of 100 litres contains liquids A, B, and C in the ratio 2:3:5. How many litres of liquid B must be added so that the new ratio of B to A becomes 2:1?",
    options: ["A) 8 litres", "B) 10 litres", "C) 12 litres", "D) 15 litres"],
    answer: "B",
    explanation: "Initial quantities: A = 20 L, B = 30 L, C = 50 L (ratio 2:3:5 of 100 L). For B:A = 2:1, since A remains 20 L, B must become 2×20 = 40 L. Litres of B to add = 40−30 = 10 litres."
  },

  {
    id: 5534, section: "Maths",
    text: "If f(x) = x² − 3x + 2, find the value of f(f(2)).",
    options: ["A) 0", "B) 1", "C) 2", "D) 4"],
    answer: "C",
    explanation: "First find f(2) = 2²−3(2)+2 = 4−6+2 = 0. Then find f(f(2)) = f(0) = 0²−3(0)+2 = 2."
  }

];
