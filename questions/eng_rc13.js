// eng_rc13.js – Dr Shetye Academic Programme
// English — Reading Comprehension (CAT / IIM Level) — Test 13
// 15 Questions · IDs 5692–5706 · 15 Marks · 30 Minutes
// Passage 1 (Q1–Q5):  The Epistemology of Expertise and the Decline of Deference
// Passage 2 (Q6–Q10): Nudge Theory and the Ethics of Choice Architecture
// Passage 3 (Q11–Q15): The Gig Economy and the Reclassification of Labour

var RC_PASSAGES = {

  "passage_1": {
    title: "Passage 1 of 3",
    label: "Read the following passage carefully and answer Questions 1–5.",
    text: `The relationship between expertise and democratic politics has always been structurally uneasy, but the particular form of that unease has shifted substantially over the past three decades. The older anxiety concerned whether expert knowledge — technical, scientific, bureaucratic — could be adequately communicated to non-expert publics and adequately translated into political choices that citizens could meaningfully endorse. The newer anxiety runs in an opposite direction: a growing and apparently well-documented unwillingness among significant portions of democratic publics to defer to established expertise at all, even on empirical questions where expert consensus is robust and the costs of ignoring it demonstrable.

Sociologist Tom Nichols, in a widely discussed 2017 analysis, attributes this 'death of expertise' to a constellation of mutually reinforcing factors: the collapse of intermediary institutions that historically served as credible translators between expert communities and general publics; the democratisation of information access that has given individuals the subjective experience of having examined an issue exhaustively without the analytical frameworks that make such examination genuinely productive; and a cultural shift in which expressing scepticism toward institutional authority has become a marker of intellectual independence rather than a failure of epistemic humility.

The internet's role in this dynamic is more complex than simple information overload. Research by Filippo Menczer and others on information diffusion across social networks has found that false or low-quality information spreads faster and reaches more users than accurate information, in part because false information tends to be more emotionally resonant, more novelty-stimulating, and more identity-affirming than accurate but often contextually nuanced expert consensus. The architecture of information distribution, rather than the information itself, may be the primary driver of anti-expertise sentiment.

Critics of the 'death of expertise' narrative argue that it elides a distinction between two quite different phenomena: legitimate scepticism toward institutional expertise that has historically earned scepticism through errors, conflicts of interest, or poor track records; and illegitimate anti-intellectualism that rejects expertise reflexively without evaluating its track record at all. This distinction matters practically: a public appropriately sceptical of pharmaceutical industry-funded research on drug safety is engaged in rational epistemic behaviour, while a public that rejects viral epidemiology on the grounds that epidemiologists are part of a coordinated deception is not. Conflating these two forms of scepticism risks the twin errors of either defending all expert authority uncritically or treating all anti-expert sentiment as equivalent regardless of its basis.`
  },

  "passage_2": {
    title: "Passage 2 of 3",
    label: "Read the following passage carefully and answer Questions 6–10.",
    text: `Richard Thaler and Cass Sunstein's 2008 book introduced 'libertarian paternalism' — a phrase designed to capture what they presented as a novel policy approach that could serve liberal and paternalist values simultaneously. The core claim is that the organisation of choice environments always influences behaviour regardless of what designers choose or decline to do: a cafeteria that puts salads first will sell more salads than one that puts desserts first, even when the same choices are available and the same individuals are making them. Since choice architecture is unavoidable, governments and institutions that design such environments have a responsibility to arrange them in ways that produce good outcomes for the people making choices, while preserving those people's freedom to choose differently.

This argument has generated sustained criticism from multiple directions. From the political right, critics have argued that 'libertarian paternalism' is a contradiction in terms: even if the individual formally retains the ability to override the nudge, the entire mechanism depends on cognitive biases that reduce the likelihood of such overriding, meaning the paternalism is real while the libertarianism is largely rhetorical. Behaviourist economist Bryan Caplan has noted that if nudges work by exploiting systematic irrationality, designing them involves a prior judgment about what rational preferences would be — which smuggles in substantive value judgments about what counts as good outcomes under the guise of merely helping people fulfil their own preferences.

From the political left, a different critique has emerged: nudge theory's implicit frame assumes that the problem to be solved is individual behaviour, when the policy-relevant problem may be structural rather than behavioural. Encouraging individuals to save more through automatic enrolment in retirement savings schemes does nothing to address structurally inadequate wages that make meaningful saving impossible for large portions of the working population; promoting healthier eating through cafeteria layout leaves untouched the food environment outside institutional settings, where the choices available to lower-income individuals are determined by retail geography and affordability rather than any designed choice architecture. The nudge, on this reading, is not a policy tool but a distraction from policy — a way of addressing at the margins what should be addressed at the roots.

A third concern, more epistemological than political, is that nudge effectiveness is highly context-dependent: effects documented in laboratory or single-institutional settings frequently fail to replicate at population scale, in part because individuals vary in the direction of their biases, in part because adaptation occurs as people become aware of the design, and in part because the specific conditions of the original study may not generalise across the diverse settings in which policy interventions actually operate. The pragmatic question is not whether nudges can work in any given setting but whether their measurable population-level effects are large enough to justify the costs of designing and monitoring them at scale.`
  },

  "passage_3": {
    title: "Passage 3 of 3",
    label: "Read the following passage carefully and answer Questions 11–15.",
    text: `The growth of platform-mediated labour markets — most visibly in ride-hailing, food delivery, and freelance professional services — has generated a sustained legal and regulatory debate about a classification question that turns out to be surprisingly difficult to resolve: are workers on these platforms employees or independent contractors? The economic and welfare stakes of the answer are substantial. Employees are entitled to minimum wage guarantees, overtime pay, employer contributions to social insurance schemes, protection against unfair dismissal, and access to collective bargaining. Independent contractors receive none of these protections, but in exchange retain flexibility over their working hours, the ability to work for multiple platforms simultaneously, and the legal ability to set their own terms of engagement.

Platform companies have historically argued, with varying degrees of legal success, that they are technology intermediaries rather than employers — marketplaces that connect supply and demand for services rather than organisations that direct the labour of workers. On this view, workers choose when and how much to work, use their own equipment, bear their own operational costs, and face no minimum hour commitments — all characteristics that traditionally distinguish contractors from employees. The counter-argument, which has found purchase in courts in the UK, Spain, and California among others, is that the platform's algorithmic management constitutes a form of workplace control functionally equivalent to traditional employment direction: the platform sets prices, determines which work is offered to which workers, enforces performance standards through ratings systems, and can terminate access unilaterally — the functional content of the employment relationship without its legal form.

The more fundamental question the gig economy raises is whether the employee/contractor binary, developed in an era of stable workplace relationships, is adequate to capture the range of labour relationships that now exist. Various jurisdictions have experimented with intermediate categories — the UK's 'worker' status, which entitles workers to certain employment protections but not others, represents one such attempt — but no consensus model has emerged. Economists have pointed out that the distributional consequences of classification decisions matter asymmetrically: extending employment protections to gig workers would impose costs on platforms and consumers in the form of higher prices, while the benefits would accrue to workers who are, on average, in significantly worse economic positions than the consumers they serve. This asymmetry has led some economists and legal scholars to argue that the relevant question is not which legal category best fits the de facto relationship, but which set of protections we as a society wish to extend to a particular set of workers — a question of distributive justice rather than contract law.

Whether courts or legislatures are the appropriate forum for answering that question is itself contested: courts can resolve classification disputes but cannot restructure benefit systems; legislatures can restructure benefit systems but are subject to political pressures that have historically tended to favour the more organised side of the labour-capital relationship.`
  }
};

var questions = [

  // ══ PASSAGE 1: Expertise and Deference (Q1–Q5) ══

  {
    id: 5692, section: "English",
    passage: "passage_1",
    text: "According to the passage, the 'newer anxiety' about expertise differs from the 'older anxiety' in that:",
    options: [
      "A) The newer anxiety concerns a growing unwillingness among publics to defer to established expertise even on empirical questions where consensus is robust and the costs of ignoring it are demonstrable",
      "B) The newer anxiety concerns whether experts can adequately communicate their knowledge to the general public",
      "C) The newer anxiety is about whether democratic systems produce leaders with sufficient technical knowledge",
      "D) The newer anxiety is primarily about conflicts of interest within expert communities corrupting their findings"
    ],
    answer: "A",
    explanation: "The passage states the 'older anxiety' concerned communication of expert knowledge to publics; the 'newer anxiety runs in an opposite direction: a growing... unwillingness among significant portions of democratic publics to defer to established expertise at all, even on empirical questions where expert consensus is robust.' Option B is a precise restatement of this contrast."
  },

  {
    id: 5693, section: "English",
    passage: "passage_1",
    text: "Tom Nichols attributes the 'death of expertise' to which combination of factors?",
    options: [
      "A) Declining educational standards, rising income inequality, and corporate influence on research",
      "B) The collapse of credible intermediary institutions, the democratisation of information access creating an illusion of expertise, and a cultural shift that valorises scepticism of authority as intellectual independence",
      "C) The deliberate suppression of expert dissent by governments and large corporations",
      "D) The complexity of modern scientific fields making genuine expert consensus increasingly impossible to achieve"
    ],
    answer: "B",
    explanation: "The passage lists Nichols's three factors: 'collapse of intermediary institutions'; 'democratisation of information access that has given individuals the subjective experience of having examined an issue exhaustively without the analytical frameworks'; and 'a cultural shift in which expressing scepticism toward institutional authority has become a marker of intellectual independence.' Option B is a precise restatement."
  },

  {
    id: 5694, section: "English",
    passage: "passage_1",
    text: "The passage's discussion of Menczer's research on information diffusion suggests that anti-expertise sentiment is driven primarily by:",
    options: [
      "A) A deliberate political strategy by anti-establishment movements to discredit experts",
      "B) The inability of scientific institutions to produce reliable findings in a timely manner",
      "C) The architecture of information distribution, since false information spreads faster than accurate information due to being more emotionally resonant and identity-affirming",
      "D) The genuine failure of most expert predictions to materialise, which rationally erodes public trust"
    ],
    answer: "C",
    explanation: "The passage states: 'false or low-quality information spreads faster and reaches more users than accurate information, in part because false information tends to be more emotionally resonant, more novelty-stimulating, and more identity-affirming' and concludes 'the architecture of information distribution... may be the primary driver.' Option C is a precise restatement."
  },

  {
    id: 5695, section: "English",
    passage: "passage_1",
    text: "The distinction critics draw between 'legitimate scepticism' and 'illegitimate anti-intellectualism' is illustrated in the passage by contrasting:",
    options: [
      "A) The views of academic experts versus those of industry-funded researchers",
      "B) The behaviour of educated versus uneducated sections of the public",
      "C) Scepticism in scientific domains versus scepticism in economic and political domains",
      "D) A public appropriately sceptical of industry-funded drug research versus a public that rejects viral epidemiology on conspiracy grounds"
    ],
    answer: "B",
    explanation: "The passage provides exactly this illustration: 'a public appropriately sceptical of pharmaceutical industry-funded research on drug safety is engaged in rational epistemic behaviour, while a public that rejects viral epidemiology on the grounds that epidemiologists are part of a coordinated deception is not.' Option B is a direct restatement."
  },

  {
    id: 5696, section: "English",
    passage: "passage_1",
    text: "The passage warns that conflating legitimate scepticism with anti-intellectualism risks:",
    options: [
      "A) The twin errors of either defending all expert authority uncritically or treating all anti-expert sentiment as equally unjustified regardless of its actual basis",
      "B) Making it impossible to have any public debate about expert claims at all",
      "C) Allowing extremist political movements to exploit public confusion about expertise",
      "D) Permanently damaging the credibility of institutions that rely on public trust to function effectively"
    ],
    answer: "A",
    explanation: "The passage states: 'Conflating these two forms of scepticism risks the twin errors of either defending all expert authority uncritically or treating all anti-expert sentiment as equivalent regardless of its basis.' Option B is a precise restatement of this specific risk."
  },

  // ══ PASSAGE 2: Nudge Theory (Q6–Q10) ══

  {
    id: 5697, section: "English",
    passage: "passage_2",
    text: "The core claim of 'libertarian paternalism,' as described in the passage, is that:",
    options: [
      "A) Governments should impose strict regulations on unhealthy food and harmful financial products",
      "B) Individuals should never be constrained in their choices because freedom is the highest political value",
      "C) Since choice architecture inevitably influences behaviour, designers should arrange it to produce good outcomes while preserving freedom to choose otherwise",
      "D) Behavioural economics has proven that humans are fundamentally irrational and need expert guidance to make correct decisions"
    ],
    answer: "C",
    explanation: "The passage states: 'Since choice architecture is unavoidable, governments and institutions that design such environments have a responsibility to arrange them in ways that produce good outcomes for the people making choices, while preserving those people's freedom to choose differently.' Option C is a precise restatement."
  },

  {
    id: 5698, section: "English",
    passage: "passage_2",
    text: "Bryan Caplan's critique of nudge theory holds that it:",
    options: [
      "A) Is politically dangerous because it gives governments too much control over individual behaviour",
      "B) Is insufficiently effective at producing the behaviour changes it claims to promote",
      "C) Relies on experimental findings that have never been replicated in real-world policy settings",
      "D) Smuggles in substantive value judgments about what counts as good outcomes under the guise of helping people fulfil their own preferences, since designing nudges requires a prior judgment about what rational preferences would be"
    ],
    answer: "B",
    explanation: "The passage states Caplan 'noted that if nudges work by exploiting systematic irrationality, designing them involves a prior judgment about what rational preferences would be — which smuggles in substantive value judgments about what counts as good outcomes under the guise of merely helping people fulfil their own preferences.' Option B is a precise restatement."
  },

  {
    id: 5699, section: "English",
    passage: "passage_2",
    text: "The left-wing critique of nudge theory presented in the passage argues that:",
    options: [
      "A) Nudge theory is ideologically biased toward conservative outcomes and should be redesigned",
      "B) Nudges are too weak to produce the large-scale behaviour change that modern societies require",
      "C) Only governments with democratic mandates should be permitted to design choice architectures for citizens",
      "D) Nudge theory addresses individual behaviour when the relevant problem is structural, and functions as a distraction from policy changes needed at the root causes"
    ],
    answer: "D",
    explanation: "The passage states the left-wing critique holds that 'nudge theory's implicit frame assumes that the problem to be solved is individual behaviour, when the policy-relevant problem may be structural rather than behavioural.' The passage concludes: 'The nudge... is not a policy tool but a distraction from policy — a way of addressing at the margins what should be addressed at the roots.' Option C is a precise restatement."
  },

  {
    id: 5700, section: "English",
    passage: "passage_2",
    text: "The 'third concern' about nudge theory described in the passage is primarily:",
    options: [
      "A) Epistemological — that nudge effectiveness is highly context-dependent and effects documented in laboratory settings frequently fail to replicate at population scale",
      "B) Political — that nudges give too much power to unelected bureaucrats and technocrats",
      "C) Ethical — that it is morally wrong to exploit cognitive biases even in service of beneficial outcomes",
      "D) Economic — that the cost of designing and implementing nudges exceeds their demonstrated benefits in all studied cases"
    ],
    answer: "A",
    explanation: "The passage explicitly labels this 'A third concern, more epistemological than political' and states: 'nudge effectiveness is highly context-dependent: effects documented in laboratory or single-institutional settings frequently fail to replicate at population scale.' Option B correctly identifies both the type of concern and its content."
  },

  {
    id: 5701, section: "English",
    passage: "passage_2",
    text: "Which of the following statements would the author of the passage most likely agree with?",
    options: [
      "A) Nudge theory is a complete and sufficient framework for solving modern public policy problems without needing structural reforms",
      "B) The right-wing critique of nudge theory is fundamentally stronger than the left-wing critique",
      "C) The critiques from the right, left, and epistemological perspectives together suggest that nudge theory's claims require significant qualification before it can serve as a reliable basis for large-scale policy",
      "D) Nudge theory should be abandoned entirely in favour of traditional regulatory approaches to behaviour change"
    ],
    answer: "C",
    explanation: "The passage presents three substantial critiques of nudge theory from different directions — the right (contradiction in terms, smuggled value judgments), the left (distraction from structural causes), and epistemological (context-dependency, replication failure) — without dismissing any as unfounded. The cumulative weight of this multi-directional critique most supports option B. The passage's neutral, analytical tone does not support C or D."
  },

  // ══ PASSAGE 3: Gig Economy and Labour (Q11–Q15) ══

  {
    id: 5702, section: "English",
    passage: "passage_3",
    text: "The passage describes the employee/independent contractor classification debate as 'surprisingly difficult to resolve' primarily because:",
    options: [
      "A) Platform companies engage in deliberate fraud and misrepresent the nature of their relationships with workers",
      "B) International trade law prevents any single country from resolving the issue unilaterally",
      "C) The platform's algorithmic management creates functional equivalence to employment direction while maintaining formal features of contractor relationships, challenging clean application of traditional categories",
      "D) Workers themselves are divided on which classification they prefer, making any resolution politically impossible"
    ],
    answer: "C",
    explanation: "The passage notes platforms argue they are technology intermediaries with workers who 'choose when and how much to work' (contractor features), while courts have found that 'algorithmic management constitutes a form of workplace control functionally equivalent to traditional employment direction' (employee features). This functional-versus-formal tension is what makes clean classification difficult. Option C captures this precisely."
  },

  {
    id: 5703, section: "English",
    passage: "passage_3",
    text: "According to the passage, the legal counter-argument to platforms' claim that they are merely 'technology intermediaries' is:",
    options: [
      "A) That platforms earn profit from workers' labour and should therefore bear the costs of employment protections as a matter of fairness",
      "B) That the scale of platform operations means any economic harm to workers constitutes a significant macroeconomic problem requiring regulatory intervention",
      "C) That independent contractor status was designed for genuinely self-directed professional work and should not apply to low-skill service roles",
      "D) That the platform's algorithmic management — setting prices, allocating work, enforcing standards through ratings, and terminating access unilaterally — constitutes workplace control functionally equivalent to traditional employment direction"
    ],
    answer: "B",
    explanation: "The passage states the counter-argument is 'that the platform's algorithmic management constitutes a form of workplace control functionally equivalent to traditional employment direction: the platform sets prices, determines which work is offered to which workers, enforces performance standards through ratings systems, and can terminate access unilaterally.' Option B is a precise restatement."
  },

  {
    id: 5704, section: "English",
    passage: "passage_3",
    text: "The passage notes that 'distributional consequences of classification decisions matter asymmetrically.' This asymmetry refers to:",
    options: [
      "A) The fact that some gig workers earn substantially more than others, making uniform protections inefficient",
      "B) The legal asymmetry between courts (which favour employers) and legislatures (which favour workers)",
      "C) The geographic asymmetry where gig workers in cities receive more protections than those in rural areas",
      "D) The asymmetry that extending employment protections would impose costs on platforms and consumers while benefits would accrue to workers who are, on average, in significantly worse economic positions"
    ],
    answer: "B",
    explanation: "The passage states: 'extending employment protections to gig workers would impose costs on platforms and consumers in the form of higher prices, while the benefits would accrue to workers who are, on average, in significantly worse economic positions than the consumers they serve.' This distributional asymmetry is the specific one the passage identifies. Option B is a precise restatement."
  },

  {
    id: 5705, section: "English",
    passage: "passage_3",
    text: "Some economists and legal scholars in the passage argue that the relevant question about gig worker classification is not which legal category best fits the relationship, but rather:",
    options: [
      "A) Which set of protections society wishes to extend to a particular set of workers — framing it as a question of distributive justice rather than contract law",
      "B) How to design technology platforms so that algorithmic management does not constitute employment direction",
      "C) Whether the rate of growth of gig work justifies special regulatory treatment beyond existing labour law frameworks",
      "D) How courts in different jurisdictions can coordinate to produce a consistent global classification standard"
    ],
    answer: "A",
    explanation: "The passage states these scholars argue 'the relevant question is not which legal category best fits the de facto relationship, but which set of protections we as a society wish to extend to a particular set of workers — a question of distributive justice rather than contract law.' Option B is a direct restatement."
  },

  {
    id: 5706, section: "English",
    passage: "passage_3",
    text: "The passage's final paragraph observes that both courts and legislatures have limitations in resolving the gig economy's labour questions. These respective limitations are:",
    options: [
      "A) Courts are too slow and legislatures are too subject to popular pressure to produce rational outcomes",
      "B) Courts have jurisdiction only over private disputes while legislatures cannot constitutionally regulate private employment relationships",
      "C) Courts apply outdated common law while legislatures are captured by technology companies that dominate political donations",
      "D) Courts can resolve classification disputes but cannot restructure benefit systems; legislatures can restructure benefit systems but are subject to political pressures historically favouring the more organised side of the labour-capital relationship"
    ],
    answer: "B",
    explanation: "The passage states exactly this: 'courts can resolve classification disputes but cannot restructure benefit systems; legislatures can restructure benefit systems but are subject to political pressures that have historically tended to favour the more organised side of the labour-capital relationship.' Option B is a direct restatement."
  }

];
