// math_ldcB.js – Dr Shetye Academic Programme
// LDC Numerical Ability — Set B
// 10 Q · BODMAS, LCM, ages, boats, pipes, mixture, heights, statistics, cylinder, algebra

var questions = [

  // ════════════════════════════════════════════════════════════
  // SECTION: Maths
  // ════════════════════════════════════════════════════════════
  {
    id: 13301, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">SIMPLIFICATION (BODMAS)</span><br>Simplify: &nbsp;<b>3/4 + 5/6 ÷ 2/3 − 1/2 × 3/4</b>",
    options: ["1 5/8", "2 1/8", "1 3/8", "7/8", "None of the above"],
    answer: "A",
    explanation: "Division and multiplication first: 5/6 ÷ 2/3 = 5/6 × 3/2 = 5/4; 1/2 × 3/4 = 3/8. Then 3/4 + 5/4 − 3/8 = 2 − 3/8 = 13/8 = 1 5/8."
  },
  {
    id: 13302, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">HCF & LCM</span><br>Three bells ring at intervals of 9, 12 and 15 minutes. If they ring together at 8:00 AM, when will they next ring together?",
    options: ["10:00 AM", "11:00 AM", "11:30 AM", "12:00 noon", "None of the above"],
    answer: "B",
    explanation: "LCM(9, 12, 15) = 180 minutes = 3 hours. 8:00 AM + 3 h = 11:00 AM."
  },
  {
    id: 13303, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">AGES</span><br>The present ages of A and B are in the ratio 5 : 7. After 6 years, the ratio will be 3 : 4. What is B's present age?",
    options: ["35 years", "28 years", "42 years", "49 years", "None of the above"],
    answer: "C",
    explanation: "(5x + 6)/(7x + 6) = 3/4 → 20x + 24 = 21x + 18 → x = 6. B = 7 × 6 = 42 years. Check: after 6 years 36 : 48 = 3 : 4 ✔."
  },
  {
    id: 13304, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">BOATS & STREAMS</span><br>A boat covers 24 km downstream in 2 hours and the same distance upstream in 3 hours. What is the speed of the stream?",
    options: ["4 km/h", "2.5 km/h", "3 km/h", "2 km/h", "None of the above"],
    answer: "D",
    explanation: "Downstream speed = 24/2 = 12 km/h; upstream = 24/3 = 8 km/h. Stream = (12 − 8)/2 = 2 km/h (boat in still water = 10 km/h)."
  },
  {
    id: 13305, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">PIPES & CISTERNS</span><br>Pipes A and B can fill a tank in 20 minutes and 30 minutes respectively, while pipe C can empty the full tank in 15 minutes. If all three are opened together, in how much time will the empty tank be filled?",
    options: ["45 minutes", "1 hour", "50 minutes", "1 hour 20 minutes", "None of the above"],
    answer: "B",
    explanation: "Take tank = LCM(20, 30, 15) = 60 units. A = +3, B = +2, C = −4 units per minute. Net = +1 unit/min → 60 minutes = 1 hour."
  },
  {
    id: 13306, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">MIXTURE</span><br>40 litres of a mixture contains milk and water in the ratio 3 : 1. How much water must be added to make the ratio 3 : 2?",
    options: ["5 litres", "8 litres", "10 litres", "20 litres", "None of the above"],
    answer: "C",
    explanation: "Milk = 30 L, water = 10 L. For 3 : 2, water must be 30 × 2/3 = 20 L. Water to add = 20 − 10 = 10 L. (20 L is the trap — that is the total water needed.)"
  },
  {
    id: 13307, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">HEIGHTS & DISTANCES</span><br>From a point P on the ground, 30√3 m away from the foot of a tower, the angle of elevation of the top of the tower is 30°. Find the height of the tower.<div style=\"margin-top:8px\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 250 170\" width=\"230\" height=\"156\" style=\"overflow:visible;max-width:100%;height:auto\"><line x1=\"10\" y1=\"150\" x2=\"240\" y2=\"150\" stroke=\"#14284b\" stroke-width=\"2\"/><rect x=\"196\" y=\"30\" width=\"16\" height=\"120\" fill=\"#d9e7de\" stroke=\"#14284b\" stroke-width=\"2\"/><line x1=\"30\" y1=\"150\" x2=\"204\" y2=\"30\" stroke=\"#0b6b3a\" stroke-width=\"2\" stroke-dasharray=\"6,4\"/><path d=\"M62,150 A32,32 0 0 0 57,131\" fill=\"none\" stroke=\"#b42318\" stroke-width=\"2\"/><text x=\"76\" y=\"141\" font-size=\"11\" fill=\"#b42318\" text-anchor=\"middle\" font-weight=\"bold\">30°</text><text x=\"30\" y=\"166\" font-size=\"12\" fill=\"#14284b\" text-anchor=\"middle\" font-weight=\"bold\">P</text><text x=\"118\" y=\"166\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"middle\">30√3 m</text><text x=\"232\" y=\"92\" font-size=\"13\" fill=\"#14284b\" text-anchor=\"middle\" font-weight=\"bold\">h</text><circle cx=\"30\" cy=\"150\" r=\"3.5\" fill=\"#14284b\"/></svg></div>",
    options: ["30√3 m", "15 m", "10√3 m", "30 m", "None of the above"],
    answer: "D",
    explanation: "tan 30° = h / 30√3 → 1/√3 = h / 30√3 → h = 30 m."
  },
  {
    id: 13308, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">STATISTICS</span><br>For the data 4, 7, 9, 7, 12, 15, 7, 9, 10 — what is the value of (Median − Mode)?",
    options: ["1", "3", "0", "2.5", "None of the above"],
    answer: "E",
    explanation: "Arrange: 4, 7, 7, 7, 9, 9, 10, 12, 15. Median (5th value) = 9. Mode (most frequent) = 7. Median − Mode = 2, which is not among A–D → E."
  },
  {
    id: 13309, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">MENSURATION — CYLINDER</span><br>A cylindrical water tank has a radius of 7 m and a height of 3 m. How many litres of water can it hold? (Take π = 22/7, 1 m³ = 1000 litres)<div style=\"margin-top:8px\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 170 170\" width=\"150\" height=\"150\" style=\"overflow:visible;max-width:100%;height:auto\"><ellipse cx=\"85\" cy=\"30\" rx=\"55\" ry=\"16\" fill=\"#eef3fa\" stroke=\"#14284b\" stroke-width=\"2\"/><path d=\"M30,30 L30,135 A55,16 0 0 0 140,135 L140,30\" fill=\"#dbe5f2\" stroke=\"#14284b\" stroke-width=\"2\"/><ellipse cx=\"85\" cy=\"30\" rx=\"55\" ry=\"16\" fill=\"#eef3fa\" stroke=\"#14284b\" stroke-width=\"2\"/><path d=\"M30,135 A55,16 0 0 1 140,135\" fill=\"none\" stroke=\"#14284b\" stroke-dasharray=\"5,4\"/><line x1=\"85\" y1=\"30\" x2=\"140\" y2=\"30\" stroke=\"#b42318\" stroke-width=\"2\"/><text x=\"112\" y=\"8\" font-size=\"11\" fill=\"#b42318\" text-anchor=\"middle\" font-weight=\"bold\">r = 7 m</text><text x=\"156\" y=\"88\" font-size=\"11\" fill=\"#14284b\" text-anchor=\"start\" font-weight=\"bold\">h = 3 m</text></svg></div>",
    options: ["4,62,000 litres", "46,200 litres", "1,54,000 litres", "92,400 litres", "None of the above"],
    answer: "A",
    explanation: "Volume = πr²h = 22/7 × 7 × 7 × 3 = 462 m³ = 462 × 1000 = 4,62,000 litres."
  },
  {
    id: 13310, section: "Maths",
    text: "<span style=\"font-size:0.75rem;font-weight:700;color:#0b6b3a;letter-spacing:.5px\">ALGEBRA</span><br>If x + 1/x = 5, find the value of x³ + 1/x³.",
    options: ["125", "115", "110", "140", "None of the above"],
    answer: "C",
    explanation: "x³ + 1/x³ = (x + 1/x)³ − 3(x + 1/x) = 125 − 15 = 110."
  }

];

// Answer key lookup
var ANSWER_KEY = {};
questions.forEach(q => { ANSWER_KEY[q.id] = q.answer; });
