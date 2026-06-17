// eng_rc3.js – Dr Shetye Academic Programme
// English — Reading Comprehension (CAT / IIM Level) — Test 3
// 12 Questions · IDs 5501–5512 · 12 Marks · 20 Minutes
// Passage 1: The Tragedy of the Commons Revisited (Economics / Game Theory)
// Passage 2: The Aesthetics of Imperfection (Art Philosophy / Cross-Cultural)

var RC_PASSAGES = {

  "passage_1": {
    title: "Passage 1 of 2",
    label: "Read the following passage carefully and answer Questions 1–6.",
    text: `In 1968, ecologist Garrett Hardin published an essay that would reshape how economists and policymakers think about shared resources. The 'tragedy of the commons' described a deceptively simple scenario: a pasture open to all herders, each of whom benefits individually from adding one more animal to graze, while the cost of overgrazing is distributed across the entire community. Rational self-interest, Hardin argued, leads inexorably to collective ruin — every herder adds animals until the pasture is destroyed, a outcome no individual herder wanted but each was powerless to prevent alone.

The elegance of Hardin's model lay in its generality. It seemed to explain overfishing, deforestation, air pollution, and antibiotic resistance with a single logical structure: individually rational decisions aggregating into collectively irrational outcomes. For decades, the tragedy of the commons functioned as a foundational justification for two policy prescriptions — privatisation, which internalises costs by assigning ownership, or centralised regulation, which imposes external constraints on individual behaviour.

Elinor Ostrom's research, which earned her the Nobel Prize in Economics in 2009, complicated this binary considerably. Studying centuries-old irrigation systems in Spain, communal forests in Switzerland, and fisheries in Maine, Ostrom documented numerous instances where communities had sustainably managed shared resources for generations without either privatisation or top-down state control. The common thread was not the absence of rules but their bottom-up, context-sensitive design: resource users themselves established monitoring systems, graduated sanctions for violations, and low-cost conflict resolution mechanisms.

Ostrom's framework identified design principles that distinguished durable commons institutions from failed ones: clearly defined boundaries of both the resource and the user community; rules tailored to local ecological conditions rather than imported uniformly; participation of resource users in rule-making; and nested layers of governance for resources spanning larger jurisdictions. Crucially, these were not romantic appeals to communal harmony — Ostrom was explicit that without monitoring and graduated sanctions, even well-designed commons collapse into free-riding.

The lesson is not that Hardin was wrong, but that he described one possible equilibrium, not an inevitability. Whether a commons tragedy unfolds depends on whether a community can develop and enforce its own institutions — a capacity that varies enormously with group size, resource visibility, cultural history, and the presence (or absence) of external actors disrupting local arrangements. Privatisation and centralised regulation remain useful tools, but they are not the only — nor always the best — alternatives to ruin.`
  },

  "passage_2": {
    title: "Passage 2 of 2",
    label: "Read the following passage carefully and answer Questions 7–12.",
    text: `Japanese aesthetics offers a sustained meditation on imperfection that stands in sharp contrast to the classical Western pursuit of idealised form. The concept of wabi-sabi — etymologically rooted in notions of rustic simplicity (wabi) and the beauty of age and transience (sabi) — finds value precisely in what Western aesthetic traditions have historically treated as defects: asymmetry, roughness, the visible marks of time and use.

The practice of kintsugi, repairing broken pottery with gold-dusted lacquer, exemplifies this sensibility concretely. Rather than concealing the fracture or discarding the damaged piece, kintsugi makes the repair conspicuous, often more visually striking than the original unbroken object. The cracks become a feature, not a flaw — a visual record of the object's history, and an implicit argument that breakage need not constitute the end of an object's value but rather the beginning of a new phase in it.

This stands in instructive contrast to the Platonic tradition that has shaped much of Western art theory, in which the value of an object derives from its proximity to an ideal, unchanging form. A chipped vase, on this view, is a degraded instance of vase-ness, diminished by its distance from perfection. Wabi-sabi inverts the hierarchy: the chip is not a deviation from the object's true nature but a manifestation of its honest temporal existence — its participation in the universal condition of impermanence that Buddhist philosophy terms mujō.

Contemporary design theorists have increasingly drawn on wabi-sabi to critique what they describe as the 'tyranny of newness' in industrial and digital design — the assumption that value depreciates with use and that obsolescence, rather than patina, is the natural fate of objects. Smartphone manufacturers, by this critique, manufacture desire for the unblemished and unscratched, training consumers to discard rather than repair, and to associate visible wear with diminished worth rather than accumulated history.

Yet the appropriation of wabi-sabi by Western design and marketing has not been without its critics, who note a tendency to flatten a philosophically rich tradition — embedded in centuries of specific religious, social, and material practice — into a decorating aesthetic of muted colours and deliberately distressed surfaces. The risk, as with many cross-cultural aesthetic borrowings, is that the philosophy is hollowed out even as its visual vocabulary is retained.`
  }
};

var questions = [

  // ══ PASSAGE 1: Tragedy of the Commons — Q1–Q6 (IDs 5501–5506) ══

  {
    id: 5501, section: "English",
    passage: "passage_1",
    text: "The central purpose of the passage is to:",
    options: [
      "A) Demonstrate that Garrett Hardin's theory has been completely disproven by modern economics",
      "B) Argue that all shared resources should be managed through community-based institutions rather than markets",
      "C) Provide a comprehensive history of the Nobel Prize in Economics",
      "D) Show how Ostrom's empirical research refined Hardin's model by revealing community-based alternatives to privatisation and state regulation"
    ],
    answer: "D",
    explanation: "The passage introduces Hardin's tragedy of the commons, explains its influence on policy (privatisation/regulation), then shows how Ostrom's research complicated this binary by documenting successful community-managed commons. The conclusion explicitly states Hardin 'described one possible equilibrium, not an inevitability.' Option B captures this refinement, not outright disproof (A) or a universal prescription (C)."
  },

  {
    id: 5502, section: "English",
    passage: "passage_1",
    text: "According to the passage, what was the 'common thread' among Ostrom's successful examples of commons management?",
    options: [
      "A) Resource users themselves developed locally-tailored rules, monitoring, and sanctions rather than relying on rules imposed from outside",
      "B) Government agencies provided consistent external enforcement of rules",
      "C) All of them eventually transitioned to privatised ownership structures",
      "D) The communities studied were all small enough to rely on informal social pressure alone"
    ],
    answer: "A",
    explanation: "The passage states the common thread was 'bottom-up, context-sensitive design: resource users themselves established monitoring systems, graduated sanctions for violations, and low-cost conflict resolution mechanisms.' Option C captures this. Options A and B contradict the passage (these were neither privatised nor externally enforced); D oversimplifies by ignoring the explicit mention of formal monitoring and sanctions."
  },

  {
    id: 5503, section: "English",
    passage: "passage_1",
    text: "The author includes the detail that Ostrom 'was explicit that without monitoring and graduated sanctions, even well-designed commons collapse into free-riding' primarily to:",
    options: [
      "A) Criticise Ostrom's research as ultimately supporting Hardin's original pessimistic conclusion",
      "B) Pre-empt a romanticised misreading of her work as simply advocating trust-based community harmony without enforcement mechanisms",
      "C) Suggest that free-riding is impossible to prevent in any commons arrangement",
      "D) Argue that government regulation is always necessary to prevent free-riding"
    ],
    answer: "B",
    explanation: "The sentence begins with 'Crucially' and explicitly states this point is 'not romantic appeals to communal harmony.' The author is correcting a potential misinterpretation — Ostrom's commons are not held together by goodwill alone but by real enforcement structures. Option B captures this corrective function. The detail does not support Hardin's pessimism (A) — quite the opposite, since enforcement is shown to work."
  },

  {
    id: 5504, section: "English",
    passage: "passage_1",
    text: "Which of the following scenarios would the author most likely classify as an example of Ostrom's design principles failing to be applied?",
    options: [
      "A) A national government imposes identical water-usage quotas on every farming region in the country regardless of local rainfall or soil conditions",
      "B) A fishing community sets catch limits based on annual scientific surveys of fish populations conducted by the fishers themselves",
      "C) A forest cooperative excludes outsiders and requires members to report violations to an elected local council",
      "D) A village establishes escalating penalties for repeated violations of grazing limits, beginning with warnings and ending with exclusion"
    ],
    answer: "A",
    explanation: "Ostrom's principles emphasise 'rules tailored to local ecological conditions rather than imported uniformly.' Option B directly violates this — uniform national quotas ignoring local variation. Options A, C, and D exemplify Ostrom's principles: scientific local monitoring (A), defined boundaries and community participation (C), and graduated sanctions (D)."
  },

  {
    id: 5505, section: "English",
    passage: "passage_1",
    text: "The word 'inexorably' in the first paragraph most nearly means:",
    options: [
      "A) Unpredictably", "B) Inevitably and unstoppably", "C) Slowly and gradually", "D) Occasionally and randomly"
    ],
    answer: "B",
    explanation: "The sentence states 'Rational self-interest, Hardin argued, leads inexorably to collective ruin.' This describes Hardin's claim that the outcome is unavoidable, following with relentless certainty from individual rationality. 'Inexorably' means impossible to stop or prevent — closest to 'inevitably and unstoppably.'"
  },

  {
    id: 5506, section: "English",
    passage: "passage_1",
    text: "Which of the following best captures the relationship between the final paragraph and the rest of the passage?",
    options: [
      "A) It introduces an entirely new topic unrelated to the preceding discussion",
      "B) It synthesises the tension between Hardin and Ostrom by reframing the issue as contingent on specific conditions rather than as a binary contest of right versus wrong theory",
      "C) It rejects both Hardin's and Ostrom's frameworks in favour of a third, unstated alternative",
      "D) It simply restates Hardin's original argument without modification"
    ],
    answer: "B",
    explanation: "The final paragraph states 'The lesson is not that Hardin was wrong, but that he described one possible equilibrium' and lists the variables (group size, resource visibility, cultural history) that determine outcomes. This is a synthesis — both theorists are partially right depending on context — not a rejection of either (C) or a restatement of Hardin alone (D). Option B captures this synthesising function."
  },

  // ══ PASSAGE 2: Aesthetics of Imperfection — Q7–Q12 (IDs 5507–5512) ══

  {
    id: 5507, section: "English",
    passage: "passage_2",
    text: "The primary purpose of the passage is to:",
    options: [
      "A) Provide step-by-step instructions for performing kintsugi pottery repair",
      "B) Argue that all Western design philosophy is inferior to Japanese aesthetic traditions",
      "C) Document the history of the Nobel Prize-winning research on Japanese ceramics",
      "D) Explain wabi-sabi as a philosophical alternative to Western idealised aesthetics, illustrate it through kintsugi, and examine its contemporary cross-cultural appropriation"
    ],
    answer: "D",
    explanation: "The passage defines wabi-sabi, contrasts it with Platonic Western aesthetics, illustrates the concept through kintsugi, extends it to a critique of contemporary design, and ends with a caution about superficial cross-cultural borrowing. Option B captures this full progression. Option A is too narrow (no instructions given); C overstates the argument; D is irrelevant."
  },

  {
    id: 5508, section: "English",
    passage: "passage_2",
    text: "According to the passage, kintsugi differs from conventional pottery repair in that it:",
    options: [
      "A) Deliberately makes the repair visible and aesthetically prominent rather than disguising the damage",
      "B) Uses a more expensive material than the original pottery to reduce production costs",
      "C) Is performed only by professional Buddhist monks as a religious ritual",
      "D) Results in a less durable object than conventional repair methods"
    ],
    answer: "A",
    explanation: "The passage states kintsugi 'makes the repair conspicuous, often more visually striking than the original unbroken object,' contrasted with 'concealing the fracture.' Option B captures this defining feature. Options A, C, and D introduce claims not present in the passage."
  },

  {
    id: 5509, section: "English",
    passage: "passage_2",
    text: "The author uses the phrase 'a degraded instance of vase-ness' to characterise:",
    options: [
      "A) The wabi-sabi view that all imperfect objects retain full aesthetic value",
      "B) The Platonic view that a chipped vase is diminished by its distance from an ideal, unchanging form",
      "C) The kintsugi practice of repairing pottery with gold lacquer",
      "D) The Buddhist concept of mujō or universal impermanence"
    ],
    answer: "B",
    explanation: "The phrase appears directly after describing 'the Platonic tradition... in which the value of an object derives from its proximity to an ideal, unchanging form.' A chipped vase is a 'degraded instance' precisely because it falls short of this Platonic ideal form. Option B correctly attributes this phrase to the Platonic, not wabi-sabi, framework — the passage uses it to characterise the view it is contrasting wabi-sabi against."
  },

  {
    id: 5510, section: "English",
    passage: "passage_2",
    text: "The author's attitude toward the Western design industry's adoption of wabi-sabi can best be described as:",
    options: [
      "A) Wholly approving — the author believes this adoption has successfully preserved the philosophy's depth",
      "B) Wholly dismissive — the author believes wabi-sabi has no relevance outside Japan",
      "C) Measured — the author acknowledges its use as a critique of disposability culture while cautioning against superficial appropriation",
      "D) Indifferent — the author presents the topic without expressing any evaluative judgment"
    ],
    answer: "C",
    explanation: "The passage notes design theorists use wabi-sabi productively to critique 'the tyranny of newness,' but then notes 'critics' who observe a 'tendency to flatten a philosophically rich tradition... into a decorating aesthetic.' This is a balanced, two-sided assessment — neither wholesale endorsement (A) nor dismissal (B), and clearly evaluative, not indifferent (D). Option C is correct."
  },

  {
    id: 5511, section: "English",
    passage: "passage_2",
    text: "Which of the following, if true, would most strengthen the author's claim about the 'tyranny of newness' in industrial design?",
    options: [
      "A) A survey finds that most consumers report feeling no particular preference between new and used electronic devices",
      "B) A study shows that smartphone manufacturers intentionally design batteries to degrade after a fixed number of charge cycles, encouraging replacement over repair",
      "C) Sales data shows that vintage and antique furniture markets have grown steadily over the past decade",
      "D) Research finds that wabi-sabi principles are taught in art schools across several Western countries"
    ],
    answer: "B",
    explanation: "The 'tyranny of newness' claim is that obsolescence (rather than patina) is treated as the natural fate of objects, driven by manufacturer choices, not just consumer preference. Option B provides direct evidence of manufacturers deliberately engineering obsolescence to discourage repair — strongly supporting the critique. Option A would weaken it (no consumer preference for new); C and D are tangential, not direct evidence about industrial design practices."
  },

  {
    id: 5512, section: "English",
    passage: "passage_2",
    text: "The final paragraph's reference to aesthetic borrowings being 'hollowed out even as its visual vocabulary is retained' suggests that:",
    options: [
      "A) Western designers have physically removed all original Japanese elements from wabi-sabi-inspired products",
      "B) The visual style of wabi-sabi (muted colours, distressed surfaces) can be reproduced without preserving its underlying philosophical and cultural meaning",
      "C) Japanese ceramicists no longer practice traditional kintsugi techniques",
      "D) Visual vocabulary is more important to preserve than philosophical content in any cross-cultural exchange"
    ],
    answer: "B",
    explanation: "The phrase means that the surface aesthetics (visual vocabulary — colours, textures) survive the cross-cultural transfer, but the deeper philosophical content (the 'hollowed out' part — ideas about impermanence, repair, and value) is lost. Option B captures this distinction between superficial style and substantive meaning. Option D inverts the author's implicit critique, which laments the loss of philosophical content, not endorses it."
  }

];
