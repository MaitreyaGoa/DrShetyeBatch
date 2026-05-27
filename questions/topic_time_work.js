// ============================================================
// Dr. Shetye Academic Program — Topic Test: Time, Work & Pipes
// Subject: Maths | 10 Questions | All answers verified
// ============================================================

var questions = [

  {
    id: 3301, section: "Maths",
    text: "A can complete a work in 10 days and B in 15 days. How many days will they take working together?",
    options: ["A) 5 days", "B) 6 days", "C) 7 days", "D) 8 days"],
    answer: "B",
    explanation: "Combined rate = 1/10+1/15 = 3/30+2/30 = 5/30 = 1/6. Time = 6 days."
  },

  {
    id: 3302, section: "Maths",
    text: "A alone can finish a job in 12 days. B alone can finish it in 18 days. They work together for 4 days, then A leaves. How many more days does B need to finish?",
    options: ["A) 5 days", "B) 6 days", "C) 7 days", "D) 8 days"],
    answer: "D",
    explanation: "Combined rate = 1/12+1/18 = 3/36+2/36 = 5/36. Work in 4 days = 20/36 = 5/9. Remaining = 4/9. B alone finishes in (4/9)×18 = 8 more days."
  },

  {
    id: 3303, section: "Maths",
    text: "20 workers can build a wall in 30 days. How many days will 24 workers take to build the same wall?",
    options: ["A) 20 days", "B) 22 days", "C) 25 days", "D) 28 days"],
    answer: "C",
    explanation: "Workers × Days = constant. 20×30 = 24×D → D = 600/24 = 25 days."
  },

  {
    id: 3304, section: "Maths",
    text: "Pipe A fills a tank in 6 hours. Pipe B fills it in 8 hours. Both are opened together. How long to fill the tank?",
    options: ["A) 3 hrs 26 min", "B) 3 hrs 40 min", "C) 3 hrs 20 min", "D) 4 hrs"],
    answer: "A",
    explanation: "Rate = 1/6+1/8 = 4/24+3/24 = 7/24. Time = 24/7 = 3 hrs 26 min (approx)."
  },

  {
    id: 3305, section: "Maths",
    text: "A pipe fills a tank in 4 hours. A drain empties it in 6 hours. If both are open, how long to fill the tank?",
    options: ["A) 8 hours", "B) 10 hours", "C) 12 hours", "D) 14 hours"],
    answer: "C",
    explanation: "Net rate = 1/4−1/6 = 3/12−2/12 = 1/12. Time = 12 hours."
  },

  {
    id: 3306, section: "Maths",
    text: "A and B together finish a work in 8 days. A alone takes 12 days. How many days does B alone take?",
    options: ["A) 20 days", "B) 22 days", "C) 24 days", "D) 26 days"],
    answer: "C",
    explanation: "B's rate = 1/8−1/12 = 3/24−2/24 = 1/24. B alone takes 24 days."
  },

  {
    id: 3307, section: "Maths",
    text: "15 men can complete a project in 16 days working 8 hours a day. How many days will 12 men take working 10 hours a day?",
    options: ["A) 14 days", "B) 15 days", "C) 16 days", "D) 18 days"],
    answer: "C",
    explanation: "Total hours = 15×16×8 = 1920. New: 12×10×D = 1920 → D = 1920/120 = 16 days."
  },

  {
    id: 3308, section: "Maths",
    text: "Three pipes A, B, C can fill a tank in 6, 9, and 12 hours respectively. All three are opened together. How long to fill the tank?",
    options: ["A) 2 hrs 40 min", "B) 3 hrs", "C) 3 hrs 20 min", "D) 2 hrs 46 min"],
    answer: "D",
    explanation: "Rate = 1/6+1/9+1/12 = 6/36+4/36+3/36 = 13/36 per hour. Time = 36/13 ≈ 2.77 hrs = 2 hours 46 minutes."
  },

  {
    id: 3309, section: "Maths",
    text: "A can do a piece of work in 10 days and B in 15 days. They work together for 3 days and then B leaves. In how many more days will A finish the remaining work?",
    options: ["A) 5 days", "B) 4 days", "C) 6 days", "D) 3 days"],
    answer: "A",
    explanation: "Combined rate = 1/10+1/15 = 3/30+2/30 = 5/30 = 1/6. Work done in 3 days = 3×(1/6) = 1/2. Remaining = 1/2. A alone = (1/2)÷(1/10) = 5 days."
  },

  {
    id: 3310, section: "Maths",
    text: "Two taps can fill a tank in 20 and 30 minutes respectively. A drain can empty it in 15 minutes. If all three are opened together, how long to fill the tank?",
    options: ["A) 50 min", "B) 55 min", "C) 60 min", "D) Tank never fills"],
    answer: "C",
    explanation: "Net rate = 1/20+1/30−1/15 = 3/60+2/60−4/60 = 1/60. Time = 60 minutes."
  }

];

var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
