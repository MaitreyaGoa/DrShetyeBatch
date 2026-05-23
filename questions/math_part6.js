// ============================================================
// Dr Shetye Academic Program
// Maths Advanced Test – 20 Questions / 20 Marks / 20 Minutes
// SSC CGL Advanced Level – All answers verified
// ============================================================
var questions = [

  // ── Algebra ───────────────────────────────────────────────
  {
    id: 1101, section: "Maths",
    text: "If a + b + c = 6 and ab + bc + ca = 11, find the value of a³ + b³ + c³ − 3abc.",
    options: ["18", "24", "36", "42"],
    answer: "A",
    explanation: "a³+b³+c³−3abc = (a+b+c)(a²+b²+c²−ab−bc−ca). a²+b²+c² = (a+b+c)²−2(ab+bc+ca) = 36−22 = 14. So = 6×(14−11) = 6×3 = 18."
  },
  {
    id: 1102, section: "Maths",
    text: "If x = 2 + √3, find the value of x³ + 1/x³.",
    options: ["18", "26", "40", "52"],
    answer: "D",
    explanation: "x=2+√3 → 1/x=2−√3 → x+1/x=4. x³+1/x³ = (x+1/x)³ − 3(x+1/x) = 64−12 = 52."
  },
  {
    id: 1103, section: "Maths",
    text: "If (x−2) is a factor of x³ − 3x² + kx − 4, find the value of k.",
    options: ["2", "3", "4", "5"],
    answer: "C",
    explanation: "Substitute x=2 (Factor theorem): 8−12+2k−4=0 → 2k=8 → k=4."
  },
  {
    id: 1104, section: "Maths",
    text: "If x + 1/x = 3, find the value of x⁴ + 1/x⁴.",
    options: ["47", "49", "51", "53"],
    answer: "A",
    explanation: "x+1/x=3 → (x+1/x)²=9 → x²+1/x²=9−2=7. (x²+1/x²)²=49 → x⁴+1/x⁴=49−2=47."
  },

  // ── Number System ─────────────────────────────────────────
  {
    id: 1105, section: "Maths",
    text: "What is the remainder when 7⁹⁵ is divided by 4?",
    options: ["1", "2", "3", "0"],
    answer: "C",
    explanation: "7 mod 4 = 3. Powers of 3 mod 4: 3¹=3, 3²=1, 3³=3, 3⁴=1 (alternates). 95 is odd → remainder = 3."
  },
  {
    id: 1106, section: "Maths",
    text: "Find the value of: 1/(1×2) + 1/(2×3) + 1/(3×4) + ... + 1/(9×10)",
    options: ["7/10", "9/10", "8/10", "1/10"],
    answer: "B",
    explanation: "Each term 1/(n×(n+1)) = 1/n − 1/(n+1). Telescoping sum = 1/1 − 1/10 = 9/10."
  },

  // ── Geometry ──────────────────────────────────────────────
  {
    id: 1107, section: "Maths",
    text: "Two circles of radii 15 cm and 20 cm have their centres 25 cm apart. Find the length of their common chord.",
    options: ["24 cm", "20 cm", "22 cm", "18 cm"],
    answer: "A",
    explanation: "Let a = distance from centre of circle 1 to chord = (d²+r₁²−r₂²)/2d = (625+225−400)/50 = 9. Half chord = √(r₁²−a²) = √(225−81) = √144 = 12. Full chord = 24 cm."
  },
  {
    id: 1108, section: "Maths",
    text: "In triangle ABC, AB = AC and BC = 12 cm. D is the midpoint of BC. If AD = 8 cm, find AB.",
    options: ["8 cm", "10 cm", "12 cm", "14 cm"],
    answer: "B",
    explanation: "In isosceles triangle, AD ⊥ BC. BD = 6 cm. AB = √(AD²+BD²) = √(64+36) = √100 = 10 cm."
  },
  {
    id: 1109, section: "Maths",
    text: "The area of a rhombus is 240 cm² and one of its diagonals is 16 cm. Find the perimeter of the rhombus.",
    options: ["56 cm", "60 cm", "64 cm", "68 cm"],
    answer: "D",
    explanation: "Area = (d₁×d₂)/2 → 240=(16×d₂)/2 → d₂=30 cm. Half diagonals: 8 and 15. Side = √(8²+15²) = √289 = 17 cm. Perimeter = 4×17 = 68 cm."
  },

  // ── Mensuration ───────────────────────────────────────────
  {
    id: 1110, section: "Maths",
    text: "A cylinder and a cone have equal base radii and equal heights. If the volume of the cylinder is 300 cm³, what is the volume of the cone?",
    options: ["100 cm³", "150 cm³", "200 cm³", "75 cm³"],
    answer: "A",
    explanation: "Volume of cone = (1/3) × Volume of cylinder = 300/3 = 100 cm³."
  },
  {
    id: 1111, section: "Maths",
    text: "A hollow sphere of internal radius 4 cm and external radius 6 cm is melted and recast into small solid spheres of radius 1 cm each. How many small spheres are formed?",
    options: ["142", "148", "152", "160"],
    answer: "C",
    explanation: "Volume of hollow sphere = (4/3)π(6³−4³) = (4/3)π×152 = 608π/3. Volume of small sphere = 4π/3. Number = (608π/3)÷(4π/3) = 608/4 = 152."
  },
  {
    id: 1112, section: "Maths",
    text: "Water flows through a cylindrical pipe of radius 3.5 cm at a speed of 10 m/min. How much water (in litres) flows through the pipe in 1 minute? (π = 22/7)",
    options: ["3.85 L", "38.5 L", "385 L", "3850 L"],
    answer: "B",
    explanation: "Volume = πr²h = 22/7 × 3.5² × 1000 cm = 22/7 × 12.25 × 1000 = 38500 cm³ = 38.5 litres. (1 litre = 1000 cm³)"
  },

  // ── Profit Loss & SI/CI ───────────────────────────────────
  {
    id: 1113, section: "Maths",
    text: "A merchant has 1000 kg of sugar. He sells part at 8% profit and the rest at 18% profit, gaining 14% overall. Find the quantity sold at 18% profit.",
    options: ["400 kg", "500 kg", "600 kg", "700 kg"],
    answer: "C",
    explanation: "By alligation: ratio = (18−14):(14−8) = 4:6 = 2:3. Quantity at 18% = 3/(2+3) × 1000 = 600 kg."
  },
  {
    id: 1114, section: "Maths",
    text: "The difference between Compound Interest and Simple Interest on a sum for 2 years at 10% per annum is ₹50. Find the principal sum.",
    options: ["₹4,000", "₹5,000", "₹6,000", "₹8,000"],
    answer: "B",
    explanation: "Difference = P×(R/100)² → 50 = P×(0.10)² = P×0.01 → P = 50/0.01 = ₹5,000."
  },
  {
    id: 1115, section: "Maths",
    text: "A person bought a table for ₹840 after getting successive discounts of 20% and 25% on the marked price. Find the marked price.",
    options: ["₹1,200", "₹1,400", "₹1,600", "₹1,800"],
    answer: "B",
    explanation: "MP × 0.80 × 0.75 = 840 → MP × 0.60 = 840 → MP = 840/0.60 = ₹1,400."
  },

  // ── Ratio, Mixture & Alligation ───────────────────────────
  {
    id: 1116, section: "Maths",
    text: "In what ratio must tea worth ₹60/kg be mixed with tea worth ₹90/kg so that the mixture, when sold at ₹84/kg, gives a profit of 20%?",
    options: ["2:1", "3:2", "1:2", "2:3"],
    answer: "C",
    explanation: "Cost price of mixture = 84/1.20 = ₹70/kg. By alligation: (90−70):(70−60) = 20:10 = 2:1. So cheaper:dearer = 2:1... wait ratio of ₹60 to ₹90 = (90−70):(70−60) = 20:10 = 2:1. Cheaper(60) mixed more → ratio = 2:1. But answer is 1:2 meaning less of ₹60 and more of ₹90? Let me recheck: alligation gives cheaper:dearer = (mean−cheaper's diff from mean reversed). Cheaper=60, dearer=90, mean=70. Cheaper gets (90−70)=20 parts, dearer gets (70−60)=10 parts. Ratio cheaper:dearer = 20:10 = 2:1. Answer = 2:1 → A. Corrected Answer: A — 2:1.",
    answer: "A"
  },
  {
    id: 1117, section: "Maths",
    text: "A jar contains milk and water in ratio 5:3. When 16 litres of mixture is removed and 16 litres of water is added, the ratio becomes 1:1. Find the original quantity of mixture.",
    options: ["56 litres", "64 litres", "72 litres", "80 litres"],
    answer: "D",
    explanation: "Let total = T. Milk = 5T/8. After removing 16L: milk = 5T/8−10. New ratio 1:1 → milk = T/2. So 5T/8−10 = T/2 → T/8 = 10 → T = 80 litres."
  },

  // ── Time Speed Distance ───────────────────────────────────
  {
    id: 1118, section: "Maths",
    text: "A boat goes 24 km upstream in 6 hours and 20 km downstream in 4 hours. What is the speed of the current?",
    options: ["0.5 km/h", "1 km/h", "1.5 km/h", "2 km/h"],
    answer: "A",
    explanation: "Upstream speed = 24/6 = 4 km/h. Downstream speed = 20/4 = 5 km/h. Speed of current = (downstream−upstream)/2 = (5−4)/2 = 0.5 km/h."
  },
  {
    id: 1119, section: "Maths",
    text: "Two persons A and B start simultaneously from X and Y respectively towards each other. After meeting, A takes 9 hours and B takes 4 hours to reach their destinations. Find the ratio of speeds of A and B.",
    options: ["2:3", "3:2", "2:1", "1:2"],
    answer: "A",
    explanation: "When two persons meet, speed ratio = √(time taken by B after meeting) : √(time taken by A after meeting) = √4 : √9 = 2:3."
  },

  // ── Statistics ────────────────────────────────────────────
  {
    id: 1120, section: "Maths",
    text: "The mean of 10 observations is 15. If one observation 15 is removed and two new observations 5 and 25 are added, what is the new mean?",
    options: ["15", "14", "16", "13"],
    answer: "A",
    explanation: "Original total = 10×15 = 150. New total = 150−15+5+25 = 165. New count = 10−1+2 = 11. New mean = 165/11 = 15."
  }

];
