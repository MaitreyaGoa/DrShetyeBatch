// eng_rc4.js – Dr Shetye Academic Programme
// English — Reading Comprehension (CAT / IIM Level) — Test 4
// 12 Questions · IDs 5513–5524 · 12 Marks · 20 Minutes
// Passage 1: The Backfire Effect and Belief Persistence (Cognitive Psychology)
// Passage 2: The Economics of Urban Density (Urban Planning / Economics)

var RC_PASSAGES = {

  "passage_1": {
    title: "Passage 1 of 2",
    label: "Read the following passage carefully and answer Questions 1–6.",
    text: `In 2006, political scientists Brendan Nyhan and Jason Reifler published a study with an unsettling implication for anyone who believes that correcting misinformation is simply a matter of presenting accurate facts. Their experiment exposed participants to false claims — for instance, that Iraq possessed weapons of mass destruction prior to the 2003 invasion — followed by a clear factual correction. For most participants, the correction worked as expected, reducing belief in the false claim. But for a subset of participants who held strong prior ideological commitments aligned with the false claim, something stranger occurred: their belief in the misinformation became more entrenched, not less. Nyhan and Reifler termed this the 'backfire effect.'

The proposed mechanism draws on a broader psychological phenomenon known as motivated reasoning. Unlike a scientist updating a hypothesis in light of new evidence, motivated reasoners process information asymmetrically: evidence consistent with their existing beliefs is accepted with minimal scrutiny, while contradictory evidence triggers active counter-arguing. When confronted with a correction that threatens an identity-relevant belief, the mind does not passively register the new information — it mobilises cognitive resources to defend the threatened belief, generating counter-arguments that can leave the person more confident than before the correction was presented.

For over a decade, the backfire effect became a fixture of public discourse about misinformation, frequently cited to explain the apparent futility of fact-checking in polarised political environments. It offered a tidy, if dispiriting, explanation for why corrections so often seemed to fail.

More recent and methodologically rigorous replication attempts have complicated this picture substantially. A large-scale study led by Thomas Wood and Ethan Porter in 2019, testing 52 different factual claims across a much larger and more representative sample, found that corrections reduced false beliefs in the vast majority of cases — and crucially, found no evidence of the backfire effect occurring with any reliability. Subsequent meta-analyses have suggested that the original backfire effect, while not entirely fictitious, was likely an artefact of small sample sizes, specific question framing, and a research environment that, in the 2000s, was more prone to reporting surprising positive results than null findings — a bias since labelled the 'replication crisis' in psychology more broadly.

This does not mean correcting misinformation is straightforward. Corrections do appear to be less effective — though rarely counterproductive — when they challenge beliefs central to a person's political or social identity. But the lesson of the backfire effect's own scientific history may be more instructive than the original finding: a single striking study, however widely cited, is not evidence of a robust phenomenon until it survives sustained attempts at replication.`
  },

  "passage_2": {
    title: "Passage 2 of 2",
    label: "Read the following passage carefully and answer Questions 7–12.",
    text: `Urban economists have long observed a puzzling asymmetry in how cities are regulated: dense, walkable neighbourhoods consistently command higher property values per square foot than sprawling, low-density alternatives, yet zoning codes in most cities continue to mandate exactly the kind of low-density development that markets seem to undervalue relative to its alternative. This tension sits at the heart of what economist William Fischel has called the 'homevoter hypothesis' — the observation that existing homeowners, who vote in local elections at far higher rates than renters or future residents, have strong incentives to restrict new construction that might alter neighbourhood character, even when such restriction reduces aggregate economic welfare.

The mechanism is straightforward game theory. A homeowner's primary asset is typically their house, and the value of that asset is acutely sensitive to local amenities, school quality, and perceived neighbourhood exclusivity. New high-density construction, even when it would house people who currently commute long distances to access the same neighbourhood's job opportunities, threatens to alter these amenities — more traffic, more demand on local schools, a perceived change in neighbourhood character. The homeowner, rationally pursuing their individual interest, opposes the development. Multiplied across thousands of homeowners in thousands of neighbourhoods, individually rational opposition aggregates into a systematic undersupply of housing in the metropolitan areas with the strongest job markets.

The economic costs of this undersupply are not abstract. Research by economists Chang-Tai Hsieh and Enrico Moretti estimated that housing constraints in a small number of highly productive American cities — primarily New York, San Francisco, and San Jose — depressed US GDP growth by several percentage points over recent decades, as workers who would have been more productively employed in these high-wage labour markets were instead priced out into lower-productivity regions. The mechanism is intuitive: when housing supply cannot expand to meet demand for access to high-productivity job clusters, prices rise rather than quantities, and labour misallocates toward cheaper but less productive locations.

Proposed remedies have generated their own controversies. 'Upzoning' — relaxing density restrictions to allow more units per lot — faces fierce local political resistance precisely because of the homevoter dynamic the policy is designed to override. State-level pre-emption of local zoning authority, attempted with mixed success in California and several other states, raises separate questions about the appropriate balance between local self-governance and addressing externalities that spill well beyond municipal boundaries — a worker priced out of San Francisco by restrictive zoning does not only harm themselves; they impose a cost on the national economy that no individual municipality is incentivised to internalise.`
  }
};

var questions = [

  // ══ PASSAGE 1: Backfire Effect — Q1–Q6 (IDs 5513–5518) ══

  {
    id: 5513, section: "English",
    passage: "passage_1",
    text: "The primary purpose of the passage is to:",
    options: [
      "A) Prove conclusively that fact-checking has no effect on political polarisation",
      "B) Argue that Nyhan and Reifler's original 2006 study was fraudulent",
      "C) Trace the rise and subsequent empirical challenge to the 'backfire effect' as a case study in the importance of replication in psychological science",
      "D) Provide a comprehensive history of misinformation research since 2000"
    ],
    answer: "C",
    explanation: "The passage introduces the backfire effect, explains its mechanism and influence, then presents Wood and Porter's large-scale replication that found no reliable backfire effect, concluding with a broader lesson about replication in science. Option B captures this full arc. Option C is not supported (no fraud is alleged); D overstates the scope."
  },

  {
    id: 5514, section: "English",
    passage: "passage_1",
    text: "According to the passage, what distinguishes 'motivated reasoning' from the reasoning process of 'a scientist updating a hypothesis'?",
    options: [
      "A) Motivated reasoners process confirming and disconfirming evidence asymmetrically, while scientists are expected to weigh evidence consistently regardless of its conclusion",
      "B) Scientists never change their minds when presented with new evidence",
      "C) Motivated reasoning only occurs in political contexts, while scientific reasoning occurs in all other domains",
      "D) Scientists rely exclusively on intuition, while motivated reasoners rely exclusively on data"
    ],
    answer: "A",
    explanation: "The passage states motivated reasoners 'process information asymmetrically: evidence consistent with their existing beliefs is accepted with minimal scrutiny, while contradictory evidence triggers active counter-arguing.' This is explicitly contrasted with the implied standard of a scientist who updates based on evidence regardless of its directional implications. Option A captures this asymmetry precisely."
  },

  {
    id: 5515, section: "English",
    passage: "passage_1",
    text: "The phrase 'a tidy, if dispiriting, explanation' suggests the author's attitude toward the backfire effect's popularity in public discourse was:",
    options: [
      "A) The author found the explanation scientifically rigorous and beyond question",
      "B) The author recognised the explanation's neat, satisfying narrative quality while implicitly signalling later doubt about its validity",
      "C) The author believed the explanation was deliberately fabricated to mislead the public",
      "D) The author was entirely indifferent to whether the explanation was correct"
    ],
    answer: "B",
    explanation: "'Tidy' suggests neatness and narrative appeal — the explanation fit conveniently into existing discourse about polarisation. 'Dispiriting' acknowledges its pessimistic implication. Together, the phrase subtly foreshadows the passage's later revelation that this neat explanation did not hold up under rigorous replication. Option B captures this foreshadowing function — recognition of appeal combined with implicit skepticism."
  },

  {
    id: 5516, section: "English",
    passage: "passage_1",
    text: "Which of the following best explains why the Wood and Porter (2019) study is described as more 'methodologically rigorous' than the original Nyhan and Reifler study?",
    options: [
      "A) It was published in a more prestigious academic journal",
      "B) It was conducted by economists rather than political scientists",
      "C) It used qualitative interviews instead of quantitative surveys",
      "D) It tested a much larger number of claims across a larger and more representative sample, rather than relying on a narrower original setup"
    ],
    answer: "D",
    explanation: "The passage explicitly states Wood and Porter's study tested '52 different factual claims across a much larger and more representative sample.' This scale and representativeness is the basis for describing it as more methodologically rigorous. Options A, C, and D introduce details not present in the passage."
  },

  {
    id: 5517, section: "English",
    passage: "passage_1",
    text: "The author's reference to the 'replication crisis in psychology' serves to:",
    options: [
      "A) Suggest that all psychological research conducted before 2010 should be disregarded entirely",
      "B) Contextualise the backfire effect's likely origins as one instance of a broader, recognised pattern of unreliable early findings in the field",
      "C) Argue that psychology should no longer be considered a scientific discipline",
      "D) Claim that the replication crisis was caused entirely by the backfire effect study"
    ],
    answer: "B",
    explanation: "The passage frames the backfire effect as 'likely an artefact of small sample sizes, specific question framing, and a research environment... more prone to reporting surprising positive results' — and explicitly names this broader pattern 'the replication crisis.' The backfire effect is presented as one example within this larger phenomenon, not its cause (D) or grounds for dismissing the entire field (A, C)."
  },

  {
    id: 5518, section: "English",
    passage: "passage_1",
    text: "The final paragraph's claim that 'a single striking study... is not evidence of a robust phenomenon until it survives sustained attempts at replication' functions primarily as:",
    options: [
      "A) A specific criticism aimed only at Nyhan and Reifler personally",
      "B) A general epistemological lesson drawn from the specific case history just described, applicable beyond the backfire effect itself",
      "C) A claim that no psychological study should ever be published before replication",
      "D) An argument that misinformation correction is impossible to study scientifically"
    ],
    answer: "B",
    explanation: "The sentence begins 'the lesson of the backfire effect's own scientific history may be more instructive than the original finding' — explicitly signalling a generalisation beyond the specific case. The principle (replication matters more than a single striking result) is presented as a broader methodological lesson, not a personal attack (A) or a categorical publishing rule (C)."
  },

  // ══ PASSAGE 2: Economics of Urban Density — Q7–Q12 (IDs 5519–5524) ══

  {
    id: 5519, section: "English",
    passage: "passage_2",
    text: "The 'homevoter hypothesis' as described in the passage refers to:",
    options: [
      "A) The observation that homeowners, who vote disproportionately in local elections, have individual incentives to restrict new construction even when this reduces overall economic welfare",
      "B) The claim that renters vote at higher rates than homeowners in local elections",
      "C) A government policy that requires all voters to own homes before participating in local elections",
      "D) The theory that house prices always rise faster than rental prices in growing cities"
    ],
    answer: "A",
    explanation: "The passage defines this directly: 'existing homeowners, who vote in local elections at far higher rates than renters or future residents, have strong incentives to restrict new construction... even when such restriction reduces aggregate economic welfare.' Option B is a precise restatement. Option A inverts the relationship; C and D introduce claims absent from the passage."
  },

  {
    id: 5520, section: "English",
    passage: "passage_2",
    text: "According to the passage, why does an individual homeowner rationally oppose new high-density construction nearby, even if it might benefit the broader region economically?",
    options: [
      "A) Homeowners are generally unaware that new construction exists",
      "B) Local laws legally prohibit homeowners from supporting new construction projects",
      "C) The homeowner's house is their primary financial asset, and its value is sensitive to local amenities and neighbourhood character that new dense development may alter",
      "D) Homeowners receive direct financial payments from real estate developers to oppose new projects"
    ],
    answer: "C",
    explanation: "The passage states: 'A homeowner's primary asset is typically their house, and the value of that asset is acutely sensitive to local amenities, school quality, and perceived neighbourhood exclusivity.' New construction threatens these amenities, giving the homeowner a rational, self-interested reason to oppose it. Option B captures this mechanism precisely; C and D are unsupported fabrications."
  },

  {
    id: 5521, section: "English",
    passage: "passage_2",
    text: "The research by Hsieh and Moretti is cited in the passage primarily to:",
    options: [
      "A) Show that San Francisco and New York have the highest population densities in the United States",
      "B) Argue that all cities should immediately abolish zoning laws without exception",
      "C) Demonstrate that housing prices in San Jose are higher than in any other American city",
      "D) Provide empirical, quantitative evidence that housing supply constraints in highly productive cities have measurably depressed national economic growth"
    ],
    answer: "D",
    explanation: "The passage states their research 'estimated that housing constraints in a small number of highly productive American cities... depressed US GDP growth by several percentage points,' directly linking restricted housing supply to misallocated labour and reduced productivity. This is empirical evidence supporting the passage's broader argument. Option B captures this function; A, C, and D introduce unsupported claims."
  },

  {
    id: 5522, section: "English",
    passage: "passage_2",
    text: "The phrase 'prices rise rather than quantities' in the third paragraph refers to which economic mechanism?",
    options: [
      "A) When housing supply is constrained and cannot expand to meet rising demand, the imbalance is resolved through higher prices rather than more housing units being built",
      "B) Housing prices in cities always rise faster than the general rate of inflation",
      "C) Builders intentionally raise prices to discourage low-income residents from moving to a city",
      "D) Government price controls cause artificial increases in the number of housing units"
    ],
    answer: "A",
    explanation: "This is a standard supply-and-demand mechanism: when supply (quantity) cannot adjust upward due to zoning constraints, increased demand manifests entirely as higher prices instead of more units being constructed. The sentence follows directly from the discussion of constrained housing supply in high-demand cities. Option A captures this economic logic precisely."
  },

  {
    id: 5523, section: "English",
    passage: "passage_2",
    text: "The author's description of state-level pre-emption of local zoning as raising 'separate questions about the appropriate balance between local self-governance and addressing externalities' suggests that:",
    options: [
      "A) The author believes state governments should never have any authority over local zoning decisions",
      "B) The author believes externalities are not a real economic phenomenon",
      "C) The author argues that local self-governance is always more important than addressing externalities",
      "D) The author recognises a genuine tension between respecting local democratic control and addressing costs that extend beyond any single municipality's boundaries"
    ],
    answer: "D",
    explanation: "The phrase explicitly frames this as a tension to be balanced, not a question with an obvious answer favouring either side. The subsequent sentence explains the externality concern (a worker priced out 'imposes a cost on the national economy that no individual municipality is incentivised to internalise') without dismissing the value of local self-governance. Option B captures this balanced framing; A and D both overstate the author's position in one direction."
  },

  {
    id: 5524, section: "English",
    passage: "passage_2",
    text: "Which of the following, if true, would most directly support the passage's central argument about zoning and housing undersupply?",
    options: [
      "A) A study finds that cities with the strictest zoning restrictions also have the highest average commute times and housing costs relative to income",
      "B) A survey shows that most homeowners are satisfied with their current neighbourhood's level of density",
      "C) Data shows that rural areas have lower housing costs than urban areas",
      "D) Research finds that homeowners and renters vote at identical rates in local elections"
    ],
    answer: "A",
    explanation: "The passage's central argument is that restrictive zoning, driven by homevoter incentives, creates housing undersupply with real economic costs (higher prices, longer commutes as workers are pushed to cheaper but farther locations). Option A provides direct empirical support for exactly this causal chain. Option D would actually undermine the homevoter hypothesis (which depends on differential voting rates); B and C are not directly relevant to the zoning-undersupply mechanism."
  }

];
