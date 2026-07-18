// eng_rc11.js – Dr Shetye Academic Programme
// English — Reading Comprehension (CAT / IIM Level) — Test 11
// 15 Questions · IDs 5662–5676 · 15 Marks · 30 Minutes
// Passage 1 (Q1–Q5):  The Political Economy of Transparency (5Q)
// Passage 2 (Q6–Q10): The Epistemology of "Follow the Science" (5Q)
// Passage 3 (Q11–Q15): Moral Outrage as Social Currency (5Q)

var RC_PASSAGES = {

  "passage_1": {
    title: "Passage 1 of 3",
    label: "Read the following passage carefully and answer Questions 1–5.",
    text: `Demands for institutional transparency have become so ubiquitous in democratic discourse that transparency is now treated less as an instrumental virtue — good when it produces better outcomes — and more as a terminal value: good in itself, requiring no further justification. This rhetorical elevation of transparency has consequences that its proponents rarely examine. The most significant is that transparency and accountability are not synonyms, and the conflation of the two frequently produces the appearance of accountability while systematically undermining its substance.

Consider the disclosure of legislative voting records, a transparency measure so intuitively appealing that it has been adopted by virtually every democratic legislature in the world. The logic is straightforward: if citizens can see how their representatives vote, representatives will be accountable for those votes. What this logic omits is the distinction between what is visible and what is legible. An MP's voting record is visible; whether that record reflects genuine conviction, constituency pressure, party discipline, or a private deal struck in exchange for committee placement is not legible from the vote itself. Transparency reveals the output without illuminating the decision-making process that produced it, and it is precisely that process — the negotiation, the trade-off, the private justification — that accountability mechanisms are most needed to reach.

A second, less-noted consequence is that mandatory transparency changes the behaviour it is designed to observe. Organisations required to document their deliberations produce documents designed for disclosure rather than deliberation — sanitised minutes, pre-approved language, legally reviewed communications — while genuine decision-making migrates to channels that remain undisclosed: the corridor conversation, the private dinner, the phone call that leaves no record. The transparency apparatus captures the performance of governance rather than its substance. Investigative journalists and political scientists have documented this pattern repeatedly across jurisdictions: the more comprehensive the transparency regime, the more carefully managed its formal paper trail, and the more opaque the actual decision-making process becomes.

None of this constitutes an argument against transparency as such. Certain categories of information — financial conflicts of interest, procurement decisions, regulatory approvals that create private benefit from public authority — remain worth disclosing despite these limitations, because the corruption risks in their absence are severe enough to outweigh the costs of strategic circumvention. The argument is narrower: that transparency has become a rhetorical substitute for the harder institutional design work of creating genuine accountability mechanisms, and that its automatic equation with democratic health deserves the same critical scrutiny we apply to other widely held but under-examined political assumptions.`
  },

  "passage_2": {
    title: "Passage 2 of 3",
    label: "Read the following passage carefully and answer Questions 6–10.",
    text: `The injunction to 'follow the science' entered mainstream political discourse during the COVID-19 pandemic as an apparently uncontroversial directive: defer policy decisions to scientific consensus rather than political instinct, public sentiment, or ideological preference. Examined more closely, the phrase conceals a set of epistemic and political assumptions that deserve more scrutiny than they have typically received, not because science is an unreliable guide to policy, but because the relationship between scientific findings and policy choices is considerably more complex than the phrase implies.

Science, understood rigorously, produces probabilistic findings about empirical relationships under specified conditions. It can establish, with varying degrees of confidence, that a virus spreads through airborne transmission, that a vaccine reduces hospitalisation risk by a certain percentage within a certain population over a certain period, or that a particular intervention produces measurable changes in a measured outcome. What science cannot do — not because of any failure of method, but because of what it is — is determine how much risk a community should accept, how the costs of a policy should be distributed across different groups, or how competing values (economic security, freedom of movement, protection of the clinically vulnerable) should be weighted against one another. These are political and ethical questions that require democratic deliberation, not empirical resolution.

The confusion is compounded by the distinction between scientific consensus and the advice of scientists. Scientists advising governments are not simply reporting consensus findings; they are making judgments — about which findings are most relevant, which uncertainties are most critical, which interventions are most feasible given political constraints — that go well beyond the scientific evidence itself. These judgments may be wise or unwise, and the scientists making them may be more or less aware of how far they have stepped beyond their evidential base. When a public health official recommends a specific restriction on public gatherings, they are translating scientific findings about transmission into a policy recommendation that embeds assumptions about proportionality, enforceability, and public compliance that are not themselves scientific claims.

The practical consequence of treating 'follow the science' as a sufficient policy principle is that it forecloses exactly the kind of deliberation that legitimises policy in a democracy. It reframes inherently contested political choices as technical determinations, implying that disagreement with the recommended policy reflects scientific ignorance rather than legitimate value differences — a framing that is simultaneously intellectually inaccurate and politically corrosive. A more defensible formulation would be 'inform policy with the best available science' — a directive that preserves the essential role of scientific evidence while acknowledging that the translation of that evidence into policy requires democratic judgment and political accountability.`
  },

  "passage_3": {
    title: "Passage 3 of 3",
    label: "Read the following passage carefully and answer Questions 11–15.",
    text: `Psychologists studying moral emotion have distinguished between two functionally different phenomena that share the label 'moral outrage.' The first is what might be called principled outrage: a response to witnessed injustice that motivates costly action on behalf of those harmed — reporting wrongdoing to authorities, organising collective action, providing direct assistance to victims — even when such action produces no personal benefit and may involve substantial personal cost. The second, increasingly documented by researchers studying social media behaviour and group dynamics, is better described as performative outrage: an expression of moral condemnation that functions primarily to signal the expresser's values and group membership to an audience, rather than to produce any change in the situation that prompted the condemnation.

The distinction matters because these two phenomena, despite sharing a surface appearance, have opposite relationships to actual moral repair. Principled outrage tends to be privately costly and publicly subdued — its expression is incidental to action. Performative outrage tends to be publicly amplified and privately costless — the expression is the point. Research by Molly Crockett and colleagues at Yale has documented that social media platforms specifically amplify performative outrage, because the platform reward structure (likes, shares, retweets) incentivises the most emotionally intense expressions of condemnation rather than expressions that are most likely to produce constructive responses to the underlying problem.

A second layer of complexity emerges from research on what psychologists term 'moral licensing.' Studies have consistently found that individuals who have recently engaged in moral expression — publicly condemning wrongdoing, signing petitions, sharing morally charged content — subsequently show reduced willingness to engage in costly prosocial behaviour, as if the moral expression has partially discharged a psychological obligation. This creates a troubling dynamic in environments that make moral expression cheap and frequent: the more performative outrage an individual expresses, the more morally 'credit' they accumulate in their own self-assessment, and the less likely they are to take costly action that would actually address the injustice they are outraged about. The expression of concern becomes a substitute for, rather than a precursor to, action.

None of this implies that publicly expressed moral emotion is always performative, or that sincere moral conviction cannot be expressed publicly. The relevant question is whether the expression is calibrated to produce the response most likely to address the underlying injustice, or to maximise the social signals it transmits about the expresser. In environments where moral expression is structurally rewarded and costly action is structurally invisible, the default drift is toward the latter — and the aggregate effect is a society that is, by measurable metrics, more morally expressive and less morally effective than a society with fewer but more costly moral signals.`
  }
};

var questions = [

  // ══ PASSAGE 1: Transparency & Accountability (Q1–Q5) ══

  {
    id: 5662, section: "English",
    passage: "passage_1",
    text: "The author's central argument in the passage is best described as:",
    options: [
      "A) Transparency is harmful to democracy and should be abandoned in favour of secrecy",
      "B) Legislative voting records are entirely useless as a democratic tool and should be abolished",
      "C) Transparency has become a rhetorical substitute for genuine accountability, and its conflation with accountability produces visible governance rather than accountable governance",
      "D) Financial conflicts of interest should never be disclosed to the public under any circumstances"
    ],
    answer: "C",
    explanation: "The passage argues that transparency and accountability are not synonyms, that transparency reveals outputs without illuminating decision-making processes, and that it has become a 'rhetorical substitute for the harder institutional design work of creating genuine accountability mechanisms.' Option B captures this precise, nuanced argument. Option A overstates the case — the author explicitly says 'none of this constitutes an argument against transparency as such.'"
  },

  {
    id: 5663, section: "English",
    passage: "passage_1",
    text: "The author uses the phrase 'visible but not legible' to illustrate that:",
    options: [
      "A) Many citizens are illiterate and cannot read legislative voting records",
      "B) Voting records show only the outcome (the vote) without revealing the underlying reasons, pressures, or negotiations that actually produced it",
      "C) Transparency laws require documents to be published in languages citizens cannot understand",
      "D) Legislative records are intentionally falsified before being published"
    ],
    answer: "B",
    explanation: "The passage states: 'An MP's voting record is visible; whether that record reflects genuine conviction, constituency pressure, party discipline, or a private deal struck in exchange for committee placement is not legible from the vote itself.' Visibility (the vote is published) does not equal legibility (the reasons behind it cannot be read off from the record). Option B precisely captures this distinction."
  },

  {
    id: 5664, section: "English",
    passage: "passage_1",
    text: "According to the passage, what is the 'second consequence' of mandatory transparency?",
    options: [
      "A) It causes organisations to produce documents designed for disclosure — sanitised and legally reviewed — while genuine decision-making moves to undisclosed channels",
      "B) It makes governments more efficient by reducing paperwork",
      "C) It eliminates all forms of political corruption within five years of implementation",
      "D) It forces all government employees to record every conversation they have"
    ],
    answer: "A",
    explanation: "The passage states: 'mandatory transparency changes the behaviour it is designed to observe. Organisations... produce documents designed for disclosure rather than deliberation... while genuine decision-making migrates to channels that remain undisclosed.' This is identified as a 'less-noted consequence.' Option B precisely captures this behaviour-changing mechanism."
  },

  {
    id: 5665, section: "English",
    passage: "passage_1",
    text: "The author concedes that some categories of information remain worth disclosing despite the limitations of transparency. These categories are:",
    options: [
      "A) All government communications and documents without exception",
      "B) Only documents that have been approved by independent auditors",
      "C) Financial conflicts of interest, procurement decisions, and regulatory approvals that create private benefit from public authority",
      "D) The private voting preferences of ordinary citizens in national elections"
    ],
    answer: "C",
    explanation: "The passage states: 'Certain categories of information — financial conflicts of interest, procurement decisions, regulatory approvals that create private benefit from public authority — remain worth disclosing despite these limitations, because the corruption risks in their absence are severe enough to outweigh the costs of strategic circumvention.' Option C is a precise restatement."
  },

  {
    id: 5666, section: "English",
    passage: "passage_1",
    text: "The phrase 'the transparency apparatus captures the performance of governance rather than its substance' most closely means:",
    options: [
      "A) Transparency mechanisms are very effective at exposing genuine decision-making processes",
      "B) Government performances and public ceremonies should always be recorded and made available online",
      "C) Transparency tools are too expensive for most democratic governments to maintain",
      "D) Formal transparency requirements record what governments are seen to do publicly while genuine decisions are made privately in ways that leave no official record"
    ],
    answer: "D",
    explanation: "The passage explains this metaphor directly: organisations produce 'sanitised minutes, pre-approved language' for the formal record (the 'performance'), while 'genuine decision-making migrates to channels that remain undisclosed' — corridor conversations and unrecorded phone calls (the 'substance'). Option B captures this precisely. The word 'performance' is used in the theatrical sense of staged display, not genuine reality."
  },

  // ══ PASSAGE 2: "Follow the Science" (Q6–Q10) ══

  {
    id: 5667, section: "English",
    passage: "passage_2",
    text: "The passage's primary purpose is to:",
    options: [
      "A) Argue that scientific evidence should play no role in public policy decisions",
      "B) Show that scientific consensus was wrong about COVID-19 transmission",
      "C) Examine why 'follow the science' is an epistemically insufficient policy principle and propose a more defensible formulation",
      "D) Argue that politicians are inherently better equipped than scientists to make health decisions"
    ],
    answer: "C",
    explanation: "The passage criticises 'follow the science' not because science is unreliable, but because the phrase conceals the gap between empirical findings and policy choices, which require democratic value judgments. The author proposes 'inform policy with the best available science' as a more defensible alternative. Option C captures this purpose completely. Option A overstates — the author explicitly preserves science's essential role."
  },

  {
    id: 5668, section: "English",
    passage: "passage_2",
    text: "According to the passage, what is the fundamental limitation of science with respect to policy-making?",
    options: [
      "A) Science can establish empirical relationships and probabilities but cannot determine how communities should weigh competing values or distribute the costs of policy across different groups",
      "B) Science is too slow and expensive to produce findings relevant to urgent policy decisions",
      "C) Scientists are personally biased toward recommending policies that benefit their own research funding",
      "D) Scientific findings are always too uncertain to be used as the basis for any policy decision"
    ],
    answer: "A",
    explanation: "The passage states: 'What science cannot do... is determine how much risk a community should accept, how the costs of a policy should be distributed across different groups, or how competing values... should be weighted against one another. These are political and ethical questions that require democratic deliberation, not empirical resolution.' Option B is a precise restatement; D is too strong and directly contradicted by the author's position."
  },

  {
    id: 5669, section: "English",
    passage: "passage_2",
    text: "The passage distinguishes between 'scientific consensus' and 'the advice of scientists.' This distinction is made to show that:",
    options: [
      "A) Scientists who advise governments are not real scientists and their credentials should be questioned",
      "B) Scientists advising governments make judgments that go beyond empirical evidence — about relevance, feasibility, and proportionality — which are not themselves scientific claims",
      "C) There is never any scientific consensus on public health questions, making all scientific advice arbitrary",
      "D) Only scientists who have reached consensus through peer review should be allowed to advise governments"
    ],
    answer: "B",
    explanation: "The passage explains that advisers make 'judgments about which findings are most relevant, which uncertainties are most critical, which interventions are most feasible given political constraints — that go well beyond the scientific evidence itself.' These extra-scientific judgments are embedded in policy recommendations. Option B is a precise restatement of this distinction and its significance."
  },

  {
    id: 5670, section: "English",
    passage: "passage_2",
    text: "The author describes treating 'follow the science' as a sufficient policy principle as 'simultaneously intellectually inaccurate and politically corrosive.' The 'politically corrosive' aspect refers to:",
    options: [
      "A) Scientists becoming too powerful and undermining elected governments",
      "B) The phrase causing scientific institutions to lose public trust in democratic societies",
      "C) Politicians using science as an excuse to avoid making any decisions at all",
      "D) The framing reframes contested political choices as technical determinations, implying that disagreement reflects scientific ignorance rather than legitimate value differences — which shuts down democratic deliberation"
    ],
    answer: "D",
    explanation: "The passage states this 'reframes inherently contested political choices as technical determinations, implying that disagreement with the recommended policy reflects scientific ignorance rather than legitimate value differences — a framing that is simultaneously intellectually inaccurate and politically corrosive.' Politically corrosive because it forecloses democratic deliberation by mislabeling value disagreements as ignorance. Option B is a precise restatement."
  },

  {
    id: 5671, section: "English",
    passage: "passage_2",
    text: "The author's preferred reformulation — 'inform policy with the best available science' — differs from 'follow the science' primarily because it:",
    options: [
      "A) Gives scientists more authority over policy decisions than politicians currently allow",
      "B) Eliminates the role of scientific evidence from policy discussions entirely",
      "C) Preserves science's role as essential input while explicitly acknowledging that translating evidence into policy requires democratic judgment and political accountability",
      "D) Requires that all scientific studies be replicated at least three times before being used in any policy"
    ],
    answer: "C",
    explanation: "The passage states the reformulation 'preserves the essential role of scientific evidence while acknowledging that the translation of that evidence into policy requires democratic judgment and political accountability.' It maintains science's input while restoring democratic legitimacy to the value judgments involved. Option C is a precise restatement; B is the opposite of what the author intends."
  },

  // ══ PASSAGE 3: Moral Outrage (Q11–Q15) ══

  {
    id: 5672, section: "English",
    passage: "passage_3",
    text: "The distinction the passage draws between 'principled outrage' and 'performative outrage' turns primarily on:",
    options: [
      "A) Whether the outrage is expressed by a sincere or insincere person",
      "B) Whether the expression is motivated by and likely to produce costly action addressing the injustice, or primarily functions to signal the expresser's values to an audience",
      "C) Whether the outrage is expressed privately in conversation or publicly in writing",
      "D) Whether the underlying injustice is real or has been fabricated"
    ],
    answer: "B",
    explanation: "The passage defines principled outrage as motivating 'costly action on behalf of those harmed' and being 'privately costly and publicly subdued,' while performative outrage 'functions primarily to signal the expresser's values and group membership to an audience' and is 'publicly amplified and privately costless.' The distinction turns on functional purpose and relationship to action, not sincerity. Option B captures this."
  },

  {
    id: 5673, section: "English",
    passage: "passage_3",
    text: "According to the passage, why do social media platforms specifically amplify performative outrage?",
    options: [
      "A) The reward structure of platforms (likes, shares, retweets) incentivises the most emotionally intense expressions of condemnation rather than expressions most likely to produce constructive responses",
      "B) Social media companies are ideologically biased and deliberately promote outrage content",
      "C) Social media users are unable to distinguish between principled and performative outrage",
      "D) Algorithms are programmed to identify and suppress principled moral action"
    ],
    answer: "A",
    explanation: "The passage cites Molly Crockett's research and states that platforms amplify performative outrage 'because the platform reward structure (likes, shares, retweets) incentivises the most emotionally intense expressions of condemnation rather than expressions that are most likely to produce constructive responses.' Option B is a direct restatement of the mechanism described. Option A attributes intentional bias not supported by the passage."
  },

  {
    id: 5674, section: "English",
    passage: "passage_3",
    text: "The concept of 'moral licensing' as described in the passage refers to:",
    options: [
      "A) A legal mechanism that grants individuals immunity from prosecution after they report wrongdoing",
      "B) The psychological phenomenon whereby engaging in moral expression reduces an individual's subsequent willingness to undertake costly prosocial behaviour, as if the expression partially discharged a moral obligation",
      "C) The formal certification process through which ethicists are accredited by professional bodies",
      "D) A marketing strategy in which companies promote their products as ethically sourced"
    ],
    answer: "B",
    explanation: "The passage explains: 'individuals who have recently engaged in moral expression... subsequently show reduced willingness to engage in costly prosocial behaviour, as if the moral expression has partially discharged a psychological obligation.' The moral expression acts like a credit that reduces the felt need for actual action. Option B precisely captures this psychological mechanism."
  },

  {
    id: 5675, section: "English",
    passage: "passage_3",
    text: "The passage describes a 'troubling dynamic' that arises specifically in environments where moral expression is 'cheap and frequent.' This dynamic is:",
    options: [
      "A) People become so morally outraged that they take violent action to address injustice",
      "B) Performative moral expression accumulates as psychological credit, reducing the likelihood that individuals will take costly action that would actually address the injustice they are outraged about",
      "C) Frequent moral expression causes individuals to lose the ability to feel genuine emotion",
      "D) Cheap moral expression reduces the number of people who vote in elections"
    ],
    answer: "B",
    explanation: "The passage states: 'the more performative outrage an individual expresses, the more morally 'credit' they accumulate in their own self-assessment, and the less likely they are to take costly action that would actually address the injustice.' The expression becomes a substitute for action. Option B precisely captures this troubling dynamic."
  },

  {
    id: 5676, section: "English",
    passage: "passage_3",
    text: "The author's concluding observation that society is becoming 'more morally expressive and less morally effective' implies that:",
    options: [
      "A) Modern people are fundamentally more immoral than people in previous generations",
      "B) The solution is to prohibit all public expression of moral views on social media",
      "C) Moral effectiveness can only be measured by the number of charitable donations made per person",
      "D) In environments where moral expression is rewarded and costly action is structurally invisible, the aggregate effect is increased outrage signal with decreased actual moral repair"
    ],
    answer: "D",
    explanation: "The passage's final paragraph concludes: 'the aggregate effect is a society that is, by measurable metrics, more morally expressive and less morally effective than a society with fewer but more costly moral signals.' The structural incentives reward expression over action, producing this inverse relationship. Option B captures this without overstating into A's generational moral decline claim or C's prescriptive prohibition."
  }

];
