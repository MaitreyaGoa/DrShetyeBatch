// ============================================================
// Dr Shetye Academic Program
// Reasoning Part Test – Difficult Level
// 10 Questions / 10 Marks / 10 Minutes
// SSC CGL Difficult Level – All answers verified
// ============================================================
var questions = [

  {
    id: 901, section: "Reasoning",
    text: "Find the missing term in the series: 2, 3, 6, 7, 14, 15, ?",
    options: ["28", "30", "31", "32"],
    answer: "B",
    explanation: "Pattern alternates: ×2 then +1. 2×2=4? No. Pattern: +1, ×2, +1, ×2... 2→3(+1)→6(×2)→7(+1)→14(×2)→15(+1)→30(×2). Answer = 30."
  },
  {
    id: 902, section: "Reasoning",
    text: "ACE : FHJ :: MOQ : ?",
    options: ["RTV", "STV", "RST", "TVX"],
    answer: "A",
    explanation: "ACE has letters with gap of 1 (A,C,E). FHJ = ACE shifted +5 (F,H,J). Similarly MOQ shifted +5 = R,T,V → RTV."
  },
  {
    id: 903, section: "Reasoning",
    text: "In a code language:\n'sky is blue' = 'pit na ja'\n'blue is beautiful' = 'ja na sa'\n'sky looks beautiful' = 'pit sa ro'\nWhat is the code for 'looks'?",
    options: ["pit", "sa", "ro", "na"],
    answer: "C",
    explanation: "sky=pit (common in 1&3). beautiful=sa (common in 2&3). blue=ja, is=na (common in 1&2). In sentence 3: pit=sky, sa=beautiful → remaining 'looks' = ro."
  },
  {
    id: 904, section: "Reasoning",
    text: "A man pointing to a photograph says 'The father of the man in this photograph is the only son of my grandfather.' How is the man in the photograph related to him?",
    options: ["Uncle", "Father", "Brother", "Son"],
    answer: "C",
    explanation: "Only son of his grandfather = his own father. Father of the man in photo = his father. So the man in the photo shares the same father → he is his Brother."
  },
  {
    id: 905, section: "Reasoning",
    text: "Eight persons A, B, C, D, E, F, G, H sit in a straight line facing North. D is 3rd from right. B is 3rd to the left of D. C and F are immediate neighbours of B. E is to the immediate right of D. G and H are at the ends. A is not at either end. What is the position of A from the left?",
    options: ["3rd", "4th", "5th", "6th"],
    answer: "C",
    explanation: "D=6th from left. B=3rd from left. E=7th. G & H at ends (1st & 8th). C & F are at 2nd & 4th. Remaining position for A (not at end) = 5th. A is 5th from left."
  },
  {
    id: 906, section: "Reasoning",
    text: "A man starts from point P, walks 8 km East, turns Left and walks 6 km, turns Left again and walks 12 km, turns Right and walks 4 km, then turns Right and walks 4 km. How far and in which direction is he from starting point P?",
    options: ["10 km North-West", "10 km North", "6 km North-West", "10 km North-East"],
    answer: "B",
    explanation: "Start (0,0) → 8E=(8,0) → Turn Left(North) 6km=(8,6) → Turn Left(West) 12km=(−4,6) → Turn Right(North) 4km=(−4,10) → Turn Right(East) 4km=(0,10). Distance from origin = 10 km due North."
  },
  {
    id: 907, section: "Reasoning",
    text: "Statements:\nAll flowers are trees.\nSome trees are houses.\nNo house is a building.\nConclusions:\nI. Some flowers are houses.\nII. No building is a tree.\nIII. Some trees are not buildings.\nWhich conclusion(s) follow?",
    options: ["Only III follows", "Only I and III follow", "Only II and III follow", "All follow"],
    answer: "A",
    explanation: "I: All flowers→trees + Some trees→houses. Cannot conclude flowers are houses ✗. II: Cannot conclude ALL trees are not buildings ✗. III: Some trees are houses + No house is building → Some trees are not buildings ✓. Only III follows."
  },
  {
    id: 908, section: "Reasoning",
    text: "If A means +, B means −, C means ×, D means ÷, find the value of:\n8 C 4 A 12 B 6 D 2",
    options: ["38", "41", "44", "47"],
    answer: "B",
    explanation: "Replace symbols: 8×4 + 12 − 6÷2 = 32 + 12 − 3 = 41."
  },
  {
    id: 909, section: "Reasoning",
    text: "What is the value of x?\nStatement I: x² − 5x + 6 = 0\nStatement II: x is a prime number.\nA) Statement I alone is sufficient\nB) Statement II alone is sufficient\nC) Both statements together are sufficient\nD) Neither is sufficient",
    options: ["Statement I alone is sufficient", "Statement II alone is sufficient", "Both statements together are sufficient", "Neither is sufficient"],
    answer: "D",
    explanation: "From I: x=2 or x=3. From II: x is prime. Both 2 and 3 are prime numbers — so even together they don't give a unique value. Neither is sufficient."
  },
  {
    id: 910, section: "Reasoning",
    text: "Statement: 'The best way to reduce traffic congestion is to increase fuel prices.'\nWhich of the following, if true, most WEAKENS the argument?",
    options: ["Higher fuel prices reduce discretionary travel.", "Many commuters have no alternative to driving as public transport is inadequate.", "Fuel prices have risen 30% in the last 3 years.", "Traffic congestion is highest during office hours."],
    answer: "B",
    explanation: "If commuters have no alternative to driving, increasing fuel prices will not reduce driving and therefore will NOT reduce congestion. Option B directly weakens the argument."
  }

];
