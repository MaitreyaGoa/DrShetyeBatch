// ============================================================
// Dr. Shetye Academic Program — Topic Test: Direction Sense
// Subject: Reasoning | 10 Questions
// ============================================================

var questions = [

  {
    id: 5201, section: "Reasoning",
    text: "Ravi walks 10 km North, then turns right and walks 5 km, then turns right again and walks 10 km. In which direction is he now from his starting point?",
    options: ["A) North", "B) South", "C) East", "D) West"],
    answer: "C",
    explanation: "North 10km → East 5km → South 10km. Net position: 5km East of start. He is to the East."
  },

  {
    id: 5202, section: "Reasoning",
    text: "A person faces East. He turns 90° clockwise, then 180° anticlockwise. Which direction is he now facing?",
    options: ["A) North", "B) South", "C) East", "D) West"],
    answer: "A",
    explanation: "East → 90° clockwise = South → 180° anticlockwise = North. He faces North."
  },

  {
    id: 5203, section: "Reasoning",
    text: "Priya walks 6 km West, then 8 km North. What is the straight-line distance from her starting point?",
    options: ["A) 8 km", "B) 10 km", "C) 12 km", "D) 14 km"],
    answer: "B",
    explanation: "Distance = √(6²+8²) = √(36+64) = √100 = 10 km."
  },

  {
    id: 5204, section: "Reasoning",
    text: "Facing North, Amit turns 135° clockwise. Which direction does he now face?",
    options: ["A) South-East", "B) South-West", "C) North-East", "D) North-West"],
    answer: "A",
    explanation: "North + 135° clockwise = South-East (North=0°, +135° = 135° = SE direction)."
  },

  {
    id: 5205, section: "Reasoning",
    text: "A man walks 5 km South, turns left and walks 4 km, turns left again and walks 5 km. How far is he from his starting point and in which direction?",
    options: ["A) 4 km East", "B) 4 km West", "C) 9 km East", "D) 4 km North"],
    answer: "A",
    explanation: "South 5km → East 4km (left from South) → North 5km (left from East). Net: 4km East of start."
  },

  {
    id: 5206, section: "Reasoning",
    text: "At sunset, two friends Arjun and Bheem stand facing each other. If Arjun's shadow falls to his right, which direction is Bheem facing?",
    options: ["A) North", "B) South", "C) East", "D) West"],
    answer: "B",
    explanation: "At sunset, sun is in the West. Shadow falls towards the East. If Arjun's shadow is to his right → Arjun faces North. They face each other → Bheem faces South."
  },

  {
    id: 5207, section: "Reasoning",
    text: "A car travels 12 km East, then 5 km North, then 12 km West, then 5 km South. Where is the car relative to its start?",
    options: ["A) 5 km North", "B) 5 km South", "C) At the starting point", "D) 12 km West"],
    answer: "C",
    explanation: "East 12 and West 12 cancel. North 5 and South 5 cancel. Car is back at the starting point."
  },

  {
    id: 5208, section: "Reasoning",
    text: "Reena starts from point A, walks 3 km North, turns right walks 4 km, turns right walks 3 km, turns right walks 2 km. How far is she from point A?",
    options: ["A) 1 km", "B) 2 km", "C) 3 km", "D) 4 km"],
    answer: "B",
    explanation: "N3→E4→S3→W2. Net East=4−2=2km East. Net North=3−3=0. Distance from A = 2 km."
  },

  {
    id: 5209, section: "Reasoning",
    text: "If South-East becomes North, North-East becomes West, then what does West become?",
    options: ["A) North-East", "B) South-East", "C) South-West", "D) North-West"],
    answer: "B",
    explanation: "SE→N is a 135° anticlockwise rotation. NE→W confirms same 135° rotation. W rotated 135° anticlockwise = South-East."
  },

  {
    id: 5210, section: "Reasoning",
    text: "Sachin walks 20 m North, then 15 m East, then 20 m South, then 5 m West. How far and in which direction is he from his start?",
    options: ["A) 10 m East", "B) 10 m West", "C) 15 m East", "D) 5 m West"],
    answer: "A",
    explanation: "North 20 and South 20 cancel. East 15 − West 5 = 10 m East. He is 10 m East of start."
  }

];

var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
