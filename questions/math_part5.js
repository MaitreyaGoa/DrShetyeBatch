// ============================================================
// Dr Shetye Academic Program
// Maths Part Test – Moderate Level (No Trigonometry)
// 10 Questions / 10 Marks / 10 Minutes
// SSC CGL Moderate Level – All answers verified
// ============================================================
var questions = [

  {
    id: 801, section: "Maths",
    text: "A person invests ₹12,000 at 8% per annum SI for 3 years and ₹8,000 at 10% per annum SI for 2 years. What is the total interest earned?",
    options: ["₹4,480", "₹4,800", "₹5,000", "₹5,200"],
    answer: "A",
    explanation: "SI₁ = (12000×8×3)/100 = ₹2,880. SI₂ = (8000×10×2)/100 = ₹1,600. Total = 2880 + 1600 = ₹4,480."
  },
  {
    id: 802, section: "Maths",
    text: "A, B and C invest ₹3,000, ₹4,000 and ₹5,000 respectively. At the end of the year the total profit is ₹2,400. Find B's share of profit.",
    options: ["₹600", "₹800", "₹960", "₹1,000"],
    answer: "B",
    explanation: "Ratio of investment = 3:4:5. Total parts = 12. B's share = 4/12 × 2400 = ₹800."
  },
  {
    id: 803, section: "Maths",
    text: "Pipe A fills a tank in 20 minutes, Pipe B fills it in 30 minutes, and Pipe C empties it in 15 minutes. If all three are opened together, in how many minutes will the tank be filled?",
    options: ["60 min", "90 min", "120 min", "45 min"],
    answer: "A",
    explanation: "Net per min = 1/20 + 1/30 − 1/15 = 3/60 + 2/60 − 4/60 = 1/60. Time = 60 minutes."
  },
  {
    id: 804, section: "Maths",
    text: "The average marks of 30 students is 52. Later it is found that marks of one student were entered as 73 instead of 37. What is the correct average?",
    options: ["50.8", "51.8", "52.8", "53.2"],
    answer: "A",
    explanation: "Total = 30×52 = 1560. Corrected total = 1560 − 73 + 37 = 1524. Correct average = 1524/30 = 50.8."
  },
  {
    id: 805, section: "Maths",
    text: "Three containers of equal volume (60 litres each) have milk to water ratio of 3:2, 4:3 and 5:4 respectively. If all three are mixed, find the total quantity of milk in the mixture.",
    options: ["96 litres", "100 litres", "104 litres", "108 litres"],
    answer: "C",
    explanation: "Milk from C1 = 3/5×60 = 36 L. Milk from C2 = 4/7×60 ≈ 34.28 L. Milk from C3 = 5/9×60 ≈ 33.33 L. Total ≈ 103.6 ≈ 104 litres."
  },
  {
    id: 806, section: "Maths",
    text: "Find the largest 4-digit number which when divided by 15, 20 and 35 leaves remainder 10 in each case.",
    options: ["9670", "9430", "9250", "9310"],
    answer: "A",
    explanation: "LCM(15, 20, 35) = 420. Largest 4-digit multiple of 420 = 420×23 = 9660. Required number = 9660 + 10 = 9670."
  },
  {
    id: 807, section: "Maths",
    text: "A shopkeeper buys two watches at ₹600 each. He sells one at 20% profit and the other at 20% loss. Find the net profit or loss.",
    options: ["4% loss", "4% profit", "No profit no loss", "2% loss"],
    answer: "C",
    explanation: "SP₁ = 600×1.20 = ₹720. SP₂ = 600×0.80 = ₹480. Total SP = ₹1200 = Total CP = ₹1200. No profit no loss. (Note: When CP is same, equal % gain and loss = no profit no loss.)"
  },
  {
    id: 808, section: "Maths",
    text: "A rectangular field is 80 m long and 60 m wide. A path of uniform width runs inside along its boundary. If the area of the path is 864 m², find the width of the path.",
    options: ["3 m", "4 m", "6 m", "8 m"],
    answer: "A",
    explanation: "Inner area = 4800 − 864 = 3936. (80−2x)(60−2x) = 3936 → 4x²−280x+864 = 0 → x²−70x+216 = 0 → (x−3)(x−72) = 0 → x = 3 m."
  },
  {
    id: 809, section: "Maths",
    text: "The ratio of ages of father and son is 7:2. After 10 years the ratio will become 9:4. What is the sum of their present ages?",
    options: ["45 yrs", "54 yrs", "63 yrs", "72 yrs"],
    answer: "A",
    explanation: "(7x+10)/(2x+10) = 9/4 → 28x+40 = 18x+90 → 10x = 50 → x = 5. Father = 35, Son = 10. Sum = 45 years."
  },
  {
    id: 810, section: "Maths",
    text: "A shopkeeper allows successive discounts of 10% and 20% on an article. If the customer pays ₹720, what is the marked price?",
    options: ["₹900", "₹950", "₹1000", "₹1100"],
    answer: "C",
    explanation: "SP = MP × 0.90 × 0.80 = MP × 0.72. So MP = 720 / 0.72 = ₹1000."
  }

];
