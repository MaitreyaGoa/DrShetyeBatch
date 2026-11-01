// math_ldcD.js – Dr Shetye Academic Programme
// LDC Numerical Ability — Set D
// 10 Q · false weight, average, ages, trains, alligation, room walls, pie chart, SI, remainders, coins

var questions = [

  // ════════════════════════════════════════════════════════════
  // SECTION: Maths
  // ════════════════════════════════════════════════════════════
  {
    id: 15301, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">PROFIT & LOSS — FALSE WEIGHT</span><br>A shopkeeper sells sugar at 10% above the cost price, and also uses a weight of 900 g instead of 1 kg. What is his total gain percent?",
    options: ["21%", "22 2/9%", "20%", "11 1/9%", "None of the above"],
    answer: "B",
    explanation: "Let cost be ₹1 per gram. For '1 kg' he gives 900 g (cost ₹900) but charges 10% above the cost of 1000 g = ₹1,100. Gain = 1100 − 900 = 200 on 900 → 200/900 × 100 = <b>22 2/9 %</b>. (Adding 10% + 11 1/9% = 21 1/9% is wrong — the two gains multiply: 1.1 × 1000/900 = 1.2222.)"
  },
  {
    id: 15302, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">AVERAGE — REPLACEMENT</span><br>The average weight of 10 students increases by 1.8 kg when one of them, weighing 58 kg, is replaced by a new student. What is the weight of the new student?",
    options: ["76 kg", "70 kg", "59.8 kg", "74 kg", "None of the above"],
    answer: "A",
    explanation: "Total weight rises by 10 × 1.8 = 18 kg. So the new student is 18 kg heavier than the one he replaced: 58 + 18 = <b>76 kg</b>."
  },
  {
    id: 15303, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">AGES</span><br>The present ages of a father and his son are in the ratio 7 : 2. After 10 years, the ratio will be 9 : 4. What is the father's present age?",
    options: ["40 years", "45 years", "30 years", "35 years", "None of the above"],
    answer: "D",
    explanation: "Let the ages be 7k and 2k. (7k + 10)/(2k + 10) = 9/4 → 28k + 40 = 18k + 90 → k = 5. Father = 7 × 5 = <b>35 years</b> (son 10). Check: after 10 years 45 : 20 = 9 : 4."
  },
  {
    id: 15304, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">TRAINS — SAME DIRECTION</span><br>A 150 m long train running at 72 km/h overtakes another train 100 m long running at 54 km/h on a parallel track in the same direction. How long does it take to pass the other train completely?<div style=\"margin-top:8px\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 110\" width=\"300\" height=\"103\" style=\"overflow:visible;max-width:100%;height:auto\"><defs><marker id=\"ah91\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\" viewBox=\"0 0 8 8\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#14284b\"/></marker></defs><rect x=\"20\" y=\"20\" width=\"150\" height=\"24\" rx=\"5\" fill=\"#d9e7de\" stroke=\"#14284b\" stroke-width=\"2\"/><text x=\"95\" y=\"37\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"middle\" font-weight=\"bold\">A: 150 m, 72 km/h</text><line x1=\"175\" y1=\"32\" x2=\"215\" y2=\"32\" stroke=\"#14284b\" stroke-width=\"2\" marker-end=\"url(#ah91)\"/><rect x=\"130\" y=\"62\" width=\"120\" height=\"24\" rx=\"5\" fill=\"#dbe5f2\" stroke=\"#14284b\" stroke-width=\"2\"/><text x=\"190\" y=\"79\" font-size=\"10\" fill=\"#14284b\" text-anchor=\"middle\" font-weight=\"bold\">B: 100 m, 54 km/h</text><line x1=\"255\" y1=\"74\" x2=\"295\" y2=\"74\" stroke=\"#14284b\" stroke-width=\"2\" marker-end=\"url(#ah91)\"/><text x=\"160\" y=\"104\" font-size=\"10\" fill=\"#0b6b3a\" text-anchor=\"middle\" font-weight=\"bold\">same direction</text></svg></div>",
    options: ["25 seconds", "12.5 seconds", "50 seconds", "40 seconds", "None of the above"],
    answer: "C",
    explanation: "Same direction → relative speed = 72 − 54 = 18 km/h = 18 × 5/18 = 5 m/s. Distance to cover = sum of lengths = 150 + 100 = 250 m. Time = 250 ÷ 5 = <b>50 seconds</b>."
  },
  {
    id: 15305, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">MIXTURE (ALLIGATION)</span><br>In what ratio must rice costing ₹40 per kg be mixed with rice costing ₹55 per kg so that the mixture costs ₹45 per kg?",
    options: ["1 : 2", "3 : 2", "2 : 1", "2 : 3", "None of the above"],
    answer: "C",
    explanation: "Alligation: (55 − 45) : (45 − 40) = 10 : 5 = <b>2 : 1</b> (cheaper : dearer). Check: (2 × 40 + 1 × 55)/3 = 135/3 = 45 ✓.<div style=\"margin-top:6px\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 220 110\" width=\"220\" height=\"110\" style=\"overflow:visible;max-width:100%;height:auto\"><text x=\"40\" y=\"20\" font-size=\"13\" fill=\"#14284b\" text-anchor=\"middle\" font-weight=\"bold\">₹40</text><text x=\"180\" y=\"20\" font-size=\"13\" fill=\"#14284b\" text-anchor=\"middle\" font-weight=\"bold\">₹55</text><text x=\"110\" y=\"60\" font-size=\"14\" fill=\"#0b6b3a\" text-anchor=\"middle\" font-weight=\"bold\">₹45</text><line x1=\"52\" y1=\"26\" x2=\"98\" y2=\"50\" stroke=\"#5b6472\"/><line x1=\"168\" y1=\"26\" x2=\"122\" y2=\"50\" stroke=\"#5b6472\"/><line x1=\"98\" y1=\"68\" x2=\"52\" y2=\"90\" stroke=\"#5b6472\"/><line x1=\"122\" y1=\"68\" x2=\"168\" y2=\"90\" stroke=\"#5b6472\"/><text x=\"40\" y=\"104\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"middle\">55 − 45 = 10</text><text x=\"180\" y=\"104\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"middle\">45 − 40 = 5</text></svg></div>"
  },
  {
    id: 15306, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">MENSURATION — ROOM WALLS</span><br>A room is 6 m long, 4 m wide and 3 m high. It has one door of 2 m × 1 m and one window of 1.5 m × 1 m. What is the cost of painting the <b>four walls</b> at ₹40 per m²?<div style=\"margin-top:8px\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 345 175\" width=\"320\" height=\"162\" style=\"overflow:visible;max-width:100%;height:auto\"><polygon points=\"30,60 210,60 210,150 30,150\" fill=\"#f4f8f5\" stroke=\"#14284b\" stroke-width=\"2\"/><polygon points=\"30,60 80,25 260,25 210,60\" fill=\"#e8eef6\" stroke=\"#14284b\" stroke-width=\"2\"/><polygon points=\"210,60 260,25 260,115 210,150\" fill=\"#dbe5f2\" stroke=\"#14284b\" stroke-width=\"2\"/><rect x=\"60\" y=\"100\" width=\"30\" height=\"50\" fill=\"#c9a77c\" stroke=\"#14284b\" stroke-width=\"1.5\"/><text x=\"75\" y=\"96\" font-size=\"9\" fill=\"#5b6472\" text-anchor=\"middle\">door 2 m × 1 m</text><rect x=\"140\" y=\"85\" width=\"40\" height=\"27\" fill=\"#cfe0f5\" stroke=\"#14284b\" stroke-width=\"1.5\"/><text x=\"160\" y=\"80\" font-size=\"9\" fill=\"#5b6472\" text-anchor=\"middle\">window 1.5 m × 1 m</text><text x=\"120\" y=\"168\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"middle\" font-weight=\"bold\">length 6 m</text><text x=\"266\" y=\"92\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"start\" font-weight=\"bold\">breadth 4 m</text><text x=\"16\" y=\"108\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"middle\" font-weight=\"bold\">3 m</text></svg></div>",
    options: ["₹2,400", "₹2,340", "₹2,320", "₹2,260", "None of the above"],
    answer: "D",
    explanation: "Area of four walls = 2 × (l + b) × h = 2 × 10 × 3 = 60 m². Subtract door (2 m²) and window (1.5 m²): 60 − 3.5 = 56.5 m². Cost = 56.5 × 40 = <b>₹2,260</b>. (₹2,400 forgets the door and window.)"
  },
  {
    id: 15307, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">DATA INTERPRETATION — PIE CHART</span><br>The pie chart shows how a family spends its monthly income of ₹40,000. What is the <b>central angle</b> of the sector for Education?<div style=\"margin-top:8px\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 290 180\" width=\"280\" height=\"174\" style=\"overflow:visible;max-width:100%;height:auto\"><path d=\"M90,90 L90.0,18.0 A72,72 0 0 1 158.5,112.2 Z\" fill=\"#2f6db5\" stroke=\"#fff\" stroke-width=\"2\"/><text x=\"127.21478174124758\" y=\"66.96187839454623\" font-size=\"11\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">30%</text><path d=\"M90,90 L158.5,112.2 A72,72 0 0 1 67.8,158.5 Z\" fill=\"#0b6b3a\" stroke=\"#fff\" stroke-width=\"2\"/><text x=\"110.88356298801915\" y=\"134.98630011266494\" font-size=\"11\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">25%</text><path d=\"M90,90 L67.8,158.5 A72,72 0 0 1 21.5,112.2 Z\" fill=\"#e0a100\" stroke=\"#fff\" stroke-width=\"2\"/><text x=\"57.473088065418814\" y=\"126.5269119345812\" font-size=\"11\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">15%</text><path d=\"M90,90 L21.5,112.2 A72,72 0 0 1 47.7,31.8 Z\" fill=\"#b42318\" stroke=\"#fff\" stroke-width=\"2\"/><text x=\"46.25140025042293\" y=\"79.78521825875242\" font-size=\"11\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">20%</text><path d=\"M90,90 L47.7,31.8 A72,72 0 0 1 90.0,18.0 Z\" fill=\"#7a5cb5\" stroke=\"#fff\" stroke-width=\"2\"/><text x=\"75.78521825875241\" y=\"50.25140025042294\" font-size=\"11\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">10%</text><rect x=\"185\" y=\"30\" width=\"14\" height=\"14\" fill=\"#2f6db5\"/><text x=\"206\" y=\"42\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"start\">Food</text><rect x=\"185\" y=\"54\" width=\"14\" height=\"14\" fill=\"#0b6b3a\"/><text x=\"206\" y=\"66\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"start\">Rent</text><rect x=\"185\" y=\"78\" width=\"14\" height=\"14\" fill=\"#e0a100\"/><text x=\"206\" y=\"90\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"start\">Education</text><rect x=\"185\" y=\"102\" width=\"14\" height=\"14\" fill=\"#b42318\"/><text x=\"206\" y=\"114\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"start\">Savings</text><rect x=\"185\" y=\"126\" width=\"14\" height=\"14\" fill=\"#7a5cb5\"/><text x=\"206\" y=\"138\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"start\">Others</text></svg></div>",
    options: ["54°", "15°", "45°", "60°", "None of the above"],
    answer: "A",
    explanation: "A full circle (360°) = 100%, so 1% = 3.6°. Education = 15% → 15 × 3.6 = <b>54°</b>. (Amount spent on education = 15% of 40,000 = ₹6,000.)"
  },
  {
    id: 15308, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SIMPLE INTEREST</span><br>At simple interest, a sum of money becomes 1½ times itself in 6 years. In how many years will it become <b>double</b> itself at the same rate?",
    options: ["18 years", "12 years", "9 years", "15 years", "None of the above"],
    answer: "B",
    explanation: "1½ times means the interest is 50% of the sum in 6 years → rate = 50/6 = 8⅓% per year. To double, the interest must be 100%: 100 ÷ 8⅓ = <b>12 years</b>. (Simple interest grows evenly: 50% in 6 years → 100% in 12 years.)"
  },
  {
    id: 15309, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">REMAINDERS</span><br>A number when divided by 56 leaves a remainder 29. What will be the remainder when the same number is divided by 8?",
    options: ["3", "1", "7", "5", "None of the above"],
    answer: "D",
    explanation: "Number = 56k + 29. Since 56 is a multiple of 8, only 29 matters: 29 ÷ 8 leaves remainder <b>5</b>. (Check with k = 1: 85 ÷ 8 = 10 remainder 5.)"
  },
  {
    id: 15310, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">RATIO — COINS</span><br>A bag contains ₹1, 50-paise and 25-paise coins in the ratio 5 : 6 : 8. If the total amount is ₹210, how many <b>50-paise</b> coins are there?",
    options: ["105", "168", "120", "84", "None of the above"],
    answer: "E",
    explanation: "Let the numbers be 5k, 6k and 8k. Value = 5k × 1 + 6k × 0.50 + 8k × 0.25 = 5k + 3k + 2k = 10k = 210 → k = 21. Number of 50-paise coins = 6 × 21 = <b>126</b>, which is not among A–D, so the answer is E."
  }

];

// Answer key lookup
var ANSWER_KEY = {};
questions.forEach(q => { ANSWER_KEY[q.id] = q.answer; });
