// math_part8.js – Dr Shetye Academic Programme
// Maths Part Test 8 — CAT / IIM Level (Extreme Difficulty)
// 10 Questions · IDs 5425–5434 · 10 Marks · 10 Minutes
// Topics: Number Theory, Logs, Geometry, Combinations, AP,
//         Symmetric Functions, Inequalities, Probability, Work-Time, Mensuration

var questions = [

  {
    id: 5425, section: "Maths",
    text: "How many integers from 1 to 1000 are divisible by neither 3 nor 7?",
    options: ["A) 571", "B) 572", "C) 574", "D) 476"],
    answer: "B",
    explanation: "By inclusion-exclusion: divisible by 3 = ⌊1000/3⌋ = 333. Divisible by 7 = ⌊1000/7⌋ = 142. Divisible by both (i.e., by 21) = ⌊1000/21⌋ = 47. Divisible by 3 or 7 = 333+142−47 = 428. Neither = 1000−428 = 572."
  },

  {
    id: 5426, section: "Maths",
    text: "If log₂3 = a and log₃5 = b, then log₁₂30 equals:",
    options: ["A) (1 + a + ab) / (2 + a)", "B) (1 + b) / (1 + a)", "C) (ab + 1) / (a + 2)", "D) (a + b) / (2 + ab)"],
    answer: "A",
    explanation: "Express everything in terms of log₂. log₃ = a·log₂. log₅ = b·log₃ = ab·log₂. log₃₀ = log(2×3×5) = log₂+log₃+log₅ = log₂(1+a+ab). log₁₂ = log(4×3) = 2log₂+log₃ = log₂(2+a). log₁₂30 = log₃₀/log₁₂ = (1+a+ab)/(2+a)."
  },

  {
    id: 5427, section: "Maths",
    text: "In a right triangle ABC with angle A = 90°, the altitude from A meets BC at D. If BD = 9 and DC = 16, find AD.",
    options: ["A) 10", "B) 11", "C) 12", "D) 14"],
    answer: "C",
    explanation: "Geometric mean relation in a right triangle: AD² = BD × DC. AD² = 9 × 16 = 144. AD = 12."
  },

  {
    id: 5428, section: "Maths",
    text: "A committee of 4 is to be formed from 6 men and 5 women such that at least 2 women are included. In how many ways?",
    options: ["A) 200", "B) 210", "C) 215", "D) 225"],
    answer: "C",
    explanation: "Exactly 2 women: C(5,2)×C(6,2) = 10×15 = 150. Exactly 3 women: C(5,3)×C(6,1) = 10×6 = 60. Exactly 4 women: C(5,4)×C(6,0) = 5×1 = 5. Total = 150+60+5 = 215."
  },

  {
    id: 5429, section: "Maths",
    text: "Find the sum of all two-digit natural numbers that leave a remainder of 3 when divided by 7.",
    options: ["A) 636", "B) 666", "C) 676", "D) 686"],
    answer: "C",
    explanation: "Smallest two-digit: 10 ÷ 7 = 1 remainder 3 ✓. Largest: 94 ÷ 7 = 13 remainder 3 ✓. AP: 10, 17, 24, …, 94. n = (94−10)/7 + 1 = 13. Sum = 13/2 × (10+94) = 13 × 52 = 676."
  },

  {
    id: 5430, section: "Maths",
    text: "If x+y+z = 1, x²+y²+z² = 2 and x³+y³+z³ = 3, find x⁴+y⁴+z⁴.",
    options: ["A) 5", "B) 7/2", "C) 4", "D) 25/6"],
    answer: "D",
    explanation: "Using Newton's identities with p₁=1, p₂=2, p₃=3, e₁=1: p₂ = e₁p₁−2e₂ → 2 = 1−2e₂ → e₂ = −½. p₃ = e₁p₂−e₂p₁+3e₃ → 3 = 2+½+3e₃ → e₃ = 1/6. p₄ = e₁p₃−e₂p₂+e₃p₁ = 1×3−(−½)×2+(1/6)×1 = 3+1+1/6 = 25/6."
  },

  {
    id: 5431, section: "Maths",
    text: "For how many integer values of k (where 1 ≤ k ≤ 8) does |2x − k| < 3 have exactly 2 integer solutions for x?",
    options: ["A) 2", "B) 3", "C) 4", "D) 5"],
    answer: "C",
    explanation: "|2x−k| < 3 gives (k−3)/2 < x < (k+3)/2, an open interval of length 3. When k is odd: endpoints (k−3)/2 and (k+3)/2 are integers (excluded), so exactly 2 integers lie strictly inside. When k is even: endpoints are non-integers, giving exactly 3 integers inside. Odd values in {1,…,8}: 1, 3, 5, 7 → 4 values."
  },

  {
    id: 5432, section: "Maths",
    text: "A bag has 4 red and 6 blue balls. Three balls are drawn without replacement. What is the probability the 1st and 3rd are red and the 2nd is blue?",
    options: ["A) 2/15", "B) 1/10", "C) 4/25", "D) 1/12"],
    answer: "B",
    explanation: "P = P(R₁) × P(B₂|R₁) × P(R₃|R₁B₂) = (4/10) × (6/9) × (3/8) = 72/720 = 1/10."
  },

  {
    id: 5433, section: "Maths",
    text: "A and B together can finish a work in 12 days. They work together for 4 days, after which B leaves. A alone then finishes the remaining work in 14 days. How many days would B alone take?",
    options: ["A) 21 days", "B) 24 days", "C) 28 days", "D) 36 days"],
    answer: "C",
    explanation: "In 4 days together: 4/12 = 1/3 done. Remaining = 2/3. A alone does 2/3 in 14 days → A's full rate = 2/(3×14) = 1/21 per day → A alone = 21 days. 1/B = 1/12 − 1/21 = (7−4)/84 = 3/84 = 1/28. B alone = 28 days."
  },

  {
    id: 5434, section: "Maths",
    text: "The area of a regular hexagon inscribed in a circle of radius r is A₁. The area of a circle inscribed in that hexagon is A₂. What is A₁/A₂?",
    options: ["A) √3/π", "B) 3√3/(2π)", "C) 2√3/π", "D) 3/(2π)"],
    answer: "C",
    explanation: "Regular hexagon inscribed in circle of radius r: side = r. Area A₁ = (3√3/2)r². Inradius of hexagon = r·cos(30°) = r√3/2. A₂ = π·(r√3/2)² = 3πr²/4. A₁/A₂ = (3√3r²/2) ÷ (3πr²/4) = (3√3/2) × (4/3π) = 12√3/(6π) = 2√3/π."
  }

];
