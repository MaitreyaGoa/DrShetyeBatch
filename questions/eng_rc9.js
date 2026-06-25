// eng_rc9.js – Dr Shetye Academic Programme
// English — Reading Comprehension (CAT / IIM Level) — Test 9
// 12 Questions · IDs 5625–5636 · 12 Marks · 20 Minutes
// Passage 1: The Winner-Take-All Dynamics of Network Effects (Technology Economics)
// Passage 2: The Contested Meaning of Authenticity in Cultural Heritage (Heritage Studies)

var RC_PASSAGES = {

  "passage_1": {
    title: "Passage 1 of 2",
    label: "Read the following passage carefully and answer Questions 1–6.",
    text: `A network effect occurs when a product or service becomes more valuable to each user as additional users join the same network — a telephone is useless if no one else owns one, but becomes progressively more valuable as the number of people reachable through it grows. This structural property, present to varying degrees across communication technologies, social platforms, and certain marketplaces, generates economic dynamics fundamentally different from those governing conventional products, where consumption typically does not directly increase the value other consumers derive from the same product.

The economic consequence of strong network effects is a tendency toward 'winner-take-all' or 'winner-take-most' market structures. Once one platform in a category achieves a sufficient lead in user base, the value proposition for new users joining that platform — more potential contacts, more available content, more liquid markets — typically exceeds that of smaller competitors, creating a self-reinforcing cycle often termed positive feedback. Early advantage compounds rather than dissipates, distinguishing network-effect markets from markets where late entrants with superior products can more readily displace established incumbents through quality competition alone.

This dynamic generates two related but distinct welfare implications economists have analysed extensively. On one hand, network effects can produce substantial consumer benefits during the growth phase: as a network expands, the value delivered to existing members increases without those members needing to do anything, capturing value that would not exist under fragmented, smaller competing networks. On the other hand, once a dominant network achieves entrenchment, the same dynamic that produced consumer benefit during growth — switching costs that rise as a network's value to existing members increases — can enable supra-competitive pricing or degraded service quality, since dissatisfied users face the prospect of abandoning a network in which their accumulated connections, content, or reputation are not portable to a rival.

This tension has placed network-effect-driven companies at the centre of contemporary antitrust debate. Traditional antitrust analysis, developed substantially around manufacturing-era conceptions of market power, relies heavily on price effects as the primary indicator of consumer harm — a framework poorly suited to markets where dominant platforms frequently offer services to users at zero monetary price, financed instead through advertising revenue extracted from a separate side of the platform's two-sided market. Legal scholars including Lina Khan have argued this price-centric framework systematically underestimates harm in network-effect markets, where the relevant competitive concerns — reduced innovation incentives, exploitation of data advantages, foreclosure of potential competitors through acquisition — may manifest without any observable increase in the price charged to the platform's primary user base.

Economists more sympathetic to incumbent platforms counter that aggressive antitrust intervention risks dismantling the very network effects that generated substantial, genuine consumer value during the growth phase, and that the threat of disruptive entry — even if historically rare in mature network-effect markets — provides a meaningful, if imperfect, competitive constraint that justifies regulatory restraint. The unresolved empirical question, on which reasonable economists continue to disagree, is how frequently this disciplining threat of entry materialises in practice versus how often dominant networks, once entrenched, persist indefinitely regardless of subsequent underperformance on dimensions other than price.`
  },

  "passage_2": {
    title: "Passage 2 of 2",
    label: "Read the following passage carefully and answer Questions 7–12.",
    text: `Heritage studies scholars have increasingly questioned what initially appears to be a straightforward concept: the authenticity of a cultural site, practice, or artefact. The conventional understanding treats authenticity as a fixed, objective property — a site or practice either is or is not an accurate continuation of its historical origin — but sustained scholarly examination has revealed this apparent objectivity to dissolve under scrutiny in ways with significant practical consequences for heritage preservation policy and tourism management worldwide.

Consider the case of historical reconstruction. Many celebrated heritage sites, including substantial portions of Warsaw's Old Town (entirely rebuilt following near-total destruction in the Second World War) and Japan's Ise Grand Shrine (ritually demolished and rebuilt every twenty years for over a millennium, using traditional methods but entirely new materials each cycle), challenge any straightforward equation of authenticity with material continuity. Warsaw's Old Town is widely accepted as authentic heritage despite consisting almost entirely of post-1945 construction, while the Ise Shrine's repeated rebuilding is understood within Shinto tradition as the very mechanism through which authenticity — understood as ritual and spiritual continuity rather than physical persistence — is actively maintained rather than violated.

Anthropologist Dean MacCannell's influential concept of 'staged authenticity' identifies a further complication specific to tourism contexts: the performances, demonstrations, and experiences offered to visitors at heritage sites are frequently deliberately constructed to appear authentic and unmediated, while in fact being carefully curated, rehearsed, and adapted for the specific purpose of tourist consumption — a 'backstage' reality of production existing behind the 'frontstage' performance visitors actually witness. This need not constitute outright fraud; many staged-authentic performances involve genuine practitioners using genuine techniques, yet the performance itself is shaped by audience expectation in ways the same practice, performed outside the tourist gaze, typically would not be.

A further complication concerns whose authority determines authenticity in contested cases. UNESCO's World Heritage criteria, applied to assess nominations from member states, have been criticised by scholars for embedding implicitly Western, materially-oriented conceptions of authenticity and conservation — emphasising original fabric and minimal intervention — that sit uneasily with heritage traditions, such as the Ise Shrine's, where authenticity is understood as residing in continuity of practice, knowledge, and ritual rather than in the physical persistence of original materials. This has generated recurring friction in international heritage governance, as communities whose own authenticity frameworks differ from UNESCO's implicit standards must either adapt their practices and self-presentation to match externally imposed criteria, or risk having their heritage claims contested or rejected by an international framework that does not straightforwardly recognise the validity of alternative authenticity traditions.

The practical stakes of these debates are not merely academic: heritage status frequently determines tourism revenue, conservation funding, and legal protections, meaning that contested or denied authenticity claims carry substantial material consequences for the communities whose heritage is being assessed, adjudicated, and — in some contested cases — found wanting by criteria that may simply reflect a different culture's assumptions about what authenticity itself consists of.`
  }
};

var questions = [

  // ══ PASSAGE 1: Network Effects — Q1–Q6 (IDs 5625–5630) ══

  {
    id: 5625, section: "English",
    passage: "passage_1",
    text: "The primary purpose of the passage is to:",
    options: [
      "A) Prove that all technology companies with network effects should be immediately broken up by antitrust regulators",
      "B) Argue that traditional price-based antitrust analysis is perfectly suited to regulating all modern technology markets",
      "C) Provide a comprehensive technical history of telephone network development in the twentieth century",
      "D) Explain the mechanics of network effects and their winner-take-all dynamics, analyse the resulting welfare tension, and present the contemporary antitrust debate this tension has generated"
    ],
    answer: "D",
    explanation: "The passage defines network effects, explains the resulting winner-take-all dynamic, analyses both the consumer benefits during growth and potential harms after entrenchment, then presents both sides of the contemporary antitrust debate (Khan's critique versus incumbent-sympathetic economists). Option D captures this complete, balanced analytical arc."
  },

  {
    id: 5626, section: "English",
    passage: "passage_1",
    text: "According to the passage, what fundamentally distinguishes network-effect markets from conventional product markets?",
    options: [
      "A) In conventional markets, one consumer's use typically does not increase the value other consumers derive from the same product, whereas in network-effect markets it does",
      "B) Network-effect products are always more expensive than conventional products",
      "C) Network-effect markets are regulated by entirely different government agencies than conventional markets",
      "D) Conventional products can never achieve widespread adoption, unlike network-effect products"
    ],
    answer: "A",
    explanation: "The passage states network effects mean a product 'becomes more valuable to each user as additional users join,' explicitly contrasted with 'conventional products, where consumption typically does not directly increase the value other consumers derive from the same product.' Option B is a precise restatement of this fundamental distinction."
  },

  {
    id: 5627, section: "English",
    passage: "passage_1",
    text: "The passage describes a tension where the same dynamic producing consumer benefit during a network's growth phase can later enable harm. This tension specifically refers to:",
    options: [
      "A) Government regulation that helps networks grow but later restricts their operations entirely",
      "B) Network effects that only benefit the platform company but never benefit any users at any stage",
      "C) Rising switching costs that benefit existing members as the network grows, but later trap dissatisfied users once the network is dominant, since their accumulated value is not portable to competitors",
      "D) Advertising revenue that increases during growth but completely disappears once a network becomes dominant"
    ],
    answer: "C",
    explanation: "The passage explains: during growth, value increases for existing members 'without those members needing to do anything'; later, 'switching costs that rise as a network's value to existing members increases' can trap users whose 'accumulated connections, content, or reputation are not portable to a rival.' Option B captures this precise double-edged mechanism."
  },

  {
    id: 5628, section: "English",
    passage: "passage_1",
    text: "Why does the passage suggest traditional antitrust analysis is 'poorly suited' to many network-effect markets?",
    options: [
      "A) Traditional antitrust law has never been applied to any technology company in any jurisdiction",
      "B) Antitrust regulators lack the legal authority to investigate any company with more than one million users",
      "C) Network-effect markets are too small in total revenue to warrant any regulatory attention",
      "D) Traditional analysis relies heavily on price effects as the primary harm indicator, but many dominant platforms offer free services to users while extracting revenue from advertisers on a separate side of a two-sided market, making price-based harm difficult to observe"
    ],
    answer: "D",
    explanation: "The passage states traditional analysis 'relies heavily on price effects... a framework poorly suited to markets where dominant platforms frequently offer services to users at zero monetary price, financed instead through advertising revenue extracted from a separate side of the platform's two-sided market.' Option B is a precise restatement of this structural mismatch."
  },

  {
    id: 5629, section: "English",
    passage: "passage_1",
    text: "According to the passage, what specific concerns does Lina Khan argue are underestimated by price-centric antitrust frameworks?",
    options: [
      "A) Reduced innovation incentives, exploitation of data advantages, and foreclosure of potential competitors through acquisition",
      "B) Excessive government spending on antitrust enforcement agencies and their staff salaries",
      "C) The personal wealth accumulated by technology company founders and executives",
      "D) The environmental impact of data centres operated by dominant technology platforms"
    ],
    answer: "A",
    explanation: "The passage explicitly lists these as the concerns Khan identifies: 'reduced innovation incentives, exploitation of data advantages, foreclosure of potential competitors through acquisition — may manifest without any observable increase in the price.' Option A is a precise, direct restatement; B, C, and D introduce claims entirely absent from the passage."
  },

  {
    id: 5630, section: "English",
    passage: "passage_1",
    text: "The passage identifies an 'unresolved empirical question' in its final paragraph. This question concerns:",
    options: [
      "A) Whether network effects exist at all in any real-world market",
      "B) How frequently the disciplining threat of disruptive entry actually materialises in practice versus how often dominant networks persist indefinitely despite underperformance on non-price dimensions",
      "C) Whether antitrust law should be abolished entirely in every country",
      "D) The exact founding date of the first network-effect-driven technology company"
    ],
    answer: "B",
    explanation: "The passage states the unresolved question precisely: 'how frequently this disciplining threat of entry materialises in practice versus how often dominant networks, once entrenched, persist indefinitely regardless of subsequent underperformance.' Option B is an exact restatement of this open empirical disagreement among economists."
  },

  // ══ PASSAGE 2: Authenticity in Cultural Heritage — Q7–Q12 (IDs 5631–5636) ══

  {
    id: 5631, section: "English",
    passage: "passage_2",
    text: "The primary purpose of the passage is to:",
    options: [
      "A) Examine how scholarly examination has destabilised the conventional notion of authenticity as fixed and objective, using examples of reconstruction, staged tourism performances, and contested international heritage standards",
      "B) Argue that all historical reconstructions of heritage sites should be considered fraudulent and demolished",
      "C) Provide a complete technical manual for how to physically restore damaged heritage buildings",
      "D) Prove that UNESCO's World Heritage criteria are entirely correct and should never be questioned or revised"
    ],
    answer: "A",
    explanation: "The passage examines authenticity through multiple lenses: historical reconstruction (Warsaw, Ise Shrine), staged tourist performances (MacCannell), and contested international authority (UNESCO criteria), building toward the conclusion that authenticity is not a simple, objective property. Option B captures this complete, multi-faceted examination."
  },

  {
    id: 5632, section: "English",
    passage: "passage_2",
    text: "The example of Japan's Ise Grand Shrine is used in the passage to illustrate that:",
    options: [
      "A) All Japanese heritage sites are considered inauthentic by international standards",
      "B) Authenticity can be understood as residing in ritual and spiritual continuity of practice rather than in the physical persistence of original materials, with periodic rebuilding constituting the very mechanism through which this authenticity is maintained",
      "C) The Ise Shrine was rebuilt only once, immediately after a natural disaster destroyed the original structure",
      "D) Shinto tradition considers all forms of physical reconstruction to be a violation of religious principles"
    ],
    answer: "B",
    explanation: "The passage explains the Shrine is 'ritually demolished and rebuilt every twenty years... using traditional methods but entirely new materials,' and that this 'is understood within Shinto tradition as the very mechanism through which authenticity — understood as ritual and spiritual continuity rather than physical persistence — is actively maintained.' Option B is a precise restatement; D directly contradicts this."
  },

  {
    id: 5633, section: "English",
    passage: "passage_2",
    text: "Dean MacCannell's concept of 'staged authenticity' refers to:",
    options: [
      "A) Theatre productions that recreate historical events using professional actors rather than genuine practitioners",
      "B) A legal requirement that all heritage sites must be staged and reconstructed before receiving UNESCO recognition",
      "C) Performances and experiences at heritage sites that are deliberately constructed to appear authentic and unmediated to tourists, while in fact being carefully curated and adapted, with a 'backstage' production reality hidden from visitors",
      "D) The complete fabrication of heritage sites that never existed in any historical period"
    ],
    answer: "C",
    explanation: "The passage defines this directly: performances 'deliberately constructed to appear authentic and unmediated... while in fact being carefully curated, rehearsed, and adapted for the specific purpose of tourist consumption — a backstage reality of production existing behind the frontstage performance.' Option B is a precise restatement."
  },

  {
    id: 5634, section: "English",
    passage: "passage_2",
    text: "The passage notes that staged-authentic performances 'need not constitute outright fraud.' This is because:",
    options: [
      "A) Tourist consumption is always considered ethically acceptable regardless of how a performance is presented",
      "B) Many staged-authentic performances involve genuine practitioners using genuine techniques, even though the performance itself is shaped by audience expectations in ways it typically would not be outside the tourist context",
      "C) Fraud is legally defined as requiring financial loss, and heritage tourism rarely involves direct financial transactions",
      "D) Tourist boards have full legal authority to certify any performance as authentic regardless of its actual content"
    ],
    answer: "B",
    explanation: "The passage states explicitly: 'many staged-authentic performances involve genuine practitioners using genuine techniques, yet the performance itself is shaped by audience expectation in ways the same practice, performed outside the tourist gaze, typically would not be.' Option B is a precise restatement of this nuanced distinction between fraud and adapted-but-genuine practice."
  },

  {
    id: 5635, section: "English",
    passage: "passage_2",
    text: "According to the passage, why have UNESCO's World Heritage authenticity criteria been criticised by scholars?",
    options: [
      "A) UNESCO has never assessed any heritage site outside of Europe in its entire history",
      "B) The criteria embed implicitly Western, materially-oriented conceptions of authenticity emphasising original fabric and minimal intervention, which sit uneasily with heritage traditions where authenticity resides in continuity of practice rather than physical material persistence",
      "C) UNESCO charges excessive financial fees to communities seeking World Heritage status for their sites",
      "D) The criteria require all heritage sites to be completely demolished and rebuilt using only modern construction materials"
    ],
    answer: "B",
    explanation: "The passage states the criticism precisely: criteria 'embedding implicitly Western, materially-oriented conceptions of authenticity and conservation — emphasising original fabric and minimal intervention — that sit uneasily with heritage traditions, such as the Ise Shrine's, where authenticity is understood as residing in continuity of practice.' Option B is a precise restatement."
  },

  {
    id: 5636, section: "English",
    passage: "passage_2",
    text: "The passage's final paragraph emphasises that authenticity debates have practical, non-academic stakes primarily because:",
    options: [
      "A) Heritage status frequently determines tourism revenue, conservation funding, and legal protections, meaning contested authenticity claims carry substantial material consequences for affected communities",
      "B) Academic researchers receive significant personal financial bonuses whenever their authenticity theories are proven correct",
      "C) Heritage sites that fail to meet UNESCO authenticity criteria are immediately and permanently destroyed by government order",
      "D) All heritage communities receive identical levels of government funding regardless of their authenticity status"
    ],
    answer: "A",
    explanation: "The passage states this directly: 'heritage status frequently determines tourism revenue, conservation funding, and legal protections, meaning that contested or denied authenticity claims carry substantial material consequences for the communities.' Option A is a precise restatement of why these debates matter beyond pure academic interest."
  }

];
