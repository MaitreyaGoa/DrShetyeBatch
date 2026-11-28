// session_28nov_pretest.js – Dr Shetye Academic Programme
// 28–29 Nov 2026 Weekend Session · Task 1 · Pre-Test
// 20 Questions · 20 Marks · 25 Minutes · No negative marking · IDs 21601–21620
// Maths Q1–5 | Reasoning Q6–10 | English Q11–15 | Konkani Q16–20 · Moderate level
// Five options per question (E = None of the above). Every explanation carries a 📘 Learning tip.

var questions = [

  // ════════════════════════════════════════════════════════════
  // SECTION: Maths
  // ════════════════════════════════════════════════════════════
  {
    id: 21601, section: "Maths",
    text: "A shopkeeper marks an article 40% above its cost price and then allows a discount of 15% on the marked price. What is his profit percentage?",
    options: ["25%", "19%", "21%", "17%", "None of the above"],
    answer: "B",
    explanation: "Take CP = ₹100. Marked price = ₹140. Selling price = 140 × 0.85 = ₹119. Profit = 119 − 100 = ₹19, so profit = 19%.<br/>📘 <b>Learning:</b> Mark-up and discount are successive percentage changes, so never just subtract (40 − 15 = 25% is the trap). Multiply the factors: 1.40 × 0.85 = 1.19 → 19% profit."
  },
  {
    id: 21602, section: "Maths",
    text: "A can finish a work in 12 days and B can finish it in 18 days. They work together for 4 days, after which A leaves. In how many more days will B finish the remaining work?",
    options: ["6 days", "10 days", "9 days", "8 days", "None of the above"],
    answer: "D",
    explanation: "Take total work = LCM(12, 18) = 36 units. A does 3 units/day and B does 2 units/day. Together in 4 days: (3 + 2) × 4 = 20 units. Remaining = 36 − 20 = 16 units. B alone: 16 ÷ 2 = 8 days.<br/>📘 <b>Learning:</b> The LCM method avoids fractions: total work = LCM of the days, and each person's efficiency = total ÷ their days."
  },
  {
    id: 21603, section: "Maths",
    text: "The average of 5 numbers is 42. When one number is removed, the average of the remaining 4 numbers becomes 40. What is the number that was removed?",
    options: ["50", "48", "42", "52", "None of the above"],
    answer: "A",
    explanation: "Sum of 5 numbers = 5 × 42 = 210. Sum of 4 numbers = 4 × 40 = 160. Removed number = 210 − 160 = 50.<br/>📘 <b>Learning:</b> In average questions, convert averages to totals first (Sum = Average × Count). Then add or remove items and divide again."
  },
  {
    id: 21604, section: "Maths",
    text: "A sum of money at simple interest amounts to ₹7,200 in 3 years and to ₹8,400 in 5 years. What is the rate of interest per annum?",
    options: ["10%", "12%", "11 1/9 %", "12 1/2 %", "None of the above"],
    answer: "C",
    explanation: "Interest for 2 years (year 3 to year 5) = 8400 − 7200 = ₹1,200, so SI per year = ₹600. Principal = 7200 − 3 × 600 = ₹5,400. Rate = (600 ÷ 5400) × 100 = 11 1/9 %.<br/>📘 <b>Learning:</b> Under simple interest, the interest is the same every year. The difference between two amounts ÷ the difference in years = one year's interest."
  },
  {
    id: 21605, section: "Maths",
    text: "A train 240 m long passes a signal pole in 12 seconds. How long will it take to cross a platform 360 m long?",
    options: ["18 seconds", "30 seconds", "24 seconds", "36 seconds", "None of the above"],
    answer: "B",
    explanation: "Speed = 240 ÷ 12 = 20 m/s. To cross the platform the train covers its own length plus the platform: 240 + 360 = 600 m. Time = 600 ÷ 20 = 30 seconds.<br/>📘 <b>Learning:</b> Crossing a pole or a person means distance = train length. Crossing a platform or a bridge means distance = train length + platform length."
  },

  // ════════════════════════════════════════════════════════════
  // SECTION: Reasoning
  // ════════════════════════════════════════════════════════════
  {
    id: 21606, section: "Reasoning",
    text: "Find the next term in the series: 3, 8, 18, 38, 78, ?",
    options: ["158", "156", "148", "160", "None of the above"],
    answer: "A",
    explanation: "Each term = previous × 2 + 2: 3×2+2 = 8, 8×2+2 = 18, 18×2+2 = 38, 38×2+2 = 78, 78×2+2 = 158.<br/>📘 <b>Learning:</b> If the differences (5, 10, 20, 40) keep doubling, look for a '× 2 + something' rule. Doubling differences point to a multiply-and-add pattern."
  },
  {
    id: 21607, section: "Reasoning",
    text: "In a certain code, TABLE is written as UBCMF. How is CHAIR written in that code?",
    options: ["DGBJS", "BIBHS", "DIBJS", "DIBKS", "None of the above"],
    answer: "C",
    explanation: "Each letter moves one step forward: T→U, A→B, B→C, L→M, E→F. So C→D, H→I, A→B, I→J, R→S, giving DIBJS.<br/>📘 <b>Learning:</b> Check the shift letter by letter for the first two or three letters before applying it. Remember the positions E5, J10, O15, T20, Y25 to count shifts quickly."
  },
  {
    id: 21608, section: "Reasoning",
    text: "Pointing to a young man, Riya says, \"He is the son of my grandfather's only son.\" How is the young man related to Riya?",
    options: ["Cousin", "Uncle", "Nephew", "Brother", "None of the above"],
    answer: "D",
    explanation: "Riya's grandfather's only son is Riya's father. The son of Riya's father is Riya's brother.<br/>📘 <b>Learning:</b> Solve blood relations from the end of the sentence backwards ('my grandfather's only son' = my father) and replace each phrase with one relation."
  },
  {
    id: 21609, section: "Reasoning",
    text: "Ravi walks 10 km towards North, turns right and walks 6 km, then turns right again and walks 4 km. How far is he from the starting point, and in which direction?",
    options: ["10 km, North-East", "6√2 km, North-East", "6√2 km, North-West", "8 km, East", "None of the above"],
    answer: "B",
    explanation: "Going North 10 km and then South 4 km leaves him 6 km North of the start. The right turn after facing North sends him East 6 km. So he is 6 km North and 6 km East: distance = √(6² + 6²) = 6√2 ≈ 8.49 km, towards the North-East.<br/>📘 <b>Learning:</b> Draw a rough sketch. Net out opposite directions first (N − S, E − W), then use Pythagoras on the two remaining legs."
  },
  {
    id: 21610, section: "Reasoning",
    text: "Statements: All pens are books. Some books are bags.<br/>Conclusions: I. Some pens are bags. II. Some bags are books.<br/>Which conclusion(s) follow?",
    options: ["Only I follows", "Both I and II follow", "Only II follows", "Neither I nor II follows", "None of the above"],
    answer: "C",
    explanation: "II is just 'Some books are bags' reversed, and a 'some' statement can always be reversed, so II follows. The bags that are books need not be the pens, so I is only a possibility and does not follow.<br/>📘 <b>Learning:</b> 'Some A are B' can be converted to 'Some B are A'. Two statements linked only through a 'some' do not give a definite conclusion."
  },

  // ════════════════════════════════════════════════════════════
  // SECTION: English
  // ════════════════════════════════════════════════════════════
  {
    id: 21611, section: "English",
    text: "Choose the word closest in meaning to METICULOUS.",
    options: ["Very careful and precise", "Careless", "Timid", "Generous", "None of the above"],
    answer: "A",
    explanation: "Meticulous means showing great attention to detail, very careful and precise. Example: She keeps meticulous records of her accounts.<br/>📘 <b>Learning:</b> Learn words in pairs of opposites: meticulous vs careless, frugal vs lavish, candid vs secretive."
  },
  {
    id: 21612, section: "English",
    text: "Fill in the blank: Neither the teacher nor the students ______ present in the hall.",
    options: ["was", "is", "has been", "were", "None of the above"],
    answer: "D",
    explanation: "With 'neither … nor' and 'either … or', the verb agrees with the subject nearer to it. Here the nearer subject is 'the students' (plural), so the verb is 'were'.<br/>📘 <b>Learning:</b> This is the proximity rule, and it is tested often in GSSC papers. Compare: 'Neither the students nor the teacher was present.'"
  },
  {
    id: 21613, section: "English",
    text: "Choose the correct meaning of the idiom: To burn the midnight oil",
    options: ["To waste money", "To get very angry", "To work or study late into the night", "To start a quarrel", "None of the above"],
    answer: "C",
    explanation: "'To burn the midnight oil' means to work or study late at night. Example: Before the exam, Sneha burnt the midnight oil every day.<br/>📘 <b>Learning:</b> Many idioms come from old practices. People once worked by oil lamps, so 'burning oil at midnight' meant working late."
  },
  {
    id: 21614, section: "English",
    text: "Choose the word OPPOSITE in meaning to SCARCE.",
    options: ["Abundant", "Rare", "Limited", "Insufficient", "None of the above"],
    answer: "A",
    explanation: "Scarce means in short supply. Its opposite is abundant (plentiful). Rare, limited and insufficient are all close to scarce in meaning, so they are synonyms, not antonyms.<br/>📘 <b>Learning:</b> In antonym questions, the options often include synonyms as traps. Cross out every option that means the same as the given word first."
  },
  {
    id: 21615, section: "English",
    text: "Choose the correct passive form of: The committee will announce the results tomorrow.",
    options: ["The results would be announced by the committee tomorrow.", "The results are announced by the committee tomorrow.", "The results will announced by the committee tomorrow.", "The results will be announced by the committee tomorrow.", "None of the above"],
    answer: "D",
    explanation: "Simple future active (will + verb) becomes 'will be + past participle' in the passive: will announce → will be announced. The object 'the results' becomes the subject.<br/>📘 <b>Learning:</b> Keep the tense the same when converting. Only the structure changes: will + V1 → will be + V3; is/am/are + V-ing → is/am/are being + V3."
  },

  // ════════════════════════════════════════════════════════════
  // SECTION: Konkani
  // ════════════════════════════════════════════════════════════
  {
    id: 21616, section: "Konkani",
    text: "'आकाश' ह्या उतराक समानार्थी कोंकणी उतर कितें?",
    options: ["धर्तरी", "गगन", "दर्यो", "वारें", "None of the above"],
    answer: "B",
    explanation: "आकाश म्हळ्यार गगन (आभाळ). धर्तरी = पृथ्वी, दर्यो = समुद्र, वारें = हवा.<br/>📘 <b>Learning:</b> समानार्थी उतरां जोडयेन लक्षांत दवरात: आकाश – गगन, उजो – अग्नी, न्हंय – नदी, दर्यो – समुद्र, फुल – पुश्प."
  },
  {
    id: 21617, section: "Konkani",
    text: "'थंड' ह्या उतराक विरुद्धार्थी कोंकणी उतर कितें?",
    options: ["हून", "गार", "ओलें", "सुकें", "None of the above"],
    answer: "A",
    explanation: "थंड हाचें विरुद्धार्थी उतर हून. गार हें थंड हाचेंच समानार्थी उतर. ओलें – सुकें ही एक वेगळीच विरुद्धार्थी जोडी.<br/>📘 <b>Learning:</b> विरुद्धार्थी प्रस्नांत समानार्थी उतर (गार) सापळो म्हूण दिल्लें आसता. विरुद्धार्थी जोडयो: थंड – हून, उजवाड – काळोख, लागीं – पयस, भितर – भायर."
  },
  {
    id: 21618, section: "Konkani",
    text: "'रगताचें उदक करप' ह्या वाक्प्रचाराचो अर्थ कितें?",
    options: ["भांडप", "रगत दान करप", "उदक पियेवप", "खूब कश्ट करप", "None of the above"],
    answer: "D",
    explanation: "रगताचें उदक करप म्हळ्यार खूब कश्ट करप.<br/>📘 <b>Learning:</b> वाक्प्रचाराचो अर्थ शब्दशः घेवचो न्हय. ताचो लाक्षणीक अर्थ लक्षांत दवरात: हात आखडप = कंजूसपण करप, नाक कापप = अपमान करप, तोंडांत बोट घालप = अजाप जावप."
  },
  {
    id: 21619, section: "Konkani",
    text: "'Office' ह्या इंग्लीश उतराक पारिभाशीक कोंकणी उतर कितें?",
    options: ["खातें", "पावती", "कार्यालय", "समिती", "None of the above"],
    answer: "C",
    explanation: "Office = कार्यालय. Department = खातें, Receipt = पावती, Committee = समिती.<br/>📘 <b>Learning:</b> सरकारी कारभारांतलीं पारिभाशीक उतरां GSSC परिक्षेंत सदांच विचारतात: Application – अर्ज, Certificate – दाखलो, Salary – पगार, Meeting – बसका, Election – वेंचणूक."
  },
  {
    id: 21620, section: "Konkani",
    text: "फुडल्या उतरां मदलें वेगळें उतर वळखात.",
    options: ["आंबो", "बटाटो", "पणस", "केळें", "None of the above"],
    answer: "B",
    explanation: "आंबो, पणस आनी केळें हीं फळां. बटाटो ही भाजी, देखून तें वेगळें उतर.<br/>📘 <b>Learning:</b> 'वेगळें उतर' प्रस्नांत पयलीं सगळ्या उतरांचो गट (फळां, भाजी, मोनजात, दीस, म्हयने) थारायात आनी मागीर गटा भायलें उतर सोदात."
  }
];
