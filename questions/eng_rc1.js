// eng_rc1.js – Dr Shetye Academic Programme
// English — Reading Comprehension (CAT / IIM Level)
// 12 Questions · IDs 5401–5412 · 20 Marks · 20 Minutes
// 2 Passages × 6 Questions each
// Passage 1: Philosophy of Truth (Abstract / Analytical)
// Passage 2: Economics of Attention (Contemporary / Data-Driven)

var RC_PASSAGES = {

  "passage_1": {
    title: "Passage 1 of 2",
    label: "Read the following passage carefully and answer Questions 1–6.",
    text: `The concept of truth has occupied philosophers for millennia, yet remains stubbornly elusive. Correspondence theories insist that a statement is true if and only if it corresponds to a fact in the world — that the proposition "snow is white" is true precisely because snow is, in fact, white. This elegant simplicity, however, masks a deeper problem: what exactly constitutes a "fact," and how do we access it independently of language and perception?

Coherence theories sidestep this problem by locating truth not in the external world but in the logical consistency of a set of beliefs. A belief is true, on this view, if it coheres with the entire web of other beliefs one holds. The pragmatist tradition, inaugurated by William James and refined by John Dewey, offered a third way: truth is what works. A belief is true if holding it enables successful action and prediction.

Each tradition captures something important. Correspondence theory honours our intuition that truth is objective — that facts exist whether or not anyone believes them. Coherence theory respects the holistic nature of knowledge: no belief stands alone, and evidence always underdetermines theory. Pragmatism reminds us that truth is not merely decorative but functional — the entire point of cognition is to navigate the world.

Yet all three face damaging objections. Correspondence theory struggles to define "fact" without circularity. Coherence theories allow internally consistent but wildly false belief systems — a perfectly coherent fairy tale is still fictional. Pragmatism, critics note, risks reducing truth to convenience: a belief that is useful today may be false tomorrow.

Contemporary philosophers increasingly favour deflationary accounts, which hold that "it is true that P" adds nothing to simply asserting P. Truth, on this view, is not a deep metaphysical property but a linguistic device for endorsing statements. This dissolves many classical puzzles — but at the cost of leaving us with little to say about why truth matters at all.`
  },

  "passage_2": {
    title: "Passage 2 of 2",
    label: "Read the following passage carefully and answer Questions 7–12.",
    text: `In the twenty-first century, attention has become the scarcest and most fought-over resource in the global economy. Where industrial capitalism extracted value from labour and land, attention capitalism — a term popularised by economist Michael Goldhaber in the 1990s — extracts value from human consciousness itself. Social media platforms do not sell products to their users; they sell their users' attention to advertisers. The user is simultaneously the consumer and the commodity.

This shift has profound consequences for how we assess corporate value. Traditional accounting measures assets, liabilities, and cash flows. Attention capitalism demands new metrics: daily active users, session duration, engagement rates, and — most crucially — the cost per thousand impressions. A platform that commands twenty minutes of daily attention from a billion users controls, in aggregate, the equivalent of 380 million person-hours every day. No factory in history has deployed resources at this scale.

The mechanisms by which platforms capture attention are neither accidental nor neutral. Variable reward schedules — the same psychological principle that makes slot machines addictive — underpin the notification systems of every major platform. Infinite scroll removes the natural stopping cue of a page bottom. Algorithmic curation ensures that content most likely to provoke an emotional response (outrage being the most reliable trigger) is surfaced first. These are not features that emerged from user demand; they are engineering choices made in the service of one objective: maximising the time users spend on platform.

Critics argue that this constitutes a form of market failure. When a company's revenue depends on maximising attention, and maximising attention requires exploiting cognitive vulnerabilities, the social costs — fragmented attention spans, political polarisation, adolescent mental health crises — are borne by society rather than the platform. The platform profits; the externality is socialised. This is, structurally, identical to the pollution problem that animated environmental economics in the twentieth century — and may require analogous regulatory solutions.`
  }
};

var questions = [

  // ══ PASSAGE 1: Philosophy of Truth — Q1–Q6 (IDs 5401–5406) ══

  {
    id: 5401, section: "English",
    passage: "passage_1",
    text: "According to the passage, which of the following best expresses the central limitation shared by all three major theories of truth?",
    options: [
      "A) Each theory requires a precise definition of language that none can provide",
      "B) Each theory captures a genuine insight but also faces a serious, unresolved objection",
      "C) All three theories were developed before modern science could test their claims",
      "D) Each theory depends on circular reasoning at its core"
    ],
    answer: "B",
    explanation: "The passage explicitly states: 'Each tradition captures something important' and then details the 'damaging objections' each faces. The author presents a balanced critique — no theory is wholly right or wholly wrong. Option B captures this precisely. Option D is only true of correspondence theory, not all three."
  },

  {
    id: 5402, section: "English",
    passage: "passage_1",
    text: "The author uses the phrase 'truth is not merely decorative but functional' to suggest that:",
    options: [
      "A) Aesthetic theories of truth are superior to logical ones",
      "B) Truth should be evaluated by how visually it can be represented",
      "C) The value of truth lies in its role in guiding effective action and navigation of reality",
      "D) Decoration and function are mutually exclusive properties of any belief"
    ],
    answer: "C",
    explanation: "The phrase appears in the context of pragmatism — where truth is 'what works.' 'Decorative' here means ornamental or inert; 'functional' means serving a practical purpose. The author is saying truth matters because it enables successful action, not because it is philosophically pleasing. Option C captures this meaning precisely."
  },

  {
    id: 5403, section: "English",
    passage: "passage_1",
    text: "Which of the following, if true, would most directly undermine the coherence theory of truth as described in the passage?",
    options: [
      "A) Scientists often hold beliefs that contradict one another temporarily during paradigm shifts",
      "B) A novelist constructs a fully consistent fictional world that is entirely internally logical yet completely untrue",
      "C) Most humans hold some mutually inconsistent beliefs without noticing",
      "D) Logical consistency is easier to verify than empirical correspondence"
    ],
    answer: "B",
    explanation: "The passage itself identifies this as coherence theory's key weakness: 'Coherence theories allow internally consistent but wildly false belief systems — a perfectly coherent fairy tale is still fictional.' Option B directly instantiates this objection. A coherent fictional world is coherent but obviously not true, showing coherence is insufficient for truth."
  },

  {
    id: 5404, section: "English",
    passage: "passage_1",
    text: "The author's attitude towards deflationary accounts of truth can best be described as:",
    options: [
      "A) Enthusiastic endorsement — deflationists have solved the problem of truth",
      "B) Outright rejection — deflationists trivialise an important philosophical question",
      "C) Cautious acknowledgement — deflationists dissolve puzzles but lose the significance of truth",
      "D) Indifference — the author presents it as an outdated minority view"
    ],
    answer: "C",
    explanation: "The author says deflationary accounts 'dissolve many classical puzzles — but at the cost of leaving us with little to say about why truth matters at all.' This is a measured, qualified assessment — recognising the gain (dissolving puzzles) while identifying a significant loss (truth's significance). Option C matches this nuanced tone precisely."
  },

  {
    id: 5405, section: "English",
    passage: "passage_1",
    text: "The passage implies that the pragmatist objection — 'a belief that is useful today may be false tomorrow' — is most damaging to pragmatism because:",
    options: [
      "A) Pragmatists believe truth is unchanging and eternal by definition",
      "B) If usefulness varies over time, truth would also change, making it unstable and unreliable",
      "C) Tomorrow's beliefs are always more reliable than today's beliefs",
      "D) Pragmatism requires predictions to be correct in the immediate future only"
    ],
    answer: "B",
    explanation: "Pragmatism defines truth as 'what works.' If what works changes over time, then truth itself changes — but this violates our intuition that truth is stable and objective (e.g., 'water is H₂O' was true before we discovered it). The objection strikes at pragmatism's core equation of truth with usefulness. Option B captures this implication."
  },

  {
    id: 5406, section: "English",
    passage: "passage_1",
    text: "Which of the following titles would be most appropriate for this passage?",
    options: [
      "A) A History of Philosophy from Ancient Greece to the Present",
      "B) Why Truth Does Not Exist: The Case for Radical Scepticism",
      "C) Competing Theories of Truth: Insights, Limitations, and Contemporary Directions",
      "D) William James and the Pragmatist Revolution in American Philosophy"
    ],
    answer: "C",
    explanation: "The passage surveys three major theories (correspondence, coherence, pragmatism), acknowledges what each gets right, details their objections, and ends with a contemporary alternative (deflationism). It is balanced, critical, and thematic — not a historical survey (A), not sceptical (B), and not focused only on James (D). C captures its scope precisely."
  },

  // ══ PASSAGE 2: Economics of Attention — Q7–Q12 (IDs 5407–5412) ══

  {
    id: 5407, section: "English",
    passage: "passage_2",
    text: "The author's central argument in the passage is best summarised as:",
    options: [
      "A) Social media companies should be nationalised to prevent exploitation of users",
      "B) Attention capitalism is a new economic model that exploits human consciousness and creates social costs that society, not platforms, must bear",
      "C) Users of social media platforms are largely unaware that they are being sold as products to advertisers",
      "D) Variable reward schedules are the single most important design feature of modern social media platforms"
    ],
    answer: "B",
    explanation: "The passage moves from defining attention capitalism, to showing how platforms extract value, to explaining the engineering mechanisms, to arguing that this creates a market failure where social costs are externalised. Option B captures this full arc. Option A is not suggested; C is mentioned but is not the central argument; D is one supporting detail."
  },

  {
    id: 5408, section: "English",
    passage: "passage_2",
    text: "The author draws an analogy between attention capitalism and the pollution problem in environmental economics primarily to argue that:",
    options: [
      "A) Both problems involve damage to the natural environment",
      "B) Attention platforms produce waste products that contaminate public information systems",
      "C) Both situations involve private profit while social harms are borne by the public, suggesting similar regulatory remedies may be needed",
      "D) The attention economy is more destructive than industrial pollution and should be banned outright"
    ],
    answer: "C",
    explanation: "The author explicitly states: 'The platform profits; the externality is socialised. This is, structurally, identical to the pollution problem.' The point of the analogy is not environmental damage per se but the market failure structure — private benefit, socialised cost — and what it implies about regulation. Option C captures both the structural parallel and its policy implication."
  },

  {
    id: 5409, section: "English",
    passage: "passage_2",
    text: "According to the passage, which of the following is NOT cited as an engineering mechanism used to capture user attention?",
    options: [
      "A) Variable reward schedules analogous to slot machines",
      "B) Removal of natural stopping cues through infinite scroll",
      "C) Algorithmic curation that prioritises emotionally provocative content",
      "D) Personalised pricing that charges users based on their income levels"
    ],
    answer: "D",
    explanation: "The passage mentions three specific mechanisms: variable reward schedules (notifications), infinite scroll (removing stopping cues), and algorithmic curation (surfacing outrage-inducing content). Personalised pricing is never mentioned — it is not part of the attention capture mechanism described. D is the correct 'NOT cited' option."
  },

  {
    id: 5410, section: "English",
    passage: "passage_2",
    text: "The phrase 'the user is simultaneously the consumer and the commodity' implies that:",
    options: [
      "A) Users buy and sell products on the same platform simultaneously",
      "B) The same person uses the platform for free while also being the product sold to advertisers",
      "C) Social media companies have confused their customer base with their supply chain",
      "D) Users who consume more content produce more commodities for the platform to sell"
    ],
    answer: "B",
    explanation: "In attention capitalism, users access the platform for free (consumer of service) but their attention is sold to advertisers (they are the product = commodity). The double role is that of both beneficiary and resource. Option B captures this dual identity precisely. Option D is superficially close but misinterprets 'commodity' as something users produce rather than something they are."
  },

  {
    id: 5411, section: "English",
    passage: "passage_2",
    text: "The statement 'No factory in history has deployed resources at this scale' is used by the author to:",
    options: [
      "A) Express admiration for the technological achievement of social media platforms",
      "B) Suggest that factories are less efficient than digital platforms and should be replaced",
      "C) Emphasise the unprecedented scale at which human attention is now being extracted and converted into economic value",
      "D) Argue that digital platforms employ more workers than any industrial facility"
    ],
    answer: "C",
    explanation: "The statement follows the calculation of '380 million person-hours every day' and serves to contextualise the magnitude of attention extraction. The author is not expressing admiration (A) or making an employment argument (D) — the point is that the scale of resource extraction in attention capitalism is historically unprecedented. C captures this rhetorical purpose."
  },

  {
    id: 5412, section: "English",
    passage: "passage_2",
    text: "The passage suggests that outrage is the 'most reliable trigger' for algorithmic curation because:",
    options: [
      "A) Outrage is the emotion most easily manufactured by artificial intelligence systems",
      "B) Users who feel outrage are more likely to spend money on platform advertisements",
      "C) Outrage generates high engagement — shares, comments, reactions — which maximises time spent on platform",
      "D) Regulatory guidelines require platforms to surface controversial content to ensure free speech"
    ],
    answer: "C",
    explanation: "The passage frames algorithmic curation as serving 'one objective: maximising the time users spend on platform.' Outrage reliably triggers engagement (people argue, share, react), which keeps users on platform longer. This directly serves the attention-maximisation objective. Options A, B, and D are not supported by the passage."
  }

];
