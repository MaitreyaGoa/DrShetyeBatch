// eng_rc7.js – Dr Shetye Academic Programme
// English — Reading Comprehension (CAT / IIM Level) — Test 7
// 12 Questions · IDs 5581–5592 · 12 Marks · 20 Minutes
// Passage 1: The Principal-Agent Problem in Modern Organisations (Economics / Management)
// Passage 2: The Semantics of Silence in Cross-Cultural Communication (Linguistics / Anthropology)

var RC_PASSAGES = {

  "passage_1": {
    title: "Passage 1 of 2",
    label: "Read the following passage carefully and answer Questions 1–6.",
    text: `Economists have long recognised that whenever one party (the principal) delegates decision-making authority to another (the agent), a structural tension emerges if their interests are not perfectly aligned. The shareholder who hires a chief executive, the patient who consults a surgeon, the voter who elects a representative — each delegates because they lack the time, expertise, or capacity to act directly, yet each delegation creates an opportunity for the agent to pursue interests that diverge from the principal's, often in ways the principal cannot easily detect.

The canonical illustration involves executive compensation. Shareholders want managers to maximise long-term firm value; managers, evaluated and compensated on shorter time horizons, have rational incentives to favour decisions that boost near-term metrics — quarterly earnings, stock price — even when these decisions impose costs that materialise only after the manager has moved to a new role or retired with their bonus secured. The mismatch between the time horizon over which an agent is evaluated and the time horizon over which their decisions generate consequences is a recurring structural feature of principal-agent problems across remarkably different domains.

Economists have proposed several mechanisms to narrow this gap, each with characteristic limitations. Performance-based compensation — tying pay to measurable outcomes — attempts to align incentives directly, but inherits all the difficulties of metric fixation: agents optimise for the specific metric chosen rather than the principal's true underlying objective, particularly when the metric is an imperfect proxy. Monitoring — direct oversight of agent behaviour — reduces information asymmetry but is costly to implement and itself requires the principal to develop expertise comparable to the agent's, partially defeating the original purpose of delegation. Reputation mechanisms, which rely on agents valuing future opportunities enough to forgo present exploitation, work only when agents expect to interact repeatedly with the same or observably connected principals — a condition that breaks down precisely in large, anonymous markets where reputational consequences are diffuse or slow to materialise.

A less frequently discussed but structurally important mitigant is the selection of agents whose own preferences happen to align with the principal's objectives independent of any external incentive — what economists term 'mission-driven' agents. A doctor motivated by genuine commitment to patient welfare requires less monitoring than one motivated purely by fee-for-service income; a civil servant who values public welfare for its own sake requires fewer performance metrics than one optimising solely for promotion. This insight suggests that organisational design focused exclusively on incentive alignment, while analytically tractable, may neglect a complementary strategy: selecting and cultivating agents whose intrinsic motivations reduce the underlying tension the formal incentive structures are designed to manage.

The persistent difficulty, of course, is that intrinsic motivation is far harder to measure, verify, or select for at the point of hiring than are the formal credentials and quantifiable past performance metrics that conventional selection processes rely upon — meaning organisations frequently default to incentive-alignment mechanisms not because they are more effective, but because they are more legible to the selection and evaluation processes organisations already have in place.`
  },

  "passage_2": {
    title: "Passage 2 of 2",
    label: "Read the following passage carefully and answer Questions 7–12.",
    text: `Linguistic anthropologists have long observed that silence carries communicative meaning that varies dramatically across cultures, a variation with consequences extending well beyond polite conversation into business negotiation, diplomacy, and cross-cultural misunderstanding more broadly. In many Western communicative norms, particularly in North American business contexts, silence during conversation is frequently interpreted as a negative signal — discomfort, disagreement, disengagement, or a failure to understand — generating social pressure to fill conversational gaps promptly.

This norm is far from universal. In numerous East Asian and Indigenous North American communicative traditions, extended silence during conversation, negotiation, or decision-making carries markedly different connotations: thoughtful deliberation, respect for the gravity of the matter under discussion, or an implicit acknowledgment that not every communicative gap requires immediate verbal filling. Anthropologist Keith Basso's influential ethnographic work among the Western Apache documented contexts — meeting strangers, courting, the return of a family member after prolonged absence — in which silence functioned not as a communicative failure but as the situationally appropriate response, with premature speech regarded as presumptuous or even socially aggressive.

The practical stakes of this variation become acute in cross-cultural business negotiation. A negotiator from a communicative tradition where silence signals discomfort may interpret a counterpart's silence following a proposal as rejection or disengagement, prompting them to immediately offer concessions to fill the silence — concessions the silent counterpart, operating under a framework where silence signals careful consideration, never requested and may not have expected. Negotiation researchers have documented numerous instances of unintended concessions extracted not through deliberate strategic silence but through this kind of cross-cultural miscalibration, where each party's silence-interpretation norms operate invisibly to the other.

This dynamic is further complicated by the fact that strategic deployment of silence — using silence deliberately to create pressure on a counterpart — is itself a recognised negotiation tactic within some traditions, meaning that observed silence in any specific cross-cultural interaction cannot be reliably classified into a single interpretive category without additional context: it might reflect genuine cultural norms around deliberation, deliberate strategic pressure, simple difficulty with a foreign language reducing the silent party's verbal fluency, or some combination of all three, with the listener typically unable to distinguish among these possibilities from the silence alone.

Cross-cultural communication training has increasingly emphasised explicit meta-communication — directly discussing communicative norms before high-stakes interactions — as a partial remedy, since silence's meaning, unlike many other communicative signals, often cannot be reliably inferred from context alone when the interacting parties operate under sufficiently different cultural frameworks. The deeper lesson generalises beyond silence specifically: communicative signals that function as unambiguous information in one cultural framework can function as nearly empty signals — carrying no reliable inferential content for an outside observer — in another, and the failure to recognise this asymmetry is itself a frequent and underappreciated source of cross-cultural friction.`
  }
};

var questions = [

  // ══ PASSAGE 1: Principal-Agent Problem — Q1–Q6 (IDs 5581–5586) ══

  {
    id: 5581, section: "English",
    passage: "passage_1",
    text: "The primary purpose of the passage is to:",
    options: [
      "A) Prove that all executive compensation systems are fraudulent and should be abolished",
      "B) Argue that monitoring is always superior to performance-based compensation in every organisational context",
      "C) Provide a comprehensive history of executive compensation regulation since 1950",
      "D) Explain the structural mechanics of the principal-agent problem, survey conventional mitigation strategies and their limitations, and introduce an underappreciated alternative based on intrinsic motivation"
    ],
    answer: "D",
    explanation: "The passage defines the principal-agent problem, illustrates it via executive compensation, surveys three mitigation mechanisms (performance pay, monitoring, reputation) with their respective limitations, then introduces mission-driven agent selection as an underdiscussed complementary strategy, closing with why organisations underuse it. Option B captures this full progression."
  },

  {
    id: 5582, section: "English",
    passage: "passage_1",
    text: "According to the passage, what is the central mismatch illustrated by the executive compensation example?",
    options: [
      "A) The time horizon over which managers are evaluated and compensated diverges from the time horizon over which the consequences of their decisions actually materialise",
      "B) Managers are paid significantly less than shareholders believe they deserve",
      "C) Shareholders have no legal mechanism to remove underperforming executives under any circumstances",
      "D) Executive compensation is determined entirely by random chance rather than any measurable criteria"
    ],
    answer: "A",
    explanation: "The passage states this mismatch directly: managers favour decisions 'that boost near-term metrics... even when these decisions impose costs that materialise only after the manager has moved to a new role.' This temporal divergence between evaluation horizon and consequence horizon is explicitly called 'a recurring structural feature.' Option B is a precise restatement."
  },

  {
    id: 5583, section: "English",
    passage: "passage_1",
    text: "The passage notes that performance-based compensation 'inherits all the difficulties of metric fixation.' This means that:",
    options: [
      "A) Performance-based pay always results in lower total compensation than fixed salaries",
      "B) Performance-based compensation is illegal in most countries and cannot be implemented",
      "C) Agents will optimise for whichever specific metric is chosen for compensation, even when that metric imperfectly captures the principal's true underlying objective",
      "D) Metrics used in performance pay are always more accurate than monitoring-based assessments"
    ],
    answer: "C",
    explanation: "The passage explains that under performance-based pay, 'agents optimise for the specific metric chosen rather than the principal's true underlying objective, particularly when the metric is an imperfect proxy.' This is precisely the goal-displacement problem inherited from broader metric fixation concerns. Option B is a precise restatement; A, C, and D introduce unsupported claims."
  },

  {
    id: 5584, section: "English",
    passage: "passage_1",
    text: "Why does the passage state that reputation mechanisms 'break down precisely in large, anonymous markets'?",
    options: [
      "A) Reputation mechanisms require agents to expect repeated interaction with the same or observably connected principals, a condition unlikely to hold in large, anonymous settings where reputational consequences are diffuse",
      "B) Large markets always have stricter government regulation than small markets, making reputation unnecessary",
      "C) Anonymous markets have no agents or principals at all, making reputation irrelevant by definition",
      "D) Reputation mechanisms only function in markets with fewer than ten total participants"
    ],
    answer: "A",
    explanation: "The passage explicitly states reputation mechanisms 'work only when agents expect to interact repeatedly with the same or observably connected principals — a condition that breaks down precisely in large, anonymous markets where reputational consequences are diffuse or slow to materialise.' Option A is a precise restatement of this conditional mechanism."
  },

  {
    id: 5585, section: "English",
    passage: "passage_1",
    text: "The concept of a 'mission-driven' agent, as introduced in the fourth paragraph, refers to:",
    options: [
      "A) An agent who is contractually obligated to complete a specific number of tasks per year",
      "B) An agent who works exclusively for non-profit organisations rather than for-profit companies",
      "C) An agent who has received specialised military or government mission training",
      "D) An agent whose personal preferences happen to align with the principal's objectives independent of any external incentive structure"
    ],
    answer: "D",
    explanation: "The passage defines this directly: agents 'whose own preferences happen to align with the principal's objectives independent of any external incentive.' The examples given — a doctor motivated by patient welfare, a civil servant who values public welfare intrinsically — illustrate this alignment existing prior to and independent of any formal incentive scheme. Option B is a precise restatement."
  },

  {
    id: 5586, section: "English",
    passage: "passage_1",
    text: "The passage's final paragraph explains that organisations default to incentive-alignment mechanisms primarily because:",
    options: [
      "A) Incentive-alignment mechanisms are scientifically proven to be more effective than selecting for intrinsic motivation in all circumstances",
      "B) Intrinsic motivation is significantly harder to measure or verify at the hiring stage than the formal credentials and quantifiable metrics conventional selection processes already rely upon",
      "C) Government regulations legally require all organisations to use only incentive-based compensation systems",
      "D) Mission-driven agents are extremely rare and essentially do not exist in any real labour market"
    ],
    answer: "B",
    explanation: "The passage explicitly states organisations default to incentive-alignment 'not because they are more effective, but because they are more legible to the selection and evaluation processes organisations already have in place,' contrasted with intrinsic motivation being 'far harder to measure, verify, or select for.' Option B captures this precise reasoning; A directly contradicts the passage's claim."
  },

  // ══ PASSAGE 2: Semantics of Silence — Q7–Q12 (IDs 5587–5592) ══

  {
    id: 5587, section: "English",
    passage: "passage_2",
    text: "The primary purpose of the passage is to:",
    options: [
      "A) Argue that East Asian and Indigenous North American cultures are superior in their communication norms to Western cultures",
      "B) Provide a comprehensive technical glossary of all non-verbal communication signals used worldwide",
      "C) Examine how the interpretation of silence varies systematically across cultures, illustrate the practical consequences in cross-cultural negotiation, and generalise the lesson to other ambiguous communicative signals",
      "D) Prove that silence has no meaning whatsoever and should be eliminated from professional negotiations"
    ],
    answer: "C",
    explanation: "The passage establishes cross-cultural variation in silence's meaning, illustrates the negotiation stakes through concrete examples, discusses the difficulty of disambiguating silence's cause, and concludes by generalising to a broader principle about culturally-dependent communicative signals. Option B captures this complete progression without the value judgments in A or the overstated claims in C and D."
  },

  {
    id: 5588, section: "English",
    passage: "passage_2",
    text: "According to the passage, what did Keith Basso's ethnographic research among the Western Apache document?",
    options: [
      "A) Specific social contexts in which extended silence was the situationally appropriate response, with premature speech viewed as presumptuous or socially aggressive",
      "B) That the Western Apache language has no words for common everyday objects",
      "C) That the Western Apache strictly prohibit any form of verbal communication during formal ceremonies",
      "D) A complete grammar and dictionary of the Western Apache language"
    ],
    answer: "A",
    explanation: "The passage states Basso documented contexts 'in which silence functioned not as a communicative failure but as the situationally appropriate response, with premature speech regarded as presumptuous or even socially aggressive.' Option B is a precise restatement; A, C, and D introduce claims entirely absent from the passage."
  },

  {
    id: 5589, section: "English",
    passage: "passage_2",
    text: "The passage describes a scenario in which a negotiator offers unintended concessions. This occurs because:",
    options: [
      "A) The negotiator deliberately wants to lose the negotiation to maintain a good relationship",
      "B) International law requires negotiators to make concessions whenever a counterpart remains silent for over one minute",
      "C) The silent counterpart explicitly demanded the concessions through written correspondence",
      "D) The negotiator's own cultural framework interprets the counterpart's silence as discomfort or rejection, prompting concessions that the silent counterpart — operating under a different interpretive framework — never actually requested"
    ],
    answer: "D",
    explanation: "The passage explains this precisely: a negotiator whose tradition treats silence as discomfort 'may interpret a counterpart's silence... as rejection or disengagement, prompting them to immediately offer concessions... concessions the silent counterpart, operating under a framework where silence signals careful consideration, never requested.' Option B is a precise restatement of this cross-cultural miscalibration."
  },

  {
    id: 5590, section: "English",
    passage: "passage_2",
    text: "Why does the passage state that observed silence 'cannot be reliably classified into a single interpretive category without additional context'?",
    options: [
      "A) Because silence is always a sign of strategic negotiation tactics and nothing else",
      "B) Because silence could reflect genuine cultural deliberation norms, deliberate strategic pressure, language fluency difficulty, or some combination — and a listener typically cannot distinguish among these from the silence alone",
      "C) Because silence is scientifically impossible to measure using any current technology",
      "D) Because every culture in the world interprets silence in exactly the same way, making classification unnecessary"
    ],
    answer: "B",
    explanation: "The passage lists exactly these possibilities — 'genuine cultural norms around deliberation, deliberate strategic pressure, simple difficulty with a foreign language... or some combination of all three' — and notes 'the listener typically unable to distinguish among these possibilities from the silence alone.' Option B is a precise restatement; D directly contradicts the passage's central claim about cross-cultural variation."
  },

  {
    id: 5591, section: "English",
    passage: "passage_2",
    text: "The passage recommends 'explicit meta-communication' as a partial remedy. This refers to:",
    options: [
      "A) Communicating exclusively through written documents rather than spoken conversation",
      "B) Directly discussing communicative norms and expectations with a counterpart before a high-stakes interaction takes place",
      "C) Hiring a professional translator to convert silence into spoken words during negotiations",
      "D) Avoiding all cross-cultural negotiations entirely to prevent any possible misunderstanding"
    ],
    answer: "B",
    explanation: "The passage defines this directly: 'directly discussing communicative norms before high-stakes interactions.' This means explicitly clarifying how each party will interpret signals like silence before the actual negotiation begins, rather than relying on potentially mismatched implicit assumptions. Option B is a precise restatement."
  },

  {
    id: 5592, section: "English",
    passage: "passage_2",
    text: "The passage's final paragraph generalises its central lesson by stating that communicative signals which are unambiguous in one cultural framework can:",
    options: [
      "A) Always be perfectly translated into any other language without any loss of meaning",
      "B) Become entirely meaningless in all other contexts under all circumstances without exception",
      "C) Function as nearly empty signals carrying no reliable inferential content for an observer operating under a sufficiently different cultural framework",
      "D) Be legally banned in international business communication across all jurisdictions"
    ],
    answer: "C",
    explanation: "The passage states precisely: signals 'that function as unambiguous information in one cultural framework can function as nearly empty signals — carrying no reliable inferential content for an outside observer — in another.' Option C is an exact restatement of this generalising claim; A, B, and D all overstate or misstate the passage's careful, conditional phrasing."
  }

];
