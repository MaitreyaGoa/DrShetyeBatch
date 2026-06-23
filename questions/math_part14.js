// math_part14.js – Dr Shetye Academic Programme
// Maths Part Test 14 — CAT / IIM Level (Commercial Mathematics Heavy)
// 10 Questions · IDs 5615–5624 · 10 Marks · 10 Minutes
// Topics: Compound Interest, Successive Discounts, Profit/Loss Chains,
//         Banker's/True Discount, Partnership, Shares & Dividends,
//         Alligation, Simple Interest

var questions = [

  {
    id: 5615, section: "Maths",
    text: "The compound interest on a certain sum for 2 years at 10% per annum is ₹2100. Find the principal.",
    options: ["A) ₹10000", "B) ₹9000", "C) ₹8000", "D) ₹11000"],
    answer: "A",
    explanation: "CI = P[(1+R/100)ᵗ − 1]. Here, 2100 = P[(1.1)²−1] = P[1.21−1] = P×0.21. P = 2100/0.21 = ₹10,000."
  },

  {
    id: 5616, section: "Maths",
    text: "Find the single discount equivalent to three successive discounts of 10%, 20%, and 25%.",
    options: ["A) 44%", "B) 45%", "C) 46%", "D) 47%"],
    answer: "C",
    explanation: "Remaining fraction after successive discounts = (1−0.10)(1−0.20)(1−0.25) = 0.90×0.80×0.75 = 0.54. Equivalent single discount = (1−0.54)×100 = 46%."
  },

  {
    id: 5617, section: "Maths",
    text: "A sells an article to B at a profit of 20%. B sells it to C at a loss of 10%. If C pays ₹1080 for it, find A's cost price.",
    options: ["A) ₹900", "B) ₹950", "C) ₹1050", "D) ₹1000"],
    answer: "D",
    explanation: "B's CP = C's payment ÷ (1−loss%) = 1080 ÷ 0.90 = ₹1200 (since B sold at a 10% loss, SP = 90% of CP). A's CP = B's CP ÷ (1+profit%) = 1200 ÷ 1.20 = ₹1000 (since A sold at 20% profit, SP = 120% of CP)."
  },

  {
    id: 5618, section: "Maths",
    text: "Find the Banker's Discount (BD), True Discount (TD), and Banker's Gain (BG) on a bill of ₹2700 due in 1 year at 8% per annum simple interest.",
    options: ["A) BD=₹200, TD=₹216, BG=₹16", "B) BD=₹216, TD=₹200, BG=₹16", "C) BD=₹220, TD=₹200, BG=₹20", "D) BD=₹216, TD=₹196, BG=₹20"],
    answer: "B",
    explanation: "BD = (Amount×R×T)/100 = (2700×8×1)/100 = ₹216. TD = (Amount×R×T)/(100+R×T) = (2700×8×1)/(100+8) = 21600/108 = ₹200. Banker's Gain = BD−TD = 216−200 = ₹16."
  },

  {
    id: 5619, section: "Maths",
    text: "A invests ₹3000 for the entire year. B invests ₹4000 for 6 months. If B's share of the total profit is ₹800, find the total profit.",
    options: ["A) ₹2000", "B) ₹1900", "C) ₹1800", "D) ₹2100"],
    answer: "A",
    explanation: "Capital × Time: A = 3000×12 = 36000. B = 4000×6 = 24000. Ratio A:B = 36000:24000 = 3:2. If B's share (2 parts) = ₹800, then 1 part = ₹400. Total profit (5 parts) = 5×400 = ₹2000."
  },

  {
    id: 5620, section: "Maths",
    text: "A sum of ₹5000 amounts to ₹6050 in 2 years under compound interest, compounded annually. Find the rate of interest per annum.",
    options: ["A) 8%", "B) 10%", "C) 9%", "D) 11%"],
    answer: "B",
    explanation: "Using A = P(1+R/100)ᵗ: 6050 = 5000(1+R/100)². (1+R/100)² = 6050/5000 = 1.21. 1+R/100 = √1.21 = 1.1. R/100 = 0.1 → R = 10%."
  },

  {
    id: 5621, section: "Maths",
    text: "A trader marks his goods 40% above cost price. He then allows a discount such that he still makes a 12% profit. Find the discount percentage offered.",
    options: ["A) 18%", "B) 20%", "C) 22%", "D) 25%"],
    answer: "B",
    explanation: "Let CP = 100. Marked Price (MP) = 140. Selling Price for 12% profit = 112. Discount = MP−SP = 140−112 = 28. Discount % = (28/140)×100 = 20%."
  },

  {
    id: 5622, section: "Maths",
    text: "An investor puts ₹10,900 into shares of face value ₹100 each, available at a 9% premium. If the company declares a 6% dividend, find the investor's annual income.",
    options: ["A) ₹500", "B) ₹550", "C) ₹650", "D) ₹600"],
    answer: "D",
    explanation: "Cost per share = Face Value + Premium = 100+9 = ₹109. Number of shares = 10900/109 = 100 shares. Annual dividend income = 100 shares × (6% of ₹100 face value) = 100×6 = ₹600."
  },

  {
    id: 5623, section: "Maths",
    text: "A shopkeeper mixes two varieties of rice costing ₹20/kg and ₹30/kg respectively, and sells the mixture at ₹27.50/kg, making a 10% profit. Find the ratio in which the two varieties are mixed.",
    options: ["A) 1:1", "B) 2:3", "C) 3:2", "D) 1:2"],
    answer: "A",
    explanation: "Selling price = ₹27.50/kg with 10% profit means Cost Price of mixture = 27.50/1.10 = ₹25/kg. Using the rule of alligation: ratio of cheaper to dearer = (30−25):(25−20) = 5:5 = 1:1."
  },

  {
    id: 5624, section: "Maths",
    text: "At what rate of simple interest per annum will a sum of money double itself in 8 years?",
    options: ["A) 10%", "B) 12%", "C) 12.5%", "D) 15%"],
    answer: "C",
    explanation: "If a sum doubles, SI = Principal (since Amount = 2P, so SI = 2P−P = P). Using SI = PRT/100: P = P×R×8/100 → R = 100/8 = 12.5%."
  }

];
