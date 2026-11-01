// math_ldcC.js – Dr Shetye Academic Programme
// LDC Numerical Ability — Set C
// 10 Q · discount, ratio, average speed, work & wages, CI half-yearly, unit digit, triangle area, bar graph, population, simplification

var questions = [

  // ════════════════════════════════════════════════════════════
  // SECTION: Maths
  // ════════════════════════════════════════════════════════════
  {
    id: 15201, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">DISCOUNT</span><br>A shop gives two successive discounts of 25% and 12% on a mixer marked at ₹3,200. What single discount is equivalent to these two discounts?",
    options: ["34%", "37%", "35%", "31%", "None of the above"],
    answer: "A",
    explanation: "Price after both discounts = 3200 × 0.75 × 0.88 = ₹2,112. Total discount = 1,088 on 3,200 = <b>34%</b>. <i>Shortcut:</i> 25 + 12 − (25 × 12)/100 = 37 − 3 = 34%. (Not 37% — the second discount is on the reduced price.)"
  },
  {
    id: 15202, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">RATIO & PROPORTION</span><br>The monthly salaries of A and B are in the ratio 3 : 5. If each of them gets an increment of ₹2,000, the ratio becomes 7 : 11. What is A's present salary?",
    options: ["₹15,000", "₹12,000", "₹9,000", "₹10,000", "None of the above"],
    answer: "B",
    explanation: "Let the salaries be 3k and 5k. (3k + 2000)/(5k + 2000) = 7/11 → 33k + 22000 = 35k + 14000 → 2k = 8000 → k = 4000. A's salary = 3 × 4000 = <b>₹12,000</b>. (Check: 14,000 : 22,000 = 7 : 11.)"
  },
  {
    id: 15203, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">AVERAGE SPEED</span><br>A cyclist covers three equal distances at speeds of 30 km/h, 40 km/h and 60 km/h. What is his average speed for the whole journey?",
    options: ["43⅓ km/h", "45 km/h", "40 km/h", "42 km/h", "None of the above"],
    answer: "C",
    explanation: "For equal distances, take each part = 120 km (LCM of 30, 40, 60). Times: 4 h + 3 h + 2 h = 9 h for 360 km. Average speed = 360 ÷ 9 = <b>40 km/h</b>. (The simple average 43⅓ is wrong — he spends more time at the lower speed.)"
  },
  {
    id: 15204, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">TIME, WORK & WAGES</span><br>A can finish a job in 12 days and B can finish it in 18 days. They work together and receive ₹6,000 for the job. What is A's share?",
    options: ["₹3,000", "₹2,400", "₹3,200", "₹3,600", "None of the above"],
    answer: "D",
    explanation: "Wages are shared in the ratio of work done per day: 1/12 : 1/18 = 3 : 2. A's share = 6000 × 3/5 = <b>₹3,600</b>."
  },
  {
    id: 15205, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">COMPOUND INTEREST (HALF-YEARLY)</span><br>What is the compound interest on ₹20,000 for 1 year at 8% per annum, compounded <b>half-yearly</b>?",
    options: ["₹1,600", "₹1,632", "₹1,664", "₹1,640", "None of the above"],
    answer: "B",
    explanation: "Half-yearly: rate = 8/2 = 4% per period, periods = 2. Amount = 20000 × 1.04 × 1.04 = ₹21,632. CI = 21632 − 20000 = <b>₹1,632</b>. (Annual compounding would give only ₹1,600.)"
  },
  {
    id: 15206, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">NUMBER SYSTEM — UNIT DIGIT</span><br>What is the unit digit of <b>3<sup>65</sup> × 6<sup>59</sup> × 7<sup>71</sup></b>?",
    options: ["2", "8", "6", "4", "None of the above"],
    answer: "D",
    explanation: "Powers of 3 end in 3, 9, 7, 1 (cycle of 4): 65 = 4 × 16 + 1 → <b>3</b>. Every power of 6 ends in <b>6</b>. Powers of 7 end in 7, 9, 3, 1: 71 = 4 × 17 + 3 → <b>3</b>. Multiply only the unit digits: 3 × 6 × 3 = 54 → unit digit <b>4</b>."
  },
  {
    id: 15207, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">MENSURATION — TRIANGLE</span><br>Find the area of a triangle whose sides are 13 cm, 14 cm and 15 cm (see figure).<div style=\"margin-top:8px\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 260 170\" width=\"220\" height=\"144\" style=\"overflow:visible;max-width:100%;height:auto\"><polygon points=\"40,150 240,150 90,30\" fill=\"#e8f4ec\" stroke=\"#14284b\" stroke-width=\"2.5\"/><text x=\"140\" y=\"166\" font-size=\"12\" fill=\"#14284b\" text-anchor=\"middle\" font-weight=\"bold\">14 cm</text><text x=\"38\" y=\"92\" font-size=\"12\" fill=\"#14284b\" text-anchor=\"end\" font-weight=\"bold\">13 cm</text><text x=\"182\" y=\"84\" font-size=\"12\" fill=\"#14284b\" text-anchor=\"middle\" font-weight=\"bold\">15 cm</text><text x=\"32\" y=\"154\" font-size=\"12\" fill=\"#5b6472\" text-anchor=\"middle\" font-weight=\"bold\">B</text><text x=\"248\" y=\"154\" font-size=\"12\" fill=\"#5b6472\" text-anchor=\"middle\" font-weight=\"bold\">C</text><text x=\"90\" y=\"22\" font-size=\"12\" fill=\"#5b6472\" text-anchor=\"middle\" font-weight=\"bold\">A</text></svg></div>",
    options: ["84 cm²", "91 cm²", "105 cm²", "72 cm²", "None of the above"],
    answer: "A",
    explanation: "Heron's formula: s = (13 + 14 + 15)/2 = 21. Area = √[21 × (21 − 13) × (21 − 14) × (21 − 15)] = √(21 × 8 × 7 × 6) = √7056 = <b>84 cm²</b>. (Check: the height on the 14 cm side is 12 cm, and ½ × 14 × 12 = 84.)"
  },
  {
    id: 15208, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">DATA INTERPRETATION — BAR GRAPH</span><br>The bar graph shows the production of a factory (in thousand units). What is the <b>percentage increase</b> in production from 2023 to 2024?<div style=\"margin-top:8px\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 200\" width=\"300\" height=\"200\" style=\"overflow:visible;max-width:100%;height:auto\"><line x1=\"40\" y1=\"170.0\" x2=\"290\" y2=\"170.0\" stroke=\"#e1e7ec\"/><text x=\"34\" y=\"174.0\" font-size=\"10\" fill=\"#5b6472\" text-anchor=\"end\">0</text><line x1=\"40\" y1=\"135.0\" x2=\"290\" y2=\"135.0\" stroke=\"#e1e7ec\"/><text x=\"34\" y=\"139.0\" font-size=\"10\" fill=\"#5b6472\" text-anchor=\"end\">50</text><line x1=\"40\" y1=\"100.0\" x2=\"290\" y2=\"100.0\" stroke=\"#e1e7ec\"/><text x=\"34\" y=\"104.0\" font-size=\"10\" fill=\"#5b6472\" text-anchor=\"end\">100</text><line x1=\"40\" y1=\"65.0\" x2=\"290\" y2=\"65.0\" stroke=\"#e1e7ec\"/><text x=\"34\" y=\"69.0\" font-size=\"10\" fill=\"#5b6472\" text-anchor=\"end\">150</text><line x1=\"40\" y1=\"30.0\" x2=\"290\" y2=\"30.0\" stroke=\"#e1e7ec\"/><text x=\"34\" y=\"34.0\" font-size=\"10\" fill=\"#5b6472\" text-anchor=\"end\">200</text><rect x=\"50.0\" y=\"86.0\" width=\"32.0\" height=\"84.0\" fill=\"#2f6db5\"/><text x=\"66.0\" y=\"82.0\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"middle\" font-weight=\"bold\">120</text><text x=\"66.0\" y=\"185\" font-size=\"11\" fill=\"#5b6472\" text-anchor=\"middle\">2021</text><rect x=\"98.0\" y=\"65.0\" width=\"32.0\" height=\"105.0\" fill=\"#2f6db5\"/><text x=\"114.0\" y=\"61.0\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"middle\" font-weight=\"bold\">150</text><text x=\"114.0\" y=\"185\" font-size=\"11\" fill=\"#5b6472\" text-anchor=\"middle\">2022</text><rect x=\"146.0\" y=\"75.5\" width=\"32.0\" height=\"94.5\" fill=\"#2f6db5\"/><text x=\"162.0\" y=\"71.5\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"middle\" font-weight=\"bold\">135</text><text x=\"162.0\" y=\"185\" font-size=\"11\" fill=\"#5b6472\" text-anchor=\"middle\">2023</text><rect x=\"194.0\" y=\"44.0\" width=\"32.0\" height=\"126.0\" fill=\"#2f6db5\"/><text x=\"210.0\" y=\"40.0\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"middle\" font-weight=\"bold\">180</text><text x=\"210.0\" y=\"185\" font-size=\"11\" fill=\"#5b6472\" text-anchor=\"middle\">2024</text><rect x=\"242.0\" y=\"33.5\" width=\"32.0\" height=\"136.5\" fill=\"#2f6db5\"/><text x=\"258.0\" y=\"29.5\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"middle\" font-weight=\"bold\">195</text><text x=\"258.0\" y=\"185\" font-size=\"11\" fill=\"#5b6472\" text-anchor=\"middle\">2025</text><line x1=\"40\" y1=\"170\" x2=\"290\" y2=\"170\" stroke=\"#14284b\" stroke-width=\"1.5\"/><text transform=\"rotate(-90 12 100)\" x=\"12\" y=\"100\" font-size=\"10\" fill=\"#5b6472\" text-anchor=\"middle\">units (thousands)</text></svg></div>",
    options: ["25%", "33⅓%", "30%", "45%", "None of the above"],
    answer: "B",
    explanation: "2023 = 135, 2024 = 180. Increase = 45. Percentage increase = 45/135 × 100 = <b>33⅓%</b>. (45% is the increase in thousand units, not the percentage; always divide by the <b>earlier</b> year.)"
  },
  {
    id: 15209, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">PERCENTAGE — POPULATION</span><br>The population of a village is 75,000. It increases by 20% in the first year and then decreases by 20% in the second year. What is the population after two years?",
    options: ["75,000", "78,000", "72,000", "70,500", "None of the above"],
    answer: "C",
    explanation: "After year 1: 75,000 × 1.20 = 90,000. After year 2: 90,000 × 0.80 = <b>72,000</b>. A rise and a fall of the same percent always give a net <b>loss</b> of (20 × 20)/100 = 4%: 4% of 75,000 = 3,000."
  },
  {
    id: 15210, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SIMPLIFICATION</span><br>Simplify: <b>(√1764 ÷ 6) + ¾ of 128 − 15% of 260</b>",
    options: ["58", "62", "72", "60", "None of the above"],
    answer: "E",
    explanation: "√1764 = 42, and 42 ÷ 6 = 7. ¾ of 128 = 96. 15% of 260 = 39. Total = 7 + 96 − 39 = <b>64</b>, which is not among A–D, so the answer is E."
  }

];

// Answer key lookup
var ANSWER_KEY = {};
questions.forEach(q => { ANSWER_KEY[q.id] = q.answer; });
