// math_ldcA.js – Dr Shetye Academic Programme
// LDC Numerical Ability — Set A
// 10 Q · percentage, profit, CI/SI, work, trains, partnership, average, mensuration, LCM, probability

var questions = [

  // ════════════════════════════════════════════════════════════
  // SECTION: Maths
  // ════════════════════════════════════════════════════════════
  {
    id: 13201, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">PERCENTAGE</span><br>A's salary is 25% more than B's salary. By what percent is B's salary less than A's?",
    options: ["25%", "20%", "15%", "22.5%", "None of the above"],
    answer: "B",
    explanation: "Let B = 100, then A = 125. B is less by 25 out of 125 → 25/125 × 100 = 20%. <i>Shortcut:</i> r/(100 + r) × 100 = 25/125 × 100 = 20%."
  },
  {
    id: 13202, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">PROFIT & LOSS</span><br>A shopkeeper marks his goods 40% above the cost price and allows a discount of 15% on the marked price. What is his gain percent?",
    options: ["25%", "21%", "19%", "15%", "None of the above"],
    answer: "C",
    explanation: "Let CP = 100. MP = 140. SP = 140 × 0.85 = 119. Gain = 19%. <i>Shortcut:</i> +40 − 15 − (40 × 15)/100 = 19%."
  },
  {
    id: 13203, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SIMPLE & COMPOUND INTEREST</span><br>What is the difference between the compound interest and the simple interest on ₹12,000 for 2 years at 10% per annum (compounded annually)?",
    options: ["₹240", "₹100", "₹144", "₹120", "None of the above"],
    answer: "D",
    explanation: "For 2 years, CI − SI = P × (R/100)² = 12000 × (1/10)² = ₹120. (SI = ₹2,400; CI = 12000 × 1.21 − 12000 = ₹2,520.)"
  },
  {
    id: 13204, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">TIME & WORK</span><br>A can finish a work in 12 days and B in 18 days. They work together for 4 days and then A leaves. In how many days will B finish the remaining work?",
    options: ["8", "6", "10", "12", "None of the above"],
    answer: "A",
    explanation: "Take total work = LCM(12, 18) = 36 units. A = 3 units/day, B = 2 units/day. Together 4 days = 20 units. Remaining 16 units ÷ 2 = 8 days."
  },
  {
    id: 13205, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">TRAINS</span><br>A train 240 m long running at 54 km/h crosses a platform in 30 seconds. What is the length of the platform?",
    options: ["180 m", "240 m", "210 m", "450 m", "None of the above"],
    answer: "C",
    explanation: "54 km/h = 54 × 5/18 = 15 m/s. Distance in 30 s = 450 m = train + platform. Platform = 450 − 240 = 210 m. (450 m is a trap — it includes the train.)<div style=\"margin-top:6px\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 90\" width=\"280\" height=\"84\" style=\"overflow:visible;max-width:100%;height:auto\"><rect x=\"10\" y=\"40\" width=\"110\" height=\"26\" rx=\"5\" fill=\"#d9e7de\" stroke=\"#14284b\" stroke-width=\"2\"/><text x=\"65\" y=\"58\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"middle\" font-weight=\"bold\">Train 240 m</text><rect x=\"120\" y=\"66\" width=\"170\" height=\"10\" fill=\"#c9d3dc\" stroke=\"#14284b\"/><text x=\"205\" y=\"92\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"middle\">Platform (L m)</text><defs><marker id=\"ah88\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\" viewBox=\"0 0 8 8\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#14284b\"/></marker></defs><line x1=\"10\" y1=\"22\" x2=\"290\" y2=\"22\" stroke=\"#0b6b3a\" stroke-width=\"2\" marker-end=\"url(#ah88)\"/><text x=\"150\" y=\"15\" font-size=\"11\" fill=\"#0b6b3a\" text-anchor=\"middle\" font-weight=\"bold\">distance covered = 240 + L</text></svg></div>"
  },
  {
    id: 13206, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">PARTNERSHIP</span><br>A starts a business with ₹40,000. After 6 months, B joins with ₹60,000. At the end of the year the profit is ₹21,000. What is A's share?",
    options: ["₹10,500", "₹9,000", "₹12,600", "₹12,000", "None of the above"],
    answer: "D",
    explanation: "Capital × time: A = 40000 × 12 = 4,80,000; B = 60000 × 6 = 3,60,000. Ratio 4 : 3. A's share = 21000 × 4/7 = ₹12,000."
  },
  {
    id: 13207, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">AVERAGE</span><br>The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What is the weight of the new person?",
    options: ["82.5 kg", "85 kg", "80 kg", "87.5 kg", "None of the above"],
    answer: "B",
    explanation: "Total increase = 8 × 2.5 = 20 kg. New person = 65 + 20 = 85 kg."
  },
  {
    id: 13208, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">MENSURATION — PATH</span><br>A rectangular park 60 m long and 40 m wide has a path 5 m wide running all around it on the outside. Find the area of the path.<div style=\"margin-top:8px\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 170\" width=\"230\" height=\"163\" style=\"overflow:visible;max-width:100%;height:auto\"><rect x=\"10\" y=\"10\" width=\"200\" height=\"140\" fill=\"#e8f4ec\" stroke=\"#14284b\" stroke-width=\"2\"/><rect x=\"35\" y=\"35\" width=\"150\" height=\"90\" fill=\"#fff\" stroke=\"#14284b\" stroke-width=\"2\"/><text x=\"110\" y=\"85\" font-size=\"12\" fill=\"#14284b\" text-anchor=\"middle\" font-weight=\"bold\">Park 60 m × 40 m</text><text x=\"110\" y=\"26\" font-size=\"10\" fill=\"#0b6b3a\" text-anchor=\"middle\">path 5 m wide</text><defs><marker id=\"ah89\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\" viewBox=\"0 0 8 8\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#14284b\"/></marker></defs><line x1=\"35\" y1=\"160\" x2=\"185\" y2=\"160\" stroke=\"#14284b\" marker-end=\"url(#ah89)\"/><line x1=\"185\" y1=\"160\" x2=\"35\" y2=\"160\" stroke=\"#14284b\" marker-end=\"url(#ah89)\"/><text x=\"110\" y=\"172\" font-size=\"10\" fill=\"#14284b\" text-anchor=\"middle\">60 m</text><line x1=\"222\" y1=\"35\" x2=\"222\" y2=\"125\" stroke=\"#14284b\" marker-end=\"url(#ah89)\"/><line x1=\"222\" y1=\"125\" x2=\"222\" y2=\"35\" stroke=\"#14284b\" marker-end=\"url(#ah89)\"/><text x=\"234\" y=\"84\" font-size=\"10\" fill=\"#14284b\" text-anchor=\"middle\">40 m</text></svg></div>",
    options: ["1000 m²", "1050 m²", "1100 m²", "1200 m²", "None of the above"],
    answer: "C",
    explanation: "Outer rectangle = (60 + 10) × (40 + 10) = 70 × 50 = 3500 m². Park = 60 × 40 = 2400 m². Path = 3500 − 2400 = 1100 m². (Add the width on <b>both</b> sides: 2 × 5 = 10.)"
  },
  {
    id: 13209, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">NUMBER SYSTEM — LCM</span><br>What is the smallest 4-digit number which, when divided by 12, 15 and 20, leaves a remainder of 7 in each case?",
    options: ["1020", "1037", "1067", "1087", "None of the above"],
    answer: "E",
    explanation: "LCM(12, 15, 20) = 60. Smallest 4-digit multiple of 60 = 1020 (60 × 17). Required number = 1020 + 7 = 1027, which is not among A–D → E. (1087 also leaves remainder 7, but it is not the smallest.)"
  },
  {
    id: 13210, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">PROBABILITY</span><br>A bag contains 5 red, 4 blue and 3 green balls. Two balls are drawn at random. What is the probability that both are of the same colour?",
    options: ["19/66", "7/22", "1/3", "5/11", "None of the above"],
    answer: "A",
    explanation: "Total ways = ¹²C₂ = 66. Same colour: ⁵C₂ + ⁴C₂ + ³C₂ = 10 + 6 + 3 = 19. P = 19/66."
  }

];

// Answer key lookup
var ANSWER_KEY = {};
questions.forEach(q => { ANSWER_KEY[q.id] = q.answer; });
