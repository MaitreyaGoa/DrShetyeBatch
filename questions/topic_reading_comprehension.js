// ============================================================
// Dr. Shetye Academic Program — Topic: Reading Comprehension
// Subject: English | 15 Questions (3 passages × 5 Qs)
// ============================================================

var PASSAGE_RC1 = "Passage 1: The Internet has revolutionised the way people communicate, work, and access information. While it has brought the world closer together and created new economic opportunities, it has also raised serious concerns about privacy, misinformation, and digital addiction. Studies show that excessive use of social media is linked to increased anxiety and reduced attention spans, particularly among young people. Governments and organisations worldwide are now grappling with how to regulate the digital space without compromising freedom of expression.";

var PASSAGE_RC2 = "Passage 2: Forests are often called the lungs of the Earth because they absorb carbon dioxide and release oxygen. They are home to more than 80% of the world's terrestrial biodiversity. However, deforestation for agriculture, logging, and urban expansion has drastically reduced forest cover globally. Scientists warn that if current deforestation rates continue, many species will face extinction, and the planet's ability to regulate its own climate will be severely compromised.";

var PASSAGE_RC3 = "Passage 3: Physical exercise is not merely a tool for weight management; it is a cornerstone of overall well-being. Regular physical activity strengthens the cardiovascular system, improves mental health by releasing endorphins, and reduces the risk of chronic diseases such as diabetes and hypertension. Despite these well-documented benefits, modern sedentary lifestyles driven by desk jobs and digital entertainment have made physical inactivity a global health crisis. Health experts recommend at least 150 minutes of moderate exercise per week for adults.";

var questions = [
  // Passage 1 Questions
  {
    id: 7401, section: "English",
    passage: PASSAGE_RC1,
    text: "According to Passage 1, what is one major concern raised by the Internet?",
    options: ["A) Reduced economic opportunities", "B) Increased physical illnesses", "C) Privacy and misinformation", "D) Language barriers"],
    answer: "C",
    explanation: "The passage explicitly states that the Internet 'has also raised serious concerns about privacy, misinformation, and digital addiction'."
  },
  {
    id: 7402, section: "English",
    passage: PASSAGE_RC1,
    text: "What does the passage say about social media use among young people?",
    options: ["A) It improves academic performance", "B) It is linked to anxiety and reduced attention spans", "C) It has no significant effect", "D) It increases creativity"],
    answer: "B",
    explanation: "The passage states: 'excessive use of social media is linked to increased anxiety and reduced attention spans, particularly among young people'."
  },
  {
    id: 7403, section: "English",
    passage: PASSAGE_RC1,
    text: "What challenge are governments facing according to Passage 1?",
    options: ["A) Building better infrastructure", "B) Reducing Internet costs", "C) Regulating the digital space without limiting free speech", "D) Training digital educators"],
    answer: "C",
    explanation: "The passage says governments are 'grappling with how to regulate the digital space without compromising freedom of expression'."
  },
  {
    id: 7404, section: "English",
    passage: PASSAGE_RC1,
    text: "The word 'grappling' in Passage 1 most nearly means:",
    options: ["A) Ignoring", "B) Struggling to deal with", "C) Successfully resolving", "D) Avoiding"],
    answer: "B",
    explanation: "'Grappling with' means struggling to deal with or overcome a difficult problem."
  },
  {
    id: 7405, section: "English",
    passage: PASSAGE_RC1,
    text: "Which title best describes Passage 1?",
    options: ["A) The History of the Internet", "B) Social Media and Teenagers", "C) Benefits and Challenges of the Internet Age", "D) Government Regulation of Technology"],
    answer: "C",
    explanation: "The passage covers both benefits (connectivity, economic opportunity) and challenges (privacy, misinformation, addiction) of the Internet, making option C the most comprehensive title."
  },
  // Passage 2 Questions
  {
    id: 7406, section: "English",
    passage: PASSAGE_RC2,
    text: "Why are forests compared to 'lungs of the Earth' in Passage 2?",
    options: ["A) They breathe like humans", "B) They absorb carbon dioxide and release oxygen", "C) They support animal life", "D) They regulate water cycles"],
    answer: "B",
    explanation: "The passage states forests 'absorb carbon dioxide and release oxygen', which is why they are called the lungs of the Earth."
  },
  {
    id: 7407, section: "English",
    passage: PASSAGE_RC2,
    text: "What percentage of terrestrial biodiversity do forests support, according to Passage 2?",
    options: ["A) 60%", "B) 70%", "C) 75%", "D) 80%"],
    answer: "D",
    explanation: "The passage states forests are 'home to more than 80% of the world's terrestrial biodiversity'."
  },
  {
    id: 7408, section: "English",
    passage: PASSAGE_RC2,
    text: "What are the causes of deforestation mentioned in Passage 2?",
    options: ["A) Pollution and tourism", "B) Agriculture, logging, and urban expansion", "C) Natural disasters and climate change", "D) Mining and warfare"],
    answer: "B",
    explanation: "The passage mentions 'agriculture, logging, and urban expansion' as the causes of deforestation."
  },
  {
    id: 7409, section: "English",
    passage: PASSAGE_RC2,
    text: "What do scientists warn about continuing deforestation rates?",
    options: ["A) Increased rainfall", "B) Improved soil quality", "C) Species extinction and climate regulation problems", "D) Greater agricultural yields"],
    answer: "C",
    explanation: "Scientists warn that 'many species will face extinction, and the planet's ability to regulate its own climate will be severely compromised'."
  },
  {
    id: 7410, section: "English",
    passage: PASSAGE_RC2,
    text: "The word 'compromised' in Passage 2 most nearly means:",
    options: ["A) Improved", "B) Weakened or damaged", "C) Agreed upon", "D) Measured"],
    answer: "B",
    explanation: "'Compromised' here means weakened, damaged, or made vulnerable."
  },
  // Passage 3 Questions
  {
    id: 7411, section: "English",
    passage: PASSAGE_RC3,
    text: "According to Passage 3, what does physical exercise do for mental health?",
    options: ["A) It reduces hunger", "B) It releases endorphins, improving mental health", "C) It increases stress levels", "D) It improves vision"],
    answer: "B",
    explanation: "The passage states exercise 'improves mental health by releasing endorphins'."
  },
  {
    id: 7412, section: "English",
    passage: PASSAGE_RC3,
    text: "Which diseases does Passage 3 say regular exercise reduces the risk of?",
    options: ["A) Cancer and arthritis", "B) Malaria and typhoid", "C) Diabetes and hypertension", "D) Asthma and bronchitis"],
    answer: "C",
    explanation: "The passage mentions 'reduces the risk of chronic diseases such as diabetes and hypertension'."
  },
  {
    id: 7413, section: "English",
    passage: PASSAGE_RC3,
    text: "What has made physical inactivity a global health crisis, according to Passage 3?",
    options: ["A) Lack of open spaces", "B) Poor nutrition habits", "C) Sedentary lifestyles driven by desk jobs and digital entertainment", "D) Increasing population"],
    answer: "C",
    explanation: "The passage identifies 'modern sedentary lifestyles driven by desk jobs and digital entertainment' as the cause."
  },
  {
    id: 7414, section: "English",
    passage: PASSAGE_RC3,
    text: "How much exercise do health experts recommend for adults per week, according to Passage 3?",
    options: ["A) 100 minutes", "B) 120 minutes", "C) 150 minutes", "D) 200 minutes"],
    answer: "C",
    explanation: "The passage states: 'Health experts recommend at least 150 minutes of moderate exercise per week for adults'."
  },
  {
    id: 7415, section: "English",
    passage: PASSAGE_RC3,
    text: "The word 'cornerstone' in Passage 3 most nearly means:",
    options: ["A) A building block", "B) A minor detail", "C) A fundamental or essential part", "D) A recent discovery"],
    answer: "C",
    explanation: "'Cornerstone' means a fundamental or central part of something — the most important part."
  }
];
var ANSWER_KEY = {};
questions.forEach(function(q) { ANSWER_KEY[q.id] = q.answer; });
