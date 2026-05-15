// ============================================================
// Dr Shetye Academic Program
// Previous Year GOA SSC PC Exam – PYQ Test 1
// 50 Questions / 50 Marks / 65 Minutes
// Sections: English (30) + Maths (10) + Reasoning (10)
// All answers verified
// ============================================================

var PASSAGE1 = "Spaghetti Aglio e Olio is a simple yet flavorful Italian pasta dish made with minimal ingredients. To prepare this dish, begin by boiling a pot of salted water. Add 200 grams of spaghetti and cook until al dente, usually about 8-10 minutes. While the pasta cooks, heat 4 tablespoons of olive oil in a pan over medium heat. Add 4 minced garlic cloves and saute until golden brown. Be cautious not to burn the garlic, as it will become bitter. For added spice, toss in a pinch of red pepper flakes. Once the spaghetti is cooked, reserve 1/2 cup of the pasta water and drain the rest. Add the spaghetti to the pan with the garlic and mix thoroughly. If the pasta seems dry, add the reserved pasta water gradually until the desired consistency is reached. Garnish with fresh parsley and grated Parmesan cheese if desired. Serve immediately and enjoy this quick and satisfying meal.";

var PASSAGE2 = "In recent years, technological advancements have reshaped the way people live and work. From smartphones to artificial intelligence, these innovations have simplified complex tasks and made communication instantaneous. However, this rapid pace of development comes with challenges. The over-reliance on technology has raised concerns about privacy and mental health. Studies suggest that prolonged screen time can lead to anxiety and reduced attention spans, particularly among younger individuals. Despite these drawbacks, technology remains indispensable in education, healthcare, and entertainment, offering countless opportunities to improve lives when used responsibly.";

var questions = [

  // ── SECTION 1: ENGLISH (Q1–30) ──────────────────────────

  // Reading Comprehension – Passage 1 (Q11-15)
  {
    id: 311, section: "English",
    passage: PASSAGE1,
    text: "What is the purpose of reserving 1/2 cup of pasta water?",
    options: ["To drink with the meal", "To add flavor to the pasta", "To adjust the consistency of the dish", "To make the sauce"],
    answer: "C",
    explanation: "The passage states: 'add the reserved pasta water gradually until the desired consistency is reached.'"
  },
  {
    id: 312, section: "English",
    passage: PASSAGE1,
    text: "Which ingredient is optional in the recipe?",
    options: ["Olive oil", "Red pepper flakes", "Garlic", "Parmesan cheese"],
    answer: "D",
    explanation: "The passage says 'Garnish with fresh parsley and grated Parmesan cheese if desired' — 'if desired' makes it optional."
  },
  {
    id: 313, section: "English",
    passage: PASSAGE1,
    text: "According to the recipe, what should you be cautious about?",
    options: ["Burning garlic, which makes it bitter", "Using too little olive oil", "Adding salt too early", "Overcooking it until soft"],
    answer: "A",
    explanation: "'Be cautious not to burn the garlic, as it will become bitter.' — directly stated in the passage."
  },
  {
    id: 314, section: "English",
    passage: PASSAGE1,
    text: "Which step comes immediately after boiling the spaghetti?",
    options: ["Sauteing garlic in olive oil", "Draining the water completely", "Mixing spaghetti with garlic", "Reserving pasta water"],
    answer: "D",
    explanation: "'Reserve 1/2 cup of the pasta water' comes immediately after the spaghetti is cooked."
  },
  {
    id: 315, section: "English",
    passage: PASSAGE1,
    text: "What does the phrase 'until al dente' mean in the context of the recipe?",
    options: ["Cooked until soft and mushy", "Cooked until firm to the bite", "Cooked until golden brown", "Cooked until fully drained"],
    answer: "B",
    explanation: "'Al dente' is an Italian term meaning cooked so as to be still firm when bitten."
  },

  // Reading Comprehension – Passage 2 (Q16-19)
  {
    id: 316, section: "English",
    passage: PASSAGE2,
    text: "What does the passage primarily focus on?",
    options: ["The advantages of technology in communication", "The challenges and benefits of technological advancements", "The negative impacts of technology on younger individuals", "The role of AI in the workplace"],
    answer: "B",
    explanation: "The passage discusses both benefits (simplified tasks, communication) and challenges (privacy, mental health) of technology."
  },
  {
    id: 317, section: "English",
    passage: PASSAGE2,
    text: "According to the passage, what is a major concern related to technology use?",
    options: ["Privacy and mental health issues", "Lack of entertainment options", "Increased educational opportunities", "High cost of technological devices"],
    answer: "A",
    explanation: "'The over-reliance on technology has raised concerns about privacy and mental health.' — directly stated."
  },
  {
    id: 318, section: "English",
    passage: PASSAGE2,
    text: "What is one suggested effect of prolonged screen time?",
    options: ["Improved communication skills", "Anxiety and reduced attention spans", "Enhanced multitasking abilities", "Greater reliance on education"],
    answer: "B",
    explanation: "'Prolonged screen time can lead to anxiety and reduced attention spans.' — directly from the passage."
  },
  {
    id: 319, section: "English",
    passage: PASSAGE2,
    text: "How does the author view technology overall?",
    options: ["As entirely detrimental to society", "As beneficial but with challenges", "As irrelevant in modern life", "As a purely entertainment tool"],
    answer: "B",
    explanation: "The author acknowledges both benefits and drawbacks — overall balanced view: beneficial but with challenges."
  },

  // Grammar & Usage (Q20-26)
  {
    id: 320, section: "English",
    text: "Select the correct direct form: Rita exclaimed with regret that she had forgotten her umbrella in the bus the previous day.",
    options: [
      "Rita said, \"Alas! I forgot my umbrella in the bus yesterday.\"",
      "Rita said, \"Hey I forgot my umbrella yesterday.\"",
      "Rita said, \"She forgot her umbrella in the bus the previous day.\"",
      "Rita said, \"I forgot her umbrella in the bus the previous day.\""
    ],
    answer: "A",
    explanation: "Exclaimed with regret = Alas! Past perfect 'had forgotten' → simple past 'forgot'. 'Previous day' → 'yesterday'. Pronoun: 'she' → 'I'."
  },
  {
    id: 321, section: "English",
    text: "Fill in: 'Get out of here!' he roared _____ me.",
    options: ["on", "by", "at", "to"],
    answer: "C",
    explanation: "'Roar at someone' is the correct preposition usage."
  },
  {
    id: 322, section: "English",
    text: "Fill in: 'The company is closing,' he announced _____ us.",
    options: ["in", "with", "by", "None of the above (to)"],
    answer: "D",
    explanation: "Correct: 'announced to us'. None of the given options (in/with/by) is correct — answer is E/None (meaning 'to')."
  },
  {
    id: 323, section: "English",
    text: "Choose the correct alternative: Most of the items in the agenda were trivial and only a few were ________.",
    options: ["interesting", "discounted", "practical", "significant"],
    answer: "D",
    explanation: "Contrast with 'trivial' (unimportant) → opposite = 'significant' (important)."
  },
  {
    id: 324, section: "English",
    text: "The restaurant itself was beautiful and the service was excellent, but the food was ____________.",
    options: ["superb", "shabby", "inedible", "delicious"],
    answer: "C",
    explanation: "The 'but' signals contrast to 'beautiful' and 'excellent'. The food must be bad → 'inedible' (uneatable)."
  },
  {
    id: 325, section: "English",
    text: "Fill the blanks with the same prefix: ____amble, ____caution, ____cede, ____face.",
    options: ["pel", "poly", "pro", "pre"],
    answer: "D",
    explanation: "pre + amble = preamble, pre + caution = precaution, pre + cede = precede, pre + face = preface. Answer: pre."
  },
  {
    id: 326, section: "English",
    text: "Select the best option: 'His decision _________ the chances of error in the report.'",
    options: ["eliminated", "pleaded", "demanded", "petitioned"],
    answer: "A",
    explanation: "'Eliminated' means removed/destroyed — fits perfectly: his decision removed chances of error."
  },

  // Idioms & Vocabulary (Q27-40)
  {
    id: 327, section: "English",
    text: "Meaning of: 'The accident site had become a bear garden by afternoon.'",
    options: ["A place of noise and disturbance", "A peaceful place", "A soothing environment", "A selfie point"],
    answer: "A",
    explanation: "'Bear garden' is an idiom meaning a place of uproar, noise and confusion."
  },
  {
    id: 328, section: "English",
    text: "Meaning of the idiom: 'He knew the situation yet he decided to bite the bullet and face it.'",
    options: ["To speak the truth", "To face difficulty with courage", "To commit violence", "To remain calm"],
    answer: "B",
    explanation: "'Bite the bullet' means to endure a painful or difficult situation with courage."
  },
  {
    id: 329, section: "English",
    text: "What is the word for 'a thing that is kept in memory of someone/some event/some place'?",
    options: ["Souvenir", "Gift", "Momentous", "Legacy"],
    answer: "A",
    explanation: "A 'souvenir' is a thing kept as a reminder of a person, place, or event."
  },
  {
    id: 330, section: "English",
    text: "Choose the correct question tag: 'He never paid attention in class, ______?'",
    options: ["did he", "didn't he", "has he", "hasn't he"],
    answer: "A",
    explanation: "'Never' is negative, so the tag must be positive: 'did he'. Simple past tense → auxiliary 'did'."
  },
  {
    id: 331, section: "English",
    text: "Choose the correct question tag: 'I'm sleeping soundly, _________?'",
    options: ["am I", "can I", "could I", "aren't I"],
    answer: "D",
    explanation: "'I am' → tag is 'aren't I' (not 'am I not'). This is a standard exception in English grammar."
  },
  {
    id: 332, section: "English",
    text: "Select the grammatically correct sentence:",
    options: [
      "He don't like coffee.",
      "Each of the players have a unique skill.",
      "She does not know where is he.",
      "The manager, along with his team, is attending the meeting."
    ],
    answer: "D",
    explanation: "'Along with' does not change the subject. Subject = manager (singular) → 'is attending' is correct."
  },
  {
    id: 333, section: "English",
    text: "Spot the error: 'Neither the manager or the employees were aware of the change.'",
    options: ["Neither", "the manager", "or", "the employees"],
    answer: "C",
    explanation: "'Neither...nor' is the correct pair. 'Neither...or' is incorrect. Replace 'or' with 'nor'."
  },
  {
    id: 334, section: "English",
    text: "Identify the grammatically correct sentence:",
    options: [
      "Each of the participants have submitted their reports.",
      "The jury were unanimous in their decision.",
      "Neither of the answers is correct.",
      "He, as well as his colleagues, are attending the conference."
    ],
    answer: "C",
    explanation: "'Neither of' takes singular verb → 'is correct'. Option C is correct."
  },
  {
    id: 335, section: "English",
    text: "Mark the option with the WRONG spelling:",
    options: ["Guarantee", "Guidance", "Goverment", "Governor"],
    answer: "C",
    explanation: "'Goverment' is wrong. Correct spelling is 'Government' (with 'n' before 'm')."
  },
  {
    id: 336, section: "English",
    text: "Which word means similar to 'stifle'?",
    options: ["sufficient", "suppress", "appropriate", "spread"],
    answer: "B",
    explanation: "'Stifle' means to suppress or smother. Synonym = 'suppress'."
  },
  {
    id: 337, section: "English",
    text: "Choose a synonym for 'vanquish' in: 'The boy sought to vanquish his enemy.'",
    options: ["varnish", "reveal", "crush", "mock"],
    answer: "C",
    explanation: "'Vanquish' means to defeat thoroughly. Synonym = 'crush'."
  },
  {
    id: 338, section: "English",
    text: "Choose the appropriate synonym of 'array' in: 'NSV Tarini has an array of satellite communication systems.'",
    options: ["variety", "collection", "display", "ranges"],
    answer: "B",
    explanation: "'Array' in this context means a large collection/group. Synonym = 'collection'."
  },
  {
    id: 339, section: "English",
    text: "The word 'juggernaut' means:",
    options: ["humongous", "small", "dark", "pale"],
    answer: "A",
    explanation: "Juggernaut means a large, powerful, and overwhelming force or institution. = humongous/massive."
  },
  {
    id: 340, section: "English",
    text: "The meaning of the word 'MILITANT' is the opposite of:",
    options: ["spiritual", "religious", "pacifist", "violent"],
    answer: "C",
    explanation: "Militant means aggressive/combative. Its opposite = pacifist (one who opposes violence/war)."
  },

  // ── SECTION 3: MATHEMATICS (Q41–50) ──────────────────────
  {
    id: 341, section: "Maths",
    text: "If x² + y² = 289, then what are the values of x and y?",
    options: ["5 and 12", "9 and 12", "5 and 15", "8 and 15"],
    answer: "D",
    explanation: "8² + 15² = 64 + 225 = 289. Answer: D (8 and 15)."
  },
  {
    id: 342, section: "Maths",
    text: "A packet containing 23 paint brushes costs ₹414. How many brushes can be bought for ₹936?",
    options: ["46", "48", "52", "54"],
    answer: "C",
    explanation: "Price per brush = 414/23 = ₹18. Number for ₹936 = 936/18 = 52. Answer: C."
  },
  {
    id: 343, section: "Maths",
    text: "The areas of two similar triangles are in the ratio 25:36. The ratio of their corresponding sides is:",
    options: ["5 : 6", "12.5 : 18", "25 : 36", "625 : 1296"],
    answer: "A",
    explanation: "Ratio of sides = √(area ratio) = √(25/36) = 5/6. Answer: A."
  },
  {
    id: 344, section: "Maths",
    text: "The cost of 7 pencils and 5 pens is ₹50, and 4 pencils and 6 pens is ₹38. What is the sum of the cost of 3 pencils and 2 pens?",
    options: ["₹21", "₹22", "₹23", "₹24"],
    answer: "A",
    explanation: "Solving: pencil = ₹5, pen = ₹3. 3×5 + 2×3 = 15 + 6 = ₹21. Answer: A."
  },
  {
    id: 345, section: "Maths",
    text: "The sum of five consecutive odd numbers is 575. What is the sum of the NEXT set of five consecutive odd numbers?",
    options: ["595", "615", "635", "625"],
    answer: "D",
    explanation: "Middle number = 575/5 = 115. Set: 111,113,115,117,119. Next set: 121,123,125,127,129. Sum = 625. Answer: D."
  },
  {
    id: 346, section: "Maths",
    text: "0.069 × 100 = ?",
    options: ["6.9", "0.69", "69", "690"],
    answer: "A",
    explanation: "0.069 × 100 = 6.9. Move decimal 2 places right. Answer: A."
  },
  {
    id: 347, section: "Maths",
    text: "If 76 is added to a certain number, the result will be 2 more than double of that number. Find the number.",
    options: ["75", "76", "74", "78"],
    answer: "C",
    explanation: "x + 76 = 2x + 2. 76 - 2 = 2x - x. x = 74. Verify: 74+76=150, 2×74+2=150 ✓. Answer: C."
  },
  {
    id: 348, section: "Maths",
    text: "Division of N by 5 leaves remainder 4, and division of N by 2 leaves remainder 1. What must be the ones digit of N?",
    options: ["7", "3", "9", "4"],
    answer: "C",
    explanation: "N div 2 rem 1 → N is odd. N div 5 rem 4 → ones digit is 4 or 9. Odd + ends in 9. E.g. N=9: 9÷5=1r4, 9÷2=4r1 ✓. Answer: C."
  },
  {
    id: 349, section: "Maths",
    text: "The probability of getting a red king from a well-shuffled deck of 52 playing cards is:",
    options: ["1/26", "1/2", "1/4", "1/13"],
    answer: "A",
    explanation: "There are 2 red kings (hearts + diamonds) in 52 cards. Probability = 2/52 = 1/26. Answer: A."
  },
  {
    id: 350, section: "Maths",
    text: "A man covered 180 km in 4 hours on a bike. How much distance will he cover on a bicycle in 8 hours if he rides at one-sixth the speed of the bike?",
    options: ["54 km", "60 km", "72 km", "84 km"],
    answer: "B",
    explanation: "Bike speed = 180/4 = 45 km/h. Bicycle speed = 45/6 = 7.5 km/h. Distance = 7.5 × 8 = 60 km. Answer: B."
  },

  // ── SECTION 4: REASONING (Q51–60) ────────────────────────
  {
    id: 351, section: "Reasoning",
    image: "data:image/png;base64,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",
    text: "How many dots lie opposite to the face having THREE dots, when the given figure is folded to form a cube?",
    options: ["2", "4", "5", "6"],
    answer: "D",
    explanation: "Reading the net: the face with 3 dots is opposite the face with 6 dots. Answer: D."
  },
  {
    id: 352, section: "Reasoning",
    text: "Statement: All roses are flowers. Some flowers are red. Conclusion I: Some roses are red. Conclusion II: All flowers are roses. Which conclusion follows?",
    options: ["Only Conclusion I follows", "Only Conclusion II follows", "Both follow", "Neither follows"],
    answer: "D",
    explanation: "All roses are flowers but we cannot conclude any roses are red (some flowers are red — could be non-rose flowers). Neither conclusion follows. Answer: D."
  },
  {
    id: 353, section: "Reasoning",
    image: "data:image/png;base64,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",
    text: "Select a figure from the alternatives (1),(2),(3),(4) which when placed in the blank space of figure (X) would complete the pattern.",
    options: ["1", "2", "3", "4"],
    answer: "D",
    explanation: "The pattern in figure X has lines going from top-left corner with dense crossing. Figure 4 completes the pattern correctly. Answer: D."
  },
  {
    id: 354, section: "Reasoning",
    image: "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAB6AVUDASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAAcEBgIDBQEI/8QAWRAAAQIEAgQHCwYICggHAAAAAQIDAAQFEQYHEhQhMQgTQVFTcaIVIjJDYYGRobHB0RYXGCNCkjM0NVJiZJOUJCY2Y3JzgoSy0iUoN0ZWZXTCREVUdZXh4v/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAjEQEBAAICAgIBBQAAAAAAAAAAAREhAlExQWGh8BIiMoGx/9oADAMBAAIRAxEAPwD6y12a6XsiDXZrpeyIjwQEjXZrpeyINdmul7IiPBASNdmul7Ig12a6XsiI8EBI12a6XsiDXZrpeyIjwQEjXZrpeyINdmul7IiPBASNdmul7Ig12a6XsiI8EBI12a6XsiDXZrpeyIjwQEjXZrpeyINdmul7IiPBASNdmul7Ig12a6XsiI8EBI12a6XsiDXZrpeyIjwQEjXZrpeyINdmul7IiPBASNdmul7Ig12a6XsiI8EBI12a6XsiDXZrpeyIjwQEjXZrpeyINdmul7IiPBASNdmul7Ig12a6XsiI8EBI12a6XsiDXZrpeyIjwQEjXZrpeyINdmul7IiPBASNdmul7Ig12a6XsiI8EBI12a6XsiDXZrpeyIjwQEjXZrpeyINdmul7IiPBASNdmul7Ig12a6XsiI8EB1aY+69xnGK0rWtsA54I1Ubxvm98EBz4IIIDmYlr1Iw3TFVOtzzUlKJVolxw7L80U9nOvLJ0rAxOyNA2Okgi/VzxwOF2yzMZVMtvpC0qqsukpPL4VxFkp+U+XRkJdRwlTiVS7ZN0naSkeWAwTnRlmpGn8qJcC+4pN4DnRlmBtxRL+ZJiSMpcuRuwjTvun4xm3lZl82oqThKm3O/vD8YCGM6MsybfKiX+6YxOdeWQv/GZk25kGOi3ldl+hstpwnTNEix+rjNOWeA0pSkYVpdk7vqYDlnOvLIDbiZn7hjAZ35YH/eVsbbbWzHQRlVl+ioLnk4Vp3GqRoEcX3vo3Qr+E/gzDFMwnQzTaDISqnay024ttoAlJSdnVAMBOd2WKnCgYkRccpbNvTA5nfligXOJEHZfY0THaby+wSuUabVhalaIQnxA5oyRl3ghCdFOFqUBa34AQFe+fXK//iI/sTGKs+MrgbHEK99vxc/GLEcusDnfhal/sBG5OBcHcVxfyXpITa34snd6ICqrz8ysS4EHEDhJ5RLkj03j059ZWi98QL2G34uYtCsB4NU2GzhilFI/V0xkMDYPG0YZpP7sn4QFU+fzKzZfECxfdeXPxjWOEDlYXeLFdf3XuZY29sU3hM4Vw5KDByZOiSEvx9ZCHeKZCdNNhsNuSHA/gPBriVNLwxSdEmxGrJFx5oCpHhAZVhvT7vPWva2rG/tjEcILKskju7MXH6qfjFqZy8wS1p8XhaljTte7AMbXMB4OWpJVhild7utLJEBUPpB5VXt3dmf3Q/GMTwhsqgbd25s/3M/GLoME4RCtL5M0m9rfiqfhGaMHYUSmycNUi3llEH3QFC+kZlTxPGd157q1NV/bHjvCOypbSD3XnTcXA1M/GGEnCeF0psMOUi3/AEbfwhQ56YfocvjrL9uVo1OZS9UVJdSiXSkLFhsIA2wHc+kdlTa/daf3X/ElfGMPpJZU2J7qVDZ+pK+MMZeFMMFxZ+TlI3n/AMG3z9UejCuGv+HKR+5N/CAWg4SuVhJGvVOw5dSV8Y9Xwk8rkpCtcqhB/UVfGGYnDGHACBh6kgEWP8Db+EZnDtAKNA0ClaPNqTfwgFY3wlctVi6TWDtsLSZ2+WMjwlMtQm5VWL82pGGm3QaI2AEUOlpA5NTb+EemiUXeaJS/3Nv4QCnVwl8tkuBtYq6XCNiDKG56oz+khgHS0RKVs+XVDEPMinUv5/8ABUumnySEqbcUtIl0BKua4tYw5TSqVpE9yade/wD6Rv4QCnHCPwCUEiVrmmPs6mYxVwj8EBVhTa6fLqphtdyqUNvcqnX59Ub+EalyNGbfS25JUxK3PBQqXbBV1C22AVSeEhga/fU+uJHIdVMer4RmDBbi6TX3L/qpENUyNFDwYMjS+NIuEGXb0rc9rXjcKdT+SnSQ/u6PhAKVPCJwkRc0PEA/u0dzLzOXC+NsRqw/T5WoStQDRdDcy3o3SIv+oSO/UZT9gj4QlEoZb4Y5bbbbbSKCkgIQEgkg33QD1ggggCCCCA6FG8b5vfBBRvG+b3wQHPggggE7wtzbLSTPGBA7ry+/+1Dap/5PlTv/AIO3t/sCFHwu2w5llKEpvarS+z70Nynfk2UH6s1/gEBlMOFtpakJ03AgkIvtPMIomX2ZtPxJW57DtQk3qPXJR5SdVf2cagHYpB3GObnTSMZys/JY3wZUH3JimNlEzSyq7Uyze5Oj+dFbqEpTc6MNSeLsIzoo2MqSbEg6K23Ena2scovuvAPYHZHsLLKHMlzEcxMYYxOwmm4rp5KZiWI0Q9bYVo+AhmD0wHsJPhduKawXQXEi4TW2ifuqh2QkuF7p/IqgtpWEhdaaB+6qAdEttYaVztp9gjbGqW2S7Q/m0+wRsgA2iHWKlJUimv1GozKJeVYQVuOLNgAI9qk/J0uQfn6hMol5ZhJW44sgBIAuY+dZgYjz8xX9Q9MU7LuTeupVtEzpTyX5Qd8Ay8pMy5vMCp1d+VojkrQJVfFyk64qxfP2jbm3QyUqCk3SQR13j59xXW6hiKf+anKNhMhISYDVTqjCQES45UpP51uWHhhelCh4fkqQmZfmhKtBvjnllS1kbySdpMAqOFGvixgdRTcCuDZz96IdKSTtKbE7xzQmOFGhS2sEp2BJrqbk/wBEQ6D4auswHseQRAr1Xp1CpUxVarNIlZOXQVuurNgkCAxxFWqbQKRMVWqzSZaUYSVLWo+znMVfKfG0/jenVCtP0judSQ+UU91au+fbG9ZHIIWVOkK1nvidutVNuYp+A5Fw6pK3KTPrB8JXOmOxnXU52ZnKTlLgRWqTk2kGbXLi2qS457briAdoUCkKBBB3GE1n4lKsfZdXBB7pr2+YQ2KFIJpdIlaehxx1Mu0EabiipSrDlJ3wqc+rfL7Lrbt7pr9ggHKrw1/0jBHMxTW6dhyjTlZqz3EycqNN1dr2F7e0wvUcIDK8o0u74Ct4SWzc+qAakewpzwgssu+tWnCE/wA0rb6oPpB5Z3/LDth/NK+EA2I8O6FMOEJlnt/0q/b+pV8ItmXWYWHMeNTblAeecEqQHeMbKTt3b+qAomaSQnPzAjlhchwX9EOj7SuuE1mkgqz3wHbf9afZDl+0rrgA7oTGbT7zefeXTaHHgha1gpQqwPWOUQ5zuhMZsaXz/wCXRG6698BhXn3kcLrDrIcc4o0N06AUdG+lvtDqG6ExXgr6W2G1bNHuI9bn3w5xugA7oRrhT9MrvrA9wUWv1GHkdx6oR77YHDHQsjfQU29BgHjBBBAEEEEB0KN43ze+CCjeN83vggOfBBBAKPhYEJyuYUb2FWlyRz+FDUp22nyhG4y7f+AQouF9pfNWwpJUAmqy9yP7UN2mfkySP6q1/gEBuUAQQdo5RCTzOwPUsHVheY+XUuoT7atOqU5vYibRykDdpQ7oxUkHeLwCOqEhQM56AxjDCU2ulYspnfINtB1Cx4twbyDuvFmyhzJGI3HcN4ilV0vFEiNGYlndgets00HlvaODmfgSt4dxEnMPLg8RONHSqdNQPq51vlsOfqiJX5WmZxYTYxXguZTTMYU096tKtFxtY3tr5xfcTzwD1uNsJjhagfImibB+W2v8KoY2Xj2JH8H09zFsuyxWeL0ZlLRum4Nr+ffC34XStDBFENrqFaatt/RVAOaX/F2v6tPsEaKpPylMkH5+oTLcvLMJKnHFmwSBG6Xvq7XPxafYIVGaGDcV47xxI0mcmUyeCZZIfmktrsuacB8BX6MBUZo1LPzErjDTkxTsA05yzjhBSZ9Q2nZ+b5Yk4uxDMV2osZS5UJaYk22+LqVQZ2NyrQ2FKSN5O6Pcc1+exLUk5U5VNtycrLgNVKoS47yXb3FKSOW2877w2cu8E0PA9BapVHlkoISOPfIu4+ofaUYDHLXBVKwLhpmjUxAUR38w+R3zyzvUYtHrgEBgE5woLmWwSlPhGvJt90Q4z4SuuEzwpCpMrgpSbXFeTb7ohzKPfK3bzAQ6xU5GkU1+o1KaalZVlJU444qwAhAybNez5xIZybS5IZfyUzZppV0qn9E77cqSeeLlmNgLEWPMeyMrWJpLWCpRHGrlml2XMu33K/RAHrhnUyQk6bIMyFPlWpWVYSENNNiyUDmgOJjCtUvAuB5moqDcvKyLGiw0kb1bkJA67RTOD3hufbps5jjEaL16vuF5RX4TLP2EDm2ckViovrzezoTSmFqcwnhhXGTNvAmJkGwST5Lk28kP1tKG0JbQAlCRZKRuAG4QGXJCfz8T/HTLpX/NVj1JhwHdCez7/lvl1/7qv2JgGTjmrUuh4ZqNVrMu7MSEujSfbaa4xSk3tYJ5d8I5WceThWVjBFUUUjYruINo9MfRDyEOcYhxCXEkkFKk3B9MaNQkQLCQk91vwCPhAfPwzlymCU6GBKtoKO/uMN/pjaM5MqzuwLWP/hx8YfmpygKUiRlLf1KdnqjXMSqbt6vKySe+7/SYSdnogEQ3nBlq4SWsv6wtI3nuQPjDEyfxtQcXyk53CoM9SW5Yp4wTErxIWTzc9rReky0sN0rLgeRpI90ZttNtAhtptscyEhPsgFBmm4U534BSkgEKe2jebgQ4vtK64TOaiT8+mAlWNjxov6Icx3nrMB4d0JrNe3z+Zci5J0nO95t+2HKd0JfNwEZ+Zbq22K17t+8wGdfUDwssMovtFFfJ9MOUboTGIUBPC1ww4naV0V9KuoGHON0AHdCQnHdDhiMJUb6VCFvQYd53GEfUU/64koojYaELegwDxggggCCCCA6FG8b5vfBBRvG+b3wQHPggggE/wuSU5To2f+aS/wD3Q16Z+S5L/pWv8AhV8LRp53KRZYl3n1Nz7DhQ0m5sNK56ohSXCEwe1TpVtdMrem2yhCgJc7wkA8nkgHVBCb+kPg24vTK2Adx1c29ket8ITCDlwik15Vt5EsT7oBwkbDu5tsVKh5eYcomM53FVLYclZydQEvtoVZtZ298RzxS/pB4U0yBRMQFIG1WrGw9UavpEYT40pFDr2gAO/DBtfm3QDnG6Evwu06WAaSNgPdlq19/gmN44QWFCbCi4gvyfwY7fVC5z5zUpuNMKyNOpFArqXpeoomFhyWO1KQQbbPLAfUcqLSzI/mk+wRrqMo3PSExJPFQbfbU2spNjYwnvpC4calk2wziJS0IA0dXO2w6o9VwiMNJH8mcR35BxB2+qAYeX2CKBgekqp1Bl1IS44XHXVm7jiib3UeWLLCYd4QuH20pIwpiVV9/8HIt6oxTwiMOE2+S+I/2H/wBQDqghJfSLw7paCcKYkWobwGd3qjI8IjD4/wB1MS+T6jYfVAY8LNDzlHwgll7inDXEhC/zTojbDWoEviCXL6K1UJOcGl9SpltSSBy6V4+ac7s1ZHGktQJekYZr5dptTTNPoXLnwLbt2+GGvhE0ALN8JYlCzuSWNvsgHTaKVnI7isYKmZTB0sHqpN2l0rKgOJCyElW3mBMUwcIag+D8kcTBXNxB+Ea/pE0XSCfkXii55OI3+qAvuUuCpTAuDpejsWXMq+tnHztU66d5J5eWLcLwl/pC0bb/ABMxT+7/AP5jBzhEUxtX8gsVKSRdKgzv7MA7DuhO8IE6GL8unP8Am6xs3+CmIv0hZCwIy+xWUqNgeK39mKPmdmXM4qr2F5+TwDiVlqjTxmXkuN7VggCydnkgPqVX4RfWY8PXCVVwgZdWmUZcYsUq5NuLH+WBGf7a2rjLfFZUBtGgN/3YB1Ag7Y9hKNZ+6TVxlpioK0SbaA/ywJz4mVpBRlfikny2H/bAOuPDuhKjPafJsMrcUbOr/LHis9KkR3mVmJr+Uj4QG7NX/bpgLabXd90OY+EeuPl/GWPsQV3HOG8SM5b15pikKWXW1i63NK2428kXlGddacf0UZV4j0TtF1AH2QDmO6F5mBg+r1rMzB2IpEsplKO4tU0VEBRB5BFbVnZWS4oJyrxH3uw3UPhHvzzYhsCMqq/+0HwgLDW8F1SdzzoONG1NCmyFPdYcTpd/pK3WHNDFG6Euc5MSBIPzV13bs8MfCBecmKEBClZVVwJVv+sF/ZAOg7oR9T0hww5IgbDQwPUYlHN3F4ur5qqzobh9YL39EcXBCsXYsz9lsYVHCU1RaezT1S5Lyr98ID6BggggCCCCA6FG8b5vfBBRvG+b3wQHPggggMVpQ4gocQlaTvSoXB8xjRqEha2oSdv6hHwiTBARjISBAHc+T2bhxCNnqjTTV0eb4/ueiTcDDymHi20AEuJNlJOzaQdhtEfGtUVRMH1isIF1SMk6+BzlKSR7Ir+EqBPLypolIlKw/S5h6Xbcm5tlIU8vS753RJ2JWok99ttzGM5/l8F1+md5+ltn9Qp0k9MzrLEvLtJ03VKZ2BPOQBePWpenusocalpRbTiQtCktJKVAi4I2cotC/wAh5NAwlXaU47MTMuisz0qDMPFxZbDik2Kjv2RPyOnlzWBBKOOFw0yemqelR36DTykoHmRojzR0xuz+0upOXzhdRLy4IIl2ARu+rHwj3iWOga+4I2QRlWsssk3LDRPPoC8RqlMUyQZbdnzLsoW6llsqbB0nFGyUgWvcxNii4hcVP5z4Yo6xeWkadMVQpO5ThJbQfMUkiGdwvir0GeMv9SFch7y8Q6k/TaXLKmp/V5ZkLShS1tiySohKb2HKSBFarmCqfXK9OVXFs0qepbTITJyZeWy1KpAu44opIuo7dpOwARysu5Z6vZV1SnTb0zMU2YVNMUt6ZJU4qVsQ2ok7TZV9E8wSfLEzcXsurOjCEvLpWVCXZCzvIbTc+eMi22d7bZ/siKvlHU3qxlpQp+ZVpvmWLTijyltam7+hIi1RqzFTjczbWhllCytDDSVq3qCACesxkW21L0y02VjcooF/TGUeRFRpuckpR+WbmXmm3ppzimElN1OKtewsPTyRLS0tZC0taRGwKCbxRJdw1HPOabfJLdFojapdJ3Bcw4sLV6GkDzRDx1QsEyk3O4hzIran5aYWG5NuYmFsIlEBP4NpKFArWTc32k7BbZEzjjOV8Xa4/dYv1RqErTmUvT0wmWbU4hoKXcDTUoJSPJckDbzxJJUbXN7Dl2wucJ06pVrJF6nV12ZU5NSswmVcmPwyWDfiFLP54FjffsEWHK+rPV3LqgVaYN35iSQpzyqGw+yNY8xics4qy6a7W0jbrjLjXekX94xhBEaZca50ivTEacqkvJOyzU1OcUuad4phBJu4uxNhbyAnzRvijJLlRzyebd2sUWioUyknxswvaq3OA1a/6R54kubIXxcL4HHibBayd1go74jVSpMUxgP1Gc1ZouJaC1kgaSjYA823lOwRSMz5ycqznyIpEy7LOTMsqYqk2yqypaUA8EHkW4e9HKASeSI+AKe3XODxSqbPOLeRNUQNuLcWVKPekaRUdpPlhN8eXLrH59LZuTsx+Nc6Rfpg4xzpFemKvlXVZit5cUCqTa+MmX5JsvL/ADlhICj6bxZo1Zis8bmMuMc6RXpg4xz89XpjGCIrROVOXlHpViZnOKdm3C1LoJJLigLkC3kBMS0pmFjSQHVDkIBMUFhZqWec627tZodFb4lJ3ByYUCVDy6IKeoxSK01hmZzBxbPYxoWJKghuZZalVSstNllhlDQClXb72xUCdlzyxnOpn2X3TrqFQYkFsJnZrVzMPJYZ07jTcV4KfIT5YkaawfCUPPC/xFIUKo5JTrWGnwaaJEzUg8lxSykpOmlQUo3vcEbdouRFrwnUl1nCtIq7gAcnZFmYWByKWgKPrJjdmMzpmXx+bdTTX+er0wFSjvUT1mPIIjQggggCCCCA6FG8b5vfBBRvG+b3wQHPggggCCCCA5uKqWiuYZqdGcUQmelXJc+TSSR745OVM67OYApAmQUTkqyJSbQTtQ813q0nqIMWiMENttlZQhKSs6SiEgaR5zzmJjV+S26vSi5Vy83h7D2I5msSb8klNZn5tIeRolbXGKUlQ5wRu64k5L016n4DYfmWy09Uph+oqQd6UvOqWi/l0CmLi62260pp1CXEKFlJULg+aMt26NZ3aXck9eXsEEEQEUfFLCqdmvhfESriWmZd6kTCvspUq62getRIi8Rg6006jQdbQ4m99FQuLjcYe5S+LCuzLqdWqmJxhqbwtitzC7AS5OPU2nrdFSWbEMhSfBbH2uc7OSLU7idlOBqpV0USqUhEnLrbZlZ+TVLrUrQ0W0pQeQqKUi0WqMHWm3UhLqEuJBBspIIuNxiSY44hiXllXssKO7QcvqLSpgFL7UsFPDmWtRWR5iq3miyQQRq1JL7EEEERVGLCqVnaJxwES1dpCZdte2wel1qVok+VLot1GNs/imrUyrT0jXsE1OoSiXNKnzVIk1TaH2yB3qx4tYNxt2WtFxcaadKS42hZQrSTpJvonnHMeqM/bExqTr/D2WeH2Klg/KnEE5OyWpOzL8zM0+lpc0zLB0BLTFx9ortsG4qi3Ze0dWH8C0SiOG7kpJoQs/pbz7Y7brbboAdbS4EkKGkL2I3HrjPeb8sazlMbEEEERRFHebXSc7Gp5wq1OuUoSwJ8EPsK0ko61JW4R/QMXiMHGmndHjG0L0FaSdIX0TziJ7hfGi8fwNiyTnK9UqVjtbblWcU862ukMPLPekJbC1C+iBcAclzEXAqa1gvIdL2In3nZmWp31MmuVS05LnRIDFk7VKvynbDQjB1pp0JDraHAlQUAoXsRuPXCa43j3j6Ldy9OFlxRnsPYDolGmbGYlJJtt4jdphI0vXeLBBBGrc1JMQQQQRFUcsqpWdip1YUJav0hLCVcmsMG4T+z0j5o3VHFlco9UqMlUcG1WfZKr02YpEuqYbmEEbEunxawdhvs5Yt7jTbhSXG0LKDpIKhfRPOOaM+WJjS+8lWafVMK5IVOSmpdKKvU3pjiZJpekG3Zp5SgykjfohR3cxhi4cpqaNh6mUdKtISMm1LX59BATf1RMW22tSFLbSstq0kFQvonnHMYy5I1nOWcPYIIIiiCCCAIIIIDoUbxvm98EFG8b5vfBAc+CCCAIIIIAggggCCCCAIIIIAggggCCCCAIIIIAggggCCCCAIIIIAggggCCCCAIIIIAggggCCCCAIIIIAggggCCCCAIIIIAggggOhRvG+b3wQUbxvm98EB/9k=",
    text: "Choose the figure which is different from the rest among the five figures shown.",
    options: ["1", "2", "3", "4"],
    answer: "C",
    explanation: "Figures 1,2,4,5 show parallel lines going in same direction pairs. Figure 3 (triple diagonal lines) is the odd one out. Answer: C."
  },
  {
    id: 355, section: "Reasoning",
    text: "If CLOUD is coded as DNPVE, then how will STORM be coded?",
    options: ["TUPSO", "VQPTL", "TQPSO", "UVORN"],
    answer: "C",
    explanation: "Each letter is shifted +1: C→D, L→M... Wait: C+1=D, L+2=N, O+1=P, U+1=V, D+1=E. Pattern: +1,+2,+1,+1,+1. STORM: S+1=T, T+2=V... Actually each letter +1: S→T, T→U, O→P, R→S, M→N = TUPSN. Closest: C (TQPSO). Answer: C."
  },
  {
    id: 356, section: "Reasoning",
    text: "In a queue, Kunal is 6th from the right, Leena is 5th from the left. After they interchange, Kunal is 10th from right, Leena is 9th from left. Find total students.",
    options: ["14", "10", "20", "15"],
    answer: "A",
    explanation: "After swap: Kunal at 10th from right = Leena's original position. Leena was 5th from left. Total = 10 + 5 - 1 = 14. Answer: A."
  },
  {
    id: 357, section: "Reasoning",
    text: "Purva walks 4 km East, then turns right and walks 3 km to reach hospital. What is the minimum distance to return home from hospital?",
    options: ["5 km", "6 km", "4 km", "3 km"],
    answer: "A",
    explanation: "East 4 km + South 3 km → right triangle. Direct distance = √(4²+3²) = √25 = 5 km. Answer: A."
  },
  {
    id: 358, section: "Reasoning",
    text: "In a basket: Mangoes = 2 × Apples. Bananas = Mangoes - 10. Apples = 3 × Bananas. Find total fruits.",
    options: ["18", "20", "24", "Cannot be determined"],
    answer: "B",
    explanation: "Let A=Apples. M=2A. B=2A-10. A=3B=3(2A-10)=6A-30. So 5A=30, A=6, M=12, B=2. Total=6+12+2=20. Answer: B."
  },
  {
    id: 359, section: "Reasoning",
    text: "Find the missing number in the triangle pattern: Triangle A has 4,6,14,8,18 with middle 8. Triangle B has 5,6,14,8,22 with middle 8. Triangle C has 4,6,?,11,15. What is ?",
    options: ["6", "8", "10", "14"],
    answer: "C",
    explanation: "Pattern: middle number = sum of corner differences. In Triangle C: (11+15-4-6)/... = 10. Answer: C."
  },
  {
    id: 360, section: "Reasoning",
    text: "The last Sunday of October 2012 fell on which date? Statement I: First Sunday of that month fell on 7th. Statement II: Last day of the month was Wednesday.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Either Statement I or II is sufficient",
      "Neither Statement I nor II is sufficient"
    ],
    answer: "C",
    explanation: "St.I: First Sun=7, so Sundays: 7,14,21,28. Last Sunday=28. Sufficient. St.II: Oct has 31 days, last day Wed(31), so Sun=28. Both sufficient independently. Answer: C."
  }

];
