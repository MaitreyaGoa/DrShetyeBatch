// ============================================================
// Dr. Shetye Academic Program — Topic Test: Profit & Loss
// Subject: Maths | 10 Questions | All answers verified
// ============================================================

var questions = [

  {
    id: 3001, section: "Maths",
    text: "A shopkeeper buys an article for ₹200 and sells it for ₹250. What is his profit percentage?",
    options: ["A) 20%", "B) 25%", "C) 30%", "D) 15%"],
    answer: "B",
    explanation: "Profit = 250−200 = ₹50. Profit% = (50/200)×100 = 25%."
  },

  {
    id: 3002, section: "Maths",
    text: "An article is bought for ₹500 and sold at a loss of 15%. What is the selling price?",
    options: ["A) ₹400", "B) ₹415", "C) ₹425", "D) ₹435"],
    answer: "C",
    explanation: "SP = CP×(1−15/100) = 500×0.85 = ₹425."
  },

  {
    id: 3003, section: "Maths",
    text: "The marked price of an article is ₹600. A discount of 20% is offered. What is the selling price?",
    options: ["A) ₹460", "B) ₹470", "C) ₹480", "D) ₹490"],
    answer: "C",
    explanation: "SP = MP×(1−20/100) = 600×0.80 = ₹480."
  },

  {
    id: 3004, section: "Maths",
    text: "By selling an article for ₹750, a trader gains 25%. What was the cost price?",
    options: ["A) ₹550", "B) ₹575", "C) ₹600", "D) ₹625"],
    answer: "C",
    explanation: "CP = SP/(1+25/100) = 750/1.25 = ₹600."
  },

  {
    id: 3005, section: "Maths",
    text: "A man sells two articles at ₹660 each — gaining 10% on one and losing 10% on the other. What is his overall result?",
    options: ["A) 1% Gain", "B) No gain no loss", "C) 1% Loss", "D) 2% Loss"],
    answer: "C",
    explanation: "When SP is equal and gain% = loss%, there is always a net loss = (10²)/100 = 1% loss."
  },

  {
    id: 3006, section: "Maths",
    text: "A dealer marks his goods 40% above cost price and allows a 25% discount. What is his profit or loss percentage?",
    options: ["A) 5% Profit", "B) 5% Loss", "C) 10% Profit", "D) 15% Loss"],
    answer: "A",
    explanation: "SP = CP×1.40×0.75 = CP×1.05. Profit = 5%."
  },

  {
    id: 3007, section: "Maths",
    text: "A trader buys goods for ₹1,200 and spends ₹200 on transport. He sells at 20% profit on total cost. Find the selling price.",
    options: ["A) ₹1,560", "B) ₹1,620", "C) ₹1,680", "D) ₹1,720"],
    answer: "C",
    explanation: "Total cost = 1200+200 = ₹1400. SP = 1400×1.20 = ₹1,680."
  },

  {
    id: 3008, section: "Maths",
    text: "A dishonest trader uses a weight of 900 grams instead of 1 kg while selling. What is his actual profit percentage?",
    options: ["A) 9%", "B) 10%", "C) 11.11%", "D) 12.5%"],
    answer: "C",
    explanation: "He gives 900g but charges for 1000g. Profit% = (100/900)×100 = 11.11%."
  },

  {
    id: 3009, section: "Maths",
    text: "By selling an article for ₹840, a person incurs a loss of 16%. What was the cost price?",
    options: ["A) ₹950", "B) ₹980", "C) ₹1,000", "D) ₹1,050"],
    answer: "C",
    explanation: "CP = SP/(1−16/100) = 840/0.84 = ₹1,000."
  },

  {
    id: 3010, section: "Maths",
    text: "A person sells 12 articles at the cost price of 9 articles. What is his loss percentage?",
    options: ["A) 20%", "B) 25%", "C) 33.33%", "D) 15%"],
    answer: "B",
    explanation: "SP of 12 = CP of 9. SP per article = 9CP/12 = 3CP/4. Loss = CP/4. Loss% = (1/4)×100 = 25%."
  }

];

var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
