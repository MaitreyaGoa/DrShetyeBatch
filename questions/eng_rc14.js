// eng_rc14.js – Dr Shetye Academic Programme
// English — Reading Comprehension (CAT / IIM Level) — Test 14
// 15 Questions · IDs 5707–5721 · 15 Marks · 30 Minutes
// Passage 1 (Q1–Q5):  The Replication Crisis and the Sociology of Scientific Knowledge
// Passage 2 (Q6–Q10): Cultural Transmission and the Persistence of Tacit Knowledge
// Passage 3 (Q11–Q15): Central Bank Independence and the Politics of Monetary Technocracy

var RC_PASSAGES = {

  "passage_1": {
    title: "Passage 1 of 3",
    label: "Read the following passage carefully and answer Questions 1–5.",
    text: `In 2015, a consortium of researchers under the banner of the Open Science Collaboration attempted to replicate 100 studies published in three leading psychology journals. Barely more than a third produced the same result the second time around, and even the "successes" typically yielded effect sizes roughly half the magnitude originally reported. The finding, since echoed in economics, cancer biology, and social psychology, has come to be called the replication crisis, and it has provoked two starkly different diagnoses whose disagreement illuminates something deeper than methodology.

The first diagnosis is essentially technical: statistics were misused, sample sizes were too small, and a perverse incentive structure — publish or perish, reward novelty over confirmation — rewarded researchers who fished among their data for significant results, however inadvertently, a practice now known as "p-hacking." On this reading, the crisis is a solvable engineering problem, addressable through preregistration of hypotheses, larger samples, and open data-sharing mandates, all of which have gained institutional traction since 2015.

The second diagnosis is more unsettling because it locates the trouble not in bad practice but in the fundamental architecture of how scientific claims travel. Drawing on a tradition running back to Ludwik Fleck and popularised by Bruno Latour, this view holds that a published finding is never merely a report of what was found; it is also, inescapably, an artifact of the network of instruments, conventions, and social credentialing that produced it. A finding becomes a "fact" not purely by correspondence with an independent reality but through an accumulating process of citation, replication attempts, and institutional endorsement — the very process the replication crisis has revealed to be more fragile and more sociologically contingent than practitioners liked to admit.

These two diagnoses are not, strictly, incompatible, but they carry different implications for reform. The technical diagnosis treats the crisis as a temporary embarrassment on the road to more rigorous science; the sociological diagnosis suggests that the appearance of a clean separation between "rigorous" and "sloppy" science was itself always somewhat illusory, and that what changed in 2015 was not the underlying epistemic terrain but merely who was permitted to say so loudly. Critics of the sociological view worry it slides toward a corrosive relativism in which no finding can be trusted, but its defenders insist the opposite: that acknowledging science's social scaffolding is precisely what allows the scaffolding to be strengthened, rather than mistaken for the building itself.`
  },

  "passage_2": {
    title: "Passage 2 of 3",
    label: "Read the following passage carefully and answer Questions 6–10.",
    text: `Anthropologists studying skill transmission in traditional craft communities — boatbuilders in Melanesia, weavers in the Andes, potters in rural Japan — have long noted a puzzling asymmetry: apprentices routinely acquire competencies that their teachers cannot fully articulate, and that no manual could adequately encode. The boatbuilder cannot say precisely how much curvature a hull's rib requires; he can only demonstrate, correct, and wait for the apprentice's hands to learn what his words cannot capture. Michael Polanyi, writing in the 1950s, named this phenomenon tacit knowledge and argued that it was not merely knowledge insufficiently explained but knowledge that is in principle resistant to full articulation — we know, as he put it, more than we can tell.

The persistence of such knowledge poses an evolutionary puzzle. If a skill cannot be transmitted through explicit instruction, its survival across generations depends on an unbroken chain of embodied practice: a single interruption — a famine, a war, an apprentice who leaves for the city — can extinguish centuries of accumulated craft knowledge in a single generation, in a way that plainly-codified knowledge, preserved in texts, cannot be extinguished. This fragility has led some cultural evolutionists to argue that tacit knowledge represents a distinct transmission channel, governed by different selective pressures than the transmission of explicit, propositional knowledge — a channel more sensitive to the density and continuity of face-to-face community than to the availability of any recording technology.

Yet the picture is complicated by a countervailing observation: some tacit skills have proven remarkably durable even across long transmission gaps, resurrected by determined revivalists working from fragmentary physical evidence — surviving artifacts, archival photographs, the residual movements of an elderly practitioner's hands. This suggests tacit knowledge is not wholly discontinuous with explicit knowledge but exists on a continuum, with some skills more "recoverable" from indirect evidence than others, depending on how much of the skill's logic is embedded in the physical properties of the material itself rather than in the idiosyncratic judgment of the practitioner. A ceramicist's sense of when clay has reached the correct plasticity, for instance, is highly recoverable because it is disciplined by the clay's own physical behaviour; a doctor's diagnostic intuition, shaped by thousands of idiosyncratic patient encounters, is markedly less so.`
  },

  "passage_3": {
    title: "Passage 3 of 3",
    label: "Read the following passage carefully and answer Questions 11–15.",
    text: `The doctrine that central banks should be insulated from electoral politics is, historically speaking, a remarkably recent consensus. As late as the 1970s, most of the world's monetary authorities operated as ordinary government departments, taking interest-rate direction from finance ministries answerable to voters. The shift toward formal independence — beginning with New Zealand's Reserve Bank Act of 1989 and rapidly emulated by dozens of countries through the 1990s — was justified by a specific piece of economic reasoning: the "time-inconsistency problem" identified by economists Finn Kydland and Edward Prescott, which holds that a government facing an election has a standing incentive to loosen monetary policy for short-term growth even when it privately knows this will produce inflation later, and that rational markets, anticipating this temptation, will price in higher inflation expectations regardless of the government's actual intentions. An independent central bank, insulated from electoral incentives and bound by a narrow inflation-targeting mandate, was meant to solve this problem by making the commitment to price stability credible rather than merely promised.

For roughly three decades this arrangement was treated as settled technocratic wisdom, its legitimacy resting on a division of labour: elected governments would set fiscal policy and answer to voters for it, while unelected monetary technocrats would manage inflation, answerable chiefly to a numerical target and to their own professional reputations. The 2008 financial crisis and its aftermath disturbed this settlement considerably. Central banks, deploying instruments such as quantitative easing that reached far beyond conventional interest-rate adjustment, found themselves making decisions with unmistakably distributive consequences — inflating asset prices disproportionately held by the wealthy, for instance — while remaining formally unaccountable to the electorates most affected by those consequences. Critics on both the left and right have since converged, from different directions, on a shared complaint: that central bank independence, once framed as a narrow technical fix for a narrow technical problem, has quietly expanded into a form of governance exercising enormous distributive power while remaining largely exempt from democratic scrutiny.

Defenders of independence do not dispute that central banks now wield broader influence than the original time-inconsistency argument anticipated; they argue instead that the alternative — subjecting monetary policy once again to electoral cycles — would simply reintroduce the inflationary bias the whole arrangement was designed to prevent, and that the correct remedy for expanded technocratic power is narrower legal mandates, not the abolition of independence itself.`
  }

};

var questions = [

  // ---------- PASSAGE 1 ----------
  {
    id: 5707,
    section: "English",
    passage: "passage_1",
    text: "The primary purpose of the passage is to:",
    options: [
      "A) Present and contrast two explanations for the replication crisis, and explore what their disagreement reveals about the nature of scientific fact-making",
      "B) Argue that the replication crisis in psychology has been definitively resolved through preregistration and open-data reforms",
      "C) Defend Bruno Latour's sociological theory of science against critics who accuse it of relativism",
      "D) Demonstrate that p-hacking is the single most significant cause of irreproducible research findings"
    ],
    answer: "A",
    explanation: "The passage lays out the technical diagnosis and the sociological diagnosis of the replication crisis and explicitly discusses what their disagreement implies about how scientific facts come to be accepted — it does not claim resolution (B), does not defend Latour against relativism charges so much as report both sides (C), and treats p-hacking as only one part of the technical diagnosis, not the sole cause (D)."
  },
  {
    id: 5708,
    section: "English",
    passage: "passage_1",
    text: "According to the passage, proponents of the 'technical' diagnosis of the replication crisis would most likely agree that:",
    options: [
      "A) The crisis reveals that no scientific finding can ever be considered a stable fact",
      "B) The problem lies in flawed methodological practices and incentive structures rather than in the deeper process by which findings become accepted as facts",
      "C) Bruno Latour's account of citation networks is the most useful framework for understanding scientific credibility",
      "D) Effect sizes reported in original psychology studies were systematically identical to those found in replication attempts"
    ],
    answer: "B",
    explanation: "The technical diagnosis, as described, locates the problem in statistics, sample sizes, and incentive structures — a 'solvable engineering problem' — not in the deeper sociological process of fact-making, which is the domain of the second diagnosis. Options A and C belong to the sociological camp, and D contradicts the passage's statement that replicated effect sizes were roughly half the original magnitude."
  },
  {
    id: 5709,
    section: "English",
    passage: "passage_1",
    text: "In the context of the passage, the phrase 'corrosive relativism' (final paragraph) refers to:",
    options: [
      "A) The technical practice of p-hacking that corrodes the reliability of published statistics",
      "B) The institutional reforms of preregistration that critics believe erode scientific creativity",
      "C) The concern that treating facts as socially constructed will erode the basis for trusting any scientific finding",
      "D) The process by which citation networks corrode the reputations of individual researchers"
    ],
    answer: "C",
    explanation: "The passage states that critics of the sociological view worry it 'slides toward a corrosive relativism in which no finding can be trusted' — this is a concern about undermining trust in scientific findings generally, matching option C."
  },
  {
    id: 5710,
    section: "English",
    passage: "passage_1",
    text: "Which of the following best describes the finding of the 2015 Open Science Collaboration replication attempt, as reported in the passage?",
    options: [
      "A) All 100 studies replicated successfully with identical effect sizes",
      "B) Exactly half of the studies replicated, with effect sizes roughly doubling",
      "C) The replication attempt was abandoned before completion due to funding constraints",
      "D) Fewer than half of the studies replicated, and successful replications generally showed weaker effects than the originals"
    ],
    answer: "D",
    explanation: "The passage states that 'barely more than a third produced the same result' and that even successful replications 'typically yielded effect sizes roughly half the magnitude originally reported' — both facts match option D."
  },
  {
    id: 5711,
    section: "English",
    passage: "passage_1",
    text: "With respect to the two diagnoses discussed in the passage, the author's stance can best be described as:",
    options: [
      "A) Presenting both diagnoses as reasonable but noting they carry different, not entirely reconcilable, implications for how science should be reformed",
      "B) Firmly endorsing the technical diagnosis as the only credible explanation",
      "C) Dismissing the sociological diagnosis as unfalsifiable and therefore unscientific",
      "D) Suggesting that the two diagnoses are simply different words for an identical underlying claim"
    ],
    answer: "A",
    explanation: "The final paragraph explicitly states the two diagnoses 'are not, strictly, incompatible, but they carry different implications for reform,' which is neutral, balanced framing rather than endorsement or dismissal of either side — matching option A."
  },

  // ---------- PASSAGE 2 ----------
  {
    id: 5712,
    section: "English",
    passage: "passage_2",
    text: "The central concern of the passage is:",
    options: [
      "A) Documenting the decline of traditional craft communities worldwide",
      "B) Examining the nature of tacit knowledge, its fragile transmission, and the extent to which it can be recovered from indirect evidence",
      "C) Explaining Michael Polanyi's theory of scientific discovery",
      "D) Arguing that explicit, text-based knowledge is inherently superior to embodied craft knowledge"
    ],
    answer: "B",
    explanation: "The passage moves from defining tacit knowledge, to the puzzle of its fragile transmission, to the countervailing observation about recoverability — all organised around examining tacit knowledge's nature and durability, matching option B."
  },
  {
    id: 5713,
    section: "English",
    passage: "passage_2",
    text: "The passage suggests that tacit knowledge is more vulnerable to permanent loss than explicit, codified knowledge primarily because:",
    options: [
      "A) Tacit knowledge is inherently less valuable to the communities that hold it",
      "B) Written manuals are more prone to physical destruction than human memory",
      "C) Its transmission depends on continuous embodied practice rather than on a record that can survive an interruption",
      "D) Apprentices are generally less motivated than students of explicit disciplines"
    ],
    answer: "C",
    explanation: "The passage states that tacit knowledge's survival 'depends on an unbroken chain of embodied practice' and that a single interruption can extinguish it 'in a way that plainly-codified knowledge, preserved in texts, cannot be extinguished' — matching option C."
  },
  {
    id: 5714,
    section: "English",
    passage: "passage_2",
    text: "As used in the passage, a tacit skill being 'recoverable' means that:",
    options: [
      "A) The skill can be fully explained in a written manual for the first time",
      "B) The original practitioners are able to resume teaching the skill after retirement",
      "C) The skill has already been lost and cannot be revived under any circumstances",
      "D) The skill can be reconstructed from indirect evidence after a transmission gap, particularly where it is disciplined by the physical properties of the material involved"
    ],
    answer: "D",
    explanation: "The passage describes recoverability via revivalists working 'from fragmentary physical evidence' and links it to how much of a skill's logic is 'embedded in the physical properties of the material itself' — matching option D."
  },
  {
    id: 5715,
    section: "English",
    passage: "passage_2",
    text: "According to the passage, Michael Polanyi's central claim about tacit knowledge was that:",
    options: [
      "A) It is, in principle, not fully expressible even when the practitioner tries to articulate it",
      "B) It results purely from a lack of adequate technical vocabulary in a given craft",
      "C) It applies only to boatbuilding and weaving traditions",
      "D) It can always be transferred through sufficiently detailed written instructions"
    ],
    answer: "A",
    explanation: "The passage says Polanyi argued tacit knowledge 'was not merely knowledge insufficiently explained but knowledge that is in principle resistant to full articulation' — matching option A, and directly contradicting B and D."
  },
  {
    id: 5716,
    section: "English",
    passage: "passage_2",
    text: "Based on the distinction drawn in the final paragraph, which of the following pairs would the passage most likely treat as an example of a highly recoverable skill and a poorly recoverable skill, respectively?",
    options: [
      "A) A physician's diagnostic intuition (highly recoverable); a potter's sense of clay plasticity (poorly recoverable)",
      "B) A potter's sense of clay plasticity (highly recoverable); a physician's diagnostic intuition built from patient encounters (poorly recoverable)",
      "C) Both skills would be considered equally recoverable, since both are forms of tacit knowledge",
      "D) Neither skill is recoverable, since all tacit knowledge is lost once transmission is interrupted"
    ],
    answer: "B",
    explanation: "The passage gives exactly this pairing as its illustrative example: the ceramicist's sense of clay plasticity is 'highly recoverable' because it is disciplined by the clay's physical behaviour, while the doctor's diagnostic intuition is 'markedly less so' — matching option B."
  },

  // ---------- PASSAGE 3 ----------
  {
    id: 5717,
    section: "English",
    passage: "passage_3",
    text: "The passage is primarily concerned with:",
    options: [
      "A) Explaining the technical mechanics of quantitative easing",
      "B) Comparing New Zealand's Reserve Bank Act with monetary policy in other countries in exhaustive detail",
      "C) Tracing the rise of central bank independence and the growing tension between its original justification and its expanded, less accountable role after 2008",
      "D) Arguing that central banks should be abolished and monetary policy returned entirely to finance ministries"
    ],
    answer: "C",
    explanation: "The passage traces independence from its 1980s origins in the time-inconsistency argument through its post-2008 expansion into a less accountable form of governance, and closes with both critics' and defenders' positions — matching option C rather than the narrower or more extreme alternatives."
  },
  {
    id: 5718,
    section: "English",
    passage: "passage_3",
    text: "According to the passage, the 'time-inconsistency problem' identified by Kydland and Prescott refers to:",
    options: [
      "A) The tendency of central banks to change interest rates too frequently",
      "B) The difficulty of accurately timing when quantitative easing should begin",
      "C) The tendency of independent central banks to ignore inflation targets over time",
      "D) An elected government's incentive to loosen monetary policy before an election even though this produces inflation later, an incentive that markets anticipate and price in regardless"
    ],
    answer: "D",
    explanation: "The passage defines the time-inconsistency problem as a government's 'standing incentive to loosen monetary policy for short-term growth even when it privately knows this will produce inflation later,' with markets pricing in higher inflation expectations 'regardless of the government's actual intentions' — matching option D exactly."
  },
  {
    id: 5719,
    section: "English",
    passage: "passage_3",
    text: "The passage suggests that critics who converged 'from different directions' after 2008 (paragraph 2) were united primarily by their concern that:",
    options: [
      "A) Central banks had accumulated significant distributive power while remaining largely unaccountable to the electorates affected by their decisions",
      "B) Central banks had abandoned inflation targeting altogether",
      "C) Quantitative easing had proven completely ineffective at stimulating growth",
      "D) Elected governments should be given full control over interest rate decisions once again"
    ],
    answer: "A",
    explanation: "The passage states the shared complaint was that independence 'has quietly expanded into a form of governance exercising enormous distributive power while remaining largely exempt from democratic scrutiny' — matching option A."
  },
  {
    id: 5720,
    section: "English",
    passage: "passage_3",
    text: "The phrase 'settled technocratic wisdom' (paragraph 2) is used by the author to convey that, for roughly three decades:",
    options: [
      "A) Economists universally agreed on the exact inflation target every central bank should adopt",
      "B) Central bank independence was widely accepted as an uncontroversial, expert-driven arrangement, a status the passage suggests was later disturbed",
      "C) The division of labour between fiscal and monetary policy was enshrined in international law",
      "D) No serious criticism of central bank independence existed prior to 1989"
    ],
    answer: "B",
    explanation: "The passage says this arrangement was 'treated as settled technocratic wisdom' for three decades before the 2008 crisis 'disturbed this settlement considerably' — indicating a widely accepted, expert-driven consensus that was later unsettled, matching option B."
  },
  {
    id: 5721,
    section: "English",
    passage: "passage_3",
    text: "According to the final paragraph, defenders of central bank independence respond to critics primarily by:",
    options: [
      "A) Denying that central banks have accumulated any additional influence since 2008",
      "B) Proposing that central banks be merged with finance ministries entirely",
      "C) Conceding the expanded influence but arguing that returning monetary policy to electoral cycles would reintroduce the inflationary bias independence was designed to prevent",
      "D) Insisting that quantitative easing had no distributive effects whatsoever"
    ],
    answer: "C",
    explanation: "The passage states defenders 'do not dispute' the expanded influence but argue that returning monetary policy to electoral cycles 'would simply reintroduce the inflationary bias the whole arrangement was designed to prevent' — matching option C."
  }

];
