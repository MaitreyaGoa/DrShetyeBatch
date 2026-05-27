// ============================================================
// Dr. Shetye Academic Program — Topic Test: Speed, Distance & Time
// Subject: Maths | 10 Questions | All answers verified
// ============================================================

var questions = [

  {
    id: 3201, section: "Maths",
    text: "A car travels at 60 km/h. How much distance does it cover in 2.5 hours?",
    options: ["A) 120 km", "B) 140 km", "C) 150 km", "D) 160 km"],
    answer: "C",
    explanation: "Distance = Speed × Time = 60 × 2.5 = 150 km."
  },

  {
    id: 3202, section: "Maths",
    text: "A bus covers 240 km in 4 hours. What is its speed in km/h?",
    options: ["A) 50 km/h", "B) 55 km/h", "C) 60 km/h", "D) 65 km/h"],
    answer: "C",
    explanation: "Speed = Distance/Time = 240/4 = 60 km/h."
  },

  {
    id: 3203, section: "Maths",
    text: "At 60 km/h, how long will a journey of 300 km take?",
    options: ["A) 4 hours", "B) 4.5 hours", "C) 5 hours", "D) 5.5 hours"],
    answer: "C",
    explanation: "Time = Distance/Speed = 300/60 = 5 hours."
  },

  {
    id: 3204, section: "Maths",
    text: "A person travels from A to B at 40 km/h and returns at 60 km/h. What is the average speed for the entire journey?",
    options: ["A) 46 km/h", "B) 48 km/h", "C) 50 km/h", "D) 52 km/h"],
    answer: "B",
    explanation: "Average speed = 2×40×60/(40+60) = 4800/100 = 48 km/h."
  },

  {
    id: 3205, section: "Maths",
    text: "A train 150 metres long crosses a telegraph pole in 6 seconds. What is the speed of the train in km/h?",
    options: ["A) 80 km/h", "B) 85 km/h", "C) 90 km/h", "D) 95 km/h"],
    answer: "C",
    explanation: "Speed = 150/6 m/s = 25 m/s = 25×3.6 = 90 km/h."
  },

  {
    id: 3206, section: "Maths",
    text: "Two trains 200 m and 300 m long run in the same direction at 72 km/h and 54 km/h. How long will the faster train take to cross the slower one completely?",
    options: ["A) 80 sec", "B) 90 sec", "C) 100 sec", "D) 110 sec"],
    answer: "C",
    explanation: "Relative speed = 72−54 = 18 km/h = 5 m/s. Total length = 500 m. Time = 500/5 = 100 seconds."
  },

  {
    id: 3207, section: "Maths",
    text: "A person covers part of a 48 km journey on foot at 4 km/h and the rest by cycle at 12 km/h, taking 6 hours total. How far did he cycle?",
    options: ["A) 24 km", "B) 30 km", "C) 36 km", "D) 40 km"],
    answer: "C",
    explanation: "Let cycling time = t₂. 4(6−t₂)+12t₂ = 48 → 24+8t₂ = 48 → t₂ = 3 hrs. Cycling distance = 12×3 = 36 km."
  },

  {
    id: 3208, section: "Maths",
    text: "Two persons start walking towards each other from towns A and B which are 150 km apart. Their speeds are 80 km/h and 70 km/h. When will they meet?",
    options: ["A) 45 min", "B) 1 hour", "C) 1.5 hours", "D) 2 hours"],
    answer: "B",
    explanation: "Relative speed = 80+70 = 150 km/h. Time = 150/150 = 1 hour."
  },

  {
    id: 3209, section: "Maths",
    text: "Convert 90 km/h into metres per second.",
    options: ["A) 20 m/s", "B) 22 m/s", "C) 25 m/s", "D) 28 m/s"],
    answer: "C",
    explanation: "90 km/h = 90×1000/3600 = 90/3.6 = 25 m/s."
  },

  {
    id: 3210, section: "Maths",
    text: "A boat covers 12 km upstream in 3 hours and 12 km downstream in 2 hours. Find the speed of the boat in still water.",
    options: ["A) 3 km/h", "B) 4 km/h", "C) 5 km/h", "D) 6 km/h"],
    answer: "C",
    explanation: "Upstream speed = 4 km/h. Downstream speed = 6 km/h. Boat speed = (4+6)/2 = 5 km/h."
  }

];

var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
