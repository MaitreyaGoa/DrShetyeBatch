// eng_rc2.js – Dr Shetye Academic Programme
// English — Reading Comprehension (CAT / IIM Level) — Test 2
// 12 Questions · IDs 5413–5424 · 12 Marks · 20 Minutes
// Passage 1: Neuroscience of Decision Making (Science / Cognitive)
// Passage 2: The Paradox of Democratic Backsliding (Political Philosophy)

var RC_PASSAGES = {

  "passage_1": {
    title: "Passage 1 of 2",
    label: "Read the following passage carefully and answer Questions 1–6.",
    text: `For most of the twentieth century, the dominant model of human decision-making was the rational actor — a being who surveys available options, assigns probabilities to outcomes, calculates expected utilities, and selects the option that maximises personal welfare. This model, elegant in its mathematics and tractable in its predictions, underpinned classical economics, political theory, and public policy alike.

The neuroscientific revolution of the late twentieth century shattered this picture. Researchers such as Antonio Damasio demonstrated that patients with damage to the ventromedial prefrontal cortex — a region involved in processing emotion — were not liberated into hyper-rational decision-making. They were paralysed by it. Without emotional input, the infinite regress of cost-benefit analysis never terminates. Damasio's 'somatic marker hypothesis' proposed that emotions do not distort decisions but anchor them: a felt sense of unease or anticipation narrows the option space before deliberation begins.

Daniel Kahneman formalised these insights into a dual-process framework. System 1 thinking is fast, automatic, associative, and emotionally inflected; System 2 is slow, deliberate, effortful, and rule-governed. The critical finding is not merely that both systems exist, but that System 1 dominates in most real-world conditions. Under time pressure, cognitive load, or emotional arousal, System 2 is effectively disengaged. The heuristics and biases that characterise System 1 — availability, representativeness, anchoring — then determine outcomes.

The policy implications are profound. If humans do not maximise utility but instead satisfice — accepting the first adequately good option — then markets do not clear in the ways classical theory predicts. If loss aversion is twice as powerful as equivalent gain, then the framing of choices, not merely their content, determines preferences. The architecture of choice — what nudge theorists call 'choice architecture' — becomes a legitimate and powerful instrument of policy.

Critics of this programme, however, raise a disquieting possibility: if choice architecture can be deployed to steer behaviour toward socially beneficial ends, it can equally be deployed to steer it toward ends that benefit the choice architect. The distance between a nudge and a manipulation is, in practice, uncomfortably small — and the consent of the nudged is almost never solicited.`
  },

  "passage_2": {
    title: "Passage 2 of 2",
    label: "Read the following passage carefully and answer Questions 7–12.",
    text: `Democratic backsliding — the gradual erosion of democratic norms, institutions, and practices by leaders who arrive in power through legitimate democratic means — has become the defining political pathology of the twenty-first century. Unlike the coups and revolutions that terminated democracies in the twentieth century, contemporary backsliding is incremental, procedurally ambiguous, and often popularly supported. It does not announce itself as authoritarianism; it presents as reform.

The mechanism is well-documented. An elected leader, having won a genuine mandate, begins to weaken the institutions that constrain executive power: the judiciary is packed or intimidated, electoral commissions are staffed with loyalists, media outlets critical of the government face regulatory harassment, and civil society organisations are burdened with registration requirements and foreign-funding bans. Each step, taken individually, can be legally defended or attributed to administrative necessity. It is only in aggregate, and often only in retrospect, that the pattern reveals itself as systemic dismantling.

What makes contemporary backsliding so intellectually confounding is that it exploits democracy's own legitimating logic. Democratic leaders claim electoral mandates to override judicial constraints — the people, they argue, have spoken, and unelected courts have no right to frustrate the popular will. Constitutional amendments are passed by legislative supermajorities, making the changes formally legitimate. Referenda are used to approve measures that further concentrate power. The tools of democracy are weaponised against its substance.

Scholars such as Steven Levitsky and Lucan Way have distinguished between the 'competitive authoritarianism' that results — systems in which elections occur but the incumbent enjoys such structural advantages that genuine competition is impaired — and full authoritarianism, where elections are abandoned. This distinction matters for international response: competitive authoritarian regimes maintain the form of democracy, making external condemnation difficult and internal resistance psychologically harder to mobilise.

The deepest paradox may be this: democratic backsliding is most advanced in societies where democratic institutions are youngest and weakest, yet the normative resources for resisting it — an independent judiciary, a free press, a mobilised civil society — are precisely those that backsliding first destroys. The sequence matters as much as the destination.`
  }
};

var questions = [

  // ══ PASSAGE 1: Neuroscience of Decision Making — Q1–Q6 (IDs 5413–5418) ══

  {
    id: 5413, section: "English",
    passage: "passage_1",
    text: "The primary purpose of the passage is to:",
    options: [
      "A) Argue that classical economics is entirely wrong and should be abandoned",
      "B) Prove that emotional decision-making is superior to rational deliberation in all contexts",
      "C) Trace the evolution from a rational-actor model of decision-making to a neuroscientifically informed one, including its policy implications and ethical concerns",
      "D) Provide a technical account of the ventromedial prefrontal cortex and its role in emotion"
    ],
    answer: "C",
    explanation: "The passage moves systematically: it opens with the rational actor model, introduces Damasio's neuroscience (emotions anchor decisions), develops Kahneman's dual-process framework, discusses policy implications (nudge theory), and ends with an ethical concern (manipulation). Option C captures this full arc. Option A overstates the critique; B and D are too narrow."
  },

  {
    id: 5414, section: "English",
    passage: "passage_1",
    text: "Damasio's patients with damage to the ventromedial prefrontal cortex are cited to demonstrate that:",
    options: [
      "A) Emotional processing impairs rational decision-making by introducing bias",
      "B) Removing emotional input does not free decision-making but instead paralyses it",
      "C) The prefrontal cortex is the seat of rational thought and must be protected",
      "D) Patients with brain damage cannot make any decisions whatsoever"
    ],
    answer: "B",
    explanation: "The passage states that these patients 'were not liberated into hyper-rational decision-making. They were paralysed by it.' The point is that without emotional anchoring, cost-benefit analysis regresses infinitely and no decision is ever reached. Emotions are not biases to be removed but necessary inputs. Option B captures this precisely; A is the opposite of the point being made."
  },

  {
    id: 5415, section: "English",
    passage: "passage_1",
    text: "Which of the following best describes what the author means by 'the infinite regress of cost-benefit analysis never terminates'?",
    options: [
      "A) Mathematical calculations in economics are too complex for human brains to complete",
      "B) Without emotional input to narrow options, pure rational analysis generates endless sub-decisions, making a final choice impossible",
      "C) Cost-benefit analysis is a flawed method that should be replaced with intuition",
      "D) The human brain lacks the computational capacity needed for rational decision-making"
    ],
    answer: "B",
    explanation: "The phrase follows the observation that purely rational beings (Damasio's patients) are paralysed. Every option must be evaluated, but evaluating it requires comparing it to further sub-options, which require further comparisons — a regress with no natural stopping point. Emotions provide the stopping point by generating a felt response. Option B captures this mechanism. Options C and D introduce ideas not in the passage."
  },

  {
    id: 5416, section: "English",
    passage: "passage_1",
    text: "The author's use of the word 'satisfice' (paragraph 4) suggests that:",
    options: [
      "A) Human decision-makers accept the first sufficiently good option rather than exhaustively maximising utility",
      "B) Humans are irrational and therefore incapable of sound economic decisions",
      "C) Satisfaction and sacrifice are both necessary components of any economic choice",
      "D) Classical economics overestimates how much humans value satisfaction over efficiency"
    ],
    answer: "A",
    explanation: "'Satisfice' is a portmanteau of 'satisfy' and 'suffice', introduced by Herbert Simon to describe bounded rationality. The author uses it to contrast with 'maximise' — humans do not search exhaustively for the optimal option but stop when a good-enough option is found. This is the key departure from classical rational-actor theory. Option A captures the meaning precisely."
  },

  {
    id: 5417, section: "English",
    passage: "passage_1",
    text: "The author's tone in the final paragraph can best be described as:",
    options: [
      "A) Celebratory — the author endorses nudge theory as a breakthrough in policy design",
      "B) Dismissive — the author believes nudge theory is too weak to influence behaviour",
      "C) Cautionary — the author acknowledges the power of choice architecture but warns of its potential for misuse",
      "D) Neutral — the author presents both sides without expressing any personal perspective"
    ],
    answer: "C",
    explanation: "The final paragraph acknowledges that choice architecture is 'a legitimate and powerful instrument of policy' but immediately raises the concern that it can be used to benefit 'the choice architect' and that 'the consent of the nudged is almost never solicited.' The phrase 'uncomfortably small' reveals discomfort, not neutrality. This is a cautionary tone — not celebratory, not dismissive. Option C is correct."
  },

  {
    id: 5418, section: "English",
    passage: "passage_1",
    text: "Which of the following, if true, would most strengthen the dual-process framework described in the passage?",
    options: [
      "A) A study finds that experts in a field make decisions more slowly than novices",
      "B) Research shows that people under cognitive load revert to stereotypical thinking even when they have been trained to avoid it",
      "C) A survey reveals that most people prefer emotional appeals in advertisements over rational ones",
      "D) Neuroscientists discover a third cognitive system that operates independently of both System 1 and System 2"
    ],
    answer: "B",
    explanation: "The dual-process framework claims that System 1 dominates under cognitive load. Option B directly instantiates this: people under cognitive load (which disengages System 2) revert to heuristic (System 1) thinking even when trained otherwise. This strongly supports the framework's core claim. Option A weakens it (experts should be faster, not slower). Option D would undermine rather than strengthen the dual-process model."
  },

  // ══ PASSAGE 2: Democratic Backsliding — Q7–Q12 (IDs 5419–5424) ══

  {
    id: 5419, section: "English",
    passage: "passage_2",
    text: "According to the passage, what distinguishes contemporary democratic backsliding from earlier forms of democratic collapse?",
    options: [
      "A) Contemporary backsliding is more violent and rapid than twentieth-century coups",
      "B) Contemporary backsliding is driven by foreign interference rather than domestic actors",
      "C) Contemporary backsliding only occurs in newly formed democracies, not established ones",
      "D) Contemporary backsliding is gradual, procedurally legitimate in appearance, and often enjoys popular support"
    ],
    answer: "D",
    explanation: "The passage explicitly distinguishes contemporary backsliding from 'coups and revolutions': it is 'incremental, procedurally ambiguous, and often popularly supported' and 'presents as reform.' Option D captures all three distinguishing features. Option C is contradicted by the passage which discusses a range of democracies. Options A and B are not supported."
  },

  {
    id: 5420, section: "English",
    passage: "passage_2",
    text: "The author states that 'the tools of democracy are weaponised against its substance.' This means:",
    options: [
      "A) Physical weapons are used to suppress democratic movements",
      "B) Democratic procedures such as elections, amendments, and referenda are used to legitimise measures that undermine democratic governance",
      "C) Leaders use democratic rhetoric to disguise fundamentally authoritarian ideologies",
      "D) International democratic institutions are being used by authoritarian states to gain legitimacy"
    ],
    answer: "B",
    explanation: "The passage gives specific examples: 'Constitutional amendments are passed by legislative supermajorities'; 'Referenda are used to approve measures that further concentrate power.' These are formally democratic procedures used to produce anti-democratic outcomes. The tools (elections, amendments, referenda) are genuine democratic instruments; their substance (limiting competition, concentrating power) is authoritarian. Option B captures this irony precisely."
  },

  {
    id: 5421, section: "English",
    passage: "passage_2",
    text: "Why does the passage suggest that competitive authoritarian regimes are especially difficult to resist or condemn externally?",
    options: [
      "A) They have stronger military forces than full authoritarian regimes",
      "B) They maintain the formal appearance of democratic elections, making condemnation difficult and internal resistance harder to mobilise",
      "C) International organisations lack the legal authority to interfere in domestic electoral processes",
      "D) Citizens in competitive authoritarian regimes are generally satisfied with their governments"
    ],
    answer: "B",
    explanation: "The passage states: 'competitive authoritarian regimes maintain the form of democracy, making external condemnation difficult and internal resistance psychologically harder to mobilise.' The key word is 'form' — because elections still occur, external actors cannot easily condemn the system as authoritarian, and citizens find it harder to identify a clear line that has been crossed. Option B captures both the external and internal dimensions."
  },

  {
    id: 5422, section: "English",
    passage: "passage_2",
    text: "The phrase 'popularly supported' in the first paragraph is significant because it suggests that:",
    options: [
      "A) Democratic backsliding is impossible to resist since the majority always support their leaders",
      "B) Popular support is the most important indicator of whether a government is truly democratic",
      "C) Backsliding presents a paradox — the very people whose rights are being eroded may endorse the process, complicating the standard democratic defence of majority will",
      "D) Leaders who win popular support are immune from accusations of authoritarianism"
    ],
    answer: "C",
    explanation: "The paradox the author identifies is that democratic backsliding can be popularly endorsed — the majority supports the leader who is eroding minority rights and institutional checks. This complicates the standard argument that democratic legitimacy flows from popular will, since popular will itself can endorse anti-democratic measures. Option C captures this tension. Option A overclaims (resistance is not impossible); B and D are not the author's point."
  },

  {
    id: 5423, section: "English",
    passage: "passage_2",
    text: "The author describes democratic backsliding as 'intellectually confounding' primarily because:",
    options: [
      "A) Scholars disagree about whether backsliding is actually occurring in any specific country",
      "B) It is difficult to define democracy in a way that distinguishes it from authoritarianism",
      "C) It uses democracy's own legitimating mechanisms — elections, mandates, constitutional procedures — to undermine democratic substance",
      "D) The leaders who cause backsliding are typically more educated than those they replace"
    ],
    answer: "C",
    explanation: "The passage says backsliding 'exploits democracy's own legitimating logic' — electoral mandates override judicial constraints, supermajorities pass constitutional amendments, referenda approve power concentration. The confounding nature is that the methods are genuinely democratic in form. There is no external force to oppose; the attack comes from within democracy's own procedural arsenal. Option C captures this precisely."
  },

  {
    id: 5424, section: "English",
    passage: "passage_2",
    text: "The 'deepest paradox' identified in the final paragraph is best summarised as:",
    options: [
      "A) Democratic backsliding is most dangerous in fully authoritarian states where no elections occur",
      "B) The institutions most needed to resist backsliding are precisely the ones that backsliding systematically dismantles first",
      "C) Young democracies are inherently incapable of developing the institutions needed to sustain themselves",
      "D) The sequence of institutional collapse is unpredictable, making it impossible to design preventive measures"
    ],
    answer: "B",
    explanation: "The passage states: 'the normative resources for resisting it — an independent judiciary, a free press, a mobilised civil society — are precisely those that backsliding first destroys.' The paradox is that the cure (strong institutions) is also the first casualty. You need strong institutions to resist the attack, but the attack targets those institutions first, leaving resistance without its tools. Option B captures this circular trap precisely."
  }

];
