// eng_rc12.js – Dr Shetye Academic Programme
// English — Reading Comprehension (CAT / IIM Level) — Test 12
// 15 Questions · IDs 5677–5691 · 15 Marks · 30 Minutes
// Passage 1 (Q1–Q5):  The Attention Economy and the Architecture of Distraction
// Passage 2 (Q6–Q10): The Paradox of Tolerance and the Limits of Liberal Democracy
// Passage 3 (Q11–Q15): The Economics of Urban Density and the Housing Crisis

var RC_PASSAGES = {

  "passage_1": {
    title: "Passage 1 of 3",
    label: "Read the following passage carefully and answer Questions 1–5.",
    text: `When Herbert Simon observed in 1971 that 'a wealth of information creates a poverty of attention,' he was describing an economic insight that would take three more decades to fully crystallise into a theory of industry organisation. The internet, far from being a neutral medium of communication, is in practice an elaborate infrastructure for industrialising the human attention span — harvesting it, packaging it, and selling it to advertisers. This observation, first developed systematically by economist Michael Goldhaber in the mid-1990s and later popularised by writers including Tim Wu and James Williams, identifies attention not merely as a scarce psychological resource but as the fundamental unit of account around which the digital economy is organised.

The economics of attention differ from the economics of conventional goods in ways with significant welfare implications. A conventional good is rivalrous: when I consume a loaf of bread, less bread is available for others. Attention is also rivalrous — when my attention is captured by a platform's content, that attention is unavailable for other uses, including sleep, conversation, reflection, and the kind of sustained reading that complex cognitive tasks require. But unlike bread, attention can be captured without the attentive person being aware of or consenting to the transaction. The invisibility of this extraction is not incidental to the business model; it is its defining feature. Platforms are designed to maximise time-on-platform not because they believe this serves users' stated preferences, but because users' revealed preferences — revealed by choices users make when platform design removes friction and creates compulsive engagement loops — diverge systematically from the preferences users would endorse on reflection.

The concept of 'persuasive technology,' developed by Stanford researcher B.J. Fogg, describes the deliberate engineering of digital environments to alter behaviour through techniques — variable reward schedules, social comparison features, streak mechanisms — borrowed from behavioural psychology and casino design. What distinguishes this from ordinary persuasion is scale and systematicity: while a persuasive individual reaches dozens of people, a persuasive technology can alter the decision environment of hundreds of millions simultaneously, with effects calibrated through A/B testing and refined continuously. The asymmetry of resources between platform designers and individual users — the former employ thousands of engineers optimising for engagement, the latter have only their native cognitive architecture — has led some theorists to argue that conventional frameworks of individual consent and rational choice are inadequate for evaluating these relationships.

The more measured conclusion is that the attention economy creates a systematic misalignment between what individuals experience as their preferences in a given moment and the preferences they would form if the choice architecture were different — a misalignment that raises legitimate questions about what 'autonomous choice' actually means in an environment engineered to undermine it.`
  },

  "passage_2": {
    title: "Passage 2 of 3",
    label: "Read the following passage carefully and answer Questions 6–10.",
    text: `In a 1945 essay that would become one of the most contested texts in twentieth-century political philosophy, Karl Popper proposed what he termed the 'paradox of tolerance': a liberal, tolerant society that extends unlimited tolerance even to those who are intolerant, and to those who oppose the very idea of tolerant society, will eventually have its tolerance seized and destroyed by the intolerant. Popper's conclusion was that tolerance, if it is to survive, must be prepared to be intolerant of intolerance — to suppress, by argument and public opinion where possible, and by direct restrictive measures where necessary, those movements and doctrines that advocate intolerance and the suppression of free and open debate.

The paradox has enjoyed renewed attention in recent decades as liberal democracies have grappled with resurgent ethnonationalist movements, online platforms distributing extremist content at scale, and an apparent paradox in which institutional frameworks designed to protect civil liberties seem structurally incapable of preventing those liberties from being instrumentalised to erode themselves. Popper's argument, however, is frequently misread in ways that have practical consequences. Popper did not argue for sweeping restrictions on offensive or illiberal speech — his concern was specifically with doctrines that openly advocate the suppression of rational discourse, the rule of law, and the rights of others. The paradox applies, on his account, not to ideas liberals find uncomfortable or even abhorrent, but to those that seek to dismantle the procedural framework within which ideas of any kind can be peacefully contested.

The political and legal operationalisation of this distinction is considerably harder than Popper's philosophical formulation suggests. The history of liberal democracies contains numerous episodes in which restrictions justified as defences of the procedural order were in practice directed against labour movements, civil rights activists, and political minorities whose ideas were merely challenging rather than genuinely threatening. This is not an argument against the paradox's validity but an argument for epistemic humility about any given application of it: the risk of false positives — suppressing genuinely tolerable dissent — is at least as serious as the risk of false negatives that Popper's paradox is invoked to address.

The practical question that Popper's framework opens but cannot resolve is whether the institutions charged with identifying and restraining the genuinely intolerant can do so with sufficient precision and accountability to avoid becoming instruments of the very closure they are designed to prevent. That question turns less on abstract philosophical reasoning than on the specific institutional design of those charged with implementing it — on the quality of their procedures, the robustness of their oversight, and the degree to which their decisions remain contestable within the deliberative framework they are defending.`
  },

  "passage_3": {
    title: "Passage 3 of 3",
    label: "Read the following passage carefully and answer Questions 11–15.",
    text: `The economic geography of housing has become one of the most practically consequential puzzles in contemporary urban policy. In a well-functioning market, rising prices signal excess demand and induce supply responses: higher prices incentivise producers to produce more, and the resulting supply increase moderates the initial price rise. In housing markets in most major global cities — London, Mumbai, San Francisco, Sydney — this supply response has failed to materialise at anything close to the scale that price signals would predict, with the result that housing costs have risen to levels that impose severe welfare costs on urban residents, particularly those in the lower half of the income distribution.

The failure of housing supply to respond to price signals is not primarily a market failure in the conventional sense of an externality or public good problem. It is a regulatory failure: zoning laws, planning permission requirements, height restrictions, setback rules, and a dense web of other land use regulations collectively prevent the conversion of high-value urban land from lower-density to higher-density residential use, even when the financial returns from doing so would be substantial. The beneficiaries of these restrictions — owners of existing properties whose values are protected from the downward pressure that new supply would exert — constitute a politically organised and geographically concentrated interest group that has historically been able to prevent the deregulation that economic logic would prescribe.

Economists Edward Glaeser and Joseph Gyourko estimated that in highly regulated markets, the 'zoning tax' — the gap between market prices and the cost of actually constructing additional housing — can account for the majority of housing prices in affected cities, representing an enormous implicit transfer from renters and prospective buyers to existing property owners. The political economy of this transfer is distinctive: the costs are diffuse, felt by millions of renters and potential first-home buyers individually in small but cumulatively significant amounts, while the benefits are concentrated in a smaller group of property owners who have strong incentives to maintain the regulatory status quo through political engagement, local planning board participation, and legal challenges to proposed developments.

The distributional consequences of restrictive zoning are regressive in a precise sense: they impose costs as a percentage of income that fall most heavily on lower-income households, for whom housing constitutes a larger share of expenditure, while generating gains that accrue disproportionately to higher-income households, who own more property and hold more of their wealth in real estate. The irony frequently noted by urban economists is that many cities with the most progressive political cultures maintain the most restrictive land use regulations — an inconsistency that reflects not hypocrisy but the political economy of geographically concentrated homeowner interests overwhelming the diffuse interests of renters and potential residents who have not yet arrived.`
  }
};

var questions = [

  // ══ PASSAGE 1: Attention Economy (Q1–Q5) ══

  {
    id: 5677, section: "English",
    passage: "passage_1",
    text: "The author's central argument in the passage is best described as:",
    options: [
      "A) The digital economy is organised around the industrialised extraction and sale of human attention, and platform design systematically diverges users' in-moment choices from their reflective preferences",
      "B) Social media platforms should be immediately banned to protect public welfare from attention extraction",
      "C) Users of digital platforms are irrational and incapable of making any meaningful choices about their time",
      "D) B.J. Fogg's persuasive technology framework is the single most important development in behavioural economics"
    ],
    answer: "A",
    explanation: "The passage builds from Simon's scarcity-of-attention observation through Goldhaber's theory, explains how attention is captured invisibly, describes persuasive technology, and concludes with the stated-vs-revealed preference divergence. Option B captures the full argument: the attention economy thesis plus its implication for autonomous choice."
  },

  {
    id: 5678, section: "English",
    passage: "passage_1",
    text: "The distinction between 'stated preferences' and 'revealed preferences' is used to show that:",
    options: [
      "A) What users say they want and what their actual in-platform behaviour shows are the same, validating platform design choices",
      "B) Choices users make inside engineered engagement loops diverge systematically from the preferences they would endorse upon reflection outside the platform environment",
      "C) Revealed preferences are always more reliable guides to wellbeing than stated preferences in any economic context",
      "D) Users who spend more time on platforms consistently report higher life satisfaction than those who spend less"
    ],
    answer: "B",
    explanation: "The passage states platforms exploit 'revealed preferences — revealed by the choices users make when platform design removes friction and creates compulsive engagement loops — diverge systematically from the preferences users would endorse on reflection.' The revealed-vs-stated distinction highlights that platform-shaped behaviour is not the same as reflectively endorsed preference. Option C is a precise restatement."
  },

  {
    id: 5679, section: "English",
    passage: "passage_1",
    text: "What specifically distinguishes 'persuasive technology' from ordinary individual persuasion according to the passage?",
    options: [
      "A) Persuasive technology relies exclusively on deception while individual persuasion relies on rational argument",
      "B) Individual persuasion is legally regulated while persuasive technology currently operates without any constraints",
      "C) Persuasive technology is inherently more effective per individual user than any ordinary human persuader could be",
      "D) Scale and systematicity — persuasive technology alters decision environments of hundreds of millions simultaneously, with effects continuously refined through data, while a persuasive individual reaches only dozens"
    ],
    answer: "D",
    explanation: "The passage states: 'What distinguishes this from ordinary persuasion is scale and systematicity: while a persuasive individual reaches dozens of people, a persuasive technology can alter the decision environment of hundreds of millions simultaneously, with effects calibrated through A/B testing and refined continuously.' Option D is a precise restatement."
  },

  {
    id: 5680, section: "English",
    passage: "passage_1",
    text: "The 'asymmetry of resources' described in the passage refers to:",
    options: [
      "A) Wealthy users being able to access premium ad-free versions of platforms while low-income users must use ad-supported versions",
      "B) The gap in internet connection speeds between large technology companies and individual household consumers",
      "C) The legal advantage platforms enjoy over users due to terms of service that waive all liability",
      "D) Platform companies employing thousands of engineers continuously optimising for engagement against individual users who have only their native cognitive architecture"
    ],
    answer: "B",
    explanation: "The passage states: 'the former employ thousands of engineers optimising for engagement, the latter have only their native cognitive architecture' — this resource asymmetry is used to argue conventional consent frameworks may be inadequate. Option B is a direct restatement."
  },

  {
    id: 5681, section: "English",
    passage: "passage_1",
    text: "The passage's final paragraph concludes that the attention economy raises 'legitimate questions about what autonomous choice actually means.' This conclusion is best understood as:",
    options: [
      "A) A call for immediate government regulation to ban all digital advertising",
      "B) A rejection of the idea that users have any genuine agency in their platform interactions",
      "C) A measured position acknowledging that engineered choice environments systematically misalign moment-to-moment preferences from reflective preferences, problematising the concept of autonomy in such environments",
      "D) An endorsement of the view that platforms are entirely benign and that user concerns are exaggerated"
    ],
    answer: "C",
    explanation: "The passage's final sentence states the attention economy creates 'a systematic misalignment between what individuals experience as their preferences in a given moment and the preferences they would form if the choice architecture were different — a misalignment that raises legitimate questions about what autonomous choice actually means.' This is carefully measured — it raises questions rather than demanding immediate regulation (A) or denying all agency (B). Option C captures this nuance."
  },

  // ══ PASSAGE 2: Paradox of Tolerance (Q6–Q10) ══

  {
    id: 5682, section: "English",
    passage: "passage_2",
    text: "Popper's 'paradox of tolerance' as described in the passage holds that:",
    options: [
      "A) A liberal society that tolerates all views equally will always eventually become the strongest form of democracy",
      "B) All restrictions on speech in liberal democracies are inherently self-defeating and should be abandoned",
      "C) Governments should restrict any speech that a democratic majority finds offensive or morally objectionable",
      "D) Tolerance must be willing to be intolerant of intolerance — suppressing doctrines that advocate suppression of rational discourse — or it will be destroyed by those it tolerates"
    ],
    answer: "B",
    explanation: "The passage states Popper argued 'a liberal, tolerant society... will eventually have its tolerance seized and destroyed by the intolerant' and therefore 'tolerance, if it is to survive, must be prepared to be intolerant of intolerance.' Option B is a precise restatement. Option D overstates — Popper's scope was specifically doctrines suppressing rational discourse, not majority-offensive speech."
  },

  {
    id: 5683, section: "English",
    passage: "passage_2",
    text: "According to the passage, the most common misreading of Popper's argument is that it:",
    options: [
      "A) Is applied to all speech that liberals find uncomfortable or abhorrent, when Popper's concern was specifically doctrines that seek to dismantle the procedural framework for peaceful contestation of ideas",
      "B) Is interpreted as advocating complete freedom of expression with no restrictions of any kind",
      "C) Is used to justify restrictions on scientific research that challenges established political views",
      "D) Conflates the concepts of tolerance and majority rule, treating democratic majorities as always tolerant"
    ],
    answer: "A",
    explanation: "The passage states: 'Popper did not argue for sweeping restrictions on offensive or illiberal speech — his concern was specifically with doctrines that openly advocate the suppression of rational discourse, the rule of law, and the rights of others... not to ideas liberals find uncomfortable or even abhorrent, but to those that seek to dismantle the procedural framework.' Applying it broadly to offensive speech is the misreading. Option A is precise."
  },

  {
    id: 5684, section: "English",
    passage: "passage_2",
    text: "The passage cites historical restrictions on labour movements and civil rights activists to make the point that:",
    options: [
      "A) These movements were genuinely threatening to liberal democratic order and deserved to be suppressed",
      "B) Liberal democracies have never in practice protected civil liberties and are inherently hypocritical",
      "C) The risk of false positives — incorrectly identifying tolerable dissent as threatening — demands epistemic humility in any specific application of Popper's paradox",
      "D) Popper's paradox is philosophically invalid because it has historically been misused by governments"
    ],
    answer: "C",
    explanation: "The passage states: 'This is not an argument against the paradox's validity but an argument for epistemic humility about any given application of it: the risk of false positives — suppressing genuinely tolerable dissent — is at least as serious as the risk of false negatives that Popper's paradox is invoked to address.' The examples illustrate misapplication risk, not the paradox's invalidity. Option D misreads the passage's qualification."
  },

  {
    id: 5685, section: "English",
    passage: "passage_2",
    text: "Contemporary debates about platform content moderation and deplatforming are described as 'implicitly negotiating versions of this tension.' The core tension is between:",
    options: [
      "A) Platform companies' financial interests and governments' desire to generate tax revenue from digital services",
      "B) Protecting the deliberative framework by restraining genuinely intolerant doctrines versus the risk that institutions empowered to do so become instruments of suppression themselves",
      "C) Users who demand more content moderation and advertisers who prefer unmoderated environments for reach",
      "D) International free speech norms and the domestic hate speech laws of individual countries"
    ],
    answer: "B",
    explanation: "The final paragraph asks 'whether the institutions charged with identifying and restraining the genuinely intolerant can do so with sufficient precision and accountability to avoid becoming instruments of the very closure they are designed to prevent.' This is precisely the tension — between the protective function and its potential to become what it opposes. Option C captures this."
  },

  {
    id: 5686, section: "English",
    passage: "passage_2",
    text: "The author's final conclusion about resolving the tension Popper's paradox identifies is that resolution depends primarily on:",
    options: [
      "A) The specific institutional design, procedural quality, oversight robustness, and contestability of the bodies charged with implementation",
      "B) Achieving philosophical consensus on where the exact boundary between tolerable and intolerable speech lies",
      "C) Allowing market competition between platforms to naturally determine which content moderation standards succeed",
      "D) Returning to Popper's original text to find the definitive answer he intended but expressed unclearly"
    ],
    answer: "A",
    explanation: "The passage concludes: 'That question turns less on abstract philosophical reasoning than on the specific institutional design of those charged with implementing it — on the quality of their procedures, the robustness of their oversight, and the degree to which their decisions remain contestable.' Option B is a precise restatement; A is explicitly contradicted — the passage says resolution turns LESS on philosophical reasoning."
  },

  // ══ PASSAGE 3: Urban Housing Economics (Q11–Q15) ══

  {
    id: 5687, section: "English",
    passage: "passage_3",
    text: "The passage identifies the primary cause of housing supply failing to respond to rising prices in major cities as:",
    options: [
      "A) A classic market failure caused by negative externalities from construction and new residential development",
      "B) The greed of property developers who deliberately restrict supply to maintain high prices and profit margins",
      "C) A shortage of construction workers and building materials that makes new residential development physically impossible",
      "D) Regulatory failure — zoning laws, planning restrictions, height limits, and related land use regulations that prevent conversion of land to higher-density use despite financial incentives to do so"
    ],
    answer: "C",
    explanation: "The passage explicitly states: 'The failure of housing supply to respond to price signals is not primarily a market failure in the conventional sense... It is a regulatory failure: zoning laws, planning permission requirements, height restrictions, setback rules, and a dense web of other land use regulations collectively prevent the conversion of high-value urban land from lower-density to higher-density residential use.' Option C is a precise restatement; A is explicitly contradicted."
  },

  {
    id: 5688, section: "English",
    passage: "passage_3",
    text: "According to the passage, what makes the political economy of housing restrictions distinctive?",
    options: [
      "A) The costs and benefits of housing restrictions are both concentrated in small, equally powerful interest groups that balance each other",
      "B) Housing restriction debates are unusually technical, meaning ordinary voters are unable to participate meaningfully in planning decisions",
      "C) Housing restriction debates are unusually technical, meaning ordinary voters are unable to participate meaningfully in planning decisions",
      "D) The costs are diffuse — spread across millions of renters and prospective buyers in individually small amounts — while the benefits are concentrated in a smaller, politically organised group of existing property owners"
    ],
    answer: "D",
    explanation: "The passage states: 'The costs are diffuse, felt by millions of renters and potential first-home buyers individually in small but cumulatively significant amounts, while the benefits are concentrated in a smaller group of property owners who have strong incentives to maintain the regulatory status quo.' This cost-diffuse, benefit-concentrated structure is what makes reform politically difficult. Option B is a precise restatement."
  },

  {
    id: 5689, section: "English",
    passage: "passage_3",
    text: "The term 'zoning tax' as used by Glaeser and Gyourko refers to:",
    options: [
      "A) The actual property taxes paid by homeowners in highly regulated urban areas",
      "B) The fees charged by local governments to developers who apply for planning permission",
      "C) A proposed new tax on vacant land that economists recommend to incentivise development",
      "D) The gap between market housing prices and the actual cost of constructing additional housing — representing an implicit transfer from renters and buyers to existing property owners"
    ],
    answer: "C",
    explanation: "The passage defines this directly: 'the zoning tax — the gap between market prices and the cost of actually constructing additional housing — can account for the majority of housing prices in affected cities, representing an enormous implicit transfer from renters and prospective buyers to existing property owners.' Option C is a precise restatement; A and B introduce concepts not in the passage."
  },

  {
    id: 5690, section: "English",
    passage: "passage_3",
    text: "The distributional consequences of restrictive zoning are described in the passage as 'regressive in a precise sense.' This means:",
    options: [
      "A) The costs fall most heavily as a percentage of income on lower-income households (for whom housing is a larger income share) while gains accrue disproportionately to higher-income households with more property wealth",
      "B) Restrictive zoning has negative consequences for all groups in society without exception",
      "C) Restrictive zoning causes property prices to decrease over time, harming all property owners equally",
      "D) The regulations have no distributional effects and affect all income groups proportionally"
    ],
    answer: "A",
    explanation: "The passage states: 'they impose costs as a percentage of income that fall most heavily on lower-income households, for whom housing constitutes a larger share of expenditure, while generating gains that accrue disproportionately to higher-income households, who own more property.' Regressive in the precise technical sense: proportionally more costly to the poor. Option B captures this precisely."
  },

  {
    id: 5691, section: "English",
    passage: "passage_3",
    text: "The 'irony' the passage notes about cities with progressive political cultures maintaining restrictive land use regulations is best explained as:",
    options: [
      "A) An example of deliberate hypocrisy by progressive politicians who own property and protect their own interests",
      "B) Evidence that progressive political philosophy is fundamentally incompatible with free market economic principles",
      "C) The political economy of geographically concentrated homeowner interests overwhelming the diffuse interests of renters and potential residents who have not yet arrived — not hypocrisy but a structural feature of local political organisation",
      "D) A statistical anomaly that will correct itself as younger renters eventually become homeowners and shift their political preferences"
    ],
    answer: "C",
    explanation: "The passage states 'an inconsistency that reflects not hypocrisy but the political economy of geographically concentrated homeowner interests overwhelming the diffuse interests of renters and potential residents who have not yet arrived.' The irony is structural, not intentional. Option A (hypocrisy) is explicitly rejected by the passage. Option C captures the passage's precise explanation."
  }

];
