// eng_rc6.js – Dr Shetye Academic Programme
// English — Reading Comprehension (CAT / IIM Level) — Test 6
// 12 Questions · IDs 5559–5570 · 12 Marks · 20 Minutes
// Passage 1: The Tyranny of Metrics in Institutional Decision-Making (Organisational Theory)
// Passage 2: The Evolution of Property Rights in the Digital Commons (Law / Economics)

var RC_PASSAGES = {

  "passage_1": {
    title: "Passage 1 of 2",
    label: "Read the following passage carefully and answer Questions 1–6.",
    text: `The modern obsession with quantifiable performance metrics rests on an intuitive premise: what gets measured gets managed, and what gets managed improves. Historian Jerry Z. Muller's critique of this premise, articulated comprehensively in his 2018 book, does not dispute that measurement can illuminate genuine improvements. His argument is narrower and more unsettling: that an excessive reliance on metrics — what he terms 'metric fixation' — frequently produces outcomes opposite to those intended, while simultaneously degrading the professional judgment that good measurement is meant to supplement rather than replace.

The mechanism Muller identifies operates through several interlocking failures. The first is goal displacement: when an organisation's success is judged by a specific metric, employees rationally optimise for that metric rather than for the underlying goal the metric was designed to approximate. A surgeon evaluated on patient mortality rates has a measurable incentive to avoid operating on the sickest, highest-risk patients — improving their statistics while denying treatment to those who need it most. A police department evaluated on crime clearance rates has incentives to reclassify difficult-to-solve crimes into categories that do not count against clearance statistics, improving the metric while leaving the underlying crime problem untouched or even worsened.

The second failure is the suppression of tacit, unmeasurable knowledge. Professionals — surgeons, teachers, judges, engineers — typically possess judgment accumulated through years of experience that resists reduction to quantifiable proxies. When organisations mandate that decisions be justified primarily by reference to standardised metrics, they implicitly devalue this tacit expertise, sometimes driving experienced professionals to leave a field reorganised around metrics they regard as poor proxies for quality.

The third, and in Muller's account the most corrosive, failure is the diversion of resources toward measuring and reporting rather than toward the activity being measured. Hospitals devote substantial clinical staff time to data entry rather than patient care; universities devote faculty time to compiling metrics for rankings rather than to research or teaching. The transaction costs of measurement, often invisible in cost-benefit analyses that focus only on the supposed benefits of accountability, can exceed the value the metrics generate.

None of this constitutes an argument against measurement as such — Muller is explicit that well-designed metrics, used judiciously and combined with professional judgment, retain genuine value. His target is the belief that measurement can or should substitute entirely for judgment, particularly in domains characterised by complexity, ambiguity, and contextual variation that resist full quantification. The proper question, in his framework, is not whether to measure, but what, how much, and with what degree of confidence the resulting numbers should be trusted relative to the experienced judgment of those closest to the activity being assessed.`
  },

  "passage_2": {
    title: "Passage 2 of 2",
    label: "Read the following passage carefully and answer Questions 7–12.",
    text: `Property law has historically organised itself around the management of scarcity: physical objects can typically be possessed by only one person or entity at a time, and legal systems developed correspondingly to allocate exclusive rights of use, transfer, and exclusion. Digital information disrupts this foundational assumption in ways legal scholars are still working through. A digital file, unlike a physical object, can be copied at near-zero marginal cost without depriving the original possessor of their copy — what economists term a 'non-rivalrous good.' This single technical fact destabilises centuries of property doctrine built around rivalrous physical objects.

Intellectual property law's initial response was to manufacture artificial scarcity through legal restriction rather than physical limitation: copyright, patent, and trademark law create exclusive rights not because the underlying information is naturally scarce, but because policymakers judged that granting temporary monopolies would incentivise the costly initial creation of works that, once created, could be reproduced freely. This justification — sometimes called the 'incentive theory' of intellectual property — has always existed in tension with the static efficiency loss that monopoly pricing imposes once a work exists, since the marginal cost of an additional digital copy is essentially zero, yet legally-protected works are priced well above that marginal cost.

The internet has generated a parallel structure entirely outside formal intellectual property law: norm-based governance of digital commons. Open-source software communities, Wikipedia's editorial ecosystem, and academic pre-print servers all manage shared digital resources through informal norms, reputational incentives, and community-enforced conventions rather than through exclusive legal ownership. These systems frequently produce extraordinarily high-quality outputs — the Linux kernel, underpinning the majority of the world's servers and most smartphones, was developed almost entirely outside conventional intellectual property protection, relying instead on a licensing structure (the GNU General Public License) specifically designed to keep the resulting code perpetually open rather than exclusively owned.

The success of these commons-based systems raises a question Elinor Ostrom's earlier work on physical commons did not directly address: whether the absence of rivalry in digital goods makes commons governance easier to sustain than in the physical commons she studied, where overuse genuinely depletes a finite resource. Some scholars argue digital commons should be more stable precisely because no individual's use diminishes availability for others, eliminating the overgrazing dynamic central to physical commons tragedies. Others counter that digital commons face a different threat entirely: not depletion through overuse, but underprovision through free-riding, since the same non-rivalry that prevents depletion also weakens the incentive for any individual contributor to bear the cost of creation when free-riders can benefit identically without contributing.

Platform companies have introduced a further complication: rather than relying on either exclusive ownership or open commons, dominant digital platforms increasingly govern access to digital resources through proprietary infrastructure — algorithms, app stores, and application programming interfaces that they control unilaterally. This represents a third governance model, neither classical property nor digital commons, in which access depends not on legal ownership or community norms but on the platform's continually revisable terms of service.`
  }
};

var questions = [

  // ══ PASSAGE 1: Tyranny of Metrics — Q1–Q6 (IDs 5559–5564) ══

  {
    id: 5559, section: "English",
    passage: "passage_1",
    text: "The primary purpose of the passage is to:",
    options: [
      "A) Argue that all forms of performance measurement should be abolished in professional institutions",
      "B) Prove that surgeons and police departments are deliberately falsifying their performance data",
      "C) Present Muller's critique of excessive metric reliance, detailing the specific mechanisms by which it produces counterproductive outcomes, while clarifying his actual, more limited target",
      "D) Provide a comprehensive history of organisational management theory since the 1980s"
    ],
    answer: "C",
    explanation: "The passage introduces Muller's critique, details three specific failure mechanisms (goal displacement, suppression of tacit knowledge, resource diversion), then explicitly clarifies in the final paragraph that his target is narrower than abolishing measurement — it is the substitution of judgment by measurement. Option B captures this complete, nuanced argument."
  },

  {
    id: 5560, section: "English",
    passage: "passage_1",
    text: "The example of a surgeon avoiding high-risk patients is used in the passage to illustrate which specific mechanism?",
    options: [
      "A) Suppression of tacit, unmeasurable knowledge", "B) Diversion of resources toward measuring rather than the activity itself", "C) Goal displacement, where optimising for a metric diverges from optimising for the underlying goal", "D) The general unreliability of all medical statistics"
    ],
    answer: "C",
    explanation: "The passage explicitly introduces this example under 'the first failure is goal displacement: when an organisation's success is judged by a specific metric, employees rationally optimise for that metric rather than for the underlying goal.' The surgeon optimises mortality statistics rather than overall patient welfare — a clear instance of goal displacement, not the other two failure types described later in the passage."
  },

  {
    id: 5561, section: "English",
    passage: "passage_1",
    text: "According to the passage, what does the 'suppression of tacit, unmeasurable knowledge' refer to?",
    options: [
      "A) The deliberate destruction of professional training manuals by metric-focused organisations",
      "B) A legal requirement preventing professionals from sharing knowledge with colleagues",
      "C) The complete absence of any measurable data in highly skilled professions",
      "D) The devaluation of experience-based professional judgment that resists reduction to standardised, quantifiable proxies"
    ],
    answer: "D",
    explanation: "The passage states this failure occurs because professionals 'possess judgment accumulated through years of experience that resists reduction to quantifiable proxies,' and that metric-focused organisations 'implicitly devalue this tacit expertise.' Option B precisely captures this devaluation of non-quantifiable experiential judgment; options A, C, and D introduce claims absent from the passage."
  },

  {
    id: 5562, section: "English",
    passage: "passage_1",
    text: "Why does the passage describe the diversion of resources toward measurement as the 'most corrosive' failure in Muller's account?",
    options: [
      "A) Because the transaction costs of measurement are often invisible in standard cost-benefit analyses, meaning the true costs of metric fixation are systematically underestimated",
      "B) Because it is explicitly stated to be the most expensive failure in absolute monetary terms across all organisations",
      "C) Because it is the only one of the three failures that can be directly observed and verified",
      "D) Because it primarily affects only the healthcare industry and no other sector"
    ],
    answer: "A",
    explanation: "The passage notes these transaction costs are 'often invisible in cost-benefit analyses that focus only on the supposed benefits of accountability' and 'can exceed the value the metrics generate.' This invisibility makes the failure especially insidious — its true scale goes systematically unrecognised in standard evaluative frameworks. Option B captures this specific reasoning; A, C, and D introduce claims not present in the passage."
  },

  {
    id: 5563, section: "English",
    passage: "passage_1",
    text: "The passage's final paragraph clarifies Muller's position by stating that the proper question is not 'whether to measure' but rather:",
    options: [
      "A) Whether professional judgment should be entirely eliminated from institutional decision-making",
      "B) Whether metrics should always override the opinions of senior management",
      "C) How quickly an organisation can transition entirely away from human judgment toward algorithmic decision-making",
      "D) What should be measured, how much weight to give the resulting numbers, and how much confidence to place in them relative to experienced professional judgment"
    ],
    answer: "D",
    explanation: "The passage states explicitly: 'The proper question, in his framework, is not whether to measure, but what, how much, and with what degree of confidence the resulting numbers should be trusted relative to the experienced judgment of those closest to the activity.' Option B is a precise restatement of this nuanced position."
  },

  {
    id: 5564, section: "English",
    passage: "passage_1",
    text: "Which of the following, if true, would most directly support Muller's critique of metric fixation as described in the passage?",
    options: [
      "A) A hospital that reduced its emphasis on mortality-rate rankings saw an increase in surgeons willing to operate on complex, high-risk cases",
      "B) A university that increased its research output rankings also saw a proportional increase in genuinely novel scientific discoveries",
      "C) A police department that improved its crime clearance statistics also saw an actual reduction in the underlying crime rate",
      "D) A surgeon with the best measured mortality statistics in their hospital was also independently verified as the most skilled surgeon by peer review"
    ],
    answer: "A",
    explanation: "Muller's critique centres on goal displacement: metrics causing professionals to avoid difficult cases rather than improving outcomes. Option A directly illustrates the predicted mechanism in reverse — removing the metric pressure restored willingness to treat complex cases, exactly what the passage's surgeon example warns against. Options B, C, and D would each suggest metrics and underlying goals remained well-aligned, which would weaken rather than support the critique."
  },

  // ══ PASSAGE 2: Digital Commons — Q7–Q12 (IDs 5565–5570) ══

  {
    id: 5565, section: "English",
    passage: "passage_2",
    text: "The term 'non-rivalrous good' as used in the passage refers to:",
    options: [
      "A) A good that can be copied or used by additional people without depriving existing possessors of their own use of it",
      "B) A good that can be possessed by only one person at any given time, like a physical object",
      "C) A good that has no economic value whatsoever in any market",
      "D) A good that is illegal to copy or distribute under any circumstances"
    ],
    answer: "A",
    explanation: "The passage defines this directly: a digital file 'can be copied at near-zero marginal cost without depriving the original possessor of their copy.' This is the defining feature of non-rivalry — one person's use or copy does not reduce availability for others. Option B is a precise restatement; A describes the opposite concept (rivalrous goods)."
  },

  {
    id: 5566, section: "English",
    passage: "passage_2",
    text: "According to the passage, what is the central justification behind the 'incentive theory' of intellectual property?",
    options: [
      "A) Information is naturally scarce, so legal protection merely reflects its inherent physical limitations",
      "B) All countries are legally required by international treaty to enforce identical intellectual property laws",
      "C) Granting temporary legal monopolies incentivises the costly initial creation of works that could otherwise be freely reproduced once they exist",
      "D) Patents and copyrights primarily exist to generate tax revenue for governments"
    ],
    answer: "C",
    explanation: "The passage states that policymakers granted 'temporary monopolies' because doing so would 'incentivise the costly initial creation of works that, once created, could be reproduced freely.' Option B is a precise restatement of this justification. Option A is explicitly contradicted — the passage states IP law manufactures 'artificial scarcity' precisely because information is NOT naturally scarce."
  },

  {
    id: 5567, section: "English",
    passage: "passage_2",
    text: "The Linux kernel is cited in the passage as an example of:",
    options: [
      "A) A failed attempt to create open-source software that ultimately had to be patented to survive commercially",
      "B) A platform company that controls access to its code through proprietary terms of service",
      "C) A government-funded software project developed exclusively by university researchers",
      "D) A digital resource managed successfully through norm-based, community-enforced governance rather than conventional intellectual property protection"
    ],
    answer: "D",
    explanation: "The passage states the Linux kernel 'was developed almost entirely outside conventional intellectual property protection, relying instead on a licensing structure... specifically designed to keep the resulting code perpetually open.' This exemplifies the 'norm-based governance of digital commons' discussed in the preceding sentence. Option B captures this precisely; D describes the very different platform model discussed later in the passage."
  },

  {
    id: 5568, section: "English",
    passage: "passage_2",
    text: "The passage suggests that the absence of rivalry in digital goods creates which key tension for sustaining digital commons?",
    options: [
      "A) While non-rivalry eliminates the overuse/depletion problem central to physical commons, it simultaneously weakens individual incentives to bear the cost of contribution, since free-riders benefit without contributing",
      "B) Digital commons cannot exist at all because all digital information must eventually become privately owned",
      "C) Digital commons are inherently less valuable than physical commons because they cannot be physically possessed",
      "D) Non-rivalry makes digital commons identical in every respect to physical commons studied by Ostrom"
    ],
    answer: "A",
    explanation: "The passage explicitly presents this tension: some scholars argue non-rivalry should make digital commons MORE stable (no overgrazing dynamic), while others argue it creates underprovision through free-riding, since 'the same non-rivalry that prevents depletion also weakens the incentive for any individual contributor to bear the cost of creation.' Option B captures this precise double-edged dynamic; D is directly contradicted by the passage's emphasis on this difference."
  },

  {
    id: 5569, section: "English",
    passage: "passage_2",
    text: "The passage describes platform companies' governance model as a 'third governance model' because it differs from both classical property and digital commons in that:",
    options: [
      "A) Platform companies do not generate any revenue from their digital infrastructure",
      "B) Access depends on unilaterally controlled and continually revisable terms of service rather than legal ownership rights or community-enforced norms",
      "C) Platform companies are legally required to make all their code open-source within five years of release",
      "D) Platforms exclusively serve government clients rather than individual consumers"
    ],
    answer: "B",
    explanation: "The passage states platforms govern access 'not [through] legal ownership or community norms but [through] the platform's continually revisable terms of service' — distinguishing this from classical IP (legal ownership) and digital commons (community norms). Option B precisely captures this third, distinct mechanism; A, C, and D introduce unsupported claims."
  },

  {
    id: 5570, section: "English",
    passage: "passage_2",
    text: "Which of the following relationships best parallels the tension the passage identifies between 'incentive theory' and the 'static efficiency loss' of intellectual property monopolies?",
    options: [
      "A) A relationship where both effects always reinforce each other with no inherent tension",
      "B) A trade-off where measures that encourage future creation of new works (via monopoly profits) simultaneously impose costs by pricing existing works above their near-zero marginal cost of reproduction",
      "C) A relationship that exists only in theoretical economics textbooks with no real-world application",
      "D) A situation where the static efficiency loss always outweighs the benefits of incentivising creation in every single case"
    ],
    answer: "B",
    explanation: "The passage explicitly frames this as a tension: IP incentivises 'costly initial creation,' but 'this justification has always existed in tension with the static efficiency loss that monopoly pricing imposes once a work exists, since the marginal cost of an additional digital copy is essentially zero, yet legally-protected works are priced well above that marginal cost.' Option B captures both sides of this genuine trade-off without claiming a universal resolution, unlike the overstated claims in A and D."
  }

];
