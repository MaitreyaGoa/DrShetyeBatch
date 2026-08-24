// math_level2_aug24.js – Dr Shetye Academic Programme
// Maths Level 2 Test — August 24th, 2026
// CAT / IIM / XAT Level · 30 Questions · 30 Marks · 45 Minutes
// Multi-Concept · Textbook-Quality · ~25% Very Hard Questions
// IDs 6121–6150

var questions = [

  {
    id: 6121,
    text: "A boat's speed in still water is 12 km/h. It takes exactly twice as long to travel a certain distance upstream as it takes to travel the same distance downstream. Find the speed of the stream.",
    options: ["A) 4 km/h", "B) 3 km/h", "C) 5 km/h", "D) 6 km/h"],
    answer: "A",
    explanation: "Let stream speed = s. Time upstream = 2 x Time downstream, for the same distance d: d/(12-s) = 2 x d/(12+s). So 12+s = 2(12-s) = 24-2s, giving 3s = 12, so s = 4 km/h.",
    difficulty: "hard"
  },
  {
    id: 6122,
    text: "Pipe A can fill a tank in 12 hours and Pipe B can fill it in 18 hours. Both pipes are opened together, but after 4 hours Pipe B is closed. In how many more hours will Pipe A alone fill the remaining tank?",
    options: ["A) 4 hours", "B) 16/3 hours (5 1/3 hrs)", "C) 6 hours", "D) 14/3 hours (4 2/3 hrs)"],
    answer: "B",
    explanation: "Combined rate = 1/12 + 1/18 = 3/36 + 2/36 = 5/36 per hour. In 4 hours, fraction filled = 4 x 5/36 = 20/36 = 5/9. Remaining = 1 - 5/9 = 4/9. A's rate = 1/12, so time = (4/9) / (1/12) = (4/9) x 12 = 48/9 = 16/3 hours.",
    difficulty: "very hard"
  },
  {
    id: 6123,
    text: "The price of an item is first increased by 20%, then decreased by 10%, and then increased again by 25%. Find the net percentage change in the price.",
    options: ["A) 30% increase", "B) 32.5% increase", "C) 35% increase", "D) 37.5% increase"],
    answer: "C",
    explanation: "Net multiplying factor = 1.20 x 0.90 x 1.25 = 1.35. This represents a net increase of 35%.",
    difficulty: "moderate"
  },
  {
    id: 6124,
    text: "A, B, and C start a business investing in the ratio 3:5:7. A's capital remains invested for 6 months, B's for 8 months, and C's for the full 12 months. If the total profit at the end of the year is ₹71,000, find C's share of the profit.",
    options: ["A) ₹38,000", "B) ₹40,000", "C) ₹44,000", "D) ₹42,000"],
    answer: "D",
    explanation: "Effective capital ratio = (3x6) : (5x8) : (7x12) = 18 : 40 : 84, which simplifies with total parts = 142. C's share = 71000 x 84/142 = 500 x 84 = ₹42,000 (since 71000/142 = 500).",
    difficulty: "hard"
  },
  {
    id: 6125,
    text: "The average weight of 8 men increases by 2.5 kg when a man weighing 65 kg is replaced by a new man. Find the weight of the new man.",
    options: ["A) 85 kg", "B) 80 kg", "C) 90 kg", "D) 75 kg"],
    answer: "A",
    explanation: "Total increase in weight = 8 x 2.5 = 20 kg. Since the total weight increased by 20 kg when the 65 kg man was replaced, the new man's weight = 65 + 20 = 85 kg.",
    difficulty: "moderate"
  },
  {
    id: 6126,
    text: "A container holds 40 litres of milk. 4 litres of milk is withdrawn and replaced with water. This process of withdrawing 4 litres of the mixture and replacing it with water is repeated two more times (three times in total). How much milk is left in the container?",
    options: ["A) 26.34 litres", "B) 29.16 litres", "C) 27.36 litres", "D) 32.4 litres"],
    answer: "B",
    explanation: "Using the successive-dilution formula, milk left = Initial x (1 - x/V)^n = 40 x (1 - 4/40)^3 = 40 x (0.9)^3 = 40 x 0.729 = 29.16 litres.",
    difficulty: "hard"
  },
  {
    id: 6127,
    text: "Find the smallest number which, when divided by 5, 6, and 7, leaves a remainder of 3 in each case, and which is also exactly divisible by 11.",
    options: ["A) 1653", "B) 1673", "C) 1683", "D) 1693"],
    answer: "C",
    explanation: "LCM(5,6,7) = 210, so the number is of the form 210k + 3. For divisibility by 11: 210 mod 11 = 1 (since 11x19=209), so we need k + 3 identical to 0 mod 11, i.e. k identical to 8 mod 11. Smallest k = 8, giving number = 210x8 + 3 = 1683. Check: 1683/11 = 153 exactly.",
    difficulty: "very hard"
  },
  {
    id: 6128,
    text: "How many numbers between 1 and 500 (inclusive) are divisible by 3 or 5, but not by 15?",
    options: ["A) 233", "B) 166", "C) 167", "D) 200"],
    answer: "D",
    explanation: "Numbers divisible by 3: floor(500/3)=166. By 5: floor(500/5)=100. By 15: floor(500/15)=33. Divisible by 3 or 5 but not both = (166-33) + (100-33) = 133 + 67 = 200.",
    difficulty: "hard"
  },
  {
    id: 6129,
    text: "In how many ways can 6 people be seated around a circular table such that two particular people do not sit together?",
    options: ["A) 72", "B) 48", "C) 96", "D) 120"],
    answer: "A",
    explanation: "Total circular arrangements of 6 people = (6-1)! = 120. Treating the two particular people as a single unit gives 5 units, arranged circularly in (5-1)! = 24 ways, and the pair can be internally arranged in 2! ways, giving 48 arrangements where they sit together. Arrangements where they do not sit together = 120 - 48 = 72.",
    difficulty: "moderate"
  },
  {
    id: 6130,
    text: "From a group of 7 men and 5 women, a committee of 5 members is to be formed such that it contains at least 3 women. In how many ways can this be done?",
    options: ["A) 210", "B) 246", "C) 252", "D) 236"],
    answer: "B",
    explanation: "Case 3W2M: C(5,3) x C(7,2) = 10 x 21 = 210. Case 4W1M: C(5,4) x C(7,1) = 5 x 7 = 35. Case 5W0M: C(5,5) x C(7,0) = 1 x 1 = 1. Total = 210 + 35 + 1 = 246.",
    difficulty: "hard"
  },
  {
    id: 6131,
    text: "Two dice are thrown together. Find the probability that the sum of the numbers appearing on them is either 7 or 11.",
    options: ["A) 1/6", "B) 1/4", "C) 2/9", "D) 5/18"],
    answer: "C",
    explanation: "P(sum=7) = 6/36 (favourable pairs: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1)). P(sum=11) = 2/36 ((5,6),(6,5)). Since these are mutually exclusive, total probability = 8/36 = 2/9.",
    difficulty: "moderate"
  },
  {
    id: 6132,
    text: "A bag contains 4 red and 6 black balls. Two balls are drawn one after another without replacement. Given that the first ball drawn was black, find the probability that the second ball drawn is red.",
    options: ["A) 4/10", "B) 2/5", "C) 5/9", "D) 4/9"],
    answer: "D",
    explanation: "After one black ball is removed, the bag has 4 red and 5 black balls, i.e. 9 balls total. P(second ball is red | first was black) = 4/9.",
    difficulty: "moderate"
  },
  {
    id: 6133,
    text: "The sum of the first 20 terms of an arithmetic progression is 650, and the sum of the first 10 terms is 175. Find the 15th term of the progression.",
    options: ["A) 46", "B) 43", "C) 49", "D) 52"],
    answer: "A",
    explanation: "Using Sn = n/2[2a+(n-1)d]: S20=10[2a+19d]=650 gives 2a+19d=65. S10=5[2a+9d]=175 gives 2a+9d=35. Subtracting: 10d=30, so d=3, and 2a+27=35 gives a=4. The 15th term = a+14d = 4+42 = 46.",
    difficulty: "very hard"
  },
  {
    id: 6134,
    text: "The sum to infinity of a geometric progression is 15, and the sum of the squares of its terms (also a GP to infinity) is 45. Find the common ratio of the original progression.",
    options: ["A) 1/3", "B) 2/3", "C) 3/4", "D) 3/5"],
    answer: "B",
    explanation: "Sum to infinity: a/(1-r)=15, so a=15(1-r). Sum of squares: a^2/(1-r^2)=45, so a^2=45(1-r)(1+r). Substituting: [15(1-r)]^2=45(1-r)(1+r), i.e. 225(1-r)^2=45(1-r)(1+r). Dividing both sides by (1-r): 225(1-r)=45(1+r), so 225-225r=45+45r, giving 180=270r, so r=2/3.",
    difficulty: "very hard"
  },
  {
    id: 6135,
    text: "If alpha and beta are the roots of the equation x^2 - 7x + 12 = 0, find the value of alpha^3 + beta^3.",
    options: ["A) 85", "B) 98", "C) 91", "D) 79"],
    answer: "C",
    explanation: "From the equation, alpha+beta=7 and alpha x beta=12. Using the identity alpha^3+beta^3=(alpha+beta)^3-3(alpha x beta)(alpha+beta) = 343 - 3(12)(7) = 343 - 252 = 91.",
    difficulty: "moderate"
  },
  {
    id: 6136,
    text: "A function f satisfies f(x+y) = f(x) + f(y) for all real x and y, and f(1) = 5. Find the value of f(7).",
    options: ["A) 12", "B) 25", "C) 30", "D) 35"],
    answer: "D",
    explanation: "The additive functional equation gives f(n) = n x f(1) for positive integers n (apply the rule repeatedly: f(2)=2f(1), f(3)=f(2)+f(1)=3f(1), and so on). So f(7) = 7 x 5 = 35.",
    difficulty: "moderate"
  },
  {
    id: 6137,
    text: "In a class of 100 students, 50 play cricket, 40 play football, and 30 play hockey. 15 play both cricket and football, 12 play both football and hockey, 10 play both cricket and hockey, and 5 play all three games. How many students play none of the three games?",
    options: ["A) 12", "B) 15", "C) 10", "D) 18"],
    answer: "A",
    explanation: "Using the inclusion-exclusion principle: |C union F union H| = 50+40+30-15-12-10+5 = 88. Students playing none of the three = 100 - 88 = 12.",
    difficulty: "hard"
  },
  {
    id: 6138,
    text: "In triangle ABC, DE is drawn parallel to BC, with D on AB and E on AC, such that AD:DB = 2:3. If the area of triangle ADE is 16 cm^2, find the area of the trapezium DBCE.",
    options: ["A) 80 cm^2", "B) 84 cm^2", "C) 88 cm^2", "D) 75 cm^2"],
    answer: "B",
    explanation: "Since DE is parallel to BC, triangle ADE is similar to triangle ABC with AD:AB = 2:5. Ratio of areas = (2/5)^2 = 4/25. So area of ABC = 16 x 25/4 = 100 cm^2. Area of trapezium DBCE = 100 - 16 = 84 cm^2.",
    difficulty: "hard"
  },
  {
    id: 6139,
    text: "Two circles of radii 8 cm and 3 cm have their centres 13 cm apart. Find the length of the direct common tangent to the two circles.",
    options: ["A) 10 cm", "B) 11 cm", "C) 12 cm", "D) 13 cm"],
    answer: "C",
    explanation: "Length of direct common tangent = sqrt(d^2 - (r1-r2)^2) = sqrt(13^2 - (8-3)^2) = sqrt(169 - 25) = sqrt(144) = 12 cm.",
    difficulty: "moderate"
  },
  {
    id: 6140,
    text: "A solid is formed by mounting a cone of height 6 cm on top of a cylinder of the same base radius 7 cm and height 10 cm. Find the total volume of the solid. (Use pi = 22/7)",
    options: ["A) 1680 cm^3", "B) 1764 cm^3", "C) 1932 cm^3", "D) 1848 cm^3"],
    answer: "D",
    explanation: "Cylinder volume = pi r^2 h = (22/7) x 49 x 10 = 154 x 10 = 1540 cm^3. Cone volume = (1/3) x (22/7) x 49 x 6 = (1/3) x 154 x 6 = 154 x 2 = 308 cm^3. Total volume = 1540 + 308 = 1848 cm^3.",
    difficulty: "very hard"
  },
  {
    id: 6141,
    text: "Find the area of the triangle formed by the points A(2,3), B(6,3), and C(4,7).",
    options: ["A) 8", "B) 10", "C) 12", "D) 6"],
    answer: "A",
    explanation: "Area = (1/2)|x1(y2-y3)+x2(y3-y1)+x3(y1-y2)| = (1/2)|2(3-7)+6(7-3)+4(3-3)| = (1/2)|-8+24+0| = (1/2)(16) = 8.",
    difficulty: "moderate"
  },
  {
    id: 6142,
    text: "At what time between 4 o'clock and 5 o'clock will the minute hand and the hour hand of a clock be exactly opposite each other (that is, 180 degrees apart)?",
    options: ["A) 4:48", "B) 4:54 6/11", "C) 4:50", "D) 4:56 4/11"],
    answer: "B",
    explanation: "Angle of hour hand at H hours M minutes = 30H + 0.5M. Angle of minute hand = 6M. For the hands to be opposite: 6M - (30H+0.5M) = 180, so 5.5M = 180+30H. For H=4: 5.5M = 180+120 = 300, giving M = 300/5.5 = 54 6/11 minutes. So the time is 4:54 6/11.",
    difficulty: "hard"
  },
  {
    id: 6143,
    text: "If 1st January 2024 was a Monday, what day of the week was 1st January 2025? (Note: 2024 is a leap year.)",
    options: ["A) Tuesday", "B) Thursday", "C) Wednesday", "D) Friday"],
    answer: "C",
    explanation: "2024, being a leap year, has 366 days. 366 mod 7 = 2, so the day of the week advances by 2 days. Monday + 2 days = Wednesday. So 1st January 2025 was a Wednesday.",
    difficulty: "moderate"
  },
  {
    id: 6144,
    text: "The present age of a father is 3 times the age of his son. 10 years ago, the father's age was 5 times the son's age at that time. Find the father's present age.",
    options: ["A) 45", "B) 50", "C) 55", "D) 60"],
    answer: "D",
    explanation: "Let son's present age = x, so father's = 3x. Ten years ago: 3x-10 = 5(x-10), i.e. 3x-10=5x-50, so 40=2x, giving x=20. Father's present age = 3x = 60.",
    difficulty: "moderate"
  },
  {
    id: 6145,
    text: "Two trains of lengths 150 m and 120 m are running towards each other on parallel tracks at speeds of 54 km/h and 36 km/h respectively. Find the time taken for them to cross each other completely.",
    options: ["A) 10.8 seconds", "B) 9.6 seconds", "C) 12 seconds", "D) 11.2 seconds"],
    answer: "A",
    explanation: "Since the trains move towards each other, relative speed = 54+36 = 90 km/h = 90 x 5/18 = 25 m/s. Total distance to be covered = sum of lengths = 150+120 = 270 m. Time = 270/25 = 10.8 seconds.",
    difficulty: "moderate"
  },
  {
    id: 6146,
    text: "In a 1000 m race, A beats B by 100 m. In another race of the same distance, B beats C by 100 m. Assuming each runner maintains a uniform speed throughout, by how many metres does A beat C in a 1000 m race?",
    options: ["A) 180 m", "B) 190 m", "C) 200 m", "D) 171 m"],
    answer: "B",
    explanation: "When A covers 1000 m, B covers 900 m, so speed ratio A:B = 1000:900 = 10:9. When B covers 1000 m, C covers 900 m, so B:C = 10:9. Combining (scaling B's value to match): A:B:C = 100:90:81. When A runs 1000 m, C covers (81/100) x 1000 = 810 m. So A beats C by 1000-810 = 190 m.",
    difficulty: "very hard"
  },
  {
    id: 6147,
    text: "The difference between the compound interest and the simple interest on a sum for 2 years at 10% per annum is ₹150. Find the sum.",
    options: ["A) ₹12,000", "B) ₹18,000", "C) ₹15,000", "D) ₹10,000"],
    answer: "C",
    explanation: "For 2 years, the difference between CI and SI is given by P x (r/100)^2. So P x (10/100)^2 = 150, i.e. P x 0.01 = 150, giving P = 15,000.",
    difficulty: "moderate"
  },
  {
    id: 6148,
    text: "In a survey of 200 people, 60% like tea, 45% like coffee, and 20% like both tea and coffee. What percentage of people like neither tea nor coffee?",
    options: ["A) 20%", "B) 10%", "C) 25%", "D) 15%"],
    answer: "D",
    explanation: "Percentage liking tea or coffee = 60+45-20 = 85%. Percentage liking neither = 100-85 = 15%.",
    difficulty: "easy"
  },
  {
    id: 6149,
    text: "Solve for x: x^2 - 5x + 6 < 0. Find the range of values of x that satisfy this inequality.",
    options: ["A) 2 < x < 3", "B) x < 2 or x > 3", "C) -3 < x < -2", "D) x <= 2 or x >= 3"],
    answer: "A",
    explanation: "Factorising: x^2-5x+6 = (x-2)(x-3). Since the coefficient of x^2 is positive, the expression is negative between the roots. So the solution is 2 < x < 3.",
    difficulty: "moderate"
  },
  {
    id: 6150,
    text: "A can complete a piece of work in 15 days and B can complete the same work in 10 days. They work together for 3 days, after which A leaves and B completes the remaining work alone. If the total wages for the work are ₹3000, and wages are divided in proportion to the work each person actually completed, find B's share of the wages.",
    options: ["A) ₹2,100", "B) ₹2,400", "C) ₹1,800", "D) ₹2,250"],
    answer: "B",
    explanation: "A's rate = 1/15, B's rate = 1/10. In 3 days together, A completes 3 x 1/15 = 1/5 of the work, and B completes 3 x 1/10 = 3/10 of the work. Total work done in 3 days = 1/5+3/10 = 1/2, so remaining 1/2 is completed by B alone. B's total work = 3/10 + 1/2 = 3/10+5/10 = 8/10 = 4/5. A's total work = 1/5. Wage ratio A:B = 1/5 : 4/5 = 1:4. B's share = 3000 x 4/5 = ₹2,400.",
    difficulty: "very hard"
  }

];
