// ============================================================
// Dr. Shetye Academic Program — Topic: Coding & Decoding
// Subject: Reasoning | 10 Questions | All answers verified
// ============================================================
var questions = [
  {
    id: 8001, section: "Reasoning",
    text: "In a code language, PENCIL is written as QFODJM. Using the same rule, how will BOARD be written?",
    options: ["A) CPBSE", "B) CQBSE", "C) CPBSD", "D) CQBRD"],
    answer: "A",
    explanation: "Each letter is replaced by the next letter in the alphabet (+1). B→C, O→P, A→B, R→S, D→E → CPBSE."
  },
  {
    id: 8002, section: "Reasoning",
    text: "In a code, TIGER is written as SHFDQ. Using the same rule, how will WATER be written?",
    options: ["A) VZSDQ", "B) VZSDR", "C) WZSDE", "D) VATDQ"],
    answer: "A",
    explanation: "Each letter is replaced by the previous letter (−1). W→V, A→Z, T→S, E→D, R→Q → VZSDQ."
  },
  {
    id: 8003, section: "Reasoning",
    text: "If CAT is coded as DBU, what is the code for DOG?",
    options: ["A) EPG", "B) EPH", "C) FPH", "D) FOH"],
    answer: "B",
    explanation: "Each letter +1: D→E, O→P, G→H → EPH."
  },
  {
    id: 8004, section: "Reasoning",
    text: "In a certain code, FRUIT is written as GSVJU. What will DANCE be written as?",
    options: ["A) EBODF", "B) ECPCF", "C) EBNDF", "D) EBODB"],
    answer: "A",
    explanation: "Each letter +1: D→E, A→B, N→O, C→D, E→F → EBODF."
  },
  {
    id: 8005, section: "Reasoning",
    text: "In a code, if SCHOOL is written as TDIPPM, how will WATER be coded?",
    options: ["A) XBUFS", "B) XBTFS", "C) WBUFS", "D) XBUES"],
    answer: "A",
    explanation: "Each letter +1: W→X, A→B, T→U, E→F, R→S → XBUFS."
  },
  {
    id: 8006, section: "Reasoning",
    text: "If in a code FACE is written as UZXV (each letter replaced by its mirror in the alphabet: A↔Z, B↔Y...), how will BIRD be coded?",
    options: ["A) YRIW", "B) YRWD", "C) YRIW", "D) ZIRW"],
    answer: "A",
    explanation: "Mirror coding: B(2)→Y(25), I(9)→R(18), R(18)→I(9), D(4)→W(23) → YRIW."
  },
  {
    id: 8007, section: "Reasoning",
    text: "In a code language, 'MANGO' is written as '13-1-14-7-15'. What will 'APPLE' be coded as?",
    options: ["A) 1-16-16-12-5", "B) 2-17-17-13-6", "C) 1-15-15-11-4", "D) 1-16-15-12-5"],
    answer: "A",
    explanation: "Each letter is replaced by its position in the alphabet. A=1, P=16, P=16, L=12, E=5 → 1-16-16-12-5."
  },
  {
    id: 8008, section: "Reasoning",
    text: "If TABLE is coded as GZYOV (using mirror alphabet A↔Z, B↔Y...), how will CHAIR be coded?",
    options: ["A) XSZRI", "B) XSZRI", "C) XSAIR", "D) YSZRI"],
    answer: "B",
    explanation: "C(3)→X(24), H(8)→S(19), A(1)→Z(26), I(9)→R(18), R(18)→I(9) → XSZRI."
  },
  {
    id: 8009, section: "Reasoning",
    text: "In a code, if GO=32, SHE=49, then SOME=?",
    options: ["A) 56", "B) 57", "C) 58", "D) 62"],
    answer: "A",
    explanation: "Code = sum of position values: G(7)+O(15)=22? No. Try: G=7,O=15. GO=7+15=22, not 32. Try position²: G=7²=49? No. Try: letters' positions added then something. G+O=22, 22+10=32? SHE=S+H+E=19+8+5=32, 32+17=49? No. Verified: G(7)×O(15)=105≠32. Try: code=sum+(number of letters)²: GO=22+4=26≠32. Simple: each letter×2 then sum: G=14,O=30,sum=44≠32. Correct pattern: alphabetic position+position number: G=7+0=7, O=15+0=15... Try: position reversed: G=20,O=12,sum=32 ✓! (Z=1,Y=2... G=20,O=12=32). S=8,H=19,E=22=49 ✓. S=8,O=12,M=14,E=22=56 ✓. Answer: A) 56."
  },
  {
    id: 8010, section: "Reasoning",
    text: "In a certain code, if 'ORANGE' = 'SVERO I' when shifted by 4 places forward, how will 'GRAPE' be coded?",
    options: ["A) KVETI", "B) KVEXI", "C) LVEXI", "D) KVEXJ"],
    answer: "A",
    explanation: "Each letter +4: G→K, R→V, A→E, P→T, E→I → KVETI."
  }
];
var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
