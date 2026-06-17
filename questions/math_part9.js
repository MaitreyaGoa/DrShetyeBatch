// math_part9.js – Dr Shetye Academic Programme
// Maths Part Test 9 — CAT / IIM Level (Commercial Mathematics Focus)
// 10 Questions · IDs 5435–5444 · 10 Marks · 10 Minutes
// Topics: Profit & Loss, Compound Interest, Mixtures, Partnership,
//         Shares & Dividends, Successive % Change, True Discount, Averages

var questions = [

  {
    id: 5435, section: "Maths",
    text: "An article with a marked price of ₹2000 is sold after two successive discounts of 20% and 10%. What is the overall percentage discount on the marked price?",
    options: ["A) 28%", "B) 27%", "C) 26%", "D) 30%"],
    answer: "A",
    explanation: "SP = 2000 × 0.80 × 0.90 = ₹1440. Overall discount = (2000−1440)/2000 × 100 = 28%. Note: successive discounts of x% and y% give a net discount of (x+y−xy/100)%, here 20+10−2=28%."
  },

  {
    id: 5436, section: "Maths",
    text: "Find the difference between the compound interest and simple interest on ₹8000 for 2 years at 10% per annum.",
    options: ["A) ₹60", "B) ₹70", "C) ₹100", "D) ₹80"],
    answer: "D",
    explanation: "SI = (8000×10×2)/100 = ₹1600. CI = 8000×(1.10)² − 8000 = 8000×1.21 − 8000 = ₹1680. Difference = 1680 − 1600 = ₹80. Note: for 2 years, CI−SI = P×(R/100)², here 8000×0.01 = ₹80."
  },

  {
    id: 5437, section: "Maths",
    text: "A mixture of 60 litres contains milk and water in the ratio 2:1. How many litres of water must be added to make the ratio of milk to water 1:2?",
    options: ["A) 40 litres", "B) 60 litres", "C) 50 litres", "D) 70 litres"],
    answer: "B",
    explanation: "Milk = 40 L, Water = 20 L (ratio 2:1 of 60 L). Let x litres of water be added. New ratio: 40/(20+x) = 1/2 → 80 = 20+x → x = 60 litres."
  },

  {
    id: 5438, section: "Maths",
    text: "A and B start a business investing ₹4000 and ₹5000 respectively. A withdraws his investment after 6 months while B continues for 8 months. If the total profit is ₹4000, what is A's share?",
    options: ["A) ₹1200", "B) ₹1500", "C) ₹1800", "D) ₹2000"],
    answer: "B",
    explanation: "Capital × Time: A = 4000×6 = 24000. B = 5000×8 = 40000. Ratio = 24000:40000 = 3:5. Total parts = 8. A's share = 4000 × 3/8 = ₹1500."
  },

  {
    id: 5439, section: "Maths",
    text: "₹10,000 is invested at 10% per annum compounded half-yearly for 1 year. What is the compound interest earned?",
    options: ["A) ₹1025", "B) ₹1020", "C) ₹1000", "D) ₹1050"],
    answer: "A",
    explanation: "Half-yearly rate = 5%, number of periods = 2. Amount = 10000 × (1.05)² = 10000 × 1.1025 = ₹11,025. CI = 11025 − 10000 = ₹1025."
  },

  {
    id: 5440, section: "Maths",
    text: "At simple interest, a sum becomes 7/4 times itself in 5 years. Find the rate of interest per annum.",
    options: ["A) 12%", "B) 15%", "C) 18%", "D) 20%"],
    answer: "B",
    explanation: "If sum = P, amount = 7P/4, so SI = 7P/4 − P = 3P/4. Using SI = P×R×T/100: 3P/4 = P×R×5/100 → R = (3×100)/(4×5) = 15%."
  },

  {
    id: 5441, section: "Maths",
    text: "A man buys shares of face value ₹100 at a discount of 10%. If the company pays an annual dividend of 8%, what is his rate of return on his investment?",
    options: ["A) 7.2%", "B) 8%", "C) 8.89%", "D) 10%"],
    answer: "C",
    explanation: "Cost price per share = 100 − 10% of 100 = ₹90. Annual dividend = 8% of face value = ₹8. Rate of return = (Dividend/CP) × 100 = (8/90) × 100 ≈ 8.89%."
  },

  {
    id: 5442, section: "Maths",
    text: "The population of a town increases by 10% in the first year and decreases by 10% in the second year. What is the net percentage change over the two years?",
    options: ["A) No change", "B) 1% increase", "C) 1% decrease", "D) 2% decrease"],
    answer: "C",
    explanation: "Net change = (1.10 × 0.90 − 1) × 100 = (0.99 − 1) × 100 = −1%. The population decreases by 1% overall. This is the standard result: successive %change of +x and −x always gives a net decrease of x²/100 %."
  },

  {
    id: 5443, section: "Maths",
    text: "Find the true discount on a bill of ₹1860 due 9 months hence, if the rate of interest is 5% per annum.",
    options: ["A) ₹60", "B) ₹65", "C) ₹67.23", "D) ₹70"],
    answer: "C",
    explanation: "True Discount (TD) = (Amount × R × T) / (100 + R×T), where T = 9/12 = 0.75 years. TD = (1860 × 5 × 0.75) / (100 + 5×0.75) = 6975 / 103.75 = ₹67.23."
  },

  {
    id: 5444, section: "Maths",
    text: "How many litres of a 40% acid solution must be mixed with 20 litres of a 25% acid solution to obtain a mixture that is 30% acid?",
    options: ["A) 5 litres", "B) 8 litres", "C) 10 litres", "D) 12 litres"],
    answer: "C",
    explanation: "Let x litres of 40% solution be added. By alligation: 0.25×20 + 0.40×x = 0.30×(20+x) → 5 + 0.4x = 6 + 0.3x → 0.1x = 1 → x = 10 litres."
  }

];
